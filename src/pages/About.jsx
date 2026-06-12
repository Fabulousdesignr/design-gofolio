import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContentCard from '../components/editorial/ContentCard';
import EditorialFAQ from '../components/editorial/EditorialFAQ';
import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useContactModal } from '../context/ContactModalContext';

export default function About() {
  useScrollReveal();
  const { openModal } = useContactModal();

  const aboutFaqs = [
    {
      question: "What industries do you work in?",
      answer: "I focus primarily on fintech, edtech, AI tools, and early-stage startup products. However, my design thinking process allows me to adapt quickly and solve complex problems in almost any domain."
    },
    {
      question: "Do you work remotely?",
      answer: "Yes. I am based in Nigeria, but I work with teams and founders globally. I am highly comfortable managing timezone overlaps, asynchronous communication, and remote collaboration workflows."
    },
    {
      question: "How do you approach new products?",
      answer: "I always start with the business goal and the user problem. Before any interface is drawn, I spend time understanding the system, mapping out logic flows, and ensuring the foundation is structurally sound."
    },
    {
      question: "Do you use AI in your workflow?",
      answer: "Yes. AI plays a massive role in how I execute. I leverage AI tools to accelerate research, quickly iterate on concepts, and prototype faster, allowing me to focus more energy on strategy and product outcomes."
    },
    {
      question: "Do you work with startups only?",
      answer: "While I thrive in the fast-paced, ambiguous environments of early-stage startups, I also enjoy working with established companies looking to redesign legacy systems, launch new features, or scale their design operations."
    },
    {
      question: "Can you work with developers?",
      answer: "Absolutely. I don't just design screens; I design systems that can actually be built. I provide highly organized handoffs and work directly with engineering teams to ensure the final product matches the vision."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-bg-primary">
      <Navbar isCaseStudy={true} />
      
      <main className="flex-grow pt-40 pb-0">
        
        {/* 1. HERO SECTION */}
        <section className="w-full relative z-30 pb-24 md:pb-32 max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="w-full lg:w-[55%] flex flex-col">
              <span className="text-accent-orange text-[13px] font-bold tracking-widest uppercase mb-6">About Me</span>
              <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[80px] leading-[1.0] text-text-primary tracking-tight mb-8">
                Product design built on visual thinking.
              </h1>
              
              <div className="text-[19px] md:text-[21px] text-text-secondary leading-[1.6] flex flex-col gap-6 max-w-xl">
                <p>
                  I did not start as a traditional product designer. I started in graphic design, where I learned layout, hierarchy, visual communication, and storytelling. That foundation now shapes how I design digital products.
                </p>
                <p>
                  I focus on building simple, intuitive experiences across fintech, edtech, AI tools, and startup products. I care about making products easy to use, visually clear, and useful in real life.
                </p>
              </div>
            </div>

            <div className="w-full lg:w-[45%]">
              <div className="relative aspect-[4/5] bg-[#F7F5F2] rounded-[32px] overflow-hidden border border-card-border shadow-[0_20px_60px_rgba(0,0,0,0.05)]">
                <img 
                  src="/images/My Image.png" 
                  alt="Godwin O." 
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay tint matching homepage portrait */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/10 to-transparent opacity-60 mix-blend-overlay"></div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. MY DESIGN PHILOSOPHY */}
        <section className="w-full py-24 md:py-32 bg-card border-y border-card-border">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/3">
              <h2 className="font-serif text-[40px] md:text-[48px] leading-[1.1] text-text-primary tracking-tight sticky top-32">
                My Design Philosophy
              </h2>
            </div>
            
            <div className="w-full lg:w-2/3 flex flex-col gap-16 md:gap-24">
              <div className="flex flex-col gap-4">
                <span className="text-accent-orange text-[14px] font-bold tracking-widest uppercase">01 — User First</span>
                <p className="text-[24px] md:text-[32px] leading-[1.4] text-text-primary font-medium tracking-tight">
                  Understanding the human behind the screen to build natural, empathetic flows.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <span className="text-accent-orange text-[14px] font-bold tracking-widest uppercase">02 — Simplify Complexity</span>
                <p className="text-[24px] md:text-[32px] leading-[1.4] text-text-primary font-medium tracking-tight">
                  Turning complicated systems into clear, actionable, and minimal interfaces.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <span className="text-accent-orange text-[14px] font-bold tracking-widest uppercase">03 — Business Aligned</span>
                <p className="text-[24px] md:text-[32px] leading-[1.4] text-text-primary font-medium tracking-tight">
                  Designing experiences that not only look good but drive conversion, adoption, and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. WHAT I HELP TEAMS DO */}
        <section className="w-full py-24 md:py-32 bg-bg-primary">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/3">
              <h2 className="font-serif text-[40px] md:text-[48px] leading-[1.1] text-text-primary tracking-tight sticky top-32">
                What I Help Teams Do
              </h2>
            </div>
            
            <div className="w-full lg:w-2/3 flex flex-col">
              {[
                "UI/UX Design for Web & Mobile",
                "Product Design for Startups",
                "User Flows & Interaction",
                "Prototyping & Design Systems",
                "Usability & UX Audits"
              ].map((service, idx) => (
                <div key={idx} className="flex items-center justify-between py-8 border-b border-card-border group">
                  <span className="text-[24px] md:text-[28px] font-medium text-text-primary tracking-tight group-hover:text-accent-orange transition-colors duration-300">
                    {service}
                  </span>
                  <ArrowUpRight className="text-text-secondary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent-orange transition-all duration-300" size={28} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. BEYOND DESIGN */}
        <section className="w-full py-24 md:py-32 bg-card border-y border-card-border">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="font-serif text-[40px] md:text-[48px] leading-[1.1] text-text-primary tracking-tight mb-8">
                Beyond Design
              </h2>
              <p className="text-[19px] md:text-[21px] text-text-secondary leading-[1.6] max-w-lg">
                My diverse creative foundation shapes how I think about users, emotions, and experiences, allowing me to design products that feel both functional and deeply human.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-wrap gap-4">
              {[
                "Storytelling",
                "Acting",
                "Tailoring",
                "Graphic Design"
              ].map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-8 py-4 rounded-full border border-card-border bg-bg-primary text-text-primary text-[18px] md:text-[20px] font-medium hover:border-accent-orange hover:text-accent-orange transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. RESUME SECTION */}
        <section className="w-full py-24 md:py-32 bg-bg-primary">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12">
            <ContentCard 
              title="View My Experience"
              description="For a comprehensive breakdown of my work history, process, and past projects, download my CV."
              tags={["PRODUCT DESIGN", "STARTUPS", "AI PRODUCTS"]}
              mediaUrl="/images/My Image.png" 
              actionText="Download CV"
              actionUrl="/My Cv.pdf"
              actionDownload={true}
              secondaryActionText="View Resume"
              secondaryActionUrl="/My Cv.pdf"
              secondaryActionDownload={false}
              reverse={false}
            />
          </div>
        </section>

        {/* 6. FAQ SECTION */}
        <EditorialFAQ faqs={aboutFaqs} />

        {/* 7. CONTACT CTA */}
        <section className="w-full py-32 md:py-48 bg-card border-t border-card-border text-center px-6">
          <div className="max-w-4xl mx-auto flex flex-col items-center">
            <h2 className="font-serif text-[56px] md:text-[72px] lg:text-[88px] leading-[0.95] text-text-primary tracking-tight mb-8">
              Let’s build something meaningful.
            </h2>
            <p className="text-[20px] md:text-[24px] text-text-secondary leading-[1.5] max-w-2xl mx-auto mb-12">
              I’m open to remote opportunities, startup collaborations, and product conversations with teams building ambitious things.
            </p>
            <button 
              onClick={openModal}
              className="bg-bg-inverse text-text-inverse px-10 py-5 rounded-full text-[16px] md:text-[18px] font-semibold tracking-wide hover:bg-accent-orange hover:text-white hover:shadow-[0_4px_20px_rgba(255,122,26,0.3)] transition-all flex items-center gap-2 group transform hover:scale-[1.02]"
            >
              Message Me <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
