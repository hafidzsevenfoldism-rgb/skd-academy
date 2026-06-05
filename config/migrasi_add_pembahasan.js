require('dotenv').config();
const pool = require('../config/db');

async function migrasi() {
  const client = await pool.connect();
  try {
    console.log('Menambahkan kolom pembahasan ke tabel soal...');
    await client.query(`ALTER TABLE soal ADD COLUMN IF NOT EXISTS pembahasan TEXT DEFAULT ''`);
    console.log('Kolom pembahasan berhasil ditambahkan.');
  } catch (err) {
    console.error('Migrasi gagal:', err.message);
    process.exit(1);
  } finally {
    client.release();
    pool.end();
  }
}

migrasi();
