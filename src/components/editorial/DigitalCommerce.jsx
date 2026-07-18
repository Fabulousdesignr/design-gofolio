import React from 'react';
import { projects } from '../../data/projects';

export default function DigitalCommerce() {
  const shopifyWork = projects.find(p => p.id === 'maxmall');
  if (!shopifyWork) return null;

  return (
    <section id="shopify" className="py-16 md:py-20 bg-bg-primary border-t border-card-border relative z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center scroll-reveal fade-up">
          {/* Text */}
          <div className="w-full lg:w-[55%]">
            <span className="text-[11px] font-bold text-text-secondary/50 tracking-widest uppercase block mb-3">Prior Work</span>
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight mb-4">
              Digital Commerce Projects
            </h2>
            <p className="text-text-secondary text-base leading-[1.75] max-w-xl">
              Before moving into product management, I worked with ecommerce businesses designing and optimizing Shopify experiences that improved usability and conversions.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {['Shopify', 'Conversion Optimization', 'UX Audits', 'Landing Pages'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full border border-card-border text-text-secondary text-[11px] font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image — subdued */}
          <div className="w-full lg:w-[45%] aspect-[4/3] rounded-2xl overflow-hidden border border-card-border bg-bg-surface opacity-70 hover:opacity-90 transition-opacity duration-300">
            <img
              src={shopifyWork.image}
              alt="Shopify ecommerce work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
