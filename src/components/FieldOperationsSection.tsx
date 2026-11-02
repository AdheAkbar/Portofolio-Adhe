import React from 'react';
import confetti from 'canvas-confetti';
import { FieldOperationsSlider } from './FieldOperationsSlider';
import { useInView } from '../hooks/useInView';
import { playCelebrationChime } from '../utils/soundEffects';
import { 
  Network, 
  Database, 
  Workflow,
  Hash,
  ExternalLink
} from 'lucide-react';

export const FieldOperationsSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  const triggerFieldConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#10B981', '#0284C7', '#F59E0B', '#6366F1']
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="field-operations" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#F8FAFC] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Operasi Lapangan // Teknisi Jaringan PT Sumatra Multimedia Solusi (PT SMS) &amp; Surveyor Teman Baik
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">Penyambungan Fiber &amp; Verifikasi Data</span>
          </div>

          {/* Docked Multiplayer Collaborator (Figma Real-Time Style - Zero Overlap) */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Splicing FO &amp; audit lapangan
            </span>
          </div>
        </div>

        {/* Section Header with Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-800 mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <Workflow className="w-3.5 h-3.5 text-blue-600" />
              <span>PENGALAMAN KERJA LAPANGAN &amp; TEKNISI</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Teknisi Jaringan &amp; <span className="text-blue-700">Survei Lapangan</span>
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-1 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Teknisi Fiber Optik di PT Sinergi Media Sistem &amp; Survei Data di Teman Baik Lampung
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini menampilkan pengalaman kerja operasional saya di dua tempat: sebagai Teknisi Jaringan Fiber Optik (NOC/FOC) di PT Sinergi Media Sistem dan Surveyor / Enumerator Data Lapangan di Teman Baik Lampung. Menunjukkan ketelitian fisik dan kepatuhan standar kerja tinggi.
            </p>
          </div>

          {/* Right Column: Quick Dual Badge */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            {/* Quick Dual Badge */}
            <div className={`flex flex-col sm:flex-row gap-2 shrink-0 transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="bg-white border border-slate-200 px-3.5 py-2 rounded-2xl font-mono text-xs text-slate-800 flex items-center gap-2 shadow-xs card-3d-tilt">
                <Database className="w-4 h-4 text-sky-600" />
                <span>Teman Baik (Okt 2023 – Jun 2024)</span>
              </div>
              <a 
                href="https://sms.net.id/" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white border border-slate-200 hover:border-emerald-300 px-3.5 py-2 rounded-2xl font-mono text-xs text-slate-800 hover:text-emerald-700 flex items-center gap-2 shadow-xs card-3d-tilt transition-colors"
              >
                <Network className="w-4 h-4 text-emerald-600" />
                <span>PT Sumatra Multimedia Solusi (sms.net.id)</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className={`p-5 rounded-2xl bg-white border border-slate-200 shadow-xs card-3d-tilt transition-all ${
            isInView ? 'animate-cascade delay-100' : ''
          }`}>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E3D]">
              100%
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-sans">
              Akurasi NIK & Berkas
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-0.5">
              Validasi Lapangan
            </div>
          </div>

          <div className={`p-5 rounded-2xl bg-white border border-slate-200 shadow-xs card-3d-tilt transition-all ${
            isInView ? 'animate-cascade delay-200' : ''
          }`}>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-600 flex items-center gap-1.5">
              <span>&lt; 0.02 dB</span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping shrink-0" />
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-sans">
              Redaman Fusion Splicing
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-0.5">
              Standar Presisi Serat Optik
            </div>
          </div>

          <div className={`p-5 rounded-2xl bg-white border border-slate-200 shadow-xs card-3d-tilt transition-all ${
            isInView ? 'animate-cascade delay-300' : ''
          }`}>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E3D]">
              0 Duplikasi
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-sans">
              Integritas Data Distribusi
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-0.5">
              Penerima Bantuan
            </div>
          </div>

          <div className={`p-5 rounded-2xl bg-white border border-slate-200 shadow-xs card-3d-tilt transition-all ${
            isInView ? 'animate-cascade delay-400' : ''
          }`}>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-amber-600">
              Tuntas &lt; 24 Jam
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-sans">
              Troubleshooting Perangkat
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-0.5">
              NOC / FOC & Switch Rack
            </div>
          </div>
        </div>

        {/* Embedded Interactive Split Slider */}
        <div className={`mb-10 transition-all ${
          isInView ? 'animate-cascade delay-200' : ''
        }`}>
          <FieldOperationsSlider />
        </div>

        {/* Operational Context Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className={`p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all card-3d-tilt ${
            isInView ? 'animate-cascade delay-250' : ''
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sky-600 shadow-2xs">
                <Database className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-heading font-extrabold text-[#0B1E3D]">
                Teman Baik: Operasi Lapangan & Enumerasi Mobile
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-5">
              Bertanggung jawab melakukan pendataan langsung ke masyarakat penerima bantuan. Menginput data terverifikasi via aplikasi digital khusus, memastikan validitas NIK/KK, dan mencegah kebocoran data bantuan ganda melalui rekonsiliasi berkas fisik dengan database pusat.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="px-3 py-1 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs">Survei Door-to-Door</span>
              <span className="px-3 py-1 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs">Validasi NIK Terpusat</span>
              <span className="px-3 py-1 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs">Logistik Bantuan</span>
            </div>
          </div>

          <div className={`p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all card-3d-tilt ${
            isInView ? 'animate-cascade delay-350' : ''
          }`}>
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-emerald-600 shadow-2xs">
                <Network className="w-5 h-5" />
              </div>
              <h4 className="text-base sm:text-lg font-heading font-extrabold text-[#0B1E3D] flex items-center justify-between">
                <span>PT Sumatra Multimedia Solusi: IT Support &amp; Jaringan</span>
                <a href="https://sms.net.id/" target="_blank" rel="noreferrer" className="text-xs font-mono text-blue-600 hover:underline flex items-center gap-1 font-normal">
                  <span>sms.net.id</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </h4>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-5">
              Mengeksekusi penyambungan inti kabel serat optik (fusion splicing), mengukur redaman menggunakan Optical Power Meter (OPM), crimping kabel UTP RJ45 Cat6, merapikan kabel jumper di rak server patch panel, serta troubleshooting konektivitas jaringan pelanggan.
            </p>
            <div className="flex flex-wrap gap-2 font-mono text-[11px]">
              <span className="px-3 py-1 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs">Fusion Splicing &lt; 0.02 dB</span>
              <span className="px-3 py-1 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs">Kalibrasi OPM</span>
              <span className="px-3 py-1 rounded-xl bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs">Manajemen Rak Server</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
