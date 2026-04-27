import { Download, Mail, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-32 bg-bg-primary text-center">
      <div className="container-custom max-w-4xl scroll-reveal">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-text-primary mb-12 uppercase">
          Let's build <br className="hidden md:block" />
          something amazing.
        </h2>
        
        <div className="flex flex-wrap gap-6 justify-center items-center">
          <a 
            href="/cv.pdf" 
            download
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-accent/20"
          >
            <Download size={22} /> Download CV
          </a>
          <a 
            href="https://wa.me/2349157826355?text=Hi%20Godwin%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20connect%20with%20you." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-bg-alt border border-card-border hover:border-[#25D366] text-text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
          >
            <MessageCircle size={22} /> WhatsApp
          </a>
          <a 
            href="mailto:fabianokechukwu6@gmail.com?subject=Portfolio%20Inquiry" 
            className="inline-flex items-center gap-3 bg-bg-alt border border-card-border hover:border-accent text-text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
          >
            <Mail size={22} /> Email
          </a>
        </div>
      </div>
    </section>
  );
}
