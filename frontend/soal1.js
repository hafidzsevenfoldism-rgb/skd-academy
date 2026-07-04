/* ════════════════════════════════════════════════
   DATA SOAL — dimuat dari database via API
════════════════════════════════════════════════ */
let soalData = [];

async function muatSoal(review) {
  var tryoutId = parseInt(sessionStorage.getItem('skd_tryout_id')) || 1;
  try {
    const token = localStorage.getItem('skd_token');
    if (!token) { muatSoalDariCache(); return; }

    const data = await apiGetSoal(tryoutId, review);
    if (data && data.soal && data.soal.length > 0) {
      soalData = data.soal;
      localStorage.setItem('skd_soal_cache', JSON.stringify(soalData));
    } else {
      muatSoalDariCache();
    }
  } catch (err) {
    console.warn('Gagal muat soal dari server, pakai cache:', err.message);
    muatSoalDariCache();
  }
}

function muatSoalDariCache() {
  var cached = localStorage.getItem('skd_soal_cache');
  if (cached) {
    soalData = JSON.parse(cached);
  }
}


/* ══════════════════════════════
   STATE APLIKASI
══════════════════════════════ */
let currentSoal  = 0;
let jawaban      = [];
let sudahSelesai = false;
let sisaWaktu    = 6000; // 100 menit
let timerInterval;

/* ══════════════════════════════
   FUNGSI TIMER
══════════════════════════════ */
function startTimer() {
  var tryoutId = parseInt(sessionStorage.getItem('skd_tryout_id')) || 1;

  timerInterval = setInterval(async function () {
    sisaWaktu--;

    var menit = Math.floor(sisaWaktu / 60);
    var detik = sisaWaktu % 60;
    var pad   = function (n) { return String(n).padStart(2, '0'); };

    document.getElementById('timerText').textContent = pad(menit) + ':' + pad(detik);

    // Warning jika sisa waktu < 5 menit
    if (sisaWaktu <= 300) {
      document.getElementById('timerWrap').classList.add('warning');
    }

    // Simpan ke localStorage setiap detik (ringan)
    localStorage.setItem('skd_waktu_' + tryoutId, sisaWaktu);

    // Simpan ke database setiap 10 detik (hemat request)
    if (sisaWaktu % 10 === 0) {
      apiSimpanWaktu(tryoutId, sisaWaktu);
    }

    // Waktu habis → kumpulkan otomatis
    if (sisaWaktu <= 0) {
      clearInterval(timerInterval);
      localStorage.removeItem('skd_waktu_' + tryoutId);
      await muatSoal(true);
      tampilkanHasil();
    }
  }, 1000);
}

/* ══════════════════════════════
   RENDER SOAL
══════════════════════════════ */
function renderSoal(idx) {
  var soal = soalData[idx];

  document.getElementById('nomorBadge').textContent   = idx + 1;
  document.getElementById('soalCurrent').textContent  = idx + 1;
  
  var katBadge = document.getElementById('soalKategori');
  katBadge.textContent = soal.kategori;
  katBadge.className = 'soal-kategori'; // Reset
  if (soal.kategori === 'TWK') {
  katBadge.classList.add('twk');
} else if (soal.kategori === 'TIU') {
  katBadge.classList.add('tiu');
} else {
  katBadge.classList.add('tkp');
}

  // Render teks soal (ganti \n dengan <br>)
  document.getElementById('soalTeks').innerHTML = sanitizeHTML(soal.teks);

  // Animasi kartu soal
  var card = document.getElementById('soalCard');
  card.style.animation = 'none';
  void card.offsetHeight; // trigger reflow
  card.style.animation = 'fadeUp 0.35s cubic-bezier(.22,1,.36,1) both';

  // Render pilihan jawaban
  var pilihanList = document.getElementById('pilihanList');
  pilihanList.innerHTML = '';

  soal.pilihan.forEach(function (p) {
    var item = document.createElement('div');
    item.className = 'pilihan-item';
    item.dataset.huruf = p.huruf;

    // Tandai jawaban yang dipilih
    if (jawaban[idx] === p.huruf) {
      item.classList.add('selected');
    }

    // Mode review: tampilkan benar/salah
    if (sudahSelesai) {
      if (p.huruf === soal.kunci) {
        item.classList.remove('selected');
        if (jawaban[idx] === soal.kunci) {
          item.classList.add('correct');
        } else {
          item.classList.add('correct-key');
        }
      } else if (jawaban[idx] === p.huruf) {
        item.classList.add('wrong');
      }
      item.style.cursor = 'default';
      item.style.pointerEvents = 'none';
    } else {
      item.addEventListener('click', function () {
        pilihJawaban(idx, p.huruf);
      });
    }

    item.innerHTML =
      '<div class="pilihan-huruf">' + escapeHTML(p.huruf) + '</div>' +
      '<div class="pilihan-teks">' + sanitizeHTML(p.teks) + '</div>';

    pilihanList.appendChild(item);
  });

  // Pembahasan — hanya tampil di review mode
  var pembahasanBox = document.getElementById('pembahasanBox');
  var pembahasanTeks = document.getElementById('pembahasanTeks');
  if (sudahSelesai && soal.pembahasan) {
    pembahasanTeks.innerHTML = sanitizeHTML(soal.pembahasan);
    pembahasanBox.style.display = 'block';
  } else {
    pembahasanBox.style.display = 'none';
  }

  // Update tombol prev/next
  document.getElementById('btnPrev').disabled = (idx === 0);

  if (idx === soalData.length - 1) {
    document.getElementById('btnNext').style.display = 'none';
  } else {
    document.getElementById('btnNext').style.display = 'inline-flex';
  }

  // Update progress bar
  var pct = ((idx + 1) / soalData.length) * 100;
  document.getElementById('progressFill').style.width = pct + '%';

  // Update grid & statistik
  renderNomorGrid();
  updateStatistik();
}

