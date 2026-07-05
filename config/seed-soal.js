require('dotenv').config({ path: require('path').join(__dirname, '..', 'backend', '.env') });
const pool = require('../config/db');

const soalData = [
  // ──────────────────────────────────────────
  // TES WAWASAN KEBANGSAAN (TWK) - 30 SOAL
  // ──────────────────────────────────────────
  {
    id: 1, kategori: "TWK",
    teks: "Sikap yang paling mencerminkan nilai persatuan dan kesatuan dalam menjaga keutuhan NKRI adalah....",
    pilihan: [
      { huruf: "A", teks: "Mengutamakan pelestarian budaya daerah sebagai identitas bangsa" },
      { huruf: "B", teks: "Mengupayakan musyawarah untuk menyelesaikan konflik di masyarakat" },
      { huruf: "C", teks: "Menggalang solidaritas melalui kegiatan lintas agama dan budaya" },
      { huruf: "D", teks: "Mengedukasi masyarakat tentang pentingnya saling menghormati perbedaan" },
      { huruf: "E", teks: "Mendorong penegakan hukum untuk menciptakan keadilan sosial" }
    ],
    kunci: "C"
  },
  {
    id: 2, kategori: "TWK",
    teks: "Pemindahan Ibu Kota Negara (IKN) dari Jakarta ke Kalimantan Timur dirancang untuk mencapai pemerataan pembangunan di Indonesia. Langkah ini diprediksi akan membawa dampak strategis terhadap keseimbangan sosial ekonomi masyarakat. Dampak paling signifikan yang mendukung tujuan tersebut adalah....",
    pilihan: [
      { huruf: "A", teks: "Meningkatkan interaksi lintas budaya yang memperkuat persatuan" },
      { huruf: "B", teks: "Memperluas akses pendidikan dan layanan kesehatan di daerah terpencil" },
      { huruf: "C", teks: "Mempercepat transformasi ekonomi melalui pemerataan pusat pemerintahan" },
      { huruf: "D", teks: "Meningkatkan pemerataan pembangunan infrastruktur di luar Pulau Jawa" },
      { huruf: "E", teks: "Membuka peluang kolaborasi antarwilayah untuk mendukung pembangunan nasional" }
    ],
    kunci: "D"
  },
  {
    id: 3, kategori: "TWK",
    teks: "Indonesia dikenal sebagai negara yang menjunjung tinggi nilai kemanusiaan sekaligus menjaga hubungan baik dengan negara-negara tetangga. Dalam menyikapi isu pengungsi Rohingya dari Myanmar, peran utama Indonesia yang sejalan dengan politik luar negeri bebas aktif adalah....",
    pilihan: [
      { huruf: "A", teks: "Memberikan bantuan kemanusiaan tanpa syarat kepada pengungsi Rohingya" },
      { huruf: "B", teks: "Memprioritaskan urusan domestik sambil tetap memperhatikan isu Rohingya" },
      { huruf: "C", teks: "Menggalang kerja sama Internasional untuk penanganan pengungsi secara kolektif" },
      { huruf: "D", teks: "Menyediakan fasilitas pemukiman permanen bagi pengungsi di wilayah Indonesia" },
      { huruf: "E", teks: "Mengupayakan dialog damai dengan pemerintah Myanmar untuk menyelesaikan akar masalah" }
    ],
    kunci: "C"
  },
  {
    id: 4, kategori: "TWK",
    teks: "Seorang mahasiswa mengetahui bahwa wilayah di sekitar tempat tinggalnya mengalami pencemaran sungai akibat limbah domestik dan industri. Terinspirasi dari aksi Pandawara Grup yang membersihkan sungai secara sukarela, ia ingin berkontribusi dalam memperbaiki kondisi tersebut. Apa tindakan nyata yang paling sesuai untuk menunjukkan semangat bela negara dan kepedulian terhadap lingkungan?",
    pilihan: [
      { huruf: "A", teks: "Ikut serta dalam kegiatan pembersihan sungai yang terorganisir" },
      { huruf: "B", teks: "Menggalang dana untuk membeli alat-alat pembersihan sungai" },
      { huruf: "C", teks: "Menginisiasi gerakan pembersihan sungai bersama teman-teman" },
      { huruf: "D", teks: "Bergabung dengan komunitas peduli lingkungan untuk membersihkan sungai" },
      { huruf: "E", teks: "Mengajak masyarakat sekitar untuk bersama-sama menjaga kebersihan sungai" }
    ],
    kunci: "D"
  },
  {
    id: 5, kategori: "TWK",
    teks: "Patriotisme mencerminkan semangat cinta tanah air yang harus diwujudkan dalam tindakan nyata untuk menjaga keutuhan bangsa. Dalam konteks memperkuat persatuan nasional, tindakan masyarakat yang paling strategis dan sesuai dengan semangat Patriotisme adalah.....",
    pilihan: [
      { huruf: "A", teks: "Mengikuti kegiatan pendidikan dan penyuluhan tentang cinta tanah air" },
      { huruf: "B", teks: "Melestarikan dan mempromosikan budaya lokal sebagai kekayaan bangsa" },
      { huruf: "C", teks: "Menanamkan nilai-nilai Pancasila melalui program edukasi di lingkungan sekitar" },
      { huruf: "D", teks: "Mendukung kebijakan pemerintah yang bertujuan memperkuat kesatuan nasional" },
      { huruf: "E", teks: "Membantu individu yang membutuhkan di lingkungan sekitar sebagai wujud kepedulian sosial" }
    ],
    kunci: "C"
  },
  {
    id: 6, kategori: "TWK",
    teks: "Seorang mahasiswa menyadari rendahnya partisipasi pemuda dalam pemilu. Untuk meningkatkan kesadaran politik secara luas, apa langkah paling efektif yang harus dilakukan?",
    pilihan: [
      { huruf: "A", teks: "Mengadakan seminar pentingnya menggunakan hak pilih di kampus" },
      { huruf: "B", teks: "Membagikan informasi pemilu di media sosial" },
      { huruf: "C", teks: "Menginisiasi kelompok diskusi politik di lingkungan kampus" },
      { huruf: "D", teks: "Mengajak teman-teman untuk membentuk komunitas kesadaran pemilu" },
      { huruf: "E", teks: "Bergabung dengan organisasi kepemudaan aktif dalam kampanye kesadaran politik" }
    ],
    kunci: "E"
  },
  {
    id: 7, kategori: "TWK",
    teks: "Di era digital, teknologi memberikan banyak peluang untuk meningkatkan kesejahteraan masyarakat. Apa langkah prioritas pemerintah dalam memaksimalkan pemanfaatan teknologi untuk pembangunan nasional?",
    pilihan: [
      { huruf: "A", teks: "Meningkatkan literasi digital di kalangan masyarakat" },
      { huruf: "B", teks: "Mengembangkan layanan pemerintah berbasis digital untuk efisiensi pelayanan publik" },
      { huruf: "C", teks: "Mendukung inovasi startup lokal melalui pendanaan dan pelatihan" },
      { huruf: "D", teks: "Membuka akses internet ke seluruh wilayah terpencil" },
      { huruf: "E", teks: "Membentuk regulasi ketat untuk mengontrol perkembangan teknologi asing" }
    ],
    kunci: "B"
  },
  {
    id: 8, kategori: "TWK",
    teks: "Reformasi kebijakan publik diperlukan untuk meningkatkan kualitas hidup masyarakat. Dalam konteks ini, apa peran utama DPR dalam mendorong reformasi kebijakan publik?",
    pilihan: [
      { huruf: "A", teks: "Menyusun undang-undang yang mendukung pembangunan berkelanjutan" },
      { huruf: "B", teks: "Mengawasi pelaksanaan kebijakan publik agar sesuai dengan peraturan yang berlaku" },
      { huruf: "C", teks: "Mengalokasikan anggaran untuk mendukung program reformasi kebijakan" },
      { huruf: "D", teks: "Memberikan masukan strategis kepada pemerintah dalam penyusunan kebijakan" },
      { huruf: "E", teks: "Melibatkan masyarakat dalam proses legislasi untuk memastikan aspirasi mereka terpenuhi" }
    ],
    kunci: "A"
  },
  {
    id: 9, kategori: "TWK",
    teks: "Apa bentuk implementasi nyata Pasal 34 UUD 1945 yang menyatakan bahwa fakir miskin dan anak-anak terlantar dipelihara oleh negara?",
    pilihan: [
      { huruf: "A", teks: "Pemerintah menyediakan layanan pendidikan gratis bagi masyarakat kurang mampu" },
      { huruf: "B", teks: "Pemerintah menetapkan subsidi bahan bakar untuk meningkatkan daya beli masyarakat" },
      { huruf: "C", teks: "Pemerintah membangun fasilitas kesehatan untuk masyarakat miskin" },
      { huruf: "D", teks: "Pemerintah menjalankan program bantuan sosial untuk keluarga prasejahtera" },
      { huruf: "E", teks: "Pemerintah memberikan pelatihan kerja untuk meningkatkan keterampilan masyarakat miskin" }
    ],
    kunci: "D"
  },
  {
    id: 10, kategori: "TWK",
    teks: "Dalam menghadapi tantangan globalisasi, pemerintah dan masyarakat perlu mengambil langkah strategis untuk menjaga kedaulatan bangsa. Di antara tindakan berikut, mana yang paling sesuai dengan semangat cinta tanah air?",
    pilihan: [
      { huruf: "A", teks: "Mengutamakan penggunaan produk lokal dalam kegiatan sehari-hari" },
      { huruf: "B", teks: "Meningkatkan kerja sama internasional untuk mendukung kemajuan teknologi Indonesia" },
      { huruf: "C", teks: "Mendorong inovasi teknologi lokal agar mampu bersaing secara global" },
      { huruf: "D", teks: "Mengembangkan kebijakan pendidikan untuk meningkatkan kompetensi generasi muda" },
      { huruf: "E", teks: "Memanfaatkan teknologi asing untuk mempercepat pembangunan nasional" }
    ],
    kunci: "A"
  },
  {
    id: 11, kategori: "TWK",
    teks: "Di sebuah lingkungan perumahan terdapat dana sosial bersama yang belum digunakan. Sebagian warga ingin memanfaatkan dana tersebut untuk memperbaiki fasilitas olahraga sementara yang lain mengusulkan digunakan untuk membangun perpustakaan mini. Sebagai tokoh pemuda yang ingin menerapkan nilai-nilai Pancasila, langkah terbaik yang bisa dilakukan adalah?",
    pilihan: [
      { huruf: "A", teks: "Mengajak perwakilan kedua kelompok untuk berdiskusi terlebih dahulu" },
      { huruf: "B", teks: "Mengusulkan solusi yang mengakomodasi kedua kebutuhan" },
      { huruf: "C", teks: "Mengadakan musyawarah untuk mendengarkan pendapat semua pihak" },
      { huruf: "D", teks: "Membuat survei untuk menentukan pilihan mayoritas" },
      { huruf: "E", teks: "Mengundang tokoh masyarakat untuk memediasi dialog bersama" }
    ],
    kunci: "C"
  },
  {
    id: 12, kategori: "TWK",
    teks: "Seorang anak mengalami kekerasan di rumah tangga sehingga kehilangan rasa aman. Apa langkah utama yang harus dilakukan pemerintah sesuai dengan Pasal 28B ayat 2 UUD 1945?",
    pilihan: [
      { huruf: "A", teks: "Mengajak masyarakat melaporkan kekerasan" },
      { huruf: "B", teks: "Membentuk lembaga khusus untuk anak" },
      { huruf: "C", teks: "Memberikan bantuan psikologis pada anak" },
      { huruf: "D", teks: "Mengawasi lingkungan tempat tinggal anak" },
      { huruf: "E", teks: "Memperkuat hukum yang melindungi anak" }
    ],
    kunci: "E"
  },
  {
    id: 13, kategori: "TWK",
    teks: "Perhatikan beberapa contoh sikap berikut ini:\n1) Memberikan bantuan pendidikan kepada anak-anak kurang mampu di lingkungan sekitar.\n2) Mengutamakan keputusan yang menguntungkan seluruh anggota masyarakat dalam musyawarah.\n3) Menolak eksploitasi sumber daya alam yang dapat merugikan kepentingan masyarakat luas.\n4) Mengutamakan kesepakatan mayoritas dalam menentukan pembagian tugas kegiatan gotong royong.\n5) Mengadakan pelatihan kerja untuk masyarakat miskin agar dapat meningkatkan keterampilan mereka.\n6) Mengutamakan penghormatan terhadap budaya lokal dalam setiap acara masyarakat.\n\nSikap yang mencerminkan nilai Pancasila sila ke-5 terdapat pada nomor:",
    pilihan: [
      { huruf: "A", teks: "2, 4, dan 5" },
      { huruf: "B", teks: "1, 3, dan 5" },
      { huruf: "C", teks: "1, 3, dan 6" },
      { huruf: "D", teks: "2, 4, dan 6" },
      { huruf: "E", teks: "3, 4, dan 5" }
    ],
    kunci: "B"
  },
  {
    id: 14, kategori: "TWK",
    teks: "Dalam menghadapi tantangan global, kerja sama internasional menjadi kunci keberhasilan sebuah negara. Apa yang seharusnya menjadi fokus utama Indonesia dalam menjalin kerja sama internasional?",
    pilihan: [
      { huruf: "A", teks: "Menjalin kerja sama untuk memperkuat ekonomi nasional" },
      { huruf: "B", teks: "Membangun kemitraan yang adil dan saling menguntungkan" },
      { huruf: "C", teks: "Berkolaborasi dalam menangani isu global bersama negara lain" },
      { huruf: "D", teks: "Aktif dalam organisasi internasional untuk kepentingan bersama" },
      { huruf: "E", teks: "Memperluas kerja sama di bidang teknologi dan pendidikan" }
    ],
    kunci: "B"
  },
  {
    id: 15, kategori: "TWK",
    teks: "Di tengah persaingan global, banyak barang impor yang membanjiri pasar Indonesia. Kondisi ini menjadi tantangan besar bagi produk lokal untuk tetap bertahan dan bersaing. Dalam situasi tersebut, langkah strategis yang paling mencerminkan semangat nasionalisme adalah....",
    pilihan: [
      { huruf: "A", teks: "Membuat produk lokal dengan desain dan kualitas yang lebih menarik dari barang impor" },
      { huruf: "B", teks: "Meningkatkan inovasi pada produk lokal untuk memenuhi kebutuhan pasar domestik dan internasional" },
      { huruf: "C", teks: "Mengadakan kampanye nasional untuk mendorong masyarakat membeli produk dalam negeri" },
      { huruf: "D", teks: "Mengembangkan kolaborasi dengan pelaku usaha internasional untuk meningkatkan daya saing" },
      { huruf: "E", teks: "Memberikan insentif kepada pelaku UMKM agar mampu bersaing di pasar global" }
    ],
    kunci: "B"
  },
  {
    id: 16, kategori: "TWK",
    teks: "Dalam sebuah desa, warga sepakat untuk memperbaiki jembatan yang rusak melalui gotong royong. Namun setelah tugas dibagi, beberapa warga merasa beban kerja tidak merata karena ada yang mendapat tugas lebih berat. Sebagai pemimpin kegiatan, apa langkah terbaik yang mencerminkan integritas sekaligus nilai keadilan sosial dalam sila ke-5 Pancasila?",
    pilihan: [
      { huruf: "A", teks: "Memastikan pembagian tugas yang adil dengan mempertimbangkan kemampuan setiap warga" },
      { huruf: "B", teks: "Memberikan motivasi kepada warga yang mendapat tugas lebih berat agar tetap semangat" },
      { huruf: "C", teks: "Mengajak warga untuk fokus pada kepentingan bersama daripada mempermasalahkan pembagian tugas" },
      { huruf: "D", teks: "Menyusun kembali pembagian tugas berdasarkan musyawarah untuk mencapai kesepakatan" },
      { huruf: "E", teks: "Meminta maaf kepada warga dan menyelesaikan tugas berat dengan bantuan tambahan dari relawan" }
    ],
    kunci: "A"
  },
  {
    id: 17, kategori: "TWK",
    teks: "Dr. Radjiman Wedyoningrat dikenal sebagai pemimpin sidang BPUPKI yang mengutamakan musyawarah untuk mufakat. Dalam konteks kehidupan saat ini, sikap apa yang paling mencerminkan keteladanan beliau dalam menjaga persatuan di tengah perbedaan pendapat?",
    pilihan: [
      { huruf: "A", teks: "Menghargai setiap pendapat dalam diskusi untuk mencapai kesepakatan bersama" },
      { huruf: "B", teks: "Mendorong dialog terbuka agar semua pihak merasa didengar" },
      { huruf: "C", teks: "Mengajak semua pihak berpartisipasi aktif dalam pengambilan keputusan" },
      { huruf: "D", teks: "Mencari titik temu dalam perbedaan untuk menghasilkan solusi terbaik" },
      { huruf: "E", teks: "Menyampaikan gagasan secara bijak untuk menjaga suasana kondusif" }
    ],
    kunci: "D"
  },
  {
    id: 18, kategori: "TWK",
    teks: "Mengapa Ir. Soekarno dianggap sebagai tokoh yang tepat memimpin Panitia Sembilan dalam merumuskan dasar negara?",
    pilihan: [
      { huruf: "A", teks: "Karena Ir. Soekarno memiliki pengalaman panjang dalam pergerakan nasional" },
      { huruf: "B", teks: "Karena Ir. Soekarno mampu menyatukan pandangan yang berbeda menjadi satu kesepakatan bersama" },
      { huruf: "C", teks: "Karena Ir. Soekarno memiliki pengaruh besar dalam membangun semangat kebangsaan" },
      { huruf: "D", teks: "Karena Ir. Soekarno dikenal sebagai pemimpin yang tegas dalam mengambil keputusan penting" },
      { huruf: "E", teks: "Karena Ir. Soekarno memiliki wawasan mendalam tentang dasar-dasar kenegaraan" }
    ],
    kunci: "B"
  },
  {
    id: 19, kategori: "TWK",
    teks: "Seorang warga merasa tidak puas dengan putusan pengadilan tingkat banding yang ia terima dan ingin mencari keadilan lebih lanjut. Apa langkah yang paling sesuai yang bisa dilakukan oleh Mahkamah Agung dalam situasi ini?",
    pilihan: [
      { huruf: "A", teks: "Mengadili perkara pada tingkat kasasi untuk memeriksa kembali putusan sebelumnya" },
      { huruf: "B", teks: "Menguji undang-undang yang dianggap merugikan warga tersebut" },
      { huruf: "C", teks: "Menyelesaikan sengketa kewenangan antar lembaga yang menangani kasus ini" },
      { huruf: "D", teks: "Memberikan sanksi kepada hakim yang memutus perkara sebelumnya" },
      { huruf: "E", teks: "Mengawasi pelaksanaan pemilu yang berkaitan dengan masalah hukum warga tersebut" }
    ],
    kunci: "A"
  },
  {
    id: 20, kategori: "TWK",
    teks: "Dalam situasi demonstrasi yang mulai tidak terkendali dan berpotensi menimbulkan kericuhan, petugas keamanan melepaskan gas air mata ke udara. Bagaimana tindakan ini sejalan dengan semangat persatuan dalam Pancasila?",
    pilihan: [
      { huruf: "A", teks: "Mencegah kericuhan agar kerukunan antarwarga tetap terjaga" },
      { huruf: "B", teks: "Membubarkan massa untuk menghindari bentrokan yang merusak persatuan" },
      { huruf: "C", teks: "Menjaga ketertiban umum demi keamanan seluruh masyarakat" },
      { huruf: "D", teks: "Memberikan peringatan agar semua pihak menaati aturan bersama" },
      { huruf: "E", teks: "Menghindari konflik berkepanjangan demi menjaga situasi damai" }
    ],
    kunci: "B"
  },
  {
    id: 21, kategori: "TWK",
    teks: "Pemerintah merencanakan program makan gratis untuk siswa di sekolah sebagai bagian dari upaya meningkatkan kesejahteraan dan kualitas pendidikan. Manfaat utama apa yang paling dirasakan siswa dengan adanya program tersebut?",
    pilihan: [
      { huruf: "A", teks: "Siswa menjadi lebih sehat karena mendapatkan asupan gizi yang baik" },
      { huruf: "B", teks: "Siswa dapat belajar dengan lebih fokus dan semangat" },
      { huruf: "C", teks: "Keluarga terbantu dalam mengurangi pengeluaran harian" },
      { huruf: "D", teks: "Siswa lebih rajin datang ke sekolah" },
      { huruf: "E", teks: "Seluruh siswa memiliki kesempatan yang sama dalam mendapatkan nutrisi" }
    ],
    kunci: "E"
  },
  {
    id: 22, kategori: "TWK",
    teks: "Dalam upaya membangun kualitas pendidikan dan mencetak generasi berprestasi, semangat nasionalisme sangat diperlukan. Sikap apa yang paling mencerminkan semangat nasionalisme dalam mendukung peningkatan prestasi pendidikan?",
    pilihan: [
      { huruf: "A", teks: "Mengutamakan kerja sama dalam belajar untuk mencapai hasil terbaik bersama" },
      { huruf: "B", teks: "Menghargai pendapat teman dalam diskusi kelompok di kelas" },
      { huruf: "C", teks: "Menjaga fasilitas sekolah agar tetap bersih dan nyaman untuk belajar" },
      { huruf: "D", teks: "Berpartisipasi aktif dalam lomba akademik dan membawa nama baik sekolah" },
      { huruf: "E", teks: "Mengikuti kegiatan ekstrakurikuler untuk mengembangkan potensi diri" }
    ],
    kunci: "D"
  },
  {
    id: 23, kategori: "TWK",
    teks: "Teuku Umar dikenal sebagai pahlawan nasional dari Aceh yang menunjukkan kepemimpinan luar biasa melalui strategi cerdas, semangat juang yang tinggi, dan keberanian dalam menghadapi penjajah. Dalam konteks menghadapi tantangan ketahanan pangan and pertahanan negara, langkah strategis yang paling mencerminkan semangat perjuangan Teuku Umar adalah....",
    pilihan: [
      { huruf: "A", teks: "Mendorong inovasi di sektor pertanian untuk mendukung kemandirian pangan nasional" },
      { huruf: "B", teks: "Mengembangkan pola pertanian terpadu berbasis teknologi modern untuk ketahanan pangan" },
      { huruf: "C", teks: "Meningkatkan kesadaran masyarakat tentang pentingnya bela negara melalui pendidikan kewarganegaraan" },
      { huruf: "D", teks: "Membentuk komunitas tanggap bencana yang terlatih dan terorganisir dengan baik" },
      { huruf: "E", teks: "Memperkuat kolaborasi lintas sektoral antar pemerintah, masyarakat, dan swasta untuk menghadapi ancaman keamanan" }
    ],
    kunci: "A"
  },
  {
    id: 24, kategori: "TWK",
    teks: "Sarekat Dagang Islam (SDI) yang didirikan pada tahun 1911 di Solo oleh Haji Samanhudi berperan penting dalam pergerakan nasional. Fokus utama gerakan ini adalah....",
    pilihan: [
      { huruf: "A", teks: "Meningkatkan kemandirian ekonomi bangsa melalui solidaritas pedagang lokal" },
      { huruf: "B", teks: "Memajukan pendidikan rakyat untuk melawan kebodohan" },
      { huruf: "C", teks: "Memperkuat nilai-nilai keagamaan sebagai landasan perjuangan" },
      { huruf: "D", teks: "Membentuk organisasi politik untuk melibatkan masyarakat dalam pemerintahan" },
      { huruf: "E", teks: "Melestarikan budaya lokal sebagai identitas bangsa di tengah kolonialisme" }
    ],
    kunci: "A"
  },
  {
    id: 25, kategori: "TWK",
    teks: "Bacalah paragraf berikut dengan saksama:\n\n\"Dalam upaya mengurangi dampak perubahan iklim, pemerintah menetapkan kebijakan yang mewajibkan perusahaan besar untuk menggunakan energi terbarukan. Kebijakan ini mengharuskan perusahaan mengalihkan minimal 30% dari konsumsi energinya ke sumber energi yang ramah lingkungan. Perusahaan yang tidak mematuhi kebijakan tersebut akan dikenakan sanksi berat, seperti denda besar atau pencabutan izin operasional.\"\n\nApa simpulan utama dari kebijakan yang dijelaskan dalam paragraf di atas?",
    pilihan: [
      { huruf: "A", teks: "Pemerintah menetapkan sanksi berat untuk perusahaan yang melanggar aturan energi terbarukan" },
      { huruf: "B", teks: "Perusahaan besar diwajibkan menggunakan energi ramah lingkungan untuk mendukung keberlanjutan" },
      { huruf: "C", teks: "Kebijakan pemerintah tentang energi terbarukan bertujuan untuk mengurangi dampak perubahan iklim" },
      { huruf: "D", teks: "Penggunaan energi terbarukan menjadi tantangan bagi perusahaan besar dalam mengurangi emisi karbon" },
      { huruf: "E", teks: "Perusahaan besar diharapkan dapat meningkatkan efisiensi energi melalui kebijakan pemerintah" }
    ],
    kunci: "C"
  },
  {
    id: 26, kategori: "TWK",
    teks: "Kerusakan lingkungan yang semakin parah saat ini sebagian besar disebabkan oleh aktivitas manusia, seperti pembuangan limbah industri secara sembarangan dan penggunaan plastik secara masif. Dampaknya tidak hanya mencemari tanah dan air, tetapi juga mengancam ekosistem laut.\n\nApa inti kalimat dari kalimat pertama paragraf di atas?",
    pilihan: [
      { huruf: "A", teks: "Kerusakan lingkungan disebabkan oleh aktivitas manusia" },
      { huruf: "B", teks: "Aktivitas manusia mencemari tanah dan air" },
      { huruf: "C", teks: "Pembuangan limbah industri menyebabkan kerusakan lingkungan" },
      { huruf: "D", teks: "Limbah plastik mengancam spesies laut" },
      { huruf: "E", teks: "Kerusakan lingkungan disebabkan oleh pembuangan limbah plastik" }
    ],
    kunci: "A"
  },
  {
    id: 27, kategori: "TWK",
    teks: "Bacalah paragraf berikut:\n\n\"Dalam perlombaan debat tingkat nasional, tim dari SMA Nusantara dan SMA Bina Bangsa menampilkan performa yang luar biasa. Tim SMA Nusantara berfokus pada penguasaan data dan fakta untuk memperkuat argumen mereka, sedangkan tim SMA Bina Bangsa menggunakan pendekatan emosional untuk memengaruhi juri.\"\n\nManakah kalimat setara yang tepat berdasarkan EYD?",
    pilihan: [
      { huruf: "A", teks: "Tim SMA Nusantara fokus pada data dan fakta, tetapi tim SMA Bina Bangsa menggunakan pendekatan emosional" },
      { huruf: "B", teks: "Tim SMA Nusantara menggunakan argumen berbasis data, SMA Bina Bangsa memanfaatkan pendekatan emosional" },
      { huruf: "C", teks: "Kedua tim mendiskusikan strategi yang mereka gunakan setelah perlombaan selesai" },
      { huruf: "D", teks: "Tim SMA Nusantara fokus pada fakta; di sisi lain, tim SMA Bina Bangsa mengandalkan pendekatan emosional" },
      { huruf: "E", teks: "Perlombaan debat berjalan dengan sengit, kedua tim menunjukkan kemampuan yang luar biasa" }
    ],
    kunci: "A"
  },
  {
    id: 28, kategori: "TWK",
    teks: "Bacalah paragraf berikut:\n\n\"Upaya pemerintah untuk meningkatkan kualitas pendidikan nasional masih menghadapi berbagai kendala. Beberapa program pendidikan tidak berjalan optimal akibat kurangnya anggaran, fasilitas yang tidak memadai, dan kesenjangan akses di daerah terpencil. Selain itu, rendahnya kompetensi tenaga pengajar di beberapa wilayah juga menjadi tantangan besar.\"\n\nApa ide pokok yang tepat dari paragraf tersebut?",
    pilihan: [
      { huruf: "A", teks: "Program pendidikan nasional belum berjalan optimal karena berbagai kendala" },
      { huruf: "B", teks: "Kompetensi tenaga pengajar di beberapa wilayah masih rendah" },
      { huruf: "C", teks: "Fasilitas pendidikan yang tidak memadai menghambat program pemerintah" },
      { huruf: "D", teks: "Kesenjangan akses pendidikan di daerah terpencil menjadi masalah utama" },
      { huruf: "E", teks: "Pemerintah menghadapi berbagai tantangan dalam meningkatkan kualitas pendidikan" }
    ],
    kunci: "E"
  },
  {
    id: 29, kategori: "TWK",
    teks: "Bacalah paragraf berikut:\n\n\"Kebersihan lingkungan memberikan manfaat besar bagi manusia. Udara yang bersih tidak hanya menciptakan suasana yang nyaman, tetapi juga membantu mengurangi risiko berbagai penyakit, khususnya penyakit pernapasan. Namun, masih banyak masyarakat yang belum peduli terhadap kebersihan lingkungan.\"\n\nManakah kalimat yang paling efektif untuk merangkum paragraf tersebut?",
    pilihan: [
      { huruf: "A", teks: "Masyarakat perlu lebih peduli terhadap kebersihan lingkungan" },
      { huruf: "B", teks: "Kerja sama antara pemerintah dan masyarakat penting untuk menjaga kebersihan lingkungan" },
      { huruf: "C", teks: "Kebersihan lingkungan memberikan manfaat bagi kesehatan dan kenyamanan manusia" },
      { huruf: "D", teks: "Sampah dan polusi udara masih menjadi masalah utama yang harus diatasi" },
      { huruf: "E", teks: "Pentingnya menjaga kebersihan lingkungan untuk kesehatan dan kesejahteraan manusia" }
    ],
    kunci: "E"
  },
  {
    id: 30, kategori: "TWK",
    teks: "Kalimat di bawah ini yang paling efektif sesuai kaidah bahasa Indonesia adalah....",
    pilihan: [
      { huruf: "A", teks: "Banyak orang yang membuang sampah sembarangan meskipun telah mengetahui bahwa sampah tersebut bisa merusak lingkungan" },
      { huruf: "B", teks: "Pemerintah bersama masyarakat harus bekerja sama untuk menjaga kebersihan lingkungan demi menciptakan kenyamanan dan kesehatan" },
      { huruf: "C", teks: "Lingkungan yang bersih adalah lingkungan yang nyaman dan dapat memberikan dampak baik bagi manusia serta juga makhluk hidup lainnya" },
      { huruf: "D", teks: "Sampah plastik telah menjadi masalah serius yang mana memengaruhi kesehatan manusia dan hewan" },
      { huruf: "E", teks: "Untuk menjaga kerusakan lingkungan, diperlukan langkah-langkah yang strategis, efektif, dan dilakukan dengan konsisten agar bisa berhasil" }
    ],
    kunci: "B"
  },

  // ──────────────────────────────────────────
  // TES INTELIGENSIA UMUM (TIU) - 35 SOAL BARU
  // ──────────────────────────────────────────
  {
    id: 31, kategori: "TIU",
    teks: "API : OKSIGEN = KEHIDUPAN : ...",
    pilihan: [
      { huruf: "A", teks: "Uang" },
      { huruf: "B", teks: "Tumbuhan" },
      { huruf: "C", teks: "Air" },
      { huruf: "D", teks: "Tanah" },
      { huruf: "E", teks: "Udara" }
    ],
    kunci: "C"
  },
  {
    id: 32, kategori: "TIU",
    teks: "DIRIGEN : TONGKAT = HAKIM : ......",
    pilihan: [
      { huruf: "A", teks: "Palu" },
      { huruf: "B", teks: "Hukum" },
      { huruf: "C", teks: "Terdakwa" },
      { huruf: "D", teks: "Pengadilan" },
      { huruf: "E", teks: "Keadilan" }
    ],
    kunci: "A"
  },
  {
    id: 33, kategori: "TIU",
    teks: "Sebuah rumah selalu memiliki fondasi dan atap sebagai struktur utamanya. Hubungan ini sama dengan...",
    pilihan: [
      { huruf: "A", teks: "Seseorang membutuhkan makanan dan minuman untuk bertahan hidup" },
      { huruf: "B", teks: "Pohon terdiri atas batang dan akar sebagai bagian pokoknya" },
      { huruf: "C", teks: "Di dalam dapur terdapat kompor dan panci" },
      { huruf: "D", teks: "Petani pergi ke sawah dan mencangkul tanah" },
      { huruf: "E", teks: "Kamar memerlukan kasur dan bantal agar nyaman" }
    ],
    kunci: "B"
  },
  {
    id: 34, kategori: "TIU",
    teks: "Seekor kucing memiliki kumis dan cakar. Hubungan ini sama dengan...",
    pilihan: [
      { huruf: "A", teks: "Burung elang memiliki paruh dan sayap" },
      { huruf: "B", teks: "Ikan membutuhkan insang dan sirip" },
      { huruf: "C", teks: "Kandang adalah tempat tinggal ayam dan bebek" },
      { huruf: "D", teks: "Seekor anjing menyukai tulang dan daging" },
      { huruf: "E", teks: "Gajah menggunakan belalainya untuk minum dan mengambil makanan" }
    ],
    kunci: "A"
  },
  {
    id: 35, kategori: "TIU",
    teks: "Semua warga yang menggunakan kendaraan listrik mendapat potongan pajak transportasi.<br>Sebagian warga yang mendapat potongan pajak tidak pernah mengikuti program penghijauan.<br>Warga yang tidak membayar pajak transportasi tidak berhak menggunakan lahan parkir publik.<br><br>Kesimpulan yang paling tepat adalah...",
    pilihan: [
      { huruf: "A", teks: "Semua warga yang menggunakan kendaraan listrik boleh menggunakan lahan parkir publik" },
      { huruf: "B", teks: "Warga yang tidak mengikuti program penghijauan tidak memiliki kendaraan listrik" },
      { huruf: "C", teks: "Sebagian warga yang menggunakan lahan parkir publik tidak mengikuti program penghijauan" },
      { huruf: "D", teks: "Semua warga yang mendapat potongan pajak transportasi memiliki kendaraan listrik" },
      { huruf: "E", teks: "Beberapa warga yang tidak menggunakan kendaraan listrik tetap mendapat potongan pajak" }
    ],
    kunci: "C"
  },
  {
    id: 36, kategori: "TIU",
    teks: "Tidak ada pengguna media sosial yang menjaga privasinya secara ketat membagikan lokasi secara publik.<br>Beberapa orang yang membagikan lokasi secara publik sering menjadi target iklan yang dipersonalisasi.<br><br>Kesimpulan yang paling tepat adalah...",
    pilihan: [
      { huruf: "A", teks: "Semua pengguna media sosial yang menjadi target iklan menjaga privasinya secara ketat" },
      { huruf: "B", teks: "Beberapa orang yang menjadi target iklan yang dipersonalisasi bukan pengguna media sosial" },
      { huruf: "C", teks: "Beberapa pengguna media sosial yang menjadi target iklan tidak menjaga privasinya secara ketat" },
      { huruf: "D", teks: "Semua orang yang tidak membagikan lokasi tidak akan menjadi target iklan" },
      { huruf: "E", teks: "Semua pengguna media sosial menjaga privasinya secara ketat" }
    ],
    kunci: "C"
  },
  {
    id: 37, kategori: "TIU",
    teks: "Tidak semua pengguna aplikasi “SafeConnect” mengaktifkan fitur verifikasi dua langkah untuk melindungi akunnya.<br>Setiap pengguna yang tidak mengaktifkan verifikasi dua langkah berisiko tinggi mengalami kebocoran data pribadi jika perangkatnya diretas.<br><br>Kesimpulan yang paling tepat adalah...",
    pilihan: [
      { huruf: "A", teks: "Semua pengguna aplikasi \"SafeConnect\" mengalami kebocoran data pribadi" },
      { huruf: "B", teks: "Tidak ada pengguna yang mengalami kebocoran data pribadi" },
      { huruf: "C", teks: "Sebagian pengguna aplikasi \"SafeConnect\" berisiko tinggi mengalami kebocoran data pribadi" },
      { huruf: "D", teks: "Semua pengguna yang mengaktifkan verifikasi dua langkah tetap berisiko tinggi diretas" },
      { huruf: "E", teks: "Pengguna yang tidak mengaktifkan verifikasi dua langkah aman dari ancaman kebocoran data" }
    ],
    kunci: "C"
  },
  {
    id: 38, kategori: "TIU",
    teks: "Hasil dari <sup>5</sup>/<sub>4</sub> + 10 <sup>2</sup>/<sub>5</sub> &times; 6 + 4 = ...",
    pilihan: [
      { huruf: "A", teks: "67,07" },
      { huruf: "B", teks: "67,65" },
      { huruf: "C", teks: "69,55" },
      { huruf: "D", teks: "70,75" },
      { huruf: "E", teks: "70,97" }
    ],
    kunci: "B"
  },
  {
    id: 39, kategori: "TIU",
    teks: "Hasil dari 2 <sup>1</sup>/<sub>2</sub> : <sup>1</sup>/<sub>5</sub> + (<sup>2</sup>/<sub>3</sub> - (-<sup>1</sup>/<sub>6</sub>)) : <sup>1</sup>/<sub>3</sub> &times; 2 = ...",
    pilihan: [
      { huruf: "A", teks: "9,5" },
      { huruf: "B", teks: "10" },
      { huruf: "C", teks: "12,4" },
      { huruf: "D", teks: "12,6" },
      { huruf: "E", teks: "14" }
    ],
    kunci: "A"
  },
  {
    id: 40, kategori: "TIU",
    teks: "Diketahui nilai x = <sup>2</sup>/<sub>3</sub> dan y = 3.<br><br>" +
          "<div class='perbandingan-table'>" +
          "  <table>" +
          "    <thead>" +
          "      <tr>" +
          "        <th>A</th>" +
          "        <th>B</th>" +
          "      </tr>" +
          "    </thead>" +
          "    <tbody>" +
          "      <tr>" +
          "        <td>3x - <sup>1</sup>/<sub>3</sub>y</td>" +
          "        <td><sup>1</sup>/<sub>4</sub>x + y</td>" +
          "      </tr>" +
          "    </tbody>" +
          "  </table>" +
          "</div>" +
          "Manakah hubungan yang benar antara kuantitas A dan B berikut berdasarkan informasi yang diberikan...",
    pilihan: [
      { huruf: "A", teks: "2A &gt; 3B" },
      { huruf: "B", teks: "3A &gt; 2B" },
      { huruf: "C", teks: "Hubungan A dan B tidak dapat ditentukan" },
      { huruf: "D", teks: "19A = 6B" },
      { huruf: "E", teks: "6A = 19B" }
    ],
    kunci: "D"
  },
  {
    id: 41, kategori: "TIU",
    teks: "50 × <sup>3</sup>/<sub>25</sub> × 750 = ...",
    pilihan: [
      { huruf: "A", teks: "1200" },
      { huruf: "B", teks: "3000" },
      { huruf: "C", teks: "3525" },
      { huruf: "D", teks: "3765" },
      { huruf: "E", teks: "4500" }
    ],
    kunci: "E"
  },
  {
    id: 42, kategori: "TIU",
    teks: "Jika R = −1\n\n<table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:8px 24px;text-align:center;'>A</th><th style='border:2px solid #333;padding:8px 24px;text-align:center;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:8px 24px;text-align:center;'>−1 + 3 − R × 2</td><td style='border:2px solid #333;padding:8px 24px;text-align:center;'>2 − 1 × R − 1</td></tr></tbody></table>\n\nManakah hubungan yang benar antara kuantitas A dan B berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "A > 2B" },
      { huruf: "B", teks: "A < 2B" },
      { huruf: "C", teks: "1/2 A = B" },
      { huruf: "D", teks: "2A = B" },
      { huruf: "E", teks: "2A < 3B" }
    ],
    kunci: "C"
  },
  {
    id: 43, kategori: "TIU",
    teks: "Diketahui\n\n<table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:8px 24px;text-align:center;background:#f0f0f0;'>A</th><th style='border:2px solid #333;padding:8px 24px;text-align:center;background:#f0f0f0;'>B</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:8px 24px;text-align:center;'>44.000</td><td style='border:2px solid #333;padding:8px 24px;text-align:center;'>Jumlah donasi per keluarga jika Rp160.000 dibagikan kepada 4 keluarga terdampak bencana alam</td></tr></tbody></table>\n\nManakah hubungan yang benar antara kuantitas A dan B berdasarkan informasi yang diberikan?",
    pilihan: [
      { huruf: "A", teks: "A < 3B" },
      { huruf: "B", teks: "A > 3B" },
      { huruf: "C", teks: "A = 3B" },
      { huruf: "D", teks: "2A = B" },
      { huruf: "E", teks: "3A < B" }
    ],
    kunci: "A"
  },
  {
    id: 44, kategori: "TIU",
    teks: "Lina membeli 4 gelas seharga Rp18.000 per buah. Kemudian ia menambahkan 7 gelas ke dalam belanjaannya dan mendapatkan diskon 25% untuk seluruh pembelian. Berapakah total yang harus dibayar Lina setelah diskon?",
    pilihan: [
      { huruf: "A", teks: "Rp145.000" },
      { huruf: "B", teks: "Rp148.500" },
      { huruf: "C", teks: "Rp150.000" },
      { huruf: "D", teks: "Rp155.000" },
      { huruf: "E", teks: "Rp160.000" }
    ],
    kunci: "B"
  },
  {
    id: 45, kategori: "TIU",
    teks: "Seorang pengendara motor menempuh perjalanan dari kota A ke kota B sejauh 240 km. Ia mengendarai motor dengan kecepatan rata-rata 60 km/jam. Setelah menempuh perjalanan selama 2 jam, ia beristirahat selama 1 jam. Setelah itu, ia melanjutkan perjalanan dengan kecepatan rata-rata 80 km/jam hingga sampai di kota B. Berapa lama waktu total perjalanan dari kota A sampai kota B, termasuk waktu istirahat?",
    pilihan: [
      { huruf: "A", teks: "4 jam" },
      { huruf: "B", teks: "4,5 jam" },
      { huruf: "C", teks: "5 jam" },
      { huruf: "D", teks: "5,5 jam" },
      { huruf: "E", teks: "6 jam" }
    ],
    kunci: "B"
  },
  {
    id: 46, kategori: "TIU",
    teks: "Sebuah proyek diselesaikan oleh 24 orang yang bekerja selama 6 jam per hari. Jika proyek tersebut kemudian dibantu 12 orang, berapa selisih waktu yang dibutuhkan untuk menyelesaikan pekerjaan tersebut dibandingkan dengan kondisi awal?",
    pilihan: [
      { huruf: "A", teks: "1 jam" },
      { huruf: "B", teks: "1,5 jam" },
      { huruf: "C", teks: "2 jam" },
      { huruf: "D", teks: "2,5 jam" },
      { huruf: "E", teks: "3 jam" }
    ],
    kunci: "C"
  },
  {
    id: 47, kategori: "TIU",
    teks: "Pak Rudi membeli beras di pasar dengan harga Rp12.500 per kilogram. Jika Pak Rudi membeli 4 kilogram beras, berapa jumlah uang yang harus dibayarkan oleh Pak Rudi untuk beras tersebut?",
    pilihan: [
      { huruf: "A", teks: "Rp50.000" },
      { huruf: "B", teks: "Rp47.000" },
      { huruf: "C", teks: "Rp45.000" },
      { huruf: "D", teks: "Rp42.000" },
      { huruf: "E", teks: "Rp40.000" }
    ],
    kunci: "A"
  },
  {
    id: 48, kategori: "TIU",
    teks: "Bima memiliki jadwal olahraga sebanyak 3 kali seminggu, dan setiap kali latihan ia berlari selama 40 menit. Dengan asumsi waktu latihan Bima selalu konstan, manakah hubungan yang benar antara kuantitas X dan Y berikut berdasarkan informasi yang diberikan?\n\n<table style='border-collapse:collapse;margin:12px auto;'><thead><tr><th style='border:2px solid #333;padding:8px 24px;text-align:center;background:#f0f0f0;'>X</th><th style='border:2px solid #333;padding:8px 24px;text-align:center;background:#f0f0f0;'>Y</th></tr></thead><tbody><tr><td style='border:2px solid #333;padding:8px 24px;text-align:center;'>600 menit</td><td style='border:2px solid #333;padding:8px 24px;text-align:center;'>Waktu (dalam menit) yang Bima habiskan untuk berlari selama 5 minggu.</td></tr></tbody></table>",
    pilihan: [
      { huruf: "A", teks: "3X > 2Y" },
      { huruf: "B", teks: "3X < 2Y" },
      { huruf: "C", teks: "X = 2Y" },
      { huruf: "D", teks: "3X = 2Y" },
      { huruf: "E", teks: "Hubungan X dan Y tidak dapat ditentukan" }
    ],
    kunci: "A"
  },
  {
    id: 49, kategori: "TIU",
    teks: "Bimo mengantar bahan bangunan dari gudang ke proyek sejauh 180 km dengan kecepatan rata-rata 60 km/jam. Sementara itu, Raka berangkat dari gudang yang sama ke proyek yang sama dengan kecepatan rata-rata 45 km/jam dan tiba di proyek pada pukul 14.00 WIB.\n\nPukul berapa Bimo berangkat dari gudang agar tiba bersamaan dengan Raka?",
    pilihan: [
      { huruf: "A", teks: "09.00 WIB" },
      { huruf: "B", teks: "09.30 WIB" },
      { huruf: "C", teks: "10.00 WIB" },
      { huruf: "D", teks: "10.30 WIB" },
      { huruf: "E", teks: "11.00 WIB" }
    ],
    kunci: "E"
  },
  {
    id: 50, kategori: "TIU",
    teks: "360, 180, 60, ...., 3, 1/2",
    pilihan: [
      { huruf: "A", teks: "40" },
      { huruf: "B", teks: "30" },
      { huruf: "C", teks: "20" },
      { huruf: "D", teks: "15" },
      { huruf: "E", teks: "10" }
    ],
    kunci: "D"
  },
  {
    id: 51, kategori: "TIU",
    teks: "14, 14, 12, 24, ...., 60",
    pilihan: [
      { huruf: "A", teks: "20" },
      { huruf: "B", teks: "18" },
      { huruf: "C", teks: "5" },
      { huruf: "D", teks: "14" },
      { huruf: "E", teks: "15" }
    ],
    kunci: "A"
  },
  {
    id: 52, kategori: "TIU",
    teks: "-2, 2, 2, ...., 30, 210, 1890",
    pilihan: [
      { huruf: "A", teks: "-4" },
      { huruf: "B", teks: "6" },
      { huruf: "C", teks: "-5" },
      { huruf: "D", teks: "0" },
      { huruf: "E", teks: "24" }
    ],
    kunci: "B"
  },
  {
    id: 53, kategori: "TIU",
    teks: "Dalam satu minggu, empat konten kreator YouTube yaitu Andi, Bella, Citra, dan Dio mengunggah video edukatif. Setiap kali video mereka mendapat 1 like, nilainya dianggap 2 poin, sedangkan setiap 1 subscribe baru bernilai 3 poin. Data jumlah like dan subscribe yang diperoleh masing-masing kreator ditunjukkan pada tabel berikut." +
          "<img src='gambar/soal53.jpeg'></img> <br>" +
          "Berdasarkan data di atas, siapakah yang memperoleh jumlah nilai tertinggi?",
    pilihan: [
      { huruf: "A", teks: "Andi" },
      { huruf: "B", teks: "Bella" },
      { huruf: "C", teks: "Citra" },
      { huruf: "D", teks: "Dio" },
      { huruf: "E", teks: "Tidak ada" }
    ],
    kunci: "D"
  },
  {
    id: 54, kategori: "TIU",
    teks: "Delapan orang Rani, Sita, Bima, Dedi, Lala, Eko, Nia, dan Tono duduk mengelilingi meja persegi, dengan dua orang di setiap sisi meja. Rani duduk bersebelahan dengan Sita dan menghadap Dedi. Eko duduk di sebelah kanan Dedi, sedangkan Nia diantara Eko dan Lala. Tono duduk di sebelah kiri Bima, dan Bima tidak duduk bersebelahan dengan Lala." +
          " Berdasarkan keterangan tersebut, siapakah yang duduk di sebelah kanan Rani?",
    pilihan: [
      { huruf: "A", teks: "Sita" },
      { huruf: "B", teks: "Nia" },
      { huruf: "C", teks: "Tono" },
      { huruf: "D", teks: "Bima" },
      { huruf: "E", teks: "Lala" }
    ],
    kunci: "C"
  },
  {
    id: 55, kategori: "TIU",
    teks: "Di aula terdapat satu baris meja panjang dengan tujuh kursi; tujuh anggota tim yang duduk adalah Rafi, Lani, Bimo, Dewi, Sinta, Arga, dan Tono. Dewi duduk tepat di kursi tengah, Bimo duduk di antara Lani dan Dewi, Rafi duduk di sebelah kiri Lani. Sinta duduk tepat di kiri Arga; dan Tono duduk di salah satu kursi ujung. Siapakah yang duduk di posisi ke-6 dari kiri?",
    pilihan: [
      { huruf: "A", teks: "Rafi" },
      { huruf: "B", teks: "Lani" },
      { huruf: "C", teks: "Dewi" },
      { huruf: "D", teks: "Sinta" },
      { huruf: "E", teks: "Arga" }
    ],
    kunci: "E"
  },
  {
    id: 56, kategori: "TIU",
    teks: "Seorang kurir berangkat dari Gudang di A menuju toko di F, dari A ia bisa memilih jalur melalui B atau melalui C, jika ia lewat B maka bisa langsung ke F atau singgah dulu ke E sebelum ke F, sedangkan jika ia lewat C ia harus mampir ke D lalu langsung ke F. Berdasarkan kondisi tersebut, berapa banyak rute berbeda yang dapat ditempuh kurir dari gudang di A ke toko di F?",
    pilihan: [
      { huruf: "A", teks: "3" },
      { huruf: "B", teks: "4" },
      { huruf: "C", teks: "5" },
      { huruf: "D", teks: "6" },
      { huruf: "E", teks: "7" }
    ],
    kunci: "A"
  },
  {
    id: 57, kategori: "TIU",
    teks: "Perhatikan gambar berikut! <br>"+
          "<img src='gambar/soal57.jpeg' ></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "A"
  },
  {
    id: 58, kategori: "TIU",
    teks: "Perhatikan gambar berikut! <br>"+
          "<img src='gambar/soal58.jpeg' ></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "A"
  },
  {
    id: 59, kategori: "TIU",
    teks: "Perhatikan gambar berikut! <br>"+
          "<img src='gambar/soal59.jpeg' ></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B"
  },
  {
    id: 60, kategori: "TIU",
    teks: "Perhatikan gambar berikut! <br>"+
          "<img src='gambar/soal60.jpeg' ></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D"
  },
  {
    id: 61, kategori: "TIU",
    teks: "Perhatikan gambar berikut! <br>"+
          "<img src='gambar/soal61.jpeg' ></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "C"
  },
  {
    id: 62, kategori: "TIU",
    teks: "Perhatikan gambar berikut! <br>"+
          "<img src='gambar/soal62.jpeg' ></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "D"
  },
  {
    id: 63, kategori: "TIU",
    teks: "Perhatikan gambar berikut! <br>"+
          "<img src='gambar/soal63.jpeg' ></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "E"
  },
  {
    id: 64, kategori: "TIU",
    teks: "Perhatikan gambar berikut! <br>"+
          "<img src='gambar/soal64.jpeg' ></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "B"
  },
  {
    id: 65, kategori: "TIU",
    teks: "Perhatikan gambar berikut! <br>"+
          "<img src='gambar/soal65.jpeg' ></img>",
    pilihan: [
      { huruf: "A", teks: "A" },
      { huruf: "B", teks: "B" },
      { huruf: "C", teks: "C" },
      { huruf: "D", teks: "D" },
      { huruf: "E", teks: "E" }
    ],
    kunci: "C"
  },
  // ──────────────────────────────────────────
  // TES KARAKTERISTIK PRIBADI (TKP) - 45 SOAL BARU
  // ──────────────────────────────────────────
  {
    id: 66, kategori: "TKP",
    teks: "Anda adalah kepala seksi kesejahteraan di kecamatan yang baru menerima bantuan logistik pascabencana. Saat diperiksa, jumlah bantuan tidak sesuai dengan daftar penerima dan warga mulai menanyakan kejelasannya. Apa langkah Anda? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Menenangkan warga dan menjelaskan kondisi bantuan sambil berkoordinasi dengan instansi penyalur", poin: 5 },
      { huruf: "B", teks: "Meminta staf melakukan pendataan ulang dan menenangkan warga untuk bersabar menunggu hasilnya", poin: 2 },
      { huruf: "C", teks: "Menjelaskan bahwa keputusan bantuan sepenuhnya menjadi wewenang pimpinan dan bukan anda", poin: 1 },
      { huruf: "D", teks: "Menyampaikan bahwa data berasal dari pemerintah daerah dan perlu waktu untuk diverifikasi ulang", poin: 4 },
      { huruf: "E", teks: "Segera membagikan bantuan sesuai daftar agar penyaluran tidak tertunda sampai menunggu klarifikasi", poin: 3 }
    ],
    kunci: "A"
  },
  {
    id: 67, kategori: "TKP",
    teks: "Anda sebagai koordinator pelayanan di dinas sosial mendapati tim Anda mulai kehilangan semangat karena sering menerima permintaan mendadak dari berbagai instansi. Akibatnya, respons terhadap laporan masyarakat menjadi lebih lambat. Apa langkah Anda? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Mengadakan sesi refleksi dan motivasi ringan agar semangat kerja tim kembali terjaga", poin: 3 },
      { huruf: "B", teks: "Mengatur jadwal layanan bergilir supaya setiap anggota tim mendapat waktu istirahat yang cukup", poin: 2 },
      { huruf: "C", teks: "Mengusulkan penambahan tugas bantuan sementara agar beban tim dapat terbagi lebih proporsional", poin: 1 },
      { huruf: "D", teks: "Mengajak tim berdiskusi untuk menata ulang sistem kerja agar pembagian tugas lebih seimbang", poin: 5 },
      { huruf: "E", teks: "Menyusun daftar prioritas kerja bersama tim agar penanganan tetap fokus dan tidak saling tumpang tindih", poin: 4 }
    ],
    kunci: "D"
  },
  {
    id: 68, kategori: "TKP",
    teks: "Anda bertugas di kantor kelurahan. Saat jam pelayanan hampir selesai, datang seorang bapak tua membawa berkas pengajuan bantuan. Ia baru tiba karena rumahnya jauh dan kendaraan yang dimilikinya hanya sepeda. Apa sikap Anda? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Menyambut bapak tersebut dan langsung membantu memproses berkas karena memahami kesulitannya", poin: 5 },
      { huruf: "B", teks: "Mengarahkan bapak tersebut ke petugas piket agar berkasnya bisa segera dicek dan dicatat", poin: 3 },
      { huruf: "C", teks: "Meminta staf mencatat data bapak tersebut agar berkasnya diprioritaskan di awal pelayanan esok hari", poin: 2 },
      { huruf: "D", teks: "Menjelaskan bahwa waktu layanan hampir habis namun tetap menampung berkas agar dapat diproses malam itu juga", poin: 4 },
      { huruf: "E", teks: "Menenangkan bapak tersebut dan menjelaskan alur pelayanan agar ia lebih siap saat datang kembali keesokan harinya", poin: 1 }
    ],
    kunci: "A"
  },
  {
    id: 69, kategori: "TKP",
    teks: "Anda bekerja sebagai perawat di rumah sakit. Seorang kerabat pasien datang mengeluh karena merasa obat untuk keluarganya tidak diberikan tepat waktu. Padahal Anda sudah memberikan obat sesuai jadwal dan arahan dokter. Apa yang sebaiknya Anda lakukan? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Mencatat keluhan kerabat pasien untuk dilaporkan pada kepala ruangan agar dapat ditindaklanjuti sesuai kebijakan rumah sakit", poin: 1 },
      { huruf: "B", teks: "Menjelaskan dengan tenang bahwa jadwal pemberian obat teelah disesuaikan dengan instruksi dokter dan kebutuhan pasien", poin: 5 },
      { huruf: "C", teks: "Mengajak kerabat pasien berdiskusi bersama dokter jaga agar penjelasan lebih meyakinkan dan tidak menimbulkan salah paham", poin: 3 },
      { huruf: "D", teks: "Menenangkan kerabat pasien dan memastikan obat berikutnya sesuai waktu agar mereka tetap percaya pada pelayanan", poin: 2 },
      { huruf: "E", teks: "Mendengarkan keluhan keluarga pasien tersebut lalu memperlihatkan jadwal pemberian obat agar kerabat pasien memahami prosedurnya", poin: 4 }
    ],
    kunci: "B"
  },
  {
    id: 70, kategori: "TKP",
    teks: "Anda adalah ASN di Dinas Kependudukan yang sedang bertugas di pelayanan keliling. Seorang warga datang mengajukan pembuatan KTP-el, namun datanya belum muncul di sistem pusat karena gangguan jaringan. Warga tersebut perlu dokumen itu hari ini untuk keperluan penting. Apa yang Anda lakukan? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Menenangkan warga dan membuat surat keterangan sementara agar urusannya tetap bisa berjalan hari ini", poin: 5 },
      { huruf: "B", teks: "Menjelaskan kendala sistem dan meminta warga menunggu sampai jaringan pulih untuk memastikan data akuran", poin: 4 },
      { huruf: "C", teks: "Menghubungi petugas pusat untuk mempercepat sinkronisasi data agar proses segera selesai", poin: 3 },
      { huruf: "D", teks: "Menawarkan bantuan pengecekan manual di arsip lama agar identitas warga bisa diverifikasi", poin: 2 },
      { huruf: "E", teks: "Mencatat permohonan warga dan menjanjikan akan dihubungi segera setelah sistem kembali normal", poin: 1 }
    ],
    kunci: "A"
  },
  {
    id: 71, kategori: "TKP",
    teks: "Anda adalah ASN di kecamatan yang bertugas mengatur jadwal pelayanan administrasi terpadu ke beberapa sekolah. Salah satu sekolah mengeluh karena dua kali kegiatan pelayanan diundur tanpa pemberitahuan, padahal siswa sudah dikumpulkan. Apa langkah Anda? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Menyampaikan terima kasih atas laporan tersebut dan menyesuaikan jadwal baru setelah meninjau agenda kecamatan", poin: 4 },
      { huruf: "B", teks: "Mengonfirmasi ulang kebutuhan sekolah dan menjadwwalkan ulang setelah menerimah persetujuan pimpinan", poin: 3 },
      { huruf: "C", teks: "Menyusun jadwal gantian di minggu berikutnya agar kelihatan pelayanan tetap terlaksana walau sedikit tertunda", poin: 2 },
      { huruf: "D", teks: "Meminta maaf dan segera menyusun jadwal baru sambil memastikan komunikasi lebih teratur agar tidak terulang", poin: 5 },
      { huruf: "E", teks: "Menyampaikan kepada pihak sekolah bahwa perubahan jadwal merupakan bagian dari penyesuaian rutin kegiatan", poin: 1 }
    ],
    kunci: "D"
  },
  {
    id: 72, kategori: "TKP",
    teks: "Anda adalah petugas pelayanan di kelurahan. Seorang ibu lanjut usia datang mengurus kartu keluarga baru, namun ia kesulitan membaca formulir dan takut salah mengisi. Ia terlihat ragu untuk meminta bantuan. Apa yang Anda lakukan? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Memberikan contoh formulir yang sudah terisi agar ia bisa memahami cara pengisian dengan mudah", poin: 4 },
      { huruf: "B", teks: "Menawarkan pendampingan dari staf lain agar proses pengisian bisa lebih cepat dan nyaman", poin: 3 },
      { huruf: "C", teks: "Menyapa dengan ramah lalu membantu mengisi formulir sambil menjelaskan dengan sabar setiap bagian", poin: 5 },
      { huruf: "D", teks: "Mengarahkan ibu tersebut ke meja bantuan agar dibantu petugas yang khusus melayani warga lanjut usia", poin: 2 },
      { huruf: "E", teks: "Menjelaskan secara lisan bagian-bagian penting formulir agar ia bisa mencoba menulis sendiri dengan tenang", poin: 1 }
    ],
    kunci: "C"
  },
  {
    id: 73, kategori: "TKP",
    teks: "Anda bekerja sebagai staf akademik di sebuah perguruan tinggi. Seorang mahasiswa datang mengeluh karena dosennya belum memberikan surat rekomendasi untuk keperluan beasiswa, padahal sudah dijanjikan beberapa hari lalu. Tenggat pengumpulan berkas semakin dekat. Apa yang Anda lakukan? (Pelayanan Publik)",
    pilihan: [
      { huruf: "A", teks: "Menenangkan mahasiswa dan segera menghubungi dosen terkait untuk memastikan surat rekomendasi dapat diterbitkan tepat waktu", poin: 5 },
      { huruf: "B", teks: "Menyampaikan kepada mahasiswa bahwa Anda akan meneruskan keluhan ini ke bagian akademik fakultas untuk ditindaklanjuti", poin: 3 },
      { huruf: "C", teks: "Memberi saran kepada mahasiswa agar menghubungi dosennya kembali dengan sopan dan menyampaikan urgensi tenggat waktu", poin: 2 },
      { huruf: "D", teks: "Mencatat keluhan mahasiswa sebagai bahan evaluasi untuk meningkatkan koordinasi antara staf dan dosen", poin: 1 },
      { huruf: "E", teks: "Memeriksa status surat rekomendasi di sistem dan membantu mahasiswa menyiapkan dokumen lain sambil menuggu konfirmasi dari dosen", poin: 4 }
    ],
    kunci: "A"
  },
  {
    id: 74, kategori: "TKP",
    teks: "Anda adalah ASN di Kementerian Komunikasi yang bertugas merancang program publik untuk memperkuat kesadaran kebangsaan di tengah maraknya penyebaran paham radikal di media sosial. Banyak generasi muda yang mudah terpengaruh oleh narasi intoleransi karena kurangnya ruang dialog terbuka dan edukatif. Dalam situasi ini, langkah strategis apa yang sebaiknya Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengundang narasumber ahli untuk memberi kuliah umum tentang bahaya paham radikal", poin: 1 },
      { huruf: "B", teks: "Mengadakan pelatihan literasi digital agar masyarakat mampu mengenali konten radikal", poin: 2 },
      { huruf: "C", teks: "Menyusun kampanye nasional bertema keberagaman dengan lomba ide kreatif antar daerah", poin: 3 },
      { huruf: "D", teks: "Membentuk tim penggerak muda untuk menyebarkan pesan moderasi dan persatuan di media sosial", poin: 4 },
      { huruf: "E", teks: "Menyelenggarakan forum lintas komunitas untuk membahas isu kebangsaan dan toleransi bersama", poin: 5 }
    ],
    kunci: "E"
  },
  {
    id: 75, kategori: "TKP",
    teks: "Anda adalah seorang dosen di perguruan tinggi. Anda menyadari beberapa mahasiswa mulai terpengaruh oleh konten radikal di media sosial dan kurang mampu memilah informasi secara kritis. Anda ingin membantu mereka agar lebih bijak dan selektif dalam menerima informasi digital. Apa yang Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengajak mahasiswa berdiskusi terbuka tentang hoaks, ujaran kebencian, dan intoleransi secara saling menghormati", poin: 3 },
      { huruf: "B", teks: "Menyusun mata kuliah atau sesi perkuliahan yang mengintegrasikan literasi digital dan dampak sosial politik informasi", poin: 5 },
      { huruf: "C", teks: "Mendorong mahasiswa mengikuti pelatihan literasi digital dari lembaga berkompeten seperti Kominfo atau BNPT", poin: 2 },
      { huruf: "D", teks: "Mengajarkan cara membedakan fakta dan opini serta memverifikasi kebenaran informasi melalui sumber kredibel", poin: 4 },
      { huruf: "E", teks: "Meminta mereka untuk lebih bijak, kritis, dan menghargai keberagaman dalam aktivitas digital dalam kehidupan sehari-hari", poin: 1 }
    ],
    kunci: "B"
  },
  {
    id: 76, kategori: "TKP",
    teks: "Anda adalah pegawai negeri di lembaga pemasyarakatan. Anda mengetahui beberapa narapidana terlibat dalam aksi terorisme. Anda ingin menjalankan program deradikalisasi. Apa yang Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengajukan proposal ke pimpinan untuk izin dan anggaran program deradikalisasi", poin: 1 },
      { huruf: "B", teks: "Bekerja sama dengan BNPT, Kemenag, dan ormas moderat untuk mendapatkan metode dan narasumber", poin: 5 },
      { huruf: "C", teks: "Melakukan pendekatan persuasif kepada narapidana agar mau ikut program deradikarisasi", poin: 4 },
      { huruf: "D", teks: "Memberikan fasilitas dan insentif bagi peserta program seperti remisi atau bimbingan karier", poin: 2 },
      { huruf: "E", teks: "Melakukan evaluasi dan monitoring perkembangan serta melapor ke pihak terkait", poin: 3 }
    ],
    kunci: "B"
  },
  {
    id: 77, kategori: "TKP",
    teks: "Anda adalah Ketua organisasi kampus yang berfokus pada kegiatan sosial dan kebangsaan. Anda ingin mengajak anggota lain untuk berpartisipasi dalam program dialog lintas agama dan budaya yang diadakan oleh kampus guna memperkuat semangat toleransi. Namun, banyak anggota tampak kurang tertarik karena merasa kegiatan tersebut tidak relevan dengan aktivitas organisasi. Apa yang akan Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengajak beberapa anggota yang tertarik untuk menjadi panitia agar bisa menularkan semangat kepada yang lain", poin: 4 },
      { huruf: "B", teks: "Mengadakan pertemuan internal untuk menjelaskan pentingnya dialog lintas budaya bagi kehidupan berorganisasi", poin: 5 },
      { huruf: "C", teks: "Membuat kegiatan kolaboratif sederhana dengan organisasi kampus lain agar program lebih menarik", poin: 3 },
      { huruf: "D", teks: "Menyebarkan informasi program melalui media sosial organisasi tanpa menekankan kewajiban untuk ikut", poin: 1 },
      { huruf: "E", teks: "Menghubungi pihak kampus untuk meminta dukungan logistik dan publikasi agar kegiatan lebih banyak diminati", poin: 2 }
    ],
    kunci: "B"
  },
  {
    id: 78, kategori: "TKP",
    teks: "Anda tinggal di sebuah lingkungan yang warganya cukup beragam. Belakangan, Anda mengetahui ada seorang tetangga yang sering menyebarkan ajakan berpikir sempit dan menolak perbedaan melalui grup warga serta pertemuan kecil di rumahnya. Beberapa orang mulai terpengaruh dan menunjukkan sikap intoleran. Apa yang akan Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mendekati tetangga tersebut secara pribadi dengan cara yang sopan dan persuasif untuk memahami maksudnya", poin: 3 },
      { huruf: "B", teks: "Mengedukasi warga lain dengan mengadakan kegiatan bersama bertema toleransi dan kebersamaan", poin: 2 },
      { huruf: "C", teks: "Menyebarkan pesan positif melalui media sosial lingkungan agar warga tidak mudah terpengaruh ajakan radikan", poin: 1 },
      { huruf: "D", teks: "Mengajak tokoh masyarakat dan pemuda setempat berdialog untuk mencari cara bijak menangani penyebaran paham tersebut", poin: 4 },
      { huruf: "E", teks: "Melapor secara resmi kepada pihak berwewenang agar dilakukan pembinaan terhadap kegiatan yang berpotensi menimbulkan perpecahan", poin: 5 }
    ],
    kunci: "E"
  },
  {
    id: 79, kategori: "TKP",
    teks: "Anda adalah supervisor di perusahaan milik pemerintah. Dalam beberapa minggu terakhir, muncul perdebatan antar karyawan terkait isu agama yang menyebabkan suasana kerja menjadi tegang. Anda ingin memastikan perbedaan pandangan tidak berkembang menjadi sikap radikal. Apa yang akan Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Berkoordinasi dengan HR untuk menyampaikan panduan etika komunikasi lintas budaya dan agama", poin: 2 },
      { huruf: "B", teks: "Menyampaikan pesan umum tentang pentingnya saling menghormati melalui email resmi perusahaan", poin: 1 },
      { huruf: "C", teks: "Mengadakan dialog antar karyawan dengan menghadirkan moderator untuk membahas toleransi dan kerja sama", poin: 5 },
      { huruf: "D", teks: "Membentuk tim lintas divisi yang bertugas mengkampanyekan nilai keberagaman di lingkungan kerja", poin: 4 },
      { huruf: "E", teks: "Menghimbau seluruh karyawan untuk menjaga profesionalisme dan tidak membahas isu sensitif di kantor", poin: 5 }
    ],
    kunci: "C"
  },
  {
    id: 80, kategori: "TKP",
    teks: "Anda adalah pegawai HR di sebuah lembaga swasta. Dalam rekrutmen pegawai baru, Anda menemukan seorang pelamar yang aktif di komunitas dengan pandangan keagamaan yang cukup keras. Namun, ia memiliki kompetensi tinggi di bidangnya. Anda ingin memastikan lingkungan kerja tetap terbebas dari paham radikal. Apa langkah Anda? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Menerima pelamar tersebut dengan catatan akan diberikan pembinaan dan pelatihan kebangsaan setelah diterima", poin: 4 },
      { huruf: "B", teks: "Menunda keputusan penerima sambil memantau lebih lanjut aktivitas pelamar di lingkungan digital", poin: 1 },
      { huruf: "C", teks: "Berkonsultasi dengan pimpinan untuk memastikan keputusan sesuai kebijakan keberagaman yang berlaku", poin: 3 },
      { huruf: "D", teks: "Menambahkan sesi pembekalan moderasi beragama bagi semua pegawai baru tanpa menyebut individu tertentu", poin: 2 },
      { huruf: "E", teks: "Melakukan wawancara tambahan untuk memastikan nilai dan pandangannya sesuai dengan prinsip keberagaman perusahaan", poin: 5 }
    ],
    kunci: "E"
  },
  {
    id: 81, kategori: "TKP",
    teks: "Anda aktif di media sosial dan sering membuat konten seputar isu kebangsaan. Belakangan, Anda melihat banyak akun yang menyebarkan ajakan kebencian dan menyinggung perbedaan antar kelompok. Beberapa pengikut meminta Anda ikut menanggapi hal itu. Apa yang sebaiknya Anda lakukan? (Anti Radikalisme)",
    pilihan: [
      { huruf: "A", teks: "Mengadakan siaran langsung bersama teman dari berbagai latar belakang untuk membahas pentingnya toleransi", poin: 4 },
      { huruf: "B", teks: "Membuat konten menarik yang mengajak orang tetap rukun dan menghargai perbedaan", poin: 5 },
      { huruf: "C", teks: "Menulis postingan singkat yang menjelaskan dampak buruk kebencian dan ajakan memecah belah", poin: 1 },
      { huruf: "D", teks: "Melaporkan unggahan provokatif ke pihak media sosial agar tidak semakin menyebar", poin: 3 },
      { huruf: "E", teks: "Mengajak pembuat konten lain bekerja sama membuat kampanye damai di dunia digital", poin: 2 }
    ],
    kunci: "B"
  },
  {
    id: 82, kategori: "TKP",
    teks: "Anda adalah ketua RT disebuah lingkungan. Di lingkungan tempat Anda tinggal, ada warga yang memiliki cara dan waktu ibadah yang berbeda dengan kebanyakan warga lain. Beberapa anggota masyarakat mulai mempertanyakan perbedaan itu. Apa yang akan Anda lakukan? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Mendekati warga yang berbeda tersebut untuk memastikan mereka tetap merasa diterima di lingkungan", poin: 1 },
      { huruf: "B", teks: "Mengahaj warga berdiskusi agar saling memahami perbedaan cara beribadah dan menjaga kerukunan antaraumat", poin: 5 },
      { huruf: "C", teks: "Mendorong pengurus lingkungan membuat kegiatan bersama agar hubungan warga tetap harmonis", poin: 4 },
      { huruf: "D", teks: "Menyampaikan kepada warga lain bahwa perbedaan tersebut lumrah selama tidak menggangu orang lain", poin: 2 },
      { huruf: "E", teks: "Mengingatkan warga untuk tidak mempermasalahkan hal yang bersifat keyakinan pribadi", poin: 3 }
    ],
    kunci: "B"
  },
  {
    id: 83, kategori: "TKP",
    teks: "Anda baru bergabung di sebuah kantor dengan rekan kerja dari berbagai daerah. Salah satu rekan sering menggunakan logat daerah yang sulit Anda pahami saat rapat, sementara rekan lain tampak kurang sabar mendengarkannya. Apa yang Anda lakukan? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Mengobrol santai dengan rekan tersebut di luar rapat agar ia tidak merasa tersisihkan dalam lingkungan kerja", poin: 1 },
      { huruf: "B", teks: "Menyarankan tim membuka kesepakatan penggunaan bahasa yang mudah dipahami bersama", poin: 3 },
      { huruf: "C", teks: "Mengapresiasi keberagaman bahasa dalam tim dan mengamati perbedaan logat yang ada", poin: 2 },
      { huruf: "D", teks: "Mengajak rekan tersebut berbicara lebih perlahan dan jelas agar komunikasi berjalan lancar", poin: 4 },
      { huruf: "E", teks: "Membantu menerjemahkan atau menjelaskan maksud rekan tersebut kepada anggota lain", poin: 5 }
    ],
    kunci: "E"
  },
  {
    id: 84, kategori: "TKP",
    teks: "Anda sedang bekerja dalam kelompok proyek kampus yang anggotanya berasal dari berbagai daerah. Salah satu teman selalu mengajak makan bersama di tempat tertentu, tetapi sebagian anggota lain menolak karena perbedaan kebiasaan makanan karena faktor budaya. Situasi mulai terasa canggung. Apa yang akan Anda lakukan? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Menyarankan agar makan bersama tetap dilakukan di tempat yang bergantian agar adil", poin: 3 },
      { huruf: "B", teks: "Mengajak semua anggota mencari tempat makan yang bisa menyesuaikan selera setiap orang", poin: 5 },
      { huruf: "C", teks: "Mendorong kelompok tetap fokus pada proyek dan tidak mempermasalahkan urusan makan", poin: 3 },
      { huruf: "D", teks: "Mengikuti pilihan dari mayoritas agar tidak menimbulkan konflik yang mengganggu proyek", poin: 1 },
      { huruf: "E", teks: "Menawarkan diri untuk memesan makanan yang beragam agar semua merasa nyaman", poin: 4 }
    ],
    kunci: "B"
  },
  {
    id: 85, kategori: "TKP",
    teks: "Anda baru dipindahkan tugas ke sebuah daerah dan disambut hangat oleh warga setempat dalam acara penyambutan. Saat upacara, Anda ditawari makanan khas daerah tersebut sebagai bentuk penghormatan. Namun, makanan itu mengandung bahan yang tidak sesuai dengan keyakinan pribadi Anda. Apa yang akan Anda lakukan? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Meminta bantuan rekan setempat untuk membantu menjelaskan alasan Anda menolak makanan tersebut agar warga memahami tanpa merasa tersinggung", poin: 2 },
      { huruf: "B", teks: "Menerima jamuan tersebut dalam porsi kecil agar tidak menyinggung perasaan warga yang menjamu", poin: 3 },
      { huruf: "C", teks: "Menolak dengan sopan sambil menjelaskan bahwa Anda sangat menghargai jamuan tersebut namun memiliki batasan makanan tertentu", poin: 5 },
      { huruf: "D", teks: "Mencicipi sedikit hidangan tersebut karena berusaha menghormati adat istiadat sekitar walaupun hal tersebut bertentangan dengan keyakinan pribadi", poin: 1 },
      { huruf: "E", teks: "Menjelaskan dengan ramah kepada panitia bahwa Anda akan tetap ikut makan bersama tetapi memilih makanan lain yang tersedia", poin: 4 }
    ],
    kunci: "C"
  },
  {
    id: 86, kategori: "TKP",
    teks: "Anda adalah manajer proyek di sebuah instansi pemerintah yang sedang menyiapkan program digitalisasi layanan publik. Anda harus bekerja sama dengan tim IT, tim pelayanan, dan tim komunikasi agar program berjalan lancar. Apa yang akan Anda lakukan untuk menjaga kolaborasi yang efektif di antara tim-tim tersebut? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Menetapkan alur kerja yang jelas agar setiap tim fokus pada tanggung jawabnya namun tetap saling terhubung", poin: 2 },
      { huruf: "B", teks: "Menyerahkan koordinasi antartim kepada satu koordinator agar pekerjaan tetap terarah tanpa banyak pertemuan", poin: 1 },
      { huruf: "C", teks: "Membentuk grub komunikasi lintas tim untuk mempermudah pertukaran informasi harian secara cepat dan efisien", poin: 4 },
      { huruf: "D", teks: "Mengadakan rapat koordinasi rutin agar setiap tim menyampaikan perkembangan dan kendala secara terbuka", poin: 5 },
      { huruf: "E", teks: "Mendorong setiap tim untuk saling memahami peran dan tantangan masin-masing melalui kegiatan internal bersama", poin: 3 }
    ],
    kunci: "D"
  },
  {
    id: 87, kategori: "TKP",
    teks: "Anda adalah koordinator pusat bantuan sosial yang bertugas memastikan distribusi bantuan berjalan lancar dan tepat sasaran. Anda perlu bekerja sama dengan pemerintah daerah, relawan, dan lembaga mitra agar penyaluran bantuan berlangsung efektif. Bagaimana cara Anda membangun hubungan kerja yang baik dengan seluruh pihak tersebut? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Mengadakan pertemuan rutin lintas lembaga untuk menyamakan data, jadwal, dan mekanisme distribusi bantuan", poin: 5 },
      { huruf: "B", teks: "Mengunjungi daerah penerima bantuan secara berkala untuk memahami kendala dan mempererat koordinasi langsung", poin: 2 },
      { huruf: "C", teks: "Menginisiasi forum evaluasi bersama setelah setiap tahap distribusi untuk menilai hasil kerja dan memperkuat sinergi tim", poin: 1 },
      { huruf: "D", teks: "Menjalin komunikasi terbuka dengan setiap pihak dan menampung masukan untuk memperbaiki sistem penyaluran", poin: 4 },
      { huruf: "E", teks: "Membentuk beberapa kelompok koordinasi agar informasi lapangan bisa dibagikan cepat dan transparan", poin: 3 }
    ],
    kunci: "A"
  },
  {
    id: 88, kategori: "TKP",
    teks: "Anda adalah ketua kelompok dalam proyek kampus. Salah satu anggota kelompok Anda adalah mahasiswa tunanetra yang aktif dan cerdas, namun beberapa teman enggan berkolaborasi karena khawatir proses kerja menjadi lambat. Apa yang akan Anda lakukan? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Mengajak seluruh anggota berdiskusi untuk membagi peran sesuai kemampuan agar semua dapat berkontribusi optima;", poin: 5 },
      { huruf: "B", teks: "Menjelaskan kepada anggota kelompok bahwa keberagaman kemampuan justru dapat memperkuat kerja tim", poin: 4 },
      { huruf: "C", teks: "Membantu mahasiswa tunanetra tersebut secara pribadi agar tidak tertinggal dalam tugas kelompok", poin: 3 },
      { huruf: "D", teks: "Meminta dosen pembimbing memberi arahan tentang cara terbaik bekerja dengan anggota berkebutuhan khusus", poin: 2 },
      { huruf: "E", teks: "Mengatur strategi proyek yang fleksibel tanpa melibatkan mahasiswa tunanetra tersebut", poin: 1 }
    ],
    kunci: "A"
  },
  {
    id: 89, kategori: "TKP",
    teks: "Anda adalah anggota karang taruna yang sedang mempersiapkan acara ulang tahun desa. Dalam rapat, beberapa anggota berselisih karena perbedaan pendapat tentang konsep acara. Situasi mulai memanas dan diskusi tidak produktif. Apa langkah Anda? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Menengahi dengan mengajak anggota fokus mencari solusi dan menggabungkan ide terbaik dari semua pihak", poin: 5 },
      { huruf: "B", teks: "Mengusulkan agar rapat dijeda sementara supaya semua bisa menenangkan diri dulu", poin: 2 },
      { huruf: "C", teks: "Mengusulkan agar ide yang paling disetujui oleh ketua langsung dijalankan tanpa memperpanjang perdebatan", poin: 1 },
      { huruf: "D", teks: "Mengusulkan voting agar keputusan bisa segera diambil dan perselisihan berakhir", poin: 3 },
      { huruf: "E", teks: "Mengingatkan semua anggota bahwa tujuan utama kegiatan adalah kebersamaan dan pelayanan untuk warga", poin: 4 }
    ],
    kunci: "A"
  },
  {
    id: 90, kategori: "TKP",
    teks: "Anda adalah mahasiswa baru di kampus luar daerah. Sebagian teman sering berbicara dengan bahasa daerah, sehingga Anda kesulitan memahami percakapan mereka. Apa yang Anda lakukan? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Menghindari pertemuan kelompok karena merasa sulit mengikuti pembicaraan mereka dengan lancar", poin: 1 },
      { huruf: "B", teks: "Belajar memahami bahasa mereka sedikit demi sedikit agar bisa berbaur dan berkomunikasi lebih baik", poin: 5 },
      { huruf: "C", teks: "Meminta dengan sopan agar mereka menggunakan bahasa Indonesia ketika Anda ikut dalam percakapan", poin: 3 },
      { huruf: "D", teks: "Bertanya kepada teman lain yang paham arti percakapan agar tidak salah mengerti dan tetap bisa terlibat", poin: 2 },
      { huruf: "E", teks: "Mengikuti percakapan mereka sebisanya sambil mencoba menebak makna berdasarkan konteks pembicaraan", poin: 4 }
    ],
    kunci: "B"
  },
  {
    id: 91, kategori: "TKP",
    teks: "Anda mengikuti forum diskusi yang membahas isu sosial. Salah satu peserta berbicara dengan nada tinggi dan menyinggung kelompok tertentu. Bagaimana respons Anda? (Jejaring Kerja)",
    pilihan: [
      { huruf: "A", teks: "Menenangkan suasana dan mengalihkan pembahasan ke soslusi yang lebih membangun dan inklusif", poin: 4 },
      { huruf: "B", teks: "Membiarkan peserta tersebut berbicara sampai selesai sebelum memberikan tanggapan yang menyejukkan", poin: 2 },
      { huruf: "C", teks: "Mengusulkan kepada moderator agar menertibkan jalan diskusi supaya tidak semakin tagang", poin: 3 },
      { huruf: "D", teks: "Mengingatkan dengan sopan agar diskusi tetap fokus pada topik tanpa menyinggung pihak manapun", poin: 2 },
      { huruf: "E", teks: "Diam saja agar tidak ikut terlibat dalam perdebatan yang berpotensi menimbulkan kesalahpahaman", poin: 1 }
    ],
    kunci: "D"
  },
  {
    id: 92, kategori: "TKP",
    teks: "Anda bekerja sebagai ketua divisi di instansi yang mengadakan rapat mendekati waktu ibadah bagi sebagian rekan. Mereka meminta izin untuk jeda sebentar. Apa yang Anda lakukan? (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Melanjutkan rapat seperti biasa dan menyampaikan bahwa mereka harus memilih antara rapat dan ibadah", poin: 1 },
      { huruf: "B", teks: "Mengusulkan agar rapat dijadwal ulang supaya semua bisa berpartisipasi tanpa terganggu waktu ibadah", poin: 4 },
      { huruf: "C", teks: "Menyialahkan rekan yang ingin beribadah meninggalkan rapat sejenak lalu melanjutkan setelah selesai", poin: 5 },
      { huruf: "D", teks: "Mencatat hasil rapat untuk mereka agar tetap mengetahui keputusan meskipun tidak hadir sementara", poin: 3 },
      { huruf: "E", teks: "Menyampaikan kepada pimpinan agar membuat jadwal yang tidak berdekatan dengan waktu ibadah", poin: 2 }
    ],
    kunci: "C"
  },
  {
    id: 93, kategori: "TKP",
    teks: "Di lingkungan tempat Anda tinggal, muncul perdebatan karena perbedaan tradisi antar suku menjelang perayaan daerah. Apa langkah terbaik Anda? (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Mengusulkan agar setiap kelompok diberi kesempatan menampilkan tradisi mereka secara bergiliran di acara", poin: 4 },
      { huruf: "B", teks: "Meminta tokoh masyarakat membantu menengahi agar suasana tetap aman dan kegiatan tetap terlaksana dengan efektif", poin: 3 },
      { huruf: "C", teks: "Mengikuti tradisi yang paling dominan agar acara segera terlaksana tanpa memperpanjang perdebatan di tengah warga", poin: 1 },
      { huruf: "D", teks: "Mengajak perwakilan tiap kelompok duduk bersama untuk mencari bentuk perayaan yang dapat diterima semua pihak", poin: 5 },
      { huruf: "E", teks: "Mengingatkan warga agar fokus pada tujuan perayaan bersama dan tidak memperbesar perbedaan antar kelompok", poin: 2 }
    ],
    kunci: "D"
  },
  {
    id: 94, kategori: "TKP",
    teks: "Anda bertugas di daerah yang sedang mempersiapkan upacara adat. Warga berbeda pendapat tentang siapa yang berhak memimpin acara. Apa langkah terbaik anda",
    pilihan: [
      { huruf: "A", teks: "Tidak ikut campur dalam urusan dan keputusan karena hal tersebut merupakan urusan adat dan masyarakat setempat", poin: 1 },
      { huruf: "B", teks: "Mengusulkan agar acara tetap berjalan dengan panitia sementara sambil menunggu keputusan resmi", poin: 3 },
      { huruf: "C", teks: "Menunda kegiatan hingga ada kesepakatan agar tidak menimbulkan pertentangan di antara warga", poin: 2 },
      { huruf: "D", teks: "Menyerahkan keputusan kepada tokoh adat tertua untuk menentukan pemimpin upacara secara bijaksana", poin: 4 },
      { huruf: "E", teks: "Memfasilitasi musyawarah agar semua pihak dapat menyampaikan pendapat dan mencapai kesepakatan bersama", poin: 5 }
    ],
    kunci: "E"
  },
  {
    id: 95, kategori: "TKP",
    teks: "Anda baru pindah ke rumah kontrakan. Tetangga sering mengadakan latihan musik di malam hari, membuat Anda sulit beristirahat. Apa yang Anda lakukan? (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Mendatangi tetangga dengan sopan untuk mengusulkan waktu latihan yang tidak mengganggu lingkungan", poin: 5 },
      { huruf: "B", teks: "Menyampaikan keluhan melalui ketua RT agar dapat dibicarakan bersama seluruh warga sekitar", poin: 4 },
      { huruf: "C", teks: "Menyampaikan keluhan melalui kepala desa agar dapat disampaikan kepada Ketua RT", poin: 3 },
      { huruf: "D", teks: "Menggunakan alat peredam suara di kamar agar tetap bisa beristirahat tanpa mengganggu orang lain", poin: 2 },
      { huruf: "E", teks: "Membiarkan kegiatan tersebut berlangsung karena tidak ingin memperpanjang persoalan di lingkungan baru", poin: 1 }
    ],
    kunci: "A"
  },
  {
    id: 96, kategori: "TKP",
    teks: "Anda menghadiri acara resmi di daerah yang memiliki aturan berpakaian adat sebagai tanda hormat. Namun, beberapa rekan datang dengan pakaian kasual. Apa sikap Anda? (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Tidak menegur rekan karena menilai penampilan bukan hal yang perlu dibahas dalam kegiatan resmi", poin: 1 },
      { huruf: "B", teks: "Mengingatkan rekan dengan sopan tentang pentingnya menghormati budaya setempat dalam setiap kegiatan", poin: 5 },
      { huruf: "C", teks: "Menyampaikan kepada panitia bahwa ketidaksesuaian pakaian tidak disengaja agar suasana tetap kondusif", poin: 4 },
      { huruf: "D", teks: "Mengikuti jalannya acara seperti biasa agar tanpa mempermasalahkan perbedaan penampilan antar peserta", poin: 3 },
      { huruf: "E", teks: "Mengusulkan agar panitia menyampaikan aturan pakaian dengan lebih jelas untuk acara berikutnya", poin: 2 }
    ],
    kunci: "B"
  },
  {
    id: 97, kategori: "TKP",
    teks: "Di media sosial kantor, seorang rekan menulis komentar bercanda yang menyinggung budaya daerah tertentu. Beberapa orang mulai mempermasalahkannya. Apa langkah Anda sebagai kepala personalia? (Sosial Budaya)",
    pilihan: [
      { huruf: "A", teks: "Menyampaikan masalah tersebut kepada atasan agar diberikan pengarahan secara langsung kepadanya", poin: 2 },
      { huruf: "B", teks: "Membiarkan situasi berlalu karena yakin masalah tersebut akan selesai dengan sendirinya seiring waktu", poin: 1 },
      { huruf: "C", teks: "Mengajak rekan tersebut meminta maaf secara terbuka dan menjelaskan maksudnya dengan cara yang sopan", poin: 5 },
      { huruf: "D", teks: "Menyarankan agar komentar tersebut segera dihapus sebelum menimbulkan konflik yang lebih besar", poin: 3 },
      { huruf: "E", teks: "Menghubungi rekan tersebut secara pribadi untuk mengingatkan dampak dari ucapannya di media seosial", poin: 4 }
    ],
    kunci: "C"
  },
  {
    id: 98, kategori: "TKP",
    teks: "Anda bekerja di bagian layanan publik. Divisi Anda diminta mengintegrasikan chatbot untuk pelayanan pelanggan. Namun beberapa rekan masih ragu akan keefektifannya. Apa yang Anda lakukan? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Menjelaskan manfaat chatbot melalui contoh nyata agar rekan memahami peningkatan pelayanan yang bisa dicapai", poin: 5 },
      { huruf: "B", teks: "Membiarkan rekan yang belum siap menggunakan meetode lama terlebih dahulu sambil chatbot mulai digunakan", poin: 1 },
      { huruf: "C", teks: "Mengajak rekan mencoba fitur chatbot secara langsung untuk melihat bagaimana sistem dapat membantu tugas mereka", poin: 4 },
      { huruf: "D", teks: "Mengumpulkan masukan dari rekan untuk menyesuaikan chatbot dengan kebutuhan layanan yang sudah berjalan", poin: 3 },
      { huruf: "E", teks: "Menunggu petunjuk lanjutan dari pimpinan sebelum memulai pengenalan chatbot ke seluruh rekan kerja", poin: 2 }
    ],
    kunci: "A"
  },
  {
    id: 99, kategori: "TKP",
    teks: "Tim Anda menggunakan perangkat kolaboratif daring, namun sering mengalami eror sinkronisasi. tindakan Anda?",
    pilihan: [
      { huruf: "A", teks: "Membiarkan tim menggunakan aplikasi sepeerti biasa meskipun aplikasi tersebut sering eror", poin: 1 },
      { huruf: "B", teks: "Mengusulkan untuk beralih ke metode komunikasi via email saja agar tidak ada pekerjaan yang tertunda", poin: 3 },
      { huruf: "C", teks: "Melaporkan samalah ke penyedia platform dan menyusun prosedur kerja sementara secara manual", poin: 5 },
      { huruf: "D", teks: "Menyimpan file kerja dalam dua versi sebagai cadangan saat sinkronisasi gagal", poin: 2 },
      { huruf: "E", teks: "Mendorong tim untuk menyusun laporan bug dan menyampaikan ke pihak vendor", poin: 4 }
    ],
    kunci: "C"
  },
  {
    id: 100, kategori: "TKP",
    teks: "Anda bekerja sebagai teknisi perangkat lunak. Suatu hari Anda mendapat laporan bahwa sistem layanan publik tiba-tiba berhenti berfungsi. Analisis awal menunjukkan server kelebihan beban. Tindakan Anda? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Menyampaikan kepada pimpinan bahwa server sudah terlalu tua untuk beban saat ini", poin: 3 },
      { huruf: "B", teks: "Menghidupkan ulang sistem lalu menunggu perkembangan selanjutnya", poin: 2 },
      { huruf: "C", teks: "Mengalihkan akses ke server cadangan tanpa memberi tahu pengguna", poin: 4 },
      { huruf: "D", teks: "Menunda semua layanan hingga pemeliharaan besar bisa dilakukan", poin: 1 },
      { huruf: "E", teks: "Menambah kapasitas server sementara dan mencari akar penyebabnya", poin: 5 }
    ],
    kunci: "E"
  },
  {
    id: 101, kategori: "TKP",
    teks: "Anda adalah pegawai pelayanan perizinan yang mulai menerapkan antrean digital. Namun sebagian warga menolak karena belum terbiasa menggunakan teknologi. Apa yang Anda lakukan? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Menyediakan meja bantuan untuk membantu warga mendaftarkan antrean digital sambil memberi penjelasan kepada mereka", poin: 4 },
      { huruf: "B", teks: "Menawarkan pilihan antrean manual sementara waktu sambil mengajak warga perlahan beralih ke sistem digital sesuai kesiapan mereka", poin: 4 },
      { huruf: "C", teks: "Membuat panduan visual yang jelas di area pelayanan sehingga warga dapat mengikuti langkah pendaftaran antrean digital secara mandiri", poin: 2 },
      { huruf: "D", teks: "Meminta warga untuk mempelajari pelayanan perizinan digital lewat video tutorial youtube secara mandiri", poin: 1 },
      { huruf: "E", teks: "Menjelaskan cara penggunaan antrean digital secara sederhana dan menyediakan pendampingan secara langsung kepada warga", poin: 5 }
    ],
    kunci: "E"
  },
  {
    id: 102, kategori: "TKP",
    teks: "Anda baru dipindahkan dan divisi masih sering bertukar dokumen melalui aplikasi pribadi. Bagaimana Anda menyikapi situasi tersebut? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Membuat kesepakatan format dokumen yang sama supaya e-office dapat digunakan dengan lebih konsisten", poin: 2 },
      { huruf: "B", teks: "Mencatat kendala yang dihadapi lalu menyimpannya untuk dicari solusi sebagai bahan evaluasi pribadi", poin: 1 },
      { huruf: "C", teks: "Mendorong penggunaan e-office resmi sambil membantu mengunggah dokumen agar transisi berjalan lebih mudah", poin: 5 },
      { huruf: "D", teks: "Mengajak rekan mengikuti pelatihan internal singkat untuk memahamii penggunaan sistem e-office dengan benar", poin: 4 },
      { huruf: "E", teks: "Menyusun folder terstruktur di e-office agar semua dokumen dapat diakses mudah secara terpusat oleh tim", poin: 3 }
    ],
    kunci: "C"
  },
  {
    id: 103, kategori: "TKP",
    teks: "Instansi Anda mulai menerapkan tanda tangan digital. Namun sebagian pegawai merasa kurang percaya pada legalitasnya. Sikap Anda? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Membagikan informasi resmi regulasi pemerintah mengenal legalitas tanda tangan digital untuk menambah kepercayaan tim", poin: 4 },
      { huruf: "B", teks: "Mengusulkan uji coba pada dokumen internal agar rekan dapat melihat prosesnya berjalan aman dan valid", poin: 3 },
      { huruf: "C", teks: "Mengajak bagian hukum memberi sosialisasi mengenal keabsahan dan keamanan penggunaan tanda tangan digital", poin: 5 },
      { huruf: "D", teks: "Mendorong transisi bertahap dengan tetap memberi ruang bagi metode lama sehingga semua dapat beradaptasi", poin: 1 },
      { huruf: "E", teks: "Menyediakan panduan proses verifikasi sehingga rekan dapat memvalidasi dokumen digital secara mandiri", poin: 2 }
    ],
    kunci: "C"
  },
  {
    id: 104, kategori: "TKP",
    teks: "Anda sedang bekerja di kantor dan tiba-tiba muncul peringatan keamanan di komputer Anda yang menunjukkan ada aktivitas malware yang berpotensi merusak data. Apa langkah pertama yang sebaiknya Anda lakukan? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Menghubungi tim IT dan segera memutus jaringan komputer agar potensi ancaman tidak menyebar ke sistem lainnya", poin: 5 },
      { huruf: "B", teks: "Memastikan seluruh aplikasi ditutup dengan aman sambil menjaga komputer tetap menyala untuk investigasi forensik digital", poin: 2 },
      { huruf: "C", teks: "Menyampaikan informasi awal kepada rekan kerja agar mereka juga meningkatkan kewaspadaan terhadap ancaman serupa", poin: 1 },
      { huruf: "D", teks: "Mengunci akses komputer dan mengamankan perangkat sambil memastikan tidak ada aktivitas tambahan sampai bantuan datang", poin: 4 },
      { huruf: "E", teks: "Mengambil catatan tampilan peringatan sebagai bukti awal agar tim IT dapat menganalisis sumber permasalahan dengan tepat", poin: 3 }
    ],
    kunci: "A"
  },
  {
    id: 105, kategori: "TKP",
    teks: "Dalam sebuah proyek kerja sama antarinstansi, Anda ditunjuk menjadi pengelola dokumen digital bersama yang dapat diakses oleh semua tim. Namun beberapa anggota tim mengedit dokumen sembarangan tanpa koordinasi. Apa yang akan Anda lakukan? (TIK)",
    pilihan: [
      { huruf: "A", teks: "Mengunci dokumen agar hanya Anda yang bisa mengeditnya untuk menjaga keteraturan", poin: 3 },
      { huruf: "B", teks: "Membuat salinan cadangan setiap hari tanpa mengubah cara kerja tim", poin: 2 },
      { huruf: "C", teks: "Menyampaikan kepada pimpinan agar membatasi akses hanya pada orang tertentu", poin: 4 },
      { huruf: "D", teks: "Membiarkan saja karena semua anggota tim seharusnya bertanggung jawab", poin: 1 },
      { huruf: "E", teks: "Menyusun aturan penggunaan dokumen digital dan membagikannya ke semua anggota tim", poin: 5 }
    ],
    kunci: "E"
  },
  {
    id: 106, kategori: "TKP",
    teks: "Anda adalah ketua panitia acara wisuda fakultas. Di tengah persiapan yang sudah padat, pimpinan universitas meminta Anda menghadiri rapat penting mengenai perubahan teknis acara wisuda tahun ini. Apa yang Anda lakukan? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Tetap melanjukan seluruh persiapan acara wisuda karena waktu pelaksanaan sudah sangat dekat dan membutuhkan perhatian penuh", poin: 1 },
      { huruf: "B", teks: "Mengajukan pada pimpinan agar rapat dijadwalkan ulang setelah persiapan acara selesai agar fokus Anda tidak terpecah belah", poin: 3 },
      { huruf: "C", teks: "Mengutus wakil panitia untuk menghadiri rapat sehingga infomrasi tetap diterima sambil Anda menyelesaikan persiapan utama", poin: 4 },
      { huruf: "D", teks: "Menghentikan sementara persiapan dan menghadiri rapat acara agar berjalan sesuai kebijakan teknis terbaru dari universitas", poin: 5 },
      { huruf: "E", teks: "Menghadiri rapat namun meminta pembahasan dibuat ringkas agar segera dapat kembali ke persiapan acara", poin: 2 }
    ],
    kunci: "D"
  },
  {
    id: 107, kategori: "TKP",
    teks: "Anda baru saja menerima beberapa permintaan laporan dari tiga divisi berbeda. Semua laporan diminta dikirim pada hari yang sama dan masing-masing memiliki tingkat urgensi yang berbeda. Apa langkah Anda untuk memastikan semua tugas dapat terselesaikan dengan baik? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Menyelesaikan laporan yang paling sederhana terlebih dahulu agar sebagian pekerjaan dapat segera diserahkan", poin: 3 },
      { huruf: "B", teks: "Menyusun daftar prioritas berdasarkan tenggat dan dampak setiap laporan lalu mengerjakannya sesuai urutan urgensi", poin: 5 },
      { huruf: "C", teks: "Mengidentifikasi bagian pekerjaan yang bisa didistribusikan ke rekan tim sehingga Anda dapat fokus pada bagian yang paling kritis", poin: 4 },
      { huruf: "D", teks: "Mengerjakan seluruh laporan secara bersamaan meskipun ada kemungkinan beberapa tidak selesai tepat waktu", poin: 2 },
      { huruf: "E", teks: "Menyelesaikan laporan secara bergantian tanpa urutan khusus agar semuanya dapat berjalan dalam waktu yang sama", poin: 1 }
    ],
    kunci: "B"
  },
  {
    id: 108, kategori: "TKP",
    teks: "Anda diminta menyiapkan proposal kerja sama yang harus segera dikirim ke mitra. Namun beberapa data terbaru dari divisi lain belum Anda terima. Apa langkah yang paling tepat Anda lakukan? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Menghentikan penyusunan proposal dan menjelaskan bahwa pekerjaan belum bisa diselesaikan karena datanya belum tersedia", poin: 1 },
      { huruf: "B", teks: "Menghubungi atasan untuk menjelaskan kondisi saat ini dan meminta waktu tambahan agar data bisa dilengkapi terlebih dahulu", poin: 4 },
      { huruf: "C", teks: "Membuat proposal dengan informasi yang ada lalu menambahkan data setelahnya apabila memang diminta oleh atasan", poin: 3 },
      { huruf: "D", teks: "Menunggu semua data dari divisi lain terkumpul sepenuhnya sebelum mulai agar tidak perlu melakukan revisi di kemudian hari", poin: 2 },
      { huruf: "E", teks: "Mulai menyusun proposal sambil segera mengumpulkan data tambahan agar dokumen tetap selesai tepat waktu dan tetap akurat", poin: 5 }
    ],
    kunci: "E"
  },
  {
    id: 109, kategori: "TKP",
    teks: "Anda menerima tugas membuat presentasi untuk rapat esok pagi, namun di saat yang sama pimpinan meminta Anda menghadiri pertemuan dengan tamu dari instansi lain untuk membahas proyek penting. Apa langkah yang akan Anda ambil? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Menyusun ulang jadwal pekerjaan agar dapat menghadiri pertemuan sambil memastikan presentasi tetap selesai tepat waktu sesuai kebutuhan", poin: 5 },
      { huruf: "B", teks: "Menyelesaikan presentasi terlebih dahulu dan tidak menghadiri pertemuan agar pekerjaan utama tidak mengalami keterlambatan", poin: 2 },
      { huruf: "C", teks: "Mengabaikan penyusunan presentasi karena memilih fokus mendampingi pimpinan dalam pertemuan selama jadwal yang ditentukan", poin: 1 },
      { huruf: "D", teks: "Menjelaskan kondisi kepada pimpinan dan meminta izin agar dapat fokus menyelesaikan presentasi yang sudah mendekati batas waktu", poin: 3 },
      { huruf: "E", teks: "Mengikuti pertemuan bersama pimpinan terlebih dahulu lalu melanjutkan membuat presentasi setelah pertemuan selesai dilakukan", poin: 4 }
    ],
    kunci: "A"
  },
  {
    id: 110, kategori: "TKP",
    teks: "Anda adalah wakil koordinator dalam proyek pembangunan fasilitas pendukung jalan tol yang sedang dikawal ketat oleh pihak pemerintah daerah. Hari ini dijadwalkan rapat evaluasi karena ada program kerja yang belum terlaksana sesuai target. Namun koordinator utama berhalangan hadir karena harus menjaga anggota keluarganya yang dirawat di rumah sakit. Anda diminta menyampaikan perkembangan proyek. Apa langkah Anda? (Profesionalisme)",
    pilihan: [
      { huruf: "A", teks: "Memberikan gambaran awal berdasarkan informasi yang Anda ingat untuk membantu pemerintah daerah memahami kondisi terbaru", poin: 4 },
      { huruf: "B", teks: "Menyampaikan seluruh informasi yang Anda ketahui dengan jelas dan berkomitmen menambahkan data rinci setelah koordinasi dengan koordinator utama", poin: 5 },
      { huruf: "C", teks: "Mengajukan penjadwalan ulang rapat agar koordinator utama dapat memberikan penjelasan lebih komprehensif secara langsung", poin: 3 },
      { huruf: "D", teks: "Mengakui bahwa informasi yang Anda miliki belum lengkap sehingga menyarankan menunggu koordinator utama hadir dalam rapat lanjutan", poin: 2 },
      { huruf: "E", teks: "Menolak memberi penjelasan karena merasa hanya koordinator utama yang memahami seluruh perkembangan proyek secara menyeluruh", poin: 1 }
    ],
    kunci: "B"
  },
];

async function seedSoal() {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    
    // Delete existing data for tryout_id = 1
    await client.query(`DELETE FROM pilihan_jawaban WHERE soal_id IN (SELECT id FROM soal WHERE tryout_id = 1)`);
    await client.query(`DELETE FROM soal WHERE tryout_id = 1`);
    
    for (const soal of soalData) {
      const result = await client.query(
        `INSERT INTO soal (tryout_id, nomor_soal, kategori, teks, kunci)
         VALUES (1, $1, $2, $3, $4)
         RETURNING id`,
        [soal.id, soal.kategori, soal.teks, soal.kunci]
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
    console.log('Seed soal berhasil: ' + soalData.length + ' soal');
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('Gagal seed soal:', err.message);
    throw err;
  } finally {
    client.release();
    pool.end();
  }
}

seedSoal().catch(() => process.exit(1));
