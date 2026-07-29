import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';

export default function ContactSection() {
  const { openModal } = useContactModal();

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">
          Get In Touch
        </h2>

        <h3 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
          Ready to elevate your digital product experience?
        </h3>

        <p className="text-base sm:text-lg text-white/60 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
          Open for full-time Product Designer roles, contract project design, and strategic consultations. Let's discuss your goals.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={openModal}
            className="px-8 py-4 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all shadow-xl cursor-pointer"
          >
            Send a Message
          </button>

          <a
            href="https://wa.me/2349157826355?text=Hi%20Godwin%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-full transition-all"
          >
            <MessageCircle size={16} /> WhatsApp <ArrowUpRight size={14} />
          </a>

          <a
            href="mailto:fabianokechukwu6@gmail.com?subject=Product%20Design%20Inquiry"
            className="inline-flex items-center gap-2 px-6 py-4 text-sm font-semibold text-white/70 hover:text-white transition-all"
          >
            <Mail size={16} /> Email Direct
          </a>
        </div>
      </div>
    </section>
  );
}
