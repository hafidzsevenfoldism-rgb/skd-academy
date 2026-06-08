require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });
const pool = require('./db');

/*
  ══════════════════════════════════════════════════════════
  TEMPLATE SOAL TRY OUT SKD PAKET 2
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
    teks: "",         // ← isi teks soal
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",        // ← isi kunci (A/B/C/D/E)
    pembahasan: ""   // ← isi pembahasan
  },

  // ─── Soal 2 ───
  {
    id: 2, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 3 ───
  {
    id: 3, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 4 ───
  {
    id: 4, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 5 ───
  {
    id: 5, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 6 ───
  {
    id: 6, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 7 ───
  {
    id: 7, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 8 ───
  {
    id: 8, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 9 ───
  {
    id: 9, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 10 ───
  {
    id: 10, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 11 ───
  {
    id: 11, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 12 ───
  {
    id: 12, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 13 ───
  {
    id: 13, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 14 ───
  {
    id: 14, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 15 ───
  {
    id: 15, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 16 ───
  {
    id: 16, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 17 ───
  {
    id: 17, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 18 ───
  {
    id: 18, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 19 ───
  {
    id: 19, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 20 ───
  {
    id: 20, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 21 ───
  {
    id: 21, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 22 ───
  {
    id: 22, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 23 ───
  {
    id: 23, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 24 ───
  {
    id: 24, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 25 ───
  {
    id: 25, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 26 ───
  {
    id: 26, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 27 ───
  {
    id: 27, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 28 ───
  {
    id: 28, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 29 ───
  {
    id: 29, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 30 ───
  {
    id: 30, kategori: "TWK",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ════════════════════════════════════════════
  // TES INTELIGENSIA UMUM (TIU) — 35 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 31 ───
  {
    id: 31, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 32 ───
  {
    id: 32, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 33 ───
  {
    id: 33, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 34 ───
  {
    id: 34, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 35 ───
  {
    id: 35, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 36 ───
  {
    id: 36, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 37 ───
  {
    id: 37, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 38 ───
  {
    id: 38, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 39 ───
  {
    id: 39, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 40 ───
  {
    id: 40, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 41 ───
  {
    id: 41, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 42 ───
  {
    id: 42, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 43 ───
  {
    id: 43, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 44 ───
  {
    id: 44, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 45 ───
  {
    id: 45, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 46 ───
  {
    id: 46, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 47 ───
  {
    id: 47, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 48 ───
  {
    id: 48, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 49 ───
  {
    id: 49, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 50 ───
  {
    id: 50, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 51 ───
  {
    id: 51, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 52 ───
  {
    id: 52, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 53 ───
  {
    id: 53, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 54 ───
  {
    id: 54, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 55 ───
  {
    id: 55, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 56 ───
  {
    id: 56, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 57 ───
  {
    id: 57, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 58 ───
  {
    id: 58, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 59 ───
  {
    id: 59, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 60 ───
  {
    id: 60, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 61 ───
  {
    id: 61, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 62 ───
  {
    id: 62, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 63 ───
  {
    id: 63, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 64 ───
  {
    id: 64, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 65 ───
  {
    id: 65, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ════════════════════════════════════════════
  // TES KARAKTERISTIK PRIBADI (TKP) — 45 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 66 ───
  {
    id: 66, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 67 ───
  {
    id: 67, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 68 ───
  {
    id: 68, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 69 ───
  {
    id: 69, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 70 ───
  {
    id: 70, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 71 ───
  {
    id: 71, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 72 ───
  {
    id: 72, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 73 ───
  {
    id: 73, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 74 ───
  {
    id: 74, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 75 ───
  {
    id: 75, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 76 ───
  {
    id: 76, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 77 ───
  {
    id: 77, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 78 ───
  {
    id: 78, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 79 ───
  {
    id: 79, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 80 ───
  {
    id: 80, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 81 ───
  {
    id: 81, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 82 ───
  {
    id: 82, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 83 ───
  {
    id: 83, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 84 ───
  {
    id: 84, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 85 ───
  {
    id: 85, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 86 ───
  {
    id: 86, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 87 ───
  {
    id: 87, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 88 ───
  {
    id: 88, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 89 ───
  {
    id: 89, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 90 ───
  {
    id: 90, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 91 ───
  {
    id: 91, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 92 ───
  {
    id: 92, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 93 ───
  {
    id: 93, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 94 ───
  {
    id: 94, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 95 ───
  {
    id: 95, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 96 ───
  {
    id: 96, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 97 ───
  {
    id: 97, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 98 ───
  {
    id: 98, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 99 ───
  {
    id: 99, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 100 ───
  {
    id: 100, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 101 ───
  {
    id: 101, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 102 ───
  {
    id: 102, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 103 ───
  {
    id: 103, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 104 ───
  {
    id: 104, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 105 ───
  {
    id: 105, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 106 ───
  {
    id: 106, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 107 ───
  {
    id: 107, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 108 ───
  {
    id: 108, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 109 ───
  {
    id: 109, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 110 ───
  {
    id: 110, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  }

];

// ════════════════════════════════════════════
// FUNGSI SEED KE DATABASE
// ════════════════════════════════════════════
async function seedSoalPaket2() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Hapus data lama untuk tryout_id = 2
    await client.query(`DELETE FROM pilihan_jawaban WHERE soal_id IN (SELECT id FROM soal WHERE tryout_id = 2)`);
    await client.query(`DELETE FROM soal WHERE tryout_id = 2`);

    for (const soal of soalData) {
      const result = await client.query(
        `INSERT INTO soal (tryout_id, nomor_soal, kategori, teks, kunci, pembahasan)
         VALUES (2, $1, $2, $3, $4, $5)
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
    console.log('Seed soal Paket 2 berhasil: ' + soalData.length + ' soal');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal seed soal Paket 2:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

seedSoalPaket2().catch(() => process.exit(1));
