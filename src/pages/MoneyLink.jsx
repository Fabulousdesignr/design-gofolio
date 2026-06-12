import { ArrowLeft, ArrowUpRight, Download, Mail, MessageCircle, Layout, Zap, Search, Target, PenTool, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useContactModal } from '../context/ContactModalContext';

export default function MoneyLink() {
  useScrollReveal();
  const { openModal } = useContactModal();

  const metaData = [
    { label: "Role", value: "Product Designer" },
    { label: "Timeline", value: "6 Weeks" },
    { label: "Tools", value: "Figma, FigJam, ProtoPie" }
  ];

  const problemBlocks = [
    { title: "Fragmentation", desc: "Hard to track spending across 4+ different apps and banks." },
    { title: "Hidden Fees", desc: "Exchanging funds quickly without excessive hidden charges." },
    { title: "High Barriers", desc: "Difficulty starting investments with small, accessible amounts." }
  ];

  const processSteps = [
    { icon: <Search size={24} />, title: "Discover", desc: "User interviews and deep problem validation." },
    { icon: <Target size={24} />, title: "Define", desc: "Mapping key issues and strategic priorities." },
    { icon: <PenTool size={24} />, title: "Design", desc: "Building flows, wireframes, and UI systems." },
    { icon: <CheckCircle size={24} />, title: "Test", desc: "Usability testing and rapid iteration." }
  ];

  const designDecisions = [
    {
      title: "Unified Multi-Currency Balance",
      why: "Users frequently switch apps to track USD/NGN balances separately.",
      impact: "62% faster balance visibility across all account types.",
      image: "/assets/ui_showcase_1.png"
    },
    {
      title: "One-Tap Actions (Add / Convert / Transfer)",
      why: "High friction in frequent repetitive actions led to user drop-offs.",
      impact: "Reduced misclicks by 35% and increased action speed by 40%.",
      image: "/assets/ui_showcase_2.png"
    },
    {
      title: "Nigerian-Specific Quick Actions",
      why: "Local financial behavior differs significantly from global fintech models.",
      impact: "40% reduction in navigation steps for core local features.",
      image: "/assets/ui_showcase_3.png"
    },
    {
      title: "Visual Transaction Recognition",
      why: "Users remember people and context more easily than raw transaction amounts.",
      impact: "2.8x faster transaction recall and history scanning.",
      image: "/assets/ui_showcase_1.png"
    }
  ];

  const toolsUsed = [
    { name: "Figma", category: "Design" },
    { name: "FigJam", category: "Strategy" },
    { name: "ProtoPie", category: "Prototyping" },
    { name: "Notion", category: "Documentation" },
    { name: "Canva", category: "Marketing" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar isCaseStudy={true} />
      
      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="py-24 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div className="scroll-reveal">
              <div className="flex gap-3 mb-8">
                {["Fintech", "Mobile", "UX Strategy"].map((tag) => (
                  <span key={tag} className="px-4 py-1.5 bg-bg-alt border border-card-border rounded-full text-xs font-bold uppercase tracking-widest text-accent">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-text-primary mb-8 uppercase leading-[1.05]">
                MoneyLink: Simplifying Financial Management
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-12 font-medium leading-relaxed max-w-2xl">
                A unified fintech experience that helps Nigerian professionals manage money across multiple platforms without friction.
              </p>
              
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-card-border">
                {metaData.map((item) => (
                  <div key={item.label}>
                    <span className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">{item.label}</span>
                    <span className="font-bold text-text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scroll-reveal fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="relative aspect-[4/5] bg-bg-alt rounded-[48px] border-2 border-dashed border-card-border flex items-center justify-center overflow-hidden shadow-2xl">
                <img src="/assets/ui_showcase_1.png" alt="MoneyLink App Mockup" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-32 bg-bg-alt/30 border-y border-card-border">
          <div className="container-custom">
            <div className="max-w-3xl mb-20 scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-8 uppercase tracking-tight">The Problem</h2>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
                Young Nigerian professionals lose <span className="text-text-primary font-bold">₦5,000 to ₦15,000</span> monthly due to fragmented financial tools and hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {problemBlocks.map((block, idx) => (
                <div key={idx} className="p-10 bg-card border border-card-border rounded-3xl scroll-reveal fade-up" style={{ transitionDelay: `${idx * 150}ms` }}>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent font-black text-2xl mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-black text-text-primary mb-4 uppercase tracking-tight">{block.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="py-32">
          <div className="container-custom text-center max-w-4xl scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-10 uppercase tracking-tight">The Approach</h2>
            <p className="text-2xl md:text-3xl text-text-secondary leading-relaxed font-medium">
              MoneyLink consolidates key financial services into a single platform, enabling users to manage transactions, exchange currency, and access investments without switching between apps.
            </p>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-32 bg-bg-alt/30 border-y border-card-border">
          <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {processSteps.map((step, idx) => (
                <div key={idx} className="scroll-reveal fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <div className="text-accent mb-6">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-black text-text-primary mb-3 uppercase tracking-tight">{step.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY DECISIONS SECTION */}
        <section className="py-32">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-20 uppercase tracking-tight text-center">Key Design Decisions</h2>
            <div className="space-y-32">
              {designDecisions.map((decision, idx) => (
                <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center scroll-reveal ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`rounded-[40px] overflow-hidden border border-card-border shadow-xl ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}>
                    <img src={decision.image} alt={decision.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-text-primary mb-8 uppercase tracking-tight">{decision.title}</h3>
                    <div className="space-y-8">
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-widest text-accent mb-2">Why</span>
                        <p className="text-lg text-text-secondary leading-relaxed">{decision.why}</p>
                      </div>
                      <div>
                        <span className="block text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Impact</span>
                        <p className="text-lg text-text-primary font-bold leading-relaxed">{decision.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL DESIGN SECTION */}
        <section className="py-32 bg-bg-alt/30 border-y border-card-border">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-20 uppercase tracking-tight">Final Design</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[1, 2, 3, 1].map((img, idx) => (
                <div key={idx} className="rounded-[48px] overflow-hidden border border-card-border shadow-2xl transition-transform duration-700 hover:scale-[1.02] scroll-reveal fade-up" style={{ transitionDelay: `${idx * 150}ms` }}>
                  <img src={`/assets/ui_showcase_${img}.png`} alt={`UI Screen ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="py-32 bg-text-primary text-bg-primary">
          <div className="container-custom">
            <h2 className="text-4xl md:text-6xl font-black mb-20 uppercase tracking-tighter text-text-inverse">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { val: "62%", label: "Faster Balance Checks" },
                { val: "40%", label: "Fewer Support Queries" },
                { val: "2.8x", label: "Faster Recall" }
              ].map((stat, idx) => (
                <div key={idx} className="scroll-reveal fade-up" style={{ transitionDelay: `${idx * 150}ms` }}>
                  <span className="block text-7xl md:text-8xl font-black text-accent mb-4 tracking-tighter">{stat.val}</span>
                  <span className="text-lg font-bold text-bg-primary/50 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section className="py-24 border-b border-card-border">
          <div className="container-custom">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-12 text-center">Tools Used</h3>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24">
              {toolsUsed.map((tool) => (
                <div key={tool.name} className="flex flex-col items-center gap-4 group scroll-reveal fade-up">
                  <div className="w-16 h-16 bg-bg-alt border border-card-border rounded-2xl flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-300">
                    <Layout size={28} />
                  </div>
                  <span className="text-sm font-bold text-text-primary uppercase tracking-tight">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-40 text-center bg-bg-alt/30">
          <div className="container-custom scroll-reveal">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary mb-12 uppercase leading-tight">
              Have a product idea or <br className="hidden md:block" />
              fintech problem to solve?
            </h2>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <a 
                href="https://calendly.com/" 
                className="inline-flex items-center gap-3 bg-bg-inverse hover:bg-accent-orange text-text-inverse px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-accent/20"
              >
                Book a Call
              </a>
              <a 
                href="https://wa.me/" 
                className="inline-flex items-center gap-3 bg-bg-alt border border-card-border hover:border-[#25D366] text-text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1"
              >
                <MessageCircle size={22} /> WhatsApp
              </a>
              <button 
                onClick={openModal}
                className="bg-bg-primary text-text-primary hover:bg-card-border px-8 py-4 rounded-full font-bold text-lg inline-flex items-center gap-3 transition-colors uppercase tracking-widest"
              >
                Let's Talk <ArrowUpRight size={20} />
              </button>
            </div>
          </div>
        </section>

        <div className="py-12 border-t border-card-border text-center">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-text-secondary hover:text-text-primary transition-all">
            <ArrowLeft size={20} /> Back to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
