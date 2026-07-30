require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });
const pool = require('./db');

/*
  ══════════════════════════════════════════════════════════
  TEMPLATE SOAL TRY OUT SKD PAKET 3
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
    teks: "Di balik kemudahan era modern yang serba canggih, ada banyak dampak buruk yang muncul dari perkembangan teknologi tersebut salah satunya adalah munculnya perilaku konsumtif. Perilaku konsumtif merupakan perilaku yang berlebihan dalam membeli suatu barang. Apabila tidak sesuai dengan tingkat finansial maka akan berdampak terhadap permasalahan kemiskinan di Indonesia. Hal tersebut tentunya bertentangan dengan nilai-nilai Pancasila. Selain perilaku konsumtif, sikap lain yang juga melanggar nilai-nilai tersebut adalah....",
    pilihan: [
      { huruf: "A", teks: "Menghalang-halangi orang lain untuk melaksanakan ibadah karena tidak seiman dan seagama" },
      { huruf: "B", teks: "Membiarkan tetangga dalam kondisi kelaparan serta tidak memedulikan keberadaannya" },
      { huruf: "C", teks: "Menyebarkan berita hoaks di media sosial" },
      { huruf: "D", teks: "Penyediaan pendidikan yang tidak merata atau sikap diskriminasi dalam akses pendidikan" },
      { huruf: "E", teks: "Merundung rekan sekolah yang berkulit hitam dan bertubuh pendek" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada frasa 'perilaku konsumtif'. Perilaku konsumtif merupakan salah satu pelanggaran terhadap butir-butir sila kelima Pancasila yaitu 'keadilan sosial bagi seluruh rakyat Indonesia'. Maka opsi jawaban yang juga merupakan pelanggaran terhadap sila kelima adalah D. Opsi A merupakan pelanggaran sila pertama, opsi B sila kedua, opsi C dan E sila ketiga"
  },

  // ─── Soal 2 ───
  {
    id: 2, kategori: "TWK",
    teks: "Bersyukur merupakan salah satu bentuk terima kasih kita kepada Tuhan atas keberkahan dan kenikmatan yang diberikan di dunia. Saat bersyukur hari menjadi lebih lapang dan tenang. Selain itu, rasa syukur ini juga merupakan salah satu contoh pengamalan dari nilai-nilai Pancasila, selain bersyukur, sikap yang juga dapat dilakukan adalah...",
    pilihan: [
      { huruf: "A", teks: "Peduli dengan keadaan orang lain yang sedang kesusahan" },
      { huruf: "B", teks: "Tidak gegabah dalam mengambil keputusan" },
      { huruf: "C", teks: "Bersikap adil dan tidak membeda-bedakan perlakuan" },
      { huruf: "D", teks: "Beribadah dengan taat dan menjaga kebersihan rumah ibadah" },
      { huruf: "E", teks: "Bekerja dengan ikhlas dan tulus karena Tuhan dan keluarga" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'bentuk terima kasih kita kepada Tuhan'. Artinya bersyukur merupakan pengamalan dari sila pertama Pancasila. Opsi yang sama-sama pengamalan dari Pancasila adalah D. A dan E merupakan pengamalan sila kedua, opsi B pengamalan dari sila keempat dan opsi C sila kelima"
  },

  // ─── Soal 3 ───
  {
    id: 3, kategori: "TWK",
    teks: "Pancasila memiliki arti yang berbeda-beda untuk setiap silanya. Namun, makna-makna tersebut saling terkait satu sama lain. Penting bagi masyarakat Indonesia untuk memahami makna tersebut karena Pancasila merupakan dasar negara Indonesia terutama sila yang dilambangkan dengan kepala banteng, binatang bertanduk yang suka berkumpul dan bergabung bersama. Implementasi dari butir sila tersebut dapat dilakukan dengan...",
    pilihan: [
      { huruf: "A", teks: "Tidak memaksakan suatu agama dan kepercayaan kepada orang lain" },
      { huruf: "B", teks: "Bergaul dengan siapa saja" },
      { huruf: "C", teks: "Menjunjung tinggi toleransi dalam beragama" },
      { huruf: "D", teks: "Memiliki rasa empati yang tinggi dan peduli dengan orang lain" },
      { huruf: "E", teks: "Tidak memaksakan kehendak kepada orang lain" }
    ],
    kunci: "E",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'sila dilambangkan dengan kepala banteng, binatang bertanduk yang dikenal suka berkumpul dan bergabung bersama'. Artinya sikap yang diminta adalah yang mencerminkan pengamalan sila keempat. Opsi yang merupakan pengamalan sila keempat adalah opsi E. Sedangkan opsi D sila kedua, opsi C dan A sila pertama, dan opsi B sila ketiga Pancasila"
  },

  // ─── Soal 4 ───
  {
    id: 4, kategori: "TWK",
    teks: "Menurut Pasal 4 Undang-Undang Dasar Negara Republik Indonesia Tahun 1945, makna dari 'Presiden memegang kekuasaan pemerintahan menurut Undang-Undang Dasar' adalah...",
    pilihan: [
      { huruf: "A", teks: "Presiden dapat bertindak sewenang-wenang dalam menjalankan kekuasaannya" },
      { huruf: "B", teks: "Presiden memiliki kewenangan dalam menjalankan pemerintahan" },
      { huruf: "C", teks: "Presiden memiliki kewenangan khusus yang tidak dapat diganggu gugat oleh lembaga lain" },
      { huruf: "D", teks: "Presiden memegang seluruh kekuasaan eksekutif tanpa batasan" },
      { huruf: "E", teks: "Presiden harus berbagi kekuasaan dengan DPR dan lembaga negara lainnya" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci dalam menjawab soal ini ada pada kalimat 'memegang kekuasaan pemerintahan menurut Undang-Undang'. Opsi yang mencerminkan bahwa presiden memiliki kekuasaan pemerintahan adalah opsi B."
  },

  // ─── Soal 5 ───
  {
    id: 5, kategori: "TWK",
    teks: "Bhinneka Tunggal Ika merupakan semboyan dari negara Indonesia. Makna yang terkandung pada semboyan ini adalah meskipun berbeda-beda, tetapi hakikatnya bangsa Indonesia tetap satu kesatuan. Namun, dalam penerapannya terdapat beberapa sikap yang tidak sesuai dengan konsep tersebut, seperti...",
    pilihan: [
      { huruf: "A", teks: "Adanya kasus tindak pidana korupsi yang dilakukan oleh beberapa pejabat berwenang" },
      { huruf: "B", teks: "Mengabaikan tetangga yang kelaparan dan menderita sakit langka" },
      { huruf: "C", teks: "Adanya perilaku perundungan terhadap orang dari golongan tertentu yang dilakukan oleh sebagian oknum" },
      { huruf: "D", teks: "Adanya kasus pembunuhan berencana yang dilakukan oleh pihak kepolisian" },
      { huruf: "E", teks: "Adanya kasus pelecehan seksual yang terjadi pada anak di bawah umur " }
    ],
    kunci: "C",
    pembahasan: "Kata kunci dalam menjawab soal ini ada pada kalimat 'berbeda-beda tetapi hakikatnya bangsa Indonesia tetap satu kesatuan'. Konsep Bhinneka Tunggal Ika berkaitan dengan sila ketiga. Opsi jawaban yang berkaitan dengan pelanggaran terhadap sila ketiga ada pada opsi C. Opsi A pelanggaran dari sila kelima, opsi B, D, dan E sila kedua Pancasila"
  },

  // ─── Soal 6 ───
  {
    id: 6, kategori: "TWK",
    teks: "Undang-Undang Dasar 1945 merupakan dasar negara Republik Indonesia. Pembukaan UUD 1945 terdiri atas empat alinea. Setiap alinea memiliki nilai-nilai luhur tersendiri tentang sejarah bangsa Indonesia. Pada alinea pertama, kedua dan ketiga menjelaskan tentang peristiwa terdahulu yang memengaruhi terbentuknya negara Indonesia. Pada alinea ketiga menjelaskan tentang dasar-dasar fundamental negara. Makna pembukaan UUD 1945 alinea ketiga adalah...",
    pilihan: [
      { huruf: "A", teks: "Sebagai suatu penghargaan atas perjuangan bangsa Indonesia yang telah melepaskan diri dari penjajahan dan meraih kemerdekaan" },
      { huruf: "B", teks: "Adanya momentum yang harus dimanfaatkan bangsa Indonesia untuk menyatakan kemerdekaan" },
      { huruf: "C", teks: "Sebuah pernyataan kemerdekaan sebagai hak semua bangsa di dunia" },
      { huruf: "D", teks: "Mengandung motivasi spiritual, yaitu kesadaran dan pengakuan bahwa kemerdekaan Indonesia bukan hanya hasil perjuangan rakyat semata, tetapi juga karena rahmat Tuhan Yang Maha Esa" },
      { huruf: "E", teks: "Keberadaan UUD Negara Republik Indonesia juga meneguhkan kemerdekaan bangsa Indonesia dan tujuannya setelah merdeka sebagai negara" }
    ],
    kunci: "D",
    pembahasan: "Pembukaan UUD 1945 alinea ketiga berbunyi 'Atas berkat rahmat Allah Yang Maha Kuasa dan dengan didorongkan oleh keinginan luhur, supaya berkehidupan kebangsaan yang bebas, maka rakyat Indonesia menyatakan dengan ini kemerdekaannya'. Makna pembukaan UUD 1945 pada alinea ini adalah pengakuan bahwa kemerdekaan Indonesia tidak hanya diperoleh dari perjuangan rakyat semata, tetapi juga berkat dan rahmat dari Tuhan Yang Maha Esa. Oleh karena itu, jawaban yang paling tepat ada pada opsi D"
  },

  // ─── Soal 7 ───
  {
    id: 7, kategori: "TWK",
    teks: "Nasionalisme sering kali menekankan pentingnya mempertahankan dan memperluas wilayah suatu negara. Konsep ini sering muncul dalam sejarah sebagai dorongan untuk menyatukan wilayah-wilayah yang memiliki ikatan sejarah dan mempertahankan integritas wilayah nasional. Dalam hal tersebut, cerminan sikap yang dapat dilakukan oleh warga negara Indonesia adalah...",
    pilihan: [
      { huruf: "A", teks: "Terlibat dalam kegiatan sosial yang memajukan negara" },
      { huruf: "B", teks: "Menghormati simbol-simbol kebangsaan" },
      { huruf: "C", teks: "Ikut berpartisipasi dalam kegiatan yang memperkuat identitas nasional" },
      { huruf: "D", teks: "Aktif dalam melestarikan warisan budaya" },
      { huruf: "E", teks: "Mendukung kebijakan pemerintah yang memperkuat keamanan nasional" }
    ],
    kunci: "E",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'dorongan untuk menyatukan wilayah-wilayah yang memiliki ikatan sejarah dan mempertahankan integritas wilayah nasional'. Upaya yang dapat dilakukan untuk mempertahankan integritas wilayah nasional dan dorongan untuk menentukan wilayah ada pada opsi E"
  },

  // ─── Soal 8 ───
  {
    id: 8, kategori: "TWK",
    teks: "Nasionalisme dapat tercermin dalam sistem pendidikan yang menekankan pada sejarah, budaya, dan nilai-nilai kebangsaan yang bertujuan untuk menguatkan identitas nasional. Sebagai warga negara, upaya yang dapat dilakukan untuk meningkatkan rasa nasionalisme tersebut adalah...",
    pilihan: [
      { huruf: "A", teks: "Mempertahankan kewaspadaan terhadap intervensi asing yang merugikan" },
      { huruf: "B", teks: "Menjadi peserta aktif dalam pembelajaran sejarah dan budaya nasional" },
      { huruf: "C", teks: "Mendukung inisiatif yang memperkuat persatuan, menghormati perbedaan, dan berpartisipasi dalam kegiatan sosial yang membangun solidaritas" },
      { huruf: "D", teks: "Menyanyikan lagi kebangsaan dengan bangga" },
      { huruf: "E", teks: "Mendukung industri lokal, tetapi tetap terbuka terhadap kerja sama internasional yang bermanfaat" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'sistem pendidikan yang menekankan pada sejarah, budaya dan nilai-nilai kebangsaan'. Opsi jawaban yang berkaitan dengan sistem pendidikan yang menekankan pada sejarah, budaya dan nilai kebangsaan ada pada opsi B"
  },

  // ─── Soal 9 ───
  {
    id: 9, kategori: "TWK",
    teks: "Beberapa bentuk nasionalisme dapat muncul sebagai respons terhadap globalisasi, di mana masyarakat mencoba mempertahankan identitas dan nilai-nilai lokal mereka. Sikap seorang warga negara yang memahami bentuk nasionalisme ini dapat ditunjukkan dengan...",
    pilihan: [
      { huruf: "A", teks: "Ikut berpartisipasi dalam kegiatan kewarganegaraan" },
      { huruf: "B", teks: "Patuh terhadap hukum dan ketentuan negara" },
      { huruf: "C", teks: "Mempertahankan kewaspadaan terhadap intervensi asing yang merugikan" },
      { huruf: "D", teks: "Menunjukkan kepedulian terhadap isu global, tetapi tetap berperan aktif dalam mendukung dan melestarikan budaya lokal" },
      { huruf: "E", teks: "Menghindari sikap xenophobia" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'mencoba mempertahankan identitas dan nilai-nilai lokal'. Opsi D merupakan jawaban yang tepat karena sikap tersebut mencerminkan kesadaran akan isu global namun tetap memperkuat identitas lokal dan nilai-nilai budaya sebagai bentuk tanggapan terhadap globalisasi"
  },

  // ─── Soal 10 ───
  {
    id: 10, kategori: "TWK",
    teks: "Nasionalisme dapat diartikan sebagai suatu keinginan besar untuk dapat mewujudkan persatuan dalam suatu negara. Pemahaman mengenai nasionalisme berkembang seiring dengan berjalannya waktu. Fase pertama ditandai dengan...",
    pilihan: [
      { huruf: "A", teks: "Adanya pergolakan masa orde baru yang disebut dengan masa reformasi" },
      { huruf: "B", teks: "Adanya peranan mahasiswa, organisasi pemuda, dan organisasi sosial kemasyarakatan demi mewujudkan tatanan baru pemerintahan Indonesia" },
      { huruf: "C", teks: "Adanya gerakan kebangkitan pada masa Budi Utomo pada 1908" },
      { huruf: "D", teks: "Adanya peranan pemuda pada masa revolusi fisik kemerdekaan dengan menyandera Soekarno-Hatta ke Rengasdengklok" },
      { huruf: "E", teks: "Menyelenggarakan Sumpah Pemuda pada 1928" }
    ],
    kunci: "C",
    pembahasan: "Fase pertama nasionalisme ditandai dengan adanya gerakan kebangkitan nasionalisme Indonesia pada suatu dinamika sejarah diawali oleh masa Budi Utomo pada tahun 1908"
  },

  // ─── Soal 11 ───
  {
    id: 11, kategori: "TWK",
    teks: "Nasionalisme memiliki korelasi yang kuat dengan patriotisme. Jika nasionalisme merupakan paham kebangsaan yang mengandung makna kesadaran dan semangat cinta tanah air, patriotisme merupakan sikap rela berkorban demi persatuan dan kesatuan tanah air. Paham patriotisme tersebut diwujudkan dengan sikap...",
    pilihan: [
      { huruf: "A", teks: "Bekerja dengan giat untuk memenuhi kebutuhan pokok keluarga" },
      { huruf: "B", teks: "Menghormati simbol-simbol negara sebagai identitas bangsa" },
      { huruf: "C", teks: "Mencintai bahasa daerah dan tidak malu mengakuinya" },
      { huruf: "D", teks: "Bangga menjadi bagian dari bangsa Indonesia" },
      { huruf: "E", teks: "Memilih pekerjaan yang berkaitan dengan pelayanan publik" }
    ],
    kunci: "E",
    pembahasan: "Kata kunci untuk menjawab soal ini adalah 'sikap rela berkorban demi persatuan dan kesatuan tanah air'. Opsi jawaban yang menunjukkan sikap rela berkorban demi bangsa ada pada opsi E. Memiliki pekerjaan di bidang pelayanan seperti petugas keamanan, pemadam kebakaran, petugas medis dapat dianggap sebagai patriotisme karena melalui pekerjaan tersebut seseorang dapat memberikan kontribusi langsung kepada masyarakat"
  },

  // ─── Soal 12 ───
  {
    id: 12, kategori: "TWK",
    teks: "Ardi merupakan seorang pelajar yang sudah menanamkan rasa nasionalisme sejak dini. Rasa tersebut tercermin dalam keterlibatannya dalam sistem pendidikan dengan mempromosikan pengetahuan tentang sejarah, budaya, dan nilai-nilai nasionalisme. Dalam kesehariannya, biasanya Ardi...",
    pilihan: [
      { huruf: "A", teks: "Menyanyikan lagu kebangsaan dengan bangga" },
      { huruf: "B", teks: "Belajar dengan rajin dan menghargai sejarah lokal dalam kurikulum" },
      { huruf: "C", teks: "Ikut berpartisipasi dalam kegiatan sosial masyarakat" },
      { huruf: "D", teks: "Mengikuti upacara kebangsaan yang diadakan sekolahnya" },
      { huruf: "E", teks: "Mendukung pelestarian bahasa dan warisan lokal" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'keterlibatannya dalam sistem pendidikan dengan mempromosikan pengetahuan tentang sejarah, budaya dan nilai-nilai nasional.' Opsi jawaban yang berkaitan dengan sistem pendidikan ada pada opsi B"
  },

  // ─── Soal 13 ───
  {
    id: 13, kategori: "TWK",
    teks: "Seorang pegawai menghadapi situasi saat dia mengetahui bahwa rekan kerjanya telah terlibat dalam kegiatan korupsi yang dapat merugikan perusahaan. Pegawai tersebut memiliki pengetahuan tentang tindakan tersebut dan menyadari bahwa pengungkapan informasi tersebut dapat membahayakan karier rekan kerjanya dan juga dapat memengaruhi citra perusahaan. Bagaimana seharusnya pegawai tersebut bertindak sesuai dengan konteks nilai integritas?",
    pilihan: [
      { huruf: "A", teks: "Melaporkan secara langsung kepada atasan tentang tindakan korupsi rekan kerjanya" },
      { huruf: "B", teks: "Menyimpan informasi tersebut untuk dirinya sendiri agar tidak terlibat dalam masalah internal" },
      { huruf: "C", teks: "Memperingatkan rekan kerjanya untuk berhenti melakukan tindakan tersebut" },
      { huruf: "D", teks: "Membocorkan informasi kepada media agar publik mengetahui kejadian tersebut" },
      { huruf: "E", teks: "Menutup mata dan tidak melakukan apa-apa untuk menghindari konflik di tempat kerja" }
    ],
    kunci: "A",
    pembahasan: "Opsi A merupakan jawaban yang tepat karena mencerminkan tindakan yang sesuai dengan integritas dengan melaporkan tindakan yang melanggar etika kepada pihak yang berwenang."
  },

  // ─── Soal 14 ───
  {
    id: 14, kategori: "TWK",
    teks: "Nadia merupakan seorang ASN yang menjunjung tinggi nilai-nilai integritas. Hal tersebut tercermin dalam tindakannya yang memiliki kemampuan untuk diandalkan dalam menjalankan tugas dan kewajiban dengan konsisten. Dalam menjalankan tugasnya sebagai ASN, biasanya Nadia...",
    pilihan: [
      { huruf: "A", teks: "Mengakui kesalah dan bertanggung jawab atas kesalahan tersebut" },
      { huruf: "B", teks: "Tidak menyembunyikan informasi yang penting" },
      { huruf: "C", teks: "Memberikan penghargaan kepada orang lain dan menghormati hak mereka" },
      { huruf: "D", teks: "Dapat dipercaya untuk menyelesaikan tugas dengan baik dan tepat waktu" },
      { huruf: "E", teks: "Menjauhi tindakan yang tidak etis" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'kemampuan untuk diandalkan dalam menjalankan tugas-tugas dan kewajiban dengan konsisten'. Opsi jawaban yang menunjukkan kemampuan untuk diandalkan dalam menjalankan tugasnya ada pada opsi D."
  },

  // ─── Soal 15 ───
  {
    id: 15, kategori: "TWK",
    teks: "Peran Mandala sebagai orang tua telah berhasil mendidik anaknya menjadi lebih terbuka untuk menerima kritik dengan bijak dan bersedia belajar dari pengalaman. Hal tersebut tercermin dari sikap anaknya, seperti ....",
    pilihan: [
      { huruf: "A", teks: "Tetap setia pada nilai-nilai dan prinsip moral" },
      { huruf: "B", teks: "Menyelesaikan tugas sekolah dengan penuh tanggung jawab" },
      { huruf: "C", teks: "Menerima umpan balik dengan baik dan terbuka" },
      { huruf: "D", teks: "Menjauhi tindakan-tindakan  yang tidak etis" },
      { huruf: "E", teks: "Menepati janji dan komitmen yang telah dibuat" }
    ],
    kunci: "C",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'menerima kritik dengan bijak dan bersedia belajar dari pengalaman.' Artinya sikap yang diminta pada soal adalah sikap keterbukaan. Opsi yang menunjukkan sikap keterbukaan ada pada opsi C, yaitu menerima umpan balik dengan baik dan terbuka"
  },

  // ─── Soal 16 ───
  {
    id: 16, kategori: "TWK",
    teks: "Sebagai seorang guru, Bu Tia selalu menjadi teladan baik bagi peserta didiknya. Hal tersebut tercermin dari sikap Bu Tia yang selalu menetapkan dan mempertahankan nilai-nilai moral yang dipegang tanpa mudah terpengaruh oleh tekanan dan pengaruh dari luar. Ani, sebagai peserta didik Bu Tia  meneladani sikap Bu Tia tersebut, maka sikap Ani adalah...",
    pilihan: [
      { huruf: "A", teks: "Mengakui kesalahan dan bersedia mempertanggungjawabkannya" },
      { huruf: "B", teks: "Menolak terlibat dalam tindakan yang tidak sesuai dengan aturan" },
      { huruf: "C", teks: "Menghormati hak-hak orang lain terutama rekan sekelasnya" },
      { huruf: "D", teks: "Menghormati guru dan pegawai di lingkungan sekolah" },
      { huruf: "E", teks: "Belajar dengan rajin dan selalu dapat diandalkan" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'menetapkan dan mempertahankan nilai-nilai moral yang dipegang tanpa mudah terpengaruh oleh tekanan dan pengaruh dari luar.' Artinya sikap yang diminta adalah ketegasan. Opsi yang menunjukkan sikap ketegasan ada pada opsi B."
  },

  // ─── Soal 17 ───
  {
    id: 17, kategori: "TWK",
    teks: "Pada 1946, George McTurnan Kahin, seorang guru besar Universitas Cornell, Amerika Serikat terhenyak ketika bertemu M. Natsir pertama kali. Kala itu M. Natsir adalah menteri penerangan RI. George McTurnan menerangkan dalam sebuah buku <em>Natsir : 70 Tahun Kenang-kenangan Kehidupan dan Perjuangan</em> bahwa 'M. Natsir memakai baju kemeja yang ditambal', sesuatu yang belum pernah ia lihat  di antara pegawai pemerintah mana pun. Hal tersebut menunjukkan bahwa M. Natsir adalah orang yang berintegritas, alasannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Ia bertanggung jawab sebagai Menteri Penerangan RI" },
      { huruf: "B", teks: "Ia bekerja keras dalam memperjuangkan kemerdekaan Indonesia" },
      { huruf: "C", teks: "Ia bersikap mandiri dan tidak tergantung dengan orang lain meskipun ia sebagai pegawai pemerintahan" },
      { huruf: "D", teks: "Ia memilih hidup sederhana meskipun menjabat sebagai pegawai pemerintahan" },
      { huruf: "E", teks: "Ia peduli dengan nasib masyarakat Indonesia" }
    ],
    kunci: "D",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'memakai baju kemeja yang ditambal, sesuatu yang belum pernah ia lihat di antara pegawai pemerintahan manapun.' Sikap tersebut menunjukkan bahwa M. Natsir memilih hidup sederhana karena tidak malu menggunakan kemeja yang bertambal. Oleh karena itu, opsi yang paling tepat adalah D"
  },

  // ─── Soal 18 ───
  {
    id: 18, kategori: "TWK",
    teks: "Praktik korupsi dapat menciptakan biaya ekonomi tinggi dan membebankan pelaku ekonomi. Hal tersebut akan berimbas pada mahalnya harga jasa dan pelayanan karena harga yang ditetapkan harus menutupi kerugian akibat penyelewengan korupsi. Seseorang yang menanamkan nilai-nilai integritas sejak dini seperti kejujuran tentunya dapat mencegah kasus korupsi seperti ini. Hal tersebut dapat tercermin dalam sikap... ",
    pilihan: [
      { huruf: "A", teks: "Berkata jujur meskipun orang lain tidak menyukai kejujuran tersebut" },
      { huruf: "B", teks: "Bersedia menerima kritik dari orang lain demi kebaikan di masa depan" },
      { huruf: "C", teks: "Bertanggung jawab dengan tugas yang diamanahkan" },
      { huruf: "D", teks: "Memiliki loyalitas kepada instansi tempat bekerja" },
      { huruf: "E", teks: "Berkomitmen untuk bekerja dengan baik yang sesuai dengan aturan dan kebijakan" }
    ],
    kunci: "A",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'nilai-nilai integritas sejak dini seperti nilai kejujuran dapat mencegah kasus korupsi.' Artinya, sikap yang diminta adalah yang berkaitan dengan nilai kejujuran. Opsi yang mencerminkan nilai kejujuran ada pada opsi A"
  },

  // ─── Soal 19 ───
  {
    id: 19, kategori: "TWK",
    teks: "Sebagai seorang pelajar, Nanta sudah menunjukkan kecintaannya terhadap negara dengan melakukan upaya bela negara sebagai hak dan kewajiban bagi seluruh lapisan masyarakat Indonesia. Hal tersebut tercermin dari keterlibatannya dalam kegiatan yang berkontribusi pada kemajuan dan keberlanjutan negara. Dalam kesehariannya, biasanya Nanta...",
    pilihan: [
      { huruf: "A", teks: "Mengikuti kegiatan ekstrakurikuler pramuka di sekolahnya" },
      { huruf: "B", teks: "Bersedia membantu teman sekelasnya yang mengalami kesulitan pada pelajaran tertentu" },
      { huruf: "C", teks: "Menghormati guru yang telah berjasa kepadanya" },
      { huruf: "D", teks: "Berteman dengan semua orang tanpa membedakan status sosial" },
      { huruf: "E", teks: "Tidak melakukan tindakan yang dapat mencoreng nama baik sekolah" }
    ],
    kunci: "A",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'keterlibatannya dalam kegiatan yang berkontribusi pada kemajuan dan keberlanjutan negara.' Opsi jawaban yang menunjukkan keterlibatan dan kontribusi Nanta sebagai seorang pelajar terhadap kemajuan dan keberlanjutan negara adalah ada opsi A, karena pramuka sering kali dianggap sebagai kegiatan yang melatih patriotisme, kedisiplinan, dan kecintaan terhadap alam serta negara."
  },

  // ─── Soal 20 ───
  {
    id: 20, kategori: "TWK",
    teks: "Upaya bela negara merupakan hak dan kewajiban bagi seluruh lapisan masyarakat Indonesia. Upaya bela negara untuk melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia tidak akan memiliki arti tanpa adanya....",
    pilihan: [
      { huruf: "A", teks: "Dukungan dari pemerintahan yang berdaulat" },
      { huruf: "B", teks: "Dukungan dari warga negara Indonesia yang ditunjukkan dengan partisipasinya dalam upaya bela negara" },
      { huruf: "C", teks: "Dukungan dari masyarakat yang berperan penting dalam penyelenggaraan pemerintah" },
      { huruf: "D", teks: "Dukungan keterbukaan sistem politik" },
      { huruf: "E", teks: "Dukungan dari negara lain yang berhubungan baik dengan bangsa Indonesia" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'hak dan kewajiban bagi seluruh lapisan masyarakat Indonesia.' Artinya, upaya bela negara tidak akan berarti tanpa adanya peranan dari seluruh lapisan masyarakat Indonesia. Oleh karena itu, jawaban yang paling tepat adalah opsi B"
  },

  // ─── Soal 21 ───
  {
    id: 21, kategori: "TWK",
    teks: "Secara harfiah, bangsa Indonesia merdeka dan memproklamasikan kemerdekaan pada tanggal 17 Agustus 1945 dan bertekad bulat untuk menegakkan, mempertahankan, dan memperjuangkan kedaulatan negara. Banyak darah dan air mata yang dikorbankan untuk meraih kemerdekaan tersebut. Proses perjuangan kemerdekaan tersebut memiliki makna bahwa bela negara merupakan...",
    pilihan: [
      { huruf: "A", teks: "Tujuan dari berdirinya bangsa Indonesia" },
      { huruf: "B", teks: "Amanat dari para pendiri negara" },
      { huruf: "C", teks: "Wujud kemerdekaan bangsa Indonesia" },
      { huruf: "D", teks: "Titik terendah perjuangan kemerdekaan Indonesia" },
      { huruf: "E", teks: "Cara mempersatukan keberagaman bangsa Indonesia" }
    ],
    kunci: "B",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'banyak darah dan air mata yang dikorbankan untuk meraih kemerdekaan'. Artinya perjuangan kemerdekaan tersebut tidak terlepas dari perjuangan para pahlawan sebagai pendiri bangsa. Oleh karena itu, opsi jawaban yang paling tepat adalah opsi B"
  },

  // ─── Soal 22 ───
  {
    id: 22, kategori: "TWK",
    teks: "Konsep bela negara sendiri mengandung makna keikutsertaan dalam menjaga pertahanan negara. Sebagai seorang warga negara Indonesia, hal tersebut dapat tercermin dalam sikap...",
    pilihan: [
      { huruf: "A", teks: "Menjaga dan melindungi wilayah negara Indonesia baik bagian darat, laut, maupun udara" },
      { huruf: "B", teks: "Menjaga kekompakan masyarakat Indonesia agar terhindar dari kegaduhan dan perpecahan" },
      { huruf: "C", teks: "Bangga menjadi bagian dari negara Indonesia yang ditunjukkan dengan menggunakan produk-produk lokal" },
      { huruf: "D", teks: "Membantu negara yang tengah menghadapi krisis ekonomi global" },
      { huruf: "E", teks: "Mematuhi aturan dan kebijakan yang telah ditetapkan oleh pemerintah" }
    ],
    kunci: "A",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'keikutsertaan dalam menjaga pertahanan'. Opsi jawaban yang menunjukkan keikutsertaan masyarakat dalam menjaga pertahanan adalah opsi A. Opsi tersebut mencerminkan keterlibatan aktif dalam upaya pertahanan negara yang merupakan aspek penting dari konsep bela negara."
  },

  // ─── Soal 23 ───
  {
    id: 23, kategori: "TWK",
    teks: "Bela negara merupakan segala usaha yang mencakup pertahanan dan keutuhan negara. Usaha bela negara wajib dilakukan oleh setiap warga negara Indonesia termasuk pegawai pemerintahan. Wujud sikap bela negara yang dapat ditunjukkan adalah...",
    pilihan: [
      { huruf: "A", teks: "Tidak menyebarkan berita bohong tentang politik pemerintahan" },
      { huruf: "B", teks: "Mendukung capres tertentu yang dianggap baik dalam memimpin negara" },
      { huruf: "C", teks: "Menggunakan produk lokal dengan baik" },
      { huruf: "D", teks: "Berpartisipasi dalam memberikan bantuan kepada masyarakat Rohingya" },
      { huruf: "E", teks: "Tidak menggunakan fasilitas negara untuk kepentingan pribadi" }
    ],
    kunci: "A",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'mencakup pertahanan dan keutuhan negara.' Artinya sikap yang diminta adalah peranan pegawai pemerintahan dalam upaya pertahanan dan keutuhan negara. Opsi A merupakan jawaban yang tepat. Penyebaran berita bohong dapat merugikan stabilitas dan keamanan negara. Dengan tidak menyebarkan berita bohong artinya seseorang berkontribusi pada pemeliharaan keutuhan dan ketahanan informasi di tingkat nasional"
  },

  // ─── Soal 24 ───
  {
    id: 24, kategori: "TWK",
    teks: "Para pendiri bangsa dan para pahlawan terdahulu memiliki pendirian yang kuat. Mereka tidak mudah tergoyahkan dengan ideologi yang dibawa oleh penjajah yang berusaha untuk mengubah Ideologi bangsa Indonesia. Sebagai warga negara, sikap tersebut perlu diteladani dengan menunjukkan sikap...",
    pilihan: [
      { huruf: "A", teks: "Menolak paham radikalisme atau aliran yang dapat memerangi bangsa" },
      { huruf: "B", teks: "Toleransi dalam beragama" },
      { huruf: "C", teks: "Berperan aktif dalam melestarikan budaya" },
      { huruf: "D", teks: "Bangga menjadi bagian dari bangsa Indonesia" },
      { huruf: "E", teks: "Mau belajar dari pengalaman" }
    ],
    kunci: "A",
    pembahasan: "Kata kunci untuk menjawab soal ini ada pada kalimat 'pendirian yang kuat dan tidak mudah tergoyahkan dengan ideologi yang dibawa oleh penjajah'. Opsi jawaban yang menunjukkan sikap tersebut ada pada opsi A. Jawaban tersebut berkaitan dengan keberanian dan keteguhan pendiri bangsa dan pahlawan terdahulu dalam mempertahankan ideologi Indonesia dari penjajah yang berusaha mengubahnya. Selain itu, menolak paham radikalisme atau aliran yang memerangi negara mencerminkan sikap keberanian dan konsistensi dalam mempertahankan nilai-nilai dan ideologi bangsa Indonesia"
  },

  // ─── Soal 25 ───
  {
    id: 25, kategori: "TWK",
    teks: "Simbiosis merupakan hubungan antara dua makhluk hidup yang berbeda. Simbiosis komensalisme terjadi jika satu makhluk hidup diuntungkan, yang lain tidak diuntungrugikan. Simbiosis parasitisme merupakan hubungan yang satu untung dan yang lain rugi. Simbiosis mutualisme adalah hubungan dua makhluk hidup yang saling menguntungkan.<br>Kalimat utama paragraf tersebut adalah....",
    pilihan: [
      { huruf: "A", teks: "Ada berbagai macam simbiosis yang diketahui oleh manusia" },
      { huruf: "B", teks: "Simbiosis komensalisme terjadi jika satu makhluk hidup diuntungkan, yang lain tidak diuntungrugikan" },
      { huruf: "C", teks: "Simbiosis merupakan hubungan antara dua makhluk hidup yang berbeda" },
      { huruf: "D", teks: "Simbiosis parasitisme merupakan hubungan makhluk hidup yang satu untung dan yang lain rugi" },
      { huruf: "E", teks: "Simbiosis mutualisme adalah hubungan dua makhluk hidup yang saling menguntungkan" }
    ],
    kunci: "C",
    pembahasan: "Kalimat utama pada paragraf tersebut berada di awal (deduktif). Di awal paragraf dinyatakan bahwa simbiosis merupakan hubungan antara dua makhluk hidup yang berbeda dan setelahnya baru kalimat-kalimat penjelas"
  },

  // ─── Soal 26 ───
  {
    id: 26, kategori: "TWK",
    teks: "Orang tua kita pun kerap menegur kalau tahu kita makan sambil berdiri. Ternyata selain dianggap kurang sopan, makan sambil berdiri juga memiliki dampak negatif bagi kesehatan. Beberapa orang percaya bahwa makan sambil berdiri dapat membantu mengurangi berat badan daripada makan sambil duduk. Dilansir dari Healthline, meskipun berdiri dapat membakar sekitar 50 kalori lebih banyak per jam daripada duduk, tetapi tidak ada penelitian yang berhasil membuktikan teori tersebut.<br>Ide pokok dari paragraf di atas adalah...",
    pilihan: [
      { huruf: "A", teks: "Kebiasaan makan sambil berdiri adalah kebiasaan yang lumrah" },
      { huruf: "B", teks: "Makan sambil duduk cenderung mengurangkan kecepatan makanmu" },
      { huruf: "C", teks: "Sejak kecil, harus dibiasakan untuk tidak makan sambil berdiri" },
      { huruf: "D", teks: "Tidak ada hasil penelitian yang menunjukkan bahwa teori makan sambil berdiri adalah cara efektif untuk mengurangi kalori tubuh" },
      { huruf: "E", teks: "Makan sambil berdiri atau sambil duduk tidak ada perbandingan yang sangat signifikan" }
    ],
    kunci: "D",
    pembahasan: "Ide pokok pada paragraf tersebut berada di tengah paragraf (ineratif). Pada paragraf tersebut dijelaskan bahwa tidak ada penelitian yang berhasil membuktikan teori bahwa makan sambil berdiri dapat mengurangi kalori dalam tubuh manusia"
  },

  // ─── Soal 27 ───
  {
    id: 27, kategori: "TWK",
    teks: "Pupuk organik adalah pupuk yang berasal dari sisa-sisa makhluk hidup. Pupuk tersebut dapat berasal dari kotoran hewan. Selain itu, kotoran manusia dapat dibuat untuk pupuk jenis ini. Ada pula pupuk organik berasal dari sisa tumbuhan misalnya tanaman orok-orok.<br>Ide pokok bacaan di atas adalah...",
    pilihan: [
      { huruf: "A", teks: "Pupuk dari kotoran hewan" },
      { huruf: "B", teks: "Sisa-sisa makhluk hidup" },
      { huruf: "C", teks: "Pengertian pupuk organik" },
      { huruf: "D", teks: "Kotoran manusia dapat dijadikan pupuk" },
      { huruf: "E", teks: "Pupuk organik yang berasal dari sisa tumbuhan misalnya tanaman orok-orok" }
    ],
    kunci: "C",
    pembahasan: "Paragraf tersebut membahas tentang pupuk organik sehingga bisa dikatakan bahwa ide pokok paragraf tersebut tentang pengertian pupuk organik"
  },

  // ─── Soal 28 ───
  {
    id: 28, kategori: "TWK",
    teks: "<em>Banyak anak-anak sedang mengantri makanan di ruang makan pagi ini.</em><br>Kalimat diatas tidak efektif dan bisa menjadi efektif dengan cara...",
    pilihan: [
      { huruf: "A", teks: "Menghilangkan kata <em>yang</em>" },
      { huruf: "B", teks: "Menghilangkan kata <em>banyak</em>" },
      { huruf: "C", teks: "Menambah kata <em>saat</em> sebelum kata <em>di</em>" },
      { huruf: "D", teks: "Menghilangkan kata <em>makanan</em>" },
      { huruf: "E", teks: "Mengganti kata <em>sedang</em> dengan <em>tengah</em>" }
    ],
    kunci: "B",
    pembahasan: "Kalimat di atas menjadi lebih efektif jika tanpa adanya kata 'banyak'. karena 'anak-anak' sudah menunjukkan pluralitas. Menghilangkan redundansi membuat kalimat tersebut menjadi lebih efektif"
  },

  // ─── Soal 29 ───
  {
    id: 29, kategori: "TWK",
    teks: "<em>Sebuah jurnal kesehatan mengatakan bahwa kandungan purin pada kangkung cukup rendah</em>. Kalimat di atas tidak logis dikarenakan kata...",
    pilihan: [
      { huruf: "A", teks: "Sebuah jurnal kesehatan" },
      { huruf: "B", teks: "Kandungan" },
      { huruf: "C", teks: "Mengatakan" },
      { huruf: "D", teks: "Cukup rendah" },
      { huruf: "E", teks: "Purin" }
    ],
    kunci: "C",
    pembahasan: "Dalam konteks sebuah jurnal kesehatan, lebih tepat menggunakan kata kerja yang mengindikasikan informasi yang tertulis, seperti 'menyatakan'. Benda mati seperti jurnal tidak bisa 'mengatakan' sesuatu, karena 'mengatakan' mengimplikasikan tindakan berbicara oleh makhluk hidup"
  },

  // ─── Soal 30 ───
  {
    id: 30, kategori: "TWK",
    teks: "<em>Mahasiswa FKIP di UNS membeli 4 gorengan di daerah gerbang belakang</em>.<br>Kalimat di atas menjadi efektif apabila...",
    pilihan: [
      { huruf: "A", teks: "Mengganti <em>mahasiswa</em> menjadi <em>siswa</em>" },
      { huruf: "B", teks: "Mengganti 4 menjadi empat" },
      { huruf: "C", teks: "Menghilangkan kata <em>membeli</em>" },
      { huruf: "D", teks: "Menghilangkan kata <em>gorengan</em>" },
      { huruf: "E", teks: "Sudah tepat semuanya" }
    ],
    kunci: "B",
    pembahasan: "Mengganti '4' menjadi 'empat' adalah perubahan yang tepat karena itu adalah penulisan yang lebih formal dan sesuai dengan kaidah ejaan yang benar."
  },

  // ════════════════════════════════════════════
  // TES INTELIGENSIA UMUM (TIU) — 35 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 31 ───
  {
    id: 31, kategori: "TIU",
    teks: "9, 6, 1, -6, ..., -26",
    pilihan: [
      { huruf: "A", teks: "-20" },
      { huruf: "B", teks: "-16" },
      { huruf: "C", teks: "-15" },
      { huruf: "D", teks: "-11" },
      { huruf: "E", teks: "-9" }
    ],
    kunci: "C",
    pembahasan: "<img src='gambarpembahasan/tryout3/31.jpeg'></img>"
  },

  // ─── Soal 32 ───
  {
    id: 32, kategori: "TIU",
    teks: "7, 11, 17, 25, ..., 47, 61",
    pilihan: [
      { huruf: "A", teks: "20" },
      { huruf: "B", teks: "25" },
      { huruf: "C", teks: "30" },
      { huruf: "D", teks: "35" },
      { huruf: "E", teks: "40" }
    ],
    kunci: "D",
    pembahasan: "<img src='gambarpembahasan/tryout3/32.jpeg'></img>"
  },

  // ─── Soal 33 ───
  {
    id: 33, kategori: "TIU",
    teks: "<math><mfrac> <mn>3</mn><mn>2</mn> </mfrac></math>, <math><mfrac> <mn>5</mn><mn>4</mn> </mfrac></math>, <math><mfrac> <mn>7</mn><mn>6</mn> </mfrac></math>, <math><mfrac> <mn>9</mn><mn>8</mn> </mfrac></math>, <math><mfrac> <mn>11</mn><mn>10</mn> </mfrac></math>, <math><mfrac> <mn>13</mn><mn>12</mn> </mfrac></math>, ...",
    pilihan: [
      { huruf: "A", teks: "<math><mfrac> <mn>6</mn><mn>14</mn> </mfrac></math>" },
      { huruf: "B", teks: "<math><mfrac> <mn>11</mn><mn>14</mn> </mfrac></math>" },
      { huruf: "C", teks: "<math><mfrac> <mn>13</mn><mn>14</mn> </mfrac></math>" },
      { huruf: "D", teks: "<math><mfrac> <mn>15</mn><mn>14</mn> </mfrac></math>" },
      { huruf: "E", teks: "<math><mfrac> <mn>17</mn><mn>14</mn> </mfrac></math>" }
    ],
    kunci: "D",
    pembahasan: "<img src='gambarpembahasan/tryout3/33.jpeg'></img>"
  },

  // ─── Soal 34 ───
  {
    id: 34, kategori: "TIU",
    teks: "-1, -4, -9, ..., -25, -36, -49",
    pilihan: [
      { huruf: "A", teks: "-16" },
      { huruf: "B", teks: "-15" },
      { huruf: "C", teks: "-12" },
      { huruf: "D", teks: "16" },
      { huruf: "E", teks: "-20" }
    ],
    kunci: "A",
    pembahasan: "<img src='gambarpembahasan/tryout3/34.jpeg'></img>"
  },

  // ─── Soal 35 ───
  {
    id: 35, kategori: "TIU",
    teks: "Hasil dari 62,5 &times; <math><mfrac> <mn>2</mn><mn>5</mn> </mfrac></math> - <math><mfrac> <mn>2</mn><mn>5</mn> </mfrac></math> : 2",
    pilihan: [
      { huruf: "A", teks: "22,8" },
      { huruf: "B", teks: "23" },
      { huruf: "C", teks: "23,4" },
      { huruf: "D", teks: "24" },
      { huruf: "E", teks: "24,8" }
    ],
    kunci: "E",
    pembahasan: "Hitung perkalian terlebih dahulu<br>62,5 &times; <math><mfrac> <mn>2</mn><mn>5</mn> </mfrac></math> = <math><mfrac> <mn>625</mn><mn>10</mn> </mfrac></math> &times; <math><mfrac> <mn>2</mn><mn>5</mn> </mfrac></math> = 25<br>Hitung pembagian<br><math><mfrac> <mn>2</mn><mn>5</mn> </mfrac></math> : 2 = <math><mfrac> <mn>2</mn><mn>5</mn> </mfrac></math> &times; <math><mfrac> <mn>1</mn><mn>2</mn> </mfrac></math> = <math><mfrac> <mn>1</mn><mn>5</mn> </mfrac></math> = 0,2<br>kurangkan hasilnya = 25 - 0,2 = 24,8"
  },

  // ─── Soal 36 ───
  {
    id: 36, kategori: "TIU",
    teks: "Hasil dari (1<math><mfrac> <mn>2</mn><mn>3</mn> </mfrac></math> + <math><mfrac> <mn>3</mn><mn>5</mn> </mfrac></math>) : 3<math><mfrac> <mn>2</mn><mn>5</mn> </mfrac></math>",
    pilihan: [
      { huruf: "A", teks: "<math><mfrac> <mn>2</mn><mn>3</mn> </mfrac></math>" },
      { huruf: "B", teks: "<math><mfrac> <mn>3</mn><mn>2</mn> </mfrac></math>" },
      { huruf: "C", teks: "<math><mfrac> <mn>5</mn><mn>4</mn> </mfrac></math>" },
      { huruf: "D", teks: "<math><mfrac> <mn>3</mn><mn>4</mn> </mfrac></math>" },
      { huruf: "E", teks: "<math><mfrac> <mn>3</mn><mn>5</mn> </mfrac></math>" }
    ],
    kunci: "A",
    pembahasan: "(1<math><mfrac> <mn>2</mn><mn>3</mn> </mfrac></math> + <math><mfrac> <mn>3</mn><mn>5</mn> </mfrac></math>) : 3<math><mfrac> <mn>2</mn><mn>5</mn> </mfrac></math> <br>=(<math><mfrac> <mn>5</mn><mn>3</mn> </mfrac></math> + <math><mfrac> <mn>3</mn><mn>5</mn> </mfrac></math>) : <math><mfrac> <mn>17</mn><mn>5</mn> </mfrac></math> <br>=<math><mfrac> <mn>34</mn><mn>15</mn> </mfrac></math> &times; <math><mfrac> <mn>5</mn><mn>17</mn> </mfrac></math> = <math><mfrac> <mn>2</mn><mn>3</mn> </mfrac></math>"
  },

  // ─── Soal 37 ───
  {
    id: 37, kategori: "TIU",
    teks: "Hasil dari (<math><mfrac> <mn>1</mn><mn>9</mn> </mfrac></math> + <math><mfrac> <mn>1</mn><mn>8</mn> </mfrac></math>) : <math><mfrac> <mn>17</mn><mn>18</mn> </mfrac></math> &times; 25% =....",
    pilihan: [
      { huruf: "A", teks: "0,62%" },
      { huruf: "B", teks: "6,25%" },
      { huruf: "C", teks: "25%" },
      { huruf: "D", teks: "27,8%" },
      { huruf: "E", teks: "62,5%" }
    ],
    kunci: "B",
    pembahasan: "(<math><mfrac> <mn>1</mn><mn>9</mn> </mfrac></math> + <math><mfrac> <mn>1</mn><mn>8</mn> </mfrac></math>) : <math><mfrac> <mn>17</mn><mn>18</mn> </mfrac></math> &times; 25% = <math><mfrac> <mn>17</mn><mn>72</mn> </mfrac></math> &times; <math><mfrac> <mn>18</mn><mn>17</mn> </mfrac></math> &times; <math><mfrac> <mn>25</mn><mn>100</mn> </mfrac></math><br>= <math><mfrac> <mn>1</mn><mn>16</mn> </mfrac></math> = 6,25%"
  },

  // ─── Soal 38 ───
  {
    id: 38, kategori: "TIU",
    teks: "Hasil dari <math><mfrac> <mn>4</mn><mn>7</mn> </mfrac></math> - <math><mfrac> <mn>3</mn><mn>2</mn> </mfrac></math> + 3 &times; <math><mfrac> <mn>4</mn><mn>7</mn> </mfrac></math> = ...",
    pilihan: [
      { huruf: "A", teks: "<math><mfrac> <mn>5</mn><mn>14</mn> </mfrac></math>" },
      { huruf: "B", teks: "<math><mfrac> <mn>7</mn><mn>14</mn> </mfrac></math>" },
      { huruf: "C", teks: "<math><mfrac> <mn>9</mn><mn>14</mn> </mfrac></math>" },
      { huruf: "D", teks: "<math><mfrac> <mn>11</mn><mn>14</mn> </mfrac></math>" },
      { huruf: "E", teks: "<math><mfrac> <mn>13</mn><mn>14</mn> </mfrac></math>" }
    ],
    kunci: "D",
    pembahasan: "<math><mfrac> <mn>4</mn><mn>7</mn> </mfrac></math> - <math><mfrac> <mn>3</mn><mn>2</mn> </mfrac></math> + 3 &times; <math><mfrac> <mn>4</mn><mn>7</mn> </mfrac></math> = <math><mfrac> <mn>4</mn><mn>7</mn> </mfrac></math> - <math><mfrac> <mn>3</mn><mn>2</mn> </mfrac></math> + <math><mfrac> <mn>12</mn><mn>7</mn> </mfrac></math><br>=<math><mfrac> <mn>8</mn><mn>14</mn> </mfrac></math> - <math><mfrac> <mn>21</mn><mn>14</mn> </mfrac></math> + <math><mfrac> <mn>24</mn><mn>14</mn> </mfrac></math> = <math><mfrac> <mn>11</mn><mn>14</mn> </mfrac></math>"
  },

  // ─── Soal 39 ───
  {
    id: 39, kategori: "TIU",
    teks: "Renang : Akuatik : .... = .... : .... : Lapangan",
    pilihan: [
      { huruf: "A", teks: "Kolam renang, Angkat beban, Binaraga" },
      { huruf: "B", teks: "Air, Lari, Rumput" },
      { huruf: "C", teks: "Kolam renang, Lompat jauh, Atletik" },
      { huruf: "D", teks: "Individu, Lompat jauh, Kardio" },
      { huruf: "E", teks: "Kolam renang, Angkat beban, Kardio" }
    ],
    kunci: "C",
    pembahasan: "Olahraga renang merupakan jenis olahraga akuatik yang dilakukan di kolam renang, sebagaimana olahraga lompat jauh merupakan jenis olahraga atletik yang dilakukan di lapangan"
  },

  // ─── Soal 40 ───
  {
    id: 40, kategori: "TIU",
    teks: "Malaysia : .... : Asia Tenggara = .... : Tokyo : ....",
    pilihan: [
      { huruf: "A", teks: "Nasi lemak, Namibia, Afrika Tengah" },
      { huruf: "B", teks: "Kuala lumpur, Jepang, Asia Timur" },
      { huruf: "C", teks: "Nasi lemak, Jepang, Asia Timur" },
      { huruf: "D", teks: "ASEAN, Indonesia, Asia Tenggara" },
      { huruf: "E", teks: "Kuala lumpur, Indonesia, Asia Tenggara" }
    ],
    kunci: "B",
    pembahasan: "Ibukota Malaysia adalah Kuala Lumpur dan berada di kawasan Asia Tenggara, sama dengan Ibukota Jepang adalah Tokyo yang berada di wilayah Asia Timur"
  },

  // ─── Soal 41 ───
  {
    id: 41, kategori: "TIU",
    teks: "'Masyarakat sering menyebut mars di media sosial dan menjadi planet paling disukai.' Hubungan objek-objek pada kalimat tersebut setara dengan...",
    pilihan: [
      { huruf: "A", teks: "Rumi mengunjungi Vietnam bersama dua rekan lainnya dan menjadi negara favoritnya karena keindahannya" },
      { huruf: "B", teks: "Rubi merasa tahun ini menjadi tahun pencapaian terbesar dalam hidupnya" },
      { huruf: "C", teks: "Permainan itu membutuhkan baskom yang berukuran besar dan sejumlah peserta yang mengikuti permainan hingga akhir" },
      { huruf: "D", teks: "Fuad sedang memahat patung untuk ditampilkan di galeri seni di kampusnya dua bulan lagi" },
      { huruf: "E", teks: "Banyak anak-anak yang mengunjungi planetarium untuk mempelajari bintang dan benda langit" }
    ],
    kunci: "A",
    pembahasan: "Objek pada kalimat 'Masyarakat sering menyebut mars di media sosial dan menjadi planet paling disukai' adalah mars dan planet setara dengan objek yang ada di opsi A yaitu 'Rumi mengunjungi Vietnam bersama dua rekan lainnya dan menjadi negara favoritnya karena keindahannya' Vietnam dan negara. Mars merupakan salah satu nama planet, begitu juga dengan Vietnam merupakan salah satu nama dari negara"
  },

  // ─── Soal 42 ───
  {
    id: 42, kategori: "TIU",
    teks: "'Bibi sering memasak bebek yang digoreng dan konsumsi telur setiap minggunya'. Hubungan objek-objek pada kalimat tersebut setara dengan...",
    pilihan: [
      { huruf: "A", teks: "Orang tuanya belum memberikan restu untuk pergi studi ke kampus luar negeri" },
      { huruf: "B", teks: "Diva sering melihat bunga yang ia temui di beberapa taman dan memotret nektar untuk ia bagikan di media sosialnya" },
      { huruf: "C", teks: "Pemerintah daerah perlu memberikan perhatian kepada anak-anak di daerah supaya dapat lebih mudah mengakses pendidikan secara adil" },
      { huruf: "D", teks: "Yuri mengoleksi buku tentang fotografi dan sering mengikuti lomba fotografi untuk mewujudkan mimpinya menjadi fotografer profesional" },
      { huruf: "E", teks: "Banyak akun media sosial yang memprediksi elektabilitas capres dan hasilnya masih sering berubah" }
    ],
    kunci: "B",
    pembahasan: "Objek pada kalimat 'Bibi sering memasak bebek yang digoreng dan konsumsi telur setiap minggunya' adalah bebek dan telur. Setara dengan opsi B 'Diva sering melihat bunga yang ia temui di beberapa taman dan memotret nektar untuk ia bagikan di media sosialnya' yaitu bunga dan nektar. Bebek dapat menghasilkan telur sebagaimana bunga dapat menghasilkan nektar"
  },

  // ─── Soal 43 ───
  {
    id: 43, kategori: "TIU",
    teks: "'Yayasan tersebut membagikan beras kepada masyarakat di daerah tertentu, terutama karena mereka mengonsumsi nasi untuk kebutuhan makannya.' Hubungan objek-objek pada kalimat tersebut setara dengan...",
    pilihan: [
      { huruf: "A", teks: "Rido rutin merawat motor setiap bulan di bengkel langganannya" },
      { huruf: "B", teks: "Indah sudah membuat jadwal untuk vaksin yang dianjurkan sebelum menikah" },
      { huruf: "C", teks: "Tim sudah memasukkan semua data dan siap menerima instruksi baru" },
      { huruf: "D", teks: "Kakek terbiasa mengumpulkan batok kelapa untuk dibakar dan berubah menjadi arang yang selalu ia jual di pasar" },
      { huruf: "E", teks: "Daun bawang mengandung probiotik yang bisa menjaga saluran pencernaan" }
    ],
    kunci: "D",
    pembahasan: "Objek pada kalimat 'Yayasan tersebut membagikan beras kepada masyarakat di daerah tertentu, terutama karena mereka mengonsumsi nasi untuk kebutuhan makannya' adalah beras dan nasi. Setara dengan opsi D 'Kakek terbiasa mengumpulkan batok kelapa untuk dibakar dan berubah menjadi arang yang selalu ia jual di pasar'. Beras melalui proses perubahan kimia yang dapat berubah menjadi nasi, sebagaimana batok kelapa melalui proses perubahan kimia dapat berubah menjadi arang"
  },

  // ─── Soal 44 ───
  {
    id: 44, kategori: "TIU",
    teks: "Ada project merakit suatu alat berat dapat diselesaikan oleh 6 orang dalam waktu 20 hari. Diasumsikan laju pekerjaan tiap pekerja sama. <br> <table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:12px 24px;text-align:left;'>Waktu (dalam hari) yang dibutuhkan untuk menyelesaikan pekerjaan merakit jika dikerjakan oleh 4 orang</td><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>20 hari</td></tr></tbody></table> <br>Manakah hubungan yang benar berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "A - B < 0" },
      { huruf: "B", teks: "2B - A = 10" },
      { huruf: "C", teks: "<math><mfrac> <mn>1</mn><mn>A</mn> </mfrac></math> > <math><mfrac> <mn>1</mn><mn>B</mn> </mfrac></math>" },
      { huruf: "D", teks: "5A - 7B = 0" },
      { huruf: "E", teks: "<math><mfrac> <mn>A</mn><mn>B</mn> </mfrac></math> = <math><mfrac> <mn>2</mn><mn>3</mn> </mfrac></math>" }
    ],
    kunci: "B",
    pembahasan: "Soal diatas merupakan perbandingan berbalik nilai.<br>6 pekerja ➔ 20 hari<br>4 pekerja ➔ A hari<br>karena merupakan perbandingan berbalik nilai, maka rumusnya adalah <math><mfrac> <mn>atas &times; atas</mn><mn>bawah</mn> </mfrac></math><br>A = <math><mfrac> <mn>6 &times; 20</mn><mn>4</mn> </mfrac></math> = 30 hari<br> karena A = 30 hari maka disubstitusikan ke opsi yang ada, dan akan ditemukan jawaban B yaitu 2(20) - (30) = 10 (<b>benar</b>)"
  },

  // ─── Soal 45 ───
  {
    id: 45, kategori: "TIU",
    teks: "Setiap 6 kg barang berbahan polimer dapat ditukar dengan uang Rp.8.000.<br> <table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:12px 24px;text-align:left;'>Banyak uang yang dapat dihasilkan dari mengumpulkan 15 kg polimer</td><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>Rp24.000</td></tr></tbody></table> <br>Manakah hubungan yang benar berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "2A > 3B" },
      { huruf: "B", teks: "3A < 2B" },
      { huruf: "C", teks: "B - A = 4.000" },
      { huruf: "D", teks: "A - B = 15.000" },
      { huruf: "E", teks: "B - 2A = 4.000" }
    ],
    kunci: "C",
    pembahasan: "Soal di atas merupakan perbandingan senilai, maka rumusnya adalah dikali silang.<br>6 kg ➔ Rp. 8.000<br>15 kg ➔ A. karena dikali silang, maka : <br>A = <math><mfrac> <mn>15 &times; 8.000</mn><mn>6</mn> </mfrac></math><br>A = 20.000<br>Karena A = 20.000 dan B = 24.000 maka yang memenuhi adalah opsi C.<br>B - A = 4.000<br>(24.000) - (20.000) = 4.000 (<b>benar</b>)"
  },

  // ─── Soal 46 ───
  {
    id: 46, kategori: "TIU",
    teks: "<table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:12px 24px;text-align:left;'>Ahmad memiliki beras 3,5 kuintal dan disumbangkan 200 kg. Jumlah beras yang dimiliki Ahmad sekarang adalah...</td><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>50 kg</td></tr></tbody></table> <br>Manakah hubungan yang benar antara kuantitas A dan B berdasarkan informasi yang diberikan...",
    pilihan: [
      { huruf: "A", teks: "A < 3B" },
      { huruf: "B", teks: "A > 3B" },
      { huruf: "C", teks: "A = 3B" },
      { huruf: "D", teks: "3A = B" },
      { huruf: "E", teks: "3A < B" }
    ],
    kunci: "C",
    pembahasan: "A ➔ Jumlah beras Ahmad = 350 - 200 = 150 kg<br>B ➔ 50 kg<br>Perbandingan A : B = 150 : 50 = 3 : 1<br>Maka kita uji perbandingan tersebut pada pilihan jawaban dan didapat hubungan yang tepat adalah A = 3B"
  },

  // ─── Soal 47 ───
  {
    id: 47, kategori: "TIU",
    teks: "Dengan laju 65 km/jam, jarak dua kota dapat ditempuh selama 1 jam 12 menit. Jika jarak dua kota tersebut dapat ditempuh selama 1 jam, laju atau kecepatan harus diubah menjadi...",
    pilihan: [
      { huruf: "A", teks: "72 km/jam" },
      { huruf: "B", teks: "74 km/jam" },
      { huruf: "C", teks: "76 km/jam" },
      { huruf: "D", teks: "78 km/jam" },
      { huruf: "E", teks: "80 km/jam" }
    ],
    kunci: "D",
    pembahasan: "Soal di atas merupakan perbandingan berbalik nilai. maka rumusnya adalah <math><mfrac> <mn>atas &times; atas</mn><mn>bawah</mn> </mfrac></math><br> 65 ➔ 1 jam 12 menit atau 72 menit<br>X ➔ 1 jam atau 60 menit<br>X = <math><mfrac> <mn>65 &times;  72</mn><mn>60</mn> </mfrac></math><br>X =  78<br>Jadi, lajunya harus diubah menjadi 78 km/jam"
  },

  // ─── Soal 48 ───
  {
    id: 48, kategori: "TIU",
    teks: "Suatu proyek dapat diselesaikan dalam waktu 90 hari dengan 60 pekerja. Setelah 30 hari, proyek dihentikan 15 hari. Berapa tambahan pekerja untuk menyelesaikan proyek tersebut tepat waktu?",
    pilihan: [
      { huruf: "A", teks: "10" },
      { huruf: "B", teks: "15" },
      { huruf: "C", teks: "20" },
      { huruf: "D", teks: "25" },
      { huruf: "E", teks: "30" }
    ],
    kunci: "C",
    pembahasan: "Untuk menyelesaikan soal ini digunakan rumus Tambahan pekerja = (pekerja libur &times; libur) : sisa hari<br>Tambahan pekerja = <math><mfrac> <mn>60 &times; 15</mn><mn>45</mn> </mfrac></math> = 20<br>Maka tambahan pekerja yang dibutuhkan untuk menyelesaikan proyek tersebut tepat waktu adalah 20 orang"
  },

  // ─── Soal 49 ───
  {
    id: 49, kategori: "TIU",
    teks: "Sebuah pabrik memproduksi 2000pcs baju dalam waktu 20 hari dengan 20 pekerja. Jika pada hari ke-15 pabrik mempekerjakan 4 pekerja tambahan, berapa banyak total hari yang dibutuhkan untuk menyelesaikan 2000pcs baju?",
    pilihan: [
      { huruf: "A", teks: "13 Hari" },
      { huruf: "B", teks: "15 Hari" },
      { huruf: "C", teks: "17 Hari" },
      { huruf: "D", teks: "19 Hari" },
      { huruf: "E", teks: "20 Hari" }
    ],
    kunci: "D",
    pembahasan: "Untuk menyelesaikan soal seperti ini perlu dicari sisa beban yang tidak ditangani oleh 20 pekerja awal. Caranya adalah dengan melakukan perkalian antara pekerja awal yaitu 20 dengan sisa hari yaitu 6 hari<br>sisa beban = 20 &times; 6 = 120<br> sisa beban ini dibagi dengan total pekerja yang ada sekarang yaitu 24<br>120 : 24 = 5 hari<br>Jadi total hari adalah = 14 + 5 = 19 "
  },

  // ─── Soal 50 ───
  {
    id: 50, kategori: "TIU",
    teks: "Sebuah pabrik dapat menghasilkan 500 unit produk dalam 6 jam dengan 10 orang pekerja. Setelah bekerja selama 4 jam, 4 orang berhenti bekerja dan tidak bisa melanjutkan pekerjaannya. Dengan jumlah pekerja sisanya, berapa lama waktu yang perlu ditambah agar target 500 unit tetap tercapai?",
    pilihan: [
      { huruf: "A", teks: "1 jam" },
      { huruf: "B", teks: "1 1/3 jam" },
      { huruf: "C", teks: "1 3/4 jam" },
      { huruf: "D", teks: "2 jam" },
      { huruf: "E", teks: "2 1/2 jam" }
    ],
    kunci: "B",
    pembahasan: "Rumus untuk mengerjakan soal ini adalah (pekerja berhenti &times; berapa lama waktunya) : sisa pekerja<br>Tambahan waktu = <math><mfrac> <mn>4 &times; 2</mn><mn>6</mn> </mfrac></math><br>Tambahan waktu = <math><mfrac> <mn>8</mn><mn>6</mn> </mfrac></math> = <math><mfrac> <mn>4</mn><mn>3</mn> </mfrac></math><br>Tambahan waktu = 1<math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math><br>Maka, tambahan waktu yang diperlukan agar target 500 unit tetap tercapai adalah 1<math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math> jam"
  },

  // ─── Soal 51 ───
  {
    id: 51, kategori: "TIU",
    teks: "Salah satu sebab Oni semangat adalah menonton film nasionalisme.<br>Bila Oni semangat, Paul juga ikut semangat.<br>Jika Paul semangat, Qomar malah akan bermalas-malasan.<br>Kesimpulannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Jika Qomar bermalas-malasan berarti Oni sedang menonton film nasionalisme" },
      { huruf: "B", teks: "Jika Oni semangat, maka Qomar akan bermalas-malasan" },
      { huruf: "C", teks: "Jika Paul semangat berarti Oni semangat" },
      { huruf: "D", teks: "Qomar sahabat Paul" },
      { huruf: "E", teks: "Oni sahabat Qomar" }
    ],
    kunci: "B",
    pembahasan: "Jika Oni semangat maka Paul semangat<br>Jika Paul semangat maka Qomar bermalas-malasan<br>Ini adalah silogisme dengan pola jika P ➔ Q, jika Q ➔ R, maka kesimpulannya adalah P ➔ R<br>Jadi kesimpulannya adalah Jika Oni semangat maka Qomar akan bermalas-malasan "
  },

  // ─── Soal 52 ───
  {
    id: 52, kategori: "TIU",
    teks: "Perusahaan X adalah perusahaan yang bergerak di bidang pendidikan.<br>Maxi dipromosikan untuk mendapat posisi baru di Perusahaan X sebagai direktur atau bendahara direksi.<br>Ternyata Ima terpilih sebagai bendahara direksi Perusahaan X sehingga posisi tersebut telah terisi.<br>Kesimpulan yang tepat dari pernyataan-pernyataan di atas adalah...",
    pilihan: [
      { huruf: "A", teks: "Maxi tidak mendapatkan posisi baru di Perusahaan X" },
      { huruf: "B", teks: "Ima tidak mendapatkan posisi baru di Perusahaan X" },
      { huruf: "C", teks: "Maxi tidak cocok mendapatkan posisi sebagai bendahara direksi di Perusahaan X" },
      { huruf: "D", teks: "Ima tidak cocok mendapatkan posisi sebagai direktur di Perusahaan X" },
      { huruf: "E", teks: "Maxi mendapatkan posisi baru sebagai direktur di Perusahaan X" }
    ],
    kunci: "E",
    pembahasan: "Ini adalah pola Tollens (<b>atau</b>)<br>premisnya adalah Maxi dipromosikan sebagai direktur <b>atau</b> bendahara<br>Sedangkan posisi bendahara direksi sudah terisi oleh Ima yang baru saja terpilih<br>Jadi, kesimpulannya adalah Maxi mendapatkan posisi baru sebagai direktur di perusahaan X"
  },

  // ─── Soal 53 ───
  {
    id: 53, kategori: "TIU",
    teks: "Tidak ada kemeja yang berukuran besar kecuali berwarna merah atau biru. Fernando memakai kemeja berwarna hitam. Kesimpulan yang paling tepat dari pernyataan-pernyataan di atas adalah...",
    pilihan: [
      { huruf: "A", teks: "Fernando memakai kemeja berukuran besar" },
      { huruf: "B", teks: "Fernando memakai kemeja berukuran sedang" },
      { huruf: "C", teks: "Fernando memakai kemeja berukuran tidak besar" },
      { huruf: "D", teks: "Fernando pasti memakai kemeja berukuran besar" },
      { huruf: "E", teks: "Fernando mungkin memakai kemeja berukuran besar" }
    ],
    kunci: "C",
    pembahasan: "P = Semua kemeja yang berukuran besar pasti berwarna merah atau biru<br>Q = Ternyata Fernando memakai kemeja berwarna hitam<br>Kesimpulannya adalah, Fernando memakai kemeja berukuran tidak besar karena kemeja hitam tidak termasuk ke dalam kemeja yang berukuran besar"
  },

  // ─── Soal 54 ───
  {
    id: 54, kategori: "TIU",
    teks: "Carilah gambar yang sesuai untuk melengkapi gambar berikut!<br><br> <img src='gambarsoal/tryout3/54.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B",
    pembahasan: "Gambar dari kiri ke kanan terus berotasi sekitar 45° searah jarum jam"
  },

  // ─── Soal 55 ───
  {
    id: 55, kategori: "TIU",
    teks: "Carilah gambar yang sesuai untuk melengkapi gambar berikut!<br><br> <img src='gambarsoal/tryout3/55.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "E",
    pembahasan: "Baris kedua menunjukkan masing-masing angka pada gambar jam di baris pertama"
  },

  // ─── Soal 56 ───
  {
    id: 56, kategori: "TIU",
    teks: "Carilah gambar yang sesuai untuk melengkapi gambar berikut!<br><br> <img src='gambarsoal/tryout3/56.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B",
    pembahasan: "Gambar pada kolom kedua merupakan gabungan kolom pertama dan pencerminannya. Gambar pada kolom ketiga merupakan hasil rotasi 90° searah jarum jam dari gambar kolom kedua"
  },

  // ─── Soal 57 ───
  {
    id: 57, kategori: "TIU",
    teks: "Carilah gambar yang berbeda!<br><br> <img src='gambarsoal/tryout3/57.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B",
    pembahasan: "Gambar yang berbeda dari gambar lainnya adalah B karena gambar bunganya tidak menyentuh garis gambar awan seperti pada gambar lainnya"
  },

  // ─── Soal 58 ───
  {
    id: 58, kategori: "TIU",
    teks: "Carilah gambar yang berbeda!<br><br> <img src='gambarsoal/tryout3/58.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Gambar yang berbeda dari gambar lainnya adalah D karena segitiganya bukan segitiga siku-siku"
  },

  // ─── Soal 59 ───
  {
    id: 59, kategori: "TIU",
    teks: "Carilah gambar yang berbeda!<br><br> <img src='gambarsoal/tryout3/59.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "C",
    pembahasan: "Gambar yang berbeda dari gambar lainnya adalah C karena gambar panahnya berhadapan, sedangkan pada gambar lainnya menunjukkan gambar awannya saling berlawanan arah"
  },

  // ─── Soal 60 ───
  {
    id: 60, kategori: "TIU",
    teks: "Carilah gambar yang sesuai untuk melengkapi gambar berikut!<br><br> <img src='gambarsoal/tryout3/60.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "A",
    pembahasan: "Kotak putih dan kotak hitam berotasi searah jarum jam"
  },

  // ─── Soal 61 ───
  {
    id: 61, kategori: "TIU",
    teks: "Carilah gambar yang sesuai untuk melengkapi gambar berikut!<br><br> <img src='gambarsoal/tryout3/61.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "A",
    pembahasan: "Jika dilihat itu merupakan gambar <b>+</b> yang hilang setengahnya selang seling dengan pola kiri-kanan-bawah-atas."
  },

  // ─── Soal 62 ───
  {
    id: 62, kategori: "TIU",
    teks: "Qonita rutin minum suplemen setiap hari kecuali hari Minggu. Setiap hari hanya minum satu jenis suplemen. Konsumsi tablet tambah darah di hari Selasa dan Sabtu. Vitamin B sehari sebelum konsumsi vitamin D. Ia menjadwalkan konsumsi vitamin C sehari sebelum konsumsi tablet tambah darah. Suplemen apa yang dikonsumsi Qonita hari Kamis dan Jum'at?",
    pilihan: [
      { huruf: "A", teks: "Vitamin B dan vitamin C" },
      { huruf: "B", teks: "Tablet tambah darah dan vitamin D" },
      { huruf: "C", teks: "Vitamin D dan vitamin C" },
      { huruf: "D", teks: "Vitamin C dan tablet tambah darah" },
      { huruf: "E", teks: "Vitamin B dan vitamin D" }
    ],
    kunci: "C",
    pembahasan: "Jadwal konsumsi suplemen yang sesuai dengan informasi yang ada pada soal adalah sebagai berikut :<br>Senin = Vitamin C<br>Selasa = Tablet tambah darah<br>Rabu = Vitamin B<br>Kamis = Vitamin D<br>Jum'at = Vitamin C<br>Sabtu = Tablet tambah darah<br>Sehingga suplemen yang dikonsumsi Qonita tiap Kamis dan Jum'at adalah Vitamin D dan Vitamin C"
  },

  // ─── Soal 63 ───
  {
    id: 63, kategori: "TIU",
    teks: "Dalam sebuah rangkaian ujian, terdapat ketentuan mengenai urutan pelaksanaan ujian. Ujian A harus diberikan setelah ujian B dilaksanakan. Selain itu, ujian C diberikan sebelum ujian A, dan ujian D hanya akan diberikan jika nilai ujian C rendah. Berdasarkan informasi tersebut, tentukan urutan yang mungkin terjadi untuk pelaksanaan ujian-ujian tersebut.",
    pilihan: [
      { huruf: "A", teks: "C-B-A" },
      { huruf: "B", teks: "B-C-A-D" },
      { huruf: "C", teks: "B-A-C-D" },
      { huruf: "D", teks: "C-A-D" },
      { huruf: "E", teks: "B-D-C-A" }
    ],
    kunci: "A",
    pembahasan: "Diketahui :<br>1. Ujian A harus diberikan setelah ujian B<br>2. Ujian C diberikan sebelum ujian A<br>3. Ujian D hanya diberikan jika nilai C rendah<br>berdasarkan informasi tersebut maka didapatkan pola urutan<br> C ➔ B ➔ A (jika nilai ujian C tinggi)<br> C ➔ B ➔ A ➔ D (jika nilai ujian C rendah)"
  },

  // ─── Soal 64 ───
  {
    id: 64, kategori: "TIU",
    teks: "Perhatikan tabel berikut!<br><br> <img src='gambarsoal/tryout3/64.jpeg'></img><br>Tabel di atas menunjukkan data penilaian kebersihan untuk lima hotel yang diberikan berdasarkan skala penilaian 60 sebagai nilai terendah dan 90 sebagai nilai tertinggi. Di antara 5 hotel tersebut, tentukan hotel mana yang memiliki penilaian kebersihan paling tinggi!",
    pilihan: [
      { huruf: "A", teks: "Hotel A" },
      { huruf: "B", teks: "Hotel B" },
      { huruf: "C", teks: "Hotel C" },
      { huruf: "D", teks: "Hotel D" },
      { huruf: "E", teks: "Hotel E" }
    ],
    kunci: "D",
    pembahasan: "Hotel dengan nilai kebersihan tertinggi adalah hotel D dengan nilai kebersihan 85"
  },

  // ─── Soal 65 ───
  {
    id: 65, kategori: "TIU",
    teks: "Perhatikan tabel berikut!<br><br> <img src='gambarsoal/tryout3/65.jpeg'></img><br>Seorang penerima bantuan sosial harus memenuhi syarat memiliki pendapatan bulanan maksimal Rp.3000.000 dan memiliki minimal 3 anggota keluarga. Maka penerima bantuan sosial yang memenuhi syarat adalah...",
    pilihan: [
      { huruf: "A", teks: "Ali, Citra, dan Dedi" },
      { huruf: "B", teks: "Budi, Eka, dan Gani" },
      { huruf: "C", teks: "Ali, Citra, dan Fina" },
      { huruf: "D", teks: "Citra, Dedi, dan Gani" },
      { huruf: "E", teks: "Eka, Fina, dan Hilda" }
    ],
    kunci: "C",
    pembahasan: "Dari tabel tersebut dapat kita pilih yang memenuhi syarat :<br>1. Berdasarkan pendapatan, yang memenuhi syarat adalah : Ali, Citra, Eka, Fina, Gani<br>2. Anggota keluarga yang memiliki minimal 3 anggota keluarga : Ali, Budi, Citra, Dedi, Fina, Gani, Hilda<br>Dari kedua persyaratan tersebut, yang memenuhi kedua-duanya dari persyaratan yang disyaratkan pada soal adalah Ali, Citra dan Fina"
  },

  // ════════════════════════════════════════════
  // TES KARAKTERISTIK PRIBADI (TKP) — 45 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 66 ───
  {
    id: 66, kategori: "TKP",
    teks: "Permasalahan banjir di suatu kota masih menjadi langganan setiap tahunnya jika curah hujan sangat tinggi. Untuk membantu mengatasi hal tersebut, Fahri dan tim bekerja di Dinas Sumber Daya Air perlu mengupayakan...",
    pilihan: [
      { huruf: "A", teks: "Melakukan penyuluhan dengan target sasaran warga di daerah yang rawan banjir untuk tidak membuang sampah sembarangan dan menanam tanaman <em>indoor</em>", poin: 4 },
      { huruf: "B", teks: "Mengevakuasi warga yang terdampak banjir dan memastikan dapur tempat pengungsian terjaga dengan bersih untuk menjaga kualitas asupan gizi warga yang sedang mengungsi", poin: 2 },
      { huruf: "C", teks: "Membersihkan puing-puing atau barang-barang akibat terkena bencana dan melaporkan tindakan tanggap bencana", poin: 1 },
      { huruf: "D", teks: "Membangun infrastruktur pengendali banjir seperti meningkatkan kapasitas drainase kawasan, waduk, dan pembangunan sistem pompa", poin: 5},
      { huruf: "E", teks: "Membuat peta kawasan yang rawan bencana dan menyosialisasikan warga setempat untuk tanggap bencana", poin: 3 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 2, C = 1, D = 5, E = 3<br>Untuk mencegah terjadinya banjir lagi, Dinas Sumber Daya Air dapat mengupayakan untuk membangun infrastruktur pengendali banjir seperti kapasitas drainase kawasan, waduk, dan membangun sistem pompa. Melakukan penyuluhan untuk tidak membuang sampah sembarangan dan menanam tanaman indoor juga salah satu tindakan pencegahan jadi mendapat nilai 4. Membuat peta kawasan rawan bencana dan menyosialisaikan warga untuk tanggap bencana termasuk kegiatan pencegahan tetapi tidak berdampak langsung jadi mendapat nilai 3. Mengevakuasi warga terdampak banjir merupakan tindakan setelah terjadinya banjir sehingga mendapat nilai 2. Begitu juga membersihkan puing-puing  akibat bencana merupakan tindakan terakhir yang bisa dilakukan sehingga mendapat nilai 1"
  },

  // ─── Soal 67 ───
  {
    id: 67, kategori: "TKP",
    teks: "Penyelenggara pelayanan publik harus mampu menyediakan pelayanan yang berkualitas, bersih, tanggap, transparan, akuntabel, dan inklusif. Salah satu penyedia pelayanan publik adalah rumah sakit. Bagaimana cara rumah sakit meningkatkan pelayanan supaya menjadi lebih baik lagi?",
    pilihan: [
      { huruf: "A", teks: "Menyediakan berbagai pelayanan kesehatan yang lengkap untuk mengundang para pengunjung rumah sakit lebih banyak lagi", poin: 2 },
      { huruf: "B", teks: "Menentukan anggaran untuk dialokasikan ke bagian pelayanan yang paling ramai pengunjungnya", poin: 1 },
      { huruf: "C", teks: "Rutin mengadakan survei kepuasan pelanggan yang datang ke rumah sakit dan menjadikan hasil survei tersebut sebagai acuan peningkatan pelayanan berikutnya", poin: 5 },
      { huruf: "D", teks: "Menentukan beberapa hari dalam sebulan untuk wawancara acak dengan pengunjung di berbagai poli", poin: 3 },
      { huruf: "E", teks: "Memberikan kesempatan kepada para mahasiswa magang untuk turut serta dalam pelayanan kesehatan dan ramah tamah dalam memberikan pelayanan", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 1, C = 5, D = 3, E = 4<br>Ada berbagai cara untuk meningkatkan kualitas pelayanan publik seperti di rumah sakit. Upaya yang paling tepat adalah dengan mengadakan survei kepuasan pelanggan yang datang ke rumah sakit dan menjadikan survei tersebut acuan untuk peningkatan pelayanan berikutnya. Memberikan kesempatan kepada mahasiswa magang juga merupakan langkah yang baik tetapi tidak langsung menjawab apa yang diinginkan pengunjung sehingga mendapat nilai 4. Menentukan beberapa hari untuk wawancara kepada pengunjung dapat dilakukan tetapi kurang efektif dan membutuhkan banyak waktu sehingga mendapat nilai 3. Menyediakan berbagai fasilitas pelayanan kesehatan demi mengundang lebih banyak pengunjung justru berfokus pada kuantitas bukan kualitas pelayanan sehingga mendapat nilai 2. dan Mengalokasikan anggaran ke sektor pelayanan yang ramai tidak berfokus untuk meningkatkan pelayanan jadi dapat nilai 1 "
  },

  // ─── Soal 68 ───
  {
    id: 68, kategori: "TKP",
    teks: "Anda merupakan seorang Kepala Dinas Pendidikan yang mendapatkan catatan khusus bahwa pelayanan publik di instansi Anda perlu dibenahi, tidak hanya internal SOP saja, tetapi juga harus lebih transparan ke masyarakat. Bagaimana cara memperbaikinya?",
    pilihan: [
      { huruf: "A", teks: "Membuat poster yang berisi alur pelayanan yang dapat dibaca oleh seluruh pengunjung yang datang", poin: 3 },
      { huruf: "B", teks: "Memperbaiki SOP, rutin berdiskusi mengenai rencana perbaikan, dan menentukan PIC dalam program perbaikan tersebut", poin: 4 },
      { huruf: "C", teks: "Memberikan teguran tertulis kepada beberapa pegawai yang memiliki nilai performa yang kurang memenuhi syarat pelayanan", poin: 1 },
      { huruf: "D", teks: "Memberikan seluruh pegawai pelatihan yang sama demi meningkatkan pelayanan", poin: 2 },
      { huruf: "E", teks: "Membuat sistem pelayanan terpadu satu pintu dengan memperjelas produk pelayanan, menyediakan pos pengaduan, dan menerapkan standar pelayanan", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 3, B = 4, C = 1, D = 2, E = 5<br>Upaya perbaikan di bidang pelayanan publik perlu ditelusuri apa saja yang menjadi kekurangan lalu membuat kesepakatan untuk memperbaikinya dengan alur yang lebih sederhana tetapi lebih terfokus untuk terpenuhinya pelayanan kebutuhan masyarakat. Sehingga tindakan yang sesuai adalah dengan membuat sistem pelayanan terpadu satu pintu dengan memperjelas produk pelayanan, menyediakan pos pengaduan, dan menerapkan standar pelayanan"
  },

  // ─── Soal 69 ───
  {
    id: 69, kategori: "TKP",
    teks: "Anda adalah seorang Kepala Dinas di provinsi anda. Terdapat beberapa daerah yang masyarakatnya merasa kesulitan dalam mengurus keperluan di pelayanan publik karena waktu pengurusan yang tidak sebentar serta jarak kantor pelayanan publik yang berjauhan. Hal tersebut tidak mencerminkan pelayanan publik yang bermanfaat langsung ke masyarakat. Apa upaya yang dapat anda lakukan? ",
    pilihan: [
      { huruf: "A", teks: "Merevisi kebijakan pelaksanaan pelayanan publik yang lebih memberikan keleluasaan lembaga yang melaksanakannya", poin: 2 },
      { huruf: "B", teks: "Mengganti sistem lama dengan sistem baru atas kesepakatan dalam dialog terbuka dengan beberapa masyarakat setempat", poin: 4 },
      { huruf: "C", teks: "Melakukan pengadaan mal pelayanan publik di setiap kabupaten/kota yang cepat, dekat, dan transparan", poin: 5 },
      { huruf: "D", teks: "Masyarakat kritis terhadap kebijakan pemerintah yang akan memperbanyak jumlah lembaga pelayanan publik di setiap kabupaten/kota", poin: 1 },
      { huruf: "E", teks: "Berkolaborasi dengan <em>content creator</em> untuk meningkatkan <em>awareness</em> dan meningkatkan jumlah pengguna pelayanan publik", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 4, C = 5, D = 1, E = 3<br>Konteks masalah yang ada pada soal adalah beberapa daerah yang masyarakatnya merasa kesulitan dalam mengurus keperluan di pelayanan publik karena waktu pengurusan yang tidak sebentar serta jarak kantor pelayanan publik yang berjauhan sehingga jawaban yang tepat adalah melakukan pengadaan mal pelayanan publik di setiap kabupaten/kota yang cepat, dekat, dan transparan"
  },

  // ─── Soal 70 ───
  {
    id: 70, kategori: "TKP",
    teks: "Anda adalah seorang kapolda. Menjelang hari raya sudah menjadi tradisi mudik setiap tahunnya dari berbagai akses baik darat, laut, maupun udara. Polda memiliki tugas untuk melakukan rekayasa lalu lintas di sekitar pelabuhan penyeberangan Merak untuk mengurai kemacetan. Sebagai kapolda, apa yang dapat anda lakukan...",
    pilihan: [
      { huruf: "A", teks: "Menerapkan <em>delaying system</em> (sistem penundaan) menuju pelabuhan merak dengan memilah kendaraan pemudik dan diarahkan ke <em>rest area</em>", poin: 5 },
      { huruf: "B", teks: "Setiap sopir wajib menunjukkan kartu identitas dan wawancara sekilas mengenai tujuan mudik", poin: 2 },
      { huruf: "C", teks: "hanya memperbolehkan warga setempat untuk menyeberangi Pelabuhan Merak", poin: 3 },
      { huruf: "D", teks: "Menerapkan sistem pembayaran di satu tempat menggunakan kartu", poin: 4 },
      { huruf: "E", teks: "Menyosialisasikan kepada masyarakat untuk lebih memilih transportasi udara saja daripada transportasi laut", poin: 1 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 3, C = 2, D = 4, E = 1<br>Polda dapat bertugas untuk melakukan rekayasa lalu lintas di sekitar pelabuhan penyeberangan untuk mengurangi kemacetan dengan menerapkan delaying system (sistem penundaan) menuju pelabuhan Merak dengan memilah kendaraan pemudik dan diarahkan untuk dimasukkan ke rest area"
  },

  // ─── Soal 71 ───
  {
    id: 71, kategori: "TKP",
    teks: "Kualitas pelayanan dapat dilihat dari beberapa indikator seperti reliabilitas, bukti fisik, empati, daya tanggap, dan jaminan. Pelayanan publik wajib ada di semua daerah. Sebagai orang yang bekerja di pemerintahan desa, apa yang dapat anda lakukan dalam pengelolaan pelayanan administratif?",
    pilihan: [
      { huruf: "A", teks: "Berpedoman pada peraturan perundang-undangan dan mengadakan sosialisasi,serta pelatihan tiap orang yang bertanggung jawab pada kegiatan administrasi", poin: 5 },
      { huruf: "B", teks: "Memperbanyak staf yang bertanggung jawab di layanan administrasi di setiap lembaga pelayanan publik", poin: 3 },
      { huruf: "C", teks: "Membuat kotak saran anonim yang dapat ditulis oleh siapapun baik pengunjung maupun staf lembaga pelayanan publik", poin: 2 },
      { huruf: "D", teks: "Memastikan korporatisasi unit pelayanan publik dapat berjalan dengan baik", poin: 1 },
      { huruf: "E", teks: "Menjaga keamanan dokumen dengan memberikan rak khusus di sejumlah ruangan dalam lembaga pelayanan publik", poin: 4 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 3, C = 2, D = 1, E = 4<br>Pelayanan administratif yang berfokus pada menghasilkan dokumen resmi yang dibutuhkan masyarakat berarti sebagai orang yang bekerja dipemerintahan desa tetap harus berpedoman pada peraturan perundang-undangan dan mengadakan sosialisasi, serta pelatihan tiap orang yang bertanggung jawab pada kegiatan administratif"
  },

  // ─── Soal 72 ───
  {
    id: 72, kategori: "TKP",
    teks: "Anda adalah seorang promotor konser. Konser salah satu musisi akan dijadwalkan berlangsung di stadion dan sudah direncanakan sejak tahun lalu. Akan tetapi, beberapa bulan kemudian diumumkan ada pertandingan olahraga di stadion tersebut yang menjadikan Indonesia sebagai tuan rumah. Apa yang dapat Anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Tetap melaksanakan konser di stadion tertentu dengan memindahkan jam konser setelah pertandingan olahraga tersebut selesai", poin: 2 },
      { huruf: "B", teks: "Membuat kesepakatan tertulis bahwa promotor konser dapat memastikan bahwa tidak ada kerusakan rumput karena penonton", poin: 4 },
      { huruf: "C", teks: "Memberikan bangku kepada penonton konser yang berdiri dengan memberikan kesempatan mereka untuk membayar biaya tambahan", poin: 1 },
      { huruf: "D", teks: "Mendiskusikan dengan <em>stakeholder</em> untuk berpindah tempat ke stadion lain untuk mengadakan konser tersebut", poin: 5 },
      { huruf: "E", teks: "Bekerja sama dengan petugas kebersihan dan petugas <em>maintenance</em> rumput di stadion tersebut supaya cepat siap dipakai pertandingan olahraga usai pelaksanaan konser", poin: 3 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 4, C = 1, D = 5, E = 3<br>Sebagai promotor profesional, memindahkan venue ke stadion lain melalui diskusi bersama para stakeholder (manajemen artis, pihak sponsor, penyedia venue, dan pihak berwenang) adalah solusi paling realistis. Pertandingan skala nasional/internasional yang membawa nama negara (Indonesia sebagai tuan rumah) biasanya memiliki regulasi ketat (lockout period) serta perlindungan lapangan yang tidak bisa diganggu gugat."
  },

  // ─── Soal 73 ───
  {
    id: 73, kategori: "TKP",
    teks: "Anda adalah seorang pegawai tetap BUMN yang bertugas sebagai pegawai di dalam kereta jarak jauh dan mengimbau para penumpang untuk tidak merokok. Ternyata ditemui ada salah satu penumpang yang merokok di dalam toilet kereta, bagaimana tindakan anda?",
    pilihan: [
      { huruf: "A", teks: "Mendokumentasikan bekas rokok yang dibuang penumpang tersebut di dalam toilet kereta", poin: 3 },
      { huruf: "B", teks: "Mengumpulkan bukti dahulu dari laporan yang didapat untuk memastikan tidak ada kesalahan informasi", poin: 4 },
      { huruf: "C", teks: "Meminta salah satu anggota keluarganya untuk menegurnya dengan baik", poin: 1 },
      { huruf: "D", teks: "Menegur dan menurunkan penumpang tersebut di stasiun terdekat", poin: 5 },
      { huruf: "E", teks: "Memberikan sanksi tertulis kepada penumpang tersebut untuk tidak melakukannya lagi di kemudian hari", poin: 2 }
    ],
    kunci: "D",
    pembahasan: "A = 3, B = 4, C = 1, D = 5, E = 2<br>Opsi yang paling tepat adalah D karena ini adalah tindakan paling tepat dan sesuai dengan SOP resmi PT KAI. Kereta api adalah kawasan bebas asap rokok. Merokok di toilet dapat memicu alarm kebakaran dan membahayakan keselamatan seluruh penumpang. Sanksi tegas berupa penurunan di stasiun terdekat memberikan efek jera seketika dan menegakkan aturan tanpa kompromi."
  },

  // ─── Soal 74 ───
  {
    id: 74, kategori: "TKP",
    teks: "Randi adalah seorang <em>voice over</em> pemula yang baru memulai kariernya. Proyek yang pertama adalah sebagai <em>voice over</em> iklan salah satu platform musik dengan durasi 15 detik. Bagaimana supaya performa pertamanya dinilai baik?",
    pilihan: [
      { huruf: "A", teks: "Meminta <em>feedback</em> dari orang-orang terdekat dari hasil latihan-latihannya dan mendokumentasikannya untuk di review hingga mendapatkan hasil yang diinginkan", poin: 4 },
      { huruf: "B", teks: "Survei dengan telurus secara mandiri iklan-iklan sejenis untuk dijadikan bahan latihan", poin: 1 },
      { huruf: "C", teks: "Menuliskan poin-poin penting setiap kali rapat membahas konsep iklan yang akan diproduksi untuk memastikan latihan sesuai dengan poin tersebut", poin: 2 },
      { huruf: "D", teks: "Berdiskusi dengan manajer iklan tersebut untuk merencnakan konsep narasi iklan yang akan diproduksi", poin: 3 },
      { huruf: "E", teks: "Membaca naskah dengan seksama, berlatih, dan menjaga kesehatan suaranya terutama saat hari rekaman", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 4, B = 1, C = 2, D = 3, E = 5<br>Menjadi seorang pemula di dunia voice over memiliki tantangan tersendiri yang harus dilalui. Sehingga Randi harus membaca naskah dengan seksama, berlatih, dan menjaga kesehatan suaranya terutama saat hari rekaman supaya performa pertamanya dinilai baik"
  },

  // ─── Soal 75 ───
  {
    id: 75, kategori: "TKP",
    teks: "Hj. Halimah ditunjuk menjadi seorang manajer keuangan. Perusahaan tersebut sebelumnya belum pernah ada manajer keuangan perempuan. Kondisi tersebut tidak serta merta mulus untuk bekerja sama menyelesaikan pekerjaannya dalam bidang keuangan karena ada beberapa pegawai yang meragukan kemampuannya. Bagaimana Hj. Halimah harus bersikap?",
    pilihan: [
      { huruf: "A", teks: "Sering berdiskusi dengan pimpinan perusahaan untuk meningkatkan <em>personal branding</em> dan meyakinkan pegawai lainnya", poin: 1 },
      { huruf: "B", teks: "Bersikap hangat dengan tim, profesional dan tegas ketika bekerja, dan melibatkan tim untuk mengambil keputusan bersama", poin: 5 },
      { huruf: "C", teks: "Mengikuti kursus pelatihan yang meningkatkan bagian skill yang sempat diragukan oleh beberapa pegawai tersebut", poin: 3 },
      { huruf: "D", teks: "Transparan dengan semua rekan kerja dan berani menawarkan bantuan jika ada rekan kerja yang membutuhkannya", poin: 4 },
      { huruf: "E", teks: "Meyakinkan mereka yang meragukan kemampuannya dengan lebih gigih bekerja secara independen hingga menghasilkan prestasi", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 1, B = 5, C = 3, D = 4, E = 2<br>Sebagai seorang manajer baru yang menghadapi keraguan dari tim, pendekatan terbaik adalah kombinasi antara kepemimpinan interpersonal yang inklusif dan kepemimpinan profesional yang tegas. Bersikap hangat akan mencairkan resistensi/penolakan, ketegasan dan profesionalisme menunjukkan kapabilitas kepemimpinan, sedangkan melibatkan tim dalam pengambilan keputusan akan menumbuhkan rasa percaya (trust) dan rasa memiliki (ownership) di antara para anggota tim."
  },

  // ─── Soal 76 ───
  {
    id: 76, kategori: "TKP",
    teks: "Ayu senang bekerja sebagai penulis artikel di website luar negeri yang menggunakan bahasa inggris. Setiap kali akan memproduksi tulisan, ia diberikan format tertentu dan ia perlu saling berkirim email dengan editor. Jika ada revisi dari editor, apa yang harus Ayu lakukan?",
    pilihan: [
      { huruf: "A", teks: "Membaca dengan seksama apa saja yang perlu direvisi dan membandingkan dengan tulisan sebelumnya", poin: 4 },
      { huruf: "B", teks: "Membuat kerangka tulisan untuk memproduksi karya tulisan selanjutnya", poin: 1 },
      { huruf: "C", teks: "Cepat merespons email tersebut, membaca dengan detail apa saja yang perlu direvisi dan berdiskusi jika diperlukan", poin: 5 },
      { huruf: "D", teks: "Evaluasi hasil tulisan sebelumnya bahkan sebelum mendapatkan email dari editor", poin: 2 },
      { huruf: "E", teks: "Segera merespons email editor dan berdiskusi melalui telepon untuk mendapatkan gambaran lebih jelas mengenai arahan revisi tersebut", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 4, B = 1, C = 5, D = 2, E = 3<br>Opsi C adalah pilihan tepat karena ini adalah tindakan yang paling profesional dan komprehensif. Respons cepat menandakan etika kerja yang baik, membaca detail memastikan semua poin revisi dipahami, dan membuka ruang diskusi melalui email menunjukkan sikap kooperatif jika ada arahan yang kurang jelas."
  },

  // ─── Soal 77 ───
  {
    id: 77, kategori: "TKP",
    teks: "Menjelang hari raya biasanya banyak orang yang membersihkan dan memperindah rumahnya. Margi sudah biasa menjadi pekerja lepas untuk menyetir mobil dan/atau membersihkan rumah beberapa orang kenalannya. Lalu ia dikontrak oleh rekan lamanya untuk membersihkan rumahnya, serta menjadi sopir untuk mudik di hari raya. Apa yang harus dilakukan Margi supaya dapat menyelesaikannya dengan baik?",
    pilihan: [
      { huruf: "A", teks: "Menanyakan dengan detail keuntungan apa saja yang akan didapatkan selama proses pengerjaan dan perjalanan mudik tersebut", poin: 1 },
      { huruf: "B", teks: "Memberikan jawabannya di kemudian hari untuk ia pikirkan dahulu mengenai beban kerjanya", poin: 2 },
      { huruf: "C", teks: "Sepakat dengan bernegosiasi untuk memberikan upah sebagian di awal sebagai jaminan", poin: 3 },
      { huruf: "D", teks: "Mengajak rekan lain untuk bekerja membantunya di bagian pekerjaan membersihkan rumah supaya lebih cepat selesai", poin: 4 },
      { huruf: "E", teks: "Menyanggupi sesuai dengan jadwal yang ditentukan, mengerjakannya sebaik mungkin, dan menjaga kesehatan untuk perjalanan mudik tersebut", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 1, B = 2, C = 3, D = 4, E = 5<br>Opsi E ini adalah jawaban paling ideal. Margi menunjukkan integritas dan tanggung jawab penuh atas tawaran kerja yang diterimanya. Ia merencanakan eksekusi dengan fokus pada kualitas kerja (mengerjakannya sebaik mungkin) serta fisik (menjaga kesehatan), yang sangat krusial mengingat tugas menyetir perjalanan jauh (mudik) membutuhkan stamina yang prima."
  },

  // ─── Soal 78 ───
  {
    id: 78, kategori: "TKP",
    teks: "Ari bukan siswa yang rajin dan pandai semasa kelas satu dan kelas dua. Lalu kelas tiga ia tersadar untuk lebih rajin belajar untuk mendukung masa depannya. Ia sudah menargetkan untuk masuk ke kampus terbaik negeri, tetapi kondisinya mengharuskan ia menjalani <em>gap year</em> selama setahun. Tindakan yang harus Ari ambil adalah",
    pilihan: [
      { huruf: "A", teks: "Meminta bantuan rekan yang sudah berhasil masuk ke kampus terbaik negeri untuk mengajarinya belajar", poin: 4 },
      { huruf: "B", teks: "Membuat strategi dan jadwal belajar yang terstruktur sambil menargetkan terpenuhinya syarat yang diminta kampus tersebut", poin: 5 },
      { huruf: "C", teks: "Bekerja paruh waktu untuk mengumpukan uang untuk biaya pendidikannya selama masa <em>gap year</em>", poin: 2 },
      { huruf: "D", teks: "Mengikuti berbagai kursus gratis dan berbayar secara otodidak maupun bersama dengan rekan-rekannya", poin: 3 },
      { huruf: "E", teks: "Menargetkan untuk bekerja di perseroan terbatas yang menerima ijazahnya saat ini dan berfokus untuk kenaikan karier saat sudah diterima di perseroan terbatas tersebut", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 2, D = 3, E = 1<br>Opsi B adalah yang paling tepat karena ini adalah tindakan paling mendasar, terencana, dan strategis. Menghadapi gap year dengan target masuk kampus terbaik memerlukan fondasi berupa perencanaan waktu, kedisiplinan, dan peta belajar yang jelas agar persiapan tes masuk berjalan optimal dan terukur."
  },

  // ─── Soal 79 ───
  {
    id: 79, kategori: "TKP",
    teks: "Suatu perseroan terbatas memberikan beasiswa untuk para pegawainya yang menjadi calon kandidat melanjutkan studi magister di luar negeri dengan         mensyaratkan mereka membuat proposal dan mempresentasikannya di depan para juri jika lolos proses wawancara. Supaya calon kandidat yang sudah masuk final dapat membuat proposal yang lebih berkualitas, preseroan terbatas tersebut dapat...",
    pilihan: [
      { huruf: "A", teks: "Mendelegasikan tugas kepada seorang pegawai untuk membuat rangkuman materi yang dapat membantu mereka menyusun proposal dengan sistematis dan benar", poin: 3 },
      { huruf: "B", teks: "Memberikan dana kepada mereka untuk mengikuti pelatihan khusus penulisan proposal", poin: 4 },
      { huruf: "C", teks: "Memberikan kesempatan beberapa finalis untuk berkonsultasi dengan pimpinan mengenai pembuatan proposal yang sesuai dengan keinginan pimpinan", poin: 2 },
      { huruf: "D", teks: "Melakukan pendampingan masing-masing finalis dari pegawai-pegawai yang sudah lebih dahulu lulus dari kampus luar negeri sesuai dengan bidangnya masing-masing", poin: 5 },
      { huruf: "E", teks: "Menyewa jasa seorang mentor yang ahli dalam proses perekrutan beasiswa studi ke luar negeri untuk me-<em>monitoring</em> para finalis supaya lolos mendapatkan beasiswa magister ke luar negeri", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 3, B = 4, C = 2, D = 5, E = 1<br>Opsi D adalah yang paling tepat karena ini adalah langkah paling efektif dan efisien (internal knowledge sharing). Alumni kampus luar negeri di internal perusahaan sudah memahami ekspektasi akademis, budaya penulisan proposal luar negeri, sekaligus relevansi bidang kerja di perusahaan. Pendampingan one-on-one sesuai bidang membuat kualitas proposal meningkat secara spesifik dan terarah."
  },

  // ─── Soal 80 ───
  {
    id: 80, kategori: "TKP",
    teks: "Anda bergabung dengan komunitas pecinta lingkungan dan mengunjungi suatu daerah yang banyak sampahnya. Sampah sendiri masih menjadi suatu masalah yang terjadi di Indonesia dan seluruh dunia yang harus diatasi, apalagi dari tahun ke tahun jumlahnya semakin meningkat. Sebagai anggota komunitas pecinta lingkungan, apa yang dapat Anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Bekerja sama dengan perusahaan yang bersedia menerima sampah yang masih bisa diolah untuk dibuat suatu produk", poin: 4 },
      { huruf: "B", teks: "Usul ke komunitas untuk membersihkannya bersama, bekerja sama dengan pabrik yang mau menyortirnya, dan mengubah sampah menjadi suatu produk yang dapat dipakai dan awet", poin: 5 },
      { huruf: "C", teks: "Membentuk tim tertentu untuk membuat tempat sampah khusus dan memilahnya sesuai dengan kategorinya untuk didaur ulang", poin: 3 },
      { huruf: "D", teks: "Memasang papan pengumuman untuk tidak membuang sampah di sungai supaya dibaca warga setempat dan atas izin tokoh masyarakat", poin: 2 },
      { huruf: "E", teks: "Menentukan jadwal untuk Anda membersihkan sendiri sungai yang penuh sampah tersebut", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 3, D = 2, E = 1<br>Opsi B adalah yang paling tepat karena Pilihan ini paling komprehensif, strategis, dan berdampak jangka panjang. Tindakan ini mencakup kolaborasi tim internal komunitas (aksi pembersihan), kemitraan eksternal (pabrik sortir), dan penerapan prinsip ekonomi sirkular (mengubah sampah menjadi produk awet). Pendekatan ini menyelesaikan masalah secara holistik dari tingkat hulu hingga hilir."
  },

  // ─── Soal 81 ───
  {
    id: 81, kategori: "TKP",
    teks: "Ada beberapa pelabuhan yang pengelolaannya belum optimal di pengadaan barang, bongkar muat, antrean kontainer, dan lainnya. Selain itu, beberapa pelabuhan masih melakukan pembayaran di beberapa pos. Bagaimana supaya sistem pembayaran tersebut menjai lebih efektif dan efisien?",
    pilihan: [
      { huruf: "A", teks: "Bekerja sama dengan berbagai <em>stakeholder</em> untuk menerapkan sistem pembayaran tunggal sebagai transaksi digital di pelabuhan yang dilakukan hanya satu kali", poin: 5 },
      { huruf: "B", teks: "Mewajibkan otoritas pelabuhan untuk merevisi beberapa kebijakan untuk mengatur pengadaan barang di Pelabuhan", poin: 3 },
      { huruf: "C", teks: "Memastikan alur pelayaran, dermaga, gudang, kolam pelabuhan, dan penunjang lainnya tersedia", poin: 2 },
      { huruf: "D", teks: "Awak kapal selalu menyediakan seluruh dokumen yang diminta dalam proses pemeriksaan administrasi ketika masuk dan keluar kapal", poin: 4 },
      { huruf: "E", teks: "Otoritas pelabuhan perlu memiliki rencana cadangan untuk mengatasi situasi cuaca buruk yang bisa membuat keterlambatan bongkar muat", poin: 1 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 3, C = 2, D = 4, E = 1<br>Opsi A adalah yang paling tepat karena pilihan ini secara langsung menjawab inti permasalahan (sistem pembayaran yang belum efektif/efisien) dengan memanfaatkan Teknologi Informasi dan Komunikasi (TIK). Implementasi sistem transaksi digital satu pintu (single billing/single window system) menghilangkan birokrasi berbelit, mencegah pembayaran berulang di berbagai pos, memangkas waktu antrean, dan meningkatkan transparansi operasional pelabuhan secara signifikan."
  },

  // ─── Soal 82 ───
  {
    id: 82, kategori: "TKP",
    teks: "Masyarakat masih dibuat bingung dengan banyaknya aplikasi untuk mengakses setiap layanan yang pemerintah sediakan. Hal tersebut menunjukkan bahwa pelayanan masih berorientasi pada per instansi pemerintah bukan pada kebutuhan pengguna. Solusi yang dapat diterapkan untuk permasalahan ini adalah...",
    pilihan: [
      { huruf: "A", teks: "Mendesain tampilan aplikasi yang <em>user friendly</em> sehingga mudah dipahami oleh pengguna dari berbagai usia", poin: 1 },
      { huruf: "B", teks: "Kolaborasi tim lintas sektor untuk menciptakan layanan digital terpadu yang mencakup seluruh aplikasi menjadi satu kesatuan dalam portal akses yang sama untuk semua layanan", poin: 5 },
      { huruf: "C", teks: "Mengadakan pelatihan masing-masing perwakilan instansi pemerintah untuk menciptakan produk aplikasi yang lebih berorientasi pada konsumen atau pengguna", poin: 4 },
      { huruf: "D", teks: "Menjadikan desainer aplikasi seolah-olah sebagai <em>user</em> dengan pendekatan empati untuk merancang sistem aplikasi sesuai target pengguna", poin: 2 },
      { huruf: "E", teks: "Berdiskusi dengan <em>stakeholder</em> mengenai prototipe desain aplikasi terbaru yang akan dikembangkan", poin: 3 }
    ],
    kunci: "B",
    pembahasan: "A = 1, B = 5, C = 4, D = 2, E = 3<br>Opsi B adalah yang paling tepat karena Pilihan ini secara langsung menyelesaikan akar masalah, yaitu fragmentasi aplikasi antar-instansi. Dalam TIK dan tata kelola solusinya adalah integrasi sistem dan interoperabilitas melalui portal pelayanan publik terpadu. Ini mengubah paradigma dari berorientasi instansi menjadi berorientasi kebutuhan pengguna"
  },

  // ─── Soal 83 ───
  {
    id: 83, kategori: "TKP",
    teks: "Perusahaan yang terus berkembang akan menyimpan data pelanggan yang jumlahnya terus bertambah yang tentunya membutuhkan teknologi tertentu untuk mengelolanya. Apa yang memungkinkan perusahaan untuk mengelola dan menyimpan data pelanggan dengan aman?",
    pilihan: [
      { huruf: "A", teks: "Menggunakan perangkat komputer terbaru dengan spesifikasi yang lebih tinggi", poin: 4 },
      { huruf: "B", teks: "Mengimplementasikan sistem manajemen basis data terenkripsi", poin: 5 },
      { huruf: "C", teks: "Mengatur dana inventaris untuk membangun sistem teknologi yang sesuai dengan kebutuhan", poin: 2 },
      { huruf: "D", teks: "Memastikan setiap transfer data tidak ada virus di dalamnya dan menggunakan aplikasi antivirus", poin: 3 },
      { huruf: "E", teks: "Menggabungkan penyimpanan konvensional dengan digital dan memastikan arsip dokumen fisik disimpan dalam lemari yang rapi dan awet", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 2, D = 3, E = 1<br>Opsi B adalah yang paling tepat karena ini adalah solusi teknis TIK paling komprehensif, relevan, dan langsung menjawab kebutuhan pengelolaan serta keamanan data pelanggan dalam jumlah besar (big data). Database Management System dirancang khusus untuk mengelola data terstruktur skala besar, sementara penerapan enkripsi memastikan data sensitif pelanggan tetap aman dari akses tidak sah maupun ancaman peretasan."
  },

  // ─── Soal 84 ───
  {
    id: 84, kategori: "TKP",
    teks: "Indonesia memiliki jumlah penduduk terbanyak ke empat di dunia yang mana akan banyak penduduk yang memiliki ide dan inovasi dalam menciptakan suatu teknologi untuk berbagai sektor. Jika Anda adalah seorang walikota, apa yang akan Anda lakukan untuk inovasi teknologi?",
    pilihan: [
      { huruf: "A", teks: "Meningkatkan rasa percaya diri dan meningkatkan kualitas diri sebagai sumber daya manusia", poin: 3 },
      { huruf: "B", teks: "Mengadakan kompetisi cipta teknologi yang hasil dari ciptaan sang juara dapat diproduksi dan diimplementasikan", poin: 5 },
      { huruf: "C", teks: "Mempercepat proses industrialisasi dengan meremajakan sektor manufaktur", poin: 1 },
      { huruf: "D", teks: "Meyakinkan masyarakat untuk terus optimis dan memenuhi kebutuhan pasar yang sesuai dengan bisnisnya masing-masing", poin: 4 },
      { huruf: "E", teks: "Menerapkan sistem pembayaran non-tunai di beberapa mal besar untuk mempermudah transaksi", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 1, D = 4, E = 2<br>Opsi B adalah yang paling tepat dalam konteks soal difokuskan pada contoh solusi menciptakan teknologi untuk berbagai sektor yang mana banyak masyarakat yang memiliki ide dan inovasi, sehingga sebagai walikota sebaiknya mengadakan kompetisi cipta teknologi yang hasil dari ciptaan sang juara dapat diproduksi dan diimplementasikan."
  },

  // ─── Soal 85 ───
  {
    id: 85, kategori: "TKP",
    teks: "Arini awalnya berbisnis pakaian di toko dekat rumahnya. Setelah lebih dari dua tahun berjalan, ia mengembangkan bisnisnya ke berbagai produk harian yang banyak pelanggan butuhkan. Bagaimana ia dapat mengembangkan lagi bisnisnya dengan memanfaatkan teknologi?",
    pilihan: [
      { huruf: "A", teks: "Menata produknya di etalase sesuai dengan kategorinya di dalam toko yang memudahkan pengunjung untuk memilah produk yang diminati untuk dibeli", poin: 1 },
      { huruf: "B", teks: "Membeli handphone baru dengan spesifikasi kamera yang tinggi dan penyimpanan yang besar untuk mendukung pemotretan produknya", poin: 4 },
      { huruf: "C", teks: "Memfokuskan hanya berjualan di toko online dengan menargetkan pembeli dari Sabang sampai Merauke", poin: 2 },
      { huruf: "D", teks: "Membangun bisnis ekspedisi sendiri yang meminimalkan biaya pengiriman produk yang dijual di toko online", poin: 3 },
      { huruf: "E", teks: "Memanfaatkan e-commerce untuk membuat toko online dan meningkatkan engagement dengan sering live streaming mempromosikan produknya.", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 1, B = 4, C = 2, D = 3, E = 5<br>Opsi E adalah yang paling tepat karena untuk mengembangkan bisnisnya dengan tujuan mendapatkan pelanggan yang lebih banyak dan lebih luas jangkauannya, maka Arini harus memanfaatkan teknologi e-commerce untuk membuat toko online dan meningkatkan engagement dengan sering live stream mempromosikan produknya"
  },

  // ─── Soal 86 ───
  {
    id: 86, kategori: "TKP",
    teks: "Perkembangan teknologi dan informasi juga menjadikan mudahnya terjadi insiden siber yang tidak diinginkan sehingga perlu upaya untuk menjaga keamanan sistem data. Sebagian besar lembaga sudah melibatkan digitalisasi dalam dokumentasi data. Apa yang dapat dilakukan oleh pimpinan lembaga untuk mengatasi hal tersebut?",
    pilihan: [
      { huruf: "A", teks: "Mengandalkan sistem keamanan yang dilakukan oleh pemerintah dan menjalankan operasional lembaga seperti biasa", poin: 4 },
      { huruf: "B", teks: "Selalu gunakan browser dengan menggunakan fitur safe browsing", poin: 1 },
      { huruf: "C", teks: "Bekerja sama dengan berbagai sektor dan sepakat untuk membentuk tim keamanan siber", poin: 5 },
      { huruf: "D", teks: "Memiliki penyimpanan eksternal sebagai back up data penyimpanan dan memastikan tidak ada virus", poin: 2 },
      { huruf: "E", teks: "Mengganti password secara berkala dengan tingkat kesulitan yang tinggi", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 4, B = 1, C = 5, D = 2, E = 3<br>Opsi C adalah yang paling tepat karena pelaku kejahatan siber memahami aksi penipuannya untuk mendapatkan akses informasi pribadi akan semakin mudah dilakukan jika jumlah yang menggunakan perangkat online meningkat. Untuk mencegah insiden siber, pimpinan lembaga dapat bekerja sama dengan berbagai sektor untuk membentuk tim tanggap keamanan siber."
  },

  // ─── Soal 87 ───
  {
    id: 87, kategori: "TKP",
    teks: "Di kantor pemerintahan Anda sistem manual dalam proses pengadaan barang telah digantikan dengan teknologi Internet of Things (IoT) untuk memantau stok, distribusi, dan penggunaan barang secara real-time. Sebagai pimpinan, Anda melihat beberapa anggota tim kesulitan memahami cara kerja IoT dan aplikasi pendukungnya. Apa yang akan Anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Membagikan panduan teknis kepada anggota tim dan meminta mereka mempelajarinya secara mandiri", poin: 3 },
      { huruf: "B", teks: "Menunjuk anggota tim yang sudah menguasai IoT untuk membantu anggota lain yang mengalami kesulitan", poin: 4 },
      { huruf: "C", teks: "Mengadakan pelatihan intensif tentang IoT untuk memastikan semua anggota tim memahami cara kerja dan manfaatnya", poin: 5 },
      { huruf: "D", teks: "Mengizinkan anggota tim menggunakan metode manual selama masa transisi agar pekerjaan tetap berjalan", poin: 2 },
      { huruf: "E", teks: "Membiarkan anggota tim mencari cara mereka sendiri untuk memahami IoT tanpa mengganggu pekerjaan utama mereka", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 4, C = 5, D = 2, E = 1<br>Opsi C adalah yang paling tepat karena mengadakan pelatihan intensif tentang IoT mencerminkan kepemimpinan yang proaktif untuk membantu tim beradaptasi dengan teknologi baru"
  },

  // ─── Soal 88 ───
  {
    id: 88, kategori: "TKP",
    teks: "Kantor Anda baru saja menerapkan sistem manajemen berbasis Artificial Intelligence untuk meningkatkan efisiensi kerja. Namun, Anda merasa kurang memahami teknologi ini karena minimnya pengalaman menggunakan AI. Apa yang akan Anda lakukan untuk menyesuaikan diri dengan inovasi ini?",
    pilihan: [
      { huruf: "A", teks: "Saya akan meminta bantuan rekan kerja yang lebih paham teknologi untuk membantu saya memahami dan menggunakan sistem tersebut", poin: 4 },
      { huruf: "B", teks: "Saya akan mengikuti pelatihan atau mencari panduan online tentang penggunaan sistem berbasis AI untuk meningkatkan kemampuan saya", poin: 5 },
      { huruf: "C", teks: "Saya akan mencoba menggunakan sistem secara mandiri dan belajar melalui trial and error hingga saya terbiasa", poin: 3 },
      { huruf: "D", teks: "Saya akan menyarankan kepada atasan agar tetap menyediakan metode kerja manual karena teknologi ini sulit dipahami", poin: 2 },
      { huruf: "E", teks: "Saya akan menunggu instruksi lebih lanjut dari atasan atau tim teknis sebelum menggunakan sistem tersebut", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 3, D = 2, E = 1<br>Opsi terbaik ada pada opsi B karena menunjukkan sikap inisiatif dan adaptif secara mandiri untuk memahami sistem AI secara efektif"
  },

  // ─── Soal 89 ───
  {
    id: 89, kategori: "TKP",
    teks: "Situasi pandemi akibat paparan virus yang cepat menyebar secara global membuat seluruh negara harus segera tanggap mengatasinya. Jika Anda adalah seorang diplomat, Anda perlu...",
    pilihan: [
      { huruf: "A", teks: "Menggunakan alat pelindung diri dengan lengkap saat menemui pasien dan mencuci tangan dengan benar", poin: 1 },
      { huruf: "B", teks: "Menyediakan hand sanitizer di berbagai pelayanan publik untuk mencegah penyebaran virus yang cepat", poin: 3 },
      { huruf: "C", teks: "Menghubungi seluruh kolega yang tersebar di berbagai penjuru negeri untuk membantu dan bernegosiasi mendapatkan vaksin", poin: 5 },
      { huruf: "D", teks: "Bekerja sama dengan media untuk memberitakan hal-hal yang baik saja untuk membantu meningkatkan imunitas masyarakat", poin: 4 },
      { huruf: "E", teks: "Membangun tata kota penuh taman untuk mendukung masyarakat dalam kegiatan outdoor", poin: 2 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 3, C = 5, D = 4, E = 2<br>Opsi yang paling tepat adalah C karena sebagai seorang diplomat harus mampu membangun jejaring kerja di berbagai profesi, lintas sektor, dan berbagai negara dengan kemampuan negosiasi yang mumpuni"
  },

  // ─── Soal 90 ───
  {
    id: 90, kategori: "TKP",
    teks: "Negara dengan jumlah masyarakat usia produktif yang terus menurun memiliki potensi terganggunya ekonomi negara tersebut sehingga membutuhkan tenaga kerja dari berbagai negara yang salah satunya adalah Indonesia. Bagaimana tindakan yang dapat dilakukan pemerintah supaya saling menguntungkan dengan negara yang akan diajak kerja sama?",
    pilihan: [
      { huruf: "A", teks: "Memberikan jaminan pertukaran aset dengan presentase tertentu dan bernegosiasi untuk penanaman modal dalam negeri bagi masyarakat menengah ke bawah", poin: 4 },
      { huruf: "B", teks: "Menyediakan dan meningkatkan kualitas pelayanan kesehatan dan yayasan pelatihan untuk calon pekerja yang dibiayai oleh pemerintah maupun mandiri", poin: 3 },
      { huruf: "C", teks: "Memberikan diskon bagi calon penumpang yang akan menggunakan transportasi udara yang transit di negara untuk memperbesar peluang pemasukan devisa negara", poin: 2 },
      { huruf: "D", teks: "Memperbesar sektor-sektor pekerja terampil dengan mengadakan pertukaran pekerja selama beberapa tahun di negara tersebut dan tersedianya perseroan terbatas dalam negeri yang siap menerima pekerja tersebut jika sudah kembali ke tanah air", poin: 5 },
      { huruf: "E", teks: "Membangun beberapa cabang bank di kabupaten/kota yang lebih terjangkau bagi masyarakat untuk melakukan segala jenis transaksi", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 3, C = 2, D = 5, E = 1<br>Opsi yang paling tepat adalah D karena sesuai dengan konteks menurunnya usia produktif di beberapa negara dan tersedianya tenaga kerja usia produktif di Indonesia dapat memenuhi kekurangan tersebut, serta disiapkannya perusahaan dalam negeri yang siap menampung jika pekerja tersebut sudah kembali ke Indonesia"
  },

  // ─── Soal 91 ───
  {
    id: 91, kategori: "TKP",
    teks: "Menjaga koneksi dengan pegawai internal maupun relasi di luar tempat Anda bekerja tentu membutuhkan beberapa upaya supaya tetap terjaga dengan baik. Bagaimana cara menjaga koneksi dalam jejaring kerja supaya tetap relevan dan bermanfaat?",
    pilihan: [
      { huruf: "A", teks: "Rutin berbagi informasi yang relevan yang tidak bersifat rahasia dan saling memberikan dukungan", poin: 5 },
      { huruf: "B", teks: "Sering bertukar kabar dengan pelanggan yang baru ataupun pelanggan lama", poin: 1 },
      { huruf: "C", teks: "Mematuhi peraturan perseroan terbatas, mematuhi instruksi atasan, dan komitmen untuk bekerja dengan kualitas tinggi", poin: 3 },
      { huruf: "D", teks: "Usahakan untuk selalu komunikasi terbuka dan transparan dengan seluruh anggota dalam tim", poin: 2 },
      { huruf: "E", teks: "Turut berkontribusi dalam memberikan ide di setiap diskusi yang diadakan dalam menyelesaikan suatu masalah pekerjaan", poin: 4 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 3, D = 2, E = 4<br>Opsi yang tepat adalah A karena salah satu upaya yang paling penting dalam menjaga relasi adalah dengan rutin berbagi informasi yang relevan yang tidak bersifat rahasia dan saling memberikan dukungan"
  },

  // ─── Soal 92 ───
  {
    id: 92, kategori: "TKP",
    teks: "Alex ingin memperluas jaringan profesional yang tentu harapannya akan membantu menunjang kariernya. Namun, ia memilih untuk tidak hanya fokus pada satu industri saja. Apa yang harus dilakukan jika ia ingin memperluas jejaring kerja ke industri yang berbeda?",
    pilihan: [
      { huruf: "A", teks: "Sering bertemu dan mengobrol dengan rekan dari industri yang menjadi target profesionalnya", poin: 4 },
      { huruf: "B", teks: "Aktif berkomunikasi dengan orang-orang yang berada di industri yang diinginkan sambil terus meningkatkan hard skill", poin: 5 },
      { huruf: "C", teks: "Mengikuti informasi perkembangan industri yang diinginkan dengan mengembangkan skill yang mendukungnya", poin: 3 },
      { huruf: "D", teks: "Menelusuri berbagai jenis bidang industri yang lebih mudah ia paham untuk terjun di dalamnya", poin: 1 },
      { huruf: "E", teks: "Terus berusaha untuk disiplin belajar dan berlatih menguasai skill yang sesuai dengan bidang industri yang ia minati", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 3, D = 1, E = 2<br>Membangun jejaring kerja artinya mampu untuk menentukan tujuan, aktif berkomunikasi untuk menjaga relasi, dan jika ingin memperluas jejaring kerja di industi yang berbeda perlu juga untuk menguasai hard skill di bidang yang diinginkan tersebut"
  },

  // ─── Soal 93 ───
  {
    id: 93, kategori: "TKP",
    teks: "Dalam rencana mengembangkan bisnis maupun meningkatkan karier yang diinginkan perlu untuk tetap konsisten dan autentik dalam berinteraksi di dalam jejaring kerja. Bagaimana cara untuk membangun kepercayaan dan reputasi yang baik?",
    pilihan: [
      { huruf: "A", teks: "Berusaha untuk tetap bersikap ramah dalam kondisi apapun, komitmen untuk menyelesaikan tugas dengan baik, dan terbuka menghadapi perubahan situasi", poin: 4 },
      { huruf: "B", teks: "Mampu melihat peluang dan terus melatih diri untuk meningkatkan kemampuan yang dibutuhkan dalam peningkatan karier yang menjadi tujuan", poin: 3 },
      { huruf: "C", teks: "Bersedia untuk menawarkan dan memberikan bantuan kepada orang lain tanpa memandang latar belakangnya", poin: 2 },
      { huruf: "D", teks: "Bersikap terbuka dan ramah, menunjukkan transparansi pada klien dan rekan kerja selama sesuai dengan aturan kerja di instansi, dan komitmen untuk menepati janji", poin: 5 },
      { huruf: "E", teks: "Membaca seluruh peraturan kerja dengan seksama dan memastikan bahwa budaya kerja di tempat tersebut juga sesuai dengan prinsip yang diyakini", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 4, B = 3, C = 2, D = 5, E = 1<br>Relasi yang dapat dibangun dengan baik jika mau dan mampu untuk mengupayakan dan membangun reputasi dan kepercayaan. Artinya tindakan yang dapat ditunjukkan adalah transparansi pada klien dan rekan kerja selama sesuai dengan aturan kerja instansi dan komitmen untuk menepati janji"
  },

  // ─── Soal 94 ───
  {
    id: 94, kategori: "TKP",
    teks: "Untuk meningkatkan kualitas sumber daya manusia di suatu lembaga perlu memperluas kerja sama dengan stakeholder lain. Jika Anda adalah seorang Panglima TNI dan ingin meningkatkan kualitas SDM di lingkungan TNI jalur pendidikan, apa hal yang dapat dipilih untuk mewujudkannya?",
    pilihan: [
      { huruf: "A", teks: "Memberikan penghargaan berupa kenaikan pangkat atau hadiah tertentu untuk setiap anggota yang mampu melampaui batas performanya", poin: 1 },
      { huruf: "B", teks: "Rutin mengecek kesehatan seluruh anggota dan menanggung semua biaya kesehatannya", poin: 3 },
      { huruf: "C", teks: "Memberikan akses gratis dan tanpa batas kepada para anggota untuk membaca di ruang perpustakaan universitas", poin: 4 },
      { huruf: "D", teks: "Bekerja sama dengan suatu universitas untuk menyeleksi anggota TNI yang memenuhi syarat supaya bisa diberikan beasiswa untuk studi lanjut", poin: 5 },
      { huruf: "E", teks: "Memastikan asupan makanan seluruh anggota TNI memenuhi standar gizi seimbang agar meningkatkan kemampuan kognitif dalam berpikir", poin: 2 }
    ],
    kunci: "D",
    pembahasan: "A = 1, B = 3, C = 4, D = 5, E = 2<br>Melalui jalur pendidikan kualitas SDM di lingkungan TNI dapat ditingkatkan dengan bekerja sama dengan suatu universitas untuk menyeleksi anggota TNI yang memenuhi syarat supaya bisa diberikan beasiswa untuk studi lanjut"
  },

  // ─── Soal 95 ───
  {
    id: 95, kategori: "TKP" ,
    teks: "Dalam proses perjalanan karier tertentu Anda akan sering menemui keberagaman di lingkungan kerja. Menurut Anda, bagaimana keberagaman di lingkungan kerja dapat memajukan suatu instansi?",
    pilihan: [
      { huruf: "A", teks: "Keberagaman di lingkungan kerja dapat memberikan pandangan baru dari berbagai sudut pandang dan meningkatkan peluang potensial", poin: 5 },
      { huruf: "B", teks: "Keberagaman di lingkungan kerja membuat instansi menjadi lebih berwarna dari segi bahasa, agama, dan budaya", poin: 1 },
      { huruf: "C", teks: "Keberagaman di lingkungan kerja dapat membuka peluang untuk bekerja sama dengan lebaga lain", poin: 4 },
      { huruf: "D", teks: "Keberagaman di lingkungan kerja dapat memperpanjang durasi diskusi dengan menghasilkan pilihan keputusan yang lebih beragam", poin: 2 },
      { huruf: "E", teks: "Keberagaman di lingkungan kerja dapat membuat kesempatan promosi karier menjadi lebih menantang", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 4, D = 2, E = 3<br>Keberagaman di lingkungan kerja akan memperkaya lingkungan tempat kerja dengan menumbuhkan budaya pembelajaran, pemahaman, dan empati"
  },

  // ─── Soal 96 ───
  {
    id: 96, kategori: "TKP",
    teks: "Anda menyadari bahwa menjaga relasi penting untuk diterapkan di mana pun, termasuk di lingkungan kerja. Tindakan apa yang dilakukan untuk terciptanya kepercayaan di lingkungan kerja",
    pilihan: [
      { huruf: "A", teks: "Memahami kebutuhan pelanggan, menjaga kualitas produk, dan konsisten", poin: 1 },
      { huruf: "B", teks: "Sering refleksi diri, mendengarkan orang lain, dan memberikan pujian", poin: 3 },
      { huruf: "C", teks: "Selalu rendah hati, memberikan dukungan, dan mau mengakui kesalahan", poin: 4 },
      { huruf: "D", teks: "Peka terhadap kebutuhan atasan dan tim dan memastikan pekerjaan diselesaikan dengan baik", poin: 2 },
      { huruf: "E", teks: "Menciptakan komunikasi terbuka, jujur, loyalitas, dukungan, dan penerimaan", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 1, B = 3, C = 4, D = 2, E = 5<br>Tindakan yang dapat dilakukan untuk menciptakan kepercayaan di lingkungan kerja adalah menciptakan komunikasi terbuka, jujur, loyalitas, dukungan, dan penerimaan."
  },

  // ─── Soal 97 ───
  {
    id: 97, kategori: "TKP",
    teks: "Fika merupakan seorang pegawai yang sudah bekerja selama belasan tahun dan memiliki rekan kerja dari berbagai usia, latar belakang, keahlian, dan jabatan. Fika tetap dapat menanamkan rasa hormat kepada orang lain meskipun memiliki latar belakang suku yang berbeda di lingkungan kerja dengan cara...",
    pilihan: [
      { huruf: "A", teks: "selalu membaca dan memahami seluruh instruksi kerja sebelum diselesaikan sesuai dengan tenggat waktu yang diberikan", poin: 2 },
      { huruf: "B", teks: "Mendelegasikan pekerjaan kepada anggota tim sesuai dengan proporsi keahliannya", poin: 4 },
      { huruf: "C", teks: "Memberikan dukungan dan bantuan kepada rekan kerja sesuai dengan kemampuannya", poin: 5 },
      { huruf: "D", teks: "Sering bertukar informasi dan data lintas departemen serta menjaga nama baik sesama pegawai", poin: 1 },
      { huruf: "E", teks: "Memastikan setiap tugas pekerjaan yang diselesaikan dengan kualitas terbaik", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 4, C = 5, D = 1, E = 3<br>Fika dapat menanamkan rasa hormat kepada orang lain dari berbagai latar belakang di lingkungan kerjanya dengan cara memberikan dukungan dan bantuan kepada rekan kerja sesuai dengan kemampuannya"
  },

  // ─── Soal 98 ───
  {
    id: 98, kategori: "TKP",
    teks: "Isu kesetaraan gender masih menjadi salah satu hal yang harus diupayakan untuk diwujudkan yang mana ketimpangan lebih dirasakan oleh pihak perempuan. Jika Anda adalah seorang pejabat yang ketimpangan gendernya masih termasuk tinggi, solusi yang dapat Anda terapkan adalah...",
    pilihan: [
      { huruf: "A", teks: "Blusukan ke beberapa wilayah untuk bertemu dan berdiskusi langsung dengan tokoh masyarakat", poin: 1 },
      { huruf: "B", teks: "Memberikan ruang kritik dan saran melalui ruang digital dan akses tersebut diberikan kepada organisasi perempuan", poin: 4 },
      { huruf: "C", teks: "Mengadakan sayembara pada organisasi perempuan untuk membuat rumusan masalah dan alternatif solusinya yang nantiya dapat diterapkan di daerah tersebut", poin: 3 },
      { huruf: "D", teks: "Memberikan akses pendidikan gratis kepada semua laki-laki dan perempuan tanpa terkecuali di daerah tersebut hingga jenjang sekolah menengah", poin: 2 },
      { huruf: "E", teks: "Mengadakan musyawarah yang mempertemukan perwakilan organisasi perempuan dengan perangkat daerah untuk menghasilkan rumusan strategis dengan pelaksanaan program riil", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 1, B = 4, C = 3, D = 2, E = 5<br>Tindakan nyata yang lebih terasa dampak baiknya terdapat pada pilihan mengadakan musyawarah yang mempertemukan perwakilan organisasi perempuan dengan perangkat daerah untuk menghasilkan rumusan strategis dengan pelaksanaan program riil."
  },

  // ─── Soal 99 ───
  {
    id: 99, kategori: "TKP",
    teks: "Seiring dengan meningkatnya minat penonton film horor juga meningkatnya jumlah film tersebut yang mengaitkan kejadian horor dengan agama sehingga tidak sedikit penonton menjadi takut beribadah karena dibayang-bayangi dengan kejadian horor yang mungkin akan menimpanya seperti pada film. Bagaimana Anda bersikap jika Anda adalah seorang influencer?",
    pilihan: [
      { huruf: "A", teks: "Mengambil peran dalam film tersebut dengan peran protagonis yang membawa pengaruh kepada penonton bahwa ibadah dapat dilakukan tanpa adanya unsur horor", poin: 3 },
      { huruf: "B", teks: "Memberikan kritik secara terbuka kepada sutradara film horor pilihan sebagai pembelajaran bahwa penonton tidak menyukai film horor dengan unsur agama", poin: 4 },
      { huruf: "C", teks: "Tidak mengajak anggota keluarga untuk menonton film horor yang masih membawa agama sebagai hal yang dapat memicu munculnya insiden horor", poin: 2 },
      { huruf: "D", teks: "Mengenakan atribut keagamaan saat menonton film horor dan mempostingnya di media sosial untuk memengaruhi followers", poin: 1 },
      { huruf: "E", teks: "Membuat suatu postingan yang mengimbau audience untuk lebih bijak dalam memilih film yang lebih bermanfaat daripada dampak negatifnya", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 3, B = 4, C = 2, D = 1, E = 5<br>Keresahan terhadap maraknya film horor yang dibalut agama justru membuat banyak penonton takut beribadah. Jika Anda adalah seorang influencer yang memiliki banyak followers, Anda dapat mengambil peran untuk mengatasi keresahan tersebut dengan membuat suatu postingan yang mengimbau audience untuk lebih bijak dalam memilih film yang lebih bermanfaat daripada dampak negatifnya"
  },

  // ─── Soal 100 ───
  {
    id: 100, kategori: "TKP",
    teks: "Salah seorang content creator di media sosial membuat konten mengenai diperbolehkannya bertukar pasangan. Hal tersebut menimbulkan reaksi negatif di masyarakat walaupun content creator tersebut mengaku bahwa hanya sekedar konten dan ingin meningkatkan viewers. Tindakan yang harus dilakukan polisi adalah..",
    pilihan: [
      { huruf: "A", teks: "Mengembalikan kepada masyarakat untuk menentukan sanksi yang dapat diberikan kepada content creator tersebut", poin: 1 },
      { huruf: "B", teks: "Mewawancarai anggota keluarganya secara mendalam untuk mendapatkan informasi dan fakta yang sebenarnya ", poin: 2 },
      { huruf: "C", teks: "Menelusuri seluruh konten milik content creator tersebut untuk dikaji apakah kontennya termasuk dalam penistaan agama atau bukan", poin: 3 },
      { huruf: "D", teks: "Menentukan pasal yang berkaitan dengan tindakan content creator tersebut dan memeriksa dugaan penistaan agama bersama dengan ahli agama dan ahli pidana", poin: 5 },
      { huruf: "E", teks: "Identifikasi dampak negatif apa saja dari konten viral tersebut untuk menentukan putusan yang akan dikenakan pada content creator tersebut", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 1, B = 2, C = 3, D = 5, E = 4<br>Konten yang sudah pasti berdampak negatif harus segera diberikan tindakan berupa sanksi sesuai dengan kasusnya"
  },

  // ─── Soal 101 ───
  {
    id: 101, kategori: "TKP",
    teks: "Paham radikalisme sering kali menargetkan pemuda pemudi karena dianggap lebih ideal untuk mengembangkan ideologi radikal. Apa yang harus Anda lakukan terhadap anggota keluarga Anda yang masih berusia anak-anak atau remaja supaya mencegah mereka dari paparan radikalisme?",
    pilihan: [
      { huruf: "A", teks: "Memastikan mereka mendapatkan pendidikan yang baik dan benar di sekolahannya masing-masing", poin: 3 },
      { huruf: "B", teks: "Mendorong mereka untuk ikut kegiatan ekstrakulikuler di sekolah untuk mendukung mereka belajar banyak hal dan bersosialisasi", poin: 2 },
      { huruf: "C", teks: "Mengajaknya berkegiatan dengan mengurangi screen time, mendampinginya belajar suatu hal, dan tidak membiarkannya autodidak belajar hanya melalui media sosial", poin: 5 },
      { huruf: "D", teks: "Memberikan akses terbatas terhadap penggunaan internet dan screen time saat di rumah", poin: 1 },
      { huruf: "E", teks: "Sering mengajak mereka berdiskusi mengenai topik tertentu untuk berpikir kritis dan tidak mudah terpengaruh oleh orang lain", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 2, C = 5, D = 1, E = 4<br>Jika ada anggota keluarga Anda masih anak-anak/remaja, opsi mengajaknya untuk berkegiatan dan mengurangi screen time, mendampingi belajar, dan tidak membiarkannya autodidak belajar dari sosmed adalah tindakan yang paling tepat untuk mencegah mereka dari paham radikalisme"
  },

  // ─── Soal 102 ───
  {
    id: 102, kategori: "TKP",
    teks: "Seseorang atau kelompok yang melakukan radikalisme didorong karena adanya faktor ketidakpuasan terhadap kondisi sosial misalnya perbedaan doktrin, dan perbedaan mayoritas dan minoritas. Pemerintah sebagai pihak yang paling bertanggung jawab untuk lebih mengedepankan upaya pencegahan radikalisme sebaiknya...",
    pilihan: [
      { huruf: "A", teks: "Menerapkan pengaruh keyakinan untuk toleransi terhadap sesama walaupun berbeda latar belakang dan diterapkan di sekolah-sekolah", poin: 2 },
      { huruf: "B", teks: "Membentengi diri dari pengaruh atau provokasi yang mengarah kepada kekerasan atau pemaksaan dengan tujuan tertentu terutama di lingkungan rumah dan lembaga pendidikan", poin: 1 },
      { huruf: "C", teks: "Menegur narasumber atau orator yang isi narasinya menggunakan kebencian atau mendukung terhadap keberpihakan kepada kelompok tertentu", poin: 3 },
      { huruf: "D", teks: "Menjalin kemitraan dengan ormas melalui pendekatan menyejukkan, melestarikan kesenian dan kebudayaan dengan kearifan lokal, dan komunikasi intensif dengan para tokoh masyarakat", poin: 5 },
      { huruf: "E", teks: "Mendukung membangun media sosial yang saling membagikan konten-konten positif terutama untuk meningkatkan rasa nasionalisme untuk diterapkan dalam kehidupan sehari-hari", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 1, C = 3, D = 5, E = 4<br>Pemerintah perlu menjalin kemitraan dengan ormas melalui pendekatan menyejukkan, melestarikan kesenian dan kebudayaan dengan kearifan lokal, dan komunikasi intensif dengan para tokoh masyarakat untuk upaya pencegahan radikalisme"
  },

  // ─── Soal 103 ───
  {
    id: 103, kategori: "TKP",
    teks: "Ada berbagai cara yang dilakukan kelompok dengan ideologi atau paham radikalisme untuk merekrut orang-orang untuk masuk ke dalam kelompok mereka dan biasanya dilakukan dengan pendekatan keagamaan. Bagaimana contoh upaya deradikalisasi yang inklusif untuk dilakukan?",
    pilihan: [
      { huruf: "A", teks: "Merekrut kader di beberapa daerah yang bertugas untuk mengawasi dan mengadukan perkembangan atau dugaan pada  kelompok atau organisasi tertentu yang diduga radikal", poin: 4 },
      { huruf: "B", teks: "Membuat forum rukun umat, membentuk tim terpadu penanganan konflik sosial, dan mendorong masyarakat untuk terlibat dalam memantau kelompok tertentu yang berpotensi adanya radikalisme", poin: 5 },
      { huruf: "C", teks: "Membiasakan pelajar dan mahasiswa untuk berdiskusi menyelesaikan suatu masalah melalui proses berpikir kritis", poin: 3 },
      { huruf: "D", teks: "Sering menonton acara penangkapan oknum radikalisme untuk mengetahui pola perekrutan mereka dan membentengi diri dari pengaruh tersebut", poin: 1 },
      { huruf: "E", teks: "Memilah bacaan dan informasi yang diterima dan peka terhadap informasi yang menyimpang dari norma dan etika", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 3, D = 1, E = 2<br>Upaya deradikalisasi yang inklusif sesuai dengan soal di atas adalah dengan membuat forum rukun umat, membentuk tim terpadu penanganan konflik sosial, dan mendorong masyarakat untuk terlibat dalam memantau kelompok tertentu yang berpotensi adanya radikalisme"
  },

  // ─── Soal 104 ───
  {
    id: 104, kategori: "TKP",
    teks: "Kesenjangan ekonomi juga dapat menyuburkan radikalisme. Daerah-daerah rawan konflik disebabkan penguasaan sumber daya ekonomi oleh para pemodal besar misalnya di daerah pertambangan, lahan sengketa, atau perkebunan. Tindakan mengatasi konflik di daerah agraria dapat dilakukan dengan cara...",
    pilihan: [
      { huruf: "A", teks: "Merekomendasikan kebijakan sitemik dan berkelanjutan yang dapat diterapkan, terutama oleh masyarakat setempat", poin: 3 },
      { huruf: "B", teks: "Mengumpulkan data informasi, bernegosiasi, dan menampung aspirasi dari tokoh masyarakat di daerah rawan konflik", poin: 4 },
      { huruf: "C", teks: "Menerapkan aspek tertib administrasi di tingkat desa hingga kecamatan di seluruh daerah rawan konflik", poin: 1 },
      { huruf: "D", teks: "Melakukan mediasi yang membentuk pola diskusi, melakukan ligitasi melalui jalur hukum, dan perwasitan yang mengacu pada peraturan perundangan", poin: 5 },
      { huruf: "E", teks: "Melakukan harmonisasi peraturan untuk meminimalkan disharmonisasi terhadap regulasi yang sudah ada sebelumnya", poin: 2 }
    ],
    kunci: "D",
    pembahasan: "A = 3, B = 4, C = 1, D = 5, E = 2<br>Tindakan mengatasi konflik di daerah agraria dapat dilakukan dengan cara Melakukan mediasi yang membentuk pola diskusi, melakukan litigasi melalui jalur hukum, dan perwasitan yang mengacu pada peraturan perundangan"
  },

  // ─── Soal 105 ───
  {
    id: 105, kategori: "TKP",
    teks: "Anda adalah seorang ASN yang mendapati salah satu rekan kerja menyebarkan informasi yang mengarah pada intoleransi  dan radikalisme di grup kantor. Beberapa rekan terlihat mulai terpengaruh. Apa langkah paling tepat yang Anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Mengabaikan karena tidak ingin menimbulkan konflik di tempat kerja", poin: 1 },
      { huruf: "B", teks: "Melaporkan langsung kepada atasan untuk menangani permasalahan ini secara formal", poin: 5 },
      { huruf: "C", teks: "Mendekati rekan tersebut secara pribadi untuk berdiskusi dan memberi pemahaman tentang bahaya radikalisme", poin: 4 },
      { huruf: "D", teks: "Membuat pernyataan di grup bahwa informasi tersebut salah tanpa menyebutkan siapa yang menyebarkannya", poin: 3 },
      { huruf: "E", teks: "Mengajak rekan lain untuk menjauhi rekan tersebut agar tidak terpengaruh oleh informasi tersebut", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 1, B = 5, C = 4, D = 3, E = 2<br>Opsi B adalah yang paling tepat karena melaporkan langsung kepada atasan merupakan tindakan tepat karena atasan adalah orang yang lebih berwenang untuk menangani permasalahan ini secara formal"
  },

  // ─── Soal 106 ───
  {
    id: 106, kategori: "TKP",
    teks: "Sebagai ketua pemuda di sebuah desa, Anda bertanggung jawab dalam menjaga kerukunan dan kekompakan antar anggota. Suatu hari, terjadi konflik kecil  antara dua anggota karena perbedaan agama yang menyebabkan ketegangan di antara mereka. Beberapa anggota pemuda lain mulai terpengaruh dan menunjukkan sikap berpihak. Apa tindakan Anda untuk mengatasi situasi ini?",
    pilihan: [
      { huruf: "A", teks: "Mendukung anggota lain yang berpihak demi menjaga solidaritas antar kelompok pemuda", poin: 1 },
      { huruf: "B", teks: "Mengajak kedua anggota yang berselisih untuk berdialog dan menyelesaikan masalah di bawah bimbingan Anda sebagai ketua", poin: 4 },
      { huruf: "C", teks: "Mengadakan pertemuan untuk mengedukasi anggota tentang pentingnya toleransi dan menghormati perbedaan, serta menjelaskan dampak buruk dari konflik tersebut", poin: 5 },
      { huruf: "D", teks: "Menyampaikan kepada pihak desa bahwa ada konflik antaragama agar aparat bisa terlibat dalam penyelesaian", poin: 3 },
      { huruf: "E", teks: "Mengingatkan anggota lain untuk tidak terlibat dalam konflik tersebut dan tidak berpihak kepada siapapun", poin: 2 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 4, C = 5, D = 3, E = 2<br>Opsi C adalah yang paling tepat karena mengadakan pertemuan untuk mengedukasi anggota tentang pentingnya toleransi menunjukkan sikap Anti Radikalisme dan kolaboratif"
  },

  // ─── Soal 107 ───
  {
    id: 107, kategori: "TKP",
    teks: "Anda adalah seorang pelajar Indonesia penerima beasiswa yang sedang menempuh pendidikan di Luar Negeri. Di lingkungan baru Anda sering mendengar pendapat bahwa nilai sopan santun dan tata krama orang Indonesia terlalu kaku dan mengekang ekspresi diri. Bagaimana sikap Anda?",
    pilihan: [
      { huruf: "A", teks: "Saya akan menghargai pandangan mereka, tetapi tetap menerapkan nilai sopan santun dalam keseharian saya", poin: 4 },
      { huruf: "B", teks: "Saya akan mengabaikan komentar tersebut karena setiap negara memiliki pandangannya masing-masing tergantung norma sosial", poin: 3 },
      { huruf: "C", teks: "Saya akan menjelaskan bahwa sopan santun dan tata krama merupakan bagian penting dari budaya dan identitas bangsa Indonesia yang sangat dihargai", poin: 5 },
      { huruf: "D", teks: "Saya akan mengikuti pandangan mereka agar lebih mudah beradaptasi dengan lingkungan baru", poin: 2 },
      { huruf: "E", teks: "Saya akan menghindari diskusi mengenai nilai-nilai budaya untuk menghindari potensi konflik", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 4, B = 3, C = 5, D = 2, E = 1<br>Opsi C adalah yang paling tepat karena menjelaskan bahwa sopan santun dan tata krama merupakan bagian penting dari budaya dan identitas bangsa Indonesia yang sangat dihargai menunjukkan sikap hormat terhadap bangsa"
  },

  // ─── Soal 108 ───
  {
    id: 108, kategori: "TKP",
    teks: "Anda tinggal di lingkungan masyarakat yang sangat beragam, baik dari segi agama, adat, maupun budaya. Untuk menciptakan kesatuan dan persatuan, apa yang akan Anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Saya akan mengadakan kegiatan bersama, seperti gotong royong atau acara seni budaya, untuk mempererat hubungan antarwarga", poin: 5 },
      { huruf: "B", teks: "Saya akan mendukung warga untuk menjalankan tradisi dan budayanya masing-masing tanpa terlibat secara langsung", poin: 2 },
      { huruf: "C", teks: "Saya akan menjadi penengah jika ada konflik antarwarga dan mengedepankan dialog untuk mencari solusi", poin: 4 },
      { huruf: "D", teks: "Saya akan fokus menjaga hubungan baik dengan kelompok yang memiliki latar belakang serupa dengan saya", poin: 1 },
      { huruf: "E", teks: "Saya akan mendorong warga untuk lebih sering berinteraksi dengan masyarakat luar agar saling mengenal dan menghormati", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 2, C = 4, D = 1, E = 3<br>Opsi terbaik ada pada opsi A yaitu mengadakan kegiatan bersama, seperti gotong royong atau acara seni budaya, untuk mempererat hubungan antarwarga mencerminkan inisiatif untuk menciptakan harmoni dan mempererat hubungan antarwarga"
  },

  // ─── Soal 109 ───
  {
    id: 109, kategori: "TKP",
    teks: "Anda adalah seorang karyawan yang memahami seluk-beluk aplikasi yang sedang dikembangkan oleh perusahaan. Namun, tidak ada yang mengetahui bahwa Anda memiliki pemahaman terbaik tentang aplikasi tersebut. Apa yang akan Anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Diam saja karena khawatir hal ini akan menambah beban kerja yang tidak bisa Anda tangani", poin: 1 },
      { huruf: "B", teks: "Memberi tahu atasan bahwa Anda memahami aplikasi tersebut dan meminta agar tanggung jawab tambahan tidak mengganggu tugas utama Anda", poin: 3 },
      { huruf: "C", teks: "Membantu atasan mengembangkan aplikasi tersebut karena merasa hal ini adalah bagian dari tanggung jawab Anda", poin: 5 },
      { huruf: "D", teks: "Menawarkan diri untuk membantu mengembangkan aplikasi agar mendapat pengakuan dan pujian atas kemampuan Anda", poin: 2 },
      { huruf: "E", teks: "Menyampaikan kepada atasan bahwa Anda memahami aplikasi tersebut dan bersedia membantu apabila perusahaan membutuhkan keterampilan anda", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 3, C = 5, D = 2, E = 4<br>Opsi terbaik ada pada opsi C karena mencerminkan tanggung jawab, profesionalisme, dan kemampuan yang mumpuni di bidang IT"
  },

  // ─── Soal 110 ───
  {
    id: 110, kategori: "TKP",
    teks: "Anda adalah seorang manajer proyek di sebuah kementerian yang bertanggung jawab atas pembangunan fasilitas baru di wilayah IKN. Di tengah pelaksanaan proyek, ada salah satu pengawas lapangan mendadak sakit dan tidak bisa melanjutkan tugasnya. Apa langkah terbaik yang Anda lakukan?",
    pilihan: [
      { huruf: "A", teks: "Membagi tanggung jawab pengawasan kepada anggota tim yang tersisa dan memastikan mereka tetap profesional meskipun ada beban tambahan", poin: 3 },
      { huruf: "B", teks: "Menyewa tenaga ahli eksternal untuk menggantikan sementara pengawas lapangan yang sakit", poin: 2 },
      { huruf: "C", teks: "Menunda pelaksanaan proyek hingga pengawas lapangan kembali sehat dan dapat melanjutkan tugasnya", poin: 1 },
      { huruf: "D", teks: "Mengadakan rapat tim untuk membahas strategi pendelegasian tugas pengawasan agar proyek tetap berjalan lancar", poin: 5 },
      { huruf: "E", teks: "Memberikan rotasi kerja kepada anggota tim lainnya untuk menjaga keseimbangan beban kerja dan memastikan pengawasan tetap dilakukan", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 3, B = 2, C = 1, D = 5, E = 4<br>Opsi terbaik ada pada opsi D karena Mengadakan rapat tim untuk membahas strategi pendelegasian tugas pengawasan agar proyek tetap berjalan lancar menunjukkan kolaborasi, akuntabilitas, dan kemampuan mengelola jejaring kerja yang baik"
  }

];

// ════════════════════════════════════════════
// FUNGSI SEED KE DATABASE
// ════════════════════════════════════════════
async function seedSoalPaket3() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Hapus data lama untuk tryout_id = 3
    await client.query(`DELETE FROM pilihan_jawaban WHERE soal_id IN (SELECT id FROM soal WHERE tryout_id = 3)`);
    await client.query(`DELETE FROM soal WHERE tryout_id = 3`);

    for (const soal of soalData) {
      const result = await client.query(
        `INSERT INTO soal (tryout_id, nomor_soal, kategori, teks, kunci, pembahasan)
         VALUES (3, $1, $2, $3, $4, $5)
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
    console.log('Seed soal Paket 3 berhasil: ' + soalData.length + ' soal');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal seed soal Paket 3:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

seedSoalPaket3().catch(() => process.exit(1));
