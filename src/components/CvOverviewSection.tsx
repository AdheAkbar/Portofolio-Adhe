import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { 
  FileText, 
  Briefcase, 
  GraduationCap, 
  ShieldCheck, 
  Award, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  ExternalLink,
  Printer,
  Copy,
  Hash,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Building2,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';

interface CvOverviewSectionProps {
  onOpenCvModal: () => void;
}

export const CvOverviewSection: React.FC<CvOverviewSectionProps> = ({ onOpenCvModal }) => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });
  const [activeTab, setActiveTab] = useState<'all' | 'work' | 'education' | 'certs'>('all');

  const scrollToSlide = (elementId: string) => {
    playTactileClick(1100);
    const el = document.getElementById(elementId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="cv-lengkap" 
      className="py-14 md:py-20 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#FFFFFF] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Dokumen Resmi // Ringkasan Riwayat Hidup (Curriculum Vitae)
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">Data Profil Terverifikasi</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Data CV terverifikasi
            </span>
          </div>
        </div>

        {/* Section Header with Quick ATS Modal Trigger */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 mb-8 relative">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-800 mb-2 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <FileText className="w-3.5 h-3.5 text-blue-600" />
              <span>RINGKASAN RIWAYAT HIDUP (CV)</span>
            </div>

            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Curriculum Vitae Lengkap <span className="text-blue-700">M. Adhe Akbar, S.Kom.</span>
            </h2>

            <p className={`font-serif-italic text-base sm:text-lg text-blue-700 mt-0.5 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Ringkasan Terstruktur: Pendidikan Cum Laude · 4 Pengalaman Kerja · 5 Sertifikasi Profesi · Prestasi Juara
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini merangkum data diri, pendidikan, pengalaman kerja, dan sertifikasi resmi saya agar mudah dipahami dalam satu tampilan. Setiap riwayat terhubung langsung ke bagian portofolio terkait untuk melihat bukti fisik lengkapnya.
            </p>
          </div>

          {/* Right Action: Open Modal & Quick Stats */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <button
              onClick={() => {
                playCelebrationChime();
                onOpenCvModal();
              }}
              className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer click-pop"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Buka Dokumen CV Standar ATS</span>
              <ArrowUpRight className="w-4 h-4 opacity-75" />
            </button>
          </div>
        </div>

        {/* 1. Executive Biodata Pill Strip */}
        <div className={`bg-slate-50/90 rounded-2xl border border-slate-200/90 p-4 sm:p-5 mb-8 shadow-2xs transition-all ${
          isInView ? 'animate-reveal-up delay-100' : ''
        }`}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-sans">
            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Nama Lengkap</span>
              <span className="font-bold text-slate-900 truncate block">M. Adhe Akbar, S.Kom.</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Pendidikan</span>
              <span className="font-bold text-blue-700 truncate block">S1 UTI (IPK 3.59)</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Sertifikasi Utama</span>
              <span className="font-bold text-emerald-700 truncate block">BNSP KKNI Level II</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Domisili</span>
              <span className="font-bold text-slate-800 truncate block">Bandar Lampung</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Kontak WhatsApp</span>
              <span className="font-bold text-slate-800 truncate block">+62 895-6365-71654</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200">
              <span className="text-[10px] font-mono text-slate-400 uppercase block">Status Ketersediaan</span>
              <span className="font-bold text-emerald-600 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Siap Magang/Kerja
              </span>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1.5">
          {[
            { id: 'all', label: 'SEMUA REKAM JEJAK (ALL-IN-ONE)' },
            { id: 'work', label: 'PENGALAMAN KERJA (4 INSTANSI)' },
            { id: 'education', label: 'PENDIDIKAN & PRESTASI' },
            { id: 'certs', label: '5 SERTIFIKASI RESMI' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                playTactileClick(1100);
                setActiveTab(tab.id as any);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer click-pop ${
                activeTab === tab.id
                  ? 'bg-[#0B1E3D] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-black hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Container */}
        <div className="space-y-8">
          
          {/* SECTION A: PENGALAMAN KERJA (4 INSTANSI) */}
          {(activeTab === 'all' || activeTab === 'work') && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-heading font-extrabold text-slate-900 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-600" />
                  Pengalaman Kerja &amp; Magang Terstruktur (4 Instansi)
                </h3>
                <span className="text-xs font-mono text-slate-400">Total 4 Pengalaman Riil</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. BAPPEDA */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono font-bold border border-blue-200">
                        Pemerintah Daerah · Humas
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        Juli 2025 – Sept 2025
                      </span>
                    </div>

                    <h4 className="text-base font-heading font-bold text-slate-900">
                      BAPPEDA Provinsi Lampung
                    </h4>
                    <p className="text-xs font-semibold text-blue-700 font-sans mt-0.5 mb-3">
                      Content Creator, Video Editor &amp; On-Camera Talent
                    </p>

                    <ul className="text-xs text-slate-600 space-y-1.5 font-sans leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span><strong>30+ Konten Video:</strong> Memproduksi video publikasi resmi pembangunan daerah menggunakan CapCut &amp; Canva.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span><strong>On-Camera Talent:</strong> Talent video publikasi dengan sudut pandang mahasiswa dan penulis naskah program kedinasan &amp; RKPD.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span><strong>Publikasi Publik:</strong> Kolaborasi dengan divisi Humas meningkatkan interaksi medsos instansi.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Bukti: Seksi BAPPEDA</span>
                    <button
                      onClick={() => scrollToSlide('bappeda')}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-blue-700 hover:text-blue-900 cursor-pointer"
                    >
                      <span>Lihat Modul Lengkap</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 2. LITA GLOBAL */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-purple-300 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-700 text-[10px] font-mono font-bold border border-purple-200">
                        Digital Community · Global Platform
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        Sept 2024 – Ags 2026
                      </span>
                    </div>

                    <h4 className="text-base font-heading font-bold text-slate-900">
                      Lita Global (Freelance Digital Talent)
                    </h4>
                    <p className="text-xs font-semibold text-purple-700 font-sans mt-0.5 mb-3">
                      4.500+ Sesi Layanan Selesai · Rating Bintang 5
                    </p>

                    <ul className="text-xs text-slate-600 space-y-1.5 font-sans leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                        <span><strong>Komunikasi Cepat:</strong> Menjaga SLA respon di bawah 5 menit secara konsisten.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                        <span><strong>Pelayanan Bintang Lima:</strong> Meraih 100% ulasan positif pada 4.500+ pesanan pengguna.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                        <span><strong>Manajemen Komunitas:</strong> Koordinasi real-time dan retensi pelanggan lintas komunitas digital.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Bukti: Seksi Lita Global</span>
                    <button
                      onClick={() => scrollToSlide('lita-global')}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-purple-700 hover:text-purple-900 cursor-pointer"
                    >
                      <span>Lihat Modul Lengkap</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 3. TEMAN BAIK */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-amber-300 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-mono font-bold border border-amber-200">
                        Operasi Data Lapangan · Logistik
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        Okt 2023 – Juni 2024
                      </span>
                    </div>

                    <h4 className="text-base font-heading font-bold text-slate-900">
                      Teman Baik Lampung
                    </h4>
                    <p className="text-xs font-semibold text-amber-700 font-sans mt-0.5 mb-3">
                      Field Data Enumerator &amp; Distribution Staff
                    </p>

                    <ul className="text-xs text-slate-600 space-y-1.5 font-sans leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span><strong>Survei Mobile Door-to-Door:</strong> Verifikasi kependudukan penerima manfaat secara terstruktur di lapangan.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span><strong>Integritas Database:</strong> Rekonsiliasi data kependudukan dan titik koordinat GPS sebelum penyaluran logistik.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span><strong>Target Tepat Waktu:</strong> Menyelesaikan 100% target wilayah tanpa anomali data lapangan.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Bukti: Seksi Lapangan</span>
                    <button
                      onClick={() => scrollToSlide('field-operations')}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-amber-700 hover:text-amber-900 cursor-pointer"
                    >
                      <span>Lihat Modul Lengkap</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 4. PT SMS */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">
                        Infrastruktur Jaringan · NOC/FOC
                      </span>
                      <span className="text-xs font-mono text-slate-500 font-semibold">
                        Juni 2021 – Okt 2021
                      </span>
                    </div>

                    <h4 className="text-base font-heading font-bold text-slate-900 flex items-center justify-between">
                      <span>PT Sumatra Multimedia Solusi (PT SMS)</span>
                      <a href="https://sms.net.id/" target="_blank" rel="noreferrer" className="text-[11px] font-mono text-blue-600 hover:underline flex items-center gap-0.5 font-normal">
                        <span>sms.net.id</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </h4>
                    <p className="text-xs font-semibold text-emerald-700 font-sans mt-0.5 mb-3">
                      IT Support Technician &amp; Operations Intern
                    </p>

                    <ul className="text-xs text-slate-600 space-y-1.5 font-sans leading-relaxed">
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Fusion Splicing:</strong> Penyambungan core serat optik dan terminasi OTB di lapangan secara presisi.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Pengujian OPM:</strong> Kalibrasi redaman sinyal optik dengan nilai optimal industri -18.2 dBm.</span>
                      </li>
                      <li className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span><strong>Maintenance Server:</strong> Penataan kabel dan pemeliharaan perangkat aktif di rak server operasional.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Bukti: Seksi Fiber Optik</span>
                    <button
                      onClick={() => scrollToSlide('field-operations')}
                      className="inline-flex items-center gap-1 text-xs font-mono font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                    >
                      <span>Lihat Modul Lengkap</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SECTION B: PENDIDIKAN & PRESTASI */}
          {(activeTab === 'all' || activeTab === 'education') && (
            <div className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-heading font-extrabold text-slate-900 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-blue-600" />
                  Pendidikan Formal &amp; Prestasi Akademik
                </h3>
                <span className="text-xs font-mono text-slate-400">Cum Laude &amp; 3x Juara</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Pendidikan S1 UTI */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-mono font-bold border border-emerald-200">
                      Sarjana Komputer (S.Kom.)
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold">2022 – 2026</span>
                  </div>

                  <h4 className="text-base font-heading font-extrabold text-slate-900">
                    Universitas Teknokrat Indonesia
                  </h4>
                  <p className="text-xs font-semibold text-blue-700 mt-0.5 mb-2">
                    S1 Informatika · IPK 3.59 / 4.00 (Cum Laude)
                  </p>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed mb-3">
                    Fokus riset klasifikasi Machine Learning dengan publikasi di Jurnal Nasional Terakreditasi SINTA 3. Finalis Brand Ambassador Jaya Bakery dan Finalis Muli Mekhanai Pesawaran 2023.
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 text-[11px]">Bukti: Seksi Pendidikan</span>
                    <button
                      onClick={() => scrollToSlide('pendidikan')}
                      className="font-mono font-bold text-blue-700 hover:text-blue-900 cursor-pointer flex items-center gap-1"
                    >
                      <span>Lihat Piagam Kelulusan</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* SMKN 1 TKJ */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-[10px] font-mono font-bold border border-blue-200">
                      Teknik Komputer &amp; Jaringan
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold">2019 – 2022</span>
                  </div>

                  <h4 className="text-base font-heading font-extrabold text-slate-900">
                    SMKN 1 Bandar Lampung
                  </h4>
                  <p className="text-xs font-semibold text-blue-700 mt-0.5 mb-2">
                    Nilai Rata-rata Ijazah 86.33 · Sertifikasi BNSP KKNI II
                  </p>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed mb-3">
                    Fondasi kuat perakitan komputer, konfigurasi MikroTik Router, pengkabelan terstruktur LAN/WLAN, dan lulus uji sertifikasi kompetensi nasional BNSP.
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 text-[11px]">Bukti: Ijazah &amp; Nilai</span>
                    <button
                      onClick={() => scrollToSlide('pendidikan')}
                      className="font-mono font-bold text-blue-700 hover:text-blue-900 cursor-pointer flex items-center gap-1"
                    >
                      <span>Lihat Rincian Nilai</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 3. TRIFECTA EXPO 2025 */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[10px] font-mono font-bold border border-amber-200">
                      KOMPETISI TEKNOLOGI
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold">Tahun 2025</span>
                  </div>

                  <h4 className="text-base font-heading font-extrabold text-slate-900">
                    Trifecta Juara Expo 2025 (3 Predikat Juara)
                  </h4>
                  <p className="text-xs font-semibold text-amber-700 mt-0.5 mb-2">
                    Juara 1 Animasi 2D/3D · Juara 2 Machine Learning AI · Juara 3 AR/VR Edukasi
                  </p>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed mb-3">
                    Memborong 3 trofi juara tingkat universitas di ajang Teknokrat Academic Expo 2025 dengan karya animasi 3D, pemodelan klasifikasi sentimen ML, dan simulasi AR.
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 text-[11px]">Bukti: Seksi Prestasi Expo</span>
                    <button
                      onClick={() => scrollToSlide('kreatif-juara')}
                      className="font-mono font-bold text-amber-700 hover:text-amber-900 cursor-pointer flex items-center gap-1"
                    >
                      <span>Lihat Podium Juara</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* 4. DUTA & MODEL MEKHANAI PESAWARAN */}
                <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 text-[10px] font-mono font-bold border border-pink-200">
                      DUTA DAERAH &amp; BRANDING
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-semibold">Tahun 2023</span>
                  </div>

                  <h4 className="text-base font-heading font-extrabold text-slate-900">
                    Finalis Muli Mekhanai Pesawaran &amp; Finalis Brand Ambassador Jaya Bakery
                  </h4>
                  <p className="text-xs font-mono text-pink-700 font-semibold mb-2">
                    Duta Wisata Daerah · Komunikasi Publik · Brand Ambassador Jaya Bakery
                  </p>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed mb-3">
                    Representasi daerah dalam promosi potensi pariwisata, komunikasi publik, serta keterlibatan aktif dalam promosi produk komersial Jaya Bakery.
                  </p>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500 text-[11px]">Bukti: Seksi Duta &amp; Publik</span>
                    <button
                      onClick={() => scrollToSlide('branding')}
                      className="font-mono font-bold text-pink-700 hover:text-pink-900 cursor-pointer flex items-center gap-1"
                    >
                      <span>Lihat Portofolio Duta</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* SECTION C: 5 SERTIFIKASI PROFESI RESMI */}
          {(activeTab === 'all' || activeTab === 'certs') && (
            <div className="pt-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-heading font-extrabold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  5 Sertifikasi Profesi &amp; Lisensi Berkompetensi
                </h3>
                <span className="text-xs font-mono text-slate-400">Verifikasi Resmi BNSP &amp; UTI</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                
                {/* 1. BNSP */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:border-emerald-300 transition-all flex flex-col justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-mono font-bold">
                      BNSP NASIONAL
                    </span>
                    <h5 className="font-bold text-sm text-slate-900 mt-1.5">Teknisi Jaringan &amp; Sistem Komputer</h5>
                    <p className="text-[11px] text-slate-600 mt-1">Sertifikat KKNI Level II BNSP / LSP SMKN 1.</p>
                    <div className="text-[10px] font-mono text-blue-700 mt-2">No. Reg: J.777 00014 2022</div>
                  </div>
                  <button
                    onClick={() => scrollToSlide('sertifikat')}
                    className="text-xs font-mono font-bold text-slate-700 hover:text-blue-700 pt-3 border-t border-slate-100 flex items-center justify-between cursor-pointer"
                  >
                    <span>Inspeksi di Vault</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* 2. MIKROTIK */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 text-[10px] font-mono font-bold">
                      PELATIHAN MIKROTIK
                    </span>
                    <h5 className="font-bold text-sm text-slate-900 mt-1.5">Routing &amp; Konfigurasi Jaringan</h5>
                    <p className="text-[11px] text-slate-600 mt-1">LPBM Universitas Teknokrat Indonesia.</p>
                    <div className="text-[10px] font-mono text-blue-700 mt-2">No: 0059/G.121/IIb2.3/2025</div>
                  </div>
                  <button
                    onClick={() => scrollToSlide('sertifikat')}
                    className="text-xs font-mono font-bold text-slate-700 hover:text-blue-700 pt-3 border-t border-slate-100 flex items-center justify-between cursor-pointer"
                  >
                    <span>Inspeksi di Vault</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* 3. JARINGAN UTI */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:border-blue-300 transition-all flex flex-col justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-800 text-[10px] font-mono font-bold">
                      KOMPETENSI JARINGAN
                    </span>
                    <h5 className="font-bold text-sm text-slate-900 mt-1.5">Jaringan &amp; Troubleshooting</h5>
                    <p className="text-[11px] text-slate-600 mt-1">Troubleshooting Berbasis Standar Kompetensi.</p>
                    <div className="text-[10px] font-mono text-blue-700 mt-2">No: 0030/G.121/IIa2.3/2026</div>
                  </div>
                  <button
                    onClick={() => scrollToSlide('sertifikat')}
                    className="text-xs font-mono font-bold text-slate-700 hover:text-blue-700 pt-3 border-t border-slate-100 flex items-center justify-between cursor-pointer"
                  >
                    <span>Inspeksi di Vault</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* 4. DESAIN GRAFIS */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:border-purple-300 transition-all flex flex-col justify-between">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-purple-50 text-purple-800 text-[10px] font-mono font-bold">
                      SKPI NILAI A
                    </span>
                    <h5 className="font-bold text-sm text-slate-900 mt-1.5">Desain Grafis Berbasis Kompetensi</h5>
                    <p className="text-[11px] text-slate-600 mt-1">Komunikasi Visual, Branding, &amp; Layout Digital.</p>
                    <div className="text-[10px] font-mono text-purple-700 mt-2">No: 0007/G.121/IIa2.3/2026</div>
                  </div>
                  <button
                    onClick={() => scrollToSlide('kreatif-juara')}
                    className="text-xs font-mono font-bold text-slate-700 hover:text-purple-700 pt-3 border-t border-slate-100 flex items-center justify-between cursor-pointer"
                  >
                    <span>Inspeksi di Seksi Prestasi</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* 5. KOMPUTER PERKANTORAN */}
                <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-2xs hover:border-amber-300 transition-all flex flex-col justify-between sm:col-span-2 lg:col-span-2">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-800 text-[10px] font-mono font-bold">
                      ADMINISTRASI PERKANTORAN
                    </span>
                    <h5 className="font-bold text-sm text-slate-900 mt-1.5">Komputer Administrasi Perkantoran</h5>
                    <p className="text-[11px] text-slate-600 mt-1">Pengelolaan data, persuratan digital, spreadsheet, dan tata kelola kearsipan perkantoran.</p>
                    <div className="text-[10px] font-mono text-amber-700 mt-2">No: 0248/G.121/IIa2.1/2025 · LPBM Teknokrat</div>
                  </div>
                  <button
                    onClick={() => scrollToSlide('sertifikat')}
                    className="text-xs font-mono font-bold text-slate-700 hover:text-amber-700 pt-3 border-t border-slate-100 flex items-center justify-between cursor-pointer"
                  >
                    <span>Inspeksi di Vault</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Bottom Action Component: Ultra-Craft Figma Canvas Editorial Style */}
        <div className="mt-10 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 p-5 sm:p-6 shadow-xs relative overflow-hidden">
          {/* Top Frame Meta Bar */}
          <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100 text-xs font-mono text-slate-500">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 font-bold text-slate-800">
                <Hash className="w-3.5 h-3.5 text-blue-600" />
                Action Component // Export-ATS-CV-Document
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500 hidden sm:inline">100% Auto Layout • Ready to Print &amp; Parse</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] border border-blue-200">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                Dokumen resmi terverifikasi
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0 mt-0.5">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-heading font-extrabold text-[#0B1E3D]">
                  Dokumen Kualifikasi Resmi &amp; Format ATS Rekrutmen
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 font-sans mt-0.5 max-w-2xl leading-relaxed">
                  Buka dokumen Curriculum Vitae lengkap siap cetak PDF resmi, atau salin ringkasan teks terstruktur (*plain text ATS*) yang kompatibel dengan sistem pelacakan rekrutmen perusahaan.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => {
                  playCelebrationChime();
                  onOpenCvModal();
                }}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#0B1E3D] hover:bg-blue-900 text-white text-xs sm:text-sm font-heading font-bold transition-all flex items-center justify-center gap-2 shadow-xs hover:shadow-md cursor-pointer click-pop"
              >
                <FileText className="w-4 h-4 text-blue-300" />
                <span>Buka Dokumen CV Standar ATS ↗</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
