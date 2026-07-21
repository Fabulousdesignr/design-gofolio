import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme] = useState('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  // Theme is locked to dark — no toggle exposed
  return { theme };
}
