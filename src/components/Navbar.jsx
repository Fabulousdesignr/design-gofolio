import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useContactModal();

  const navLinks = [
    { name: 'About', path: '/about' }
  ];

  return (
    <nav className="absolute top-0 inset-x-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-24 flex items-center justify-between">
        
        {/* Left: Serif Logo */}
        <Link to="/" className="text-2xl md:text-[28px] font-serif text-text-primary tracking-tight shrink-0">
          Godwin Okechukwu
        </Link>

        {/* Center: Links (Desktop) - Replaced by simpler right side structure */}
        <div className="hidden md:flex items-center gap-10">
        </div>

        {/* Right: Black Pill Button */}
        <div className="hidden md:flex items-center gap-10">
          <Link 
            to="/about" 
            className={`text-sm md:text-base font-semibold tracking-wide hover:-translate-y-0.5 hover:text-accent-orange transition-all duration-300 ${location.pathname === '/about' ? 'text-accent-orange' : 'text-text-primary'}`}
          >
            About
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button 
              onClick={openModal}
              className="bg-bg-inverse text-text-inverse px-7 py-3 rounded-full text-sm md:text-base font-medium hover:bg-accent-orange hover:text-white hover:shadow-[0_4px_20px_rgba(255,122,26,0.3)] transition-all shadow-sm"
            >
              Message Me
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(true)}
            className="text-text-primary p-2 -mr-2"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>

      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex justify-end bg-black/40 backdrop-blur-sm md:hidden" onClick={() => setIsOpen(false)}>
          <div 
            className="w-4/5 max-w-sm h-full bg-bg-primary shadow-2xl p-8 flex flex-col animate-slide-in-right"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-serif font-bold text-xl text-text-primary">Menu</span>
              <button onClick={() => setIsOpen(false)} className="text-text-primary p-2 -mr-2 hover:opacity-70 transition-opacity">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col gap-8 text-xl font-bold">
              {navLinks.map(link => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={location.pathname === link.path ? 'text-text-primary' : 'text-text-secondary hover:text-text-primary'}
                >
                  {link.name}
                </Link>
              ))}
              <button 
                onClick={() => {
                  openModal();
                  setIsOpen(false);
                }} 
                className="text-left text-text-primary mt-4 pt-8 border-t border-card-border"
              >
                Message Me
              </button>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
