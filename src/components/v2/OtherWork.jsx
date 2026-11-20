import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { secondaryProjects } from '../../data/projects';
import ProjectCard from '../site/ProjectCard';

const HOMEPAGE_IDS = [
  'shyne',
  'shove-bet',
  'moneylink',
  'velvet-vine',
  'maxmall',
  'loodle',
  'rivalens',
  'hub360',
];

export default function OtherWork() {
  const selected = HOMEPAGE_IDS.map((id) =>
    secondaryProjects.find((project) => project.id === id)
  ).filter(Boolean);

  return (
    <section className="site-section border-b border-line">
      <div className="site-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Other work</p>
            <h2 className="display-section mt-5 max-w-2xl text-text-primary">
              Product design, fintech, SaaS and the web.
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-text-primary transition-colors hover:text-signal md:self-auto"
          >
            Browse the archive
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <p className="prose-site mt-5">
          AI is the current focus, not the whole story. These projects show the range of
          product and interface work behind it.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {selected.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
