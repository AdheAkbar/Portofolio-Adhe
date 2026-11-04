import React, { useEffect, useState } from 'react';
import { playTactileClick } from '../utils/soundEffects';
import { Compass } from 'lucide-react';

const SECTIONS = [
  { id: 'hero', label: 'Beranda' },
  { id: 'profil', label: 'Profil' },
  { id: 'cv-lengkap', label: 'Ringkasan CV' },
  { id: 'pendidikan', label: 'Pendidikan' },
  { id: 'hybrid-skillset', label: 'Daftar Keahlian & Tools' },
  { id: 'github-showcase', label: 'Proyek GitHub' },
  { id: 'bappeda', label: 'BAPPEDA Lampung' },
  { id: 'lita-global', label: 'Lita Global' },
  { id: 'field-operations', label: 'Jaringan & Lapangan' },
  { id: 'sinta-3-research', label: 'Riset SINTA 3' },
  { id: 'kreatif-juara', label: 'Prestasi Expo' },
  { id: 'pkm', label: 'Pengabdian Masyarakat' },
  { id: 'branding', label: 'Duta & Publik' },
  { id: 'sertifikat', label: 'Sertifikasi BNSP' },
  { id: 'kontak', label: 'Hubungi Saya' }
];

export const RotaryDial: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const targetThreshold = windowHeight * 0.35; // Target zone: 35% from top

      let currentId = SECTIONS[0].id;
      for (let i = 0; i < SECTIONS.length; i++) {
        const sec = SECTIONS[i];
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetThreshold) {
            currentId = sec.id;
          }
        }
      }
      setActiveSection(currentId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-center gap-1.5 bg-white/90 backdrop-blur-xl p-2 rounded-full border border-neutral-200/90 shadow-lg">
      {/* Rotary Dial Header Icon */}
      <div 
        title="Navigasi Halaman"
        className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white shadow-xs mb-1"
      >
        <Compass className="w-4 h-4 text-emerald-400 animate-spin-slow" />
      </div>

      {/* Section Dots */}
      <div className="flex flex-col gap-1.5">
        {SECTIONS.map((sec, idx) => {
          const isActive = sec.id === activeSection;
          return (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              onClick={() => playTactileClick(900 + idx * 40)}
              title={sec.label}
              className={`group relative flex items-center justify-center w-4 h-4 rounded-full transition-all cursor-pointer`}
            >
              <div
                className={`rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'w-2.5 h-2.5 bg-[#10B981] ring-2 ring-emerald-200 shadow-sm' 
                    : 'w-1.5 h-1.5 bg-neutral-300 group-hover:bg-neutral-600'
                }`}
              />

              {/* Tooltip on hover (Clean Swiss Typography) */}
              <span className="absolute right-7 px-3 py-1 rounded-full bg-neutral-900 text-white text-[11px] font-sans font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-lg">
                {sec.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
