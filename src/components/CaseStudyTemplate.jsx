import { ArrowLeft, ArrowUpRight, Download, Mail, MessageCircle, Layout, Zap, Search, Target, PenTool, CheckCircle, PlayCircle, Film, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CaseStudyTemplate({ data }) {
  useScrollReveal();

  if (!data) return null;

  const { accent } = data;

  return (
    <div className="min-h-screen">
      <Navbar isCaseStudy={true} />
      
      <main className="pt-32">
        {/* 1. HERO SECTION */}
        <section className="py-24 container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
            <div className="scroll-reveal">
              <div className="flex flex-wrap gap-3 mb-8">
                {data.tags.map((tag) => (
                  <span key={tag} className={`px-4 py-1.5 ${accent.bg} border ${accent.border} rounded-full text-xs font-bold uppercase tracking-widest ${accent.text}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-text-primary mb-8 uppercase leading-[1.05]">
                {data.title}
              </h1>
              <p className="text-xl md:text-2xl text-text-secondary mb-12 font-medium leading-relaxed max-w-2xl">
                {data.summary}
              </p>
              
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-card-border">
                {data.meta.map((item) => (
                  <div key={item.label}>
                    <span className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">{item.label}</span>
                    <span className="font-bold text-text-primary">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="scroll-reveal fade-up" style={{ transitionDelay: '200ms' }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-card-border">
                <img src={data.heroImage} alt={`${data.title} UI Mockup`} className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. PRODUCT OVERVIEW (NEW/OPTIONAL) */}
        {data.overview && (
          <section className="py-24 border-t border-card-border">
            <div className="container-custom max-w-4xl scroll-reveal">
              <h2 className={`text-sm font-bold uppercase tracking-widest ${accent.text} mb-8`}>Overview</h2>
              <p className="text-2xl md:text-3xl text-text-secondary leading-relaxed font-medium">
                {data.overview}
              </p>
            </div>
          </section>
        )}

        {/* 3. PROBLEM SECTION */}
        <section className="py-32 section-dark border-y border-card-border">
          <div className="container-custom">
            <div className="max-w-3xl mb-20 scroll-reveal">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-8 uppercase tracking-tight">The Problem</h2>
              <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium">
                {data.problem.context}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.problem.points.map((block, idx) => (
                <div key={idx} className={`p-10 bg-card border border-card-border rounded-3xl scroll-reveal fade-up hover:${accent.border} transition-colors group`} style={{ transitionDelay: `${idx * 150}ms` }}>
                  <div className={`w-12 h-12 ${accent.bg} rounded-xl flex items-center justify-center ${accent.text} font-black text-2xl mb-6 group-hover:scale-110 transition-transform`}>
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-black text-text-primary mb-4 uppercase tracking-tight">{block.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{block.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. GOALS (NEW/OPTIONAL) */}
        {data.goals && (
          <section className="py-32">
            <div className="container-custom">
              <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-16 uppercase tracking-tight text-center">Product Goals</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {data.goals.map((goal, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 section-light border border-card-border rounded-2xl scroll-reveal fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                    <div className={`w-2 h-2 ${accent.bg.replace('/10', '')} rounded-full shrink-0`}></div>
                    <span className="text-lg font-bold text-text-primary">{goal}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 5. APPROACH / SOLUTION */}
        <section className={`py-32 ${!data.goals ? 'bg-transparent' : 'section-dark border-y border-card-border'}`}>
          <div className="container-custom text-center max-w-4xl scroll-reveal">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-10 uppercase tracking-tight">The Approach</h2>
            <p className="text-2xl md:text-3xl text-text-secondary leading-relaxed font-medium">
              {data.approach}
            </p>
            {data.approachImage && (
              <div className="mt-16 scroll-reveal fade-up">
                <img
                  src={data.approachImage.src}
                  alt="Approach UI Screen"
                  className="rounded-2xl w-full shadow-xl border border-card-border"
                />
                {data.approachImage.caption && (
                  <p className="mt-4 text-sm text-text-secondary italic">
                    {data.approachImage.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 6. DESIGN PROCESS */}
        <section className="py-32 section-dark border-y border-card-border">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-12 uppercase tracking-tight text-center">Design Process</h2>
            <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-12">
              {data.process.map((step, idx) => {
                const icons = [<Search size={24} />, <Target size={24} />, <PenTool size={24} />, <Layout size={24} />, <CheckCircle size={24} />];
                return (
                  <div key={idx} className="flex flex-col items-center text-center max-w-[200px] scroll-reveal fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                    <div className={`${accent.text} mb-6 flex justify-center`}>
                      {icons[idx]}
                    </div>
                    <h3 className="text-xl font-black text-text-primary mb-3 uppercase tracking-tight">{step.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 7. KEY DESIGN DECISIONS */}
        <section className="py-32">
          <div className="container-custom max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-20 uppercase tracking-tight text-center">Key Design Decisions</h2>
            <div className="space-y-32">
              {data.decisions.map((decision, idx) => (
                <div key={idx} className="scroll-reveal fade-up">
                  <h3 className="text-3xl font-black text-text-primary mb-8 uppercase tracking-tight">{decision.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div>
                      <span className={`block text-xs font-bold uppercase tracking-widest ${accent.text} mb-2`}>Why</span>
                      <p className="text-lg text-text-secondary leading-relaxed">{decision.why}</p>
                    </div>
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-widest text-emerald-500 mb-2">Impact</span>
                      <p className="text-lg text-text-primary font-bold leading-relaxed">{decision.impact}</p>
                    </div>
                  </div>
                  {decision.image && (
                    <div className="mt-10">
                      <img 
                        src={decision.image} 
                        alt={decision.title} 
                        className="rounded-2xl w-full shadow-lg border border-card-border" 
                      />
                      <p className="mt-4 text-sm text-text-secondary italic">
                        {decision.caption || `Detailed view illustrating the ${decision.title.toLowerCase()} decision.`}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. FINAL DESIGN / UI SHOWCASE */}
        <section className="py-32 section-dark border-y border-card-border">
          <div className="container-custom max-w-5xl">
            <h2 className="text-4xl md:text-5xl font-black text-text-primary mb-20 uppercase tracking-tight text-center">The Solution</h2>
            <div className="space-y-24">
              {data.finalDesign.map((item, idx) => (
                <div key={idx} className="scroll-reveal fade-up text-center" style={{ transitionDelay: `${idx * 150}ms` }}>
                  <img 
                    src={item.image} 
                    alt={item.caption} 
                    className="rounded-2xl w-full shadow-lg border border-card-border" 
                  />
                  <p className="mt-6 text-sm font-medium text-text-secondary italic">
                    {item.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. IMPACT / TAKEAWAYS */}
        <section className="py-32 bg-bg-alt">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-6xl font-black mb-16 uppercase tracking-tighter text-text-primary">Impact & Takeaways</h2>
            <div className="flex flex-wrap justify-center gap-10 md:gap-16 mt-10">
              {data.impact.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center scroll-reveal fade-up min-w-[150px]" style={{ transitionDelay: `${idx * 150}ms` }}>
                  <h3 className={`text-5xl md:text-6xl font-black ${accent.text} mb-4 tracking-tighter uppercase`}>{stat.val}</h3>
                  <p className="text-sm font-bold text-text-secondary uppercase tracking-widest leading-relaxed">{stat.label}</p>
                </div>
              ))}
            </div>
            {data.takeaway && (
              <div className="mt-20 scroll-reveal fade-up">
                <p className="text-xl md:text-2xl text-text-primary font-medium italic leading-relaxed">
                  "{data.takeaway}"
                </p>
              </div>
            )}
          </div>
        </section>

        {/* 10. TOOLS USED */}
        <section className="py-24 border-b border-card-border">
          <div className="container-custom">
            <h3 className="text-xs font-bold uppercase tracking-widest text-text-secondary mb-12 text-center">Tools Used</h3>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {(data.tools || []).map((tool) => {
                const toolIcons = {
                  Figma: <Layout size={24} />,
                  ProtoPie: <Zap size={24} />,
                  Notion: <Search size={24} />,
                  Forms: <PenTool size={24} />,
                  Canva: <PenTool size={24} />,
                  FigJam: <Layout size={24} />,
                  Jitter: <PlayCircle size={24} />,
                  LottieFiles: <Film size={24} />,
                  Illustrator: <Image size={24} />
                };
                
                return (
                  <div 
                    key={tool} 
                    className={`flex items-center gap-4 px-8 py-4 section-light border border-card-border rounded-2xl transition-all duration-300 hover:scale-[1.03] hover:${accent.border} hover:${accent.shadow} group cursor-default`}
                  >
                    <div className={`text-text-secondary group-hover:${accent.text} transition-colors`}>
                      {toolIcons[tool] || <Layout size={24} />}
                    </div>
                    <span className={`font-bold text-text-primary group-hover:${accent.text} transition-colors uppercase tracking-tight`}>
                      {tool}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 11. PROJECT LINKS */}
        {(data.liveUrl || data.caseStudyUrl) && (
          <section className="py-24 border-b border-card-border">
            <div className="container-custom text-center scroll-reveal">
              <h2 className="text-3xl md:text-4xl font-black text-text-primary mb-12 uppercase tracking-tight">Project Links</h2>
              <div className="flex flex-wrap gap-6 justify-center items-center">
                {data.liveUrl && (
                  <a 
                    href={data.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 ${accent.bg.replace('/10', '')} hover:opacity-90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl ${accent.shadow}`}
                  >
                    View Live Project <ArrowUpRight size={20} />
                  </a>
                )}
                {data.caseStudyUrl && (
                  <a 
                    href={data.caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 bg-bg-alt border border-card-border hover:${accent.border.replace('/20', '')} text-text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-sm`}
                  >
                    View Full Case Study <ArrowUpRight size={20} />
                  </a>
                )}
              </div>
            </div>
          </section>
        )}

        {/* 11. CTA SECTION */}
        <section className="py-40 text-center section-dark">
          <div className="container-custom scroll-reveal">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary mb-12 uppercase leading-tight">
              Have a product idea or <br className="hidden md:block" />
              need a strategic designer?
            </h2>
            <div className="flex flex-wrap gap-6 justify-center items-center">
              <a 
                href="/cv.pdf" 
                download
                className={`inline-flex items-center gap-3 ${accent.bg.replace('/10', '')} hover:opacity-90 text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl ${accent.shadow}`}
              >
                <Download size={20} /> Download CV
              </a>
              <a 
                href="https://wa.me/2349157826355?text=Hi%20Godwin%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20connect%20with%20you." 
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-3 bg-bg-alt border border-card-border hover:border-[#25D366] text-text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1`}
              >
                <MessageCircle size={22} /> WhatsApp
              </a>
              <a 
                href="mailto:fabianokechukwu6@gmail.com?subject=Portfolio%20Inquiry" 
                className={`inline-flex items-center gap-3 bg-bg-alt border border-card-border hover:${accent.border.replace('/20', '')} text-text-primary px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1`}
              >
                <Mail size={22} /> Email
              </a>
            </div>
          </div>
        </section>

        <div className="py-12 border-t border-card-border text-center">
          <Link to="/" className="inline-flex items-center gap-2 font-bold text-text-secondary hover:text-text-primary transition-all">
            <ArrowLeft size={20} /> Back to all work
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
