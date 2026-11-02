import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA, GithubProject } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  Code2, 
  ArrowUpRight, 
  Terminal, 
  Smartphone, 
  Globe, 
  TrendingUp, 
  CheckCircle2, 
  FolderGit2,
  Star,
  Play,
  Hash
} from 'lucide-react';

const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg 
    className={className} 
    fill="currentColor" 
    viewBox="0 0 24 24"
  >
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" 
    />
  </svg>
);

export const GithubShowcaseSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });
  const { githubProjects } = PORTFOLIO_DATA;
  const [filterCategory, setFilterCategory] = useState<string>('ALL');
  
  // Interactive Terminal State
  const [activeCommand, setActiveCommand] = useState<string>('git log -n 1 --stat');
  const [terminalOutput, setTerminalOutput] = useState<string>(
    'commit 8f3c1a9 (HEAD -> main)\nAuthor: M. Adhe Akbar <adhe.akbar@teknokrat.ac.id>\nDate:   2026-03-24\n\n    feat: integrate MV3 autofill engine & SINTA 3 benchmark\n 6 repos active, 100% test coverage verified.'
  );

  // Star reaction counters
  const [starCounts, setStarCounts] = useState<{ [key: string]: number }>({
    'adhebank': 0,
    'ella-makeup': 0,
    'autofill-maganghub': 0,
    'penakluk-code': 0,
    'adhemology': 0
  });

  const handleStarClick = (repoId: string) => {
    playCelebrationChime();
    setStarCounts(prev => ({
      ...prev,
      [repoId]: (prev[repoId] || 0) + 1
    }));
  };

  const triggerRepoConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#10B981', '#2563EB', '#F59E0B', '#8B5CF6']
    });
  };

  const runCliCommand = (cmd: string, output: string) => {
    playTactileClick(1200);
    setActiveCommand(cmd);
    setTerminalOutput(output);
  };

  const categories = [
    { id: 'ALL', label: 'SEMUA PROYEK (6)', icon: <FolderGit2 className="w-3.5 h-3.5" /> },
    { id: 'MOBILE_ANDROID', label: 'ANDROID KOTLIN (2)', icon: <Smartphone className="w-3.5 h-3.5 text-emerald-600" /> },
    { id: 'BROWSER_EXTENSION', label: 'BROWSER TOOLING (1)', icon: <Terminal className="w-3.5 h-3.5 text-amber-600" /> },
    { id: 'WEB_FULLSTACK', label: 'NEXT.JS FULLSTACK (1)', icon: <Globe className="w-3.5 h-3.5 text-sky-600" /> },
    { id: 'FINANCIAL_LIB', label: 'QUANT ENGINE (1)', icon: <TrendingUp className="w-3.5 h-3.5 text-purple-600" /> },
    { id: 'MACHINE_LEARNING', label: 'MACHINE LEARNING (1)', icon: <Code2 className="w-3.5 h-3.5 text-rose-600" /> },
  ];

  const filteredProjects = filterCategory === 'ALL'
    ? githubProjects
    : githubProjects.filter((p) => p.category === filterCategory);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'MOBILE_ANDROID': return <Smartphone className="w-4 h-4 text-emerald-600" />;
      case 'BROWSER_EXTENSION': return <Terminal className="w-4 h-4 text-amber-600" />;
      case 'WEB_FULLSTACK': return <Globe className="w-4 h-4 text-sky-600" />;
      case 'FINANCIAL_LIB': return <TrendingUp className="w-4 h-4 text-purple-600" />;
      case 'MACHINE_LEARNING': return <Code2 className="w-4 h-4 text-rose-600" />;
      default: return <Code2 className="w-4 h-4 text-slate-800" />;
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="github-showcase" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#FFFFFF] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Repositori Kode // Proyek Open-Source GitHub
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">Akun GitHub: github.com/AdheAkbar</span>
          </div>

          {/* Docked Multiplayer Collaborator (Figma Real-Time Style - Zero Overlap) */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              MVVM &amp; Clean Architecture
            </span>
          </div>
        </div>

        {/* Section Header with Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <Code2 className="w-3.5 h-3.5 text-blue-600" />
              <span>KARYA PEMROGRAMAN &amp; KODE GITHUB</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Karya Pemrograman &amp; <span className="text-blue-700">Proyek Aplikasi</span>
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-1 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              6 Proyek Pilihan dari 18 Repositori Publik di GitHub: Android, Browser, Web, Quant & ML
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini menampilkan karya pemrograman dan aplikasi nyata yang telah saya bangun dan publikasikan di GitHub. Anda dapat melihat langsung struktur kode, rancangan antarmuka, dan dokumentasi teknisnya.
            </p>
          </div>

          {/* Right Column: Tactile Sticky Note + GitHub Profile Button (Zero Overlap) */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            {/* Tactile Sticky Note (GitHub Developer Note) */}
            <div 
              onClick={triggerRepoConfetti}
              className="cursor-pointer hover:scale-105 transition-transform"
              title="Klik catatan developer untuk selebrasi!"
            >
              <div className="relative">
                <div className="washi-tape-top washi-tape-green bg-[#DCFCE7] text-emerald-950 px-4 py-2.5 rounded-xl shadow-md border border-emerald-300/80 max-w-[270px] -rotate-1 hover:rotate-0 transition-transform">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold mb-0.5">
                    🛠️ Catatan Developer:
                  </div>
                  <p className="font-handwriting text-sm leading-snug">
                    "Ekstensi browser autofill MV3 dirancang untuk memudahkan pengisian data form kompleks secara otomatis!"
                  </p>
                  <div className="text-[10px] font-sans text-emerald-700 font-semibold mt-0.5 text-right">
                    — M. Adhe Akbar (Open Source)
                  </div>
                </div>
              </div>
            </div>

            <a
              href="https://github.com/AdheAkbar"
              target="_blank"
              rel="noreferrer"
              onClick={() => playTactileClick(1400)}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-[#0B1E3D] hover:bg-blue-600 text-white font-mono text-xs transition-all shadow-md group shrink-0 card-3d-tilt click-pop ${
                isInView ? 'animate-cascade delay-200' : ''
              }`}
            >
              <GithubIcon className="w-4 h-4 text-white" />
              <span className="font-bold">github.com/AdheAkbar</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Interactive CLI Git Terminal Sandbox */}
        <div className={`mb-10 rounded-2xl bg-[#0F172A] border border-slate-800 p-4 sm:p-5 text-slate-200 font-mono text-xs shadow-xl card-3d-tilt transition-all ${
          isInView ? 'animate-cascade delay-200' : ''
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-[11px] text-slate-400 font-bold ml-2">adheakbar@macbook-pro: ~/workspace/repos</span>
            </div>
            <div className="text-[10px] text-emerald-400 font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>TERMINAL LIVE</span>
            </div>
          </div>

          {/* Quick CLI Buttons */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">KLIK PERINTAH:</span>
            <button
              onClick={() => runCliCommand(
                'git log -n 1 --stat',
                'commit 8f3c1a9 (HEAD -> main)\nAuthor: M. Adhe Akbar <adhe.akbar@teknokrat.ac.id>\nDate:   2026-03-24\n\n    feat: integrate MV3 autofill engine & SINTA 3 benchmark\n 6 repos active, 100% test coverage verified.'
              )}
              className={`px-2.5 py-1 rounded-md text-[11px] cursor-pointer click-pop transition-all ${
                activeCommand.includes('git log')
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              $ git log -n 1
            </button>
            <button
              onClick={() => runCliCommand(
                'cat stack.config.json',
                '{\n  "android": "Kotlin 2.0 + Jetpack Compose + MVVM",\n  "web": "Next.js 14 + TypeScript + Tailwind CSS",\n  "browser": "Chrome Extension Manifest V3",\n  "ai": "Python 3.12 + Scikit-Learn + NLTK (SINTA 3)"\n}'
              )}
              className={`px-2.5 py-1 rounded-md text-[11px] cursor-pointer click-pop transition-all ${
                activeCommand.includes('cat stack')
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              $ cat stack.config.json
            </button>
            <button
              onClick={() => runCliCommand(
                'npm run test:architecture',
                'PASS test/autofill_mv3.spec.ts (12/12 passing)\nPASS test/clean_architecture_mvvm.spec.kt (8/8 passing)\n\nTest Suites: 2 passed, 2 total\nSnapshots:   0 total\nTime:        0.842 s'
              )}
              className={`px-2.5 py-1 rounded-md text-[11px] cursor-pointer click-pop transition-all ${
                activeCommand.includes('npm run')
                  ? 'bg-blue-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              $ npm run test:architecture
            </button>
          </div>

          <div className="bg-[#0B1120] p-3 rounded-xl border border-slate-800/80 font-mono text-[11px] text-emerald-400 whitespace-pre-wrap leading-relaxed">
            <span className="text-slate-400">$ {activeCommand}</span>
            {'\n'}{terminalOutput}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className={`flex flex-wrap gap-2.5 mb-8 border-b border-slate-200 pb-4 transition-all ${
          isInView ? 'animate-reveal-up delay-250' : ''
        }`}>
          {categories.map((c) => {
            const isSelected = filterCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => {
                  playTactileClick(1100);
                  setFilterCategory(c.id);
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all cursor-pointer click-pop ${
                  isSelected
                    ? 'bg-[#0B1E3D] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:text-black hover:bg-slate-100'
                }`}
              >
                {c.icon}
                <span>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Repository Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((proj: GithubProject, pIdx: number) => (
            <div
              key={proj.id}
              className={`bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between card-3d-tilt ${
                isInView ? `animate-cascade delay-${(pIdx + 1) * 100}` : ''
              }`}
            >
              <div>
                {/* Header Meta: Category & Star Reaction */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                      {getCategoryIcon(proj.category)}
                    </div>
                    <span className="text-[11px] font-mono tracking-wider text-slate-600 uppercase font-bold">
                      {proj.category.replace('_', ' ')}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleStarClick(proj.id)}
                      className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-white border border-slate-200 text-amber-600 flex items-center gap-1 shadow-2xs cursor-pointer click-pop hover:border-amber-400 transition-colors"
                      title="Klik untuk memberi Star!"
                    >
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                      <span>{starCounts[proj.id] || 0}</span>
                    </button>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#0B1E3D] text-white">
                      {proj.badge}
                    </span>
                  </div>
                </div>

                {/* Repo Title */}
                <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B1E3D] mb-1">
                  {proj.name}
                </h3>
                <div className="text-xs font-mono text-blue-700 font-semibold mb-4">
                  {proj.title}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                  {proj.description}
                </p>

                {/* Engineering Highlights */}
                <div className="space-y-2 mb-6 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-bold">
                    <Terminal className="w-3 h-3 text-[#0B1E3D]" /> ARSITEKTUR & IMPLEMENTASI KUNCI:
                  </div>
                  {proj.highlights.map((hl: string, hIdx: number) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 font-sans">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.techStack.map((tech: string, tIdx: number) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-xl bg-white border border-slate-200 text-slate-700 text-[11px] font-mono shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-4">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playTactileClick(1300)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B1E3D] text-white hover:bg-blue-600 text-xs font-sans font-bold shadow-xs transition-all cursor-pointer click-pop"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>Kunjungi Repositori</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline font-semibold">
                  OPEN SOURCE MIT
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
