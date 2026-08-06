require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });
const pool = require('./db');

/*
  ══════════════════════════════════════════════════════════
  TEMPLATE SOAL TRY OUT SKD PAKET 4
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

  Contoh soal ber-gambar (TIU):
    teks: "Carilah gambar yang sesuai untuk melengkapi gambar berikut!<br><br> <img src='gambarsoal/tryout4/54.jpeg'></img>"
    pembahasan: "<img src='gambarpembahasan/tryout4/31.jpeg'></img>"

  Catatan TKP: setiap pilihan WAJIB punya poin (1-5). Kunci berisi huruf
  pilihan dengan poin tertinggi. Tulis di pembahasan urutan poin, misal:
    pembahasan: "A = 3, B = 2, C = 5, D = 1, E = 4<br>Penjelasan..."
  ══════════════════════════════════════════════════════════
*/

const soalData = [

  // ════════════════════════════════════════════
  // TES WAWASAN KEBANGSAAN (TWK) — 30 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 1 ───
  {
    id: 1, kategori: "TWK",
    teks: "Dalam kesehariannya, Andi selalu menunjukkan sikap empati dan kepedulian terhadap sesama. Sikap tersebut merupakan bentuk pengamalan dari nilai-nilai Pancasila, selain menunjukkan rasa empati, sikap lain yang juga ditunjukkan oleh Andi adalah...",
    pilihan: [
      { huruf: "A", teks: "Menghormati hak beragama dan keyakinan orang lain" },
      { huruf: "B", teks: "Menghargai keragaman budaya dan suku bangsa" },
      { huruf: "C", teks: "Menolak segala bentuk tindakan yang dapat merusak persatuan masyarakat" },
      { huruf: "D", teks: "Menghormati hak asasi manusia" },
      { huruf: "E", teks: "Menghargai hasil keputusan yang diambil dalam forum" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 2 ───
  {
    id: 2, kategori: "TWK",
    teks: "Pasal 32 Undang-Undang Dasar 1945 berbunyi 'negara memajukan kebudayaan nasional Indonesia di tengah peradaban dunia dengan menjamin kebebasan masyarakat dalam memelihara dan mengembangkan nilai-nilai budaya'. Wujud implementasi yang dapat dilakukan berdasarkan pasal 32 tersebut dapat dilakukan dengan...",
    pilihan: [
      { huruf: "A", teks: "Memberikan dukungan kepada seniman dan budayawan lokal untuk mengembangkan seni dan budaya internasional" },
      { huruf: "B", teks: "Mengintegrasikan pendidikan keagamaan dan kebudayaan dalam kurikulum pendidikan nasional" },
      { huruf: "C", teks: "Memanfaatkan teknologi informasi dalam menunjang aktivitas sehari-hari" },
      { huruf: "D", teks: "Menjaga persatuan dan kesatuan bangsa dengan tidak menyebarkan hoaks di media sosial" },
      { huruf: "E", teks: "Menghargai kepercayaan dan keyakinan yang dianut oleh orang lain" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 3 ───
  {
    id: 3, kategori: "TWK",
    teks: "Proklamasi kemerdekaan merupakan sebuah pernyataan kemerdekaan dari bangsa Indonesia yang memiliki hubungan erat dan merupakan satu kesatuan dengan Undang-Undang Dasar 1945. Setiap alinea dari pembukaan UUD 1945 merinci dan menjadi pertanggungjawaban atas pernyataan bangsa Indonesia pada proklamasi kemerdekaan. Adapun hubungan proklamasi kemerdekaan dengan pembukaan UUD 1945 pada alinea kedua adalah...",
    pilihan: [
      { huruf: "A", teks: "Pembukaan UUD 1945 menegaskan dan menyatakan bahwa bangsa Indonesia telah bebas dari penjajahan dan mampu berdiri sendiri" },
      { huruf: "B", teks: "Pembukaan UUD 1945 merinci dasar negara Republik Indonesia yang merdeka, yaitu Pancasila" },
      { huruf: "C", teks: "Pembukaan UUD 1945 menegaskan kemerdekaan Indonesia merupakan berkat rahmat Tuhan YME" },
      { huruf: "D", teks: "Pembukaan UUD 1945 menegaskan kedaulatan dan penghapusan penjajahan" },
      { huruf: "E", teks: "Pembukaan UUD 1945 menegaskan bahwa kemerdekaan merupakan hak bagi seluruh negara di dunia" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 4 ───
  {
    id: 4, kategori: "TWK",
    teks: "Toleransi antarumat beragama merupakan salah satu pengamalan dari nilai-nilai Pancasila yaitu pada sila pertama 'Ketuhanan Yang Maha Esa'. Salah satu bentuk dari adanya toleransi antarumat beragama ini adalah adanya bangunan rumah ibadah masjid dan gereja di Kalimantan Tengah yang berada dalam satu tembok. Alasan pentingnya toleransi antarumat beragama adalah...",
    pilihan: [
      { huruf: "A", teks: "Untuk menghilangkan segala bentuk perbedaan dari agama yang dianut" },
      { huruf: "B", teks: "Menghindari konflik dan menyatukan kepercayaan" },
      { huruf: "C", teks: "Untuk memudahkan masyarakat melakukan ibadah secara bersama-sama" },
      { huruf: "D", teks: "Memperkuat hubungan antarwarga negara Indonesia yang memiliki beragam kepercayaan" },
      { huruf: "E", teks: "Menyatukan kepercayaan sehingga tidak ada lagi perbedaan" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 5 ───
  {
    id: 5, kategori: "TWK",
    teks: "Indonesia merupakan negara multikultural yang terdiri dari berbagai suku dan budaya. Walaupun demikian, masyarakat Indonesia tetap bersatu dan saling menghormati satu sama lain sesuai dengan simbol bangsa Indonesia, yaitu Bhinneka Tunggal Ika dan tertuang dalam sila ke-3 Pancasila. Implementasi dari prinsip tersebut dapat diwujudkan melalui sikap....",
    pilihan: [
      { huruf: "A", teks: "Memberikan bantuan kepada orang lain yang sedang mengalami kesusahan" },
      { huruf: "B", teks: "Ikut mendukung kegiatan dan turut berpartisipasi pada acara pameran budaya" },
      { huruf: "C", teks: "Aktif melakukan kegiatan kemanusiaan" },
      { huruf: "D", teks: "Berpartisipasi aktif dalam kegiatan gotong royong di lingkungan masjid setempat" },
      { huruf: "E", teks: "Tidak merugikan orang lain dalam setiap keputusan dan tindakan yang dilakukan" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 6 ───
  {
    id: 6, kategori: "TWK",
    teks: "Nilai-nilai Pancasila sudah ada sejak zaman dahulu dan sudah melekat dalam diri bangsa Indonesia sebelum Indonesia meraih kemerdekaan Indonesia yang diikrarkan pada tanggal 17 Agustus 1945. Artinya...",
    pilihan: [
      { huruf: "A", teks: "Pancasila merupakan kebanggaan para leluhur bangsa" },
      { huruf: "B", teks: "Pancasila merupakan karakter bangsa dan sudah ditemukan dalam diri bangsa" },
      { huruf: "C", teks: "Pancasila sudah menjadi dasar negara sejak dahulunya" },
      { huruf: "D", teks: "Pancasila merupakan kesepakatan dan perjanjian para leluhur" },
      { huruf: "E", teks: "Pancasila sudah dirumuskan sebelum kemerdekaan" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 7 ───
  {
    id: 7, kategori: "TWK",
    teks: "Nasionalisme sering kali mencakup perasaan cinta dan kesetiaan terhadap tanah air. Sebagai warga negara Indonesia, kita harus memiliki rasa tanggung jawab terhadap pembangunan dan kesejahteraan bangsa. Untuk mewujudkannya, sikap yang dapat dilakukan adalah...",
    pilihan: [
      { huruf: "A", teks: "Ikut berpartisipasi dalam gerakan mempertahankan keamanan nasional" },
      { huruf: "B", teks: "Mendukung perlawanan terhadap penjajah" },
      { huruf: "C", teks: "Aktif mengikuti kegiatan seni dan festival budaya" },
      { huruf: "D", teks: "Berpartisipasi dalam kegiatan kampanye lingkungan dan kegiatan sosial" },
      { huruf: "E", teks: "Ikut berpartisipasi aktif dalam perayaan nasional" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 8 ───
  {
    id: 8, kategori: "TWK",
    teks: "Selain hubungannya dengan patriotisme, adanya nasionalisme juga dapat menciptakan rasa solidaritas sosial di antara berbagai kelompok masyarakat dalam suatu negara sehingga dapat mengatasi perbedaan sosial, agama dan etnis. Untuk mewujudkan rasa solidaritas tersebut, upaya yang dapat dilakukan oleh warga negara adalah...",
    pilihan: [
      { huruf: "A", teks: "Menyokong pendidikan yang mempromosikan kesadaran sejarah" },
      { huruf: "B", teks: "Berpartisipasi dalam upaya untuk melindungi hak-hak politik" },
      { huruf: "C", teks: "Aktif mengikuti perayaan nasional seperti sumpah pemuda dan hari pahlawan" },
      { huruf: "D", teks: "Mendukung kebijakan integritas wilayah nasional seperti partisipasi dalam gerakan untuk mempertahankan perbatasan atau mendukung kebijakan keamanan nasional" },
      { huruf: "E", teks: "Mengikuti dan mendukung kegiatan sosial, budaya, dan olahraga bersama yang melibatkan berbagai kelompok masyarakat" }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 9 ───
  {
    id: 9, kategori: "TWK",
    teks: "Patriotisme melibatkan rasa cinta dan rasa memiliki tanah air. Individu yang patriotik merasa terhubung secara emosional dengan negara mereka dan bangga menjadi bagian dari negara tersebut. Yudi sebagai seorang warga sipil menjunjung tinggi rasa patriotisme tersebut dan ditunjukkan dengan sikap...",
    pilihan: [
      { huruf: "A", teks: "Mendukung kebijakan dan langkah-langkah yang mendukung keamanan dan kedaulatan negara" },
      { huruf: "B", teks: "Menghargai keindahan dan keunikan tanah air dengan mempromosikan pariwisata lokal ke kancah internasional" },
      { huruf: "C", teks: "Memanfaatkan hak pilih dan berpartisipasi dalam diskusi politik" },
      { huruf: "D", teks: "Membangun rasa persatuan di antara sesama warga negara" },
      { huruf: "E", teks: "Terlibat dalam kegiatan komunitas yang memperlihatkan semangat kebersamaan" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 10 ───
  {
    id: 10, kategori: "TWK",
    teks: "Cinta tanah air merupakan perasaan yang sangat pribadi dan dapat diungkapkan melalui berbagai bentuk kontribusi positif terhadap negara dan masyarakat. Rasa cinta tanah air juga mencakup kepedulian terhadap lingkungan alam dan upaya untuk mempertahankan keindahan alam karena menjadi bagian dari warisan nasional. Bentuk kontribusi yang dapat dilakukan oleh warga negara yang menunjukkan rasa cinta tanah air tersebut adalah...",
    pilihan: [
      { huruf: "A", teks: "Terlibat dalam program penghijauan dan penanaman pohon untuk memperkuat ekosistem" },
      { huruf: "B", teks: "Mematuhi hukum negara dengan membayar pajak secara tertib" },
      { huruf: "C", teks: "Menunjukkan kesetiaan dengan mendukung kebijakan nasional" },
      { huruf: "D", teks: "Ikut berpartisipasi dalam acara-acara kebangsaan" },
      { huruf: "E", teks: "Menyatakan diri dengan bangga sebagai warga negara Indonesia" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 11 ───
  {
    id: 11, kategori: "TWK",
    teks: "Gunawan merupakan seorang warga sipil yang menunjukkan rasa cinta kepada tanah air melalui upaya pemberdayaan masyarakat dan aktif berkontribusi pada perkembangan sosial dan ekonomi negara. Dalam kesehariannya, biasanya Gunawan...",
    pilihan: [
      { huruf: "A", teks: "Terlibat aktif dalam upaya pelestarian budaya dan sejarah" },
      { huruf: "B", teks: "Aktif mengikuti kegiatan sukarela untuk membantu masyarakat yang membutuhkan" },
      { huruf: "C", teks: "Terlibat dalam kegiatan pemberdayaan masyarakat lokal seperti keterampilan, pendidikan, dan bantuan kesehatan" },
      { huruf: "D", teks: "Menghormati bendera dengan memberikan penghormatan ketika dinyanyikan lagu kebangsaan" },
      { huruf: "E", teks: "Selalu waspada terhadap ancaman potensial" }
    ],
    kunci: "C",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 12 ───
  {
    id: 12, kategori: "TWK",
    teks: "Rasa nasionalisme merupakan hal utama yang harus dimiliki oleh seorang ASN karena kehadiran ASN diharapkan dapat memberikan pelayanan terbaik kepada masyarakat selain menunjukkan panutan dan contoh dalam kehidupan sehari-hari. Saat menjalankan tugasnya, seorang ASN biasanya...",
    pilihan: [
      { huruf: "A", teks: "Mematuhi aturan dan hukum yang berlaku" },
      { huruf: "B", teks: "Berusaha memberikan kontribusi positif dalam peningkatan efisiensi dan inovasi dalam meningkatkan kualitas layanan masyarakat" },
      { huruf: "C", teks: "Meningkatkan kompetensi dan keterampilan melalui pendidikan dan pengembangan diri" },
      { huruf: "D", teks: "Menunjukkan kepedulian sesama rekan kerja, terutama dalam situasi darurat" },
      { huruf: "E", teks: "Menjaga hubungan baik sesama rekan kerja baik dengan atasan maupun bawahan" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 13 ───
  {
    id: 13, kategori: "TWK",
    teks: "Sebagai ketua adat, Pak Datuk selalu menunjukkan netralitas dan tidak memihak kepada siapa pun. Hal tersebut menjadikan Pak Datuk lebih dikenal dan dihargai oleh warganya. Sikap tersebut juga diteladani oleh anaknya yang bernama Wina, dalam kesehariannya, biasanya Wina...",
    pilihan: [
      { huruf: "A", teks: "Tidak menghianati kepercayaan yang diberikan oleh orang lain kepadanya" },
      { huruf: "B", teks: "Menghindari pelanggaran privasi dan menghormati hak individu" },
      { huruf: "C", teks: "Berteman dengan siapa saja tanpa memandang suku dan latar belakang" },
      { huruf: "D", teks: "Mematuhi lalu lintas dan berkendara dengan tertib" },
      { huruf: "E", teks: "Belajar dengan rajin dan mengusahakan yang terbaik demi cita-cita" }
    ],
    kunci: "C",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 14 ───
  {
    id: 14, kategori: "TWK",
    teks: "Integritas memiliki pengaruh yang besar terhadap kehidupan setiap orang. Integritas akan membentuk reputasi dan prestasi seseorang sehingga lebih mudah dipercaya oleh orang lain. Bentuk penanaman nilai integritas secara dini dapat dilakukan dengan...",
    pilihan: [
      { huruf: "A", teks: "Mewujudkan 'kantin kejujuran' di sekolah" },
      { huruf: "B", teks: "Membantu teman sekelas dengan tulus dan ikhlas" },
      { huruf: "C", teks: "Memakai pakaian sekolah yang bersih dan rapi" },
      { huruf: "D", teks: "Berbicara lemah lembut dan bersikap sopan kepada teman sekelas" },
      { huruf: "E", teks: "Menghormati guru dan menghargai teman sekelas" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 15 ───
  {
    id: 15, kategori: "TWK",
    teks: "Meskipun masih remaja, Diana sudah menjunjung tinggi nilai-nilai integritas. Dalam kesehariannya, ia mampu mengendalikan dirinya dan bertindak sesuai dengan nilai-nilai etika. Sikap tersebut tidak hanya diterapkannya di lingkungan sekolahnya saja. Dalam kesehariannya, di rumah, biasanya Diana...",
    pilihan: [
      { huruf: "A", teks: "Membantu membersihkan rumah dan pekarangan dengan ikhlas" },
      { huruf: "B", teks: "Membantu orang lain yang sedang tertimpa kesulitan" },
      { huruf: "C", teks: "Beribadah dengan rajin" },
      { huruf: "D", teks: "Menghormati kedua orang tua" },
      { huruf: "E", teks: "Tidak mengambil dan menggunakan barang milik kakak atau adiknya sebelum mendapatkan izin" }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 16 ───
  {
    id: 16, kategori: "TWK",
    teks: "Informasi hoaks atau tidak jelas kebenarannya menjadi masalah utama yang harus diselesaikan karena dapat menyebabkan pro dan kontra di tengah masyarakat Indonesia. Salah satu upaya yang dapat dilakukan adalah dengan penanaman dan pemahaman nilai-nilai integritas bagi si pembuat berita, alasannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Integritas merupakan kunci utama dalam membentuk kepribadian seseorang dalam berperilaku dan bertindak" },
      { huruf: "B", teks: "Integritas merupakan nilai-nilai yang membentuk kekonsistenan seseorang antara apa yang diucapkan dengan tindakan yang dilakukan" },
      { huruf: "C", teks: "Integritas merupakan poin yang paling penting dalam membentuk karakter seseorang dalam kehidupan bermasyarakat" },
      { huruf: "D", teks: "Integritas merupakan nilai-nilai yang sudah ada di dalam diri seseorang yang harus diasah agar mampu bertindak sesuai dengan aturan yang berlaku" },
      { huruf: "E", teks: "Integritas merupakan suatu tindakan yang terjadi secara refleks yang dibentuk karena adanya pengalaman dan dukungan moral dari orang lain" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 17 ───
  {
    id: 17, kategori: "TWK",
    teks: "RA Kartini merupakan pejuang sekaligus pelopor kemajuan kaum wanita di Indonesia. Berkat pemikiran dan usahanya, perempuan-perempuan Indonesia memiliki pendidikan dan hak yang sama dengan laki-laki. Beliau selalu mencari cara agar pemikirannya bisa tersampaikan kepada orang banyak. Meski tidak sekolah tinggi, RA Kartini selalu belajar dengan gigih bahkan terkenal gemar menulis surat kepada sahabat penanya. Integritas yang dapat diteladani dari RA Kartini sebagai pelopor kaum wanita ini adalah...",
    pilihan: [
      { huruf: "A", teks: "Jujur karena ucapannya sesuai dengan tindakan yang dilakukan" },
      { huruf: "B", teks: "Tanggung jawab karena beliau bertanggung jawab dengan kesejahteraan orang banyak" },
      { huruf: "C", teks: "Adil karena tidak membedakan perlakuan antara kaum laki-laki dan perempuan" },
      { huruf: "D", teks: "Mandiri karena mau belajar sendiri" },
      { huruf: "E", teks: "Kerja keras demi perjuangan dan kesetaraan hak antara laki-laki dan perempuan" }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 18 ───
  {
    id: 18, kategori: "TWK",
    teks: "Tio terkenal dengan seorang yang berintegritas. Sikapnya selalu mencerminkan ketertiban, pengendalian diri dan ketaatan terhadap aturan dan norma yang berlaku. Selain itu, Tio juga mampu mengontrol dirinya dengan baik. Di lingkungan sekolah, biasanya Tio...",
    pilihan: [
      { huruf: "A", teks: "Hadir tepat waktu dan fokus saat belajar" },
      { huruf: "B", teks: "Membantu teman yang sedang kesulitan" },
      { huruf: "C", teks: "Belajar dengan rajin dan hormat kepada guru" },
      { huruf: "D", teks: "Membayar uang kas kepada bendahara kelas" },
      { huruf: "E", teks: "Bertegur sapa dengan semua anggota yang ada di lingkungan sekolah" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 19 ───
  {
    id: 19, kategori: "TWK",
    teks: "Bela negara merupakan sebuah semangat berani berkorban demi tanah air. Bentuk bela negara adalah tekad, sikap dan perilaku warga negara yang dijiwai oleh kesetiaan dan kecintaannya kepada NKRI yang berdasarkan kepada Pancasila dan UUD 1945. Upaya tersebut dapat tercermin dalam sikap",
    pilihan: [
      { huruf: "A", teks: "Tidak membeda-bedakan perlakuan sesama warga negara" },
      { huruf: "B", teks: "Bangga sebagai orang Indonesia" },
      { huruf: "C", teks: "Belajar strategi perang antar bangsa" },
      { huruf: "D", teks: "Memiliki kemampuan awal bela negara" },
      { huruf: "E", teks: "Membantu perekonomian bangsa dengan bekerja" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 20 ───
  {
    id: 20, kategori: "TWK",
    teks: "Upaya bela negara juga mencakup tindakan yang tidak melibatkan penggunaan kekuatan fisik atau pertempuran langsung, tetapi tetap memiliki dampak positif terhadap keamanan, kedaulatan dan kesejahteraan negara. Dalam aspek pendidikan dan literasi misalnya, seorang warga negara dapat melakukan upaya bela negara dengan cara...",
    pilihan: [
      { huruf: "A", teks: "Terlibat aktif dalam kegiatan amal dan bantuan sosial" },
      { huruf: "B", teks: "Mengembangkan dan menggunakan teknologi informasi untuk menjaga keamanan siber negara" },
      { huruf: "C", teks: "Mempelajari pendidikan Pancasila, sejarah kebangsaan dan bahasa negara" },
      { huruf: "D", teks: "Mendorong kesadaran akan pentingnya kesehatan masyarakat seperti berpartisipasi dalam kegiatan kampanye kesehatan" },
      { huruf: "E", teks: "Memiliki keterampilan dan pengetahuan yang memadai untuk mendukung pembangunan negara" }
    ],
    kunci: "C",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 21 ───
  {
    id: 21, kategori: "TWK",
    teks: "Posisi mahasiswa saat ini sering kali mendapatkan julukan sebagai agent of change atau agen perubahan. Sebagai agent of change sudah seharusnya mahasiswa siap dalam menghadapi tantangan yang diakibatkan oleh perkembangan zaman yang tidak menentu hingga menimbulkan pergeseran dan segala problematikanya di lingkungan masyarakat. Upaya yang dapat dilakukan untuk menghadapi tantangan tersebut adalah...",
    pilihan: [
      { huruf: "A", teks: "Ikut aksi demonstrasi sebagai upaya mengoreksi kebijakan-kebijakan terbaru pemerintah" },
      { huruf: "B", teks: "Berprestasi di berbagai bidang baik di tingkat kampus, kabupaten, provinsi, bahkan nasional" },
      { huruf: "C", teks: "Meningkatkan pengetahuan dan pemahaman terhadap isu-isu global, sosial dan ekonomi" },
      { huruf: "D", teks: "Ikut berpartisipasi dalam pengambilan keputusan kebijakan pemerintah" },
      { huruf: "E", teks: "Belajar sesuai dengan aturan dan kebijakan yang berlaku" }
    ],
    kunci: "C",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 22 ───
  {
    id: 22, kategori: "TWK",
    teks: "Gerakan literasi menjadi salah satu upaya pemerintah dalam menumbuhkan budi pekerti dan sebagai acuan untuk memiliki akhlak atau moral yang baik demi menjaga persatuan dan kesatuan bangsa. Dalam upaya bela negara, peranan literasi ini dapat berupa...",
    pilihan: [
      { huruf: "A", teks: "Mendapatkan, membaca dan memahami informasi dengan kritis untuk membentuk pemikiran yang sehat" },
      { huruf: "B", teks: "Mendapatkan informasi dari berbagai pihak dan kalangan tanpa adanya batasan akses" },
      { huruf: "C", teks: "Mendapatkan informasi tanpa perlu verifikasi" },
      { huruf: "D", teks: "Memudahkan akses segala bentuk budaya baik budaya lokal maupun budaya luar" },
      { huruf: "E", teks: "Semua benar" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 23 ───
  {
    id: 23, kategori: "TWK",
    teks: "Setiap warga negara memiliki kewajiban yang sama dalam upaya bela negara. Hal tersebut merupakan wujud kecintaannya terhadap tanah air yang sudah memberikan kehidupan kepadanya. Saat ini, Andi merupakan seorang warga negara yang sedang mencari kehidupan di luar negeri, upaya bela negara yang dapat dilakukan oleh Andi adalah...",
    pilihan: [
      { huruf: "A", teks: "Bekerja dengan rajin dan tulus demi menghidupi keluarga" },
      { huruf: "B", teks: "Membuat video yang berkaitan dengan aktivitas yang dilakukan sehari-hari" },
      { huruf: "C", teks: "Membantu mempromosikan pariwisata lokal" },
      { huruf: "D", teks: "Membangun usaha dan mempekerjakan orang lain demi mengurangi pengangguran" },
      { huruf: "E", teks: "Tetap bekerja di luar negeri karena gajinya lebih besar" }
    ],
    kunci: "C",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 24 ───
  {
    id: 24, kategori: "TWK",
    teks: "Bela negara merupakan sikap dan perilaku warga negara yang dijiwai dengan kecintaannya terhadap Negara Kesatuan Republik Indonesia yang berdasarkan Pancasila dan UUD 1945 dalam menjalin kelangsungan hidup bangsa seutuhnya. Nilai dasar dari upaya bela negara adalah sebagai berikut, kecuali...",
    pilihan: [
      { huruf: "A", teks: "Kecintaan terhadap tanah air" },
      { huruf: "B", teks: "Rela berkorban untuk bangsa dan negara" },
      { huruf: "C", teks: "Kesadaran berbangsa dan bernegara" },
      { huruf: "D", teks: "Meyakini bahwa UUD 1945 sebagai sumber dari segala sumber hukum" },
      { huruf: "E", teks: "Memiliki kemampuan awal bela negara" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 25 ───
  {
    id: 25, kategori: "TWK",
    teks: "Penggunaan tabir surya merupakan langkah penting dalam menjaga kesehatan kulit dan mencegah risiko kerusakan akibat paparan sinar matahari. Tabir surya mengandung bahan-bahan yang dapat melindungi kulit dari sinar UV yang berpotensi merusak sel-sel kulit dan menyebabkan penuaan dini, kanker kulit, dan masalah kulit lainnya. Melibatkan tabir surya dalam rutinitas perawatan kulit sehari-hari membantu mengurangi risiko terkena sinar UVB dan UVA yang dapat merusak struktur kulit. Dengan merawat kulit menggunakan tabir surya, seseorang dapat memastikan perlindungan yang optimal dan mempertahankan kesehatan kulit jangka panjang.<br>Pokok pikiran dari paragraf di atas adalah...",
    pilihan: [
      { huruf: "A", teks: "Pentingnya menjaga elastisitas kulit" },
      { huruf: "B", teks: "Risiko penyakit kanker kulit" },
      { huruf: "C", teks: "Manfaat tabir surya bagi kesehatan tubuh terutama kesehatan kulit" },
      { huruf: "D", teks: "Kandungan bahan aktif dalam tabir surya" },
      { huruf: "E", teks: "Pentingnya menggunakan tabir surya dalam menjaga kesehatan kulit" }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 26 ───
  {
    id: 26, kategori: "TWK",
    teks: "Dari uji praklinik maupun klinik dapat disimpulkan bahwa pare sangat berpeluang dijadikan sumber fitofarmaka antidiabetes. Penelitian pare sebagai antidiabetes diawali dengan pembuktian secara alamiah mengenai kemampuannya menurunkan kadar glukosa darah pada hewan uji dalam kondisi normal maupun diabetes. Dilaporkan, ekstrak air buah pare menunjukkan efek hipoglikemik (menurunkan kadar glukosa darah) pada orang normal maupun diabetes yang diinduksi streptozotosin.<br>Gagasan yang terkandung dalam penggalan wacana tersebut ialah...",
    pilihan: [
      { huruf: "A", teks: "Pare sangat berpeluang dijadikan sumber fitofarmaka anti diabetes" },
      { huruf: "B", teks: "Penelitian pare sebagai antidiabetes diawali dengan pembuktian" },
      { huruf: "C", teks: "Hasil uji praklinik dan klinik tentang pare" },
      { huruf: "D", teks: "Pare menurunkan kadar glukosa darah pada hewan uji" },
      { huruf: "E", teks: "Ekstrak air buah pare menurunkan kadar glukosa darah pada orang normal" }
    ],
    kunci: "C",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 27 ───
  {
    id: 27, kategori: "TWK",
    teks: "Bencana banjir lumpur akibat jebolnya tanggul Huruhara di desa Sukasaya telah menimbulkan berbagai macam penyakit. Beberapa penyakit yang akan timbul sesudah bencana adalah diare, tifus, leptospirosis, dan demam berdarah. Masalah kesehatan pada korban dan masyarakat di sekitar lokasi bencana harus segera diantisipasi. Beberapa penyakit itu muncul karena lingkungan kotor dan sumber air bersih yang tercemar lumpur.<br>Gagasan utama paragraf tersebut adalah...",
    pilihan: [
      { huruf: "A", teks: "Masalah kesehatan pada korban harus diperhatikan" },
      { huruf: "B", teks: "Bencana banjir lumpur akibat jebolnya tanggul" },
      { huruf: "C", teks: "Bencana banjir lumpur menimbulkan berbagai penyakit" },
      { huruf: "D", teks: "Beberapa penyakit muncul karena lingkungan kotor" },
      { huruf: "E", teks: "Semua salah" }
    ],
    kunci: "C",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 28 ───
  {
    id: 28, kategori: "TWK",
    teks: "Bulatnya tekad Anastasya dalam menjuangkan nasib anak-anaknya akhirnya membuahkan hasil yang bahagia bagi dirinya.<br>Kesalahan penggunaan kata dalam kalimat di atas adalah...",
    pilihan: [
      { huruf: "A", teks: "Nasib, seharusnya nasibnya" },
      { huruf: "B", teks: "Bulatnya, seharusnya sebulatnya" },
      { huruf: "C", teks: "Akhirnya, seharusnya akhiri" },
      { huruf: "D", teks: "Membuahkan, seharusnya membuahi" },
      { huruf: "E", teks: "Menjuangkan, seharusnya memperjuangkan" }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 29 ───
  {
    id: 29, kategori: "TWK",
    teks: "Perhatikan kalimat-kalimat di bawah ini:<br>(1) Pemberian penghargaan dapat menstimulasi semangat berkarya pemuda.<br>(2)Kurangnya apresiasi dapat mengakibatkan malasnya pemuda dalam berkarya.<br>(3)Aris menabung dengan tujuan ingin membeli mobil baru.<br>(4)Bu Ina menyeduhkan teh hangat yang sangat manis sekali ke dalam cangkir kami.<br>Kalimat tidak efektif ditunjukkan pada kalimat nomor...",
    pilihan: [
      { huruf: "A", teks: "(1)" },
      { huruf: "B", teks: "(2)" },
      { huruf: "C", teks: "(3)" },
      { huruf: "D", teks: "(4)" },
      { huruf: "E", teks: "Semua kalimat" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 30 ───
  {
    id: 30, kategori: "TWK",
    teks: "Setelah sekian lama akhirnya Anton mampu <em>mempikat</em> hati wanita idamannya dan minggu depan dia akan mempersunting wanita cantik itu.<br>Pada kata bergaris miring di atas seharusnya ialah....",
    pilihan: [
      { huruf: "A", teks: "Memikat" },
      { huruf: "B", teks: "Memperikat" },
      { huruf: "C", teks: "Mengikat" },
      { huruf: "D", teks: "Pikat" },
      { huruf: "E", teks: "Mempikat" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ════════════════════════════════════════════
  // TES INTELIGENSIA UMUM (TIU) — 35 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 31 ───
  {
    id: 31, kategori: "TIU",
    teks: "40, 37, 31, 28, 22, 19, ...",
    pilihan: [
      { huruf: "A", teks: "7" },
      { huruf: "B", teks: "9" },
      { huruf: "C", teks: "11" },
      { huruf: "D", teks: "13" },
      { huruf: "E", teks: "15" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 32 ───
  {
    id: 32, kategori: "TIU",
    teks: "3, 8, 15, 24, ...",
    pilihan: [
      { huruf: "A", teks: "35" },
      { huruf: "B", teks: "40" },
      { huruf: "C", teks: "42" },
      { huruf: "D", teks: "48" },
      { huruf: "E", teks: "49" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 33 ───
  {
    id: 33, kategori: "TIU",
    teks: "1, 3, 7, 13, 21, ...",
    pilihan: [
      { huruf: "A", teks: "24" },
      { huruf: "B", teks: "26" },
      { huruf: "C", teks: "30" },
      { huruf: "D", teks: "31" },
      { huruf: "E", teks: "36" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 34 ───
  {
    id: 34, kategori: "TIU",
    teks: "<math><mfrac> <mn>1</mn><mn>2</mn> </mfrac></math>, <math><mfrac> <mn>2</mn><mn>8</mn> </mfrac></math>, <math><mfrac> <mn>3</mn><mn>26</mn> </mfrac></math>, <math><mfrac> <mn>4</mn><mn>80</mn> </mfrac></math>, ...",
    pilihan: [
      { huruf: "A", teks: "<math><mfrac> <mn>5</mn><mn>241</mn> </mfrac></math>" },
      { huruf: "B", teks: "<math><mfrac> <mn>5</mn><mn>242</mn> </mfrac></math>" },
      { huruf: "C", teks: "<math><mfrac> <mn>5</mn><mn>243</mn> </mfrac></math>" },
      { huruf: "D", teks: "<math><mfrac> <mn>5</mn><mn>244</mn> </mfrac></math>" },
      { huruf: "E", teks: "<math><mfrac> <mn>5</mn><mn>245</mn> </mfrac></math>" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 35 ───
  {
    id: 35, kategori: "TIU",
    teks: "'Endah mengumpulkan medali dari keaktifannya mengikuti lomba sejak ia masih kecil.'<br>Hubungan objek-objek pada kalimat tersebut setara dengan...",
    pilihan: [
      { huruf: "A", teks: "Aldo terbiasa merapikan jas yang ia kenakan setiap kali akan naik ke panggung" },
      { huruf: "B", teks: "Ketua menerima keputusan setelah semua anggota yang menghadiri diskusi sepakat dengan hal tersebut" },
      { huruf: "C", teks: "Denting jam yang berbunyi mengingatkan kenangan saat tinggal di rumah nenek" },
      { huruf: "D", teks: "Hormon insulin berperan untuk mengubah glukosa dari makanan dan minuman yang dikonsumsi untuk menjadi energi" },
      { huruf: "E", teks: "Senyum di pagi hari membantu meningkatkan mood yang baik sepanjang hari" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 36 ───
  {
    id: 36, kategori: "TIU",
    teks: "<em>Sebelum mendirikan pabrik itu, Pak Yanto adalah seorang tukang ojek di desanya.</em><br>Kalimat yang setara dengan kalimat tersebut adalah ...",
    pilihan: [
      { huruf: "A", teks: "Campuran ini digunakan untuk menghasilkan komoditas, seperti bahan bakar, farmasi, plastik, dan pupuk" },
      { huruf: "B", teks: "Sebelum mengikuti ujian nasional, siswa diminta belajar bersungguh-sungguh" },
      { huruf: "C", teks: "Setelah memiliki alat yang lengkap, Dodit mampu membuka bengkel di depan rumahnya" },
      { huruf: "D", teks: "Sebelum membawa pulang HP baru itu, sebagai pembeli harus menunjukkan bukti pembayaran yang sah" },
      { huruf: "E", teks: "Sebelum menjalankan mesin cetak, para pekerja mengenakan alat keselamatan yang benar" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 37 ───
  {
    id: 37, kategori: "TIU",
    teks: "PAHLAWAN : BERANI = PROFESOR : ...",
    pilihan: [
      { huruf: "A", teks: "Pandai" },
      { huruf: "B", teks: "Bijaksana" },
      { huruf: "C", teks: "Kuat" },
      { huruf: "D", teks: "Rajin" },
      { huruf: "E", teks: "Tegas" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 38 ───
  {
    id: 38, kategori: "TIU",
    teks: "KIJANG : MELOMPAT : HUTAN : = ... : ... : ...",
    pilihan: [
      { huruf: "A", teks: "Merpati : Terbang : Udara" },
      { huruf: "B", teks: "Tembakau : Rokok : Asap" },
      { huruf: "C", teks: "Makanan : Nasi : Meja Makan" },
      { huruf: "D", teks: "Sopir : Truk : Darat" },
      { huruf: "E", teks: "Aku : Kamu : Bapakmu" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 39 ───
  {
    id: 39, kategori: "TIU",
    teks: "Hasil dari 3,6 + 2,1 : 0,3 - 0,6 = ....",
    pilihan: [
      { huruf: "A", teks: "0" },
      { huruf: "B", teks: "10" },
      { huruf: "C", teks: "18,4" },
      { huruf: "D", teks: "19" },
      { huruf: "E", teks: "Tidak terdefinisi" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 40 ───
  {
    id: 40, kategori: "TIU",
    teks: "Hasil dari 3<math><mfrac> <mn>1</mn><mn>4</mn> </mfrac></math> &times; <math><mfrac> <mn>9</mn><mn>10</mn> </mfrac></math> : 0,8 = ...",
    pilihan: [
      { huruf: "A", teks: "5<math><mfrac> <mn>12</mn><mn>32</mn> </mfrac></math>" },
      { huruf: "B", teks: "4<math><mfrac> <mn>37</mn><mn>72</mn> </mfrac></math>" },
      { huruf: "C", teks: "3<math><mfrac> <mn>21</mn><mn>32</mn> </mfrac></math>" },
      { huruf: "D", teks: "2<math><mfrac> <mn>8</mn><mn>9</mn> </mfrac></math>" },
      { huruf: "E", teks: "1<math><mfrac> <mn>13</mn><mn>50</mn> </mfrac></math>" }
    ],
    kunci: "C",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 41 ───
  {
    id: 41, kategori: "TIU",
    teks: "0,42 + <math><mfrac> <mn>1</mn><mn>3</mn> </mfrac></math> &times; <math><mfrac> <mn>6</mn><mn>5</mn> </mfrac></math> - <math><mfrac> <mn>16</mn><mn>25</mn> </mfrac></math> adalah...",
    pilihan: [
      { huruf: "A", teks: "<math><mfrac> <mn>3</mn><mn>50</mn> </mfrac></math>" },
      { huruf: "B", teks: "<math><mfrac> <mn>9</mn><mn>50</mn> </mfrac></math>" },
      { huruf: "C", teks: "<math><mfrac> <mn>11</mn><mn>50</mn> </mfrac></math>" },
      { huruf: "D", teks: "<math><mfrac> <mn>13</mn><mn>50</mn> </mfrac></math>" },
      { huruf: "E", teks: "<math><mfrac> <mn>17</mn><mn>50</mn> </mfrac></math>" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 42 ───
  {
    id: 42, kategori: "TIU",
    teks: "Dengan laju atau speed tetap, jarak 120 km dapat ditempuh dalam waktu 2<math><mfrac> <mn>1</mn><mn>2</mn> </mfrac></math> jam.<br><table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:12px 24px;text-align:left;'>Jarak (dalam km) yang ditempuh jika baru menempuh perjalanan selama 1 jam 40 menit</td><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>80 km</td></tr></tbody></table><br>Manakah hubungan yang benar berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "3A > 3B" },
      { huruf: "B", teks: "4A = 4B" },
      { huruf: "C", teks: "B - A = 1" },
      { huruf: "D", teks: "2B - A < 50" },
      { huruf: "E", teks: "<math><mfrac> <mn>A</mn><mn>B</mn> </mfrac></math> > 5" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 43 ───
  {
    id: 43, kategori: "TIU",
    teks: "Dalam 120 mL satuan campuran, terkandung zat X seberat 0,05mg.<br><table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:12px 24px;text-align:left;'>Banyak campuran yang harus diambil (dalam mL) agar mendapatkan zat X seberat 2 mg</td><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>4600</td></tr></tbody></table><br>Manakah hubungan yang benar berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "A < 2B" },
      { huruf: "B", teks: "3A < 2B" },
      { huruf: "C", teks: "A - B = 2.000" },
      { huruf: "D", teks: "A > 2B" },
      { huruf: "E", teks: "A + B = 8.000" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 44 ───
  {
    id: 44, kategori: "TIU",
    teks: "Perhatikan tabel berikut!<br><table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:12px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>54 &times; (512 &divide; 32)</td><td style='border:2px solid #333;padding:12px 24px;text-align:center;'>(876 &minus; 287) + (734 &minus; 478)</td></tr></tbody></table><br>Manakah hubungan yang benar berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "A - 2B > 0" },
      { huruf: "B", teks: "2B - A < 0" },
      { huruf: "C", teks: "2A > 3B" },
      { huruf: "D", teks: "-4A = 2B" },
      { huruf: "E", teks: "A - 19 = B" }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 45 ───
  {
    id: 45, kategori: "TIU",
    teks: "Ada project dapat diselesaikan oleh 15 orang selama 24 hari. Jika pekerjaan tersebut akan diselesaikan dalam waktu 20 hari, maka banyak pekerja yang diperlukan adalah ...",
    pilihan: [
      { huruf: "A", teks: "16" },
      { huruf: "B", teks: "18" },
      { huruf: "C", teks: "20" },
      { huruf: "D", teks: "22" },
      { huruf: "E", teks: "24" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 46 ───
  {
    id: 46, kategori: "TIU",
    teks: "Empat buah lampu dengan daya 25 watt mampu menerangi ruangan seluas 200m<sup>2</sup>.Banyak lampu sejenis yang diperlukan untuk menerangi ruangan seluas 450m<sup>2</sup> adalah ...",
    pilihan: [
      { huruf: "A", teks: "6 Buah" },
      { huruf: "B", teks: "7 Buah" },
      { huruf: "C", teks: "8 Buah" },
      { huruf: "D", teks: "9 Buah" },
      { huruf: "E", teks: "10 Buah" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 47 ───
  {
    id: 47, kategori: "TIU",
    teks: "Sebuah barang dijual dengan memberikan untung sebesar 15%. Jika untung yang diperoleh sebesar Rp. 24.000, harga jual barang tersebut adalah ...",
    pilihan: [
      { huruf: "A", teks: "Rp 160.000" },
      { huruf: "B", teks: "Rp 165.000" },
      { huruf: "C", teks: "Rp 170.000" },
      { huruf: "D", teks: "Rp 178.000" },
      { huruf: "E", teks: "Rp 184.000" }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 48 ───
  {
    id: 48, kategori: "TIU",
    teks: "Suatu pekerjaan dapat diselesaikan oleh 30 pekerja dengan target selesai 240 hari, di hari ke-121, 10 pekerja berhenti dan tidak kembali lagi. Berapa hari pekerjaan tersebut akan selesai?",
    pilihan: [
      { huruf: "A", teks: "280 hari" },
      { huruf: "B", teks: "300 hari" },
      { huruf: "C", teks: "360 hari" },
      { huruf: "D", teks: "400 hari" },
      { huruf: "E", teks: "420 hari" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 49 ───
  {
    id: 49, kategori: "TIU",
    teks: "Ibu tidak memasak jamur atau Alma banyak makan<br>Ibu memasak jamur<br>Kesimpulannya adalah...",
    pilihan: [
      { huruf: "A", teks: "Alma banyak makan dan ibu memasak jamur" },
      { huruf: "B", teks: "Alma tidak banyak makan atau ibu memasak jamur" },
      { huruf: "C", teks: "Alma tidak banyak makan dan ibu tidak memasak jamur" },
      { huruf: "D", teks: "Alma banyak makan atau ibu tidak memasak jamur" },
      { huruf: "E", teks: "Alma banyak makan" }
    ],
    kunci: "E",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 50 ───
  {
    id: 50, kategori: "TIU",
    teks: "Semua wisatawan yang akan ke pantai memakai topi.<br>Beberapa wisatawan asing memakai topi.<br>Manakah kesimpulan yang paling tepat berdasarkan premis di atas...",
    pilihan: [
      { huruf: "A", teks: "Semua wisatawan asing pergi ke pantai" },
      { huruf: "B", teks: "Semua wisatawan memakai topi" },
      { huruf: "C", teks: "Beberapa wisatawan tidak memakai topi" },
      { huruf: "D", teks: "Beberapa wisatawan asing mungkin pergi ke pantai" },
      { huruf: "E", teks: "Sebagian wisatawan pergi ke pantai" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 51 ───
  {
    id: 51, kategori: "TIU",
    teks: "Jika Azka dapat menyelesaikan tugas proyeknya tepat waktu, maka A mendaki gunung menggunakan sepatu baru.<br>Jika Azka tidak pergi ke pulau Sumatera, Maka Azka tidak membeli tiket pesawat.<br>Azka tidak mendaki gunung menggunakan sepatu baru atau Azka membeli tiket pesawat.<br>Manakah simpulan berikut yang benar?",
    pilihan: [
      { huruf: "A", teks: "Jika Azka dapat menyelesaikan tugas proyeknya tepat waktu, maka Azka pergi ke pulau Sumatera" },
      { huruf: "B", teks: "Jika Azka dapat menyelesaikan tugas proyeknya tepat waktu, maka Azka tidak pergi ke pulau Sumatera" },
      { huruf: "C", teks: "Jika Azka tidak dapat menyelesaikan proyeknya tepat waktu, maka Azka pergi ke pulau Sumatera" },
      { huruf: "D", teks: "Jika Azka tidak dapat menyelesaikan proyeknya tepat waktu, maka Azka tidak pergi ke pulau Sumatera" },
      { huruf: "E", teks: "Azka tidak dapat menyelesaikan tugas proyeknya tepat waktu atau Azka tidak pergi ke pulau Sumatera" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 52 ───
  {
    id: 52, kategori: "TIU",
    teks: "Carilah gambar berikut yang sesuai untuk melengkapi <img src='gambarsoal/tryout4/52.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 53 ───
  {
    id: 53, kategori: "TIU",
    teks: "Carilah gambar berikut yang sesuai untuk melengkapi <img src='gambarsoal/tryout4/53.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini"
  },

  // ─── Soal 54 ───
  {
    id: 54, kategori: "TIU",
    teks: "Carilah gambar yang berbeda <img src='gambarsoal/tryout4/54.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 55 ───
  {
    id: 55, kategori: "TIU",
    teks: "Carilah gambar yang berbeda <img src='gambarsoal/tryout4/55.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 56 ───
  {
    id: 56, kategori: "TIU",
    teks: "Carilah gambar yang berbeda <img src='gambarsoal/tryout4/56.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 57 ───
  {
    id: 57, kategori: "TIU",
    teks: "Carilah gambar yang sesuai untuk melengkapi <img src='gambarsoal/tryout4/57.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 58 ───
  {
    id: 58, kategori: "TIU",
    teks: "Carilah gambar yang sesuai untuk melengkapi <img src='gambarsoal/tryout4/58.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 59 ───
  {
    id: 59, kategori: "TIU",
    teks: "Carilah gambar yang sesuai untuk melengkapi <img src='gambarsoal/tryout4/59.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 60 ───
  {
    id: 60, kategori: "TIU",
    teks: "Carilah gambar yang sesuai untuk melengkapi <img src='gambarsoal/tryout4/60.jpeg'></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 61 ───
  {
    id: 61, kategori: "TIU",
    teks: "Supervisor suatu penelitian akan membagi delapan peneliti D, E, F, G, H, I, J dan K ke dalam dua tim wilayah barat dan timur. Ketentuannya adalah sebagai berikut.<br>a. Masing-masing tim terdiri dari empat orang peneliti<br>b. Peneliti D dan E tidak berada di satu tim<br>c. Peneliti F sudah pasti satu tim dengan I<br>d. Peneliti K lebih familiar dengan wilayah timur<br>e. Jika satu tim sudah ada peneliti H, maka peneliti G harus berada di tim yang berbeda<br>f. Peneliti E lebih memilih berada di tim timur<br>g. Peneliti F tidak bisa bekerja sama dengan peneliti J<br>Tim wilayah barat terdiri dari peneliti...",
    pilihan: [
      { huruf: "A", teks: "E, J, G, H" },
      { huruf: "B", teks: "E, K, H, I" },
      { huruf: "C", teks: "D, K, G, H" },
      { huruf: "D", teks: "D, F, H, I" },
      { huruf: "E", teks: "D, F, J, K" }
    ],
    kunci: "D",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 62 ───
  {
    id: 62, kategori: "TIU",
    teks: "Supervisor suatu penelitian akan membagi delapan peneliti D, E, F, G, H, I, J dan K ke dalam dua tim wilayah barat dan timur. Ketentuannya adalah sebagai berikut.<br>a. Masing-masing tim terdiri dari empat orang peneliti<br>b. Peneliti D dan E tidak berada di satu tim<br>c. Peneliti F sudah pasti satu tim dengan I<br>d. Peneliti K lebih familiar dengan wilayah timur<br>e. Jika satu tim sudah ada peneliti H, maka peneliti G harus berada di tim yang berbeda<br>f. Peneliti E lebih memilih berada di tim timur<br>g. Peneliti F tidak bisa bekerja sama dengan peneliti J<br>Pernyataan berikut yang salah adalah...",
    pilihan: [
      { huruf: "A", teks: "Peneliti D satu tim dengan peneliti I" },
      { huruf: "B", teks: "Peneliti J dan K berada di tim wilayah timur" },
      { huruf: "C", teks: "Peneliti J satu tim dengan peneliti F" },
      { huruf: "D", teks: "Peneliti H dan I berada di tim wilayah barat" },
      { huruf: "E", teks: "Peneliti K tidak satu tim dengan peneliti D" }
    ],
    kunci: "C",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 63 ───
  {
    id: 63, kategori: "TIU",
    teks: "Rina melakukan penelitian di sebuah sekolah dengan mengukur kadar hemoglobin remaja putri. Sudah diketahui hasil pengukuran kadar hemoglobin pada enam remaja putri di sekolah tersebut. Kadar hemoglobin P di atas R, tetapi lebih rendah dari O. Kadar hemoglobin Q lebih tinggi dari lainnya. Kadar hemoglobin S di atas O dan kadar hemoglobin N di atas S. Berdasarkan pengukuran tersebut, berada di urutan ke berapakah kadar hemoglobin N dari urutan terbawah?",
    pilihan: [
      { huruf: "A", teks: "6" },
      { huruf: "B", teks: "5" },
      { huruf: "C", teks: "4" },
      { huruf: "D", teks: "3" },
      { huruf: "E", teks: "2" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 64 ───
  {
    id: 64, kategori: "TIU",
    teks: "Di sebuah kelas, terdapat empat kelompok belajar, yaitu kelompok P, Q, R, dan S. Setiap kelompok mengikuti ujian dua mata pelajaran, yaitu Matematika dan Bahasa Inggris.<br><img src='gambarsoal/tryout4/64.jpeg'></img><br>Kelompok dengan jumlah nilai rata-rata tertinggi dari kedua mata pelajaran akan menempati peringkat pertama, diikuti oleh kelompok dengan jumlah nilai tertinggi kedua dan seterusnya. Berdasarkan tabel di atas, kelompok yang menempati urutan pertama dan kedua di kelas adalah...",
    pilihan: [
      { huruf: "A", teks: "R dan S" },
      { huruf: "B", teks: "Q dan R" },
      { huruf: "C", teks: "S dan P" },
      { huruf: "D", teks: "R dan Q" },
      { huruf: "E", teks: "R dan P" }
    ],
    kunci: "A",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ─── Soal 65 ───
  {
    id: 65, kategori: "TIU",
    teks: "<img src='gambarsoal/tryout4/65.jpeg'></img><br>Tabel di atas menunjukkan data jadwal Makan Bergizi Gratis pada SMP Negeri 1 Sekampung Udik. Jika makan sebelum pukul 08.00 dianggap pelajar makan lebih awal dan jika makan setelah pukul 10.00 dianggap pelajar makan terlambat, berdasarkan data di atas, pernyataan yang benar adalah...",
    pilihan: [
      { huruf: "A", teks: "Pelajar kelas 8 cenderung makan lebih awal" },
      { huruf: "B", teks: "Pelajar kelas 9 cenderung makan terlambat" },
      { huruf: "C", teks: "Pelajar kelas 8 cenderung makan tepat waktu" },
      { huruf: "D", teks: "Pelajar kelas 8 dan 9 cenderung makan tepat waktu" },
      { huruf: "E", teks: "Pelajar kelas 9 dan 8 cenderung makan lebih awal" }
    ],
    kunci: "B",
    pembahasan: "Tulis pembahasan di sini..."
  },

  // ════════════════════════════════════════════
  // TES KARAKTERISTIK PRIBADI (TKP) — 45 SOAL
  // ════════════════════════════════════════════

  // ─── Soal 66 ───
  {
    id: 66, kategori: "TKP",
    teks: "Fadlan bertugas untuk mengurus media sosial suatu tempat wisata tempat ia bekerja. Salah satu ikonik tempat wisata tersebut adalah mekarnya bunga bangkai. Banyak pengunjung yang sering bertanya melalui media sosial mengenai kapan bunga bangkainya mekar. Tindakan yang tepat yang Fadlan lakukan adalah... (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Memberikan promosi potongan harga tiket untuk para pengunjung yang akan datang di hari biasa", poin: 1 },
      { huruf: "B", teks: "Sering update tentang edukasi bunga bangkai setiap hari dan memastikan adanya management dari pengunjung media sosial", poin: 4 },
      { huruf: "C", teks: "Menjawab semua pertanyaan dengan sopan dan sering update perkembangan mekarnya bunga bangkai sambil mempersuasi para pengunjung untuk datang", poin: 5 },
      { huruf: "D", teks: "Berkoordinasi dengan petugas tempat wisata untuk senantiasa menjaga kebersihan lingkungan tempat wisata terutama di area bunga bangkai itu berada", poin: 2 },
      { huruf: "E", teks: "Mengadakan rapat untuk segera menemukan cara untuk merespons para pengunjung supaya sabar menunggu waktu mekarnya bunga bangkai tersebut", poin: 3 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 4, C = 5, D = 2, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 67 ───
  {
    id: 67, kategori: "TKP",
    teks: "Pertandingan sepak bola sudah akan dilaksanakan beberapa minggu lagi di stadion, tetapi kondisi rumput banyak yang rusak karena ada kegiatan kampanye dan konser beberapa kali. Apa yang dapat Anda lakukan sebagai penanggung jawab kesiapan stadion demi kepuasan penonton dan pemain yang akan bertanding? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Bekerja sama dengan tim internal dan vendor untuk merawat rumput dengan segera, memangkas rumput yang panjangnya tidak sama, dan memperhatikan kesuburan rumput", poin: 5 },
      { huruf: "B", teks: "Segera membeli pupuk sebanyak mungkin untuk segera digunakan menyuburkan kembali rumput yang layu", poin: 3 },
      { huruf: "C", teks: "Meminta pada beberapa tim sukses yang bertanggung jawab dalam kegiatan kampanye untuk turut membantu memperbaiki kerusakan rumput tersebut", poin: 1 },
      { huruf: "D", teks: "Bernegosiasi untuk mendapat sebagian dana dari promotor konser dan penyelenggara kegiatan kampanye untuk memperbaiki rumput yang rusak", poin: 2 },
      { huruf: "E", teks: "Membaca kembali aturan dan kebijakan perawatan rumput stadion untuk meminimalkan penggunaan anggaran yang berlebihan", poin: 4 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 3, C = 1, D = 2, E = 4<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 68 ───
  {
    id: 68, kategori: "TKP",
    teks: "Jika terdapat suatu kasus pilot dan kopilot tertidur dalam pesawat saat adanya penerbangan hingga terpantau menjadi keluar jalur, Apa yang perlu dilakukan oleh maskapai agar tidak terjadi penurunan kepercayaan terhadap pelayanan yang disediakan? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Segera membuat berita mengenai opini atas kejadian tersebut sebagai pembelajaran bagi para pembaca", poin: 2 },
      { huruf: "B", teks: "Menelusuri kebijakan yang meloloskan pegawai yang terbukti melakukan kelalaian", poin: 3 },
      { huruf: "C", teks: "Menganalisis faktor kelelahan pilot dan mengkaji ulang kebijakan terkait jam kerja, cuti, dan sanksi supaya hal tersebut tidak akan terjadi lagi", poin: 5 },
      { huruf: "D", teks: "Memastikan hal tersebut tidak terjadi lagi di maskapai lainnya dan menjadikannya pembelajaran", poin: 4 },
      { huruf: "E", teks: "Menyosialisasikan cara menjaga sikap dan peraturan kepada para penumpang selama dalam perjalanan di dalam pesawat", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 3, C = 5, D = 4, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 69 ───
  {
    id: 69, kategori: "TKP",
    teks: "Anda tergabung dalam Tim Reaksi Cepat (TRC) untuk penanggulangan bencana di suatu daerah. Lalu dikabarkan ada puluhan rumah warga yang rusak akibat angin kencang dan cuaca ekstrem. Bagaimana tim Anda bertindak? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Memetakan peta wilayah kejadian yang terkena bencana untuk dibuatkan laporan kepada atasan", poin: 2 },
      { huruf: "B", teks: "Datang ke lokasi langsung untuk segera bekerja sama dengan tokoh masyarakat dalam menentukan solusi mengatasi situasi tersebut", poin: 3 },
      { huruf: "C", teks: "Melakukan pendataan identitas seluruh keluarga yang terkena bencana tersebut dan menginputnya ke dalam sistem pendataan", poin: 4 },
      { huruf: "D", teks: "Memonitoring dan mengevaluasi hasil evakuasi setelah wilayah yang terkena bencana tersebut teratasi", poin: 1 },
      { huruf: "E", teks: "Identifikasi lokasi bencana, mendata sarana dan prasarana yang rusak, dan membersihkan puing-puing dan barang-barang yang rusak", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 2, B = 3, C = 4, D = 1, E = 5<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 70 ───
  {
    id: 70, kategori: "TKP",
    teks: "Haris bekerja di lembaga pemerintah yang timnya menemukan ada ratusan data yang tidak memenuhi syarat untuk beberapa warga menerima keringanan biaya pendidikan setelah dilakukan pemadanan data menggunakan beberapa parameter. Apa tindakan tepat untuk mengatasi hal ini? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Mengganti sistem penginputan data supaya tidak terjadi lagi penggandaan data", poin: 1 },
      { huruf: "B", teks: "Memeriksa ulang data yang tidak sesuai dan menyosialisasikan warga untuk tertib update administrasi kependudukan", poin: 5 },
      { huruf: "C", teks: "Mengunjungi warga yang tidak memenuhi syarat tersebut satu per satu dengan membentuk suatu tim khusus", poin: 4 },
      { huruf: "D", teks: "Mengusulkan kepada atasan untuk dipertimbangkan lagi program kebijakan keringanan biaya pendidikan tersebut", poin: 2 },
      { huruf: "E", teks: "Menentukan segera wilayah-wilayah yang lebih tepat bagi warganya yang memerlukan keringanan biaya pendidikan", poin: 3 }
    ],
    kunci: "B",
    pembahasan: "A = 1, B = 5, C = 4, D = 2, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 71 ───
  {
    id: 71, kategori: "TKP",
    teks: "Masyarakat akhir-akhir ini resah dengan perilaku geng motor yang membahayakan di daerah tempat Anda bekerja. Jika Anda bekerja di Polres, upaya yang dapat dilakukan untuk menjaga kondusivitas serta keamanan dan ketertiban masyarakat? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Mendatangi seluruh orang tua dari geng motor yang sudah diketahui identitasnya", poin: 3 },
      { huruf: "B", teks: "Memberikan binaan kepada seluruh anggota geng motor yang berhasil di tangkap", poin: 4 },
      { huruf: "C", teks: "Menyosialisasikan kegiatan yang lebih positif untuk komunitas remaja di berbagai daerah", poin: 2 },
      { huruf: "D", teks: "Mendirikan posko pemburu geng motor di beberapa daerah yang rawan kejadian dan melakukan patroli secara rutin", poin: 5 },
      { huruf: "E", teks: "Mendefinisi ulang mengenai bahaya yang ditimbulkan akibat perilaku geng motor untuk dibuatkan kebijakan tertentu", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 3, B = 4, C = 2, D = 5, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 72 ───
  {
    id: 72, kategori: "TKP",
    teks: "Ribuan tenaga medis melakukan aksi demo dan mogok kerja setelah adanya pemberitahuan dari pemerintah akan menambah jumlah tenaga medis untuk mengatasi kekurangan. Sementara menurut komunitas tenaga medis, kebijakan tersebut hanya akan menurunkan kualitas layanan yang diberikan. Upaya apa yang sebaiknya dilakukan pemerintah? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Mengajak komunitas tenaga medis tersebut untuk mengadakan dialog terbuka", poin: 5 },
      { huruf: "B", teks: "Membuat kebijakan absolut yang diikuti oleh seluruh tenaga medis", poin: 1 },
      { huruf: "C", teks: "Bekerja sama dengan media massa untuk memberitakan keuntungan dari penambahan jumlah tenaga medis", poin: 2 },
      { huruf: "D", teks: "Meminta aparat untuk tidak melakukan kekerasan apa pun terhadap tenaga medis yang berdemo", poin: 4 },
      { huruf: "E", teks: "Memantau perkembangan aksi demo yang dilakukan oleh tenaga medis untuk memastikan tidak ada kerusakan yang terjadi", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 2, D = 4, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 73 ───
  {
    id: 73, kategori: "TKP",
    teks: "Profesionalisme dalam bekerja merupakan suatu kewajiban yang harus ditaati apapun dan dimanapun pekerjaan. Sania bekerja sebagai ahli gizi atlet nasional untuk cabang olahraga tertentu. Ia harus bekerja profesional untuk meningkatkan performa para atlet tersebut melalui asupan gizi mereka. Bagaimana Sania merealisasikannya? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Menimbang berat badan mereka dan mengawasi asupan makan mereka melalui grup chat", poin: 4 },
      { huruf: "B", teks: "Melakukan pengkajian gizi, menentukan jenis diet masing-masing atlet, membuat menu makanan, dan monitoring evaluasi yang sesuai dengan jenis olahraga", poin: 5 },
      { huruf: "C", teks: "Memberikan mereka buku panduan diet khusus atlet untuk asupan mereka selama di tempat pelatihan, rumah, maupun luar rumah", poin: 1 },
      { huruf: "D", teks: "Memberikan konsultasi gizi tiap bulan dalam jangka waktu pelatihan hingga jadwal kompetisi dimulai", poin: 2 },
      { huruf: "E", teks: "Berkoordinasi dengan pelatih mereka untuk berdiskusi menentukan jenis diet masing-masing atlet yang disesuaikan dengan kebutuhan personal", poin: 3 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 1, D = 2, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 74 ───
  {
    id: 74, kategori: "TKP",
    teks: "Dita terpilih untuk mewakili Indonesia dalam kompetisi olahraga voli dunia. Dita sering diragukan dari berbagai pihak karena berasal dari negara tidak terlalu terkenal dalam olahraga voli. Apa tindakan yang tepat untuk Dita lakukan? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Menjalani wawancara dengan baik dan tetap ramah terhadap setiap pertanyaan yang diberikan", poin: 3 },
      { huruf: "B", teks: "Berlatih dengan tekun dan menjaga hubungan yang baik dengan tim dari lawan mana pun", poin: 4 },
      { huruf: "C", teks: "Berlatih dengan disiplin, menjaga kekompakan tim, dan tampil dengan performa terbaik", poin: 5 },
      { huruf: "D", teks: "Mendatangi seluruh atlet voli yang menjadi lawan kompetisi untuk lebih mengenal dan tetap menjaga persahabatan sesuai kompetisi", poin: 1 },
      { huruf: "E", teks: "Menjaga seluruh hadiah pemberian dari fans dan berusaha untuk tetap kompak dengan tim dalam kondisi apa pun", poin: 2 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 4, C = 5, D = 1, E = 2<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 75 ───
  {
    id: 75, kategori: "TKP",
    teks: "Randi merupakan seorang aktor terkenal dan akan menjalani proyek film yang diambil dari kisah nyata seorang tokoh ternama yang masih produktif. Supaya Randi dapat meniru karakter tokoh tersebut dan memerankannya dengan baik di film, maka Randi... (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Sering bertemu dengan tokoh tersebut, melihat dokumentasinya dari berbagai sumber, dan sering berlatih memerankannya", poin: 5 },
      { huruf: "B", teks: "Sering berlatih memerankan tokoh tersebut dan mencatat seluruh detail yang perlu dikoreksi dan ditingkatkan", poin: 1 },
      { huruf: "C", teks: "Membaca seluruh buku biografi tentang tokoh ternama tersebut dan mendatangi semua lembaga pendidikan yang pernah beliau mengenyam pendidikan di dalamnya", poin: 2 },
      { huruf: "D", teks: "Melakukan wawancara mendalam dengan tokoh ternama tersebut beberapa kali sebelum proses produksi dimulai", poin: 4 },
      { huruf: "E", teks: "Bertanya pada seluruh kolega yang mengenal tokoh ternama tersebut dan membuat catatan kecil yang mudah di ingat", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 2, D = 4, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 76 ───
  {
    id: 76, kategori: "TKP",
    teks: "Anda adalah seorang kepala sekolah yang harus menyelesaikan laporan evaluasi akhir tahun untuk dinas pendidikan esok hari. Di saat yang sama, walikota mengundang Anda menghadiri rapat penting tentang peningkatan pendidikan. Anda merasa dilema karena kedua tugas ini sama-sama penting. Apa tindakan Anda? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Menghadiri rapat tanpa menyampaikan kondisi laporan, berharap bisa mengecek hasil kerja staf setelahnya", poin: 3 },
      { huruf: "B", teks: "Memastikan laporan hampir selesai lalu menyusul ke rapat jika masih berlangsung agar keduanya terpenuhi", poin: 4 },
      { huruf: "C", teks: "Mendelegasikan laporan untuk dikerjakan oleh staf yang kompeten sehingga Anda dapat menghadiri rapat", poin: 5 },
      { huruf: "D", teks: "Menyampaikan kepada walikota pentingnya tenggat waktu laporan dan menolak untuk mengikuti rapat tersebut", poin: 2 },
      { huruf: "E", teks: "Menginstruksikan staf menyelesaikan laporan sepenuhnya dan meminta walikota mencari pendamping lain untuk rapat", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 4, C = 5, D = 2, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 77 ───
  {
    id: 77, kategori: "TKP",
    teks: "Sebagai kepala bidang kesehatan masyarakat di dinas kesehatan, Anda bertanggung jawab untuk menjalankan program peningkatan kesadaran kesehatan bagi masyarakat di wilayah terpencil. Anda perlu memastikan program ini dapat berjalan efektif dan menjangkau seluruh lapisan masyarakat. Apa langkah yang sebaiknya Anda ambil? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengadakan layanan kesehatan keliling untuk memberikan akses langsung kepada masyarakat di wilayah terpencil", poin: 5 },
      { huruf: "B", teks: "Berkolaborasi dengan puskesmas setempat untuk menyediakan fasilitas bagi pelaksanaan program kesehatan", poin: 4 },
      { huruf: "C", teks: "Melakukan kampanye pentingnya gaya hidup sehat melalui media sosial dan pemasangan poster di tempat umum", poin: 2 },
      { huruf: "D", teks: "Mengundang relawan medis dari komunitas lokal untuk membantu menjalankan program ini", poin: 3 },
      { huruf: "E", teks: "Membatasi fokus program pada wilayah yang lebih mudah dijangkau untuk hasil yang lebih cepat", poin: 1 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 4, C = 2, D = 3, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 78 ───
  {
    id: 78, kategori: "TKP",
    teks: "Anda baru saja diterima sebagai ASN dan ditempatkan di lokasi yang jauh dari keluarga. Selain harus beradaptasi dengan lingkungan baru, Anda juga memerlukan biaya pindahan yang cukup besar. Sebagai seorang yang profesional, apa yang sebaiknya Anda lakukan? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Meminta penundaan penempatan hingga Anda siap secara finansial dan keluarga sudah siap untuk pindah bersama", poin: 2 },
      { huruf: "B", teks: "Memanfaatkan pinjaman online untuk menutupi biaya pindahan, sambil mencari solusi keuangan lain jika diperlukan", poin: 1 },
      { huruf: "C", teks: "Mengajukan permohonan kepada atasan untuk dipindahkan ke lokasi yang lebih dekat dengan keluarga", poin: 3 },
      { huruf: "D", teks: "Meminjam dana dari rekan atau keluarga untuk biaya pindahan dan melunasinya secara bertahap setelah bekerja", poin: 4 },
      { huruf: "E", teks: "Menerima penempatan tersebut dan menyusun rencana keuangan yang matang untuk menyesuaikan dengan kondisi baru", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 2, B = 1, C = 3, D = 4, E = 5<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 79 ───
  {
    id: 79, kategori: "TKP",
    teks: "Anda menjabat sebagai wakil sekretaris. Suatu hari, kepala dinas meminta pemaparan pertanggungjawaban laporan administrasi, namun sekretaris utama tidak dapat hadir karena sakit. Anda hanya memegang salinan mentah dokumen tersebut. Bagaimana sikap Anda? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Saya akan meminta waktu tambahan untuk mempelajari laporan dengan lebih mendalam sebelum mempresentasikannya", poin: 5 },
      { huruf: "B", teks: "Saya tidak akan mengambil tindakan karena tugas tersebut bukan bagian dari tanggung jawab langsung saya", poin: 1 },
      { huruf: "C", teks: "Saya akan menjelaskan kondisi kepada kepala dinas dan meminta agar presentasi ditunda sampai sekretaris utama bisa hadir", poin: 3 },
      { huruf: "D", teks: "Saya akan meminta maaf kepada kepala dinas dan meminta agar dokumen ini disampaikan langsung oleh sekretaris utama ketika ia sembuh", poin: 2 },
      { huruf: "E", teks: "Saya akan berusaha mempresentasikan laporan tersebut dengan kemampuan dan data yang ada", poin: 4 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 3, D = 2, E = 4<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 80 ───
  {
    id: 80, kategori: "TKP",
    teks: "Anda adalah pegawai di sebuah kementerian yang sedang mengerjakan proyek penting dengan tenggat waktu ketat. Di saat yang sama, Anda memiliki urusan keluarga yang sama mendesaknya. Keduanya penting dan harus dikelola dengan baik. Apa yang Anda lakukan? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Saya akan memprioritaskan proyek dan mencari cara untuk menunda atau menyelesaikan urusan pribadi di waktu lain", poin: 4 },
      { huruf: "B", teks: "Saya akan membagi waktu dengan mengatur jadwal agar kedua urusan tersebut tertangani dengan efektif", poin: 5 },
      { huruf: "C", teks: "Saya akan fokus pada proyek dan meminta bantuan anggota keluarga lain untuk menangani urusan keluarga terlebih dahulu", poin: 3 },
      { huruf: "D", teks: "Saya akan meminta izin kepada atasan untuk menunda proyek dan menyelesaikan urusan pribadi terlebih dahulu", poin: 2 },
      { huruf: "E", teks: "Saya akan menyampaikan bahwa saya tidak bisa menangani keduanya dan menyerahkan proyek kepada rekan kerja lain", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 4, B = 5, C = 3, D = 2, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 81 ───
  {
    id: 81, kategori: "TKP",
    teks: "Kegiatan industri terus meningkat seiring perkembangan waktu dan teknologi yang tidak bisa dipungkiri juga dapat berdampak negatif ke lingkungan. Kementerian Lingkungan Hidup dan Kehutanan memiliki beberapa upaya untuk menjaga kualitas atmosfer, ekologi, dan ekonomi masyarakat setempat yang salah satunya adalah... (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Membuat kebijakan peningkatan persentase pajak pertambahan nilai bagi konsumen akhir", poin: 1 },
      { huruf: "B", teks: "Memastikan setiap warga menginput data pribadi dengan benar melalui sistem yang sudah dibuatkan dalam kepentingan administrasi tertentu", poin: 2 },
      { huruf: "C", teks: "Membuat papan pengumuman untuk masyarakat setempat untuk tidak membuang sampah di sembarang tempat", poin: 4 },
      { huruf: "D", teks: "Mengajak kolaborasi instansi pemerintah dan swasta untuk rehabilitasi mangrove", poin: 5 },
      { huruf: "E", teks: "Membuat area bermain di taman sebagai wadah aktivitas bagi masyarakat yang rumahnya tidak luas untuk berkegiatan terutama bagi anak-anak", poin: 3 }
    ],
    kunci: "D",
    pembahasan: "A = 1, B = 2, C = 4, D = 5, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 82 ───
  {
    id: 82, kategori: "TKP",
    teks: "Angka pengangguran masih tinggi di tempat wilayah kerja Anda. Anda sebagai pejabat yang menargetkan penurunan pengangguran dalam persentase tertentu memerlukan strategi yang tepat. Apa yang dapat Anda dan tim lakukan? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Memberikan uang saku dengan nominal tertentu selama setahun pada warga yang belum mendapatkan pekerjaan", poin: 2 },
      { huruf: "B", teks: "Memberikan media latihan gratis dan dilakukan secara digital dengan akses internet yang memadai", poin: 3 },
      { huruf: "C", teks: "Meningkatkan jejaring kerja sama dengan berbagai perseroan terbatas mengadakan magang dalam periode tertentu, dan pelatihan siap kerja", poin: 5 },
      { huruf: "D", teks: "Mengadakan program perpustakaan keliling untuk meningkatkan minat literasi bagi warga yang belum memiliki pekerjaan terutama yang masih usia muda", poin: 1 },
      { huruf: "E", teks: "Mengumumkan lowongan kerja secara berkala di suatu media sosial khusus yang bisa dilihat publik", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 3, C = 5, D = 1, E = 4<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 83 ───
  {
    id: 83, kategori: "TKP",
    teks: "Albi bertanggung jawab terhadap perkembangan penelitian di suatu universitas. Apa upaya Albi untuk meningkatkan kualitas pendidikan dan penelitian di universitas tempatnya bekerja? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Mendirikan yayasan khusus untuk menampung tulisan artikel ilmiah dan menerbitkannya secara resmi dengan review yang dilakukan secara mendetail", poin: 3 },
      { huruf: "B", teks: "Kerja sama dengan laboratorium milik pemerintah atau swasta dan mendorong para mahasiswa untuk mengadakan kegiatan penelitian skala kecil secara berkelompok dalam mata kuliah tertentu", poin: 5 },
      { huruf: "C", teks: "Menyosialisasikan seluruh dosen untuk selalu aktif dalam proyek penelitian dengan target terbit dalam periode waktu tertentu", poin: 1 },
      { huruf: "D", teks: "Bekerja sama dengan perseroan terbatas yang mau untuk terlibat dalam kegiatan penelitian dan manfaatnya juga dapat dirasakan oleh perseroan terbatas tersebut", poin: 4 },
      { huruf: "E", teks: "Mengadakan sayembara untuk menuliskan artikel ilmiah dan memberikan hadiah sejumlah uang bagi yang artikel ilmiahnya lolos untuk diterbitkan", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 1, D = 4, E = 2<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 84 ───
  {
    id: 84, kategori: "TKP",
    teks: "Arini khawatir dengan peningkatan jumlah sampah di daerahnya yang sampai masuk berita nasional dan internasional. Ia mencari cara untuk membantu mengurangi jumlah sampah tersebut yang tentunya tidak dapat ia tangani jika hanya sendirian. Apa yang harus ia lakukan? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Menuliskan surat terbuka kepada presiden untuk segera ditindak masalah penanganan sampah di derahnya", poin: 2 },
      { huruf: "B", teks: "Mendatangi daerah yang diliput oleh media dan memotretnya untuk diposting di media sosial pribadi", poin: 1 },
      { huruf: "C", teks: "Meminta ketua RT dan ketua RW untuk menghimbau warga mengolah sampah dengan benar dengan diberikan petunjuk tertulis di gapura wilayahnya", poin: 3 },
      { huruf: "D", teks: "Membagikan selebaran tata cara olah sampah yang baik dan bernilai untuk setiap warga dan dipantau perkembangannya oleh ketua RT", poin: 4 },
      { huruf: "E", teks: "Mengadakan workshop pengolahan sampah menjadi barang yang bernilai menggunakan suatu mesin dan mengajak warga di beberapa daerah untuk berpartisipasi", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 2, B = 1, C = 3, D = 4, E = 5<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 85 ───
  {
    id: 85, kategori: "TKP",
    teks: "Kementerian Luar Negeri memiliki salah satu prioritas yaitu diplomasi ekonomi yang berarti mempromosikan kepentingan ekonomi dan mendorong adanya kerja sama dengan berbagai negara. Tindakan yang dapat dilakukan adalah... (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Memperkenalkan regulasi etika AI di tingkat nasional hingga ASEAN", poin: 2 },
      { huruf: "B", teks: "Membuat website yang bisa dikunjungi publik untuk transparan mengenai rencana, kebijakan, dan program yang dijalankan oleh Kemlu", poin: 4 },
      { huruf: "C", teks: "Mengevakuasi warga Indonesia yang terkena dampak peperangan di negara lain", poin: 1 },
      { huruf: "D", teks: "Memfasilitasi kerja sama perseroan terbatas rintisan Indonesia ke pasar Eropa dengan adanya acara Start Up Talks yang mempromosikan ekspor produk-produk lokal", poin: 5 },
      { huruf: "E", teks: "Mendokumentasikan seluruh kegiatan yang berkaitan dengan kerja sama dengan berbagai pihak dari berbagai negara", poin: 3 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 4, C = 1, D = 5, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 86 ───
  {
    id: 86, kategori: "TKP",
    teks: "Penyalahgunaan narkoba masih menjadi permasalahan yang harus diatasi di setiap daerah. Bagaimana cara untuk membangun jejaring kerja dengan stakeholder di lingkungan pemerintah? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Memetakan daerah yang menjadi pengguna narkoba terbanyak lalu didatangi satu per satu daerah tersebut", poin: 1 },
      { huruf: "B", teks: "Mencari tahu faktor penyebab banyak pengguna narkoba yang pemula hingga yang sudah kecanduan untuk dicari akar masalahnya", poin: 2 },
      { huruf: "C", teks: "Memberikan pelatihan gratis bagi mereka yang sudah keluar dari penjara untuk siap bekerja dan produktif lagi di lingkungannya masing-masing", poin: 4 },
      { huruf: "D", teks: "Membuat penduan teknis secara terpadu, didokumentasikan, dan disebarluaskan ke berbagai lembaga rehabilitasi pengguna narkoba", poin: 3 },
      { huruf: "E", teks: "Mengadakan pelatihan dan pembinaan sumber daya manusia, memberikan panduan teknis ke pemangku kepentingan kebijakan, dan memetakan permasalahan narkoba di daerah tersebut", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 1, B = 2, C = 4, D = 3, E = 5<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 87 ───
  {
    id: 87, kategori: "TKP",
    teks: "Seorang pemimpin perlu menghadapi tantangan yang dinamis dan tentunya dibutuhkan seorang pemimpin yang cekatan dalam menghadapi berbagai situasi. Untuk meningkatkan kompetensi tersebut, maka dapat dilakukan... (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Mengikuti pelatihan kepemimpinan untuk meningkatkan kapasitas berkolaborasi dalam menangani isu kebijakan yang stategis dan mampu memenuhi visi dan misi organisasi", poin: 5 },
      { huruf: "B", teks: "Belajar untuk terus mengelola emosi dan tidak reaktif terhadap situasi apapun dan pastikan untuk memiliki kemampuan bertanya dibandingkan memberikan perintah", poin: 1 },
      { huruf: "C", teks: "Terus berlatih untuk melibatkan orang-orang yang dipimpin untuk terlibat dalam pengambilan keputusan dengan memberikan pertanyaan daripada pernyataan", poin: 2 },
      { huruf: "D", teks: "Memiliki visi dan misi yang jelas untuk memimpin sehingga orang-orang yang dipimpin juga makin yakin dengan arah dan tanggung jawab yang diberikan", poin: 4 },
      { huruf: "E", teks: "Sering mengajak diskusi dan terbuka dengan feedback yang diberikan dari setiap orang yang ia pimpin", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 2, D = 4, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 88 ───
  {
    id: 88, kategori: "TKP",
    teks: "Permasalahan pemerataan masih sangat kompleks dan bisa terjadi di berbagai daerah antara lain permasalahan sumber daya alam, ketersediaan air bersih, dan layanan dasar. Bagaimana terciptanya kolaborasi antara pemangku kepentingan dan masyarakat sipil untuk mengurangi permasalahan pemerataan di daerahnya? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Memanggil petugas yang mengerti mengenai ketersediaan air bersih untuk menjaga kualitas di daerah tertentu yang anggarannya memadai", poin: 1 },
      { huruf: "B", teks: "Membuat kerangka program kerja tertentu dengan menentukan skala prioritas program mana yang dapat didahulukan untuk dikerjakan", poin: 4 },
      { huruf: "C", teks: "Mengadakan dialog terbuka antara pegawai pemerintah, masyarakat sipil, dan pemangku kepentingan lainnya secara berkala", poin: 5 },
      { huruf: "D", teks: "Membuat himbauan untuk masyarakat untuk terus menjaga sisi humanis di manapun mereka berada", poin: 3 },
      { huruf: "E", teks: "Membuat media sosial yang memposting mengenai cara mewujudkan pemerataan dari berbagai aspek untuk mengedukasi masyarakat yang mengikuti media sosial tersebut ", poin: 2 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 4, C = 5, D = 3, E = 2<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 89 ───
  {
    id: 89, kategori: "TKP",
    teks: "Disrupsi teknologi menjadikan adanya perubahan praktik komunikasi publik pemerintah yang mana publik dapat berkomunikasi dua arah dengan digital dan pemerintah dapat mendengarkan publik secara langsung. Hal tersebut pastinya membawa tantangan bagi pemerintah sehingga perlu... (TIK)",
    pilihan: [
      { huruf: "A", teks: "Memastikan seluruh lapisan masyarakat dapat menikmati kelancaran penggunaan internet", poin: 1 },
      { huruf: "B", teks: "Memetakan wilayah padat penduduk yang perlu diberikan akses prioritas penggunaan internet", poin: 2 },
      { huruf: "C", teks: "Mengadakan lokakarya untuk menentukan kerangka kerja dan strategi komunikasi dalam era disrupsi teknologi", poin: 5 },
      { huruf: "D", teks: "Meningkatkan literasi digital yang dapat dimulai dari program yang dijalankan di berbagai sekolah", poin: 3 },
      { huruf: "E", teks: "Menyosialisasikan setiap lembaga untuk membuat peraturan pegawainya yang wajib melek teknologi dalam menjalani pekerjannya", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 1, B = 2, C = 5, D = 3, E = 4<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 90 ───
  {
    id: 90, kategori: "TKP",
    teks: "Tren phishing meningkat setiap tahunnya dengan menargetkan pengambilan informasi data pribadi atau uang korban melalui penipuan digital. Lebih rawan lagi terjadi setiap kali menjelang liburan dengan modus travelling. Bagaimana Anda mencegah terjadinya phishing pada Anda? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Membaca seluruh artikel mengenai phishing untuk mencegah pengambilan data yang tidak diinginkan", poin: 3 },
      { huruf: "B", teks: "Menyebarkan informasi dan imbauan untuk waspada terhadap phishing di grup chat", poin: 2 },
      { huruf: "C", teks: "Tetap skeptis dengan segala bentuk tautan dan verifikasi dahulu sebelum mengklik suatu tautan yang beredar atau muncul", poin: 5 },
      { huruf: "D", teks: "Berdiskusi dengan tim IT mengenai definisi dan contoh phishing yang biasa terjadi di dunia maya", poin: 4 },
      { huruf: "E", teks: "Menutup beberapa akun pribadi yang berpotensi terkena phishing", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 2, C = 5, D = 4, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 91 ───
  {
    id: 91, kategori: "TKP",
    teks: "Anda merupakan seorang peneliti astronomi di suatu lembaga ternama. Anda menginginkan masyarakat dapat melihat indahnya planet-planet yang berada di luar tata surya. Apa yang bisa Anda lakukan? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Mengusulkan memasang teleskop dengan ukuran tertentu dan bekerja sama dengan mitra luar negeri untuk menyediakan alat tersebut", poin: 5 },
      { huruf: "B", teks: "Membuat rencana kerja untuk memasang teleskop yang mendukung terwujudnya keinginan tersebut", poin: 4 },
      { huruf: "C", teks: "Mengkaji beberapa tempat yang akan berpotensi untuk dijadikan tempat wisata untuk memperdalam ilmu mengenai astronomi", poin: 3 },
      { huruf: "D", teks: "Mengadakan webinar secara rutin dengan target sasaran peserta dengan pengelompokkan dan tema tertentu", poin: 1 },
      { huruf: "E", teks: "Memberikan akses gratis masuk wilayah tempat wisata yang memperkenalkan astronomi bagi pengunjung kolektif dari sekolah dasar", poin: 2 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 4, C = 3, D = 1, E = 2<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 92 ───
  {
    id: 92, kategori: "TKP",
    teks: "Masyarakat yang memiliki agama tertentu ada kewajiban menunaikan pengeluaran sebagian hartanya dalam periode waktu tertentu. Akan tetapi, tidak semua masyarakat mengerti cara menghitungnya. Jika Anda mengerti penggunaan teknologi, apa yang bisa Anda lakukan? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Membuat konten mengenai tutorial perhitungan yang sesuai dengan anjuran agama tersebut", poin: 2 },
      { huruf: "B", teks: "Membuat rumus perhitungan di excel dan disebarluaskan melalui grup chat dan di media sosial", poin: 1 },
      { huruf: "C", teks: "Bekerja sama dengan teman yang ahli IT untuk mengajari cara membuat sistem perhitungan yang tepat sesuai dengan anjuran agama tersebut", poin: 3 },
      { huruf: "D", teks: "Mendata berapa banyak masyarakat yang membutuhkan cara perhitungan tersebut sebagai dasar untuk eksekusi ide", poin: 4 },
      { huruf: "E", teks: "Menyediakan website secara gratis yang dapat digunakan masyarakat untuk menghitung sebagian hartanya yang wajib ditunaikan sekaligus sebagai media untuk menyalurkannya", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 2, B = 1, C = 3, D = 4, E = 5<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 93 ───
  {
    id: 93, kategori: "TKP",
    teks: "Sekelompok mahasiswa diberikan tugas untuk menghitung dan menyelesaikan sebuah studi kasus. Mereka menyadari bahwa menghitung manual akan membutuhkan waktu yang cukup lama untuk menyelesaikannya. Hanya ada satu orang mahasiswa di kelompok tersebut yang menguasai perhitungan excel. Apa langkah yang tepat untuk menyelesaikan tugas kelompok tersebut tepat waktu? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Mengcopy rumus excel yang sudah dibuatkan oleh mahasiswa yang ahli excel tersebut ke seluruh anggota kelompoknya", poin: 2 },
      { huruf: "B", teks: "Semua anggota kelompok mempelajari dahulu jenis tugas, membagi tugas pembuatan presentasi, dan mahasiswa yang ahli excel mengajari teman sekelompoknya", poin: 5 },
      { huruf: "C", teks: "Mengundi pembagian tugas masing-masing anggota kelompok dan menentukan waktu pengumpulan tugas", poin: 1 },
      { huruf: "D", teks: "Berdiskusi dahulu mengenai pembagian kelompok dan memanfaatkan teknologi untuk mengumpulkan tugas kelompok di suatu platform yang disepakati", poin: 4 },
      { huruf: "E", teks: "Membuat pembagian tugas pembuatan presentasi dan mahasiswa yang ahli excel berperan untuk presentasi di kelas menjelaskan hasil tugas kelompoknya", poin: 3 }
    ],
    kunci: "B",
    pembahasan: "A = 2, B = 5, C = 1, D = 4, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 94 ───
  {
    id: 94, kategori: "TKP",
    teks: "Perusahaan tempat Farhan bekerja sudah terbiasa menggunakan suatu teknologi tertentu untuk mendukung aktivitas kerja pegawainya. Lalu suatu hari ia menemukan bug dan berpotensi menghilangkan sebagian data perusahaan akibat bug tersebut. Apa yang akan ia lakukan? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Memastikan kembali potensi tersebut keesokan harinya sebelum diinformasikan ke atasan", poin: 2 },
      { huruf: "B", teks: "Mencari pembahasan mengenai bug tersebut dengan berselancar di internet dan berusaha mendapatkan jawabannya", poin: 3 },
      { huruf: "C", teks: "Mencoba memperbaiki bug tersebut dengan mengandalkan tutorial yang didapatkan dari media sosial", poin: 1 },
      { huruf: "D", teks: "Memanggil tim IT segera untuk memeriksa bug tersebut di komputer/laptop kerjanya", poin: 4 },
      { huruf: "E", teks: "Segera melaporkannya kepada atasan dan mengusulkan menggunakan teknologi yang lain yang lebih aman", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 2, B = 3, C = 1, D = 4, E = 5<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 95 ───
  {
    id: 95, kategori: "TKP",
    teks: "Pimpinan meminta semua pegawainya untuk menggunakan teknologi terbaru yang sama sekali belum pernah digunakan di lembaganya. Semua pegawai belum mengerti cara menggunakannya. Bagaimana supaya tujuan yang pimpinan maksud tersebut menjadi tercapai? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Membentuk suatu tim khusus untuk membuat modul yang menjadi panduan sistem teknologi tersebut lengkap dengan deskripsi dan gambarannya supaya mudah dipahami oleh seluruh pegawai untuk dipelajari mandiri", poin: 2 },
      { huruf: "B", teks: "Meminta tim IT untuk membuat sistem teknologi tersebut untuk lebih dan user friendly walaupun harus membutuhkan waktu yang tidak sebentar", poin: 1 },
      { huruf: "C", teks: "Mengadakan pendidikan dan pelatihan semua pegawainya selama beberapa hari yang terbagi dalam beberapa kelompok kecil untuk mempraktikkannya dengan dipandu mentor", poin: 5 },
      { huruf: "D", teks: "Mendelegasikan tugas untuk mengajari seluruh pegawai kepada masing-masing atasan divisi dan diberikan waktu satu minggu untuk menguasai penggunaannya", poin: 3 },
      { huruf: "E", teks: "Mencari mentor berpengalaman dalam menggunakan sistem teknologi tersebut dan bernegosiasi dengannya hingga mendapatkan kesepakatan harga jasa yang paling sesuai", poin: 4 }
    ],
    kunci: "C",
    pembahasan: "A = 2, B = 1, C = 5, D = 3, E = 4<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 96 ───
  {
    id: 96, kategori: "TKP",
    teks: "Anda dan keluarga terbiasa untuk menggunakan berbagai platform chatting untuk kepentingan tertentu. Lalu ada salah satu anggota keluarga Anda yang mendapatkan tautan yang tidak dikenal dari suatu aplikasi chatting dan menunjukkan kepada Anda. Bagaimana tanggapan Anda? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Mencari tahu terlebih dahulu dengan browsing dan tetap skeptis hingga mendapatkan solusi terbaik", poin: 5 },
      { huruf: "B", teks: "Memberikan ia pilihan untuk mengklik atau tidak menghiraukannya", poin: 1 },
      { huruf: "C", teks: "Bertanya dahulu kepada teman Anda yang mungkin lebih mengerti mengenai tautan yang ditunjukkan tersebut", poin: 4 },
      { huruf: "D", teks: "Mencatat tautan tersebut dalam suatu catatan tertulis untuk dijadikan dokumentasi atas tautan yang mencurigakan", poin: 2 },
      { huruf: "E", teks: "Menyarankan untuk mengabaikan tautan apa pun yang dikirimkan oleh siapapun", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 1, C = 4, D = 2, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 97 ───
  {
    id: 97, kategori: "TKP",
    teks: "Anda secara tidak sengaja mendengar percakapan sekelompok organisasi yang berencana untuk melakukan kekerasan fisik di beberapa sekolah yang menjadi targetnya. Apa yang harus Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Menegur mereka saat itu juga dengan memastikan kondisi Anda sudah aman", poin: 1 },
      { huruf: "B", teks: "Merekam percakapan tersebut dan segera menghubungi polisi terdekat", poin: 5 },
      { huruf: "C", teks: "Mencari tahu kebenaran lokasi sekolah-sekolah yang dibahas kelompok organisasi tersebut", poin: 4 },
      { huruf: "D", teks: "Mencari tahu cara sendiri untuk mencegah tindakan mereka", poin: 2 },
      { huruf: "E", teks: "Meminta bantuan warga setempat untuk mengatasinya", poin: 3 }
    ],
    kunci: "B",
    pembahasan: "A = 1, B = 5, C = 4, D = 2, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 98 ───
  {
    id: 98, kategori: "TKP",
    teks: "Seorang pemuka agama tidak diterima di wilayah kota Anda karena menunjukkan adanya indikasi radikal, lalu ada suatu penyelenggara acara akan mengundangnya. Hal tersebut membuat warga setempat menolak dan sepakat bahwa pemuka agama tersebut tidak dihadirkan dalam acara. Akan tetapi, ternyata saat acara berlangsung, pemuka agama tersebut datang dan membuat salah satu warga yang protes mendapatkan kekerasan fisik. Apa yang seharusnya Anda dan warga setempat lakukan terhadap kejadian tersebut? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mencari tahu akar permasalahan dan kronologi atas kejadian tersebut dari kedua belah pihak", poin: 2 },
      { huruf: "B", teks: "Mengadakan temu darurat dengan para kader untuk menindaklanjuti perlakukan terhadap pihak penyelenggara acara", poin: 3 },
      { huruf: "C", teks: "Mengumpulkan dana bantuan dari warga setempat untuk membantu meringankan dampak yang terjadi pada warga yang mendapat kekerasan fisik", poin: 1 },
      { huruf: "D", teks: "Mengawal warga yang mendapat kekerasan fisik tersebut untuk dilokalisir ke ranah penegakan hukum", poin: 5 },
      { huruf: "E", teks: "Meminta mediasi kepada ketua RT antara warga yang menjadi korban dengan pihak penyelenggara", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 3, C = 1, D = 5, E = 4<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 99 ───
  {
    id: 99, kategori: "TKP",
    teks: "Anda termasuk orang yang aktif ikut kegiatan seminar dan mendengarkan orasi dari beberapa forum. Lalu suatu ketika Anda hadir dalam sebuah forum yang pembicaranya dengan lantang menjelek-jelekkan tokoh politik dan mencari validasi dukungan terhadap orasinya. Apa yang akan Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Segera pergi dari forum tersebut karena Anda menyadari adanya indikasi upaya perpecahan antarbangsa", poin: 5 },
      { huruf: "B", teks: "Maju dan berargumentasi dengan pilihan berani untuk tidak mendapatkan dukungan sama sekali dari hadirin yang hadir", poin: 2 },
      { huruf: "C", teks: "Mencatat seluruh ucapannya dan mencari tahu lebih dalam maksud dari orasinya tersebut", poin: 3 },
      { huruf: "D", teks: "Menelusuri berbagai informasi yang berkaitan dengan orang tersebut untuk mengetahui latar belakang orasi yang ia sampaikan dalam forum", poin: 4 },
      { huruf: "E", teks: "Menanyakan kepada panitia forum tersebut mengenai rangkaian acara pada hari itu", poin: 1 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 2, C = 3, D = 4, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 100 ───
  {
    id: 100, kategori: "TKP",
    teks: "Anda bekerja di suatu lembaga yang menangani radikalisme di Indonesia. Saat ini dunia maya semakin mudah menyebarkan konten yang mengajak perpecahan dan upaya untuk menyimpang dari ideologi negara. Kegiatan apa yang bisa mencegah hal tersebut? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Ikut dalam seluruh pendidikan kewarganegaraan dan menghafalkan seluruh narasi yang berkaitan dengan kesatuan Indonesia", poin: 3 },
      { huruf: "B", teks: "Membuat konten positif tentang persatuan Indonesia dengan melibatkan kolabirasi antar content creator", poin: 4 },
      { huruf: "C", teks: "Melakukan kontra narasi dan kontra propaganda dan menyebarluaskan konten digital di media sosial dengan penguatan Pancasila dan Bhinneka Tunggal Ika", poin: 5 },
      { huruf: "D", teks: "Menulis berbagai artikel ilmiah sesuai dengan profesi masing-masing untuk menguatkan nilai Pancasila dan keutuhan NKRI", poin: 2 },
      { huruf: "E", teks: "Melakukan monitoring dan evaluasi penerapan nilai Pancasila dan Bhineka Tunggal Ika di seluruh lembaga pendidikan", poin: 1 }
    ],
    kunci: "C",
    pembahasan: "A = 3, B = 4, C = 5, D = 2, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 101 ───
  {
    id: 101, kategori: "TKP",
    teks: "Anda merupakan tokoh masyarakat di suatu daerah yang baru saja beberapa warga yang merupakan narapidana kasus radikalisme dipulangkan ke rumah. Sebagai tokoh masyarakat, hal apa yang harus Anda lakukan terhadap mitra deradikalisasi tersebut? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Memastikan dahulu kepada pihak aparat bahwa mereka sudah tidak memiliki paham radikal sebelum mereka kembali ke rumah", poin: 2 },
      { huruf: "B", teks: "Memberikan mereka pilihan untuk membuka usaha sendiri atau bekerja sebagai pegawai di tempat yang mereka tuju", poin: 3 },
      { huruf: "C", teks: "Memberikan pendidikan spiritual yang lebih mendalam dimulai dari paling dasar", poin: 4 },
      { huruf: "D", teks: "Memberikan mereka pelatihan dan ruang untuk bekerja sesuai dengan keunggulan komoditi daerah Anda", poin: 5 },
      { huruf: "E", teks: "Memastikan  keluarga mitra deradikalisasi sudah mempunyai akses untuk memonitoring kegiatan mereka di media sosial", poin: 1 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 3, C = 4, D = 5, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 102 ───
  {
    id: 102, kategori: "TKP",
    teks: "Politik identitas pernah terjadi beberapa kali di Indonesia dan dikhawatirkan terjadi dalam pemilu. Pemerintah perlu melakukan beberapa upaya untuk meminimalisir terjadinya politik identitas dengan cara... (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Lebih sering menggunakan media sosial resmi sebagai media untuk menyebarkan artikel dan himbauan tentang politik identitas dan contoh upaya yang dapat lebih mudah untuk diterapkan dalam kehidupan sehari-hari", poin: 3 },
      { huruf: "B", teks: "Meningkatkan jumlah petugas keamanan yang bertugas untuk menjaga keamanan situasi saat calon presiden/wakil presiden sedang berkunjung dan berkampanya", poin: 2 },
      { huruf: "C", teks: "Menghindari kegiatan demo yang berpotensi melakukan kerusakan pada beberapa fasilitas umum, membawa senjata tajam atau alat yang berpotensi membahayakan orang lain", poin: 1 },
      { huruf: "D", teks: "Memberikan sanksi pada buzzer, tim sukses, calon presiden/wakil presiden, dan relawan yang menjadikan politik identitas sebagai komoditas politik, serta berkomitmen tidak membawa isu SARA dalam berkampanye", poin: 5 },
      { huruf: "E", teks: "Menyosialisasikan seluruh warga di daerah kampanye masing-masing calon presiden/wakil presiden untuk tidak terbawa suasana apalagi terprovokasi terhadap adanya upaya perpecahan", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 3, B = 2, C = 1, D = 5, E = 4<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 103 ───
  {
    id: 103, kategori: "TKP",
    teks: "Anda sudah mendengar atau melihat beberapa kali tentang bullying di lingkungan lembaga pendidikan terutama yang memiliki asrama dan kegiatan keagamaan rutin. Jika Anda bekerja di kementerian yang menaungi perlindungan anak dan keagamaan, apa yang sebaiknya Anda lakukan sebagai bentuk pencegahan kekerasan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mendampingi korban bullying dari awal proses ranah hukum hingga selesai dengan memastikan kondisi mentalnya sudah membaik", poin: 3 },
      { huruf: "B", teks: "Membuat regulasi pengasuhan ramah anak di lembaga pendidikan tersebut dalam bentuk petunjuk teknis dan diawasi pelaksanaannya", poin: 5 },
      { huruf: "C", teks: "Menyediakan kemudahan hotline 24 jam untuk memudahkan adanya pelaporan kekerasan dengan tetap anonim dan menjaga rahasia sang pelapor", poin: 2 },
      { huruf: "D", teks: "Membimbing seluruh guru dan pengajar lembaga pendidikan tersebut untuk lebih perhatian pada penjagaan pelajar dari kekerasan", poin: 4 },
      { huruf: "E", teks: "Mengunjungi lembaga pendidikan tersebut yang memiliki jumlah pelajarnya paling banyak di Indonesia untuk dijadikan percontohan role model anti kekerasan", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 2, D = 4, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 104 ───
  {
    id: 104, kategori: "TKP",
    teks: "Anda berprofesi sebagai ASN, tinggal berada di lingkungan yang terdiri dari berbagai jenis suku dan agama. Ada suatu hari yang kebetulan hari raya kedua agama terlaksana di hari yang sama. Jika Anda adalah ketua RT, apa yang Anda lakukan? (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Memberikan pilihan kepada salah satu suku untuk lebih diutamakan merayakannya berdasarkan kesepakatan bersama", poin: 2 },
      { huruf: "B", teks: "Membebaskan warga setempat untuk merayakannya sesuai dengan hari rayanya", poin: 3 },
      { huruf: "C", teks: "Membantu dana perayaan yang dibagikan kepada sebagian warga jika merayakannya dengan khidmat", poin: 1 },
      { huruf: "D", teks: "Menghimbau warga untuk merayakan hari raya yang disesuaikan dengan suku lain untuk sama-sama saling tenang merayakannya", poin: 5 },
      { huruf: "E", teks: "Gotong royong untuk membersihkan semua tempat ibadah yang ada di wilayah tersebut", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 3, C = 1, D = 5, E = 4<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 105 ───
  {
    id: 105, kategori: "TKP",
    teks: "Tim lain merasa kesulitan untuk bertemu dengan tokoh masyarakat sehingga progres kerja menjadi terhambat dan hal tersebut disampaikan dalam forum diskusi, sedangkan tim Anda tidak menemui hambatan sama sekali di lapangan, maka tim Anda... (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Memberikan instruksi tertulis terutama diberikan kepada ketua tim untuk dijalankan setelah forum diskusi tersebut", poin: 3 },
      { huruf: "B", teks: "Usul untuk membantu tim tersebut menemui dan mempersuasi tokoh masyarakat sampai menemui titik terang kelanjutan kerja mereka", poin: 5 },
      { huruf: "C", teks: "Memberikan surat tertulis pada tokoh masyarakat di wilayah tim tersebut yang formatnya mirip dengan surat tertulis yang diberikan oleh tim Anda di wilayah Anda", poin: 4 },
      { huruf: "D", teks: "Mengusulkan kepada atasan untuk mengganti beberapa anggota tim tersebut yang lebih menguasai wilayah kerja tersebut", poin: 1 },
      { huruf: "E", teks: "Memberikan arahan secara pribadi berdasarkan pengalaman tim Anda di lapangan", poin: 2 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 4, D = 1, E = 2<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 106 ───
  {
    id: 106, kategori: "TKP",
    teks: "Anda sedang sakit flu dan harus memakai masker saat wawancara dengan klien, tetapi klien menawarkan Anda untuk makan dan minum yang sudah disediakan mereka. Apa yang harus Anda lakukan? (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Menghargai pemberian klien dengan menerimanya lalu dibawa pulang", poin: 2 },
      { huruf: "B", teks: "Membuka masker sejenak dan segera minum pemberian dari klien", poin: 1 },
      { huruf: "C", teks: "Berterima kasih dan tetap melanjutkan wawancara sesuai dengan prosedurnya", poin: 3 },
      { huruf: "D", teks: "Menolaknya dengan baik dan menjelaskan kondisi Anda supaya mereka tidak tertular", poin: 5 },
      { huruf: "E", teks: "Mengucapkan terima kasih dan izin untuk mengonsumsinya setelah wawancara selesai", poin: 4 }
    ],
    kunci: "D",
    pembahasan: "A = 2, B = 1, C = 3, D = 5, E = 4<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 107 ───
  {
    id: 107, kategori: "TKP",
    teks: "Anda sedang bertamu ke rumah teman Anda sambil membawa pasangan dan anak Anda. Namun, anak Anda tidak bisa diam dan berlaku kurang sopan di rumah teman Anda tersebut yang membuat teman Anda terlihat tidak nyaman. Tindakan apa yang sebaiknya Anda lakukan? (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Tetap mengobrol sambil mengawasi gerak gerik anak Anda di rumah teman Anda tersebut", poin: 2 },
      { huruf: "B", teks: "Menawarkan anak Anda untuk makan camilan yang sudah disediakan oleh teman Anda", poin: 3 },
      { huruf: "C", teks: "Mengajak anak Anda sejenak keluar rumah untuk memastikan rumah teman Anda kondusif lagi", poin: 4 },
      { huruf: "D", teks: "Meminta bantuan teman Anda untuk mengendalikan perilaku anak Anda di rumah tersebut", poin: 1 },
      { huruf: "E", teks: "Pamit pulang dengan memberitahukan alasan tertentu tanpa membuat teman Anda tidak enak hati", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 2, B = 3, C = 4, D = 1, E = 5<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 108 ───
  {
    id: 108, kategori: "TKP",
    teks: "Iwan merupakan seorang supir ambulans sekaligus pemilik ambulans sewa. Tiba-tiba tetangganya ada yang meninggal karena sakit dan tidak memiliki cukup dana untuk sewa kendaraan untuk memakamkan anggota keluarganya tersebut. Sebaiknya Iwan... (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Mencarikan ambulans yang mau untuk dibayar sesuai dengan dana yang disediakan oleh tetangga tersebut", poin: 3 },
      { huruf: "B", teks: "Menawarkan untuk mengantarkannya ke makam dengan biaya sesanggupnya tetangga tersebut", poin: 5 },
      { huruf: "C", teks: "Membantu proses pemakaman anggota keluarga tersebut yang meninggal", poin: 2 },
      { huruf: "D", teks: "Mengusulkan kepada ketua RT supaya para warganya mau untuk patungan dana membantu tetangga tersebut", poin: 4 },
      { huruf: "E", teks: "Memastikan situasi dalam rumah tetangga tersebut tetap aman dan terkendali", poin: 1 }
    ],
    kunci: "B",
    pembahasan: "A = 3, B = 5, C = 2, D = 4, E = 1<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 109 ───
  {
    id: 109, kategori: "TKP",
    teks: "Dedi akan ada acara keluarga besar dan membutuhkan tambahan kendaraan. Kebetulan tetangga Dedi memiliki mobil. Jika Dedi meminjam mobil tetangganya, maka Dedi harus... (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Memberikan kepastian waktu penggunaan mobil tersebut dan mengisi bensin hingga penuh sebelum mobil tersebut dikembalikan lagi", poin: 5 },
      { huruf: "B", teks: "Menggunakan mobil tersebut dengan hati-hati dan dikembalikan dalam keadaan baik pula", poin: 4 },
      { huruf: "C", teks: "Meminta saudara Dedi yang menyetir untuk memastikan mobil dikendarai oleh supir yang lebih ahli", poin: 1 },
      { huruf: "D", teks: "Tidak membuang sampah di dalam mobil dan mengisi bensin mobil tersebut hingga penuh", poin: 2 },
      { huruf: "E", teks: "Memberikan nomor kontak Dedi kepada tetangganya untuk tetap saling berkabar selama mobil tersebut dipinjam", poin: 3 }
    ],
    kunci: "A",
    pembahasan: "A = 5, B = 4, C = 1, D = 2, E = 3<br>Tulis pembahasan di sini..."
  },

  // ─── Soal 110 ───
  {
    id: 110, kategori: "TKP",
    teks: "Anda tinggal satu kos dengan satu teman lain yang berbeda agama. Anda melaksanakan ibadah setiap harinya dan teman Anda ibadah dalam saat-saat tertentu. Jika sedang hari raya masing-masing agama Anda dan teman Anda, sikap toleransi seperti apa yang bisa dilakukan? (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Saling bergantian setiap tahunnya untuk merayakan salah satu hari raya sesuai dengan kesepakatan", poin: 1 },
      { huruf: "B", teks: "Saling memahami untuk tidak mengganggu khidmatnya teman dalam merayakan hari rayanya", poin: 3 },
      { huruf: "C", teks: "Menghubungi keluarganya untuk bertegur sapa dan beramah tamah", poin: 4 },
      { huruf: "D", teks: "Membeli sejumlah makanan yang enak jika sedang hari raya salah satu dari Anda atau teman Anda", poin: 2 },
      { huruf: "E", teks: "Tidak menggangu hari raya teman Anda dan menawarkan bantuan jika membutuhkan bantuan", poin: 5 }
    ],
    kunci: "E",
    pembahasan: "A = 1, B = 3, C = 4, D = 2, E = 5<br>Tulis pembahasan di sini..."
  }

];

// ════════════════════════════════════════════
// FUNGSI SEED KE DATABASE
// ════════════════════════════════════════════
async function seedSoalPaket4() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Hapus data lama untuk tryout_id = 4
    await client.query(`DELETE FROM pilihan_jawaban WHERE soal_id IN (SELECT id FROM soal WHERE tryout_id = 4)`);
    await client.query(`DELETE FROM soal WHERE tryout_id = 4`);

    for (const soal of soalData) {
      const result = await client.query(
        `INSERT INTO soal (tryout_id, nomor_soal, kategori, teks, kunci, pembahasan)
         VALUES (4, $1, $2, $3, $4, $5)
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
    console.log('Seed soal Paket 4 berhasil: ' + soalData.length + ' soal');

  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal seed soal Paket 4:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

seedSoalPaket4().catch(() => process.exit(1));
