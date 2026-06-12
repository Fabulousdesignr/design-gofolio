import React from 'react';
import ProductFrame from './ProductFrame';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudyHero({ data }) {
  return (
    <div className="w-full">
      {/* Title & Summary */}
      <div className="text-center md:text-left mb-16 scroll-reveal fade-up">
        <h1 className="edit-title-cs text-text-primary mb-8 max-w-5xl mx-auto md:mx-0">
          {data.title}
        </h1>
        <p className="text-xl md:text-2xl text-text-secondary font-medium leading-relaxed max-w-[65ch] mx-auto md:mx-0">
          {data.summary}
        </p>
      </div>

      {/* Meta Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 py-10 border-y border-card-border mb-16 scroll-reveal fade-up">
        {data.meta?.map((item) => (
          <div key={item.label}>
            <span className="font-mono text-xs font-bold text-text-secondary tracking-widest uppercase block mb-2">{item.label}</span>
            <span className="font-semibold text-text-primary text-lg">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Live Link (Optional) */}
      {data.liveUrl && (
        <div className="mb-16 scroll-reveal fade-up">
          <a
            href={data.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="edit-button edit-button-primary"
          >
            Launch Project <ArrowUpRight size={18} className="ml-2" />
          </a>
        </div>
      )}

      {/* Hero Media (Massive Edge-to-Edge) */}
      <div className="w-full md:w-[calc(100%+3rem)] md:-ml-6 lg:w-[calc(100%+6rem)] lg:-ml-12 aspect-video md:aspect-[16/9] bg-bg-surface overflow-hidden md:rounded-2xl border-y md:border border-card-border shadow-md scroll-reveal fade-up">
        <ProductFrame
          src={data.heroMedia}
          fallback={data.heroMedia}
          alt={`${data.title} preview`}
          label={data.title}
          className="w-full h-full border-none shadow-none rounded-none"
        />
      </div>
    </div>
  );
}
