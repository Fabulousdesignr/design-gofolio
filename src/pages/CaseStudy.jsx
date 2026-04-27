import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CaseStudy() {
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navbar isCaseStudy={true} />

      <main className="pt-32">
        {/* HERO SECTION */}
        <section className="py-24 text-center container-custom scroll-reveal">
          <span className="text-sm font-bold uppercase tracking-widest text-accent mb-6 block">
            Mobile • Sports • Gaming
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-text-primary mb-10 uppercase leading-tight max-w-4xl mx-auto">
            Shove.bet
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mx-auto mb-12 font-medium leading-relaxed prose-readable">
            Shove.bet is a real-time poker experience built around speed, clarity, and flow.
            Inspired by platforms like ClubGG, it brings players into a live table environment where everything happens in one place.
            Instead of navigating complex betting systems, users can focus on the game, make quick decisions, and stay fully engaged.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-bg-alt border border-card-border hover:border-text-primary text-text-primary px-8 py-4 rounded-xl font-bold text-lg transition-all w-full sm:w-auto justify-center"
            >
              <ArrowLeft size={20} /> Back to Home
            </Link>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-accent/20 w-full sm:w-auto justify-center"
            >
              View Live Project <ArrowUpRight size={20} />
            </a>
          </div>

          <div className="w-full aspect-video md:aspect-[21/9] bg-bg-alt rounded-[40px] border border-card-border overflow-hidden shadow-2xl">
            <img
              src="/assets/shove_bet.png"
              alt="Shove.bet Table Interface"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-6 text-sm font-medium text-text-secondary italic">
            Designed to keep players focused, with all actions and game context visible at once.
          </p>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-32 border-y border-card-border">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-20">
            <div className="scroll-reveal fade-up">
              <h2 className="text-4xl font-black text-text-primary mb-10 uppercase tracking-tight">The Problem</h2>
              <div className="space-y-6 text-xl text-text-secondary leading-relaxed prose-readable">
                <p>Most betting platforms feel overwhelming.</p>
                <p>There’s too much data, too many options, and too many steps.</p>
                <p>During live moments, users don’t want to analyze everything plus they just want to act quickly and stay in the flow.</p>
                <p>Switching screens, scanning heavy stats, and slow interactions break that experience.</p>
                <div className="pt-10 mt-10 border-t border-card-border">
                  <p className="text-text-primary font-black text-2xl uppercase tracking-tighter">
                    Make betting feel more like playing at a table, not navigating a system.
                  </p>
                </div>
              </div>
            </div>

            <div className="scroll-reveal fade-up" style={{ transitionDelay: '150ms' }}>
              <h2 className="text-3xl font-black text-text-primary mb-10 uppercase tracking-tight">My Role</h2>
              <ul className="space-y-6 mb-12">
                {["Product Designer", "UI/UX Design", "Interaction Design", "Collaborated closely with developers"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 font-bold text-text-primary text-lg">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-10 border-t border-card-border">
                <span className="block text-xs font-bold uppercase tracking-widest text-text-secondary mb-2">Project Type</span>
                <span className="text-xl font-black text-text-primary uppercase">New product (built from scratch)</span>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS USED SECTION */}
        <section className="py-16 border-b border-card-border bg-card/10">
          <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8 scroll-reveal">
            <div>
              <h2 className="text-2xl font-black text-text-primary mb-2 uppercase tracking-tight">Tools Used</h2>
              <p className="text-text-secondary font-medium italic">
                Used to research, design, prototype, and iterate on user flows.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {["Figma", "FigJam", "Notion", "Protopie"].map((tool, idx) => (
                <span key={idx} className="px-6 py-3 bg-card border border-card-border rounded-xl font-bold text-text-primary shadow-sm hover:border-accent transition-colors">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-32 bg-bg-alt/30">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary mb-4 scroll-reveal uppercase">How it happened</h2>
            <div className="grid md:grid-cols-4 gap-8 mt-12">
              {[
                {
                  title: "Research",
                  desc: "Looked into existing betting platforms and poker products like ClubGG. Focused on how players make fast decisions."
                },
                {
                  title: "Ideation",
                  desc: "Shifted the direction from “betting tool” to “game-like experience”. Prioritized speed, clarity, and flow."
                },
                {
                  title: "Design",
                  desc: "Created a table-first interface where everything happens in one place. Focused on visibility and quick actions."
                },
                {
                  title: "Testing",
                  desc: "Worked with developers to refine flows. Removed friction where interactions felt slow or confusing."
                }
              ].map((p, idx) => (
                <div key={idx} className="flex flex-col items-center text-center scroll-reveal fade-up" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <span className="block text-5xl font-black text-accent/20 mb-4">0{idx + 1}</span>
                  <h3 className="text-xl font-black text-text-primary mb-3 uppercase tracking-tight">{p.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* KEY DECISIONS SECTION */}
        <section className="py-32">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary mb-20 scroll-reveal uppercase">The Strategy</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Table-centered experience",
                  desc: "The entire product revolves around a single table view, reducing the need for navigation."
                },
                {
                  title: "Always-visible context",
                  desc: "Players, balances, pot value, and actions are visible at all times."
                },
                {
                  title: "Fast actions",
                  desc: "Betting actions are clear and immediate, allowing users to act without hesitation."
                }
              ].map((d, idx) => (
                <div key={idx} className="p-12 bg-card border border-card-border rounded-[40px] shadow-sm hover:shadow-2xl transition-all duration-500 scroll-reveal fade-up" style={{ transitionDelay: `${idx * 150}ms` }}>
                  <h3 className="text-2xl font-black text-text-primary mb-6 uppercase tracking-tight">{d.title}</h3>
                  <p className="text-lg text-text-secondary leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL DESIGN SECTION */}
        <section className="py-32 bg-bg-alt/30 border-y border-card-border">
          <div className="container-custom">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary mb-12 scroll-reveal uppercase text-center">Final Design</h2>
            <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 text-xl text-text-secondary">
              <p>Instead of navigating multiple screens, users stay in one focused environment where everything happens in real time.</p>
              <p>Players, cards, pot value, and actions are all visible at once, making it easy to understand what’s going on instantly.</p>
              <p>Betting controls are placed close to the user, allowing quick decisions without breaking flow.</p>
              <p className="text-text-primary font-bold">The goal was not just clarity, but immersion, making betting feel like sitting at a live table.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="rounded-[48px] overflow-hidden border border-card-border shadow-2xl scroll-reveal fade-up">
                <img src="/assets/ui_showcase_1.png" alt="UI Showcase 1" className="w-full" />
              </div>
              <div className="rounded-[48px] overflow-hidden border border-card-border shadow-2xl scroll-reveal fade-up" style={{ transitionDelay: '200ms' }}>
                <img src="/assets/ui_showcase_2.png" alt="UI Showcase 2" className="w-full" />
              </div>
            </div>
            <p className="text-center mt-12 text-sm font-medium text-text-secondary italic">
              Designed to keep players focused, with all actions and game context visible at once.
            </p>
          </div>
        </section>

        {/* IMPACT SECTION */}
        <section className="py-32 bg-[#F8FAFC]">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 uppercase text-black scroll-reveal">Impact &amp; Takeaways</h2>
            <div className="grid md:grid-cols-3 gap-10 mt-10">
              <div className="flex flex-col items-center scroll-reveal fade-up">
                <h3 className="text-5xl font-black text-accent mb-3 tracking-tighter">100+</h3>
                <p className="text-sm text-gray-600 tracking-wide uppercase mt-2 font-bold">Waitlist Joins</p>
                <p className="text-gray-500 mt-3 max-w-[180px] text-sm leading-relaxed">Strong early interest from the community.</p>
              </div>
              <div className="flex flex-col items-center scroll-reveal fade-up" style={{ transitionDelay: '150ms' }}>
                <h3 className="text-5xl font-black text-accent mb-3 tracking-tighter">Zero</h3>
                <p className="text-sm text-gray-600 tracking-wide uppercase mt-2 font-bold">Guidance Needed</p>
                <p className="text-gray-500 mt-3 max-w-[180px] text-sm leading-relaxed">Users understood the product with no onboarding help.</p>
              </div>
              <div className="flex flex-col items-center scroll-reveal fade-up" style={{ transitionDelay: '300ms' }}>
                <h3 className="text-5xl font-black text-accent mb-3 tracking-tighter">45%</h3>
                <p className="text-sm text-gray-600 tracking-wide uppercase mt-2 font-bold">Faster Actions</p>
                <p className="text-gray-500 mt-3 max-w-[180px] text-sm leading-relaxed">Speed improvement in core betting interaction loops.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-40 text-center bg-bg-alt/30">
          <div className="container-custom scroll-reveal">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary mb-12 uppercase leading-tight">
              Interested in building fast, <br className="hidden md:block" />
              intuitive product experiences? <br />
              Let’s talk.
            </h2>
            <Link
              to="/"
              className="inline-block bg-accent hover:bg-accent-hover text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-accent/20 uppercase"
            >
              Start a Conversation
            </Link>
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
