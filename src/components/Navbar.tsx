import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, ArrowUpRight, FileText } from 'lucide-react';
import { toggleMute, playTactileClick } from '../utils/soundEffects';

interface NavbarProps {
  activeDivision: string;
  onSelectDivision: (id: string) => void;
  onOpenCvModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [muted, setMuted] = useState(false);

  const handleMuteToggle = () => {
    const isNowMuted = toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) playTactileClick(1200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.06] px-4 md:px-8 py-3.5 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo & Editorial Title */}
        <div className="flex items-center gap-3">
          <a 
            href="#hero" 
            onClick={() => playTactileClick(1000)}
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-neutral-200/90 shadow-2xs hover:shadow-sm hover:scale-105 transition-all shrink-0 group"
            title="M. Adhe Akbar, S.Kom."
          >
            <img 
              src="/assets/adhe_formal_red.jpg" 
              alt="M. Adhe Akbar, S.Kom." 
              className="w-full h-full object-cover object-top" 
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white shadow-2xs" />
          </a>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-neutral-900 tracking-tight text-base md:text-lg">
                M. ADHE AKBAR
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200 font-medium">
                S.Kom.
              </span>
            </div>
            <div className="text-[11px] font-sans text-neutral-500 truncate max-w-[150px] sm:max-w-xs md:max-w-none">
              Teknisi Jaringan &amp; IT Support • Full-Stack Developer
            </div>
          </div>
        </div>

        {/* Quick Nav Links (Clean Modern Editorial, No Slide Numbers) */}
        <nav className="hidden lg:flex items-center gap-1 bg-neutral-100/90 p-1 rounded-full border border-neutral-200/80 text-xs font-sans">
          <a
            href="#hero"
            onClick={() => playTactileClick(1000)}
            className="px-3 py-1.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all font-medium"
          >
            Beranda
          </a>
          <a
            href="#hybrid-skillset"
            onClick={() => playTactileClick(1100)}
            className="px-3 py-1.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all font-medium"
          >
            Keahlian
          </a>
          <a
            href="#cv-lengkap"
            onClick={() => playTactileClick(1150)}
            className="px-3 py-1.5 rounded-full text-blue-700 bg-blue-50/80 hover:bg-white transition-all font-bold flex items-center gap-1"
          >
            <span>CV Lengkap</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
          </a>
          <a
            href="#github-showcase"
            onClick={() => playTactileClick(1200)}
            className="px-3 py-1.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all font-medium"
          >
            Proyek
          </a>
          <a
            href="#sinta-3-research"
            onClick={() => playTactileClick(1300)}
            className="px-3 py-1.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all font-medium"
          >
            Riset SINTA
          </a>
          <a
            href="#kreatif-juara"
            onClick={() => playTactileClick(1350)}
            className="px-3 py-1.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all font-medium"
          >
            Prestasi
          </a>
          <a
            href="#sertifikat"
            onClick={() => playTactileClick(1400)}
            className="px-3 py-1.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all font-medium"
          >
            Sertifikasi
          </a>
          <a
            href="#kontak"
            onClick={() => playTactileClick(1500)}
            className="px-3 py-1.5 rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-white transition-all font-medium"
          >
            Kontak
          </a>
        </nav>

        {/* Action Controls & Contact Me Pill (Direct Behance Replica) */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          {/* Dedicated CV ATS Button */}
          {onOpenCvModal && (
            <button
              onClick={() => {
                playTactileClick(1200);
                onOpenCvModal();
              }}
              className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-sans font-semibold transition-all shadow-2xs cursor-pointer click-pop shrink-0"
              title="Buka Dokumen CV Lengkap (Format Standar ATS & Cetak PDF)"
            >
              <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="hidden sm:inline">Curriculum Vitae</span>
              <span className="sm:hidden font-mono font-bold text-[11px]">CV</span>
              <span className="px-1 py-0.2 rounded-full bg-blue-600 text-white text-[9px] font-mono font-bold">ATS</span>
            </button>
          )}

          {/* Sound Toggle */}
          <button
            onClick={handleMuteToggle}
            title={muted ? "Unmute sound effects" : "Mute sound effects"}
            className="p-1.5 sm:p-2 rounded-full bg-white border border-neutral-200 text-neutral-500 hover:text-neutral-900 hover:border-neutral-300 transition-all cursor-pointer shadow-xs shrink-0"
          >
            {muted ? <VolumeX className="w-4 h-4 text-rose-500" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
          </button>

          {/* Contact Me CTA Solid Black Button */}
          <a
            href="#kontak"
            onClick={() => playTactileClick(1600)}
            className="inline-flex items-center justify-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-sans font-semibold transition-all shadow-sm cursor-pointer shrink-0"
          >
            <span className="hidden sm:inline">Contact Me</span>
            <span className="sm:hidden">Kontak</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
};
