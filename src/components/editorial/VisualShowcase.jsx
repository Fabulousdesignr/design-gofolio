import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const showcaseImages = [
  "/images/Datewave 1.png",
  "/images/Ui 1.png",
  "/images/Moneylink 4.png",
  "/images/Adsight 1.png",
  "/images/Hub360 4.png",
  "/images/Loodle 3.png",
  "/images/shove-screen-4.png",
  "/images/Applyflow Job Screen.png",
];

export default function VisualShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  useEffect(() => {
    // Only auto-scroll on desktop
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % showcaseImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % showcaseImages.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + showcaseImages.length) % showcaseImages.length);
  };

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[40vh] md:h-[55vh] lg:h-[70vh] bg-bg-primary overflow-hidden flex items-center justify-center"
      style={{ perspective: '1800px', transformStyle: 'preserve-3d' }}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center transform-style-3d"
        style={{
          transform: `rotateX(${mousePos.y * -4}deg) rotateY(${mousePos.x * 4}deg)`,
          transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {showcaseImages.map((src, index) => {
          let offset = index - activeIndex;
          if (offset < -Math.floor(showcaseImages.length / 2)) offset += showcaseImages.length;
          if (offset > Math.floor(showcaseImages.length / 2)) offset -= showcaseImages.length;

          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

          let transform = '';
          let opacity = 0;
          let blur = 'blur(0px)';
          let zIndex = 10 - Math.abs(offset);
          let isActive = offset === 0;
          let boxShadow = isActive 
            ? '0 40px 120px rgba(0,0,0,0.45)' 
            : '0 12px 40px rgba(0,0,0,0.25)';

          if (isActive) {
            transform = `translateX(0) rotateY(0deg) scale(1.08)`;
            opacity = 1;
            blur = 'blur(0px)';
          } else if (offset === 1) {
            transform = isMobile 
              ? `translateX(50%) rotateY(-20deg) scale(0.88)`
              : `translateX(320px) rotateY(-35deg) scale(0.88)`;
            opacity = 0.55;
            blur = 'blur(2px)';
          } else if (offset === -1) {
            transform = isMobile 
              ? `translateX(-50%) rotateY(20deg) scale(0.88)`
              : `translateX(-320px) rotateY(35deg) scale(0.88)`;
            opacity = 0.55;
            blur = 'blur(2px)';
          } else if (offset === 2) {
            transform = isMobile 
              ? `translateX(100%) rotateY(-30deg) scale(0.72)`
              : `translateX(520px) rotateY(-45deg) scale(0.72)`;
            opacity = 0.3;
            blur = 'blur(2px)';
          } else if (offset === -2) {
            transform = isMobile 
              ? `translateX(-100%) rotateY(30deg) scale(0.72)`
              : `translateX(-520px) rotateY(45deg) scale(0.72)`;
            opacity = 0.3;
            blur = 'blur(2px)';
          } else {
            transform = offset > 0 
              ? `translateX(720px) rotateY(-55deg) scale(0.5)` 
              : `translateX(-720px) rotateY(55deg) scale(0.5)`;
            opacity = 0;
            blur = 'blur(4px)';
          }

          return (
            <div
              key={src}
              className="absolute top-1/2 left-1/2 w-[90vw] md:w-[780px] -mt-[calc(90vw*9/16/2)] -ml-[45vw] md:-mt-[219.375px] md:-ml-[390px] rounded-[24px] md:rounded-[32px] overflow-hidden bg-card"
              style={{
                aspectRatio: '16 / 9',
                transform,
                opacity,
                zIndex,
                boxShadow,
                filter: blur,
                transition: 'all 600ms cubic-bezier(0.22, 1, 0.36, 1)',
                willChange: 'transform, opacity, filter, box-shadow'
              }}
            >
              <img 
                src={src} 
                alt="Showcase UI" 
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              {!isActive && (
                <div className="absolute inset-0 bg-bg-primary/20 transition-opacity duration-600" />
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Controls (Visible on Mobile) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6 z-50 md:hidden">
        <button 
          onClick={handlePrev}
          className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border border-card-border flex items-center justify-center text-text-primary shadow-lg active:scale-95 transition-transform"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={handleNext}
          className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-md border border-card-border flex items-center justify-center text-text-primary shadow-lg active:scale-95 transition-transform"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
