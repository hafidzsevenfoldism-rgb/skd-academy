/* ══════════════════════════════
   DATA AKUN PENGGUNA
   Dibaca dari sessionStorage yang disimpan oleh login.js
══════════════════════════════ */
const akun = {
  nama:    sessionStorage.getItem('skd_nama')    || 'Pengguna',
  email:   sessionStorage.getItem('skd_email')   || 'pengguna@email.com',
  inisial: sessionStorage.getItem('skd_inisial') || 'P'
};


/* ══════════════════════════════
   DATA TRYOUT — dimuat dari database
══════════════════════════════ */
let tryouts = [];

const tryoutFallback = [
  { id: 1, title: "Try Out SKD Paket 1", desc: "Simulasi SKD lengkap: TWK + TIU + TKP sesuai standar BKN terbaru.", soal: 110, waktu: 100, harga: 0, hargaAsli: 30000, baru: true, stripe: "#4FC3E0" },
  { id: 2, title: "Try Out SKD Paket 2", desc: "Simulasi SKD lanjutan: TWK + TIU + TKP dengan variasi soal terbaru.", soal: 110, waktu: 100, harga: 14900, hargaAsli: 30000, baru: true, stripe: "#E67E22", comingSoon: true }
];

async function muatPaketTryout() {
  try {
    const token = localStorage.getItem('skd_token');
    if (!token) { pakaiCachePaket(); return; }

    const data = await apiRequest('/api/tryout/paket');
    if (data && data.paket && data.paket.length > 0) {
      tryouts = data.paket.map(function (p) {
        return {
          id:         p.tryout_id,
          title:      p.nama_paket,
          desc:       p.deskripsi,
          soal:       p.jumlah_soal,
          waktu:      p.waktu_menit,
          harga:      p.harga,
          hargaAsli:  p.harga_asli,
          baru:       p.is_baru,
          stripe:     p.stripe_color,
          comingSoon: !p.is_aktif
        };
      });
      localStorage.setItem('skd_paket_cache', JSON.stringify(tryouts));
    } else {
      pakaiCachePaket();
    }
  } catch (err) {
    console.warn('Gagal muat paket dari server, pakai cache:', err.message);
    pakaiCachePaket();
  }
  filterCards();
}

function pakaiCachePaket() {
  const cached = localStorage.getItem('skd_paket_cache');
  if (cached) {
    tryouts = JSON.parse(cached);
  } else {
    tryouts = tryoutFallback.slice();
  }
}

/* Diisi dari database saat halaman dimuat */
const myTryouts = [];
const purchased = new Set();


/* ══════════════════════════════
   INISIALISASI INFO AKUN
══════════════════════════════ */
function initAkun() {
  document.getElementById('accountName').textContent   = akun.nama;
  document.getElementById('accountEmail').textContent  = akun.email;
  document.getElementById('accountAvatar').textContent = akun.inisial;
  document.getElementById('heroName').textContent      = akun.nama;
}


