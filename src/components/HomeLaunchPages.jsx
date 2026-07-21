import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import WorkspaceModule from './WorkspaceModule';

const SLIDES = [
  { src: '/images/Ui 2.png', alt: 'UI Design' },
  { src: '/images/Ui 4.png', alt: 'UI Design' },
  { src: '/images/Ui 5.png', alt: 'UI Design' },
  { src: '/images/Maxmall 2.png', alt: 'Maxmall Design' },
  { src: '/images/Maxmall 3.png', alt: 'Maxmall Design' },
  { src: '/images/Maxmall 4.png', alt: 'Maxmall Design' },
  { src: '/images/Maxmall 5.png', alt: 'Maxmall Design' },
  { src: '/images/Maxmall Hero.png', alt: 'Maxmall Hero' },
];

export default function HomeLaunchPages() {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    setCurrent((idx + SLIDES.length) % SLIDES.length);
  };

  const prev = () => { goTo(current - 1); resetTimer(); };
  const next = () => { goTo(current + 1); resetTimer(); };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    if (isPlaying) {
      timerRef.current = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 3500);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => setCurrent(c => (c + 1) % SLIDES.length), 3500);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying]);

  return (
    <WorkspaceModule
      id="launch-pages"
      index={3}
      variant="launch"
      title="Landing Pages & Websites"
      subtitle="I design landing pages and full websites that look great and get people to act — built for real products with real goals."
    >
      <div className="relative overflow-hidden rounded-2xl group">
        {/* Slideshow track */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-bg-alt">
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: idx === current ? 1 : 0, zIndex: idx === current ? 1 : 0 }}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          ))}

          {/* Prev / Next buttons */}
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/60 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-5">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { goTo(idx); resetTimer(); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current
                  ? 'w-6 bg-accent'
                  : 'w-1.5 bg-card-border hover:bg-text-secondary'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </WorkspaceModule>
  );
}
