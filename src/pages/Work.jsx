import { useState } from 'react';
import Navbar from '../components/v2/Navbar';
import Footer from '../components/v2/Footer';
import ContactSection from '../components/v2/ContactSection';
import PageHeader from '../components/site/PageHeader';
import FlagshipCard from '../components/site/FlagshipCard';
import ProjectCard from '../components/site/ProjectCard';
import StatusPill from '../components/site/StatusPill';
import { flagshipProjects, secondaryProjects } from '../data/projects';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const FILTERS = [
  { id: 'all', label: 'All work' },
  { id: 'ai-product', label: 'AI Products' },
  { id: 'ai-experiment', label: 'AI Experiments' },
  { id: 'product-design', label: 'Product Design' },
  { id: 'web', label: 'Websites & E-commerce' },
];

export default function Work() {
  useDocumentMeta(
    'Work',
    'AI products, AI experiments, product design and web work by Godwin Okechukwu. Case studies for ApplyFlow, AdSight and Nuvotrain.'
  );

  const [active, setActive] = useState('all');
  const filtered =
    active === 'all'
      ? secondaryProjects
      : secondaryProjects.filter((project) => project.categories?.includes(active));

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main id="main-content">
        <PageHeader
          eyebrow="Work"
          title="Products I have designed, built and shipped."
          intro="The AI work comes first because that is the direction of my practice. The archive shows the product design, fintech, SaaS and web work that built the foundation."
          aside={
            <div className="flex flex-col gap-2 border-l border-line pl-5">
              <StatusPill>{flagshipProjects.length} live AI products</StatusPill>
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.11em] text-text-tertiary">
                Product design
                <br />
                AI integration
                <br />
                Full-stack build
              </p>
            </div>
          }
        />

        <section className="site-section border-b border-line">
          <div className="site-shell">
            <div className="flex items-end justify-between gap-6 border-b border-line pb-5">
              <div>
                <p className="eyebrow">Focus</p>
                <h2 className="display-subsection mt-4 text-text-primary">AI products</h2>
              </div>
              <p className="hidden font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary sm:block">
                01 to 03
              </p>
            </div>

            <div>
              {flagshipProjects.map((project, index) => (
                <FlagshipCard key={project.id} project={project} reverse={index % 2 === 1} />
              ))}
            </div>
          </div>
        </section>

        <section className="site-section border-b border-line" id="archive">
          <div className="site-shell">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Archive</p>
                <h2 className="display-section mt-5 text-text-primary">Every project, in one place.</h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-text-secondary">
                AI experiments, product design, mobile apps, fintech and web work. Filter by
                category or browse everything.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
              {FILTERS.map((filter) => {
                const isActive = active === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActive(filter.id)}
                    aria-pressed={isActive}
                    className={`border px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition-colors ${
                      isActive
                        ? 'border-signal-border bg-signal-soft text-signal'
                        : 'border-line text-text-secondary hover:border-line-strong hover:text-text-primary'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>

            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.11em] text-text-tertiary">
              {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
