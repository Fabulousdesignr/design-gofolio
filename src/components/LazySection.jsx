import { useState, useEffect, useRef } from 'react';

// `id` goes on the wrapper (not the lazy child) so in-page anchors such as #services
// resolve even before the section has been rendered.
export default function LazySection({ children, id, minHeight = '300px', rootMargin = '300px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (isVisible || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div
      id={id}
      ref={ref}
      style={{ minHeight: isVisible ? 'auto' : minHeight, scrollMarginTop: id ? '4rem' : undefined }}
    >
      {isVisible ? children : null}
    </div>
  );
}
