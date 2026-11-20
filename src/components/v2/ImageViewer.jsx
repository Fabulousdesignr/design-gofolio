import { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn, ZoomOut, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const MIN_SCALE = 1;
const MAX_SCALE = 6;
const ZOOM_STEP = 1.5;
const IDLE = { scale: 1, x: 0, y: 0 };

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const iconBtn =
  'inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] border border-white/[0.1] text-white/80 hover:text-white hover:bg-white/[0.12] disabled:opacity-30 disabled:pointer-events-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400';

export default function ImageViewer({ title, category, images, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [view, setView] = useState(IDLE);
  const [loaded, setLoaded] = useState(false);
  const [interacting, setInteracting] = useState(false);

  // viewRef mirrors `view` so gesture handlers always read the latest value.
  const viewRef = useRef(IDLE);
  const dialogRef = useRef(null);
  const stageRef = useRef(null);
  const imgRef = useRef(null);
  const closeRef = useRef(null);
  const pointers = useRef(new Map());
  const gesture = useRef(null);

  const count = images.length;
  const current = images[index];

  const apply = useCallback((next) => {
    viewRef.current = next;
    setView(next);
  }, []);

  // How far the zoomed image may be dragged before an edge leaves the stage.
  const bounds = useCallback((scale) => {
    const stage = stageRef.current;
    const img = imgRef.current;
    if (!stage || !img) return { mx: 0, my: 0 };
    return {
      mx: Math.max(0, (img.clientWidth * scale - stage.clientWidth) / 2),
      my: Math.max(0, (img.clientHeight * scale - stage.clientHeight) / 2),
    };
  }, []);

  // Zoom towards a point (relative to the stage centre), optionally panning at the same time.
  const zoomAt = useCallback(
    (target, px = 0, py = 0, dx = 0, dy = 0) => {
      const { scale, x, y } = viewRef.current;
      const next = clamp(target, MIN_SCALE, MAX_SCALE);
      if (next <= MIN_SCALE) {
        apply(IDLE);
        return;
      }
      const ratio = next / scale;
      const { mx, my } = bounds(next);
      apply({
        scale: next,
        x: clamp(px - (px - x) * ratio + dx, -mx, mx),
        y: clamp(py - (py - y) * ratio + dy, -my, my),
      });
    },
    [apply, bounds],
  );

  const reset = useCallback(() => apply(IDLE), [apply]);

  const goBy = useCallback(
    (delta) => {
      if (count < 2) return;
      apply(IDLE);
      setLoaded(false);
      setIndex((prev) => (prev + delta + count) % count);
    },
    [apply, count],
  );

  // Keyboard: Escape, arrows, zoom shortcuts and a focus trap.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowRight') {
        goBy(1);
      } else if (e.key === 'ArrowLeft') {
        goBy(-1);
      } else if (e.key === '+' || e.key === '=') {
        zoomAt(viewRef.current.scale * ZOOM_STEP);
      } else if (e.key === '-' || e.key === '_') {
        zoomAt(viewRef.current.scale / ZOOM_STEP);
      } else if (e.key === '0') {
        reset();
      } else if (e.key === 'Tab' && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll('button:not([disabled])');
        if (!items.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, goBy, zoomAt, reset]);

  // Mouse-wheel / trackpad zoom. Needs a non-passive listener to prevent default.
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    const onWheel = (e) => {
      e.preventDefault();
      const rect = stage.getBoundingClientRect();
      const px = e.clientX - rect.left - rect.width / 2;
      const py = e.clientY - rect.top - rect.height / 2;
      const factor = Math.exp(-e.deltaY * (e.ctrlKey ? 0.01 : 0.0018));
      zoomAt(viewRef.current.scale * factor, px, py);
    };
    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => stage.removeEventListener('wheel', onWheel);
  }, [zoomAt]);

  // Lock background scroll while open, and restore focus on close.
  useEffect(() => {
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPadding = body.style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = 'hidden';
    if (scrollbar > 0) body.style.paddingRight = `${scrollbar}px`;

    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();

    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPadding;
      if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
    };
  }, []);

  // Warm the cache for neighbouring screenshots so navigation feels instant.
  useEffect(() => {
    if (count < 2) return;
    [index + 1, index - 1].forEach((i) => {
      const img = new Image();
      img.src = images[(i + count) % count].src;
    });
  }, [index, images, count]);

  const relPoint = (clientX, clientY) => {
    const rect = stageRef.current.getBoundingClientRect();
    return { x: clientX - rect.left - rect.width / 2, y: clientY - rect.top - rect.height / 2 };
  };

  const onPointerDown = (e) => {
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    stageRef.current.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 1) {
      gesture.current = {
        type: 'pan',
        sx: e.clientX,
        sy: e.clientY,
        ox: viewRef.current.x,
        oy: viewRef.current.y,
        dx: 0,
        dy: 0,
        moved: false,
        onImage: e.target === imgRef.current,
      };
    } else if (pointers.current.size === 2) {
      const [a, b] = [...pointers.current.values()];
      gesture.current = {
        type: 'pinch',
        dist: Math.hypot(a.x - b.x, a.y - b.y) || 1,
        scale: viewRef.current.scale,
        last: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 },
      };
      setInteracting(true);
    }
  };

  const onPointerMove = (e) => {
    const pointer = pointers.current.get(e.pointerId);
    const g = gesture.current;
    if (!pointer || !g) return;
    pointer.x = e.clientX;
    pointer.y = e.clientY;

    if (g.type === 'pinch' && pointers.current.size >= 2) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
      const p = relPoint(mid.x, mid.y);
      zoomAt(g.scale * (dist / g.dist), p.x, p.y, mid.x - g.last.x, mid.y - g.last.y);
      g.last = mid;
    } else if (g.type === 'pan') {
      g.dx = e.clientX - g.sx;
      g.dy = e.clientY - g.sy;
      if (!g.moved && Math.hypot(g.dx, g.dy) > 5) {
        g.moved = true;
        if (viewRef.current.scale > 1) setInteracting(true);
      }
      if (g.moved && viewRef.current.scale > 1) {
        const cur = viewRef.current;
        const { mx, my } = bounds(cur.scale);
        apply({ scale: cur.scale, x: clamp(g.ox + g.dx, -mx, mx), y: clamp(g.oy + g.dy, -my, my) });
      }
    }
  };

  const endPointer = (e, cancelled) => {
    pointers.current.delete(e.pointerId);
    const g = gesture.current;

    if (pointers.current.size === 0) {
      if (g && g.type === 'pan' && !cancelled) {
        const atFit = viewRef.current.scale === 1;
        if (!g.moved && !g.onImage && atFit) {
          onClose();
        } else if (g.moved && atFit && count > 1 && Math.abs(g.dx) > 60 && Math.abs(g.dx) > Math.abs(g.dy) * 1.5) {
          goBy(g.dx < 0 ? 1 : -1);
        }
      }
      gesture.current = null;
      setInteracting(false);
    } else if (pointers.current.size === 1) {
      const [rest] = [...pointers.current.values()];
      gesture.current = {
        type: 'pan',
        sx: rest.x,
        sy: rest.y,
        ox: viewRef.current.x,
        oy: viewRef.current.y,
        dx: 0,
        dy: 0,
        moved: true,
        onImage: true,
      };
    }
  };

  // Pointer capture on the stage redirects dblclick to it, so it is handled here, not on the <img>.
  const onDoubleClick = (e) => {
    const box = imgRef.current?.getBoundingClientRect();
    const onImage =
      box && e.clientX >= box.left && e.clientX <= box.right && e.clientY >= box.top && e.clientY <= box.bottom;
    if (!onImage) return;
    if (viewRef.current.scale > 1) {
      reset();
    } else {
      const p = relPoint(e.clientX, e.clientY);
      zoomAt(2.5, p.x, p.y);
    }
  };

  const zoomed = view.scale > 1;

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} website screenshots`}
      className="viewer-backdrop fixed inset-0 z-[100] bg-[#09090b]/95 backdrop-blur-sm text-white overscroll-contain"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top bar */}
      <div className="absolute inset-x-0 top-0 h-14 px-4 sm:px-6 flex items-center justify-between gap-4 pointer-events-none">
        <div className="min-w-0">
          <p className="text-sm font-semibold tracking-tight truncate">{title}</p>
          <p className="text-[11px] text-white/45 truncate">{category}</p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close viewer"
          className={`${iconBtn} pointer-events-auto shrink-0`}
        >
          <X size={18} />
        </button>
      </div>

      {/* Image stage */}
      <div
        ref={stageRef}
        className="absolute inset-x-2 sm:inset-x-6 top-14 bottom-20 overflow-hidden flex items-center justify-center touch-none select-none"
        style={{ cursor: zoomed ? (interacting ? 'grabbing' : 'grab') : 'default' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={(e) => endPointer(e, false)}
        onPointerCancel={(e) => endPointer(e, true)}
        onDoubleClick={onDoubleClick}
      >
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
            <div className="w-6 h-6 rounded-full border-2 border-indigo-500/20 border-t-indigo-500 animate-spin" />
          </div>
        )}
        <img
          key={current.src}
          ref={(el) => {
            imgRef.current = el;
            if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
          }}
          src={current.src}
          alt={current.alt}
          draggable={false}
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl will-change-transform"
          style={{
            opacity: loaded ? 1 : 0,
            transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.scale})`,
            transition: interacting
              ? 'opacity 200ms ease-out'
              : 'transform 160ms ease-out, opacity 200ms ease-out',
          }}
        />
      </div>

      {/* Previous / next */}
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => goBy(-1)}
            aria-label="Previous screenshot"
            className={`${iconBtn} absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-[#09090b]/70 backdrop-blur`}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => goBy(1)}
            aria-label="Next screenshot"
            className={`${iconBtn} absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-[#09090b]/70 backdrop-blur`}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* Toolbar */}
      <div className="absolute inset-x-0 bottom-0 h-20 flex items-center justify-center gap-3 px-4">
        <button
          type="button"
          onClick={() => zoomAt(viewRef.current.scale / ZOOM_STEP)}
          disabled={!zoomed}
          aria-label="Zoom out"
          className={iconBtn}
        >
          <ZoomOut size={18} />
        </button>
        <span
          className="min-w-[3.5rem] text-center text-xs font-medium tabular-nums text-white/60"
          aria-live="polite"
        >
          {Math.round(view.scale * 100)}%
        </span>
        <button
          type="button"
          onClick={() => zoomAt(viewRef.current.scale * ZOOM_STEP)}
          disabled={view.scale >= MAX_SCALE}
          aria-label="Zoom in"
          className={iconBtn}
        >
          <ZoomIn size={18} />
        </button>
        <button
          type="button"
          onClick={reset}
          disabled={!zoomed}
          aria-label="Fit to screen"
          className={iconBtn}
        >
          <Maximize2 size={18} />
        </button>
        {count > 1 && (
          <span
            className="ml-2 text-xs font-medium tabular-nums text-white/45"
            aria-live="polite"
          >
            {index + 1} / {count}
          </span>
        )}
      </div>
    </div>,
    document.body,
  );
}
