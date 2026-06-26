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
    teks: "Pada masa pergerakan kemerdekaan Indonesia. Para pejuang kemerdekaan baik dari kaum nasionalis, agama, tokoh daerah, kaum pemuda  dan yang lainnya tetap bisa menunjukkan tekad yang sama untuk meraih kemerdekaan Indonesia meskipun dari latar belakang yang berbeda-beda. Hal tersebut dapat menjadi karena mereka sama-sama menanamkan nilai…",
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
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'berjuang dan berkorban demi kepentingan negara'. Opsi jawaban yang menunjukkan rela berkorban demi kepentingan negara ada pada opsi D, yaitu dengan melaporkan pelaku kasus korupsi kepada pihak yang berwewenang dengan memberikan sejumlah bukti meskipun mendapatkan ancaman. Opsi ini juga mencerminkan sikap yang lebih mendalam, menunjukkan kesiapan untuk berjuang melawan korupsi demi kepentingan negara, bahkan dengan risiko pribadi."
  },

  // ─── Soal 11 ───
  {
    id: 11, kategori: "TWK",
    teks: "Patriotisme merupakan semangat untuk berkorban demi negara atau sikap yang ditunjukkan melalui tindakan berani, rela berkorban, dan tidak mudah menyerah dalam membela bangsa. Sikap tersebut dapat diwujudkan dengan… ",
    pilihan: [
      { huruf: "A", teks: "Menggunakan bahasa Indonesia dan bahasa daerah dengan baik dan benar" },
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
    kunci: "A",
    pembahasan: "Ide pokok pada paragraf diatas dapat ditemukan pada awal kalimat dikarenakan kalimat-kalimat setelahnya merupakan penjelas dari kalimat utama yang ada di awal paragraf. Opsi yang tepat adalah A. Kegunaan bahan bakar minyak."
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
    kunci: "E",
    pembahasan: "Kalimat utama pada paragraf tersebut dapat ditemukan di awal dan di akhir kalimat dikarenakan pada awal dan akhir paragraf menyatakan hal yang sama. Opsi yang tepat adalah E."
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
    kunci: "E",
    pembahasan: "<img src='gambarpembahasan/tryout2/31.jpg'></img>"
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
    kunci: "D",
    pembahasan: "<img src='gambarpembahasan/tryout2/32.jpg'></img>"
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
    kunci: "E",
    pembahasan: "<img src='gambarpembahasan/tryout2/33.jpg'></img>"
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
    kunci: "E",
    pembahasan: "Guru bertugas mengajar untuk para murid sebagaimana dokter bertugas mendiagnosis untuk para pasien."
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
    kunci: "A",
    pembahasan: "Profesi Insinyur didapat dari kuliah dengan program Sarjana Teknik yang mana Sarjana Teknik berasal dari SMA dengan keilmuan IPA. begitu juga Manajer didapat dari kuliah dengan program Sarjana Manajemen yang mana Sarjana Manajemen berasal dari keilmuan IPS "
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
    kunci: "E",
    pembahasan: "Objek pada soal adalah kata <em>pidato</em> dan <em>salam pembuka</em>. setara dengan objek pada opsi E yaitu <em>buku</em> dan <em>pendahuluan</em>. <br> Bagian awal pidato adalah salam pembuka, begitu juga bagian awal buku adalah pendahuluan."
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
    kunci: "B",
    pembahasan: "Objek pada soal adalah <em>gandum</em> dan <em>tepung terigu</em>. Setara dengan objek pada opsi B yaitu <em>kelapa</em> dan <em>santan</em>. <br> Gandum jika diolah akan menjadi tepung terigu sebagaimana kelapa jika diolah akan menjadi santan."
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
    kunci: "E",
    pembahasan: "Objek pada soal adalah <em>albino</em> dan <em>zat melanin</em>. Setara dengan objek pada opsi E yaitu <em>ubur-ubur</em> dan <em>otak</em>. <br> Albino tidak memiliki zat melanin sebagaimana ubur-ubur tidak memiliki otak"
  },

  // ─── Soal 39 ───
  {
    id: 39, kategori: "TIU",
    teks: "Perseroang terbatas tidak memberi pesangon kepada pegawai atau perseroan terbatas ditutup." +
          "<br>Ternyata perseroan terbatas tidak ditutup. Kesimpulannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Perseroan terbatas tidak memberi pesangon kepada pegawai" },
      { huruf: "B", teks: "Pegawai memilih perseroan terbatas ditutup" },
      { huruf: "C", teks: "Sebagian pegawai diberi pesangon" },
      { huruf: "D", teks: "Perseroan terbatas memberi pesangon kepada pegawai" },
      { huruf: "E", teks: "Sebagian pegawai tidak diberi pesangon" }
    ],
    kunci: "A",
    pembahasan: "Terdapat 2 pilihan yaitu p v q = perseroan terbatas tidak memberi pesangon kepada pegawai atau perseroan terbatas ditutup. <br> Ternyata 'perseroan terbatas tidak ditutup'/~q. maka pilihan yang tersisa sudah pasti 'perseroan terbatas tidak memberi pesangon kepada pegawai'/p."
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
    kunci: "D",
    pembahasan: "Karena beberapa binatang pemakan daging merupakan binatang buas, maka kesimpulannya adalah 'beberapa binatang pemakan daging dapat dijinakkan oleh manusia'. karena premis pertama menyatakan bahwa semua binatang buas dapat dijinakkan oleh manusia."
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
    kunci: "B",
    pembahasan: "p = 'sebagian pedagang tidak menjual kangkung bulan ini. <br> q = 'petani tidak menanam sayur. <br> r = 'toko pertanian tidak menyediakan stok'. <br> premis 1 = p > q. <br> premis 2 = q > r. <br> kesimpulan = p > q. <br> Oleh karena itu, simpulan yang tepat adalah opsi B, yaitu ' Sebagian pedagang tidak menjual kangkung bulan ini apabila toko pertanian tidak menyediakan stok pupuk sesuai jadwal."
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
    kunci: "C",
    pembahasan: "1<math><mfrac> <mn>3</mn><mn>5</mn> </mfrac></math> &times; 1,5 : 20% <br> = <math><mfrac> <mn>8</mn><mn>5</mn> </mfrac></math> &times; <math><mfrac> <mn>15</mn><mn>10</mn> </mfrac></math> : <math><mfrac> <mn>20</mn><mn>100</mn> </mfrac></math> <br> = <math><mfrac> <mn>8</mn><mn>5</mn> </mfrac></math> &times; <math><mfrac> <mn>15</mn><mn>10</mn> </mfrac></math> &times; <math><mfrac> <mn>100</mn><mn>20</mn> </mfrac></math> = 12"
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
    kunci: "D",
    pembahasan: "-9 &times; (25+(-23)) : [-<math><mfrac> <mn>1</mn><mn>9</mn> </mfrac></math>] <br> = -9 &times; 2 &times; (-9) = 162"
  },

  // ─── Soal 44 ───
  {
    id: 44, kategori: "TIU",
    teks: "Hasil dari <math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math> + 0,75 - <math><mfrac> <mn>5</mn><mn>4</mn> </mfrac></math> = ... ",
    pilihan: [
      { huruf: "A", teks: "0,833" },
      { huruf: "B", teks: "0,166" },
      { huruf: "C", teks: "-0,166" },
      { huruf: "D", teks: "-<math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math>" },
      { huruf: "E", teks: "<math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math>" }
    ],
    kunci: "C",
    pembahasan: "<math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math> + 0,75 - <math><mfrac> <mn>5</mn><mn>4</mn> </mfrac></math> = <math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math> + <math><mfrac> <mn>3</mn><mn>4</mn> </mfrac></math> - <math><mfrac> <mn>5</mn><mn>4</mn> </mfrac></math> <br> = <math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math> - <math><mfrac> <mn>2</mn><mn>4</mn> </mfrac></math> <br> <math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math> - <math><mfrac> <mn>1</mn><mn>2</mn> </mfrac></math> <br> = <math><mfrac> <mn>2 - 3</mn><mn>6</mn> </mfrac></math> <br> = - <math><mfrac> <mn>1</mn><mn>6</mn> </mfrac></math> <br> = -0,166"
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
    kunci: "C",
    pembahasan: "16 bebek ➔ 27 hari <br> 16 + 2 = 18 bebek ➔ x hari.<br> Soal di atas adalah jenis soal perbandingan berbalik nilai karena semakin banyak bebek, maka akan semakin sedikit jumlah hari nya. maka rumusnya adalah <math><mfrac> <mn>atas &times; atas</mn><mn>bawah</mn> <br> x= <math><mfrac> <mn>16 &times; 27</mn><mn>18</mn> </mfrac></math> = 24"
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
    kunci: "C",
    pembahasan: "Lima pegawai mampu menghasilkan 20 sarung tenun selama 2 hari. Artinya, dalam sehari, 5 pegawai tersebut dapat menghasilkan 10 sarung tenun. Maka, dapat kita cari berapa banyak sarung tenun yang dihasilkan 2 pegawai selama sehari yaitu : <br> 5 pegawai ➔ 10 sarung <br> 2 pegawai ➔ x sarung <br> karena ini merupakan perbandingan senilai maka dikali silang <br> x = <math><mfrac> <mn>2 &times; 10</mn><mn>5</mn> </mfrac></math> = 4. <br> = 4 &times; 3 = 12 <br> Jadi, banyak sarung tenun yang dihasilkan adalah 12 buah."
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
    kunci: "A",
    pembahasan: "Diketahui <br> Pekerja = 40 orang <br> waktu = 90 hari <br> Pekerja libur = 15 orang <br> Libur = 4 hari <br> Sisa hari = 90 - 50 - 4 = 36 hari <br> Maka untuk mencari tambahan pekerja yang dibutuhkan adalah <br> T = <math><mfrac> <mn>pekerja libur &times; libur</mn><mn>sisa hari</mn> </mfrac></math> <br> = <math><mfrac> <mn>15 &times; 4</mn><mn>36</mn> </mfrac></math> <br> = <math><mfrac> <mn>60</mn><mn>36</mn> </mfrac></math> <br> = 1,67 (karena yang dicari tambahan pekerja, maka hasilnya dibulatkan ke atas). Maka tambahan pekerja yang dibutuhkan adalah 2."
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
    kunci: "C",
    pembahasan: "5,6 juta (penghasilan) ➔ 140.000 (zakat) <br>3,2 juta (penghasilan) ➔ A (zakat). <br>Ini adalah tipikal soal perbandingan senilai karena semakin besar penghasilan maka semakin besar juga zakatnya. Karena perbandingan senilai maka rumusnya adalah dikali silang. untuk lebih sederhananya, penghasilan kita sederhanakan menjadi 56 dan 32 dengan cara menghilangkan koma. <br> A = <math><mfrac> <mn>32 &times; 140.000</mn><mn>56</mn> </mfrac></math> <br> A = <math><mfrac> <mn>4 &times 140.000</mn><mn>7</mn> </mfrac></math> = 80.000 <br> Karena A = 80.000 maka kita subtitusikan ke pilihan ganda, opsi yang tepat adalah C yaitu 80.000 - 60.000 = 20.000 "
  },

  // ─── Soal 49 ───
  {
    id: 49, kategori: "TIU",
    teks: "Untuk membuat adonan bolu sebanyak 50 buah dibutuhkan gula 0,5 kg.<br><br><table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:12px 24px;text-align:left;'>Banyak adonan bolu yang dibuat jika gula yang digunakan 0,75 kg</td><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>75 buah</td></tr></tbody></table><br><br>Manakah hubungan yang benar berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "A > B" },
      { huruf: "B", teks: "A - B = 0" },
      { huruf: "C", teks: "B - A = 5" },
      { huruf: "D", teks: "2A - A < 30" },
      { huruf: "E", teks: "A : B = 2" }
    ],
    kunci: "B",
    pembahasan: "Pembahasan ini sangat sederhana. Soal ini adalah tentang perbandingan senilai, berhubung angkanya spesial yaitu <br>0,5 ➔ 50<br>0,75 ➔ A <br> Jika diperhatikan angkanya sangat spesial yaitu dari 0,5 ke 50 dikalikan dengan 100. Maka, untuk mencari A = 0,75 &times; 100 = 75. <br> Kita subtitusikan ke pilihan jawaban. Opsi yang tepat adalah B yaitu A - B = 75 - 75 = 0 "
  },

  // ─── Soal 50 ───
  {
    id: 50, kategori: "TIU",
    teks: "Bu Hj. Halimah pergi ke kantor menaiki mobil, jarak rumahnya ke kantor adalah 10 km. Laju atau <em>speed</em> mobil yang dikemudikan Bu Hj. Halimah adalah 30 km/jam.<br><br><table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:12px 24px;text-align:left;'>Waktu yang diperlukan Bu Hj. Halimah untuk sampai ke kantor (dalam jam)</td><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>1/2 jam</td></tr></tbody></table><br><br>Manakah hubungan yang benar berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "A > B" },
      { huruf: "B", teks: "<math><mfrac> <mn>1</mn><mn>A</mn> </mfrac></math> < <math><mfrac> <mn>1</mn><mn>B</mn> </mfrac></math>" },
      { huruf: "C", teks: "<math><mfrac> <mn>1</mn><mn>A</mn> </mfrac></math> - <math><mfrac> <mn>1</mn><mn>B</mn> </mfrac></math> = 2" },
      { huruf: "D", teks: "3A - B = <math><mfrac> <mn>1</mn><mn>2</mn> </mfrac </math>" },
      { huruf: "E", teks: "3A > 2B" }
    ],
    kunci: "D",
    pembahasan: "Diketahui <br> Jarak = 10 km <br> Kecepatan = 30 Km/jam <br> Untuk mencari waktu adalah dengan cara jarak/kecepatan. maka A = 10/30 = 1/3. <br> Karena A = 1/3 dan B = 1/2 maka disubtitusikan ke pilihan jawaban, dan opsi yang tepat adalah D. mari kita buktikan. <br> 3[<math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math>] - <math><mfrac> <mn>1</mn><mn>2</mn> </mfrac></math> <br> = 1 - <math><mfrac> <mn>1</mn><mn>2</mn> </mfrac></math> = <math><mfrac> <mn>1</mn><mn>2</mn> </mfrac></math>"
  },

  // ─── Soal 51 ───
  {
    id: 51, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/51.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "A",
    pembahasan: "Ada perubahan posisi objek luar menjadi di dalam dan objek dalam menjadi di luar."
  },

  // ─── Soal 52 ───
  {
    id: 52, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/52.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "C",
    pembahasan: "Gambar pada kolom kedua terlihat bahwa gambar menjadi bertambah kotak di luarnya. Pada kolom ketiga, gambar berlanjut berotasi 90° berlawanan arah jarum jam."
  },

  // ─── Soal 53 ───
  {
    id: 53, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/53.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "C",
    pembahasan: "Gambar pada baris pertama ukuran gambar kecil lalu membesar di baris kedua, dan dilanjutkan dengan berotasi 30° searah jarum jam pada baris ketiga."
  },

  // ─── Soal 54 ───
  {
    id: 54, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/54.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Gambar pada kolom ketiga merupakan gabungan dari gambar pada kolom pertama dan kedua dengan sebelumnya gambar pada kolom kedua dicerminkan terlebih dahulu."
  },

  // ─── Soal 55 ───
  {
    id: 55, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/55.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Gambar yang berbeda dari gambar lainnya adalah D karena titik hitam di tengah tidak berada di dalam gambar panah seperti pada gambar lainnya."
  },

  // ─── Soal 56 ───
  {
    id: 56, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/56.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "C",
    pembahasan: "Gambar yang berbeda dari gambar lainnya adalah C karena bagian kanan dan kiri bukan pencerminan sebagaimana bagian kanan dan kiri gambar lainnya."
  },

  // ─── Soal 57 ───
  {
    id: 57, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/57.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "A",
    pembahasan: "Gambar yang berbeda dari gambar lainnya adalah A karena dari semua pilihan B, C, D, E semua panah yang terletak di sudut selalu berhadapan kecuali opsi A. "
  },

  // ─── Soal 58 ───
  {
    id: 58, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/58.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Gambar dirotasi 90° searah jarum jam. Lingkaran bergantian warna dan berpindah posisi dengan rotasi berlawanan arah jarum jam"
  },

  // ─── Soal 59 ───
  {
    id: 59, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/59.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "E",
    pembahasan: "Pola gambar tersebut menunjukkan arah panah selalu menghadap awan putih"
  },

  // ─── Soal 60 ───
  {
    id: 60, kategori: "TIU",
    teks: "Perhatikan gambar berikut ini!. <br><br> <img src='gambarsoal/tryout2/60.jpg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B",
    pembahasan: "Dari gambar 1, 2, dan 3 semuanya diputar berlawanan arah jarum jam kurang lebih sebesar 45°. Selain itu lingkaran tengah setiap gambar selalu diperbesar. Maka untuk gambar selanjutnya yang tepat adalah B."
  },

  // ─── Soal 61 ───
  {
    id: 61, kategori: "TIU",
    teks: "Sebuah toko jam tangan sudah mendapat enam orang pelanggan yang datang membeli dalam waktu enam jam setelah tokonya buka. Toko tersebut hanya menjual tiga jenis jam tangan. Pelanggan E membeli jam tangan warna hitam. Pelanggan A membeli jam motif bunga. Pelanggan B dan C membeli jam tangan bahan kulit. Pelanggan F tidak tertarik membeli jam tangan hitam, tetapi membeli seperti pelanggan A. Pelanggan D tidak membeli jam yang sudah dibeli pelanggan A, B, C, dan F. Siapakah yang membeli jam tangan motif bunga?",
    pilihan: [
      { huruf: "A", teks: "Pelanggan A dan F" },
      { huruf: "B", teks: "Pelanggan B dan C" },
      { huruf: "C", teks: "Pelanggan A dan E" },
      { huruf: "D", teks: "Pelanggan B dan D" },
      { huruf: "E", teks: "Pelanggan C dan F" }
    ],
    kunci: "A",
    pembahasan: " Jam tangan motif bunga = pelanggan A dan F, karena pelanggan F membeli jam tangan yang sama seperti pelanggan A.  "
  },

  // ─── Soal 62 ───
  {
    id: 62, kategori: "TIU",
    teks: "Gia, Umay, dan Restia datang ke toko kado untuk membeli tiga kado pernikahan rekan mereka dan mencari kado yang berbeda. Mereka sepakat untuk membeli pilihan kado berupa handuk, gelas, rice cooker, dan/atau selimut. Aturannya sebagai berikut. <br> - Umay memilih mencari rice cooker yang sesuai dengan selera calon pengantin. <br> - Restia mencari kado gelas. <br> - Jika membeli selimut, maka gelas tidak dibeli, begitu juga sebaliknya. <br> - Jika Gia membeli rice cooker, Umay harus membeli kado lain. <br> Restia tidak membeli selimut. <br> Jika Umay membeli rice cooker dan Gia membeli selimut, manakah pernyataan berikut yang benar?",
    pilihan: [
      { huruf: "A", teks: "Umay membeli handuk" },
      { huruf: "B", teks: "Kado yang dibeli adalah rice cooker, selimut, dan handuk" },
      { huruf: "C", teks: "Mereka mendapatkan diskon pembelian satu set sendok" },
      { huruf: "D", teks: "Gia membeli gelas" },
      { huruf: "E", teks: "Restia membeli rice cooker motif lain" }
    ],
    kunci: "B",
    pembahasan: "Pada soal di atas diinformasikan bahwa mereka membeli tiga kado dari empat pilihan yang disepakati. Lalu ada pernyataan 'Jika membeli selimut, maka gelas tidak dibeli, begitu juga sebaliknya'. artinya kado yang mereka beli adalah rice cooker, selimut, dan handuk."
  },

  // ─── Soal 63 ───
  {
    id: 63, kategori: "TIU",
    teks: "Gia, Umay, dan Restia datang ke toko kado untuk membeli tiga kado pernikahan rekan mereka dan mencari kado yang berbeda. Mereka sepakat untuk membeli pilihan kado berupa handuk, gelas, rice cooker, dan/atau selimut. Aturannya sebagai berikut. <br> - Umay memilih mencari rice cooker yang sesuai dengan selera calon pengantin. <br> - Restia mencari kado gelas. <br> - Jika membeli selimut, maka gelas tidak dibeli, begitu juga sebaliknya. <br> - Jika Gia membeli rice cooker, Umay harus membeli kado lain. <br> Restia tidak membeli selimut. <br> Jika Restia membeli gelas dan Gia membeli rice cooker, maka apa yang dibeli umay?",
    pilihan: [
      { huruf: "A", teks: "Hanya membeli handuk" },
      { huruf: "B", teks: "Hanya membeli kertas kado" },
      { huruf: "C", teks: "Bisa memilih membeli handuk atau selimut" },
      { huruf: "D", teks: "Hanya membeli gelas yang tidak dibeli Restia" },
      { huruf: "E", teks: "Bisa membeli selimut" }
    ],
    kunci: "A",
    pembahasan: "Pada soal di atas terdapat pernyataan 'Jika membeli selimut, maka gelas tidak dibeli, begitu juga sebaliknya', berarti Umay hanya dapat memberi handuk."
  },

  // ─── Soal 64 ───
  {
    id: 64, kategori: "TIU",
    teks: "Ada empat kelompok mahasiswa yang akan mempresentasikan mengenai peran tenaga kesehatan. Tim Fita dan Endo akan mempresentasikan peran tenaga kesehatan di klinik. Tim Zola dan Oki di puskesmas, tim Lita dan Ari di rumah sakit, dan Tim Beni dan Nina di tempat pasca kejadian bencana. Endo, Zola, dan Ari ada kelas mata kuliah lain dan harus lebih cepat menyelesaikan presentasi. <br> Jika kelas lain Ari lebih dahulu daripada Zola dan Endo, bagaimana urutan presentasi yang kemungkinan bisa dilakukan?",
    pilihan: [
      { huruf: "A", teks: "Lita, Ari, Endo, Zola, Fita, Nina, Oki, Beni" },
      { huruf: "B", teks: "Beni, Ari, Fita, Lita, Nina, Oki, Endo, Zola" },
      { huruf: "C", teks: "Beni, Lita, Fita, Ari, Nina, Zola, Oki, Endo" },
      { huruf: "D", teks: "Lita, Ari, Fita, Endo, Zola, Oki, Beni, Nina" },
      { huruf: "E", teks: "Lita, Ari, Nina, Beni, Endo, Fita, Zola, Oki" }
    ],
    kunci: "D",
    pembahasan: "Urutan presentasi yang memungkinkan adalah tim Lita Ari - Zola Oki - Fita Endo - Beni Nina atau tim <b>Lita Ari - Fita Endo - Zola Oki - Beni Nina</b>"
  },

  // ─── Soal 65 ───
  {
    id: 65, kategori: "TIU",
    teks: "Ada empat kelompok mahasiswa yang akan mempresentasikan mengenai peran tenaga kesehatan. Tim Fita dan Endo akan mempresentasikan peran tenaga kesehatan di klinik. Tim Zola dan Oki di puskesmas, tim Lita dan Ari di rumah sakit, dan Tim Beni dan Nina di tempat pasca kejadian bencana. Endo, Zola, dan Ari ada kelas mata kuliah lain dan harus lebih cepat menyelesaikan presentasi. <br> Jika tim Zola tidak ada kelas lain, ada di urutan ke berapa kemungkinan tim Beni maju presentasi?",
    pilihan: [
      { huruf: "A", teks: "3 atau 4" },
      { huruf: "B", teks: "1 atau 2" },
      { huruf: "C", teks: "1 atau 3" },
      { huruf: "D", teks: "2 atau 4" },
      { huruf: "E", teks: "Tidak dapat ditentukan" }
    ],
    kunci: "A",
    pembahasan: "Urutan kemungkinan presentasinya adalah sebagai berikut. <br>FE - LA - ZO - BN <br>LA - FE - ZO - BN <br>FE - LA - BN - ZO <br>LA - FE - BN - ZO <br>Jadi kemungkinan tim beni berada di urutan 3 atau 4."
  },

  // ════════════════════════════════════════════
  // TES KARAKTERISTIK PRIBADI (TKP) — 45 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 66 ───
  {
    id: 66, kategori: "TKP",
    teks: "Sebagai seorang PNS Tenaga Pendidik, anda menyukai kegiatan yang dapat memberikan manfaat untuk masyarakat dan lingkungan sehingga anda tertarik mengikuti kegiatan volunteer. Kali ini kegiatan volunteer diadakan di daerah timur untuk memberikan pendidikan bahasa dan kesenian, sedangkan anda tidak mengerti sama sekali bahasa yang mereka gunakan. Bagaimana cara anda mengatasi hal tersebut?",
    pilihan: [
      { huruf: "A", teks: "Mendokumentasikan seluruh kegiatan volunteer dan mempromosikannya di sosial media untuk mengajak lebih banyak lagi pemuda-pemudi yang tertarik ikut kegiatan volunteer", poin: 2 },
      { huruf: "B", teks: "Menelusuri internet untuk mempelajari budaya masyarakat di sana supaya dapat menyesuaikan diri ketika nanti kegiatan berlangsung", poin: 3 },
      { huruf: "C", teks: "Memastikan internet di daerah sana lancar dan dapat digunakan untuk saling berkomunikasi dengan komunitas volunteer", poin: 1 },
      { huruf: "D", teks: "Menguasai materi yang akan diajarkan dalam kegiatan volunteer tersebut melalui buku atau internet", poin: 4 },
      { huruf: "E", teks: "Mempelajari dahulu bahasa daerah tersebut semampunya beberapa waktu sebelum keberangkatan", poin: 5 }
    ],
    kunci: "E",
    pembahasan: " A = 2, B = 3, C = 1, D = 4, E = 5 <br>Dalam konteks soal tersebut berarti ada kendala dalam penggunaan bahasa, maka Anda dapat mempelajari dahulu bahasa daerah tersebut semampunya beberapa waktu sebelum keberangkatan. "
  },

  // ─── Soal 67 ───
  {
    id: 67, kategori: "TKP",
    teks: "Anda baru sebulan pindah ke rumah baru. Selama sebulan itu juga anda merasa terganggu dengan tetangga yang setiap pagi menyalakan musik dengan speaker kencang. Sikap anda adalah...",
    pilihan: [
      { huruf: "A", teks: "Menutup telinga anda dengan earbuds yang berfungsi untuk active noise cancelation setiap pagi", poin: 4 },
      { huruf: "B", teks: "Meminta bantuan ketua RT untuk menegur tetangga tersebut dan menemui kesepakatan dari kedua belah pihak", poin: 5 },
      { huruf: "C", teks: "Mencari list lagu-lagu yang biasa dinyalakan oleh tetangga tersebut untuk dijadikan referensi anda mendengarkan musik", poin: 2 },
      { huruf: "D", teks: "Bertanya kepada tetangga lain apakah mereka juga terganggu dan menanyakan alasan tetangga tersebut senang menyalakan musik kencang setiap pagi", poin: 1 },
      { huruf: "E", teks: "Berusaha memakluminya dan menyalakan sendiri musik yang anda sukai di rumah anda sendiri", poin: 3 }
    ],
    kunci: "B",
    pembahasan: "A =  4, B =  5, C = 2, D = 1, E = 3 <br> Anda dapat meminta bantuan ketua RT untuk menegur tetangga tersebut sebagai mediator dan menemui kesepakatan dari kedua belah pihak karena mungkin saja tetangga lain juga terganggu. Perlu dipahami dalam kehidupan bertetangga selain saling memberi, tetapi juga harus menjaga situasi lingkungan yang kondusif yang membuat tetangga juga merasa aman dan nyaman."
  },

  // ─── Soal 68 ───
  {
    id: 68, kategori: "TKP",
    teks: "Difa memiliki seorang sahabat yang sudah bersahabat selama 12 tahun. Sahabatnya beberapa tahun lalu didiagnosis penyakit parah, padahal ia selalu ceria dan disenangi oleh banyak orang. Apa sikap yang tepat yang harus Difa lakukan terhadap sahabatnya?",
    pilihan: [
      { huruf: "A", teks: "Rutin memberikan postingan yang dapat menguatkannya dari menghadapi penyakitnya", poin: 2 },
      { huruf: "B", teks: "Menemaninya tiap kali sahabatnya berobat dan selalu menjaga nama baiknya", poin: 3 },
      { huruf: "C", teks: "Selalu mendukungnya dengan bersedia mendengarkan ceritanya, berusaha untuk mencairkan suasana, dan menawarkan bantuan jika ia membutuhkannya", poin: 5 },
      { huruf: "D", teks: "Bertanya kepadanya mengenai faktor penyebabnya yang mungkin dapat berguna bagi orang lain untuk mencegah terkena penyakit tersebut", poin: 1 },
      { huruf: "E", teks: "Sering bertanya kabarnya dan menjaga hubungan yang baik juga dengan keluarganya", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 3, C =  5, D = 1, E = 4 <br> Difa dapat tetap di sisi sahabatnya dengan cara selalu mendukungnya dengan bersedia mendengarkan ceritanya, berusaha untuk mencairkan suasana, dan menawarkan bantuan jika ia membutuhkannya"
  },

  // ─── Soal 69 ───
  {
    id: 69, kategori: "TKP",
    teks: "Anda bekerja di suatu perseroan terbatas dan anda memiliki keahlian membuat adonan bolu yang kemudian mempromosikannya kepada rekan-rekan kerja anda. Lalu ada beberapa rekan kerja anda yang request tidak menggunakan bahan tertentu pada adonan bolu buatan anda berdasarkan kepercayaan yang mereka miliki, tanggapan anda adalah...",
    pilihan: [
      { huruf: "A", teks: "Menanyakan lebih detail latar belakang tidak menggunakan bahan tersebut berdasarkan kepercayaan mereka", poin: 1 },
      { huruf: "B", teks: "Mencari tahu lebih dalam alasan tidak menggunakan bahan tersebut berdasarkan kepercayaan mereka dengan telusur sendiri di internet", poin: 3 },
      { huruf: "C", teks: "Meminta bantuan orang lain untuk menyelesaikan seluruh pesanan jika sedang terlalu banyak pesanan", poin: 2 },
      { huruf: "D", teks: "Menerima request tersebut dengan senang hati dan membuatkannya sesuai dengan pesanannya", poin: 5 },
      { huruf: "E", teks: "Membawa semua pesanan yang dipesan oleh rekan-rekan kerja sesuai dengan pesanannya dan tepat waktu", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 1, B = 3, C = 2, D = 5, E = 4 <br> Dikarenakan beberapa rekan kerja Anda request tidak menggunakan bahan tertentu pada kue buatan Anda berdasarkan kepercayaan yang mereka miliki, maka Anda dapat tetap menerima request tersebut dengan senang hati dan membuatkannya sesuai dengan pesanannya."
  },

  // ─── Soal 70 ───
  {
    id: 70, kategori: "TKP",
    teks: "Anda dekat dengan seorang rekan kerja dan sama sama pekerja keras untuk mendapatkan promosi jabatan walaupun berbeda posisi kerja. Namun, rekan kerja tersebut naik jabatan dengan nepotisme. Apa yang akan anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Hanya mendengarkan jika ada rekan kerja lain yang membicarakan tentang kenaikan jabatannya", poin: 2 },
      { huruf: "B", teks: "Mempelajari pola-pola kenaikan jabatannya yang dapat diambil beberapa untuk meningkatkan kemampuan diri", poin: 1 },
      { huruf: "C", teks: "Cukup mengetahui saja informasi tersebut dan fokus pada menyelesaikan tugas kerja anda dengan kualitas terbaik", poin: 5 },
      { huruf: "D", teks: "Menunggu ada kesempatan untuk naik karir sesuai dengan performa kerja yang disyaratkan oleh perseroan terbatas", poin: 4 },
      { huruf: "E", teks: "Lebih percaya diri untuk mengungkapkan gagasan dan merespon diskusi dengan atasan", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 1, C = 5, D = 4, E =3 <br> Kenaikan karier karena nepotisme tidak untuk ditiru, baik itu dilakukan oleh rekan kerja yang memang dekat maupun orang lain yang bahkan tidak dikenal. Dalam situasi tersebut, Anda cukup mengetahui saja informasi tersebut dan fokus pada menyelesaikan tugas kerja Anda dengan kualitas terbaik"
  },

  // ─── Soal 71 ───
  {
    id: 71, kategori: "TKP",
    teks: "Rekan lama anda tiba-tiba menghubungi untuk meminta bantuan anda untuk membantu menemukan rumus formula excel yang akan ia gunakan untuk membantu administrasi bisnis mertuanya. Ia meminta bantuan anda karena ia mengenal anda menguasai menggunakan excel, maka anda....",
    pilihan: [
      { huruf: "A", teks: "Memintanya untuk merinci apa saja kebutuhannya dan mengirimkannya via email untuk dikerjakan anda di rumah", poin: 4 },
      { huruf: "B", teks: "Menentukan jadwal bertemu untuk berdiskusi menghasilkan rumus formula seperti yang ia inginkan", poin: 5 },
      { huruf: "C", teks: "Mendelegasikan tugas tersebut ke rekan lain yang lebih punya waktu untuk mengerjakannya", poin: 1 },
      { huruf: "D", teks: "Mengumpulkan berbagai referensi yang berisi berbagai rumus excel lalu mempelajarinya", poin: 2 },
      { huruf: "E", teks: "Mengajari rekan anda tahap demi tahap pembuatan rumus excel yang dikerjakan di laptopnya sendiri", poin: 3 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B =  5, C = 1, D =2, E = 3 <br> Pada soal tersebut diinforrnasikan bahwa Anda menguasai excel sehingga diminta tolong oleh rekan lama Anda untuk membantunya. Opsi menentukan jadwal bertemu untuk berdiskusi menghasilkan rumus formula seperti yang ia inginkan lebih efektif dan efisien karena dapat dengan leluasa berdiskusi dan mengerjakannya sampai selesai yang mungkin selesai di hari yang sama."
  },

  // ─── Soal 72 ───
  {
    id: 72, kategori: "TKP",
    teks: "Suyanto diundang untuk menghadiri acara pernikahan rekannya di luar kota, sedangkan tidak ada rekan lain yang Suyanto kenal yang diundang. Rekannya tersebut menjanjikan Suyanto untuk memberinya penginapan jika ia datang satu hari sebelum acara. Sikap yang dapat Suyanto tunjukkan adalah...",
    pilihan: [
      { huruf: "A", teks: "Membantunya untuk mengurus beberapa hal untuk acara pernikahannya dan berbagi ide saat dimintai pendapatnya", poin: 4 },
      { huruf: "B", teks: "Memenuhi undangannya dan menyiapkan kado yang sekiranya rekannya tersebut menyukainya", poin: 5 },
      { huruf: "C", teks: "Berjanji untuk mengabarinya lagi setelah mempertimbangkan beberapa hari setelah diundang", poin: 1 },
      { huruf: "D", teks: "Membeli pakaian yang sesuai dengan acara tersebut di toko online beberapa minggu sebelum hari acara", poin: 3 },
      { huruf: "E", teks: "Menanyakan dengan detail mengenai transportasi, penginapan, dan hari acara sebagai bagian dari perencanaan perjalanannya", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 1, D = 3, E = 2 <br> Jika diundang oleh seseorang untuk datang ke acaranya, usahakan untuk memenuhi undangan tersebut apalagi diberikan tawaran yang memungkinkan mendapatkan kenyamanan kalau datang ke acara tersebut."
  },

  // ─── Soal 73 ───
  {
    id: 73, kategori: "TKP",
    teks: "Anda bergabung di tim proyek yang mewajibkan memiliki android dengan minimal RAM tertentu untuk menggunakan aplikasi yang bisa menginput dan transfer data. Ternyata penggunaan aplikasi tersebut tidak semudah aplikasi sebelumnya, sedangkan anggota tim lainnya sudah menguasainya. Apa yang akan anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Meminta waktu salah satu anggota tim untuk mengajari anda cara menggunakan aplikasi tersebut hingga mahir", poin: 5 },
      { huruf: "B", teks: "Terus mencobanya sendiri saat menginput dan trasnfer data walaupun dengan risiko data tidak tersimpan jika salah caranya", poin: 4 },
      { huruf: "C", teks: "Menggunakan cara konfensional sebagai data backup hingga berhasil menginput dan transfer data di aplikasi tersebut", poin: 1 },
      { huruf: "D", teks: "Izin kepada atasan untuk menggunakan aplikasi lama yang dapat digunakan untuk menginput dan transfer data yang mungkin sedikit berbeda dan waktu yang lebih lama", poin: 2 },
      { huruf: "E", teks: "Meminta kepada atasan untuk memberikan anda pelatihan lagi secara khusus untuk menguasai menggunakan aplikasi tersebut", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 4, C = 1, D = 2, E = 3 <br> Segera menyesuaikan diri dengan segala perubahan yang ada dalam situasi kerja termasuk pergantian penggunaan aplikasi yang dinilai lebih canggih daripada sebelumnya merupakan kemampuan yang harus dimiliki. Dalam konteks soal tersebut sebaiknya Anda meminta waktu salah satu anggota tim untuk mengajari Anda cara menggunakan aplikasi tersebut hingga mahir."
  },

  // ─── Soal 74 ───
  {
    id: 74, kategori: "TKP",
    teks: "Kantor Putra Pratama sudah mulai menerapkan sistem kerja hybrid dan hanya pergi ke kantor 2 hari dalam seminggu, 3 hari kerja lainnya dapat dilakukan di rumah. Namun, meeting lebih sering dilakukan secara online. Demi kelancaran meeting, maka putra pratama....",
    pilihan: [
      { huruf: "A", teks: "Turut aktif berbicara, memberikan pendapat/ide/gagasan, dan merespon setiap orang yang ada di ruang meeting online", poin: 3 },
      { huruf: "B", teks: "Bertanya kepada atasan topik apa yang dibahas setiap kali meeting akan dimulai", poin: 2 },
      { huruf: "C", teks: "Memastikan kelancaran internet setiap harinya dan update mengenai jadwal kerja yang mengharuskannya datang ke kantor", poin: 5 },
      { huruf: "D", teks: "Membeli kamera yang menghasilkan gambar yang jernih dan memastikan perangkat audio, serta speaker berfungsi optimal", poin: 4 },
      { huruf: "E", teks: "Selalu makan terlebih dahulu dan/atau minum kopi untuk meningkatkan daya konsentrasi saat meeting dan bekerja dari rumah", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 2, C = 5, D = 4, E = 1 <br> Karena konteksnya adalah meeting dilaksanakan secara online, maka langkah yang paling pertama dilakukan adalah memastikan kelancaran internet setiap harinya."
  },

  // ─── Soal 75 ───
  {
    id: 75, kategori: "TKP",
    teks: "Anda memutuskan untuk resign dari perseroan terbatas korporat ke startup. Anda terkejut dengan budaya kerja di kantor yang sekarang karena adaptasi teknologinya lebih cepat daripada di tempat kerja sebelumnya sehingga anda...",
    pilihan: [
      { huruf: "A", teks: "Membuat catatan kecil terkait langkah-langkah penggunaan aplikasi yang digunakan sejak awal bekerja", poin: 1 },
      { huruf: "B", teks: "Menentukan jadwal tersendiri untuk terus update dan mempelajari teknologi yang harus berkembang di kantor saat ini", poin: 5 },
      { huruf: "C", teks: "Memberikan kesempatan pada rekan lainnya yang ingin diajari oleh anda jika sudah menguasai beberapa teknologi", poin: 4 },
      { huruf: "D", teks: "Mendatangi atau hadir dalam seminar yang membahas mengenai adaptasi terhadap perkembangan teknologi yang berkaitan dengan peningkatan karier", poin: 3 },
      { huruf: "E", teks: "Menonton banyak tutorial dan informasi mengenai teknologi terbaru saat ini yang biasa digunakan oleh banyak kantor", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 1, B = 5, C = 4, D =  3, E = 2 <br> Menyesuaikan diri dan terus aktif terhadap perkembangan teknologi sebaiknya difokuskan apa yang digunakan dan diperlukan oleh pekerjaan yang dijalani. Maka jawaban yang paling tepat adalah menentukan jadwal tersendiri untuk terus update dan mempelajari teknologi yang harus berkembang di kantor saat ini."
  },

  // ─── Soal 76 ───
  {
    id: 76, kategori: "TKP",
    teks: "Kegiatan notulensi menjadi salah satu kunci penting kemajuan suatu perseroan terbatas. Atasan anda memerintahkan Anda menjadi notulen rapat menggunakan catatan di kertas. Mengetahui perintah tersebut merupakan cara konvensional, Anda akan...",
    pilihan: [
      { huruf: "A", teks: "Bertanya kepada rekan kerja yang lainnya cara mencatat hal-hal penting rapat dengan cepat", poin: 3 },
      { huruf: "B", teks: "Hadir dalam rapat tersebut dan melakukan perintah atasan dengan tekun", poin: 2 },
      { huruf: "C", teks: "Menawarkan dan menjelaskan untuk memanfaatkan notulensi rapat AI", poin: 5 },
      { huruf: "D", teks: "Meminta ditemani oleh rekan kerja lainnya yang membantunya membuat catatan saat rapat", poin: 1 },
      { huruf: "E", teks: "Menyetujui perintah atasan dan menggunakan notulensi rapat AI tanpa sepengetahuan atasan", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 2, C = 5, D = 1, E = 4 <br> Teknologi AI diciptakan untuk notulensi rapat yang membantu memaksimalkan pekerjaan tanpa mengurangi produktivitas untuk tugas lainnya."
  },

  // ─── Soal 77 ───
  {
    id: 77, kategori: "TKP",
    teks: "Lembaga Anda sedang mengadakan proyek di beberapa daerah terpencil dan menunjuk Anda sebagai koordinator lapangan. Daerah terpencil tersebut jarang mendapatkan akses internet yang lancar dan hanya beberapa petugas lapangan di sana, sementara Anda lebih banyak waktu kerjanya di kantor yang mudah akses internetnya. Bagaimana cara supaya laporan di lapangan dapat tetap sampai kepada anda?",
    pilihan: [
      { huruf: "A", teks: "Memberikan tenggat waktu pada petugas lapangan untuk men-submit pendataan di lapangan ketika mereka berada di tempat yang akses internetnya lebih lancar", poin: 5 },
      { huruf: "B", teks: "Memberikan kebebasan kepada tim di daerah yang kesulitan akses internet untuk menggunakan cara manual tanpa perlu internet", poin: 1 },
      { huruf: "C", teks: "Memastikan petugas lapangan mendapatkan jaminan asuransi kesehatan dan asuransi kecelakaan selama proses pengumpulan data di lapangan", poin: 3 },
      { huruf: "D", teks: "Mengadakan diskusi untuk pembagian tugas masing-masing tim dan menjelaskan kewajiban dan hak petugas lapangan", poin: 2 },
      { huruf: "E", teks: "Meminta delegasi masing-masing kelompok untuk datang ke kantor membawa hasil dokumentasi selama kerja di lapangan yang dilaporkan kepada Anda", poin: 4 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 3 , D = 2, E = 4 <br> Dalam kondisi yang disebutkan pada soal, pilihan yang paling bijak adalah Anda sebagai koordinator lapangan yang stand by di kantor dapat memberikan tenggat waktu pada petugas lapangan untuk men-submit pendataan di lapangan ketika mereka berada di tempat yang akses internetnya lebih lancar"
  },

  // ─── Soal 78 ───
  {
    id: 78, kategori: "TKP",
    teks: "Rifka menjadi seorang pegawai baru yang masuk ke dalam suatu tim. Ternyata tim tersebut terbiasa menggunakan platform untuk berbagi data dan informasi yang Rifka belum pernah gunakan. Apa yang akan ia lakukan?",
    pilihan: [
      { huruf: "A", teks: "Membaca informasi mengenai platform tersebut dan mempraktikannya sendiri, serta minta diajarkan jika belum mahir", poin: 5 },
      { huruf: "B", teks: "Menitipkan pada rekan satu timnya yang sudah terbiasa untuk berbagi data dan informasi melalui platform tersebut", poin: 3 },
      { huruf: "C", teks: "Mengumpulkan dahulu seluruh dokumen, data, atau informasi yang akan dibagikan menjelang akhir bulan atau proses pelaporan", poin: 2 },
      { huruf: "D", teks: "Meminta pimpinan tim untuk mereferensikan penggunaan platform yang sejenis yang lebih familiar digunakan Rifka", poin: 1 },
      { huruf: "E", teks: "Turut serta aktif merespons dan memberikan ide saat tim berdiskusi walaupun belum terlalu mahir menggunakan platform tersebut", poin: 4 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 3, C =  2, D = 1, E = 4 <br> Rifka harus segera menyesuaikan kemampuannya di dalam tim supaya segera dapat berkontribusi dengan cara membaca informasi mengenai platform tersebut dan mempraktikannya sendiri, serta minta diajarkan jika belum mahir."
  },

  // ─── Soal 79 ───
  {
    id: 79, kategori: "TKP",
    teks: "Ruang digital semakin memberikan keleluasan content creator untuk berekreasi dan banyak orang yang bebas memberikan reaksi/komentar terhadap konten-konten tersebut. Lalu Anda ingin membuat ekosistem ruang digital menjadi lebih positif dengan memproduksi konten yang mengedukasi. Namun, ada beberapa komentar negatif bahkan ujaran kebencian yang bermunculan di ruang digital. Sikap Anda adalah...",
    pilihan: [
      { huruf: "A", teks: "Membuat rencana jadwal dan tema konten yang akan diproduksi serta mengatur jadwal posting di berbagai kanal", poin: 1 },
      { huruf: "B", teks: "Menerima kritik yang membangun yang dilontarkan oleh penonton konten selama masih dalam bentuk komunikasi asertif", poin: 4 },
      { huruf: "C", teks: "Mengatur penyaringan komentar negatif dengan mengikuti prosedur perlindungan komunitas di ruang digital", poin: 5 },
      { huruf: "D", teks: "Fokus untuk merespons dengan tanggapan yang positif pada orang-orang yang bisa berkomentar dengan kata-kata yang baik", poin: 3 },
      { huruf: "E", teks: "Bersikap acuh terhadap reaksi dan komentar yang bersifat negatif dan fokus untuk terus memposting konten edukasi", poin: 2 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 4, C =  5, D = 3, E = 2 <br> Konteks soal tersebut menyebutkan bahwa Anda ingin membuat ekosistem ruang digital menjadi lebih positif dengan memproduksi konten edukasi, maka sikap yang dapat Anda ambil terhadap komentar negatif adalah mengatur penyaringan terhadap komentar negatif tersebut dengan mengikuti prosedur perlindungan komunitas di ruang digital."
  },

  // ─── Soal 80 ───
  {
    id: 80, kategori: "TKP",
    teks: "Radit bekerja di bidang pengawasan mutu perseroan terbatas dan salah satu tanggung jawabnya adalah membuat dan merevisi standar operasional prosedur (SOP). Ia sangat terbiasa terpapar dengan teknologi sehingga menemukan beberapa ide untuk diterapkan di perseroan terbatas. Bagaimana ide tersebut dapat tersampaikan?",
    pilihan: [
      { huruf: "A", teks: "Memastikan dokumen SOP dan dokumen penertanya disimpan dan diarsipkan dengan aman dan awet", poin: 1 },
      { huruf: "B", teks: "Mengusulkan pada pimpinan mengenai ide teknologi yang menunjang produktivitas kerja perseroan terbatas dan mendokumentasikannya ke dalam SOP", poin: 5 },
      { huruf: "C", teks: "Terus mengawasi proses kerja masing-masing divisi dengan berfokus pada kesesuaian yang ada pada standar dan prosedur", poin: 2 },
      { huruf: "D", teks: "Memberikan kebebasan pada supervisor untuk usul merevisi alur kerja yang menurut mereka dapat dilakukan dengan efisien dan efektif", poin: 3 },
      { huruf: "E", teks: "Meminta beberapa supervisor untuk mengusulkan penggunaan teknologi yang mereka inginkan untuk meningkatkan performa kerja di divisinya masing-masing", poin: 4 }
    ],
    kunci: "B",
    pembahasan: "A = 1, B = 5, C = 2, D = 3, E = 4<br> Penggunaan teknologi memang sudah seharusnya dimanfaatkan untuk meningkatkan produktivitas kerja di perseroan terbatas. Anda dapat dengan percaya diri untuk mengusulkan pada pimpinan mengenai ide teknologi yang menunjang produktivitas kerja dan mendokumentasikannya ke dalam SOP."
  },

  // ─── Soal 81 ───
  {
    id: 81, kategori: "TKP",
    teks: "Anda sedang berbelanja di suatu mal yang elite bersama dengan beberapa rekan Anda. Semakin menjelang sore semakin banyak pengunjung yang datang dengan pakaian yang seragam. Ternyata diketahui akan ada acara keagamaan di aula mal tersebut. Anda yang melihatnya akan...",
    pilihan: [
      { huruf: "A", teks: "Saling bertukar cerita dengan rekan-rekan Anda mengenai update kehidupan", poin: 3 },
      { huruf: "B", teks: "Melanjutkan berbelanja tanpa memedulikan kegiatan dalam acara tersebut", poin: 4 },
      { huruf: "C", teks: "Mencari tahu di media sosial mengenai acara tersebut beserta komunitasnya", poin: 2 },
      { huruf: "D", teks: "Memperhatikan mereka dan penasaran dengan acara apa yang akan dilaksanakan di sana", poin: 1 },
      { huruf: "E", teks: "Membiarkan mereka mengadakan acara dengan khidmat selama tidak ada penyimpangan agama", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 3, B = 4, C = 2, D = 1, E = 5<br> Kegiatan acara apapun yang diselenggarakan dapat dijalankan dan didukung kekondusifannya. Dalam konteks soal tersebut, opsi yang tepat adalah Anda dan rekan-rekan bisa membiarkan mereka mengadakan acara dengan khidmat selama tidak ada penyimpangan."
  },

  // ─── Soal 82 ───
  {
    id: 82, kategori: "TKP",
    teks: "Divisi Anda cukup sering mengadakan event di luar kota untuk mendukung peningkatan profit perseroan terbatas. Pada suatu waktu, tim Anda mengadakan diskusi untuk membahas ajang selanjutnya yang ternyata dilaksanakan di hari ibadah keagamaan beberapa rekan kerja. Apa tindakan bijak yang dapat diambil tim terkait hal tersebut?",
    pilihan: [
      { huruf: "A", teks: "Memberikan laporan evaluasi kepada atasan terkait pelaksanaan ajang yang sebelumnya sangat diusahakan dapat berjalan dengan lancar tanpa ada kendala", poin: 1 },
      { huruf: "B", teks: "Mengizinkan beberapa rekan kerja yang beribadah sesuai dengan agamanya tersebut untuk sementara libur dan mendelegasikan beberapa tugasnya ke rekan lainnya dengan proporsional", poin: 5 },
      { huruf: "C", teks: "Menyusun jadwal acara dan susunan acara lalu menunjukkan masing-masing orang yang bertanggung jawab di divisinya masing-masing sesuai dengan keahlian yang dimilikinya", poin: 2 },
      { huruf: "D", teks: "Berdiskusi untuk membagi tugas kegiatan ajang tersebut dan memastikan logistik dapat tersedia dan terpenuhi tepat waktu", poin: 3 },
      { huruf: "E", teks: "Mengatur jadwal untuk beberapa rekan kerja untuk tetap dapat beribadah di hari rayanya dalam durasi waktu tertentu dan segera bergabung kembali dengan tim untuk bekerja", poin: 4 }
    ],
    kunci: "B",
    pembahasan: "A = 1, B = 5, C = 2 , D = 3, E = 4 <br> Jika ada suatu waktu tim Anda akan mengadakan acara selanjutnya yang ternyata dilaksanakan di hari ibadah keagamaan beberapa rekan kerja, keputusan yang bijak adalah tim mengizinkan rekan kerja yang beribadah sesuai dengan agamanya tersebut libur sementara dan mendelegasikan beberapa tugasnya ke rekan lainnya dengan proporsional."
  },

  // ─── Soal 83 ───
  {
    id: 83, kategori: "TKP",
    teks: "Bapak Rifqi menjadi kepala desa yang warganya terdiri dari berbagai agama yang dianut. Lalu ia mendapatkan laporan bahwa ada sekelompok warga yang sering mengotori salah satu rumah ibadah agama tertentu saat petang hari dan hal tersebut benar adanya. Bagaimana ia harus bersikap?",
    pilihan: [
      { huruf: "A", teks: "Membentuk tim patroli petang hari yang sanggup untuk menagkap sekelompok warga tersebut dan kerja bakti untuk membersihkan rumah ibadah yang dikotori tersebut", poin: 5 },
      { huruf: "B", teks: "Fokus pada menyelesaikan permasalahan infrastruktur dan peningkatan pelayanan kesehatan untuk meningkatkan kesejahteraan warga setempat", poin: 3 },
      { huruf: "C", teks: "Meminta pengawalan pihak yang berwajib untuk mengawal keamanan desa dan menjadi mediator untuk perdamaian dari kedua belah pihak", poin: 4 },
      { huruf: "D", teks: "Memerintahkan beberapa orang yang dapat dipercaya untuk mengawasi kebenaran pelaporan tersebut dengan datang beberapa kali saat petang hari dan tidak boleh ketahuan oleh sekelompok orang warga yang dicurigai tersebut", poin: 1 },
      { huruf: "E", teks: "Menelusuri siapa si pembuat pelaporan dan motifnya sebelum mengambil tindakan lebih lanjut", poin: 2 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 3, C = 4, D = 1, E = 2<br> Pada soal disebutkan bahwa laporan yang diberikan sudah benar adanya. Bapak Rifqi sebagai kepala desa dapat mengambil tindakan membentuk tim patroli petang hari yang sanggup menangkap sekelompok warga tersebut dan melakukan kerja bakti untuk membersihkan rumah ibadah yang dikotori tersebut."
  },

  // ─── Soal 84 ───
  {
    id: 84, kategori: "TKP",
    teks: "Paham radikalisme banyak menargetkan para pemuda termasuk di lingkungan akademisi. Ada sekelompok mahasiswa yang keras mempertahankan pendapatnya dan berpotensi adanya polarisasi sehingga meresahkan pihak universitas. Pihak universitas dapat melakukan...",
    pilihan: [
      { huruf: "A", teks: "Memasukkan mata kuliah baru yang khusus membahas untuk mencegah terjadinya paham radikalisme", poin: 5 },
      { huruf: "B", teks: "Memberikan nilai yang lebih pada sekelompok mahasiswa tersebut dengan harapan mereka dapat kembali kuliah dengan benar karena merasa diapresiasi", poin: 1 },
      { huruf: "C", teks: "Mengajak mereka untuk dialog terbuka dan konstruktif dengan menjadwalkannya dilaksanakan di tempat yang kondusif", poin: 3 },
      { huruf: "D", teks: "Mengadakan seminar khusus antiradikalisme beberapa kali untuk wilayah universitas yang ditujukan pada seluruh mahasiswa universitas tersebut", poin: 4 },
      { huruf: "E", teks: "Mengajak dosen-dosen yang mengenal sekelompok mahasiswa tersebut untuk secara khusus memberikan tugas tambahan di mata kuliahnya untuk menyadarkan mereka", poin: 2 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 3, D =  4, E = 2<br> Hal pertama yang dapat universitas lakukan adalah memasukkan mata kuliah baru yang khusus membahas untuk mencegah terjadinya paham radikalisme"
  },

  // ─── Soal 85 ───
  {
    id: 85, kategori: "TKP",
    teks: "Andi tumbuh dan berkembang di lingkungan keluarga yang beragam suku, budaya, dan agama. Keponakan Anda penasaran dengan beberapa pertanyaan terkait keagamaan dan sedang mencari titik terang spiritualnya. Apa yang dapat keluarga Anda lakukan? ",
    pilihan: [
      { huruf: "A", teks: "Memperhatikan dan sesekali mendokumentasikan perjalanan spiritual keponakan Anda sebagai apresiasi dan kenang-kenangan", poin: 2 },
      { huruf: "B", teks: "Memberikan kesempatan untuk mendapatkan bimbingan dari satu orang tokoh agama yang paling ingin ia tahu tentang seluk beluk agama tersebut", poin: 1 },
      { huruf: "C", teks: "Membantunya untuk lebih memperdalam gejolak emosi yang sedang dirasakannya dan menemaninya saat membaca buku tentang keagamaan", poin: 3 },
      { huruf: "D", teks: "Mengajaknya berdiskusi dengan damai dari berbagai anggota keluarga yang berbeda agama dan membebaskan ia mengambil keputusan berdasarkan keyakinannya", poin: 5 },
      { huruf: "E", teks: "Membebaskan ia untuk ikut serta pada seluruh kegiatan ibadah dan hari raya seluruh anggota keluarganya", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 1, C = 3, D = 5, E = 4<br> Seseorang yang sedang dalam perjalanan spiritualnya hanya perlu dukungan dari orang lain. Bentuk dukungan terbaik dari keluarga adalah mengajaknya berdiskusi dengan damai dari berbagai anggota keluarga yang berbeda agama dan membebaskan ia mengambil keputusanya berdasakan keyakinannya."
  },

  // ─── Soal 86 ───
  {
    id: 86, kategori: "TKP",
    teks: "Aparat negara berperan penting dalam deradikalisasi masyarakat yang pernah terlibat dalam terorisme, salah satunya adalah narapidana kasus teroris. Apa upaya deradikalisasi yang dapat dilakukan?",
    pilihan: [
      { huruf: "A", teks: "Menciptakan lingungan kerja yang damai di lingkungan staf lapas terutama di lapas kasus teroris", poin: 1 },
      { huruf: "B", teks: "Mengirimkan satu orang ahli deradikalisasi untuk mengajak diskusi satu per satu narapidana kasus teroris untuk disadarkan dari radikalisme dan terorisme", poin: 4 },
      { huruf: "C", teks: "Menyediakan berbagai judul buku yang berkaitan dengan deradikalisasi untuk dibaca narapidana di lapas", poin: 3 },
      { huruf: "D", teks: "Mengadakan kegiatan deradikalisasi untuk membina narapidana kasus teroris di lapas dengan narasumber ahli agama dan mengadakan sesi dialog", poin: 5 },
      { huruf: "E", teks: "Memberikan kesempatan narapidana kasus teroris untuk mempresentasikan latar belakang mereka tertarik pada radikalisme dan terorisme", poin: 2 }
    ],
    kunci: "D",
    pembahasan: "A = 1, B = 4, C = 3, D = 5, E = 2<br> Upaya yang efektif untuk dilakukan kepada narapidana di lapas yang terlibat terorisme adalah dengan membina para narapidana kasus teroris dengan mengadakan mengadakan sesi dialog dengan narasumber ahli agama"
  },

  // ─── Soal 87 ───
  {
    id: 87, kategori: "TKP",
    teks: "Rivai menjadi ketua RT di daerah yang sebagian besar mata pencahariannya adalah bertani. Bagaimana supaya warga setempat tidak terpapar paham radikalisme?",
    pilihan: [
      { huruf: "A", teks: "Bekerja sama dengan BNPT untuk mengimplementasikan <em>smart farming</em> yang dikelola oleh masyarakat setempat dan mitra deradikalisasi", poin: 5 },
      { huruf: "B", teks: "Memastikan seluruh petani yang memiliki lahan sendiri memiliki sertifikat lahan yang legal dan milik mereka sendiri", poin: 3 },
      { huruf: "C", teks: "Memastikan para petani dapat menyalurkan komoditas hasil panennya ke pasar dan pembeli dengan transaksi legal", poin: 4 },
      { huruf: "D", teks: "Memanggil petugas yang paham mengenai kesehatan lingkungan untuk menyosialisasikan pada para petani untuk mengetahui bahaya pestisida dan penggunaan alat pelindung diri (APD) yang lengkap", poin: 2 },
      { huruf: "E", teks: "Memberikan pelatihan pada beberapa petani baru untuk menentukan bibit yang benar dan cara bertani yang benar", poin: 1 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 3, C = 4, D = 2, E = 1<br> Meningkatkan ekonomi warga dapat menjadi salah satu faktor yang dapat mencegah warga dari terpaparnya paham radikalisme. Rivai sebagai ketua RT dapat menerapkan kerja sama dengan BNPT untuk mengimplementasikan <em>smart farming</em> yang dikelola masyarakat dengan mitra deradikalisasi."
  },

  // ─── Soal 88 ───
  {
    id: 88, kategori: "TKP",
    teks: "Arni seorang fresh graduate muda yang baru saja lulus kuliah dan bekerja sebagai pegawai di salah satu perusahaan start up yang dituntut untuk menguasai teknologi terbaru setiap tiga bulan. Hal tersebut membuat Arni cukup merasakan tekanan yang tinggi dalam pekerjaanya. Apa yang dapat Arni lakukan?",
    pilihan: [
      { huruf: "A", teks: "Mencicil menyelesaikan laporan akhir bulan, mempelajari teknologi terbaru yang digunakan oleh perusahaan, dan memanfaatkan fasilitas kantor dengan baik", poin: 2 },
      { huruf: "B", teks: "Disiplin hadir di town hall, berani memberikan gagasan yang inovatif, dan selalu berkoodinasi dengan atasan", poin: 3 },
      { huruf: "C", teks: "Rutin mengikutin perkembangan informasi internal, menjaga relasi dengan rekan kerja terutama atasan, dan rutin berlatih menggunakan teknologi yang diperkenalkan oleh perusahaan", poin: 5 },
      { huruf: "D", teks: "Mempelajari secara mandiri sistem teknologi yang biasa digunakan untuk menyelesaikan tugas kerjanya dan meminta tolong untuk diajari oleh anggota timnya jika ada yang belum ia paham", poin: 4 },
      { huruf: "E", teks: "Mempelajari visi dan misi perusahaan, mengenal budaya kerjanya, dan bersikap ramah dengan sesama rekan kerja", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 3, C = 5, D = 4, E = 1<br> Tuntutan untuk terus menguasai teknologi terbaru perlu diatasi dengan berbagai cara. Arni dapat rutin mengikuti perkembangan informasi internal, menjaga relasi dengan rekan kerja, dan rutin menggunakan teknologi yang diperkenalkan oleh perusahaan."
  },

  // ─── Soal 89 ───
  {
    id: 89, kategori: "TKP",
    teks: "Kegiatan mendaki gunung menjadi hobi yang menarik bagi komunitas pencinta alam walaupun banyak risiko yang perlu dihadapi. Kabar hilangnya pendaki membuat tim penyelamatan harus ahli dan hati-hati dalam menjalankan tugasnya, apalagi jika medan area gunungnya tidak mudah. Bagaimana supaya tim penyelamat dapat bertugas tanpa ada bahaya yang menimpanya?",
    pilihan: [
      { huruf: "A", teks: "Memberikan kesempatan kepada beberapa anggota kelompok pendaki untuk turut serta dalam proses pencarian pendaki yang hilang", poin: 1 },
      { huruf: "B", teks: "Memastikan alat yang dibawa untuk proses penyelamatan dan evakuasi sudah lengkap dan memenuhi standar nasional", poin: 3 },
      { huruf: "C", teks: "Menyosialisasikan di media sosial kepada para pendaki gunung untuk selalu berhati-hati dan waspada saat pendakian dan selalu menjaga kesehatan", poin: 2 },
      { huruf: "D", teks: "Berkoordinasi dengan petugas di tempat wisata gunung dan mematuhi standar operasional prosedur penyelamatan", poin: 4 },
      { huruf: "E", teks: "Mematuhi seluruh peraturan yang berlaku di daerah gunung dan misi penyelamatan, melatih fisik secara rutin, dan menjaga kesehatan tim", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 1, B = 3, C = 2, D = 4, E = 5<br> Setiap anggota tim penyelamat yang bertugas perlu mematuhi seluruh peraturan yang berlaku di daerah gunung dan misi penyelamatan, melatih fisik secara rutin, dan menjaga kesehatan tim."
  },

  // ─── Soal 90 ───
  {
    id: 90, kategori: "TKP",
    teks: "Dimas merupakan juara tinju di kelasnya yang sudah mengglobal. Ia ditawarkan untuk mengikuti program acara yang bertujuan memperkenalkan kekuatan fisik dari berbagai profesi untuk berkompetisi mendapatkan hadiah. Bagaimana ia harus bersikap dalam acara tersebut?",
    pilihan: [
      { huruf: "A", teks: "Berfokus pada mendapatkan hadiah sebagai motivasi utama mengisi program acara tersebut dengan tidak mengabaikan kesehatannya sendiri", poin: 3 },
      { huruf: "B", teks: "Mengikuti kompetisi dengan upaya maksimal, suportif, dan meminimalkan terjadinya cedera pada dirinya, tim, dan lawannya", poin: 5 },
      { huruf: "C", teks: "Memaksimalkan potensi diri untuk berkompetisi dengan berbagai jenis lawan dan tetap menjaga kekompakan dengan anggota timnya", poin: 4 },
      { huruf: "D", teks: "Memberitahukan jadwal tayang program tersebut ke orang-orang terdekat dan rutin mempromosikan akun media sosial pribadi", poin: 1 },
      { huruf: "E", teks: "Memahami alur industri hiburan, bertanya pada selebritas yang sudah berpengalaman, dan melatih fisiknya sebagai persiapan mengisi acara tersebut", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 4, D = 1, E = 2<br> Tujuan acara tersebut untuk memperkenalkan kekuatan fisik dan berkompetisi. Dimas harus mengikuti kompetisi dengan upaya maksimal, suportif, dan meminimalkan terjadinya pada cedera pada dirinya, tim dan lawannya."
  },

  // ─── Soal 91 ───
  {
    id: 91, kategori: "TKP",
    teks: "Sekelompok mahasiswa dari berbagai universitas berkompetisi dalam bidang akademik dan dibentuk sebagai tim sesuai dengan asal universitasnya masing-masing. Bagaimana supaya tim berpotensi menang?",
    pilihan: [
      { huruf: "A", teks: "Mendiskusikan strategi, memahami kelebihan dan kekurangan masing-masing anggota tim, mempercayakan kemampuan anggota tim, dan saling mendukung", poin: 5 },
      { huruf: "B", teks: "Mengajak penonton acara tersebut untuk turut serta mencoba menjawab soal-soal kompetisi menggunakan sebuah aplikasi yang juga akan mendapatkan hadiah <em>doorprize</em>", poin: 1 },
      { huruf: "C", teks: "Mengadakan sesi wawancara masing-masing peserta kompetisi dengan tidak menjatuhkan lawan, tetapi berfokus pada pendapat dan kemampuan masing-masing", poin: 4 },
      { huruf: "D", teks: "Promotor acara memastikan pembuatan soal-soal untuk kompetisi tersebut tidak bocor dan menyediakan area kompetisi yang nyaman", poin: 2 },
      { huruf: "E", teks: "Mengikutsertakan dosen masing-masing universitas sebagai juri kompetisi tersebut, bersikap objektif dan transparan", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 4, D = 2, E = 3<br> Cara paling tepat untuk memenangkan kompetisi akademik adalah timnya perlu mendiskusikan strategi, memahami kelebihan dan kekurangan masing-masing anggota, mempercayakan kemampuan anggota tim, dan saling mendukung."
  },

  // ─── Soal 92 ───
  {
    id: 92, kategori: "TKP",
    teks: "Burhan merupakan seorang dosen mata kuliah manajemen data yang memiliki tanggung jawab untuk memberikan pengetahuan tentang penggunaan sistem untuk mengolah dan menganalisis data. Supaya mahasiswa dapat memahami maksud dari tujuan mata kuliah tersebut, ia dapat...",
    pilihan: [
      { huruf: "A", teks: "Mengadakan ujian praktik langsung di pertengahan dan akhir semester untuk menguji kemampuan mahasiswa dalam memahami materi mata kuliah tersebut", poin: 2 },
      { huruf: "B", teks: "Mengajak mahasiswa untuk mempraktikkan bersama penggunaan sistem pengolah data sambil dijelaskan sesuai dengan tujuan kompentensi masing-masing materinya", poin: 5 },
      { huruf: "C", teks: "Memberikan modul yang dapat dibaca dan dipelajari otodidak untuk mendukung keadilan semua mahasiswa kelasnya dapat mempelajarinya tanpa khawatir ada yang tertinggal", poin: 3 },
      { huruf: "D", teks: "Lebih sering mengadakan perkuliahan secara daring supaya saat menerangkan materi bisa dibarengi dengan mahasiswa mencoba sendiri cara penggunaannya di laptop masing-masing", poin: 4 },
      { huruf: "E", teks: "Menyarankan mahasiswa untuk membentuk kelompoknya sendiri dan ikut pelatihan yang mereka pilih secara mandiri sesuai dengan materi tiap minggunya", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 2, B = 5, C = 3, D = 4, E = 1<br> Mata kuliah tersebut lebih cocok jika dosennya mengajak mahasiswa untuk mempraktikkan bersama penggunaan sistem pengolah data sambil dijelaskan sesuai dengan tujuan kompetensi masing-masing materinya."
  },

  // ─── Soal 93 ───
  {
    id: 93, kategori: "TKP",
    teks: "Tempat wisata masih menjadi tempat yang dituju oleh masyarakat untuk berlibur menghilangkan penat atau mendapatkan berbagai inspirasi baru, baik di dalam gedung maupun alam. Pembukaan tempat wisata alam perlu keterlibatan seorang konsultan lingkungan yang berperan untuk meminimalkan kejadian yang tidak diinginkan terjadi di tempat wisata tersebut. Apa saja yang dapat dilakukan oleh seorang konsultan di lingkungan terkait perencanaan pembukaan tempat wisata?",
    pilihan: [
      { huruf: "A", teks: "Me-<em>monitoring</em> dan mengevaluasi rencana pembangunan tempat wisata tersebut sesuai dengan kesepakatan pemilik tempat wisata", poin: 2 },
      { huruf: "B", teks: "Identifikasi faktor risiko sesuai dengan ciri khas daerah tersebut, mencari sumber referensi valid untuk menentukan alternatif solusinya, dan memantau aplikasinya hingga selesai", poin: 5 },
      { huruf: "C", teks: "Mencari referensi dari sumber yang valid untuk membuat materi presentasi yang akan dijelaskan kepada pemilik tempat wisata dan mempersuasi untuk mendapatkan persetujuan", poin: 4 },
      { huruf: "D", teks: "Berkoordinasi dengan berbagai <em>stakeholder</em> untuk memenuhi kebutuhan logistik di tempat wisata yang akan dibangun dan mengendalikan media sosial supaya banyak pengunjung yang tertarik datang", poin: 3 },
      { huruf: "E", teks: "Mengadakan <em>talkshow</em> yang menceritakan asal usul dan alasan pembangunan tempat wisata dan mengajak masyarakat setempat untuk turut membangun dan menjaga tempat wisata tersebut", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 2, B = 5, C = 4, D = 3, E = 1<br> Konsultan lingkungan dapat fokus untuk mengerjakan bagian tugasnya dengan mengidentifikasi faktor risiko sesuai dengan ciri khas daerah tersebut, mencari sumber referensi valid untuk menentukan alternatif solusinya, dan memantau aplikasinya hingga selesai."
  },

  // ─── Soal 94 ───
  {
    id: 94, kategori: "TKP",
    teks: "Anda akan <em>resign</em> dari tempat kerja Anda saat ini karena sudah mendapatkan pekerjaan di tempat yang baru. Pengganti untuk posisi kerja Anda sudah ada dan akan mulai bekerja di hari Anda <em>resign</em>, maka Anda...",
    pilihan: [
      { huruf: "A", teks: "Melakukan serah terima pekerjaan sampai pegawai yang menggantikan Anda paham dengan tugasnya dan tanggung jawabnya", poin: 5 },
      { huruf: "B", teks: "Menyapa dengan ramah dan mengobrol seputar pengalaman kerja di tempat lamanya", poin: 4 },
      { huruf: "C", teks: "Memperkenalkan ke rekan-rekan kerja, membicarakan budaya kerja di kantor ini, dan menanyakan mengenai pengalaman kerjanya", poin: 3 },
      { huruf: "D", teks: "Memintanya untuk membantu Anda membereskan barang-barang pribadi Anda yang masih ada di meja kerja", poin: 1 },
      { huruf: "E", teks: "Mendelegasikan menyusun dokumen kerja kepadanya dan menawarkan bantuan jika ia membutuhkannya", poin: 2 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 4, C = 3, D = 1, E = 2<br> Serah terima pekerjaan sudah biasa dilakukan oleh pegawai lama ke pegawai baru sambil memberikan seluruh data dan dokumen agar diambil alih oleh pegawai baru serta menjelaskan tugas dan tanggungjawabnya."
  },

  // ─── Soal 95 ───
  {
    id: 95, kategori: "TKP",
    teks: "Aldo merangkap beberapa pekerjaan. Saat ini ia bekerja di sebuah perseroan terbatas sebagai produser musik dan di saat yang bersamaan agensinya juga menggunakan ruang di perseroan terbatas tersebut untuk berdiskusi mengenai target yang harus dicapai Aldo sebagai seorang musisi juga. Bagaimana cara Aldo bekerja supaya semua tugasnya dilakukan dengan baik?",
    pilihan: [
      { huruf: "A", teks: "Bernegosiasi dengan direktur untuk lebih fokus pada pekerjaannya sebagai seorang musisi karena berkaitan dengan target peningkatan profit", poin: 1 },
      { huruf: "B", teks: "Menepati janji setiap kali bertemu dengan <em>stakeholder, follow up</em> langsung kepada direktur setiap minggunya, dan mendelegasikan beberapa pekerjaannya ke rekan kerja yang duduk di sebelahnya", poin: 3 },
      { huruf: "C", teks: "Melakukan perencanaan dengan memecah beberapa kegiatan tersebut menjadi detail yang lebih kecil dan ditentukan masing-masing waktunya untuk diselesaikan tepat waktu", poin: 5 },
      { huruf: "D", teks: "Selalu <em>meeting</em> tepat waktu sesuai dengan jadwal yang sudah ditentukan, memastikan catatan <em>meeting</em> tidak ada yang terlewat, dan datang ke kantor juga tepat waktu", poin: 4 },
      { huruf: "E", teks: "Meminta bantuan manajer musisinya untuk mengerjakan sebagian pekerjaannya sebagai musisi dan menjadi rekan berdiskusi seputar musk", poin: 2 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 3, C = 5, D = 4, E = 2<br> Karena Aldo memiliki lebih dari satu pekerjaan yang tidak bisa ia tinggal, maka ia harus memecah beberapa kegiatan menjadi lebih detail dan lebih kecil dan ditentukan masing-masing waktunya untuk diselesaikan tepat waktu."
  },

  // ─── Soal 96 ───
  {
    id: 96, kategori: "TKP",
    teks: "Mudik menjadi budaya setiap kali merayakan hari raya bersama dengan keluarga di kampung halaman. Namun, ada beberapa tempat yang menjadi daerah rawan bahaya yang membuat beberapa pemudik merasa khawatir terhadap keamanan perjalanannya. Bagaimana inisiatif Kapolri terkait hal tersebut?",
    pilihan: [
      { huruf: "A", teks: "Bekerja sama dengan media untuk memberitakan kondisi jalan selama perjalanan mudik dan melakukan rekayasa lalu lintas", poin: 4 },
      { huruf: "B", teks: "Menyediakan akses pelayanan kesehatan darurat yang ada di beberapa <em>rest area</em> yang dijaga oleh beberapa orang polisi", poin: 2 },
      { huruf: "C", teks: "Menyediakan poso-posko mudik yang dapat menjadi tempat untuk melaporkan adanya tindak kriminal atau menjadi tempat istirahat sementara selama perjalanan mudik", poin: 3 },
      { huruf: "D", teks: "Mensosialisasikan bahwa masyarakat yang ingin dikawal di hari mudiknya yang melewati daerah rawan bahaya bisa datang ke pos polri yang sudah disediakan", poin: 5 },
      { huruf: "E", teks: "Memberikan surat pemberitahuan di masing-masing kelurahan untuk tetap waspada selama perjalanan mudik", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 2, C = 3, D = 5, E = 1<br> Demi keamanan perjalanan mudik, polisi dapat mensosialisasikan bahwa masyarakat yang ingin dikawal di hari mudiknya yang melewati daerah rawan bisa datang ke pos polisi yang sudah disediakan "
  },

  // ─── Soal 97 ───
  {
    id: 97, kategori: "TKP",
    teks: "Anda adalah ketua KPPS di sebuah TPS pada hari pemilu. Selama proses penghitungan suara, seorang saksi dari salah satu kandidat bertindak tidak tertib dengan mengganggu proses penghitungan dan melontarkan tuduhan kecurangan tanpa bukti. Hal ini memicu ketegangan di antara saksi lainnya dan membuat suasana TPS menjadi kurang kondusif. Apa yang akan Anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Saya akan meminta saksi tersebut untuk meninggalkan TPS agar situasi kembali kondusif tanpa berdiskusi lebih jauh", poin: 2 },
      { huruf: "B", teks: "Saya akan meminta seluruh saksi untuk tenang dan menghentikan sementara penghitungan suara hingga saksi tersebut dapat ditenangkan", poin: 3 },
      { huruf: "C", teks: "Saya akan menjelaskan kepada saksi tersebut bahwa tuduhan tanpa bukti tidak dapat diterima dan mengingatkan prosedur keberatan secara resmi", poin: 5 },
      { huruf: "D", teks: "Saya akan meminta bantuan pihak keamanan TPS untuk menenangkan saksi tersebut", poin: 4 },
      { huruf: "E", teks: "Saya akan menunda proses penghitungan suara di lain hari agar menghindari perselisihan yang tidak diinginkan", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 3, C = 5, D = 4, E = 1<br> Opsi yang paling tepat adalah C karena pada sejatinya tuduhan tanpa bukti tidak dapat diterima serta jika ada keberatan harus mengikuti prosedur resmi. "
  },

  // ─── Soal 98 ───
  {
    id: 98, kategori: "TKP",
    teks: "Rini ingin mendirikan sebuah perseroan terbatas minuman serbuk khusus untuk minuman yang biasa dikonsumsi oleh para atlet. Ia ingin memeberikan produk yang berkualitas terbaik yang aman dikonsumsi oleh para pembeli dan dipercaya oleh para kliennya. Ia harus...",
    pilihan: [
      { huruf: "A", teks: "Menjaga hubungan yang baik dengan <em>stakeholder</em> yang menjadi vendor untuk penyediaan <em>raw material</em>, ATK, dan kebutuhan lainnya sesuai dengan yang dibutuhkan oleh pabrik dan perseroan terbatas", poin: 2 },
      { huruf: "B", teks: "Merekrut seseorang sebagai <em>quality assurance</em> yang mengerti untuk mengimplementasikan cara produksi produk minuman yang aman sesuai dengan standar internasional dan nasional", poin: 5 },
      { huruf: "C", teks: "Memastikan pegawai yang menjabat sebagal <em>general affair</em> bekerja sesuai dengan tanggung jawabnya yang dapat dilihat dari kemampuannya menjaga keamanan dan perawatan gedung", poin: 3 },
      { huruf: "D", teks: "Berkolaborasi dengan lembaga yang dapat melakukan penelitian dan mengukur kandungan zat gizi pada masing-masing produk yang akan diproduksi", poin: 4 },
      { huruf: "E", teks: "Melakukan meeting rutin dengan klien prospek bersama dengan tim marketing dan berusaha sampai adanya perjanjian kerja sama dengan klien yang memiliki <em>brand</em> untuk bisnisnya", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 2, B = 5, C = 3, D = 4, E = 1 <br> Soal tersebut berfokus pada ingin menjaga kualitas produk yang aman dan terpercaya, sehingga tindakan yang tepat adalah merekrut seseorang sebagai quality assurance yang mengerti untuk mengimplementasikan cara produksi minuman yang aman dan sesuai standar internasional dan nasional."
  },

  // ─── Soal 99 ───
  {
    id: 99, kategori: "TKP",
    teks: "Anda memiliki sebuah yayasan yang bergerak di bidang pendidikan. Namun, yayasan Anda sedang mengalami krisis keuangan karena beberapa siswa didikan belum mampu melunasi pembayaran sekolahnya. Apa sikap yang akan Anda ambil?",
    pilihan: [
      { huruf: "A", teks: "Membuat kebijakan yang membolehkan siswa untuk mencicil pembayaran sekolah", poin: 4 },
      { huruf: "B", teks: "Mengadakan rapat bersama dengan kepala sekolah, guru, dan wali murid untuk mencari solusi", poin: 3 },
      { huruf: "C", teks: "Mengidentifikasi apa saja penyebab siswa didikan kesulitan membayar uang pendidikan", poin: 2 },
      { huruf: "D", teks: "Mengevaluasi cara mengajar para guru di kelas yang paling banyak siswa yang belum melunasi pembayarannya", poin: 1 },
      { huruf: "E", teks: "Mencari donatur yang dapat memberikan beasiswa dan keringanan biaya pendidikan ke yayasan anda", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 4, B = 3, C = 2, D = 1, E = 5<br> Yayasan merupakan badan hukum yang bergerak di bidang sosial dan kemanusiaan dapat menerima pemasukan dari berbagai sumber. Dalam konteks soal tersebut untuk meringkankan beban siswa adalah mencari donatur yang dapat memberikan beasiswa dan keringanan biaya pendidikan ke yayasan Anda."
  },

  // ─── Soal 100 ───
  {
    id: 100, kategori: "TKP",
    teks: "Beberapa pelanggan loyal mengungkapkan cukup kecewa dengan pelayanan customer sevice yang tidak menghitung beberapa struk belanja sebagai syarat mendapatkan poin haidah karena sudah banyak tinta yang luntur sehingga sulit terbaca. Jika Anda sebaga customer service, maka Anda...",
    pilihan: [
      { huruf: "A", teks: "Bekerja sama dengan tim untuk teliti menghitung poin hadiah dari semua persyaratan yang sudah dikirimkan oleh pelanggan dan mendokumentasikannya ke dalam sistem aplikasi yang sudah disediakan", poin: 4 },
      { huruf: "B", teks: "Mengarahkan mereka ke chat cutomer service untuk follow up secara berkala jika mereka rutin membeli lagi produk yang dapat dihitung sebagai poin hadiah dan untuk mendapatkan update informasi lainnya", poin: 3 },
      { huruf: "C", teks: "Melakukan tracking produk yang dikomplain oleh beberapa pelanggan, memastikan bahwa perhitungan poin hadiah sudah selesai, dan tetap berusaha memberikan pelayanan yang ramah", poin: 1 },
      { huruf: "D", teks: "Memberikan saran untuk melaminating dan/atau memfoto struk-sturk tersebut lalu dikirimkan ke nomor chat customer service yang tetap legal terhitung poin atas persetujuan atasan", poin: 5 },
      { huruf: "E", teks: "Meminta maaf atas ketidaknyamanan yang dirasakan oleh beberapa pelanggan loyal, meminta arahan dari atasan untuk memberikan kompensasi, dan tetap mempertimbangkan mereka sebagai calon penerima poin hadiah", poin: 2 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 3, C = 1, D = 5, E = 2<br> Persyaratan untuk mendapatkan poin hadiah sudah pasti tercantum di berbagai kanal resmi perseroan terbatas dan pelanggan wajib mebaca dengan teliti. Oleh karena itu, respon customer service dapat tetap berusaha melayaninya dengan memberikan saran untuk melaminating dan/atau memfoto struk-struk tersebut lalu dikirimkan ke nomor chat customer service yang tetap terhitung poin tersebut. "
  },

  // ─── Soal 101 ───
  {
    id: 101, kategori: "TKP",
    teks: "Fahri bekerja di suatu perseroan terbatas produk susu. Suatu hari ia menerima komplain dai pelanggan karena produk susu yang dikirimkan sudah berubah rasa, menggumpal, dan berubah warna sehingga fahri perlu untuk...",
    pilihan: [
      { huruf: "A", teks: "Meminta pelanggan untuk mengembalikan seluruh produk yang kadaluarsa tersebut ke alamat kantor yang diberikan", poin: 1 },
      { huruf: "B", teks: "Meminta pelanggan tersebut untuk menjelaskan kronologinya dari mulai membeli produk hingga membuka produk yang sudah diterima tersebut", poin: 3 },
      { huruf: "C", teks: "Mencatat komplain pelanggan tersebut dan mendokumentasikan ke dalam sistem yang terintegrasi dengan semua divisi", poin: 2 },
      { huruf: "D", teks: "Tracikng produk yang sudah kadaluarsa tersebut lalu melaporkannya pada staf yang bertanggung jawab", poin: 4 },
      { huruf: "E", teks: "Meminta maaf dan segera mengganti produk susu tersebut ke alamat pelanggan tersebut", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A= 1, B = 3, C = 2, D = 4, E = 5<br> Dalam konteks soal tersebut, tindakan yang paling tepat adalah meminta maaf dan segera mengganti produk susu tersebut ke alamat pelanggan lalu melaporkannya pada staf yang bertanggung jawab."
  },

  // ─── Soal 102 ───
  {
    id: 102, kategori: "TKP",
    teks: "Ada pelanggan yang mendatangi Dita sebagai seorang supervisor. Ia menyayangkan pelayanan dari seorang sales yang menjual produk kepadanya dengan cara memaksa dan ternyata produk hampir kadaluwarsa. Pelanggan tersebut mengancam akan menyebarkannya ke media jika tidak ada respon dari komplainnya. Apa yang harus Dita lakukan?",
    pilihan: [
      { huruf: "A", teks: "Mengajaknya untuk duduk bersama dan menjelaskan kronologinya hingga pelanggan tersebut sepakat melakukan pembelian pada sales tersebut, kemudian ia harus meminta maaf mewakili sales tersebut", poin: 2 },
      { huruf: "B", teks: "Meminta maaf atas ketidaknyamanan yang terjadi pada pelanggan tersebut dan menjanjikan akan mengirimnya produk pengganti ke alamat rumah pelanggan tersebut", poin: 3 },
      { huruf: "C", teks: "Bersama dengan sales yang dimaksud untuk menemui pelanggan tersebut dan meminta maaf bersama, serta menggantikan produk yang kadaluwarsa dan memberikan mercandise sebagai bentuk kompensasi", poin: 5 },
      { huruf: "D", teks: "Melaporkan kejadian tersebut ke manajer dan meminta sales yang bertanggung jawab untuk menuliskan kronologi kejadian tersebut sebagai bentuk permintaan maaf kepada perseroan terbatas", poin: 1 },
      { huruf: "E", teks: "Memastikan HRD untuk merekrut sales yang bertanggung jawab dan mengevaluasi lagi kebijakan dan aturan kerja supaya tidak ada lagi pemaksaan untuk membeli suatu produk pada calon pelanggan", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 3, C = 5, D = 1, E = 4<br> Tidakan yang paling tepat adalah Dita bersama sales yang dimaksud untuk menemui pelanggan tersebut dan meminta maaf bersama, serta mengganti produk yang kadaluwarsa dan memberikan merchandise sebagai bentuk kompensasi."
  },

  // ─── Soal 103 ───
  {
    id: 103, kategori: "TKP",
    teks: "Sebuah proyek penelitian kesehatan yang dipimpin oleh Irma sedang menemui hambatan. Mereka mendapati komentar dari warga setempat yang berasumsi adanya campur tangan politik dan penggunaan data ilegal. Bagaimana tim Irma meyakinkan warga setempat untuk dapat andil dalam proyek penelitian tersebut?",
    pilihan: [
      { huruf: "A", teks: "Menemui tokoh masyarakat di daerah tersebut dan mengajak kader untuk membantu meyakinkan warga dengan pendekatan empati dan rasional", poin: 5 },
      { huruf: "B", teks: "Memberikan kesempatan kepada warga setempat untuk dapat memilih atau menolak menjadi responden penelitian", poin: 2 },
      { huruf: "C", teks: "Mengajak beberapa warga setempat untuk berdiskusi dengan peneliti dan tim untuk memahami alur dan tujuan penelitian", poin: 4 },
      { huruf: "D", teks: "Mempertimbangkan untuk memilih wilayah lain sebagai tempat penelitian yang bisa kooperatif dalam pelaksanaan proyek penelitian", poin: 3 },
      { huruf: "E", teks: "Mengadakan penyuluhan untuk memberikan edukasi kesehatan dengan target warga setempat atas izin ketua RT dan ketua RW", poin: 1 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 2, C = 4, D = 3, E = 1<br> Menjadi peneliti suatu proyek di suatu daerah memang dapat menemui berbagai tantangan, salah satunya adalah penolakan warga setempat. Dalam konteks soal di atas, Irma dan timnya perlu mengajak tokoh masyarakat di daerah tersebut dan mengajak kader untuk membantunya meyakinkan warga dengan pendekatan empati dan rasional."
  },

  // ─── Soal 104 ───
  {
    id: 104, kategori: "TKP",
    teks: "Di perseroan terbatas tempat anda kerja terjadi perubahan struktur organisasi yang membuat anda berpindah posisi dan berganti tim. Saat ini tim anda terdiri dari berbagai lulusan pendidikan dan karakter yang sama sekali berbeda dengan tim anda sebelumnya. Bagaimana sikap anda?",
    pilihan: [
      { huruf: "A", teks: "Membuat <em>to do list</em> atau <em>done list</em> yang dikerjakan setiap minggunya dan aktif dalam diskusi tim", poin: 4 },
      { huruf: "B", teks: "Mengecek semua riwayat pekerjaan anggota tim yang ada di media sosial profesional dan menjadikan motivasi untuk bekerja lebih giat lagi", poin: 1 },
      { huruf: "C", teks: "Bergabung di grub chat tim, aktif untuk berkomunikasi terkait dengan pekerjaan dan menjaga kebersihan meja kerja sendiri", poin: 3 },
      { huruf: "D", teks: "Membaca seluruh peraturan terkait dengan posisi kerja anda, menjaga komunikasi dengan tim, dan bersedia untuk saling membantu", poin: 5 },
      { huruf: "E", teks: "Fokus pada menyelesaikan pekerjaan sesuai dengan tenggat waktu yang sudah diberikan oleh atasan", poin: 2 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 1, C = 3, D = 5, E = 2<br> Cepat menyesuaikan diri dengan rekan kerja membutuhkan kemapuan khusus. Oleh karena itu, ketika pindah posisi kerja dan pindah tim, Anda perlu membaca seluruh peraturan terkait, menjaga komunikasi dengan tim, dan bersedia untuk saling membantu."
  },

  // ─── Soal 105 ───
  {
    id: 105, kategori: "TKP",
    teks: "Anda ditawari untuk bergabung di tim wilayah domisili anda untuk mengadakan survei dan mengikuti pelatihan dahulu selama beberapa hari sebelum turun lapangan. Bagaimana cara anda berkontribusi dalam tim dan proyek survei tersebut?",
    pilihan: [
      { huruf: "A", teks: "Berusaha untuk follow up dengan koordinator lapangan dan merevisi penginputan data yang sekiranya belum sesuai atau ada pertanyaan/pengamatan yang terlewat saat proses survei", poin: 2 },
      { huruf: "B", teks: "Mematuhi peraturan kerja yang berlaku, memahami budaya yang ada di lingkungan kantor, dan memastikan selalu berpakaian rapih saat turun lapangan maupun saat di kantor", poin: 3 },
      { huruf: "C", teks: "Aktif bertanya saat pelatihan, proaktif di dalam tim, dan bisa independen untuk menginput hasil survei ke dalam sistem yang sudah diajarkan dan disediakan", poin:4 },
      { huruf: "D", teks: "Membaca dengan teliti kualifikasi, kewajiban, dan hak yang didapatkan selama perekrutan, pelatihan, dan turun lapangan hingga batas waktu kontrak telah selesai", poin: 1 },
      { huruf: "E", teks: "Mengikuti pelatihan dengan disiplin, bersikap ramah dengan semua orang yang terlibat dalam survei terutama dengan anggota tim, dan menjalankan tugas sesuai dengan aturan yang ditentukan", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 2, B = 3, C = 4 ,D = 1, E = 5<br> Cara berkontribusi dengan tim Anda dan proyek survei tersebut adalah dengan mengikuti pelatihan dengan disiplin, bersikap ramah dengan semua orang yang terlibat, dan menjalankan tugas sesuai aturan. "
  },

  // ─── Soal 106 ───
  {
    id: 106, kategori: "TKP",
    teks: "Ada suatu mata kuliah yang memberikan kesempatan kepada mahasiswanya untuk berpikir sistem menyelesaikan suatu masalah yang ada di salah satu tempat kerja mahasiswa untuk mencari akar masalah dan solusinya. Tugas tersebut dibagi dalam beberapa kelompok yang dalam satu kelompok memiliki latar belakang profesi dan bidang yang berbeda. Bagaimana cara menentukan keputusan untuk mengambil jenis masalah yang dijadikan tugas dalam kelompok tersebut?",
    pilihan: [
      { huruf: "A", teks: "Penanggung jawab mata kuliah membagi nama-nama mahasiswa yang ada di kelas mata kuliah tersebut dengan jumlah yang sesuai lalu mengawasi proses diskusi yang berlangung saat jam kelas", poin: 2 },
      { huruf: "B", teks: "Perwakilan kelompok menuliskan namanya di kertas lalu diundi oleh penanggung jawab mata kuliah untuk menentukan urutan presentasi hasil tugas tersebut di jadwal bulan depan", poin: 3 },
      { huruf: "C", teks: "Meminta penanggun jawab mata kuliah untuk menentukan lembaga mana yang akan dicarikan akar masalah dan solusinya dan mengambil suara terbanyak dari para mahasiswa", poin: 4 },
      { huruf: "D", teks: "Masing-masing memberikan satu jenis masalah sistematis di tempat kerjanya dan mengambil suara terbanyak sebagai keputusan bahwa pilihan tersebut dapat diselesaikan sesuai dengan tujuan tugasnya", poin: 5 },
      { huruf: "E", teks: "Memastikan dosen masuk ke kelas mengajar tepat waktu dan materi yang disampaikan untuk mengerjakan tugas kelompok tersebut sudah disampaikan dengan jelas", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 3, C = 4, D = 5, E = 1<br> Penanggung jawab membagi sejumlah mahasiswa dalam kelas menjadi beberapa kelompok. Berarti untuk mengambil keputusan mengambil jenis masalah yang dijadikan tugas dalam kelompok tersebut dari masing-masing kelompok adalah masing-masing memberikan satu jenis masalah sistematis di tempat kerjanya dan mengambil suara terbanyak sebagai keputusan bahwa pilihan tersebut dapat diselesaikan sesuai dengan tujuan tugasnya."
  },

  // ─── Soal 107 ───
  {
    id: 107, kategori: "TKP",
    teks: "Dimas sedang menyusun tugas akhir sebagai syarat kelulusan. Saat ini ia sedang membutuhkan bimbingan untuk menguasai penggunaan suatu apilkasi yang akan ia gunakan untuk analisis data. Ia mengharapkan dapat bimbingan dengan harga terjangkau, maka ia...",
    pilihan: [
      { huruf: "A", teks: "Mencari hingga dapat aplikasi gratis yang dapat digunakan dan mempelajarinya secara otodidak sebelum digunakan untuk analisis data", poin: 3 },
      { huruf: "B", teks: "Mempelajari definisi, jenis, dan cara analisis data dari materi bacaan atau tutorial yang ia tonton di media sosial", poin: 2 },
      { huruf: "C", teks: "Menghubungi beberapa koleganya yang ahli dalam penggunaan aplikasi tersebut yang dapat membimbing dan bernegosiasi mengenai harga jasanya", poin: 5 },
      { huruf: "D", teks: "Mengumpulkan puluhan sumber referensi yang dapat menjelaskan hasil dari analisis datanya", poin: 1 },
      { huruf: "E", teks: "Meminta bantuan rekannya untuk menjelaskan mengenai cara analisis data dari berbagai jenis aplikasi kemudian menentukan aplikasi mana yang akan digunakan", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 2, C = 5, D = 1, E = 4<br> Karena dimas butuh dibimbing untuk menggunakan aplikasi yang ia butuhkan dengan harga terjangkau maka ia dapat Menghubungi beberapa koleganya yang ahli dalam penggunaan aplikasi tersebut yang dapat membimbing dan bernegosiasi mengenai harga jasanya"
  },

  // ─── Soal 108 ───
  {
    id: 108, kategori: "TKP",
    teks: "Anda memiliki sebuah komunitas yang perhatian terhadap sampah dan pengelolaannya untuk membantu mengurangi jumlah sampah di Indonesia. Banyak sungai dan tempat alam lainnya yang tercemar sampah. Tentunya pembersihan dan daur ulang sampah tidak dapat dilakukan oleh komunitas Anda saja, tetapi perlu bantuan orang banyak. Apa yang akan komunitas Anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Mengunjungi beberapa tempat pembuangan sampah dan mengunjungi tempat-tempat pengelolaan sampah yang menjadi nilai guna", poin: 1 },
      { huruf: "B", teks: "Mengadakan pelatihan untuk pengelolaan sampah yang dapat memberikan nilai ekonomi bagi masyarakat", poin: 4 },
      { huruf: "C", teks: "Menyosialisasikan pada masyarakat untuk membeli kebutuhan rumah tangga dalam jumlah besar, bukan per <em>sachet</em>", poin: 3 },
      { huruf: "D", teks: "Mempromosikan kegiatan komunitas Anda di media sosial dan mengajak masyarakat untuk turut serta dalam kegiatan tersebut", poin: 5 },
      { huruf: "E", teks: "Membuat surat terbuka untuk presiden supaya dapat dilakukan upaya pengelolaan sampah yang menumpuk di beberapa wilayah di Indonesia", poin: 2 }
    ],
    kunci: "D",
    pembahasan: "A = 1, B = 4, C = 3, D = 5, E = 2 <br> Untuk membersihkan sampah yang menumpuk di beberapa daerah dan mendaurnya menjadi nilai guna maka anda memerlukan bantuan stakeholder. Opsi jawaban yang tepat adalah mempromosikan kegiatan komunitas Anda di media sosial dan mengajak masyarakat untuk turut serta dalam kegiatan tersebut"
  },

  // ─── Soal 109 ───
  {
    id: 109, kategori: "TKP",
    teks: "Fikri merupakan seorang kepala produksi di suatu pabrik. Ia saat ini sedang mempersiapkan acara pernikahannya dan cuckup membuatnya stres. Lalu ada suatu waktu ia menerima laporan bahwa ada produk <em>reject</em> karena kesalahan operator produksi yang membuat pelanggan kecewa. Tindakan apa yang harus Fikri lakukan?",
    pilihan: [
      { huruf: "A", teks: "Mempresentasikan berbagai jenis produk yang diproduksi oleh pabrik tersebut kepada para pelanggan prospek dan meyakinkan mereka bahwa kualitas produk yang dihasilkan sesuai standar nasional dan internasional", poin: 2 },
      { huruf: "B", teks: "Memanggil supervisor-supervisor yang bertugas di area produksi untuk berdiskusi mencari akar masalahnya dan cara untuk mengembalikan kepercayaan pelanggan lagi dan komunikasi asertif", poin: 5 },
      { huruf: "C", teks: "Mencatat seluruh kebutuhan untuk kegiatan produksi dan menganalisis antara modal dan profit yang didapatkan dalam periode waktu tertentu", poin: 1 },
      { huruf: "D", teks: "Memahami setiap tahapan produksi dan selalu mengingatkan operator dan supervisor di area produksi untuk terus bekerja sesuai dengan standar prosedur operasional yang berlaku", poin: 4 },
      { huruf: "E", teks: "Memastikan dahulu adanya laporan tersebut kemudian berdiskusi dengan top management dengan analisis faktor dan risiko dari perencanaan produksi untuk berikutnya", poin: 3 }
    ],
    kunci: "B",
    pembahasan: "A = 2, B = 5, C = 1, D = 4, E = 3<br> Dengan konteks soal tersebut untuk mengatasi masalah yang sedang dihadapi Fikri sebagai kepala produksi adalah memanggil supervisor-supervisor yang bertugas di area produksi untuk berdiskusi mencari akar masalahnya dan cara untuk mengembalikan kepercayaan pelanggan lagi dan komunikasi asertif."
  },

  // ─── Soal 110 ───
  {
    id: 110, kategori: "TKP",
    teks: "Pembangunan infrastruktur desa perlu tetap menjadi prioritas dalam penggunaan dana desa. Ada beberapa desa yang rawan banjir dan longsor di musim penghujan. Bagaimana pejabat memperhatikan hal tersebut?",
    pilihan: [
      { huruf: "A", teks: "Para petani tidak membangun sawah atau kolam di atas lereng dan warga tidak membangun rumah di bawah tebing", poin: 1 },
      { huruf: "B", teks: "Petugas segera mengevakuasi ke arah zona yang telah ditentukan jika mendengar suara sirine peringatan longsor ", poin: 3 },
      { huruf: "C", teks: "Warga setempat membuat sengkedan atau terasering pada lereng yang terjal sebelum membangun pemukiman yang baru", poin: 2 },
      { huruf: "D", teks: "Badan Penanggulangan Bencana Daerah (BPBD) melakukan sosialisasi mitigasi bencana banjir dan longosr di daerah-daerah rawan banjir dan longsor", poin: 4 },
      { huruf: "E", teks: "Mengugaskan Tim Pengelola Kegiatan (TPK) untuk membangun talud berdasarkan aturan, analisis, dan anggaran dengan bekerja sama dengan masyarakat setempat", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 1, B = 3, C = 2, D = 4, E = 5<br> Pemerintah daerah dapat membantu mencegah terjadinya bencana longsor di daerah rawan dengan mengugaskan Tim Pengelola Kegiatan (TPK) untuk membangun talud berdasarkan aturan, analisis, dan anggaran dengan bekerja sama dengan masyarakat setempat."
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
