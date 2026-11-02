import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, Certificate } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { SignalCanvas } from './components/SignalCanvas';
import { RotaryDial } from './components/RotaryDial';
import { HeroSection } from './components/HeroSection';
import { QuickSummarySection } from './components/QuickSummarySection';
import { CvOverviewSection } from './components/CvOverviewSection';
import { EducationSection } from './components/EducationSection';
import { HybridSkillsetSection } from './components/HybridSkillsetSection';
import { GithubShowcaseSection } from './components/GithubShowcaseSection';
import { BappedaExperienceSection } from './components/BappedaExperienceSection';
import { LitaGlobalSection } from './components/LitaGlobalSection';
import { FieldOperationsSection } from './components/FieldOperationsSection';
import { SintaResearchSection } from './components/SintaResearchSection';
import { MultimediaExpoSection } from './components/MultimediaExpoSection';
import { PkmCaseStudiesSection } from './components/PkmCaseStudiesSection';
import { PublicSpeakingBrandingSection } from './components/PublicSpeakingBrandingSection';
import { CertificateVaultSection } from './components/CertificateVaultSection';
import { ContactLoopingSection } from './components/ContactLoopingSection';
import { CertificateModal } from './components/CertificateModal';
import { CvModal } from './components/CvModal';
import { playTactileClick } from './utils/soundEffects';
import { 
  ArrowRight, 
  Sparkles, 
  Radio, 
  ExternalLink,
  Code2,
  Video,
  Users,
  Network,
  Cpu,
  Trophy,
  HeartHandshake,
  Camera,
  ShieldCheck,
  Send
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeDivision, setActiveDivision] = useState<string>('all');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);

  const handleSelectDivision = (id: string) => {
    setActiveDivision(id);
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8] text-[#0F172A] relative selection:bg-neutral-900 selection:text-white">
      {/* Dynamic Background Signal Shader / Canvas */}
      <SignalCanvas activeMode={activeDivision} />

      {/* Persistent Technical Navbar */}
      <Navbar 
        activeDivision={activeDivision}
        onSelectDivision={handleSelectDivision}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Rotary Frequency Dial Nav Sidebar */}
      <RotaryDial />

      {/* Main Content Modules */}
      <main className="relative z-10">
        {/* MODUL 01 // HERO */}
        <HeroSection 
          onExploreClick={() => {
            const el = document.getElementById('cv-lengkap') || document.getElementById('keahlian');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* MODUL 02 // RINGKASAN 10 DETIK */}
        <QuickSummarySection />

        {/* MODUL 03 // EXECUTIVE CV */}
        <CvOverviewSection onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* MODUL 04 // PENDIDIKAN */}
        <EducationSection />

        {/* MODUL 05 // DAFTAR KEAHLIAN */}
        <HybridSkillsetSection />

        {/* MODUL 05 // GITHUB SOFTWARE SHOWCASE */}
        <GithubShowcaseSection />

        {/* MODUL 06 // PENGALAMAN BAPPEDA */}
        <BappedaExperienceSection />

        {/* MODUL 07 // PENGALAMAN LITA GLOBAL */}
        <LitaGlobalSection />

        {/* MODUL 08 // OPERASI DATA & FIBER OPTIC */}
        <FieldOperationsSection />

        {/* MODUL 09 // RISET ILMIAH SINTA 3 */}
        <SintaResearchSection />

        {/* MODUL 10 // MULTIMEDIA & PRESTASI EXPO */}
        <MultimediaExpoSection onOpenCertModal={(cert) => setSelectedCert(cert)} />

        {/* MODUL 11 // PENGABDIAN MASYARAKAT */}
        <PkmCaseStudiesSection />

        {/* MODUL 12 // KOMUNIKASI PUBLIK & DUTA */}
        <PublicSpeakingBrandingSection />

        {/* MODUL 13 // SERTIFIKASI & LISENSI RESMI */}
        <CertificateVaultSection onOpenCertModal={(cert) => setSelectedCert(cert)} />

        {/* MODUL 14 // KONTAK & HUBUNGI SAYA */}
        <ContactLoopingSection />
      </main>

      {/* Modal Dialog for Certificate Scans */}
      <CertificateModal 
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {/* Modal Dialog for Interactive ATS Curriculum Vitae */}
      <CvModal 
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
      />
    </div>
  );
};

export default App;
