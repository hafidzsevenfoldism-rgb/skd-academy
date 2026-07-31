require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });
const pool = require('./db');

async function hapusPaket1() {
  const client = await pool.connect();

  try {
    console.log('Menghapus Try Out SKD Paket 1 (tryout_id = 1)...');
    await client.query('BEGIN');

    const hasil = {};

    hasil.transactions = await client.query(
      `DELETE FROM transactions WHERE tryout_id = 1`
    );

    hasil.jawaban = await client.query(
      `DELETE FROM jawaban_peserta WHERE tryout_id = 1`
    );

    hasil.hasil = await client.query(
      `DELETE FROM hasil_tryout WHERE tryout_id = 1`
    );

    hasil.dibeli = await client.query(
      `DELETE FROM tryout_dibeli WHERE tryout_id = 1`
    );

    hasil.paket = await client.query(
      `DELETE FROM paket_tryout WHERE tryout_id = 1`
    );

    await client.query('COMMIT');

    console.log('\nBerhasil dihapus:');
    console.log('  Transaksi      :', hasil.transactions.rowCount);
    console.log('  Jawaban        :', hasil.jawaban.rowCount);
    console.log('  Hasil          :', hasil.hasil.rowCount);
    console.log('  Kepemilikan    :', hasil.dibeli.rowCount);
    console.log('  Paket tryout   :', hasil.paket.rowCount);
    console.log('  (Soal & pilihan jawaban ikut terhapus otomatis via ON DELETE CASCADE)');

    const sisa = await client.query(
      `SELECT tryout_id, nama_paket, harga FROM paket_tryout ORDER BY tryout_id ASC`
    );
    console.log('\nPaket yang tersisa:', sisa.rows);

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal menghapus paket 1:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

hapusPaket1().catch(() => process.exit(1));
