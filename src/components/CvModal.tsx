import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  ExternalLink, 
  Briefcase, 
  GraduationCap, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  MapPin, 
  Mail, 
  Phone, 
  Calendar,
  Building2,
  FileCheck,
  Download
} from 'lucide-react';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'ats_text'>('preview');

  if (!isOpen) return null;

  const handlePrint = () => {
    playTactileClick(1200);
    window.print();
  };

  const atsText = `CURRICULUM VITAE
M. ADHE AKBAR, S.Kom.
Bandar Lampung, Lampung, Indonesia | +62 895-6365-71654 | akbarade496@gmail.com
LinkedIn: linkedin.com/in/madheakbar | Portofolio Web: Available Online

RINGKASAN EKSEKUTIF / PROFIL PROFESIONAL
Lulusan S1 Informatika (S.Kom.) Universitas Teknokrat Indonesia dengan predikat Cum Laude (IPK 3.59/4.00), tersertifikasi resmi Badan Nasional Sertifikasi Profesi (BNSP) KKNI Level II Teknik Komputer dan Jaringan. Memiliki rekam jejak multidisiplin yang kuat menggabungkan keahlian infrastruktur IT & jaringan komputer (MikroTik, Cisco, Fiber Optic Splicing, OPM), riset ilmiah Machine Learning (terpublikasi di Jurnal Nasional Terakreditasi SINTA 3), serta pengalaman komunikasi publik dan produksi konten multimedia resmi di BAPPEDA Provinsi Lampung (30+ konten publikasi kedinasan: berita acara, dokumentasi, dan reels). Terbukti berprestasi tinggi dengan memborong 3 predikat juara di ajang Teknokrat Academic Expo 2025 (Juara 1 Animasi 2D/3D, Juara 2 Machine Learning AI, Juara 3 AR/VR), Finalis Brand Ambassador Jaya Bakery, dan Finalis Muli Mekhanai Pesawaran 2023.

PENDIDIKAN FORMAL
1. Universitas Teknokrat Indonesia — Bandar Lampung (September 2022 – Juli 2026)
   - Sarjana Komputer (S1 Informatika)
   - IPK: 3.59 / 4.00 (Predikat: Cum Laude)
   - Riset Skripsi/Publikasi: Klasifikasi Sentimen Ulasan AI berbasis Machine Learning (SINTA 3)
   - Prestasi: 3x Juara Teknokrat Academic Expo 2025, Finalis Brand Ambassador Jaya Bakery, Finalis Muli Mekhanai Pesawaran

2. SMKN 1 Bandar Lampung (Juli 2019 – Juni 2022)
   - Jurusan: Teknik Komputer dan Jaringan (TKJ)
   - Nilai Rata-rata Ijazah: 86.33 (No. Seri Ijazah: M-SMK/K13-3/ 1277923)
   - Kualifikasi: Lulusan Berkompetensi Sertifikasi BNSP KKNI Level II

PENGALAMAN KERJA & MAGANG
1. BAPPEDA Provinsi Lampung — Kota Bandar Lampung (Juli 2025 – September 2025)
   Content Creator, Video Editor & On-Camera Talent (Magang Pemerintah Daerah)
   - Memproduksi dan menyunting lebih dari 30 konten video publikasi resmi instansi menggunakan CapCut dan Canva untuk memperluas jangkauan informasi publik mengenai pembangunan daerah.
   - Bertindak sebagai talent utama di depan kamera (on-camera host) sekaligus penulis naskah program liputan resmi kedinasan dan paparan rencana pembangunan RKPD Lampung.
   - Berkolaborasi intensif dengan divisi Humas dalam merancang kampanye kreatif, siaran langsung, dan strategi diseminasi media sosial pemerintah dengan retensi penonton tinggi.

2. Lita Global Platform — Remote / Online (September 2024 – Agustus 2026)
   Freelance Player & Digital Community Companion (Layanan Pengguna Digital)
   - Menyelesaikan dan mengelola lebih dari 4.500 pesanan interaktif digital dengan mempertahankan standar komunikasi profesional tinggi dan tingkat kepuasan pelanggan konsisten bintang 5 (5.0-Stars).
   - Melakukan koordinasi tim secara real-time dan manajemen hubungan pelanggan (CRM digital) untuk membangun retensi dan loyalitas pengguna lintas komunitas digital.

3. Teman Baik Lampung — Kota Bandar Lampung (Oktober 2023 – Juni 2024)
   Field Data Enumerator & Distribution Staff (Operasi Survei & Distribusi)
   - Melakukan survei lapangan terstruktur dan validasi penerima manfaat berbasis aplikasi mobile door-to-door untuk memverifikasi database bantuan sosial.
   - Memverifikasi integritas, keaslian data kependudukan, dan koordinat GPS sebelum proses penyaluran bantuan sosial.
   - Berkoordinasi dengan tim logistik dan aparatur desa, memastikan target operasional wilayah tercapai 100% tepat waktu.

4. PT Sumatra Multimedia Solusi (PT SMS) (https://sms.net.id/) — Kota Bandar Lampung (Juni 2021 – Oktober 2021)
   IT Support Technician & Operations Intern (Infrastruktur Jaringan & NOC)
   - Bertanggung jawab pada operasi lapangan penarikan dan terminasi kabel fiber optik, penyambungan core serat optik (fusion splicing), dan pengujian redaman sinyal dengan Optical Power Meter (OPM standar -18.2 dBm).
   - Melakukan instalasi, pengkabelan rapi (cable management), dan maintenance perangkat jaringan aktif di rak server operasional.

SERTIFIKASI PROFESI & KOMPETENSI RESMI
1. Sertifikat Kompetensi BNSP KKNI Level II Teknik Komputer dan Jaringan
   Penerbit: Badan Nasional Sertifikasi Profesi (BNSP) / LSP SMKN 1 Bandar Lampung
   No. Registrasi: J.777 00014 2022 | No. Seri Blangko: 10643252
2. Sertifikat Pelatihan MikroTik
   Penerbit: Universitas Teknokrat Indonesia / LPBM Teknokrat (No: 0059/G.121/IIb2.3/2025)
3. Sertifikat Kompetensi Jaringan Komputer dan Troubleshooting
   Penerbit: Universitas Teknokrat Indonesia / LPBM Teknokrat (No: 0030/G.121/IIa2.3/2026)
4. Sertifikat Kompetensi Desain Grafis (SKPI Berbasis Kompetensi Nilai A)
   Penerbit: Universitas Teknokrat Indonesia / LPBM Teknokrat (No: 0007/G.121/IIa2.3/2026)
5. Sertifikat Kompetensi Komputer Administrasi Perkantoran
   Penerbit: Universitas Teknokrat Indonesia / LPBM Teknokrat (No: 0248/G.121/IIa2.1/2025)

PRESTASI & PENGHARGAAN
- Juara 1 Animasi Game 2D/3D — Teknokrat Academic Expo 2025 (Piagam No. 050/UTI/A-EXPO/B.12/VI/2025)
- Juara 2 Machine Learning AI — Teknokrat Academic Expo 2025 (Sistem Prediksi Sentimen)
- Juara 3 Augmented Reality (AR/VR) — Teknokrat Academic Expo 2025 (Piagam No. 062/UTI/A-EXPO/B.11/I/2025)
- Publikasi Ilmiah SINTA 3 — Jurnal Nasional Terakreditasi Riset Komputasi (Januari 2026)
- Finalis Muli Mekhanai Pesawaran & Finalis Brand Ambassador Jaya Bakery (2023)

KEAHLIAN TEKNIS (SKILLS)
- Jaringan & Hardware: MikroTik RouterOS, Cisco Packet Tracer, Fiber Optic Splicing, OPM, OTDR, LAN/WLAN, Troubleshooting Rak Server.
- Pemrograman & Web: Kotlin (Android Compose), TypeScript, React, Next.js, Python, Scikit-Learn, Chrome MV3 Extension, Git/GitHub.
- Kreatif & Multimedia: CapCut, Canva, Premiere Pro, Figma, Desain Grafis, Video Editing, On-Camera Talent & Public Speaking.
- Perkantoran & Administrasi: Microsoft Office, Google Workspace, Komputer Administrasi Perkantoran, Manajemen Data Lapangan.`;

  const handleCopy = () => {
    playCelebrationChime();
    navigator.clipboard.writeText(atsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto"
      onClick={() => {
        playTactileClick(900);
        onClose();
      }}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-4 bg-slate-900 text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
              <FileCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-heading font-extrabold tracking-tight">
                  Curriculum Vitae // M. Adhe Akbar, S.Kom.
                </h3>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-mono font-bold">
                  ATS Verified
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">
                Ringkasan Eksekutif &amp; Dokumen Kualifikasi Resmi Terverifikasi
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Switcher */}
            <div className="hidden sm:flex bg-slate-800 p-1 rounded-xl text-xs font-mono">
              <button
                onClick={() => {
                  playTactileClick(1100);
                  setActiveTab('preview');
                }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'preview' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Tampilan Rapi
              </button>
              <button
                onClick={() => {
                  playTactileClick(1150);
                  setActiveTab('ats_text');
                }}
                className={`px-3 py-1 rounded-lg transition-all ${
                  activeTab === 'ats_text' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Teks ATS
              </button>
            </div>

            {/* Print / Save PDF */}
            <button
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono font-semibold flex items-center gap-1.5 transition-all cursor-pointer click-pop border border-slate-700"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden md:inline">Cetak / PDF</span>
            </button>

            {/* Copy ATS Text */}
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer click-pop shadow-xs"
              title="Salin seluruh teks CV untuk sistem ATS"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Salin ATS</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                playTactileClick(900);
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/40 text-slate-400 hover:text-white transition-all cursor-pointer ml-1"
              title="Tutup (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body (Scrollable) */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1 bg-[#F8FAFC]">
          {activeTab === 'preview' ? (
            <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8 space-y-7 text-[#0F172A] print:shadow-none print:border-none print:p-0">
              
              {/* Header CV */}
              <div className="border-b border-slate-200 pb-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-heading font-black tracking-tight text-[#0B1E3D]">
                      M. ADHE AKBAR, S.Kom.
                    </h1>
                    <p className="text-sm font-sans font-semibold text-blue-700 mt-0.5">
                      IT Infrastructure &amp; Network Support · Software &amp; AI Developer · Content Creator
                    </p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right font-mono text-xs text-slate-500 space-y-0.5">
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> Bandar Lampung, Indonesia
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-slate-400" /> +62 895-6365-71654
                    </div>
                    <div className="flex items-center sm:justify-end gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-slate-400" /> akbarade496@gmail.com
                    </div>
                  </div>
                </div>

                {/* Ringkasan Profil */}
                <div className="mt-4 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs sm:text-[13px] leading-relaxed text-slate-700 font-sans">
                  <strong className="text-slate-900 font-bold">Ringkasan Profesional: </strong>
                  Lulusan Sarjana Komputer (S1) Universitas Teknokrat Indonesia predikat Cum Laude (IPK 3.59/4.00) dan tersertifikasi resmi BNSP KKNI Level II Teknik Komputer dan Jaringan. Memadukan keahlian teknis operasional jaringan (Fiber Optic, MikroTik, Cisco, OPM/OTDR), riset Machine Learning terakreditasi SINTA 3, serta pengalaman komunikasi kedinasan di BAPPEDA Provinsi Lampung (30+ konten publikasi kedinasan: berita acara, dokumentasi, dan reels). Terbukti berdaya saing tinggi dengan meraih Trifecta Juara Teknokrat Academic Expo 2025 (Juara 1 Animasi, Juara 2 Machine Learning, Juara 3 AR/VR) serta Finalis Muli Mekhanai Pesawaran 2023 dan Finalis Brand Ambassador Jaya Bakery.
                </div>
              </div>

              {/* 1. Pengalaman Kerja & Magang */}
              <div>
                <h2 className="flex items-center gap-2 text-sm font-mono font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-4">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  Pengalaman Kerja &amp; Magang (4 Instansi Terverifikasi)
                </h2>

                <div className="space-y-4">
                  {/* BAPPEDA */}
                  <div className="border-l-2 border-blue-500 pl-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-slate-900 font-heading">
                        Content Creator, Video Editor &amp; On-Camera Talent
                      </h3>
                      <span className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 self-start sm:self-auto font-bold">
                        Juli 2025 – September 2025
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      BAPPEDA Provinsi Lampung · Magang Pemerintah Daerah
                    </div>
                    <ul className="list-disc list-outside ml-4 mt-2 text-xs text-slate-600 space-y-1 font-sans leading-relaxed">
                      <li>Memproduksi dan menyunting 30+ konten video publikasi pembangunan daerah menggunakan CapCut dan Canva dengan retensi tinggi.</li>
                      <li>Menjadi on-camera talent (pembawa acara) utama serta penulis naskah liputan resmi kedinasan dan paparan RKPD.</li>
                      <li>Berkolaborasi dengan Humas instansi dalam merancang strategi publikasi media sosial dan siaran pers resmi.</li>
                    </ul>
                  </div>

                  {/* LITA GLOBAL */}
                  <div className="border-l-2 border-purple-500 pl-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-slate-900 font-heading">
                        Freelance Player &amp; Digital Community Companion
                      </h3>
                      <span className="text-[11px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-100 self-start sm:self-auto font-bold">
                        September 2024 – Agustus 2026
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      Lita Global Platform · Pekerja Lepas (Remote)
                    </div>
                    <ul className="list-disc list-outside ml-4 mt-2 text-xs text-slate-600 space-y-1 font-sans leading-relaxed">
                      <li>Menyelesaikan dan mengelola lebih dari 4.500 pesanan layanan digital dengan mempertahankan rating 5.0-Stars konsisten.</li>
                      <li>Menerapkan komunikasi cepat dan adaptif dalam melayani pengguna lintas komunitas digital global.</li>
                      <li>Mengembangkan retensi dan loyalitas pelanggan melalui koordinasi tim dan pemecahan masalah secara real-time.</li>
                    </ul>
                  </div>

                  {/* TEMAN BAIK */}
                  <div className="border-l-2 border-amber-500 pl-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-slate-900 font-heading">
                        Field Data Enumerator &amp; Distribution Staff
                      </h3>
                      <span className="text-[11px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100 self-start sm:self-auto font-bold">
                        Oktober 2023 – Juni 2024
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      Teman Baik Lampung · Kontrak Paruh Waktu
                    </div>
                    <ul className="list-disc list-outside ml-4 mt-2 text-xs text-slate-600 space-y-1 font-sans leading-relaxed">
                      <li>Melakukan survei lapangan door-to-door menggunakan aplikasi mobile untuk validasi database penerima manfaat.</li>
                      <li>Memverifikasi integritas, akurasi berkas, dan titik koordinat GPS kependudukan sebelum penyaluran logistik.</li>
                      <li>Berkoordinasi dengan aparatur desa dan tim lapangan, menuntaskan target wilayah 100% tepat waktu.</li>
                    </ul>
                  </div>

                  {/* PT SMS */}
                  <div className="border-l-2 border-emerald-500 pl-3.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-sm font-bold text-slate-900 font-heading">
                        IT Support Technician &amp; Operations Intern
                      </h3>
                      <span className="text-[11px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100 self-start sm:self-auto font-bold">
                        Juni 2021 – Oktober 2021
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-slate-600 mt-0.5">
                      PT Sumatra Multimedia Solusi (PT SMS) · Magang Industri Jaringan (<a href="https://sms.net.id/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">sms.net.id</a>)
                    </div>
                    <ul className="list-disc list-outside ml-4 mt-2 text-xs text-slate-600 space-y-1 font-sans leading-relaxed">
                      <li>Melakukan penarikan, terminasi, dan penyambungan kabel serat optik (fusion splicing) di lapangan.</li>
                      <li>Menguji redaman sinyal menggunakan Optical Power Meter (OPM) dengan standar redaman optimal -18.2 dBm.</li>
                      <li>Melakukan manajemen kabel dan pemeliharaan perangkat aktif pada rak server operasional.</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 2. Pendidikan Formal */}
              <div>
                <h2 className="flex items-center gap-2 text-sm font-mono font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-4">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  Riwayat Pendidikan Formal
                </h2>

                <div className="space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        Universitas Teknokrat Indonesia
                      </div>
                      <div className="text-xs text-slate-600">
                        S1 Informatika (S.Kom.) · Riset Publikasi SINTA 3
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-mono text-xs font-bold border border-emerald-200">
                        IPK 3.59 (Cum Laude)
                      </span>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">2022 – 2026</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        SMKN 1 Bandar Lampung
                      </div>
                      <div className="text-xs text-slate-600">
                        Teknik Komputer dan Jaringan (TKJ) · Tersertifikasi BNSP KKNI Level II
                      </div>
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-mono text-xs font-bold border border-blue-200">
                        Nilai Rata-rata 86.33
                      </span>
                      <div className="text-[10px] font-mono text-slate-500 mt-0.5">2019 – 2022</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Sertifikasi Resmi & Lisensi */}
              <div>
                <h2 className="flex items-center gap-2 text-sm font-mono font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-4">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  Sertifikasi Profesi &amp; Lisensi Resmi (5 Sertifikat)
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="font-bold text-slate-900">1. Sertifikat Kompetensi BNSP KKNI Level II</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Teknisi Jaringan dan Sistem Komputer</div>
                    <div className="font-mono text-[10px] text-blue-700 mt-1">No. Reg: J.777 00014 2022</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="font-bold text-slate-900">2. Sertifikat Pelatihan MikroTik</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Routing &amp; Network Configuration (LPBM UTI)</div>
                    <div className="font-mono text-[10px] text-blue-700 mt-1">No: 0059/G.121/IIb2.3/2025</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="font-bold text-slate-900">3. Sertifikat Jaringan &amp; Troubleshooting</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Kompetensi Pemecahan Masalah Jaringan (UTI)</div>
                    <div className="font-mono text-[10px] text-blue-700 mt-1">No: 0030/G.121/IIa2.3/2026</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                    <div className="font-bold text-slate-900">4. Sertifikat Desain Grafis (SKPI Nilai A)</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Komunikasi Visual &amp; Branding Berstandar Industri</div>
                    <div className="font-mono text-[10px] text-blue-700 mt-1">No: 0007/G.121/IIa2.3/2026</div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:col-span-2">
                    <div className="font-bold text-slate-900">5. Sertifikat Komputer Administrasi Perkantoran</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">Pengelolaan Dokumen, Arsip Digital &amp; Spreadsheet Berbasis Kompetensi (LPBM UTI)</div>
                    <div className="font-mono text-[10px] text-blue-700 mt-1">No: 0248/G.121/IIa2.1/2025</div>
                  </div>
                </div>
              </div>

              {/* 4. Prestasi & Penghargaan */}
              <div>
                <h2 className="flex items-center gap-2 text-sm font-mono font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-4">
                  <Award className="w-4 h-4 text-blue-600" />
                  Prestasi &amp; Rekognisi Unggulan
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 flex items-start gap-2">
                    <span className="text-base">🥇</span>
                    <div>
                      <div className="font-bold text-amber-900">Juara 1 Animasi Game 2D/3D</div>
                      <div className="text-[11px] text-amber-800">Teknokrat Academic Expo 2025 (Piagam No. 050/UTI)</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200 flex items-start gap-2">
                    <span className="text-base">🥈</span>
                    <div>
                      <div className="font-bold text-purple-900">Juara 2 Machine Learning AI</div>
                      <div className="text-[11px] text-purple-800">Teknokrat Academic Expo 2025 (Model Prediksi Sentimen)</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 flex items-start gap-2">
                    <span className="text-base">🥉</span>
                    <div>
                      <div className="font-bold text-sky-900">Juara 3 Augmented Reality (AR/VR)</div>
                      <div className="text-[11px] text-sky-800">Teknokrat Academic Expo 2025 (Teknokrat Portal AR)</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-start gap-2">
                    <span className="text-base">📄</span>
                    <div>
                      <div className="font-bold text-emerald-900">Publikasi Riset Ilmiah SINTA 3</div>
                      <div className="text-[11px] text-emerald-800">Jurnal Nasional Terakreditasi (Januari 2026)</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Matriks Keahlian Teknis */}
              <div>
                <h2 className="flex items-center gap-2 text-sm font-mono font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 mb-3">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  Keahlian Teknis &amp; Alat Kerja (Skills &amp; Tools)
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <div className="font-bold text-slate-800 mb-1">Infrastruktur &amp; IT Support:</div>
                    <p className="text-slate-600 font-sans leading-relaxed">
                      MikroTik RouterOS, Cisco Packet Tracer, Fiber Optic Splicing, OPM, OTDR, LAN/WLAN, Troubleshooting Rak Server.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-slate-800 mb-1">Software &amp; AI Development:</div>
                    <p className="text-slate-600 font-sans leading-relaxed">
                      Kotlin (Android Jetpack Compose), TypeScript, React, Next.js, Python, Scikit-Learn, Chrome Extension MV3, Git.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-slate-800 mb-1">Media Kreatif &amp; Komunikasi:</div>
                    <p className="text-slate-600 font-sans leading-relaxed">
                      CapCut, Canva Pro, Figma, Adobe Premiere Pro, On-Camera Talent, Desain Grafis, Naskah Video.
                    </p>
                  </div>

                  <div>
                    <div className="font-bold text-slate-800 mb-1">Administrasi &amp; Operasi:</div>
                    <p className="text-slate-600 font-sans leading-relaxed">
                      Komputer Administrasi Perkantoran, Google Workspace, Validasi Survei Mobile, CRM Digital.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            /* ATS Plain Text View */
            <div className="max-w-3xl mx-auto bg-slate-900 text-slate-100 rounded-2xl p-6 font-mono text-xs leading-relaxed overflow-x-auto shadow-inner border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
                <span className="text-emerald-400 font-bold">// Format Plain Text Siap Disalin ke ATS / Email Lamaran</span>
                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold cursor-pointer transition-all flex items-center gap-1"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Tersalin!' : 'Salin Semua'}</span>
                </button>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-[11px] text-slate-300 select-all">
                {atsText}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-600 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Kandidat Profesional &amp; Dokumen Resmi Terverifikasi</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="text-blue-700 hover:text-blue-900 font-bold flex items-center gap-1 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Halaman Ini</span>
            </button>
            <span className="text-slate-300">|</span>
            <button
              onClick={() => {
                playTactileClick(900);
                onClose();
              }}
              className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold cursor-pointer transition-all"
            >
              Tutup Pratinjau
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
