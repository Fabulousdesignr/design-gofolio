const prefetched = new Set();

const PREFETCH_MAP = {
  '/work': () => import('../pages/Work'),
  '/about': () => import('../pages/About'),
  '/labs': () => import('../pages/Experiments'),
  '/case-study': () => import('../pages/CaseStudyDetail'),
  '/ai-playground': () => import('../pages/ExperimentDetail'),
};

export function prefetchRoute(href) {
  if (!href || prefetched.has(href)) return;

  for (const [key, importFn] of Object.entries(PREFETCH_MAP)) {
    if (href === key || href.startsWith(key)) {
      prefetched.add(href);
      importFn().catch(() => {});
      break;
    }
  }
}

export function usePrefetch() {
  const onMouseEnter = (e) => {
    const target = e.currentTarget;
    const href = target.getAttribute('href') || target.getAttribute('to');
    if (href) {
      prefetchRoute(href);
    }
  };

  return { onMouseEnter };
}
