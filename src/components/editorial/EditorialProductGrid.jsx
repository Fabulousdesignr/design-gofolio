import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function EditorialProductGrid({ experiments }) {
  const featuredIds = ['adsight', 'rivalens', 'shyne-virtual-try-on', 'shyne'];
  const featured = experiments.filter(e => featuredIds.includes(e.slug));

  return (
    <section className="py-24 md:py-32 border-t border-card-border bg-bg-primary">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 scroll-reveal fade-up">
          <div>
            <h2 className="edit-title-section text-text-primary !mb-2">The Lab</h2>
            <p className="text-text-secondary text-lg">Fast, AI-assisted prototypes and systems.</p>
          </div>
          <Link to="/labs" className="edit-button edit-button-secondary">
            View All Experiments
          </Link>
        </div>
        
        {/* Bento Box 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {featured.map((product, idx) => (
            <Link 
              key={product.slug} 
              to={`/ai-playground/${product.slug}`}
              className="group block scroll-reveal fade-up bg-bg-surface border border-card-border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative"
              style={{ transitionDelay: `${(idx % 3) * 100}ms` }}
            >
              {/* Monospace Tech Label */}
              <div className="absolute top-4 left-4 z-10 bg-bg-surface/90 backdrop-blur px-3 py-1.5 rounded-md border border-card-border font-mono text-[10px] uppercase tracking-widest text-text-primary">
                {product.platform}
              </div>

              {/* Product Media */}
              <div className="w-full aspect-[4/3] bg-bg-primary overflow-hidden border-b border-card-border relative">
                <img 
                  src={product.heroImage} 
                  alt={product.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.05]"
                />
                
                {/* Hover Launch Overlay */}
                <div className="absolute inset-0 bg-text-primary/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="bg-bg-surface text-text-primary px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform shadow-lg">
                    Launch Prototype <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary tracking-tight mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-text-secondary line-clamp-2">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
