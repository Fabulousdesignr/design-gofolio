import React from 'react';
import { CheckCircle, AlertTriangle, Lightbulb, Zap } from 'lucide-react';

export default function CaseStudyReflection({ data }) {
  if (!data.reflection) return null;
  const { accent } = data;

  const reflections = [
    { label: "What worked", key: "worked", icon: <CheckCircle size={18} /> },
    { label: "What surprised me", key: "surprised", icon: <AlertTriangle size={18} /> },
    { label: "What I learned", key: "learned", icon: <Lightbulb size={18} /> },
    { label: "What I would improve", key: "improve", icon: <Zap size={18} /> },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {reflections.map((item, idx) => {
        if (!data.reflection[item.key]) return null;
        return (
          <div 
            key={item.key}
            className="p-6 rounded-2xl border border-card-border bg-bg-alt/40 scroll-reveal fade-up flex flex-col"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            <div className={`flex items-center gap-2 font-bold text-sm uppercase tracking-widest ${accent.text} mb-4`}>
              {item.icon} {item.label}
            </div>
            <p className="text-text-secondary text-sm leading-relaxed flex-1">
              {data.reflection[item.key]}
            </p>
          </div>
        );
      })}
    </div>
  );
}
