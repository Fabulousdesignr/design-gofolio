export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 section-dark border-t border-card-border transition-colors duration-300">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-2xl font-black tracking-tighter text-text-primary">G.O</h3>
          <p className="text-text-secondary text-sm font-medium">
            &copy; {currentYear} Godwin. All rights reserved.
          </p>
        </div>
        
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/godwinokechukwu/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent font-bold transition-colors">LinkedIn</a>
          <a href="https://x.com/fabulousdesignr" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent font-bold transition-colors">Twitter</a>
          <a href="https://dribbble.com/Mr_Fabulous" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent font-bold transition-colors">Dribbble</a>
          <a href="https://www.behance.net/fabianokechukwu" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent font-bold transition-colors">Behance</a>
        </div>
      </div>
    </footer>
  );
}
