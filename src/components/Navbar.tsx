import React, { useEffect, useState } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';
import { playTactileClick } from '../utils/soundEffects';

interface NavbarProps {
  activeDivision: string;
  onSelectDivision: (id: string) => void;
  onOpenCvModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCvModal }) => {
  const [activeId, setActiveId] = useState('hero');

  const NAV_ITEMS = [
    { id: 'hero', label: 'Beranda', href: '#hero' },
    { id: 'profil', label: 'Profil', href: '#profil' },
    { id: 'hybrid-skillset', label: 'Keahlian', href: '#hybrid-skillset' },
    { id: 'cv-lengkap', label: 'CV Lengkap', href: '#cv-lengkap' },
    { id: 'github-showcase', label: 'Proyek', href: '#github-showcase' },
    { id: 'sinta-3-research', label: 'Riset SINTA', href: '#sinta-3-research' },
    { id: 'kreatif-juara', label: 'Prestasi', href: '#kreatif-juara' },
    { id: 'sertifikat', label: 'Sertifikasi', href: '#sertifikat' },
    { id: 'kontak', label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (id: string) => {
    playTactileClick(1100);
    setActiveId(id);
  };

  // Active mengikuti posisi scroll (nearest section top di bawah navbar)
  useEffect(() => {
    const computeActive = () => {
      const offset = 140;
      let current = 'hero';
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= offset + 10) current = item.id;
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = 'kontak';
      setActiveId(current);
    };
    computeActive();
    window.addEventListener('scroll', computeActive, { passive: true });
    return () => window.removeEventListener('scroll', computeActive);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/[0.06] px-4 md:px-8 py-3.5 transition-all shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Logo & Editorial Title */}
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <a 
            href="#hero" 
            onClick={() => playTactileClick(1000)}
            className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl overflow-hidden border border-neutral-200/90 shadow-2xs hover:shadow-sm hover:scale-105 transition-all shrink-0 group"
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
              <span className="whitespace-nowrap font-heading font-extrabold text-neutral-900 tracking-tight text-sm sm:text-base md:text-lg">
                M. ADHE AKBAR
              </span>
              <span className="hidden sm:inline-flex px-2 py-0.5 rounded-full text-[10px] font-mono bg-neutral-100 text-neutral-700 border border-neutral-200 font-medium">
                S.Kom.
              </span>
            </div>
            <div className="hidden text-[11px] font-sans text-neutral-500 truncate max-w-xs sm:block md:max-w-none">
              Teknisi Jaringan &amp; IT Support • Full-Stack Developer
            </div>
          </div>
        </div>

        {/* Quick Nav Links — active state mengikuti scroll & klik */}
        <nav className="hidden 2xl:flex items-center gap-1 bg-neutral-100/90 p-1 rounded-full border border-neutral-200/80 text-xs font-sans">
          {NAV_ITEMS.map((item) => {
            const isActive = activeId === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`px-3 py-1.5 rounded-full transition-all duration-300 ease-out font-medium flex items-center gap-1 ${
                  isActive
                    ? 'text-blue-700 bg-blue-50/80 font-bold shadow-2xs'
                    : 'text-neutral-600 hover:text-neutral-900 hover:bg-white'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`rounded-full bg-blue-600 transition-all duration-300 ease-out ${
                    isActive ? 'w-1.5 h-1.5 opacity-100 scale-100' : 'w-0 h-0 opacity-0 scale-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Contact Me Pill (Direct Behance Replica) */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
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