/* ══════════════════════════════
   RENDER KARTU BERANDA
══════════════════════════════ */
function renderCards(list) {
  const grid = document.getElementById('cardsGrid');
  grid.innerHTML = '';

  if (!list.length) {
    grid.innerHTML = `
      <p style="color:var(--muted);font-weight:700;font-size:14px;
                grid-column:1/-1;padding:20px 0;">
        Tidak ada try out ditemukan.
      </p>`;
    return;
  }

  list.forEach(function (t, i) {
    const owned = purchased.has(t.id);

    const card = document.createElement('div');
    card.className = 'to-card';
    card.style.animationDelay = (i * 0.07) + 's';

    var safeTitle = escapeHTML(t.title);
    var safeDesc  = escapeHTML(t.desc);

    card.innerHTML = `
      <div class="card-stripe" style="background:${t.stripe}"></div>

      <div class="card-head">
        <span class="card-category cat-skd">SKD</span>
        ${t.baru ? '<span class="card-badge-new">Baru</span>' : ''}
      </div>

      <div class="card-body">
        <div class="card-title">${safeTitle}</div>
        <div class="card-desc">${safeDesc}</div>
        <div class="card-meta">
          <div class="meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12
                      a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            ${t.soal} Soal
          </div>
          <div class="meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            ${t.waktu} Menit
          </div>
        </div>
      </div>

      <div class="card-footer">
        <div class="price-wrap">
          <div class="price-old">Rp ${t.hargaAsli.toLocaleString('id-ID')}</div>
          <div class="price-row">
            <span class="diskon-badge">${Math.round((t.hargaAsli - t.harga) / t.hargaAsli * 100)}% OFF</span>
            <div class="price-now">${t.harga === 0 ? 'Gratis' : 'Rp ' + t.harga.toLocaleString('id-ID')}</div>
          </div>
        </div>
        ${t.comingSoon
          ? `<button class="btn-beli btn-coming-soon" disabled>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2.5"
                    stroke-linecap="round" stroke-linejoin="round">
                 <circle cx="12" cy="12" r="10"/>
                 <polyline points="12 6 12 12 16 14"/>
               </svg>
               Coming Soon...
             </button>`
          : owned
            ? `<button class="btn-beli btn-owned" disabled>✓ Dimiliki</button>`
            : `<button class="btn-beli" onclick="beliTryout(${t.id})">
                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round">
                   <circle cx="9" cy="21" r="1"/>
                   <circle cx="20" cy="21" r="1"/>
                   <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72
                            a2 2 0 0 0 2-1.61L23 6H6"/>
                 </svg>
                 ${t.harga === 0 ? 'Klaim Gratis' : 'Beli Sekarang'}
               </button>`
        }
      </div>`;

    grid.appendChild(card);
  });
}


