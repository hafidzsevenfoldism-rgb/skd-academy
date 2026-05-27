const { Pool } = require('pg');

/* ══════════════════════════════
   KONEKSI DATABASE POSTGRESQL
   Mode lokal — Windows
══════════════════════════════ */
const pool = new Pool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     parseInt(process.env.DB_PORT) || 5432,
  database: process.env.DB_NAME     || 'skd_academy',
  user:     process.env.DB_USER     || 'postgres',
  password: process.env.DB_PASSWORD || '',
});

/* ─── Test koneksi saat startup ─── */
pool.connect((err, client, release) => {
  if (err) {
    console.error('❌ Gagal koneksi ke PostgreSQL:', err.message);
    console.error('   Pastikan PostgreSQL sudah berjalan dan password benar di file .env');
  } else {
    console.log('✓ Terhubung ke PostgreSQL (localhost)');
    release();
  }
});

module.exports = pool;
