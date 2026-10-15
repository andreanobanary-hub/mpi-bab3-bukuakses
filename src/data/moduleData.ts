import {
  AssessmentItem,
  AssessmentCategory,
  DimensionType,
  ComicScenario,
  CharacteristicItem,
  FigureProfile,
  RolePlayCharacter,
  RolePlayDialogue,
  RubricCriterion,
  OpportunityCanvasData
} from '../types';

export const generalInfo = {
  title: "Menumbuhkan Jiwa Kewirausahaan bagi Remaja",
  subtitle: "Kreatif, Ulet, Mandiri, dan Beretika",
  targetGroup: "Siswa SMP / SMA (Fase D / E - Kurikulum Merdeka)",
  serviceType: "Layanan Bimbingan Klasikal Bimbingan dan Konseling (BK)",
  timeAllocation: "2 Pertemuan (2 x 45 Menit)",
  pedagogicalApproach: "Experiential Learning (David Kolb)",
  profilPelajarPancasila: [
    "Mandiri (Mengembangkan inisiatif dan tanggung jawab pribadi)",
    "Kreatif (Mampu memodifikasi dan menghasilkan karya orisinal)",
    "Gotong Royong (Mampu bekerja sama dan berkolaborasi dalam tim)",
    "Bernalar Kritis (Mampu mengidentifikasi masalah dan peluang solusi)",
    "Berakhlak Mulia (Menjunjung tinggi etika, kejujuran, dan keadilan)"
  ],
  tujuanLayanan: {
    pengenalan: {
      tahap: "1. Tahap Pengenalan (Kognitif - C4)",
      deskripsi: "Peserta didik dapat menganalisis konsep dasar kewirausahaan remaja, mengenali 8 karakteristik jiwa wirausaha, serta mengidentifikasi perbedaan pola pikir solutif-produktif dibandingkan pola pikir pasif-konsumtif."
    },
    akomodasi: {
      tahap: "2. Tahap Akomodasi (Afektif - A3)",
      deskripsi: "Peserta didik mampu menginternalisasi dan menghargai nilai-nilai keuletan, pantang menyerah, keberanian mencoba hal baru, serta mengukuhkan komitmen etika (kejujuran dan tanggung jawab) dalam kehidupan sehari-hari."
    },
    tindakan: {
      tahap: "3. Tahap Tindakan (Psikomotor - P3)",
      deskripsi: "Peserta didik mampu merancang ide solusi bernilai guna melalui lembar kerja 'Mencari Harta Karun Peluang' serta mempraktikkan keterampilan komunikasi asertif beretika melalui sosiodrama Pasar Mini & Jasa Kreatif."
    }
  }
};

export const assessmentItems: AssessmentItem[] = [
  // 1. Keberanian Mencoba (1-4)
  {
    id: 1,
    text: "Saya berani mengajukan gagasan baru atau ide karya di hadapan teman dan guru, meskipun ide tersebut belum pernah dicoba sebelumnya.",
    dimension: 'courage',
    dimensionLabel: 'Keberanian Mencoba'
  },
  {
    id: 2,
    text: "Ketika dihadapkan pada hal baru yang belum saya kuasai (misal: belajar desain, membuat kerajinan, atau memasak), saya tertarik mencobanya tanpa rasa takut ditertawakan.",
    dimension: 'courage',
    dimensionLabel: 'Keberanian Mencoba'
  },
  {
    id: 3,
    text: "Saya bersedia mengambil risiko yang wajar (misal menginvestasikan waktu atau tabungan kecil) untuk mewujudkan sebuah ide karya/proyek sekolah.",
    dimension: 'courage',
    dimensionLabel: 'Keberanian Mencoba'
  },
  {
    id: 4,
    text: "Saya tetap percaya diri mencoba kembali ketika percobaan pertama saya membuat sesuatu belum berhasil dengan sempurna.",
    dimension: 'courage',
    dimensionLabel: 'Keberanian Mencoba'
  },

  // 2. Manajemen Waktu & Kedisiplinan (5-7)
  {
    id: 5,
    text: "Saya membuat jadwal harian atau daftar tugas (to-do list) dan berusaha menyelesaikan tugas sekolah tepat pada waktunya.",
    dimension: 'time',
    dimensionLabel: 'Manajemen Waktu'
  },
  {
    id: 6,
    text: "Saya mampu membagi porsi waktu secara seimbang antara belajar akademis, beristirahat/bermain media sosial, dan mengembangkan minat/hobi produktif.",
    dimension: 'time',
    dimensionLabel: 'Manajemen Waktu'
  },
  {
    id: 7,
    text: "Jika saya berjanji menyelesaikan tugas kelompok atau pesanan teman, saya menepatinya sesuai tenggat waktu yang disepakati.",
    dimension: 'time',
    dimensionLabel: 'Manajemen Waktu'
  },

  // 3. Kerja Sama & Kolaborasi (8-11)
  {
    id: 8,
    text: "Saya senang mendengarkan masukan serta sudut pandang berbeda dari rekan satu kelompok untuk memperkaya ide yang sedang dikerjakan.",
    dimension: 'teamwork',
    dimensionLabel: 'Kerja Sama'
  },
  {
    id: 9,
    text: "Saya mampu berbagi peran secara adil dan menjalankan tanggung jawab bagian saya dengan sungguh-sungguh saat kerja tim.",
    dimension: 'teamwork',
    dimensionLabel: 'Kerja Sama'
  },
  {
    id: 10,
    text: "Ketika ada anggota tim yang kesulitan atau berbeda pendapat, saya memilih berdiskusi secara kepala dingin dan saling mendukung mencari jalan tengah.",
    dimension: 'teamwork',
    dimensionLabel: 'Kerja Sama'
  },
  {
    id: 11,
    text: "Saya tidak ragu mengapresiasi keberhasilan teman atau meminta bantuan dengan sopan saat saya mengalami kendala teknis.",
    dimension: 'teamwork',
    dimensionLabel: 'Kerja Sama'
  },

  // 4. Keuletan & Pantang Menyerah (12-14)
  {
    id: 12,
    text: "Bagi saya, penolakan atau hasil yang belum sesuai ekspektasi adalah bagian dari proses belajar, bukan alasan untuk langsung berhenti berusaha.",
    dimension: 'resilience',
    dimensionLabel: 'Pantang Menyerah'
  },
  {
    id: 13,
    text: "Ketika menghadapi kendala sulit, saya terbiasa mencari alternatif solusi lain daripada sekadar mengeluh atau menyalahkan keadaan.",
    dimension: 'resilience',
    dimensionLabel: 'Pantang Menyerah'
  },
  {
    id: 14,
    text: "Saya memiliki daya tahan untuk menyelesaikan proyek atau karya hingga tuntas, meskipun rasa bosan atau lelah terkadang datang.",
    dimension: 'resilience',
    dimensionLabel: 'Pantang Menyerah'
  },

  // 5. Etika & Integritas (15-18)
  {
    id: 15,
    text: "Saya selalu mengedepankan kejujuran mengenai kualitas, takaran, dan kondisi asli karya/barang yang saya tawarkan tanpa menipu orang lain.",
    dimension: 'ethics',
    dimensionLabel: 'Etika & Integritas'
  },
  {
    id: 16,
    text: "Saya memegang teguh amanah keuangan, mencatat penerimaan dan pengeluaran secara transparan, serta mengembalikan hak orang lain dengan tepat.",
    dimension: 'ethics',
    dimensionLabel: 'Etika & Integritas'
  },
  {
    id: 17,
    text: "Saya menghargai karya cipta orang lain dan tidak melakukan penjiplakan (plagiarisme) secara mentah tanpa memberi atribusi atau modifikasi kreatif.",
    dimension: 'ethics',
    dimensionLabel: 'Etika & Integritas'
  },
  {
    id: 18,
    text: "Saya mempertimbangkan dampak kegiatan usaha saya terhadap kebersihan lingkungan sekolah dan keharmonisan hubungan antarteman.",
    dimension: 'ethics',
    dimensionLabel: 'Etika & Integritas'
  }
];

