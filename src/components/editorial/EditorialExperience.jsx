import React from 'react';

export default function EditorialExperience() {
  const experiences = [
    {
      year: "2024 \u2192 Present",
      company: "Shyne",
      role: "Product Designer",
      desc: "Leading the end-to-end product design for a digital eyewear ecosystem. Focused on integrating AI virtual try-on, modernizing the e-commerce flow, and establishing a unified design system."
    },
    {
      year: "2023 \u2192 2024",
      company: "iQualex",
      role: "Founding Designer",
      desc: "Designed the 0 to 1 experience for iQualex Pay. Built the entire mobile application architecture, established the initial design system, and collaborated directly with engineering to ship the MVP."
    },
    {
      year: "2022 \u2192 2023",
      company: "Freelance",
      role: "UX/UI Designer",
      desc: "Partnered with early-stage startups to design landing pages, web applications, and mobile interfaces. Focused heavily on rapid prototyping and iterative feedback loops."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-primary border-t border-card-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24 scroll-reveal fade-up">
          <h2 className="edit-title-section text-text-primary mb-6">The Timeline</h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
            A brief history of execution.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {experiences.map((exp, idx) => (
            <div key={idx} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 scroll-reveal fade-up border-l-[3px] border-card-border pl-6 md:pl-8 py-2 relative">
              {/* Timeline Dot */}
              <div className="absolute left-[-21px] md:left-[-35px] top-2 w-3 h-3 rounded-full bg-accent-orange shadow-[0_0_10px_rgba(255,122,26,0.3)]" />
              
              <div className="w-full md:w-[20%] shrink-0">
                <span className="font-mono text-sm font-bold text-text-secondary tracking-widest uppercase">
                  {exp.year}
                </span>
              </div>
              
              <div className="w-full md:w-[30%] shrink-0">
                <h3 className="text-2xl font-bold text-text-primary tracking-tight mb-1">{exp.company}</h3>
                <p className="text-text-secondary font-medium">{exp.role}</p>
              </div>

              <div className="w-full flex-1">
                <p className="text-text-secondary leading-relaxed max-w-2xl">
                  {exp.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
