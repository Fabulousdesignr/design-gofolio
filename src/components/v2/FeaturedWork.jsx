import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { flagshipProjects } from '../../data/projects';
import FlagshipCard from '../site/FlagshipCard';
import Reveal from '../site/Reveal';

export default function FeaturedWork() {
  return (
    <section className="site-section border-b border-line" id="work">
      <div className="site-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Selected AI work</p>
            <h2 className="display-section mt-5 max-w-2xl text-text-primary">
              Three products, designed and shipped.
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 self-start text-sm font-medium text-text-primary transition-colors hover:text-signal md:self-auto"
          >
            All work
            <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>

        <p className="prose-site mt-5">
          These are not concept screens. Each product is deployed, and each case study
          covers the product decisions, AI integration and engineering work behind it.
        </p>

        <div className="mt-12 md:mt-16">
          {flagshipProjects.map((project, index) => (
            <Reveal key={project.id}>
              <FlagshipCard project={project} reverse={index % 2 === 1} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