export const assessmentCategories: Record<'rendah' | 'cukup' | 'tinggi', AssessmentCategory> = {
  rendah: {
    title: "Tunas Awal (Explorer)",
    badge: "Tahap Eksplorasi & Pengenalan Diri",
    range: "Skor 18 - 29",
    summary: "Kamu sedang berada di titik awal yang penuh potensi. Rasa ragu dan kebiasaan menunggu adalah hal yang sangat wajar bagi pemula.",
    counselorNarration: "Halo sahabat muda! Setiap wirausahawan besar di dunia ini berawal dari seorang pemula yang pernah merasa cemas. Skor ini bukan label keterbatasanmu, melainkan cermin bahwa potensimu ibarat benih unggul yang siap disiram. Kamu hanya butuh keberanian kecil untuk melangkah dari zona nyaman: mulailah dari proyek kecil yang kamu senangi tanpa memikirkan apakah akan gagal atau sempurna.",
    actionTips: [
      "Pilih 1 hobi kecilmu (misal membuat sketsa, merangkum pelajaran, atau membuat camilan) dan tunjukkan hasilnya pada 2 sahabat terdekatmu.",
      "Latih membuat jadwal harian sederhana: selesaikan 1 tugas utama sebelum bermain media sosial.",
      "Ingat: kegagalan pertama bukan tanda kamu tidak berbakat, melainkan pupuk agar mentalmu makin tahan banting."
    ]
  },
  cukup: {
    title: "Pengembang Kreatif (Grower)",
    badge: "Tahap Pengembangan Inisiatif",
    range: "Skor 30 - 42",
    summary: "Kamu sudah memiliki pondasi inisiatif, sikap tanggung jawab, dan kepedulian yang sangat baik terhadap lingkungan sekitar.",
    counselorNarration: "Hebat sekali! Kamu sudah memiliki benih keberanian, rasa empati sosial, dan inisiatif berkarya yang menyala. Di fase ini, tantangan terbesarmu adalah membangun konsistensi dan mengelola waktu agar idemu tidak berhenti hanya di angan-angan. Dengan sedikit disiplin tambahan dan kemauan berkolaborasi dengan rekan yang saling melengkapi, kamu siap melahirkan karya wirausaha nyata!",
    actionTips: [
      "Tantang dirimu membuat proposal mini atau prototipe sederhana bersama 2-3 rekan kelompok.",
      "Asah keterampilan manajemen waktu: gunakan teknik Pomodoro (25 menit fokus, 5 menit istirahat) saat mengerjakan proyek.",
      "Latih komunikasi asertif: berani bertanya kepada calon pengguna tentang apa yang benar-benar mereka butuhkan."
    ]
  },
  tinggi: {
    title: "Pionir Muda Tangguh (Trailblazer)",
    badge: "Tahap Pemimpin Inovatif & Beretika",
    range: "Skor 43 - 54",
    summary: "Jiwa kemandirian, keuletan, dan kesadaran etikamu sudah terpancar nyata. Kamu memiliki naluri kepemimpinan solutif yang menginspirasi.",
    counselorNarration: "Luar biasa! Karakter wirausahamu sangat matang untuk usiamu saat ini. Kamu tidak hanya berani mengambil risiko terukur dan pantang menyerah, namun kamu juga memiliki kompas moral dan etika yang kuat. Jadilah lokomotif penggerak bagi teman-temanmu: ajak mereka berkembang bersama, dengarkan masukan dengan rendah hati, dan buktikan bahwa wirausaha sejati adalah tentang memberi solusi dan keberkahan bagi sesama.",
    actionTips: [
      "Ambil peran sebagai inisiator atau koordinator dalam proyek kreasi sekolah atau kepanitiaan kelas.",
      "Bantu teman yang masih ragu dengan cara berbagi pengalaman dan memberikan semangat tanpa menggurui.",
      "Pertajam etika bisnismu: pastikan setiap langkah usahamu tetap ramah lingkungan dan transparan secara finansial."
    ]
  }
};

