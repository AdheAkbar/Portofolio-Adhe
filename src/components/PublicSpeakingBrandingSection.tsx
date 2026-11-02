import React from 'react';
import confetti from 'canvas-confetti';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  Sparkles, 
  Crown, 
  Camera, 
  Award, 
  Mic2, 
  Hash,
  Image as ImageIcon,
  UploadCloud,
  CheckCircle2
} from 'lucide-react';

export const PublicSpeakingBrandingSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });

  const activities = [
    {
      code: '01',
      title: 'Finalis Brand Ambassador Jaya Bakery 2023',
      rank: 'FINALIS DUTA MEREK',
      rankBadge: 'text-amber-800 border-amber-300 bg-amber-100/90',
      organizer: 'PT Jaya Bakery Indonesia',
      period: 'Mei – Juni 2023',
      icon: <Crown className="w-5 h-5 text-amber-600" />,
      desc: 'Terpilih sebagai Finalis Brand Ambassador Jaya Bakery 2023. Terlibat aktif dalam pembuatan materi promosi kreatif, interaksi publik dengan konsumen, serta perwakilan citra positif brand.',
      tags: ['Brand Representation', 'Promosi Kreatif', 'Interaksi Publik', 'Media Sosial']
    },
    {
      code: '02',
      title: 'Finalis Muli Mekhanai Pesawaran 2023',
      rank: 'FINALIS MEKHANAI PESAWARAN',
      rankBadge: 'text-pink-800 border-pink-300 bg-pink-100/90',
      organizer: 'Dinas Pariwisata & Ekonomi Kreatif Kab. Pesawaran',
      period: 'Tahun 2023',
      icon: <Mic2 className="w-5 h-5 text-pink-600" />,
      desc: 'Mewakili pemuda dalam ajang pemilihan duta daerah Kabupaten Pesawaran 2023. Mengikuti pembekalan wawasan kebudayaan lokal, advokasi potensi pariwisata daerah, serta representasi kegiatan resmi.',
      tags: ['Duta Pariwisata', 'Budaya Daerah', 'Komunikasi Publik', 'Representasi Daerah']
    },
    {
      code: '03',
      title: 'Model Peragaan Busana (3 Brand Lokal)',
      rank: 'MODEL PERAGAAN BUSANA',
      rankBadge: 'text-emerald-800 border-emerald-300 bg-emerald-100/90',
      organizer: 'Teknokrat Entrepreneur Showcase',
      period: 'Agustus 2023',
      icon: <Camera className="w-5 h-5 text-emerald-600" />,
      desc: 'Memperagakan koleksi pakaian komersial dari 3 brand busana lokal pada ajang peragaan busana festival kewirausahaan serta pemotretan katalog promosi produk.',
      tags: ['Peragaan Busana', 'Foto Katalog', 'Kewirausahaan Kreatif']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="branding" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#FFFFFF] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Komunikasi Publik // Duta Daerah &amp; Representasi Brand
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">Mekhanai Pesawaran &amp; Brand Ambassador</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-pink-50 text-pink-700 font-bold text-[11px] border border-pink-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
              Finalis Duta Resmi 2023
            </span>
          </div>
        </div>

        {/* Section Header with Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-50 border border-pink-200 text-xs font-mono text-pink-900 font-bold mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-pink-600" />
              <span>DUTA RESMI &amp; REPRESENTASI BRAND</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              <span className="block sm:inline">Duta Daerah,</span>{' '}
              <span className="text-blue-700">Brand Ambassador &amp; Model</span>
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-1 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Finalis Muli Mekhanai Pesawaran 2023 &amp; Finalis Brand Ambassador Jaya Bakery
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini menampilkan rekam jejak saya dalam bidang komunikasi publik, representasi brand, dan peragaan busana komersial. Berpengalaman sebagai Finalis Muli Mekhanai Pesawaran 2023, Finalis Brand Ambassador Jaya Bakery 2023, dan model peragaan busana lokal.
            </p>
          </div>

          {/* Right Column: Clean Meta Badge (No Fake Notes) */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            <div className={`bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl text-left lg:text-right font-mono text-xs shrink-0 shadow-sm card-3d-tilt transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="flex items-center gap-1.5 text-[#0B1E3D] font-extrabold mb-1 justify-start lg:justify-end text-xs">
                <Award className="w-4 h-4 text-pink-600" /> DUTA DAERAH &amp; BRAND
              </div>
              <div className="text-slate-500 text-[11px] font-semibold">
                Kabupaten Pesawaran &amp; Jaya Bakery (2023)
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Lookbook 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {activities.map((act) => (
            <div
              key={act.code}
              onClick={() => playTactileClick(1150)}
              className="bg-[#F8FAFC] rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer card-3d-tilt"
            >
              <div>
                {/* Meta Top Line */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-2xs">
                    {act.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold border shadow-xs ${act.rankBadge}`}>
                    {act.rank}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-slate-500 mb-1.5 flex items-center justify-between font-semibold">
                  <span>{act.organizer}</span>
                  <span className="text-slate-400">{act.period}</span>
                </div>

                <h3 className="text-lg font-heading font-extrabold text-[#0B1E3D] mb-2">
                  {act.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                  {act.desc}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 font-mono text-[10px]">
                {act.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-white text-slate-700 border border-slate-200 shadow-2xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Template Slot Dokumentasi Foto Aktivitas (Siap Digunakan) */}
        <div className="mt-10 pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-mono text-slate-700 font-bold mb-1.5">
                <Camera className="w-3.5 h-3.5 text-pink-600" />
                <span>TEMPLATE SLOT DOKUMENTASI FOTO AKTIVITAS</span>
              </div>
              <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#0B1E3D]">
                Area Template Foto Kegiatan &amp; Panggung
              </h3>
              <p className="text-xs text-slate-500 font-sans mt-0.5">
                Template siap pakai untuk memasukkan foto dokumentasi aktivitas resmi Anda. Cukup letakkan berkas gambar pada direktori aset.
              </p>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl bg-white border border-slate-200 font-mono text-xs text-slate-600 shadow-2xs self-start sm:self-auto">
              <UploadCloud className="w-4 h-4 text-blue-600" />
              <span>Format: JPG / PNG (4:3 atau 16:9)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {([
              {
                id: 'slot-mekhanai',
                title: 'Finalis Muli Mekhanai',
                event: 'Kabupaten Pesawaran 2023',
                ratio: 'Aspek 4:3 · Dokumentasi',
                placeholder: 'Slot Foto Kegiatan Duta Pesawaran',
                image: '/assets/evidence_muli_mekhanai_pesawaran.jpg',
                alt: 'Dokumentasi Finalis Muli Mekhanai Kabupaten Pesawaran 2023'
              },
              {
                id: 'slot-ba',
                title: 'Finalis Brand Ambassador',
                event: 'PT Jaya Bakery Indonesia',
                ratio: 'Aspek 1:1 · Komersial',
                placeholder: 'Slot Foto Promosi Brand Ambassador',
                image: '/assets/evidence_jaya_bakery_2023.jpg',
                alt: 'Poster Brand Ambassador Jaya Bakery (JABEK) 2023'
              },
              {
                id: 'slot-runway',
                title: 'Model Peragaan Busana',
                event: 'Fashion Show Baju Lokal · Lampung',
                ratio: 'Aspek 3:4 · Stage',
                placeholder: 'Slot Foto Peragaan Busana',
                image: '/assets/evidence_fashion_show_lokal.jpg',
                alt: 'Dokumentasi fashion show baju lokal Lampung'
              },
              {
                id: 'slot-host',
                title: 'Dokumentasi Publikasi Media',
                event: 'PPID BAPPEDA · Instagram Reels',
                ratio: 'Aspek 9:16 · Media Sosial',
                placeholder: 'Slot Foto Liputan & Publikasi',
                image: '/assets/evidence_bappeda_publikasi_media.jpg',
                alt: 'Konten Instagram Reels PPID BAPPEDA: Cuma Modal HP, Suara Kamu Nyampe ke DPRD',
                fit: 'contain'
              }
            ] as { id: string; title: string; event: string; ratio: string; placeholder: string; image?: string; alt?: string; fit?: 'cover' | 'contain' }[]).map((slot) => (
              <div
                key={slot.id}
                className="bg-white rounded-2xl p-4 border border-dashed border-slate-300 hover:border-pink-400 hover:shadow-sm transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => playTactileClick(1050)}
              >
                {slot.image ? (
                  <img
                    src={slot.image}
                    alt={slot.alt || slot.title}
                    loading="lazy"
                    className={`w-full aspect-4/3 rounded-xl border border-slate-200 mb-3 group-hover:border-pink-300 transition-colors ${slot.fit === 'contain' ? 'object-contain bg-slate-100' : 'object-cover'}`}
                  />
                ) : (
                  <div className="w-full aspect-4/3 rounded-xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center p-4 text-center group-hover:bg-pink-50/50 transition-colors mb-3">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-pink-600 shadow-2xs mb-2 group-hover:scale-105 transition-all">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-slate-600 group-hover:text-pink-700">
                      {slot.placeholder}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 mt-1">
                      {slot.ratio}
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-[10.5px] font-mono text-slate-400 mb-0.5">
                    {slot.event}
                  </div>
                  <h4 className="text-xs font-heading font-extrabold text-[#0B1E3D] group-hover:text-pink-700 transition-colors">
                    {slot.title}
                  </h4>
                  <div className={`flex items-center gap-1 mt-2 pt-2 border-t ${slot.image ? 'border-emerald-100 text-emerald-700' : 'border-slate-100 text-emerald-600'} text-[10px] font-mono`}>
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{slot.image ? 'Bukti Terverifikasi' : 'Slot Template Siap Pakai'}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};