import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function Navbar({ isCaseStudy = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/85 backdrop-blur-md border-b border-card-border transition-colors duration-300">
      <div className="container-custom flex justify-between items-center py-4">
        <div className="flex items-center gap-8">
          {isCaseStudy && (
            <Link to="/" className="font-semibold text-text-secondary opacity-70 hover:opacity-100 hover:text-text-primary transition-all flex items-center gap-2">
              &larr; Back to Home
            </Link>
          )}
          <Link to="/" className="text-2xl font-extrabold tracking-tighter text-text-primary">
            G.O
          </Link>
        </div>
        
        <div className="flex items-center gap-8">
          {!isCaseStudy && (
            <div className="hidden md:flex gap-8">
              <a href="#work" className="font-medium text-text-secondary hover:text-text-primary transition-colors">Work</a>
              <Link to="/about" className="font-medium text-text-secondary hover:text-text-primary transition-colors">About</Link>
              <a href="#services" className="font-medium text-text-secondary hover:text-text-primary transition-colors">Services</a>
            </div>
          )}
          
          <div className="flex items-center gap-6">
            {!isCaseStudy && (
              <a href="#contact" className="hidden sm:inline-block bg-text-primary text-bg-primary px-5 py-2 rounded-full font-semibold text-sm hover:-translate-y-0.5 hover:opacity-90 transition-all">
                Let's Talk
              </a>
            )}
            <button 
              onClick={toggleTheme}
              className="text-text-primary hover:text-accent transition-colors p-2 flex items-center justify-center"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
