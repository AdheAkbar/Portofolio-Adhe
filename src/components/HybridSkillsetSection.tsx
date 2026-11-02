import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  GitMerge, 
  Network, 
  Video, 
  Cpu, 
  Code2, 
  CheckCircle2, 
  Sparkles, 
  Zap,
  Languages,
  Sliders,
  Check,
  Hash,
  Play,
  Pause
} from 'lucide-react';

import { BrandLogo } from './BrandLogos';


export const HybridSkillsetSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.15 });
  const [activeTab, setActiveTab] = useState<'all' | 'network' | 'ai' | 'creative'>('all');
  const [isPaused, setIsPaused] = useState(false);

  const triggerSkillConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#2563EB', '#10B981', '#EC4899', '#8B5CF6']
    });
  };

  const networkSkills = [
    { name: 'MikroTik RouterOS', level: 'BNSP KKNI II Certified (Routing & Bandwidth)', tag: 'ROUTING' },
    { name: 'Fiber Optic Splicing', level: 'Splicing Fusion Core < 0.02 dB & OPM Test', tag: 'PHYSICAL' },
    { name: 'Server Rack & Patch Panel', level: 'NOC/FOC Server Maintenance PT SMS', tag: 'INFRA' },
    { name: 'LAN/WAN Subnetting', level: 'TCP/IP Architecture & VLAN Segmentation', tag: 'PROTOCOL' },
    { name: 'Verifikasi Integritas Data', level: 'Zero-Error Audit & Validasi Lapangan', tag: 'AUDIT' }
  ];

  const creativeSkills = [
    { name: 'Layanan Pelanggan Digital', level: '4.500+ order selesai · rating bintang 5 (Lita Global)', tag: 'SERVICE' },
    { name: 'On-Camera Hosting', level: 'Finalis Brand Ambassador Jaya Bakery & Duta Mekhanai', tag: 'TALENT' },
    { name: 'Video Editing (CapCut Pro)', level: '30+ Konten Publikasi Campuran Humas BAPPEDA', tag: 'PRODUCTION' },
    { name: 'Desain Grafis (Canva)', level: 'SKPI Nilai A Berbasis Uji Kompetensi', tag: 'BRANDING' },
    { name: 'Scriptwriting Kampanye', level: 'Naskah Berita Kedinasan & Rilis Publik', tag: 'NARRATIVE' },
    { name: 'Meta Ads Manager', level: 'Distribusi Konten Digital & Jangkauan Organik', tag: 'MARKETING' }
  ];

  const collisionSkills = [
    { name: 'Python Machine Learning', desc: 'Riset SINTA 3: Komparasi Naive Bayes (88.5%) vs KNN', badge: 'AI RESEARCH' },
    { name: 'Android Kotlin Compose', desc: 'Arsitektur MVVM, Room Database, StateFlow & UDF', badge: 'MOBILE' },
    { name: 'Next.js 14 App Router', desc: 'React, TypeScript, Tailwind CSS & Server Components', badge: 'FULLSTACK' },
    { name: 'Chrome Extension MV3', desc: 'Manifest V3, DOM Parsing & Autofill Form Otomatis', badge: 'BROWSER MV3' },
    { name: 'AI Toolstack & Agent Automation', desc: 'Claude, ChatGPT, Gemini + Hermes Agent otonom untuk kerja teknis', badge: 'AI OPS' }
  ];

  const softSkills = [
    { label: 'Bahasa Indonesia', value: 'Native / Fasih', icon: 'ID' },
    { label: 'English', value: 'Professional Working / Intermediate', icon: 'EN' },
    { label: 'Administrasi Perkantoran', value: 'SKPI Nilai A (Teknokrat LPBM)', icon: 'ADM' },
    { label: 'Kepemimpinan & Kolaborasi', value: 'Cross-Functional Team Leader', icon: 'LEAD' },
    { label: 'Adaptasi Cepat & Problem Solving', value: 'High Agility & Analytical', icon: 'AGILE' }
  ];

  const aiTools = [
    { name: 'Hermes Agent', category: 'Agen AI otonom untuk kerja teknis', badge: 'Nous Research', bg: 'bg-emerald-50 border-emerald-200' },
    { name: 'Claude', category: 'Penalaran, menulis & coding', badge: 'Anthropic', bg: 'bg-amber-50 border-amber-200' },
    { name: 'ChatGPT', category: 'Asisten AI serbaguna & drafting', badge: 'OpenAI', bg: 'bg-teal-50 border-teal-200' },
    { name: 'Gemini', category: 'Analisis multimodal & dokumen', badge: 'Google', bg: 'bg-blue-50 border-blue-200' },
    { name: 'Model Router', category: 'Pintu tunggal banyak model AI', badge: 'Sendiri', bg: 'bg-indigo-50 border-indigo-200' },
    { name: 'VS Code', category: 'Editor kode utama harian', badge: 'Microsoft', bg: 'bg-sky-50 border-sky-200' },
    { name: 'Python', category: 'Skrip data & machine learning', badge: 'Scikit-Learn', bg: 'bg-yellow-50 border-yellow-200' },
    { name: 'Git & GitHub', category: 'Kontrol versi & publikasi kode', badge: 'VCS', bg: 'bg-slate-100 border-slate-300' },
  ];

  const creativeTools = [
    { name: 'CapCut Pro', category: 'Editing video & color grading', badge: 'Humas BAPPEDA', bg: 'bg-rose-50 border-rose-200' },
    { name: 'Canva Pro', category: 'Desain grafis & presentasi', badge: 'SKPI Nilai A', bg: 'bg-purple-50 border-purple-200' },
    { name: 'Figma', category: 'Desain UI/UX & prototipe', badge: 'Design System', bg: 'bg-pink-50 border-pink-200' },
    { name: 'MikroTik RouterOS', category: 'Routing, VLAN & firewall ISP', badge: 'BNSP', bg: 'bg-blue-50 border-blue-200' },
    { name: 'Construct', category: 'Game 2D interaktif', badge: 'Juara 1 Expo', bg: 'bg-emerald-50 border-emerald-200' },
    { name: 'Adobe Photoshop', category: 'Retouching foto & aset visual', badge: 'Creative Suite', bg: 'bg-sky-50 border-sky-200' },
    { name: 'Adobe Illustrator', category: 'Desain vektor & branding', badge: 'Vector Art', bg: 'bg-amber-50 border-amber-200' },
    { name: 'Postman', category: 'Uji & integrasi API', badge: 'Web Services', bg: 'bg-orange-50 border-orange-200' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="hybrid-skillset" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#F8FAFC] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Bar judul bagian */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-white/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Keahlian &amp; Alat Kerja
            </span>
            <span className="text-slate-400 hidden sm:inline">|</span>
            <span className="text-slate-500 hidden sm:inline">Jaringan · Software · Multimedia</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200">
              <CheckCircle2 className="w-3 h-3" />
              Terverifikasi
            </span>
          </div>
        </div>

        {/* Section Header with Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-800 mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <GitMerge className="w-3.5 h-3.5 text-blue-600" />
              <span>DAFTAR KEAHLIAN TEKNIS</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Keahlian Teknis &amp; <span className="text-blue-700">Penguasaan Alat Kerja</span>
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-1 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Dari Infrastruktur Jaringan Komputer, Pemrograman Web/Aplikasi, hingga Desain Multimedia
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini merinci daftar keahlian teknis dan perkakas kerja yang saya kuasai, mencakup konfigurasi jaringan fisik (MikroTik, Fiber Optic), pengembangan aplikasi modern (React, TypeScript, Kotlin), hingga produksi multimedia interaktif.
            </p>
          </div>

          {/* Right Column: Engine Badge */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            <div className={`flex items-center gap-2 font-mono text-xs text-slate-700 bg-white border border-slate-200 px-5 py-3 rounded-2xl shrink-0 shadow-xs card-3d-tilt transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <Zap className="w-4 h-4 text-emerald-600 animate-pulse" />
              <span className="font-bold text-[#0B1E3D]">KOMBINASI KEAHLIAN MULTI-DISIPLIN</span>
            </div>
          </div>
        </div>

        {/* Interactive View Filter Tabs */}
        <div className={`flex flex-wrap items-center gap-2 mb-8 transition-all ${
          isInView ? 'animate-reveal-up delay-200' : ''
        }`}>
          <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1.5 font-semibold">
            <Sliders className="w-3.5 h-3.5 text-blue-600" /> FILTER KATEGORI:
          </span>
          {[
            { id: 'all', label: 'Semua Bidang' },
            { id: 'network', label: 'Jaringan & Infrastruktur IT' },
            { id: 'ai', label: 'Kecerdasan Buatan & Software' },
            { id: 'creative', label: 'Media Digital & Komunikasi Publik' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                playTactileClick(1100);
                setActiveTab(tab.id as any);
              }}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer click-pop ${
                activeTab === tab.id
                  ? 'bg-[#0B1E3D] text-white shadow-xs scale-102'
                  : 'bg-white text-slate-600 hover:text-black border border-slate-200 hover:border-slate-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Dual-Beam Visual Circuit Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-10">
          
          {/* Network & Physical Infrastructure (Left Beam) */}
          {(activeTab === 'all' || activeTab === 'network') && (
            <div className={`${activeTab === 'network' ? 'lg:col-span-12' : 'lg:col-span-4'} bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-400 transition-all card-3d-tilt ${
              isInView ? 'animate-cascade delay-100' : ''
            }`}>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-700 flex items-center gap-1.5">
                    <Network className="w-4 h-4" /> KOMPETENSI // JARINGAN & HARDWARE
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold">
                    BNSP VERIFIED
                  </span>
                </div>

                <h3 className="text-xl font-heading font-extrabold text-[#0B1E3D] mb-1">
                  Infrastruktur Jaringan & Lapangan
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 font-sans">
                  Pengalaman riil terminasi fiber optik di ISP PT Sumatra Multimedia Solusi (PT SMS), pemeliharaan rak server, dan konfigurasi routing MikroTik.
                </p>

                <div className="space-y-3">
                  {networkSkills.map((sk, idx) => (
                    <div 
                      key={idx}
                      onClick={() => playTactileClick(1000 + idx * 50)}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-emerald-50/40 hover:border-emerald-300 transition-all cursor-pointer group/sk"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1.5">
                        <span className="group-hover/sk:text-emerald-700 transition-colors">{sk.name}</span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                          {sk.tag}
                        </span>
                      </div>

                      <div className="text-[11px] font-sans text-slate-600 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{sk.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>STANDAR OPERASI: NOC/FOC</span>
                <span className="text-emerald-700 font-bold">KKNI LEVEL II</span>
              </div>
            </div>
          )}

          {/* Titik Temu: AI x Production Code (Center Card) */}
          {(activeTab === 'all' || activeTab === 'ai') && (
            <div className={`${activeTab === 'ai' ? 'lg:col-span-12' : 'lg:col-span-4'} bg-[#0B1E3D] rounded-3xl p-6 sm:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group transition-all card-3d-tilt ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-blue-500" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-extrabold text-blue-400 flex items-center gap-1.5 tracking-wider">
                    <Cpu className="w-4 h-4 text-blue-400" /> KOMPETENSI // AI &amp; REKAYASA SOFTWARE
                  </span>
                  <span className="px-3 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-500 text-white shadow-xs">
                    FUSI UTAMA
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-white mb-1">
                  Sains Data & Rekayasa Software
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 font-sans">
                  Titik fusi menghasilkan model komputasi Machine Learning SINTA 3, Android Kotlin modern, dan ekstensi otomatisasi browser cerdas.
                </p>

                <div className="space-y-3">
                  {collisionSkills.map((sk, idx) => (
                    <div 
                      key={idx}
                      onClick={() => playTactileClick(1200 + idx * 60)}
                      className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 transition-all cursor-pointer group/sk shadow-sm"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-white group-hover/sk:text-blue-300 mb-1.5">
                        <span className="flex items-center gap-1.5">
                          <Code2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{sk.name}</span>
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                          {sk.badge}
                        </span>
                      </div>

                      <div className="text-[11px] font-sans text-slate-300 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-blue-400 shrink-0" />
                        <span>{sk.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-blue-400">
                <span className="flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> REKAYASA SISTEM
                </span>
                <span className="font-bold text-white">5 REPO GITHUB</span>
              </div>
            </div>
          )}

          {/* Jalur 02: Content & On-Camera Talent (Right Beam) */}
          {(activeTab === 'all' || activeTab === 'creative') && (
            <div className={`${activeTab === 'creative' ? 'lg:col-span-12' : 'lg:col-span-4'} bg-white rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200 shadow-sm relative overflow-hidden group hover:border-pink-400 transition-all card-3d-tilt ${
              isInView ? 'animate-cascade delay-300' : ''
            }`}>
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-pink-500" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-pink-700 flex items-center gap-1.5">
                    <Video className="w-4 h-4" /> KOMPETENSI // MEDIA &amp; KOMUNIKASI
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-pink-50 border border-pink-200 text-pink-700 font-bold">
                    PUBLIC MEDIA
                  </span>
                </div>

                <h3 className="text-xl font-heading font-extrabold text-[#0B1E3D] mb-1">
                  Produksi Kreatif & Komunikasi Publik
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 font-sans">
                  Keahlian membawakan narasi resmi di depan kamera, menyunting video liputan instansi BAPPEDA, dan penulisan naskah publikasi.
                </p>

                <div className="space-y-3">
                  {creativeSkills.map((sk, idx) => (
                    <div 
                      key={idx}
                      onClick={() => playTactileClick(1100 + idx * 50)}
                      className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-pink-50/40 hover:border-pink-300 transition-all cursor-pointer group/sk"
                    >
                      <div className="flex items-center justify-between text-xs font-bold text-slate-900 mb-1.5">
                        <span className="group-hover/sk:text-pink-700 transition-colors">{sk.name}</span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md bg-pink-100 text-pink-800 border border-pink-200">
                          {sk.tag}
                        </span>
                      </div>

                      <div className="text-[11px] font-sans text-slate-600 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-600 shrink-0" />
                        <span>{sk.level}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>STANDAR: BAPPEDA HUMAS</span>
                <span className="text-pink-700 font-bold">30+ VIDEO RESMI</span>
              </div>
            </div>
          )}

        </div>

        {/* Supporting Matrix: Languages, Soft Skills & Office Competencies */}
        <div className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm transition-all mb-8 ${
          isInView ? 'animate-cascade delay-400' : ''
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-slate-200 pb-3">
            <span className="text-xs font-mono text-slate-700 uppercase tracking-wider flex items-center gap-2 font-bold">
              <Languages className="w-4 h-4 text-blue-600" />
              BAHASA, ADMINISTRASI & KOMPETENSI INTERPERSONAL:
            </span>
            <span className="text-[10px] font-mono text-blue-600 font-bold">
              STANDAR SKPI TERAKREDITASI
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {softSkills.map((s, idx) => (
              <div 
                key={idx}
                onClick={() => playTactileClick(1300 + idx * 60)}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-blue-50/50 hover:border-blue-400 transition-all group cursor-pointer shadow-2xs card-3d-tilt"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-[#0B1E3D] font-extrabold">[{s.icon}]</span>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-1 font-sans">
                  {s.label}
                </div>
                <div className="text-[11px] text-slate-500 font-sans leading-tight">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Aplikasi & Tool yang Dikuasai */}
        <div
          id="running-marquee-tools"
          className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm overflow-hidden transition-all ${
            isInView ? 'animate-cascade delay-500' : ''
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 border-b border-slate-200 pb-4">
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
                <Cpu className="w-4 h-4" />
              </span>
              <div>
                <h3 className="text-sm sm:text-base font-heading font-extrabold text-[#0B1E3D] uppercase tracking-wide">
                  Aplikasi, Platform AI &amp; Software yang Saya Pakai
                </h3>
                <p className="text-xs text-slate-500 font-sans mt-1 leading-relaxed max-w-2xl">
                  Alat kerja harian: model AI untuk riset dan coding, sampai software desain, editing video, dan konfigurasi jaringan.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => { playTactileClick(1000); setIsPaused((v) => !v); }}
              aria-pressed={isPaused}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 font-mono text-[11px] font-semibold text-slate-700 self-start sm:self-auto transition-colors cursor-pointer"
            >
              {isPaused ? <Play className="w-3 h-3 text-emerald-600" /> : <Pause className="w-3 h-3 text-blue-600" />}
              <span>{isPaused ? 'Lanjutkan' : 'Jeda'}</span>
            </button>
          </div>

          {[
            { dir: 'animate-marquee', items: aiTools },
            { dir: 'animate-marquee-reverse', items: creativeTools },
          ].map((row, rowIdx) => (
            <div key={rowIdx} className={`relative w-full overflow-hidden ${rowIdx === 0 ? 'mb-4' : ''} mask-radial-fade`}>
              <div
                className={`${row.dir} flex items-center gap-3 py-1`}
                style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
              >
                {[...row.items, ...row.items].map((app, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => { playTactileClick(1200 + (idx % 8) * 40); setIsPaused((v) => !v); }}
                    title={`${app.name} — ${app.category}`}
                    className={`group flex items-center gap-3 px-4 py-2.5 rounded-2xl border shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer shrink-0 text-left ${app.bg}`}
                  >
                    <span className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs shrink-0">
                      <BrandLogo name={app.name} className="w-5 h-5" />
                    </span>
                    <span className="block">
                      <span className="flex items-center gap-1.5">
                        <span className="font-heading font-extrabold text-xs text-slate-900">{app.name}</span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-white/80 border border-black/10 font-bold text-slate-600">{app.badge}</span>
                      </span>
                      <span className="block text-[10px] font-sans text-slate-600 mt-0.5">{app.category}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}

          <p className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-sans">
            Klik kartu atau tombol jeda untuk menghentikan gerakan. Logo mengikuti identitas resmi tiap merek.
          </p>
        </div>

      </div>
    </section>
  );
};
