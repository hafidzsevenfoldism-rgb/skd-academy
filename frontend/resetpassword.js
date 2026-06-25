/* ─── Ambil token dari URL ─── */
var params = new URLSearchParams(window.location.search);
var token  = params.get('token');

if (!token) {
  document.getElementById('resetWelcome').querySelector('.welcome-sub').textContent =
    'Token reset tidak ditemukan. Silakan ulangi dari awal.';
  document.getElementById('resetForm').style.display = 'none';
}

document.getElementById('resetForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  var btn       = document.getElementById('btnReset');
  var password  = document.getElementById('password').value.trim();
  var password2 = document.getElementById('password2').value.trim();

  if (password !== password2) {
    alert('Konfirmasi password tidak cocok.');
    return;
  }
  if (password.length < 6) {
    alert('Password minimal 6 karakter.');
    return;
  }

  btn.textContent   = 'Mereset...';
  btn.style.opacity = '0.85';
  btn.disabled      = true;

  try {
    var res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: token, password: password })
    });

    var data = await res.json();

    if (!res.ok) {
      alert(data.error || 'Terjadi kesalahan.');
    } else {
      alert('Password berhasil direset. Silakan login dengan password baru.');
      window.location.href = 'login.html';
    }
  } catch (err) {
    alert('Gagal terhubung ke server. Coba lagi nanti.');
  } finally {
    btn.textContent   = 'Reset Password';
    btn.style.opacity = '1';
    btn.disabled      = false;
  }
});
