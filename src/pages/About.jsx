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
      question: "How does your design background help you as a PM?",
      answer: "It acts as a rapid validation loop. Instead of writing long PRDs in isolation, I can map complex customer journeys, prototype high-fidelity workflows, and align engineering and stakeholders visually. This visual clarity eliminates execution ambiguity, speeds up handoffs, and ensures we build the right things first."
    },
    {
      question: "What is your approach to product prioritization?",
      answer: "I prioritize based on user feedback, business impact, and engineering effort. I focus heavily on proving high-risk assumptions with the minimum viable effort. For instance, on Shyne, I deferred complex marketplace features to focus entirely on improving onboarding completion and portfolio publishing success."
    },
    {
      question: "How do you collaborate with engineering teams?",
      answer: "I speak their language. Having worked with frontend frameworks like React and Next.js, and having built scaleable design systems, I structure product requirements to be build-aware. I identify structural edge cases early, reducing development rework and keeping execution aligned with timelines."
    },
    {
      question: "Do you use AI in your product workflow?",
      answer: "Yes, as an accelerant. I use AI tools (Claude, Cursor, Gemini, ChatGPT) to synthesize large sets of competitor data, draft product documentation, explore copy iterations, and build functional prototypes for early user validation."
    },
    {
      question: "What types of products do you specialize in?",
      answer: "I specialize in AI-enabled tools, SaaS products, marketplaces, and fintech applications. I thrive in early-stage environments where customer discovery and rapid iteration are required to go from concept to product-market fit."
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
                Product strategy built on user insights and rapid prototyping.
              </h1>
              
              <div className="text-[19px] md:text-[21px] text-text-secondary leading-[1.6] flex flex-col gap-6 max-w-xl">
                <p>
                  I am a Product Manager with 10 years of design experience, including 4 years in Product Design. I bridge the gap between user problems, engineering capabilities, and business outcomes to build products that users love and adopt.
                </p>
                <p>
                  My design background is my competitive execution advantage. It allows me to rapidly prototype product concepts, validate hypotheses with real users, align cross-functional teams visually, and build scalable design systems that drastically reduce development overhead.
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
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/10 to-transparent opacity-60 mix-blend-overlay"></div>
              </div>
            </div>

          </div>
        </section>

        {/* 2. MY PRODUCT PHILOSOPHY */}
        <section className="w-full py-24 md:py-32 bg-card border-y border-card-border">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="w-full lg:w-1/3">
              <h2 className="font-serif text-[40px] md:text-[48px] leading-[1.1] text-text-primary tracking-tight sticky top-32">
                My Product Philosophy
              </h2>
            </div>
            
            <div className="w-full lg:w-2/3 flex flex-col gap-16 md:gap-24">
              <div className="flex flex-col gap-4">
                <span className="text-accent-orange text-[14px] font-bold tracking-widest uppercase">01 — Solve the Right Problem</span>
                <p className="text-[24px] md:text-[32px] leading-[1.4] text-text-primary font-medium tracking-tight">
                  Doing deep customer discovery and research first to ensure we solve high-value customer struggles.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <span className="text-accent-orange text-[14px] font-bold tracking-widest uppercase">02 — Validate Assumptions First</span>
                <p className="text-[24px] md:text-[32px] leading-[1.4] text-text-primary font-medium tracking-tight">
                  Using high-fidelity interactive prototypes to test workflows and gather early signal before committing engineering resources.
                </p>
              </div>
              
              <div className="flex flex-col gap-4">
                <span className="text-accent-orange text-[14px] font-bold tracking-widest uppercase">03 — Focus on Activation & Growth</span>
                <p className="text-[24px] md:text-[32px] leading-[1.4] text-text-primary font-medium tracking-tight">
                  Optimizing the customer onboarding journey and core loops to drive adoption, user retention, and monetization.
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
                Core Competencies
              </h2>
            </div>
            
            <div className="w-full lg:w-2/3 flex flex-col">
              {[
                "Product Strategy & Roadmapping",
                "Customer Discovery & User Research",
                "MVP Definition & Scope Management",
                "Growth Experimentation & Funnel Analysis",
                "Cross-Functional Team Collaboration",
                "Design Systems & Usability Audits",
                "AI Product Strategy & Prototyping"
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

        {/* 4. SKILLS & KNOWLEDGE */}
        <section className="w-full py-24 md:py-32 bg-card border-y border-card-border">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="w-full lg:w-1/2 flex flex-col">
              <h2 className="font-serif text-[40px] md:text-[48px] leading-[1.1] text-text-primary tracking-tight mb-8">
                Execution Toolkit
              </h2>
              <p className="text-[19px] md:text-[21px] text-text-secondary leading-[1.6] max-w-lg">
                My multidisciplinary toolkit spans product management frameworks, customer research methods, design systems, and developer-aligned technical skills.
              </p>
            </div>
            
            <div className="w-full lg:w-1/2 flex flex-wrap gap-4">
              {[
                "Product Strategy",
                "Growth Experiments",
                "Customer Discovery",
                "Product Analytics",
                "Figma",
                "Design Systems",
                "React / Next.js",
                "AI Workflows"
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
              title="Professional Work & Experience"
              description="For a comprehensive breakdown of my work history, product strategy execution, team leadership, and validation achievements, view my full resume below or download my CV."
              tags={["PRODUCT STRATEGY", "GROWTH PM", "AI MVPS"]}
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
              Let's build products people love using.
            </h2>
            <p className="text-[20px] md:text-[24px] text-text-secondary leading-[1.5] max-w-2xl mx-auto mb-12">
              I am open to growth product manager positions, startup product collaborations, and product conversations with teams building ambitious things.
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
