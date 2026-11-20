const STEPS = [
  {
    number: '01',
    title: 'Understand',
    body: 'Identify the problem, the users and the product requirements before choosing a solution.',
  },
  {
    number: '02',
    title: 'Design',
    body: 'Create the user flows, interfaces and product experience, from structure to interaction detail.',
  },
  {
    number: '03',
    title: 'Build',
    body: 'Use modern development tools and AI coding agents to implement the application.',
  },
  {
    number: '04',
    title: 'Integrate',
    body: 'Connect APIs, databases and AI capabilities, then handle the states between them.',
  },
  {
    number: '05',
    title: 'Validate',
    body: 'Test functionality, review generated code and resolve the issues that appear in real use.',
  },
  {
    number: '06',
    title: 'Ship',
    body: 'Deploy, document and improve the product after it is in front of real people.',
  },
];

export default function Process() {
  return (
    <section className="site-section border-b border-line bg-bg-alt/40">
      <div className="site-shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow">How I work</p>
            <h2 className="display-section mt-5 text-text-primary">
              AI is an engineering partner, not a substitute for judgement.
            </h2>
            <p className="prose-site mt-6">
              I use AI to move faster through implementation, then review the code, test the
              workflow and make the technical decisions myself. The process stays deliberate
              from problem framing to production.
            </p>
            <div className="mt-8 border-l border-signal-border pl-4">
              <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.11em] text-text-secondary">
                The output is only as good as the understanding behind it.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2">
              {STEPS.map((step) => (
                <div key={step.number} className="bg-bg-primary p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-signal">{step.number}</span>
                    <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-[-0.025em] text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