/* ══════════════════════════════
   PILIH JAWABAN
══════════════════════════════ */
function pilihJawaban(idx, huruf) {
  jawaban[idx] = huruf;

  // Simpan ke backend (tidak blocking, gagal tidak apa-apa)
  var tryoutId = parseInt(sessionStorage.getItem('skd_tryout_id')) || 1;
  apiSimpanJawaban(tryoutId, soalData[idx].id, huruf);

  // Simpan juga ke localStorage sebagai backup offline
  simpanJawabanLokal();

  renderSoal(idx);
}
function simpanJawabanLokal() {
  var tryoutId = sessionStorage.getItem('skd_tryout_id') || '1';
  localStorage.setItem('skd_jwb_' + tryoutId, JSON.stringify(jawaban));
}

async function muatJawaban() {
  var tryoutId = parseInt(sessionStorage.getItem('skd_tryout_id')) || 1;

  try {
    const token = localStorage.getItem('skd_token');
    if (!token) {
      // Belum login — coba pakai cache lokal
      muatJawabanDariCache(tryoutId);
      return;
    }

    // Ambil jawaban dari database
    const jawabanServer = await apiGetJawaban(tryoutId);
    const keys = Object.keys(jawabanServer);

    if (keys.length > 0) {
      // Format dari server: { "soal_id": "huruf" }
      // Cocokkan ke index array berdasarkan soalData[i].id
      keys.forEach(function (soalIdStr) {
        var soalId = parseInt(soalIdStr);
        var idx = soalData.findIndex(function (s) { return s.id === soalId; });
        if (idx !== -1 && jawabanServer[soalIdStr]) {
          jawaban[idx] = jawabanServer[soalIdStr];
        }
      });

      // Update cache lokal dengan data terbaru dari server
      simpanJawabanLokal();
      console.log('Jawaban dimuat dari database: ' + keys.length + ' soal');
    } else {
      // Belum ada jawaban di server — cek cache lokal
      muatJawabanDariCache(tryoutId);
    }

  } catch (err) {
    // Server tidak bisa dihubungi — pakai cache lokal
    console.warn('Gagal muat dari server, pakai cache:', err.message);
    muatJawabanDariCache(tryoutId);
  }
}

function muatJawabanDariCache(tryoutId) {
  var cache = localStorage.getItem('skd_jwb_' + tryoutId);
  if (cache) {
    var parsed = JSON.parse(cache);
    parsed.forEach(function (j, i) {
      if (j !== null && i < jawaban.length) {
        jawaban[i] = j;
      }
    });
    console.log('Jawaban dimuat dari cache lokal');
  }
}



