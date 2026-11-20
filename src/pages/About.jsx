import { ArrowUpRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/v2/Navbar';
import Footer from '../components/v2/Footer';
import ContactSection from '../components/v2/ContactSection';
import PageHeader from '../components/site/PageHeader';
import MediaFrame from '../components/site/MediaFrame';
import SocialLinks from '../components/site/SocialLinks';
import StatusPill from '../components/site/StatusPill';
import { bootcamp, buildLog, currentlyLearning } from '../data/journey';
import { site } from '../data/site';
import { useDocumentMeta } from '../hooks/useDocumentMeta';

const STAGES = [
  {
    label: 'Foundation',
    title: 'Visual and web design',
    body: 'I learned craft through typography, layout, brand systems and websites. That background still shapes how I judge hierarchy, spacing and detail.',
  },
  {
    label: 'Product',
    title: 'Product design across complex systems',
    body: 'SaaS dashboards, fintech apps, mobile products, ecommerce and education. I moved from making screens to framing problems, mapping flows and designing systems.',
  },
  {
    label: 'Now',
    title: 'Applied AI and product engineering',
    body: 'I build the products I used to only design: React and TypeScript interfaces, Supabase and PostgreSQL data, LLM integrations, deployment and testing.',
  },
];

const PRINCIPLES = [
  {
    title: 'Understand before generating',
    body: 'AI is fast. A wrong problem is still wrong when the code appears quickly. I start with the user, the constraints and the smallest useful scope.',
  },
  {
    title: 'The interface is part of the system',
    body: 'Loading states, errors, permissions and empty data are product decisions. They cannot be left to the end of the build.',
  },
  {
    title: 'Choose the simplest architecture that works',
    body: 'A smaller system with clear boundaries is easier to test, explain and improve than a complex one with impressive diagrams.',
  },
  {
    title: 'Document what is real',
    body: 'I would rather show a live product with a limited scope than describe a feature that does not exist. Accuracy is part of the design.',
  },
];

export default function About() {
  useDocumentMeta(
    'About',
    'Godwin Okechukwu is an AI Product Engineer with a background in product design. His path from visual design to full-stack AI product builds.'
  );

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Navbar />
      <main id="main-content">
        <PageHeader
          eyebrow="About"
          title="From visual craft to product engineering."
          intro="I am Godwin Okechukwu, a product-minded AI developer with around ten years of design experience. I care about how a product looks, but I am more interested in whether it works."
          aside={<SocialLinks className="max-w-xs" />}
        />

        <section className="site-section border-b border-line">
          <div className="site-shell">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <MediaFrame
                  src="/images/My Image.png"
                  alt="Portrait of Godwin Okechukwu"
                  imgClassName="aspect-[4/5]"
                  className="max-w-sm lg:max-w-none"
                />
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
                  Godwin Okechukwu / AI Product Engineer
                </p>
              </div>

              <div className="lg:col-span-8">
                <p className="eyebrow">The short version</p>
                <h2 className="display-subsection mt-5 max-w-2xl text-text-primary">
                  I design the interface and build the system behind it.
                </h2>

                <div className="prose-site mt-6">
                  <p>
                    I started in visual design and moved into product design, working across
                    SaaS, fintech, healthcare, education and ecommerce. Over time, the most
                    interesting questions stopped being about the screen and started being
                    about how the product actually worked.
                  </p>
                  <p>
                    That led me into front-end development, backend fundamentals and applied AI.
                    Today I build AI-powered applications with React, TypeScript, Supabase,
                    PostgreSQL and LLM APIs. I am still a designer, but I no longer hand the
                    idea to someone else and wait for a build.
                  </p>
                  <p>
                    I am not a machine learning researcher or a senior infrastructure engineer.
                    I am a product engineer in progress, with a strong design foundation and
                    real shipped work. The case studies on this site are the honest record of
                    that.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <a
                    href={site.links.cv}
                    download
                    className="inline-flex items-center gap-2 bg-paper px-5 py-3 text-sm font-semibold text-paper-ink transition-colors hover:bg-signal"
                  >
                    <Download size={15} aria-hidden="true" />
                    Download CV
                  </a>
                  <Link
                    to="/work"
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-signal"
                  >
                    See the work
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section border-b border-line">
          <div className="site-shell">
            <div className="max-w-2xl">
              <p className="eyebrow">The path</p>
              <h2 className="display-section mt-5 text-text-primary">
                A designer who kept going deeper.
              </h2>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line md:grid-cols-3">
              {STAGES.map((stage, index) => (
                <div key={stage.label} className="bg-bg-primary p-6 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-signal">
                      {stage.label}
                    </span>
                    <span className="font-mono text-[10px] text-text-tertiary">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold tracking-[-0.025em] text-text-primary">
                    {stage.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-secondary">{stage.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="site-section border-b border-line bg-bg-alt/40">
          <div className="site-shell">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="eyebrow">Principles</p>
                <h2 className="display-section mt-5 text-text-primary">
                  What I optimise for.
                </h2>
                <p className="prose-site mt-5">
                  These are the rules I keep returning to when a project gets complicated.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="border-t border-line">
                  {PRINCIPLES.map((principle, index) => (
                    <div
                      key={principle.title}
                      className="grid grid-cols-1 gap-3 border-b border-line py-6 sm:grid-cols-[48px_1fr] sm:gap-5"
                    >
                      <span className="font-mono text-[10px] text-text-tertiary">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-base font-medium text-text-primary">
                          {principle.title}
                        </h3>
                        <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-text-secondary">
                          {principle.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section border-b border-line" id="bootcamp">
          <div className="site-shell">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Professional development</p>
                <h2 className="display-section mt-5 text-text-primary">
                  Still learning, in public.
                </h2>
              </div>
              <StatusPill tone="learning">Bootcamp ongoing</StatusPill>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="border border-line bg-bg-panel p-6 md:p-8 lg:col-span-7">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-text-primary">
                  {bootcamp.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-secondary">
                  {bootcamp.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {bootcamp.topics.map((topic) => (
                    <span key={topic} className="chip">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="border-t border-line">
                  {currentlyLearning.map((item) => (
                    <div key={item.title} className="border-b border-line py-4">
                      <h3 className="text-sm font-medium text-text-primary">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="site-section border-b border-line" id="building-in-public">
          <div className="site-shell">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <p className="eyebrow">Building in public</p>
                <h2 className="display-section mt-5 text-text-primary">The log.</h2>
                <p className="prose-site mt-5">
                  New projects, technical lessons and progress. Kept close to the work, and
                  updated when something real ships.
                </p>
              </div>

              <div className="lg:col-span-8">
                <div className="border-t border-line">
                  {buildLog.map((entry) => (
                    <article
                      key={`${entry.date}-${entry.title}`}
                      className="grid grid-cols-1 gap-3 border-b border-line py-6 sm:grid-cols-[110px_1fr] sm:gap-6"
                    >
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
                          {entry.date}
                        </p>
                        <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.12em] text-signal">
                          {entry.tag}
                        </p>
                      </div>
                      <div>
                        <h3 className="text-base font-medium text-text-primary">{entry.title}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                          {entry.body}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
