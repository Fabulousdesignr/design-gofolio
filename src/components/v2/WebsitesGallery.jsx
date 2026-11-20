import { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { websiteProjects, websiteTypes } from '../../data/websites';
import ImageViewer from './ImageViewer';

const focusRing =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400';

function Thumb({ image, alt, onOpen, label, className = '' }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={label}
      className={`group/thumb relative block w-full aspect-[4/3] overflow-hidden rounded-xl bg-zinc-900 border border-white/[0.08] cursor-zoom-in ${focusRing} ${className}`}
    >
      <img
        src={image.src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/thumb:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-[#09090b]/50 via-transparent to-transparent opacity-0 group-hover/thumb:opacity-100 group-focus-visible/thumb:opacity-100 transition-opacity duration-300" />
      <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider rounded-full bg-[#09090b]/80 backdrop-blur border border-white/[0.12] text-white opacity-0 translate-y-1 group-hover/thumb:opacity-100 group-hover/thumb:translate-y-0 group-focus-visible/thumb:opacity-100 group-focus-visible/thumb:translate-y-0 transition-all duration-300">
        <Maximize2 size={11} /> Inspect
      </span>
    </button>
  );
}

export default function WebsitesGallery() {
  const [open, setOpen] = useState(null); // { projectId, index }

  const featured = websiteProjects.find((p) => p.featured);
  const rest = websiteProjects.filter((p) => p !== featured);
  const active = open ? websiteProjects.find((p) => p.id === open.projectId) : null;

  const openProject = (project, index = 0) => setOpen({ projectId: project.id, index });

  return (
    <section className="py-28 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-8 lg:gap-16 lg:items-end mb-14">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
              Websites
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Websites I&apos;ve designed.
            </h3>
          </div>
          <div>
            <p className="text-base text-white/60 leading-relaxed mb-5">
              A collection of digital experiences designed across different industries, from
              e-commerce and fintech to fitness, media and fashion. Select any design to inspect it
              in detail.
            </p>
            <ul className="flex flex-wrap gap-2" aria-label="Types of website shown">
              {websiteTypes.map((type) => (
                <li
                  key={type}
                  className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wide uppercase rounded-md bg-white/[0.05] border border-white/[0.08] text-white/60"
                >
                  {type}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured project (multiple screenshots) */}
        {featured && (
          <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.02] mb-6">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-0">
              <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between gap-8">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400/80 mb-3">
                    {featured.category}
                  </p>
                  <h4 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-[1.05]">
                    {featured.name}
                  </h4>
                  <p className="text-base text-white/60 leading-relaxed max-w-sm">
                    {featured.description}
                  </p>
                </div>
                <p className="text-xs font-medium text-white/40">
                  {featured.imageCount} screens · Select to inspect
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 p-4 sm:p-6 lg:p-8 lg:pl-0">
                {featured.images.map((image, i) => (
                  <Thumb
                    key={image.src}
                    image={image}
                    alt={image.alt}
                    label={`Inspect ${featured.name} screenshot ${i + 1} of ${featured.imageCount}`}
                    onOpen={() => openProject(featured, i)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Remaining projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] overflow-hidden transition-all duration-500 hover:-translate-y-1"
            >
              <div className="p-3">
                <Thumb
                  image={project.images[0]}
                  alt={project.images[0].alt}
                  label={`Inspect ${project.name} website design`}
                  onOpen={() => openProject(project, 0)}
                />
              </div>
              <div className="px-6 pt-3 pb-6">
                <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-400/80 mb-2">
                  {project.category}
                </p>
                <h4 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.name}
                </h4>
                <p className="text-xs text-white/55 leading-relaxed">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {active && (
        <ImageViewer
          key={active.id}
          title={active.name}
          category={active.category}
          images={active.images}
          startIndex={open.index}
          onClose={() => setOpen(null)}
        />
      )}
    </section>
  );
}
