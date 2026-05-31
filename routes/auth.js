const express  = require('express');
const bcrypt   = require('bcryptjs');
const jwt      = require('jsonwebtoken');
const pool     = require('../config/db');
const auth     = require('../middleware/auth');

const router = express.Router();

/* ══════════════════════════════════════════════
   POST /api/auth/register
   Daftarkan akun baru
   Body: { nama, email, password }
══════════════════════════════════════════════ */
router.post('/register', async (req, res) => {
  const { nama, email, password } = req.body;

  /* ─── Validasi input ─── */
  if (!nama || !email || !password) {
    return res.status(400).json({ error: 'Nama, email, dan password wajib diisi.' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password minimal 6 karakter.' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Format email tidak valid.' });
  }

  try {
    /* ─── Cek email sudah ada ─── */
    const cekEmail = await pool.query(
      'SELECT id FROM users WHERE email = $1',
      [email.toLowerCase().trim()]
    );
    if (cekEmail.rows.length > 0) {
      return res.status(409).json({ error: 'Email sudah terdaftar.' });
    }

    /* ─── Hash password ─── */
    const passwordHash = await bcrypt.hash(password, 12);

    /* ─── Buat inisial dari nama ─── */
    const inisial = nama
      .trim()
      .split(' ')
      .map(w => w[0] || '')
      .join('')
      .toUpperCase()
      .slice(0, 2);

    /* ─── Simpan user baru ─── */
    const result = await pool.query(
      `INSERT INTO users (nama, email, password_hash, inisial, role)
       VALUES ($1, $2, $3, $4, 'user')
       RETURNING id, nama, email, inisial, role, created_at`,
      [nama.trim(), email.toLowerCase().trim(), passwordHash, inisial]
    );

    const user = result.rows[0];

    /* ─── Buat JWT token ─── */
    const token = jwt.sign(
      { id: user.id, nama: user.nama, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(201).json({
      message: 'Registrasi berhasil!',
      token,
      user: {
        id:      user.id,
        nama:    user.nama,
        email:   user.email,
        inisial: user.inisial,
        role:    user.role
      }
    });

  } catch (err) {
    console.error('Register error:', err.message);
    return res.status(500).json({ error: 'Terjadi kesalahan server.' });
  }
});


/* ══════════════════════════════════════════════
   POST /api/auth/login
   Login dengan email dan password
   Body: { email, password }
══════════════════════════════════════════════ */
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email dan password wajib diisi.' });
  }

  try {
    /* ─── Cari user berdasarkan email ─── */
    const result = await pool.query(
      'SELECT id, nama, email, inisial, role, password_hash FROM users WHERE email = $1',
      [email.toLowerCase().trim()]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Email atau password salah.' });
    }

    const user = result.rows[0];

    /* ─── Verifikasi password ─── */
    const passwordValid = await bcrypt.compare(password, user.password_hash);
    if (!passwordValid) {
      return res.status(401).json({ error: 'Email atau password salah.' });
    }

    /* ─── Update last_login ─── */
    await pool.query(
      'UPDATE users SET last_login = NOW() WHERE id = $1',
      [user.id]
    );

    /* ─── Buat JWT token ─── */
    const token = jwt.sign(
      { id: user.id, nama: user.nama, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(200).json({
      message: 'Login berhasil!',
      token,
      user: {
        id:      user.id,
        nama:    user.nama,
        email:   user.email,
        inisial: user.inisial,
        role:    user.role
      }
    });

  } catch (err) {
    console.error('Login error:', err.message);
    return res.status(500).json({ error: 'Terjadi kesalahan server.' });
  }
});


/* ══════════════════════════════════════════════
   GET /api/auth/me
   Ambil data user yang sedang login
   Header: Authorization: Bearer <token>
══════════════════════════════════════════════ */
router.get('/me', auth, async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT id, nama, email, inisial, role, last_login, created_at FROM users WHERE id = $1',
      [req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User tidak ditemukan.' });
    }

    return res.status(200).json({ user: result.rows[0] });

  } catch (err) {
    console.error('Me error:', err.message);
    return res.status(500).json({ error: 'Terjadi kesalahan server.' });
  }
});

module.exports = router;
