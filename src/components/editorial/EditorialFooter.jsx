import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';

export default function EditorialFooter() {
  const { openModal } = useContactModal();
  return (
    <footer id="contact" className="bg-bg-primary text-text-primary pt-16 pb-12 overflow-hidden border-t border-card-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-center text-center scroll-reveal fade-up">
        
        <p className="font-mono text-sm uppercase tracking-widest text-text-secondary mb-6">
          Collaboration
        </p>

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight mb-12 max-w-4xl leading-[1.05]">
          Let's build your next venture.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-20">
          <button onClick={openModal} className="bg-text-primary text-bg-primary font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-accent-orange transition-colors">
            Message Me <ArrowUpRight size={18} />
          </button>
          <a href="https://wa.me/2349157826355" target="_blank" rel="noopener noreferrer" className="bg-transparent border border-card-border text-text-primary font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:border-text-primary transition-colors">
            WhatsApp <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-card-border text-sm text-text-secondary font-medium">
          <p>© {new Date().getFullYear()} Godwin. All rights reserved.</p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="https://x.com/fabulousdesignr" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">Twitter</a>
            <a href="https://www.linkedin.com/in/godwinokechukwu/" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
            <a href="https://www.behance.net/fabianokechukwu" target="_blank" rel="noopener noreferrer" className="hover:text-text-primary transition-colors">Behance</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
