export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Immersing myself in your world to understand your business goals, target audience, and pain points."
    },
    {
      num: "02",
      title: "Strategy",
      desc: "Defining the problem and mapping out the user journey to ensure every decision is purpose-driven."
    },
    {
      num: "03",
      title: "Design",
      desc: "Bringing ideas to life through rapid prototyping and high-fidelity interfaces that feel seamless."
    },
    {
      num: "04",
      title: "Validation",
      desc: "Testing solutions with real users to refine interactions and ensure the product delivers on its promise."
    }
  ];

  return (
    <section className="section-padding py-24 section-dark border-y border-card-border">
      <div className="container-custom">
        <div className="flex flex-col items-start mb-16 scroll-reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary uppercase">
            How I Work
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="process-card p-8 bg-card border border-card-border rounded-2xl hover:border-accent transition-colors group scroll-reveal fade-up" style={{ transitionDelay: `${index * 100}ms` }}>
              <span className="block text-5xl font-black text-bg-alt group-hover:text-accent/10 transition-colors mb-6 leading-none">
                {step.num}
              </span>
              <h3 className="text-xl font-black text-text-primary mb-4 uppercase tracking-tight">{step.title}</h3>
              <p className="text-text-secondary leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
