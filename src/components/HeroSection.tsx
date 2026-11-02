import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  GraduationCap, 
  ShieldCheck, 
  Video, 
  Cpu, 
  ArrowDown, 
  Send, 
  Sparkles, 
  FileText,
  Radio,
  MapPin,
  CheckCircle2,
  Network,
  Award
} from 'lucide-react';

interface HeroSectionProps {
  targetCompany?: string;
  onExploreClick: () => void;
  onOpenCvModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ 
  targetCompany, 
  onExploreClick, 
  onOpenCvModal 
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [customApply, setCustomApply] = useState(targetCompany || '');
  const [isEditingApply, setIsEditingApply] = useState(false);

  useEffect(() => {
    if (targetCompany) {
      setCustomApply(targetCompany);
    }
  }, [targetCompany]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width - 0.5) * 20;
    const y = ((clientY - top) / height - 0.5) * 20;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const triggerBubbleConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { x, y },
      colors: ['#2563EB', '#10B981', '#F59E0B', '#8B5CF6', '#0B1E3D']
    });
  };

  return (
    <section 
      id="hero" 
      className="relative pt-16 sm:pt-20 pb-8 md:pb-12 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] bg-[#F8FAFC] figma-dot-grid overflow-hidden flex flex-col justify-between items-center text-center select-none"
    >
      {/* Ambient Radial Spotlight Mesh */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] rounded-full pointer-events-none opacity-40 blur-3xl -z-10"
        style={{
          background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, rgba(16,185,129,0.08) 45%, rgba(248,250,252,0) 70%)'
        }}
      />

      {/* Technical Corner Crosshairs */}
      <div className="absolute top-6 left-6 text-slate-300 font-mono text-xs hidden sm:block pointer-events-none">+</div>
      <div className="absolute top-6 right-6 text-slate-300 font-mono text-xs hidden sm:block pointer-events-none">+</div>
      <div className="absolute bottom-6 left-6 text-slate-300 font-mono text-xs hidden sm:block pointer-events-none">+</div>
      <div className="absolute bottom-6 right-6 text-slate-300 font-mono text-xs hidden sm:block pointer-events-none">+</div>

      {/* TOP HEADER: Live Transceiver & Status Bar */}
      <div className="max-w-5xl mx-auto w-full flex flex-col items-center gap-2.5 z-10 mb-5 sm:mb-6">
        
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 flex items-center gap-1.5">
            <Radio className="w-3 h-3 text-blue-600 animate-pulse" />
            PORTOFOLIO · BANDAR LAMPUNG, INDONESIA
          </span>
        </div>

        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-[11px] sm:text-xs font-mono text-slate-700">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="font-bold text-slate-900 tracking-tight">STATUS:</span>
          {isEditingApply ? (
            <input 
              type="text" 
              value={customApply} 
              onChange={(e) => setCustomApply(e.target.value)}
              onBlur={() => setIsEditingApply(false)}
              onKeyDown={(e) => e.key === 'Enter' && setIsEditingApply(false)}
              autoFocus
              className="bg-slate-100 border border-blue-500 rounded px-2 py-0.5 text-blue-800 text-xs font-mono outline-none"
              placeholder="Ketik target lamaran..."
            />
          ) : (
            <span 
              onClick={() => setIsEditingApply(true)}
              title="Klik untuk menyesuaikan nama target instansi / lowongan"
              className="text-blue-700 font-bold cursor-pointer hover:underline flex items-center gap-1.5"
            >
              MELAMAR → {customApply ? customApply : 'MagangHub Kemnaker & Mitra Korporat'}
              <span className="text-[10px] text-slate-400 font-normal">[edit]</span>
            </span>
          )}
          <span className="text-slate-300 hidden sm:inline">|</span>
          <span className="text-emerald-700 font-bold flex items-center gap-1 text-[11px]">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> TERSEDIA UNTUK PENUGASAN // BANDAR LAMPUNG &amp; REMOTE
          </span>
        </div>
      </div>

      {/* CENTER FOCAL HERO CORE */}
      <div className="max-w-4xl mx-auto w-full z-10 flex flex-col items-center">
        
        {/* Identitas: nama dulu, foto bersebelahan di layar lebar */}
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-5 sm:gap-8 mb-4 w-full">
        {/* Executive Portrait Card with 3D Parallax Tilt */}
        <div className="relative shrink-0 mb-1 sm:mb-0">
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-28 sm:w-32 aspect-[4/5] rounded-[26px] p-1.5 bg-gradient-to-b from-blue-500/30 via-slate-200/50 to-transparent shadow-[0_20px_50px_rgba(11,30,61,0.22)] group transition-transform duration-100 ease-out cursor-pointer hover:shadow-[0_25px_60px_rgba(37,99,235,0.28)]"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.45}deg) rotateX(${-mousePos.y * 0.45}deg)`,
            }}
            onClick={triggerBubbleConfetti}
            title="M. Adhe Akbar, S.Kom. (Klik untuk Efek Selebrasi)"
          >
            {/* Border Frame & Image Container */}
            <div className="w-full h-full rounded-[22px] bg-white border border-slate-200/90 overflow-hidden relative shadow-inner">
              {/* Formal Photo with Official Red Background */}
              <img
                src="/assets/adhe_formal_red.jpg"
                alt="M. Adhe Akbar, S.Kom."
                className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-all duration-500"
              />

              {/* Subtle Vignette Gradient Overlay at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/80 via-transparent to-transparent opacity-90 pointer-events-none" />

              {/* Location Tag */}
              <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-md py-1 px-2 rounded-xl border border-slate-200/80 text-[10px] font-mono shadow-sm flex items-center justify-between">
                <span className="font-heading font-black text-[#0B1E3D]">M. ADHE AKBAR</span>
                <span className="text-blue-700 text-[9px] bg-blue-50 px-1.5 py-0.2 rounded-full border border-blue-200 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5 text-blue-600" /> VERIFIED
                </span>
              </div>
            </div>

            {/* Orbiting Floating Badges (Parallax Depth Effect) */}
            {/* Badge 1: Top-Right (IPK 3.59 Cum Laude) */}
            <div 
              className="absolute -top-3 -right-4 sm:-top-3 sm:-right-6 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 px-3 py-1.5 rounded-2xl shadow-xl flex items-center gap-1.5 font-mono text-xs z-20 group-hover:scale-105 transition-transform"
              style={{
                transform: `translate(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px)`
              }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="font-heading font-black text-blue-700">IPK 3.59</span>
              <span className="text-slate-500 text-[10px] font-sans font-semibold">Cum Laude</span>
            </div>

            {/* Badge 2: Bottom-Left (BNSP KKNI II TKJ) */}
            <div 
              className="absolute -bottom-3 -left-4 sm:-bottom-3 sm:-left-6 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 px-3 py-1.5 rounded-2xl shadow-xl flex items-center gap-1.5 font-mono text-xs z-20 group-hover:scale-105 transition-transform"
              style={{
                transform: `translate(${-mousePos.x * 0.35}px, ${-mousePos.y * 0.35}px)`
              }}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span className="font-heading font-black text-emerald-700">BNSP KKNI II</span>
              <span className="text-slate-500 text-[10px] font-sans font-semibold">TKJ</span>
            </div>
          </div>
        </div>

          <div className="text-center sm:text-left">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-heading font-black tracking-tight text-[#0B1E3D] mb-2 leading-[1.02] uppercase">
          M. ADHE AKBAR
          <span className="inline-block text-blue-600 font-mono text-2xl sm:text-4xl md:text-5xl ml-2 sm:ml-3 font-bold align-baseline normal-case">
            S.Kom.
          </span>
            </h1>

            <p className="font-serif-italic text-sm sm:text-lg text-blue-800 mb-0 font-normal max-w-xl px-2 sm:px-0">
          Sarjana Informatika Cum Laude · Teknisi Jaringan Tersertifikasi BNSP · Peneliti AI SINTA 3
            </p>
          </div>
        </div>

        {/* Tri-Role Multi-Disciplinary Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-4 max-w-3xl">
          <span className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300/80 shadow-2xs flex items-center gap-1.5 hover:shadow-xs transition-shadow">
            <Network className="w-3.5 h-3.5 text-emerald-600" />
            TEKNISI JARINGAN (BNSP KKNI II)
          </span>
          <span className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-300/80 shadow-2xs flex items-center gap-1.5 hover:shadow-xs transition-shadow">
            <Cpu className="w-3.5 h-3.5 text-blue-600" />
            SOFTWARE &amp; AI RESEARCHER (SINTA 3)
          </span>
          <span className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-purple-50 text-purple-800 border border-purple-300/80 shadow-2xs flex items-center gap-1.5 hover:shadow-xs transition-shadow">
            <Video className="w-3.5 h-3.5 text-purple-600" />
            ON-CAMERA TALENT &amp; HUMAS
          </span>
        </div>

        {/* Executive Bio Paragraph */}
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-sans max-w-2xl px-4">
          Saya mengerjakan tiga hal: <strong>membangun &amp; merawat jaringan internet</strong> (fiber optic, MikroTik), <strong>membuat aplikasi web &amp; Android</strong>, dan <strong>memproduksi konten multimedia</strong>. Pengalaman lapangan di PT Sumatra Multimedia Solusi dan BAPPEDA Provinsi Lampung, plus riset machine learning yang terbit di jurnal <strong>SINTA 3</strong>.
        </p>

        {/* High-Converting Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-1">
          <button
            onClick={() => {
              playTactileClick(1200);
              onExploreClick();
            }}
            className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-[#0B1E3D] hover:bg-blue-700 text-white text-xs sm:text-sm font-sans font-bold flex items-center gap-2.5 transition-all shadow-md hover:shadow-lg cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Jelajahi Rekam Portofolio</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>

          {onOpenCvModal && (
            <button
              onClick={(e) => {
                triggerBubbleConfetti(e);
                onOpenCvModal();
              }}
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-white hover:bg-blue-50/70 border border-slate-200 text-blue-700 hover:border-blue-400 text-xs sm:text-sm font-sans font-bold flex items-center gap-2 transition-all shadow-xs hover:shadow-sm cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Buka Dokumen CV (ATS Ready)</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
            </button>
          )}

          <a
            href="#kontak"
            onClick={() => playTactileClick(1100)}
            className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs sm:text-sm font-sans font-semibold flex items-center gap-1.5 transition-all shadow-2xs cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
          >
            <Send className="w-3.5 h-3.5 text-slate-500" />
            <span>Hubungi Saya</span>
          </a>
        </div>

      </div>

      {/* BOTTOM BENTO GRID: 6 Verified Quantitative Credentials */}
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="flex items-center justify-between mb-2 text-xs font-mono text-slate-500 px-1">
          <span className="uppercase tracking-wider flex items-center gap-1.5 font-bold text-slate-700 text-[11px] sm:text-xs">
            <Sparkles className="w-3 h-3 text-blue-600" />
            REKAM JEJAK &amp; KREDENSIAL KUANTITATIF TERVERIFIKASI
          </span>
          <span className="hidden md:inline text-[10px] text-slate-400">
            UTI (IPK 3.59) · BNSP KKNI II · BAPPEDA LAMPUNG · JURNAL BITS SINTA 3
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3">
          
          <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-left hover:border-blue-400 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xl sm:text-2xl font-heading font-black text-[#0B1E3D]">3.59</span>
              <div className="p-1.5 rounded-xl bg-blue-50 text-blue-600">
                <GraduationCap className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-800">S1 Informatika</div>
            <div className="text-[10px] font-sans text-slate-500">Cum Laude UTI</div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-left hover:border-emerald-400 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xl sm:text-2xl font-heading font-black text-emerald-600">KKNI II</span>
              <div className="p-1.5 rounded-xl bg-emerald-50 text-emerald-600">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-800">BNSP Resmi</div>
            <div className="text-[10px] font-sans text-slate-500">Teknisi Jaringan TKJ</div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-left hover:border-purple-400 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xl sm:text-2xl font-heading font-black text-purple-600">SINTA 3</span>
              <div className="p-1.5 rounded-xl bg-purple-50 text-purple-600">
                <Cpu className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-800">Riset BITS 2026</div>
            <div className="text-[10px] font-sans text-slate-500">ML Naive Bayes vs KNN</div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-left hover:border-amber-400 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xl sm:text-2xl font-heading font-black text-amber-600">30+</span>
              <div className="p-1.5 rounded-xl bg-amber-50 text-amber-600">
                <Video className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-800">Video BAPPEDA</div>
            <div className="text-[10px] font-sans text-slate-500">Humas &amp; On-Camera</div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-left hover:border-sky-400 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xl sm:text-2xl font-heading font-black text-sky-600">&lt; 0.02 dB</span>
              <div className="p-1.5 rounded-xl bg-sky-50 text-sky-600">
                <Network className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-800">Fiber Splicing</div>
            <div className="text-[10px] font-sans text-slate-500">PT SMS NOC / FOC</div>
          </div>

          <div className="p-2.5 sm:p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xs text-left hover:border-rose-400 hover:shadow-xs transition-all hover:-translate-y-0.5">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xl sm:text-2xl font-heading font-black text-rose-600">DUTA</span>
              <div className="p-1.5 rounded-xl bg-rose-50 text-rose-600">
                <Award className="w-3.5 h-3.5" />
              </div>
            </div>
            <div className="text-xs font-bold text-slate-800">Brand Ambassador</div>
            <div className="text-[10px] font-sans text-slate-500">Finalis Jaya Bakery '23</div>
          </div>

        </div>
      </div>

    </section>
  );
};
