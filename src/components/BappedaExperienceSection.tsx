import React from 'react';
import confetti from 'canvas-confetti';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  Video, 
  Calendar, 
  MapPin, 
  Camera, 
  FileText, 
  Award,
  Sparkles,
  Hash,
  Image as ImageIcon,
  UploadCloud,
  CheckCircle2,
  Users,
  Eye,
  TrendingUp,
  Building2
} from 'lucide-react';

export const BappedaExperienceSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  const triggerVideoConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#EC4899', '#3B82F6', '#10B981', '#F59E0B']
    });
  };

  const pillars = [
    {
      code: '01',
      title: 'On-Camera Talent (Sudut Pandang Mahasiswa)',
      icon: <Camera className="w-5 h-5 text-blue-600" />,
      desc: 'Tampil sebagai talent di depan kamera untuk menyampaikan materi publikasi dari sudut pandang mahasiswa — bukan presenter berita kedinasan — dengan bahasa yang jelas dan mudah dipahami.',
      tags: ['On-Camera Hosting', 'Public Speaking', 'Komunikasi Publik']
    },
    {
      code: '02',
      title: 'Produksi & Editing Video CapCut Pro',
      icon: <Video className="w-5 h-5 text-emerald-600" />,
      desc: 'Menyunting sekitar 30 konten campuran — berita acara, dokumentasi kegiatan, hingga produksi 1 konten IG reel — serta konten publikasi lainnya menggunakan CapCut Pro.',
      tags: ['CapCut Pro', 'Video Production', 'Color Grading', 'Audio Mixing']
    },
    {
      code: '03',
      title: 'Scriptwriting & Desain Grafis Canva',
      icon: <FileText className="w-5 h-5 text-purple-600" />,
      desc: 'Menulis naskah liputan terstruktur dan merancang materi promosi media sosial di Canva bekerja sama intensif dengan staf Humas dan pejabat pengambil kebijakan.',
      tags: ['Scriptwriting', 'Canva Graphics', 'Social Media Strategy']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="bappeda" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#F8FAFC] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Pengalaman Kerja // BAPPEDA Provinsi Lampung
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">Humas &amp; Publikasi Kedinasan</span>
          </div>

          {/* Docked Multiplayer Collaborator */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 font-bold text-[11px] border border-pink-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
              30+ konten publikasi campuran
            </span>
          </div>
        </div>

        {/* Section Header with Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-800 mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <Video className="w-3.5 h-3.5 text-blue-600" />
              <span>PENGALAMAN KERJA &amp; MAGANG</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Humas &amp; Komunikasi Publik <span className="text-blue-700">BAPPEDA Lampung</span>
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-1 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Produksi Konten Publikasi Resmi, On-Camera Talent Mahasiswa, dan Manajemen Media Sosial
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini menampilkan rekam jejak kerja saya di Badan Perencanaan Pembangunan Daerah (BAPPEDA) Provinsi Lampung. Bertanggung jawab menyunting sekitar 30 konten publikasi campuran (berita acara, dokumentasi kegiatan, dan 1 konten IG reel), menulis naskah informatif, serta tampil sebagai talent di depan kamera dengan sudut pandang mahasiswa.
            </p>
          </div>

          {/* Right Column: Institution Meta Card */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            {/* Institution Meta Card */}
            <div className={`bg-white border border-slate-200 px-5 py-3 rounded-2xl text-left lg:text-right font-mono text-xs shrink-0 shadow-sm card-3d-tilt transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="flex items-center gap-1.5 text-[#0B1E3D] font-extrabold mb-1 justify-start lg:justify-end text-xs">
                <Award className="w-4 h-4 text-emerald-600" /> CONTENT CREATOR &amp; ON-CAMERA TALENT
              </div>
              <div className="text-slate-500 text-[11px] flex items-center gap-2 justify-start lg:justify-end font-semibold">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-blue-600" /> Juli – September 2025</span>
                <span>·</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-rose-500" /> Bandar Lampung</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quantitative Operational Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-extrabold font-heading text-[#0B1E3D]">30+</span>
              <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                <Video className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-800">Video Reels Diproduksi</div>
            <div className="text-[11px] font-sans text-slate-500 mt-0.5">CapCut Pro &amp; Format Vertikal</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-400 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-extrabold font-heading text-emerald-600">3 Bulan</span>
              <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                <Calendar className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-800">Masa Tugas Magang</div>
            <div className="text-[11px] font-sans text-slate-500 mt-0.5">Juli – September 2025</div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-purple-400 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl font-extrabold font-heading text-purple-600">Dinas Resmi</span>
              <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                <Building2 className="w-4 h-4" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-800">BAPPEDA Provinsi Lampung</div>
            <div className="text-[11px] font-sans text-slate-500 mt-0.5">Divisi Publikasi &amp; Kehumasan</div>
          </div>
        </div>

        {/* Template Galeri Foto Dokumentasi & Aktivitas BAPPEDA */}
        <div className="mb-10 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-bold mb-1.5">
                <Camera className="w-3.5 h-3.5 text-blue-600" />
                <span>DOKUMENTASI FOTO AKTIVITAS BAPPEDA</span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0B1E3D]">
                Galeri Liputan, Editing &amp; On-Camera Talent
              </h3>
              <p className="text-xs text-slate-500 font-sans mt-0.5">
                Dokumentasi kegiatan dinas, proses editing video publikasi, dan sesi on-camera talent mahasiswa.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-50 border border-slate-200 font-mono text-xs text-slate-600 shadow-2xs self-start sm:self-auto">
              <UploadCloud className="w-4 h-4 text-blue-600" />
              <span>Format: JPG / PNG (16:9 atau 4:3)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {([
              {
                id: 'bappeda-host',
                title: 'On-Camera Talent Mahasiswa',
                subtitle: 'Aula Utama & Studio Liputan',
                ratio: 'Aspek 4:3 · Video Broadcast',
                placeholder: 'Slot Foto Sesi On-Camera',
                image: '/assets/bappeda_talent.jpg',
                alt: 'Sesi on-camera talent mahasiswa di BAPPEDA Provinsi Lampung'
              },
              {
                id: 'bappeda-field',
                title: 'Dokumentasi Liputan Lapangan',
                subtitle: 'Rapat Koordinasi & Kunjungan Kerja',
                ratio: 'Aspek 4:3 · Liputan Humas',
                placeholder: 'Slot Foto Liputan Lapangan',
                image: '/assets/bappeda_acara.jpg',
                alt: 'Dokumentasi acara dan liputan kegiatan BAPPEDA Provinsi Lampung'
              },
              {
                id: 'bappeda-edit',
                title: 'Sesi Editing Video CapCut Pro',
                subtitle: 'Penyusunan Timeline & Naskah',
                ratio: 'Aspek 9:16 · Produksi Media',
                placeholder: 'Slot Foto Proses Editing Video',
                image: '/assets/bappeda_editing.jpg',
                alt: 'Proses editing video publikasi BAPPEDA di CapCut Pro'
              },
              {
                id: 'bappeda-team',
                title: 'Kolaborasi Tim Humas BAPPEDA',
                subtitle: 'Koordinasi Publikasi & Dokumentasi',
                ratio: 'Aspek 4:3 · Foto Tim',
                placeholder: 'Slot Foto Bersama Tim Humas'
              }
            ] as { id: string; title: string; subtitle: string; ratio: string; placeholder: string; image?: string; alt?: string }[]).map((slot) => (
              <div
                key={slot.id}
                className="bg-white rounded-2xl p-4 border border-dashed border-slate-300 hover:border-blue-400 hover:shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => playTactileClick(1050)}
              >
                {slot.image ? (
                  <img
                    src={slot.image}
                    alt={slot.alt || slot.title}
                    loading="lazy"
                    className="w-full aspect-16/10 object-cover rounded-xl border border-slate-200 mb-3 group-hover:border-blue-300 transition-colors"
                  />
                ) : (
                  <div className="w-full aspect-16/10 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-4 text-center group-hover:bg-blue-50/50 transition-colors mb-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 shadow-2xs mb-2 group-hover:scale-105 transition-all">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-700 group-hover:text-blue-700">
                      {slot.placeholder}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">
                      {slot.ratio}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-[10.5px] font-mono text-slate-400 mb-0.5">
                    {slot.subtitle}
                  </div>
                  <h4 className="text-xs font-heading font-extrabold text-[#0B1E3D] group-hover:text-blue-700 transition-colors">
                    {slot.title}
                  </h4>
                  <div className={`flex items-center gap-1 mt-2 pt-2 border-t ${slot.image ? 'border-emerald-100 text-emerald-700' : 'border-slate-100 text-emerald-600'} text-[10px] font-mono font-semibold`}>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{slot.image ? 'Bukti Terverifikasi' : 'Slot Template Siap Pakai'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pil) => (
            <div
              key={pil.code}
              onClick={() => playTactileClick(1150)}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-xs cursor-pointer card-3d-tilt"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                    {pil.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    PILAR {pil.code}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-extrabold text-[#0B1E3D] mb-2">
                  {pil.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                  {pil.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 font-mono text-[10px]">
                {pil.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};