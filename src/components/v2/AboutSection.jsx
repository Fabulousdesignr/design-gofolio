import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
              About Godwin
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6">
              Designer who speaks the language of product strategy and code.
            </h3>

            <p className="text-base text-white/70 leading-relaxed mb-4">
              With nearly a decade of hands-on digital product experience, I bridge the gap between user needs, business goals, and engineering constraints.
            </p>

            <p className="text-base text-white/70 leading-relaxed mb-8">
              Whether building AI tools from zero to one, scaling fintech platforms, or optimizing high-volume Shopify stores for conversion, my goal is simple: deliver memorable products that solve real problems.
            </p>

            {/* Value checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Product Design & Strategy',
                'Design Systems & UI Kits',
                'Shopify Storefronts & CRO',
                'AI Interface Workflows',
                'Rapid Code Prototyping',
                'Cross-functional Leadership',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs font-medium text-white/80">
                  <CheckCircle2 size={15} className="text-indigo-400 shrink-0" />
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold text-zinc-950 bg-white hover:bg-zinc-200 rounded-full transition-all"
              >
                Read Full Story <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Quick Metrics / Bio Box */}
          <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col gap-6">
            <div className="pb-6 border-b border-white/[0.06]">
              <span className="text-4xl font-extrabold text-white tracking-tight">8+</span>
              <span className="text-xs text-white/50 block font-medium mt-1">Years of Product Experience</span>
            </div>

            <div className="pb-6 border-b border-white/[0.06]">
              <span className="text-4xl font-extrabold text-white tracking-tight">20+</span>
              <span className="text-xs text-white/50 block font-medium mt-1">Digital Products & Stores Shipped</span>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/40 block mb-2">Specializations</span>
              <p className="text-xs text-white/70 leading-relaxed">
                SaaS Workflows · Fintech UX · AI Products · Ecommerce & Shopify CRO · Mobile Native Apps
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
