import React from 'react';

export default function EditorialAbout() {
  const playbook = [
    {
      num: "01.",
      title: "Systems Design",
      desc: "I don't just build screens; I engineer scalable design foundations. From atomic tokens to complex routing logic, I structure products to grow without breaking."
    },
    {
      num: "02.",
      title: "AI Execution",
      desc: "I leverage LLMs and advanced agentic workflows to radically accelerate the prototyping phase. What used to take weeks now takes days, moving from idea to live prototype instantly."
    },
    {
      num: "03.",
      title: "UX Strategy",
      desc: "I strip away the enterprise bloat. My focus is on intentional friction, deep user psychology, and crafting flows that feel frictionless, intuitive, and genuinely delightful."
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-bg-surface border-t border-card-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24 scroll-reveal fade-up">
          <h2 className="edit-title-section text-text-primary mb-6">The Playbook</h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
            Building software is a messy process. I rely on a strict set of principles to navigate from absolute zero to a shipped product.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {playbook.map((item, idx) => (
            <div key={idx} className="scroll-reveal fade-up" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="flex flex-col gap-3 group">
                <span className="text-sm font-serif text-accent-orange italic">{item.num}</span>
                <h3 className="text-xl font-bold text-text-primary tracking-tight">{item.title}</h3>
              </div>
              <p className="text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
