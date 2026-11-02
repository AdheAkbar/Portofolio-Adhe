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
  Award,
  Code2
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
      </div>

      {/* CENTER FOCAL HERO CORE */}
      <div className="max-w-5xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] items-center gap-8 lg:gap-14 mb-10">

        {/* KOLOM KIRI — Narasi & Aksi */}
        <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-mono tracking-[0.18em] text-slate-500 mb-4 shadow-2xs">
            <Sparkles className="w-3 h-3 text-blue-600" />
            PORTOFOLIO 2026 · BANDAR LAMPUNG
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight text-[#0B1E3D] leading-[1.03] uppercase">
            M. ADHE AKBAR
            <span className="block mt-1 text-blue-600 font-mono text-xl sm:text-2xl font-bold normal-case tracking-normal">
              S.Kom.
            </span>
          </h1>

          <p className="font-serif-italic text-sm sm:text-base text-blue-800 mt-3 mb-4 font-normal max-w-xl">
            Sarjana Informatika Cum Laude · IT Support &amp; Network · AI Engineer · Software Developer · Content &amp; Communication
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-4 max-w-xl">
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300/80 flex items-center gap-1.5">
              <Network className="w-3 h-3 text-emerald-600" /> IT SUPPORT &amp; NETWORK
            </span>
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-blue-50 text-blue-800 border border-blue-300/80 flex items-center gap-1.5">
              <Cpu className="w-3 h-3 text-blue-600" /> AI ENGINEER
            </span>
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-sky-50 text-sky-800 border border-sky-300/80 flex items-center gap-1.5">
              <Code2 className="w-3 h-3 text-sky-600" /> SOFTWARE DEVELOPER
            </span>
            <span className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-bold bg-purple-50 text-purple-800 border border-purple-300/80 flex items-center gap-1.5">
              <Video className="w-3 h-3 text-purple-600" /> ON-CAMERA TALENT &amp; HUMAS
            </span>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans max-w-xl">
            Saya mengerjakan tiga hal: <strong>membangun &amp; merawat jaringan internet</strong> (fiber optic, MikroTik), <strong>membuat aplikasi web &amp; Android</strong>, dan <strong>memproduksi konten multimedia</strong>. Pengalaman lapangan di PT Sumatra Multimedia Solusi dan BAPPEDA Provinsi Lampung, plus riset machine learning yang terbit di jurnal <strong>SINTA 3</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
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

        {/* KOLOM KANAN — Kartu Portret */}
        <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[280px] sm:max-w-[300px]">
          <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-br from-blue-500/15 via-emerald-400/10 to-transparent blur-2xl pointer-events-none" />

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={triggerBubbleConfetti}
            title="M. Adhe Akbar, S.Kom. (Klik untuk Efek Selebrasi)"
            className="relative w-full aspect-[4/5] rounded-[30px] p-2 bg-white border border-slate-200 shadow-[0_24px_60px_rgba(11,30,61,0.18)] group transition-transform duration-100 ease-out cursor-pointer hover:shadow-[0_28px_70px_rgba(37,99,235,0.25)]"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 0.25}deg) rotateX(${-mousePos.y * 0.25}deg)`,
            }}
          >
            <div className="w-full h-full rounded-[24px] overflow-hidden relative bg-slate-100">
              <img
                src="/assets/adhe_formal_red.jpg"
                alt="M. Adhe Akbar, S.Kom."
                className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E3D]/85 via-[#0B1E3D]/10 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end justify-between gap-2">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-[0.2em] text-white/60">Portofolio</div>
                  <div className="font-heading font-black text-white text-[11px] leading-tight">IT · AI · MEDIA</div>
                </div>
                <span className="shrink-0 text-[9px] font-mono font-bold text-emerald-100 bg-emerald-500/25 border border-emerald-300/40 px-2 py-0.5 rounded-full backdrop-blur-md flex items-center gap-1">
                  <CheckCircle2 className="w-2.5 h-2.5" /> VERIFIED
                </span>
              </div>
            </div>

            <div
              className="absolute -top-3 left-2 sm:-left-4 bg-white border border-slate-200 px-2.5 py-1 rounded-xl shadow-lg flex items-center gap-1.5 font-mono text-[11px] z-20"
              style={{ transform: `translate(${mousePos.x * 0.2}px, ${mousePos.y * 0.2}px)` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="font-heading font-black text-blue-700">IPK 3.59</span>
              <span className="text-slate-500 text-[9px] font-sans font-semibold">Cum Laude</span>
            </div>

            <div
              className="absolute -bottom-3 right-2 sm:-right-4 bg-white border border-slate-200 px-2.5 py-1 rounded-xl shadow-lg flex items-center gap-1.5 font-mono text-[11px] z-20"
              style={{ transform: `translate(${-mousePos.x * 0.2}px, ${-mousePos.y * 0.2}px)` }}
            >
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span className="font-heading font-black text-emerald-700">BNSP KKNI II</span>
              <span className="text-slate-500 text-[9px] font-sans font-semibold">TKJ</span>
            </div>
          </div>
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
            <div className="text-xs font-bold text-slate-800">Konten BAPPEDA</div>
            <div className="text-[10px] font-sans text-slate-500">On-Camera Talent</div>
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