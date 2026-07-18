import React, { useState, useEffect, useRef } from 'react';

const experiences = [
  {
    year: '2024 → Present',
    company: 'Shyne / Karatek Solutions',
    role: 'Co-Founder & Growth Product Manager',
    desc: 'Own the product strategy and roadmap for Shyne, an AI-powered portfolio platform built for African creatives. Led customer discovery through structured interviews and market research to validate user problems and shape the MVP. Prioritized onboarding and activation features, designed monetization loops, and worked closely with engineers to ship iterative updates. Created a scalable design system that cut development handoff time significantly.',
    tags: ['Product Strategy', 'Customer Discovery', 'Roadmapping', 'AI Products'],
  },
  {
    year: '2022 → Present',
    company: 'Independent Product Work',
    role: 'Product Manager & Designer',
    desc: 'Manage strategy and execution for multiple AI, fintech, and SaaS products from discovery through MVP delivery. Define customer workflows, feature priorities, and roadmaps across B2B and consumer contexts. Build rapid prototypes to validate assumptions before engineering investment. Partner with developers to translate business goals into shipped software.',
    tags: ['SaaS', 'Fintech', 'Prototyping', 'Validation'],
  },
  {
    year: '2018 → 2022',
    company: 'Mr Fabulous Skill Acquisition',
    role: 'Founder & Lead Design Mentor',
    desc: 'Founded a design education program that mentored over 500 aspiring designers in visual hierarchy, information architecture, and product flows. Built the visual and product thinking foundations that now power my PM execution — using high-fidelity communication to eliminate ambiguity between product and engineering.',
    tags: ['Leadership', 'Education', 'Mentorship', '500+ Learners'],
  },
];

function ExperienceEntry({ exp, index, activeIndex, onClick }) {
  const isActive = index === activeIndex;
  const isPast = index < activeIndex;
  const entryRef = useRef(null);

  return (
    <div
      ref={entryRef}
      onClick={() => onClick(index)}
      className={`relative pl-8 md:pl-12 cursor-pointer transition-all duration-500 ${
        isActive ? 'pb-10' : 'pb-6'
      }`}
    >
      {/* Timeline rail dot */}
      <div
        className={`absolute left-0 top-[6px] w-3 h-3 rounded-full border-2 transition-all duration-500 z-10 ${
          isActive
            ? 'bg-accent-orange border-accent-orange shadow-[0_0_12px_rgba(255,122,26,0.5)] scale-125'
            : isPast
            ? 'bg-accent-orange/40 border-accent-orange/40'
            : 'bg-bg-primary border-card-border'
        }`}
      />

      {/* Year */}
      <span
        className={`font-mono text-[11px] font-bold tracking-widest uppercase block mb-2 transition-colors duration-300 ${
          isActive ? 'text-accent-orange' : 'text-text-secondary/50'
        }`}
      >
        {exp.year}
      </span>

      {/* Company + Role — always visible */}
      <h3
        className={`font-bold tracking-tight transition-all duration-300 ${
          isActive
            ? 'text-text-primary text-2xl md:text-3xl mb-1'
            : 'text-text-secondary text-xl md:text-2xl mb-0 hover:text-text-primary'
        }`}
      >
        {exp.company}
      </h3>

      <p
        className={`font-medium transition-all duration-300 ${
          isActive ? 'text-accent-orange text-sm mb-5' : 'text-text-secondary/60 text-xs'
        }`}
      >
        {exp.role}
      </p>

      {/* Description — only when active */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isActive ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-text-secondary leading-[1.75] text-[15px] md:text-[16px] mb-5">
          {exp.desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full border border-card-border bg-bg-primary text-[11px] font-semibold text-text-secondary tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function EditorialExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  // Animate the rail line height based on active entry
  const railPercent = activeIndex === 0 ? 0 : activeIndex === 1 ? 48 : 90;

  useEffect(() => {
    // Auto-advance on scroll within section
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveIndex(0);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 md:py-32 bg-bg-primary border-t border-card-border relative z-30"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24 scroll-reveal fade-up">
          <span className="text-accent-orange text-[13px] font-bold tracking-widest uppercase mb-4 block">Timeline</span>
          <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-[1.0] text-text-primary tracking-tight mb-6">
            Experience
          </h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
            A product management career built on shipping real software and learning from real users.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left — Timeline */}
          <div className="w-full lg:w-[55%] relative">
            {/* Rail line */}
            <div className="absolute left-[5px] top-2 bottom-2 w-px bg-card-border" />
            {/* Animated progress fill */}
            <div
              className="absolute left-[5px] top-2 w-px bg-accent-orange transition-all duration-700 ease-out"
              style={{ height: `${railPercent}%` }}
            />

            <div className="flex flex-col">
              {experiences.map((exp, idx) => (
                <ExperienceEntry
                  key={idx}
                  exp={exp}
                  index={idx}
                  activeIndex={activeIndex}
                  onClick={setActiveIndex}
                />
              ))}
            </div>
          </div>

          {/* Right — Sticky summary callout */}
          <div className="w-full lg:w-[45%] lg:sticky lg:top-32 self-start">
            <div className="bg-bg-surface border border-card-border rounded-3xl p-8 md:p-10 transition-all duration-500">
              <span className="text-[11px] font-bold text-accent-orange tracking-widest uppercase block mb-4">
                Currently
              </span>
              <h3 className="text-2xl font-bold text-text-primary tracking-tight mb-3">
                {experiences[activeIndex].company}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {experiences[activeIndex].role}
              </p>
              <div className="w-full h-px bg-card-border mb-6" />
              <p className="text-[13px] font-mono text-accent-orange tracking-widest uppercase">
                {experiences[activeIndex].year}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
