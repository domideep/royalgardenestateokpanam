/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { EstateFeaturesBanner } from './components/EstateFeaturesBanner';
import { BungalowModelsSection } from './components/BungalowModelsSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { AchievementsSection } from './components/AchievementsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BrochureModal } from './components/BrochureModal';
import { AIAssistantWidget } from './components/AIAssistantWidget';

export default function App() {
  const [inquiryTopic, setInquiryTopic] = useState<string>('');
  const [brochureModalOpen, setBrochureModalOpen] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireModel = (modelName: string) => {
    setInquiryTopic(modelName);
    scrollToSection('contact');
  };

  const handleInquireExpertise = (expertiseTitle: string) => {
    setInquiryTopic(expertiseTitle);
    scrollToSection('contact');
  };

  const handleOpenConnect = () => {
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#22090F] text-[#F8F2F4] flex flex-col font-sans selection:bg-[#D4AF37]/30 selection:text-[#FFFFFF]">
      {/* Top Navigation Bar with Tablet & Mobile Off-Canvas Drawer */}
      <Navbar
        onOpenConnect={handleOpenConnect}
        onSelectUnit={handleInquireModel}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection
          onExplorePortfolio={() => scrollToSection('models')}
          onGetInTouch={() => scrollToSection('contact')}
          onOpenBrochure={() => setBrochureModalOpen(true)}
        />

        {/* 6 Core Estate Features Banner from Brochure */}
        <EstateFeaturesBanner />

        {/* 2 & 4 Bedroom Bungalow Models with Floor Plans & Specs */}
        <BungalowModelsSection
          onInquireModel={handleInquireModel}
          onOpenBrochure={() => setBrochureModalOpen(true)}
        />

        {/* About Developer (A1 Elite Service & Properties Limited) */}
        <AboutSection
          onOpenConnect={handleOpenConnect}
          onOpenBrochure={() => setBrochureModalOpen(true)}
        />

        {/* Professional Experience & Leadership */}
        <ExperienceSection />

        {/* Development & Advisory Expertise */}
        <ExpertiseSection onInquireExpertise={handleInquireExpertise} />

        {/* Verified Development Track Record & Allocation Metrics */}
        <AchievementsSection />

        {/* Development Philosophy (...Your Property, Our Priority) */}
        <PhilosophySection />

        {/* Verified Homeowner & Investor Testimonials */}
        <TestimonialsSection />

        {/* Inspection Booking & Unit Reservation */}
        <ContactSection initialInquiryTopic={inquiryTopic} />
      </main>

      {/* Editorial Royal Navy & Gold Footer */}
      <Footer />

      {/* Interactive High-Res Brochure Lightbox with Pan/Zoom */}
      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        onBookInspection={() => {
          setBrochureModalOpen(false);
          scrollToSection('contact');
        }}
      />

      {/* Official A1 Elite AI Assistant (Customer Support & Business Deals) */}
      <AIAssistantWidget />
    </div>
  );
}
