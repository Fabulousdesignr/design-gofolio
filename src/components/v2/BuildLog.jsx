import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildLog } from '../../data/journey';

export default function BuildLog() {
  return (
    <section className="site-section border-b border-line" id="building-in-public">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">Building in public</p>
            <h2 className="display-section mt-5 text-text-primary">
              Notes from the work.
            </h2>
            <p className="prose-site mt-5">
              A lightweight log of shipped features, technical lessons and the parts of the
              process that do not fit in a case study.
            </p>
            <Link
              to="/about#building-in-public"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-text-primary transition-colors hover:text-signal"
            >
              See the full log
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>

          <div className="lg:col-span-8">
            <div className="border-t border-line">
              {buildLog.map((entry) => (
                <article
                  key={`${entry.date}-${entry.title}`}
                  className="grid grid-cols-1 gap-3 border-b border-line py-6 sm:grid-cols-[100px_1fr] sm:gap-6"
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
  );
}
