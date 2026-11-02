import React, { useState } from 'react';
import { Database, Network, ArrowLeftRight } from 'lucide-react';

export const FieldOperationsSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging && e.buttons !== 1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className="bg-neutral-50 rounded-3xl p-6 md:p-8 border border-neutral-200 shadow-xs">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <div className="text-xs font-mono text-neutral-500 uppercase tracking-wider mb-1 font-semibold">
            08 // OPERASI DATA LAPANGAN × INFRASTRUKTUR FISIK
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-heading text-neutral-950">
            Sinergi Data Integrity & Fiber Optic Engineering
          </h3>
        </div>
        <div className="text-xs font-sans text-neutral-700 bg-white px-4 py-2 rounded-full border border-neutral-200 flex items-center gap-2 shadow-2xs">
          <ArrowLeftRight className="w-3.5 h-3.5 text-neutral-900" /> Geser slider untuk membandingkan dua sisi kompetensi
        </div>
      </div>

      {/* Interactive Slider Container */}
      <div
        className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden cursor-ew-resize select-none border border-neutral-300 shadow-md"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
      >
        {/* RIGHT SIDE: PT SMS (Infrastruktur Fisik & Splicing FO) */}
        <div className="absolute inset-0 bg-[#0F172A] p-6 md:p-10 flex flex-col justify-between">
          <div className="flex items-center justify-end gap-2">
            <span className="px-3.5 py-1 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-mono font-bold rounded-full flex items-center gap-1.5">
              <Network className="w-3.5 h-3.5" /> SISI KANAN: PT SUMATRA MULTIMEDIA SOLUSI (FOC/NOC)
            </span>
          </div>

          <div className="max-w-md ml-auto text-right">
            <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
              Hardware, Splicing & Rack Server
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-4">
              Penyambungan core serat optik (*fusion splicing*) dengan nilai redaman presisi &lt;0.02 dB, kalibrasi daya OPM, pengukuran kabel optik, serta pemeliharaan switch/router di lemari rak server data center.
            </p>
            <div className="inline-flex flex-wrap justify-end gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-md bg-neutral-900 text-emerald-300 border border-neutral-700">Fusion Splicer</span>
              <span className="px-3 py-1 rounded-md bg-neutral-900 text-emerald-300 border border-neutral-700">OPM & OTDR</span>
              <span className="px-3 py-1 rounded-md bg-neutral-900 text-emerald-300 border border-neutral-700">Patch Panel / Rack</span>
            </div>
          </div>

          <div className="text-right text-[11px] font-mono text-neutral-400">
            Kesiapan Lapangan: Maintenance Fisik & Pengkabelan Data
          </div>
        </div>

        {/* LEFT SIDE: Teman Baik Lampung (Operasi Data & Enumerasi) */}
        <div
          className="absolute inset-y-0 left-0 bg-[#18181B] p-6 md:p-10 flex flex-col justify-between overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="w-[800px] h-full flex flex-col justify-between">
            <div className="flex items-center gap-2">
              <span className="px-3.5 py-1 bg-sky-500/20 border border-sky-400/40 text-sky-300 text-xs font-mono font-bold rounded-full flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5" /> SISI KIRI: TEMAN BAIK (DATA LAPANGAN)
              </span>
            </div>

            <div className="max-w-md">
              <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
                Mobile Enumeration & Audit Integritas
              </div>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-4">
                Survei door-to-door dan input data kependudukan penerima manfaat bantuan sosial berbasis aplikasi mobile terstruktur, validasi NIK/KK, serta eliminasi duplikasi data logistik.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-md bg-neutral-900 text-sky-300 border border-neutral-700">Mobile Data App</span>
                <span className="px-3 py-1 rounded-md bg-neutral-900 text-sky-300 border border-neutral-700">NIK & Database Audit</span>
                <span className="px-3 py-1 rounded-md bg-neutral-900 text-sky-300 border border-neutral-700">Logistics Tracking</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-neutral-400">
              Kesiapan Lapangan: Verifikasi Data Digital & Operasional
            </div>
          </div>
        </div>

        {/* DRAGGABLE DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-md"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-neutral-950 flex items-center justify-center shadow-lg font-bold border border-neutral-200">
            <ArrowLeftRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
