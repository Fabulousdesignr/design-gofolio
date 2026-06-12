import React from 'react';
import ProductFrame from './ProductFrame';

export default function CaseStudyDecisions({ data }) {
  if (!data.decisions || data.decisions.length === 0) return null;
  const { accent } = data;

  return (
    <div className="space-y-24">
      {data.decisions.map((decision, idx) => (
        <div
          key={idx}
          className="scroll-reveal fade-up"
          style={{ transitionDelay: `${Math.min(idx, 2) * 120}ms` }}
        >
          {/* Decision Media */}
          {decision.image && (
            <div className="cs-media-frame group mb-10">
              <ProductFrame
                src={decision.image}
                fallback={decision.image}
                alt={decision.title}
                label={decision.title}
                className="w-full shadow-lg"
              />
            </div>
          )}
          
          {/* Decision Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <h3 className="text-section-title font-black text-text-primary tracking-tight">
                {decision.title}
              </h3>
            </div>
            <div className="md:col-span-8 grid grid-cols-1 gap-6">
              <div className="p-5 rounded-xl border border-card-border bg-bg-alt/30">
                <span className={`text-xs font-bold uppercase tracking-widest ${accent.text} mb-2 block`}>What I Did</span>
                <p className="text-sm text-text-secondary leading-relaxed">{decision.what}</p>
              </div>
              <div className="p-5 rounded-xl border border-card-border bg-bg-alt/30">
                <span className={`text-xs font-bold uppercase tracking-widest ${accent.text} mb-2 block`}>Why I Did It</span>
                <p className="text-sm text-text-secondary leading-relaxed">{decision.why}</p>
              </div>
              <div className="p-5 rounded-xl border border-card-border bg-bg-alt/30">
                <span className={`text-xs font-bold uppercase tracking-widest ${accent.text} mb-2 block`}>The Result</span>
                <p className="text-sm text-text-secondary leading-relaxed">{decision.result}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
