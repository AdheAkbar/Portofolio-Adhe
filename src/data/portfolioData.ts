export interface Profile {
  fullName: string;
  degreeTitle: string;
  headline: string;
  summary: string;
  gpa: string;
  honors: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  instagram: string;
  status: string;
  portraitUrl: string;
}

export interface MetricCard {
  id: string;
  number: string;
  suffix?: string;
  label: string;
  sublabel: string;
  badge: string;
  iconName: string;
}

export interface Division {
  id: string;
  name: string;
  shortDesc: string;
  primaryTools: string[];
  color: string;
  themeMode: string;
  keyTarget: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  type: string;
  location: string;
  metric: string;
  description: string[];
  skills: string[];
  icon: string;
}

export interface GithubProject {
  id: string;
  name: string;
  title: string;
  category: string;
  techStack: string[];
  description: string;
  highlights: string[];
  githubUrl: string;
  demoUrl?: string;
  badge: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  number: string;
  year: string;
  category: string;
  isPrimary: boolean;
  imageUrl: string;
  verificationBadge: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    fullName: "M. ADHE AKBAR",
    degreeTitle: "S.Kom.",
    headline: "NETWORK TECHNICIAN (BNSP) × SOFTWARE & AI RESEARCHER × ON-CAMERA TALENT",
    summary: "Sarjana Informatika Cum Laude (IPK 3.59/4.00) Universitas Teknokrat Indonesia. Menggabungkan disiplin rekayasa perangkat lunak modern (Android Kotlin, Next.js, Machine Learning SINTA 3), integritas pemeliharaan infrastruktur jaringan fisik (NOC/FOC fiber optic fusion splicing & MikroTik), serta keahlian komunikasi publik resmi multi-kanal.",
    gpa: "3.59",
    honors: "Cum Laude",
    email: "akbarade496@gmail.com",
    phone: "+62 895-6365-71654",
    location: "Bandar Lampung, Lampung",
    linkedin: "linkedin.com/in/madheakbar",
    github: "github.com/AdheAkbar",
    instagram: "@madheakbar",
    status: "Siap Magang & Onboarding Segera",
    portraitUrl: "/assets/adhe_formal_red.jpg"
  },

  metrics: [
    {
      id: "gpa",
      number: "3.59",
      suffix: " / 4.00",
      label: "IPK Cum Laude",
      sublabel: "S1 Informatika UTI (2022–2026)",
      badge: "Akademik Unggul",
      iconName: "GraduationCap"
    },
    {
      id: "bnsp",
      number: "BNSP",
      suffix: " KKNI II",
      label: "Teknisi Jaringan Komputer",
      sublabel: "No. Reg J.777 00014 2022 + MikroTik",
      badge: "Sertifikasi Negara",
      iconName: "ShieldCheck"
    },
    {
      id: "bappeda",
      number: "30+",
      suffix: " Konten",
      label: "Publikasi Resmi BAPPEDA",
      sublabel: "Video Editor & On-Camera Talent",
      badge: "Humas Pemerintah",
      iconName: "Video"
    },
    {
      id: "lita",
      number: "4.500+",
      suffix: " Order",
      label: "Layanan Interaktif Digital",
      sublabel: "Platform Lita Global (2024–2026)",
      badge: "Kepuasan 100%",
      iconName: "Users"
    },
    {
      id: "sinta",
      number: "SINTA 3",
      suffix: " Jurnal",
      label: "Publikasi Riset Ilmiah (2026)",
      sublabel: "Machine Learning (Naive Bayes vs KNN)",
      badge: "Penelitian Nasional",
      iconName: "BookOpen"
    },
    {
      id: "expo",
      number: "3×",
      suffix: " Juara Expo",
      label: "Teknokrat Academic Expo 2025",
      sublabel: "Juara 1 Animasi, Juara 2 ML, Juara 3 AR/VR",
      badge: "Prestasi Kompetisi",
      iconName: "Trophy"
    }
  ] as MetricCard[],

  targetDivisions: [
    {
      id: "all",
      name: "Overview Portofolio",
      shortDesc: "Tampilan lengkap seluruh ekosistem kompetensi",
      primaryTools: ["Kotlin", "Next.js", "MikroTik", "CapCut", "Python ML"],
      color: "#00FFB2",
      themeMode: "all",
      keyTarget: "General Profile"
    },
    {
      id: "software-web",
      name: "Software & Web Developer",
      shortDesc: "Android Kotlin, Jetpack Compose, Next.js, TypeScript & Automation",
      primaryTools: ["Kotlin", "Jetpack Compose", "Next.js", "TypeScript", "Chrome MV3"],
      color: "#38BDF8",
      themeMode: "code",
      keyTarget: "Programmer / Developer Intern"
    },
    {
      id: "it-network",
      name: "IT Support & Network Engineer",
      shortDesc: "Infrastruktur NOC/FOC, Splicing FO, MikroTik RouterOS & Troubleshooting",
      primaryTools: ["MikroTik RouterOS", "Fiber Splicing", "OPM / OTDR", "LAN/WAN", "Server Admin"],
      color: "#10B981",
      themeMode: "network",
      keyTarget: "IT Support / Network Technician"
    },
    {
      id: "creative-media",
      name: "Creative Content & Multimedia",
      shortDesc: "On-Camera Hosting, Editing CapCut/Canva, Animasi 2D/3D & Desain Grafis",
      primaryTools: ["CapCut Pro", "Canva", "On-Camera Hosting", "Unity AR", "Meta Ads"],
      color: "#EC4899",
      themeMode: "creative",
      keyTarget: "Content Creator / Social Media / Media Specialist"
    },
    {
      id: "data-operations",
      name: "Data Operations & Analytics",
      shortDesc: "Python ML Sentiment Analysis, Enumerasi Lapangan, E-Arsip & Administrasi",
      primaryTools: ["Python", "Scikit-Learn", "Sains Data", "Google Sheets", "Komputer Perkantoran"],
      color: "#F59E0B",
      themeMode: "data",
      keyTarget: "Data Analyst / Admin Digital / Operasional"
    }
  ] as Division[],

  githubProjects: [
    {
      id: "adhemology",
      name: "adhemology",
      title: "Adimology — Kalkulator Target Saham",
      category: "FINANCE_APP",
      techStack: ["Next.js 16", "TypeScript", "Supabase", "Playwright", "Gemini AI", "jsPDF"],
      description: "Aplikasi web kalkulator target harga saham: menarik data sesi Stockbit lewat Playwright, menghitung target dan risk/reward, lalu mengekspor laporan PDF. Data disinkronkan ke Supabase dengan bantuan ringkasan Gemini AI.",
      highlights: [
        "Otomasi pengambilan data sesi lewat Playwright (headless browser)",
        "Perhitungan target harga, cut loss, dan rasio risk/reward per emiten",
        "Ekspor laporan PDF (jsPDF) dan sinkronisasi database Supabase"
      ],
      githubUrl: "https://github.com/AdheAkbar/adhemology",
      badge: "Finance Web App"
    },
    {
      id: "penakluk-code",
      name: "Penakluk-Code",
      title: "Website Pemasaran Properti (Next.js + Prisma)",
      category: "WEB_FULLSTACK",
      techStack: ["Next.js App Router", "TypeScript", "Prisma", "Cloudinary", "Tailwind CSS", "Framer Motion"],
      description: "Website properti dengan katalog unit, kartu properti dinamis, filter pencarian, statistik animasi, dan form kontak. Gambar dikelola lewat Cloudinary dan data properti disiapkan melalui Prisma.",
      highlights: [
        "App Router Next.js dengan Server Components dan optimasi gambar",
        "Katalog properti + pencarian dan kartu unit yang dapat difilter",
        "Animasi statistik (CountUp + Framer Motion) dan manajemen media Cloudinary"
      ],
      githubUrl: "https://github.com/AdheAkbar/Penakluk-Code",
      badge: "Fullstack Web"
    },
    {
      id: "csirt-incident-portal",
      name: "csirt-incident-portal",
      title: "Portal Pelaporan Insiden CSIRT",
      category: "SECURITY",
      techStack: ["PHP", "MySQL", "AES-256-CBC", "reCAPTCHA", "Firebase", "Apache"],
      description: "Portal pelaporan insiden siber untuk tim CSIRT: formulir laporan dengan verifikasi reCAPTCHA, enkripsi ID laporan AES-256-CBC, dan dashboard admin untuk menyetujui serta merekap laporan.",
      highlights: [
        "Enkripsi ID laporan dengan AES-256-CBC dan IV acak per entri",
        "Verifikasi reCAPTCHA pada formulir pelaporan publik",
        "Dashboard admin: approval insiden, rekap laporan, dan status penanganan"
      ],
      githubUrl: "https://github.com/AdheAkbar/csirt-incident-portal",
      badge: "Security Portal"
    },
    {
      id: "adhebank",
      name: "Adhebank",
      title: "Aplikasi Android Pencatatan Keuangan",
      category: "MOBILE_ANDROID",
      techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Room Database", "Coroutines & StateFlow", "Material 3"],
      description: "Aplikasi Android untuk mencatat pengeluaran dan pemasukan harian: ringkasan saldo, daftar transaksi, dan penyimpanan lokal. Dibangun dengan Jetpack Compose dan pemisahan layer MVVM.",
      highlights: [
        "Pemisahan layer UI, domain, dan data (MVVM)",
        "State asynchronous dengan Kotlin Coroutines & StateFlow",
        "Penyimpanan transaksi lokal menggunakan Room"
      ],
      githubUrl: "https://github.com/AdheAkbar/Adhebank",
      badge: "Android App"
    },
    {
      id: "autofill-maganghub",
      name: "Autofill_maganghub",
      title: "Ekstensi Chrome untuk Otomasi Formulir",
      category: "BROWSER_EXTENSION",
      techStack: ["JavaScript", "Chrome Extension MV3", "Content Scripts", "MutationObserver"],
      description: "Ekstensi Chrome yang mengisi formulir kegiatan MagangHub secara otomatis dari data terstruktur, termasuk menangani dropdown dinamis yang dirender ulang oleh framework Ionic.",
      highlights: [
        "Manifest V3 dengan content script dan penyimpanan lokal",
        "Menangani dropdown dinamis (#ion-overlay popover) via MutationObserver",
        "Validasi data sebelum pengisian untuk mengurangi error input"
      ],
      githubUrl: "https://github.com/AdheAkbar/Autofill_maganghub",
      badge: "Browser Tooling"
    },
    {
      id: "jelajah-quiz",
      name: "Jelajah-quiz",
      title: "Game Edukasi Kuis 2D (Construct 3)",
      category: "GAME",
      techStack: ["Construct 3", "HTML5 Game Engine", "2D Asset & Audio", "Event Sheet Logic"],
      description: "Game kuis edukasi 2D untuk siswa sekolah dasar, dikembangkan di Construct 3 lengkap dengan aset karakter, latar, skor, dan audio. Dipakai pada program PKM di SD Negeri 2 Bumisari.",
      highlights: [
        "Proyek sumber Construct 3 (.capx) beserta seluruh aset karakter dan audio",
        "Mekanik kuis, penilaian skor, dan layar game over",
        "Diterapkan langsung sebagai media pembelajaran pada kegiatan PKM"
      ],
      githubUrl: "https://github.com/AdheAkbar/Jelajah-quiz",
      badge: "Game Edukasi"
    }
  ] as GithubProject[],

  experiences: [
    {
      id: "bappeda",
      company: "BAPPEDA Provinsi Lampung",
      role: "Content Creator, Video Editor & On-Camera Talent",
      period: "Juli 2025 – September 2025",
      type: "Magang (Internship) — Sektor Publik",
      location: "Kota Bandar Lampung, Lampung",
      metric: "30+ Konten Publikasi (Campuran)",
      description: [
        "Menyunting sekitar 30 konten publikasi campuran — berita acara, dokumentasi kegiatan, hingga 1 konten IG reel — serta konten publikasi lainnya untuk program pembangunan daerah Provinsi Lampung.",
        "Tampil sebagai talent on-camera dengan sudut pandang mahasiswa, bukan presenter berita, sekaligus menyusun naskah video kegiatan dinas.",
        "Berkolaborasi intensif dengan divisi Humas dan protokol pemerintah dalam manajemen aset visual di CapCut dan Canva."
      ],
      skills: ["Video Production", "CapCut Pro", "Canva", "Scriptwriting", "Public Speaking", "Humas Pemerintah"],
      icon: "Video"
    },
    {
      id: "lita",
      company: "Lita Global",
      role: "Freelance Player & Digital Community Companion",
      period: "September 2024 – Agustus 2026",
      type: "Pekerja Lepas (Freelance) — Industri Digital",
      location: "Online / Remote Platform",
      metric: "4.500+ Order Selesai | Kepuasan 100%",
      description: [
        "Menyelesaikan lebih dari 4.500 pesanan layanan pelanggan interaktif pada platform digital berskala internasional dengan konsistensi rating bintang lima.",
        "Menyesuaikan gaya komunikasi dan strategi koordinasi tim secara real-time untuk membangun retensi dan kenyamanan pengguna.",
        "Menangani keluhan dan dinamika interaksi dengan standar profesionalisme serta waktu respon di bawah 5 menit."
      ],
      skills: ["Customer Communication", "Real-Time Coordination", "User Retention", "Conflict Resolution", "Crisis Management"],
      icon: "Users"
    },
    {
      id: "temanbaik",
      company: "Teman Baik Lampung",
      role: "Field Data Enumerator & Distribution Staff",
      period: "Oktober 2023 – Juni 2024",
      type: "Kontrak Paruh Waktu — Operasional Sosial",
      location: "Kota Bandar Lampung, Lampung",
      metric: "100% Akurasi Validasi Data Lapangan",
      description: [
        "Melakukan survei door-to-door dan input data penerima manfaat program bantuan sosial menggunakan aplikasi mobile terstruktur.",
        "Memvalidasi integritas data administrasi kependudukan (KTP/KK) sebelum pengalokasian logistik guna mencegah duplikasi.",
        "Berkoordinasi dengan koordinator lapangan untuk memastikan target kuota pendataan wilayah tercapai tepat waktu."
      ],
      skills: ["Mobile Data Entry", "Field Validation", "Integrity Auditing", "Logistics Operations", "Teamwork"],
      icon: "ClipboardCheck"
    },
    {
      id: "ptsms",
      company: "PT Sumatra Multimedia Solusi (PT SMS)",
      role: "IT Support Technician & Operations Intern",
      period: "Juni 2021 – Oktober 2021",
      type: "Magang (Internship) — ISP & Telekomunikasi",
      location: "Kota Bandar Lampung, Lampung",
      website: "https://sms.net.id/",
      metric: "Splicing Serat Optik Redaman < 0.02 dB",
      description: [
        "Bertanggung jawab sebagai teknisi lapangan NOC/FOC pada instalasi dan penyambungan core kabel serat optik (fusion splicing).",
        "Melakukan pengukuran redaman optik menggunakan Optical Power Meter (OPM) dan Optical Time Domain Reflectometer (OTDR).",
        "Melakukan pemeliharaan perangkat aktif router, switch, patch panel, dan manajemen kabel di rak server operasional."
      ],
      skills: ["Fiber Optic Splicing", "Optical Power Meter (OPM)", "MikroTik Routing", "Server Rack Maintenance", "NOC/FOC Operations"],
      icon: "Network"
    }
  ] as Experience[],

  sinta3Publication: {
    title: "Komparasi Algoritma Naive Bayes dan K-Nearest Neighbor untuk Analisis Sentimen Pengguna Dompet Digital pada Google Play Store",
    journal: "Building of Informatics, Technology and Science (BITS), Vol 7 No 4 (Maret 2026)",
    doi: "10.47065/bits.v7i4.9285",
    doiUrl: "https://doi.org/10.47065/bits.v7i4.9285",
    pdfUrl: "https://ejurnal.seminar-id.com/index.php/bits/article/view/9285/4508",
    issn: "2684-8910 (cetak) / 2685-3310 (online)",
    authors: "M Adhe Akbar*, Fenty Ariany",
    affiliation: "Fakultas Teknik dan Ilmu Komputer, Program Studi Informatika, Universitas Teknokrat Indonesia",
    year: "Maret 2026",
    award: "Juara 2 Machine Learning in Python — Teknokrat Academic Expo 2025",
    naiveBayesAccuracy: 88.5,
    knnAccuracy: 87.4,
    sampleSize: "18.869 Ulasan Pengguna",
    summary: "Penelitian eksperimental komparatif untuk mengukur performa klasifikasi algoritma Naive Bayes dan K-Nearest Neighbor (KNN) pada 18.869 ulasan Google Play Store dari 4 dompet digital (DANA, OVO, DOKU, LinkAja) menggunakan representasi TF-IDF 5.000 fitur. Naive Bayes terbukti secara statistik unggul dengan akurasi 88,5% dan AUC-ROC 0,9237.",
    sampleCases: [
      {
        text: "Aplikasi sangat mudah untuk bayar dan beli pulsa tanpa kendala, transaksi cepat dan fitur lengkap!",
        expectedSentiment: "POSITIF",
        nbProb: 0.96,
        knnDist: 0.09
      },
      {
        text: "Saldo sudah terpotong tapi uang belum masuk ke akun tujuan, transaksi sering gagal dan sangat mengecewakan.",
        expectedSentiment: "NEGATIF",
        nbProb: 0.05,
        knnDist: 0.91
      },
      {
        text: "Fitur baru cukup membantu untuk cek mutasi berkala, namun tampilan mohon jangan terlalu ramai.",
        expectedSentiment: "NETRAL",
        nbProb: 0.51,
        knnDist: 0.48
      }
    ]
  },

  certificates: [
    {
      id: "bnsp-tkj",
      title: "Sertifikat BNSP Teknisi Jaringan dan Sistem Komputer",
      issuer: "Badan Nasional Sertifikasi Profesi (BNSP) / LSP SMKN 1 Bandar Lampung",
      number: "No. Sertifikat: 26210 3513 2 0000033 2022 | Reg: J.777 00014 2022",
      year: "2022 – Seumur Hidup",
      category: "STANDAR NASIONAL BNSP",
      isPrimary: true,
      imageUrl: "/assets/05_Sertifikat_BNSP_Teknisi_Jaringan_dan_Sistem_Komputer.jpg",
      verificationBadge: "KKNI Level II TKJ Terverifikasi"
    },
    {
      id: "mikrotik-training",
      title: "Sertifikat Pelatihan MikroTik RouterOS",
      issuer: "Universitas Teknokrat Indonesia / LPBM Teknokrat",
      number: "0059/G.121/IIb2.3/2025",
      year: "2025",
      category: "JARINGAN & INFRASTRUKTUR",
      isPrimary: false,
      imageUrl: "/assets/02_Sertifikat_Pelatihan_MikroTik.jpg",
      verificationBadge: "Routing & Bandwidth Management"
    },
    {
      id: "jaringan-troubleshooting",
      title: "Sertifikat Kompetensi Jaringan Komputer & Troubleshooting",
      issuer: "Universitas Teknokrat Indonesia / LPBM Teknokrat",
      number: "0030/G.121/IIa2.3/2026",
      year: "2026",
      category: "JARINGAN & INFRASTRUKTUR",
      isPrimary: false,
      imageUrl: "/assets/03_Sertifikat_Kompetensi_Jaringan_dan_Troubleshooting.jpg",
      verificationBadge: "SKPI Berbasis Kompetensi (Nilai A)"
    },
    {
      id: "admin-perkantoran",
      title: "Sertifikat Kompetensi Komputer Administrasi Perkantoran",
      issuer: "Universitas Teknokrat Indonesia / LPBM Teknokrat",
      number: "0248/G.121/IIa2.1/2025",
      year: "2025",
      category: "OPERASIONAL & DATA",
      isPrimary: false,
      imageUrl: "/assets/01_Sertifikat_Kompetensi_Administrasi_Perkantoran.jpg",
      verificationBadge: "SKPI Berbasis Kompetensi (Nilai A)"
    },
    {
      id: "desain-grafis",
      title: "Sertifikat Kompetensi Desain Grafis",
      issuer: "Universitas Teknokrat Indonesia / LPBM Teknokrat",
      number: "0007/G.121/IIa.2.3/2024",
      year: "2024",
      category: "KREATIF & MULTIMEDIA",
      isPrimary: false,
      imageUrl: "/assets/04_Sertifikat_Kompetensi_Desain_Grafis.jpg",
      verificationBadge: "SKPI Berbasis Kompetensi (Nilai A)"
    },
    {
      id: "juara1-animasi",
      title: "Juara 1 Lomba Animasi 2D/3D (Teknokrat Academic Expo 2025)",
      issuer: "Fakultas Teknik & Ilmu Komputer, Universitas Teknokrat Indonesia",
      number: "Piagam: 050/UTI/A-EXPO/B.12/VI/2025",
      year: "2025",
      category: "PRESTASI KOMPETISI",
      isPrimary: false,
      imageUrl: "/assets/sertif_animasi.jpg",
      verificationBadge: "Pemenang Juara 1 Tingkat Expo"
    },
    {
      id: "juara3-arvr",
      title: "Juara 3 Lomba AR/VR: Teknokrat Portal AR (Expo 2025)",
      issuer: "Fakultas Teknik & Ilmu Komputer, Universitas Teknokrat Indonesia",
      number: "Piagam: 062/UTI/A-EXPO/B.11/I/2025",
      year: "2025",
      category: "PRESTASI KOMPETISI",
      isPrimary: false,
      imageUrl: "/assets/sertif_arvr.jpg",
      verificationBadge: "Pemenang Juara 3 Tingkat Expo"
    },
    {
      id: "juara2-ml",
      title: "Juara 2 Machine Learning Expo 2025 & Publikasi SINTA 3",
      issuer: "Fakultas Teknik & Ilmu Komputer, Universitas Teknokrat Indonesia",
      number: "Jurnal BITS SINTA 3 (DOI: 10.47065/bits.v7i4.9285)",
      year: "2026",
      category: "PRESTASI & RISET",
      isPrimary: false,
      imageUrl: "/assets/jurnal_sinta3_paper.jpg",
      verificationBadge: "Jurnal BITS SINTA 3 (Maret 2026)"
    }
  ] as Certificate[],

  pkmProjects: [
    {
      id: "pkm-bumisari",
      code: "PKM",
      partner: "SD Negeri 2 Bumisari, Kec. Natar, Kab. Lampung Selatan",
      projectName: "Edukasi Literasi Digital & Game Pembelajaran 'Jelajah Quiz'",
      period: "September – Oktober 2025",
      role: "Edukator Literasi Digital & Pengembang Game Edukatif",
      summary: "Mengembangkan aplikasi game edukatif interaktif 'Jelajah Quiz' untuk siswa sekolah dasar guna memfasilitasi pengenalan dasar komputer dan literasi sains ramah anak.",
      impact: "Mendampingi siswa kelas 4–6 dalam praktik pengenalan komputer dasar dan interaksi media pembelajaran digital."
    }
  ],

  brandingActivities: [
    {
      id: "jaya-bakery",
      event: "Pemilihan Brand Ambassador Jaya Bakery 2023",
      rank: "FINALIS BRAND AMBASSADOR",
      organizer: "PT Jaya Bakery Indonesia",
      period: "Mei – Juni 2023",
      description: "Finalis Brand Ambassador Jaya Bakery 2023, terlibat aktif dalam promosi kreatif produk dan kegiatan interaksi publik."
    },
    {
      id: "muli-mekhanai",
      event: "Muli Mekhanai Kabupaten Pesawaran 2023",
      rank: "FINALIS MULI MEKHANAI PESAWARAN",
      organizer: "Dinas Pariwisata & Ekonomi Kreatif Kab. Pesawaran",
      period: "Tahun 2023",
      description: "Finalis Mekhanai Kabupaten Pesawaran 2023 dalam kegiatan advokasi potensi pariwisata daerah, literasi budaya, dan representasi kegiatan resmi."
    },
    {
      id: "fashion-runway",
      event: "Teknokrat Entrepreneur Vaganza Fashion Showcase",
      rank: "MODEL PERAGAAN BUSANA (3 BRAND)",
      organizer: "Universitas Teknokrat Indonesia",
      period: "Agustus 2023",
      description: "Memperagakan koleksi pakaian dari 3 brand busana lokal pada peragaan busana festival kewirausahaan dan pemotretan katalog produk."
    }
  ]
};
export interface GithubArchiveItem { name: string; description: string; language: string; url: string; pushed: string; featured?: boolean }

