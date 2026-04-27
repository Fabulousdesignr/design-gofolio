import { showcaseItems } from '../data/showcase';

export default function UIShowcase() {
  // Duplicate for seamless loop
  const duplicatedItems = [...showcaseItems, ...showcaseItems];

  return (
    <section className="py-32 bg-bg-primary overflow-hidden">
      <div className="container-custom mb-20 scroll-reveal">
        <span className="text-sm font-bold uppercase tracking-widest text-accent mb-4 block">
          Showcase
        </span>
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary uppercase">
          UI Craftsmanship
        </h2>
      </div>

      {/* Mobile Carousel View */}
      <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 px-6 scroll-smooth no-scrollbar pb-8">
        {showcaseItems.map((item, idx) => (
          <div 
            key={idx} 
            className="min-w-[85%] snap-center aspect-[4/3] rounded-[24px] overflow-hidden border border-card-border shadow-lg bg-bg-alt"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Desktop Marquee View */}
      <div className="hidden md:block relative w-full overflow-hidden pause-on-hover marquee-mask">
        <div className="flex w-max animate-marquee-slow py-8">
          {duplicatedItems.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[400px] sm:w-[500px] md:w-[600px] aspect-[4/3] mx-6 rounded-[32px] overflow-hidden border border-card-border shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-bg-alt"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="container-custom mt-20 text-center scroll-reveal">
        <p className="text-sm md:text-base text-text-secondary font-medium italic mx-auto max-w-2xl leading-relaxed">
          High-fidelity interfaces focusing on micro-interactions and visual hierarchy.
        </p>
      </div>
    </section>
  );
}