export const comicScenarios: ComicScenario[] = [
  {
    id: 'uang-jajan',
    title: 'Skenario 1: Uang Saku Menipis di Tengah Bulan',
    situasi: 'Memasuki pertengahan bulan, banyak kebutuhan sekolah tambahan seperti modul fotokopi dan iuran kegiatan kelas, sementara uang saku dari orang tua sudah menipis.',
    karakterDeni: {
      nama: 'Deni (Si Pengamat Pasif)',
      tipe: 'Mindset Pasif & Konsumtif',
      reaksi: 'Deni mengeluh di status media sosial, meminta uang tambahan secara mendesak kepada orang tua dengan nada kesal, lalu meminjam uang teman tanpa rencana pengembalian yang jelas.',
      dampak: 'Beban finansial orang tua bertambah, Deni merasa cemas terlilit utang kecil, dan tidak ada keterampilan baru yang dipelajari.'
    },
    karakterRania: {
      nama: 'Rania (Si Penggagas Solutif)',
      tipe: 'Mindset Wirausaha Aktif',
      reaksi: 'Rania mengamati banyak teman sekelasnya kesulitan memahami rangkuman rumus matematika dan fisika. Berbekal keterampilannya membuat ringkasan visual rapi dengan mind-map, ia menawarkan paket catatan mini digital & cetak dengan harga terjangkau (Rp3.000).',
      dampak: 'Teman-temannya sangat terbantu lulus kuis, Rania mendapat penghasilan halal mandiri Rp60.000 dalam 3 hari, dan rasa percaya dirinya meningkat.'
    },
    pertanyaanPemantik: [
      "Apa perbedaan mendasar cara pandang Deni dan Rania saat menghadapi masalah kekurangan uang?",
      "Bagaimana Rania mampu mengubah 'kebutuhan teman' menjadi sebuah 'nilai tambah' yang menghasilkan?",
      "Jika kamu berada di posisi tersebut, aset/keahlian apa yang ada pada dirimu yang bisa kamu tawarkan sebagai solusi?"
    ],
    catatanGuruBK: "Wirausaha bagi remaja bukan melulu soal modal uang besar. Wirausaha dimulai dari kepekaan melihat kesulitan orang lain dan keberanian menawarkan keahlian yang kita miliki sebagai jalan keluar."
  },
  {
    id: 'sampah-plastik',
    title: 'Skenario 2: Tumpukan Botol Plastik di Area Kantin',
    situasi: 'Setiap jam istirahat usai, tempat sampah kantin sekolah selalu meluap dengan botol dan gelas plastik minuman manis kemasan.',
    karakterDeni: {
      nama: 'Deni (Si Pengamat Pasif)',
      tipe: 'Mindset Menunggu & Menyalahkan',
      reaksi: 'Deni melempar botol minumannya ke tumpukan sampah sambil berkomentar: \"Petugas kebersihan sekolah malas banget sih, masa begini saja tidak dibersihkan!\". Deni langsung pergi tanpa peduli.',
      dampak: 'Lingkungan tetap kotor, bau tak sedap mengganggu, dan Deni membiasakan diri menjadi orang yang gemar melempar tanggung jawab ke orang lain.'
    },
    karakterRania: {
      nama: 'Rania (Si Penggagas Solutif)',
      tipe: 'Mindset Kreatif Berkelanjutan',
      reaksi: 'Rania mengajak OSIS dan 2 temannya membuat program \"Sedekah Botol Pintar\". Mereka menyiapkan kardus pilah khusus botol bersih. Botol yang terkumpul disalurkan ke bank sampah kelurahan, dan sebagian diolah menjadi pot tanaman gantung sukulen untuk hiasan kelas.',
      dampak: 'Sekolah menjadi asri, tercipta dana kas kelas dari tabungan bank sampah, dan Rania beserta timnya mendapat apresiasi dari Kepala Sekolah.'
    },
    pertanyaanPemantik: [
      "Mengapa mengeluh tidak pernah menyelesaikan masalah di lingkungan kita?",
      "Nilai moral dan etika lingkungan apa yang ditunjukkan oleh inisiatif Rania?",
      "Masalah sampah atau fasilitas apa di sekolahmu saat ini yang bisa diubah menjadi peluang aksi kreatif?"
    ],
    catatanGuruBK: "Jiwa kewirausahaan sejati selalu berpadu dengan kepedulian sosial (Social Entrepreneurship). Pengusaha hebat tidak hanya memikirkan keuntungan diri sendiri, melainkan menjaga bumi dan memberdayakan komunitasnya."
  },
  {
    id: 'pameran-sekolah',
    title: 'Skenario 3: Tugas Stan Pameran Kreativitas Kelas',
    situasi: 'Sekolah mengadakan acara Bulan Bahasa dan Seni. Setiap kelas diwajibkan mendirikan stan kreatif mandiri untuk pengunjung dan orang tua siswa.',
    karakterDeni: {
      nama: 'Deni (Si Pengamat Pasif)',
      tipe: 'Instan & Kurang Inisiatif',
      reaksi: 'Deni mengusulkan kelasnya membeli makanan ringan kemasan pabrik di supermarket grosir lalu menjualnya kembali dengan menaikkan harga tanpa modifikasi apa pun.',
      dampak: 'Produknya sama persis dengan yang ada di warung depan sekolah. Stan sepi pengunjung karena tidak memiliki daya tarik atau keunikan.'
    },
    karakterRania: {
      nama: 'Rania (Si Penggagas Solutif)',
      tipe: 'Inovatif & Berorientasi Nilai',
      reaksi: 'Rania meriset apa yang diinginkan pengunjung: minuman segar yang sehat dan kenang-kenangan unik. Bersama tim, mereka menjual es cincau pandan alami dengan kemasan ramah lingkungan dan membuka pojok stiker motivasi buatan tangan sendiri.',
      dampak: 'Stan mereka menjadi yang paling ramai, pengunjung antusias berfoto, dan tim berhasil memperoleh predikat stan terfavorit.'
    },
    pertanyaanPemantik: [
      "Apa yang membuat stan Rania jauh lebih memikat dibandingkan rencana instan Deni?",
      "Bagaimana konsep diferensiasi (keunikan nilai produk) bekerja dalam kehidupan sehari-hari?",
      "Apa arti penting kerja sama dan pembagian peran dalam menyukseskan proyek kelompok?"
    ],
    catatanGuruBK: "Kreativitas bukan sihir yang datang tiba-tiba. Kreativitas adalah hasil dari kemauan mengamati, mendengar apa yang diinginkan orang lain, dan memberikan sentuhan personal yang bermakna."
  },
  {
    id: 'kegagalan-pertama',
    title: 'Skenario 4: Ketika Produk Pertama Belum Laku',
    situasi: 'Dalam simulasi penjualan, produk kue kering buatan tim ternyata hanya terjual 3 toples dari 15 toples yang disiapkan pada hari pertama.',
    karakterDeni: {
      nama: 'Deni (Si Pengamat Pasif)',
      tipe: 'Mudah Patah Arang (Rentan)',
      reaksi: 'Deni langsung merajuk, menyalahkan teman yang bertugas memasak, berkata: \"Tuh kan, aku bilang juga apa! Percuma buang waktu, mendingan tidur di rumah. Aku kapok!\".',
      dampak: 'Hubungan pertemanan menjadi tegang, proyek terhenti di tengah jalan, dan rasa percaya diri tim runtuh.'
    },
    karakterRania: {
      nama: 'Rania (Si Penggagas Solutif)',
      tipe: 'Resiliensi & Ulet (Growth Mindset)',
      reaksi: 'Rania menenangkan rekan kelompoknya: \"Nggak apa-apa teman-teman, ini baru hari pertama. Yuk kita minta masukan jujur ke 3 orang yang tadi sudah beli\". Dari masukan itu, mereka tahu rasanya agak kurang manis dan kemasannya kurang menarik. Mereka memperbaikinya dan menawarkan tester gratis.',
      dampak: 'Pada hari kedua seluruh toples habis terjual. Tim belajar bahwa kritik membangun adalah kunci penyempurnaan karya.'
    },
    pertanyaanPemantik: [
      "Bagaimana perbedaan reaksi mental Deni dan Rania terhadap kata 'gagal'?",
      "Mengapa umpan balik (feedback) dari pelanggan sangat penting bagi seorang wirausahawan?",
      "Bagaimana kamu melatih dirimu agar tidak mudah baper saat idemu dikritik oleh orang lain?"
    ],
    catatanGuruBK: "Kegagalan bukanlah lawan dari kesuksesan, melainkan anak tangga menuju kesuksesan. Pengusaha yang tangguh adalah mereka yang mampu belajar cepat dari kesalahan dan bangkit dengan strategi yang lebih cerdas."
  }
];

