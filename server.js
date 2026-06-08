require('dotenv').config();

const express   = require('express');
const cors      = require('cors');
const helmet    = require('helmet');
const rateLimit = require('express-rate-limit');

const authRoutes   = require('./routes/auth');
const tryoutRoutes = require('./routes/tryout');
const soalRoutes   = require('./routes/soal');

const app  = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());

const allowedOrigins = [
  'http://127.0.0.1:5500',
  'http://localhost:5500',
  'http://127.0.0.1:5501',
  'http://localhost:5501',
  'http://localhost:3000',
];

if (process.env.FRONTEND_URL) {
  allowedOrigins.push(process.env.FRONTEND_URL);
}

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods:        ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials:    true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  message: { error: 'Terlalu banyak permintaan.' }
});
app.use('/api', globalLimiter);

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { error: 'Terlalu banyak percobaan login.' }
});

app.get('/', (req, res) => {
  res.json({
    status:  'OK',
    message: 'SKD Academy API berjalan',
    mode:    process.env.VERCEL ? 'PRODUCTION' : 'LOCAL'
  });
});

app.use('/api/auth',   authLimiter, authRoutes);
app.use('/api/tryout', tryoutRoutes);
app.use('/api/soal',   soalRoutes);

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint tidak ditemukan.' });
});

app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ error: 'Terjadi kesalahan server.' });
});

if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`SKD Academy API berjalan di http://localhost:${PORT}`);
  });
}

module.exports = app;
