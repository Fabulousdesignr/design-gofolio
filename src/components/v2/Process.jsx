const STEPS = [
  {
    number: '01',
    title: 'Discover & Strategy',
    desc: 'Uncovering core business objectives, analyzing competitor workflows, and framing user problems before pixel placement.',
  },
  {
    number: '02',
    title: 'UX Architecture',
    desc: 'Structuring complex information hierarchy, mapping user journeys, and building wireframes that prioritize clarity.',
  },
  {
    number: '03',
    title: 'Design System & UI',
    desc: 'Designing polished visual interfaces with scalable component libraries, dark mode palettes, and crisp micro-interactions.',
  },
  {
    number: '04',
    title: 'Prototype & Build',
    desc: 'Leveraging AI-assisted code tools and interactive prototypes to validate design logic and streamline engineering handoff.',
  },
];

export default function Process() {
  return (
    <section className="py-24 border-b border-white/[0.06] bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">
            Methodology
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            How I approach product development.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-mono font-bold text-indigo-400/80 mb-4 block">
                  {step.number}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-white/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
