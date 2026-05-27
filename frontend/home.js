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
    DATA TRYOUT
  ══════════════════════════════ */
  const tryouts = [
    {
      id: 1, title: "Try Out SKD Paket 1",
      desc: "Simulasi SKD lengkap: TWK + TIU + TKP sesuai standar BKN terbaru.",
      soal: 110, waktu: 100, harga: 15000, hargaAsli: 30000, baru: true, stripe: "#4FC3E0"
    },
    {
      id: 2, title: "Try Out SKD Paket 2",
      desc: "Simulasi SKD sesi 2 dengan bank soal berbeda dari Paket 1.",
      soal: 110, waktu: 100, harga: 15000, hargaAsli: 30000, baru: false, stripe: "#2A9DBF"
    },
    {
      id: 3, title: "Try Out SKD Paket 3",
      desc: "Simulasi SKD sesi 3 dengan variasi soal yang lebih menantang.",
      soal: 110, waktu: 100, harga: 15000, hargaAsli: 30000, baru: false, stripe: "#C8903A"
    },
    {
      id: 4, title: "Try Out SKD Paket 4",
      desc: "Simulasi SKD sesi 4 fokus pada peningkatan skor TWK dan TKP.",
      soal: 110, waktu: 100, harga: 15000, hargaAsli: 30000, baru: true, stripe: "#E8B45A"
    },
    {
      id: 5, title: "Try Out SKD Paket 5",
      desc: "Simulasi SKD sesi 5 dengan soal-soal yang diperbarui tahun 2025.",
      soal: 110, waktu: 100, harga: 15000, hargaAsli: 30000, baru: false, stripe: "#2ECC9A"
    },
    {
      id: 6, title: "Try Out SKD Paket 6",
      desc: "Simulasi SKD sesi 6 dengan tingkat kesulitan lebih tinggi.",
      soal: 110, waktu: 100, harga: 15000, hargaAsli: 30000, baru: false, stripe: "#1fa87c"
    },
    {
      id: 7, title: "Try Out SKD Paket 7",
      desc: "Simulasi SKD sesi 7 mencakup seluruh materi SKD secara komprehensif.",
      soal: 110, waktu: 100, harga: 15000, hargaAsli: 30000, baru: true, stripe: "#7b5ac8"
    },
    {
      id: 8, title: "Try Out SKD Paket 8",
      desc: "Simulasi SKD sesi 8 dengan soal prediksi CPNS terbaru.",
      soal: 110, waktu: 100, harga: 15000, hargaAsli: 30000, baru: false, stripe: "#a880f0"
    },
  ];

  /* ── Try out yang sudah dibeli (kosong — belum ada yang dimiliki) ── */
  const myTryouts = [];

  /* ── Set ID yang sudah dimiliki (kosong) ── */
  const purchased = new Set();


  /* ══════════════════════════════
    INISIALISASI INFO AKUN
  ══════════════════════════════ */
  function initAkun() {
    document.getElementById('accountName').textContent  = akun.nama;
    document.getElementById('accountEmail').textContent = akun.email;
    document.getElementById('accountAvatar').textContent = akun.inisial;
    document.getElementById('heroName').textContent     = akun.nama;
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

      card.innerHTML = `
        <div class="card-stripe" style="background:${t.stripe}"></div>

        <div class="card-head">
          <span class="card-category cat-skd">SKD</span>
          ${t.baru ? '<span class="card-badge-new">Baru</span>' : ''}
        </div>

        <div class="card-body">
          <div class="card-title">${t.title}</div>
          <div class="card-desc">${t.desc}</div>
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
              <span class="diskon-badge">50% OFF</span>
              <div class="price-now">Rp ${t.harga.toLocaleString('id-ID')}</div>
            </div>
          </div>
          ${owned
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
               ${t.id === 1 ? 'Gratis' : 'Beli Sekarang'}
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
            Kamu belum membeli try out apapun.<br>Yuk mulai berlatih sekarang!
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

      card.innerHTML = `
        <div class="my-icon ic-skd">${i + 1}</div>

        <div class="my-info">
          <div class="my-title">${t.title}</div>
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
          ${t.skor ? `<div class="score-badge">Skor: ${t.skor}</div>` : ''}
          <button class="btn-mulai ${selesai ? 'done' : ''}"
            onclick="${selesai
              ? `showToast('Membuka hasil try out...')`
              : `showReminder(${t.id}, '${t.title}')`
            }">
            ${selesai
              ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg> Lihat Hasil`
              : `<svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" stroke-width="2.5"
                      stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg> ${t.progress > 0 ? 'Lanjutkan' : 'Mulai'}`
            }
          </button>
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
    BELI TRYOUT
  ══════════════════════════════ */
  function beliTryout(id) {
    const to = tryouts.find(function (t) { return t.id === id; });
    if (!to) return;

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

    filterCards();
    showToast('✓ "' + to.title + '" berhasil dibeli!');
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

  function mulaiUjian() {
    hideReminder();
    // Simpan id try out yang sedang dikerjakan
    sessionStorage.setItem('skd_tryout_id', activeTryoutId);
    // Arahkan ke halaman soal
    window.location.href = 'soal1.html';
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

    // Hapus data sesi akun
    sessionStorage.removeItem('skd_nama');
    sessionStorage.removeItem('skd_email');
    sessionStorage.removeItem('skd_inisial');

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

  /* Reminder modal */
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


  /* ══════════════════════════════
    INISIALISASI HALAMAN
  ══════════════════════════════ */
  initAkun();
  renderCards(tryouts);
  renderMyTo();
