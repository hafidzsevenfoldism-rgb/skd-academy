const express = require('express');
const crypto  = require('crypto');
const pool    = require('../config/db');
const auth    = require('../middleware/auth');

const router = express.Router();

/* ══════════════════════════════════════════════
   POST /api/payment/create
   Buat transaksi + call Midtrans Snap → return redirect_url
   Body: { tryout_id }
══════════════════════════════════════════════ */
router.post('/create', auth, async (req, res) => {
  const { tryout_id } = req.body;
  const user_id = req.user.id;

  if (!tryout_id) {
    return res.status(400).json({ error: 'tryout_id wajib diisi.' });
  }

  try {
    const paket = await pool.query(
      'SELECT tryout_id, nama_paket, harga FROM paket_tryout WHERE tryout_id = $1 AND is_aktif = TRUE',
      [tryout_id]
    );

    if (paket.rows.length === 0) {
      return res.status(404).json({ error: 'Paket tryout tidak ditemukan atau tidak aktif.' });
    }

    const { nama_paket, harga } = paket.rows[0];

    if (harga <= 0) {
      return res.status(400).json({ error: 'Paket ini gratis. Gunakan API beli langsung.' });
    }

    const sudahBeli = await pool.query(
      'SELECT id FROM tryout_dibeli WHERE user_id = $1 AND tryout_id = $2',
      [user_id, tryout_id]
    );
    if (sudahBeli.rows.length > 0) {
      return res.status(400).json({ error: 'Try out sudah kamu miliki.' });
    }

    /* Cegah double klik: tolak jika ada transaksi PENDING yang belum expired */
    const pendingTxn = await pool.query(
      `SELECT id, invoice_number FROM transactions
       WHERE user_id = $1 AND tryout_id = $2
         AND status = 'PENDING'
         AND (expires_at IS NULL OR expires_at > NOW())`,
      [user_id, tryout_id]
    );
    if (pendingTxn.rows.length > 0) {
      return res.status(400).json({
        error: 'Kamu sudah memiliki pembayaran yang tertunda. Selesaikan pembayaran sebelumnya.',
        existing_invoice: pendingTxn.rows[0].invoice_number
      });
    }

    const invoiceNumber = 'SKD-' + Date.now() + '-' + tryout_id;

    const user = await pool.query(
      'SELECT nama, email FROM users WHERE id = $1',
      [user_id]
    );

    const customer = {
      name: user.rows[0].nama,
      email: user.rows[0].email
    };

    const frontendUrl = process.env.FRONTEND_URL || 'https://hafidzsevenfoldism-rgb.github.io/skd-academy';

    const serverKey = process.env.MIDTRANS_SERVER_KEY;
    if (!serverKey) {
      return res.status(500).json({ error: 'MIDTRANS_SERVER_KEY tidak diatur.' });
    }

    const isProduction = process.env.MIDTRANS_IS_PRODUCTION === 'true';
    const snapUrl = isProduction
      ? 'https://app.midtrans.com/snap/v1/transactions'
      : 'https://app.sandbox.midtrans.com/snap/v1/transactions';

    const authHeader = 'Basic ' + Buffer.from(serverKey + ':').toString('base64');

    const snapBody = {
      transaction_details: {
        order_id: invoiceNumber,
        gross_amount: harga
      },
      customer_details: {
        first_name: customer.name,
        email: customer.email
      },
      callbacks: {
        finish: frontendUrl + '/payment-result.html'
      }
    };

    const snapRes = await fetch(snapUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(snapBody)
    });

    const snapData = await snapRes.json();

    if (!snapRes.ok) {
      throw new Error(snapData.error_message || 'Gagal membuat pembayaran Midtrans');
    }

    await pool.query(
      `INSERT INTO transactions (user_id, tryout_id, invoice_number, amount, status, midtrans_ref, expires_at)
       VALUES ($1, $2, $3, $4, 'PENDING', $5,
               NOW() + INTERVAL '60 minutes')`,
      [user_id, tryout_id, invoiceNumber, harga, snapData.token]
    );

    return res.status(200).json({
      invoice_number: invoiceNumber,
      payment_url: snapData.redirect_url,
      amount: harga
    });

  } catch (err) {
    console.error('Payment create error:', err.message);
    return res.status(500).json({ error: err.message || 'Gagal memproses pembayaran.' });
  }
});

