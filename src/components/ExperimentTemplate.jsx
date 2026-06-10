import { ArrowUpRight } from 'lucide-react';
import AtmosphericBackground from './AtmosphericBackground';
import ProductFrame from './ProductFrame';
import Footer from './Footer';
import Navbar from './Navbar';

export default function ExperimentTemplate({ experiment }) {
  if (!experiment) return null;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <AtmosphericBackground />
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <header className="container-custom max-w-4xl mx-auto mb-16 text-center scroll-reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-xs uppercase tracking-widest mb-6 border border-accent/20">
            {experiment.platform}
          </span>
          <h1 className="text-detail-title font-black tracking-tighter mb-6 text-text-primary">
            {experiment.title}
          </h1>
          <p className="text-body-base text-text-secondary font-medium max-w-3xl mx-auto">
            {experiment.description}
          </p>
          
          {experiment.liveUrl && (
            <div className="mt-10 flex justify-center">
              <a 
                href={experiment.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="workspace-btn-primary"
              >
                Launch Product <ArrowUpRight size={18} />
              </a>
            </div>
          )}
        </header>

        {/* Primary Media Showcase */}
        <section className="container-custom max-w-6xl mx-auto mb-24 scroll-reveal">
          <ProductFrame 
            src={experiment.heroVideo || experiment.heroImage}
            fallback={experiment.heroImage}
            alt={`${experiment.title} Preview`}
            label={`${experiment.title} — Experiment`}
            className="w-full shadow-2xl"
          />
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
              <h2 className="text-section-title font-black tracking-tight mb-6 text-text-primary">
                The Lab Notes
              </h2>
              <p className="text-body-base text-text-secondary mb-12">
                {experiment.story}
              </p>

              {/* Lab Notes Content blocks */}
              {experiment.labNotes ? (
                <div className="space-y-10 mt-12">
                  {experiment.labNotes.map((note, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-bold mb-3 text-text-primary flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent inline-block" />
                        {note.title}
                      </h3>
                      <p className="text-text-secondary leading-relaxed">
                        {note.content}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-8 rounded-2xl bg-gradient-to-br from-bg-secondary to-bg-primary border border-card-border relative overflow-hidden mt-12">
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
              )}
            </div>
          </div>
          
        </section>

        {/* Dedicated Product Gallery */}
        {experiment.gallery && experiment.gallery.length > 0 && (
          <section className="container-custom max-w-5xl mx-auto mt-32 scroll-reveal">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-10 text-center">
              Product Gallery
            </h2>
            <div className="space-y-12">
              {experiment.gallery.map((imgSrc, idx) => (
                <ProductFrame 
                  key={idx}
                  src={imgSrc} 
                  alt={`${experiment.title} Gallery ${idx + 1}`}
                  label={`${experiment.title} — 0${idx + 1}`}
                  className="w-full"
                />
              ))}
            </div>
          </section>
        )}

      </main>
      
      <Footer />
    </div>
  );
}
