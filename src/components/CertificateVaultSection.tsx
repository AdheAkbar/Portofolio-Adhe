import React from 'react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA, Certificate } from '../data/portfolioData';
import { useInView } from '../hooks/useInView';
import { playTactileClick, playCelebrationChime } from '../utils/soundEffects';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Eye, 
  ArrowUpRight,
  Hash
} from 'lucide-react';

interface CertificateVaultSectionProps {
  onOpenCertModal: (cert: Certificate) => void;
}

export const CertificateVaultSection: React.FC<CertificateVaultSectionProps> = ({ onOpenCertModal }) => {
  const { ref: sectionRef, isInView } = useInView({ threshold: 0.1 });
  const heroCert = PORTFOLIO_DATA.certificates.find((c) => c.isPrimary) || PORTFOLIO_DATA.certificates[0];
  const supportingCerts = PORTFOLIO_DATA.certificates.filter((c) => !c.isPrimary);

  const handleOpenHeroCert = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 55,
      spread: 70,
      origin: { x, y },
      colors: ['#10B981', '#34D399', '#059669', '#3B82F6']
    });

    onOpenCertModal(heroCert);
  };

  const triggerVaultConfetti = (e: React.MouseEvent) => {
    playCelebrationChime();
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { x, y },
      colors: ['#F59E0B', '#10B981', '#3B82F6', '#6366F1']
    });
  };

  return (
    <section 
      ref={sectionRef}
      id="sertifikat" 
      className="py-16 md:py-24 px-4 md:px-8 xl:pr-28 border-b border-black/[0.06] relative bg-[#FFFFFF] figma-dot-grid overflow-hidden select-none scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto relative">
        
        {/* Figma Canvas Frame Bar Header */}
        <div className="flex items-center justify-between px-4 py-2.5 mb-6 bg-slate-50/90 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-2xs text-xs font-mono text-slate-600">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1 font-bold text-slate-800">
              <Hash className="w-3.5 h-3.5 text-blue-600" />
              Sertifikasi &amp; Lisensi // Kredensial Resmi Negara &amp; Industri
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-500 hidden sm:inline">8 Sertifikat Terverifikasi</span>
          </div>

          {/* Docked Multiplayer Collaborator (Figma Real-Time Style - Zero Overlap) */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Lisensi BNSP KKNI II terverifikasi
            </span>
          </div>
        </div>

        {/* Section Header with Clean Stacked Right Column */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 relative">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-800 mb-3 shadow-xs transition-all ${
              isInView ? 'animate-badge-pop' : ''
            }`}>
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>KOLEKSI SERTIFIKASI &amp; LISENSI RESMI</span>
            </div>

            <h2 className={`text-2xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#0B1E3D] tracking-tight transition-all ${
              isInView ? 'animate-reveal-up' : ''
            }`}>
              <span className="block sm:inline">Koleksi Sertifikasi</span>{' '}
              <span className="text-blue-700 whitespace-nowrap">&amp; Lisensi Profesi</span>
            </h2>

            <p className={`font-serif-italic text-base sm:text-lg md:text-xl text-blue-700 mt-1.5 mb-2 font-normal leading-snug transition-all ${
              isInView ? 'animate-reveal-up delay-150' : ''
            }`}>
              Lisensi Nasional BNSP KKNI II, Pelatihan Jaringan MikroTik, dan Sertifikat Keahlian
            </p>

            <p className={`text-slate-600 text-xs sm:text-sm font-sans leading-relaxed transition-all ${
              isInView ? 'animate-reveal-up delay-250' : ''
            }`}>
              Bagian ini menampilkan kumpulan sertifikasi dan lisensi resmi saya yang telah terverifikasi. Klik pada salah satu sertifikat untuk melihat berkas resolusi tinggi dan detail nomor registrasi resminya.
            </p>
          </div>

          {/* Right Column: Standard Badge */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-3 shrink-0">
            <div className={`bg-slate-50 border border-slate-200 px-5 py-3 rounded-2xl text-left lg:text-right font-mono text-xs shrink-0 shadow-sm card-3d-tilt transition-all ${
              isInView ? 'animate-cascade delay-200' : ''
            }`}>
              <div className="flex items-center gap-1.5 text-[#0B1E3D] font-extrabold mb-1 justify-start lg:justify-end text-xs">
                <Award className="w-4 h-4 text-emerald-600" /> STANDAR NASIONAL & INTERNASIONAL
              </div>
              <div className="text-slate-500 text-[11px] font-semibold">
                Klik Kartu untuk Membuka Scan Asli Resolusi Penuh
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* HERO CARD: BNSP KKNI LEVEL II */}
          <div
            onClick={handleOpenHeroCert}
            className={`md:col-span-2 lg:col-span-2 lg:row-span-2 relative bg-[#0B1E3D] rounded-3xl p-6 sm:p-8 shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden flex flex-col justify-between card-3d-tilt border border-emerald-500/30 ${
              isInView ? 'animate-cascade delay-100' : ''
            }`}
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#10B981] text-black shadow-xs flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" /> SERTIFIKASI UTAMA (BNSP REPUBLIK INDONESIA)
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  SEUMUR HIDUP
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2 leading-tight">
                {heroCert.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 font-sans mb-5 leading-relaxed">
                Penerbit: <strong className="text-white">{heroCert.issuer}</strong>
              </p>

              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 font-mono text-xs mb-5 shadow-sm">
                <div className="text-slate-400 text-[10px] uppercase tracking-wider mb-1 font-semibold">Nomor Registrasi Resmi:</div>
                <div className="space-y-0.5 text-emerald-400 font-bold text-xs sm:text-[13px] tracking-tight">
                  <div>{heroCert.number.includes(' | ') ? heroCert.number.split(' | ')[0] : heroCert.number}</div>
                  {heroCert.number.includes(' | ') && (
                    <div className="text-emerald-300 text-[11px] font-normal">{heroCert.number.split(' | ')[1]}</div>
                  )}
                </div>
                <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-slate-800 text-xs">
                  <span className="text-slate-400">Kualifikasi Profesi:</span>
                  <span className="text-white font-bold">{heroCert.verificationBadge}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail Preview and Action */}
            <div className="relative z-10 mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Klik untuk Membuka Scan Asli Resolusi Penuh</span>
              </div>

              <div className="p-2.5 rounded-full bg-white text-[#0B1E3D] group-hover:bg-emerald-400 transition-colors shadow-sm">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* 7 SUPPORTING CERTIFICATES BENTO CELLS */}
          {supportingCerts.map((cert, cIdx) => (
            <div
              key={cert.id}
              onClick={() => {
                playTactileClick(1150);
                onOpenCertModal(cert);
              }}
              className={`bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between cursor-pointer card-3d-tilt ${
                isInView ? `animate-cascade delay-${(cIdx + 1) * 80}` : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-3">
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white text-slate-700 border border-slate-200 shadow-2xs font-semibold">
                    {cert.category}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-bold">
                    {cert.year}
                  </span>
                </div>

                <h4 className="text-sm font-heading font-extrabold text-[#0B1E3D] mb-1.5 line-clamp-2">
                  {cert.title}
                </h4>

                <p className="text-xs text-slate-500 font-sans mb-3 line-clamp-2">
                  {cert.issuer}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between text-[10.5px] font-mono">
                <span className="text-slate-800 font-bold truncate max-w-[190px]" title={cert.verificationBadge}>
                  {cert.verificationBadge}
                </span>
                <span className="text-slate-600 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all">
                  <Eye className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
