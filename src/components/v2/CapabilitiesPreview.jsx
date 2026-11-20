import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { capabilityGroups } from '../../data/capabilities';
import Reveal from '../site/Reveal';

export default function CapabilitiesPreview() {
  return (
    <section className="site-section border-b border-line">
      <div className="site-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="display-section mt-5 max-w-2xl text-text-primary">
              Product judgement, backed by technical range.
            </h2>
          </div>
          <Link
            to="/capabilities"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-text-primary transition-colors hover:text-signal md:self-auto"
          >
            Full capabilities
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((group, index) => (
            <Reveal key={group.id} className="bg-bg-primary p-6 md:p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-signal/70" aria-hidden="true" />
              </div>
              <h3 className="mt-7 text-lg font-semibold tracking-[-0.02em] text-text-primary">
                {group.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {group.skills.slice(0, 4).map((skill) => (
                  <li key={skill.name} className="text-sm leading-snug text-text-secondary">
                    {skill.name}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-line pt-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.1em] text-text-tertiary">
                {group.skills[0]?.evidence}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
