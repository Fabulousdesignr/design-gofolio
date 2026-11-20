import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Lock,
} from 'lucide-react';
import Navbar from '../v2/Navbar';
import Footer from '../v2/Footer';
import MediaFrame from '../site/MediaFrame';
import StatusPill from '../site/StatusPill';
import {
  caseStudySections,
  getCaseStudy,
  getNextCaseStudy,
} from '../../data/aiCaseStudies';
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { GithubIcon } from '../site/BrandIcons';

const SECTION_IDS = caseStudySections.map((section) => section.id);

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean);
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function SectionHeading({ index, title }) {
  return (
    <div className="mb-7 border-b border-line pb-4">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[10px] text-signal">
          {String(index + 1).padStart(2, '0')}
        </span>
        <h2 className="text-2xl font-semibold tracking-[-0.035em] text-text-primary md:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function CaseStudySection({ id, index, title, children }) {
  return (
    <section id={id} className="case-study-section border-b border-line py-10 first:pt-0 md:py-12">
      <SectionHeading index={index} title={title} />
      {children}
    </section>
  );
}

export default function CaseStudyTemplate() {
  const { slug } = useParams();
  const study = getCaseStudy(slug);
  const next = getNextCaseStudy(slug);
  const active = useActiveSection(SECTION_IDS);

  useDocumentMeta(
    study ? `${study.title} case study` : 'Case study not found',
    study?.summary || 'A detailed case study by Godwin Okechukwu.'
  );

  if (!study) {
    return (
      <div className="min-h-screen bg-bg-primary text-text-primary">
        <Navbar />
        <main className="site-shell flex min-h-[70vh] flex-col items-start justify-center py-32">
          <p className="eyebrow">404</p>
          <h1 className="display-section mt-5">Case study not found.</h1>
          <p className="prose-site mt-5">
            The project you are looking for does not exist. The work index has the current
            case studies.
          </p>
          <Link
            to="/work"
            className="mt-8 inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-signal-border hover:text-signal"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to work
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const {
    number,
    title,
    category,
    tagline,
    summary,
    status,
    role,
    stack,
    links,
    hero,
    quickFacts,
    overview,
    problem,
    objectives,
    process,
    ai,
    architecture,
    decisions,
    challenges,
    screenshots,
    code,
    demo,
    repository,
    lessons,
  } = study;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main id="main-content">
        <header className="border-b border-line pb-10 pt-28 md:pb-14 md:pt-36">
          <div className="site-shell">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-text-secondary transition-colors hover:text-text-primary"
              >
                <ArrowLeft size={13} aria-hidden="true" />
                Work / {title}
              </Link>
              <div className="flex flex-wrap items-center gap-3">
                <StatusPill tone={status.includes('invitation') ? 'learning' : 'live'}>
                  {status}
                </StatusPill>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
                  {number} / 03
                </span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8">
                <p className="eyebrow">{category}</p>
                <h1 className="display-hero mt-5 text-text-primary">{title}</h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
                  {tagline}
                </p>
              </div>
              <div className="lg:col-span-4 lg:pt-8">
                <p className="text-sm leading-relaxed text-text-secondary">{summary}</p>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                  {links.live ? (
                    <a
                      href={links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-signal"
                    >
                      Live product
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  ) : null}
                  {links.github ? (
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
                    >
                      <GithubIcon size={14} />
                      Repository
                    </a>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="mt-10 md:mt-14">
              <MediaFrame
                src={hero.image}
                alt={hero.alt}
                imgClassName="aspect-[16/9]"
                priority
              />
              <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.11em] text-text-tertiary">
                {hero.caption}
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="bg-bg-primary p-4 md:p-5">
                  <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-tertiary">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-sm font-medium text-text-primary">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <div className="site-shell py-10 md:py-14">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky-rail">
                <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-tertiary">
                  On this page
                </p>
                <nav aria-label="Case study sections" className="mt-4 border-l border-line">
                  {caseStudySections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block border-l py-1.5 pl-3 text-xs leading-snug transition-colors ${
                        active === section.id
                          ? '-ml-px border-signal text-text-primary'
                          : '-ml-px border-transparent text-text-tertiary hover:text-text-secondary'
                      }`}
                    >
                      {section.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-8 border-t border-line pt-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-tertiary">
                    Stack
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-text-secondary">
                    {stack.join(', ')}
                  </p>
                </div>

                <div className="mt-6 border-t border-line pt-5">
                  <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-text-tertiary">
                    Role
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-text-secondary">{role}</p>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-9">
              <CaseStudySection id="overview" index={0} title="Overview">
                <div className="case-study-prose">
                  {overview.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-3">
                  {overview.highlights.map((highlight) => (
                    <div key={highlight.title} className="bg-bg-primary p-5">
                      <h3 className="text-sm font-medium text-text-primary">{highlight.title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-text-secondary">
                        {highlight.body}
                      </p>
                    </div>
                  ))}
                </div>
              </CaseStudySection>

              <CaseStudySection id="problem" index={1} title="Problem and opportunity">
                <div className="case-study-prose">
                  {problem.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 border-l border-signal-border bg-signal-soft/40 p-5 md:p-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-signal">
                    {problem.opportunity.title}
                  </p>
                  <p className="mt-3 max-w-3xl text-sm leading-relaxed text-text-secondary">
                    {problem.opportunity.body}
                  </p>
                </div>
              </CaseStudySection>

              <CaseStudySection id="objectives" index={2} title="Product objectives">
                <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
                  {objectives.map((objective, index) => (
                    <div key={objective.title} className="bg-bg-primary p-5 md:p-6">
                      <span className="font-mono text-[10px] text-text-tertiary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-4 text-base font-medium text-text-primary">
                        {objective.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {objective.body}
                      </p>
                    </div>
                  ))}
                  {objectives.length % 2 === 1 ? (
                    <div aria-hidden="true" className="hidden bg-bg-primary sm:block" />
                  ) : null}
                </div>
              </CaseStudySection>

              <CaseStudySection id="role" index={3} title="Role and contributions">
                <div className="case-study-prose">
                  {study.roleDetails.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8">
                  <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-text-tertiary">
                    Contributions
                  </p>
                  <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
                    {study.roleDetails.contributions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 border-b border-line pb-2.5 text-sm text-text-secondary"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-signal" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CaseStudySection>

              <CaseStudySection id="process" index={4} title="Design and development process">
                <div className="border-t border-line">
                  {process.map((step, index) => (
                    <div
                      key={step.title}
                      className="grid grid-cols-1 gap-2 border-b border-line py-5 sm:grid-cols-[48px_1fr] sm:gap-5"
                    >
                      <span className="font-mono text-[10px] text-text-tertiary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-text-primary">{step.title}</h3>
                        <p className="mt-1.5 max-w-3xl text-sm leading-relaxed text-text-secondary">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CaseStudySection>

              <CaseStudySection id="ai" index={5} title="AI technologies and integrations">
                <p className="case-study-prose">{ai.intro}</p>

                <div className="mt-7 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
                  {ai.items.map((item) => (
                    <div key={item.name} className="bg-bg-primary p-5">
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-medium text-text-primary">{item.name}</h3>
                        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-text-tertiary">
                          {item.role}
                        </span>
                      </div>
                      <p className="mt-2.5 text-xs leading-relaxed text-text-secondary">
                        {item.body}
                      </p>
                    </div>
                  ))}
                  {ai.items.length % 2 === 1 ? (
                    <div aria-hidden="true" className="hidden bg-bg-primary sm:block" />
                  ) : null}
                </div>

                {ai.note ? (
                  <div className="mt-6 border border-line p-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-signal">
                      {ai.note.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                      {ai.note.body}
                    </p>
                  </div>
                ) : null}
              </CaseStudySection>

              <CaseStudySection id="architecture" index={6} title="Technical architecture">
                <p className="case-study-prose">{architecture.intro}</p>

                <div className="mt-7 flex flex-col gap-2 border border-line bg-bg-panel p-4 sm:flex-row sm:items-center sm:justify-between">
                  {architecture.flow.map((step, index) => (
                    <div key={step} className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-[0.06em] text-text-secondary">
                        {step}
                      </span>
                      {index < architecture.flow.length - 1 ? (
                        <ArrowRight
                          size={12}
                          className="rotate-90 text-text-tertiary sm:rotate-0"
                          aria-hidden="true"
                        />
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
                  {architecture.layers.map((layer) => (
                    <div key={layer.name} className="bg-bg-primary p-5">
                      <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-signal">
                        {layer.label}
                      </p>
                      <h3 className="mt-2 text-base font-medium text-text-primary">{layer.name}</h3>
                      <ul className="mt-3 space-y-1.5">
                        {layer.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs text-text-secondary">
                            <span className="mt-1.5 h-0.5 w-2 shrink-0 bg-line-strong" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CaseStudySection>

              <CaseStudySection id="decisions" index={7} title="Important implementation decisions">
                <div className="border-t border-line">
                  {decisions.map((decision, index) => (
                    <div
                      key={decision.title}
                      className="grid grid-cols-1 gap-3 border-b border-line py-6 sm:grid-cols-[48px_1fr] sm:gap-5"
                    >
                      <span className="font-mono text-[10px] text-text-tertiary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-text-primary">{decision.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                          <strong className="font-medium text-text-primary">Decision: </strong>
                          {decision.choice}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                          <strong className="font-medium text-text-primary">Why: </strong>
                          {decision.rationale}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {code ? (
                  <div className="mt-7">
                    <div className="code-block">
                      <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
                        <span className="font-mono text-[10px] text-text-secondary">{code.label}</span>
                        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-text-tertiary">
                          {code.language}
                        </span>
                      </div>
                      <pre>
                        <code>{code.code}</code>
                      </pre>
                    </div>
                    <p className="mt-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.08em] text-text-tertiary">
                      {code.caption}
                    </p>
                  </div>
                ) : null}
              </CaseStudySection>

              <CaseStudySection id="challenges" index={8} title="Challenges and solutions">
                <div className="border-t border-line">
                  {challenges.map((item, index) => (
                    <div
                      key={item.challenge}
                      className="grid grid-cols-1 gap-3 border-b border-line py-5 md:grid-cols-[1fr_1fr] md:gap-8"
                    >
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-text-tertiary">
                          {String(index + 1).padStart(2, '0')} / Challenge
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-text-primary">
                          {item.challenge}
                        </p>
                      </div>
                      <div>
                        <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-signal">
                          Solution
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                          {item.solution}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CaseStudySection>

              <CaseStudySection id="screenshots" index={9} title="Product screenshots">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {screenshots.map((screenshot, index) => (
                    <MediaFrame
                      key={screenshot.src}
                      src={screenshot.src}
                      alt={screenshot.alt}
                      caption={screenshot.caption}
                      className={index === 0 ? 'sm:col-span-2' : ''}
                      imgClassName={index === 0 ? 'aspect-[16/9]' : 'aspect-[16/10]'}
                    />
                  ))}
                  {screenshots.length % 2 === 0 ? (
                    <div aria-hidden="true" className="hidden bg-bg-primary sm:block" />
                  ) : null}
                </div>
              </CaseStudySection>

              <CaseStudySection id="demo" index={10} title="Live demonstration">
                <div className="border border-line bg-bg-panel p-6 md:p-8">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-mono text-[9px] uppercase tracking-[0.13em] text-signal">
                        Live deployment
                      </p>
                      <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-text-primary">
                        Try {title}
                      </h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
                        {demo.note}
                      </p>
                    </div>
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-2 bg-paper px-5 py-3 text-sm font-semibold text-paper-ink transition-colors hover:bg-signal"
                    >
                      {demo.label}
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  </div>

                  {demo.video ? (
                    <video
                      src={demo.video}
                      controls
                      playsInline
                      preload="metadata"
                      poster={hero.image}
                      className="mt-7 w-full border border-line"
                    >
                      Your browser does not support embedded video.
                    </video>
                  ) : null}
                </div>
              </CaseStudySection>

              <CaseStudySection id="repository" index={11} title="GitHub repository">
                <div className="border border-line p-6">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center border border-line text-text-secondary">
                        {repository.public ? <GithubIcon size={16} /> : <Lock size={15} />}
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-text-primary">
                          {repository.public ? 'Public source' : 'Private source'}
                        </h3>
                        <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-text-secondary">
                          {repository.note}
                        </p>
                      </div>
                    </div>

                    {repository.public && repository.url ? (
                      <a
                        href={repository.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 border border-line-strong px-4 py-2.5 text-xs font-medium text-text-primary transition-colors hover:border-signal-border hover:text-signal"
                      >
                        View repository
                        <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </div>
              </CaseStudySection>

              <CaseStudySection id="lessons" index={12} title="Lessons learned">
                <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
                  {lessons.map((lesson, index) => (
                    <div key={lesson.title} className="bg-bg-primary p-5 md:p-6">
                      <span className="font-mono text-[10px] text-signal">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="mt-4 text-base font-medium text-text-primary">{lesson.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                        {lesson.body}
                      </p>
                    </div>
                  ))}
                </div>
              </CaseStudySection>
            </div>
          </div>
        </div>

        {next ? (
          <section className="border-t border-line">
            <div className="site-shell py-12 md:py-16">
              <Link to={`/work/${next.slug}`} className="group block">
                <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                  Next case study / {next.number}
                </p>
                <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-3xl font-semibold tracking-[-0.045em] text-text-primary transition-colors group-hover:text-signal md:text-4xl">
                      {next.title}
                    </h2>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-text-secondary">
                      {next.tagline}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.1em] text-text-secondary">
                    Read case study
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </div>
          </section>
        ) : null}

        <section className="paper-section">
          <div className="site-shell py-16 md:py-20">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Have a product to build?</p>
                <h2 className="display-subsection mt-4 max-w-2xl text-paper-ink">
                  I can help with the interface, the AI layer and the build.
                </h2>
              </div>
              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center gap-2 bg-paper-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-signal hover:text-paper-ink"
              >
                Start a conversation
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
