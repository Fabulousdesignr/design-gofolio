import { Download, ArrowUpRight, Layout, Zap, Search, PenTool, Target, Users, Smartphone, Globe, Lightbulb, Scissors, Tv, Eye, Code, Layers, Image, Cpu, MessageCircle, MessageSquare, Heart, Wind } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  useScrollReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar isCaseStudy={true} />
      
      <main className="flex-grow pt-40 pb-24">
        {/* 1. HERO SECTION */}
        <section className="container-custom mb-32 scroll-reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-accent mb-6 block">
                Godwin O.
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary mb-10 leading-[1.1] uppercase">
                Product Designer. Nearly a decade of digital product experience.
              </h1>
              <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed mb-6 max-w-xl">
                I'm a Product Designer with nearly a decade of experience building AI tools, SaaS platforms, fintech applications, and Shopify stores.
              </p>
              <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed max-w-xl">
                I turn complex technical requirements into intuitive, high-converting digital products through strategy, rapid prototyping, and close developer collaboration.
              </p>
            </div>
            <div className="relative aspect-square lg:aspect-[4/5] bg-bg-alt rounded-[48px] border border-card-border overflow-hidden shadow-2xl group">
              <img src="/images/My Image.png" alt="Godwin" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </div>
        </section>

        {/* 2. HOW I THINK ABOUT DESIGN (CARDS) */}
        <section className="container-custom mb-32 section-dark py-24 border-y border-card-border">
          <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6 uppercase tracking-tight">
              How I Think About Design
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              Good design isn't just about how something looks — it's about whether it works for the person using it and whether it helps the business achieve its goal.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "User First", desc: "I try to understand the real person on the other side before I design anything — what they need, what confuses them, and what would make their life easier.", icon: <Users size={32} /> },
              { title: "Keep It Simple", desc: "I turn complicated problems into clean, clear screens. If a user has to think too hard, the design hasn't done its job.", icon: <Zap size={32} /> },
              { title: "Tied to the Business", desc: "Good-looking doesn't mean good design. I make sure what I build actually helps the product grow and meet its goals.", icon: <Target size={32} /> }
            ].map((card, idx) => (
              <div key={idx} className="p-10 bg-card border border-card-border rounded-3xl scroll-reveal fade-up hover:border-accent hover:-translate-y-2 transition-all duration-300 group" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-8 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <h3 className="text-xl font-black text-text-primary mb-4 uppercase tracking-tight">{card.title}</h3>
                <p className="text-text-secondary leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. WHAT I CAN HELP WITH (STRUCTURED GRID) */}
        <section className="container-custom mb-32 scroll-reveal fade-up">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-text-primary uppercase tracking-tight">
              What I Can Help You With
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { text: "UI/UX Design for Web & Mobile", icon: <Smartphone size={24} /> },
              { text: "Product Design for Startups & Scale-ups", icon: <Lightbulb size={24} /> },
              { text: "Shopify Storefront & Ecommerce UX", icon: <Globe size={24} /> },
              { text: "AI Product Design & Workflow Integration", icon: <Cpu size={24} /> },
              { text: "SaaS Dashboards & Internal Tools", icon: <Layout size={24} /> },
              { text: "Fintech & Mobile Banking Design", icon: <Smartphone size={24} /> },
              { text: "Conversion Rate Optimization (CRO)", icon: <Target size={24} /> },
              { text: "Prototyping & Design Systems", icon: <Layers size={24} /> },
              { text: "Usability & UX Audits", icon: <Search size={24} /> }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 bg-bg-alt border border-card-border rounded-2xl hover:border-text-secondary transition-colors group">
                <div className="text-text-secondary group-hover:text-text-primary transition-colors">
                  {item.icon}
                </div>
                <span className="text-lg font-bold text-text-primary">{item.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 4. TOOLS (CATEGORIZED) */}
        <section className="container-custom mb-32 scroll-reveal fade-up">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-text-primary uppercase tracking-tight">
              My Toolstack
            </h2>
          </div>
          
          <div className="space-y-16 max-w-5xl mx-auto">
            {/* Category 1 */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-8 text-center border-b border-card-border pb-4">
                Design Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  { name: "Figma", icon: <Layout size={20} /> },
                  { name: "FigJam", icon: <PenTool size={20} /> },
                  { name: "Canva", icon: <Image size={20} /> },
                  { name: "Illustrator", icon: <PenTool size={20} /> },
                  { name: "Protopie", icon: <Zap size={20} /> }
                ].map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-card border border-card-border rounded-2xl hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all cursor-default group">
                    <div className="text-text-secondary group-hover:text-accent transition-colors">{tool.icon}</div>
                    <span className="text-text-primary font-bold text-sm tracking-wide">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 2 */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-8 text-center border-b border-card-border pb-4">
                Development (No-code)
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  { name: "Framer", icon: <Layout size={20} /> },
                  { name: "Odoo", icon: <Globe size={20} /> }
                ].map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-card border border-card-border rounded-2xl hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all cursor-default group">
                    <div className="text-text-secondary group-hover:text-accent transition-colors">{tool.icon}</div>
                    <span className="text-text-primary font-bold text-sm tracking-wide">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Category 3 */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-text-secondary mb-8 text-center border-b border-card-border pb-4">
                AI Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                {[
                  { name: "ChatGPT", icon: <MessageCircle size={20} /> },
                  { name: "Claude", icon: <MessageSquare size={20} /> },
                  { name: "Lovable", icon: <Heart size={20} /> },
                  { name: "Antigravity", icon: <Cpu size={20} /> },
                  { name: "Google Stitch", icon: <Layers size={20} /> },
                  { name: "Windsurf", icon: <Wind size={20} /> }
                ].map((tool, idx) => (
                  <div key={idx} className="flex items-center gap-3 px-6 py-4 bg-card border border-card-border rounded-2xl hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5 transition-all cursor-default group">
                    <div className="text-text-secondary group-hover:text-accent transition-colors">{tool.icon}</div>
                    <span className="text-text-primary font-bold text-sm tracking-wide">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. BEYOND DESIGN (VISUAL BADGES) */}
        <section className="container-custom mb-32 scroll-reveal fade-up">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-6 uppercase tracking-tight">
                Outside of Design
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                I have a background in a few different creative areas, and I think they all help me design better — because they've taught me how people experience stories, emotion, and attention.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Storytelling", icon: <Eye size={24} /> },
                { title: "Acting", icon: <Tv size={24} /> },
                { title: "Tailoring", icon: <Scissors size={24} /> },
                { title: "Graphic Design", icon: <PenTool size={24} /> }
              ].map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-8 bg-card border border-card-border rounded-[32px] hover:bg-bg-alt transition-colors">
                  <div className="text-text-secondary mb-4">{skill.icon}</div>
                  <span className="font-bold text-text-primary uppercase tracking-widest text-sm">{skill.title}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. EXPERIENCE HIGHLIGHT */}
        <section className="container-custom mb-32 scroll-reveal fade-up">
          <div className="relative overflow-hidden bg-accent border border-accent/20 rounded-[40px] p-12 md:p-20 text-center shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
            
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
                See My Full Experience
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-medium mb-12 max-w-2xl mx-auto">
                Want a closer look at my work history, the tools I use, and the projects I've been part of? Download my CV.
              </p>
              <a 
                href="/cv.pdf" 
                download
                className="inline-flex items-center gap-3 bg-white text-accent px-10 py-5 rounded-full font-black text-lg uppercase tracking-widest hover:-translate-y-1 hover:shadow-xl transition-all"
              >
                <Download size={22} /> Download CV
              </a>
            </div>
          </div>
        </section>

        {/* 7. CTA SECTION */}
        <section className="text-center scroll-reveal fade-up border-t border-card-border pt-32">
          <p className="text-2xl md:text-3xl text-text-primary font-black uppercase tracking-tight mb-10">
            Open to remote opportunities and collaborations.
          </p>
          <a 
            href="/#contact" 
            className="inline-flex items-center gap-3 bg-text-primary text-bg-primary hover:opacity-90 px-10 py-5 rounded-full font-black text-xl uppercase tracking-widest transition-all hover:-translate-y-1 shadow-xl"
          >
            Let's Talk <ArrowUpRight size={24} />
          </a>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
