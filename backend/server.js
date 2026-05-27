require('dotenv').config();

const express   = require('express');
const cors      = require('cors');
const rateLimit = require('express-rate-limit');

const authRoutes   = require('./routes/auth');
const tryoutRoutes = require('./routes/tryout');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ══════════════════════════════
   CORS — izinkan semua origin lokal
══════════════════════════════ */
app.use(cors({
  origin: [
    'http://127.0.0.1:5500',   // Live Server VS Code
    'http://localhost:5500',
    'http://127.0.0.1:5501',
    'http://localhost:5501',
    'http://localhost:3000',
    'null'                      // file:// langsung dibuka di browser
  ],
  methods:        ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:    true
}));

/* ══════════════════════════════
   BODY PARSER
══════════════════════════════ */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ══════════════════════════════
   RATE LIMITER (lebih longgar untuk lokal)
══════════════════════════════ */
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Terlalu banyak percobaan.' }
});

/* ══════════════════════════════
   ROUTES
══════════════════════════════ */
app.get('/', (req, res) => {
  res.json({
    status:  'OK',
    message: 'SKD Academy API berjalan ✓',
    mode:    'LOCAL',
    db:      'PostgreSQL localhost'
  });
});

app.use('/api/auth',   authLimiter, authRoutes);
app.use('/api/tryout', tryoutRoutes);

/* ══════════════════════════════
   404 & ERROR HANDLER
══════════════════════════════ */
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint tidak ditemukan.' });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Terjadi kesalahan server.' });
});

/* ══════════════════════════════
   START SERVER
══════════════════════════════ */
app.listen(PORT, () => {
  console.log('\n╔══════════════════════════════════════╗');
  console.log('║   SKD ACADEMY — BACKEND LOKAL        ║');
  console.log('╠══════════════════════════════════════╣');
  console.log(`║  API    : http://localhost:${PORT}        ║`);
  console.log(`║  Mode   : LOCAL (offline)             ║`);
  console.log(`║  DB     : PostgreSQL localhost        ║`);
  console.log('╚══════════════════════════════════════╝\n');
});
