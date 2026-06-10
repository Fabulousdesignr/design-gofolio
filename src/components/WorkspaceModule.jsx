/**
 * Homepage workspace module: indexed panel with chrome header.
 */
export default function WorkspaceModule({
  id,
  index,
  title,
  subtitle,
  children,
  variant = 'default',
  layout = 'default',
  className = '',
  headerAction = null,
}) {
  const variantClass =
    variant === 'ai'
      ? 'workspace-module--ai'
      : variant === 'about'
        ? 'workspace-module--about'
        : '';

  const layoutClass =
    layout === 'wide' ? 'workspace-module--wide' : layout === 'compact' ? 'workspace-module--compact' : '';

  return (
    <section id={id} className={`workspace-module-slot scroll-reveal ${layoutClass}`}>
      <article
        className={`workspace-module workspace-panel workspace-module-panel ${variantClass} ${className}`.trim()}
      >
        <header className="workspace-module-header">
          <div className="workspace-module-header-text">
            {index != null && (
              <span className="workspace-module-index font-mono">{String(index).padStart(2, '0')}</span>
            )}
            <div>
              <h2 className="workspace-module-title">{title}</h2>
              {subtitle && <p className="workspace-module-subtitle">{subtitle}</p>}
            </div>
          </div>
          {headerAction}
        </header>
        <div className="workspace-module-body">{children}</div>
      </article>
    </section>
  );
}
