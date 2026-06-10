import { useState, useEffect } from 'react';

/**
 * Sticky sidebar navigation for case study pages.
 * Tracks the active section via IntersectionObserver — no scroll listeners.
 * Desktop only: hidden on < 1024px via .workspace-case-rail CSS.
 */
export default function CaseStudyRail({ sections }) {
  const [activeId, setActiveId] = useState(sections?.[0]?.id ?? '');

  useEffect(() => {
    if (!sections?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the first entry that is intersecting — topmost visible section wins
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      {
        // Fire when section is at reading position: 30% from top, 60% from bottom
        rootMargin: '-30% 0px -60% 0px',
        threshold: 0,
      }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!sections?.length) return null;

  const handleClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <aside className="workspace-case-rail">
      <p className="workspace-case-rail-title">On this page</p>
      <nav aria-label="Case study sections">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={activeId === s.id ? 'is-active' : ''}
            onClick={(e) => handleClick(e, s.id)}
          >
            {s.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}
