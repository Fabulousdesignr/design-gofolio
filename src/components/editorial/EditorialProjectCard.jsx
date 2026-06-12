import React from 'react';
import { Link } from 'react-router-dom';

export default function EditorialProjectCard({ projects }) {
  // Flagship products for the 100/60/40 asymmetrical showcase
  const flagshipIds = ['applyflow', 'loodle', 'moneylink'];
  const featured = projects.filter(p => flagshipIds.includes(p.id));

  return (
    <section id="shipped-products" className="py-24 md:py-32 bg-bg-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <h2 className="edit-title-section text-text-primary scroll-reveal fade-up">Shipped Products</h2>
        
        <div className="flex flex-col gap-16 md:gap-32 mt-16">
          {featured.map((project, idx) => {
            // ApplyFlow gets 100% width, Loodle gets 60%, MoneyLink gets 40% (approximate via grid)
            let cardClasses = "w-full";
            let imageAspect = "aspect-video md:aspect-[16/7]";
            
            if (idx === 1) { // Loodle
              cardClasses = "w-full md:w-[65%] self-start";
              imageAspect = "aspect-video md:aspect-[4/3]";
            } else if (idx === 2) { // MoneyLink
              cardClasses = "w-full md:w-[45%] self-end md:-mt-64 relative z-10";
              imageAspect = "aspect-video md:aspect-square";
            }

            return (
              <div 
                key={project.id} 
                className={`${cardClasses} scroll-reveal fade-up`}
              >
                <Link to={`/case-study/${project.id}`} className="group block w-full">
                  <div className={`w-full ${imageAspect} bg-bg-surface overflow-hidden rounded-xl md:rounded-2xl mb-6 md:mb-8 border border-card-border shadow-sm`}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                      <h3 className="text-3xl font-black text-text-primary tracking-tight group-hover:opacity-70 transition-opacity">
                        {project.title}
                      </h3>
                      <span className="edit-label">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-text-secondary max-w-lg text-sm md:text-base leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
