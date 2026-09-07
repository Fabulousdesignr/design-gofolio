import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { useContactModal } from '../../context/ContactModalContext';

export default function Hero() {
  const { openModal } = useContactModal();

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden border-b border-white/[0.06]">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center">
          <div>
            {/* Status & PM Switcher Pill */}
            <div className="flex flex-wrap items-center gap-2.5 mb-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.04] border border-white/[0.08] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for new projects
              </div>

              <a
                href="https://gofolio.site"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 hover:bg-indigo-500/20 rounded-full transition-all"
              >
                Switch to PM Portfolio <ArrowUpRight size={13} />
              </a>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              I design digital products that simplify complex workflows.
            </h1>

            {/* Value Proposition Subtitle */}
            <p className="text-lg sm:text-xl text-white/60 font-normal leading-relaxed mb-10 max-w-xl">
              Product Designer with nearly a decade of experience crafting AI SaaS platforms, fintech solutions, and high-converting Shopify storefronts.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all shadow-lg shadow-white/5 cursor-pointer"
              >
                View Selected Work <ArrowDown size={15} />
              </a>

              <button
                onClick={openModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] rounded-full transition-all cursor-pointer"
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* Profile Media Box */}
          <div className="relative max-w-md mx-auto lg:max-w-none w-full">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.1] bg-white/[0.02] shadow-2xl group">
              <img
                src="/images/My Image.png"
                alt="Godwin O. — Senior Product Designer"
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-zinc-900/80 backdrop-blur-md border border-white/[0.1]">
                <div className="text-xs font-semibold text-white tracking-wide uppercase mb-0.5">Godwin O.</div>
                <div className="text-xs text-white/60">Product Designer · UX/UI · Gaming · AI Tools</div>
              </div>
            </div>
          </div>
        </div>

        {/* Ticker / Capabilities Strip */}
        <div className="mt-20 pt-8 border-t border-white/[0.06] flex flex-wrap justify-between items-center gap-6 text-xs text-white/40 font-medium">
          <span className="uppercase tracking-wider font-semibold text-white/30">Core Capabilities</span>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-white/60">
            <span>SaaS Platforms</span>
            <span>·</span>
            <span>Gaming Products</span>
            <span>·</span>
            <span>Fintech UX</span>
            <span>·</span>
            <span>AI Product Workflows</span>
            <span>·</span>
            <span>Shopify &amp; CRO</span>
            <span>·</span>
            <span>Design Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}
