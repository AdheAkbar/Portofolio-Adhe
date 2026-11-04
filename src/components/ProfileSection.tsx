import React from 'react';
import { ArrowDownRight, BadgeCheck, BriefcaseBusiness, Compass, GraduationCap, Ruler, Scale } from 'lucide-react';

interface ProfileSectionProps {
  onOpenCvModal: () => void;
}

const WORKFLOW = [
  { title: 'Pahami alur', detail: 'Cari kebutuhan dan sumber masalah.' },
  { title: 'Susun solusi', detail: 'Bangun, rapikan, atau dokumentasikan.' },
  { title: 'Periksa hasil', detail: 'Pastikan solusi berjalan dan mudah dipahami.' },
];

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onOpenCvModal }) => (
  <section
    id="profil"
    className="scroll-mt-20 md:scroll-mt-24 border-b border-black/[0.06] bg-[#F8FAFC] px-4 py-12 md:px-8 md:py-16 xl:pr-28"
  >
    <div className="mx-auto max-w-7xl">
      <div className="mb-7 flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 text-xs text-slate-600 shadow-sm">
        <div className="flex items-center gap-2">
          <Compass className="h-4 w-4 text-blue-700" />
          <span className="font-semibold text-slate-800">Profil // Identitas & cara kerja</span>
        </div>
        <span className="hidden font-mono text-slate-500 sm:inline">M. ADHE AKBAR · S.Kom.</span>
      </div>

      <div className="grid items-start gap-6 md:grid-cols-2 md:gap-5 lg:grid-cols-12 lg:gap-8">
        <figure className="mx-auto w-full max-w-[250px] md:col-span-1 md:mx-0 md:max-w-none lg:col-span-3">
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-sm">
            <img
              src="/assets/adhe_formal_red.jpg"
              alt="Foto profil profesional M. Adhe Akbar"
              className="aspect-[3/4] w-full rounded-[1.25rem] object-cover object-[center_18%]"
              width="1024"
              height="1536"
              loading="lazy"
            />
            <figcaption className="flex items-center justify-between gap-2 px-3 py-3">
              <span className="text-sm font-bold text-slate-900">M. Adhe Akbar, S.Kom.</span>
              <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-700" aria-label="Profil" />
            </figcaption>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="flex min-h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
              <Ruler className="h-4 w-4 shrink-0 text-blue-700" />
              <span><span className="block text-[10px] text-slate-500">Tinggi</span><strong className="text-sm text-slate-900">182 cm</strong></span>
            </div>
            <div className="flex min-h-12 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
              <Scale className="h-4 w-4 shrink-0 text-blue-700" />
              <span><span className="block text-[10px] text-slate-500">Berat</span><strong className="text-sm text-slate-900">78 kg</strong></span>
            </div>
          </div>
        </figure>

        <div className="md:col-span-1 lg:col-span-5">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">
            <GraduationCap className="h-4 w-4" /> Informatika · Cum Laude
          </p>
          <h2 className="max-w-xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#0B1E3D] sm:text-4xl">
            Teknologi, operasi, riset &amp; layanan.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
            Saya mengembangkan aplikasi web dan Android (26 repositori GitHub), mendukung operasional IT dan jaringan ISP, serta membakukan SOP dan menyusun notulensi rapat di BAPPEDA.
          </p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-slate-700 sm:text-base">
            Pengalaman lain mencakup survei dan validasi data lapangan, riset machine learning SINTA 3, produksi sekitar 30 konten publikasi, serta layanan 4.500+ pesanan digital dengan rating bintang lima.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-900">
              <BriefcaseBusiness className="h-4 w-4 text-emerald-700" />
              Cara saya bekerja
            </div>
            <ol className="space-y-3">
              {WORKFLOW.map((step, index) => (
                <li key={step.title} className="flex items-start gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 font-mono text-xs font-bold text-slate-700">
                    {index + 1}
                  </span>
                  <span>
                    <strong className="block text-sm text-slate-900">{step.title}</strong>
                    <span className="text-xs leading-5 text-slate-600">{step.detail}</span>
                  </span>
                  {index < WORKFLOW.length - 1 && <ArrowDownRight className="ml-auto mt-1 hidden h-4 w-4 text-slate-400 sm:block" />}
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-900">
              <GraduationCap className="h-4 w-4" />
              S1 Informatika · IPK 3,59/4,00
            </div>
            <button
              type="button"
              onClick={onOpenCvModal}
              className="min-h-11 rounded-xl bg-[#0B1E3D] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
            >
              Buka CV lengkap
            </button>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-[280px] md:col-span-2 md:mx-0 md:max-w-none lg:col-span-4">
          <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-2 shadow-sm">
            <img
              src="/assets/adhe_wisuda_full.jpg"
              alt="M. Adhe Akbar saat wisuda, mengenakan selempang nama dan memegang map ijazah"
              className="aspect-[3/4] w-full rounded-[1.25rem] object-cover object-[center_38%] brightness-110 contrast-[1.03]"
              width="1147"
              height="1800"
              loading="lazy"
            />
            <figcaption className="px-3 py-3">
              <span className="block text-sm font-bold text-slate-900">Pendidikan yang dituntaskan dengan praktik</span>
              <span className="mt-1 block text-xs leading-5 text-slate-600">S1 Informatika · Universitas Teknokrat Indonesia</span>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  </section>
);