export const eightCharacteristics: CharacteristicItem[] = [
  {
    id: 1,
    title: "1. Kreatif & Inovatif",
    subtitle: "Melihat dari Sudut Pandang Berbeda",
    description: "Kemampuan memikirkan ide-ide segar, menghubungkan hal-hal yang tampaknya tidak berhubungan, serta menemukan solusi baru atas persoalan lama.",
    contohRemaja: "Mengubah kain perca sisa seragam sekolah menjadi wadah pensil estetik atau pembungkus botol minum ramah lingkungan.",
    iconName: "Lightbulb"
  },
  {
    id: 2,
    title: "2. Berani Ambil Risiko Terukur",
    subtitle: "Melangkah dengan Perhitungan, Bukan Ceroboh",
    description: "Keberanian mencoba hal baru dan menghadapi ketidakpastian setelah mempertimbangkan untung rugi serta konsekuensi secara bijak.",
    contohRemaja: "Menggunakan sebagian tabungan Rp20.000 untuk membeli bahan baku gantungan kunci akrilik setelah mendata 5 teman yang bersedia memesan terlebih dahulu (pre-order).",
    iconName: "ShieldAlert"
  },
  {
    id: 3,
    title: "3. Ulet & Pantang Menyerah",
    subtitle: "Jadikan Kegagalan sebagai Laboratorium",
    description: "Ketahanan mental untuk bangkit kembali saat menghadapi penolakan, kendala teknis, atau hasil yang belum sesuai harapan.",
    contohRemaja: "Ketika postingan jualan stiker buatan sendiri sepi pembeli di hari pertama, tetap semangat mencoba gaya foto baru dan menyempurnakan caption promosi.",
    iconName: "Flame"
  },
  {
    id: 4,
    title: "4. Mandiri & Proaktif",
    subtitle: "Tidak Menunggu Disuruh untuk Bergerak",
    description: "Inisiatif diri untuk mencari informasi, belajar keterampilan baru secara otodidak, dan tidak bergantung pada orang tua atau orang lain.",
    contohRemaja: "Mempelajari aplikasi desain grafis lewat tutorial daring secara mandiri tanpa harus menunggu diajarkan guru di sekolah.",
    iconName: "Compass"
  },
  {
    id: 5,
    title: "5. Disiplin & Manajemen Waktu",
    subtitle: "Menyeimbangkan Prestasi Belajar & Karya",
    description: "Kemampuan mengatur prioritas antara tugas akademis utama sebagai pelajar dengan kegiatan berkreasi dan menjalankan proyek wirausaha.",
    contohRemaja: "Menuntaskan PR sekolah di sore hari sebelum pukul 19.00, lalu mengalokasikan 45 menit sesudahnya untuk menyiapkan pesanan jualan teman.",
    iconName: "Clock"
  },
  {
    id: 6,
    title: "6. Kolaboratif & Mampu Berjejaring",
    subtitle: "Tumbuh Bersama Tim yang Saling Melengkapi",
    description: "Kesediaan berbagi peran dengan teman yang memiliki keahlian berbeda, saling menghargai, dan menjalin hubungan baik dengan pelanggan.",
    contohRemaja: "Siswa yang mahir memasak bermitra dengan temannya yang jago fotografi dan media sosial untuk meluncurkan camilan sehat kelas.",
    iconName: "Users"
  },
  {
    id: 7,
    title: "7. Berorientasi Solusi (Value Creation)",
    subtitle: "Fokus Memberikan Manfaat Nyata",
    description: "Menyadari bahwa bisnis bukan sekadar 'menjual barang', melainkan menyelesaikan masalah nyata yang dirasakan oleh orang lain.",
    contohRemaja: "Menyediakan jasa antar titip fotokopi bagi teman-teman yang tidak sempat keluar gerbang sekolah saat istirahat singkat.",
    iconName: "Target"
  },
  {
    id: 8,
    title: "8. Berintegritas & Menjunjung Etika",
    subtitle: "Jujur, Adil, dan Bertanggung Jawab Penuh",
    description: "Prinsip moral tertinggi dalam berbisnis: transparan tentang kualitas, tidak menipu, adil dalam transaksi, dan bertanggung jawab terhadap lingkungan.",
    contohRemaja: "Menginformasikan secara jujur jika ada bahan makanan yang mengandung alergen (kacang/susu) dan mengembalikan sisa uang kas kelompok secara teliti.",
    iconName: "CheckCircle2"
  }
];

