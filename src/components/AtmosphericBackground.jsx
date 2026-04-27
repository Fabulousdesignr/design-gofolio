import { useState, useEffect } from 'react';

export default function AtmosphericBackground() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    // Only run the interactive effect on devices with mouse/hover capability
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMove = (e) => {
      // Calculate position as percentage
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div 
      className="global-bg"
      style={{
        background: `radial-gradient(
          circle at ${position.x}% ${position.y}%,
          var(--glow-color),
          var(--glow-bg) 40%
        )`
      }}
    />
  );
}
