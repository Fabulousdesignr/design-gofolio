export default function EditorialAbout() {
  const playbook = [
    {
      num: "01.",
      title: "Customer Discovery",
      desc: "I ground all roadmap planning in real customer discovery. By conducting structured user interviews and competitive analysis, I identify high-value problems and define clear product hypotheses before development."
    },
    {
      num: "02.",
      title: "AI-Native Velocity",
      desc: "I use AI tools to radically accelerate the discovery and specification phases. I leverage LLMs to synthesize competitor data, draft clear PRDs, and build functional prototypes, compressing validation loops from weeks to days."
    },
    {
      num: "03.",
      title: "Visual Alignment",
      desc: "My design background is a communication superpower. I bridge product requirements and engineering by designing interactive prototypes and scalable systems, ensuring developers build with zero layout ambiguity."
    }
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-bg-surface border-t border-card-border relative z-30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16 md:mb-24 scroll-reveal fade-up">
          <span className="text-accent-orange text-[13px] font-bold tracking-widest uppercase mb-4 block">Playbook</span>
          <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-[1.0] text-text-primary tracking-tight mb-6">My Principles</h2>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
            I am a Growth Product Manager who leverages a product design background to validate concepts faster, communicate requirements visually, and ship software with high velocity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {playbook.map((item, idx) => (
            <div key={idx} className="scroll-reveal fade-up" style={{ transitionDelay: `${idx * 150}ms` }}>
              <div className="flex flex-col gap-3 group mb-4">
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
