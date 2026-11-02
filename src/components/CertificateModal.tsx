import React from 'react';
import { Certificate } from '../data/portfolioData';
import { X, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { playTactileClick } from '../utils/soundEffects';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certificate, onClose }) => {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn"
      onClick={() => {
        playTactileClick(800);
        onClose();
      }}
    >
      <div
        className="relative max-w-4xl w-full bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-2xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playTactileClick(800);
            onClose();
          }}
          className="absolute top-4 right-4 p-2.5 rounded-full bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200 transition-all cursor-pointer z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Certificate Image View */}
          <div className="relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 aspect-[4/3] flex items-center justify-center shadow-inner">
            <img
              src={certificate.imageUrl}
              alt={certificate.title}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/05_Sertifikat_BNSP_Teknisi_Jaringan_dan_Sistem_Komputer.jpg';
              }}
            />
            <div className="absolute bottom-2.5 left-2.5 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[11px] font-mono text-neutral-900 flex items-center gap-1.5 border border-neutral-200 shadow-2xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Salinan Resmi Terverifikasi
            </div>
          </div>

          {/* Details */}
          <div>
            <div className="inline-block px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-neutral-100 text-neutral-800 border border-neutral-200 mb-3 shadow-2xs">
              {certificate.category}
            </div>
            <h3 className="text-xl md:text-2xl font-bold font-heading text-neutral-950 mb-2 leading-tight">
              {certificate.title}
            </h3>
            <p className="text-sm text-neutral-600 mb-5 font-sans">
              Penerbit Resmi: <span className="text-neutral-950 font-semibold">{certificate.issuer}</span>
            </p>

            <div className="space-y-3 bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-xs font-mono mb-6 shadow-2xs">
              <div>
                <span className="text-neutral-500 text-[10px] uppercase tracking-wider font-semibold">Nomor Registrasi / Piagam:</span>
                <div className="text-neutral-950 font-bold break-all mt-0.5">{certificate.number}</div>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-2.5">
                <span className="text-neutral-500">Tahun Terbit:</span>
                <span className="text-neutral-950 font-bold">{certificate.year}</span>
              </div>
              <div className="flex justify-between border-t border-neutral-200 pt-2.5">
                <span className="text-neutral-500">Status Kualifikasi:</span>
                <span className="text-emerald-700 font-bold">{certificate.verificationBadge}</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={certificate.imageUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-950 text-white hover:bg-neutral-800 text-xs font-sans font-semibold transition-all shadow-xs"
              >
                <span>Buka Resolusi Penuh</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 hover:text-black text-xs font-sans font-medium transition-all cursor-pointer border border-neutral-200 shadow-2xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
