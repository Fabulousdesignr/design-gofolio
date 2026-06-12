import { ArrowUpRight } from 'lucide-react';
import ProductFrame from './ProductFrame';
import Footer from './editorial/EditorialFooter';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ExperimentTemplate({ experiment }) {
  if (!experiment) return null;

  return (
    <div className="min-h-screen bg-bg-primary transition-colors duration-300">
      <Navbar />

      <main className="pt-32 pb-24">
        {/* Header Section */}
        <header className="max-w-[1400px] mx-auto px-6 md:px-12 mb-16 scroll-reveal fade-up">
          <Link to="/labs" className="inline-flex items-center gap-2 text-text-secondary hover:text-text-primary mb-12 transition-colors font-medium text-sm">
            <ArrowLeft size={16} /> Back to AI Labs
          </Link>
          <div className="max-w-4xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-card-border text-text-primary font-bold text-xs uppercase tracking-widest mb-6">
              {experiment.platform}
            </span>
            <h1 className="edit-title-hero mb-6 text-text-primary">
              {experiment.title}
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-medium max-w-[65ch] leading-relaxed">
              {experiment.description}
            </p>
          </div>
          
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
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 mb-24 scroll-reveal fade-up">
          <ProductFrame 
            src={experiment.heroVideo || experiment.heroImage}
            fallback={experiment.heroImage}
            alt={`${experiment.title} Preview`}
            label={`${experiment.title} — Experiment`}
            className="w-full shadow-2xl"
          />
        </section>

        {/* Storytelling Grid */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-12 lg:gap-24 relative items-start">
          
          {/* Left Column: Metadata */}
          <div className="w-full lg:w-48 shrink-0 space-y-12 scroll-reveal fade-up sticky top-32">
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
          <div className="flex-1 min-w-0 max-w-3xl space-y-12 scroll-reveal fade-up">
            <div className="prose-readable">
              <h2 className="edit-title-section text-text-primary">
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
          <section className="max-w-[1400px] mx-auto px-6 md:px-12 mt-32 scroll-reveal fade-up">
            <h2 className="edit-title-section text-text-primary mb-12">
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