/* ══════════════════════════════
   RENDER NOMOR GRID
══════════════════════════════ */
function renderNomorGrid() {
  var grid = document.getElementById('nomorGrid');
  grid.innerHTML = '';

  soalData.forEach(function (soal, i) {
    var btn = document.createElement('button');
    btn.className = 'nomor-btn';
    btn.textContent = i + 1;

    if (sudahSelesai) {
      // Mode review: warna berdasarkan benar/salah/kosong
      if (soal.kategori === 'TKP') {
        // TKP: benar = poin 5
        if (jawaban[i] === null) {
          // kosong — tidak ada class tambahan
        } else {
          var pilihanDipilih = soal.pilihan.find(function (p) { return p.huruf === jawaban[i]; });
          var poin = pilihanDipilih ? pilihanDipilih.poin : 0;
          btn.classList.add(poin === 5 ? 'correct' : 'wrong');
        }
      } else {
        // TWK & TIU: benar = sesuai kunci
        if (jawaban[i] === null) {
          // kosong — tidak ada class tambahan
        } else if (jawaban[i] === soal.kunci) {
          btn.classList.add('correct');
        } else {
          btn.classList.add('wrong');
        }
      }
    } else {
      // Mode mengerjakan: warna biasa
      if (i === currentSoal) btn.classList.add('current');
      if (jawaban[i] !== null) btn.classList.add('answered');
    }

    btn.addEventListener('click', function () {
      currentSoal = i;
      renderSoal(i);
    });

    grid.appendChild(btn);
  });

  // Update legenda sesuai mode
  updateLegenda();
}
function updateLegenda() {
  var legend = document.querySelector('.legend');
  if (!legend) return;

  if (sudahSelesai) {
    legend.innerHTML =
      '<div class="legend-item"><div class="legend-dot dot-correct"></div> Jawaban benar</div>' +
      '<div class="legend-item"><div class="legend-dot dot-wrong"></div> Jawaban salah</div>' +
      '<div class="legend-item"><div class="legend-dot dot-unanswered"></div> Tidak dijawab</div>';
  } else {
    legend.innerHTML =
      '<div class="legend-item"><div class="legend-dot dot-current"></div> Soal saat ini</div>' +
      '<div class="legend-item"><div class="legend-dot dot-answered"></div> Sudah dijawab</div>' +
      '<div class="legend-item"><div class="legend-dot dot-empty"></div> Belum dijawab</div>';
  }
}

/* ══════════════════════════════
   UPDATE STATISTIK
══════════════════════════════ */
function updateStatistik() {
  var dijawab = jawaban.filter(function (j) { return j !== null; }).length;
  var belum   = soalData.length - dijawab;

  document.getElementById('statAnswered').textContent   = dijawab;
  document.getElementById('statUnanswered').textContent = belum;
}

/* ══════════════════════════════
   HITUNG SKOR & ANALISIS KELULUSAN
══════════════════════════════ */
function hitungSkorDetail() {
  let benarTwk = 0, salahTwk = 0, kosongTwk = 0;
  let benarTiu = 0, salahTiu = 0, kosongTiu = 0;
  let benarTkp = 0, salahTkp = 0, kosongTkp = 0, skorTkp = 0;

  soalData.forEach(function (soal, i) {
    const isKosong = (jawaban[i] === null);
    const isBenar  = (jawaban[i] === soal.kunci);

    if (soal.kategori === "TWK") {
      if (isKosong) kosongTwk++;
      else if (isBenar) benarTwk++;
      else salahTwk++;

    } else if (soal.kategori === "TIU") {
      if (isKosong) kosongTiu++;
      else if (isBenar) benarTiu++;
      else salahTiu++;

    } else if (soal.kategori === "TKP") {
      if (isKosong) {
        kosongTkp++;
      } else {
        const pilihanDipilih = soal.pilihan.find(function (p) { return p.huruf === jawaban[i]; });
        const poin = pilihanDipilih ? pilihanDipilih.poin : 0;
        skorTkp += poin;
        if (poin === 5) benarTkp++; // "Benar" = poin tertinggi
        else salahTkp++;            // Apapun selain poin 5 dianggap tidak sempurna
      }
    }
  });

  // Skor TWK & TIU: 5 poin per soal benar
  const skorTwkAktual = benarTwk * 5;
  const skorTiuAktual = benarTiu * 5;

  const jumlahTiu = soalData.filter(function (s) { return s.kategori === "TIU"; }).length;
  const skorTiuKonversi = jumlahTiu > 0
    ? Math.round((skorTiuAktual / (jumlahTiu * 5)) * 175)
    : 0;

  // Total skor: TWK + TIU (konversi) + TKP (akumulasi poin langsung)
  const totalSkor = skorTwkAktual + skorTiuKonversi + skorTkp;

  // Pengecekan Passing Grade
  const lolosTwk = (skorTwkAktual >= 65);
  const lolosTiu = (skorTiuKonversi >= 80);
  const lolosTkp = (skorTkp >= 166);
  const lolosSkd = (lolosTwk && lolosTiu && lolosTkp);

  return {
    twk: { benar: benarTwk, salah: salahTwk, kosong: kosongTwk, skor: skorTwkAktual, lolos: lolosTwk },
    tiu: { benar: benarTiu, salah: salahTiu, kosong: kosongTiu, skorAktual: skorTiuAktual, skorKonversi: skorTiuKonversi, lolos: lolosTiu },
    tkp: { benar: benarTkp, salah: salahTkp, kosong: kosongTkp, skor: skorTkp, lolos: lolosTkp },
    totalBenar:  benarTwk + benarTiu + benarTkp,
    totalSalah:  salahTwk + salahTiu + salahTkp,
    totalKosong: kosongTwk + kosongTiu + kosongTkp,
    totalSkor:   totalSkor,
    lolosSkd:    lolosSkd
  };
}

