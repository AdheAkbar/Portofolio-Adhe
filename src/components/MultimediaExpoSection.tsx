import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  Trophy, 
  Glasses, 
  Palette, 
  Award, 
  Eye,
  Sparkles,
  Hash
} from 'lucide-react';

interface MultimediaExpoSectionProps {
  onOpenCertModal?: (cert: any) => void;
}

export const MultimediaExpoSection: React.FC<MultimediaExpoSectionProps> = ({ onOpenCertModal }) => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });
  const [selectedTab, setSelectedTab] = useState<'all' | 'animasi' | 'ml' | 'arvr' | 'desain'>('all');

  const triggerTrophyConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 60,
      spread: 75,
      origin: { x, y },
      colors: ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6', '#EC4899']
    });
  };

  const works = [
    {
      id: 'animasi',
      code: 'Animasi & Game Karakter',
      title: 'Game Interaktif 2D & Animasi Karakter',
      award: 'JUARA 1 TINGKAT EXPO 2025',
      awardColor: 'text-amber-800 border-amber-300 bg-amber-100/90',
      podium: 'PODIUM 1 · EMAS',
      event: 'Teknokrat Academic Expo 2025',
      desc: 'Pengembangan proyek game interaktif 2D dengan perancangan karakter orisinal, animasi sprite, alur logika permainan, dan tata suara dinamis.',
      tools: ['Construct 2/3', 'Illustrator', 'CapCut Pro', 'Audacity'],
      image: '/assets/foto_expo_animasi.jpg',
      aspect: 'Aspect 16:9',
      certId: 'juara1-animasi',
      certImage: '/assets/sertif_animasi.jpg'
    },
    {
      id: 'ml',
      code: 'AI & Sains Data',
      title: 'Model Sentiment Analysis & Riset SINTA 3',
      award: 'JUARA 2 TINGKAT EXPO 2025',
      awardColor: 'text-purple-800 border-purple-300 bg-purple-100/90',
      podium: 'PODIUM 2 · PERAK',
      event: 'Teknokrat Expo & Jurnal BITS',
      desc: 'Komparasi algoritma Naive Bayes (88,5% akurasi) vs KNN (87,4%) pada 18.869 data ulasan Google Play Store. Diterbitkan di Jurnal BITS SINTA 3.',
      tools: ['Python 3.12', 'Scikit-Learn', 'TF-IDF NLP', 'Streamlit'],
      image: '/assets/jurnal_sinta3_paper.jpg',
      aspect: 'Aspect 16:9',
      certId: 'juara2-ml',
      certImage: '/assets/jurnal_sinta3_paper.jpg'
    },
    {
      id: 'arvr',
      code: 'AR / Virtual Reality',
      title: 'Teknokrat Portal AR (Augmented Reality)',
      award: 'JUARA 3 TINGKAT EXPO 2025',
      awardColor: 'text-sky-800 border-sky-300 bg-sky-100/90',
      podium: 'PODIUM 3 · PERUNGGU',
      event: 'Teknokrat Academic Expo 2025',
      desc: 'Aplikasi augmented reality interaktif berbasis mobile yang memproyeksikan visual gedung dan laboratorium kampus ke dunia nyata via image tracking.',
      tools: ['Unity 3D', 'Vuforia AR', 'Blender', 'C# Scripting'],
      image: '/assets/foto_expo_arvr.jpg',
      aspect: 'Aspect 16:9',
      certId: 'juara3-arvr',
      certImage: '/assets/sertif_arvr.jpg'
    }
  ];

  const filteredWorks = selectedTab === 'all' ? works : works.filter((w) => w.id === selectedTab);

  return (
    <section 
      ref={sectionRef}
      id="kreatif-juara" 
      className="pt-6 pb-12 md:pt-8 md:pb-14 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#F8FAFC] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2 mb-4 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Pameran Prestasi // Penghargaan Kompetisi Teknokrat Academic Expo
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">3× Juara Tingkat Universitas</span>
          </div>

          {/* Docked Multiplayer Collaborator (Figma Real-Time Style - Zero Overlap) */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold text-[11px] border border-amber-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Juara 1 animasi game
            </span>
          </div>
        </div>

        {/* Section Header with Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-4 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-800 mb-2 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>PRESTASI &amp; PENGHARGAAN JUARA EXPO</span>
            </div>

            <h2 className={`text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              3× Juara Teknokrat <span className="text-blue-700">Academic Expo</span>
            </h2>

            <p className={`font-serif-italic text-base sm:text-lg text-blue-700 mt-0.5 mb-1 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Trifecta Juara Expo: Juara 1 Animasi Game · Juara 2 Machine Learning · Juara 3 AR/VR Interaktif
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed line-clamp-2 transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini menampilkan dokumentasi karya dan piagam penghargaan yang saya raih dalam ajang Teknokrat Academic Expo. Memperoleh 3 penghargaan juara sekaligus di bidang animasi game interaktif, riset Machine Learning, dan Augmented Reality (AR/VR).
            </p>
          </div>

          {/* Right Column: 3 Quick Award Pills with Sequential Order 1 -> 2 -> 3 */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-2.5 shrink-0">
            <div className={`flex flex-wrap gap-1.5 shrink-0 transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <button 
                onClick={triggerTrophyConfetti}
                className="px-2.5 py-1 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-mono text-[11px] font-bold flex items-center gap-1 shadow-xs cursor-pointer click-pop card-3d-tilt"
                title="Klik untuk selebrasi Juara 1!"
              >
                <Trophy className="w-3 h-3 text-amber-500" />
                <span>Juara 1 Animasi</span>
                <Sparkles className="w-2.5 h-2.5 text-amber-500 fill-amber-400" />
              </button>
              <span className="px-2.5 py-1 rounded-xl bg-purple-50 border border-purple-200 text-purple-800 font-mono text-[11px] font-bold flex items-center gap-1 shadow-xs">
                <Award className="w-3 h-3 text-purple-600" /> Juara 2 ML
              </span>
              <span className="px-2.5 py-1 rounded-xl bg-sky-50 border border-sky-200 text-sky-800 font-mono text-[11px] font-bold flex items-center gap-1 shadow-xs">
                <Glasses className="w-3 h-3 text-sky-600" /> Juara 3 AR/VR
              </span>
            </div>
          </div>
        </div>

        {/* Filter Pills */}
        <div className={`flex items-center gap-2 mb-6 overflow-x-auto pb-1.5 transition-all ${
          isInView ? 'animate-reveal-up delay-200' : ''
        }`}>
          {[
            { id: 'all', label: 'SEMUA KEJUARAAN (3)' },
            { id: 'animasi', label: 'JUARA 1 ANIMASI' },
            { id: 'ml', label: 'JUARA 2 MACHINE LEARNING' },
            { id: 'arvr', label: 'JUARA 3 AR/VR' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                playTactileClick(1100);
                setSelectedTab(tab.id as any);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all whitespace-nowrap cursor-pointer click-pop ${
                selectedTab === tab.id
                  ? 'bg-[#0B1E3D] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:text-black hover:bg-slate-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 3 Featured Cards Grid with 3D Tilt */}
        <div className={`grid grid-cols-1 ${filteredWorks.length === 3 ? 'md:grid-cols-3' : filteredWorks.length === 2 ? 'md:grid-cols-2' : 'max-w-md mx-auto'} gap-6`}>
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between card-3d-tilt"
            >
              {/* Media Thumbnail Container */}
              <div className="relative w-full h-40 bg-slate-100 overflow-hidden border-b border-slate-200 group">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/foto_expo_animasi.jpg';
                  }}
                />
                
                {/* Award Badge Floating */}
                <div className="absolute top-2.5 left-2.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border shadow-xs ${work.awardColor}`}>
                    {work.award}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-[10px] font-mono mb-1.5 font-semibold">
                    <span className="text-slate-500">{work.event}</span>
                    <span className="text-blue-700 font-bold shrink-0">{work.podium}</span>
                  </div>
                  <div className="mb-2">
                    <span className="inline-block text-[10px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200 font-semibold">
                      {work.code}
                    </span>
                  </div>
                  <h3 className="text-sm font-heading font-extrabold text-[#0B1E3D] mb-1.5 leading-snug">
                    {work.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-sans mb-3 line-clamp-3">
                    {work.desc}
                  </p>
                </div>

                <div>
                  {/* Tool Tags */}
                  <div className="flex flex-wrap gap-1 mb-3 font-mono text-[10px]">
                    {work.tools.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded-md bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Link / Certificate Preview */}
                  <button
                    onClick={() => {
                      playTactileClick(1250);
                      if (onOpenCertModal) {
                        onOpenCertModal({
                          title: work.title,
                          issuer: work.event,
                          year: '2025',
                          category: work.award,
                          imageUrl: work.certImage,
                          verificationBadge: work.award
                        });
                      }
                    }}
                    className="w-full py-2 px-3 rounded-xl bg-[#0B1E3D] text-white hover:bg-blue-600 text-xs font-sans font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs click-pop"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Pratinjau Piagam Bukti</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
