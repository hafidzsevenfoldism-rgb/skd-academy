/* ══════════════════════════════
   TOGGLE SHOW / HIDE PASSWORD
══════════════════════════════ */
const togglePw1 = document.getElementById('togglePw1');
const togglePw2 = document.getElementById('togglePw2');
const pwInput1  = document.getElementById('password');
const pwInput2  = document.getElementById('password2');

function togglePassword(btn, input) {
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';

  const eyeIcon = btn.querySelector('.eye-icon');
  eyeIcon.innerHTML = isHidden
    ? `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
       <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
       <line x1="1" y1="1" x2="23" y2="23"/>`
    : `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
       <circle cx="12" cy="12" r="3"/>`;
}

togglePw1.addEventListener('click', function () { togglePassword(this, pwInput1); });
togglePw2.addEventListener('click', function () { togglePassword(this, pwInput2); });


/* ══════════════════════════════
   PASSWORD MATCH CHECKER
══════════════════════════════ */
const passwordMatch = document.getElementById('passwordMatch');

function checkPasswordMatch() {
  const pw1 = pwInput1.value;
  const pw2 = pwInput2.value;

  if (!pw2) {
    passwordMatch.textContent = '';
    passwordMatch.className = 'password-match';
    return false;
  }

  if (pw1 === pw2) {
    passwordMatch.textContent = '✓ Password cocok';
    passwordMatch.className = 'password-match match';
    return true;
  } else {
    passwordMatch.textContent = '✗ Password tidak cocok';
    passwordMatch.className = 'password-match no-match';
    return false;
  }
}

pwInput1.addEventListener('input', checkPasswordMatch);
pwInput2.addEventListener('input', checkPasswordMatch);


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
   NOTIFIKASI SUKSES
══════════════════════════════ */
function tampilkanNotif() {
  // Buat overlay notifikasi
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed; inset: 0; z-index: 9999;
    background: rgba(13, 31, 51, 0.75);
    display: flex; align-items: center; justify-content: center;
    animation: fadeInOverlay 0.3s ease;
  `;

  overlay.innerHTML = `
    <div style="
      background: #fff;
      border-radius: 24px;
      padding: 40px 36px 36px;
      width: min(380px, 88vw);
      text-align: center;
      box-shadow: 0 20px 60px rgba(0,0,0,0.25);
      animation: popIn 0.4s cubic-bezier(.22,1,.36,1);
      border-top: 4px solid #52B788;
    ">
      <!-- Icon centang -->
      <div style="
        width: 72px; height: 72px;
        background: linear-gradient(135deg, #2A9D8F, #52B788);
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        margin: 0 auto 20px;
        box-shadow: 0 8px 24px rgba(82,183,136,0.4);
      ">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none"
             stroke="#fff" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>

      <!-- Judul -->
      <div style="
        font-family: 'Baloo 2', cursive;
        font-size: 22px; font-weight: 800;
        color: #1A2535; margin-bottom: 10px;
      ">Pendaftaran Berhasil!</div>

      <!-- Pesan -->
      <div style="
        font-family: 'Nunito', sans-serif;
        font-size: 14px; font-weight: 600;
        color: #7A8CA0; line-height: 1.6;
        margin-bottom: 28px;
      ">
        Akun kamu berhasil dibuat.<br>
        Silakan masuk untuk melanjutkan belajar. 🎓
      </div>

      <!-- Tombol -->
      <button id="btnMasukSekarang" style="
        width: 100%;
        padding: 14px;
        border: none; border-radius: 14px;
        font-family: 'Baloo 2', cursive;
        font-size: 16px; font-weight: 700;
        letter-spacing: 1px;
        cursor: pointer;
        background: linear-gradient(135deg, #2A9DBF, #4FC3E0);
        color: #fff;
        box-shadow: 0 6px 20px rgba(79,195,224,0.45);
        transition: transform 0.18s, box-shadow 0.18s;
      ">MASUK SEKARANG</button>
    </div>
  `;

  // Tambahkan style animasi
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInOverlay { from { opacity: 0; } to { opacity: 1; } }
    @keyframes popIn {
      from { opacity: 0; transform: scale(0.85) translateY(20px); }
      to   { opacity: 1; transform: scale(1)    translateY(0);    }
    }
  `;
  document.head.appendChild(style);
  document.body.appendChild(overlay);

  // Tombol masuk sekarang
  document.getElementById('btnMasukSekarang').addEventListener('click', function () {
    window.location.href = 'login.html';
  });

  // Klik overlay juga redirect
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      window.location.href = 'login.html';
    }
  });

  // Auto redirect setelah 4 detik
  setTimeout(function () {
    window.location.href = 'login.html';
  }, 4000);
}


/* ══════════════════════════════
   VALIDASI EMAIL
══════════════════════════════ */
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


/* ══════════════════════════════
   HANDLE FORM SUBMIT (REGISTER)
══════════════════════════════ */
document.getElementById('registerForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn   = document.getElementById('btnRegister');
  const nama  = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pass  = pwInput1.value.trim();
  const pass2 = pwInput2.value.trim();

  // ─── VALIDASI ───
  if (!nama || !email || !pass || !pass2) {
    alert('Semua field wajib diisi!');
    return;
  }

  if (!validateEmail(email)) {
    alert('Format email tidak valid!');
    return;
  }

  if (pass.length < 6) {
    alert('Password minimal 6 karakter!');
    return;
  }

  if (pass !== pass2) {
    alert('Password tidak cocok!');
    return;
  }

  // ─── RIPPLE & LOADING ───
  buatRipple(e, btn);

  btn.textContent   = 'Mendaftarkan...';
  btn.style.opacity = '0.85';
  btn.disabled      = true;

  // Simulasi proses daftar 1.2 detik lalu tampilkan notif
  try {
  await apiRegister(nama, email, pass);
  btn.textContent      = '✓ Berhasil!';
  btn.style.background = 'linear-gradient(135deg, #2A9D8F, #52B788)';
  btn.style.opacity    = '1';
  tampilkanNotif();
} catch (err) {
  alert(err.message || 'Gagal mendaftar. Coba lagi.');
  btn.textContent   = 'DAFTAR SEKARANG';
  btn.style.opacity = '1';
  btn.disabled      = false;
}
});