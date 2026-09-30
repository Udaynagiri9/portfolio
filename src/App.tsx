import React from 'react';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroAbout } from './components/IntroAbout';
import { Services } from './components/Services';
import { SelectedWork } from './components/SelectedWork';
import { DevelopmentSection } from './components/DevelopmentSection';
import { FilmSection } from './components/FilmSection';
import { DesignSection } from './components/DesignSection';
import { MarketingSection } from './components/MarketingSection';
import { SkillsSection } from './components/SkillsSection';
import { CertificatesSection } from './components/CertificatesSection';
import { CreativeProcess } from './components/CreativeProcess';
import { BrandMindset } from './components/BrandMindset';
import { SocialSection } from './components/SocialSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <CursorProvider>
      <div className="relative min-h-screen bg-[#070708] text-white overflow-hidden font-sans">
        {/* Subtle Film Grain Texture Overlay */}
        <div className="grain-overlay" />

        {/* Dynamic Custom Cursor (Desktop Only) */}
        <CustomCursor />

        {/* Fixed Navigation */}
        <Navbar />

        {/* Main Content Flow */}
        <main>
          {/* 01 Hero Section */}
          <Hero />

          {/* 02 Editorial Intro & Philosophy */}
          <IntroAbout />

          {/* 03 Interactive Services with Floating Previews */}
          <Services />

          {/* 04 Selected Work Major Showcase with Case Study Modal */}
          <SelectedWork />

          {/* 05 Digital / Development Section */}
          <DevelopmentSection />

          {/* 06 Film / Motion Showcase with Video Lightbox */}
          <FilmSection />

          {/* 07 Design & Visuals Artistic Masonry Gallery */}
          <DesignSection />

          {/* 08 Digital Marketing Campaigns & Framework */}
          <MarketingSection />

          {/* 09 Core Skills Toolkit (Interactive Tags) */}
          <SkillsSection />

          {/* 10 Certificates & Credentials */}
          <CertificatesSection />

          {/* 11 How I Work / Creative Process */}
          <CreativeProcess />

          {/* 11 Brand Mindset & Multidisciplinary Synergy (Editorial White Rhythm) */}
          <BrandMindset />

          {/* 12 Social Channels / Let's Connect */}
          <SocialSection />

          {/* 13 Contact Section & Project Form */}
          <ContactSection />
        </main>

        {/* 14 Editorial Footer */}
        <Footer />
      </div>
    </CursorProvider>
  );
};

export default App;
