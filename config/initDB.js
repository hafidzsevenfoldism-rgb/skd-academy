require('dotenv').config();
const pool = require('./db');

async function initDB() {
  const client = await pool.connect();

  try {
    console.log('Membuat tabel database...');
    await client.query('BEGIN');

    /* TABEL 1: USERS */
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
    console.log('  Tabel users');

    /* TABEL 2: PAKET TRYOUT */
    await client.query(`
      CREATE TABLE IF NOT EXISTS paket_tryout (
        id            SERIAL        PRIMARY KEY,
        tryout_id     INTEGER       NOT NULL UNIQUE,
        nama_paket    VARCHAR(100)  NOT NULL,
        deskripsi     TEXT,
        jumlah_soal   INTEGER       NOT NULL DEFAULT 110,
        waktu_menit   INTEGER       NOT NULL DEFAULT 100,
        harga         INTEGER       NOT NULL DEFAULT 0,
        harga_asli    INTEGER       NOT NULL DEFAULT 0,
        stripe_color  VARCHAR(20)   NOT NULL DEFAULT '#4FC3E0',
        is_baru       BOOLEAN       NOT NULL DEFAULT FALSE,
        is_aktif      BOOLEAN       NOT NULL DEFAULT TRUE,
        created_at    TIMESTAMPTZ   NOT NULL DEFAULT NOW()
      );
    `);
    console.log('  Tabel paket_tryout');

    /* Seed: Paket 1 */
    await client.query(`
      INSERT INTO paket_tryout
        (tryout_id, nama_paket, deskripsi, jumlah_soal, waktu_menit,
         harga, harga_asli, stripe_color, is_baru, is_aktif)
      VALUES
        (1, 'Try Out SKD Paket 1',
         'Simulasi SKD lengkap: TWK + TIU + TKP sesuai standar BKN terbaru.',
         110, 100, 0, 30000, '#4FC3E0', true, true)
      ON CONFLICT (tryout_id) DO NOTHING;
    `);
    console.log('  Seed Paket 1');

    /* TABEL 3: TRYOUT DIMILIKI USER */
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
    console.log('  Tabel tryout_dibeli');

    /* TABEL 4: JAWABAN PESERTA */
    await client.query(`
      CREATE TABLE IF NOT EXISTS jawaban_peserta (
        id          SERIAL       PRIMARY KEY,
        user_id     INTEGER      NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        tryout_id   INTEGER      NOT NULL,
        soal_id     INTEGER      NOT NULL,
        jawaban     VARCHAR(1),
        sisa_waktu  INTEGER,
        updated_at  TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, tryout_id, soal_id)
      );
    `);
    console.log('  Tabel jawaban_peserta');

    /* TABEL 5: HASIL TRYOUT */
    await client.query(`
      CREATE TABLE IF NOT EXISTS hasil_tryout (
        id            SERIAL      PRIMARY KEY,
        user_id       INTEGER     NOT NULL REFERENCES users(id) ON DELETE CASCADE,
        tryout_id     INTEGER     NOT NULL,
        skor_total    INTEGER     NOT NULL DEFAULT 0,
        skor_twk      INTEGER     NOT NULL DEFAULT 0,
        skor_tiu      INTEGER     NOT NULL DEFAULT 0,
        skor_tkp      INTEGER     NOT NULL DEFAULT 0,
        benar_twk     INTEGER     NOT NULL DEFAULT 0,
        salah_twk     INTEGER     NOT NULL DEFAULT 0,
        kosong_twk    INTEGER     NOT NULL DEFAULT 0,
        benar_tiu     INTEGER     NOT NULL DEFAULT 0,
        salah_tiu     INTEGER     NOT NULL DEFAULT 0,
        kosong_tiu    INTEGER     NOT NULL DEFAULT 0,
        benar_tkp     INTEGER     NOT NULL DEFAULT 0,
        salah_tkp     INTEGER     NOT NULL DEFAULT 0,
        kosong_tkp    INTEGER     NOT NULL DEFAULT 0,
        total_benar   INTEGER     NOT NULL DEFAULT 0,
        total_salah   INTEGER     NOT NULL DEFAULT 0,
        total_kosong  INTEGER     NOT NULL DEFAULT 0,
        lolos_twk     BOOLEAN     NOT NULL DEFAULT FALSE,
        lolos_tiu     BOOLEAN     NOT NULL DEFAULT FALSE,
        lolos_tkp     BOOLEAN     NOT NULL DEFAULT FALSE,
        lolos_skd     BOOLEAN     NOT NULL DEFAULT FALSE,
        durasi_detik  INTEGER,
        selesai_at    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        UNIQUE (user_id, tryout_id)
      );
    `);
    console.log('  Tabel hasil_tryout');

    /* TABEL 6: SOAL */
    await client.query(`
      CREATE TABLE IF NOT EXISTS soal (
        id          SERIAL       PRIMARY KEY,
        tryout_id   INTEGER      NOT NULL REFERENCES paket_tryout(tryout_id) ON DELETE CASCADE,
        nomor_soal  INTEGER      NOT NULL,
        kategori    VARCHAR(10)  NOT NULL CHECK (kategori IN ('TWK', 'TIU', 'TKP')),
        teks        TEXT         NOT NULL,
        kunci       VARCHAR(1)   NOT NULL,
        pembahasan  TEXT         DEFAULT '',
        UNIQUE (tryout_id, nomor_soal)
      );
    `);
    console.log('  Tabel soal');

    /* TABEL 7: PILIHAN JAWABAN */
    await client.query(`
      CREATE TABLE IF NOT EXISTS pilihan_jawaban (
        id      SERIAL       PRIMARY KEY,
        soal_id INTEGER      NOT NULL REFERENCES soal(id) ON DELETE CASCADE,
        huruf   VARCHAR(1)   NOT NULL,
        teks    TEXT         NOT NULL,
        poin    INTEGER,
        UNIQUE (soal_id, huruf)
      );
    `);
    console.log('  Tabel pilihan_jawaban');

    /* INDEX */
    await client.query(`
      CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
      CREATE INDEX IF NOT EXISTS idx_tryout_dibeli_user ON tryout_dibeli(user_id);
      CREATE INDEX IF NOT EXISTS idx_jawaban_user_tryout ON jawaban_peserta(user_id, tryout_id);
      CREATE INDEX IF NOT EXISTS idx_hasil_user ON hasil_tryout(user_id, selesai_at DESC);
      CREATE INDEX IF NOT EXISTS idx_paket_aktif ON paket_tryout(is_aktif);
      CREATE INDEX IF NOT EXISTS idx_soal_tryout ON soal(tryout_id);
      CREATE INDEX IF NOT EXISTS idx_pilihan_soal ON pilihan_jawaban(soal_id);
    `);
    console.log('  Index database');

    await client.query('COMMIT');
    console.log('\nDatabase berhasil diinisialisasi!');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal inisialisasi database:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

initDB().catch(() => process.exit(1));
