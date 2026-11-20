import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import MediaFrame from './MediaFrame';
import { getProjectLink } from '../../data/projects';

export default function ProjectCard({ project, priority = false }) {
  const primary = getProjectLink(project);
  const hasInternal = project.links?.caseStudy;

  const media = (
    <MediaFrame
      src={project.image}
      alt={`${project.title} project preview`}
      video={project.video}
      poster={project.image}
      priority={priority}
      className="w-full"
      imgClassName="aspect-[4/3]"
    />
  );

  return (
    <article className="group flex h-full flex-col border border-line bg-bg-panel transition-colors duration-300 hover:border-line-strong">
      <div className="border-b border-line p-3">
        {hasInternal ? (
          <Link to={hasInternal} aria-label={`Read the ${project.title} case study`}>
            {media}
          </Link>
        ) : primary ? (
          <a
            href={primary.href}
            target={primary.internal ? undefined : '_blank'}
            rel={primary.internal ? undefined : 'noopener noreferrer'}
            aria-label={`View ${project.title}`}
          >
            {media}
          </a>
        ) : (
          media
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.13em] text-text-tertiary">
          {project.categoryLabel}
        </p>

        <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-text-primary">
          {hasInternal ? (
            <Link to={hasInternal} className="transition-colors hover:text-signal">
              {project.title}
            </Link>
          ) : primary ? (
            <a
              href={primary.href}
              target={primary.internal ? undefined : '_blank'}
              rel={primary.internal ? undefined : 'noopener noreferrer'}
              className="transition-colors hover:text-signal"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{project.tagline}</p>

        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-text-tertiary">
            {project.status}
          </span>
          {primary ? (
            primary.internal ? (
              <Link
                to={primary.href}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-text-primary transition-colors group-hover:text-signal"
              >
                {primary.label}
                <ArrowUpRight size={13} aria-hidden="true" />
              </Link>
            ) : (
              <a
                href={primary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-text-primary transition-colors group-hover:text-signal"
              >
                {primary.label}
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            )
          ) : null}
        </div>
      </div>
    </article>
  );
}
