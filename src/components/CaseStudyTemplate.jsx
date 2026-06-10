import {
  ArrowLeft,
  ArrowUpRight,
  MessageCircle,
  Mail,
  Search,
  Target,
  PenTool,
  Layout,
  CheckCircle,
  Zap,
  PlayCircle,
  Film,
  Image as ImageIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductFrame from './ProductFrame';
import CaseStudyTopBar from './CaseStudyTopBar';
import CaseStudyRail from './CaseStudyRail';
import CaseStudyDocPanel from './CaseStudyDocPanel';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ── Icon maps ─────────────────────────────────────────────────── */

const PROCESS_ICONS = [
  <Search size={18} />,
  <Target size={18} />,
  <PenTool size={18} />,
  <Layout size={18} />,
  <CheckCircle size={18} />,
];

const TOOL_ICONS = {
  Figma: <Layout size={14} />,
  ProtoPie: <Zap size={14} />,
  Notion: <Search size={14} />,
  Forms: <PenTool size={14} />,
  FigJam: <Layout size={14} />,
  Jitter: <PlayCircle size={14} />,
  LottieFiles: <Film size={14} />,
  Illustrator: <ImageIcon size={14} />,
  Cursor: <Zap size={14} />,
  ChatGPT: <Zap size={14} />,
  Claude: <Zap size={14} />,
  Antigravity: <Zap size={14} />,
  Canva: <PenTool size={14} />,
};

/* ── Section registry ──────────────────────────────────────────── */

function buildSections(data) {
  return [
    { id: 'cs-hero',       label: 'Overview'   },
    { id: 'cs-challenge',  label: 'Challenge'  },
    data.goals?.length > 0      ? { id: 'cs-insights',  label: 'Goals'      } : null,
    { id: 'cs-approach',   label: 'Approach'   },
    data.decisions?.length > 0  ? { id: 'cs-decisions', label: 'Decisions'  } : null,
    { id: 'cs-solution',   label: 'Solution'   },
    { id: 'cs-reflection', label: 'Reflection' },
  ].filter(Boolean);
}

/* ── Template ──────────────────────────────────────────────────── */

export default function CaseStudyTemplate({ data }) {
  useScrollReveal();

  if (!data) return null;

  const { accent } = data;
  const sections = buildSections(data);

  return (
    <div className="min-h-screen workspace-canvas">
      <Navbar />
      <CaseStudyTopBar title={data.title} liveUrl={data.liveUrl} />

      <main>
        <div className="workspace-case-grid">
          <CaseStudyRail sections={sections} />

          <div className="min-w-0">

            {/* ── 01 OVERVIEW ─────────────────────────────────── */}
            <CaseStudyDocPanel id="cs-hero" index="01. Overview">

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {data.tags?.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 ${accent.bg} border ${accent.border} rounded-md text-xs font-semibold uppercase tracking-wider ${accent.text}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Two-column: text + media */}
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">

                {/* Left: title, summary, meta, tools, CTA */}
                <div>
                  <h1 className="text-detail-title font-black tracking-tighter text-text-primary mb-5">
                    {data.title}
                  </h1>
                  <p className="cs-section-intro mb-8">
                    {data.summary}
                  </p>

                  {/* Meta grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-5 py-6 border-t border-card-border mb-7">
                    {data.meta?.map((item) => (
                      <div key={item.label}>
                        <span className="workspace-doc-label block">{item.label}</span>
                        <span className="font-semibold text-text-primary text-sm leading-snug">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools */}
                  {data.tools?.length > 0 && (
                    <div className="mb-8">
                      <p className="workspace-doc-label mb-3">Tools used</p>
                      <div className="flex flex-wrap gap-2">
                        {data.tools.map((tool) => (
                          <span
                            key={tool}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-card-border rounded-lg text-xs font-semibold text-text-secondary bg-bg-alt/40"
                          >
                            <span className="opacity-60">{TOOL_ICONS[tool] || <Layout size={12} />}</span>
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Live link */}
                  {data.liveUrl && (
                    <a
                      href={data.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="workspace-btn-primary"
                    >
                      View live project <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>

                {/* Right: hero media */}
                <div className="cs-media-frame group">
                  <ProductFrame
                    src={data.heroImage}
                    fallback={data.fallback}
                    alt={`${data.title} preview`}
                    label={data.title}
                    focused
                    className="w-full"
                  />
                </div>
              </div>
            </CaseStudyDocPanel>

            {/* ── 02 CHALLENGE ────────────────────────────────── */}
            <CaseStudyDocPanel id="cs-challenge" index="02. Challenge" title="The challenge">
              <p className="cs-section-intro mb-12">
                {data.problem?.context}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {data.problem?.points?.map((block, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl border border-card-border bg-bg-alt/40 scroll-reveal fade-up"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div
                      className={`w-9 h-9 ${accent.bg} rounded-lg flex items-center justify-center font-mono font-bold text-xs mb-5 ${accent.text}`}
                    >
                      0{idx + 1}
                    </div>
                    <h3 className="font-bold text-text-primary text-base mb-2 tracking-tight">
                      {block.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{block.desc}</p>
                  </div>
                ))}
              </div>
            </CaseStudyDocPanel>

            {/* ── 03 GOALS / INSIGHTS — conditional ───────────── */}
            {data.goals?.length > 0 && (
              <CaseStudyDocPanel id="cs-insights" index="03. Goals" title="Product goals">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl">
                  {data.goals.map((goal, idx) => (
                    <div
                      key={idx}
                      className="cs-insight-pill scroll-reveal fade-up"
                      style={{ transitionDelay: `${idx * 80}ms` }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'var(--accent)' }}
                      />
                      {goal}
                    </div>
                  ))}
                </div>
              </CaseStudyDocPanel>
            )}

            {/* ── 04 APPROACH ─────────────────────────────────── */}
            <CaseStudyDocPanel id="cs-approach" index="04. Approach" title="The approach">
              <p className="cs-section-intro mb-12">
                {data.approach}
              </p>
              {data.process?.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {data.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl border border-card-border bg-bg-alt/30 scroll-reveal fade-up"
                      style={{ transitionDelay: `${idx * 80}ms` }}
                    >
                      <div className={`${accent.text} mb-3 opacity-75`}>
                        {PROCESS_ICONS[idx] || <Layout size={18} />}
                      </div>
                      <p className="font-mono text-[0.6rem] text-text-secondary mb-1.5 uppercase tracking-wider">
                        Phase {String(idx + 1).padStart(2, '0')}
                      </p>
                      <h3 className="font-bold text-text-primary text-sm mb-2 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </CaseStudyDocPanel>

            {/* ── 05 DECISIONS — conditional ──────────────────── */}
            {data.decisions?.length > 0 && (
              <CaseStudyDocPanel id="cs-decisions" index="05. Decisions" title="Product decisions">
                <div className="space-y-20">
                  {data.decisions.map((decision, idx) => (
                    <div
                      key={idx}
                      className="scroll-reveal fade-up"
                      style={{ transitionDelay: `${idx * 120}ms` }}
                    >
                      {/* Full-width image */}
                      {decision.image && (
                        <div className="cs-media-frame group mb-7">
                          <ProductFrame
                            src={decision.image}
                            fallback={decision.fallback}
                            alt={decision.title}
                            label={decision.title}
                            className="w-full"
                          />
                        </div>
                      )}
                      {/* Title + description */}
                      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-5 md:gap-10">
                        <h3 className="text-section-title font-black text-text-primary tracking-tight">
                          {decision.title}
                        </h3>
                        <p className="text-body-base text-text-secondary">
                          {decision.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CaseStudyDocPanel>
            )}

            {/* ── 06 SOLUTION ─────────────────────────────────── */}
            <CaseStudyDocPanel id="cs-solution" index="06. Solution" title="The solution">
              <div className="cs-media-frame group mb-8">
                <ProductFrame
                  src={data.solution?.video || data.solution?.fallback}
                  fallback={data.solution?.fallback}
                  alt={`${data.title} — final product`}
                  label={`${data.title} — Final product`}
                  focused
                  className="w-full"
                />
              </div>
              <p className="cs-section-intro max-w-3xl">
                {data.solution?.overview}
              </p>
            </CaseStudyDocPanel>

            {/* ── 07 REFLECTION ───────────────────────────────── */}
            <CaseStudyDocPanel id="cs-reflection" index="07. Reflection" title="Impact & reflection">
              {data.impact?.length > 0 && (
                <div className="flex flex-wrap gap-6 md:gap-16 mb-10">
                  {data.impact.map((stat, idx) => (
                    <div
                      key={idx}
                      className="cs-stat-block scroll-reveal fade-up"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                      <span className={`cs-stat-val ${accent.text}`}>{stat.val}</span>
                      <span className="cs-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
              {data.takeaway && (
                <blockquote className="pl-5 border-l-2 border-accent text-lg text-text-primary font-medium italic max-w-2xl mt-6">
                  &ldquo;{data.takeaway}&rdquo;
                </blockquote>
              )}
            </CaseStudyDocPanel>

            {/* ── CONTACT ─────────────────────────────────────── */}
            <CaseStudyDocPanel index="08. Contact" title="Work together">
              <p className="text-text-secondary mb-6 max-w-xl">
                Open to product design collaborations, roles, and ambitious product builds.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/2349157826355?text=Hi%20Godwin%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="workspace-btn inline-flex items-center gap-2"
                >
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a
                  href="mailto:fabianokechukwu6@gmail.com?subject=Portfolio%20Inquiry"
                  className="workspace-btn inline-flex items-center gap-2"
                >
                  <Mail size={15} /> Email
                </a>
              </div>
            </CaseStudyDocPanel>

            {/* ── BACK LINK ───────────────────────────────────── */}
            <div className="pt-2 pb-10 text-center">
              <Link
                to="/"
                className="workspace-open-link inline-flex items-center gap-2 justify-center"
              >
                <ArrowLeft size={16} /> Back to workspace
              </Link>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
