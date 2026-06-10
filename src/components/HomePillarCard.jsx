import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ProductFrame from './ProductFrame';

export default function HomePillarCard({ item, workspaceSurface = false, layout = 'vertical' }) {
  const { title, category, description, image, link } = item;

  if (workspaceSurface) {
    const isHorizontal = layout === 'horizontal';
    const body = (
      <>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">{category}</p>
        <h3 className="workspace-work-title text-xl group-hover:text-accent transition-colors">{title}</h3>
        <p className="workspace-work-desc mt-2 mb-4">{description}</p>
        {link ? (
          link.startsWith('/') ? (
            <Link to={link} className="workspace-open-link">
              View work <ArrowUpRight size={16} />
            </Link>
          ) : (
            <a href={link} className="workspace-open-link">
              View work <ArrowUpRight size={16} />
            </a>
          )
        ) : (
          <span className="text-xs font-mono uppercase tracking-widest text-text-secondary">
            Module expanding in V2
          </span>
        )}
      </>
    );

    if (isHorizontal) {
      return (
        <article className="group scroll-reveal workspace-work-row">
          <div>{body}</div>
          <ProductFrame src={image} alt={title} label={title} className="w-full" />
        </article>
      );
    }

    return (
      <article className="group scroll-reveal workspace-tile workspace-tile-interactive rounded-2xl overflow-hidden">
        <ProductFrame src={image} alt={title} label={title} className="rounded-none border-0 border-b border-card-border" />
        <div className="p-6">{body}</div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col bg-card border border-card-border rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 scroll-reveal">
      <div className="w-full aspect-[16/10] overflow-hidden bg-bg-alt relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-secondary text-sm font-medium">
            Preview coming soon
          </div>
        )}
      </div>
      <div className="p-8 sm:p-10 flex flex-col flex-grow">
        <span className="text-xs font-bold uppercase tracking-widest text-accent mb-4 block">{category}</span>
        <h3 className="text-2xl sm:text-3xl font-black text-text-primary mb-4 group-hover:text-accent transition-colors uppercase tracking-tight">
          {title}
        </h3>
        <p className="text-text-secondary text-base leading-relaxed mb-8 prose-readable flex-grow">{description}</p>
      </div>
    </article>
  );
}
