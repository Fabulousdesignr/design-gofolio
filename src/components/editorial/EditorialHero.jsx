import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';

export default function EditorialHero() {
  const { openModal } = useContactModal();

  return (
    <section className="relative w-full pt-20 pb-16 lg:pt-28 lg:pb-32 overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[85vh] max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="w-full md:w-[50%] relative z-20 flex flex-col items-start mt-8 md:mt-0 scroll-reveal fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-card-border bg-card shadow-sm mb-6 md:mb-8 hover:shadow-md transition-shadow">
          <div className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse shadow-[0_0_8px_rgba(255,122,26,0.5)]"></div>
          <span className="text-[12px] font-bold text-text-secondary tracking-widest uppercase">Available for collaboration</span>
        </div>

        <h1 className="font-serif text-[56px] md:text-[80px] lg:text-[100px] leading-[0.95] text-text-primary tracking-tight mb-8">
          Designing<br />
          products and <em className="text-accent-orange font-serif italic pr-2">Shopify</em><br />
          stores.
        </h1>

        <div className="flex flex-col gap-8 max-w-lg">
          <p className="text-[17px] md:text-[19px] text-text-secondary leading-[1.6]">
            I'm a Product Designer & Shopify Developer helping founders, startups, and ecommerce brands turn product thinking into polished websites, stores, landing pages, and digital experiences that convert.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button onClick={openModal} className="bg-bg-inverse text-text-inverse px-8 py-4 rounded-full text-[15px] font-medium hover:bg-accent-orange hover:shadow-[0_4px_20px_rgba(255,122,26,0.3)] transition-all flex items-center gap-2 group transform hover:scale-[1.02]">
              Start a Store or Product <ArrowRight size={16} className="text-accent-orange group-hover:translate-x-1 group-hover:text-text-inverse transition-all" />
            </button>
            <a href="#products" className="px-6 py-4 rounded-full border border-card-border bg-transparent text-text-secondary hover:text-accent-orange hover:border-accent-orange/40 text-[15px] font-medium transition-all">
              View My Work
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-4 pt-6 border-t border-card-border w-full">
            <span className="text-sm font-semibold text-text-secondary tracking-wide uppercase">Product Design</span>
            <span className="w-1 h-1 rounded-full bg-card-border"></span>
            <span className="text-sm font-semibold text-text-secondary tracking-wide uppercase">Shopify & Ecommerce</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[45%] h-[500px] md:h-[750px] relative z-10 flex flex-col items-center justify-end mt-12 md:mt-0 group scroll-reveal fade-up" style={{ transitionDelay: '200ms' }}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#FF7A1A]/5 to-[#E8E6DF]/30 rounded-[2.5rem] border border-[#FF7A1A]/10 shadow-[0_8px_40px_rgba(0,0,0,0.03)] transition-transform duration-700 group-hover:scale-[1.01] overflow-hidden flex items-end justify-center">
          <img
            src="/images/My Image.png"
            alt="Godwin - Product Designer and Shopify Developer"
            className="w-full h-full object-cover object-bottom mix-blend-multiply opacity-95 transition-transform duration-1000 group-hover:scale-[1.03]"
            style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
          />
        </div>

        <div className="absolute top-4 left-4 md:top-[12%] md:-left-[5%] bg-card/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg border border-card-border z-20 hover:-translate-y-1 transition-transform duration-300">
          <span className="text-[12px] md:text-[14px] font-bold text-text-primary tracking-wide">ECOMMERCE UX</span>
        </div>

        <div className="absolute top-1/3 right-4 md:top-[45%] md:-right-[5%] bg-card/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg border border-card-border z-20 hover:-translate-y-1 transition-transform duration-300">
          <span className="text-[12px] md:text-[14px] font-bold text-text-primary tracking-wide">AI WORKFLOWS</span>
        </div>

        <div className="absolute bottom-12 left-4 md:bottom-[20%] md:-left-[10%] bg-card/90 backdrop-blur-md rounded-lg px-4 py-2 shadow-lg border border-card-border z-20 hover:-translate-y-1 transition-transform duration-300">
          <span className="text-[10px] md:text-[12px] font-bold text-text-primary tracking-widest uppercase">Product Designer + Shopify Developer</span>
        </div>
      </div>
    </section>
  );
}