/* ══════════════════════════════
   TAMPILKAN HASIL
══════════════════════════════ */
function tampilkanHasil() {
  clearInterval(timerInterval);
  sudahSelesai = true;

  var hasil = hitungSkorDetail();

  document.getElementById('hasilSkor').textContent   = hasil.totalSkor;
  document.getElementById('hasilBenar').textContent  = hasil.totalBenar;
  document.getElementById('hasilSalah').textContent  = hasil.totalSalah;
  document.getElementById('hasilKosong').textContent = hasil.totalKosong;

  // Simpan hasil akhir ke database
  var tryoutId    = parseInt(sessionStorage.getItem('skd_tryout_id')) || 1;
  var durasiDetik = 6000 - sisaWaktu; // 100 menit - sisa waktu
  // Cache lokal agar tombol Lihat Nilai Saya tetap muncul meski API gagal
  localStorage.setItem('skd_hasil_' + tryoutId, JSON.stringify(hasil));
  apiKumpulkan(tryoutId, hasil, durasiDetik).then(function () {
    console.log('Hasil berhasil disimpan ke database');
    // Hapus cache jawaban setelah berhasil dikumpulkan
    localStorage.removeItem('skd_jwb_' + tryoutId);
  }).catch(function (err) {
    console.warn('Gagal simpan hasil ke server:', err.message);
  });

  // Tampilkan keterangan passing grade
  var subText = '';
  if (hasil.lolosSkd) {
    subText =
      '<strong style="color:var(--success);font-size:1.1rem;">🎉 LOLOS PASSING GRADE SKD!</strong><br>' +
      'Skor TWK: <strong>' + hasil.twk.skor + '</strong>/150 (Min. 65 ✅)<br>' +
      'Skor TIU (Konversi): <strong>' + hasil.tiu.skorKonversi + '</strong>/175 (Min. 80 ✅)<br>' +
      'Skor TKP: <strong>' + hasil.tkp.skor + '</strong> (Min. 166 ✅)';
  } else {
    var alasan = [];
    if (!hasil.twk.lolos) alasan.push('TWK belum mencapai 65');
    if (!hasil.tiu.lolos) alasan.push('TIU Konversi belum mencapai 80');
    if (!hasil.tkp.lolos) alasan.push('TKP belum mencapai 166');

    subText =
      '<strong style="color:var(--danger);font-size:1.1rem;">❌ BELUM LOLOS PASSING GRADE SKD</strong><br>' +
      'Skor TWK: <strong>' + hasil.twk.skor + '</strong>/150 (Min. 65 ' + (hasil.twk.lolos ? '✅' : '❌') + ')<br>' +
      'Skor TIU (Konversi): <strong>' + hasil.tiu.skorKonversi + '</strong>/175 (Min. 80 ' + (hasil.tiu.lolos ? '✅' : '❌') + ')<br>' +
      'Skor TKP: <strong>' + hasil.tkp.skor + '</strong> (Min. 166 ' + (hasil.tkp.lolos ? '✅' : '❌') + ')<br>' +
      '<small style="color:var(--muted)">Catatan: ' + alasan.join(', ') + '</small>';
  }
  document.getElementById('hasilSub').innerHTML = subText;

  document.getElementById('hasilModal').classList.add('show');
  renderSoal(currentSoal);
}


