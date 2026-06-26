const express = require('express');
const crypto  = require('crypto');
const pool    = require('../config/db');
const { createPayment, generateDigest, generateSignature } = require('../config/doku');
const auth    = require('../middleware/auth');

const router = express.Router();

/* ══════════════════════════════════════════════
   POST /api/payment/create
   Buat transaksi + call DOKU → return payment.url
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

    const invoiceNumber = 'SKD-' + Date.now() + '-' + tryout_id;

    const user = await pool.query(
      'SELECT nama, email FROM users WHERE id = $1',
      [user_id]
    );

    const customer = {
      name: user.rows[0].nama,
      email: user.rows[0].email
    };

    const dokuResult = await createPayment(invoiceNumber, harga, customer);

    await pool.query(
      `INSERT INTO transactions (user_id, tryout_id, invoice_number, amount, status, expires_at)
       VALUES ($1, $2, $3, $4, 'PENDING',
               NOW() + INTERVAL '60 minutes')`,
      [user_id, tryout_id, invoiceNumber, harga]
    );

    return res.status(200).json({
      invoice_number: invoiceNumber,
      payment_url: dokuResult.paymentUrl,
      amount: harga
    });

  } catch (err) {
    console.error('Payment create error:', err.message);
    return res.status(500).json({ error: err.message || 'Gagal memproses pembayaran.' });
  }
});

/* ══════════════════════════════════════════════
   POST /api/payment/notification
   Webhook dari DOKU — verifikasi signature, update status
══════════════════════════════════════════════ */
router.post('/notification', async (req, res) => {
  try {
    const notification = req.body;
    const rawBody = JSON.stringify(notification);
    const invoiceNumber = notification.order && notification.order.invoice_number;

    if (!invoiceNumber) {
      return res.status(400).json({ error: 'invoice_number tidak ditemukan.' });
    }

    const clientId = process.env.DOKU_CLIENT_ID;
    const secret   = process.env.DOKU_SECRET_KEY;

    const requestId      = req.headers['request-id'];
    const requestTimestamp = req.headers['request-timestamp'];
    const requestTarget  = '/api/payment/notification';
    const signatureHeader  = req.headers['signature'] || '';

    if (clientId && secret && requestId && requestTimestamp) {
      const digest = generateDigest(rawBody);
      const expectedSig = generateSignature(
        clientId, requestId, requestTimestamp, requestTarget, digest, secret
      );

      const expectedToken = expectedSig.replace('HMACSHA256=', '');
      const receivedToken = signatureHeader.replace('HMACSHA256=', '');

      if (expectedToken !== receivedToken) {
        console.error('DOKU notification signature mismatch');
        return res.status(401).json({ error: 'Invalid signature' });
      }
    }

    const transactionStatus = notification.transaction && notification.transaction.status;
    const dokuRef = notification.transaction && (notification.transaction.id || notification.transaction.reference_id);

    let status = 'PENDING';
    if (transactionStatus === 'SUCCESS' || transactionStatus === 'PAYMENT_SUCCESS') {
      status = 'PAID';
    } else if (transactionStatus === 'FAILED') {
      status = 'FAILED';
    } else if (transactionStatus === 'EXPIRED') {
      status = 'EXPIRED';
    }

    const tx = await pool.query(
      'SELECT id, status FROM transactions WHERE invoice_number = $1',
      [invoiceNumber]
    );

    if (tx.rows.length === 0) {
      return res.status(404).json({ error: 'Transaksi tidak ditemukan.' });
    }

    if (tx.rows[0].status === 'PAID') {
      return res.status(200).json({ message: 'Already processed.' });
    }

    if (status === 'PAID') {
      await pool.query('BEGIN');

      await pool.query(
        `UPDATE transactions
         SET status = $1, doku_ref = $2, paid_at = NOW(),
             payment_method = $3
         WHERE invoice_number = $4`,
        [status, dokuRef, notification.payment_channel || null, invoiceNumber]
      );

      const txn = await pool.query(
        'SELECT user_id, tryout_id FROM transactions WHERE invoice_number = $1',
        [invoiceNumber]
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
            [user_id, tryout_id, paket.rows[0].nama_paket, notification.order.amount || 0]
          );
        }
      }

      await pool.query('COMMIT');
    } else {
      await pool.query(
        'UPDATE transactions SET status = $1, doku_ref = $2 WHERE invoice_number = $3',
        [status, dokuRef || null, invoiceNumber]
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
