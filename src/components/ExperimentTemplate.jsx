import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import AtmosphericBackground from './AtmosphericBackground';
import Footer from './Footer';

export default function ExperimentTemplate({ experiment }) {
  if (!experiment) return null;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <AtmosphericBackground />
      
      {/* Custom Minimal Nav for Experiments */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/80 backdrop-blur-md border-b border-white/5">
        <div className="container-custom flex justify-between items-center py-4">
          <Link to="/labs" className="font-semibold text-text-secondary opacity-70 hover:opacity-100 hover:text-text-primary transition-all flex items-center gap-2">
            &larr; Back to Labs
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-accent">
            AI Playground
          </span>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <header className="container-custom max-w-4xl mx-auto mb-16 text-center scroll-reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6">
            {experiment.platform}
          </span>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">
            {experiment.title}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary font-medium max-w-3xl mx-auto leading-relaxed">
            {experiment.description}
          </p>
          
          {experiment.liveUrl && (
            <div className="mt-10 flex justify-center">
              <a 
                href={experiment.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-text-primary text-bg-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-all duration-300"
              >
                Launch Experiment
                <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          )}
        </header>

        {/* Media Showcase */}
        <section className="container-custom max-w-6xl mx-auto mb-24 scroll-reveal">
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden bg-bg-secondary border border-card-border relative group shadow-2xl">
            {/* If video exists, we would render it here. For now, image placeholder */}
            <img 
              src={experiment.image} 
              alt={`${experiment.title} Preview`}
              className="w-full h-full object-cover"
            />
            
            {/* Play Button Overlay (for aesthetic/future video integration) */}
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-full border border-white/20 shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-500 text-white">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Storytelling Grid */}
        <section className="container-custom max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Metadata */}
          <div className="md:col-span-4 space-y-12 scroll-reveal">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-4">
                Core Focus
              </h3>
              <ul className="space-y-3">
                {experiment.focus.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-text-primary font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-4">
                Stack & Tools
              </h3>
              <div className="inline-block px-4 py-2 rounded-lg bg-bg-secondary border border-card-border font-medium text-sm">
                {experiment.platform}
              </div>
            </div>
          </div>

          {/* Right Column: The Story */}
          <div className="md:col-span-8 space-y-12 scroll-reveal">
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="text-3xl font-black tracking-tight mb-6 text-text-primary">
                The Lab Notes
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg mb-8">
                {experiment.story}
              </p>
              
              <div className="p-8 rounded-2xl bg-gradient-to-br from-bg-secondary to-bg-primary border border-card-border relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm">💡</span>
                  Why I built this
                </h3>
                <div className="space-y-4">
                  {experiment.whyIBuiltThis && experiment.whyIBuiltThis.map((paragraph, idx) => (
                    <p key={idx} className="text-text-secondary leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {(!experiment.whyIBuiltThis) && (
                    <p className="text-text-secondary leading-relaxed">
                      This project was born out of a desire to explore how fast AI-assisted prototyping can turn a rough concept into a tangible, emotional experience. It strips away the traditional enterprise constraints to focus purely on interaction, vibe, and immediate user feedback.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
          
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
