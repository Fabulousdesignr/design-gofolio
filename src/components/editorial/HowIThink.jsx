import React from 'react';
import { Link } from 'react-router-dom';

const principles = [
  {
    num: '01',
    title: 'Customer Discovery',
    body: "I don't start with features. I start by understanding what users are trying to accomplish, where they're getting stuck, and why existing solutions fail them. Every product decision begins with the problem, not the interface.",
    projects: [
      { label: 'Shyne', id: 'shyne' },
      { label: 'MoneyLink', id: 'moneylink' },
      { label: 'ApplyFlow', id: 'applyflow' },
    ],
  },
  {
    num: '02',
    title: 'Prioritization',
    body: "I prioritize opportunities based on user impact, business value, and implementation effort. My goal isn't shipping more features — it's shipping the right ones that move both customer outcomes and company goals forward.",
    projects: [
      { label: 'ApplyFlow', id: 'applyflow' },
      { label: 'Shyne', id: 'shyne' },
    ],
  },
  {
    num: '03',
    title: 'Experimentation',
    body: "Rather than assuming a solution is correct, I validate ideas early through prototypes, user feedback, and small experiments before investing engineering resources. Speed of learning matters more than speed of shipping.",
    projects: [
      { label: 'AdSight', id: 'adsight' },
      { label: 'Rivalens', id: 'rivalens' },
      { label: 'Shyne', id: 'shyne' },
    ],
  },
  {
    num: '04',
    title: 'AI Products',
    body: "I see AI as an enabler, not the product itself. The value comes from reducing manual work, improving decisions, and helping users accomplish tasks faster with confidence. If users don't feel the difference, the AI feature failed.",
    projects: [
      { label: 'AdSight', id: 'adsight' },
      { label: 'Rivalens', id: 'rivalens' },
      { label: 'ApplyFlow', id: 'applyflow' },
    ],
  },
];

export default function HowIThink() {
  return (
    <section id="thinking" className="py-24 md:py-32 bg-bg-surface border-t border-card-border relative z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24 scroll-reveal fade-up">
          <span className="text-accent-orange text-[13px] font-bold tracking-widest uppercase mb-4 block">Product Thinking</span>
          <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-[1.0] text-text-primary tracking-tight mb-6">
            How I Think
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
            The principles that drive every product decision I make — in my own words.
          </p>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-card-border rounded-3xl overflow-hidden border border-card-border">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="bg-bg-surface p-10 md:p-12 flex flex-col gap-6 hover:bg-bg-primary transition-colors duration-300 scroll-reveal fade-up group"
              style={{ transitionDelay: `${idx * 80}ms` }}
            >
              {/* Number + Title */}
              <div>
                <span className="font-mono text-[11px] font-bold text-accent-orange tracking-widest uppercase block mb-3">
                  {item.num}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                  {item.title}
                </h3>
              </div>

              {/* Body — personal voice */}
              <p className="text-text-secondary leading-[1.75] text-[16px] flex-1">
                {item.body}
              </p>

              {/* Project chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.projects.map((proj) => (
                  <Link
                    key={proj.id}
                    to={`/case-study/${proj.id}`}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full border border-card-border bg-bg-primary text-[12px] font-semibold text-text-secondary hover:border-accent-orange hover:text-accent-orange transition-all duration-200"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent-orange/60 inline-block"></span>
                    {proj.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
