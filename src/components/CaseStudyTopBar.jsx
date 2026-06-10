import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CaseStudyTopBar({ title, liveUrl }) {
  return (
    <div className="workspace-case-bar">
      <div className="container-custom flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3 min-w-0">
          <Link to="/" className="workspace-open-link text-sm shrink-0">
            ← Workspace
          </Link>
          <span className="text-text-secondary hidden sm:inline">/</span>
          <span className="font-semibold text-text-primary truncate">{title}</span>
        </div>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="workspace-btn inline-flex items-center gap-2 shrink-0"
          >
            Live project <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
