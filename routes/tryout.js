 const express = require('express');
const pool    = require('../config/db');
const auth    = require('../middleware/auth');

const router = express.Router();

/* ══════════════════════════════════════════════
   POST /api/tryout/beli
   Simpan tryout yang sudah dibeli user
   Body: { tryout_id, nama_paket, harga }
   Header: Authorization: Bearer <token>
══════════════════════════════════════════════ */
router.post('/beli', auth, async (req, res) => {
  const { tryout_id, nama_paket, harga } = req.body;
  const user_id = req.user.id;

  if (!tryout_id || !nama_paket) {
    return res.status(400).json({ error: 'tryout_id dan nama_paket wajib diisi.' });
  }

  try {
    /* ─── Cek apakah sudah dibeli ─── */
    const sudahBeli = await pool.query(
      'SELECT id FROM tryout_dibeli WHERE user_id = $1 AND tryout_id = $2',
      [user_id, tryout_id]
    );

    if (sudahBeli.rows.length > 0) {
      return res.status(200).json({
        message: 'Try out sudah dimiliki.',
        sudahDibeli: true
      });
    }

    /* ─── Simpan pembelian ─── */
    const result = await pool.query(
      `INSERT INTO tryout_dibeli (user_id, tryout_id, nama_paket, harga)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [user_id, tryout_id, nama_paket, harga || 0]
    );

    return res.status(201).json({
      message: 'Try out berhasil dibeli!',
      data: result.rows[0]
    });

  } catch (err) {
    console.error('Beli tryout error:', err.message);
    return res.status(500).json({ error: 'Gagal memproses pembelian.' });
  }
});


/* ══════════════════════════════════════════════
   GET /api/tryout/dimiliki
   Ambil daftar semua tryout yang dimiliki user
   Header: Authorization: Bearer <token>
══════════════════════════════════════════════ */
router.get('/dimiliki', auth, async (req, res) => {
  const user_id = req.user.id;

  try {
    const result = await pool.query(
      `SELECT tryout_id, nama_paket, harga, dibeli_at
       FROM tryout_dibeli
       WHERE user_id = $1
       ORDER BY dibeli_at DESC`,
      [user_id]
    );

    return res.status(200).json({ tryout: result.rows });

  } catch (err) {
    console.error('Get dimiliki error:', err.message);
    return res.status(500).json({ error: 'Gagal mengambil data tryout.' });
  }
});


/* ══════════════════════════════════════════════
   POST /api/tryout/simpan-jawaban
   Auto-save jawaban saat mengerjakan soal
   Body: { tryout_id, soal_id, jawaban }
   Header: Authorization: Bearer <token>
══════════════════════════════════════════════ */
router.post('/simpan-jawaban', auth, async (req, res) => {
  const { tryout_id, soal_id, jawaban } = req.body;
  const user_id = req.user.id;

  if (!tryout_id || !soal_id) {
    return res.status(400).json({ error: 'tryout_id dan soal_id wajib diisi.' });
  }

  try {
    /* ─── UPSERT: update jika ada, insert jika belum ─── */
    const result = await pool.query(
      `INSERT INTO jawaban_peserta (user_id, tryout_id, soal_id, jawaban, updated_at)
       VALUES ($1, $2, $3, $4, NOW())
       ON CONFLICT (user_id, tryout_id, soal_id)
       DO UPDATE SET jawaban = $4, updated_at = NOW()
       RETURNING *`,
      [user_id, tryout_id, soal_id, jawaban || null]
    );

    return res.status(200).json({
      message: 'Jawaban disimpan.',
      data: result.rows[0]
    });

  } catch (err) {
    console.error('Simpan jawaban error:', err.message);
    return res.status(500).json({ error: 'Gagal menyimpan jawaban.' });
  }
});


/* ══════════════════════════════════════════════
   GET /api/tryout/jawaban/:tryout_id
   Ambil semua jawaban user untuk satu tryout (resume)
   Header: Authorization: Bearer <token>
══════════════════════════════════════════════ */
router.get('/jawaban/:tryout_id', auth, async (req, res) => {
  const { tryout_id } = req.params;
  const user_id = req.user.id;

  try {
    const result = await pool.query(
      `SELECT soal_id, jawaban
       FROM jawaban_peserta
       WHERE user_id = $1 AND tryout_id = $2
       ORDER BY soal_id ASC`,
      [user_id, tryout_id]
    );

    /* ─── Format jadi objek { soal_id: jawaban } ─── */
    const jawabanMap = {};
    result.rows.forEach(row => {
      jawabanMap[row.soal_id] = row.jawaban;
    });

    return res.status(200).json({ jawaban: jawabanMap });

  } catch (err) {
    console.error('Get jawaban error:', err.message);
    return res.status(500).json({ error: 'Gagal mengambil jawaban.' });
  }
});


/* ══════════════════════════════════════════════
   POST /api/tryout/kumpulkan
   Simpan hasil akhir setelah kumpulkan
   Body: { tryout_id, skor_total, skor_twk, skor_tiu, skor_tkp,
           benar_twk, salah_twk, kosong_twk,
           benar_tiu, salah_tiu, kosong_tiu,
           benar_tkp, salah_tkp, kosong_tkp,
           total_benar, total_salah, total_kosong,
           lolos_twk, lolos_tiu, lolos_tkp, lolos_skd,
           durasi_detik }
   Header: Authorization: Bearer <token>
══════════════════════════════════════════════ */
router.post('/kumpulkan', auth, async (req, res) => {
  const user_id = req.user.id;
  const {
    tryout_id,
    skor_total, skor_twk, skor_tiu, skor_tkp,
    benar_twk, salah_twk, kosong_twk,
    benar_tiu, salah_tiu, kosong_tiu,
    benar_tkp, salah_tkp, kosong_tkp,
    total_benar, total_salah, total_kosong,
    lolos_twk, lolos_tiu, lolos_tkp, lolos_skd,
    durasi_detik
  } = req.body;

  if (!tryout_id || skor_total === undefined) {
    return res.status(400).json({ error: 'Data hasil tidak lengkap.' });
  }

  try {
    /* ─── UPSERT: update jika sudah ada (retake), insert jika baru ─── */
    const result = await pool.query(
      `INSERT INTO hasil_tryout (
         user_id, tryout_id,
         skor_total, skor_twk, skor_tiu, skor_tkp,
         benar_twk, salah_twk, kosong_twk,
         benar_tiu, salah_tiu, kosong_tiu,
         benar_tkp, salah_tkp, kosong_tkp,
         total_benar, total_salah, total_kosong,
         lolos_twk, lolos_tiu, lolos_tkp, lolos_skd,
         durasi_detik, selesai_at
       )
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,NOW())
       ON CONFLICT (user_id, tryout_id)
       DO UPDATE SET
         skor_total   = $3,  skor_twk     = $4,  skor_tiu     = $5,  skor_tkp    = $6,
         benar_twk    = $7,  salah_twk    = $8,  kosong_twk   = $9,
         benar_tiu    = $10, salah_tiu    = $11, kosong_tiu   = $12,
         benar_tkp    = $13, salah_tkp    = $14, kosong_tkp   = $15,
         total_benar  = $16, total_salah  = $17, total_kosong = $18,
         lolos_twk    = $19, lolos_tiu    = $20, lolos_tkp    = $21, lolos_skd   = $22,
         durasi_detik = $23, selesai_at   = NOW()
       RETURNING *`,
      [
        user_id, tryout_id,
        skor_total  || 0, skor_twk   || 0, skor_tiu   || 0, skor_tkp  || 0,
        benar_twk   || 0, salah_twk  || 0, kosong_twk || 0,
        benar_tiu   || 0, salah_tiu  || 0, kosong_tiu || 0,
        benar_tkp   || 0, salah_tkp  || 0, kosong_tkp || 0,
        total_benar || 0, total_salah|| 0, total_kosong|| 0,
        lolos_twk   || false, lolos_tiu || false,
        lolos_tkp   || false, lolos_skd || false,
        durasi_detik|| 0
      ]
    );

    return res.status(200).json({
      message: 'Hasil berhasil disimpan.',
      hasil: result.rows[0]
    });

  } catch (err) {
    console.error('Kumpulkan error:', err.message);
    return res.status(500).json({ error: 'Gagal menyimpan hasil.' });
  }
});


/* ══════════════════════════════════════════════
   GET /api/tryout/riwayat
   Ambil semua riwayat tryout milik user
   Header: Authorization: Bearer <token>
══════════════════════════════════════════════ */
router.get('/riwayat', auth, async (req, res) => {
  const user_id = req.user.id;

  try {
    const result = await pool.query(
      `SELECT
         h.id, h.tryout_id, h.skor_total,
         h.skor_twk, h.skor_tiu, h.skor_tkp,
         h.total_benar, h.total_salah, h.total_kosong,
         h.lolos_twk, h.lolos_tiu, h.lolos_tkp, h.lolos_skd,
         h.durasi_detik, h.selesai_at,
         t.nama_paket
       FROM hasil_tryout h
       LEFT JOIN tryout_dibeli t
         ON h.user_id = t.user_id AND h.tryout_id = t.tryout_id
       WHERE h.user_id = $1
       ORDER BY h.selesai_at DESC`,
      [user_id]
    );

    return res.status(200).json({ riwayat: result.rows });

  } catch (err) {
    console.error('Riwayat error:', err.message);
    return res.status(500).json({ error: 'Gagal mengambil riwayat.' });
  }
});


/* ══════════════════════════════════════════════
   GET /api/tryout/hasil/:tryout_id
   Ambil detail hasil satu tryout
   Header: Authorization: Bearer <token>
══════════════════════════════════════════════ */
router.get('/hasil/:tryout_id', auth, async (req, res) => {
  const { tryout_id } = req.params;
  const user_id = req.user.id;

  try {
    const result = await pool.query(
      `SELECT h.*, t.nama_paket
       FROM hasil_tryout h
       LEFT JOIN tryout_dibeli t
         ON h.user_id = t.user_id AND h.tryout_id = t.tryout_id
       WHERE h.user_id = $1 AND h.tryout_id = $2`,
      [user_id, tryout_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Hasil tryout tidak ditemukan.' });
    }

    return res.status(200).json({ hasil: result.rows[0] });

  } catch (err) {
    console.error('Hasil error:', err.message);
    return res.status(500).json({ error: 'Gagal mengambil hasil.' });
  }
});

/* ══════════════════════════════════════════════
   DELETE /api/tryout/reset-jawaban/:tryout_id
   Hapus semua jawaban user untuk satu tryout
   Dipanggil saat user klik "Mulai Ujian"
   Header: Authorization: Bearer <token>
══════════════════════════════════════════════ */
router.delete('/reset-jawaban/:tryout_id', auth, async (req, res) => {
  const { tryout_id } = req.params;
  const user_id = req.user.id;

  try {
    // Hapus semua jawaban user untuk tryout ini
    await pool.query(
      `DELETE FROM jawaban_peserta
       WHERE user_id = $1 AND tryout_id = $2`,
      [user_id, tryout_id]
    );

    // Hapus juga hasil tryout sebelumnya agar bisa dikerjakan ulang
    await pool.query(
      `DELETE FROM hasil_tryout
       WHERE user_id = $1 AND tryout_id = $2`,
      [user_id, tryout_id]
    );

    return res.status(200).json({
      message: 'Jawaban berhasil direset. Siap mengerjakan dari awal.'
    });

  } catch (err) {
    console.error('Reset jawaban error:', err.message);
    return res.status(500).json({ error: 'Gagal mereset jawaban.' });
  }
});
/* ══════════════════════════════════════════════
   POST /api/tryout/simpan-waktu
   Simpan sisa waktu ke kolom sisa_waktu
   di tabel jawaban_peserta (soal_id = 0)
══════════════════════════════════════════════ */
router.post('/simpan-waktu', auth, async (req, res) => {
  const { tryout_id, sisa_waktu } = req.body;
  const user_id = req.user.id;

  if (!tryout_id || sisa_waktu === undefined) {
    return res.status(400).json({ error: 'Data tidak lengkap.' });
  }

  try {
    await pool.query(
      `INSERT INTO jawaban_peserta
         (user_id, tryout_id, soal_id, jawaban, sisa_waktu, updated_at)
       VALUES ($1, $2, 0, NULL, $3, NOW())
       ON CONFLICT (user_id, tryout_id, soal_id)
       DO UPDATE SET sisa_waktu = $3, updated_at = NOW()`,
      [user_id, tryout_id, sisa_waktu]
    );

    return res.status(200).json({ message: 'Waktu disimpan.', sisa_waktu });

  } catch (err) {
    console.error('Simpan waktu error:', err.message);
    return res.status(500).json({ error: 'Gagal menyimpan waktu.' });
  }
});


/* ══════════════════════════════════════════════
   GET /api/tryout/get-waktu/:tryout_id
   Ambil sisa waktu dari kolom sisa_waktu
   di tabel jawaban_peserta (soal_id = 0)
══════════════════════════════════════════════ */
router.get('/get-waktu/:tryout_id', auth, async (req, res) => {
  const { tryout_id } = req.params;
  const user_id = req.user.id;

  try {
    const paket = await pool.query(
      'SELECT waktu_menit FROM paket_tryout WHERE tryout_id = $1',
      [tryout_id]
    );
    const totalDurasi = (paket.rows[0]?.waktu_menit || 100) * 60;

    const result = await pool.query(
      `SELECT sisa_waktu FROM jawaban_peserta
       WHERE user_id = $1 AND tryout_id = $2 AND soal_id = 0`,
      [user_id, tryout_id]
    );

    const sisa = (result.rows.length > 0 && result.rows[0].sisa_waktu !== null)
      ? result.rows[0].sisa_waktu
      : totalDurasi;

    return res.status(200).json({ sisa_waktu: sisa, total_durasi: totalDurasi });

  } catch (err) {
    console.error('Get waktu error:', err.message);
    return res.status(500).json({ error: 'Gagal mengambil waktu.' });
  }
});
/* ══════════════════════════════════════════════
   GET /api/tryout/paket
   Ambil daftar semua paket tryout yang tersedia
   (publik — tidak perlu login)
══════════════════════════════════════════════ */
router.get('/paket', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT tryout_id, nama_paket, deskripsi,
              jumlah_soal, waktu_menit,
              harga, harga_asli, stripe_color,
              is_baru, is_aktif
       FROM paket_tryout
       ORDER BY tryout_id ASC`
    );

    return res.status(200).json({ paket: result.rows });

  } catch (err) {
    console.error('Get paket error:', err.message);
    return res.status(500).json({ error: 'Gagal mengambil paket tryout.' });
  }
});

module.exports = router;
