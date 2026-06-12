import React from 'react';
import Navbar from '../components/Navbar';
import EditorialHero from '../components/editorial/EditorialHero';
import ContentSwitcher from '../components/editorial/ContentSwitcher';
import EditorialFAQ from '../components/editorial/EditorialFAQ';
import EditorialMessageMe from '../components/editorial/EditorialMessageMe';
import VisualShowcase from '../components/editorial/VisualShowcase';
import EditorialFooter from '../components/editorial/EditorialFooter';
import { useScrollReveal } from '../hooks/useScrollReveal';

import { projects } from '../data/projects';
import { experiments } from '../data/experiments';

export default function Home() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary transition-colors duration-300">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <EditorialHero />
        
        {/* The New Horizon Architecture */}
        <ContentSwitcher />
        
        {/* The Closing Funnel */}
        <EditorialFAQ />
        <EditorialMessageMe />
        
        {/* Cinematic Visual Signature */}
        <VisualShowcase />
        
        {/* Final Minimal Footer */}
        <EditorialFooter />
      </main>
    </div>
  );
}
