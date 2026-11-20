const STYLES = {
  live: 'border-signal-border bg-signal-soft text-signal',
  learning: 'border-line-strong bg-transparent text-text-secondary',
  private: 'border-line-strong bg-transparent text-text-tertiary',
  neutral: 'border-line bg-transparent text-text-secondary',
};

export default function StatusPill({ children, tone = 'live', className = '' }) {
  const dot = tone === 'live' ? 'bg-signal' : tone === 'learning' ? 'bg-text-secondary' : 'bg-text-tertiary';

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.12em] leading-none ${STYLES[tone] || STYLES.neutral} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} aria-hidden="true" />
      {children}
    </span>
  );
}
