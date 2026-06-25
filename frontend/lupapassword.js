document.getElementById('lupaForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn   = document.getElementById('btnKirim');
  const email = document.getElementById('email').value.trim();

  if (!email) { alert('Email wajib diisi.'); return; }

  btn.textContent   = 'Mengirim...';
  btn.style.opacity = '0.85';
  btn.disabled      = true;

  try {
    await apiRequest('/api/auth/lupa-password', 'POST', { email });
    alert('Jika email terdaftar, link reset password sudah dikirim. Silakan cek inbox/spam email kamu.');
  } catch (err) {
    alert(err.message || 'Gagal terhubung ke server. Coba lagi nanti.');
  } finally {
    btn.textContent   = 'Kirim Link Reset';
    btn.style.opacity = '1';
    btn.disabled      = false;
  }
});
