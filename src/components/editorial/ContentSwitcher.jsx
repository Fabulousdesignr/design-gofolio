import React, { useState } from 'react';
import ContentCard from './ContentCard';
import { projects } from '../../data/projects';
import { experiments } from '../../data/experiments';

const TABS = ['Products', 'AI Labs', 'About', 'Resume'];

export default function ContentSwitcher() {
  const [activeTab, setActiveTab] = useState('Products');

  const renderProducts = () => (
    <div className="flex flex-col gap-12 w-full animate-slide-in-left">
      {projects.map((proj, idx) => (
        <ContentCard 
          key={proj.id}
          title={proj.title}
          description={proj.description}
          tags={[proj.category]}
          mediaUrl={proj.image || proj.fallback}
          actionText="View case study"
          actionUrl={proj.link}
          reverse={idx % 2 !== 0}
        />
      ))}
    </div>
  );

  const renderAILabs = () => (
    <div className="flex flex-col gap-12 w-full animate-slide-in-left">
      {experiments.map((exp, idx) => (
        <ContentCard 
          key={exp.id}
          title={exp.title}
          description={exp.description}
          tags={exp.focus.slice(0, 2)}
          mediaUrl={exp.heroVideo || exp.heroImage}
          actionText={exp.liveUrl ? "Visit experiment" : "View details"}
          actionUrl={exp.liveUrl || `/experiments/${exp.slug}`}
          reverse={idx % 2 !== 0}
        />
      ))}
    </div>
  );

  const renderAbout = () => (
    <div className="flex flex-col gap-12 w-full animate-slide-in-left">
      <ContentCard 
        title="How I Think About Products"
        description="I focus on closing the gap between a good idea and a successful launch. That gap is almost always execution and systems design. I architect resilient products, simplify complex workflows, and help teams move from concept to reality faster."
        tags={["Systems Design", "Execution", "Product Strategy"]}
        mediaUrl="/images/My Image.png" 
        actionText="Read Full Story"
        actionUrl="/about"
        actionStyle="link"
        reverse={false}
      />
      <ContentCard 
        title="Design Philosophy"
        description="Aesthetics don't matter if the product doesn't work. I prioritize clarity, high-signal interfaces, and frictionless user flows. Every decision I make is measured against one metric: does this help the user achieve their goal faster?"
        tags={["Clarity", "Signal over Noise"]}
        mediaUrl="/images/shove-hero.png" 
        reverse={true}
      />
      <ContentCard 
        title="AI Workflow Philosophy"
        description="AI is not a feature; it's an accelerant. I integrate AI deeply into my design and development workflows to compress timelines. What used to take months of research and prototyping now takes weeks. I leverage intelligent tools to move faster and build better."
        tags={["AI Engineering", "Velocity"]}
        mediaUrl="/images/Adsight 1.png"
        reverse={false}
      />
    </div>
  );

  const renderResume = () => (
    <div className="flex flex-col gap-12 w-full animate-slide-in-left">
      <ContentCard 
        title="Professional Resume"
        description="A detailed overview of my experience across startups, fintech, AI products, education platforms, freelance consulting, and product design systems. Includes selected work, achievements, and leadership experience."
        tags={["PRODUCT DESIGN", "STARTUPS", "AI PRODUCTS"]}
        mediaUrl="/images/My Image.png" 
        actionText="Download CV"
        actionUrl="/My Cv.pdf"
        actionDownload={true}
        secondaryActionText="View Resume"
        secondaryActionUrl="/My Cv.pdf"
        secondaryActionDownload={false}
        reverse={false}
      />
    </div>
  );

  return (
    <section id="products" className="w-full relative z-30 pb-32 max-w-[1400px] mx-auto">
      
      {/* The Sticky Switcher */}
      <div className="sticky top-0 z-40 bg-bg-primary/90 backdrop-blur-xl border-b border-card-border pt-4 pb-4 mb-8 w-full relative">
        
        {/* Subtle fade edges for scroll indication on mobile */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-bg-primary to-transparent pointer-events-none z-10 md:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none z-10 md:hidden" />

        <div className="flex items-center gap-3 overflow-x-auto w-full px-5 md:px-12 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex items-center justify-center min-h-[48px] px-5 whitespace-nowrap rounded-full text-[15px] md:text-[16px] font-medium transition-all duration-300 select-none flex-shrink-0 ${
                  isActive 
                    ? 'bg-bg-inverse text-text-inverse shadow-[0_4px_20px_rgba(0,0,0,0.15)]' 
                    : 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-card-border'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* The Content Area */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12">
        {activeTab === 'Products' && renderProducts()}
        {activeTab === 'AI Labs' && renderAILabs()}
        {activeTab === 'About' && renderAbout()}
        {activeTab === 'Resume' && renderResume()}
      </div>

    </section>
  );
}