/* ══════════════════════════════
   RENDER MY TRYOUT
══════════════════════════════ */
function renderMyTo() {
  const list = document.getElementById('myToList');
  list.innerHTML = '';

  if (!myTryouts.length) {
    list.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.8"
              stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12
                    a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <div class="empty-title">Belum ada try out</div>
        <div class="empty-sub">
          Kamu belum memiliki try out apapun.<br>Yuk mulai berlatih sekarang!
        </div>
        <button class="btn-shop"
          onclick="switchTab('beranda', document.getElementById('menuBeranda'))">
          Lihat Try Out
        </button>
      </div>`;
    return;
  }

  myTryouts.forEach(function (t, i) {
    const selesai    = t.progress === 100;
    const statusText = selesai ? 'Selesai' : t.progress > 0 ? 'Dilanjutkan' : 'Belum dimulai';

    const card = document.createElement('div');
    card.className = 'my-to-card';
    card.style.animationDelay = (i * 0.08) + 's';

    const btnText = t.progress > 0 ? 'Mulai Ulang' : 'Mulai';
    const btnIcon = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>';

    var safeTitle = escapeHTML(t.title);

    card.innerHTML = `
      <div class="my-icon ic-skd">${i + 1}</div>

      <div class="my-info">
        <div class="my-title">${safeTitle}</div>
        <div class="my-meta">
          <div class="my-meta-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12 6 12 12 16 14"/>
            </svg>
            ${t.waktu} menit
          </div>
          <div class="my-meta-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2.5"
                stroke-linecap="round" stroke-linejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
            Progress ${t.progress}%
          </div>
        </div>
        <div class="progress-wrap">
          <div class="progress-label">
            <span>${statusText}</span>
            <span>${t.progress}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${t.progress}%"></div>
          </div>
        </div>
      </div>

      <div class="my-actions">
        ${t.skor !== null ? `<div class="score-badge">Skor: ${t.skor}</div>` : ''}
        <button class="btn-mulai" onclick="showReminder(${t.id}, '${t.title}')">
          ${btnIcon} ${btnText}
        </button>
        ${t.skor !== null ? `<button class="btn-nilai" onclick="lihatNilai(${t.id})">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
          Lihat Nilai Saya
        </button>` : ''}
      </div>`;

    list.appendChild(card);
  });
}


/* ══════════════════════════════
   FILTER KARTU
══════════════════════════════ */
function filterCards() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const cat   = document.getElementById('catFilter').value;

  const filtered = tryouts.filter(function (t) {
    const matchQuery = t.title.toLowerCase().includes(query);
    const matchCat   = cat === '' || cat === 'SKD';
    return matchQuery && matchCat;
  });

  renderCards(filtered);
}


/* ══════════════════════════════
   BELI / KLAIM TRYOUT
   Simpan ke database agar tidak hilang setelah logout
══════════════════════════════ */
async function beliTryout(id) {
  const to = tryouts.find(function (t) { return t.id === id; });
  if (!to) return;

  if (to.comingSoon) {
    showToast('Try out ini belum tersedia. Tunggu update selanjutnya!');
    return;
  }

  if (purchased.has(id)) {
    showToast('Try out ini sudah kamu miliki!');
    return;
  }

  try {
    await apiBeli(to.id, to.title, to.harga);

    purchased.add(id);

    const sudahAda = myTryouts.some(function (t) { return t.id === id; });
    if (!sudahAda) {
      myTryouts.unshift({
        id:       to.id,
        title:    to.title,
        progress: 0,
        skor:     null,
        waktu:    to.waktu
      });
    }

    // Simpan ke localStorage sebagai cache
    // Inilah yang akan dipakai saat refresh / login ulang
    localStorage.setItem('skd_purchased', JSON.stringify([...purchased]));
    localStorage.setItem('skd_myTryouts', JSON.stringify(myTryouts));

    filterCards();
    renderMyTo();

    const label = to.harga === 0 ? 'diklaim' : 'dibeli';
    showToast('✓ "' + to.title + '" berhasil ' + label + '!');

  } catch (err) {
    console.error('Gagal simpan tryout:', err.message);
    showToast('Gagal menyimpan. Pastikan kamu sudah login.');
  }
}


/* ══════════════════════════════
   MUAT TRYOUT DIMILIKI DARI DATABASE
   Dipanggil saat halaman pertama kali dibuka
══════════════════════════════ */
async function muatTryoutDimiliki() {
  purchased.clear();
  myTryouts.length = 0;

  // LANGKAH 1: Coba ambil dari database via API
  try {
    const token = localStorage.getItem('skd_token');

    // Jika tidak ada token, skip API dan langsung pakai cache
    if (!token) {
      muatDariCache();
      return;
    }

    const dariServer = await apiGetDimiliki();

    if (dariServer && dariServer.length > 0) {
      // Ambil juga riwayat nilai untuk cek tryout mana yang sudah selesai
      var hasilMap = {};
      try {
        var riwayat = await apiGetRiwayat();
        if (riwayat && riwayat.length > 0) {
          riwayat.forEach(function (h) {
            hasilMap[h.tryout_id] = h;
          });
          localStorage.setItem('skd_riwayat_cache', JSON.stringify(riwayat));
        }
      } catch (err) {
        console.warn('Gagal ambil riwayat nilai:', err.message);
        try {
          var cached = localStorage.getItem('skd_riwayat_cache');
          if (cached) {
            JSON.parse(cached).forEach(function (h) {
              hasilMap[h.tryout_id] = h;
            });
          }
        } catch (_) {}
      }

      dariServer.forEach(function (item) {
        purchased.add(item.tryout_id);

        const detail = tryouts.find(function (t) { return t.id === item.tryout_id; });
        const hasil  = hasilMap[item.tryout_id];
        myTryouts.push({
          id:       item.tryout_id,
          title:    item.nama_paket,
          progress: hasil ? 100 : 0,
          skor:     hasil ? hasil.skor_total : null,
          waktu:    detail ? detail.waktu : 100
        });
      });

      // Fallback hasil dari cache lokal untuk tryout yang riwayatnya kosong
      myTryouts.forEach(function (t) {
        if (t.skor === null) {
          try {
            var h = JSON.parse(localStorage.getItem('skd_hasil_' + t.id));
            if (h) {
              t.skor = h.totalSkor;
              t.progress = 100;
            }
          } catch (_) {}
        }
      });

      // Simpan ke cache agar refresh tetap tampil
      localStorage.setItem('skd_purchased', JSON.stringify([...purchased]));
      localStorage.setItem('skd_myTryouts', JSON.stringify(myTryouts));

    } else {
      // Server berhasil diakses tapi data kosong —
      // bisa jadi akun baru, bersihkan cache lama
      localStorage.removeItem('skd_purchased');
      localStorage.removeItem('skd_myTryouts');
    }

  } catch (err) {
    // LANGKAH 2: API gagal → pakai cache localStorage
    console.warn('API gagal, pakai cache lokal:', err.message);
    muatDariCache();
  }
}

// Fungsi bantu: muat dari cache localStorage
function muatDariCache() {
  const cachePurchased = localStorage.getItem('skd_purchased');
  const cacheMyTryouts = localStorage.getItem('skd_myTryouts');

  if (cachePurchased) {
    JSON.parse(cachePurchased).forEach(function (id) {
      purchased.add(id);
    });
  }

  if (cacheMyTryouts) {
    JSON.parse(cacheMyTryouts).forEach(function (t) {
      const sudahAda = myTryouts.some(function (m) { return m.id === t.id; });
      if (!sudahAda) myTryouts.push(t);
    });
  }
}


/* ══════════════════════════════
   SWITCH TAB
══════════════════════════════ */
function switchTab(tab, activeEl) {
  document.querySelectorAll('.section-panel').forEach(function (p) {
    p.classList.remove('active');
  });
  document.querySelectorAll('.nav-link').forEach(function (a) {
    a.classList.remove('active');
  });
  document.getElementById('panel-' + tab).classList.add('active');
  if (activeEl) activeEl.classList.add('active');
  document.getElementById('navMenu').classList.remove('open');
}


/* ══════════════════════════════
   TOAST NOTIFICATION
══════════════════════════════ */
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toastMsg').textContent = msg;
  toast.classList.add('show');
  setTimeout(function () {
    toast.classList.remove('show');
  }, 3000);
}


/* ══════════════════════════════
   MODAL REMINDER TRY OUT
══════════════════════════════ */
let activeTryoutId = null;

function showReminder(id, title) {
  activeTryoutId = id;
  document.getElementById('reminderSubtitle').textContent = title;
  document.getElementById('reminderModal').classList.add('show');
}

function hideReminder() {
  document.getElementById('reminderModal').classList.remove('show');
  activeTryoutId = null;
}

async function mulaiUjian() {
  var tryoutId = activeTryoutId;

  hideReminder();

  sessionStorage.removeItem('skd_review_mode');
  sessionStorage.setItem('skd_tryout_id', tryoutId);

  var to = tryouts.find(function (t) { return t.id === tryoutId; });
  if (to) {
    sessionStorage.setItem('skd_tryout_title', to.title);
  }

  await apiResetJawaban(tryoutId);
  localStorage.removeItem('skd_jwb_' + tryoutId);

  window.location.href = 'soal1.html';
}


/* ══════════════════════════════
   LIHAT NILAI (MODAL HASIL)
══════════════════════════════ */
async function lihatNilai(tryoutId) {
  var hasil;
  try {
    hasil = await apiGetHasil(tryoutId);
  } catch (err) {
    console.error('Gagal ambil nilai:', err.message);
    try {
      var cached = localStorage.getItem('skd_hasil_' + tryoutId);
      if (cached) {
        var h = JSON.parse(cached);
        hasil = {
          skor_total:   h.totalSkor,
          total_benar:  h.totalBenar,
          total_salah:  h.totalSalah,
          total_kosong: h.totalKosong,
          skor_twk:     h.twk.skor,
          lolos_twk:    h.twk.lolos,
          skor_tiu:     h.tiu.skorKonversi,
          lolos_tiu:    h.tiu.lolos,
          skor_tkp:     h.tkp.skor,
          lolos_tkp:    h.tkp.lolos,
          lolos_skd:    h.lolosSkd
        };
      }
    } catch (_) {}
  }

  if (!hasil) {
    showToast('Gagal memuat data nilai.');
    return;
  }

  document.getElementById('hasilSkor').textContent   = hasil.skor_total;
  document.getElementById('hasilSkor').dataset.tryoutId = tryoutId;
  document.getElementById('hasilBenar').textContent  = hasil.total_benar;
  document.getElementById('hasilSalah').textContent  = hasil.total_salah;
  document.getElementById('hasilKosong').textContent = hasil.total_kosong;

  var subText = '';
  var lolosTwk = hasil.lolos_twk;
  var lolosTiu = hasil.lolos_tiu;
  var lolosTkp = hasil.lolos_tkp;
  var lolosSkl = hasil.lolos_skd;

  if (lolosSkl) {
    subText =
      '<strong style="color:#2ECC9A;font-size:1.1rem;">🎉 LOLOS PASSING GRADE SKD!</strong><br>' +
      'Skor TWK: <strong>' + hasil.skor_twk + '</strong>/150 (Min. 65 ✅)<br>' +
      'Skor TIU (Konversi): <strong>' + hasil.skor_tiu + '</strong>/175 (Min. 80 ✅)<br>' +
      'Skor TKP: <strong>' + hasil.skor_tkp + '</strong> (Min. 166 ✅)';
  } else {
    var alasan = [];
    if (!lolosTwk) alasan.push('TWK belum mencapai 65');
    if (!lolosTiu) alasan.push('TIU Konversi belum mencapai 80');
    if (!lolosTkp) alasan.push('TKP belum mencapai 166');

    subText =
      '<strong style="color:#FF6B6B;font-size:1.1rem;">❌ BELUM LOLOS PASSING GRADE SKD</strong><br>' +
      'Skor TWK: <strong>' + hasil.skor_twk + '</strong>/150 (Min. 65 ' + (lolosTwk ? '✅' : '❌') + ')<br>' +
      'Skor TIU (Konversi): <strong>' + hasil.skor_tiu + '</strong>/175 (Min. 80 ' + (lolosTiu ? '✅' : '❌') + ')<br>' +
      'Skor TKP: <strong>' + hasil.skor_tkp + '</strong> (Min. 166 ' + (lolosTkp ? '✅' : '❌') + ')<br>' +
      '<small style="color:var(--muted)">Catatan: ' + alasan.join(', ') + '</small>';
  }
  document.getElementById('hasilSub').innerHTML = subText;

  document.getElementById('hasilModal').classList.add('show');
}

/* ══════════════════════════════
   MODAL LOGOUT
══════════════════════════════ */
function showLogout() {
  document.getElementById('logoutModal').classList.add('show');
}

function hideLogout() {
  document.getElementById('logoutModal').classList.remove('show');
}

function confirmLogout() {
  hideLogout();

  sessionStorage.removeItem('skd_nama');
  sessionStorage.removeItem('skd_email');
  sessionStorage.removeItem('skd_inisial');
  localStorage.removeItem('skd_token');
  localStorage.removeItem('skd_user');

  showToast('Berhasil keluar. Sampai jumpa!');
  setTimeout(function () {
    window.location.href = 'index.html';
  }, 1800);
}


/* ══════════════════════════════
   EVENT LISTENERS
══════════════════════════════ */
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('navMenu').classList.toggle('open');
});

document.getElementById('menuBeranda').addEventListener('click', function (e) {
  e.preventDefault();
  switchTab('beranda', this);
});

document.getElementById('menuMyTO').addEventListener('click', function (e) {
  e.preventDefault();
  switchTab('myto', this);
  renderMyTo();
});

document.getElementById('btnLogout').addEventListener('click', function () {
  showLogout();
});

document.getElementById('btnCancelLogout').addEventListener('click', function () {
  hideLogout();
});

document.getElementById('btnConfirmLogout').addEventListener('click', function () {
  confirmLogout();
});

document.getElementById('btnCancelReminder').addEventListener('click', function () {
  hideReminder();
});

document.getElementById('btnMulaiUjian').addEventListener('click', function () {
  mulaiUjian();
});

document.getElementById('reminderModal').addEventListener('click', function (e) {
  if (e.target === this) hideReminder();
});

document.getElementById('searchInput').addEventListener('input', filterCards);
document.getElementById('catFilter').addEventListener('change', filterCards);

document.getElementById('logoutModal').addEventListener('click', function (e) {
  if (e.target === this) hideLogout();
});

document.getElementById('btnReviewHome').addEventListener('click', function () {
  var tryoutId = parseInt(document.getElementById('hasilSkor').dataset.tryoutId);
  sessionStorage.setItem('skd_tryout_id', tryoutId);
  sessionStorage.setItem('skd_review_mode', 'true');
  window.location.href = 'soal1.html';
});

document.getElementById('btnTutupHasil').addEventListener('click', function () {
  document.getElementById('hasilModal').classList.remove('show');
});

document.getElementById('hasilModal').addEventListener('click', function (e) {
  if (e.target === this) this.classList.remove('show');
});


/* ══════════════════════════════
   INISIALISASI HALAMAN
   1. Render awal
   2. Muat paket tryout dari database
   3. Muat tryout dimiliki dari database
   4. Re-render dengan data terbaru
══════════════════════════════ */
initAkun();
renderMyTo();

muatPaketTryout().then(function () {
  renderCards(tryouts);
});

muatTryoutDimiliki().then(function () {
  renderCards(tryouts);
  renderMyTo();
});