export const fourMindsetSteps = [
  {
    step: "Langkah 1",
    title: "Amati Masalah Sekitarmu (Problem Hunting)",
    desc: "Buka mata dan telinga. Jangan mulai dari 'saya mau jual apa', melainkan tanyakan: 'apa kesulitan atau keluhan yang sering dialami teman sekelas, guru, atau keluargaku?'"
  },
  {
    step: "Langkah 2",
    title: "Mulai dari Apa yang Kamu Miliki (Effectuation)",
    desc: "Lihat ke dalam dirimu: hobi apa yang kamu sukai? Keahlian apa yang kamu kuasai? Peralatan apa yang sudah ada di rumah? Jangan tunggu modal jutaan rupiah untuk memulai."
  },
  {
    step: "Langkah 3",
    title: "Uji Ide Cepat & Sederhana (Rapid Prototype)",
    desc: "Buat contoh atau sampel dalam jumlah sangat kecil (1-3 buah). Tunjukkan pada orang terdekat untuk meminta pendapat jujur sebelum memproduksi dalam jumlah banyak."
  },
  {
    step: "Langkah 4",
    title: "Evaluasi Tanpa Baper (Feedback Loop)",
    desc: "Terima setiap masukan dan kritik dengan kepala dingin. Jadikan saran sebagai petunjuk perbaikan produk dan pelayananmu selanjutnya."
  }
];

export const businessEthicsPillars = [
  {
    title: "Kejujuran (Honesty)",
    desc: "Menyampaikan spesifikasi, takaran, dan kondisi produk apa adanya. Tidak melebih-lebihkan khasiat atau menyembunyikan cacat barang demi mengejar keuntungan sesaat."
  },
  {
    title: "Keadilan (Fairness)",
    desc: "Memberikan harga yang wajar dan proporsional. Dalam kerja kelompok, pembagian tugas dan pembagian hasil laba usaha harus dilakukan secara terbuka dan disepakati bersama."
  },
  {
    title: "Tanggung Jawab (Responsibility)",
    desc: "Menjaga kebersihan area berjualan di sekolah, memilih kemasan yang minim sampah plastik, serta siap mengganti jika terjadi kekeliruan atau cacat pada produk."
  }
];

export const inspirationalFigures: FigureProfile[] = [
  {
    id: 'amanda-susanti',
    name: 'Amanda Susanti Cole',
    role: 'Founder & CEO Sayurbox',
    venture: 'Platform Agrikultur Digital & Pemberdayaan Petani',
    background: 'Memulai dari kepedulian terhadap rantai distribusi hasil panen petani lokal yang panjang dan memotong keuntungan petani.',
    perjuanganRemaja: 'Di awal merintis, Amanda pernah mengalami penolakan dari banyak pihak, mengantarkan sayuran segar sendiri dengan mobil tua saat subuh, dan menghadapi tantangan logistik bahan segar yang mudah layu.',
    kunciSukses: [
      'Empati mendalam terhadap nasib petani lokal',
      'Ketangguhan operasional tanpa kenal lelah',
      'Pemanfaatan teknologi digital untuk memperpendek rantai pasok'
    ],
    pesanMoral: 'Kewirausahaan yang paling berdampak lahir saat hatimu tersentuh untuk memecahkan masalah nyata orang-orang di sekitarmu, bukan sekadar mengejar angka kekayaan.'
  },
  {
    id: 'alfatih-timur',
    name: 'Muhammad Alfatih Timur',
    role: 'Co-Founder Kitabisa.com',
    venture: 'Wirausaha Sosial & Gotong Royong Digital',
    background: 'Mengawali inisiatif sejak usia muda saat aktif di organisasi mahasiswa kampus UI, melihat besarnya potensi kedermawanan masyarakat Indonesia.',
    perjuanganRemaja: 'Situs web Kitabisa di awal peluncuran sempat sangat sepi dan hampir gulung tikar. Tim pendiri harus berhemat luar biasa dan meyakinkan masyarakat bahwa platform donasi digital bisa dipercaya secara transparan.',
    kunciSukses: [
      'Menjaga integritas dan transparansi laporan dana publik',
      'Mengubah kebiasaan gotong royong tradisional menjadi kekuatan digital',
      'Fokus melayani mereka yang paling membutuhkan pertolongan'
    ],
    pesanMoral: 'Bisnis yang paling kokoh berdiri di atas pondasi kepercayaan (trust). Sekali kamu menjaga kejujuran dan amanah, ribuan orang akan bersedia mendukung langkahmu.'
  },
  {
    id: 'putri-tanjung',
    name: 'Putri Indahsari Tanjung',
    role: 'Founder Creativepreneur Event Creator',
    venture: 'Industri Kreatif & Penyelenggara Acara Pemuda',
    background: 'Memulai langkah wirausaha sejak usia 15 tahun di bangku sekolah dengan mengorganisir acara ulang tahun dan pentas seni kecil.',
    perjuanganRemaja: 'Meskipun berasal dari keluarga terpandang, orang tuanya mendidik Putri untuk mandiri secara finansial. Proposal acaranya ditolak belasan kali oleh sponsor perusahaan, dan ia sempat nombok serta diremehkan karena usianya yang masih remaja.',
    kunciSukses: [
      'Tekad baja untuk membuktikan kemandirian pribadi',
      'Tidak mudah patah arang saat proposal ditolak berkali-kali',
      'Gairah besar dalam menghubungkan dan menginspirasi jutaan kreator muda'
    ],
    pesanMoral: 'Privilese bukanlah penentu utama kesuksesan, melainkan kerja keras, kemauan belajar dari nol, dan keberanian berkeringat untuk membuktikan karya sendiri.'
  },
  {
    id: 'gibran-huzaifah',
    name: 'Gibran Huzaifah',
    role: 'Founder & CEO eFishery',
    venture: 'Teknologi Akuakultur & Internet of Things (IoT)',
    background: 'Memulai dari masa kuliah yang serba terbatas secara ekonomi, tinggal di kos sederhana sambil mencoba beternak lele di kolam terpal.',
    perjuanganRemaja: 'Gibran mengamati pemberian pakan ikan lele secara manual sangat boros dan melelahkan. Berbekal tekad, ia belajar teknologi sensor secara otodidak dan merakit prototipe alat pemberi pakan otomatis (smart feeder) dari pipa paralon bekas.',
    kunciSukses: [
      'Ketajaman observasi lapangan di sektor akar rumput',
      'Kemampuan berinovasi dengan bahan sederhana menjadi teknologi canggih',
      'Konsistensi mendampingi pembudidaya ikan tradisional'
    ],
    pesanMoral: 'Jangan pernah membatasi mimpimu karena merasa latar belakangmu sederhana. Dari kolam terpal dan pipa bekas sekalipun, sebuah inovasi berkelas dunia bisa kamu lahirkan!'
  }
];

