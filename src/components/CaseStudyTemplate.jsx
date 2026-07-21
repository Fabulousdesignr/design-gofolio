import { ArrowLeft, ArrowUpRight, Download, Mail, MessageCircle, Layout, Zap, Search, Target, PenTool, CheckCircle, PlayCircle, Film, Image } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductFrame from './ProductFrame';
import CaseStudyTopBar from './CaseStudyTopBar';
import CaseStudyRail from './CaseStudyRail';
import CaseStudyDocPanel from './CaseStudyDocPanel';
import { useScrollReveal } from '../hooks/useScrollReveal';

function buildRailSections(data) {
  return [
    { id: 'cs-hero', label: 'Project' },
    data.overview ? { id: 'cs-overview', label: 'Overview' } : null,
    { id: 'cs-problem', label: 'Problem' },
    data.goals ? { id: 'cs-goals', label: 'Goals' } : null,
    { id: 'cs-approach', label: 'Approach' },
    { id: 'cs-process', label: 'Process' },
    { id: 'cs-decisions', label: 'Decisions' },
    { id: 'cs-solution', label: 'Solution' },
    { id: 'cs-impact', label: 'Impact' },
  ].filter(Boolean);
}

export default function CaseStudyTemplate({ data }) {
  useScrollReveal();

  if (!data) return null;

  const { accent } = data;
  const railSections = buildRailSections(data);

  return (
    <div className="min-h-screen workspace-canvas">
      <Navbar isCaseStudy={true} />
      <CaseStudyTopBar title={data.title} liveUrl={data.liveUrl} />

      <main>
        <div className="workspace-case-grid">
          <CaseStudyRail sections={railSections} />

          <div className="min-w-0">
            <CaseStudyDocPanel id="cs-hero" index="01. Project">
              <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 items-start">
                <div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {data.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 ${accent.bg} border ${accent.border} rounded-md text-xs font-semibold uppercase tracking-wider ${accent.text}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-text-primary mb-6 leading-[1.08]">
                    {data.title}
                  </h1>
                  <p className="text-lg md:text-xl text-text-secondary font-medium leading-relaxed max-w-2xl mb-8">
                    {data.summary}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 py-6 border-t border-card-border">
                    {data.meta.map((item) => (
                      <div key={item.label}>
                        <span className="workspace-doc-label block mb-1">{item.label}</span>
                        <span className="font-semibold text-text-primary text-sm">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <ProductFrame
                  src={data.heroImage}
                  fallback={data.fallback}
                  alt={`${data.title} preview`}
                  label={data.title}
                  focused
                  className="w-full"
                />
              </div>
            </CaseStudyDocPanel>

            {data.overview && (
              <CaseStudyDocPanel id="cs-overview" index="02. Overview">
                <p className="text-xl md:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl">
                  {data.overview}
                </p>
              </CaseStudyDocPanel>
            )}

            <CaseStudyDocPanel id="cs-problem" index="03. Problem" title="The problem">
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-medium mb-10 max-w-3xl">
                {data.problem.context}
              </p>
            
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.problem.points.map((block, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl border border-card-border bg-bg-alt/50 scroll-reveal fade-up"
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className={`w-10 h-10 ${accent.bg} rounded-lg flex items-center justify-center ${accent.text} font-bold text-lg mb-4`}>
                      0{idx + 1}
                    </div>
                    <h3 className="text-lg font-bold text-text-primary mb-2">{block.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{block.desc}</p>
                  </div>
                ))}
              </div>
            </CaseStudyDocPanel>

            {data.goals && (
              <CaseStudyDocPanel id="cs-goals" index="04. Goals" title="Product goals">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
                  {data.goals.map((goal, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 border border-card-border rounded-xl bg-bg-alt/40"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      <span className="font-medium text-text-primary">{goal}</span>
                    </div>
                  ))}
                </div>
              </CaseStudyDocPanel>
            )}

            <CaseStudyDocPanel id="cs-approach" index="05. Approach" title="The approach">
              <p className="text-lg md:text-2xl text-text-secondary leading-relaxed font-medium max-w-3xl">
                {data.approach}
              </p>
              {data.approachImage && (
                <div className="mt-10">
                  <ProductFrame
                    src={data.approachImage.src}
                    fallback={data.approachImage.fallback}
                    alt="Approach screen"
                    label="Approach"
                    className="w-full"
                  />
                  {data.approachImage.caption && (
                    <p className="mt-3 text-sm text-text-secondary">{data.approachImage.caption}</p>
                  )}
                </div>
              )}
            </CaseStudyDocPanel>

            <CaseStudyDocPanel id="cs-process" index="06. Process" title="Design process">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {data.process.map((step, idx) => {
                  const icons = [<Search size={20} />, <Target size={20} />, <PenTool size={20} />, <Layout size={20} />, <CheckCircle size={20} />];
                  return (
                    <div key={idx} className="p-4 border border-card-border rounded-xl bg-bg-alt/30">
                      <div className={`${accent.text} mb-3`}>{icons[idx]}</div>
                      <h3 className="font-bold text-text-primary text-sm mb-2">{step.title}</h3>
                      <p className="text-xs text-text-secondary leading-relaxed">{step.desc}</p>
                    </div>
                  );
                })}
              </div>
            </CaseStudyDocPanel>

            <CaseStudyDocPanel id="cs-decisions" index="07. Decisions" title="Key design decisions">
            <div className="space-y-16">
              {data.decisions.map((decision, idx) => (
                <div key={idx} className="scroll-reveal fade-up border-t border-card-border pt-12 first:border-0 first:pt-0">
                  <h3 className="text-2xl font-bold text-text-primary mb-6">{decision.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <span className={`workspace-doc-label block mb-2 ${accent.text}`}>Why</span>
                      <p className="text-text-secondary leading-relaxed">{decision.why}</p>
                    </div>
                    <div>
                      <span className="workspace-doc-label block mb-2 text-emerald-400">Impact</span>
                      <p className="text-text-primary font-medium leading-relaxed">{decision.impact}</p>
                    </div>
                  </div>
                  {decision.image && (
                    <div>
                      <ProductFrame src={decision.image} fallback={decision.fallback} alt={decision.title} label={decision.title} />
                      <p className="mt-3 text-sm text-text-secondary">
                        {decision.caption || `View: ${decision.title}`}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            </CaseStudyDocPanel>

            <CaseStudyDocPanel id="cs-solution" index="08. Solution" title="The solution">
            <div className="space-y-12">
              {data.finalDesign.map((item, idx) => (
                <div key={idx} className="scroll-reveal fade-up">
                  <ProductFrame src={item.image} fallback={item.fallback} alt={item.caption} label={item.caption} />
                  <p className="mt-3 text-sm text-text-secondary">{item.caption}</p>
                </div>
              ))}
            </div>
            </CaseStudyDocPanel>

            <CaseStudyDocPanel id="cs-impact" index="09. Impact" title="Impact & takeaways">
            <div className="flex flex-wrap gap-10 md:gap-14">
              {data.impact.map((stat, idx) => (
                <div key={idx} className="min-w-[120px]">
                  <h3 className={`text-4xl md:text-5xl font-black ${accent.text} mb-2 tracking-tight`}>{stat.val}</h3>
                  <p className="text-xs font-semibold text-text-secondary uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
            {data.takeaway && (
              <blockquote className="mt-10 pl-4 border-l-2 border-accent text-lg text-text-primary font-medium italic max-w-2xl">
                &ldquo;{data.takeaway}&rdquo;
              </blockquote>
            )}
            </CaseStudyDocPanel>

            <CaseStudyDocPanel index="10. Tools" title="Tools used">
            <div className="flex flex-wrap gap-3">
              {(data.tools || []).map((tool) => {
                const toolIcons = {
                  Figma: <Layout size={18} />,
                  ProtoPie: <Zap size={18} />,
                  Notion: <Search size={18} />,
                  Forms: <PenTool size={18} />,
                  Canva: <PenTool size={18} />,
                  FigJam: <Layout size={18} />,
                  Jitter: <PlayCircle size={18} />,
                  LottieFiles: <Film size={18} />,
                  Illustrator: <Image size={18} />,
                };

                return (
                  <div
                    key={tool}
                    className="flex items-center gap-3 px-4 py-2.5 border border-card-border rounded-lg bg-bg-alt/40"
                  >
                    <span className="text-text-secondary">{toolIcons[tool] || <Layout size={18} />}</span>
                    <span className="font-semibold text-text-primary text-sm">{tool}</span>
                  </div>
                );
              })}
            </div>
            </CaseStudyDocPanel>

            {(data.liveUrl || data.caseStudyUrl) && (
              <CaseStudyDocPanel index="11. Links" title="Project links">
                <div className="flex flex-wrap gap-4">
                  {data.liveUrl && (
                    <a
                      href={data.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="workspace-btn workspace-btn--primary inline-flex items-center gap-2"
                    >
                      View live <ArrowUpRight size={16} />
                    </a>
                  )}
                  {data.caseStudyUrl && (
                    <a
                      href={data.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="workspace-btn inline-flex items-center gap-2"
                    >
                      Full case study <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </CaseStudyDocPanel>
            )}

            <CaseStudyDocPanel index="12. Contact" title="Work together">
              <p className="text-text-secondary mb-6 max-w-xl">
                Open to product design collaborations, roles, and ambitious builds.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/2349157826355?text=Hi%20Godwin%2C%20I%20came%20across%20your%20portfolio%20and%20I%E2%80%99d%20love%20to%20connect%20with%20you."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="workspace-btn inline-flex items-center gap-2"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
                <a
                  href="mailto:fabianokechukwu6@gmail.com?subject=Portfolio%20Inquiry"
                  className="workspace-btn inline-flex items-center gap-2"
                >
                  <Mail size={16} /> Email
                </a>
              </div>
            </CaseStudyDocPanel>

            <div className="pt-4 pb-8 text-center">
              <Link to="/" className="workspace-open-link inline-flex items-center gap-2 justify-center">
                <ArrowLeft size={18} /> Back to workspace
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
