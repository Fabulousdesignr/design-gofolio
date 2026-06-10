import { useEffect, useRef } from 'react';

export default function AtmosphericBackground() {
  const elRef = useRef(null);
  const rafRef = useRef(null);
  const stateRef = useRef({
    // current (smoothed)
    x: 52,
    y: 42,
    // target (from pointer)
    tx: 52,
    ty: 42,
    running: false,
  });

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    // Keep it subtle + recruiter-friendly:
    // - Disable on touch/no-hover devices
    // - Disable if user prefers reduced motion
    const noHover = window.matchMedia('(hover: none)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Apply initial position via CSS vars (no React re-renders needed)
    const apply = (x, y) => {
      el.style.setProperty('--mx', `${x.toFixed(2)}%`);
      el.style.setProperty('--my', `${y.toFixed(2)}%`);
    };
    apply(stateRef.current.x, stateRef.current.y);

    if (noHover || reducedMotion) {
      return;
    }

    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

    const handleMove = (e) => {
      const rawX = (e.clientX / window.innerWidth) * 100;
      const rawY = (e.clientY / window.innerHeight) * 100;

      // Keep amplitude conservative so it feels “alive” but not distracting.
      stateRef.current.tx = clamp(rawX, 8, 92);
      stateRef.current.ty = clamp(rawY, 8, 92);

      if (!stateRef.current.running) {
        stateRef.current.running = true;
        rafRef.current = window.requestAnimationFrame(tick);
      }
    };

    const tick = () => {
      const s = stateRef.current;

      // Lerp toward target (smoothing = premium, not twitchy)
      const ease = 0.06;
      s.x = s.x + (s.tx - s.x) * ease;
      s.y = s.y + (s.ty - s.y) * ease;
      apply(s.x, s.y);

      const done = Math.abs(s.tx - s.x) < 0.02 && Math.abs(s.ty - s.y) < 0.02;
      if (done) {
        s.running = false;
        rafRef.current = null;
        return;
      }

      rafRef.current = window.requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMove);
      if (rafRef.current) {
        window.cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = null;
      stateRef.current.running = false;
    };
  }, []);

  return (
    <div
      ref={elRef}
      className="global-bg"
      style={{
        // “Living AI Workspace” lighting:
        // - One subtle pointer halo (smoothed via CSS vars --mx/--my)
        // - One static ambient bloom (top-right) for depth
        // - A soft vignette for premium focus
        background: `
          radial-gradient(900px circle at var(--mx, 52%) var(--my, 42%), var(--glow-color), transparent 55%),
          radial-gradient(1200px circle at 88% 8%, var(--ambient-1), transparent 60%),
          radial-gradient(1000px circle at 12% 92%, var(--ambient-2), transparent 62%),
          radial-gradient(140% 120% at 50% 50%, transparent 35%, var(--ambient-vignette) 100%),
          var(--glow-bg)
        `,
      }}
    />
  );
}