export const canvasPresets: OpportunityCanvasData[] = [
  {
    teamName: "Tim Kreatif 9A",
    businessName: "SmartNotes (Rangkuman Visual Kilat)",
    problemStatement: "Banyak teman sekelas kesulitan mencatat rumus matematika & IPA dengan rapi sehingga bingung saat belajar menghadapi asesmen sumatif harian.",
    targetUser: "Siswa kelas 7 - 9 yang ingin belajar efektif dan visual.",
    proposedSolution: "Membuat lembar ringkasan rumus dengan tipografi estetik, diagram warna, dan contoh soal cepat berformat mini buklet saku.",
    uniqueValue: "Ringkas, menggunakan bahasa gaul yang mudah dimengerti remaja, dan dilengkapi kode QR ke latihan kuis interaktif.",
    initialResources: "Buku catatan rapi, spidol warna, aplikasi Canva gratis di ponsel, dan biaya cetak fotokopi Rp15.000.",
    marketingEthics: "Menyediakan contoh 1 lembar gratis untuk ditinjau, tidak memaksakan pembelian, dan menjamin isi rumus telah dikonfirmasi ke guru mata pelajaran."
  },
  {
    teamName: "Sahabat Hijau X-4",
    businessName: "EcoCraft (Tempat Pensil & Pouch Daur Ulang)",
    problemStatement: "Bungkus detergen, kopi instan, dan kain perca seragam lama menumpuk menjadi sampah tanpa nilai guna.",
    targetUser: "Siswa, guru, dan staf sekolah yang mendukung gerakan Sekolah Ramah Lingkungan (Adiwiyata).",
    proposedSolution: "Mendaur ulang limbah plastik kemasan bersih dan kain sisa menjadi pouch serbaguna, tempat pensil, dan gantungan kunci bergaya vintage.",
    uniqueValue: "Tahan air, setiap motif unik dan terbatas (one of a kind), serta berkontribusi langsung mengurangi sampah plastik sekolah.",
    initialResources: "Sampah kemasan plastik bersih yang dikumpulkan dari rumah, jarum jahit/mesin jahit milik ibu, ritsleting sisa, modal awal Rp10.000.",
    marketingEthics: "Menjaga kebersihan dan higienitas bahan baku daur ulang, menetapkan harga ramah kantong siswa (Rp8.000 - Rp12.000), serta menyisihkan 10% laba untuk bibit tanaman sekolah."
  },
  {
    teamName: "Dapur Sehat Muda",
    businessName: "FruitPop (Camilan Buah Dingin & Yogurt)",
    problemStatement: "Kantin sekolah didominasi gorengan berminyak dan makanan berpengawet yang membuat siswa sering merasa mengantuk saat jam pelajaran siang.",
    targetUser: "Teman-teman dan guru yang membutuhkan camilan segar, dingin, dan menyehatkan di tengah cuaca panas.",
    proposedSolution: "Cup buah potong segar lokal (semangka, melon, pepaya) disiram yogurt madu dingin dan taburan biji chia/keju parut.",
    uniqueValue: "Penyajian higienis menggunakan sendok kayu ramah lingkungan, buah segar dipotong pagi hari, menyegarkan dan rendah kalori.",
    initialResources: "Modal iuran patungan 3 orang @Rp15.000 (total Rp45.000) untuk membeli buah di pasar tradisional dan kemasan cup compostable.",
    marketingEthics: "Menjaga kebersihan tangan dengan sarung tangan makanan, memajang tanggal pemotongan buah secara terbuka, dan tidak memakai pemanis buatan."
  }
];

export const rolePlayCharacters: RolePlayCharacter[] = [
  {
    roleId: 'seller',
    roleName: 'Rafi & Siska',
    actorTitle: 'Tim Penjual Jasa Kreatif / Penyedia Produk',
    personality: 'Ramah, antusias, komunikatif, sabar, jujur dalam menjelaskan produk, tidak mudah tersinggung ketika ditawar.',
    keyObjective: 'Membangun hubungan baik dengan pelanggan, menjelaskan keunggulan produk secara jujur, dan mencapai kesepakatan yang saling menguntungkan (win-win).',
    tipsKomunikasi: [
      'Gunakan senyum tulus dan tatap mata pembeli dengan hangat.',
      'Dengarkan kebutuhan pembeli sebelum buru-buru mempromosikan barang.',
      'Gunakan kalimat asertif: \"Terima kasih masukannya, boleh kami jelaskan bahan yang kami gunakan...?\"'
    ]
  },
  {
    roleId: 'buyer',
    roleName: 'Bima & Cinta',
    actorTitle: 'Klien / Pembeli Kritis & Penasaran',
    personality: 'Kritis, teliti memeriksa kualitas barang, banyak bertanya soal harga, sempat membandingkan dengan produk toko lain.',
    keyObjective: 'Memastikan barang yang dibeli berkualitas, higienis, berharga wajar, serta menguji respon kejujuran dari penjual.',
    tipsKomunikasi: [
      'Ajukan pertanyaan spesifik tentang komposisi bahan atau ketahanan barang.',
      'Sampaikan penawaran atau keberatan dengan santun tanpa merendahkan karya penjual.',
      'Apresiasi keterbukaan penjual jika informasi yang diberikan memuaskan.'
    ]
  },
  {
    roleId: 'counselor',
    roleName: 'Ibu Nadia, M.Pd.',
    actorTitle: 'Konsultan Pengamat & Guru BK',
    personality: 'Bijaksana, suportif, netral, peka mengamati etika komunikasi dan sportivitas transaksi antara kedua pihak.',
    keyObjective: 'Memandu proses refleksi pasca bermain peran, menyoroti aspek etika dan manajemen emosi, serta memberikan penguatan positif.',
    tipsKomunikasi: [
      'Berikan pertanyaan pemantik: \"Bagaimana perasaanmu saat tawaranmu sempat ditolak?\"',
      'Soroti momen penting di mana kejujuran atau kesabaran berhasil menyelesaikan ketegangan.'
    ]
  }
];