export const GITHUB_ARCHIVE: GithubArchiveItem[] = [
  {
    "name": "ryan_pools_bar",
    "description": "Sistem booking meja billiard Ryan Pools Bar (PHP/MySQL): status meja real-time, reservasi pelanggan, dan daftar waiting list dengan tema hitam-emas.",
    "language": "PHP",
    "url": "https://github.com/AdheAkbar/ryan_pools_bar",
    "pushed": "2026-11-02",
    "featured": false
  },
  {
    "name": "menu_cafe",
    "description": "Sistem menu dan kasir kafe berbasis PHP/MySQL: pemesanan per meja, manajemen menu, pembayaran QRIS, cetak struk, dan riwayat pesanan.",
    "language": "PHP",
    "url": "https://github.com/AdheAkbar/menu_cafe",
    "pushed": "2026-11-02",
    "featured": false
  },
  {
    "name": "dashboard",
    "description": "Arsip dashboard server XAMPP multibahasa (English, Deutsch, Español, Français, Português, Русский, 中文, 日本語): halaman status, phpinfo, FAQ, dan how-to untuk lingkungan pengembangan lokal.",
    "language": "CSS",
    "url": "https://github.com/AdheAkbar/dashboard",
    "pushed": "2026-11-02",
    "featured": false
  },
  {
    "name": "csirt-incident-portal",
    "description": "Portal tanggap insiden CSIRT: pelaporan insiden terenkripsi AES-256, verifikasi reCAPTCHA, dashboard admin untuk approval dan rekap laporan. PHP/MySQL + Firebase.",
    "language": "HTML",
    "url": "https://github.com/AdheAkbar/csirt-incident-portal",
    "pushed": "2026-11-02",
    "featured": true
  },
  {
    "name": "DVWA-master",
    "description": "DVWA (Damn Vulnerable Web Application) — lab latihan keamanan web: SQL Injection, XSS, CSRF, file inclusion. PHP/MySQL + Docker.",
    "language": "PHP",
    "url": "https://github.com/AdheAkbar/DVWA-master",
    "pushed": "2026-11-02",
    "featured": false
  },
  {
    "name": "coffee_wan",
    "description": "AromaSource Global — website B2B ekspor kopi dengan arsitektur PHP MVC murni: katalog produk, testimoni pelanggan, dan form inquiry.",
    "language": "PHP",
    "url": "https://github.com/AdheAkbar/coffee_wan",
    "pushed": "2026-11-02",
    "featured": false
  },
  {
    "name": "Pemograman-Web-Vaganza-Village",
    "description": "Website pemasaran kawasan hunian Vaganza Village Sukarame berbasis PHP & MySQL: halaman profil cluster, katalog unit, galeri, dan sorting data.",
    "language": "PHP",
    "url": "https://github.com/AdheAkbar/Pemograman-Web-Vaganza-Village",
    "pushed": "2026-11-02",
    "featured": false
  },
  {
    "name": "Jelajah-quiz",
    "description": "Game edukasi kuis 2D 'Jelajah Kuis' untuk siswa sekolah dasar — Construct 3 (.capx) beserta build HTML5, aset karakter, dan audio.",
    "language": "—",
    "url": "https://github.com/AdheAkbar/Jelajah-quiz",
    "pushed": "2026-11-02",
    "featured": true
  },
  {
    "name": "Adhebank",
    "description": "Tempat Penghitung Aplikasi pengeluaran dan pemasukan",
    "language": "Kotlin",
    "url": "https://github.com/AdheAkbar/Adhebank",
    "pushed": "2026-10-27",
    "featured": true
  },
  {
    "name": "Ella-Makeup",
    "description": "Ella BOOK",
    "language": "Kotlin",
    "url": "https://github.com/AdheAkbar/Ella-Makeup",
    "pushed": "2026-10-27",
    "featured": false
  },
  {
    "name": "adhemology",
    "description": "Pembaca pergerakan saham",
    "language": "TypeScript",
    "url": "https://github.com/AdheAkbar/adhemology",
    "pushed": "2026-10-27",
    "featured": true
  },
  {
    "name": "teleprompter",
    "description": "Telemprompter",
    "language": "JavaScript",
    "url": "https://github.com/AdheAkbar/teleprompter",
    "pushed": "2026-10-27",
    "featured": false
  },
  {
    "name": "juice-reciepe",
    "description": "Resepn jus",
    "language": "JavaScript",
    "url": "https://github.com/AdheAkbar/juice-reciepe",
    "pushed": "2026-10-27",
    "featured": false
  },
  {
    "name": "fitness-track",
    "description": "fitness-track",
    "language": "HTML",
    "url": "https://github.com/AdheAkbar/fitness-track",
    "pushed": "2026-10-27",
    "featured": false
  },
  {
    "name": "DeteksiJantung-Web",
    "description": "Machine learning website dengan case jantung",
    "language": "—",
    "url": "https://github.com/AdheAkbar/DeteksiJantung-Web",
    "pushed": "2026-10-27",
    "featured": false
  },
  {
    "name": "Autofill_maganghub",
    "description": "Untuk membantu mengisi data",
    "language": "JavaScript",
    "url": "https://github.com/AdheAkbar/Autofill_maganghub",
    "pushed": "2026-10-27",
    "featured": true
  },
  {
    "name": "PBS",
    "description": "Projek",
    "language": "—",
    "url": "https://github.com/AdheAkbar/PBS",
    "pushed": "2025-03-06",
    "featured": false
  },
  {
    "name": "Penakluk-Code",
    "description": "—",
    "language": "TypeScript",
    "url": "https://github.com/AdheAkbar/Penakluk-Code",
    "pushed": "2025-01-25",
    "featured": true
  },
  {
    "name": "mobile-fix",
    "description": "—",
    "language": "Dart",
    "url": "https://github.com/AdheAkbar/mobile-fix",
    "pushed": "2024-12-17",
    "featured": false
  },
  {
    "name": "mobile-adhe",
    "description": "—",
    "language": "—",
    "url": "https://github.com/AdheAkbar/mobile-adhe",
    "pushed": "2024-12-17",
    "featured": false
  },
  {
    "name": "mobile2",
    "description": "—",
    "language": "—",
    "url": "https://github.com/AdheAkbar/mobile2",
    "pushed": "2024-12-03",
    "featured": false
  },
  {
    "name": "Adhe-mob",
    "description": "—",
    "language": "—",
    "url": "https://github.com/AdheAkbar/Adhe-mob",
    "pushed": "2024-11-19",
    "featured": false
  },
  {
    "name": "Adhe-mobile2",
    "description": "Apa aja",
    "language": "Dart",
    "url": "https://github.com/AdheAkbar/Adhe-mobile2",
    "pushed": "2024-10-31",
    "featured": false
  },
  {
    "name": "bankgart",
    "description": "—",
    "language": "—",
    "url": "https://github.com/AdheAkbar/bankgart",
    "pushed": "2024-05-19",
    "featured": false
  },
  {
    "name": "UTS-PEMMOBILE-IF22A",
    "description": "—",
    "language": "—",
    "url": "https://github.com/AdheAkbar/UTS-PEMMOBILE-IF22A",
    "pushed": "2024-05-12",
    "featured": false
  },
  {
    "name": "uts-project-vaganza",
    "description": "UTS PEMROGRAMAN MOBILE IF 22A",
    "language": "—",
    "url": "https://github.com/AdheAkbar/uts-project-vaganza",
    "pushed": "2024-05-12",
    "featured": false
  }
];
