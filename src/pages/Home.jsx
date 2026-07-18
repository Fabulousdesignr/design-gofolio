import React from 'react';
import Navbar from '../components/Navbar';
import EditorialHero from '../components/editorial/EditorialHero';
import EditorialAbout from '../components/editorial/EditorialAbout';
import ProductImpact from '../components/editorial/ProductImpact';
import SelectedWork from '../components/editorial/SelectedWork';
import HowIThink from '../components/editorial/HowIThink';
import EditorialExperience from '../components/editorial/EditorialExperience';
import Writing from '../components/editorial/Writing';
import TeachingCommunity from '../components/editorial/TeachingCommunity';
import DigitalCommerce from '../components/editorial/DigitalCommerce';
import EditorialFAQ from '../components/editorial/EditorialFAQ';
import EditorialMessageMe from '../components/editorial/EditorialMessageMe';
import VisualShowcase from '../components/editorial/VisualShowcase';
import EditorialFooter from '../components/editorial/EditorialFooter';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
      <Navbar />
      <main className="flex-1 flex flex-col">
        {/* 1. Hero */}
        <EditorialHero />
        
        {/* 2. Impact Stats */}
        <ProductImpact />
        
        {/* 3. About / Playbook */}
        <EditorialAbout />
        
        {/* 3. Selected Product Work */}
        <SelectedWork />
        
        {/* 4. Product Thinking ("How I Think") */}
        <HowIThink />
        
        {/* 5. Experience */}
        <EditorialExperience />
        
        {/* 6. Writing */}
        <Writing />
        
        {/* 7. Teaching & Community */}
        <TeachingCommunity />
        
        {/* 8. Digital Commerce (Shopify at the bottom) */}
        <DigitalCommerce />
        
        {/* 9. FAQs & Message Contact Form */}
        <EditorialFAQ />
        <EditorialMessageMe />
        
        {/* 10. Cinematic Visual Signature */}
        <VisualShowcase />
        
        {/* 11. Final Minimal Footer */}
        <EditorialFooter />
      </main>
    </div>
  );
}
