require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });
const pool = require('./db');

/*
  ══════════════════════════════════════════════════════════
  TEMPLATE SOAL TRY OUT SKD PAKET 2
  Isi manual: teks, pilihan[], kunci, pembahasan

  — TWK (soal 1-30): Tes Wawasan Kebangsaan
  — TIU (soal 31-65): Tes Inteligensia Umum
  — TKP (soal 66-110): Tes Karakteristik Pribadi

  Format:
    id        = nomor soal (1-110)
    kategori  = "TWK" | "TIU" | "TKP"
    teks      = HTML string (bisa pakai <br>, <table>, <img>, <sup>, dll)
    pilihan[] = array { huruf: "A"–"E", teks: string, poin: (hanya TKP) }
    kunci     = huruf kunci jawaban ("A"–"E")
    pembahasan = HTML string penjelasan kunci jawaban
  ══════════════════════════════════════════════════════════
*/

const soalData = [

  // ════════════════════════════════════════════
  // TES WAWASAN KEBANGSAAN (TWK) — 30 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 1 ───
  {
    id: 1, kategori: "TWK",
    teks: "Diskriminasi dianggap sebagai perilaku yang ditujukan untuk mencegah atau membatasi kelompok lain yang berusaha memiliki atau mendapatkan sesuatu yang dapat dilakukan dengan mengurangi, menyingkirkan, atau menaklukkan kelompok lain. Biasanya, diskriminasi dilakukan oleh sekelompok orang yang merasa dominan untuk melindungi kepentingan mereka sendiri. Diskriminasi merupakan salah satu tindakan yang melanggar butir-butir pengamalan dari sila Pancasila, selain diskriminasi, sikap lain yang juga menunjukkan pelanggaran dari Pancasila ini adalah...",         // ← isi teks soal
    pilihan: [
      { huruf: "A", teks: "Maraknya praktik korupsi, kolusi, dan nepotisme yang merugikan masyarakat Indonesia" },
      { huruf: "B", teks: "Adanya propaganda berbau SARA" },
      { huruf: "C", teks: "Tidak menghormati HAM orang lain dan bersikap semena-mena" },
      { huruf: "D", teks: "Mengabaikan musyawarah dan teguh dengan pendapat sendiri" },
      { huruf: "E", teks: "Memilih untuk meyakini berbagai macam agama dan kepercayaan" }
    ],
    kunci: "C",        // ← isi kunci (A/B/C/D/E)
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kata <i>diskriminasi</i>. Diskriminasi merupakan pelanggaran dari sila kedua pancasila yang berbunyi 'kemanusiaan yang adil dan beradab'. Opsi jawaban yang juga menunjukkan sikap pelanggaran dari sila kedua Pancasila ada pada opsi C. Opsi A merupakan pelanggaran sila kelima, opsi B sila ketiga, opsi D sila keempat, opsi E sila pertama."   // ← isi pembahasan
  },

  // ─── Soal 2 ───
  {
    id: 2, kategori: "TWK",
    teks: "Pilar bagi suatu negara adalah sistem keyakinan atau filosofis yang berisi konsep, prinsip, dan nilai yang dianut oleh warga negara yang diyakini dapat digunakan sebagai dasar dalam kehidupan bermasyarakat, berbangsa dan bernegara. Indonesia memiliki empat pilar kebangsaan salah satunya adalah Pancasila. Alasan Pancasila disebut sebagai pilar negara adalah….",
    pilihan: [
      { huruf: "A", teks: "Pancasila memiliki prinsip dan nilai yang merupakan kristalisasi dari sistem keyakinan yang terdapat di seluruh wilayah Indonesia" },
      { huruf: "B", teks: "Pancasila mengatur tentang ketatanegaraan Indonesia khususnya tentang bentuk negara dan sistem pemerintahan" },
      { huruf: "C", teks: "Pancasila dijadikan sebagai sumber dari segala sumber hukum" },
      { huruf: "D", teks: "Pancasila merupakan simbol negara yang harus dilestarikan" },
      { huruf: "E", teks: "Pancasila merupakan bagian dari perjuangan para pendiri bangsa" }
    ],
    kunci: "A",
    pembahasan: "Kata kuci untuk menjawab soal ini ada pada kalimat 'sistem keyakinan atau filosofis yang berisi konsep, prinsip, dan nilai yang dianut oleh warga negara'. Opsi A merupakan jawaban tepat karena menjelaskan bahwa Pancasila memiliki prinsip dan nilai yang merupakan kristalisasi dari sistem keyakinan yang terdapat di seluruh wilayah Indonesia."
  },

  // ─── Soal 3 ───
  {
    id: 3, kategori: "TWK",
    teks: "Pada masa pergerakan kemerdekaan Indonesia. Para pejuang kemerdekaan baik dari kaum nasionalis, agama, tokoh daerah , kaum pemuda  dan yang lainnya tetap bisa menunjukkan tekad yang sama untuk meraih kemerdekaan Indonesia meskipun dari latar belakang yang berbeda-beda. Hal tersebut dapat menjadi karena mereka sama-sama menanamkan nilai…",
    pilihan: [
      { huruf: "A", teks: "Agama" },
      { huruf: "B", teks: "Kemanusiaan" },
      { huruf: "C", teks: "Sosial" },
      { huruf: "D", teks: "Hukum" },
      { huruf: "E", teks: "Budaya" }
    ],
    kunci: "B",
    pembahasan: "Nilai kemanusiaan menjadi salah satu fondasi yang ditunjukkan oleh para pejuang pergerakan kemerdekaan. Hal ini tertuang pada pembukaan UUD 1945 yang berbunyi 'bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa dan oleh sebab itu maka penjajahan di atas dunia harus dihapuskan sesuai dengan peri kemanusiaan dan peri keadilan'."
  },

  // ─── Soal 4 ───
  {
    id: 4, kategori: "TWK",
    teks: "Majelis Ulama Indonesia menekankan pentingnya peran kaum laki-laki untuk peduli terhadap masalah pelecehan seksual dan menekankan semua pihak yang berada di ruang publik bertanggung jawab untuk menciptakan kondisi bebas pelecehan seksual. Kasus pelecehan seksual ini membuktikan bahwasanya sebagian warga negara Indonesia belum mengamalkan nilai-nilai Pancasila. Selain pelecehan seksual, kasus yang juga merupakan pelanggaran nilai Pancasila yang sama dan pernah terjadi di lingkungan masyarakat adalah…",
    pilihan: [
      { huruf: "A", teks: "Penistaan agama" },
      { huruf: "B", teks: "Korupsi oleh pejabat negara" },
      { huruf: "C", teks: "Terorisme dan radikalisme" },
      { huruf: "D", teks: "Pelanggaran HAM" },
      { huruf: "E", teks: "Tindakan <i>bullying</i>" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci menjawab soal ini ada pada frasa <i>pelecehan seksual</i>. Kasus pelecehan seksual merupakan pelanggaran dari sila kedua Pancasila yang berbunyi 'Kemanusiaan yang Adil dan Beradab'. Opsi jawaban yang juga menunjukkan pelanggaran dari sila kedua Pancasila ada pada Opsi D, yaitu pelanggaran HAM. Opsi A lebih tepatnya merupakan pelanggaran dari sila pertama, opsi B sila kelima, opsi C dan E sila pertama."
  },

  // ─── Soal 5 ───
  {
    id: 5, kategori: "TWK",
    teks: "UUD 1945 telah mengalami beberapa kali amandemen sejak Proklamasi Kemerdekaan Indonesia. Hasil dari amandemen tersebut telah mengubah beberapa pasal dalam konstitusi. Alasan dilakukannya amandemen terhadap UUD 1945 adalah…",
    pilihan: [
      { huruf: "A", teks: "Untuk menyesuaikan konstitusi dengan perkembangan zaman dan tuntutan masyarakat" },
      { huruf: "B", teks: "Memberikan hak-hak yang lebih luas kepada partai politik" },
      { huruf: "C", teks: "Membentuk lembaga-lembaga pemerintahan yang bertugas dalam memberikan pelayanan terhadap masyarakat" },
      { huruf: "D", teks: "Membatasi kekuasaan MPR dan DPR" },
      { huruf: "E", teks: "Memisahkan hak dari lembaga eksekutif dan yudikatif" }
    ],
    kunci: "A",
    pembahasan: "Alasan amandemen terhadap UUD 1945 bertujuan untuk meningkatkan hak-hak dan kebebasan sipil warga negara, serta memperkuat perlindungan HAM. Selain itu, dilakukannya amandemen ini bertujuan untuk menyesuaikan konstitusi yang berlaku di Indonesia dengan perkembangan zaman dan tuntutan masyarakat luat."
  },

  // ─── Soal 6 ───
  {
    id: 6, kategori: "TWK",
    teks: "Penerapan ideologi Pancasila dapat memengaruhi berbagai aspek kehidupan masyarakat Indonesia baik dalam aspek politik, sosial, ekonomi, dan budaya. Dalam aspek politik dapat ditunjukkan dengan….",
    pilihan: [
      { huruf: "A", teks: "Penggunaan bahasa Indonesia sebagai bahasa negara" },
      { huruf: "B", teks: "Tidak golput saat pemilu" },
      { huruf: "C", teks: "Pembangunan infrastruktuk di daerah-daerah terpencil" },
      { huruf: "D", teks: "Mengikuti kebijakan pemerintah baik yang berkaitan dengan pemilu, perbaikan infrastruktur, pendidikan dan lain sebagainya" },
      { huruf: "E", teks: "Berpartisipasi dalam perluasan lapangan kerja" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada frasa <i>aspek politik</i>. Opsi jawaban yang menunjukkan peranan Pancasila dalam aspek politik juga dapat ditunjukkan dengan sikap warga negara yang tidak golput saat pemilu. Hal tersebut menunjukkan adanya partisipasi warga negara terhadap kehidupan politik tanah air."
  },

  // ─── Soal 7 ───
  {
    id: 7, kategori: "TWK",
    teks: "Semangat dalam membela negara sangat diperlukan bagi keberlangsungan kehidupan berbangsa dan bernegara. Semangat ini disebut juga dengan nasionalisme. Dengan adanya sikap ini diharapkan warga Indonesia memiliki rasa bangga dengan tanah kelahirannya yang telah memberikan penghidupan kepadanya. Sikap nasionalisme dapat diajarkan sejak dini sehingga saat dewasa nanti dapat diterapkan dengan baik, seperti….",
    pilihan: [
      { huruf: "A", teks: "Memakai pakaian batik di luar kewajiban seragam sekolah" },
      { huruf: "B", teks: "Bersedia membagikan makanan kepada rekan ketika jam istirahat sekolah" },
      { huruf: "C", teks: "Meminjamkan alat tulis kepada rekan yang lupa membawa" },
      { huruf: "D", teks: "Membantu rekan yang sedang kesusahan" },
      { huruf: "E", teks: "Mengikuti kegiatan ekstrakulikuler seperti PMI dan Pramuka" }
    ],
    kunci: "A",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'memiliki rasa bangga dengan tanah kelahirannya'. Opsi jawaban yang menunjukkan sikap bangga terhadap bangsa Indonesia ada pada opsi A, yaitu dengan memakai pakaian batik di luar kewajiban seragam sekolah. Memakai pakaian batik di luar kewajiban seragam sekolah adalah salah satu cara untuk memperkuat identitas budaya Indonesia. Batik merupakan salah satu warisan budaya Indonesia yang harus dilestarikan. Dengan menggunakanya maka menunjukkan bahwa seseorang bangga dengan warisan budaya Indonesia."
  },

  // ─── Soal 8 ───
  {
    id: 8, kategori: "TWK",
    teks: "Pandemi Covid-19 tahun 2019 lalu menjadi perhatian dari semua pihak karena memiliki dampak yang sangat luar biasa. Kesadaran akan pentingnya protokol kesehatan seluruh warga negara setiap melakukan aktivitas menjadi bagian dari semangat nasionalisme. Semangat nasionalisme dapat didefinisikan sebagai kesadaran untuk mempertahankan identitas, integritas, kemakmuran dan kekuatan bangsa. Semangat tersebut dapat ditunjukkan dengan….",
    pilihan: [
      { huruf: "A", teks: "Membantu pemerintah untuk menutup segala akses yang berhubungan dengan keramaian demi mencegah penyebaran virus" },
      { huruf: "B", teks: "Mengonsumsi makanan yang sehat dan bergizi agar daya tahan tubuh menjadi kuat" },
      { huruf: "C", teks: "Menutup diri dan tidak lagi menjalin komunikasi dan hubungan dengan orang lain demi memutus rantai penyebaran virus" },
      { huruf: "D", teks: "Adanya perasaan senasib dan seperjuangan sebagai warga negara Indonesia untuk bersama-sama melawan virus dengan cara mematuhi aturan dan kebijakan yang telah ditetapkan oleh pemerintah dalam pencegahan dan pengendalian virus" },
      { huruf: "E", teks: "Memberikan dukungan kepada pemerintah, terutama dinas kesehatan dan dinas sosial, yang menjadi garda terdepan dalam penanggulangan dan pencegahan virus tersebut" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'kesadaran untuk mempertahankan identitas, integritas, kemakmuran dan kekuatan bangsa'. Opsi jawaban yang menunjukkan kesadaran masyarakat untuk mempertahankan identitas, integritas, dan kemakmuran bangsa ada pada opsi D dengan adanya perasaan senasib dan seperjuangan dengan mematuhi aturan dan kebujakan pemerintah dalam pencegahan dan pengendalian kasus covid ini. Selain itu, perasaan senasib dan seperjuangan ini akan membentuk sebuah ikatan agar bangsa Indonesia tetap utuh dan tidak mudah terpecah belah apapun bentuk permasalahan yang dihadapi."
  },

  // ─── Soal 9 ───
  {
    id: 9, kategori: "TWK",
    teks: "Cinta tanah air merupakan perasaan kasih sayang, kecintaan dan kesetiaan yang mendalam. Sikap tersebut dapat tercermin dalam memahami dan mengapresiasi nilai-nilai budaya yang menjadi bagian dari identitas negara. Sebagai seorang warga negara, sikap yang dapat dilakukan untuk menunjukkan perasaan tersebut adalah….",
    pilihan: [
      { huruf: "A", teks: "Menawarkan bantuan kepada orang lain yang sedang membutuhkan" },
      { huruf: "B", teks: "Berpartisipasi dalam membersihkan pantai dan menanam pohon" },
      { huruf: "C", teks: "Membantu tetangga dalam situasi darurat" },
      { huruf: "D", teks: "Berpartisipasi dalam pertunjukan seni tradisional" },
      { huruf: "E", teks: "Mengikuti program pendidikan kewarganegaraan" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'memahami dan mengapresiasi nilai-nilai budaya yang menjadi bagian dari identitas bangsa'. Opsi jawaban yang berkaitan dengan sikap apresiasi terhadap budaya Indonesia ada pada Opsi D, yaitu berpartisipasi dalam festival budaya seperti pertunjukkan seni tradisional."
  },

  // ─── Soal 10 ───
  {
    id: 10, kategori: "TWK",
    teks: "Dwi merupakan seorang warga sipil yang cinta kepada tanah kelahirannya. Perasaan tersebut tercermin dari sikapnya yang siap sedia berjuang dan berkorban demi kepentingan negara. Dalam kesehariannya, biasanya Dwi…",
    pilihan: [
      { huruf: "A", teks: "Memberikan dukungan moral kepada orang lain" },
      { huruf: "B", teks: "Tidak membuang sampah sembarangan di lingkungan sekolah" },
      { huruf: "C", teks: "Tidak melanggar lampu merah atau batas laju" },
      { huruf: "D", teks: "Melaporkan pelaku kasus korupsi kepada pihak yang berwewenang dengan memberikan sejumlah bukti meskipun mendapat ancaman" },
      { huruf: "E", teks: "Mendengarkan lagu tradisional Indonesia" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'berjuang dan berkorban demi kepentingan negara'. Opsi jawaban yang menunjukkan rela berkorban demi kepentingan negara ada pada opsi D, yaitu dengan melaporkan pelaku kasus korupsi kepada pihak yang berwewenang dengan memberikan sejumlah buktu meskipun mendapatkan ancaman. Opsi ini juga mencerminkan sikap yang lebih mendalam, menunjukkan kesiapan untuk berjuang melawan korupsi demi kepentingan negara, bahkan dengan risiko pribadi."
  },

  // ─── Soal 11 ───
  {
    id: 11, kategori: "TWK",
    teks: "Patriotisme merupakan semangat untuk berkorban demi negara atau sikap yang ditunjukkan melalui tindakan berani, rela berkorban, dan tidak mudah menyerah dalam membela bangsa. Sikap tersebut dapat diwujudkan dengan… ",
    pilihan: [
      { huruf: "A", teks: "Menggunakan bagasa Indonesia dan bahasa daerah dengan baik dan benar" },
      { huruf: "B", teks: "Berani membela kebenaran meskipun harus berhadapan dengan pihak yang berkuasa" },
      { huruf: "C", teks: "Bangga menggunakan batik sebagai warisan budaya lokal" },
      { huruf: "D", teks: "Hormat kepada bendera sebagai simbol negara" },
      { huruf: "E", teks: "Menggunakan bahasa Indonesia yang baik dan benar" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'berani, rela berkorban dan tidak mudah menyerah'. Opsi jawaban yang menunjukkan sikap keberanian, rela berkorban dan tidak mudah menyerah ada pada opsi B."
  },

  // ─── Soal 12 ───
  {
    id: 12, kategori: "TWK",
    teks: "Paham kebangsaan memiliki hubungan yang sangat erat dengan nasionalisme. Paham kebangsaan merupakan perasaan atau pandangan, sedangkan paham nasionalisme sebagai bentuk atau aksi nyata dari wujud paham kebangsaan. Adanya hubungan ini dapat mendorong rasa ingin bersatu, semangat cinta tanah air dan memiliki rasa kebanggaan sebagai bangsa serta memelihara kehormatan bangsa. Upaya untuk meningkatkan kedua pemahaman ini dapat dilakukan dengan….",
    pilihan: [
      { huruf: "A", teks: "Bersikap adil dan tidak membeda-bedakan perlakuan kepada warga negara Indonesia" },
      { huruf: "B", teks: "Mempelajari budaya sendiri dengan baik" },
      { huruf: "C", teks: "Memiliki kepedulian yang tinggi dengan sesama manusia" },
      { huruf: "D", teks: "Memperkaya pengetahuan terkait budaya-budaya Indonesia dalam mempertahankan NKRI" },
      { huruf: "E", teks: "Berpartisipasi dalam upaya mempertahankan wilayah perbatasan" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'rasa ingin bersatu, semangat cinta tanah air dan memiliki rasa kebanggaan'. Opsi jawaban yang menunjukkan sikap tersebut ada pada opsi D. Memperkaya pengetahuan terkait budaya-budaya Indonesia merupakan salah satu cara untuk meningkatkan pemahaman tentang kebangsaan dan nasionalisme. Dengan memahami sejarah, budaya, dan nilai-nilai yang menjadi bagian dari identitas bangsa, seseorang dapat lebih merasakan semangat cinta tanah air, memiliki kebanggaan sebagai bangsa, dan memelihara kehormatan bangsa. Ini juga dapat menjadi dasar untuk tindakan nyata dalam mempertahankan NKRI."
  },

  // ─── Soal 13 ───
  {
    id: 13, kategori: "TWK",
    teks: "Rahma merupakan seorang warga sipil yang menjunjung tinggi integritas dalam menjalankan kehidupannya. Hal tersebut tercermin dari kecenderungan mendapatkan kepercayaan dari orang lain seperti rekan kerja, rekan, dan keluarganya. Dalam kesehariannya, biasanya Rahma…",
    pilihan: [
      { huruf: "A", teks: "Memberikan dukungan kepada orang lain yang sedang dalam masa sulit" },
      { huruf: "B", teks: "Menolak tawaran suap meskipun mendapat keuntungan pribadi" },
      { huruf: "C", teks: "Memenuhi setiap janji dan membangun kepercayaan dan loyalitas dengan orang lain" },
      { huruf: "D", teks: "Menghormati semua orang tanpa memandang status sosial" },
      { huruf: "E", teks: "Mau belajar untuk meningkatkan kompetensi dalam bekerja" }
    ],
    kunci: "C",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'mendapatkan kepercayaan dari orang lain'. Kepercayaan dari orang lain dapat diperoleh apabila seseorang menanamkan nilai kejujuran dalam dirinya. Opsi jawaban yang menunjukkan kepercayaan dan kejujuran ada pada opsi C. Menepati janji merupakan tindakan yang mencerminkan konsistensi dan kewajaran. dengan memenuhi janji, seseorang menunjukkan keandalan dan konsistensi dalam perilaku, yang merupakan aspek integral dari integritas."
  },

  // ─── Soal 14 ───
  {
    id: 14, kategori: "TWK",
    teks: "Moh. Hatta diakui sebagai salah satu pahlawan kemerdekaan Indonesia yang berjuang untuk merdeka dari penjajah Belanda. Ia terlibat aktif dalam gerakan nasionalis sejak dini dan turut menandatangani Proklamasi Kemerdekaan Indonesia. Saat memperjuangkan kemerdekaan Indonesia, Moh. Hatta berkali-kali ditangkap dan diasingkan oleh pemerintah kolonial. Namun, ia tetap mengabdikan dirinya untuk Indonesia sebagai tanah kelahirannya. Perjuangan beliau tidak pernah berhenti dan takut hingga Indonesia mencapai puncak kemerdekaan pada tahun 1945. Sikap dari Moh. Hatta tersebut dapat diteladani karena mencerminkan nilai integritas, yaitu….",
    pilihan: [
      { huruf: "A", teks: "Jujur dengan perkataan dan tindakan yang dilakukannya dalam memperjuangkan kemerdekaan Indonesia" },
      { huruf: "B", teks: "Berani dan tidak takut dengan penjajah hingga Indonesia mencapai kemerdekaan" },
      { huruf: "C", teks: "Tanggung jawab sebagai seorang pahlawan kemerdekaan Indonesia" },
      { huruf: "D", teks: "Gigih dengan usahanya sebagai bagian dari bangsa Indonesia" },
      { huruf: "E", teks: "Kerja keras untuk mendapatkan pengakuan kemerdekaan dari negara lain" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'tidak pernah berhenti dan takut'. Sikap tersebut menunjukkan bahwasannya Moh. Hatta memiliki keberanian karena tidak pernah takut dengan penjajahan hingga Indonesia merdeka pada tahun 1945. Oleh karena itu, jawaban yang paling tepat adalah opsi B."
  },

  // ─── Soal 15 ───
  {
    id: 15, kategori: "TWK",
    teks: "Restu merupakan seorang mahasiswa tingkat akhir. Meskipun saat ini ia sibuk dengan penulisan skripsinya, tetapi Restu selalu membantu dan menolong rekan-rekannya yang sedang mengalami kesulitan. Restu selalu berbagi sedikit rezeki yang ia punya kepada rekan-rekannya yang sedang mengalami kesulitan ekonomi karena belum mendapatkan kiriman dari orang tuanya. Saat rekan-rekannya bersedih, Restu selalu bersedia menghibur mereka. Sikap Restu tersebut menunjukkan bahwasanya sebagai mahasiswa ia juga menjunjung nilai-nilai integritas, alasannya adalah…",
    pilihan: [
      { huruf: "A", teks: "Restu mau bekerja keras untuk menyelesaikan skripsinya" },
      { huruf: "B", teks: "Restu memiliki kepedulian yang tinggi terhadap rekan-rekannya" },
      { huruf: "C", teks: "Restu lebih mandiri dibandingkan rekan-rekannya" },
      { huruf: "D", teks: "Restu memilih untuk hidup sederhana agar bisa membantu rekan-rekannya" },
      { huruf: "E", teks: "Restu bertanggung jawab untuk menyelesaikan skripsinya" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'selalu membantu dan menolong rekan-rekannya yang sedang mengalami kesulitan'. Pernyataan tersebut menunjukkan bahwa Restu memiliki kepedulian dan empati kepada rekan-rekannya. Oleh karena itu, jawaban yang tepat adalah opsi B."
  },

  // ─── Soal 16 ───
  {
    id: 16, kategori: "TWK",
    teks: "Integritas dapat diartikan sebagai suatu sikap yang menunjukkan konsistensi seseorang antara apa yang diucapkan dengan tindakan yang dilakukan. Seseorang dikatakan berintegritas apabila tindakan yang dilakukannya sesuai dengan nilai, keyakinan, dan kebijakan yang berlaku. Sikap tersebut dapat didorong dengan adanya…",
    pilihan: [
      { huruf: "A", teks: "Lingkungan kerja yang aman, nyaman, dan harmonis" },
      { huruf: "B", teks: "Keluarga yang suportif dan selalu memberi dukungan" },
      { huruf: "C", teks: "Manajemen waktu dan keuangan yang baik" },
      { huruf: "D", teks: "Pekerjaan yang sesuai dengan cita-cita" },
      { huruf: "E", teks: "Adanya sanksi apabila terbukti melanggar kebijakan dan aturan yang berlaku" }
    ],
    kunci: "E",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'tindakan yang dilakukannya sesuai dengan nilai, keyakinan, dan kebijakan yang berlaku'. Artinya seseorang yang berintegritas tidak akan melanggar nilai-nilai yang dianut dan diyakini. Oleh karena itu, upaya untuk mendorong agar sikap tersebut selalu tertanam di dalam diri seseorang adalah dengan memberikan sanksi apabila seseorang melanggar nilai-nilai yang dianut dan diyakini tersebut."
  },

  // ─── Soal 17 ───
  {
    id: 17, kategori: "TWK",
    teks: "Pada saat seleksi penerimaan pegawai baru di salah satu instansi pemerintah, Pratama dihubungi oleh seorang oknum yang mengaku sebagai panitia rekrutmen. Oknum tersebut menawarkan bantuan kepada Pratama untuk diterima bekerja di instansi pemerintahan tersebut dengan syarat ia harus membayarkan sejumlah uang yang telah ditetapkan oleh oknum tersebut. Meskipun ia mampu membayarnya, tetapi dengan tegas dan bijak Pratama menolak tawaran tersebut. Menurutnya tindakan tersebut dapat merusak integritas dan kepribadiannya karena…",
    pilihan: [
      { huruf: "A", teks: "Tindakan tersebut dapat merusak nilai kejujurannya dalam mengikuti rangkaian seleksi penerimaan pegawai baru" },
      { huruf: "B", teks: "Tindakan tersebut menunjukkan bahwasanya Pratama tidak bertanggung jawab dengan tindakan yang diambilnya" },
      { huruf: "C", teks: "Tindakan tersebut menunjukkan bawasanya Pratama tidak mandiri dan bergantung dengan orang lain" },
      { huruf: "D", teks: "Tindakan tersebut menunjukkan bahwasanya Pratama tidak bisa bekerja keras dalam mencapai cita-citanya" },
      { huruf: "E", teks: "Tindakan tersebut dapat merusak rasa kepedulian Pratama dengan panitia rekrutmen" }
    ],
    kunci: "A",
    pembahasan: "Kata kunci menjawab soal ini ada pada kalimat 'tegas dan bijak Pratama menolak tawaran tersebut'. Sikap tersebut menunjukkan bahwasannya Pratama menjunjung tinggi nilai kejujuran dan transparansi dalam pelaksanaan rekrutmen penerimaan pegawai baru. Oleh karena itu jawaban yang paling tepat adalahopsi A."
  },

  // ─── Soal 18 ───
  {
    id: 18, kategori: "TWK",
    teks: "Integritas juga dapat menjadi penyaring untuk menghindari diri dari perbuatan tercela yang dapat merugikan diri sendiri, mencoreng nama baik, dan martabat lembaga. Jika tidak memiliki integritas, seseorang akan kehilangan kredibilitas karena orang lain akan memunggunginya untuk menghindari kekecewaan. Sikap integritas tersebut dapat ditunjukkan dengan….",
    pilihan: [
      { huruf: "A", teks: "Bekerja sesuai aturan dan kebijakan yang diucapkan oleh pimpinan" },
      { huruf: "B", teks: "Bersikap sopan kepada pimpinan dan santun kepada bawahan" },
      { huruf: "C", teks: "Hidup sederhana dan tidak berperilaku konsumtif" },
      { huruf: "D", teks: "Mau bekerja sama dengan siapapun baik orang dalam maupun orang luar" },
      { huruf: "E", teks: "Tidak takut melawan siapapun yang memiliki sikap yang tidak disukai" }
    ],
    kunci: "C",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'menghindari diri dari perbuatan tercela yang dapat merugikan diri sendiri, mencoreng nama baik dan martabat lembaga'. Opsi jawaban yang menunjukkan sikap yang menghindari perbuatan tercela ada pada opsi C dengan memilih hidup sederhana dan tidak berperilaku konsumtif karena berperilaku konsumtif menjadi faktor pendorong pertama seseorang untuk melakukan tindak pidana korupsi."
  },

  // ─── Soal 19 ───
  {
    id: 19, kategori: "TWK",
    teks: "Ancaman militer merupakan salah satu ancaman yang dinilai dapat membahayakan kedaulatan negara, keselamatan segenap bangsa, dan keutuhan wilayah. Ancaman militer ini dapat mengakibatkan rasa takut pada masyarakat, mengganggu kedaulatan negara, membahayakan keutuhan wilayah negara hingga mengancam keselamatan segenap bangsa. Ancaman ini harus segera diatasi agar tidak semakin memburuk. Salah satu ancaman yang pernah membahayakan kedaulatan negara tersebut adalah…",
    pilihan: [
      { huruf: "A", teks: "Pelanggaran wilayah pulau Sipadan dan Ligitan oleh Malaysia" },
      { huruf: "B", teks: "Tingginya angka pengangguran di Indonesia" },
      { huruf: "C", teks: "Dasa saing sumber daya manusia (SDM) yang rendah" },
      { huruf: "D", teks: "Ketidaksiapan menghadapi globalisasi" },
      { huruf: "E", teks: "Peningkatan angka kemiskinan dan kebodohan" }
    ],
    kunci: "A",
    pembahasan: "Ancaman militer adalah ancaman yang menggunakan kekuatan bersenjata yang terorganisasi yang dinilai mempunyai kemampuan yang membahayakan kedaulatan negara, keutuhan wilayah negara dan keselamatan segenap bangsa. Ancaman militer dapat berbentuk agresi, pelanggaran wilayah, spionase, sabotase, aksi teror bersenjata, pemberontakan bersenjata, perang saudara dan konflik komunal. Oleh karena itu, opsi A merupakan jawaban yang tepat dan merupakan salah satu ancaman militer yang membahayakan kedaulatan negara Indonesia."
  },

  // ─── Soal 20 ───
  {
    id: 20, kategori: "TWK",
    teks: "Ada beberapa alasan mengapa usaha bela negara penting dilakukan oleh setiap warga negara Indoneisa, di antaranya adalah untuk mempertahankan negara dari berbagai ancaman, menjaga keutuhan wilayah negara, merupakan panggilan sejarah, dan merupakan kewajiban setiap warga negara. Sebagai seorang pelajar, upaya bela negara tersebut dapat dilakukan dengan…..",
    pilihan: [
      { huruf: "A", teks: "Bersedia mengikuti pertukaran pelajar agar bisa mempelajari budaya luar negeri " },
      { huruf: "B", teks: "Bersedia mengangkat senjata apabila terdapat ancaman dari luar" },
      { huruf: "C", teks: "Mengikuti kegiatan kemanusiaan yang diadakan di lingkungan sekitar" },
      { huruf: "D", teks: "Menolak keterlibatan dalam paham-paham radikalisme" },
      { huruf: "E", teks: "Mempelajari teknologi informasi dan komunikasi" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'mempertahankan negara dari berbagai ancaman, menjaga keutuhan wilayah negara, merupakan panggilan sejarah'. Opsi jawaban yang berkaitan dengan upaya mempertahankan negara dari berbagai ancaman dan menjaga keutuhan wilayah negara ada pada opsi D, yaitu dengan menolak keterlibatan paham radikalisme. Paham radikalisme ini dapat merusak persatuan dan kesatuan negara karena radikalisme dapat menciptakan tidak stabilnya sosial di dalam suatu masyarakat. pandangan-pandangan yang ekstrem dapat memecah belah masyarakat, menciptakan konflik antara kelompok-kelompok yang berbeda, dan merusak kerukunan sosial."
  },

  // ─── Soal 21 ───
  {
    id: 21, kategori: "TWK",
    teks: "Bela negara merupakan suatu kehormatan bagi setiap warga negara yang dilaksanakan dengan penuh tanggung jawab, rela berkorban dan kesabaran dalam pengabdian kepada tanah air. Setiap warga negara wajib ikut serta dalam upaya bela negara sesuai dengan peraturan perundang-undangan yang sesuai dengan indikator-indikator berikut, kecuali….",
    pilihan: [
      { huruf: "A", teks: "Memiliki kecerdasan intelektual, spiritual, dan emosional serta kecerdasan dalam bertahan hidup atau mengatasi kesulitan" },
      { huruf: "B", teks: "Senantiasa memelihara kesehatan jiwa dan raga" },
      { huruf: "C", teks: "Ulet dan pantang menyerah dalam menghadapi tantangan" },
      { huruf: "D", teks: "Memiliki jiwa patriotisme terhadap bangsa dan negara" },
      { huruf: "E", teks: "Memiliki keterampilan bela negara dalam bentuk keterampilan" }
    ],
    kunci: "D",
    pembahasan: "Nilai nilai dasar bela negara adalah cinta tanah air, kesadaran berbangsa dan bernegara, setia kepada Pancasila, rela berkorban dan memiliki kemampuan awal bela negara. Memiliki jiwa patriotisme terhadap bangsa dan negara lebih tepatnya merupakan indikator rela berkorban."
  },

  // ─── Soal 22 ───
  {
    id: 22, kategori: "TWK",
    teks: "Upaya bela negara merupakan hak dan kewajiban bagi seluruh lapisan masyarakat Indonesia. Kesadaran bela negara hakikatnya adalah kesediaan berbakti pada negara dan kesediaan berkorban membela negara tanpa harus menggunakan senjata, seperti….",
    pilihan: [
      { huruf: "A", teks: "Menghormati dan mendukung TNI dan Polri yang telah berjuang untuk menjaga keamanan dan pertahanan negara" },
      { huruf: "B", teks: "Bersedia mengangkat senjata apabila diperlukan dalam melawan musush" },
      { huruf: "C", teks: "Mengikuti pelatihan wajib militer" },
      { huruf: "D", teks: "Mempelajari strategi perang untuk memperkuat pertahanan negara" },
      { huruf: "E", teks: "Berpartisipasi aktif dalam kegiatan perang antarnegara" }
    ],
    kunci: "A",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'tanpa harus menggunakan senjata'. Opsi jawaban yang menunjukkan bela negara seseorang tanpa harus menggunakan senjata ada pada opsi A dengan menghormati dan mendukung TNI dan Polri yang telah berjuang untuk menjaga keamanan dan pertahanan negara. Sedangkan opsi B,C,D dan E merupakan sikap yang ada kaitannya dengan menggunakan senjata atau upaya bela negara secara fisik."
  },

  // ─── Soal 23 ───
  {
    id: 23, kategori: "TWK",
    teks: "Seiring perkembangan zaman, perkembangan ilmu pengetahuan dan teknologi juga semakin berkembang. Beberapa hal yang dulunya dijunjung tinggi menjadi tidak relevan lagi di zaman sekarang. Akan tetapi, konsep tersebut tidak berlaku bagi upaya bela negara. Bagaimanapun perkembangan zaman, setiap warga tetap memiliki kewajiban untuk ikut serta dalam upaya bela negara, seperti…",
    pilihan: [
      { huruf: "A", teks: "Ikut mendukung kebebasan HAM bagi komunitas LGBT" },
      { huruf: "B", teks: "Berpartisipasi aktif dalam melestarikan budaya dan tradisi tanah air" },
      { huruf: "C", teks: "Tidak menyebarkan berita hoaks atau berita bohong" },
      { huruf: "D", teks: "Mengikuti kegiatan sosial yang diadakan di lingkungan sekitar" },
      { huruf: "E", teks: "Menghormati bendera merah putih sebagai bendera nasional" }
    ],
    kunci: "C",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'upaya bela negara di zaman sekarang'. Opsi jawaban yang paling tepat adalah opsi C karena zaman sekarang adalah zaman digitalisasi yang apa-apa  berkaitan dengan teknologi informasi. Opsi A kurang tepat karena LGBT melanggar nilai moral dan agama. Opsi B dan E lebih tepatnya merupakan wujud sikap nasionalisme dan cinta tanah air. Opsi D lebih tepatnya merupakan pengamalan dari sila kedua Pancasila."
  },

  // ─── Soal 24 ───
  {
    id: 24, kategori: "TWK",
    teks: "Disintegrasi merupakan suatu keadaan saat tidak adanya persatuan atau perpaduan sehingga menyebabkan terjadinya perpecahan. Disintegrasi merupakan salah satu ancaman negara yang harus dihilangkan karena berdampak buruk bagi kedaulatan negara. Salah satu tindakan disintegrasi tersebut adalah…",
    pilihan: [
      { huruf: "A", teks: "Pelecehan seksual terjadi antara guru dan siswa" },
      { huruf: "B", teks: "Tawuran antar sekolah" },
      { huruf: "C", teks: "Menyontek saat ujian" },
      { huruf: "D", teks: "Guru tidak memperlakukan siswanya dengan baik" },
      { huruf: "E", teks: "Budaya malas yang tertanam di dalam diri siswa" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'tidak adanya persatuan atau perpaduan'. Opsi jawaban yang menunjukkan tidak adanya rasa persatuan atau merusak rasa persatuan ini ada pada opsi B, yaitu adanya tawuran antarsekolah. Tawuran ini merupakan salah satu tindakan yang dapat merusak persatuan dan kesatuan masyarakat."
  },

  // ─── Soal 25 ───
  {
    id: 25, kategori: "TWK",
    teks: "Musim penghujan menyebabkan banyak tempat yang tergenang, satwa-satwa yang tinggal di tanah mencari tempat lain yang lebih aman. Salah satu satwa yang berbahaya ditemukan di pemukiman warga adalah ular piton. Warga masyarakat berusaha mengevakuasi dua ekor ularpiton yang masuk ke pemukiman warga. Tidak hanya di rumah-rumah penduduk, warga juga menemukan beberapa ular piton yang berada di atas pohon. Ditemukan dua ekor satwa berbahaya ini sangat meresahkan warga. <br>" +
          "Kalimat utama teks tersebut adalah….",
    pilihan: [
      { huruf: "A", teks: "Ditemukan dua ekor satwa berbahaya ini sangat meresahkan warga" },
      { huruf: "B", teks: "Warga masyarakat berusaha mengevakuasi dua ekor ular piton yang masuk ke pemukiman warga" },
      { huruf: "C", teks: "Musim penghujan menyebabkan banyak tempat yang tergenang, satwa-satwa yang tinggal di dalam tanah mencari tempat lain yang lebih aman" },
      { huruf: "D", teks: "Tidak hanya di rumah-rumah penduduk, warga juga menemukan beberapa ular piton yang berada di atas pohon" },
      { huruf: "E", teks: "Dua ekor piton masuk ke pemukiman warga" }
    ],
    kunci: "C",
    pembahasan: "Kalimat utama pada paragraf tersebut yaitu pada awal kalimat (deduktif). Dikarenakan kalimat selanjutnya merupakan penjelasan dari kalimat utama yang ada di awal paragraf. Opsi yang tepat adalah C."
  },

  // ─── Soal 26 ───
  {
    id: 26, kategori: "TWK",
    teks: "Pelestarian hewan bekantan di hutan Kalimantan semakin terancam. Alasannya adalah sekarang ada penambang ilegal. Mereka mencari emas. Ada ratusan penambang ilegal. <br>" +
          "Gagasan utama dari bacaan di atas adalah…",
    pilihan: [
      { huruf: "A", teks: "Penambangan ilegal di hutan Kalimantan" },
      { huruf: "B", teks: "Penyebab penambangan ilegal di hutan Kalimantan" },
      { huruf: "C", teks: "Ancaman terhadap hewan bekantan di Kalimantan" },
      { huruf: "D", teks: "Cegah penambangan ilegal di hutan Kalimantan" },
      { huruf: "E", teks: "Banyaknya penambang ilegal" }
    ],
    kunci: "C",
    pembahasan: "Gagasan utama adalah sebuah topik atau pembahasan yang nantinya akan dibahas di dalam sebuah paragraf. Gagasan utama bersifat yang paling umum dibandingkan dengan kalimat-kalimat lain. Pada teks tersebut gagasan utamanya adalah opsi C yang berada di awal paragraf."
  },

  // ─── Soal 27 ───
  {
    id: 27, kategori: "TWK",
    teks: "Bahan bakar minyak memiliki berbagai kegunaan. Sepeda motor menggunakan bahan bakar pertalite. Kendaraan bermesin diesel menggunakan bahan bakar solar. Pesawat terbang menggunakan avtur sebagai bahan bakar. Ibu rumah tangga menggunakan minyak tanah sebagai bahan bakar kompor minyak. <br>" +
          "Ide pokok paragraf tersebut adalah….",
    pilihan: [
      { huruf: "A", teks: "Kegunaan bahan bakar minyak" },
      { huruf: "B", teks: "Berbagai jenis kendaraan" },
      { huruf: "C", teks: "Bahan bakar rumah tangga" },
      { huruf: "D", teks: "Manfaat pertalite dan minyak tanah" },
      { huruf: "E", teks: "Ibu menggunakan minyak tanah" }
    ],
    kunci: "Ide pokok pada paragraf diatas dapat ditemukan pada awal kalimat dikarenakan kalimat-kalimat setelahnya merupakan penjelas dari kalimat utama yang ada di awal paragraf. Opsi yang tepat adalah A. Kegunaan bahan bakar minyak.",
    pembahasan: ""
  },

  // ─── Soal 28 ───
  {
    id: 28, kategori: "TWK",
    teks: "(1) Kebanyakan manusia lebih kuat lapar daripada haus. (2) Manusia masih dapat bertahan hidup meski kehilangan separuh atau semua persediaan hidrat  arang dan lemak. (3) Akan tetapi, jika ia kekurangan air 10% saja, tubuhnya akan terancam bahaya. (4) Jika kekurangan itu sampai 25%, ia berhadapan dengan maut. (5) sehingga rasa haus lebih berbahaya dibandingkan dengan rasa lapar. <br>" +
          "Kalimat utama paragraf di atas adalah….",
    pilihan: [
      { huruf: "A", teks: "1" },
      { huruf: "B", teks: "2 dan 3" },
      { huruf: "C", teks: "3" },
      { huruf: "D", teks: "4" },
      { huruf: "E", teks: "1 dan 5" }
    ],
    kunci: "Kalimat utama pada paragraf tersebut dapat ditemukan di awal dan di akhir kalimat dikarenakan pada awal dan akhir paragraf menyatakan hal yang sama. Opsi yang tepat adalah E.",
    pembahasan: ""
  },

  // ─── Soal 29 ───
  {
    id: 29, kategori: "TWK",
    teks: "“<i>Di samping rumput, dapat juga memberikan leguminosa, baik secara sengaja ditanam maupun legum yang tercampur pada rumput alam.</i> <br>”" +
          "Kalimat di atas akan menjadi kalimat efektif jika…",
    pilihan: [
      { huruf: "A", teks: "Dihapus frasa <i>di samping rumput</i>" },
      { huruf: "B", teks: "Menggantikan kata maupun menjadi <i>ataupun</i>" },
      { huruf: "C", teks: "Menambahkan subjek setelah kata <i>di samping rumput</i>" },
      { huruf: "D", teks: "Menghilangkan kata <i>baik</i>" },
      { huruf: "E", teks: "Sudah tepat semua" }
    ],
    kunci: "C",
    pembahasan: "Menambahkan subjek setlah 'di samping rumput' menjadikan kalimat lebih jelas dan lengkap. Hal ini membantu pembaca memahami siapa yang melakukan tindakan memberikan leguminosa, sehingga meningkatkan efektivitas kalimat. Opsi yang tepat adalah C."
  },

  // ─── Soal 30 ───
  {
    id: 30, kategori: "TWK",
    teks: "“<i>Hemoglobin yang berfungsi membawa oksigen ke seluruh tubuh</i>” <br>" +
          "Kalimat di atas dapat menjadi kalimat efektif jika….",
    pilihan: [
      { huruf: "A", teks: "Dihilangkan kata <i>hemoglobin</i>" },
      { huruf: "B", teks: "Dihilangkan kata <i>yang</i>" },
      { huruf: "C", teks: "Dihilangkan kata <i>berfungsi</i>" },
      { huruf: "D", teks: "Dihilangkan kata <i>membawa</i>" },
      { huruf: "E", teks: "Semua dihilangkan" }
    ],
    kunci: "B",
    pembahasan: "Menghilangkan kata 'yang' pada kalimat dapat menjadikan kalimat tersebut lebih jelas dan efektif dikarenakan predikat pada kalimat menjadi ada. Opsi yang tepat adalah B."
  },

  // ════════════════════════════════════════════
  // TES INTELIGENSIA UMUM (TIU) — 35 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 31 ───
  {
    id: 31, kategori: "TIU",
    teks: "-1, 1, 3, 8, 13, 15,....",
    pilihan: [
      { huruf: "A", teks: "13" },
      { huruf: "B", teks: "14" },
      { huruf: "C", teks: "15" },
      { huruf: "D", teks: "16" },
      { huruf: "E", teks: "17" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 32 ───
  {
    id: 32, kategori: "TIU",
    teks: "2, 5, 9, 12, 16, 19,....",
    pilihan: [
      { huruf: "A", teks: "20" },
      { huruf: "B", teks: "21" },
      { huruf: "C", teks: "22" },
      { huruf: "D", teks: "23" },
      { huruf: "E", teks: "24" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 33 ───
  {
    id: 33, kategori: "TIU",
    teks: "<math><mfrac> <mn>1</mn><mn>12</mn> </mfrac></math>,<math><mfrac> <mn>3</mn><mn>24</mn> </mfrac></math>,<math><mfrac> <mn>1</mn><mn>6</mn> </mfrac></math>,<math><mfrac> <mn>5</mn><mn>24</mn> </mfrac></math>,<math><mfrac> <mn>1</mn><mn>4</mn> </mfrac></math>,<math><mfrac> <mn>7</mn><mn>24</mn> </mfrac></math>,....  ",
    pilihan: [
      { huruf: "A", teks: "<math><mfrac> <mn>3</mn><mn>6</mn> </mfrac></math>" },
      { huruf: "B", teks: "<math><mfrac> <mn>1</mn><mn>6</mn> </mfrac></math>" },
      { huruf: "C", teks: "1" },
      { huruf: "D", teks: "<math><mfrac> <mn>2</mn><mn>3</mn> </mfrac></math>" },
      { huruf: "E", teks: "<math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math>" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 34 ───
  {
    id: 34, kategori: "TIU",
    teks: "Guru : ..... : Murid = Dokter : .... : ... ",
    pilihan: [
      { huruf: "A", teks: "Sekolah, Memeriksa, Rumah Sakit" },
      { huruf: "B", teks: "Libur, Memeriksa, Rumah Sakit" },
      { huruf: "C", teks: "Sekolah, Mendiagnosis, Perawat" },
      { huruf: "D", teks: "Mengajar, Pasien, Memeriksa" },
      { huruf: "E", teks: "Mengajar, Mendiagnosis, Pasien" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 35 ───
  {
    id: 35, kategori: "TIU",
    teks: "... : Sarjana Teknik : IPA = Manajer : ... : ...",
    pilihan: [
      { huruf: "A", teks: "Insinyur, Sarjana Manajemen, IPS" },
      { huruf: "B", teks: "Penulis, Manajemen, Sosial" },
      { huruf: "C", teks: "Profesor, Sarjana Sosial, IPS" },
      { huruf: "D", teks: "Insinyur, Sarjana Teknik, IPS" },
      { huruf: "E", teks: "Pengusaha, Sarjana Ekonomi, Bahasa" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 36 ───
  {
    id: 36, kategori: "TIU",
    teks: "'Bapak sedang merangkai pidato yang memuat salam pembuka supaya lebih memukau saat acara berlangsung', Hubungan objek-objek pada kalimat tersebut setara dengan...",
    pilihan: [
      { huruf: "A", teks: "Banyak warga yang merasa risi jika setiap minggu selalu ada acara yang membuat mereka harus ikut membayar untuk acara tersebut" },
      { huruf: "B", teks: "Pembuatan tabel yang rapi akan lebih membuat seorang pegawai terlihat lebih profesional dalam hal administrasi" },
      { huruf: "C", teks: "Sebagian orang menilai bahwa sering bepergian adalah perilaku yang boros" },
      { huruf: "D", teks: "Persyaratan untuk menjadi anggota perpustakaan sudah berubah mulai tahun ini" },
      { huruf: "E", teks: "Dia lebih suka membaca buku yang memuat pendahuluan dengan <i>story telling</i> tentang penulisnya" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 37 ───
  {
    id: 37, kategori: "TIU",
    teks: "'Chandra sangat menyukai gandum yang diolah menjadi tepung terigu dari berbagai negara'. Hubungan objek-objek pada kalimat tersebut setara dengan....",
    pilihan: [
      { huruf: "A", teks: "Mereka hadir membawa berbagai peralatan yang diminta oleh panitia" },
      { huruf: "B", teks: "Makanan tersebut mengandung kelapa, padahal beberapa orang harus menghindari santan juga" },
      { huruf: "C", teks: "Pengguna media sosial perlu untuk lebih memilah informasi yang beredar untuk mencegah terjadinya perpecahan" },
      { huruf: "D", teks: "Koordinator ajang kembang api mengusulkan untuk memberikan tempat VIP untuk beberapa orang yang memenuhi syarat" },
      { huruf: "E", teks: "Rumah makan yang mereka kunjungi menyediakan sate bebek lokal yang terkenal dengan proses pembakaran yang tidak terlalu lama, tetapi bumbunya sangat meresap" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 38 ───
  {
    id: 38, kategori: "TIU",
    teks: "'Hartono penasaran ingin meneliti albino lebih dalam karena ia belum memahami zat melanin yang berperan dalam kejadian albino'. Hubungan objek-objek pada kalimat tersebut setara dengan...",
    pilihan: [
      { huruf: "A", teks: "Sebelum benar-benar menyelam di latu, Rifqi harus <i>open water</i> terlebih dahulu di kolam khusus <i>diving</i> dan mempelajari berbagai teori tentang <i>diving</i>" },
      { huruf: "B", teks: "Banyak <i>content creator</i> yang memodifikasi resep makanan menjadi versi yang lebih sehat" },
      { huruf: "C", teks: "Penyanyi biasanya sering melakukan pemanasan setiap pagi dan menjaga suara dari efek konsumsi makanan tertentu" },
      { huruf: "D", teks: "Lembaga memiliki peraturan untuk menjaga kestabilan alur kerja yang wajib dipatuhi seluruh pegawai" },
      { huruf: "E", teks: "Penelitian terbaru mengungkapkan ubur-ubur tidak memiliki otak" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 39 ───
  {
    id: 39, kategori: "TIU",
    teks: "Perseroang terbatas tidak memberi pesangon kepada pegawai atau perseroang terbatas ditutup." +
          "<br>Ternyata perseroan terbatas tidak ditutup. Kesimpulannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Perseroan terbatas tidak memberi pesangon kepada pegawai" },
      { huruf: "B", teks: "Pegawai memilih perseroan terbatas ditutup" },
      { huruf: "C", teks: "Sebagian pegawai diberi pesangon" },
      { huruf: "D", teks: "Perseroan terbatas memberi pesangon kepada pegawai" },
      { huruf: "E", teks: "Sebagian pegawai tidak diberi pesangon" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 40 ───
  {
    id: 40, kategori: "TIU",
    teks: "Semua binatang buas tidak ada yang tidak dapat dijinakkan oleh manusia." +
          "<br> Beberapa binatang pemakan daging merupakan binatang buas. Kesimpulannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Beberapa binatang yang tidak dapat dijinakkan oleh manusia merupakan binatang buas" },
      { huruf: "B", teks: "Semua binatang yang tidak dapat dijinakkan oleh manusia adalah binatang buas" },
      { huruf: "C", teks: "Tidak ada binatang pemakan daging yang tidak dapat dijinakkan oleh manusia" },
      { huruf: "D", teks: "Beberapa binatang pemakan daging dapat dijinakkan oleh manusia" },
      { huruf: "E", teks: "Semua binatang pemakan daging tidak dapat dijinakkan oleh manusia" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 41 ───
  {
    id: 41, kategori: "TIU",
    teks: "Sebagian pedagang tidak menjual kangkung bulan ini apabila petani tidak menanam sayur." +
          "<br>Petani bertindak demikian apabila toko pertanian tidak menyediakan pupuk sesuai jadwal." +
          "<br>Kesimpulan yang paling tepat dari pernyataan-pernyataan di atas adalah...",
    pilihan: [
      { huruf: "A", teks: "Sebagian pedagang menjual kangkung bulan ini apabila toko pertanian tidak menyediakan stok pupuk sesuai jadwal" },
      { huruf: "B", teks: "Sebagian pedagang tidak menjual kangkung bulan ini apabila toko pertanian tidak menyediakan stok pupuk sesuai jadwal" },
      { huruf: "C", teks: "Sebagian pedagang tidak menjual kangkung bulan ini apabila toko pertanian menyediakan stok pupuk sesuai jadwal" },
      { huruf: "D", teks: "Toko pertanian menyediakan stok pupuk sesuai jadwal jadwal apabila sebagian pedagang menjual kangkung bulan ini" },
      { huruf: "E", teks: "Toko pertanian tidak menyediakan stok pupuk sesuai jadwal apabila sebagian pedagang tidak menjual kangkung bulan ini" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 42 ───
  {
    id: 42, kategori: "TIU",
    teks: "Hasil dari 1<math><mfrac> <mn>3</mn><mn>5</mn> </mfrac></math> %times; 1,5 : 20% adalah...",
    pilihan: [
      { huruf: "A", teks: "140" },
      { huruf: "B", teks: "120" },
      { huruf: "C", teks: "12" },
      { huruf: "D", teks: "1,2" },
      { huruf: "E", teks: "0,12" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 43 ───
  {
    id: 43, kategori: "TIU",
    teks: "Hasil dari -9 &times; (25+(-23)) : [-<math><mfrac> <mn>1</mn><mn>9</mn> </mfrac></math>] =",
    pilihan: [
      { huruf: "A", teks: "-432" },
      { huruf: "B", teks: "-342" },
      { huruf: "C", teks: "-18" },
      { huruf: "D", teks: "162" },
      { huruf: "E", teks: "432" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 44 ───
  {
    id: 44, kategori: "TIU",
    teks: "Hasil dari <math><mfrac> <mn>1</mn><mn>3</mn> + 0,75 - <math><mfrac> <mn>5</mn><mn>4</mn> </mfrac></math> = ... ",
    pilihan: [
      { huruf: "A", teks: "0,833" },
      { huruf: "B", teks: "0,166" },
      { huruf: "C", teks: "-0,166" },
      { huruf: "D", teks: "-<math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math>" },
      { huruf: "E", teks: "<math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math>" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 45 ───
  {
    id: 45, kategori: "TIU",
    teks: "Seorang peternak bebek lokal mempunyai persediaan pakan yang cukup untuk 16 ekor bebek lokal selama 27 hari. Jika banyak bebek lokal bertambah sebanyak 2 ekor, maka persediaan pakan akan habis selama .... hari",
    pilihan: [
      { huruf: "A", teks: "18" },
      { huruf: "B", teks: "20" },
      { huruf: "C", teks: "22" },
      { huruf: "D", teks: "24" },
      { huruf: "E", teks: "26" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 46 ───
  {
    id: 46, kategori: "TIU",
    teks: "Lima pegawai mampu menghasilkan 20 sarung tenun selama 2 hari. Banyak sarung tenun yang dihasilkan oleh 2 pegawai selama 3 hari adalah .... buah.",
    pilihan: [
      { huruf: "A", teks: "9" },
      { huruf: "B", teks: "10" },
      { huruf: "C", teks: "12" },
      { huruf: "D", teks: "14" },
      { huruf: "E", teks: "15" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 47 ───
  {
    id: 47, kategori: "TIU",
    teks: "Sebuah proyek dikerjakan oleh 40 pekerja dengan target selesai dalam 90 hari. Setelah berjalan selama 50 hari, 15 pekerja mengambil libur selama 4 hari. Agar proyek tetap selesai tepat waktu, berapa pekerja tambahan yang perlu ditamah?",
    pilihan: [
      { huruf: "A", teks: "2" },
      { huruf: "B", teks: "3" },
      { huruf: "C", teks: "4" },
      { huruf: "D", teks: "5" },
      { huruf: "E", teks: "6" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 48 ───
  {
    id: 48, kategori: "TIU",
    teks: "Dengan jumlah penghasilan sebesar Rp. 5,6 juta/bulan, Toko Pak Basri membayar zakat sebesar Rp. 140.000." +
          "<br><table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:12px 24px;text-align:left;'>Besar zakat yang harus dikeluarkan jika penghasilan Toko Pak Basri Rp3,2 juta/bulan</td><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>Rp60.000</td></tr></tbody></table>" +
          "<br>Manakah hubungan yang benar berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "2A > 3B" },
      { huruf: "B", teks: "3A < 2B" },
      { huruf: "C", teks: "A - B = 20.000" },
      { huruf: "D", teks: "2 A > 4B" },
      { huruf: "E", teks: "4A < B" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 49 ───
  {
    id: 49, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 50 ───
  {
    id: 50, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 51 ───
  {
    id: 51, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 52 ───
  {
    id: 52, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 53 ───
  {
    id: 53, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 54 ───
  {
    id: 54, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 55 ───
  {
    id: 55, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 56 ───
  {
    id: 56, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 57 ───
  {
    id: 57, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 58 ───
  {
    id: 58, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 59 ───
  {
    id: 59, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 60 ───
  {
    id: 60, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 61 ───
  {
    id: 61, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 62 ───
  {
    id: 62, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 63 ───
  {
    id: 63, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 64 ───
  {
    id: 64, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 65 ───
  {
    id: 65, kategori: "TIU",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "" },
      { huruf: "B", teks: "" },
      { huruf: "C", teks: "" },
      { huruf: "D", teks: "" },
      { huruf: "E", teks: "" }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ════════════════════════════════════════════
  // TES KARAKTERISTIK PRIBADI (TKP) — 45 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 66 ───
  {
    id: 66, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 67 ───
  {
    id: 67, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 68 ───
  {
    id: 68, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 69 ───
  {
    id: 69, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 70 ───
  {
    id: 70, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 71 ───
  {
    id: 71, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 72 ───
  {
    id: 72, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 73 ───
  {
    id: 73, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 74 ───
  {
    id: 74, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 75 ───
  {
    id: 75, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 76 ───
  {
    id: 76, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 77 ───
  {
    id: 77, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 78 ───
  {
    id: 78, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 79 ───
  {
    id: 79, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 80 ───
  {
    id: 80, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 81 ───
  {
    id: 81, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 82 ───
  {
    id: 82, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 83 ───
  {
    id: 83, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 84 ───
  {
    id: 84, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 85 ───
  {
    id: 85, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 86 ───
  {
    id: 86, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 87 ───
  {
    id: 87, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 88 ───
  {
    id: 88, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 89 ───
  {
    id: 89, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 90 ───
  {
    id: 90, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 91 ───
  {
    id: 91, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 92 ───
  {
    id: 92, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 93 ───
  {
    id: 93, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 94 ───
  {
    id: 94, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 95 ───
  {
    id: 95, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 96 ───
  {
    id: 96, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 97 ───
  {
    id: 97, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 98 ───
  {
    id: 98, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 99 ───
  {
    id: 99, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 100 ───
  {
    id: 100, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 101 ───
  {
    id: 101, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 102 ───
  {
    id: 102, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 103 ───
  {
    id: 103, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 104 ───
  {
    id: 104, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 105 ───
  {
    id: 105, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 106 ───
  {
    id: 106, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 107 ───
  {
    id: 107, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 108 ───
  {
    id: 108, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 109 ───
  {
    id: 109, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  },

  // ─── Soal 110 ───
  {
    id: 110, kategori: "TKP",
    teks: "",
    pilihan: [
      { huruf: "A", teks: "", poin: 1 },
      { huruf: "B", teks: "", poin: 2 },
      { huruf: "C", teks: "", poin: 3 },
      { huruf: "D", teks: "", poin: 4 },
      { huruf: "E", teks: "", poin: 5 }
    ],
    kunci: "",
    pembahasan: ""
  }

];

// ════════════════════════════════════════════
// FUNGSI SEED KE DATABASE
// ════════════════════════════════════════════
async function seedSoalPaket2() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Hapus data lama untuk tryout_id = 2
    await client.query(`DELETE FROM pilihan_jawaban WHERE soal_id IN (SELECT id FROM soal WHERE tryout_id = 2)`);
    await client.query(`DELETE FROM soal WHERE tryout_id = 2`);

    for (const soal of soalData) {
      const result = await client.query(
        `INSERT INTO soal (tryout_id, nomor_soal, kategori, teks, kunci, pembahasan)
         VALUES (2, $1, $2, $3, $4, $5)
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
    console.log('Seed soal Paket 2 berhasil: ' + soalData.length + ' soal');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal seed soal Paket 2:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

seedSoalPaket2().catch(() => process.exit(1));
