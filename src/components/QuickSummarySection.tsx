import React from 'react';
import { Network, Code2, Video, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

/**
 * Ringkasan 10 detik: tiga bidang kerja + bukti utama.
 * Tujuan: pengunjung paham isi portofolio tanpa harus membaca seluruh halaman.
 */
const AREAS = [
  {
    no: '01',
    icon: Network,
    title: 'Jaringan & Infrastruktur',
    lead: 'Memasang dan merawat jaringan internet ISP: penyambungan fiber optic, konfigurasi MikroTik, dan pengecekan kualitas sinyal.',
    proof: ['Splicing < 0.02 dB', 'BNSP KKNI II', 'PT SMS NOC/FOC'],
    accent: 'emerald',
    href: '#field-operations',
  },
  {
    no: '02',
    icon: Code2,
    title: 'Software & Data',
    lead: 'Membangun aplikasi web dan Android, menulis skrip Python, mengolah data untuk riset machine learning, dipercepat AI: Claude, ChatGPT, Gemini + Hermes Agent.',
    proof: ['26 repo publik', 'Riset SINTA 3 · 88,5%', 'AI: GPT · Claude · Gemini'],
    accent: 'blue',
    href: '#github-showcase',
  },
  {
    no: '03',
    icon: Video,
    title: 'Multimedia & Komunikasi',
    lead: 'Memproduksi konten video dan desain untuk instansi: liputan kedinasan, editing, hingga tampil di depan kamera.',
    proof: ['30+ konten publikasi', '3× Juara Expo', '4.500+ order 5★'],
    accent: 'violet',
    href: '#bappeda',
  },
] as const;

const ACCENT: Record<string, { text: string; border: string; bg: string; ring: string }> = {
  emerald: { text: 'text-emerald-700', border: 'border-emerald-200', bg: 'bg-emerald-50', ring: 'group-hover:border-emerald-300' },
  blue: { text: 'text-blue-700', border: 'border-blue-200', bg: 'bg-blue-50', ring: 'group-hover:border-blue-300' },
  violet: { text: 'text-violet-700', border: 'border-violet-200', bg: 'bg-violet-50', ring: 'group-hover:border-violet-300' },
};

export const QuickSummarySection: React.FC = () => {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      id="ringkasan"
      className="py-10 md:py-14 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] bg-white scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        {/* Judul: satu pertanyaan, satu jawaban */}
        <div className="max-w-2xl mb-5 md:mb-7">
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-500 mb-2">
            Ringkasan · 10 detik
          </p>
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight text-[#0B1E3D] leading-tight ${
              isInView ? 'animate-reveal-up' : ''
            }`}
          >
            Apa yang bisa saya kerjakan?
          </h2>
          <p className="text-sm text-slate-600 font-sans mt-2 leading-relaxed">
            Tiga bidang kerja, masing-masing dengan bukti yang bisa dicek sendiri di halaman ini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {AREAS.map((area, i) => {
            const Icon = area.icon;
            const a = ACCENT[area.accent];
            return (
              <a
                key={area.no}
                href={area.href}
                className={`group flex flex-col justify-between p-4 sm:p-5 rounded-3xl bg-white border border-slate-200 ${a.ring} hover:shadow-[0_12px_32px_rgba(11,30,61,0.08)] hover:-translate-y-1 transition-all duration-300 ${
                  isInView ? 'animate-cascade' : ''
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-10 h-10 rounded-2xl ${a.bg} ${a.border} border flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${a.text}`} strokeWidth={2} />
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-bold">{area.no}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#0B1E3D] mb-2">
                    {area.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed">
                    {area.lead}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100">
                  <ul className="flex flex-wrap gap-1.5 mb-4">
                    {area.proof.map((p) => (
                      <li key={p} className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-600">
                        <CheckCircle2 className={`w-2.5 h-2.5 shrink-0 ${a.text}`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className={`inline-flex items-center gap-1 text-[11px] font-bold ${a.text}`}>
                    Lihat buktinya
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
