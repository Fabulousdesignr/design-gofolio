export default function CaseStudyDocPanel({ id, index, title, children, className = '' }) {
  return (
    <section id={id} className={`workspace-doc-panel scroll-reveal ${className}`.trim()}>
      {index && <p className="workspace-doc-label">{index}</p>}
      {title && <h2 className="workspace-doc-title">{title}</h2>}
      {children}
    </section>
  );
}
