/* ══════════════════════════════════════════════
   SKD ACADEMY — API HELPER
   Mode: LOKAL (offline)
   Tambahkan ke semua HTML sebelum script lain:
   <script src="api.js"></script>
══════════════════════════════════════════════ */

const API_URL = window.API_URL || 'https://skd-academy.vercel.app';

function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function sanitizeHTML(html) {
  if (typeof html !== 'string') return '';
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
    .replace(/on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '')
    .replace(/href\s*=\s*"javascript:/gi, 'href="#"')
    .replace(/href\s*=\s*'javascript:/gi, "href='#'")
    .replace(/href\s*=\s*javascript:/gi, 'href="#"');
}

function apiGetSoal(tryoutId, review) {
  var endpoint = '/api/soal/' + tryoutId;
  if (review) endpoint += '?review=true';
  return apiRequest(endpoint);
}


/* ══════════════════════════════
   HELPER: Fetch ke backend
══════════════════════════════ */
async function apiRequest(endpoint, method = 'GET', body = null) {
  const token = localStorage.getItem('skd_token');

  const options = {
    method,
    headers: { 'Content-Type': 'application/json' }
  };

  if (token) {
    options.headers['Authorization'] = 'Bearer ' + token;
  }

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(API_URL + endpoint, options);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || 'Terjadi kesalahan.');
  }

  return data;
}

/* ──────────────────────────────── */

function simpanDataUser(token, user) {
  localStorage.setItem('skd_token', token);
  localStorage.setItem('skd_user',  JSON.stringify(user));
  sessionStorage.setItem('skd_nama',    user.nama);
  sessionStorage.setItem('skd_email',   user.email);
  sessionStorage.setItem('skd_inisial', user.inisial);
}

/* ══════════════════════════════
   AUTH
══════════════════════════════ */
async function apiRegister(nama, email, password) {
  const data = await apiRequest('/api/auth/register', 'POST', { nama, email, password });
  simpanDataUser(data.token, data.user);
  return data;
}

async function apiLogin(email, password) {
  const data = await apiRequest('/api/auth/login', 'POST', { email, password });
  simpanDataUser(data.token, data.user);
  return data;
}

function apiLogout() {
  localStorage.removeItem('skd_token');
  localStorage.removeItem('skd_user');
  sessionStorage.clear();
}

function isLoggedIn() {
  return !!localStorage.getItem('skd_token');
}

function getUser() {
  const raw = localStorage.getItem('skd_user');
  return raw ? JSON.parse(raw) : null;
}

/* ══════════════════════════════
   TRYOUT
══════════════════════════════ */
async function apiBeli(tryout_id, nama_paket, harga) {
  return await apiRequest('/api/tryout/beli', 'POST', { tryout_id, nama_paket, harga });
}

async function apiGetDimiliki() {
  const data = await apiRequest('/api/tryout/dimiliki');
  return data.tryout;
}

async function apiSimpanJawaban(tryout_id, soal_id, jawaban) {
  try {
    await apiRequest('/api/tryout/simpan-jawaban', 'POST', { tryout_id, soal_id, jawaban });
  } catch (err) {
    console.warn('Auto-save gagal:', err.message);
  }
}

async function apiGetJawaban(tryout_id) {
  try {
    const data = await apiRequest('/api/tryout/jawaban/' + tryout_id);
    return data.jawaban;
  } catch (err) {
    console.warn('Gagal ambil jawaban:', err.message);
    return {};
  }
}

async function apiKumpulkan(tryout_id, hasil, durasiDetik) {
  return await apiRequest('/api/tryout/kumpulkan', 'POST', {
    tryout_id,
    skor_total:   hasil.totalSkor,
    skor_twk:     hasil.twk.skor,
    skor_tiu:     hasil.tiu.skorKonversi,
    skor_tkp:     hasil.tkp.skor,
    benar_twk:    hasil.twk.benar,
    salah_twk:    hasil.twk.salah,
    kosong_twk:   hasil.twk.kosong,
    benar_tiu:    hasil.tiu.benar,
    salah_tiu:    hasil.tiu.salah,
    kosong_tiu:   hasil.tiu.kosong,
    benar_tkp:    hasil.tkp.benar,
    salah_tkp:    hasil.tkp.salah,
    kosong_tkp:   hasil.tkp.kosong,
    total_benar:  hasil.totalBenar,
    total_salah:  hasil.totalSalah,
    total_kosong: hasil.totalKosong,
    lolos_twk:    hasil.twk.lolos,
    lolos_tiu:    hasil.tiu.lolos,
    lolos_tkp:    hasil.tkp.lolos,
    lolos_skd:    hasil.lolosSkd,
    durasi_detik: durasiDetik
  });
}

async function apiGetRiwayat() {
  const data = await apiRequest('/api/tryout/riwayat');
  return data.riwayat;
}

async function apiGetHasil(tryout_id) {
  const data = await apiRequest('/api/tryout/hasil/' + tryout_id);
  return data.hasil;
}
/* ══════════════════════════════
   TRYOUT — RESET JAWABAN (mulai dari 0)
   Dipanggil saat user klik "Mulai Ujian"
══════════════════════════════ */
async function apiResetJawaban(tryout_id) {
  try {
    await apiRequest('/api/tryout/reset-jawaban/' + tryout_id, 'DELETE');
    console.log('Jawaban tryout ' + tryout_id + ' berhasil direset');
  } catch (err) {
    // Gagal reset tidak perlu stop user
    console.warn('Gagal reset jawaban:', err.message);
  }
}
/* ══════════════════════════════
   TIMER — SIMPAN SISA WAKTU
══════════════════════════════ */
async function apiSimpanWaktu(tryout_id, sisa_waktu) {
  try {
    const result = await apiRequest('/api/tryout/simpan-waktu', 'POST', {
      tryout_id, sisa_waktu
    });
    console.log('Waktu tersimpan:', sisa_waktu, 'detik');
  } catch (err) {
    console.warn('Gagal simpan waktu:', err.message);
  }
}

async function apiGetWaktu(tryout_id) {
  const data = await apiRequest('/api/tryout/get-waktu/' + tryout_id);
  console.log('Response get-waktu dari server:', data);
  return data.sisa_waktu;
}
