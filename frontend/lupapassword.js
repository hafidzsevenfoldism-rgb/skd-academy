document.getElementById('lupaForm').addEventListener('submit', async function (e) {
  e.preventDefault();

  const btn   = document.getElementById('btnKirim');
  const email = document.getElementById('email').value.trim();

  if (!email) { alert('Email wajib diisi.'); return; }

  btn.textContent   = 'Mengirim...';
  btn.style.opacity = '0.85';
  btn.disabled      = true;

  try {
    const res = await fetch('/api/auth/lupa-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error || 'Terjadi kesalahan.');
    } else {
      alert('Jika email terdaftar, link reset password sudah dikirim. Silakan cek inbox/spam email kamu.');
    }
  } catch (err) {
    alert('Gagal terhubung ke server. Coba lagi nanti.');
  } finally {
    btn.textContent   = 'Kirim Link Reset';
    btn.style.opacity = '1';
    btn.disabled      = false;
  }
});
