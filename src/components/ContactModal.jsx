import React, { useState, useEffect } from 'react';
import { X, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useContactModal } from '../context/ContactModalContext';

export default function ContactModal() {
  const { isOpen, closeModal } = useContactModal();
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [formState, setFormState] = useState('idle'); // idle, sending, success, error
  
  const [selectedChip, setSelectedChip] = useState('');
  
  const chips = [
    "Need a designer",
    "Need MVP help",
    "Need AI workflow help",
    "Partnership",
    "Just saying hi"
  ];

  // Handle animation mounting/unmounting
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
      // Small delay to allow DOM to render before triggering CSS transition
      setTimeout(() => setIsVisible(true), 10);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      setIsVisible(false);
      const timer = setTimeout(() => {
        setIsRendered(false);
        setFormState('idle');
        document.body.style.overflow = '';
      }, 300); // match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState('sending');

    const formData = new FormData(e.target);
    if (selectedChip) {
      formData.append('Reason', selectedChip);
    }

    try {
      const response = await fetch(import.meta.env.VITE_FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (error) {
      setFormState('error');
    }
  };

  if (!isRendered) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-md transition-opacity`}
        style={{ 
          opacity: isVisible ? 1 : 0, 
          transitionDuration: '300ms',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }}
        onClick={closeModal}
      ></div>

      {/* Modal Card */}
      <div 
        className={`relative w-full max-w-3xl bg-bg-primary rounded-[28px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-card-border overflow-hidden flex flex-col max-h-[90vh] my-auto`}
        style={{
          transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
          opacity: isVisible ? 1 : 0,
          transitionProperty: 'transform, opacity',
          transitionDuration: '300ms',
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-8 md:p-12 pb-0 shrink-0">
          <div>
            <h2 className="font-serif text-[36px] md:text-[48px] leading-[1.0] text-text-primary tracking-tight mb-4">
              Let’s build something meaningful.
            </h2>
            <p className="text-text-secondary text-[17px] md:text-[19px] leading-relaxed max-w-md">
              Tell me what you’re working on.
            </p>
          </div>
          <button 
            onClick={closeModal}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-card border border-card-border hover:bg-bg-inverse hover:text-text-inverse transition-colors group shrink-0"
            aria-label="Close modal"
          >
            <X size={20} className="text-text-secondary group-hover:text-text-inverse transition-colors" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
          
          {formState === 'success' ? (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-fade-in">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary mb-2">Message sent successfully.</h3>
              <p className="text-text-secondary text-lg">I’ll get back within 24–48 hours.</p>
              <button 
                onClick={closeModal}
                className="mt-10 px-8 py-4 bg-bg-inverse text-text-inverse rounded-full font-semibold hover:bg-accent-orange transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              {/* Quick Selection Chips */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest text-text-secondary mb-4">
                  What brings you here?
                </label>
                <div className="flex flex-wrap gap-3">
                  {chips.map(chip => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setSelectedChip(chip === selectedChip ? '' : chip)}
                      className={`px-5 py-2.5 rounded-full text-[15px] font-medium border transition-colors ${
                        selectedChip === chip 
                          ? 'bg-bg-inverse border-bg-inverse text-text-inverse' 
                          : 'bg-card border-card-border text-text-secondary hover:border-bg-inverse hover:text-text-primary'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[15px] font-semibold text-text-primary">Full Name *</label>
                  <input required type="text" id="name" name="name" className="w-full bg-card border border-card-border rounded-xl px-5 py-4 focus:outline-none focus:border-bg-inverse focus:ring-1 focus:ring-bg-inverse transition-all text-[16px] text-text-primary" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[15px] font-semibold text-text-primary">Email Address *</label>
                  <input required type="email" id="email" name="email" className="w-full bg-card border border-card-border rounded-xl px-5 py-4 focus:outline-none focus:border-bg-inverse focus:ring-1 focus:ring-bg-inverse transition-all text-[16px] text-text-primary" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="company" className="text-[15px] font-semibold text-text-primary">Company / Startup</label>
                  <input type="text" id="company" name="company" className="w-full bg-card border border-card-border rounded-xl px-5 py-4 focus:outline-none focus:border-bg-inverse focus:ring-1 focus:ring-bg-inverse transition-all text-[16px] text-text-primary" placeholder="Acme Corp" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="timeline" className="text-[15px] font-semibold text-text-primary">Timeline</label>
                  <input type="text" id="timeline" name="timeline" className="w-full bg-card border border-card-border rounded-xl px-5 py-4 focus:outline-none focus:border-bg-inverse focus:ring-1 focus:ring-bg-inverse transition-all text-[16px] text-text-primary" placeholder="e.g. Next month, ASAP" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-[15px] font-semibold text-text-primary">Project Type</label>
                  <select id="projectType" name="projectType" className="w-full bg-card border border-card-border rounded-xl px-5 py-4 focus:outline-none focus:border-bg-inverse focus:ring-1 focus:ring-bg-inverse transition-all text-[16px] text-text-primary appearance-none">
                    <option value="">Select an option...</option>
                    <option value="Product Design">Product Design</option>
                    <option value="MVP / Startup Build">MVP / Startup Build</option>
                    <option value="AI Product / Workflow Design">AI Product / Workflow Design</option>
                    <option value="UX Audit / Product Review">UX Audit / Product Review</option>
                    <option value="Design Systems">Design Systems</option>
                    <option value="Long-term Collaboration">Long-term Collaboration</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-[15px] font-semibold text-text-primary">Budget Range</label>
                  <select id="budget" name="budget" className="w-full bg-card border border-card-border rounded-xl px-5 py-4 focus:outline-none focus:border-bg-inverse focus:ring-1 focus:ring-bg-inverse transition-all text-[16px] text-text-primary appearance-none">
                    <option value="">Select range...</option>
                    <option value="< $500">&lt; $500</option>
                    <option value="$500 - $2k">$500 – $2k</option>
                    <option value="$2k - $5k">$2k – $5k</option>
                    <option value="$5k+">$5k+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="details" className="text-[15px] font-semibold text-text-primary">Project Details *</label>
                <textarea required id="details" name="details" rows={4} className="w-full bg-card border border-card-border rounded-xl px-5 py-4 focus:outline-none focus:border-bg-inverse focus:ring-1 focus:ring-bg-inverse transition-all text-[16px] text-text-primary resize-none" placeholder="Tell me about the problem you're solving, current stage, and goals..."></textarea>
              </div>

              {formState === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 animate-fade-in">
                  <AlertCircle size={20} />
                  <span className="font-medium">Something went wrong. Please try again.</span>
                </div>
              )}

              <div className="pt-4 border-t border-card-border flex justify-end">
                <button 
                  type="submit" 
                  disabled={formState === 'sending'}
                  className="bg-bg-inverse text-text-inverse px-10 py-5 rounded-full text-[16px] font-bold tracking-wide hover:bg-accent-orange transition-colors flex items-center justify-center gap-3 min-w-[200px] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'sending' ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> Sending...
                    </>
                  ) : 'Send Message'}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>

    </div>
  );
}
