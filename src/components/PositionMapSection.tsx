import React, { useState, useEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { useInView } from '../hooks/useInView';
import { PORTFOLIO_DATA, Division } from '../data/portfolioData';
import { 
  playTactileClick, 
  playSlideSwoosh, 
  playCelebrationChime 
} from '../utils/soundEffects';
import { 
  Compass, 
  Terminal, 
  Cpu, 
  Sparkles, 
  ArrowUpRight, 
  Code2, 
  Network, 
  Video, 
  Layers, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Check,
  CheckCircle2,
  Sliders,
  Flame,
  MousePointer2,
  Building2,
  Hash
} from 'lucide-react';

interface PositionMapSectionProps {
  activeDivision: string;
  onSelectDivision: (divisionId: string) => void;
}

export const PositionMapSection: React.FC<PositionMapSectionProps> = ({
  activeDivision,
  onSelectDivision
}) => {
  const { targetDivisions } = PORTFOLIO_DATA;
  const currentIndex = targetDivisions.findIndex((d) => d.id === activeDivision);
  const activeIndex = currentIndex >= 0 ? currentIndex : 0;
  const currentDiv = targetDivisions[activeIndex] || targetDivisions[0];

  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });
  const [slideDirection, setSlideDirection] = useState<'right' | 'left'>('right');
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const frameRef = useRef<HTMLDivElement>(null);

  const handleSelect = (divId: string, index: number) => {
    setSlideDirection(index > activeIndex ? 'right' : 'left');
    playSlideSwoosh();
    onSelectDivision(divId);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % targetDivisions.length;
    handleSelect(targetDivisions[nextIdx].id, nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + targetDivisions.length) % targetDivisions.length;
    handleSelect(targetDivisions[prevIdx].id, prevIdx);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!frameRef.current) return;
      const rect = frameRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3.5;
    const rotateY = ((x - centerX) / centerX) * 3.5;

    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    });
  };

  const triggerConfettiCelebration = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { x, y },
      colors: ['#2563EB', '#10B981', '#F59E0B', '#3B82F6']
    });
  };

  const roleSpecs: Record<string, {
    statusBadge: string;
    targetRole: string;
    bentoStats: { label: string; value: string; desc: string }[];
    badgeColor: string;
    tagline: string;
  }> = {
    'all': {
      statusBadge: 'Kualifikasi Lengkap Terverifikasi',
      targetRole: 'General Profile / Full Portfolio Ecosystem',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      tagline: 'Sintesis Holistik Antara Rekayasa Perangkat Lunak, Infrastruktur Jaringan & Komunikasi Publik.',
      bentoStats: [
        { label: 'Akademik', value: '3.59', desc: 'IPK S1 Cum Laude UTI' },
        { label: 'Sertifikasi', value: 'KKNI II', desc: 'Lisensi BNSP Seumur Hidup' },
        { label: 'Publikasi', value: 'SINTA 3', desc: 'Riset Supervised ML 2026' },
        { label: 'Humas', value: '30+ Konten', desc: 'BAPPEDA Prov. Lampung' }
      ]
    },
    'software-web': {
      statusBadge: 'Portofolio Produksi Teruji',
      targetRole: 'Programmer / Mobile & Web Developer Intern',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      tagline: 'Membangun Aplikasi Native Android Berkinerja Tinggi & Antarmuka Modern Next.js Berbasis Tipe.',
      bentoStats: [
        { label: 'Repo Inti', value: '5 Proyek', desc: 'Android, Next.js & Quant' },
        { label: 'Arsitektur', value: 'MVVM', desc: 'Clean Arch + Coroutines' },
        { label: 'Stack Web', value: 'Next.js', desc: 'TypeScript & Tailwind CSS' },
        { label: 'Automasi', value: 'MV3', desc: 'Chrome Extension Automation' }
      ]
    },
    'it-network': {
      statusBadge: 'Lisensi Negara BNSP Aktif',
      targetRole: 'IT Support / Network Engineer / NOC Specialist',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      tagline: 'Presisi Fisik Fiber Optic Berlisensi Negara, Manajemen RouterOS MikroTik & Operasional NOC.',
      bentoStats: [
        { label: 'Lisensi Negara', value: 'BNSP', desc: 'Teknisi Jaringan Komputer' },
        { label: 'Fiber Optic', value: '< 0.02 dB', desc: 'Presisi Splicing & OPM' },
        { label: 'Sertifikasi', value: 'MikroTik', desc: 'RouterOS & VLAN Config' },
        { label: 'Infrastruktur', value: 'NOC / Rack', desc: 'PT Sumatra Multimedia Solusi NOC' }
      ]
    },
    'creative-media': {
      statusBadge: 'Karya Publikasi Resmi',
      targetRole: 'Content Creator / Multimedia / Public Relations',
      badgeColor: 'bg-pink-50 text-pink-700 border-pink-200',
      tagline: 'Komunikasi Visual Berdampak Tinggi: On-Camera Host BAPPEDA, Desain Canva & Animasi Juara 1.',
      bentoStats: [
        { label: 'Produksi Humas', value: '30+ Konten', desc: 'BAPPEDA Prov. Lampung' },
        { label: 'Penghargaan', value: 'Juara 1', desc: 'Animasi 2D/3D Expo 2025' },
        { label: 'Duta Merek', value: 'Finalis', desc: 'Brand Ambassador Jaya Bakery' },
        { label: 'On-Camera', value: 'Talent & Host', desc: 'Voice Over & Scriptwriting' }
      ]
    },
    'data-operations': {
      statusBadge: 'Publikasi Ilmiah SINTA 3',
      targetRole: 'Data Analyst / Digital Administration / Machine Learning',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      tagline: 'Analisis Data Kuantitatif: Publikasi Ilmiah SINTA 3, Pengelolaan E-Arsip & Rekam Jejak 4.500+ Order.',
      bentoStats: [
        { label: 'Jurnal SINTA 3', value: 'Tahun 2026', desc: 'Terbit Terakreditasi Nasional' },
        { label: 'Akurasi Riset', value: '88.5%', desc: 'Naive Bayes (88.5%) vs KNN (87.4%)' },
        { label: 'Pelayanan Klien', value: '4.500+ Order', desc: 'Lita Global Retensi Tinggi' },
        { label: 'Kepuasan Klien', value: '100% CSAT', desc: 'Rating Sempurna Bintang 5' }
      ]
    }
  };

  const activeSpec = roleSpecs[activeDivision] || roleSpecs['all'];

  const proofNodes = [
    {
      id: 'proof-github',
      title: '6 Proyek Inti dari 26 Repositori GitHub',
      slideCode: 'BUKTI 01',
      targetAnchor: '#github-showcase',
      icon: <Code2 className="w-4 h-4 text-sky-600" />,
      metric: 'Adhebank, Ella-Makeup, Autofill MV3, Penakluk-Code, adhemology',
      relevantFor: ['all', 'software-web', 'data-operations']
    },
    {
      id: 'proof-bappeda',
      title: 'Humas BAPPEDA Prov. Lampung (30+ Konten Resmi)',
      slideCode: 'BUKTI 02',
      targetAnchor: '#bappeda',
      icon: <Video className="w-4 h-4 text-pink-600" />,
      metric: 'Scriptwriting, On-Camera Talent, CapCut Pro, Canva',
      relevantFor: ['all', 'creative-media']
    },
    {
      id: 'proof-lita',
      title: 'Lita Global (4.500+ Order Layanan Interaktif)',
      slideCode: 'BUKTI 03',
      targetAnchor: '#lita-global',
      icon: <Layers className="w-4 h-4 text-amber-600" />,
      metric: 'Kepuasan 100%, Retensi Pengguna & Koordinasi Real-Time',
      relevantFor: ['all', 'data-operations', 'creative-media']
    },
    {
      id: 'proof-field',
      title: 'Operasi Lapangan & NOC/FOC Fiber Optic PT SMS',
      slideCode: 'BUKTI 04',
      targetAnchor: '#field-operations',
      icon: <Network className="w-4 h-4 text-emerald-600" />,
      metric: 'Splicing FO < 0.02 dB, OPM, Server Rack, Data Enumeration',
      relevantFor: ['all', 'it-network', 'data-operations']
    },
    {
      id: 'proof-sinta',
      title: 'Riset SINTA 3: Supervised ML Sentiment Analysis',
      slideCode: 'BUKTI 05',
      targetAnchor: '#sinta-3-research',
      icon: <Cpu className="w-4 h-4 text-purple-600" />,
      metric: 'Naive Bayes (88.5%) vs KNN (87.4%), Publikasi SINTA 3 BITS 2026',
      relevantFor: ['all', 'software-web', 'data-operations']
    },
    {
      id: 'proof-expo',
      title: 'Trifecta Juara Expo 2025: Animasi, ML & AR/VR',
      slideCode: 'BUKTI 06',
      targetAnchor: '#kreatif-juara',
      icon: <Sparkles className="w-4 h-4 text-amber-500" />,
      metric: 'Game Interaktif 2D, Machine Learning & Teknokrat Portal AR',
      relevantFor: ['all', 'creative-media', 'software-web']
    },
    {
      id: 'proof-bnsp',
      title: 'Hierarki 8 Bukti Kompetensi (Hero: BNSP KKNI II)',
      slideCode: 'BUKTI 07',
      targetAnchor: '#sertifikat',
      icon: <ShieldCheck className="w-4 h-4 text-emerald-600" />,
      metric: 'BNSP Teknisi Jaringan, MikroTik, 3 SKPI Nilai A Terverifikasi',
      relevantFor: ['all', 'it-network', 'software-web', 'data-operations', 'creative-media']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="peta-posisi" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-slate-200/90 relative bg-gradient-to-b from-[#FFFFFF] via-[#F8FAFC] to-[#F1F5F9] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-blue-800 text-xs font-mono font-bold tracking-wider uppercase mb-3 shadow-2xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <Compass className="w-3.5 h-3.5 text-blue-600" />
              <span>SPESIALISASI &amp; KOMPETENSI KERJA</span>
            </div>
            
            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Pemetaan Keahlian &amp; Kesiapan Kerja
            </h2>
            
            <p className={`font-heading font-semibold text-lg sm:text-xl text-blue-700 mt-2 mb-3 tracking-tight transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Infrastruktur Jaringan · Rekayasa Software · Operasional Lapangan · Komunikasi Publik
            </p>
            
            <p className={`text-slate-600 text-xs sm:text-sm md:text-base font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Portofolio keahlian teruji yang mencakup operasional ISP (Fiber Optic &amp; MikroTik), riset kecerdasan buatan terindeks SINTA 3, rekayasa software full-stack, serta peran komunikasi kedinasan di BAPPEDA Provinsi Lampung.
            </p>
          </div>

          {/* Right Column: Status & Credential Pill */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            <div className={`bg-white border border-slate-200/90 p-4 rounded-2xl text-left lg:text-right font-mono text-xs shrink-0 shadow-2xs transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="flex items-center gap-2 text-[#0B1E3D] font-bold mb-1 justify-start lg:justify-end text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>5 DOMAIN SPESIALISASI</span>
              </div>
              <div className="text-slate-500 font-sans text-xs">
                Didukung Berkas Resmi, BNSP, &amp; Bukti Karya
              </div>
            </div>
          </div>
        </div>

        {/* Strip Ringkasan 5 Tempat / Instansi Terverifikasi M. Adhe Akbar */}
        <div className={`mb-8 p-4 sm:p-5 rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xs transition-all ${
          isInView ? 'animate-reveal-up delay-100' : ''
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3 pb-2.5 border-b border-slate-100">
            <span className="text-[11px] font-mono font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <Building2 className="w-4 h-4 text-blue-600" />
              Rekam Jejak Instansi &amp; Pengalaman Terverifikasi (M. Adhe Akbar, S.Kom.)
            </span>
            <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-bold self-start sm:self-auto">
              ✓ 100% Bukti Berkas &amp; Portofolio Siap
            </span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs font-mono">
            <a 
              href="#bappeda" 
              onClick={() => playTactileClick(1200)}
              className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/70 hover:border-blue-300 transition-all group block text-left"
            >
              <div className="text-[10px] text-pink-600 font-bold mb-0.5 flex items-center justify-between">
                <span>KEDINASAN</span>
                <span className="text-slate-400 group-hover:text-blue-600">↗</span>
              </div>
              <div className="font-bold text-slate-900 text-xs truncate">BAPPEDA Prov. Lampung</div>
              <div className="text-[10px] text-slate-500 font-sans mt-0.5">Humas & On-Camera (2025)</div>
            </a>

            <a 
              href="#field-operations" 
              onClick={() => playTactileClick(1200)}
              className="p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50/70 border border-slate-200/70 hover:border-emerald-300 transition-all group block text-left"
            >
              <div className="text-[10px] text-emerald-600 font-bold mb-0.5 flex items-center justify-between">
                <span>OPERASIONAL</span>
                <span className="text-slate-400 group-hover:text-emerald-600">↗</span>
              </div>
              <div className="font-bold text-slate-900 text-xs truncate">PT Sumatra Multimedia Solusi</div>
              <div className="text-[10px] text-slate-500 font-sans mt-0.5">Teknisi Fiber Optic (2021)</div>
            </a>

            <a 
              href="#field-operations" 
              onClick={() => playTactileClick(1200)}
              className="p-3 rounded-2xl bg-slate-50 hover:bg-sky-50/70 border border-slate-200/70 hover:border-sky-300 transition-all group block text-left"
            >
              <div className="text-[10px] text-sky-600 font-bold mb-0.5 flex items-center justify-between">
                <span>LAPANGAN</span>
                <span className="text-slate-400 group-hover:text-sky-600">↗</span>
              </div>
              <div className="font-bold text-slate-900 text-xs truncate">Teman Baik Lampung</div>
              <div className="text-[10px] text-slate-500 font-sans mt-0.5">Enumerator Mobile (2023-24)</div>
            </a>

            <a 
              href="#lita-global" 
              onClick={() => playTactileClick(1200)}
              className="p-3 rounded-2xl bg-slate-50 hover:bg-amber-50/70 border border-slate-200/70 hover:border-amber-300 transition-all group block text-left"
            >
              <div className="text-[10px] text-amber-600 font-bold mb-0.5 flex items-center justify-between">
                <span>LAYANAN DARING</span>
                <span className="text-slate-400 group-hover:text-amber-600">↗</span>
              </div>
              <div className="font-bold text-slate-900 text-xs truncate">Lita Global Platform</div>
              <div className="text-[10px] text-slate-500 font-sans mt-0.5">4.500+ Order CSAT 100%</div>
            </a>

            <a 
              href="#pendidikan" 
              onClick={() => playTactileClick(1200)}
              className="p-3 rounded-2xl bg-slate-50 hover:bg-purple-50/70 border border-slate-200/70 hover:border-purple-300 transition-all group block text-left col-span-2 sm:col-span-1"
            >
              <div className="text-[10px] text-purple-600 font-bold mb-0.5 flex items-center justify-between">
                <span>AKADEMIK</span>
                <span className="text-slate-400 group-hover:text-purple-600">↗</span>
              </div>
              <div className="font-bold text-slate-900 text-xs truncate">Univ. Teknokrat Indonesia</div>
              <div className="text-[10px] text-slate-500 font-sans mt-0.5">S1 Cum Laude · 3x Juara</div>
            </a>
          </div>
        </div>

        {/* Division Filter Navigation Carousel (5 Interactive 3D Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 mb-8">
          {targetDivisions.map((div: Division, idx: number) => {
            const isSelected = div.id === activeDivision;
            return (
              <button
                key={div.id}
                onClick={() => handleSelect(div.id, idx)}
                className={`flex flex-col text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer group click-pop ${
                  isInView ? `animate-cascade delay-${(idx + 1) * 100}` : ''
                } ${
                  isSelected
                    ? 'bg-[#0B1E3D] text-white border-[#0B1E3D] shadow-xl -translate-y-1.5 ring-2 ring-blue-500/30'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:bg-blue-50/40 hover:-translate-y-0.5 shadow-xs'
                }`}
              >
                {/* Active Top Glow Line */}
                {isSelected && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 animate-pulse" />
                )}

                <div className="flex items-center justify-between mb-2.5">
                  <span className={`text-[10px] font-mono font-bold tracking-wider ${isSelected ? 'text-blue-300' : 'text-slate-400'}`}>
                    0{idx + 1} // DIVISI
                  </span>
                  
                  {isSelected ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50 animate-ping" />
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-blue-400 transition-colors" />
                  )}
                </div>

                <div className={`font-heading font-extrabold text-sm tracking-tight mb-1.5 leading-snug ${isSelected ? 'text-white' : 'text-[#0B1E3D]'}`}>
                  {div.name}
                </div>

                <div className={`text-[11px] leading-relaxed mt-auto font-sans line-clamp-2 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                  {div.id === 'it-network'
                    ? 'NOC/FOC, Splicing FO & MikroTik'
                    : div.id === 'software-web'
                    ? 'Kotlin, Compose, Next.js & TS'
                    : div.id === 'creative-media' 
                    ? 'Humas BAPPEDA, CapCut & Animasi'
                    : div.id === 'data-operations'
                    ? 'Python ML SINTA 3 & E-Arsip'
                    : 'Overview seluruh ekosistem kompetensi'}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dynamic Animated Presentation Slide Card with Interactive 3D Perspective Tilt */}
        <div 
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={tiltStyle}
          className="perspective-1200 transition-all duration-300"
        >
          <div 
            key={activeDivision}
            className={`bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-200/90 shadow-2xl relative overflow-hidden backdrop-blur-sm ${
              slideDirection === 'right' ? 'animate-slide-right' : 'animate-slide-left'
            }`}
          >
            {/* Ambient Background Glow Effect */}
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Presentation Card Header Bar */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100 text-xs font-mono text-slate-500 relative z-10">
              <div className="flex items-center gap-2 font-bold text-slate-800">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shadow-sm" />
                <span>Kategori Keahlian: {currentDiv.name}</span>
                <span className="text-slate-300 hidden sm:inline">•</span>
                <span className="text-[11px] text-slate-400 hidden sm:inline">Standar Kompetensi Industri</span>
              </div>

              <div className="flex items-center gap-2">
                <span
                  className={`px-3.5 py-1 rounded-full text-[11px] font-bold border ${activeSpec.badgeColor} flex items-center gap-1.5 shadow-2xs`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                  <span>{activeSpec.statusBadge}</span>
                </span>
                <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 font-bold text-[10px]">
                  BIDANG {activeIndex + 1} DARI 5
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
              
              {/* Left Column: Role Details & Bento Highlights */}
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold bg-[#0B1E3D] text-white shadow-2xs">
                    BIDANG: {currentDiv.keyTarget}
                  </span>
                  <span className="text-xs font-mono text-emerald-600 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> KOMPETENSI TERUJI
                  </span>
                </div>

                {/* Kinetic 3D Animated Heading that Pops when Slided */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0B1E3D] mb-2 tracking-tight animate-kinetic-3d">
                  {currentDiv.name}
                </h3>

                <p className="font-serif-italic text-sm sm:text-base text-blue-700 mb-3 font-normal">
                  {activeSpec.tagline}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                  {currentDiv.shortDesc}. Diselaraskan dengan standar operasional industri dan kebutuhan praktis di lapangan dengan rekam jejak pembuktian konkret.
                </p>

                {/* Bento Grid Highlights for this Role (with 3D Card Hover & Kinetic Scale) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {activeSpec.bentoStats.map((item, bIdx) => (
                    <div 
                      key={bIdx}
                      className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200 text-center hover:bg-blue-50/60 hover:border-blue-400 transition-all duration-300 shadow-2xs card-3d-tilt"
                    >
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1 font-semibold">
                        {item.label}
                      </div>
                      <div className="text-base sm:text-lg font-heading font-extrabold text-[#0B1E3D]">
                        {item.value}
                      </div>
                      <div className="text-[10px] text-slate-500 font-sans mt-0.5 line-clamp-1">
                        {item.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Primary Tools Pills */}
                <div>
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3.5 h-3.5 text-blue-600" />
                    PERANGKAT &amp; APLIKASI UTAMA:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentDiv.primaryTools.map((tool: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-mono text-xs font-semibold flex items-center gap-2 shadow-2xs hover:border-blue-500 hover:text-blue-700 hover:-translate-y-0.5 transition-all"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Direct Evidence Launchers */}
              <div className="lg:col-span-5 bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm">
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4 flex items-center justify-between font-bold pb-2 border-b border-slate-200">
                  <span className="flex items-center gap-1.5 text-slate-800">
                    <Sliders className="w-3.5 h-3.5 text-blue-600" />
                    BUKTI &amp; PORTOFOLIO TERKAIT:
                  </span>
                  <span className="text-blue-600 text-[10px] font-bold">LIHAT BUKTI LENGKAP ↗</span>
                </div>

                <div className="space-y-3">
                  {proofNodes
                    .filter((node) => node.relevantFor.includes(activeDivision))
                    .map((node) => (
                      <a
                        key={node.id}
                        href={node.targetAnchor}
                        onClick={() => playTactileClick(1300)}
                        className="group flex items-center justify-between p-3.5 rounded-2xl bg-white hover:bg-blue-50/60 border border-slate-200 hover:border-blue-400 transition-all duration-300 cursor-pointer shadow-xs hover:shadow-lg card-3d-tilt"
                      >
                        <div className="flex items-center gap-3 min-w-0 flex-1 mr-3">
                          <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:bg-blue-100/70 group-hover:border-blue-300 transition-colors shrink-0">
                            {node.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs sm:text-sm font-heading font-bold text-[#0B1E3D] group-hover:text-blue-700 transition-colors truncate">
                              {node.title}
                            </div>
                            <div className="text-[11px] font-mono text-slate-500 mt-0.5 truncate">
                              {node.metric}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors">
                            {node.slideCode}
                          </span>
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        </div>
                      </a>
                    ))}
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
