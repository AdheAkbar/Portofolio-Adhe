import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  ShieldCheck, 
  School,
  Sparkles,
  Hash
} from 'lucide-react';

export const EducationSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.15 });
  const [gpaCount, setGpaCount] = useState<number>(0.0);

  // Smooth dynamic count-up effect for GPA (0.00 -> 3.59)
  useEffect(() => {
    if (!isInView) {
      setGpaCount(0);
      return;
    }
    let start = 0;
    const target = 3.59;
    const duration = 600; // ms - snappy & responsive
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setGpaCount(target);
        clearInterval(timer);
      } else {
        setGpaCount(Number(start.toFixed(2)));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  const triggerCumLaudeConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6']
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="pendidikan" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#FFFFFF] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Rekam Akademik // Riwayat Pendidikan Formal
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">Pendidikan S1 &amp; Kejuruan</span>
          </div>

          {/* Docked Multiplayer Collaborators (Figma Real-Time Style - Zero Overlap) */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold text-[11px] border border-amber-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Lulus Cum Laude, IPK 3.59
            </span>
          </div>
        </div>

        {/* Section Header with Dynamic Reveal & Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono text-neutral-800 mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              <span>RIWAYAT PENDIDIKAN FORMAL</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Riwayat Pendidikan Formal
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-1 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              S1 Informatika (Cum Laude, IPK 3.59) &amp; Kejuruan Teknik Komputer Jaringan (TKJ)
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini menampilkan latar belakang pendidikan formal saya di Universitas Teknokrat Indonesia (S1 Informatika) dan SMKN 1 Bandar Lampung (TKJ). Memadukan rekayasa perangkat lunak, kecerdasan buatan, penelitian ilmiah, serta keahlian infrastruktur jaringan komputer.
            </p>
          </div>

          {/* Right Column: GPA Benchmark Badge */}
          <div className="flex items-center shrink-0">
            {/* Interactive GPA Benchmark Badge with Dynamic Count-Up */}
            <div 
              onClick={triggerCumLaudeConfetti}
              className={`flex items-center gap-3 font-mono text-xs text-neutral-700 bg-white border border-neutral-200 px-5 py-3 rounded-2xl shadow-sm card-3d-tilt cursor-pointer hover:border-amber-400 transition-all click-pop ${
                isInView ? 'animate-cascade delay-200' : ''
              }`}
              title="Klik untuk selebrasi Cum Laude!"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <div>
                <div className="text-[9px] text-slate-400 uppercase tracking-wider font-semibold">PREDIKAT KELULUSAN</div>
                <div className="text-sm sm:text-base font-heading font-extrabold text-[#0B1E3D] flex items-center gap-1.5">
                  <span>CUM LAUDE</span>
                  <span className="text-blue-600">({gpaCount.toFixed(2)})</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline Grid with 3D Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* S1 Informatika - Universitas Teknokrat Indonesia */}
          <div className={`bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-400 transition-all duration-300 card-3d-tilt relative overflow-hidden ${
            isInView ? 'animate-cascade delay-200' : ''
          }`}>
            {/* Soft Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badges & Wax Seal */}
              <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={triggerCumLaudeConfetti}
                    className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold bg-[#0B1E3D] text-white flex items-center gap-1.5 shadow-xs click-pop cursor-pointer hover:bg-blue-600 transition-colors"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>CUM LAUDE · IPK {gpaCount.toFixed(2)} / 4.00</span>
                  </button>

                  {/* Physical Gold Wax Seal Badge */}
                  <div 
                    onClick={triggerCumLaudeConfetti}
                    className="wax-seal w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-115 transition-transform shadow-sm"
                    title="Stempel Emas Kelulusan Cum Laude - Klik untuk selebrasi!"
                  >
                    <Sparkles className="w-4 h-4 text-amber-100 drop-shadow" />
                  </div>
                </div>

                <span className="text-xs font-mono text-slate-500 flex items-center gap-1 shrink-0 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" /> 2022 – 2026
                </span>
              </div>

              {/* Institution Title */}
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white p-2 border border-slate-200 flex items-center justify-center shrink-0 shadow-xs">
                  <img
                    src="/assets/logo_teknokrat.png"
                    alt="Logo Universitas Teknokrat Indonesia"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B1E3D]">
                    Universitas Teknokrat Indonesia
                  </h3>
                  <div className="text-sm font-mono text-blue-700 font-semibold mt-0.5">
                    S1 Informatika (S.Kom.)
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-sans">
                    <MapPin className="w-3 h-3 text-slate-400" /> Kota Bandar Lampung, Lampung
                  </div>
                </div>
              </div>

              {/* Core Highlights */}
              <div className="space-y-3 my-6 text-xs sm:text-sm text-slate-600 font-sans border-t border-slate-200/80 pt-4 leading-relaxed relative z-10">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Meraih predikat kelulusan kehormatan <strong className="text-[#0B1E3D] font-bold">Cum Laude</strong> dengan IPK resmi <strong className="text-blue-700 font-bold">3.59</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Penulis pertama artikel ilmiah terindeks <strong className="text-[#0B1E3D] font-bold">SINTA 3 (Terbit 2026)</strong> bidang Supervised Machine Learning (<em>Naive Bayes vs KNN</em>).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Memborong <strong className="text-[#0B1E3D] font-bold">3 Gelar Juara Teknokrat Academic Expo 2025</strong> (Juara 1 Animasi 2D/3D, Juara 2 ML, Juara 3 AR/VR).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Tiga sertifikasi SKPI berbasis uji kompetensi dengan predikat <strong className="text-[#0B1E3D] font-bold">Nilai A</strong> (Jaringan, Desain Grafis, Administrasi).
                  </span>
                </div>
              </div>
            </div>

            {/* Tags Footer */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 font-mono text-[11px] relative z-10">
              <span className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs">Informatika</span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs">Machine Learning</span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs">Next.js Web</span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs">Android Kotlin</span>
            </div>
          </div>

          {/* SMK - SMKN 1 Bandar Lampung */}
          <div className={`bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between group hover:border-blue-400 transition-all duration-300 card-3d-tilt relative overflow-hidden ${
            isInView ? 'animate-cascade delay-300' : ''
          }`}>
            {/* Soft Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-400/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              {/* Header Badges */}
              <div className="flex items-center justify-between gap-2 mb-4 relative z-10">
                <span className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-bold bg-[#0B1E3D] text-white flex items-center gap-1.5 shadow-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> AKREDITASI A · NILAI 86.33
                </span>
                <span className="text-xs font-mono text-slate-500 flex items-center gap-1 shrink-0 font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-blue-600" /> 2019 – 2022
                </span>
              </div>

              {/* Institution Title */}
              <div className="flex items-start gap-4 mb-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-xs text-blue-700">
                  <School className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B1E3D]">
                    SMKN 1 Bandar Lampung
                  </h3>
                  <div className="text-sm font-mono text-blue-700 font-semibold mt-0.5">
                    Teknik Komputer dan Jaringan (TKJ)
                  </div>
                  <div className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-sans">
                    <MapPin className="w-3 h-3 text-slate-400" /> Kota Bandar Lampung, Lampung
                  </div>
                </div>
              </div>

              {/* Core Highlights */}
              <div className="space-y-3 my-6 text-xs sm:text-sm text-slate-600 font-sans border-t border-slate-200/80 pt-4 leading-relaxed relative z-10">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Meraih Sertifikat Kompetensi Resmi <strong className="text-[#0B1E3D] font-bold">BNSP Teknisi Jaringan dan Sistem Komputer (KKNI Level II)</strong>.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Praktik Kerja Industri (Prakerin) sebagai <strong className="text-[#0B1E3D] font-bold">IT Support &amp; Fiber Optic Technician di PT Sumatra Multimedia Solusi</strong> (<a href="https://sms.net.id/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">sms.net.id</a>).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Pengalaman lapangan riil: Penarikan kabel FO, <strong className="text-[#0B1E3D] font-bold">Fusion Splicing</strong> dengan redaman &lt; 0.02 dB, dan uji OPM/OTDR.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    Penguasaan konfigurasi <strong className="text-[#0B1E3D] font-bold">MikroTik RouterOS</strong>, manajemen bandwidth, routing static/dynamic, serta perakitan PC.
                  </span>
                </div>
              </div>
            </div>

            {/* Tags Footer */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 font-mono text-[11px] relative z-10">
              <span className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs">BNSP Certified</span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs">MikroTik RouterOS</span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs">Fiber Splicing</span>
              <span className="px-3 py-1 rounded-xl bg-white text-slate-700 border border-slate-200 shadow-2xs">NOC/FOC</span>
            </div>
          </div>
        </div>

        {/* 3 Interactive Fast-Track Short-Circuit Cards */}
        <div className={`bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm transition-all ${
          isInView ? 'animate-cascade delay-400' : ''
        }`}>
          <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-5 flex items-center justify-between font-semibold">
            <span className="flex items-center gap-2 text-slate-800">
              <Award className="w-4 h-4 text-blue-600" />
              PINTASAN BUKTI KARYA AKADEMIK UNGGULAN:
            </span>
            <span className="hidden sm:inline text-[10px] font-mono text-blue-600 font-bold">KLIK MENUJU MODUL PEMBUKTIAN</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Shortcut 1: Riset SINTA 3 */}
            <a
              href="#sinta-3-research"
              onClick={() => playTactileClick(1200)}
              className="p-5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-400 transition-all group flex flex-col justify-between cursor-pointer shadow-xs card-3d-tilt"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-purple-600 mb-2">
                  <span className="font-bold">PUBLIKASI SINTA 3</span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-100/60 border border-purple-200 text-[10px] font-bold">
                    2026
                  </span>
                </div>
                <div className="text-base font-bold text-[#0B1E3D] group-hover:text-blue-700 transition-colors mb-1 font-heading">
                  Live ML Sentiment Sandbox
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 font-sans mt-1">
                  Uji komparasi langsung model Naive Bayes vs KNN pada 1.500 ulasan Google Play Store.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-[#0B1E3D] font-bold group-hover:text-blue-700">
                <span>Buka Simulator</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Shortcut 2: 3x Juara Expo */}
            <a
              href="#kreatif-juara"
              onClick={() => playTactileClick(1300)}
              className="p-5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-400 transition-all group flex flex-col justify-between cursor-pointer shadow-xs card-3d-tilt"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-amber-600 mb-2">
                  <span className="font-bold">EXPO 2025</span>
                  <span className="px-2 py-0.5 rounded-full bg-amber-100/60 border border-amber-200 text-[10px] font-bold">
                    3× JUARA
                  </span>
                </div>
                <div className="text-base font-bold text-[#0B1E3D] group-hover:text-blue-700 transition-colors mb-1 font-heading">
                  Juara Animasi 2D/3D & AR/VR
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 font-sans mt-1">
                  Piagam Juara 1 Animasi Game Interaktif dan Juara 3 Teknokrat Portal AR.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-[#0B1E3D] font-bold group-hover:text-blue-700">
                <span>Lihat Portofolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Shortcut 3: BNSP & SKPI */}
            <a
              href="#sertifikat"
              onClick={() => playTactileClick(1400)}
              className="p-5 rounded-2xl bg-slate-50 hover:bg-blue-50/50 border border-slate-200 hover:border-blue-400 transition-all group flex flex-col justify-between cursor-pointer shadow-xs card-3d-tilt"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-emerald-600 mb-2">
                  <span className="font-bold">SERTIFIKASI PROFESI</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100/60 border border-emerald-200 text-[10px] font-bold">
                    BNSP + SKPI
                  </span>
                </div>
                <div className="text-base font-bold text-[#0B1E3D] group-hover:text-blue-700 transition-colors mb-1 font-heading">
                  8 Bukti Sertifikat Vault
                </div>
                <p className="text-xs text-slate-500 line-clamp-2 font-sans mt-1">
                  Sertifikat BNSP KKNI II, Pelatihan MikroTik, dan 3 SKPI Predikat Nilai A lengkap dengan scan asli.
                </p>
              </div>
              <div className="mt-4 flex items-center gap-1.5 text-xs font-mono text-[#0B1E3D] font-bold group-hover:text-blue-700">
                <span>Buka Bento Vault</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};
