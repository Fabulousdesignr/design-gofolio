import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CaseStudyTimeline({ data }) {
  if (!data.approach || data.approach.length === 0) return null;
  const { accent } = data;

  return (
    <div className="relative">
      {/* Horizontal on Desktop, Vertical on Mobile */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-4 relative">
        {data.approach.map((step, idx) => (
          <div 
            key={idx} 
            className="flex-1 relative scroll-reveal fade-up flex flex-col md:block"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Step header */}
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 border-bg-primary ${accent.bg} ${accent.text} text-[0.65rem] font-bold z-10 relative shadow-md`}>
                {idx + 1}
              </div>
              <h3 className="font-bold text-text-primary text-sm tracking-tight m-0">
                {step.phase}
              </h3>
            </div>
            
            {/* Connecting Line (Desktop) */}
            {idx < data.approach.length - 1 && (
              <div className="hidden md:block absolute top-3 left-6 w-[calc(100%-1.5rem)] h-[2px] bg-card-border -z-10" />
            )}

            {/* Connecting Line (Mobile) */}
            {idx < data.approach.length - 1 && (
              <div className="md:hidden absolute top-6 left-3 w-[2px] h-[calc(100%+0.5rem)] bg-card-border -z-10" />
            )}

            {/* Content */}
            <div className="pl-9 md:pl-0">
              <p className="text-xs text-text-secondary leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
