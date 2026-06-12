import React from 'react';
import ProductFrame from './ProductFrame';

export default function CaseStudySolution({ data }) {
  if (!data.solution || data.solution.length === 0) return null;

  return (
    <div className="space-y-24">
      {data.solution.map((block, idx) => (
        <div key={idx} className="scroll-reveal fade-up">
          <div className="cs-media-frame group mb-8">
            <ProductFrame
              src={block.media}
              fallback={block.media}
              alt={`${block.title} feature block`}
              label={block.title}
              focused
              className="w-full shadow-2xl"
            />
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">
              {block.title}
            </h3>
            <p className="cs-section-intro">
              {block.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
