import React, { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 10, suffix: '+', label: 'Years building digital products' },
  { value: 4,  suffix: '+', label: 'Years in product design & strategy' },
  { value: 20, suffix: '+', label: 'Product concepts & MVPs shipped' },
  { value: 500, suffix: '+', label: 'Creatives mentored' },
];

const domains = ['AI', 'Fintech', 'SaaS', 'Ecommerce'];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;
    const duration = 1200;
    const steps = 40;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [active, target]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function ProductImpact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-20 bg-bg-primary border-t border-card-border relative z-30 overflow-hidden"
    >
      {/* Subtle bg glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[500px] h-[200px] bg-accent-orange/4 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-10 md:mb-12">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-2"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(16px)',
                transition: `opacity 0.5s ease ${idx * 100}ms, transform 0.5s ease ${idx * 100}ms`,
              }}
            >
              <span className="font-serif text-[52px] md:text-[64px] lg:text-[80px] leading-[1] font-bold text-text-primary tracking-tight">
                <CountUp target={stat.value} suffix={stat.suffix} active={visible} />
              </span>
              <span className="text-sm md:text-base text-text-secondary font-medium leading-snug max-w-[160px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Domain divider */}
        <div
          className="flex flex-wrap items-center gap-3 pt-8 border-t border-card-border"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.5s ease 500ms',
          }}
        >
          <span className="text-[11px] font-bold text-text-secondary/60 tracking-widest uppercase mr-2">
            Domains
          </span>
          {domains.map((d, i) => (
            <React.Fragment key={d}>
              <span className="text-sm font-semibold text-text-primary tracking-wide">{d}</span>
              {i < domains.length - 1 && (
                <span className="w-1 h-1 rounded-full bg-accent-orange inline-block" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
