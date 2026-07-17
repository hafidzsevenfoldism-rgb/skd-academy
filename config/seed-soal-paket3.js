require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });
const pool = require('./db');

/*
  ══════════════════════════════════════════════════════════
  TEMPLATE SOAL TRY OUT SKD PAKET 3
  Isi manual: teks, pilihan[], kunci, pembahasan

  — TWK (soal 1-30): Tes Wawasan Kebangsaan
  — TIU (soal 31-65): Tes Inteligensia Umum
  — TKP (soal 66-110): Tes Karakteristik Pribadi

  Format:
    id        = nomor soal (1-110)
    kategori  = "TWK" | "TIU" | "TKP"
    teks      = HTML string (bisa pakai <br>, <table>, <img>, <sup>, dll)
    pilihan[] = array { huruf: "A"–"E", teks: string, poin: (hanya TKP) }
    kunci     = huruf kunci jawaban ("A"–"E")
    pembahasan = HTML string penjelasan kunci jawaban
  ══════════════════════════════════════════════════════════
*/

const soalData = [

  // ════════════════════════════════════════════
  // TES WAWASAN KEBANGSAAN (TWK) — 30 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 1 ───
  {
    id: 1, kategori: "TWK",
    teks: "Tulis soal TWK 1 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 1 di sini..."
  },

  // ─── Soal 2 ───
  {
    id: 2, kategori: "TWK",
    teks: "Tulis soal TWK 2 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 2 di sini..."
  },

  // ─── Soal 3 ───
  {
    id: 3, kategori: "TWK",
    teks: "Tulis soal TWK 3 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 3 di sini..."
  },

  // ─── Soal 4 ───
  {
    id: 4, kategori: "TWK",
    teks: "Tulis soal TWK 4 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 4 di sini..."
  },

  // ─── Soal 5 ───
  {
    id: 5, kategori: "TWK",
    teks: "Tulis soal TWK 5 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 5 di sini..."
  },

  // ─── Soal 6 ───
  {
    id: 6, kategori: "TWK",
    teks: "Tulis soal TWK 6 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 6 di sini..."
  },

  // ─── Soal 7 ───
  {
    id: 7, kategori: "TWK",
    teks: "Tulis soal TWK 7 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 7 di sini..."
  },

  // ─── Soal 8 ───
  {
    id: 8, kategori: "TWK",
    teks: "Tulis soal TWK 8 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 8 di sini..."
  },

  // ─── Soal 9 ───
  {
    id: 9, kategori: "TWK",
    teks: "Tulis soal TWK 9 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 9 di sini..."
  },

  // ─── Soal 10 ───
  {
    id: 10, kategori: "TWK",
    teks: "Tulis soal TWK 10 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 10 di sini..."
  },

  // ─── Soal 11 ───
  {
    id: 11, kategori: "TWK",
    teks: "Tulis soal TWK 11 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 11 di sini..."
  },

  // ─── Soal 12 ───
  {
    id: 12, kategori: "TWK",
    teks: "Tulis soal TWK 12 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 12 di sini..."
  },

  // ─── Soal 13 ───
  {
    id: 13, kategori: "TWK",
    teks: "Tulis soal TWK 13 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 13 di sini..."
  },

  // ─── Soal 14 ───
  {
    id: 14, kategori: "TWK",
    teks: "Tulis soal TWK 14 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 14 di sini..."
  },

  // ─── Soal 15 ───
  {
    id: 15, kategori: "TWK",
    teks: "Tulis soal TWK 15 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 15 di sini..."
  },

  // ─── Soal 16 ───
  {
    id: 16, kategori: "TWK",
    teks: "Tulis soal TWK 16 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 16 di sini..."
  },

  // ─── Soal 17 ───
  {
    id: 17, kategori: "TWK",
    teks: "Tulis soal TWK 17 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 17 di sini..."
  },

  // ─── Soal 18 ───
  {
    id: 18, kategori: "TWK",
    teks: "Tulis soal TWK 18 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 18 di sini..."
  },

  // ─── Soal 19 ───
  {
    id: 19, kategori: "TWK",
    teks: "Tulis soal TWK 19 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 19 di sini..."
  },

  // ─── Soal 20 ───
  {
    id: 20, kategori: "TWK",
    teks: "Tulis soal TWK 20 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 20 di sini..."
  },

  // ─── Soal 21 ───
  {
    id: 21, kategori: "TWK",
    teks: "Tulis soal TWK 21 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 21 di sini..."
  },

  // ─── Soal 22 ───
  {
    id: 22, kategori: "TWK",
    teks: "Tulis soal TWK 22 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 22 di sini..."
  },

  // ─── Soal 23 ───
  {
    id: 23, kategori: "TWK",
    teks: "Tulis soal TWK 23 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 23 di sini..."
  },

  // ─── Soal 24 ───
  {
    id: 24, kategori: "TWK",
    teks: "Tulis soal TWK 24 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 24 di sini..."
  },

  // ─── Soal 25 ───
  {
    id: 25, kategori: "TWK",
    teks: "Tulis soal TWK 25 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 25 di sini..."
  },

  // ─── Soal 26 ───
  {
    id: 26, kategori: "TWK",
    teks: "Tulis soal TWK 26 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 26 di sini..."
  },

  // ─── Soal 27 ───
  {
    id: 27, kategori: "TWK",
    teks: "Tulis soal TWK 27 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 27 di sini..."
  },

  // ─── Soal 28 ───
  {
    id: 28, kategori: "TWK",
    teks: "Tulis soal TWK 28 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 28 di sini..."
  },

  // ─── Soal 29 ───
  {
    id: 29, kategori: "TWK",
    teks: "Tulis soal TWK 29 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 29 di sini..."
  },

  // ─── Soal 30 ───
  {
    id: 30, kategori: "TWK",
    teks: "Tulis soal TWK 30 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TWK 30 di sini..."
  },

  // ════════════════════════════════════════════
  // TES INTELIGENSIA UMUM (TIU) — 35 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 31 ───
  {
    id: 31, kategori: "TIU",
    teks: "Tulis soal TIU 31 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 31 di sini..."
  },

  // ─── Soal 32 ───
  {
    id: 32, kategori: "TIU",
    teks: "Tulis soal TIU 32 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 32 di sini..."
  },

  // ─── Soal 33 ───
  {
    id: 33, kategori: "TIU",
    teks: "Tulis soal TIU 33 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 33 di sini..."
  },

  // ─── Soal 34 ───
  {
    id: 34, kategori: "TIU",
    teks: "Tulis soal TIU 34 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 34 di sini..."
  },

  // ─── Soal 35 ───
  {
    id: 35, kategori: "TIU",
    teks: "Tulis soal TIU 35 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 35 di sini..."
  },

  // ─── Soal 36 ───
  {
    id: 36, kategori: "TIU",
    teks: "Tulis soal TIU 36 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 36 di sini..."
  },

  // ─── Soal 37 ───
  {
    id: 37, kategori: "TIU",
    teks: "Tulis soal TIU 37 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 37 di sini..."
  },

  // ─── Soal 38 ───
  {
    id: 38, kategori: "TIU",
    teks: "Tulis soal TIU 38 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 38 di sini..."
  },

  // ─── Soal 39 ───
  {
    id: 39, kategori: "TIU",
    teks: "Tulis soal TIU 39 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 39 di sini..."
  },

  // ─── Soal 40 ───
  {
    id: 40, kategori: "TIU",
    teks: "Tulis soal TIU 40 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 40 di sini..."
  },

  // ─── Soal 41 ───
  {
    id: 41, kategori: "TIU",
    teks: "Tulis soal TIU 41 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 41 di sini..."
  },

  // ─── Soal 42 ───
  {
    id: 42, kategori: "TIU",
    teks: "Tulis soal TIU 42 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 42 di sini..."
  },

  // ─── Soal 43 ───
  {
    id: 43, kategori: "TIU",
    teks: "Tulis soal TIU 43 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 43 di sini..."
  },

  // ─── Soal 44 ───
  {
    id: 44, kategori: "TIU",
    teks: "Tulis soal TIU 44 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 44 di sini..."
  },

  // ─── Soal 45 ───
  {
    id: 45, kategori: "TIU",
    teks: "Tulis soal TIU 45 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 45 di sini..."
  },

  // ─── Soal 46 ───
  {
    id: 46, kategori: "TIU",
    teks: "Tulis soal TIU 46 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 46 di sini..."
  },

  // ─── Soal 47 ───
  {
    id: 47, kategori: "TIU",
    teks: "Tulis soal TIU 47 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 47 di sini..."
  },

  // ─── Soal 48 ───
  {
    id: 48, kategori: "TIU",
    teks: "Tulis soal TIU 48 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 48 di sini..."
  },

  // ─── Soal 49 ───
  {
    id: 49, kategori: "TIU",
    teks: "Tulis soal TIU 49 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 49 di sini..."
  },

  // ─── Soal 50 ───
  {
    id: 50, kategori: "TIU",
    teks: "Tulis soal TIU 50 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 50 di sini..."
  },

  // ─── Soal 51 ───
  {
    id: 51, kategori: "TIU",
    teks: "Tulis soal TIU 51 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 51 di sini..."
  },

  // ─── Soal 52 ───
  {
    id: 52, kategori: "TIU",
    teks: "Tulis soal TIU 52 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 52 di sini..."
  },

  // ─── Soal 53 ───
  {
    id: 53, kategori: "TIU",
    teks: "Tulis soal TIU 53 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 53 di sini..."
  },

  // ─── Soal 54 ───
  {
    id: 54, kategori: "TIU",
    teks: "Tulis soal TIU 54 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 54 di sini..."
  },

  // ─── Soal 55 ───
  {
    id: 55, kategori: "TIU",
    teks: "Tulis soal TIU 55 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 55 di sini..."
  },

  // ─── Soal 56 ───
  {
    id: 56, kategori: "TIU",
    teks: "Tulis soal TIU 56 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 56 di sini..."
  },

  // ─── Soal 57 ───
  {
    id: 57, kategori: "TIU",
    teks: "Tulis soal TIU 57 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 57 di sini..."
  },

  // ─── Soal 58 ───
  {
    id: 58, kategori: "TIU",
    teks: "Tulis soal TIU 58 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 58 di sini..."
  },

  // ─── Soal 59 ───
  {
    id: 59, kategori: "TIU",
    teks: "Tulis soal TIU 59 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 59 di sini..."
  },

  // ─── Soal 60 ───
  {
    id: 60, kategori: "TIU",
    teks: "Tulis soal TIU 60 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 60 di sini..."
  },

  // ─── Soal 61 ───
  {
    id: 61, kategori: "TIU",
    teks: "Tulis soal TIU 61 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 61 di sini..."
  },

  // ─── Soal 62 ───
  {
    id: 62, kategori: "TIU",
    teks: "Tulis soal TIU 62 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 62 di sini..."
  },

  // ─── Soal 63 ───
  {
    id: 63, kategori: "TIU",
    teks: "Tulis soal TIU 63 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 63 di sini..."
  },

  // ─── Soal 64 ───
  {
    id: 64, kategori: "TIU",
    teks: "Tulis soal TIU 64 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 64 di sini..."
  },

  // ─── Soal 65 ───
  {
    id: 65, kategori: "TIU",
    teks: "Tulis soal TIU 65 di sini...",
    pilihan: [
      { huruf: "A", teks: "..." },
      { huruf: "B", teks: "..." },
      { huruf: "C", teks: "..." },
      { huruf: "D", teks: "..." },
      { huruf: "E", teks: "..." }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan TIU 65 di sini..."
  },

  // ════════════════════════════════════════════
  // TES KARAKTERISTIK PRIBADI (TKP) — 45 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 66 ───
  {
    id: 66, kategori: "TKP",
    teks: "Tulis soal TKP 66 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 66 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 67 ───
  {
    id: 67, kategori: "TKP",
    teks: "Tulis soal TKP 67 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 67 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 68 ───
  {
    id: 68, kategori: "TKP",
    teks: "Tulis soal TKP 68 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 68 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 69 ───
  {
    id: 69, kategori: "TKP",
    teks: "Tulis soal TKP 69 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 69 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 70 ───
  {
    id: 70, kategori: "TKP",
    teks: "Tulis soal TKP 70 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 70 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 71 ───
  {
    id: 71, kategori: "TKP",
    teks: "Tulis soal TKP 71 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 71 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 72 ───
  {
    id: 72, kategori: "TKP",
    teks: "Tulis soal TKP 72 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 72 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 73 ───
  {
    id: 73, kategori: "TKP",
    teks: "Tulis soal TKP 73 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 73 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 74 ───
  {
    id: 74, kategori: "TKP",
    teks: "Tulis soal TKP 74 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 74 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 75 ───
  {
    id: 75, kategori: "TKP",
    teks: "Tulis soal TKP 75 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 75 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 76 ───
  {
    id: 76, kategori: "TKP",
    teks: "Tulis soal TKP 76 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 76 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 77 ───
  {
    id: 77, kategori: "TKP",
    teks: "Tulis soal TKP 77 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 77 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 78 ───
  {
    id: 78, kategori: "TKP",
    teks: "Tulis soal TKP 78 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 78 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 79 ───
  {
    id: 79, kategori: "TKP",
    teks: "Tulis soal TKP 79 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 79 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 80 ───
  {
    id: 80, kategori: "TKP",
    teks: "Tulis soal TKP 80 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 80 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 81 ───
  {
    id: 81, kategori: "TKP",
    teks: "Tulis soal TKP 81 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 81 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 82 ───
  {
    id: 82, kategori: "TKP",
    teks: "Tulis soal TKP 82 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 82 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 83 ───
  {
    id: 83, kategori: "TKP",
    teks: "Tulis soal TKP 83 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 83 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 84 ───
  {
    id: 84, kategori: "TKP",
    teks: "Tulis soal TKP 84 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 84 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 85 ───
  {
    id: 85, kategori: "TKP",
    teks: "Tulis soal TKP 85 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 85 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 86 ───
  {
    id: 86, kategori: "TKP",
    teks: "Tulis soal TKP 86 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 86 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 87 ───
  {
    id: 87, kategori: "TKP",
    teks: "Tulis soal TKP 87 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 87 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 88 ───
  {
    id: 88, kategori: "TKP",
    teks: "Tulis soal TKP 88 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 88 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 89 ───
  {
    id: 89, kategori: "TKP",
    teks: "Tulis soal TKP 89 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 89 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 90 ───
  {
    id: 90, kategori: "TKP",
    teks: "Tulis soal TKP 90 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 90 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 91 ───
  {
    id: 91, kategori: "TKP",
    teks: "Tulis soal TKP 91 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 91 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 92 ───
  {
    id: 92, kategori: "TKP",
    teks: "Tulis soal TKP 92 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 92 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 93 ───
  {
    id: 93, kategori: "TKP",
    teks: "Tulis soal TKP 93 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 93 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 94 ───
  {
    id: 94, kategori: "TKP",
    teks: "Tulis soal TKP 94 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 94 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 95 ───
  {
    id: 95, kategori: "TKP",
    teks: "Tulis soal TKP 95 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 95 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 96 ───
  {
    id: 96, kategori: "TKP",
    teks: "Tulis soal TKP 96 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 96 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 97 ───
  {
    id: 97, kategori: "TKP",
    teks: "Tulis soal TKP 97 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 97 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 98 ───
  {
    id: 98, kategori: "TKP",
    teks: "Tulis soal TKP 98 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 98 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 99 ───
  {
    id: 99, kategori: "TKP",
    teks: "Tulis soal TKP 99 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 99 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 100 ───
  {
    id: 100, kategori: "TKP",
    teks: "Tulis soal TKP 100 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 100 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 101 ───
  {
    id: 101, kategori: "TKP",
    teks: "Tulis soal TKP 101 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 101 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 102 ───
  {
    id: 102, kategori: "TKP",
    teks: "Tulis soal TKP 102 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 102 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 103 ───
  {
    id: 103, kategori: "TKP",
    teks: "Tulis soal TKP 103 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 103 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 104 ───
  {
    id: 104, kategori: "TKP",
    teks: "Tulis soal TKP 104 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 104 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 105 ───
  {
    id: 105, kategori: "TKP",
    teks: "Tulis soal TKP 105 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 105 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 106 ───
  {
    id: 106, kategori: "TKP",
    teks: "Tulis soal TKP 106 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 106 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 107 ───
  {
    id: 107, kategori: "TKP",
    teks: "Tulis soal TKP 107 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 107 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 108 ───
  {
    id: 108, kategori: "TKP",
    teks: "Tulis soal TKP 108 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 108 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 109 ───
  {
    id: 109, kategori: "TKP",
    teks: "Tulis soal TKP 109 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 109 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  },

  // ─── Soal 110 ───
  {
    id: 110, kategori: "TKP",
    teks: "Tulis soal TKP 110 di sini...",
    pilihan: [
      { huruf: "A", teks: "...", poin: 1 },
      { huruf: "B", teks: "...", poin: 2 },
      { huruf: "C", teks: "...", poin: 3 },
      { huruf: "D", teks: "...", poin: 4 },
      { huruf: "E", teks: "...", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan TKP 110 di sini...<br> A = 1, B = 2, C = 3, D = 4, E = 5"
  }

];

// ════════════════════════════════════════════
// FUNGSI SEED KE DATABASE
// ════════════════════════════════════════════
async function seedSoalPaket3() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Hapus data lama untuk tryout_id = 3
    await client.query(`DELETE FROM pilihan_jawaban WHERE soal_id IN (SELECT id FROM soal WHERE tryout_id = 3)`);
    await client.query(`DELETE FROM soal WHERE tryout_id = 3`);

    for (const soal of soalData) {
      const result = await client.query(
        `INSERT INTO soal (tryout_id, nomor_soal, kategori, teks, kunci, pembahasan)
         VALUES (3, $1, $2, $3, $4, $5)
         RETURNING id`,
        [soal.id, soal.kategori, soal.teks, soal.kunci, soal.pembahasan]
      );
      const soalId = result.rows[0].id;

      for (const p of soal.pilihan) {
        await client.query(
          `INSERT INTO pilihan_jawaban (soal_id, huruf, teks, poin)
           VALUES ($1, $2, $3, $4)`,
          [soalId, p.huruf, p.teks, p.poin || null]
        );
      }
    }

    await client.query('COMMIT');
    console.log('Seed soal Paket 3 berhasil: ' + soalData.length + ' soal');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal seed soal Paket 3:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

seedSoalPaket3().catch(() => process.exit(1));
