require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });
const pool = require('./db');

/*
  ══════════════════════════════════════════════════════════
  TEMPLATE SOAL TRY OUT SKD PAKET 5
  Isi manual: teks, pilihan[], kunci, pembahasan

  — TWK (soal 1-30): Tes Wawasan Kebangsaan
  — TIU (soal 31-65): Tes Inteligensia Umum
  — TKP (soal 66-110): Tes Karakteristik Pribadi

  Format:
    id        = nomor soal (1-110)
    kategori  = "TWK" | "TIU" | "TKP"
    teks      = HTML string (bisa pakai <br>, <table>, <img>, <sup>, <math>, dll)
    pilihan[] = array { huruf: "A"–"E", teks: string, poin: (hanya TKP) }
    kunci     = huruf kunci jawaban ("A"–"E")
    pembahasan = HTML string penjelasan kunci jawaban

  Contoh soal ber-gambar (TIU):
    teks: "Carilah gambar yang sesuai untuk melengkapi gambar berikut!<br><br> <img src='gambarsoal/tryout5/54.jpeg'></img>"
    pembahasan: "<img src='gambarpembahasan/tryout5/31.jpeg'></img>"
    (letakkan file gambar di frontend/gambarsoal/tryout5/ dan frontend/gambarpembahasan/tryout5/)

  Catatan TKP: setiap pilihan WAJIB punya poin (1-5). Kunci berisi huruf
  pilihan dengan poin tertinggi. Tulis di pembahasan urutan poin, misal:
    pembahasan: "A = 3, B = 2, C = 5, D = 1, E = 4<br>Penjelasan..."

  Cara menjalankan setelah semua soal diisi:
    node config/seed-soal-paket5.js
  (Data lama tryout_id = 5 akan otomatis dihapus lalu diganti yang baru)
  ══════════════════════════════════════════════════════════
*/

