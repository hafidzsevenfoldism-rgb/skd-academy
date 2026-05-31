require('dotenv').config();
const pool = require('./db');

async function migrasi() {
  console.log('Menambahkan kolom sisa_waktu ke tabel jawaban_peserta...');
  await pool.query(
    `ALTER TABLE jawaban_peserta
     ADD COLUMN IF NOT EXISTS sisa_waktu INTEGER`
  );
  console.log(' Kolom sisa_waktu berhasil ditambahkan');
  await pool.end();
}

migrasi().catch(err => {
  console.error(' Gagal migrasi:', err.message);
  process.exit(1);
});
