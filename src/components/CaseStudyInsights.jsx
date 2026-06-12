import React from 'react';

export default function CaseStudyInsights({ data }) {
  if (!data.insights || data.insights.length === 0) return null;
  const { accent } = data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {data.insights.map((insight, idx) => (
        <div
          key={idx}
          className="p-6 rounded-2xl border border-card-border bg-bg-alt/40 scroll-reveal fade-up"
          style={{ transitionDelay: `${idx * 100}ms` }}
        >
          <div
            className={`w-8 h-8 ${accent.bg} rounded-lg flex items-center justify-center font-mono font-bold text-xs mb-5 ${accent.text}`}
          >
            0{idx + 1}
          </div>
          <h3 className="font-bold text-text-primary text-base mb-2 tracking-tight">
            {insight.title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {insight.description}
          </p>
        </div>
      ))}
    </div>
  );
}
