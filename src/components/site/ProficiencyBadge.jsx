const STYLES = {
  professional: 'border-signal-border bg-signal-soft text-signal',
  working: 'border-line-strong text-text-secondary',
  learning: 'border-line text-text-tertiary',
};

export default function ProficiencyBadge({ level, className = '' }) {
  const labels = {
    professional: 'Professional',
    working: 'Working knowledge',
    learning: 'Currently learning',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] leading-tight ${
        STYLES[level] || STYLES.learning
      } ${className}`}
    >
      {labels[level] || level}
    </span>
  );
}
