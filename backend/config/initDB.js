require('dotenv').config();
const pool = require('./db');

/* ══════════════════════════════
   INISIALISASI SEMUA TABEL
   Jalankan: node config/initDB.js
══════════════════════════════ */
async function initDB() {
  const client = await pool.connect();

  try {
    console.log('⏳ Membuat tabel database...');

    await client.query('BEGIN');

    /* ─────────────────────────────
       TABEL 1: USERS
       Menyimpan akun pengguna
    ───────────────────────────── */
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id            SERIAL        PRIMARY KEY,
        nama          VARCHAR(100)  NOT NULL,
        email         VARCHAR(150)  NOT NULL UNIQUE,
        password_hash VARCHAR(255)  NOT NULL,
        inisial       VARCHAR(3)    NOT NULL,
        role          VARCHAR(20)   NOT NULL DEFAULT 'user',
        last_login    TIMESTAMPTZ,
        created_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW()
      );
    `);
    console.log('  ✓ Tabel users');

    /* ─────────────────────────────
       TABEL 2: TRYOUT_DIBELI
       Menyimpan tryout yang sudah dibeli user
    ───────────────────────────── */
    await client.query(`
      CREATE TABLE IF NOT EXISTS tryout_dibeli (
        id          SERIAL       PRIMARY KEY,
        user_id     INTEGER      NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        tryout_id   INTEGER      NOT NULL,
        nama_paket  VARCHAR(100) NOT NULL,
        harga       INTEGER      NOT NULL DEFAULT 0,
        dibeli_at   TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, tryout_id)
      );
    `);
    console.log('  ✓ Tabel tryout_dibeli');

    /* ─────────────────────────────
       TABEL 3: JAWABAN PESERTA
       Menyimpan jawaban per soal (auto-save)
    ───────────────────────────── */
    await client.query(`
      CREATE TABLE IF NOT EXISTS jawaban_peserta (
        id          SERIAL       PRIMARY KEY,
        user_id     INTEGER      NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        tryout_id   INTEGER      NOT NULL,
        soal_id     INTEGER      NOT NULL,
        jawaban     VARCHAR(1),
        updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, tryout_id, soal_id)
      );
    `);
    console.log('  ✓ Tabel jawaban_peserta');

    /* ─────────────────────────────
       TABEL 4: HASIL TRYOUT
       Menyimpan rekap skor setelah kumpulkan
    ───────────────────────────── */
    await client.query(`
      CREATE TABLE IF NOT EXISTS hasil_tryout (
        id            SERIAL      PRIMARY KEY,
        user_id       INTEGER     NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        tryout_id     INTEGER     NOT NULL,

        -- Skor per kategori
        skor_total    INTEGER     NOT NULL DEFAULT 0,
        skor_twk      INTEGER     NOT NULL DEFAULT 0,
        skor_tiu      INTEGER     NOT NULL DEFAULT 0,
        skor_tkp      INTEGER     NOT NULL DEFAULT 0,

        -- Statistik TWK (30 soal)
        benar_twk     INTEGER     NOT NULL DEFAULT 0,
        salah_twk     INTEGER     NOT NULL DEFAULT 0,
        kosong_twk    INTEGER     NOT NULL DEFAULT 0,

        -- Statistik TIU (35 soal)
        benar_tiu     INTEGER     NOT NULL DEFAULT 0,
        salah_tiu     INTEGER     NOT NULL DEFAULT 0,
        kosong_tiu    INTEGER     NOT NULL DEFAULT 0,

        -- Statistik TKP (45 soal)
        benar_tkp     INTEGER     NOT NULL DEFAULT 0,
        salah_tkp     INTEGER     NOT NULL DEFAULT 0,
        kosong_tkp    INTEGER     NOT NULL DEFAULT 0,

        -- Total keseluruhan (110 soal)
        total_benar   INTEGER     NOT NULL DEFAULT 0,
        total_salah   INTEGER     NOT NULL DEFAULT 0,
        total_kosong  INTEGER     NOT NULL DEFAULT 0,

        -- Status kelulusan passing grade
        lolos_twk     BOOLEAN     NOT NULL DEFAULT FALSE,
        lolos_tiu     BOOLEAN     NOT NULL DEFAULT FALSE,
        lolos_tkp     BOOLEAN     NOT NULL DEFAULT FALSE,
        lolos_skd     BOOLEAN     NOT NULL DEFAULT FALSE,

        -- Durasi pengerjaan dalam detik
        durasi_detik  INTEGER,

        selesai_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),

        UNIQUE (user_id, tryout_id)
      );
    `);
    console.log('  ✓ Tabel hasil_tryout');

    /* ─────────────────────────────
       INDEX untuk query cepat
    ───────────────────────────── */
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_users_email
        ON users(email);

      CREATE INDEX IF NOT EXISTS idx_tryout_dibeli_user
        ON tryout_dibeli(user_id);

      CREATE INDEX IF NOT EXISTS idx_jawaban_user_tryout
        ON jawaban_peserta(user_id, tryout_id);

      CREATE INDEX IF NOT EXISTS idx_hasil_user
        ON hasil_tryout(user_id, selesai_at DESC);
    `);
    console.log('  ✓ Index database');

    await client.query('COMMIT');
    console.log('\n✅ Database berhasil diinisialisasi!');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Gagal inisialisasi database:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

initDB().catch(() => process.exit(1));
