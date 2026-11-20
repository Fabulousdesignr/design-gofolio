import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/v2/Navbar';
import Footer from '../components/v2/Footer';
import ContactSection from '../components/v2/ContactSection';
import PageHeader from '../components/site/PageHeader';
import ProficiencyBadge from '../components/site/ProficiencyBadge';
import Reveal from '../components/site/Reveal';
import {
  aiPrinciples,
  capabilityGroups,
  proficiency,
  toolGroups,
} from '../data/capabilities';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const LEVEL_ORDER = ['professional', 'working', 'learning'];

export default function Capabilities() {
  useDocumentMeta(
    'Capabilities',
    'Technical capabilities across AI application development, React and TypeScript, Supabase and PostgreSQL, and product design, with honest proficiency levels.'
  );

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main id="main-content">
        <PageHeader
          eyebrow="Capabilities"
          title="Technical range, stated honestly."
          intro="I work across product design, front-end development, backend fundamentals and applied AI. The levels below distinguish work I have delivered from areas I am actively learning."
          aside={
            <div className="w-full max-w-xs border border-line bg-bg-panel p-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                How to read this
              </p>
              <div className="mt-4 space-y-4">
                {LEVEL_ORDER.map((level) => (
                  <div key={level}>
                    <ProficiencyBadge level={level} />
                    <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                      {proficiency[level].description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          }
        />

        <section className="site-section border-b border-line">
          <div className="site-shell">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Skill groups</p>
                <h2 className="display-section mt-5 text-text-primary">
                  What I can contribute now.
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
                Each item links to the work where it was used. No tool is listed as expert
                simply because it appears in a project.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
              {capabilityGroups.map((group, index) => (
                <Reveal key={group.id} className="border border-line bg-bg-panel">
                  <div className="border-b border-line p-6 md:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-signal/70" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-text-primary">
                      {group.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                      {group.summary}
                    </p>
                  </div>

                  <ul className="divide-y divide-line">
                    {group.skills.map((skill) => (
                      <li
                        key={skill.name}
                        className="flex flex-col gap-2 px-6 py-4 sm:flex-row sm:items-center sm:justify-between md:px-8"
                      >
                        <div>
                          <p className="text-sm font-medium text-text-primary">{skill.name}</p>
                          <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.08em] text-text-tertiary">
                            {skill.evidence}
                          </p>
                        </div>
                        <ProficiencyBadge level={skill.level} className="self-start sm:self-auto" />
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section border-b border-line bg-bg-alt/40">
          <div className="site-shell">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="eyebrow">Tools</p>
                <h2 className="display-section mt-5 text-text-primary">
                  The working set.
                </h2>
                <p className="prose-site mt-5">
                  Tools change. The useful skill is knowing when to use one, how to review its
                  output and what to do when it fails.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {toolGroups.map((group) => (
                    <div key={group.title} className="border border-line bg-bg-primary p-5">
                      <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                        {group.title}
                      </p>
                      <ul className="mt-4 space-y-3">
                        {group.tools.map((tool) => (
                          <li key={tool.name} className="flex items-center justify-between gap-2">
                            <span className="text-sm text-text-primary">{tool.name}</span>
                            <ProficiencyBadge level={tool.level} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section border-b border-line">
          <div className="site-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">How I use AI</p>
              <h2 className="display-section mt-5 text-text-primary">
                Speed is useful. Verification is mandatory.
              </h2>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
              {aiPrinciples.map((principle, index) => (
                <div key={principle.title} className="bg-bg-primary p-6 md:p-8">
                  <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-text-primary">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {principle.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                to="/work/applyflow"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-signal"
              >
                See it in ApplyFlow
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
              <Link
                to="/work/nuvotrain"
                className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-signal"
              >
                See the database work in Nuvotrain
                <ArrowUpRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
