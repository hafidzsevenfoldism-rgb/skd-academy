(function () {
  var params = new URLSearchParams(window.location.search);
  var orderId = params.get('order_id');
  var txnStatus = params.get('transaction_status');

  var loading = document.getElementById('loadingMsg');
  var resultContent = document.getElementById('resultContent');

  if (!orderId) {
    loading.innerHTML = '<p style="color:#ff6b6b;">Data pembayaran tidak ditemukan.</p>';
    return;
  }

  // Jika Midtrans langsung redirect dengan status
  if (txnStatus) {
    var lowerStatus = txnStatus.toLowerCase();
    if (lowerStatus === 'capture' || lowerStatus === 'settlement') {
      loading.innerHTML =
        '<div style="font-size:64px;color:#4CAF50;margin:20px 0;">✓</div>' +
        '<h2 style="color:#fff;font-size:24px;">Pembayaran Berhasil!</h2>' +
        '<p style="color:#8899aa;margin:10px 0 20px;">Try out SKD Paket 2 sudah siap kamu kerjakan.</p>' +
        '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Ke Halaman Utama</a>';
      return;
    }

    if (lowerStatus === 'deny' || lowerStatus === 'cancel') {
      loading.innerHTML =
        '<div style="font-size:64px;color:#ff6b6b;margin:20px 0;">✕</div>' +
        '<h2 style="color:#fff;font-size:24px;">Pembayaran Gagal / Dibatalkan</h2>' +
        '<p style="color:#8899aa;margin:10px 0 20px;">Silakan coba lagi.</p>' +
        '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Coba Lagi</a>';
      return;
    }

    if (lowerStatus === 'pending') {
      loading.innerHTML =
        '<div style="font-size:64px;color:#ffa726;margin:20px 0;">⏳</div>' +
        '<h2 style="color:#fff;font-size:24px;">Menunggu Pembayaran</h2>' +
        '<p style="color:#8899aa;margin:10px 0 20px;">Pembayaran sedang diproses. Silakan cek halaman utama.</p>' +
        '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Ke Halaman Utama</a>';
      return;
    }

    if (lowerStatus === 'expire') {
      loading.innerHTML =
        '<div style="font-size:64px;color:#ff6b6b;margin:20px 0;">✕</div>' +
        '<h2 style="color:#fff;font-size:24px;">Pembayaran Kedaluwarsa</h2>' +
        '<p style="color:#8899aa;margin:10px 0 20px;">Waktu pembayaran habis. Silakan coba lagi.</p>' +
        '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Coba Lagi</a>';
      return;
    }
  }

  // Fallback: cek status dari API
  (async function () {
    try {
      var data = await apiRequest('/api/payment/status/' + encodeURIComponent(orderId), 'GET');
      var tx = data.transaction;

      if (tx.status === 'PAID') {
        loading.innerHTML =
          '<div style="font-size:64px;color:#4CAF50;margin:20px 0;">✓</div>' +
          '<h2 style="color:#fff;font-size:24px;">Pembayaran Berhasil!</h2>' +
          '<p style="color:#8899aa;margin:10px 0 20px;">Try out SKD Paket 2 sudah siap kamu kerjakan.</p>' +
          '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Ke Halaman Utama</a>';
      } else if (tx.status === 'PENDING') {
        loading.innerHTML =
          '<div style="font-size:64px;color:#ffa726;margin:20px 0;">⏳</div>' +
          '<h2 style="color:#fff;font-size:24px;">Menunggu Pembayaran</h2>' +
          '<p style="color:#8899aa;margin:10px 0 20px;">Pembayaran sedang diproses. Silakan cek halaman utama.</p>' +
          '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Ke Halaman Utama</a>';
      } else {
        loading.innerHTML =
          '<div style="font-size:64px;color:#ff6b6b;margin:20px 0;">✕</div>' +
          '<h2 style="color:#fff;font-size:24px;">Pembayaran ' + tx.status + '</h2>' +
          '<p style="color:#8899aa;margin:10px 0 20px;">Silakan coba lagi.</p>' +
          '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Coba Lagi</a>';
      }
    } catch (err) {
      loading.innerHTML =
        '<h2 style="color:#fff;font-size:24px;">Pembayaran Diproses</h2>' +
        '<p style="color:#8899aa;margin:10px 0 20px;">Silakan cek halaman utama untuk melihat status tryout kamu.</p>' +
        '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Ke Halaman Utama</a>';
    }
  })();
})();
