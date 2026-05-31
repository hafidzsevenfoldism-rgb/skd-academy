const express = require('express');
const pool    = require('../config/db');
const auth    = require('../middleware/auth');

const router = express.Router();

router.get('/:tryout_id', auth, async (req, res) => {
  const { tryout_id } = req.params;

  try {
    const soalResult = await pool.query(
      `SELECT id, nomor_soal, kategori, teks, kunci
       FROM soal
       WHERE tryout_id = $1
       ORDER BY nomor_soal ASC`,
      [tryout_id]
    );

    if (soalResult.rows.length === 0) {
      return res.status(404).json({ error: 'Soal tidak ditemukan untuk tryout ini.' });
    }

    const soalIds = soalResult.rows.map(s => s.id);

    const pilihanResult = await pool.query(
      `SELECT soal_id, huruf, teks, poin
       FROM pilihan_jawaban
       WHERE soal_id = ANY($1)
       ORDER BY soal_id, huruf ASC`,
      [soalIds]
    );

    const pilihanMap = {};
    pilihanResult.rows.forEach(p => {
      if (!pilihanMap[p.soal_id]) pilihanMap[p.soal_id] = [];
      pilihanMap[p.soal_id].push({
        huruf: p.huruf,
        teks:  p.teks,
        poin:  p.poin
      });
    });

    const soalList = soalResult.rows.map(s => ({
      id:       s.nomor_soal,
      kategori: s.kategori,
      teks:     s.teks,
      kunci:    s.kunci,
      pilihan:  pilihanMap[s.id] || []
    }));

    return res.status(200).json({ soal: soalList });

  } catch (err) {
    console.error('Get soal error:', err.message);
    return res.status(500).json({ error: 'Gagal mengambil soal.' });
  }
});

module.exports = router;
