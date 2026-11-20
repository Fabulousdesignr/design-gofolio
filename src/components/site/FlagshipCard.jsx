import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon } from './BrandIcons';
import MediaFrame from './MediaFrame';
import StatusPill from './StatusPill';

export default function FlagshipCard({ project, reverse = false }) {
  const { links } = project;
  const caseStudy = links?.caseStudy;
  const live = links?.live;
  const github = links?.github;

  return (
    <article className="group border-t border-line py-10 first:border-t-0 first:pt-0 md:py-14">
      <div
        className={`grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center lg:gap-12 ${
          reverse ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div className="lg:col-span-7">
          <Link
            to={caseStudy}
            className="block"
            aria-label={`Read the ${project.title} case study`}
          >
            <MediaFrame
              src={project.image}
              alt={`${project.title} product interface`}
              video={project.video}
              poster={project.image}
              className="w-full"
              imgClassName="aspect-[16/10]"
            />
          </Link>
        </div>

        <div className="lg:col-span-5">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-text-tertiary">
              {project.number}
            </span>
            <StatusPill>{project.status}</StatusPill>
          </div>

          <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
            {project.categoryLabel}
          </p>

          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.045em] text-text-primary sm:text-4xl">
            <Link to={caseStudy} className="transition-colors hover:text-signal">
              {project.title}
            </Link>
          </h3>

          <p className="mt-4 max-w-md text-base leading-relaxed text-text-secondary">
            {project.tagline}
          </p>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.1em] text-text-tertiary">
            {project.role}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.stack.map((item) => (
              <span key={item} className="chip">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              to={caseStudy}
              className="inline-flex items-center gap-2 border border-line-strong px-4 py-2.5 text-xs font-medium text-text-primary transition-colors hover:border-signal-border hover:text-signal"
            >
              Read case study
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>

            {live ? (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                Live product
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            ) : null}

            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                <GithubIcon size={13} />
                Source
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
