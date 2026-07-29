import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/[0.08] bg-[#09090b]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
        <div className="flex items-center gap-3">
          <Link to="/" className="w-7 h-7 rounded-lg bg-white/[0.06] border border-white/[0.1] flex items-center justify-center text-white font-extrabold text-[11px] tracking-tight">
            GO
          </Link>
          <span>&copy; {currentYear} Godwin Okechukwu. All rights reserved.</span>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="https://www.linkedin.com/in/godwinokechukwu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/fabulousdesignr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Twitter
          </a>
          <a
            href="https://dribbble.com/Mr_Fabulous"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Dribbble
          </a>
          <a
            href="https://www.behance.net/fabianokechukwu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            Behance
          </a>
          <a
            href="https://gofolio.site"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 font-medium transition-colors"
          >
            PM Portfolio <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </footer>
  );
}
