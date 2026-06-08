require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });
const pool = require('./db');

async function migrasi() {
  console.log('Menambahkan kolom pembahasan ke tabel soal...');
  await pool.query(
    `ALTER TABLE soal
     ADD COLUMN IF NOT EXISTS pembahasan TEXT`
  );
  console.log(' Kolom pembahasan berhasil ditambahkan');
  await pool.end();
}

migrasi().catch(err => {
  console.error(' Gagal migrasi:', err.message);
  process.exit(1);
});
