import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';

export default function SelectedWork() {
  const featured = projects.filter(p => p.featured);
  const shyne = featured.find(p => p.id === 'shyne');
  const remaining = featured.filter(p => p.id !== 'shyne');

  return (
    <section id="work" className="py-24 md:py-32 bg-bg-primary relative z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24 scroll-reveal fade-up">
          <span className="text-accent-orange text-[13px] font-bold tracking-widest uppercase mb-4 block">Selected Work</span>
          <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-[1.0] text-text-primary tracking-tight mb-6">Product Case Studies</h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
            Decision-led product strategy, validation, and roadmap execution across B2B SaaS, AI, and Fintech.
          </p>
        </div>

        <div className="flex flex-col gap-16 md:gap-20">
          {/* Flagship — Shyne (full width) */}
          {shyne && (
            <div className="w-full scroll-reveal fade-up">
              <Link to={shyne.link} className="group block w-full">
                <div className="w-full aspect-video md:aspect-[16/7] bg-bg-surface overflow-hidden rounded-3xl mb-8 border border-card-border shadow-sm group-hover:shadow-lg transition-all duration-500">
                  <img
                    src={shyne.image}
                    alt={shyne.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="max-w-2xl">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-3xl md:text-4xl font-black text-text-primary tracking-tight group-hover:text-accent-orange transition-colors">
                        {shyne.title}
                      </h3>
                      <span className="edit-label">{shyne.category}</span>
                    </div>
                    {/* Tagline — problem→outcome */}
                    <p className="text-text-primary/80 text-base md:text-lg leading-relaxed font-medium mb-2">
                      {shyne.tagline}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-text-primary uppercase tracking-widest group-hover:text-accent-orange transition-colors shrink-0 mt-1">
                    <span>Read case study</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          )}

          {/* Remaining 4 in 2-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {remaining.map((project, idx) => (
              <div
                key={project.id}
                className="scroll-reveal fade-up flex flex-col"
                style={{ transitionDelay: `${(idx % 2) * 100}ms` }}
              >
                <Link to={project.link} className="group block flex-1 flex flex-col">
                  {/* Image */}
                  <div className="w-full aspect-[4/3] bg-bg-surface overflow-hidden rounded-2xl mb-6 border border-card-border shadow-sm group-hover:shadow-md transition-all duration-300">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-text-primary tracking-tight group-hover:text-accent-orange transition-colors">
                      {project.title}
                    </h3>
                    <span className="edit-label">{project.category}</span>
                  </div>

                  {/* Tagline — the WHY to click */}
                  <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6 flex-1">
                    {project.tagline}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-text-primary uppercase tracking-widest group-hover:text-accent-orange transition-colors pt-4 border-t border-card-border/50">
                    <span>Read case study</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
