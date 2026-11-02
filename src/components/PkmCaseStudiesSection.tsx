import React from 'react';
import confetti from 'canvas-confetti';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  HeartHandshake, 
  MapPin, 
  Calendar, 
  CheckCircle2,
  Hash,
  Users,
  Gamepad2,
  BookOpen,
  Sparkles
} from 'lucide-react';

export const PkmCaseStudiesSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  const triggerPkmConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#3B82F6', '#10B981', '#F59E0B', '#EC4899']
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="pkm" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#FFFFFF] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Pengabdian Masyarakat // Pemberdayaan Pendidikan
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">Kontribusi Nyata di Sekolah Dasar</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              SD Negeri 2 Bumisari, Natar
            </span>
          </div>
        </div>

        {/* Section Header with Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <HeartHandshake className="w-3.5 h-3.5 text-blue-600" />
              <span>PENGABDIAN KEPADA MASYARAKAT (PKM)</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Program Pengabdian <span className="text-blue-700">Masyarakat (PKM)</span>
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-1 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Edukasi Literasi Digital &amp; Media Pembelajaran Interaktif di Sekolah Dasar
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini menampilkan kegiatan pengabdian kepada masyarakat yang berfokus pada pengenalan teknologi informasi dan komputer bagi siswa sekolah dasar di pedesaan, guna memicu minat belajar melalui media edukatif interaktif.
            </p>
          </div>

          {/* Right Column: Meta Card */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            <div className={`bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl text-left lg:text-right font-mono text-xs shrink-0 shadow-sm card-3d-tilt transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="flex items-center gap-1.5 text-[#0B1E3D] font-extrabold mb-1 justify-start lg:justify-end text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> KONTRIBUSI NYATA BIDANG PENDIDIKAN
              </div>
              <div className="text-slate-500 text-[11px] font-semibold">
                Fasilitator Edukasi &amp; Game Interaktif
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Case Study Card */}
        <div 
          onClick={() => playTactileClick(1150)}
          className={`bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 card-3d-tilt cursor-pointer ${
            isInView ? 'animate-cascade delay-150' : ''
          }`}
        >
          {/* Meta Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 rounded-full bg-[#0B1E3D] text-white font-mono text-xs font-bold">
                PKM
              </span>
              <span className="text-xs font-mono font-bold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full">
                Bidang Literasi Digital &amp; Pendidikan
              </span>
            </div>
            
            <div className="text-xs font-mono text-slate-500 flex items-center gap-1.5 font-semibold">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              September – Oktober 2025
            </div>
          </div>

          <div className="text-xs sm:text-sm font-mono text-slate-600 mb-2 flex items-center gap-2 font-bold">
            <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
            <span>SD Negeri 2 Bumisari, Kec. Natar, Kab. Lampung Selatan</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-[#0B1E3D] mb-2">
            Edukasi Literasi Digital &amp; Game Pembelajaran "Jelajah Quiz"
          </h3>

          <div className="text-xs sm:text-sm font-mono text-blue-700 font-semibold mb-6">
            Peran: <span className="text-slate-800 font-bold">Edukator Literasi Digital &amp; Pengembang Game Edukatif</span>
          </div>

          {/* Dokumentasi Kegiatan PKM */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
            {[
              { src: '/assets/pkm_jelajah_quiz_1.jpg', alt: 'Dokumentasi kegiatan PKM Jelajah Quiz di SD Negeri 2 Bumisari (1)' },
              { src: '/assets/pkm_jelajah_quiz_2.jpg', alt: 'Dokumentasi kegiatan PKM Jelajah Quiz di SD Negeri 2 Bumisari (2)' }
            ].map((img) => (
              <figure key={img.src} className="bg-white p-2 rounded-2xl border border-slate-200 shadow-2xs">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full aspect-3/4 object-cover rounded-xl border border-slate-100"
                />
                <figcaption className="px-1 pt-2 text-[10px] font-mono text-slate-500">
                  Dokumentasi PKM &middot; SDN 2 Bumisari
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans mb-8">
            Merancang dan menerapkan media pembelajaran interaktif berupa game edukasi 2D bernama "Jelajah Quiz", serta memberikan pendampingan langsung pengenalan perangkat komputer dasar bagi siswa-siswi sekolah dasar untuk membangun antusiasme belajar berbasis teknologi ramah anak.
          </p>

          {/* 3 Metric Pillars (Factual & Qualitative) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-heading font-extrabold text-[#0B1E3D]">60+ Siswa</span>
                <div className="p-2 rounded-xl bg-blue-50 text-blue-600">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xs font-bold text-slate-800">Peserta Edukasi Langsung</div>
              <div className="text-[11px] font-sans text-slate-500 mt-0.5">Siswa Kelas 4–6 SD Negeri 2 Bumisari</div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-heading font-extrabold text-emerald-600">Game Edukasi 2D</span>
                <div className="p-2 rounded-xl bg-emerald-50 text-emerald-600">
                  <Gamepad2 className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xs font-bold text-slate-800">Media Pembelajaran Interaktif</div>
              <div className="text-[11px] font-sans text-slate-500 mt-0.5">Kuis Sains &amp; Pengetahuan Umum</div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-heading font-extrabold text-purple-600">Praktik Langsung</span>
                <div className="p-2 rounded-xl bg-purple-50 text-purple-600">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>
              <div className="text-xs font-bold text-slate-800">Pendampingan di Kelas</div>
              <div className="text-[11px] font-sans text-slate-500 mt-0.5">Pengenalan Dasar Pengoperasian Komputer</div>
            </div>
          </div>

          {/* 3 Real Implementation Highlights */}
          <div className="space-y-3 mb-8 bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
            <div className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
              Kegiatan &amp; Pelaksanaan Nyata:
            </div>
            
            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Pengenalan fungsi perangkat keras komputer (mouse, keyboard, monitor) kepada siswa secara ramah dan mudah dipahami.</span>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Implementasi kuis edukatif interaktif berbasis visual yang merangsang keaktifan siswa dalam menjawab materi pelajaran.</span>
            </div>

            <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-sans">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Bimbingan teknis tatap muka agar siswa dapat mencoba dan mempraktikkan langsung perangkat teknologi secara bergantian.</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 font-mono text-[11px]">
            {['Pengabdian Masyarakat (PKM)', 'Literasi Digital', 'Game Edukasi 2D', 'Edukasi Komputer Dasar', 'Pemberdayaan Pendidikan'].map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};