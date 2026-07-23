import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import WorkspaceModule from './WorkspaceModule';
import { projects } from '../data/projects';

const SECTIONS = [
  { key: 'ai',      label: 'AI Products',          emoji: '🤖' },
  { key: 'product', label: 'Product & SaaS',        emoji: '📦' },
  { key: 'shopify', label: 'Shopify & Ecommerce',   emoji: '🛍️' },
];

function ProjectCard({ project }) {
  const { title, tagline, image, video, fallback, link, liveUrl, caseStudyUrl, role, tags, section, passwordNote } = project;

  const isShopify = section === 'shopify';
  const primaryLink = link?.startsWith('/') ? link : null;
  const extLink = caseStudyUrl || null;

  return (
    <article className={`slim-card ${isShopify ? 'slim-card--shopify' : ''}`}>
      {/* Thumbnail */}
      <div className="slim-card__thumb">
        {video ? (
          <video src={video} poster={image || fallback} autoPlay loop muted playsInline className="slim-card__img" />
        ) : (
          <img src={image || fallback} alt={title} className="slim-card__img" />
        )}
      </div>

      {/* Body */}
      <div className="slim-card__body">
        <div>
          <h3 className="slim-card__title">{title}</h3>
          <p className="slim-card__tagline">{tagline}</p>
        </div>

        <div className="slim-card__role">
          <span className="slim-card__role-label">Role</span>
          <span className="slim-card__role-value">{role}</span>
        </div>

        <div className="slim-card__footer">
          <div className="slim-card__tags">
            {(tags || []).slice(0, 4).map(t => (
              <span key={t} className={`slim-card__tag ${isShopify ? 'slim-card__tag--shopify' : ''}`}>{t}</span>
            ))}
          </div>

          <div className="flex flex-col items-end">
            {isShopify && liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="slim-card__cta slim-card__cta--live"
              >
                View Live &rarr;
              </a>
            ) : primaryLink ? (
              <Link to={primaryLink} className="slim-card__cta">
                View Case Study <ArrowUpRight size={14} />
              </Link>
            ) : extLink ? (
              <a href={extLink} target="_blank" rel="noopener noreferrer" className="slim-card__cta">
                View Case Study <ArrowUpRight size={14} />
              </a>
            ) : liveUrl ? (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="slim-card__cta">
                View Live &rarr;
              </a>
            ) : null}

            {passwordNote && (
              <span className="text-[11px] text-text-secondary font-mono tracking-tight mt-1 opacity-85">
                {passwordNote}
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <WorkspaceModule
      id="work"
      index={1}
      title="Featured Work"
      subtitle="A cross-section of products I've designed — AI tools, SaaS platforms, fintech, and Shopify storefronts."
      layout="wide"
    >
      <div className="slim-sections">
        {SECTIONS.map(({ key, label, emoji }) => {
          const items = projects.filter(p => p.section === key);
          if (!items.length) return null;
          return (
            <div key={key} className={`slim-section slim-section--${key}`}>
              <div className="slim-section__header">
                <span className="slim-section__emoji">{emoji}</span>
                <h2 className="slim-section__title">{label}</h2>
              </div>
              <div className="slim-grid">
                {items.map(p => <ProjectCard key={p.id} project={p} />)}
              </div>
            </div>
          );
        })}
      </div>
    </WorkspaceModule>
  );
}
