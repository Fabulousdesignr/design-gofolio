import React, { useState } from 'react';
import ContentCard from './ContentCard';
import { projects } from '../../data/projects';
import { experiments } from '../../data/experiments';

const TABS = ['Work', 'Services', 'AI Labs', 'About', 'Resume'];

export default function ContentSwitcher() {
  const [activeTab, setActiveTab] = useState('Work');

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

  const renderServices = () => {
    const groups = [
      {
        title: 'I will design your product from idea to polished interface',
        description: 'I will help you turn a rough idea, product problem, or existing app into a clear, usable, and premium digital experience. I will map the user flow, structure the interface, design the screens, create prototypes, and prepare a clean system your team can build from.',
        tags: ['I will research your users', 'I will design your UI', 'I will design SaaS flows', 'I will build design systems', 'I will prototype key journeys'],
        mediaUrl: '/images/Applyflowimage.png',
      },
      {
        title: 'I will design and build your Shopify store',
        description: 'I will help you create a beautiful, conversion-focused Shopify store that feels premium and is easy for customers to shop. I will design the storefront, customize the theme, improve product pages, build landing pages, set up key store sections, and refine the experience for trust and conversion.',
        tags: ['I will design your Shopify store', 'I will customize your theme', 'I will build landing pages', 'I will improve product pages', 'I will set up your store', 'I will optimize for conversion'],
        mediaUrl: '/images/Maxmall Hero.png',
      },
    ];

    return (
      <div className="flex flex-col gap-12 w-full animate-slide-in-left">
        {groups.map((service, idx) => (
          <ContentCard
            key={service.title}
            title={service.title}
            description={service.description}
            tags={service.tags}
            mediaUrl={service.mediaUrl}
            reverse={idx % 2 !== 0}
          />
        ))}
      </div>
    );
  };

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
          actionUrl={exp.liveUrl || `/ai-playground/${exp.slug}`}
          reverse={idx % 2 !== 0}
        />
      ))}
    </div>
  );

  const renderAbout = () => (
    <div className="flex flex-col gap-12 w-full animate-slide-in-left">
      <ContentCard 
        title="How I Think About Products"
        description="I focus on closing the gap between a good idea and a successful launch. For product teams, that means clear flows, strong interaction design, and useful systems. For ecommerce brands, it means reducing friction, improving trust, and making the path to purchase feel effortless."
        tags={["Product Strategy", "Ecommerce UX", "Conversion"]}
        mediaUrl="/images/My Image.png" 
        actionText="Read Full Story"
        actionUrl="/about"
        actionStyle="link"
        reverse={false}
      />
      <ContentCard 
        title="Design Philosophy"
        description="Aesthetics matter most when they support the business goal. I use visual hierarchy, product structure, and careful UX decisions to help users understand, trust, and act faster."
        tags={["Clarity", "Trust", "Business Impact"]}
        mediaUrl="/images/shove-hero.png" 
        reverse={true}
      />
      <ContentCard 
        title="AI Workflow Philosophy"
        description="AI is an accelerant in my workflow. I use it to speed up research synthesis, copy exploration, prototyping, frontend iteration, and store optimization while keeping human judgment at the center."
        tags={["AI-Assisted Workflow", "Velocity"]}
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
        tags={["PRODUCT DESIGN", "SHOPIFY", "STARTUPS"]}
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
        {activeTab === 'Work' && renderProducts()}
        {activeTab === 'Services' && renderServices()}
        {activeTab === 'AI Labs' && renderAILabs()}
        {activeTab === 'About' && renderAbout()}
        {activeTab === 'Resume' && renderResume()}
      </div>

    </section>
  );
}
