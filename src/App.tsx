import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EngineeringStatusStrip } from './components/EngineeringStatusStrip';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { SkillsSection } from './components/SkillsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { DashboardGallerySection } from './components/DashboardGallerySection';
import { TroubleshootingSection } from './components/TroubleshootingSection';
import { ObservabilitySection } from './components/ObservabilitySection';
import { ProductionMindsetSection } from './components/ProductionMindsetSection';
import { EducationSection } from './components/EducationSection';
import { TimelineSection } from './components/TimelineSection';
import { AiAgentSection } from './components/AiAgentSection';
import { BlogSection } from './components/BlogSection';
import { TerminalSection } from './components/TerminalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-100 selection:bg-orange-500/30 selection:text-orange-300 transition-colors duration-300">
          {/* Header Navigation */}
          <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

          {/* Core Sections */}
          <main>
            <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />
            <EngineeringStatusStrip />
            <AboutSection />
            <ExperienceSection />
            <CaseStudiesSection />
            <DashboardGallerySection />
            <SkillsSection />
            <ArchitectureSection />
            <ObservabilitySection />
            <TroubleshootingSection />
            <ProductionMindsetSection />
            <EducationSection />
            <TimelineSection />
            <AiAgentSection />
            <BlogSection />
            <TerminalSection />
            <ContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
          </main>

          {/* Footer */}
          <Footer />

          {/* Formal CV Print / View Modal */}
          <ResumeModal
            isOpen={isResumeModalOpen}
            onClose={() => setIsResumeModalOpen(false)}
          />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}
