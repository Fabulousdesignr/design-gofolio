import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-card border border-card-border text-text-primary hover:bg-bg-alt hover:text-accent-orange transition-all duration-300 shadow-sm hover:shadow-md group flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun size={20} className="group-hover:rotate-45 transition-transform duration-500" />
      ) : (
        <Moon size={20} className="group-hover:-rotate-12 transition-transform duration-500" />
      )}
    </button>
  );
}
