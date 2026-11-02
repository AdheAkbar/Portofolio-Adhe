import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  Users, 
  Calendar, 
  MapPin, 
  Star, 
  ShieldCheck, 
  HeartHandshake, 
  Headphones, 
  Award,
  ChevronLeft,
  ChevronRight,
  MessageSquareQuote,
  CheckCircle2,
  Hash
} from 'lucide-react';

export const LitaGlobalSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });
  const [activeReviewIdx, setActiveReviewIdx] = useState<number>(0);
  const [orderCount, setOrderCount] = useState<number>(0);

  const triggerLitaConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#F59E0B', '#10B981', '#3B82F6', '#EC4899']
    });
  };

  const reviews = [
    {
      client: 'Klien Prioritas #8492',
      date: 'Oktober 2025',
      rating: 5,
      comment: 'Komunikasi sangat sopan, respon cepat dan konsisten, dan koordinasi tim sangat rapi saat sesi interaktif. Sangat profesional!',
      tag: 'PELANGGAN TETAP',
      service: 'Tactical Team Lead'
    },
    {
      client: 'Klien Komunitas #3108',
      date: 'Desember 2025',
      rating: 5,
      comment: 'Sabar, ramah, dan sangat adaptif dengan gaya bermain tim. Selalu mengutamakan kepuasan pengguna dari awal sampai akhir sesi.',
      tag: 'VERIFIED REVIEW',
      service: 'Strategic Coaching'
    },
    {
      client: 'Klien Internasional #5519',
      date: 'Februari 2026',
      rating: 5,
      comment: 'Pelayanan bintang lima tanpa celah. Konsistensi respon di bawah 5 menit dan etika komunikasi luar biasa tinggi. Sangat direkomendasikan!',
      tag: 'TOP RATED COMPANION',
      service: 'Cross-Border Interaction'
    }
  ];

  // Dynamic counter animation (0 -> 4500)
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const target = 4500;
    const duration = 1400;
    const stepTime = 30;
    const increment = Math.ceil(target / (duration / stepTime));

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setOrderCount(target);
        clearInterval(timer);
      } else {
        setOrderCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  const handleNextReview = () => {
    playCelebrationChime();
    setActiveReviewIdx((prev) => (prev + 1) % reviews.length);
  };

  const handlePrevReview = () => {
    playTactileClick(1100);
    setActiveReviewIdx((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const pillars = [
    {
      code: '01',
      title: 'Koordinasi Tim & Respon Real-Time',
      icon: <Headphones className="w-5 h-5 text-blue-600" />,
      desc: 'Menjaga waktu respon di bawah 5 menit, mendengarkan kebutuhan pengguna secara aktif, dan menyelaraskan strategi tim secara real-time pada platform digital interaktif berskala internasional.',
      tags: ['Active Listening', 'Instant Response', 'Team Coordination']
    },
    {
      code: '02',
      title: 'Manajemen Retensi & Loyalitas Pengguna',
      icon: <HeartHandshake className="w-5 h-5 text-emerald-600" />,
      desc: 'Membangun ekosistem komunikasi yang nyaman dan penuh empati, menghasilkan repeat order tinggi dan konversi kepuasan pelanggan konsisten bintang lima di 4.500+ transaksi.',
      tags: ['User Retention', 'Customer Empathy', 'Relationship Building']
    },
    {
      code: '03',
      title: 'Resolusi Konflik & Manajemen Dinamika',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      desc: 'Menangani situasi dinamis yang menuntut ketenangan emosional, menyelesaikan keluhan dengan solutif, serta menjaga standar integritas etika layanan pelanggan tingkat tinggi.',
      tags: ['Conflict Resolution', 'Emotional Agility', 'Crisis Management']
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="lita-global" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#FFFFFF] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Layanan Digital // Komunikasi &amp; Pelayanan Pelanggan (Lita Global)
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">Kepuasan Pelanggan Bintang 5</span>
          </div>

          {/* Docked Multiplayer Collaborator (Figma Real-Time Style - Zero Overlap) */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 font-bold text-[11px] border border-amber-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Respon cepat &lt; 5 menit
            </span>
          </div>
        </div>

        {/* Section Header with Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>PELAYANAN KONSUMEN &amp; KOMUNIKASI DIGITAL</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Pelayanan Pelanggan <span className="text-blue-700">Lita Global ({orderCount.toLocaleString()}+ Order)</span>
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-1 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              4.500+ Pesanan Selesai dengan Ulasan Bintang 5 dan Kecepatan Respon Tinggi
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini menampilkan pengalaman kerja saya dalam industri hiburan digital dan pelayanan konsumen di Lita Global. Membuktikan keterampilan komunikasi aktif, empati, kecepatan merespon pelanggan, serta konsistensi menjaga kepuasan pengguna.
            </p>
          </div>

          {/* Right Column: Tactile Sticky Note + Meta Role Card (Zero Overlap) */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            {/* Tactile Sticky Note (Lita Note) */}
            <div 
              onClick={triggerLitaConfetti}
              className="cursor-pointer hover:scale-105 transition-transform"
              title="Klik catatan ulasan untuk selebrasi!"
            >
              <div className="relative">
                <div className="washi-tape-top washi-tape-blue bg-[#E0F2FE] text-sky-950 px-4 py-2.5 rounded-xl shadow-md border border-sky-300/80 max-w-[270px] -rotate-1 hover:rotate-0 transition-transform">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-sky-800 font-bold mb-0.5">
                    🌟 Catatan Loyalitas Klien:
                  </div>
                  <p className="font-handwriting text-sm leading-snug">
                    "4.500+ sesi interaktif selesai dengan rating sempurna 100% CSAT bintang lima!"
                  </p>
                  <div className="text-[10px] font-sans text-sky-700 font-semibold mt-0.5 text-right">
                    — Lita Verified CSAT
                  </div>
                </div>
              </div>
            </div>

            {/* Meta Role Card */}
            <div className={`bg-slate-50 border border-slate-200 px-5 py-2.5 rounded-2xl text-left lg:text-right font-mono text-xs shrink-0 shadow-sm card-3d-tilt transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="flex items-center gap-1.5 text-[#0B1E3D] font-extrabold mb-1 justify-start lg:justify-end text-xs">
                <Award className="w-4 h-4 text-amber-500" /> DIGITAL COMMUNITY COMPANION
              </div>
              <div className="text-slate-500 text-[11px] flex items-center gap-2 justify-start lg:justify-end font-semibold">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-blue-600" /> Sep 2024 – Agu 2026</span>
                <span>·</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-rose-500" /> Remote / Global</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bukti Profil & Riwayat Layanan Lita Global */}
        <div className="mb-10 bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            <div className="w-full lg:w-auto shrink-0 flex flex-col sm:flex-row gap-4 mx-auto lg:mx-0">
              <figure className="w-full sm:w-[240px]">
                <img
                  src="/assets/evidence_lita_profile.jpg"
                  alt="Tangkapan layar profil akun Lita Global: 736 pengikut, 33.529 pengunjung, Lita VIP Platinum 5"
                  loading="lazy"
                  className="w-full rounded-2xl border border-slate-200 shadow-xs"
                />
                <figcaption className="px-1 pt-2 text-[10px] font-mono text-slate-500 text-center">
                  Bukti akun &middot; Lita Global
                </figcaption>
              </figure>

              <figure className="w-full sm:w-[240px]">
                <img
                  src="/assets/evidence_lita_reviews.jpg"
                  alt="Tangkapan layar ulasan layanan Lita Global: Mobile Legends 5.0 dari 4.694 ulasan, Teman Curhat 5.0 dari 142 ulasan, Sleep Call 5.0 dari 56 ulasan"
                  loading="lazy"
                  className="w-full rounded-2xl border border-slate-200 shadow-xs"
                />
                <figcaption className="px-1 pt-2 text-[10px] font-mono text-slate-500 text-center">
                  Bukti ulasan &middot; rating 5.0
                </figcaption>
              </figure>
            </div>

            <div className="flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-700 font-bold mb-3">
                <CheckCircle2 className="w-3.5 h-3.5" />
                BUKTI TERVERIFIKASI
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B1E3D] mb-2">
                Rekam Jejak Layanan: Ulasan Bintang 5 hingga 4.500+ Order
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-sans mb-4">
                Tangkapan layar akun Lita Global: <strong>736 pengikut</strong>, <strong>33.529 pengunjung profil</strong>,
                status <strong>Lita VIP Platinum 5</strong> dan <strong>Lita SVIP 11 Benefit</strong>. Ulasan layanan
                tercatat <strong>5.0 bintang</strong> — Mobile Legends <strong>4.694 ulasan</strong>, Teman Curhat
                <strong>142 ulasan</strong>, dan Sleep Call <strong>56 ulasan</strong> — dengan total layanan
                melampaui <strong>4.500 order</strong>.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[11px]">
                {[
                  { k: '4.694', v: 'Ulasan Mobile Legends' },
                  { k: '5.0 ★', v: 'Rating Layanan' },
                  { k: '4.500+', v: 'Order Selesai' }
                ].map((s) => (
                  <div key={s.v} className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
                    <div className="text-base font-extrabold text-[#0B1E3D]">{s.k}</div>
                    <div className="text-slate-500">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Quantitative Metrics Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          <div className={`p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xs card-3d-tilt transition-all ${
            isInView ? 'animate-cascade delay-100' : ''
          }`}>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E3D]">
              {orderCount.toLocaleString()}+
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-sans">
              Order Interaktif Selesai
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-0.5">
              Volume Skala Besar
            </div>
          </div>

          <div className={`p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xs card-3d-tilt transition-all ${
            isInView ? 'animate-cascade delay-200' : ''
          }`}>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-emerald-600">
              100%
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-sans">
              Kepuasan Pelanggan
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-0.5">
              Rating Konsisten Bintang 5
            </div>
          </div>

          <div className={`p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xs card-3d-tilt transition-all ${
            isInView ? 'animate-cascade delay-300' : ''
          }`}>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E3D]">
              &lt; 60 dtk
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-sans">
              Waktu Respon Komunikasi
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-0.5">
              Koordinasi Real-Time
            </div>
          </div>

          <div className={`p-5 rounded-2xl bg-[#F8FAFC] border border-slate-200 shadow-xs card-3d-tilt transition-all ${
            isInView ? 'animate-cascade delay-400' : ''
          }`}>
            <div className="text-3xl sm:text-4xl font-extrabold font-heading text-blue-700">
              2 Tahun
            </div>
            <div className="text-xs sm:text-sm font-bold text-slate-900 mt-1 font-sans">
              Konsistensi Layanan
            </div>
            <div className="text-[11px] font-mono text-slate-500 mt-0.5">
              Sep 2024 – Agu 2026
            </div>
          </div>
        </div>

        {/* Interactive Client Review Carousel Stage */}
        <div className={`mb-10 rounded-3xl bg-[#0B1E3D] border border-slate-800 p-6 sm:p-8 text-white shadow-xl card-3d-tilt transition-all ${
          isInView ? 'animate-cascade delay-250' : ''
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <MessageSquareQuote className="w-5 h-5 text-amber-400" />
              <span className="font-mono text-xs uppercase tracking-wider text-slate-300 font-bold">
                TESTIMONIAL SPOTLIGHT // VERIFIED CLIENT RATINGS
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-slate-400 mr-2">
                0{activeReviewIdx + 1} / 0{reviews.length}
              </span>
              <button
                onClick={handlePrevReview}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer click-pop"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextReview}
                className="p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition-all cursor-pointer click-pop"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8">
              <div className="flex items-center gap-1.5 mb-3 text-amber-400">
                {[...Array(reviews[activeReviewIdx].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
                <span className="ml-2 font-mono text-xs text-emerald-400 font-bold">100% CSAT SCORE</span>
              </div>

              <blockquote className="text-lg sm:text-xl font-heading font-medium text-slate-100 leading-relaxed italic mb-4">
                "{reviews[activeReviewIdx].comment}"
              </blockquote>

              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                <span className="text-white font-bold">{reviews[activeReviewIdx].client}</span>
                <span>•</span>
                <span>{reviews[activeReviewIdx].service}</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">{reviews[activeReviewIdx].tag}</span>
              </div>
            </div>

            <div className="md:col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
              <div className="text-[11px] font-mono text-slate-400 mb-2">INTEGRITAS TRANSAKSI</div>
              <div className="text-2xl font-bold font-heading text-white">4.500+</div>
              <div className="text-xs text-slate-300 font-sans mt-1">
                Zero-Dispute record, 100% repeat recommendation rate.
              </div>
              <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-emerald-400">
                STATUS: TOP TIER SERVICE
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pil, idx) => (
            <div
              key={pil.code}
              onClick={() => playTactileClick(1150)}
              className={`bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between shadow-xs cursor-pointer card-3d-tilt ${
                isInView ? `animate-cascade delay-${(idx + 1) * 100}` : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shadow-2xs">
                    {pil.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500">
                    KOMPETENSI {pil.code}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-extrabold text-[#0B1E3D] mb-2">
                  {pil.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
                  {pil.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200 font-mono text-[10px]">
                {pil.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 border border-slate-200 shadow-2xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
