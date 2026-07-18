import React, { useEffect, useRef, useState } from 'react';

const journey = [
  {
    year: '2018',
    headline: 'Started Teaching.',
    title: 'Mr Fabulous Skill Acquisition',
    role: 'Founder & Lead Mentor',
    desc: 'Founded a design skill academy dedicated to helping aspiring graphic and product designers break into tech. Built curriculum from scratch and taught hands-on cohorts, giving learners the practical foundation to build real portfolios.',
  },
  {
    year: '2020',
    headline: 'Scaled the Community.',
    title: 'Nupetech Community',
    role: 'Product Design Facilitator',
    desc: 'Planned and facilitated virtual design training sessions for Nupetech Community. Led workshops on product flows, UI layouts, and design systems for aspiring tech professionals navigating their first product design roles.',
  },
  {
    year: '2022',
    headline: '500+ Designers Mentored.',
    title: '1-on-1 Career Mentorship',
    role: 'Product & Design Mentor',
    desc: 'Expanded mentorship beyond cohorts into personalized career guidance for over 500 learners and career switchers across virtual and in-person programs — helping them map trajectories, structure portfolios, and land roles in product design.',
  },
  {
    year: '2025',
    headline: 'Back in the Room.',
    title: 'Kuagi Workshop',
    role: 'In-Person Workshop Lead',
    desc: 'Delivered an interactive, hands-on product design and strategy workshop for local professionals. Covered user research frameworks, prototype validation, and product thinking — making abstract PM concepts tangible for beginners.',
  },
];

export default function TeachingCommunity() {
  const itemRefs = useRef([]);
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observers = itemRefs.current.map((el, idx) => {
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, idx]));
          }
        },
        { threshold: 0.25 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <section id="teaching" className="py-24 md:py-32 bg-bg-surface border-t border-card-border relative z-30 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-28 scroll-reveal fade-up">
          <span className="text-accent-orange text-[13px] font-bold tracking-widest uppercase mb-4 block">Mentorship</span>
          <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-[1.0] text-text-primary tracking-tight mb-6">
            Teaching &amp; Community
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
            Mentoring others is a core part of my leadership style. Seven years of teaching, training, and community building.
          </p>
        </div>

        {/* Journey timeline */}
        <div className="relative">
          {/* Vertical rail */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-card-border hidden md:block" />

          <div className="flex flex-col gap-0">
            {journey.map((item, idx) => {
              const isVisible = visibleItems.has(idx);
              return (
                <div
                  key={idx}
                  ref={el => itemRefs.current[idx] = el}
                  className="relative md:pl-16 pb-16 md:pb-20 last:pb-0"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-24px)',
                    transition: `opacity 0.6s ease ${idx * 120}ms, transform 0.6s ease ${idx * 120}ms`,
                  }}
                >
                  {/* Rail dot */}
                  <div
                    className={`hidden md:block absolute left-[-5px] top-3 w-[11px] h-[11px] rounded-full border-2 transition-all duration-500 ${
                      isVisible
                        ? 'bg-accent-orange border-accent-orange shadow-[0_0_10px_rgba(255,122,26,0.4)]'
                        : 'bg-bg-surface border-card-border'
                    }`}
                  />

                  {/* Year — large typographic anchor */}
                  <div className="flex items-baseline gap-5 mb-4">
                    <span className="font-serif text-[64px] md:text-[96px] lg:text-[120px] leading-[1] font-bold text-text-primary/10 select-none tracking-tight">
                      {item.year}
                    </span>
                    <span className="text-[15px] md:text-[17px] font-bold text-accent-orange tracking-wide leading-tight">
                      {item.headline}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="max-w-2xl">
                    <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <span className="text-xs font-bold text-accent-orange tracking-widest uppercase block mb-4">
                      {item.role}
                    </span>
                    <p className="text-text-secondary leading-[1.75] text-[15px] md:text-[16px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Final stat callout */}
          <div
            className="mt-8 md:mt-12 md:pl-16 scroll-reveal fade-up"
          >
            <div className="inline-flex items-center gap-4 bg-bg-primary border border-card-border rounded-2xl px-8 py-5">
              <span className="font-serif text-[40px] md:text-[48px] font-bold text-accent-orange leading-none">500+</span>
              <div>
                <p className="text-text-primary font-bold text-base">creatives trained</p>
                <p className="text-text-secondary text-sm">across virtual & in-person programs</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