/* ══════════════════════════════════════════════
   POST /api/payment/notification
   Webhook dari Midtrans — verifikasi signature, update status
══════════════════════════════════════════════ */
router.post('/notification', async (req, res) => {
  try {
    const notification = req.body;
    const orderId = notification.order_id;
    const transactionStatus = notification.transaction_status;
    const statusCode = notification.status_code;
    const grossAmount = notification.gross_amount;
    const signatureKey = notification.signature_key;

    if (!orderId || !transactionStatus) {
      return res.status(400).json({ error: 'Data notifikasi tidak lengkap.' });
    }

    const serverKey = process.env.MIDTRANS_SERVER_KEY;
    const hash = crypto.createHash('sha512')
      .update(orderId + statusCode + grossAmount + serverKey)
      .digest('hex');

    if (hash !== signatureKey) {
      console.error('Midtrans notification signature mismatch');
      return res.status(401).json({ error: 'Invalid signature' });
    }

    let status = 'PENDING';
    if (transactionStatus === 'capture' || transactionStatus === 'settlement') {
      status = 'PAID';
    } else if (transactionStatus === 'deny' || transactionStatus === 'cancel') {
      status = 'FAILED';
    } else if (transactionStatus === 'expire') {
      status = 'EXPIRED';
    }

    const tx = await pool.query(
      'SELECT id, status FROM transactions WHERE invoice_number = $1',
      [orderId]
    );

    if (tx.rows.length === 0) {
      return res.status(404).json({ error: 'Transaksi tidak ditemukan.' });
    }

    if (tx.rows[0].status === 'PAID') {
      return res.status(200).json({ message: 'Already processed.' });
    }

    const paymentMethod = notification.payment_type || null;

    if (status === 'PAID') {
      await pool.query('BEGIN');

      await pool.query(
        `UPDATE transactions
         SET status = $1, midtrans_ref = COALESCE(midtrans_ref, $2), paid_at = NOW(),
             payment_method = $3
         WHERE invoice_number = $4`,
        [status, notification.transaction_id || null, paymentMethod, orderId]
      );

      const txn = await pool.query(
        'SELECT user_id, tryout_id FROM transactions WHERE invoice_number = $1',
        [orderId]
      );

      if (txn.rows.length > 0) {
        const { user_id, tryout_id } = txn.rows[0];

        const sudahBeli = await pool.query(
          'SELECT id FROM tryout_dibeli WHERE user_id = $1 AND tryout_id = $2',
          [user_id, tryout_id]
        );
        if (sudahBeli.rows.length === 0) {
          const paket = await pool.query(
            'SELECT nama_paket FROM paket_tryout WHERE tryout_id = $1',
            [tryout_id]
          );
          await pool.query(
            `INSERT INTO tryout_dibeli (user_id, tryout_id, nama_paket, harga)
             VALUES ($1, $2, $3, $4)`,
            [user_id, tryout_id, paket.rows[0].nama_paket, notification.gross_amount || 0]
          );
        }
      }

      await pool.query('COMMIT');
    } else {
      await pool.query(
        'UPDATE transactions SET status = $1, payment_method = $2 WHERE invoice_number = $3',
        [status, paymentMethod, orderId]
      );
    }

    return res.status(200).json({ message: 'OK' });

  } catch (err) {
    await pool.query('ROLLBACK').catch(function () {});
    console.error('Payment notification error:', err.message);
    return res.status(500).json({ error: 'Terjadi kesalahan.' });
  }
});

/* ══════════════════════════════════════════════
   GET /api/payment/status/:invoiceNumber
   Cek status transaksi
══════════════════════════════════════════════ */
router.get('/status/:invoiceNumber', auth, async (req, res) => {
  const { invoiceNumber } = req.params;
  const user_id = req.user.id;

  try {
    const result = await pool.query(
      'SELECT invoice_number, amount, status, payment_method, paid_at, created_at FROM transactions WHERE invoice_number = $1 AND user_id = $2',
      [invoiceNumber, user_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Transaksi tidak ditemukan.' });
    }

    return res.status(200).json({ transaction: result.rows[0] });
  } catch (err) {
    console.error('Payment status error:', err.message);
    return res.status(500).json({ error: 'Terjadi kesalahan.' });
  }
});

module.exports = router;
