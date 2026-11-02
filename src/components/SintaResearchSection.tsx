import React from 'react';
import { SentimentSandbox } from './SentimentSandbox';
import { useInView } from '../hooks/useInView';
import { 
  BookOpen, 
  Award, 
  ArrowUpRight, 
  FlaskConical,
  FileText,
  ExternalLink,
  CheckCircle2,
  Database,
  Cpu
} from 'lucide-react';
import { playTactileClick } from '../utils/soundEffects';

export const SintaResearchSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  return (
    <section 
      ref={sectionRef}
      id="sinta-3-research" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#FFFFFF] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 relative">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-3 shadow-2xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <FlaskConical className="w-3.5 h-3.5 text-blue-600" />
              <span>PUBLIKASI RISET ILMIAH NASIONAL</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Penelitian Machine Learning &amp; <span className="text-blue-700">Jurnal SINTA 3</span>
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-2 mb-3 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Komparasi Algoritma Naive Bayes dan K-Nearest Neighbor (KNN) pada Data Ulasan Pengguna
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Publikasi ilmiah terakreditasi nasional peringkat SINTA 3 pada Jurnal BITS (Building of Informatics, Technology and Science). Meneliti komparasi performa klasifikasi sentimen pada 18.869 ulasan dompet digital di Google Play Store dengan pengujian ekstraksi TF-IDF.
            </p>
          </div>

          {/* Academic Honors Badges */}
          <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-3 shrink-0">
            <div className="px-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono font-bold text-slate-800">SINTA 3 ACCREDITED</span>
              <span className="text-xs text-slate-400">|</span>
              <span className="text-xs font-sans text-slate-600">KEMENDIKBUDRISTEK</span>
            </div>

            <div className="px-4 py-2.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 shadow-2xs flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="text-xs font-mono font-bold text-amber-900">JUARA 2 MACHINE LEARNING</span>
              <span className="text-xs text-amber-400">|</span>
              <span className="text-xs font-sans text-amber-800">Expo 2025</span>
            </div>
          </div>
        </div>

        {/* Official Paper Feature Card */}
        <div className={`bg-white rounded-3xl p-6 sm:p-8 mb-10 border border-slate-200 shadow-sm transition-all ${
          isInView ? 'animate-cascade delay-150' : ''
        }`}>
          {/* Paper Meta Header */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-slate-100">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 font-mono text-[11px] font-bold">
                JURNAL BITS · SINTA 3
              </span>
              <span className="text-slate-500 text-xs font-mono">Volume 7 No 4 · Maret 2026</span>
              <span className="text-slate-300">·</span>
              <span className="text-slate-500 text-xs font-mono">e-ISSN 2684-8910</span>
            </div>

            <span className="text-xs font-mono text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Peer-Reviewed &amp; Published
            </span>
          </div>

          {/* Paper Title & Authors */}
          <div className="mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0 text-blue-700 mt-1">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-heading font-extrabold text-[#0B1E3D] leading-snug">
                  "Komparasi Algoritma Naive Bayes dan K-Nearest Neighbor untuk Analisis Sentimen Pengguna Dompet Digital pada Google Play Store"
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-600 font-sans">
                  <span>
                    Penulis: <strong className="text-[#0B1E3D] font-bold">M Adhe Akbar*</strong>, Fenty Ariany
                  </span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span className="text-slate-500">
                    Program Studi Informatika, Universitas Teknokrat Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Quantitative Research Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-7">
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-200 shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-emerald-800">Naive Bayes</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-200/60 text-emerald-900 font-bold">
                  UNGGUL
                </span>
              </div>
              <div className="text-3xl font-heading font-extrabold text-emerald-700">88.5%</div>
              <div className="text-[11px] font-mono text-emerald-700/90 mt-1 font-medium">
                AUC: 0.9237 · Runtime: 0.010s
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-slate-700">K-Nearest Neighbor</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-200 text-slate-700 font-bold">
                  k = 27
                </span>
              </div>
              <div className="text-3xl font-heading font-extrabold text-slate-900">87.4%</div>
              <div className="text-[11px] font-mono text-slate-500 mt-1">
                Manhattan Distance · Fold: 10
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-slate-700">Dataset Ulasan</span>
                <Database className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <div className="text-3xl font-heading font-extrabold text-slate-900">18.869</div>
              <div className="text-[11px] font-sans text-slate-500 mt-1">
                DANA, OVO, LinkAja &amp; DOKU
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-slate-700">Feature Extraction</span>
                <Cpu className="w-3.5 h-3.5 text-purple-600" />
              </div>
              <div className="text-xl sm:text-2xl font-heading font-bold text-slate-900">TF-IDF</div>
              <div className="text-[11px] font-mono text-slate-500 mt-1">
                5.000 Unigram Matrix
              </div>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="pt-5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
              <span className="font-semibold text-slate-700">Tautan Resmi Jurnal:</span>
              <span className="truncate max-w-[280px] sm:max-w-none">10.47065/bits.v7i4.9285</span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href="https://ejurnal.seminar-id.com/index.php/bits/article/view/9285/4508"
                target="_blank"
                rel="noreferrer"
                onClick={() => playTactileClick(1200)}
                className="px-5 py-3 rounded-2xl bg-[#0B1E3D] hover:bg-blue-700 text-white text-xs font-sans font-bold flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Buka Dokumen PDF Penelitian (SINTA 3)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://doi.org/10.47065/bits.v7i4.9285"
                target="_blank"
                rel="noreferrer"
                onClick={() => playTactileClick(1100)}
                className="px-4 py-3 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-700 text-slate-700 text-xs font-sans font-semibold flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer"
              >
                <span>Halaman Publikasi DOI</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Sentiment Sandbox */}
        <div className={`transition-all ${
          isInView ? 'animate-cascade delay-250' : ''
        }`}>
          <SentimentSandbox />
        </div>

      </div>
    </section>
  );
};
