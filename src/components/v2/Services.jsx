import { Globe, ShoppingBag, Layers } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Website & Landing Page Design',
    description: 'Clear, high-impact websites and launch pages that explain what a product does and give visitors a reason to act.',
    highlights: ['Landing Pages', 'Marketing Websites', 'Responsive Design', 'Visual Design'],
  },
  {
    icon: Layers,
    title: 'Digital Product & UI Design',
    description: 'Interfaces for SaaS, AI, fintech and mobile products, from first flows to polished, system-driven screens in Figma.',
    highlights: ['SaaS & AI Interfaces', 'Fintech & Mobile UI', 'Design Systems', 'Prototyping'],
  },
  {
    icon: ShoppingBag,
    title: 'Ecommerce & Shopify Storefronts',
    description: 'Storefronts built for product discovery, checkout speed and clear catalog navigation.',
    highlights: ['Storefront Design', 'Product Pages', 'Mobile Checkout UX', 'Catalog Navigation'],
  },
];

export default function Services() {
  return (
    <section className="py-24 border-b border-white/[0.06] bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            One designer for your website and product.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all">
                    <Icon size={22} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {service.title}
                  </h4>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06]">
                  <ul className="space-y-2 text-xs font-medium text-white/50">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400/60" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