export const rolePlayDialogues: RolePlayDialogue[] = [
  {
    id: 1,
    scene: 1,
    sceneTitle: "Babak 1: Pendekatan & Komunikasi Awal yang Ramah",
    speaker: "Rafi (Penjual)",
    role: "seller",
    line: "Selamat siang teman-teman! Selamat datang di stan karya 'Kreatif Muda 9B'. Sedang mencari camilan segar untuk jam istirahat atau butuh kartu catatan mini persiapan ujian besok?",
    stageNote: "Tersenyum ramah, postur tubuh terbuka, mempersilakan Bima dan Cinta melihat-lihat meja pajangan.",
    counselorInsight: "Membuka percakapan dengan salam yang hangat dan ramah mencairkan kecanggungan dan menciptakan rasa nyaman bagi calon pembeli."
  },
  {
    id: 2,
    scene: 1,
    sceneTitle: "Babak 1: Pendekatan & Komunikasi Awal yang Ramah",
    speaker: "Bima (Pembeli)",
    role: "buyer",
    line: "Halo Rafi, Siska. Ini apa ya? Bentuknya lucu, tapi kok harganya Rp10.000? Di kantin bawah ada snack kemasan cuma Rp3.000 tuh.",
    stageNote: "Memegang salah satu pouch buah potong sambil mengangkat alis dengan nada skeptis.",
    counselorInsight: "Wajar bagi pembeli untuk membandingkan harga. Respon penjual akan menentukan apakah ini menjadi perdebatan atau penjelasan edukatif."
  },
  {
    id: 3,
    scene: 1,
    sceneTitle: "Babak 1: Pendekatan & Komunikasi Awal yang Ramah",
    speaker: "Siska (Penjual)",
    role: "seller",
    line: "Pertanyaan bagus banget, Bima! Yang Rp3.000 di kantin itu memang praktis, tapi isinya keripik asin dengan banyak pengawet. Nah, yang kami buat ini 'FruitPop' isi melon, semangka, dan pepaya segar langsung dari petani lokal, disiram yogurt madu dingin. Jadi tanpa pemanis buatan sama sekali, pas banget bikin pikiran segar dan nggak ngantuk pas jam fisika nanti!",
    stageNote: "Menunjukkan kemasan higienis bertutup rapat dan tester mini dengan sendok kayu bersih.",
    counselorInsight: "Siska menunjukkan karakter 'Value Creation' & 'Kejujuran'. Alih-alih menjelekkan produk lain, ia mengedukasi keunggulan nilai sehat produknya."
  },
  {
    id: 4,
    scene: 2,
    sceneTitle: "Babak 2: Negosiasi, Menghadapi Komplain & Keberatan",
    speaker: "Cinta (Pembeli)",
    role: "buyer",
    line: "Wah kelihatannya segar sih. Tapi uang saku kami tinggal Rp15.000 berdua nih. Boleh nggak kami tawar jadi Rp7.000 per cup kalau kami beli langsung 2 cup sekarang?",
    stageNote: "Melihat dompet bersama Bima, mencoba bernegosiasi dengan nada tawar menawar khas pasar sekolah.",
    counselorInsight: "Ujian fleksibilitas dan kalkulasi wirausaha: bagaimana penjual mengambil keputusan cepat tanpa merugi namun tetap menjaga kepuasan pembeli."
  },
  {
    id: 5,
    scene: 2,
    sceneTitle: "Babak 2: Negosiasi, Menghadapi Komplain & Keberatan",
    speaker: "Rafi (Penjual)",
    role: "seller",
    line: "Hmm, kalau Rp7.000 pas banget dengan modal bahan baku kami, Cinta. Tapi karena kalian beli berdua dan ini hari perdana kami buka, bagaimana kalau Rp16.000 untuk 2 cup (jadi Rp8.000 per cup)? Plus, kami beri bonus stiker kutipan motivasi belajar buat di binder kalian. Deal?",
    stageNote: "Menghitung cepat di kertas catatan kecil dengan tenang, lalu menawarkan jalan tengah win-win solution.",
    counselorInsight: "Rafi menerapkan prinsip 'Fairness' (Keadilan) dan negosiasi win-win tanpa baper atau menolak secara kasar."
  },
  {
    id: 6,
    scene: 2,
    sceneTitle: "Babak 2: Negosiasi, Menghadapi Komplain & Keberatan",
    speaker: "Bima (Pembeli)",
    role: "buyer",
    line: "Tunggu sebentar, ini sendok kayunya kok agak sedikit tergores ya di bagian ujungnya? Aman nggak nih buat dipakai makan?",
    stageNote: "Memeriksa dengan cermat peralatan makan yang disodorkan.",
    counselorInsight: "Momen kritis penanganan komplain: apakah penjual akan membantah atau bertanggung jawab?"
  },
  {
    id: 7,
    scene: 3,
    sceneTitle: "Babak 3: Tanggung Jawab Etis & Kepuasan Bersama",
    speaker: "Siska (Penjual)",
    role: "seller",
    line: "Aduh, terima kasih banyak ya Bima sudah begitu teliti mengingatkan kami! Maaf sekali atas ketidaknyamanannya. Ini biar kami ganti dengan sendok baru yang tersegel rapat dan steril. Kepuasan dan kesehatan teman-teman nomor satu buat kami.",
    stageNote: "Segera mengambil sendok baru yang sempurna tanpa raut wajah kesal, lalu menyerahkan cup buah segar dengan rapi.",
    counselorInsight: "Sikap tanggap dan tulus meminta maaf mencerminkan etika bisnis tingkat tinggi. Ini mengubah pelanggan yang ragu menjadi pelanggan setia."
  },
  {
    id: 8,
    scene: 3,
    sceneTitle: "Babak 3: Tanggung Jawab Etis & Kepuasan Bersama",
    speaker: "Cinta & Bima",
    role: "buyer",
    line: "Wah, pelayanannya mantap banget! Segar banget nih rasa buah dan yogurtnya, pas manisnya. Besok kalau ada menu baru, kabari kami di grup kelas ya!",
    stageNote: "Mencicipi buah dengan ekspresi puas, tersenyum dan melakukan tos pertemanan.",
    counselorInsight: "Transaksi sukses bukan hanya saat uang berpindah tangan, melainkan saat terbangun relasi saling percaya dan saling menghargai."
  },
  {
    id: 9,
    scene: 3,
    sceneTitle: "Babak 3: Tanggung Jawab Etis & Kepuasan Bersama",
    speaker: "Ibu Nadia (Guru BK)",
    role: "counselor",
    line: "Luar biasa anak-anakku! Tepuk tangan untuk kalian semua. Ibu sangat bangga mengamati bagaimana Rafi dan Siska menjaga kejujuran dan ketenangan saat ditawar dan dikritik, serta bagaimana Bima dan Cinta menjadi pembeli yang kritis namun tetap santun. Inilah esensi jiwa kewirausahaan: bukan cuma soal mencari untung, tetapi seni membangun kepercayaan, beretika, dan memecahkan masalah bersama!",
    stageNote: "Mengajak seluruh kelas memberikan tepuk tangan apresiasi dan memulai sesi debriefing reflektif.",
    counselorInsight: "Penguatan dari Guru BK menutup proses simulasi dengan konseptualisasi nilai moral yang membekas dalam memori afektif siswa."
  }
];

