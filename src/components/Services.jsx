import { Layout, Smartphone, PenTool, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Layout className="text-accent" size={32} />,
      title: "Product Thinking & Structure",
      desc: "Helping early-stage ideas become clear, structured products through user flows, feature definition, and experience planning."
    },
    {
      icon: <Smartphone className="text-accent" size={32} />,
      title: "UX & Interaction Design",
      desc: "Designing intuitive user flows and interfaces that reduce friction and make complex actions feel simple."
    },
    {
      icon: <PenTool className="text-accent" size={32} />,
      title: "Brand Identity & Visual Systems",
      desc: "Creating cohesive brand identities and visual systems that ensure consistency across product and marketing touchpoints."
    },
    {
      icon: <Zap className="text-accent" size={32} />,
      title: "Prototyping & Validation",
      desc: "Building high-fidelity interactive prototypes to test ideas, validate assumptions, and improve decision-making before development."
    }
  ];

  return (
    <section id="services" className="py-24">
      <div className="container-custom">
        <div className="flex flex-col items-start mb-16 scroll-reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
            Offerings
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary uppercase">
            Services
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-10 bg-bg-alt border border-card-border rounded-[32px] hover:shadow-xl hover:-translate-y-1 transition-all group scroll-reveal fade-up" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="mb-8 p-4 bg-bg-primary inline-flex rounded-2xl group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                {service.icon}
              </div>
              <h3 className="text-xl font-black text-text-primary mb-4 uppercase tracking-tight">{service.title}</h3>
              <p className="text-text-secondary leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
