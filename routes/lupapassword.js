const express = require('express');
const bcrypt  = require('bcryptjs');
const crypto  = require('crypto');
const pool    = require('../config/db');
const { kirimEmailReset } = require('../config/mail');

const router = express.Router();

/* ══════════════════════════════════════════════
   POST /api/auth/lupa-password
   Kirim link reset ke email user
   Body: { email }
══════════════════════════════════════════════ */
router.post('/lupa-password', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email wajib diisi.' });
  }

  // Always respond same message — no email enumeration
  const msg = 'Jika email terdaftar, link reset password sudah dikirim.';

  try {
    const result = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email.toLowerCase().trim()]
    );

    if (result.rows.length > 0) {
      const userId = result.rows[0].id;
      const token  = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 jam

      await pool.query(
        `INSERT INTO reset_tokens (user_id, token, expires_at)
         VALUES ($1, $2, $3)`,
        [userId, token, expiresAt]
      );

      await kirimEmailReset(email, token).catch(function (err) {
        console.error('Gagal kirim email reset:', err.message);
      });
    }

    return res.status(200).json({ message: msg });

  } catch (err) {
    console.error('Lupa password error:', err.message);
    return res.status(500).json({ error: 'Terjadi kesalahan server.' });
  }
});

/* ══════════════════════════════════════════════
   POST /api/auth/reset-password
   Reset password dengan token
   Body: { token, password }
══════════════════════════════════════════════ */
router.post('/reset-password', async (req, res) => {
  const { token, password } = req.body;

  if (!token || !password) {
    return res.status(400).json({ error: 'Token dan password baru wajib diisi.' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password minimal 6 karakter.' });
  }

  try {
    const result = await pool.query(
      `SELECT id, user_id, expires_at
       FROM reset_tokens
       WHERE token = $1 AND used = FALSE AND expires_at > NOW()`,
      [token]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ error: 'Token tidak valid atau sudah kedaluwarsa.' });
    }

    const tokenRow = result.rows[0];
    const passwordHash = await bcrypt.hash(password, 12);

    await pool.query('BEGIN');

    await pool.query(
      'UPDATE users SET password_hash = $1 WHERE id = $2',
      [passwordHash, tokenRow.user_id]
    );

    await pool.query(
      'UPDATE reset_tokens SET used = TRUE WHERE id = $1',
      [tokenRow.id]
    );

    await pool.query('COMMIT');

    return res.status(200).json({ message: 'Password berhasil direset. Silakan login.' });

  } catch (err) {
    await pool.query('ROLLBACK').catch(function () {});
    console.error('Reset password error:', err.message);
    return res.status(500).json({ error: 'Terjadi kesalahan server.' });
  }
});

module.exports = router;