const soalData = [

  // ════════════════════════════════════════════
  // TES WAWASAN KEBANGSAAN (TWK) — 30 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 1 ───
  {
    id: 1, kategori: "TWK",
    teks: "Indonesia merupakan negara majemuk yang memiliki keberagaman budaya, suku, ras, agama dan kepercayaan. Dengan keberagaman tersebut, maka diperlukan upaya untuk menjaga persatuan dan kesatuan. Upaya tersebut dapat dilakukan dengan...",         // ← isi teks soal
    pilihan: [
      { huruf: "A", teks: "Menjaga kerukunan dengan selalu mengutamakan kepentingan bersama dibandingkan dengan kepentingan pribadi" },
      { huruf: "B", teks: "Berpartisipasi aktif dalam kegiatan kemanusiaan" },
      { huruf: "C", teks: "Menjunjung tinggi hak asasi manusia" },
      { huruf: "D", teks: "Memberikan kebebasan kepada semua orang untuk beribadah sesuai keyakinan masing-masing" },
      { huruf: "E", teks: "Bersikap adil atau tidak diskriminatif kepada semua orang" }
    ],
    kunci: "A",
    pembahasan: "Kerukunan dalam keberagaman paling tepat diwujudkan dengan mengutamakan kepentingan bersama di atas kepentingan pribadi. Sikap ini langsung menjaga persatuan, sedangkan pilihan lain hanya merupakan wujud toleransi atau kepedulian yang cakupannya lebih sempit."
  },

  // ─── Soal 2 ───
  {
    id: 2, kategori: "TWK",
    teks: "Bahasa merupakan alat komunikasi manusia untuk menyampaikan maksud dan tujuannya. Bahasa daerah merupakan bahasa yang dituturkan secara turun temurun di suatu wilayah dalam sebuah negara yang berdaulat. Bahasa daerah merupakan salah satu kekayaan dari bangsa Indonesia yang harus dijaga kelestariannya. Alasannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Bahasa daerah merupakan alat komunikasi yang mudah untuk dimengerti wagra negara Indonesia" },
      { huruf: "B", teks: "Bahasa daerah menjadi ciri khas dari suatu daerah yang menggunakannya" },
      { huruf: "C", teks: "Bahasa daerah dapat menimbulkan kekaraban dalam berkomunikasi" },
      { huruf: "D", teks: "Bahasa daerah merupakan bentuk kata serapan dari bahasa Indonesia sebagai bahasa nasional" },
      { huruf: "E", teks: "Bahasa daerah memegang peranan penting sebagai identitas, ciri khas, alat komunikasi dan instrumen selama ribuan tahun lewat lisan atau tulisan" }
    ],
    kunci: "E",
    pembahasan: "Bahasa daerah penting dilestarikan karena berperan sebagai identitas, ciri khas, alat komunikasi, dan instrumen budaya yang diwariskan secara lisan maupun tulisan selama ribuan tahun. Pilihan lain hanya menyebut satu aspek dan ada yang keliru."
  },

  // ─── Soal 3 ───
  {
    id: 3, kategori: "TWK",
    teks: "Kepala daerah di kampung X memberikan dukungan dan perlindungan terhadap keberagaman agama dan mengakui serta memberikan kebebasan kepada berbagai kelompok aga,a. Oleh karena itu, masyarakat di kampung X merasa aman dan tenteram. Mereka juga meneladani perilaku dari kepala daerah mereka. Dalam kesehariannya, sikap yang ditunjukkan oleh masyarakat X adalah...",
    pilihan: [
      { huruf: "A", teks: "Menghormati dan melindungi hak asasi manusia antarmasyarakat" },
      { huruf: "B", teks: "Memiliki rasa toleransi agama sehingga berbagai komunitas dapat hidup berdampingan dengan damai" },
      { huruf: "C", teks: "Menjaga persatuan dan kesatuan bangsa meskipun di kampung X terdiri dari berbagai suku, budaya, dan agama" },
      { huruf: "D", teks: "Berpartisipasi dalam pelestarian dan pengembangan budaya lokal" },
      { huruf: "E", teks: "Bekerja dengan siapa saja tanpa membedakan latar belakang yang berbeda-beda" }
    ],
    kunci: "B",
    pembahasan: "Kepala daerah mencontohkan sikap yang menghargai keberagaman agama, sehingga masyarakat meneladani toleransi beragama dan hidup berdampingan dengan damai. Pilihan lain merupakan wujud sikap yang berbeda dan tidak secara langsung menonjolkan toleransi antaragama."
  },

  // ─── Soal 4 ───
  {
    id: 4, kategori: "TWK",
    teks: "Sudah seharusnya prinsip Bhinneka Tunggal Ika diterapkan dalam kehidupan sehari-hari. Dengan menerapkannya, maka persatuan dan kesatuan Bangsa Indonesia tetap terjaga. Penerapan tersebut dapat ditunjukkan dengan kesadaran keberagaman agama. Hal tersebut dapat diwujudkan dengan...",
    pilihan: [
      { huruf: "A", teks: "Memberikan kebebasan kepada setiap orang untuk beribadah" },
      { huruf: "B", teks: "Mempelajari pendidikan Pancasila, Agama, dan Bahasa Negara" },
      { huruf: "C", teks: "Berteman dengan siapapun tanpa membedakan status sosial" },
      { huruf: "D", teks: "Berpartisipasi dalam kegiatan kemanusiaan seperti menjadi tenaga sukarelawan" },
      { huruf: "E", teks: "Bersedia memberikan bantuan kepada orang yang membutuhkan tanpa membedakan agama, suku, dan bahasa" }
    ],
    kunci: "A",
    pembahasan: "Kesadaran atas keberagaman agama paling tepat diwujudkan dengan memberikan kebebasan kepada setiap orang untuk beribadah sesuai keyakinannya. Pilihan lain lebih berkaitan dengan toleransi sosial, pendidikan, atau kepedulian kemanusiaan, bukan kebebasan beragama."
  },

  // ─── Soal 5 ───
  {
    id: 5, kategori: "TWK",
    teks: "Upaya menjaga persatuan dan kesatuan bangsa Indonesia merupakan tanggung jawab bagi seluruh warga negara Indonesia terutama generasi muda. Upaya menjaga persatuan dan kesatuan ini merupakan salah satu wujud prinsip dari semboyan bangsa Indonesia yaitu Bhinneka Tunggal Ika yang dapat diimplementasikan seperti...",
    pilihan: [
      { huruf: "A", teks: "Tidak menyontek saat ujian di sekolah" },
      { huruf: "B", teks: "Memanfaatkan perkembangan dunia di media sosial" },
      { huruf: "C", teks: "Ikut berpartisipasi dalam kegiatan ronda malam" },
      { huruf: "D", teks: "Tidak menyebarkan berita hoaks di media sosial" },
      { huruf: "E", teks: "Melindungi privasi dan berlaku adil kepada siapapun" }
    ],
    kunci: "D",
    pembahasan: "Bhinneka Tunggal Ika menuntut sikap yang menjaga persatuan di tengah perbedaan. Tidak menyebarkan berita hoaks di media sosial merupakan implementasi nyata karena hoaks berpotensi memecah belah masyarakat. Pilihan lain bukan wujud langsung dari prinsip keberagaman."
  },

  // ─── Soal 6 ───
  {
    id: 6, kategori: "TWK",
    teks: "Semboyan Bhinneka Tunggal Ika menjadi jembatan penghubung menuju terbentuknya negara yang berdaulat. Prinsip dari Bhinneka Tunggal Ika ini berkaitan dengan toleransi terhadap perbedaan yang lebih konkret seperti ras, bahasa, etnik, dan budaya. Dalam menerapkan prinsip ini, sikap yang ditunjukkan dapat berupa... ",
    pilihan: [
      { huruf: "A", teks: "Menghargai dan menghormati bahasa dan budaya daerah, termasuk daerah pelosok dan perbatasan" },
      { huruf: "B", teks: "Bekerja sama untuk membangun bangsa Indonesia menjadi bangsa yang berdaulat, adil, dan makmur" },
      { huruf: "C", teks: "Beribadah sesuai dengan keyakinan dan kepercayaan masing-masing" },
      { huruf: "D", teks: "Ikut serta dalam upaya menjaga pertahanan dan ketahanan negara" },
      { huruf: "E", teks: "Menjunjung tinggi nilai-nilai integritas dalam menjalankan kehidupan berbangsa dan bernegara" }
    ],
    kunci: "A",
    pembahasan: "Toleransi terhadap perbedaan ras, bahasa, etnik, dan budaya paling tepat ditunjukkan dengan menghargai serta menghormati bahasa dan budaya daerah, termasuk di pelosok dan perbatasan. Pilihan lain lebih berkaitan dengan persatuan, ibadah, pertahanan negara, atau integritas."
  },

  // ─── Soal 7 ───
  {
    id: 7, kategori: "TWK",
    teks: "Nasionalisme merupakan suatu ideologi atau doktrin yang menekankan pada pentingnya kesetiaanm identitas dan persatuan suatu bangsa, Konsep ini juga menunjukkan penghargaan terhadap identitas nasional yang mencakup elemen-elemen budaya, bahasa, agama, dan nilai-nilai yang membentuk identitas nasional. Sebagai warga negara, kita harus menjunjung tinggi rasa nasionalisme. Hal tersebut dapat ditunjukkan dengan...",
    pilihan: [
      { huruf: "A", teks: "Mendorong perubahan positif melalui partisipasi dalam proses demokrasi" },
      { huruf: "B", teks: "Menolak kebijakan yang merugikan kepentingan bersama meskipun melibatkan pengorbanan pribadi" },
      { huruf: "C", teks: "Menjaga keberagaman bahasa dan menghormati bahasa daerah" },
      { huruf: "D", teks: "Menjalani wajib militer dengan penuh tanggung jawab" },
      { huruf: "E", teks: "Mengorbankan waktu dan tenaga untuk membantu dalam situasi darurat atau bencana alam" }
    ],
    kunci: "C",
    pembahasan: "Nasionalisme adalah kesetiaan pada identitas dan persatuan bangsa yang mencakup budaya, bahasa, agama, dan nilai-nilai bersama. Menjaga keberagaman bahasa dan menghormati bahasa daerah merupakan wujud langsung penghargaan terhadap identitas nasional tersebut."
  },

  // ─── Soal 8 ───
  {
    id: 8, kategori: "TWK",
    teks: "Cinta tanah air mencakup perasaan kasih sayang dan kebanggaan terhadap negara. Individu yang mencintai tanah kelahirannya memiliki rasa bangga dengan sejarah, budaya, dan prestasi negaranya. Perasaan tersebut dapat tercermin dalam sikap...",
    pilihan: [
      { huruf: "A", teks: "Memberikan kontribusi finansial kepada organisasi yang mendukung kepentingan bersama" },
      { huruf: "B", teks: "Mendukung seniman lokal yang memperkenalkan budaya nasional di kancah internasional" },
      { huruf: "C", teks: "Bersedia menghadiri pertemuan masyarakat setempat dan ikut berpartisipasi dalam diskusi politik" },
      { huruf: "D", teks: "Ikut berpartisipasi aktif dalam keberlanjutan lingkungan" },
      { huruf: "E", teks: "Mengibarkan bendera merah putih di rumah dan kendaraan sebagai ekspresi simbolik" }
    ],
    kunci: "B",
    pembahasan: "Cinta tanah air tercermin dari rasa bangga terhadap budaya dan prestasi bangsa. Mendukung seniman lokal yang memperkenalkan budaya nasional di kancah internasional menunjukkan kebanggaan sekaligus kontribusi nyata. Pilihan lain lebih bersifat umum atau simbolik."
  },

  // ─── Soal 9 ───
  {
    id: 9, kategori: "TWK",
    teks: "Di era globalisasi saat ini, media masa merupakan salah satu sarana informasi bagi masyarakat Indonesia. Media masa berbeda dengan media sosial. Media sosial tidak memiliki legalitas dalam penyebaran informasi dan tidak jelas pelakunya. Peranan media masa dalam mewujudkan rasa nasionalisme di era globalisasi saat ini adalah...",
    pilihan: [
      { huruf: "A", teks: "Menyediakan infromasi terkait isu-isu yang terjadi di belahan dunia" },
      { huruf: "B", teks: "Sebagai alat komunikasi jarak jauh antarwarga negara Indonesia" },
      { huruf: "C", teks: "Menyediakan informasi mengenai sejarah dan kebudayaan bangsa sehingga dapat meningkatkan pengetahuan masyarakat dan menumbuhkan rasa cinta dan bangga terhadap tanah air" },
      { huruf: "D", teks: "Menyediakan informasi terkait kebijakan-kebijakan baru yang telah ditetapkan oleh pemerintah nasional" },
      { huruf: "E", teks: "Sebagai sarana untuk mempererat persatuan dan kesatuan bangsa" }
    ],
    kunci: "C",
    pembahasan: "Media massa berperan menyediakan informasi yang jelas sumbernya dan dapat dipertanggungjawabkan. Menyajikan informasi sejarah dan kebudayaan bangsa akan menumbuhkan pengetahuan, rasa cinta, dan kebanggaan terhadap tanah air. Pilihan lain bukan peran khas media massa dalam menumbuhkan nasionalisme."
  },

  // ─── Soal 10 ───
  {
    id: 10, kategori: "TWK",
    teks: "Cinta tanah ir yang sehat tidak mengalangi toleransi terhadap kelompok-kelompok minoritas atau kelompok dengan pandangan berbeda. Penghormatan terhadap keberagaman dianggap sebagai bagian internal dari cinta tanah air. Hal tersebut tercermin dalam perilaku sehari-hari, yaitu...",
    pilihan: [
      { huruf: "A", teks: "Menggunakan pakaian tradisional pada acara-acara tertentu seperti acara pernikahan" },
      { huruf: "B", teks: "Ikut berkontribusi dalam keberlanjutan lingkungan" },
      { huruf: "C", teks: "Taat hukum dalam kebijakan yang telah ditetapkan seperti membayar pajak, taat peraturan lalu lintas dan lain sebagainya" },
      { huruf: "D", teks: "Ikut berpartisipasi dalam menyuarakan kampanye anti korupsi" },
      { huruf: "E", teks: "Mendengarkan dengan terbuka terhadap pendapat dan pandangan orang lain" }
    ],
    kunci: "E",
    pembahasan: "Cinta tanah air yang sehat tidak menghalangi toleransi terhadap kelompok minoritas atau pandangan berbeda. Mendengarkan dengan terbuka terhadap pendapat orang lain merupakan cerminan langsung sikap toleran tersebut. Pilihan lain lebih berkaitan dengan simbol budaya, lingkungan, hukum, atau kampanye tertentu."
  },

  // ─── Soal 11 ───
  {
    id: 11, kategori: "TWK",
    teks: "Rasa cinta tanah air menunjukkan perasaan kebanggaan, memiliki, menghargai dan adanya loyalitas yang tinggi dari setiap individu pada negara tempat ia tingal. Sebagai seorang pelajar, Diana menunjukkan rasa cinta tanah air tersebut dengan kepeduliannya terhadap kelestarian alam. Ia juga berupaya ikut serta dalam keberlanjutan lingkungan. Di lingkungan sekolah, Diana biasanya...",
    pilihan: [
      { huruf: "A", teks: "Mengurangi penggunaan kertas atau polimer secara berlebihan" },
      { huruf: "B", teks: "Menjadi aktif dalam kegiatan ekstrakulikuler yang mendukung pengembangan pribadi dan lingkungan" },
      { huruf: "C", teks: "Membantu rekan-rekan yang kesulitan" },
      { huruf: "D", teks: "Aktif dalam kegiatan positif untuk sekolah seperti kegiatan sukarelawan" },
      { huruf: "E", teks: "Menunjukkan rasa tanggung jawab terhadpa tugas yang diberikan oleh gurunya di sekolah" }
    ],
    kunci: "A",
    pembahasan: "Diana menunjukkan cinta tanah air melalui kepedulian terhadap kelestarian alam dan keberlanjutan lingkungan. Di sekolah, sikap itu paling tepat diwujudkan dengan mengurangi penggunaan kertas atau polimer secara berlebihan. Pilihan lain bukan tindakan langsung untuk menjaga lingkungan."
  },

  // ─── Soal 12 ───
  {
    id: 12, kategori: "TWK",
    teks: "Pancasila merupakan landasan untuk menjaga persatuan dan kesatuan bangsa Indonesia. Persatuan dan kesatuan di sini memiliki makna yang cukup luas, salah satunya adalah persatuan untuk membina nasionalisme bangsa. Sebagai warga negara, makna persatuan tersebut dapat tercermin dalam...",
    pilihan: [
      { huruf: "A", teks: "Tidak malu untuk menggunakan pakaian yang sederhana saat menghadiri acara resmi maupun tidak resmi" },
      { huruf: "B", teks: "Aktif mengikuti perlombaan keagamaan untuk melestarikan pendidikan keagamaan" },
      { huruf: "C", teks: "Mengibarkan bendera merah putih setengah tiang saat pahlawan Indonesia gugur dalam peperangan" },
      { huruf: "D", teks: "Sikap menghormati perbedaan budaya dan bahasa karena Indonesia merupakan negara majemuk" },
      { huruf: "E", teks: "Partisipasi aktif dalam kegiatan sosial untuk menjaga tali persaudaraan dan membantu orang lain yang kesulitan" }
    ],
    kunci: "D",
    pembahasan: "Makna persatuan dalam konteks nasionalisme tercermin dari sikap menghormati perbedaan budaya dan bahasa karena Indonesia adalah negara majemuk. Sikap ini menjaga persatuan tanpa menyeragamkan keberagaman. Pilihan lain tidak berkaitan langsung dengan makna persatuan tersebut."
  },

  // ─── Soal 13 ───
  {
    id: 13, kategori: "TWK",
    teks: "Sebagai seorang pejabat pemerintahan, ayah selalu menjadi teladan yang baik bagi masyarakat dan keluarga. Tidak hanya di kantor saja, di rumah ayah juga bersikap transparan dan tidak mengambil sesuatu yang bukan miliknya. Sikap tersebut kemudian diteladani oleh adik di lingkungan sekolah, Di sekolah, biasanya adik...",
    pilihan: [
      { huruf: "A", teks: "Mandiri dan tidak bergantung kepada orang lain dalam menyelesaikan tugas di sekolah" },
      { huruf: "B", teks: "Aktif dalam kegiatan positif di sekolah" },
      { huruf: "C", teks: "Mengampanyekan kesadaran lingkungan kepada rekan-rekan di sekolahnya" },
      { huruf: "D", teks: "Memberikan informasi secara jelas dan terbuka kepada orang tua yang berkaitan dengan nilai ulangan dan ujian" },
      { huruf: "E", teks: "Membantu teman sekelasnya yang sedang mengalami kesusahan" }
    ],
    kunci: "D",
    pembahasan: "Ayah mencontohkan sikap transparan dan tidak mengambil yang bukan miliknya. Sikap adik yang meneladani integritas tersebut adalah memberikan informasi secara jelas dan terbuka kepada orang tua, termasuk tentang nilai ulangan dan ujian. Pilihan lain lebih berkaitan dengan kemandirian, kegiatan positif, lingkungan, atau kepedulian sosial."
  },

  // ─── Soal 14 ───
  {
    id: 14, kategori: "TWK",
    teks: "Integritas memiliki dampak positif bagi kehidupan seseorang. Integritas akan membuat seseorang menjadi lebih bijaksana dalam mengartikan sesuatu, termasuk pengalaman hidupnya, seperti keberhasilan dan kegagalan yang pernah dialaminya. Hal tersebut membuktikan bahwasanya integritas memiliki manfaat dalam bidang...",
    pilihan: [
      { huruf: "A", teks: "Intelektual" },
      { huruf: "B", teks: "Emosional" },
      { huruf: "C", teks: "Spiritual" },
      { huruf: "D", teks: "Sosial" },
      { huruf: "E", teks: "Fisik" }
    ],
    kunci: "C",
    pembahasan: "Integritas membuat seseorang lebih bijaksana dalam memaknai pengalaman hidup, termasuk keberhasilan dan kegagalan. Kemampuan memaknai hidup dan nilai-nilai terdalam itu termasuk bidang spiritual. Pilihan lain tidak paling tepat menggambarkan manfaat tersebut."
  },

  // ─── Soal 15 ───
  {
    id: 15, kategori: "TWK",
    teks: "Agar tidak mengeluarkan biaya pribadinya, Andi akhirnya membayar tunggakan iuran BPJS karena ia akan menjalankan operasi usus buntu dan berharap semua biaya operasi dan penginapannya ditanggung oleh pemerintah. Sikap Andi ini menunjukkan bahwasannya ia telah melanggar nilai-nilai integritas, alasannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Andi memanfaatkan fasilitas negara untuk kepentingan sesaat saja" },
      { huruf: "B", teks: "Andi membiarkan iuran BPJS menunggak sehingga ia akhirnya kesulitan membayar iuran tersebut" },
      { huruf: "C", teks: "Andi hanya ingin membayar iuran BPJS setelah ia mendapatkan musibah" },
      { huruf: "D", teks: "Andi tidak disiplin membayar iuran BPJS" },
      { huruf: "E", teks: "Andi tidak menggunakan uang pribadinya untuk pengobatan dirinya sendiri" }
    ],
    kunci: "A",
    pembahasan: "Andi baru membayar tunggakan iuran BPJS ketika akan menjalani operasi agar biayanya ditanggung negara. Sikap itu memanfaatkan fasilitas negara untuk kepentingan sesaat dan merupakan moral hazard, sehingga melanggar nilai integritas. Pilihan lain hanya menyebut gejala, bukan alasan utamanya."
  },

  // ─── Soal 16 ───
  {
    id: 16, kategori: "TWK",
    teks: "Penyelenggaraan Pemilu yang berintegritas sangat penting untuk dilakukan karena menjadi salah satu tolak ukur terciptanya Pemilu yang demokratis. Proses penyelenggaraan Pemilu juga harus mampu menautkan antara etika teoritis dan etika terapan sebagai wujud dari implementasi etika terapan. Terkait hal tersebut, sikap yang seharusnya ditunjukkan oleh masyarakat dalam pelaksanaan Pemilu adalah...",
    pilihan: [
      { huruf: "A", teks: "Tidak merusak lingkungan dengan baliho yang memajang foto caleg" },
      { huruf: "B", teks: "Memperlakukan caleg dengan adil" },
      { huruf: "C", teks: "Melakukan kampanye dengan tertib" },
      { huruf: "D", teks: "Memberikan suara dan tidak golput" },
      { huruf: "E", teks: "Memilih caleg yang dirasa mampu memimpin bangsa dengan bijaksana" }
    ],
    kunci: "D",
    pembahasan: "Pemilu berintegritas membutuhkan partisipasi masyarakat yang bertanggung jawab. Memberikan suara dan tidak golput merupakan sikap paling langsung untuk mendukung penyelenggaraan Pemilu yang demokratis. Pilihan lain lebih berkaitan dengan etika penyelenggara atau peserta, bukan sikap masyarakat umum."
  },

  // ─── Soal 17 ───
  {
    id: 17, kategori: "TWK",
    teks: "Dalam kesehariannya, Anna selalu bersedia untuk belajar berkembang. Ia juga merespons setiap umpan balik dari orang lain dan bersedia memperbaiki diri dari kesalahan yang ia buat. Sikap tersebut membuktikan bahwasannya Anna menjunjung tinggi nilai-nilai integritas. Alasannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Anna memahami nilai-nilai pribadi yang melekat pada dirinya" },
      { huruf: "B", teks: "Anna memiliki keterbukaan untuk belajar" },
      { huruf: "C", teks: "Anna memiliki rasa tanggung jawab" },
      { huruf: "D", teks: "Anna menanamkan sikap kemandirian dan tidak bergantung kepada orang lain" },
      { huruf: "E", teks: "Anna jujur degnan dirinya sendiri" }
    ],
    kunci: "B",
    pembahasan: "Anna selalu bersedia belajar, merespons umpan balik, dan memperbaiki kesalahan. Sikap tersebut menunjukkan keterbukaan untuk belajar, yang merupakan wujud integritas karena jujur terhadap kekurangan diri dan berkomitmen memperbaiki diri."
  },

  // ─── Soal 18 ───
  {
    id: 18, kategori: "TWK",
    teks: "Pak Lino merupakan seorang kepala sekolah yang sangat berintegritas. Dalam kepemimpinannya Pak Lino selalu menetapkan aturan dan kebijakan yang konsisten. Ia juga memberikan perlakuan yang sama kepada semua siswa dari tahun ke tahun. Sikap Pak Lino tersebut kemudian diteladani oleh staf administrasi sekolah. Sikap tersebut dapat ditunjukkan dengan...",
    pilihan: [
      { huruf: "A", teks: "Menyampaikan informasi administrasi yang akuran seperti jadwal acara dan pengumuman sekolah" },
      { huruf: "B", teks: "Menjaga kepercayaan dalam menjalankan tugas administrasi" },
      { huruf: "C", teks: "Menjalankan prosedur administrasi dengan konsisten termasuk dalam penanganan pelaporan dan dokumentasi" },
      { huruf: "D", teks: "Menolak terlibat praktik administrasi yang merugikan" },
      { huruf: "E", teks: "Menjunjung tinggi standar moral dan etika dalam bekerja" }
    ],
    kunci: "C",
    pembahasan: "Pak Lino mencontohkan konsistensi dalam menetapkan aturan dan memperlakukan semua siswa secara sama. Staf administrasi yang meneladaninya akan menjalankan prosedur secara konsisten, termasuk dalam penanganan pelaporan dan dokumentasi. Pilihan lain lebih umum dan tidak menonjolkan konsistensi prosedur."
  },

  // ─── Soal 19 ───
  {
    id: 19, kategori: "TWK",
    teks: "Bentuk dari bela negara adalah tekad, sikap dan perilaku dari warga negara yang dijiwai oleh kecintaannya kepada tanah air berdasarkan Pancasila dan UUD 1945 dalam menjamin kelangsungan hidup bangsa dan negara. Adapun peranan masyarakat dalam menjalankan upaya bela negara adalah...",
    pilihan: [
      { huruf: "A", teks: "Masyarakat memiliki hak dan kewajiban yang sama dalam program upaya bela negara yang dapat dilakukan dengan kegiatan sosial atau pemberdayaan masyarakat" },
      { huruf: "B", teks: "Masyarakat berperan sebagai penerima manfaat dari program bela negara karena negrara menjamin kehidupan warga negara" },
      { huruf: "C", teks: "Masyarakat bertanggung jawab untuk melakukan upaya bela negara apabila ada ancaman militer yang mengancam persatuan dan kesatuan bangsa" },
      { huruf: "D", teks: "Masyarakat diperbolehkan untuk tidak ikut serta dalam upaya bela negara karena Indonesia sudah terbebas dari penjajahan" },
      { huruf: "E", teks: "Masyarakat memiliki hak untuk menggunakan alat pertahanan untuk melawan serangan dari negara luar" }
    ],
    kunci: "A",
    pembahasan: "Bela negara merupakan hak dan kewajiban seluruh warga negara. Masyarakat memiliki hak dan kewajiban yang sama, dan upaya bela negara dapat diwujudkan melalui kegiatan sosial atau pemberdayaan masyarakat. Pilihan lain keliru karena membatasi atau meniadakan peran masyarakat."
  },

  // ─── Soal 20 ───
  {
    id: 20, kategori: "TWK",
    teks: "Radikalisme merupakan paham atau gerakan yang menginginkan pembaharuan dengan mengembalikan diri mereka secara ke akar secara ekstrem. Radikalisme merupakan tindakan yang tidak bisa disepelekan oleh bangsa Indonesia karena dapat merusak persatuan dan kesatuan bangsa. Peran Pancasila sangat diperlukan sebagai upaya menyelesaikan masalah radikalisme yang brutal dan membabi buta, akan tetapi untuk menyelesaikan masalah tersebut tentu tidak mudah. Untuk mencegah aksi radikalisme maka diperlukan penanaman nilai-nilai Pancasila dalam kehidupan berbangsa dan bernegara. Alasannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Nilai-nilai Pancasila merupakan tameng untuk menangkis ideologi radikalisme karena bermakna perdamaian, keadilan dan religius" },
      { huruf: "B", teks: "Nilai-nilai Pancasila merupakan landasan konstitusional yang menjadi pedoman bagi masyarakat dalam kehidupan berbangsa dan bernegara" },
      { huruf: "C", teks: "Nilai-nilai Pancasila merupakan sumber hukum tertulis yang menjadi pedoman masyarakat Indonesia dalam menjalankan kehidupan berbangsa dan bernegara" },
      { huruf: "D", teks: "Nilai-nilai Pancasila merupakan sumber hukum tertinggi yang berlaku di Negara Kesatuan Republik Indonesia" },
      { huruf: "E", teks: "Nilai-nilai Pancasila merupakan satu kesatuan dan merupakan cita-cita bangsa sehingga dapat menangkis tindakan yang berbau radikal" }
    ],
    kunci: "A",
    pembahasan: "Nilai-nilai Pancasila menjadi tameng untuk menangkal ideologi radikalisme karena mengandung makna perdamaian, keadilan, dan religiusitas yang menghargai kemanusiaan. Pilihan lain ada yang keliru menyebut Pancasila sebagai sumber hukum tertulis atau tidak menjelaskan fungsi penangkalan secara tepat."
  },

  // ─── Soal 21 ───
  {
    id: 21, kategori: "TWK",
    teks: "Ketahanan nasional yang kuat merupakan potensi bangsa dan negara Indonesia dalam mengantisipasi berbagai ancaman bangsa Indonesia baik yang berasal dari dalam ataupun dari luar sebagai wujud kewaspadaan nasional. Bentuk kewaspadaan yang pertama kali harus diterapkan oleh seluruh lapisan masyarakat Indonesia sebagai bentuk dalam upaya bela negara adalah..",
    pilihan: [
      { huruf: "A", teks: "Membangun hubungan yang baik dengan bangsa dan negara lain" },
      { huruf: "B", teks: "Melakukan pengawasan terhadap diri sendiri dan keluarga terhadap perilaku yang berpotensi dapat merusak persatuan dan kesatuan bangsa" },
      { huruf: "C", teks: "Memperbanyak senjata sebagai antisipasi untuk menghadapi serangan militer yang dapat mengancam persatuan dan kesatuan bangsa" },
      { huruf: "D", teks: "Menegakkan sistem pemerintahan yang bersih dan bebas dari korupsi untuk memperkuat kepercayaan masyarakat Indonesia terhadap pemerintahan" },
      { huruf: "E", teks: "Mendukung semua kebijakan yang ditetapkan oleh pemerintahan Indonesia" }
    ],
    kunci: "B",
    pembahasan: "Kewaspadaan nasional paling pertama dimulai dari diri sendiri dan keluarga. Melakukan pengawasan terhadap perilaku yang berpotensi merusak persatuan dan kesatuan bangsa merupakan bentuk awal bela negara yang dapat dilakukan seluruh lapisan masyarakat. Pilihan lain lebih bersifat kelembagaan atau tidak tepat."
  },

  // ─── Soal 22 ───
  {
    id: 22, kategori: "TWK",
    teks: "Upaya bela negara merupakan hak dan kewajiban bagi seluruh warga negara. Bela negara merupakan sikap warga negara yang dijiwai oleh kecintaannya kepada Negara Kesatuan Republik Indonesia yang berdasarkan kepada UUD 1945 dan Pancasila sebagai dasar negara. Adapun perwujudan yang mendasar dan yang paling utama dalam upaya bela negara adalah...",
    pilihan: [
      { huruf: "A", teks: "Kesiapan bagi setiap warga negara untuk berkorban demi mempertahankan kemerdekaan, persatuan, dan kesatuan bangsa" },
      { huruf: "B", teks: "Melakukan berbagai kegiatan yang mewujudkan kesejahteraan masyarakat Indonesia" },
      { huruf: "C", teks: "Mencintai sesama manusia dan menjaga kerukunan" },
      { huruf: "D", teks: "Mengutamakan musyawarah dalam menyelesaikan suatu masalah" },
      { huruf: "E", teks: "Belajar dengan rajin terutama memahami materi Pancasila, Bahasa Indonesia, dan Agama" }
    ],
    kunci: "A",
    pembahasan: "Perwujudan bela negara yang paling mendasar adalah kesiapan setiap warga negara untuk berkorban demi mempertahankan kemerdekaan, persatuan, dan kesatuan bangsa. Pilihan lain merupakan wujud kecintaan atau kegiatan pendukung, bukan perwujudan paling utama."
  },

  // ─── Soal 23 ───
  {
    id: 23, kategori: "TWK",
    teks: "Upaya bela negara merupakan tanggung jawab dan kewajiban bagi seluruh lapisan masyarakat Indonesia tanpa terkecuali, termasuk bagi seorang pelajar. Riri yang merupakan seorang pelajar SMA dapat melakukan upaya bela negara pertama kalinya melalui kegiatan...",
    pilihan: [
      { huruf: "A", teks: "Mempelajari Pancasila dan Pendidikan Kewarganegaraan" },
      { huruf: "B", teks: "Mengikuti kegiatan ekstrakulikuler untuk meningkatkan kemampuan dan keterampilan" },
      { huruf: "C", teks: "Rajin belajar dan mengusahakan untuk selalu berprestasi dalam bidang olahraga dan kesenian" },
      { huruf: "D", teks: "Tidak ikut aksi tawuran yang memecah belah persatuan dan kesatuan" },
      { huruf: "E", teks: "Menghargai perbedaan yang ada di lingkungan sekolahnya" }
    ],
    kunci: "A",
    pembahasan: "Bagi pelajar, upaya bela negara paling awal adalah memahami dasar negara dan kewarganegaraan. Mempelajari Pancasila dan Pendidikan Kewarganegaraan menjadi bekal sikap dan perilaku bela negara. Pilihan lain merupakan kegiatan pendukung yang tidak menjadi langkah pertama."
  },

  // ─── Soal 24 ───
  {
    id: 24, kategori: "TWK",
    teks: "Upaya bela negara merupakan hak dan kewajiban bagi seluruh warga negara Indonesia tanpa terkecuali. Ada banyak cara yang dapat dilakukan sebagai bentuk upaya bela negara di antaranya adalah memiliki rasa bangga dengan apa yang ada di tanah air. Sebagai seorang yang sedang mencari kehidupan di luar negeri, upaya bela negara dapat dilakukan dengan...",
    pilihan: [
      { huruf: "A", teks: "Ikut serta memajukan perekonomian di lingkungan tempat tinggal" },
      { huruf: "B", teks: "Berusaha beradaptasi dengan lingkungan dan kebudayaan di lingkungan tempat tinggal" },
      { huruf: "C", teks: "Menyebarkan informasi terkait kehidupan orang luar negei di media sosial" },
      { huruf: "D", teks: "Membantu pemerintah Indonesia untuk mempromosikan pariwisata nasional" },
      { huruf: "E", teks: "Menghormati perbedaan dan tidak menyerap budaya luar" }
    ],
    kunci: "D",
    pembahasan: "Warga negara yang berada di luar negeri tetap dapat melakukan bela negara dengan rasa bangga terhadap tanah air. Membantu pemerintah mempromosikan pariwisata nasional merupakan kontribusi nyata yang memperkenalkan dan mengangkat citra Indonesia. Pilihan lain lebih berorientasi pada adaptasi pribadi atau tidak berkaitan langsung."
  },

  // ─── Soal 25 ───
  {
    id: 25, kategori: "TWK",
    teks: "Sekumpulan hiu jenis blacktip (carcharhinus limbatus) telihat menepi ke bibir Pulau Peninsula kawasan Nusa Dua, Badung, Bali dalam beberapa hari terakhir. Beberapa akun di dunia maya pun mengunggah video tersebut, salah satunya akun instagram @denpasar_viral. Fenomena ini adalah peristiwa alamiah dan tidak perlu dikhawatirkan. Suko menuturkan, hiu-hiu itu menepi karena mengikuti mangsanya, meliputi ikan pelagis, tongkol, kembung, dan lemuru. 'itu ceritanya dari pengalaman masyarakat nelayan memang sedang musim ikan yang dijadikan makanan hiu. Jadi hiu mendatanginya,' kata Suko, saat dihubungi Kompas.com Kamis(22/8/2019).<br>Gagasan utama teks di atas adalah",
    pilihan: [
      { huruf: "A", teks: "Fenomena hiu blacktip yang menepi ke pantai Nusa Dua" },
      { huruf: "B", teks: "Viral hiu blacktip" },
      { huruf: "C", teks: "Pulau peninsula jadi viral" },
      { huruf: "D", teks: "Peristiwa alamiah di kawasan Nusa Dua" },
      { huruf: "E", teks: "Hiu blacktip menepi karena mengikuti mangsanya" }
    ],
    kunci: "A",
    pembahasan: "Paragraf di atas merupakan paragraf yang kalimat utamanya ada di awal kalimat (deduktif). Sedangkan gagasan utama terletak pada kalimat utama. Di  awal dinyatakan bahwa terdapat sekumpulan hiu blacktip menepi ke bibir Pantai Nusa Dua. Kemudian setelahnya menjelaskan fenomena tersebut"
  },

  // ─── Soal 26 ───
  {
    id: 26, kategori: "TWK",
    teks: "Perang gerilya ternyata memberikan dampak bagi kehidupan masyarakat. Berdasarkan penjelasan di Jurnal Penelitian Ilmu Sejarah, Sosial, dan Budaya, dampak positif perang gerilya yaitu meningkatkan kepercayaan rakyat terhadap pemerintah dan tentara. Dari segi sosial, dampak perang gerilya membuat masyarakat semakin meningkatkan kerukunan dan semangat gotong royong. Perang ini memberikan pemahaman kepada masyarakat tentang pentingnya mempertahankan kemerdekaan. Adanya perang ini juga membuat masyarakat meningkatkan kewaspadaan terhadap kemungkinan kedatangan tentara Belanda.<br>(Sumber: Perang Gerilya, Strategi Perlawanan Indonesia Terhadap Belanda - Nasional Katadata.co.id)<br>Gagasan utama pada teks di atas adalah...",
    pilihan: [
      { huruf: "A", teks: "Dampak negatif perang gerilya" },
      { huruf: "B", teks: "Dampak perang gerilya bagi kehidupan masyarakat" },
      { huruf: "C", teks: "Kedudukan bangsa Indonesia yang semakin kuat" },
      { huruf: "D", teks: "Dampak sosial dari perang gerilya" },
      { huruf: "E", teks: "Efek buruk terjadinya perang" }
    ],
    kunci: "B",
    pembahasan: "Gagasan utama yang terdapat pada teks tersebut adalah tentang dampak yang diakibatkan perang gerilya yang dirasakan oleh masyarakat"
  },

  // ─── Soal 27 ───
  {
    id: 27, kategori: "TWK",
    teks: "(1) Orang yang suka merokok sangat berpotensi terkena penyakit jantung dan paru-paru. (2) Dampak lain yang berhubungan dengan keturunan yakni berakibat pada kemandulan. (3) Bagi seorang ibu hamil, jika dia seorang perokok, maka ia akan mengalami gangguan pada janinnya. (4) Demikianlah bahaya dari merokok<br>Kalimat utama paragraf di atas terletak pada nomor...",
    pilihan: [
      { huruf: "A", teks: "4" },
      { huruf: "B", teks: "2" },
      { huruf: "C", teks: "1" },
      { huruf: "D", teks: "5" },
      { huruf: "E", teks: "3" }
    ],
    kunci: "A",
    pembahasan: "Kalimat utama terletak pada kalimat (4). Pada kalimat tersebut dinyatakan 'demikianlah bahaya dari merokok' dan kalimat-kalimat sebelumnya menjelaskan bahaya-bahaya yang berasal dari merokok"
  },

  // ─── Soal 28 ───
  {
    id: 28, kategori: "TWK",
    teks: "(1) Tahun ini, Susi mulai memasuki perkuliahan semester awal. (2) Susi diterima di salah satu perguruan tinggi negeri yang ada di Lampung. (3) Lampung merupakan salah satu penghasil kopi terbesar di Indonesia. (4) Susi mengambil jurusan Pendidikan Bahasa Inggris. (5) Dia masuk ke perguruan tinggi itu melalui jalur SNBP<br>Kalimat yang tidak koheren ditunjukkan dengan nomor...",
    pilihan: [
      { huruf: "A", teks: "1" },
      { huruf: "B", teks: "2" },
      { huruf: "C", teks: "3" },
      { huruf: "D", teks: "4" },
      { huruf: "E", teks: "5" }
    ],
    kunci: "C",
    pembahasan: "Kalimat yang tidak koheren adalah kalimat nomor (3), karena kalimat tersebut keluar dari konteks pembahasan dari paragraf tersebut yang membahas perkuliahan Susi, tiba tiba pada kalimat nomor 3 membahas Lampung penghasil kopi terbesar di Indonesia."
  },

  // ─── Soal 29 ───
  {
    id: 29, kategori: "TWK",
    teks: "Obat mujarab ini memiliki berbagai khasiat seperti melancarkan peredaran darah, .... nafsu makan, dan meningkatkan stamina pria.<br>Kata berimbuhan yang tepat untuk mengisi kekosongan pada kalimat di atas ialah...",
    pilihan: [
      { huruf: "A", teks: "Ditambah" },
      { huruf: "B", teks: "Menambahi" },
      { huruf: "C", teks: "Menambah" },
      { huruf: "D", teks: "Ditambahkan" },
      { huruf: "E", teks: "Ditambahi" }
    ],
    kunci: "C",
    pembahasan: "Kata 'menambah' adalah bentuk yang tepat untuk mengisi kekosongan dalam kalimat tersebut karena kata ini adalah bentuk kata kerja yang tepat dengan imbuhan 'men-' untuk menyatakan tindakan menambahkan sesuatu."
  },

  // ─── Soal 30 ───
  {
    id: 30, kategori: "TWK",
    teks: "Segala sesuatu yang dilakukan dengan sangat profesional sekali akan membuahkn hasil yang begitu maksimal dan sangat bermanfaat bagi seluruh banyak manusia di sekitarnya.<br>Pada kalimat di atas perlu menghilangkan beberapa kata sehingga menjadi kalimat efektif. Beberapa kata yang perlu dihilangkan pada kalimat tersebut ialah...",
    pilihan: [
      { huruf: "A", teks: "Sekali, seluruh" },
      { huruf: "B", teks: "Maksimal, bermanfaat" },
      { huruf: "C", teks: "Banyak, manusia" },
      { huruf: "D", teks: "Pekerjaan, dilakukan" },
      { huruf: "E", teks: "Bermanfaat, disekitarnya" }
    ],
    kunci: "A",
    pembahasan: "Menghilangkan kata 'sekali' dan 'seluruh' akan membuat kalimat menjadi lebih ringkas dan langsung pada intinya tanpa mengorbankan makna atau kejelasan. Ini akan meningkatkan efektivitas kalimat."
  },

  // ════════════════════════════════════════════
  // TES INTELIGENSIA UMUM (TIU) — 35 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 31 ───
  {
    id: 31, kategori: "TIU",
    teks: "Kelulusan unit pompa dalam uji ketahanan menjamin perolehan izin penggunaan operasional. Perolehan izin penggunaan operasional membebaskan unit pompa dari kewajiban pengujian ulang. Unit pompa K lolos uji ketahanan.<br><br>Kesimpulan yang pasti benar berdasarkan ketiga pernyataan tersebut adalah ....",
    pilihan: [
      { huruf: "A", teks: "Kewajiban mengikuti pengujian ulang masih berlaku bagi unit pompa K." },
      { huruf: "B", teks: "Izin penggunaan operasional tidak diperoleh oleh unit pompa K." },
      { huruf: "C", teks: "Pengujian ulang bukan merupakan kewajiban yang harus dijalani unit pompa K." },
      { huruf: "D", teks: "Meskipun memperoleh izin operasional, unit pompa K tetap wajib menjalani pengujian ulang." },
      { huruf: "E", teks: "Kelulusan dalam uji ketahanan tidak terpenuhi pada unit pompa K." }
    ],
    kunci: "C",
    pembahasan: "Premisnya: lulus uji ketahanan → memperoleh izin operasional; memperoleh izin → bebas dari kewajiban pengujian ulang. Unit K lolos uji, maka K memperoleh izin dan bebas dari kewajiban uji ulang. Jadi pengujian ulang bukan kewajiban yang harus dijalani unit K (C)."
  },

  // ─── Soal 32 ───
  {
    id: 32, kategori: "TIU",
    teks: "Dalam mengatur peserta perjalanan menyusuri sungai, petugas layanan mengikutsertakan setiap wisatawan yang memesan perjalanan menyusuri sungai dalam pengarahan keselamatan, sebagai bagian dari persiapan peserta untuk mengikuti kegiatan wisata sungai melalui layanan perjalanan tersebut. Untuk mengatur akses peserta menuju dermaga keberangkatan, petugas memberikan kartu akses dermaga kepada setiap wisatawan yang mengikuti pengarahan keselamatan, sehingga peserta dalam kelompok pengarahan tersebut mendapatkan kartu yang dimaksud dalam prosedur akses layanan wisata sungai.<br><br>Berdasarkan narasi tersebut, kesimpulan yang pasti benar adalah ....",
    pilihan: [
      { huruf: "A", teks: "Pemesanan perjalanan menyusuri sungai menjamin wisatawan menerima kartu akses dermaga." },
      { huruf: "B", teks: "Kartu akses dermaga hanya diterima oleh wisatawan yang memesan perjalanan menyusuri sungai." },
      { huruf: "C", teks: "Keikutsertaan dalam pengarahan keselamatan menunjukkan bahwa wisatawan telah memesan perjalanan menyusuri sungai." },
      { huruf: "D", teks: "Ketiadaan pemesanan perjalanan menyusuri sungai menjamin wisatawan tidak menerima kartu akses dermaga." },
      { huruf: "E", teks: "Penerimaan kartu akses dermaga menunjukkan bahwa wisatawan telah mengikuti pengarahan keselamatan." }
    ],
    kunci: "A",
    pembahasan: "Setiap wisatawan yang memesan perjalanan mengikuti pengarahan keselamatan, dan setiap peserta pengarahan mendapat kartu akses dermaga. Dengan demikian, pemesanan perjalanan menjamin wisatawan menerima kartu akses dermaga (A)."
  },

  // ─── Soal 33 ───
  {
    id: 33, kategori: "TIU",
    teks: "Untuk menyusun penawaran keramik kepada pembeli luar negeri, pengelola bengkel memasukkan ke dalam katalog ekspor setiap produk yang telah lolos pemeriksaan ketahanan, sebagai bagian dari pendataan produk yang ditawarkan melalui layanan penjualan ekspor bengkel tersebut. Petugas pengelola pesanan kemudian memberikan kode pelacakan khusus kepada setiap produk yang masuk katalog ekspor, agar pencatatan produk dalam penawaran kepada pembeli luar negeri dapat dilakukan dengan menggunakan pengenal produk pada sistem pesanan bengkel.<br><br>Berdasarkan narasi tersebut, kesimpulan yang pasti benar adalah ....",
    pilihan: [
      { huruf: "A", teks: "Kepemilikan kode pelacakan khusus menjamin produk keramik telah lolos pemeriksaan ketahanan." },
      { huruf: "B", teks: "Tidak lolosnya produk keramik dalam pemeriksaan ketahanan menjamin produk tersebut tidak memperoleh kode pelacakan khusus." },
      { huruf: "C", teks: "Kelulusan produk keramik dalam pemeriksaan ketahanan menjamin perolehan kode pelacakan khusus." },
      { huruf: "D", teks: "Masuknya produk keramik ke katalog ekspor menunjukkan bahwa produk tersebut telah lolos pemeriksaan ketahanan." },
      { huruf: "E", teks: "Pemberian kode pelacakan khusus menjamin produk keramik telah dimasukkan ke dalam katalog ekspor." }
    ],
    kunci: "C",
    pembahasan: "Produk yang lolos pemeriksaan ketahanan dimasukkan ke katalog ekspor, dan setiap produk dalam katalog mendapat kode pelacakan khusus. Maka kelulusan dalam pemeriksaan ketahanan menjamin perolehan kode pelacakan khusus (C)."
  },

  // ─── Soal 34 ───
  {
    id: 34, kategori: "TIU",
    teks: "Dalam mengatur pemakaian taman bersama untuk acara komunitas, pengurus mencantumkan dalam agenda kawasan setiap kegiatan yang memperoleh persetujuan penggunaan taman, sebagai bagian dari pencatatan kegiatan komunitas yang diselenggarakan melalui layanan penggunaan taman tersebut. Pada pengaturan pemakaian panggung untuk acara komunitas, pengurus memberikan jadwal penggunaan panggung kepada setiap kegiatan yang masuk agenda kawasan, sehingga kegiatan dalam agenda itu mendapatkan alokasi jadwal pemakaian panggung pada pengelolaan fasilitas taman. Untuk pengelolaan fasilitas listrik pada pelaksanaan acara, pengurus menyediakan akses listrik panggung bagi setiap kegiatan yang mendapat jadwal penggunaan panggung, sebagai akses pemakaian listrik yang diberikan melalui layanan fasilitas panggung di taman bersama tersebut.<br><br>Berdasarkan narasi tersebut, kesimpulan yang pasti benar adalah ....",
    pilihan: [
      { huruf: "A", teks: "Akses listrik panggung hanya diperoleh oleh kegiatan yang mendapat persetujuan penggunaan taman." },
      { huruf: "B", teks: "Ketiadaan persetujuan penggunaan taman menjamin kegiatan tersebut tidak memperoleh akses listrik panggung." },
      { huruf: "C", teks: "Pencantuman kegiatan dalam agenda kawasan menunjukkan bahwa persetujuan penggunaan taman telah diperoleh." },
      { huruf: "D", teks: "Persetujuan penggunaan taman yang diperoleh kegiatan menjamin perolehan akses listrik panggung bagi kegiatan tersebut." },
      { huruf: "E", teks: "Perolehan akses listrik panggung menunjukkan bahwa kegiatan telah mendapat jadwal penggunaan panggung." }
    ],
    kunci: "D",
    pembahasan: "Persetujuan penggunaan taman → kegiatan masuk agenda kawasan; masuk agenda → mendapat jadwal panggung; mendapat jadwal → memperoleh akses listrik panggung. Jadi persetujuan penggunaan taman menjamin perolehan akses listrik panggung (D)."
  },

  // ─── Soal 35 ───
  {
    id: 35, kategori: "TIU",
    teks: "Dalam mendampingi peserta program latihan pemulihan, pusat latihan olahraga mengatur agar setiap peserta yang mengikuti program latihan pemulihan menjalani pemeriksaan kebugaran, sebagai bagian dari pemeriksaan kondisi peserta pada rangkaian kegiatan program latihan tersebut. Pada pengelolaan kegiatan latihan peserta, pendamping memberikan rencana latihan individual kepada setiap peserta yang menjalani pemeriksaan kebugaran, sehingga peserta dalam kelompok pemeriksaan itu mendapatkan rencana latihan masing-masing melalui layanan pendampingan di pusat latihan. Di pusat latihan yang menerapkan ketentuan tersebut, Nara mengikuti program latihan pemulihan, sehingga keikutsertaan Nara berada dalam lingkup program yang dimaksud pada uraian pelayanan peserta di atas.<br><br>Berdasarkan narasi tersebut, kesimpulan yang pasti benar adalah ....",
    pilihan: [
      { huruf: "A", teks: "Pemeriksaan kebugaran tidak dijalani oleh Nara dalam program latihan di pusat tersebut." },
      { huruf: "B", teks: "Rencana latihan individual diperoleh Nara melalui program latihan di pusat tersebut." },
      { huruf: "C", teks: "Latihan pemulihan dalam program di pusat tersebut tidak diikuti oleh Nara." },
      { huruf: "D", teks: "Perolehan rencana latihan individual oleh Nara tidak terjadi dalam program di pusat tersebut." },
      { huruf: "E", teks: "Tanpa menjalani pemeriksaan kebugaran, Nara memperoleh rencana latihan individual di pusat tersebut." }
    ],
    kunci: "B",
    pembahasan: "Nara mengikuti program latihan pemulihan, sehingga ia menjalani pemeriksaan kebugaran, dan setiap peserta yang menjalani pemeriksaan mendapat rencana latihan individual. Jadi Nara memperoleh rencana latihan individual (B)."
  },

  // ─── Soal 36 ───
  {
    id: 36, kategori: "TIU",
    teks: "Perputaran : Rotasi = ... : ...",
    pilihan: [
      { huruf: "A", teks: "Perbesaran : Translasi" },
      { huruf: "B", teks: "Pencerminan : Dilatasi" },
      { huruf: "C", teks: "Perbesaran : Refleksi" },
      { huruf: "D", teks: "Pergeseran : Translasi" },
      { huruf: "E", teks: "Refleksi : Pencerminan" }
    ],
    kunci: "D",
    pembahasan: "Perputaran memiliki makna yang sama dengan rotasi. Pasangan yang berhubungan serupa adalah pergeseran yang bermakna sama dengan translasi (D). Refleksi dan pencerminan juga bersinonim, tetapi urutan istilahnya terbalik sehingga hubungannya tidak setara."
  },

  // ─── Soal 37 ───
  {
    id: 37, kategori: "TIU",
    teks: "Perpustakaan kelurahan memasang label warna yang sama pada punggung buku dan rak sesuai jenis bacaannya. Pengelola berpendapat bahwa label tersebut membantu pengunjung mengembalikan buku ke rak yang tepat. Dengan demikian, waktu yang dibutuhkan petugas untuk menata ulang buku akan berkurang.<br><br>Temuan manakah yang paling MEMPERKUAT pendapat pengelola?",
    pilihan: [
      { huruf: "A", teks: "Petugas tetap menata ulang rak setiap sore, termasuk memeriksa urutan buku dan merapikan buku yang dipinjam pengunjung." },
      { huruf: "B", teks: "Jumlah buku yang salah rak menurun setelah pelabelan, sedangkan jumlah pengunjung dan buku yang dikembalikan relatif tetap." },
      { huruf: "C", teks: "Pengunjung lebih mudah mengenali jenis bacaan melalui warna label, tetapi belum diketahui apakah mereka mengembalikan buku ke rak yang sesuai." },
      { huruf: "D", teks: "Buku yang dikembalikan kini dicatat lebih rinci sehingga petugas mengetahui peminjamnya, meskipun tempat pengembalian buku tidak tercantum dalam catatan tersebut." },
      { huruf: "E", teks: "Pengunjung menilai susunan rak lebih menarik setelah diberi label, tetapi penilaian itu tidak mencakup ketepatan pengembalian atau waktu penataan buku." }
    ],
    kunci: "B",
    pembahasan: "Pendapat pengelola menyatakan label warna mengurangi waktu penataan karena buku dikembalikan ke rak yang tepat. Bukti B menunjukkan buku salah rak menurun sementara jumlah pengunjung dan buku yang dikembalikan relatif tetap, sehingga faktor lain dapat dikendalikan dan label benar-benar menjadi penyebabnya."
  },

  // ─── Soal 38 ───
  {
    id: 38, kategori: "TIU",
    teks: "Sebuah koperasi menerapkan jadwal pengambilan pesanan yang berbeda untuk setiap kelompok pelanggan. Sebulan kemudian, waktu antre rata-rata berkurang. Pada bulan yang sama, koperasi juga menambah satu loket pembayaran. Ketua koperasi menduga pengaturan jadwal, bukan penambahan loket, merupakan penyebab utama antrean menjadi lebih singkat.<br><br>Bukti manakah yang paling MEMPERKUAT dugaan ketua koperasi?",
    pilihan: [
      { huruf: "A", teks: "Ketika loket tambahan ditutup, antrean tetap lebih singkat daripada sebelum pengaturan jadwal, pada hari-hari dengan jumlah pesanan dan petugas yang sebanding." },
      { huruf: "B", teks: "Pelanggan dengan jadwal baru lebih sering datang tepat waktu, tetapi lama antre mereka belum dicatat terpisah dari pelanggan yang datang tanpa jadwal." },
      { huruf: "C", teks: "Loket tambahan melayani pembayaran lebih cepat daripada loket lama, dan pelanggan paling sering memilihnya ketika kedua loket dibuka secara bersamaan." },
      { huruf: "D", teks: "Jumlah pesanan harian selama penerapan jadwal baru lebih rendah daripada bulan sebelumnya, sedangkan jumlah loket yang beroperasi tidak selalu sama." },
      { huruf: "E", teks: "Survei menunjukkan pelanggan menyukai pengaturan jadwal, tetapi mereka juga menyukai loket tambahan dan tidak diminta membandingkan pengaruh kedua perubahan tersebut." }
    ],
    kunci: "A",
    pembahasan: "Dugaan ketua koperasi adalah jadwal, bukan loket tambahan, yang menyebabkan antrean lebih singkat. Bukti A membandingkan kondisi ketika loket tambahan ditutup: antrean tetap lebih singkat daripada sebelum pengaturan jadwal, dengan jumlah pesanan dan petugas yang sebanding. Ini mengisolasi pengaruh jadwal."
  },

  // ─── Soal 39 ───
  {
    id: 39, kategori: "TIU",
    teks: "Sebuah sanggar menyediakan rekaman pelafalan untuk peserta kelas bahasa daerah. Peserta diminta mendengarkan rekaman, mengucapkan kata yang sama, lalu membandingkan suara mereka dengan contoh. Pengajar memperkirakan latihan ini dapat meningkatkan ketepatan pelafalan karena peserta lebih mudah mengenali dan memperbaiki bunyi yang mereka ucapkan secara keliru.<br><br>Jika benar, informasi tambahan manakah yang paling MEMPERKUAT mekanisme dalam argumen tersebut?",
    pilihan: [
      { huruf: "A", teks: "Peserta dapat mengakses rekaman setiap hari, tetapi catatan penggunaan belum membedakan kegiatan mendengarkan contoh dari kegiatan membandingkan ucapan sendiri." },
      { huruf: "B", teks: "Peserta menghafal lebih banyak kosakata setelah latihan, sedangkan tes yang digunakan hanya menilai arti kata tanpa memeriksa ketepatan pelafalannya." },
      { huruf: "C", teks: "Peserta menganggap suara pada rekaman mudah didengar, tetapi sebagian tetap tidak mengetahui bagian ucapan mereka yang berbeda dari contoh." },
      { huruf: "D", teks: "Peserta mengenali perbedaan bunyi dengan contoh dan mengurangi kesalahan yang sama pada percobaan berikutnya tanpa koreksi langsung dari pengajar." },
      { huruf: "E", teks: "Pengajar menilai rekaman sesuai dengan materi kelas, meskipun belum memeriksa apakah peserta mampu menggunakan contoh tersebut untuk memperbaiki pelafalan." }
    ],
    kunci: "D",
    pembahasan: "Mekanisme argumen: peserta mengenali bunyi yang keliru lalu memperbaikinya. Pilihan D menunjukkan peserta mampu mengenali perbedaan bunyi dengan contoh dan mengurangi kesalahan yang sama pada percobaan berikutnya tanpa koreksi langsung pengajar, sehingga mekanisme tersebut benar-benar bekerja."
  },

  // ─── Soal 40 ───
  {
    id: 40, kategori: "TIU",
    teks: "Enam pedagang Jovan, Karina, Laras, Malik, Nabila, dan Omar masing-masing menempati satu stan. Keenam stan berderet dari barat ke timur pada posisi 1–6.<br>1. Jovan dan Omar menempati kedua ujung deretan.<br>2. Karina tepat di barat Malik.<br>3. Karina berada di barat Laras, sedangkan Nabila berada di timur Laras.<br>4. Omar berada di sebelah barat Laras.<br><br>Urutan pemilik stan dari barat ke timur yang benar adalah ..",
    pilihan: [
      { huruf: "A", teks: "Omar – Nabila – Karina – Malik – Laras – Jovan" },
      { huruf: "B", teks: "Omar – Laras – Karina – Malik – Nabila – Jovan" },
      { huruf: "C", teks: "Omar – Karina – Laras – Malik – Nabila – Jovan" },
      { huruf: "D", teks: "Jovan – Karina – Malik – Laras – Nabila – Omar" },
      { huruf: "E", teks: "Omar – Karina – Malik – Laras – Nabila – Jovan" }
    ],
    kunci: "E",
    pembahasan: "Jovan dan Omar berada di kedua ujung. Karena Omar di sebelah barat Laras, Omar menempati posisi 1 dan Jovan posisi 6. Karina tepat di barat Malik, Karina di barat Laras, dan Nabila di timur Laras. Susunan yang memenuhi semua syarat adalah Omar–Karina–Malik–Laras–Nabila–Jovan (E)."
  },

  // ─── Soal 41 ───
  {
    id: 41, kategori: "TIU",
    teks: "Tujuh peserta Arga, Bunga, Citra, Damar, Elsa, Fajar, dan Gita duduk berjajar pada kursi 1–7 dari kiri ke kanan. Setiap kursi ditempati satu orang.<br>1. Damar berada di kursi keempat.<br>2. Arga tepat di kiri Bunga.<br>3. Ada tepat dua peserta di antara Bunga dan Elsa.<br>4. Fajar berada di kiri Arga, sedangkan Gita berada di kanan Elsa.<br>5. Citra tidak berada di ujung deretan kursi.<br><br>Siapa yang duduk paling kanan?",
    pilihan: [
      { huruf: "A", teks: "Elsa" },
      { huruf: "B", teks: "Bunga" },
      { huruf: "C", teks: "Gita" },
      { huruf: "D", teks: "Arga" },
      { huruf: "E", teks: "Citra" }
    ],
    kunci: "C",
    pembahasan: "Damar di kursi 4. Arga tepat di kiri Bunga, ada tepat dua peserta di antara Bunga dan Elsa, Fajar di kiri Arga, dan Gita di kanan Elsa. Susunan yang memenuhi menempatkan Arga–Bunga berdekatan di kiri, Elsa di kanan, dan Gita di kursi paling kanan (C)."
  },

  // ─── Soal 42 ───
  {
    id: 42, kategori: "TIU",
    teks: "0,13 + 0,0013 + 0,000013 = ?",
    pilihan: [
      { huruf: "A", teks: "<math><mfrac> <mn>13</mn><mn>9</mn> </mfrac></math>" },
      { huruf: "B", teks: "<math><mfrac> <mn>13</mn><mn>99</mn> </mfrac></math>" },
      { huruf: "C", teks: "<math><mfrac> <mn>7</mn><mn>13</mn> </mfrac></math>" },
      { huruf: "D", teks: "<math><mfrac> <mn>7</mn><mn>33</mn> </mfrac></math>" },
      { huruf: "E", teks: "<math><mfrac> <mn>7</mn><mn>99</mn> </mfrac></math>" }
    ],
    kunci: "B",
    pembahasan: "0,13 = 13/100; 0,0013 = 13/10.000; 0,000013 = 13/1.000.000. Jumlahnya 0,131313... yang merupakan pecahan berulang 13/99 (B)."
  },

  // ─── Soal 43 ───
  {
    id: 43, kategori: "TIU",
    teks: "Penyedia katering membandingkan jumlah kotak dan banyaknya porsi makanan per kotak. Pasangan susunan yang menghasilkan jumlah porsi keseluruhan yang sama adalah …",
    pilihan: [
      { huruf: "A", teks: "24 × 730 sama dengan 35 × 460" },
      { huruf: "B", teks: "27 × 540 sama dengan 36 × 410" },
      { huruf: "C", teks: "28 × 600 sama dengan 24 × 700" },
      { huruf: "D", teks: "32 × 450 sama dengan 36 × 430" },
      { huruf: "E", teks: "44 × 360 sama dengan 48 × 340" }
    ],
    kunci: "C",
    pembahasan: "28 × 600 = 16.800 dan 24 × 700 = 16.800, sehingga jumlah porsi keseluruhan sama. Pasangan lain tidak menghasilkan hasil kali yang sama."
  },

  // ─── Soal 44 ───
  {
    id: 44, kategori: "TIU",
    teks: "Minyak akan dibagikan secara merata ke sejumlah drum. Volume minyak per drum diperoleh dengan membagi volume total minyak dengan jumlah drum. Pasangan pembagian yang menghasilkan volume per drum yang sama adalah …",
    pilihan: [
      { huruf: "A", teks: "900 ÷ 24 sama dengan 1280 ÷ 32" },
      { huruf: "B", teks: "1470 ÷ 35 sama dengan 1600 ÷ 42" },
      { huruf: "C", teks: "1260 ÷ 25 sama dengan 1540 ÷ 35" },
      { huruf: "D", teks: "1260 ÷ 28 sama dengan 1980 ÷ 44" },
      { huruf: "E", teks: "1820 ÷ 26 sama dengan 2340 ÷ 39" }
    ],
    kunci: "D",
    pembahasan: "1.260 ÷ 28 = 45 dan 1.980 ÷ 44 = 45, sehingga volume minyak per drum sama. Pasangan pembagian lain menghasilkan hasil bagi yang berbeda."
  },

  // ─── Soal 45 ───
  {
    id: 45, kategori: "TIU",
    teks: "Untuk a dan b real, a − b = 4. Berapa a<sup>2</sup> − b<sup>2</sup>?<br>(1) a > 0.<br>(2) a + b = 10.",
    pilihan: [
      { huruf: "A", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup." },
      { huruf: "B", teks: "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup." },
      { huruf: "C", teks: "KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup." },
      { huruf: "D", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup" },
      { huruf: "E", teks: "Pertanyaan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan." }
    ],
    kunci: "B",
    pembahasan: "a² − b² = (a − b)(a + b) = 4(a + b). Pernyataan (2) memberi a + b = 10 sehingga hasilnya 40. Pernyataan (1) saja tidak cukup karena nilai a + b tidak diketahui."
  },

  // ─── Soal 46 ───
  {
    id: 46, kategori: "TIU",
    teks: "Untuk x dan y real, x + y = 11. Berapa xy?<br>(1) x > y.<br>(2) x<sup>2</sup> + y<sup>2</sup> = 65.",
    pilihan: [
      { huruf: "A", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup." },
      { huruf: "B", teks: "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup." },
      { huruf: "C", teks: "KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup." },
      { huruf: "D", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup" },
      { huruf: "E", teks: "Pertanyaan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan." }
    ],
    kunci: "B",
    pembahasan: "(x + y)² = x² + 2xy + y². Dengan x + y = 11 dan x² + y² = 65 diperoleh 121 = 65 + 2xy, sehingga xy = 28. Pernyataan (2) saja cukup; pernyataan (1) tidak menentukan nilai xy."
  },

  // ─── Soal 47 ───
  {
    id: 47, kategori: "TIU",
    teks: "Bilangan bulat n lebih besar daripada 1. Apakah n prima?<br>(1) n genap.<br>(2) n > 2.",
    pilihan: [
      { huruf: "A", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup." },
      { huruf: "B", teks: "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup." },
      { huruf: "C", teks: "KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup." },
      { huruf: "D", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup" },
      { huruf: "E", teks: "Pertanyaan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan." }
    ],
    kunci: "C",
    pembahasan: "n > 1 bilangan bulat. (1) n genap: bisa 2 (prima) atau 4 (bukan prima), jadi belum pasti. (2) n > 2 saja juga belum pasti. Gabungan keduanya: n genap dan lebih dari 2 pasti komposit, sehingga jawabannya pasti tidak prima."
  },

  // ─── Soal 48 ───
  {
    id: 48, kategori: "TIU",
    teks: "Berapa usia Sekar saat ini?<br><br><table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'><tr><th>Data</th><th>Keterangan</th></tr><tr><td>Sekar</td><td>lebih tua daripada Nara</td></tr><tr><td>Nara</td><td>usia saat ini positif</td></tr><tr><td>Selisih usia</td><td>tetap</td></tr></table><br><br>(1) Jumlah usia keduanya 34 tahun.<br>(2) Selisih usia keduanya 8 tahun.",
    pilihan: [
      { huruf: "A", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup." },
      { huruf: "B", teks: "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup." },
      { huruf: "C", teks: "KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup." },
      { huruf: "D", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup" },
      { huruf: "E", teks: "Pertanyaan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan." }
    ],
    kunci: "C",
    pembahasan: "Misal usia Sekar S dan Nara N dengan S > N. (1) S + N = 34 saja belum menentukan S karena banyak pasangan yang mungkin. (2) S − N = 8 saja juga belum. Gabungan keduanya menghasilkan S = 21 dan N = 13, jadi usia Sekar dapat ditentukan."
  },

  // ─── Soal 49 ───
  {
    id: 49, kategori: "TIU",
    teks: "Gudang mengisi peti dengan ukuran seragam. Berapa peti minimum untuk membawa semua paket?<br><br><table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'><tr><th>Data</th><th>Keterangan</th></tr><tr><td>Kapasitas</td><td>12 paket per peti</td></tr><tr><td>Pengisian</td><td>peti terakhir boleh tidak penuh</td></tr><tr><td>Jumlah paket</td><td>bilangan bulat positif</td></tr></table><br><br>(1) Jumlah paket lebih dari 48.<br>(2) Jumlah paket kurang dari 61.",
    pilihan: [
      { huruf: "A", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup." },
      { huruf: "B", teks: "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup." },
      { huruf: "C", teks: "KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup." },
      { huruf: "D", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup" },
      { huruf: "E", teks: "Pertanyaan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan." }
    ],
    kunci: "C",
    pembahasan: "Kapasitas 12 paket per peti. (1) jumlah paket > 48 belum pasti banyak peti karena 49–60 butuh 5 peti, sedangkan 61 butuh 6. (2) jumlah paket < 61 juga belum pasti. Gabungan keduanya membatasi jumlah paket 49–60, yang semuanya membutuhkan tepat 5 peti."
  },

  // ─── Soal 50 ───
  {
    id: 50, kategori: "TIU",
    teks: "Panitia menjual dua jenis tiket. Berapa pendapatan dari seluruh tiket yang terjual?<br><br><table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'><tr><th>Data</th><th>Keterangan</th></tr><tr><td>Tiket reguler</td><td>Rp25.000 per tiket</td></tr><tr><td>Tiket pelajar</td><td>Rp15.000 per tiket</td></tr><tr><td>Total terjual</td><td>40 tiket, kedua jenis terjual</td></tr></table><br><br>(1) Tiket reguler terjual lebih banyak daripada tiket pelajar.<br>(2) Tiket reguler yang terjual ada 24.",
    pilihan: [
      { huruf: "A", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan, tetapi (2) saja tidak cukup." },
      { huruf: "B", teks: "Pernyataan (2) SAJA cukup untuk menjawab pertanyaan, tetapi (1) saja tidak cukup." },
      { huruf: "C", teks: "KEDUA pernyataan BERSAMA-SAMA cukup untuk menjawab pertanyaan, tetapi SATU pernyataan SAJA tidak cukup." },
      { huruf: "D", teks: "Pernyataan (1) SAJA cukup untuk menjawab pertanyaan dan (2) SAJA cukup" },
      { huruf: "E", teks: "Pertanyaan (1) dan (2) TIDAK CUKUP untuk menjawab pertanyaan." }
    ],
    kunci: "B",
    pembahasan: "Total 40 tiket dan kedua jenis terjual. (1) tiket reguler lebih banyak belum menentukan komposisi pasti. (2) tiket reguler 24 berarti tiket pelajar 16, sehingga pendapatan = 24(25.000) + 16(15.000) = Rp840.000. Pernyataan (2) cukup."
  },

  // ─── Soal 51 ───
  {
    id: 51, kategori: "TIU",
    teks: "7, 13, 19, 25, 31, ...",
    pilihan: [
      { huruf: "A", teks: "29" },
      { huruf: "B", teks: "37" },
      { huruf: "C", teks: "33" },
      { huruf: "D", teks: "41" },
      { huruf: "E", teks: "45" }
    ],
    kunci: "B",
    pembahasan: "Barisan bertambah 6 setiap suku: 7, 13, 19, 25, 31. Suku berikutnya adalah 31 + 6 = 37 (B)."
  },

  // ─── Soal 52 ───
  {
    id: 52, kategori: "TIU",
    teks: "Tentukan nilai x yang melengkapi pola bilangan pada tabel berikut.<br><br><table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'><tr><td>7</td><td>18</td><td>31</td></tr><tr><td>12</td><td>25</td><td>40</td></tr><tr><td>17</td><td>32</td><td>x</td></tr></table>",
    pilihan: [
      { huruf: "A", teks: "45" },
      { huruf: "B", teks: "47" },
      { huruf: "C", teks: "49" },
      { huruf: "D", teks: "51" },
      { huruf: "E", teks: "53" }
    ],
    kunci: "C",
    pembahasan: "Kolom pertama bertambah 5 (7, 12, 17), kolom kedua bertambah 7 (18, 25, 32), dan kolom ketiga bertambah 9 (31, 40, 49). Jadi x = 49 (C)."
  },

  // ─── Soal 53 ───
  {
    id: 53, kategori: "TIU",
    teks: "Bilangan berapakah yang tepat untuk menggantikan x pada tabel berikut?<br><br><table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'><tr><td>−18</td><td>9</td><td>28</td></tr><tr><td>−11</td><td>5</td><td>22</td></tr><tr><td>−4</td><td>x</td><td>16</td></tr></table>",
    pilihan: [
      { huruf: "A", teks: "1" },
      { huruf: "B", teks: "-1" },
      { huruf: "C", teks: "3" },
      { huruf: "D", teks: "5" },
      { huruf: "E", teks: "9" }
    ],
    kunci: "A",
    pembahasan: "Kolom pertama bertambah 7 (−18, −11, −4), kolom ketiga berkurang 6 (28, 22, 16), dan kolom kedua berkurang 4 setiap baris (9, 5, 1). Jadi x = 1 (A)."
  },

  // ─── Soal 54 ───
  {
    id: 54, kategori: "TIU",
    teks: "Perhatikan tabel berikut!<br><br><table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'><tr><th>Urutan ke-</th><th>Nilai</th></tr><tr><td>1</td><td>10</td></tr><tr><td>3</td><td>24</td></tr><tr><td>8</td><td>59</td></tr><tr><td>14</td><td>?</td></tr><tr><td>20</td><td>143</td></tr></table><br><br>Berdasarkan pola hubungan pada tabel, bilangan yang tepat untuk mengisi nilai pada urutan ke-14 adalah ....",
    pilihan: [
      { huruf: "A", teks: "98" },
      { huruf: "B", teks: "101" },
      { huruf: "C", teks: "104" },
      { huruf: "D", teks: "108" },
      { huruf: "E", teks: "115" }
    ],
    kunci: "B",
    pembahasan: "Nilai mengikuti pola 7n + 3: n = 1 → 10; n = 3 → 24; n = 8 → 59; n = 20 → 143. Untuk n = 14: 7(14) + 3 = 101 (B)."
  },

  // ─── Soal 55 ───
  {
    id: 55, kategori: "TIU",
    teks: "Perhatikan tabel berikut!<br><br><table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'><tr><th>Urutan ke-</th><th>Nilai</th></tr><tr><td>1</td><td>2</td></tr><tr><td>4</td><td>14</td></tr><tr><td>9</td><td>34</td></tr><tr><td>17</td><td>?</td></tr><tr><td>23</td><td>90</td></tr></table><br><br>Perubahan nilai mengikuti pola yang sama. Nilai pada urutan ke-17 adalah ....",
    pilihan: [
      { huruf: "A", teks: "62" },
      { huruf: "B", teks: "64" },
      { huruf: "C", teks: "68" },
      { huruf: "D", teks: "66" },
      { huruf: "E", teks: "70" }
    ],
    kunci: "D",
    pembahasan: "Nilai mengikuti pola 4n − 2: n = 1 → 2; n = 4 → 14; n = 9 → 34; n = 23 → 90. Untuk n = 17: 4(17) − 2 = 66 (D)."
  },

  // ─── Soal 56 ───
  {
    id: 56, kategori: "TIU",
    teks: "Daftar harga satuan menu di sebuah kedai adalah sebagai berikut. Seluruh pembelian dikenai harga sesuai tabel tanpa biaya tambahan.<br><br><table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'><tr><th>Menu</th><th>Harga</th></tr><tr><td>Teh</td><td>Rp8.000</td></tr><tr><td>Kopi</td><td>Rp12.000</td></tr><tr><td>Roti</td><td>Rp10.000</td></tr><tr><td>Puding</td><td>Rp7.000</td></tr></table><br><br>Pernyataan:<br>(1) Nara membeli 2 teh dan 1 roti dengan total harga Rp26.000.<br>(2) Aldi membeli 1 kopi dan 2 puding dengan total harga Rp25.000.<br>(3) Mira membeli 2 roti dan 1 puding dengan total harga Rp27.000.<br>(4) Danu membeli 3 teh dan 1 kopi dengan total harga Rp35.000.<br><br>Kombinasi yang memuat seluruh pernyataan benar adalah ....",
    pilihan: [
      { huruf: "A", teks: "1 dan 2" },
      { huruf: "B", teks: "2 dan 3" },
      { huruf: "C", teks: "1 dan 4" },
      { huruf: "D", teks: "1 dan 3" },
      { huruf: "E", teks: "1, 3, dan 4" }
    ],
    kunci: "D",
    pembahasan: "Harga: teh Rp8.000, kopi Rp12.000, roti Rp10.000, puding Rp7.000. Pernyataan (1) 2(8.000) + 10.000 = 26.000 benar. (2) 12.000 + 2(7.000) = 26.000, bukan 25.000. (3) 2(10.000) + 7.000 = 27.000 benar. (4) 3(8.000) + 12.000 = 36.000, bukan 35.000. Jadi yang benar adalah (1) dan (3)."
  },

  // ─── Soal 57 ───
  {
    id: 57, kategori: "TIU",
    teks: "Sebanyak 264 peserta akan mengikuti kunjungan edukasi. Panitia dapat menggunakan lebih dari satu bus untuk setiap jenis berikut.<br><br><table border='1' cellpadding='6' cellspacing='0' style='border-collapse:collapse;'><tr><th>Jenis Bus</th><th>Kapasitas</th></tr><tr><td>Bus A</td><td>32 orang</td></tr><tr><td>Bus B</td><td>44 orang</td></tr><tr><td>Bus C</td><td>60 orang</td></tr></table><br><br>Dengan ketentuan:<br>(1) Seluruh peserta memperoleh tempat duduk.<br>(2) Jumlah kursi kosong dari seluruh bus yang digunakan tidak lebih dari 12 kursi.<br><br>Kombinasi bus yang memenuhi kedua ketentuan tersebut adalah ....",
    pilihan: [
      { huruf: "A", teks: "2 bus A dan 3 bus C" },
      { huruf: "B", teks: "3 bus A dan 3 bus C" },
      { huruf: "C", teks: "3 bus A, 2 bus B, dan 2 bus C" },
      { huruf: "D", teks: "3 bus A, 1 bus B, dan 2 bus C" },
      { huruf: "E", teks: "2 bus A, 1 bus B, dan 3 bus C" }
    ],
    kunci: "B",
    pembahasan: "Total kursi harus minimal 264 dengan sisa tidak lebih dari 12, sehingga kapasitas total antara 264 dan 276. Kombinasi 3 bus A + 3 bus C = 96 + 180 = 276 kursi, sisa 12 kursi, memenuhi kedua ketentuan. Kombinasi lain kekurangan kursi atau menyisakan lebih dari 12."
  },

  // ─── Soal 58 ───
  {
    id: 58, kategori: "TIU",
    teks: "Tentukan gambar yang tepat untuk menggantikan tanda '?', sehingga kedua pasangan gambar di bawah ini memiliki hubungan yang serupa.<br><br><img src='gambarsoal/tryout5/58.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "C",
    pembahasan: "Pada pasangan pertama, ukuran kedua bangun ditukar dan warna hitam-putih dibalik. Hubungan yang sama harus diterapkan pada pasangan kedua: bangun besar menjadi kecil, bangun kecil menjadi besar, serta warna hitam menjadi putih dan sebaliknya. Pilihan C memenuhi hubungan tersebut."
  },

  // ─── Soal 59 ───
  {
    id: 59, kategori: "TIU",
    teks: "Tentukan gambar yang tepat untuk menggantikan tanda '?', sehingga kedua pasangan gambar di bawah ini memiliki hubungan yang serupa.<br><br><img src='gambarsoal/tryout5/59.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Pada pasangan pertama, posisi kedua bangun ditukar secara diagonal dan warna hitam-putih dibalik. Pilihan D menerapkan pertukaran posisi serta pembalikan warna yang sama pada pasangan kedua."
  },

  // ─── Soal 60 ───
  {
    id: 60, kategori: "TIU",
    teks: "Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?<br><br><img src='gambarsoal/tryout5/60.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "C",
    pembahasan: "Gambar A, B, D, dan E tersusun dari tiga garis, sedangkan gambar C tersusun dari lima garis. Jadi gambar C memiliki karakteristik yang berbeda dari gambar lainnya."
  },

  // ─── Soal 61 ───
  {
    id: 61, kategori: "TIU",
    teks: "Manakah gambar yang memiliki prinsip, pola, atau karakteristik yang berbeda dibandingkan gambar lainnya?<br><br><img src='gambarsoal/tryout5/61.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "E",
    pembahasan: "Pada gambar A sampai D, bentuk hitam berada di bagian atas, sedangkan pada gambar E bentuk hitam berada di bagian bawah. Jadi gambar E yang berbeda."
  },

  // ─── Soal 62 ───
  {
    id: 62, kategori: "TIU",
    teks: "Tentukan gambar yang tepat untuk melengkapi pola berikut.<br><br><img src='gambarsoal/tryout5/62.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "C",
    pembahasan: "Pola memperlihatkan blok kotak yang bergeser bergantian ke kiri dan ke kanan, sementara jumlah kotak makin berkurang hingga tersisa pasangan kotak putih dan kotak titik-titik di baris bawah. Pada urutan kelima, pasangan tersebut berada di posisi kanan baris bawah, sesuai pilihan C."
  },

  // ─── Soal 63 ───
  {
    id: 63, kategori: "TIU",
    teks: "Tentukan gambar yang tepat untuk melengkapi pola berikut.<br><br><img src='gambarsoal/tryout5/63.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "E",
    pembahasan: "Strip papan catur berpindah searah jarum jam: atas, kanan, bawah (tertutup gelombang), lalu kiri. Segitiga bergantian menghadap bawah dan atas. Frame pertama yang hilang harus memiliki strip di kiri dan segitiga menghadap atas, yaitu pilihan E."
  },

  // ─── Soal 64 ───
  {
    id: 64, kategori: "TIU",
    teks: "Tentukan gambar yang tepat untuk menggantikan tanda '?' pada matriks berikut.<br><br><img src='gambarsoal/tryout5/64.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "E",
    pembahasan: "Pada kolom pertama, jumlah belah ketupat bertambah satu setiap baris (1, 2, 3), sedangkan jumlah lingkaran bertambah dua (5, 7, 9). Untuk baris ketiga pada kolom pertama diperlukan 3 belah ketupat dan 9 lingkaran, sesuai pilihan E."
  },

  // ─── Soal 65 ───
  {
    id: 65, kategori: "TIU",
    teks: "Tentukan gambar yang tepat untuk menggantikan tanda '?' pada matriks berikut.<br><br><img src='gambarsoal/tryout5/65.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B",
    pembahasan: "Bentuk kecil pada setiap kotak adalah bentuk besar pada kotak berikutnya jika dibaca baris per baris. Bentuk kecil pada kotak (3,2) adalah segi lima hitam, sehingga bentuk besar pada kotak yang hilang adalah segi lima hitam. Bentuk kecilnya mengikuti bentuk besar pertama, yaitu lingkaran abu-abu; pilihan B yang paling sesuai."
  },

  // ════════════════════════════════════════════
  // TES KARAKTERISTIK PRIBADI (TKP) — 45 SOAL
  // ════════════════════════════════════════════
  //
  // NOTE:
  //   1. Tiap pilihan WAJIB punya poin (1-5).
  //   2. kunci = huruf dengan poin tertinggi (biasanya 5).
  //   3. pembahasan diawali format "A = x, B = x, ...".
  //   4. Indikator (tulis di akhir teks): Pelayanan Publik / Profesionalisme /
  //      Jejaring Kerja / TIK / Anti Radikalisme / Sosial Budaya

  // ─── Soal 66 ───
  {
    id: 66, kategori: "TKP",
    teks: "Anda bertugas di bagian pelayanan Dinas Kependudukan dan Pencatatan Sipil. Seorang warga menyampaikan komplain karena dokumennya belum selesai sesuai perkiraan awal. Sikap Anda adalah (Pelayanan Publik)",   // ← isi + indikator
    pilihan: [
      { huruf: "A", teks: "Menjelaskan bahwa keterlambatan dapat terjadi karena banyaknya permohonan masuk", poin: 2 },
      { huruf: "B", teks: "Memahami kekecewaan warga dan meminta warga untuk menunggu proses berikutnya", poin: 3 },
      { huruf: "C", teks: "Memeriksa status permohonan lalu menjelaskan perkembangan proses kepada warga", poin: 5 },
      { huruf: "D", teks: "Menyampaikan prosedur pelayanan agar warga memahami tahapan penyelesaian dokumen", poin: 4 },
      { huruf: "E", teks: "Menyarankan warga datang kembali setelah waktu pelayanan yang diperkirakan", poin: 1 }  // ← kunci: poin tertinggi
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 3, C = 5, D = 4, E = 1<br>Memeriksa status permohonan lalu menjelaskan perkembangannya (C) paling solutif karena langsung menangani akar keluhan. Menjelaskan prosedur (D) informatif, memahami kekecewaan (B) empatik tetapi pasif, sedangkan menyalahkan banyaknya permohonan (A) dan meminta warga datang kembali (E) tidak menyelesaikan masalah."
  },

  // ─── Soal 67 ───
  {
    id: 67, kategori: "TKP",
    teks: "Anda seorang guru yang diminta segera menemui kepala sekolah. Saat menuju ruang kepala sekolah seorang wali murid bertanya karena tidak mengetahui ruang kelas anaknya. Sikap Anda adalah (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Menunjukkan arah ruang kelas secara singkat sebelum menemui kepala sekolah", poin: 4 },
      { huruf: "B", teks: "Memahami kebingungan wali murid lalu meminta ia bertanya kepada petugas lain", poin: 2 },
      { huruf: "C", teks: "Mengantar wali murid sampai ke ruang kelas sebelum menemui kepaa sekolah", poin: 5 },
      { huruf: "D", teks: "Menyarankan wali murid melihat informasi lokasi kelas yang tersedia di sekolah", poin: 3 },
      { huruf: "E", teks: "Langsung menuju ruang kepala sekolah karena yakin wali murid bisa menemukan ruang kelas tersebut", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 4, B = 2, C = 5, D = 3, E = 1<br>Mengantar wali murid sampai ke ruang kelas (C) menunjukkan pelayanan prima tanpa menolak permintaan kepala sekolah. Menunjukkan arah secara singkat (A) cukup membantu, sedangkan melempar ke petugas lain (B), hanya menunjuk informasi lokasi (D), atau langsung pergi (E) menurunkan kualitas layanan."
  },

  // ─── Soal 68 ───
  {
    id: 68, kategori: "TKP",
    teks: "Anda merupakan vendor bahan baku SPPG. Pihak SPPG mengeluhkan kenaikan harga beberapa bahan pangan. Padahal harga pasar memang sedang meningkat. Sikap Anda adalah... (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Memahami keberatan pihak SPPG dan mempertimbangkannya dalam kerja sama berikutnya", poin: 3 },
      { huruf: "B", teks: "Menunjukkan perkembangan harga pasar dan membahas pilihan pengadaan yang sesuai kesepakatan", poin: 5 },
      { huruf: "C", teks: "Menyadari bahwa kenaikan harga dapat memengaruhi anggaran pengadaan SPPG", poin: 2 },
      { huruf: "D", teks: "Menjelaskan bahwa kenaikan harga terjadi karena perubahan harga bahan pangan di pasar", poin: 4 },
      { huruf: "E", teks: "Meminta pihak SPPG menerima harga baru karena kondisi tersebut juga dialami vendor lain", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 2, D = 4, E = 1<br>Menunjukkan perkembangan harga pasar dan membahas pilihan pengadaan sesuai kesepakatan (B) merupakan langkah paling konstruktif. Menjelaskan sebab kenaikan (D) informatif tetapi belum menawarkan solusi; memahami keberatan (A) dan menyadari dampak pada anggaran (C) masih pasif, sedangkan memaksa SPPG menerima harga baru (E) tidak etis."
  },

  // ─── Soal 69 ───
  {
    id: 69, kategori: "TKP",
    teks: "Anda wali kelas SD dan menerima komplain dari orang tua karena nilai anaknya lebih rendah dari temannya. Setelah diperiksa nilai tersebut memang sesuai dengan hasil belajar siswa. Sikap Anda adalah... (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Meminta wali untuk percaya terhadap seluruh penilaian yang diberikan wali kelas", poin: 2 },
      { huruf: "B", teks: "Memahami harapan orang tua lalu menjelaskan bahwa kemampuan tiap siswa berbeda", poin: 3 },
      { huruf: "C", teks: "Menyarankan orang tua membandingkan hasil belajar anak pada penilaian berikutnya", poin: 1 },
      { huruf: "D", teks: "Mengetahui alasan keberatan orang tua kemudian memberikan penjelasan terkait nilai", poin: 4 },
      { huruf: "E", teks: "Menjelaskan dasar penilaian dan menunjukkan bagian yang masih perlu ditingkatkan siswa", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 2, B = 3, C = 1, D = 4, E = 5<br>Menjelaskan dasar penilaian sekaligus menunjukkan bagian yang masih perlu ditingkatkan (E) paling tepat karena transparan dan solutif. Mengetahui alasan keberatan lalu menjelaskan nilai (D) juga baik, sedangkan meminta orang tua percaya begitu saja (A), menekankan perbedaan kemampuan (B), atau menyuruh membandingkan hasil berikutnya (C) tidak membantu."
  },

  // ─── Soal 70 ───
  {
    id: 70, kategori: "TKP",
    teks: "Wali kota menerima banyak keluhan mengenai parkir liar di pusat kota yang mengganggu jalur pejalan kaki. Kondisi tersebut juga menimbulkan keluhan dari warga dan pengguna jalan. Sikap yang paling tepat adalah... (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Menyadari bahwa parkir liar perlu menjadi perhatian karena memengaruhi kenyamanan masyarakat", poin: 2 },
      { huruf: "B", teks: "Memahami keluhan warga lalu meminta dinas terkait meningkatkan pengawasan di lokasi tersebut", poin: 4 },
      { huruf: "C", teks: "Mengetahui titik parkur yang paling banyak dikeluhkan sebelum menentukan kebijakan berikutnya", poin: 3 },
      { huruf: "D", teks: "Mengoordinasikan penataan parkir dan penertiban pada lokasi yang paling mengganggu mobilitas warga", poin: 5 },
      { huruf: "E", teks: "Mengingatkan masyarakat agar menggunakan tempat parkir resmi yang telah tersedia", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 4, C = 3, D = 5, E = 1<br>Mengoordinasikan penataan dan penertiban parkir pada lokasi yang paling mengganggu mobilitas warga (D) adalah tindakan nyata yang menyelesaikan akar masalah. Meminta dinas meningkatkan pengawasan (B) dan memetakan titik parkir (C) mendukung, sedangkan sekadar menyadari (A) atau mengimbau warga (E) tidak cukup."
  },

  // ─── Soal 71 ───
  {
    id: 71, kategori: "TKP",
    teks: "Anda sedang melayani seorang pelanggan di kantor pelayanan. Pada saat bersamaan, datang seorang tamu penting yang krusial bagi perusahaan dan harus segera ditangani agar tidak menimbulkan kerugian. Apa yang sebaiknya Anda lakukan ? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Saya tetap melanjutkan pelayanan kepada pelanggan sambil menjelaskan bahwa setiap orang mendapat giliran", poin: 4 },
      { huruf: "B", teks: "Saya mempersilakan tamu penting menunggu sebentar hingga pelayanan yang sedang berlangusng selesai dengan baik", poin: 3 },
      { huruf: "C", teks: "Saya menyelesaikan pelayanan pelanggan yang sedang berlangsung dengan cepat lalu segera melayani tamu penting", poin: 2 },
      { huruf: "D", teks: "Saya meminta izin dengan sopan kepada pelanggan untuk sebentar mendahulukan tamu penting yang sangat krusial", poin: 5 },
      { huruf: "E", teks: "Saya meminta nasabah prioritas untuk mencari staff lain yang sedang longgar agar bisa diberikan pelayanan yang prima", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 3, C = 2, D = 5, E = 1<br>Meminta izin dengan sopan untuk mendahulukan tamu penting (D) menghormati pelanggan sekaligus menyelesaikan urusan krusial. Tetap melayani pelanggan (A) dan mempersilakan tamu menunggu (B) menjaga keadilan tetapi berisiko merugikan perusahaan; mempercepat pelayanan (C) kurang sopan, dan mengalihkan tamu ke staf lain (E) paling tidak tepat."
  },

  // ─── Soal 72 ───
  {
    id: 72, kategori: "TKP",
    teks: "Di sebuah layanan kesehatan, seorang ibu meminta agar balitanya diprioritaskan dalam antrean. Padahal saat itu petugas sedang melayani pasien lain yang kondisinya lebih membutuhkan penanganan prioritas. Apa yang sebaiknya dilakukan pegawai? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Saya memastikan ibu dan balitanya tetap mendapatkan informasi yang jelas mengenai estimasi waktu pelayanan", poin: 4 },
      { huruf: "B", teks: "Saya menyarankan ibu tersebut menunggu sebentar sambil memastikan pelayanan berjalan sesuai prosedur", poin: 1 },
      { huruf: "C", teks: "Saya meminta ibu itu bersabar karena semua pasien tetap akan dilayani sesuai antrian yang berlaku di layanan kesehatan", poin: 2 },
      { huruf: "D", teks: "Saya menenangkan ibu tersebut dengan ramah sambil menjelaskan bahwa pasien gawat darurat harus ditangani terlebih darhulu", poin: 5 },
      { huruf: "E", teks: "Saya memberi penjelasan kepada ibu itu bahwa balita tetap mendapat hak pelayanan sesuai urutan antrean yang berlaku", poin: 3 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 1, C = 2, D = 5, E = 3<br>Menenangkan ibu dengan ramah sambil menjelaskan bahwa pasien gawat darurat harus didahulukan (D) paling tepat karena empatik dan sesuai prosedur. Memastikan ibu dan balita mendapat informasi estimasi waktu (A) membantu, sedangkan sekadar meminta sabar (C), memberi penjelasan administratif (E), atau membiarkan (B) kurang menenangkan."
  },

  // ─── Soal 73 ───
  {
    id: 73, kategori: "TKP",
    teks: "Anda seorang siswa yang memiliki jadwal piket di perpustakaan. Pada waktu yang sama kelompok Anda harus melakukan presentasi dan Anda menjadi ketua kelompok. Sikap Anda adalah (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Tetap menjalankan piket karena jadwal tersebut sudah menjadi tanggung jawab Anda", poin: 4 },
      { huruf: "B", teks: "Memahami bahwa presentasi kelompok membutuhkan kehadiran Anda sebagai ketua", poin: 3 },
      { huruf: "C", teks: "Mengikuti presentasi karena memiliki tanggung jawab utama terhadap kelompok", poin: 5 },
      { huruf: "D", teks: "Mengetahui bahwa kedua kegiatan sama pentingnya sebelum menentukan pilihan", poin: 2 },
      { huruf: "E", teks: "Menyerahkan keputusan kepada teman kelompok agar tidak salah memilih kegiatan", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 4, B = 3, C = 5, D = 2, E = 1<br>Mengikuti presentasi karena merupakan tanggung jawab utama sebagai ketua kelompok (C) paling tepat, sementara tugas piket dapat dikoordinasikan. Tetap menjalankan piket (A) juga bertanggung jawab, tetapi sekadar memahami (B), hanya mengetahui (D), atau menyerahkan keputusan kepada teman (E) menunjukkan sikap pasif."
  },

  // ─── Soal 74 ───
  {
    id: 74, kategori: "TKP",
    teks: "Seorang rekan di kantor terbiasa melewati prosedur kerja agar tugasnya lebih cepat selesai. Cara tersebut belum menimbulkan masalah tetapi tidak sesuai aturan. Sikap Anda adalah (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengingatkan rekan agar bekerja sesuai prosedur yang telah ditetapkan", poin: 4 },
      { huruf: "B", teks: "Memahami alasan rekan karena ia ingin menyelesaikan pekerjaan lebih cepat", poin: 2 },
      { huruf: "C", teks: "Mengetahui dampak dari kebiasaan tersebut sebelum menentukan sikap", poin: 3 },
      { huruf: "D", teks: "Menyarankan rekan lebih berhati-hati ketika menggunakan cara tersebut", poin: 1 },
      { huruf: "E", teks: "Menjelaskan pentingnya prosedur dan mendorong rekan memperbaiki car kerjanya", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 4, B = 2, C = 3, D = 1, E = 5<br>Menjelaskan pentingnya prosedur dan mendorong rekan memperbaiki cara kerja (E) paling konstruktif. Mengingatkan agar bekerja sesuai prosedur (A) dan mengetahui dampak kebiasaan tersebut (C) cukup baik, sedangkan memahami alasan rekan (B), apalagi sekadar menyarankan lebih berhati-hati (D), membiarkan pelanggaran."
  },

  // ─── Soal 75 ───
  {
    id: 75, kategori: "TKP",
    teks: "Anda menjadi anggota tim SAR yang menangani korban banjir. Satu keluarga menolak dievakuasi meskipun ketinggian air terus meningkat. Sikap Anda adalah... (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Menjelaskan risiko kondisi banjir dan meyakinkan keluarga agar bersedia dievakuasi", poin: 5 },
      { huruf: "B", teks: "Mengetahui penyebab keluarga menolak sebelum menentukan tindakan berikutnya", poin: 4 },
      { huruf: "C", teks: "Menghormati keputusan keluarga karena mereka mengetahui kondisi rumahnya sendiri", poin: 1 },
      { huruf: "D", teks: "Memahami alasan keluarga tersebut memilih tetap berada di rumahnya", poin: 2 },
      { huruf: "E", teks: "Mengingatkan keluarga agar segera meminta bantuan jika kondisi mereka semakin berbahaya", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 4, C = 1, D = 2, E = 3<br>Menjelaskan risiko dan meyakinkan keluarga agar bersedia dievakuasi (A) paling tepat karena mengutamakan keselamatan. Mengetahui penyebab penolakan (B) penting sebagai dasar tindakan, sedangkan menghormati keputusan keluarga (C), hanya memahami alasan (D), atau mengingatkan meminta bantuan (E) tidak menyelesaikan risiko."
  },

  // ─── Soal 76 ───
  {
    id: 76, kategori: "TKP",
    teks: "Anda diminta memimpin proyek yang belum pernah Anda tangani sebelumnya. Atasan mengharapkan proyek tersebut memberikan hasil yang maksimal. Sikap Anda adalah (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Menerima tanggung jawab dan mempelajari kebutuhan proyek tersebut sebelum mulai memimpin tim", poin: 5 },
      { huruf: "B", teks: "Memahami harapan atasan sehingga berusaha menjaga kepercayaan yang telah diberikan", poin: 3 },
      { huruf: "C", teks: "Mengetahui keterbatasan pengalaman agar dapat lebih berhati-hati dalam mengambil keputusan", poin: 2 },
      { huruf: "D", teks: "Menjalankan proyek berdasarkan pengalaman pekerjaan sebelumnya yang paling mendekati", poin: 4 },
      { huruf: "E", teks: "Meminta anggota yang lebih berpengalaman mengambil sebagian besar keputusan proyek", poin: 1 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 3, C = 2, D = 4, E = 1<br>Menerima tanggung jawab dan mempelajari kebutuhan proyek sebelum memimpin tim (A) menunjukkan profesionalisme dan kesiapan. Menjalankan proyek berdasarkan pengalaman sebelumnya (D) cukup, sedangkan menjaga kepercayaan atasan (B), mengetahui keterbatasan (C), atau menyerahkan keputusan kepada anggota (E) kurang menunjukkan kepemimpinan."
  },

  // ─── Soal 77 ───
  {
    id: 77, kategori: "TKP",
    teks: "Anda menjadi ketua tim SAR saat menangani karhutla. Anggota tim mulai kelelahan, sementara titik api masih meluas ke area lain. Sikap Anda adalah... (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Tetap meminta seluruh anggota melanjutkan penanganan agar api segera terkendali", poin: 1 },
      { huruf: "B", teks: "Memahami kondisi anggota tetapi tetap mempertahankan pemabgian tugas sebelumnya", poin: 2 },
      { huruf: "C", teks: "Mengatur ulang pembagian presonel berdasarkan kondisi anggota dan tingkat risiko lokasi", poin: 5 },
      { huruf: "D", teks: "Menghentikan sebagian besar kegiatan agar anggota dapat beristirahat lebih lama", poin: 3 },
      { huruf: "E", teks: "Meminta anggota yang masih kuat mengambil alih tugas rekan yang mulai kelelahan", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 2, C = 5, D = 3, E = 4<br>Mengatur ulang pembagian personel berdasarkan kondisi anggota dan tingkat risiko lokasi (C) paling tepat karena menjaga keselamatan sekaligus efektivitas. Meminta anggota yang masih kuat mengambil alih (E) membantu, tetapi tetap memaksa seluruh anggota (A), mempertahankan pembagian lama (B), atau menghentikan hampir semua kegiatan (D) tidak seimbang."
  },

  // ─── Soal 78 ───
  {
    id: 78, kategori: "TKP",
    teks: "Abda adalah bendahara BEM yang memiliki tugas menghadiri rapat penting pada hari Rabu. Namun pada hari yang sama Anda juga harus mengikuti tes TOEFL yang sudah terjadwal sebelumnya. Apa yang sebaiknya Anda lakukan (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Saya meminta penjadwalan ulang rapat kepada pengurus lain supaya tidak bertabrakan dengan tes TOEFL", poin: 3 },
      { huruf: "B", teks: "Saya menyiapkan dokumen keuangan lengkap lalu meminta salah satu rekan BEM mewakili saya dalam rapat tersebut", poin: 5 },
      { huruf: "C", teks: "Saya menghubungi pimpinan BEM untuk menjelaskan kondisi lalu menitipkan laporan keuangan agar rapat tetap berjalan", poin: 4 },
      { huruf: "D", teks: "Saya mengikuti rapat terlebih dahulu lalu menyusul mengikuti tes TOEFL meskipun akan datang terlambat", poin: 2 },
      { huruf: "E", teks: "Saya memilih hadir di rapat tanpa persiapan matang untuk TOEFL agar tetap dianggap bertanggung jawab sebagai bendahara", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 4, D = 2, E = 1<br>Menyiapkan dokumen keuangan lengkap lalu meminta rekan BEM mewakili rapat (B) paling tepat karena kedua kewajiban tetap terlaksana. Menghubungi pimpinan dan menitipkan laporan (C) juga baik, sedangkan meminta penjadwalan ulang (A), datang terlambat ke TOEFL (D), atau mengorbankan persiapan TOEFL (E) kurang profesional."
  },

  // ─── Soal 79 ───
  {
    id: 79, kategori: "TKP",
    teks: "Anda sedang mendapat tugas yang harus segera diselesaikan dalam waktu singkat. Pada saat yang sama, pimpinan mengajak Anda ikut seminar yang dianggap bermanfaat. Apa yang sebaiknya Anda lakukan (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Saya menyiapkan bagian utama tugas dengan cepat lalu menghadiri seminar sambil melanjutkan sisanya setelah selesai", poin: 3 },
      { huruf: "B", teks: "Saya meminta izin dengan sopan agar seminar dapat diwakili oleh rekan lain sehingga saya bisa fokus menuntaskan tugas secara menyeluruh", poin: 5 },
      { huruf: "C", teks: "Saya tetap memilih menghadiri seminar dari awal sampai akhir tanpa memprioritaskan penyelesaian tugas meskipun tenggat waktu sudah dekat", poin: 1 },
      { huruf: "D", teks: "Saya menjelaskan kepada pimpinan bahwa saya akan menyelesaikan tugas terlebih dahulu sebelum mengikuti seminar", poin: 4 },
      { huruf: "E", teks: "Saya mencoba mengerjakan sebagian tugas selama seminar berlangsung meskipun hasil akhirnya mungkin kurang maksimal", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 1, D = 4, E = 2<br>Meminta izin dengan sopan agar seminar diwakili rekan lain dan fokus menuntaskan tugas (B) paling tepat karena mendahulukan tenggat tanpa mengabaikan pimpinan. Menjelaskan akan menyelesaikan tugas terlebih dahulu (D) juga baik, sedangkan menyicil tugas saat seminar (E), hadir penuh (C), atau hanya menyiapkan bagian utama (A) berisiko menurunkan kualitas hasil."
  },

  // ─── Soal 80 ───
  {
    id: 80, kategori: "TKP",
    teks: "Anda menjadi ketua panitia kegiatan kampus. Dua divisi memiliki pendapat berbeda tentang konsep acara dan mulai sulit bekerja sama. Sikap Anda adalah (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Memahami alasan masing-masing divisi sebelum menentukan pihak yang lebih tepat", poin: 3 },
      { huruf: "B", teks: "Meminta kedua divisi tetap menjalankan tugas masing-masing agar kegiatan tidak terlambat", poin: 2 },
      { huruf: "C", teks: "Mengajak kedua divisi berdiskusi untuk mencari konsep yang dapat diterima bersama", poin: 5 },
      { huruf: "D", teks: "Melakukan voting terhadap konsep acara yang diusulkan untuk menentukan keputusan akhir", poin: 4 },
      { huruf: "E", teks: "Menunggu kedua divisi menyelesaikan perbedaan karena mereka paling memahami pekerjaanya", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 2, C = 5, D = 4, E = 1<br>Mengajak kedua divisi berdiskusi untuk mencari konsep yang dapat diterima bersama (C) paling tepat karena menyelesaikan akar konflik. Voting (D) memang mengambil keputusan tetapi tidak meredakan ketegangan; memahami alasan masing-masing (A) dan meminta divisi berjalan sendiri (B) belum menyelesaikan masalah, sedangkan menunggu (E) paling pasif."
  },

  // ─── Soal 81 ───
  {
    id: 81, kategori: "TKP",
    teks: "Seorang pegawai baru meminta pendapat tentang hasil kerjanya, tetapi menyampaikannya dengan cara yang kurang sopan. Sikap Anda adalah... (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Memberikan pendapat secara profesional dan mengingatkan cara berkomunikasi yang baik", poin: 5 },
      { huruf: "B", teks: "Meminta ia memperbaiki sikap terlebih dahulu sebelum menerima masukan dari Anda", poin: 2 },
      { huruf: "C", teks: "Menghindari memberikan pendapat kepadanya agar tidak menimbulkan ketegangan", poin: 1 },
      { huruf: "D", teks: "Memahami bahwa pegawai baru mungkin belum mengetahui kebiasaan komunikasi di tim", poin: 3 },
      { huruf: "E", teks: "Menilai hasil kerja terlebih dahulu tanpa membahas cara ia menyampaikan permintaan", poin: 4 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 2, C = 1, D = 3, E = 4<br>Memberikan pendapat secara profesional sekaligus mengingatkan cara berkomunikasi yang baik (A) paling tepat. Menilai hasil kerja tanpa membahas cara penyampaian (E) cukup membantu, sedangkan memahami keterbatasan pegawai baru (D), meminta ia memperbaiki sikap lebih dulu (B), atau menghindari memberi pendapat (C) tidak menyelesaikan kebutuhan pegawai baru."
  },

  // ─── Soal 82 ───
  {
    id: 82, kategori: "TKP",
    teks: "Anda menjadi ketua kelompok mata pelajaran kewirausahaan. Tenggat tugas sudah dekat, tetapi beberapa anggota masih santai dan belum menyelesaikan bagiannya. Sikap Anda adalah... (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Menyelesaikan bagian anggota yang tertinggal agar tugas kelompok tetap selesai tepat waktu", poin: 3 },
      { huruf: "B", teks: "Memahami bahwa setiap anggota memiliki cara kerja dan kecepatan yang berbeda-beda", poin: 2 },
      { huruf: "C", teks: "Menanyakan kendala anggota lalu mendorong mereka menyelesaikan tanggung jawabnya", poin: 5 },
      { huruf: "D", teks: "Mengajak anggota untuk bersama-sama menyelesaikan tugas sesuai bagian masing-masing", poin: 4 },
      { huruf: "E", teks: "Menunggu anggota menyadari sendiri bahwa tenggat tugas yang diberikan sudah semakin dekat", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 2, C = 5, D = 4, E = 1<br>Menanyakan kendala anggota lalu mendorong mereka menyelesaikan tanggung jawabnya (C) paling tepat karena memperkuat akuntabilitas kelompok. Mengajak anggota menyelesaikan tugas sesuai bagian masing-masing (D) juga baik, sedangkan mengambil alih pekerjaan (A), memaklumi perbedaan kecepatan (B), atau menunggu kesadaran anggota (E) tidak efektif."
  },

  // ─── Soal 83 ───
  {
    id: 83, kategori: "TKP",
    teks: "Atasan meminta Anda menyusun proposal kerja sama dengan calon mitra. Anda pernah mendengar isu bahwa mitra tersebut memiliki kinerja yang kurang baik. Sikap Anda adalah... (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Tetap menyusun proposal karena keputusan kerja sama merupakan kewenangan atasan", poin: 3 },
      { huruf: "B", teks: "Mencari tahu sumber isu tersebut terlebih dahulu sebelum menentukan sikap terhadap calon mitra", poin: 4 },
      { huruf: "C", teks: "Mengumpulkan informasi mitra tersebut lalu menyampaikan sebagai pertimbangan atasan", poin: 5 },
      { huruf: "D", teks: "Menyarankan agar kerja sama dibatalkan karena isu tersebut dapat merugikan perusahaan", poin: 2 },
      { huruf: "E", teks: "Memaklumi hal bahwa setiap mitra dapat memiliki kekurangan dalam pelaksanaan kerja sama", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 4, C = 5, D = 2, E = 1<br>Mengumpulkan informasi tentang mitra lalu menyampaikannya sebagai pertimbangan atasan (C) paling tepat karena mendukung keputusan berbasis data. Mencari tahu sumber isu (B) merupakan langkah awal yang baik, sedangkan tetap menyusun proposal karena kewenangan atasan (A), menyarankan pembatalan (D), atau memaklumi kekurangan mitra (E) kurang profesional."
  },

  // ─── Soal 84 ───
  {
    id: 84, kategori: "TKP",
    teks: "Anda menjadi ketua tim. Seorang anggota sering mengambil langkah sepihak sehingga beberapa kali hampir memengaruhi hasil kerja tim. Sikap Anda adalah... (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Mencari tahu alasan ia sering mengambil keputusan sendiri sebelum menentukan tindakan", poin: 3 },
      { huruf: "B", teks: "Membatasi keterlibatannya dalam pekerjaan penting agar risiko terhadap tim berkurang", poin: 1 },
      { huruf: "C", teks: "Memahami bahwa anggota tersebut mungkin ingin pekerjaan selesai lebih cepat", poin: 2 },
      { huruf: "D", teks: "Mengingatkan anggota agar keputusan yang berdampak pada tim dibicarakan terlebih dahulu", poin: 4 },
      { huruf: "E", teks: "Membahas dampak tindakannya bersamanya dan meminta ia mengikuti pola koordinasi tim", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 3, B = 1, C = 2, D = 4, E = 5<br>Membahas dampak tindakan anggota bersama-sama dan meminta ia mengikuti pola koordinasi tim (E) paling tepat. Mengingatkan agar keputusan yang berdampak pada tim dibicarakan lebih dahulu (D) juga baik, sedangkan mencari alasan (A), memahami keinginan menyelesaikan cepat (C), atau membatasi keterlibatan (B) tidak memperbaiki koordinasi."
  },

  // ─── Soal 85 ───
  {
    id: 85, kategori: "TKP",
    teks: "Anda adalah seorang ketua divisi dalam sebuah pekerjaan. Dalam sebuah rapat, salah satu rekan terlihat kesulitan dalam berkomunikasi karena perbedaan logat dan bahasa daerah bahkan beberapa rekan lain menertawakannya. Apa yang sebaiknya Anda lakukan (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Saya memilih tetap melanjutkan rapat agar pekerjaan cepat dan berharap rekan tersebut segera beradaptasi dengan budaya kantor", poin: 2 },
      { huruf: "B", teks: "Saya mendampingi rekan yang kesulitan dan membantu menjembatani komunikasi agar pesan dapat tersampaikan dengan baik", poin: 4 },
      { huruf: "C", teks: "Saya akan menegur rekan yang menertawakan sambil menekankan pentingnya saling menghargai agar suasana kerja tetap harmonis", poin: 3 },
      { huruf: "D", teks: "Saya mengajak tim berdiskusi bersama tentang pentingnya menghargai perbedaan logat dan sebagai bagian dari keberagaman", poin: 5 },
      { huruf: "E", teks: "Saya mengamati situasi berjalan apa adanya terlebih dahulu karena yakin rekan tersebut bisa beradaptasi sendiri nantinya", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 4, C = 3, D = 5, E = 1<br>Mengajak tim berdiskusi tentang pentingnya menghargai perbedaan logat dan bahasa daerah (D) paling tepat karena menyentuh akar masalah dan membangun budaya inklusif. Mendampingi serta menjembatani komunikasi rekan (B) sangat membantu secara langsung, sedangkan menegur pelaku (C), melanjutkan rapat (A), atau mengamati saja (E) kurang menyelesaikan persoalan."
  },

  // ─── Soal 86 ───
  {
    id: 86, kategori: "TKP",
    teks: "Di kantor Anda, dua rekan sedang terlibat perdebatan sengit tentang politik sehingga suasana kerja menjadi tegang. Pada saat yang sama, Anda memiliki tugas penting yang tidak dapat ditinggalkan. Apa yang sebaiknya Anda lakukan? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Saya mengajak rekan yang ribut untuk menunda perdebatan sampai jam istirahat agar pekerjaan tetap berjalan", poin: 4 },
      { huruf: "B", teks: "Saya menegur dengan sopan agar rekan yang ribut menghentikan perdebatan demi menjaga suasana kantor tetap kondusif", poin: 3 },
      { huruf: "C", teks: "Saya melaporkan situasi ini kepada atasan dengan harapan suasana kerja bisa segera kembali kondusif dan produktif", poin: 2 },
      { huruf: "D", teks: "Saya berusaha menenangkan suasana dengan mengalihkan pembicaraan ke topik lain yang lebih netral agar rekan lebih tenang", poin: 5 },
      { huruf: "E", teks: "Saya tetap fokus menyelesaikan tugas sambil menjaga konsentrasi agar pekerjaan tidak terganggu oleh suasana ribut", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 3, C = 2, D = 5, E = 1<br>Menenangkan suasana dengan mengalihkan pembicaraan ke topik yang lebih netral (D) paling tepat karena cepat meredakan ketegangan tanpa meninggalkan tugas. Mengajak menunda perdebatan sampai jam istirahat (A) dan menegur dengan sopan (B) juga membantu, sedangkan melapor ke atasan (C) berlebihan dan hanya fokus pada tugas sendiri (E) membiarkan suasana memburuk."
  },

  // ─── Soal 87 ───
  {
    id: 87, kategori: "TKP",
    teks: "Di belakang kantor para pegawai terbagi menjadi dua kelompok berdasarkan latar belakang yang berbeda. Anda tidak termasuk dalam salah satu kelompok tersebut sehingga terkadang merasa terpinggirkan. Apa sikap Anda? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Saya membangun komunikasi pribadi dengan beberapa orang dari kedua kelompok agar lebih muda diterima", poin: 4 },
      { huruf: "B", teks: "Saya tetap fokus pada pekerjaan utama sambil menjaga interaksi seperlunya dengan semua kelompok", poin: 3 },
      { huruf: "C", teks: "Saya memilih berinteraksi dengan satu kelompok saja agar lebih mudah beradaptasi dengan suasana kerja", poin: 2 },
      { huruf: "D", teks: "Saya membatasi keterlibatan dalam kegiatan bersama karena merasa kurang cocok dengan kondisi tertentu", poin: 1 },
      { huruf: "E", teks: "Saya menjaga hubungan baik dengan semua pegawai tanpa memihak kelompok tertentu agar tetap harmonis", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 4, B = 3, C = 2, D = 1, E = 5<br>Menjaga hubungan baik dengan semua pegawai tanpa memihak kelompok tertentu (E) paling tepat untuk keluar dari situasi terpinggirkan. Membangun komunikasi pribadi dengan beberapa orang dari kedua kelompok (A) juga baik, sedangkan fokus pada pekerjaan (B), memilih satu kelompok (C), atau membatasi diri (D) justru memperkuat sekat."
  },

  // ─── Soal 88 ───
  {
    id: 88, kategori: "TKP",
    teks: "Anda bertugas membantu pelayanan di kelurahan. Seorang warga lanjut usia kesulitan memahami informasi layanan digital yang ditampilkan melalui layar. Sikap Anda adalah... (TIK)",
    pilihan: [
      { huruf: "A", teks: "Meminta warga membaca kembali informasi yang penting agar warga memahami tahapan layanan", poin: 1 },
      { huruf: "B", teks: "Menunjukkan bagian informasi yang penting agar warga memahami tahapan yang diperlukan", poin: 3 },
      { huruf: "C", teks: "Menjelaskan informasi dengan bahasa sederhana dan membantu warga mengikuti tahapan layanan", poin: 5 },
      { huruf: "D", teks: "Memaklumi kesulitan warga karena tidak semua orang terbiasa menggunakan layanan digital", poin: 2 },
      { huruf: "E", teks: "Menyarankan warga meminta bantuan keluarga agar dapat mengikuti tahapan layanan digital", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 3, C = 5, D = 2, E = 4<br>Menjelaskan informasi dengan bahasa sederhana dan membantu warga mengikuti tahapan layanan (C) paling tepat. Menunjukkan bagian informasi yang penting (B) dan menyarankan meminta bantuan keluarga (E) membantu sebagian, sedangkan memaklumi kesulitan (D) pasif dan meminta warga membaca ulang (A) tidak solutif."
  },

  // ─── Soal 89 ───
  {
    id: 89, kategori: "TKP",
    teks: "Tim Anda mulai menggunakan AI untuk membantu merangkum dokumen pekerjaan. Beberapa rekan langung memasukkan seluruh isi dokumen internal agar pekerjaan lebih cepat selesai (TIK)",
    pilihan: [
      { huruf: "A", teks: "Menggunakan AI pada dokumen yang dianggap tidak terlalu penting bagi perusahaan", poin: 2 },
      { huruf: "B", teks: "Menggunakan AI sebagai alat untuk mempercepat penyelesaian pekerjaan tim", poin: 3 },
      { huruf: "C", teks: "Mengingatkan rekan untuk memeriksa kembali hasil ringkasan sebelum digunakan", poin: 4 },
      { huruf: "D", teks: "Mengikuti cara rekan selama hasil yang diperoleh dapat membantu mempermudah pekerjaan", poin: 1 },
      { huruf: "E", teks: "Memastikan penggunaan AI sesuai kebijakan perusahaan dan menyeleksi hasilnya sebelum digunakan", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 2, B = 3, C = 4, D = 1, E = 5<br>Memastikan penggunaan AI sesuai kebijakan perusahaan dan menyeleksi hasilnya sebelum digunakan (E) paling tepat, terutama karena ada dokumen internal. Mengingatkan rekan memeriksa ringkasan (C) dan memakai AI untuk mempercepat pekerjaan (B) baik namun belum menyelesaikan risiko kebocoran data; mengikuti cara rekan (D) atau memakai AI pada dokumen yang dianggap tidak penting (A) tetap berisiko."
  },

  // ─── Soal 90 ───
  {
    id: 90, kategori: "TKP",
    teks: "Anda menerima formulir digital berisi nomor identitas dan data pribadi pelanggan. Rekan meminta Anda mengirim file tersebut melalui grup percakapan tim agar mudah diakses. Sikap Anda adalah... (TIK)",
    pilihan: [
      { huruf: "A", teks: "Menyimpan dan membagikan data melalui media kerja yang memiliki akses terbatas sesuai kebutuhan", poin: 5 },
      { huruf: "B", teks: "Mengirim file ke grup lalu meminta anggota tidak meneruskannya kepada pihak lain", poin: 2 },
      { huruf: "C", teks: "Menanyakan terlebih dahulu siapa saja yang membutuhkan data tersebut sebelum membagikannya", poin: 4 },
      { huruf: "D", teks: "Menambahkan sandi tambahan kemudian mengirimkan data tersebut ke grup agar dokumen tidak asal dibuka", poin: 3 },
      { huruf: "E", teks: "Menghapus beberapa informasi pribadi sebelum mengirimkan file melalui grup tim", poin: 1 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 2, C = 4, D = 3, E = 1<br>Menyimpan dan membagikan data melalui media kerja dengan akses terbatas sesuai kebutuhan (A) paling tepat untuk melindungi data pribadi pelanggan. Menanyakan lebih dahulu siapa yang membutuhkan data (C) merupakan langkah pengamanan yang baik, sedangkan mengirim ke grup (B), menambah sandi lalu tetap mengirim ke grup (D), atau menghapus sebagian data (E) tidak memadai."
  },

  // ─── Soal 91 ───
  {
    id: 91, kategori: "TKP",
    teks: "Anda merupakan karyawan baru dan pernah mengikuti pelatihan aplikasi pengolah data yang akan mulai digunakan divisi. Beberapa rekan masih belum memahami cara menggunakannya, sikap Anda adalah... (TIK)",
    pilihan: [
      { huruf: "A", teks: "Menjelaskan bahwa aplikasi tersebut pernah Anda pelajari dalam penelitian sebelumnya", poin: 3 },
      { huruf: "B", teks: "Menawarkan bantuan dan berbagai cara penggunaan aplikasi kepada rekan sesuai kebutuhan pekerjaan", poin: 5 },
      { huruf: "C", teks: "Menyarankan rekan mempelajari panduan aplikasi agar kemampuan setiap orang berkembang", poin: 4 },
      { huruf: "D", teks: "Menunggu arahan atasan sebelum membantu karena Anda masih berstatus karyawan baru", poin: 1 },
      { huruf: "E", teks: "Menggunakan kemampuan tersebut untuk menyelesaikan pekerjaan Anda sendiri terlebih dahulu", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 4, D = 1, E = 2<br>Menawarkan bantuan dan berbagi cara penggunaan aplikasi sesuai kebutuhan rekan (B) paling tepat. Menyarankan rekan mempelajari panduan (C) dan menjelaskan pengalaman pelatihan (A) kurang membantu secara langsung, sedangkan menunggu arahan atasan (D) atau hanya memakai kemampuan untuk pekerjaan sendiri (E) tidak berkontribusi pada tim."
  },

  // ─── Soal 92 ───
  {
    id: 92, kategori: "TKP",
    teks: "Kantor Anda akan menerapkan sistem IT baru untuk mempercepat pelayanan. Namun, beberapa pegawai senior menolak karena merasa sulit beradaptasi dengan teknologi. Apa yang sebaiknya Anda lakukan sebagai staff IT di perusahaan tersebut? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Saya melibatkan pegawai senior dalam diskusi kecil untuk mendengar kekhawatiran mereka lalu memberi solusi sesuai kebutuhan", poin: 5 },
      { huruf: "B", teks: "Saya menyarankan agar pegawai senior menggunakan cara kerja lama terlebih dahulu sambil perlahan menyesuaikan diri dengan sistem baru", poin: 2 },
      { huruf: "C", teks: "Saya menjelaskan manfaat sistem baru dengan memberikan data nyata agr mereka melihat dampaknya pada pekerjaan sehari-hari", poin: 3 },
      { huruf: "D", teks: "Saya memilih membiarkan ruang bagi manajemen untuk memimpin proses adaptasi agar suasana tetap kondusif di lingkungan kerja", poin: 1 },
      { huruf: "E", teks: "Saya mengajak para pegawai senior mencoba sistem baru bersama dalam sesi uji coba sederhana agar lebih percaya diri menggunakannya", poin: 4 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 2, C = 3, D = 1, E = 4<br>Melibatkan pegawai senior dalam diskusi kecil, mendengar kekhawatiran mereka, lalu memberi solusi sesuai kebutuhan (A) paling tepat karena mengatasi akar penolakan. Mengajak mereka mencoba sistem baru bersama dalam sesi uji coba (E) juga efektif, sedangkan menjelaskan manfaat dengan data (C), membiarkan cara lama (B), atau menyerahkan sepenuhnya ke manajemen (D) kurang proaktif."
  },

  // ─── Soal 93 ───
  {
    id: 93, kategori: "TKP",
    teks: "Di kantor Anda, seluruh pegawai diarahkan untuk menyimpan dokumen kerja secara <em>cloud storage</em> agar lebih aman dan mudah diakses berama. Namun beberapa rekan masih menyimpan dokumen di komputer pribadi sehingga menyulitkan saat dibutuhkan tim. Apa yang sebaiknya Anda lakukan? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Mengingatkan rekan bahwa menyimpan file di komputer pribadi bisa berisiko hilang jika perangkat rusak", poin: 4 },
      { huruf: "B", teks: "Menyarankan kepada atasan agar memberi kebijakan tegas penggunaan <em>cloud storage</em>", poin: 3 },
      { huruf: "C", teks: "Membiarkan saja karena mereka punya cara kerja masing-masing", poin: 1 },
      { huruf: "D", teks: "Menggunakan <em>cloud storage</em> dengan disiplin sebagai bentuk taat terhadap imbauan yang terdapat di kantor", poin: 2 },
      { huruf: "E", teks: "Mengajak rekan untuk mulai menyimpan file di <em>cloud storage</em>, sekaligus menjelaskan manfaat akses cepat dan keamanan datanya", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 4, B = 3, C = 1, D = 2, E = 5<br>Mengajak rekan mulai menyimpan file di cloud storage sekaligus menjelaskan manfaat akses cepat dan keamanan datanya (E) paling tepat. Mengingatkan risiko kehilangan file (A) dan mengusulkan kebijakan tegas (B) mendukung, sedangkan disiplin menggunakan cloud sendiri (D) atau membiarkan (C) tidak menyelesaikan masalah tim."
  },

  // ─── Soal 94 ───
  {
    id: 94, kategori: "TKP",
    teks: "Anda adalah seorang staf muda di sebuah instansi. Pimpinan meminta Anda membantu beberapa pegawai senior yang belum terbiasa menggunakan Microsoft Excel untuk pengolahan data. Sebagian besar dari mereka merasa kesulitan. Apa sikap terbaik Anda dalam menghadapi situasi ini? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Memberikan panduan tertulis agar mereka bisa mempelajari Excel secara mendiri sesuai waktu masing-masing", poin: 3 },
      { huruf: "B", teks: "Menekankan pentingnya menguasai Excel secepatnya demi kelancaran pekerjaan instansi", poin: 2 },
      { huruf: "C", teks: "Mengusulkan kepada pimpinan agar diadakan pelatihan resmi yang difasilitasi oleh instruktur profesional", poin: 1 },
      { huruf: "D", teks: "Mendampingi pegawai senior dengan sabar, mengajarkan langkah-langkah sederhana, dan menyesuaikan cara penjelasan dengan kemampuan mereka", poin: 5 },
      { huruf: "E", teks: "Memberikan contoh hasil akhir laporan Excel yang sudah jadi agar mereka punya gambaran, tanpa menjelaskan detail langkahnya", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 3, B = 2, C = 1, D = 5, E = 4<br>Mendampingi pegawai senior dengan sabar, mengajarkan langkah sederhana, dan menyesuaikan cara penjelasan dengan kemampuan mereka (D) paling tepat. Memberi contoh hasil akhir (E) dan panduan tertulis (A) membantu sebagian, sedangkan menekankan pentingnya menguasai Excel secepatnya (B) atau mengusulkan pelatihan resmi (C) kurang menyelesaikan kebutuhan mendesak."
  },

  // ─── Soal 95 ───
  {
    id: 95, kategori: "TKP",
    teks: "Anda diminta membantu membuat laporan harian secara digital, sementara kemampuan teknologi Anda masih terbatas. Tugas ini harus segera dikerjakan agar pekeraan tim tetap berjalan lancar. Apa sikap Anda? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Saya mencari panduan sederhana dari internet agar bisa memahami cara membuat laporan digital lebih cepat", poin: 4 },
      { huruf: "B", teks: "Saya berlatih menggunakan aplikasi laporan digital secara mandiri meskipun hasil awalnya belum sempurna", poin: 3 },
      { huruf: "C", teks: "Saya menunggu arahan lebih detail dari rekan yang lebih paham tanpa mencoba belajar sendiri terlebih dahulu", poin: 1 },
      { huruf: "D", teks: "Saya menunda pekerjaan karena merasa perlu beradaptasi dulu sebelum memulai membuat laporan digital", poin: 2 },
      { huruf: "E", teks: "Saya mempelajari fitur dasar laporan digital dengan cepat sambil langsung mencoba menggunakannya dalam pekerjaan", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 4, B = 3, C = 1, D = 2, E = 5<br>Mempelajari fitur dasar laporan digital dengan cepat sambil langsung mencoba menggunakannya (E) paling tepat karena belajar sambil bekerja. Mencari panduan sederhana di internet (A) dan berlatih mandiri (B) juga baik, sedangkan menunda pekerjaan (D) atau menunggu arahan tanpa mencoba belajar (C) menghambat penyelesaian tugas."
  },

  // ─── Soal 96 ───
  {
    id: 96, kategori: "TKP",
    teks: "Seorang teman di sekolah sering dikucilkan siswa lain karena memiliki logat bahasa yang berbeda dari siswa lainnya. Sikap Anda adalah... (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Mengajak teman tersebut tetap bergaul dan menghiburnya bahwa perbedaan logat bukan permasalahan", poin: 4 },
      { huruf: "B", teks: "Menyadari bahwa perbedaan cara berbicara merupakan hal yang wajar dalam pergaulan", poin: 2 },
      { huruf: "C", teks: "Menegur siswa yang mengejek dan meminta mereka menghentikan sikap tersebut", poin: 5 },
      { huruf: "D", teks: "Menyarankan teman tersebut menyesuaikan cara bicaranya agar lebih mudah diterima lingkungan", poin: 1 },
      { huruf: "E", teks: "Mengajak teman tersebut bergabung dengan kelompok yang lebih terbuka terhadap perbedaan", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 4, B = 2, C = 5, D = 1, E = 3<br>Menegur siswa yang mengejek dan meminta mereka menghentikan sikap tersebut (C) paling tepat karena menghentikan perundungan secara langsung. Mengajak teman tetap bergaul dan menghiburnya (A) serta mengajak bergabung dengan kelompok yang lebih terbuka (E) mendukung, sedangkan menyarankan mengubah cara bicara (D) atau hanya menyadari perbedaan (B) tidak melindungi korban."
  },

  // ─── Soal 97 ───
  {
    id: 97, kategori: "TKP",
    teks: "Anda seorang dosen dan mengetahui ada rekan senior yang sering mengintimidasi dosen junior hanya karena usia mereka lebih muda. Sikap Anda adalah... (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Mengingatkan rekan tersebut agar memperlakukan dosen junior secara profesional dan setara", poin: 4 },
      { huruf: "B", teks: "Menyarankan dosen junior lebih berhati-hati agar tidak memancing perlakuan yang kurang menyenangkan", poin: 1 },
      { huruf: "C", teks: "Mendampingi dosen junior dan mendorong komunikasi yang lebih terbuka dengan dosen senior", poin: 5 },
      { huruf: "D", teks: "Membiarkan hubungan tersebut karena setiap dosen memiliki cara berkomunikasi yang berbeda", poin: 2 },
      { huruf: "E", teks: "Menilai bahwa perbedaan usia seharusnya tidak menjadi dasar dalam memperlakukan rekan kerja", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 4, B = 1, C = 5, D = 2, E = 3<br>Mendampingi dosen junior dan mendorong komunikasi yang lebih terbuka dengan dosen senior (C) paling tepat. Mengingatkan senior agar memperlakukan junior secara profesional dan setara (A) juga baik, sedangkan menilai perbedaan usia (E), membiarkan (D), atau menyarankan junior berhati-hati (B) tidak menyelesaikan intimidasi."
  },

  // ─── Soal 98 ───
  {
    id: 98, kategori: "TKP",
    teks: "Anda menjadi ketua RT. Beberapa warga mengeluh karena lomba desa menggunakan pengeras suara saat bertepatan dengan waktu ibadah. Sikap Anda adalah... (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Mengimbau kepada warga bahwa kegiatan desa dan ibadah sama-sama perlu dihormati oleh seluruh warga", poin: 3 },
      { huruf: "B", teks: "Mengatur kembali penggunaan pengeras suara agar kegiatan tetap berjalan tanpa menggangu waktu ibadah", poin: 4 },
      { huruf: "C", teks: "Meminta warga yang beribadah menyesuaikan karena lomba desa sudah dijadwalkan sebelumnya", poin: 1 },
      { huruf: "D", teks: "Mengajak panitia dan perwakilan warga membahas penyesuaian waktu penggunaan pengeras suara", poin: 5 },
      { huruf: "E", teks: "Meminta warga membatalkan acara lomba desa agar tidak menimbulkan ketegangan antar warga", poin: 2 }
    ],
    kunci: "D",
    pembahasan: "A = 3, B = 4, C = 1, D = 5, E = 2<br>Mengajak panitia dan perwakilan warga membahas penyesuaian waktu penggunaan pengeras suara (D) paling tepat karena melibatkan pihak terkait dan mencari solusi bersama. Mengatur kembali penggunaan pengeras suara (B) dan mengimbau saling menghormati (A) baik, sedangkan meminta warga ibadah menyesuaikan (C) atau membatalkan acara (E) tidak adil."
  },

  // ─── Soal 99 ───
  {
    id: 99, kategori: "TKP",
    teks: "Anda sebagai wali kota akan mengadakan gebyar budaya. Kota Anda memiliki banyak kelompok budaya dengan tradisi yang berbeda-beda. Sikap Anda adalah... (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Menilai bahwa keberagaman budaya dapat menjadi kekuatan dalam pelaksanaan acara kota", poin: 3 },
      { huruf: "B", teks: "Memilih budaya yang paling dikenal agar acara lebih mudah diterima masyarakat luas", poin: 2 },
      { huruf: "C", teks: "Melibatkan perwakilan kelompok budaya dalam menentukan susunan kegiatan gebyar budaya", poin: 5 },
      { huruf: "D", teks: "Menampilkan beberapa budaya yang diminati anak muda agar mendapat banyak pengunjung", poin: 1 },
      { huruf: "E", teks: "Menyusun acara yang memberi ruang tampil proporsional bagi berbagai kelompok budaya", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 2, C = 5, D = 1, E = 4<br>Melibatkan perwakilan kelompok budaya dalam menentukan susunan kegiatan gebyar budaya (C) paling tepat karena menghargai keberagaman dan partisipasi. Menyusun acara yang memberi ruang proporsional (E) dan menilai keberagaman sebagai kekuatan (A) baik, sedangkan memilih budaya yang paling dikenal (B) atau hanya yang diminati anak muda (D) kurang inklusif."
  },

  // ─── Soal 100 ───
  {
    id: 100, kategori: "TKP",
    teks: "Di lingkungan Anda ada seorang warga baru yang jarang bergaul dengan tetangga di sekitar. Sebagai warga lama, Anda ingin merangkulnya agar ia merasa lebih diterima. Apa sikap Anda (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Saya memberi waktu bagi warga baru untuk beradaptasi sambil sesekali menyapa dengan sopan", poin: 2 },
      { huruf: "B", teks: "Saya tetap berhubungan baik namun menunggu warga baru sendiri yang mulai membuka diri pada tetangga", poin: 1 },
      { huruf: "C", teks: "Saya menyapa warga baru dengan ramah dan mengajaknya berbincang ringan agar ia merasa lebih nyaman", poin: 3 },
      { huruf: "D", teks: "Saya mengundang warga baru ikut dalam kegiatan lingkungan agar lebih mudah berinteraksi dengan tetangga", poin: 5 },
      { huruf: "E", teks: "Saya berinisiatif mengenalkan warga baru kepada tetangga lain sehingga ia lebih cepat merasa diterima", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 1, C = 3, D = 5, E = 4<br>Mengundang warga baru ikut dalam kegiatan lingkungan agar lebih mudah berinteraksi dengan tetangga (D) paling tepat. Berinisiatif mengenalkannya kepada tetangga lain (E) juga sangat membantu; menyapa dan mengajak berbincang ringan (C) baik, sedangkan hanya memberi waktu (A) atau menunggu ia membuka diri (B) kurang proaktif."
  },

  // ─── Soal 101 ───
  {
    id: 101, kategori: "TKP",
    teks: "Anda adalah siswa SMA yang melihat seorang teman sekelas sering menyendiri. Ia kehilangan rasa percaya diri karena sering mendapat nilai paling rendah di kelas. Apa sikap Anda (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Saya mengajak teman itu berbincang santai lalu memberi semangat agar ia tidak merasa sendirian", poin: 4 },
      { huruf: "B", teks: "Saya mengajak teman itu bergabung belajar kelompok agar ia lebih percaya diri bersama yang lain", poin: 5 },
      { huruf: "C", teks: "Saya memberi ruang baginya untuk beristirahat sambil sesekali menyapanya dengan ramah", poin: 3 },
      { huruf: "D", teks: "Saya menunggu sampai ia sendiri merasa siap untuk berbaur kembali dengan teman-teman kelas", poin: 1 },
      { huruf: "E", teks: "Saya mengenalkan teman itu pada guru pembimbing supaya mendapat dukungan dan motivasi tambahan", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 3, D = 1, E = 2<br>Mengajak teman bergabung dalam belajar kelompok (B) paling tepat karena meningkatkan kepercayaan diri sekaligus membantu akademiknya. Mengajak berbincang santai dan memberi semangat (A) baik, sedangkan memberi ruang (C), menunggu sampai ia siap (D), atau hanya mengenalkan kepada guru pembimbing (E) kurang memberdayakan."
  },

  // ─── Soal 102 ───
  {
    id: 102, kategori: "TKP",
    teks: "Anda baru dipindahkan bekerja di sebuah daerah terpencil. Warga desa mayoritas menganut agama yang berbeda dengan Anda dan memiliki cara beribadah yang khas. Apa sikap Anda sebagai pendatang (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Saya menghargai perbedaan dengan tetap menjalankan ibadah sesuai dengan keyakinan tanpa mengganggu warga sekitar", poin: 4 },
      { huruf: "B", teks: "Saya lebih banyak menjaga jarak dalam kegiatan bersama sambil tetap bersikap sopan kepada warga", poin: 2 },
      { huruf: "C", teks: "Saya memilih beridam diri dalam urusan sosial dan hanya fokus pada pekerjaan utama di desa tersebut", poin: 1 },
      { huruf: "D", teks: "Saya menjalin komunikasi baik dengan warga agar tercipta saling pengertian meskipun berbeda keyakinan", poin: 5 },
      { huruf: "E", teks: "Saya mengikuti sebagian kebiasaan warga agar lebih mudah diterima meski tetap menjaga keyakinan pribadi", poin: 3 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 2, C = 1, D = 5, E = 3<br>Menjalin komunikasi baik dengan warga agar tercipta saling pengertian meskipun berbeda keyakinan (D) paling tepat. Menghargai perbedaan dan tetap beribadah tanpa mengganggu warga (A) juga baik, sedangkan mengikuti sebagian kebiasaan warga (E) berisiko, dan menjaga jarak (B) atau berdiam diri (C) menghambat adaptasi."
  },

  // ─── Soal 103 ───
  {
    id: 103, kategori: "TKP",
    teks: "Di lingkungan tempat tinggal Anda beredar pesan yang mendiskreditkan agama tertentu dan mulai menimbulkan perdebatan antarwarga. Sikap Anda adalah ... (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengingatkan warga agar tidak menyebarkan pesan yang dapat memicu prasangka terhadap kelompok agama tertentu", poin: 4 },
      { huruf: "B", teks: "Menilai isi pesan tersebut sebagai bentuk kebebasan berpendapat yang perlu dihormati", poin: 1 },
      { huruf: "C", teks: "Mengajak warga memeriksa kebenaran informasi dan menjaga komunikasi yang saling menghormati", poin: 5 },
      { huruf: "D", teks: "Menyarankan warga menghindari pembahasan agama agar konflik tidak semakin besar", poin: 2 },
      { huruf: "E", teks: "Menelusuri sumber pesan terlebih dahulu sebelum menentukan sikap terhadap informasi tersebut", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 4, B = 1, C = 5, D = 2, E = 3<br>Mengajak warga memeriksa kebenaran informasi dan menjaga komunikasi yang saling menghormati (C) paling tepat. Mengingatkan agar tidak menyebarkan pesan berprasangka (A) dan menelusuri sumber pesan (E) mendukung, sedangkan menyarankan menghindari pembahasan agama (D) atau menilai pesan sebagai kebebasan berpendapat (B) tidak menyelesaikan masalah."
  },

  // ─── Soal 104 ───
  {
    id: 104, kategori: "TKP",
    teks: "Seorang rekan mahasiswa sering mengikuti seminar yang diselenggarakan organisasi yang ramai diberitakan menyebarkan paham radikal. Sikap nda adalah... (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengingatkan rekan agar memeriksa sumber informasi sebelum ikut menyebarkannya", poin: 4 },
      { huruf: "B", teks: "Mengajak rekan mendiskusikan informasi berdasarkan sumber resmi dan menghindari provokasi", poin: 5 },
      { huruf: "C", teks: "Menilai berita tersebut sebagai bagian dari perbedaan pandangan yang biasa terjadi", poin: 3 },
      { huruf: "D", teks: "Menghindari seluruh pembicaraan agar tidak ikut terlibat dalam perdebatan", poin: 2 },
      { huruf: "E", teks: "Membiarkan rekan menyampaikan informasi selama tidak ditujukan langsung kepada Anda", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 3, D = 2, E = 1<br>Mengajak rekan mendiskusikan informasi berdasarkan sumber resmi dan menghindari provokasi (B) paling tepat. Mengingatkan rekan agar memeriksa sumber informasi (A) juga baik, sedangkan menilai berita sebagai perbedaan pandangan (C), menghindari pembicaraan (D), atau membiarkan (E) tidak mencegah penyebaran paham radikal."
  },

  // ─── Soal 105 ───
  {
    id: 105, kategori: "TKP",
    teks: "Kantor Anda dihebohkan berbagai berita kontroversial tentang kebijakan pemerintah. Beberapa rekan mulai menyebarkan informasi yang belum jelas sumbernya dan bernada provokatif. Sikap Anda adalah ...  (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengingatkan rekan agar memeriksa sumber informasi sebelum ikut menyebarkannya.", poin: 4 },
      { huruf: "B", teks: "Mengajak rekan mendiskusikan informasi berdasarkan sumber resmi menghindari provokasi.", poin: 5 },
      { huruf: "C", teks: "Menilai berita tersebut sebagai bagian dari perbedaan pandangan yang biasa terjadi.", poin: 3 },
      { huruf: "D", teks: "Menghindari seluruh pembicaraan agar tidak ikut terlibat dalam perdebatan.", poin: 1 },
      { huruf: "E", teks: "Membiarkan rekan menyampaikan informasi selama tidak ditujukan langsung kepada Anda.", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 3, D = 1, E = 2<br>Mengajak rekan mendiskusikan informasi berdasarkan sumber resmi dan menghindari provokasi (B) paling tepat. Mengingatkan agar memeriksa sumber sebelum menyebarkan (A) baik, sedangkan menilai berita sebagai perbedaan pandangan (C), membiarkan (E), atau menghindari seluruh pembicaraan (D) tidak menyelesaikan penyebaran hoaks."
  },

  // ─── Soal 106 ───
  {
    id: 106, kategori: "TKP",
    teks: "Anda menjadi ketua RT ketika beredar isu bahwa ada kelompok radikal yang mulai aktif di lingkungan warga. Informasi tersebut membuat warga resah dan saling mencurigai. Sikap Anda adalah .... (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengimbau warga tetap tenang dan tidak menuduh pihak tertentutpa informasi yang jelas.", poin: 4 },
      { huruf: "B", teks: "Menyarankan warga meningkatkan kewaspadaan terhadap pendatang baru di lingkungan.", poin: 1 },
      { huruf: "C", teks: "Menilai keresahan warga sebagai hal yang wajar karena isu tersebut berkaitan dengan keamanan.", poin: 2 },
      { huruf: "D", teks: "Membatasi kegiatan kelompok yang dianggap mencurigakan sampai situasi kembali tenang.", poin: 3 },
      { huruf: "E", teks: "Mengumpulkan informasi yang dapat dipertanggungjawabkan lalu berkoordinasi dengan pihak terkait.", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 4, B = 1, C = 2, D = 3, E = 5<br>Mengumpulkan informasi yang dapat dipertanggungjawabkan lalu berkoordinasi dengan pihak terkait (E) paling tepat. Mengimbau warga tetap tenang dan tidak menuduh tanpa informasi jelas (A) baik, sedangkan membatasi kegiatan kelompok (D), menilai keresahan wajar (C), atau mencurigai pendatang baru (B) berisiko diskriminasi."
  },

  // ─── Soal 107 ───
  {
    id: 107, kategori: "TKP",
    teks: "Anda diajak oleh seorang teman dekat untuk ikut bergabung dalam sebuah organisasi yang ternyata terlarang. Ajakan ini disampaikan dengan serius dan teman berharap Anda mau kut bergabung. Apa sikap Anda? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Saya menolak ajakan tersebut dengan sopan sambil mengingatkan bahwa kegiatan seperti itu berisiko bagi dirinya.", poin: 4 },
      { huruf: "B", teks: "Saya mengalihkan pembicaraan sambil tetap menjaga hubungan baik agar ajakan itu tidak berlanjut lagi.", poin: 3 },
      { huruf: "C", teks: "Saya menolak ajakan tersebut dengan tegas sambil menjelaskan alasan bahwa organisasi itu ticak sesuai aturan.", poin: 5 },
      { huruf: "D", teks: "Saya tetap berhubungan baik dengan teman tersebut namun menghindari pembicaraan mengenai ajakan yang disampaikan.", poin: 2 },
      { huruf: "E", teks: "Saya memilih menjaga jarak dengan teman tersebut untuk sementara sambil tetap fokus pada kegiatan positif.", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 4, B = 3, C = 5, D = 2, E = 1<br>Menolak ajakan dengan tegas sambil menjelaskan bahwa organisasi itu tidak sesuai aturan (C) paling tepat. Menolak dengan sopan sambil mengingatkan risiko (A) dan mengalihkan pembicaraan (B) juga baik, sedangkan menghindari pembicaraan (D) atau menjaga jarak (E) tidak memberi pemahaman kepada teman."
  },

  // ─── Soal 108 ───
  {
    id: 108, kategori: "TKP",
    teks: "Anda adalah seorang ASN yang mendapati salah satu rekan kerja menyebarkan informasi yang mengarah pada intoleransi dan radikalisme di grup internal kantor. Beberapa rekan terlihat mulai terpengaruh. Apa langkah paling tepat yang akan Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengabaikan karera tidak ingin menimbulkan konflik di tempat kerja.", poin: 1 },
      { huruf: "B", teks: "Melaporkan langsung kepada atasan untuk menangani permasalahan ini secara formal", poin: 4 },
      { huruf: "C", teks: "Mendekati rekan tersebut secara pribadi untuk berdiskusi dan memberi pemahaman tentang bahaya radikalisme.", poin: 5 },
      { huruf: "D", teks: "Membuat pernyataan di grup bahwa informasi tersebut salah tanpa menyebutkan siapa yang menyebarkannya.", poin: 3 },
      { huruf: "E", teks: "Mengajak rekan lain untuk menjauhi rekan tersebut agar tidak terpengaruhi oleh informasi tersebut.", poin: 2 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 4, C = 5, D = 3, E = 2<br>Mendekati rekan secara pribadi untuk berdiskusi dan memberi pemahaman tentang bahaya radikalisme (C) paling tepat karena menyentuh akar masalah tanpa mempermalukan. Melaporkan kepada atasan (B) dan memberi pernyataan di grup (D) bisa menjadi langkah lanjutan, sedangkan mengajak rekan lain menjauhi (E) atau mengabaikan (A) tidak menyelesaikan penyebaran paham."
  },

  // ─── Soal 109 ───
  {
    id: 109, kategori: "TKP",
    teks: "Anda diajak oleh seorang teman untuk menghadiri sebuah seminar yang terlihat menarik. Namun setelah mencari tahu lebih lanjut, ternyata seminar tersebut disponsori oleh organisasi yang terindikasi radikal. Apa sikap Anda? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mencari informasi tambahan terkait seminar tersebut untuk memastikan kebenaran sebelum memutuskan hadir atau tidak.", poin: 3 },
      { huruf: "B", teks: "Mengalihkan ajakan dengan menyarankan seminar lain yang jelas sumbernya serta bermanfaat untuk pengembangan diri tanpa risiko.", poin: 5 },
      { huruf: "C", teks: "Menolak dengan tegas ajakan tersebut serta menjelaskan kepada teman alasan bahwa seminar itu berbahaya karena terkait orgarisasi radikal.", poin: 4 },
      { huruf: "D", teks: "Membiarkan teman tetap hadir jika ia mau namun menyatakan tidak bisa ikut karena ada urusan lain yang harus dikerjakan.", poin: 1 },
      { huruf: "E", teks: "Menolak ajakan tersebut dengan sopan lalu mengingatkan teman agar berhati-hati dalam memilih kegiatan.", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 4, D = 1, E = 2<br>Mengalihkan ajakan dengan menyarankan seminar lain yang jelas sumbernya serta bermanfaat (B) paling tepat. Menolak dengan tegas dan menjelaskan bahaya (C) serta mencari informasi tambahan (A) juga baik, sedangkan menolak sopan lalu mengingatkan hati-hati (E) kurang tegas, dan membiarkan teman tetap hadir (D) paling tidak tepat."
  },

  // ─── Soal 110 ───
  {
    id: 110, kategori: "TKP",
    teks: "Sebagai ketua pemuda di sebuah desa, Anda bertanggurg jawab dalam menjaga kerukunan dan kekompakan antaranggota. Suatu hari, terjadi konflik kecil antara dua anggota karena perbedaan agama yang menyebabkan ketegangan di antara mereka. Beberapa anggota pemuda lain mulai terpengaruh dan menunjukkan sikap berpihak. Apa tindakan Anda untuk mengatasi situasi ini? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mendukung anggota lain yang berpihak demi menjaga solidaritas antar kelompok pemuda.", poin: 1 },
      { huruf: "B", teks: "Mengajak kedua anggota yang berselisih untuk berd alog dan menyelesaikan masalah di bawah birnbingan Anda sebagai ketua.", poin: 4 },
      { huruf: "C", teks: "Mengadakan pertemuan untuk mengedukasi anggota tentang pentingnya toleransi dan menghormati perbedaan, serta menjelaskan dampak buruk dari konflik tersebut.", poin: 5 },
      { huruf: "D", teks: "Menyampaikan kepada pihak desa bahwa ada konflik antaragama agar aparat bisa terlibat dalam penyelesaian.", poin: 2 },
      { huruf: "E", teks: "Mengingatkan anggota lain untuk tidak terlibat dalam konflik tersebut dan tidak berpihak kepada siapapun", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 4, C = 5, D = 2, E = 3<br>Mengadakan pertemuan untuk mengedukasi anggota tentang toleransi dan dampak buruk konflik (C) paling tepat karena menyelesaikan akar masalah. Mengajak kedua anggota berdialog dengan bimbingan Anda (B) juga baik, sedangkan mengingatkan anggota lain tidak berpihak (E), melibatkan aparat desa (D), atau mendukung salah satu pihak (A) kurang tepat."
  }

];

// ════════════════════════════════════════════
// FUNGSI SEED KE DATABASE
// ════════════════════════════════════════════
async function seedSoalPaket5() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Hapus data lama untuk tryout_id = 5
    await client.query(`DELETE FROM pilihan_jawaban WHERE soal_id IN (SELECT id FROM soal WHERE tryout_id = 5)`);
    await client.query(`DELETE FROM soal WHERE tryout_id = 5`);

    for (const soal of soalData) {
      const result = await client.query(
        `INSERT INTO soal (tryout_id, nomor_soal, kategori, teks, kunci, pembahasan)
         VALUES (5, $1, $2, $3, $4, $5)
         RETURNING id`,
        [soal.id, soal.kategori, soal.teks, soal.kunci, soal.pembahasan]
      );
      const soalId = result.rows[0].id;

      for (const p of soal.pilihan) {
        await client.query(
          `INSERT INTO pilihan_jawaban (soal_id, huruf, teks, poin)
           VALUES ($1, $2, $3, $4)`,
          [soalId, p.huruf, p.teks, p.poin || null]
        );
      }
    }

    await client.query('COMMIT');
    console.log('Seed soal Paket 5 berhasil: ' + soalData.length + ' soal');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal seed soal Paket 5:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

seedSoalPaket5().catch(() => process.exit(1));