/* ══════════════════════════════
   EVENT LISTENERS
══════════════════════════════ */

document.addEventListener("DOMContentLoaded", async function() {
  await muatSoal();

  jawaban = Array(soalData.length).fill(null);

  // Set nama paket
  var namaParket = sessionStorage.getItem('skd_tryout_title') || 'Try Out SKD Paket 1';
  document.getElementById('namaParket').textContent = namaParket;

  // Set total soal di header & stats
  document.getElementById('soalTotal').textContent = soalData.length;
  document.getElementById('statTotal').textContent = soalData.length;
  document.getElementById('statUnanswered').textContent = soalData.length;

  // Tombol Selanjutnya
  document.getElementById('btnNext').addEventListener('click', function () {
    if (currentSoal < soalData.length - 1) {
      currentSoal++;
      renderSoal(currentSoal);
    }
  });

  // Tombol Sebelumnya
  document.getElementById('btnPrev').addEventListener('click', function () {
    if (currentSoal > 0) {
      currentSoal--;
      renderSoal(currentSoal);
    }
  });

  // Tombol Selesai & Kumpulkan
  document.getElementById('btnSelesai').addEventListener('click', function () {
    var belum = jawaban.filter(function (j) { return j === null; }).length;
    var pesan = belum > 0
      ? 'Masih ada ' + belum + ' soal yang belum dijawab. Yakin ingin mengumpulkan jawaban sekarang?'
      : 'Semua soal sudah dijawab. Yakin ingin mengumpulkan lembar jawaban Anda?';

    document.getElementById('konfirmasiSub').textContent = pesan;
    document.getElementById('konfirmasiModal').classList.add('show');
  });

  // Batal kumpulkan
  document.getElementById('btnBatalSelesai').addEventListener('click', function () {
    document.getElementById('konfirmasiModal').classList.remove('show');
  });

  // Konfirmasi kumpulkan
  document.getElementById('btnKonfirmasiSelesai').addEventListener('click', async function () {
    document.getElementById('konfirmasiModal').classList.remove('show');
    await muatSoal(true);
    tampilkanHasil();
  });

  // Lihat pembahasan
  document.getElementById('btnReview').addEventListener('click', function () {
    document.getElementById('hasilModal').classList.remove('show');
    currentSoal = 0;
    renderSoal(0);
  });

  // Kembali ke beranda
  document.getElementById('btnKembaliHome').addEventListener('click', function () {
    window.location.href = 'home.html';
  });

  // Tutup modal jika klik di luar
  document.getElementById('konfirmasiModal').addEventListener('click', function (e) {
    if (e.target === this) this.classList.remove('show');
  });

  // Deteksi mode review dari home page
  var reviewMode = sessionStorage.getItem('skd_review_mode') === 'true';

  if (reviewMode) {
    sudahSelesai = true;
    document.getElementById('timerWrap').style.display = 'none';
    document.getElementById('btnSelesai').style.display = 'none';
    document.getElementById('namaParket').textContent = 'Review Jawaban';

    muatSoal(true).then(function () {
      if (soalData.length > 0) {
        jawaban = Array(soalData.length).fill(null);
        return muatJawaban();
      }
    }).then(function () {
      renderSoal(0);
    });
  } else {
    // Inisialisasi Soal & Timer Pertama
    muatJawaban().then(function () {
    var tryoutId = parseInt(sessionStorage.getItem('skd_tryout_id')) || 1;
    // Ambil sisa waktu dari database
    return apiGetWaktu(tryoutId).then(function (waktu) {
      if (waktu !== null && waktu !== undefined) {
        sisaWaktu = waktu;
      }
    }).catch(function () {
      // Gagal ambil dari server — fallback ke localStorage
      var cached = localStorage.getItem('skd_waktu_' + tryoutId);
      if (cached !== null) {
        sisaWaktu = parseInt(cached);
      }
    });
  }).then(function () {
    renderSoal(0);
    startTimer();
  });
  }

});
