import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, ExternalLink, ChevronRight } from 'lucide-react';
import Navbar from '../components/v2/Navbar';
import Footer from '../components/v2/Footer';
import { caseStudies } from '../data/caseStudies';

// ─── Scroll reveal hook ────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Reusable section wrapper ──────────────────────────────────
function Section({ id, children, className = '' }) {
  return (
    <section
      id={id}
      className={`py-20 border-b border-white/[0.06] ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6">{children}</div>
    </section>
  );
}

function SectionLabel({ label }) {
  return (
    <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">
      {label}
    </p>
  );
}

function SectionHeading({ children }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-10">
      {children}
    </h2>
  );
}

// ─── User Flow Diagram ─────────────────────────────────────────
function FlowDiagram({ steps }) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      {steps.map((step, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <span className="px-3 py-1.5 text-xs font-semibold text-white bg-white/[0.06] border border-white/[0.10] rounded-lg">
            {step}
          </span>
          {idx < steps.length - 1 && (
            <ChevronRight size={14} className="text-violet-400/60 shrink-0" />
          )}
        </div>
      ))}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────
export default function ShoveBetCaseStudy() {
  useScrollReveal();

  const data = caseStudies.find((cs) => cs.id === 'shove-bet');
  const [activeScreen, setActiveScreen] = useState(0);

  if (!data) return null;

  const {
    title, subtitle, discipline, liveUrl, summary,
    productOverview, myRole, problem, approach, process,
    userFlows, decisions, uiShowcase, designSystem, reflection,
    impact, meta, tools, screens,
  } = data;

  return (
    <div className="min-h-screen bg-[#09090b] text-white selection:bg-violet-500 selection:text-white">
      <style>{`
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.is-visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
      `}</style>

      <Navbar isCaseStudy={true} />

      {/* ── 1. HERO ─────────────────────────────────────────────── */}
      <header className="relative pt-32 pb-0 overflow-hidden border-b border-white/[0.06]">
        {/* Ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/8 blur-[130px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-6xl mx-auto px-6">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white/80 transition-colors mb-10"
          >
            <ArrowLeft size={13} /> Back to portfolio
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-end mb-0">
            {/* Left: Title block */}
            <div className="pb-16">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {['iGaming', 'Web App', 'Gaming', 'Web3'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.0] mb-4">
                {title}
              </h1>
              <p className="text-base text-violet-300/80 font-semibold uppercase tracking-widest mb-6">
                {subtitle}
              </p>
              <p className="text-lg text-white/60 leading-relaxed max-w-lg mb-10">
                {summary}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-8 py-6 border-t border-white/[0.08] mb-8">
                {meta.map((item) => (
                  <div key={item.label}>
                    <span className="text-[10px] uppercase tracking-widest text-white/30 font-semibold block mb-1">
                      {item.label}
                    </span>
                    <span className="text-sm font-semibold text-white">{item.value}</span>
                  </div>
                ))}
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-white/30 font-semibold block mb-1">
                    Discipline
                  </span>
                  <span className="text-sm font-semibold text-white">{discipline}</span>
                </div>
              </div>

              {/* CTA */}
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-violet-600 hover:bg-violet-500 rounded-full transition-all shadow-lg shadow-violet-900/30"
              >
                View Live Product <ExternalLink size={14} />
              </a>
            </div>

            {/* Right: Hero image — bleeds to bottom edge */}
            <div className="relative w-full rounded-t-2xl overflow-hidden border border-white/[0.08] border-b-0 bg-zinc-900 shadow-2xl shadow-violet-900/10">
              <img
                src="/images/shove-hero.png"
                alt="Shove.bet — live poker table interface"
                fetchPriority="high"
                decoding="async"
                className="w-full object-cover object-top"
                style={{ aspectRatio: '16/11' }}
              />
              {/* Bottom fade to merge with next section */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#09090b] to-transparent pointer-events-none" />
              {/* Violet tint overlay */}
              <div className="absolute inset-0 bg-violet-950/10 mix-blend-multiply pointer-events-none" />
            </div>
          </div>
        </div>
      </header>

      {/* ── 2. PRODUCT OVERVIEW ─────────────────────────────────── */}
      <Section id="cs-overview">
        <div className="max-w-3xl reveal">
          <SectionLabel label="01 — Product Overview" />
          <SectionHeading>What is Shove.bet?</SectionHeading>
          <p className="text-xl text-white/65 leading-relaxed">
            {productOverview}
          </p>
        </div>
      </Section>

      {/* ── 3. MY ROLE ──────────────────────────────────────────── */}
      <Section id="cs-role">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div className="reveal">
            <SectionLabel label="02 — My Role" />
            <SectionHeading>Design ownership</SectionHeading>
            <p className="text-base text-white/60 leading-relaxed">
              {myRole.summary}
            </p>
          </div>
          <div className="reveal reveal-delay-1">
            <div className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]">
              <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-5">
                Contributions
              </p>
              <ul className="space-y-4">
                {myRole.contributions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                    <span className="text-sm text-white/75 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tools */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <p className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.04] border border-white/[0.08] rounded-lg"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 4. PRODUCT EXPERIENCE ───────────────────────────────── */}
      <Section id="cs-experience">
        <SectionLabel label="03 — The Product Experience" />
        <SectionHeading>Key experiences & flows I designed</SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {problem.points.map((point, idx) => (
            <div
              key={idx}
              className="reveal p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08]"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="w-10 h-10 bg-violet-500/10 border border-violet-500/20 rounded-xl flex items-center justify-center text-violet-300 font-bold text-sm mb-4">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{point.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal p-8 rounded-2xl bg-violet-500/5 border border-violet-500/15">
          <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3">My Approach</p>
          <p className="text-xl text-white/75 leading-relaxed max-w-3xl">{approach}</p>
        </div>
      </Section>

      {/* ── 5. USER FLOWS ───────────────────────────────────────── */}
      <Section id="cs-flows">
        <SectionLabel label="04 — User Flows" />
        <SectionHeading>How users move through the product</SectionHeading>

        <div className="space-y-8">
          {userFlows.map((flow, idx) => (
            <div
              key={idx}
              className="reveal p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08]"
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-6 flex-col sm:flex-row sm:items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{flow.title}</h3>
                <FlowDiagram steps={flow.steps} />
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-2xl">
                {flow.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 6. DESIGN DECISIONS ─────────────────────────────────── */}
      <Section id="cs-decisions">
        <SectionLabel label="05 — Design Decisions" />
        <SectionHeading>Key UX decisions & the reasoning behind them</SectionHeading>

        <div className="space-y-16">
          {decisions.map((decision, idx) => (
            <div
              key={idx}
              className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-start border-t border-white/[0.06] pt-12 first:border-0 first:pt-0"
            >
              {/* Text */}
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-3 block">
                  Decision {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-bold text-white mb-6">{decision.title}</h3>
                <div className="space-y-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/30 block mb-2">
                      Why I made this call
                    </span>
                    <p className="text-sm text-white/65 leading-relaxed">{decision.why}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 block mb-2">
                      Result
                    </span>
                    <p className="text-sm text-white/80 leading-relaxed font-medium">{decision.impact}</p>
                  </div>
                </div>
              </div>

              {/* Screen */}
              {decision.image && (
                <div className="w-full rounded-xl overflow-hidden border border-white/[0.08] bg-zinc-900 shadow-xl">
                  <img
                    src={decision.image}
                    alt={decision.title}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ── 7. UI DESIGN SHOWCASE ───────────────────────────────── */}
      <Section id="cs-ui">
        <SectionLabel label="06 — UI Design" />
        <SectionHeading>The interface at full scale</SectionHeading>

        {/* Interactive screen switcher */}
        {screens && screens.length > 0 && (
          <div className="reveal mb-12">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {['Table View', 'Betting Controls', 'Game Context', 'Visual Detail'].map((label, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveScreen(idx)}
                  className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                    activeScreen === idx
                      ? 'bg-violet-600 text-white'
                      : 'bg-white/[0.04] text-white/60 hover:bg-white/[0.08] hover:text-white border border-white/[0.08]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Active screen */}
            <div className="w-full rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900 shadow-2xl shadow-violet-900/10 transition-all duration-300">
              <img
                src={screens[activeScreen]}
                alt={`Shove.bet screen ${activeScreen + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-sm text-white/40 text-center">
              {uiShowcase && uiShowcase[activeScreen + 1]?.caption}
            </p>
          </div>
        )}

        {/* 2-up grid of remaining screens */}
        {uiShowcase && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {uiShowcase.slice(1).map((item, idx) => (
              <div
                key={idx}
                className="reveal rounded-2xl overflow-hidden border border-white/[0.08] bg-zinc-900"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <img
                  src={item.image}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-white/40">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* ── 8. DESIGN SYSTEM ────────────────────────────────────── */}
      <Section id="cs-system">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 items-start">
          <div className="reveal">
            <SectionLabel label="07 — Design System" />
            <SectionHeading>Principles behind the components</SectionHeading>
            <p className="text-base text-white/60 leading-relaxed">
              {designSystem.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 reveal reveal-delay-1">
            {designSystem.principles.map((principle, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-violet-500/20 transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <span className="text-violet-400 text-xs font-bold">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{principle.label}</h4>
                <p className="text-xs text-white/55 leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 8b. IMPACT STATS ────────────────────────────────────── */}
      <Section id="cs-impact" className="border-b-0">
        <div className="reveal">
          <SectionLabel label="08 — Outcome" />
          <SectionHeading>Impact & takeaways</SectionHeading>

          <div className="flex flex-wrap gap-12 md:gap-20 mb-12">
            {impact.map((stat, idx) => (
              <div key={idx}>
                <h3 className="text-5xl md:text-6xl font-black text-violet-400 mb-2 tracking-tight">
                  {stat.val}
                </h3>
                <p className="text-xs font-semibold text-white/40 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 9. REFLECTION ─────────────────────────────────────── */}
        <div className="reveal reveal-delay-1 mt-12 pt-12 border-t border-white/[0.06]">
          <SectionLabel label="09 — Reflection" />
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            What I learned designing a gaming product
          </h3>
          <blockquote className="text-lg text-white/70 leading-relaxed max-w-3xl border-l-2 border-violet-500/40 pl-6 italic">
            {reflection}
          </blockquote>
        </div>
      </Section>

      {/* ── END CTA ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="reveal p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-violet-400 mb-2">
                Continue exploring
              </p>
              <h3 className="text-2xl font-bold text-white mb-2">
                See the rest of my work
              </h3>
              <p className="text-sm text-white/55 max-w-md">
                From AI SaaS platforms to fintech apps and Shopify storefronts — explore the full portfolio.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/[0.06] hover:bg-white/[0.10] border border-white/[0.10] rounded-full transition-all"
              >
                All Projects <ArrowUpRight size={14} />
              </Link>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white/50 hover:text-white transition-colors"
              >
                <ArrowLeft size={14} /> Back to home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