export const sociodramaRubric: RubricCriterion[] = [
  {
    id: 'communication',
    title: '1. Komunikasi Asertif & Sikap Ramah',
    description: 'Kemampuan menyampaikan gagasan, menyapa, dan mendengarkan pihak lain dengan bahasa tubuh santun dan artikulasi jelas.',
    levels: [
      { score: 4, label: 'Sangat Baik', descriptor: 'Komunikasi sangat ramah, artikulasi jelas, bahasa tubuh terbuka, mampu mendengarkan secara aktif tanpa memotong pembicaraan.' },
      { score: 3, label: 'Baik', descriptor: 'Komunikasi ramah dan santun, sesekali agak kaku namun pesan tersampaikan dengan baik.' },
      { score: 2, label: 'Cukup', descriptor: 'Komunikasi masih pasif atau canggung, kontak mata kurang terjaga, volume suara kurang jelas.' },
      { score: 1, label: 'Perlu Pendampingan', descriptor: 'Berbicara dengan nada defensif atau enggan berkomunikasi sama sekali.' }
    ]
  },
  {
    id: 'resilience',
    title: '2. Resiliensi & Pengelolaan Emosi',
    description: 'Ketenangan dalam menghadapi keluhan, tawar-menawar ketat, atau situasi yang tidak terduga.',
    levels: [
      { score: 4, label: 'Sangat Baik', descriptor: 'Sangat tenang, tidak baper saat dikritik atau ditawar, mencari solusi win-win dengan kepala dingin.' },
      { score: 3, label: 'Baik', descriptor: 'Mampu menahan emosi, merespon komplain dengan sopan meskipun sempat terlihat gugup.' },
      { score: 2, label: 'Cukup', descriptor: 'Terlihat sedikit kesal atau defensif saat produknya dikritik sebelum akhirnya bersedia mengalah.' },
      { score: 1, label: 'Perlu Pendampingan', descriptor: 'Menunjukkan ekspresi marah, mendebat secara emosional, atau membatalkan transaksi sepihak.' }
    ]
  },
  {
    id: 'teamwork',
    title: '3. Kerja Sama & Kolaborasi Peran',
    description: 'Sinergi antar anggota kelompok dalam berbagi peran, saling melengkapi, dan saling mendukung selama simulasi.',
    levels: [
      { score: 4, label: 'Sangat Baik', descriptor: 'Pembagian peran sangat seimbang, saling mengisi dialog secara natural, menunjukkan kekompakan tim yang solid.' },
      { score: 3, label: 'Baik', descriptor: 'Masing-masing memainkan perannya dengan baik sesuai naskah, kerja sama berjalan lancar.' },
      { score: 2, label: 'Cukup', descriptor: 'Salah satu anggota mendominasi panggung sementara anggota lain hanya terdiam pasif.' },
      { score: 1, label: 'Perlu Pendampingan', descriptor: 'Tidak ada koordinasi, saling lempar tanggung jawab di atas panggung simulasi.' }
    ]
  },
  {
    id: 'ethics',
    title: '4. Penerapan Prinsip Etika Bisnis',
    description: 'Kepatuhan terhadap nilai kejujuran spesifikasi produk, keadilan harga, transparansi, dan tanggung jawab.',
    levels: [
      { score: 4, label: 'Sangat Baik', descriptor: 'Menunjukkan integritas tinggi: jujur menerangkan bahan, cepat mengganti barang cacat, adil dalam penetapan harga.' },
      { score: 3, label: 'Baik', descriptor: 'Menjunjung etika umum transaksi, bersikap jujur dan menghargai hak pembeli.' },
      { score: 2, label: 'Cukup', descriptor: 'Masih mencoba melebih-lebihkan fakta produk secara berlebihan meskipun tidak berniat menipu.' },
      { score: 1, label: 'Perlu Pendampingan', descriptor: 'Mengabaikan komplain pembeli atau tidak peduli pada kualitas dan kebersihan barang.' }
    ]
  }
];

export const rplDocumentation = {
  header: {
    sekolah: "SMP / SMA NEGERI INOVASI BANGSA",
    tahunAjaran: "2026/2027",
    fase: "Fase D (SMP Kelas 8/9) / Fase E (SMA Kelas 10)",
    bidangBimbingan: "Bimbingan Karier & Bimbingan Pribadi-Sosial",
    jenisLayanan: "Layanan Bimbingan Klasikal",
    alokasiWaktu: "2 Pertemuan x 45 Menit (Total 90 Menit)"
  },
  langkahKegiatan: [
    {
      tahap: "1. Pengalaman Konkret (Concrete Experience) - 20 Menit",
      aktivitas: "Guru BK menyapa dengan antusias, mengajak siswa mengisi Asesmen Mandiri Jiwa Kewirausahaan (18 butir), dan mengamati komik komparasi kontras Deni vs Rania."
    },
    {
      tahap: "2. Observasi Reflektif (Reflective Observation) - 25 Menit",
      aktivitas: "Siswa mengisi Jurnal Refleksi Diri 4 pertanyaan mendalam. Guru memfasilitasi diskusi kelas hangat tentang apa yang membedakan mental pengamat vs mental inisiator solutif."
    },
    {
      tahap: "3. Konseptualisasi Abstrak (Abstract Conceptualization) - 20 Menit",
      aktivitas: "Guru dan siswa membedah 8 karakteristik wirausaha remaja, 4 langkah mindset praktis, pentingnya etika (kejujuran, keadilan, tanggung jawab), serta menelaah pesan moral 4 figur muda inspiratif."
    },
    {
      tahap: "4. Eksperimentasi Aktif (Active Experimentation) - 25 Menit",
      aktivitas: "Kelompok menyusun Lembar Kerja 'Mencari Harta Karun Peluang', mementaskan sosiodrama interaktif 'Stan Jasa Kreatif', dan mengisi rubrik penilaian saling asah (peer assessment)."
    }
  ],
  evaluasi: {
    proses: "Mengamati antusiasme, partisipasi aktif dalam diskusi kelompok, kerja sama tim, dan kejujuran saat simulasi sosiodrama.",
    hasil: "Mengukur peningkatan pemahaman melalui skor asesmen diri awal vs akhir, kelengkapan LKPD rencana peluang usaha, dan komitmen etika pribadi siswa."
  }
};
