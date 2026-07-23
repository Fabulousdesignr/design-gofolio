import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ExperimentCard({ experiment }) {
  const { title, description, heroImage, image, slug, platform, focus, liveUrl } = experiment;

  return (
    <article className="slim-card">
      <div className="slim-card__thumb">
        <img
          src={heroImage || image}
          alt={title}
          className="slim-card__img"
        />
      </div>

      <div className="slim-card__body">
        <h3 className="slim-card__title">{title}</h3>
        <p className="slim-card__tagline">{description}</p>

        <div className="slim-card__role">
          <span className="slim-card__role-label">Platform</span>
          <span className="slim-card__role-value">{platform}</span>
        </div>

        <div className="slim-card__footer">
          <div className="slim-card__tags">
            {(focus || []).slice(0, 3).map((tag, idx) => (
              <span key={idx} className="slim-card__tag">
                {tag}
              </span>
            ))}
          </div>

          <Link to={`/ai-playground/${slug}`} className="slim-card__cta">
            View Experiment <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
