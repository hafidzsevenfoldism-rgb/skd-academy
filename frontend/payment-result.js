(function () {
  var params = new URLSearchParams(window.location.search);
  var orderId = params.get('order_id');
  var txnStatus = params.get('transaction_status');
  var grossAmount = params.get('gross_amount');

  var loading = document.getElementById('loadingMsg');

  if (!orderId) {
    loading.innerHTML = '<p style="color:#ff6b6b;">Data pembayaran tidak ditemukan.</p>';
    return;
  }

  function showSuccess() {
    if (typeof fbq === 'function' && grossAmount) fbq('track', 'Purchase', {value: Number(grossAmount), currency: 'IDR'});
    loading.innerHTML =
      '<div style="font-size:64px;color:#4CAF50;margin:20px 0;">✓</div>' +
      '<h2 style="color:#C8903A;font-size:24px;">Pembayaran Berhasil!</h2>' +
      '<p style="color:#8899aa;margin:10px 0 20px;">Try out SKD Paket 2 sudah siap kamu kerjakan.</p>' +
      '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Ke Halaman Utama</a>';
  }

  function showFailed(title) {
    loading.innerHTML =
      '<div style="font-size:64px;color:#ff6b6b;margin:20px 0;">✕</div>' +
      '<h2 style="color:#C8903A;font-size:24px;">' + title + '</h2>' +
      '<p style="color:#8899aa;margin:10px 0 20px;">Silakan coba lagi.</p>' +
      '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Coba Lagi</a>';
  }

  function showPending() {
    loading.innerHTML =
      '<div style="font-size:64px;color:#ffa726;margin:20px 0;">⏳</div>' +
      '<h2 style="color:#C8903A;font-size:24px;">Menunggu Pembayaran</h2>' +
      '<p style="color:#8899aa;margin:10px 0 20px;">Memverifikasi pembayaran...</p>';
  }

  // Jika URL langsung kasih status final (dari Midtrans redirect)
  if (txnStatus) {
    var lowerStatus = txnStatus.toLowerCase();

    if (lowerStatus === 'capture' || lowerStatus === 'settlement') {
      showPending();

      // Kirim konfirmasi ke backend agar tryout langsung aktif
      var statusCode = params.get('status_code');
      var signatureKey = params.get('signature_key');

      (async function () {
        try {
          await apiRequest('/api/payment/confirm', 'POST', {
            order_id: orderId,
            transaction_status: txnStatus,
            status_code: statusCode,
            gross_amount: grossAmount,
            signature_key: signatureKey
          });
        } catch (_) {}

        showSuccess();
      })();

      return;
    }

    if (lowerStatus === 'deny' || lowerStatus === 'cancel') {
      showFailed('Pembayaran Gagal / Dibatalkan');
      return;
    }

    if (lowerStatus === 'expire') {
      showFailed('Pembayaran Kedaluwarsa');
      return;
    }
  }

  function delay(ms) {
    return new Promise(function (resolve) { setTimeout(resolve, ms); });
  }

  // Polling status API tiap 3 detik (max 90 detik) — backup kalau redirect tanpa status
  (async function () {
    showPending();

    for (var i = 0; i < 30; i++) {
      await delay(3000);

      try {
        var data = await apiRequest('/api/payment/status/' + encodeURIComponent(orderId), 'GET');
        var tx = data.transaction;

        if (tx.status === 'PAID') {
          showSuccess();
          return;
        }

        if (tx.status === 'FAILED') {
          showFailed('Pembayaran Gagal');
          return;
        }

        if (tx.status === 'EXPIRED') {
          showFailed('Pembayaran Kedaluwarsa');
          return;
        }
      } catch (_) {}
    }

    loading.innerHTML =
      '<div style="font-size:64px;color:#ffa726;margin:20px 0;">⏳</div>' +
      '<h2 style="color:#C8903A;font-size:24px;">Menunggu Konfirmasi</h2>' +
      '<p style="color:#8899aa;margin:10px 0 20px;">Pembayaran sedang diproses. Silakan cek halaman utama.</p>' +
      '<a href="home.html" class="btn-login" style="display:inline-block;text-decoration:none;">Ke Halaman Utama</a>';
  })();
})();
