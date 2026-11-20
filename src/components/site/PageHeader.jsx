export default function PageHeader({ eyebrow, title, intro, aside, children }) {
  return (
    <header className="border-b border-line pb-12 pt-36 md:pb-16 md:pt-44">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
          <div>
            {eyebrow ? <p className="eyebrow mb-6">{eyebrow}</p> : null}
            <h1 className="display-section max-w-4xl text-text-primary">{title}</h1>
            {intro ? <p className="prose-site mt-6">{intro}</p> : null}
          </div>
          {aside ? <div className="lg:justify-self-end">{aside}</div> : null}
        </div>
        {children}
      </div>
    </header>
  );
}
