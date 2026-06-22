/* ══════════════════════════════
   TOGGLE SHOW / HIDE PASSWORD
══════════════════════════════ */
const togglePw = document.getElementById('togglePw');
const pwInput  = document.getElementById('password');
const eyeIcon  = document.getElementById('eyeIcon');

togglePw.addEventListener('click', function () {
  const isHidden = pwInput.type === 'password';

  pwInput.type = isHidden ? 'text' : 'password';

  eyeIcon.innerHTML = isHidden
    ? `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
       <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
       <line x1="1" y1="1" x2="23" y2="23"/>`
    : `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
       <circle cx="12" cy="12" r="3"/>`;
});


/* ══════════════════════════════
   RIPPLE EFFECT PADA TOMBOL
══════════════════════════════ */
function buatRipple(e, btn) {
  const ripple = document.createElement('span');
  const rect   = btn.getBoundingClientRect();

  ripple.classList.add('ripple-el');
  ripple.style.left = (e.clientX - rect.left - 50) + 'px';
  ripple.style.top  = (e.clientY - rect.top  - 50) + 'px';

  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
}


/* ══════════════════════════════
   AMBIL NAMA DARI EMAIL
   Contoh: ahmad.fauzi@gmail.com → Ahmad Fauzi
══════════════════════════════ */
function getNamaFromEmail(email) {
  // Ambil bagian sebelum @
  const localPart = email.split('@')[0];

  // Ganti titik/underscore/angka dengan spasi, lalu kapitalisasi tiap kata
  const nama = localPart
    .replace(/[._\-0-9]/g, ' ')   // ganti . _ - dan angka dengan spasi
    .replace(/\s+/g, ' ')          // hapus spasi ganda
    .trim()
    .split(' ')
    .map(function (kata) {
      return kata.charAt(0).toUpperCase() + kata.slice(1).toLowerCase();
    })
    .join(' ');

  return nama || 'Pengguna';
}


/* ══════════════════════════════
   HANDLE FORM SUBMIT (LOGIN)
══════════════════════════════ */
document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn   = document.getElementById('btnLogin');
  const email = document.getElementById('email').value.trim();
  const pass  = document.getElementById('password').value.trim();

  if (!email || !pass) { alert('Email dan password wajib diisi!'); return; }

  buatRipple(e, btn);
  btn.textContent   = 'Memuat...';
  btn.style.opacity = '0.85';
  btn.disabled      = true;

  try {
    await apiLogin(email, pass);
    btn.textContent      = '✓ Berhasil Masuk';
    btn.style.background = 'linear-gradient(135deg, #2A9D8F, #52B788)';
    btn.style.opacity    = '1';
    setTimeout(() => window.location.href = 'home.html', 1000);
  } catch (err) {
    alert(err.message || 'Email atau password salah.');
    btn.textContent   = 'MASUK';
    btn.style.opacity = '1';
    btn.disabled      = false;
  }
});
