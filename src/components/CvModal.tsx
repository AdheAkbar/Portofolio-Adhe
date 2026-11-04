import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  ExternalLink, 
  Download,
  FileCheck,
  FileText
} from 'lucide-react';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'pdf' | 'ats_text'>('pdf');

  if (!isOpen) return null;

  const pdfUrl = '/assets/CV_M_Adhe_Akbar_ATS.pdf';

  const atsText = `CURRICULUM VITAE
M. ADHE AKBAR, S.Kom.
Bandar Lampung, Lampung, Indonesia | +62 895-6365-71654 | akbarade496@gmail.com
LinkedIn: linkedin.com/in/madheakbar | GitHub: github.com/AdheAkbar

RINGKASAN EKSEKUTIF / SUMMARY PROFILE
Lulusan S1 Informatika Universitas Teknokrat Indonesia (IPK 3,59/4,00, Cum Laude) dengan fokus utama pada pengembangan perangkat lunak fullstack, operasional jaringan IT, serta administrasi dan dokumentasi sistem. Penulis Pertama jurnal ilmiah terakreditasi nasional SINTA 3 (Jurnal BITS 2026) mengenai analisis sentimen 18.869 ulasan pengguna aplikasi dompet digital (DANA, OVO, LinkAja, DOKU) menggunakan Machine Learning Naive Bayes dengan capaian akurasi 88,5% dan AUC-ROC 0,9237. Membangun 26 repositori proyek publik di GitHub (github.com/AdheAkbar), antara lain portal pelaporan insiden siber CSIRT, website B2B ekspor kopi, ekstensi pengisi formulir web otomatis (autofill), kalkulator saham otomatis, dan aplikasi keuangan Android. Berpengalaman membakukan SOP internal dan mencatat notulensi rapat lintas bidang di BAPPEDA Provinsi Lampung (30+ konten publikasi resmi), menangani operasional jaringan ISP (fiber optic splicing, MikroTik, OPM/OTDR, NOC/FOC) di PT Sumatra Multimedia Solusi, serta menyelesaikan 4.500+ transaksi layanan digital dengan waktu respon di bawah 5 menit. Siap berkontribusi secara adaptif pada bidang pengembangan perangkat lunak, operasional & dukungan IT, dokumentasi sistem, maupun peningkatan efisiensi proses kerja.

PENDIDIKAN FORMAL
1. Universitas Teknokrat Indonesia — Bandar Lampung (September 2022 – Juli 2026)
   - S1 Informatika (S.Kom.), Computer Science | IPK: 3,59 / 4,00 (Cum Laude)
   - Publikasi Ilmiah SINTA 3 (Penulis Pertama): “Perbandingan Algoritma Naive Bayes dan K-Nearest Neighbor untuk Analisis Sentimen Pengguna Dompet Digital di Google Play Store” (Jurnal BITS 2026).
   - Prestasi Teknokrat Academic Expo 2025: Juara 1 Animasi 2D/3D, Juara 2 Machine Learning (Python), Juara 3 Augmented Reality & Virtual Reality (AR/VR).
   - Sertifikasi Kompetensi (SKPI) Nilai A: Pelatihan Jaringan MikroTik, Kompetensi Jaringan Komputer & Troubleshooting, Kompetensi Administrasi Perkantoran, Kompetensi Desain Grafis.

2. SMKN 1 Bandar Lampung (Juli 2019 – Juni 2022)
   - Jurusan: Teknik Komputer dan Jaringan (TKJ)
   - Sertifikasi Profesi Nasional (BNSP): Ahli Kompeten Teknik Komputer & Jaringan (MikroTik Networking), KKNI Level II.

PENGALAMAN KERJA & MAGANG
1. BAPPEDA Provinsi Lampung (Badan Perencanaan Pembangunan Daerah) — Bandar Lampung (Juli 2025 – September 2025)
   IT Administrative, Public Relations & Digital Content Intern
   - Mereview dan membakukan dokumen SOP internal pada beberapa bidang serta mencatat notulensi rapat lintas bidang secara terstruktur untuk meningkatkan ketertiban administrasi dinas.
   - Menyunting sekitar 30 konten publikasi campuran (berita acara, dokumentasi kegiatan, hingga konten Instagram reel) serta materi publikasi lainnya menggunakan CapCut dan Canva.
   - Menulis naskah kegiatan kedinasan dan tampil sebagai on-camera talent edukasi dari sudut pandang mahasiswa untuk menyampaikan informasi program dinas secara komunikatif.

2. Lita Global Platform — Remote / Online (September 2024 – Agustus 2026)
   Freelance Player & Digital Client Relations Specialist, Self-Employed
   - Menyelesaikan lebih dari 4.500 order layanan interaktif digital dengan mempertahankan penilaian pelanggan bintang 5 (5,0/5,0) secara konsisten.
   - Menjaga kecepatan waktu respon komunikasi di bawah 5 menit serta mempertahankan standar layanan dan retensi pengguna secara berkelanjutan.

3. Teman Baik Lampung — Kota Bandar Lampung (Oktober 2023 – Juni 2024)
   Field Data Enumerator & Distribution Staff
   - Melakukan survei lapangan door-to-door dan pengumpulan data digital melalui aplikasi mobile untuk pemetaan penerima manfaat secara akurat.
   - Memvalidasi integritas data penerima sebelum distribusi bantuan dan berkoordinasi dengan tim lapangan agar target penyaluran selesai tepat waktu.

4. PT Sumatra Multimedia Solusi (PT SMS) — Bandar Lampung (Juni 2021 – Oktober 2021)
   IT Support, NOC & FOC Technician (Internship)
   - Menjalankan operasional NOC/FOC meliputi monitoring trafik jaringan, diagnosa titik gangguan link, pengukuran redaman (OPM/OTDR), dan troubleshooting konektivitas fiber optic.
   - Menangani technical support perangkat keras, perangkat lunak, penyambungan fiber optic splicing, dan jaringan LAN/WAN (MikroTik), termasuk pemeliharaan preventif serta koordinasi instalasi pelanggan.

PROYEK UNGGULAN GITHUB & PKM (26 REPOSITORI PUBLIK)
- Portal Pelaporan Insiden CSIRT (PHP, MySQL, AES-256-CBC, reCAPTCHA, Firebase)
- Autofill_maganghub (Chrome Extension MV3, DOM MutationObserver)
- Adimology / adhemology (Next.js 16, TypeScript, Supabase, Playwright, Gemini AI, jsPDF)
- Adhebank (Kotlin, Jetpack Compose, MVVM, Room, Coroutines & StateFlow)
- AromaSource Global / coffee_wan (PHP MVC B2B Ekspor Kopi)
- Jelajah Quiz (Construct 3 Game Edukasi SD Negeri 2 Bumisari, PKM 60+ Siswa)
- Website Pemasaran Vaganza Village & Sinia Coffee (PKM Digital Branding)

SERTIFIKASI PROFESI & KOMPETENSI RESMI
1. Sertifikat Kompetensi BNSP KKNI Level II Teknik Komputer dan Jaringan (Reg: J.777 00014 2022)
2. Sertifikat Pelatihan MikroTik RouterOS (LPBM UTI No: 0059/G.121/IIb2.3/2025)
3. Sertifikat Kompetensi Jaringan Komputer & Troubleshooting (LPBM UTI No: 0030/G.121/IIa2.3/2026)
4. Sertifikat Kompetensi Administrasi Perkantoran (LPBM UTI No: 0248/G.121/IIa2.1/2025)
5. Sertifikat Kompetensi Desain Grafis (LPBM UTI No: 0007/G.121/IIa.2.3/2024)

PRESTASI & BRANDING
- Juara 1 Animasi 2D/3D — Teknokrat Academic Expo 2025 (Piagam: 050/UTI/A-EXPO/B.12/VI/2025)
- Juara 2 Machine Learning in Python — Teknokrat Academic Expo 2025
- Juara 3 Augmented Reality (AR/VR) — Teknokrat Academic Expo 2025 (Piagam: 062/UTI/A-EXPO/B.11/I/2025)
- Finalis Brand Ambassador Jaya Bakery 2023 (Top 15 Finalist)
- Grand Finalist Muli Mekhanai Kabupaten Pesawaran 2023`;

  const handleCopy = () => {
    navigator.clipboard.writeText(atsText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/75 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[94vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar (Two-Tier Clean Layout) */}
        <div className="px-4 sm:px-6 py-3.5 bg-slate-900 text-white shrink-0 flex flex-col gap-2.5">
          {/* Row 1: Title, Verification Badge, Download & Close */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs shrink-0">
                <FileCheck className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm sm:text-base font-heading font-extrabold tracking-tight truncate">
                    CV Resmi Format ATS
                  </h3>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-[10px] font-mono font-bold shrink-0">
                    PDF 2 Halaman
                  </span>
                </div>
                <p className="hidden sm:block text-[11px] text-slate-400 font-sans truncate">
                  M. Adhe Akbar, S.Kom. · Terverifikasi S1 Informatika Cum Laude &amp; BNSP
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Direct Download Button */}
              <a
                href={pdfUrl}
                download="CV_M_Adhe_Akbar_ATS.pdf"
                className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono font-bold inline-flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                title="Download Berkas PDF Resmi"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download PDF</span>
                <span className="sm:hidden">Unduh</span>
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-rose-900/40 text-slate-400 hover:text-white transition-all cursor-pointer"
                title="Tutup (Esc)"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Row 2: Tab Switcher & Fullscreen Tab Launcher */}
          <div className="flex items-center justify-between gap-2 border-t border-slate-800/80 pt-2 text-xs font-mono">
            <div className="flex bg-slate-800 p-0.5 sm:p-1 rounded-xl">
              <button
                onClick={() => setActiveTab('pdf')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'pdf' ? 'bg-blue-600 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Pratinjau PDF Asli
              </button>
              <button
                onClick={() => setActiveTab('ats_text')}
                className={`px-3 py-1 rounded-lg transition-all cursor-pointer ${
                  activeTab === 'ats_text' ? 'bg-blue-600 text-white font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                Teks Plain ATS
              </button>
            </div>

            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] text-slate-300 hover:text-white transition-colors"
              title="Buka PDF di Tab Baru"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Buka di Tab Baru ↗</span>
            </a>
          </div>
        </div>

        {/* Modal Body */}
        <div className="flex-1 bg-slate-100 p-2 sm:p-4 overflow-hidden flex flex-col">
          {activeTab === 'pdf' ? (
            <div className="w-full flex-1 flex flex-col bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-inner">
              {/* PDF Header Action Strip */}
              <div className="px-4 py-2 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs font-sans text-slate-600 shrink-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-slate-800">Dokumen Berkas Asli: CV M. Adhe Akbar (ATS)</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-[11px] font-mono text-slate-500">202 KB · Standar Seleksi MagangHub / BUMN</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={pdfUrl}
                    download="CV_M_Adhe_Akbar_ATS.pdf"
                    className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900 font-semibold text-xs"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Berkas</span>
                  </a>
                  <span className="text-slate-300">·</span>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900 font-semibold text-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Buka Penuh</span>
                  </a>
                </div>
              </div>

              {/* Embedded PDF iframe */}
              <div className="w-full flex-1 min-h-[62vh] md:min-h-[72vh] bg-slate-200 relative">
                <iframe
                  src={`${pdfUrl}#toolbar=1&navpanes=0&view=FitH`}
                  className="w-full h-full border-0 absolute inset-0"
                  title="Dokumen Resmi CV ATS M. Adhe Akbar, S.Kom."
                />
              </div>

              {/* Mobile Friendly Helper Note */}
              <div className="p-2 sm:p-2.5 bg-blue-50/70 border-t border-blue-100 flex items-center justify-between text-[11px] text-blue-900 font-sans px-4 shrink-0">
                <span>
                  💡 <em>Jika pratinjau PDF tidak tampil di sebagian peramban seluler, gunakan tombol <strong>Download PDF</strong> atau <strong>Buka Penuh</strong>.</em>
                </span>
                <a
                  href={pdfUrl}
                  download="CV_M_Adhe_Akbar_ATS.pdf"
                  className="font-bold underline text-blue-700 shrink-0 ml-2"
                >
                  Download (.pdf)
                </a>
              </div>
            </div>
          ) : (
            /* ATS Plain Text View */
            <div className="w-full flex-1 max-w-4xl mx-auto bg-slate-900 text-slate-100 rounded-2xl p-4 sm:p-6 font-mono text-xs leading-relaxed overflow-y-auto shadow-inner border border-slate-800">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-800">
                <span className="text-emerald-400 font-bold">// Format Plain Text Siap Disalin ke Formulir ATS / Portal Rekrutmen</span>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-300" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Tersalin!' : 'Salin Semua'}</span>
                </button>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-[11px] text-slate-300 select-all leading-relaxed">
                {atsText}
              </pre>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 sm:px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-600 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-sans text-[11px] sm:text-xs text-slate-700">
              Lampiran Resmi CV ATS: S1 Informatika Cum Laude (IPK 3.59) · BNSP KKNI II · Riset SINTA 3
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={pdfUrl}
              download="CV_M_Adhe_Akbar_ATS.pdf"
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs flex items-center gap-1.5 transition-all shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF Asli</span>
            </a>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-slate-900 hover:bg-black text-white font-bold cursor-pointer transition-all"
            >
              Tutup
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
