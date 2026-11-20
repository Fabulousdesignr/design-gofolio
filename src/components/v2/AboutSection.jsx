import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { bootcamp, currentlyLearning } from '../../data/journey';
import MediaFrame from '../site/MediaFrame';
import StatusPill from '../site/StatusPill';

export default function AboutSection() {
  return (
    <section className="site-section border-b border-line" id="about">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <MediaFrame
              src="/images/My Image.png"
              alt="Portrait of Godwin Okechukwu"
              imgClassName="aspect-[4/5]"
              className="max-w-sm lg:max-w-none"
            />
            <div className="mt-3 flex items-center justify-between gap-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
                Godwin Okechukwu
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-text-tertiary">
                Nigeria / Remote
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <p className="eyebrow">About</p>
            <h2 className="display-section mt-5 max-w-2xl text-text-primary">
              A designer&apos;s eye, applied to the whole product.
            </h2>

            <div className="prose-site mt-6">
              <p>
                I have spent around ten years in digital design, including four years in
                product design. My work has moved from websites and visual systems into SaaS,
                fintech, education and AI products.
              </p>
              <p>
                More recently, I have moved from designing AI products to building them. That
                means learning the backend, the data model, authentication and deployment, not
                only the screen.
              </p>
              <p>
                I am not positioning myself as an ML researcher. My strength is applied AI:
                using models and APIs inside products that people can actually use, with a
                clear interface and a sensible technical boundary.
              </p>
            </div>

            <div className="mt-9 grid grid-cols-3 gap-px border border-line bg-line">
              {[
                { value: '10', label: 'Years in design' },
                { value: '4', label: 'Years in product' },
                { value: '03', label: 'Live AI products' },
              ].map((item) => (
                <div key={item.label} className="bg-bg-primary p-4 sm:p-5">
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-text-primary sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[11px] leading-tight text-text-tertiary sm:text-xs">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border border-line bg-bg-panel p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm font-medium text-text-primary">{bootcamp.title}</p>
                <StatusPill tone="learning">{bootcamp.status}</StatusPill>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Ongoing professional development across context engineering, backend
                engineering, database design, testing and deployment.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {currentlyLearning.slice(0, 3).map((item) => (
                  <span key={item.title} className="chip">
                    {item.title}
                  </span>
                ))}
              </div>
            </div>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-signal"
            >
              More about my path
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
