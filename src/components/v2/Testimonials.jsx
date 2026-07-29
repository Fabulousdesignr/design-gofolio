import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Godwin has an uncanny ability to take chaotic product specs and translate them into incredibly crisp, intuitive UI. He saved us months of iteration on our dashboard.",
    author: "Product Lead",
    company: "SaaS Scale-up",
  },
  {
    quote: "Our Shopify conversion rate increased dramatically after Godwin redesigned our product pages and checkout journey. His focus on CRO and customer trust is top-tier.",
    author: "Founder & CEO",
    company: "E-commerce Brand",
  },
  {
    quote: "Working with Godwin on our AI workflow tool was seamless. He understands technical constraints and designs interfaces that make complex AI tasks feel simple.",
    author: "Head of Engineering",
    company: "AI Tech Startup",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 border-b border-white/[0.06] bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Endorsements
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            What founders and product teams say.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <Quote size={20} className="text-indigo-400/60 mb-4" />
                <p className="text-sm text-white/70 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06]">
                <div className="text-xs font-semibold text-white">{t.author}</div>
                <div className="text-[11px] text-white/40">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
