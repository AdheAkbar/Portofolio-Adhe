import React, { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playSlideSwoosh } from '../utils/soundEffects';
import { 
  Send, 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  ArrowUpRight, 
  RotateCcw, 
  Sparkles, 
  MessageCircle,
  Hash,
  Share2
} from 'lucide-react';

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689-.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TiktokIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

export const ContactLoopingSection: React.FC = () => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isWarping, setIsWarping] = useState(false);

  const contactData = {
    email: 'akbarade496@gmail.com',
    whatsapp: '+62 895-6365-71654',
    whatsappClean: '62895636571654',
    instagram: '@akbar_adhe_',
    instagramUrl: 'https://www.instagram.com/akbar_adhe_?xtok=MTh6b3AxdmZmdnpyNQ%3D%3D&utm_source=qr',
    tiktok: '@dhe1only',
    tiktokUrl: 'https://www.tiktok.com/@dhe1only',
    linkedin: 'linkedin.com/in/madheakbar',
    linkedinUrl: 'https://linkedin.com/in/madheakbar',
    githubUrl: 'https://github.com/AdheAkbar',
    location: 'Kota Bandar Lampung, Lampung',
    status: 'Siap Berkolaborasi & Peluang Karir (2026)'
  };

  const copyToClipboard = (text: string, key: string) => {
    playTactileClick(1200);
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const triggerCrtWarp = () => {
    playSlideSwoosh();
    setIsWarping(true);

    setTimeout(() => {
      const heroEl = document.getElementById('hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 200);

    setTimeout(() => {
      setIsWarping(false);
    }, 1000);
  };

  return (
    <section 
      ref={sectionRef}
      id="kontak" 
      className={`py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#FFFFFF] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24 ${
        isWarping ? 'animate-crt-warp' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Kontak // Hubungi M. Adhe Akbar, S.Kom.
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">Respon Cepat &amp; Terbuka untuk Diskusi</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[11px] border border-blue-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Terbuka untuk Kesempatan Karir
            </span>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-slate-800 mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <Share2 className="w-3.5 h-3.5 text-blue-600" />
              <span>HUBUNGI SAYA</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              Kontak &amp; <span className="text-blue-700">Hubungi Saya</span>
            </h2>

            <p className={`font-serif-italic text-lg sm:text-xl text-blue-700 mt-1 mb-2 font-normal transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Terbuka untuk Peluang Kerja, Proyek, &amp; Kolaborasi Profesional
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Silakan hubungi saya melalui WhatsApp, Email resmi, maupun media sosial Instagram dan TikTok. Saya siap berdiskusi mengenai penempatan kerja, proyek kreatif, maupun peluang kemitraan.
            </p>
          </div>

          {/* Right Column: Onboarding Status Badge */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            <div className={`bg-white border border-slate-200 px-5 py-3 rounded-2xl font-mono text-xs shrink-0 shadow-sm card-3d-tilt transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="text-emerald-700 font-bold flex items-center gap-1.5 text-xs">
                <Check className="w-3.5 h-3.5" /> SIAP ONBOARDING 2026
              </div>
              <div className="text-slate-500 text-[11px] mt-0.5 font-semibold">
                Bandar Lampung, Indonesia
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Main Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          
          {/* Direct Communication Channels (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            
            {/* WhatsApp Card */}
            <div className={`bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-emerald-400 transition-all card-3d-tilt ${
              isInView ? 'animate-cascade delay-100' : ''
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-2xs">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">WhatsApp &amp; Telepon</div>
                  <div className="text-sm sm:text-base font-bold font-mono text-[#0B1E3D]">{contactData.whatsapp}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-end sm:self-center">
                <button
                  onClick={() => copyToClipboard(contactData.whatsapp, 'wa')}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs click-pop"
                >
                  {copiedKey === 'wa' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                  <span>{copiedKey === 'wa' ? 'Tersalin!' : 'Salin'}</span>
                </button>
                <a
                  href={`https://wa.me/${contactData.whatsappClean}?text=Halo%20M.%20Adhe%20Akbar,%20kami%20tertarik%20dengan%20profil%20dan%20portofolio%20Anda.`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs font-sans flex items-center gap-1.5 transition-all shadow-xs click-pop"
                >
                  <Send className="w-3.5 h-3.5" /> Buka WA
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className={`bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-blue-400 transition-all card-3d-tilt ${
              isInView ? 'animate-cascade delay-150' : ''
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0 shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Surat Elektronik Resmi</div>
                  <div className="text-sm sm:text-base font-bold font-mono text-[#0B1E3D] break-all">{contactData.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-end sm:self-center">
                <button
                  onClick={() => copyToClipboard(contactData.email, 'email')}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs click-pop"
                >
                  {copiedKey === 'email' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                  <span>{copiedKey === 'email' ? 'Tersalin!' : 'Salin'}</span>
                </button>
                <a
                  href={`mailto:${contactData.email}`}
                  className="px-4 py-2 rounded-xl bg-[#0B1E3D] text-white hover:bg-blue-600 font-bold text-xs font-sans flex items-center gap-1.5 transition-all shadow-xs click-pop"
                >
                  <Send className="w-3.5 h-3.5" /> Kirim Email
                </a>
              </div>
            </div>

            {/* Instagram Card */}
            <div className={`bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-pink-400 transition-all card-3d-tilt ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Instagram Resmi</div>
                  <div className="text-sm sm:text-base font-bold font-mono text-[#0B1E3D]">{contactData.instagram}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-end sm:self-center">
                <button
                  onClick={() => copyToClipboard(contactData.instagram, 'ig')}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs click-pop"
                >
                  {copiedKey === 'ig' ? <Check className="w-3.5 h-3.5 text-pink-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                  <span>{copiedKey === 'ig' ? 'Tersalin!' : 'Salin'}</span>
                </button>
                <a
                  href={contactData.instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-rose-600 hover:opacity-90 text-white font-bold text-xs font-sans flex items-center gap-1.5 transition-all shadow-xs click-pop"
                >
                  <span>Buka Instagram</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* TikTok Card */}
            <div className={`bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-slate-800 transition-all card-3d-tilt ${
              isInView ? 'animate-cascade delay-250' : ''
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <TiktokIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">TikTok Resmi</div>
                  <div className="text-sm sm:text-base font-bold font-mono text-[#0B1E3D]">{contactData.tiktok}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-end sm:self-center">
                <button
                  onClick={() => copyToClipboard(contactData.tiktok, 'tiktok')}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs click-pop"
                >
                  {copiedKey === 'tiktok' ? <Check className="w-3.5 h-3.5 text-slate-900" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                  <span>{copiedKey === 'tiktok' ? 'Tersalin!' : 'Salin'}</span>
                </button>
                <a
                  href={contactData.tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs font-sans flex items-center gap-1.5 transition-all shadow-xs click-pop"
                >
                  <span>Buka TikTok</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className={`bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-sky-400 transition-all card-3d-tilt ${
              isInView ? 'animate-cascade delay-300' : ''
            }`}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-2xs">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Jejaring Profesional</div>
                  <div className="text-sm sm:text-base font-bold font-mono text-[#0B1E3D]">{contactData.linkedin}</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 self-end sm:self-center">
                <button
                  onClick={() => copyToClipboard(contactData.linkedinUrl, 'linkedin')}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs click-pop"
                >
                  {copiedKey === 'linkedin' ? <Check className="w-3.5 h-3.5 text-sky-600" /> : <Copy className="w-3.5 h-3.5 text-slate-600" />}
                  <span>{copiedKey === 'linkedin' ? 'Tersalin!' : 'Salin'}</span>
                </button>
                <a
                  href={contactData.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#0B1E3D] text-white hover:bg-blue-600 font-bold text-xs font-sans flex items-center gap-1.5 transition-all shadow-xs click-pop"
                >
                  <span>Profil LinkedIn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Location & Ready-to-Work Card */}
          <div className={`bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between card-3d-tilt ${
            isInView ? 'animate-cascade delay-400' : ''
          }`}>
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-800 font-bold mb-3">
                <MapPin className="w-4 h-4 text-pink-600" />
                BASIS OPERASIONAL
              </div>
              <h3 className="text-lg font-heading font-extrabold text-[#0B1E3D] mb-2">
                Kota Bandar Lampung, Lampung
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed mb-3">
                Berbasis di Kota Bandar Lampung dengan mobilitas kerja on-site dan hybrid di wilayah Lampung. Fokus kerja mencakup empat lini: <strong>IT Operational</strong> (dukungan perangkat, server, dan pengguna), <strong>Media &amp; Komunikasi</strong> (produksi konten publikasi, foto/video, pengelolaan kanal digital), <strong>Fullstack Developer</strong> (web &amp; Android dengan PHP, Next.js/React, dan Kotlin), serta <strong>Jaringan</strong> (splicing fiber optic, MikroTik/Cisco, OPM/OTDR, operasional NOC/FOC).
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {['IT Operational', 'Media & Komunikasi', 'Fullstack Developer', 'Jaringan'].map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded-lg bg-slate-100 border border-slate-200 text-[10px] font-mono font-bold text-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="space-y-2 border-t border-slate-200 pt-3 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Status Ketersediaan:</span>
                  <span className="text-emerald-700 font-bold">Siap Kerja</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Target Bidang:</span>
                  <span className="text-[#0B1E3D] font-bold text-right">IT Ops · Media · Fullstack · Jaringan</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Gelar Akademik:</span>
                  <span className="text-blue-700 font-bold">S.Kom (Cum Laude 3.59)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500 flex items-center gap-1.5 font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Respon Komunikasi Cepat &amp; Terbuka</span>
            </div>
          </div>
        </div>

        {/* Grand Finale: Navigation Mechanism */}
        <div className={`bg-[#0B1E3D] rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden shadow-xl card-3d-tilt transition-all ${
          isInView ? 'animate-cascade delay-300' : ''
        }`}>
          <div className="relative z-10 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-emerald-400 mb-3">
              <RotateCcw className="w-3.5 h-3.5 animate-spin" />
              <span>NAVIGASI // KEMBALI KE ATAS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-3">
              Terima Kasih Atas Waktu &amp; Kunjungan Anda
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
              Portofolio ini merangkum rekam jejak, keahlian teknis, dan integritas kerja nyata M. Adhe Akbar, S.Kom.
            </p>

            <button
              onClick={triggerCrtWarp}
              className="px-8 py-4 rounded-full bg-white hover:bg-slate-100 text-[#0B1E3D] font-heading font-extrabold text-xs tracking-wide inline-flex items-center gap-2 transition-all shadow-md hover:scale-105 cursor-pointer click-pop"
            >
              <RotateCcw className="w-4 h-4" />
              <span>↻ KEMBALI KE ATAS (HALAMAN UTAMA)</span>
            </button>
          </div>
        </div>

        {/* Bottom Technical Credits */}
        <div className="mt-12 text-center font-mono text-xs text-slate-500">
          <div>M. ADHE AKBAR, S.Kom. · PORTOFOLIO RESMI &amp; CURRICULUM VITAE</div>
          <div className="mt-1 text-slate-400 text-[11px]">Terbuka untuk Peluang Kerja, Proyek, &amp; Kolaborasi Profesional · 2026</div>
        </div>

      </div>
    </section>
  );
};