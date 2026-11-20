export const proficiency = {
  professional: {
    label: 'Professional',
    description: 'Used in paid product work and repeated delivery.',
  },
  working: {
    label: 'Working knowledge',
    description: 'Used to ship real projects and still deepening.',
  },
  learning: {
    label: 'Currently learning',
    description: 'Active study or early practice, not claimed as mastery.',
  },
};

export const capabilityGroups = [
  {
    id: 'ai',
    title: 'AI and Generative AI',
    summary:
      'Practical AI application development: integrating models into real workflows, shaping inputs and validating outputs.',
    skills: [
      { name: 'LLM integrations', level: 'working', evidence: 'ApplyFlow, AdSight' },
      { name: 'Generative AI application development', level: 'working', evidence: 'AdSight' },
      { name: 'Prompt and context engineering', level: 'working', evidence: 'ApplyFlow, AdSight' },
      { name: 'AI-assisted development', level: 'professional', evidence: 'Portfolio products' },
      { name: 'AI workflow design', level: 'working', evidence: 'ApplyFlow, Nuvotrain' },
      { name: 'AI evaluation and training exposure', level: 'working', evidence: 'Nuvotrain' },
    ],
  },
  {
    id: 'development',
    title: 'Development',
    summary:
      'Front-end product work with React, modern JavaScript and TypeScript, focused on usable interfaces and reliable state.',
    skills: [
      { name: 'React', level: 'working', evidence: 'ApplyFlow, Nuvotrain' },
      { name: 'TypeScript', level: 'working', evidence: 'Nuvotrain' },
      { name: 'JavaScript', level: 'working', evidence: 'ApplyFlow, this portfolio' },
      { name: 'HTML and CSS', level: 'professional', evidence: '10 years of web work' },
      { name: 'API integrations', level: 'working', evidence: 'Gemini, Tavily, Supabase' },
      { name: 'Responsive web development', level: 'professional', evidence: 'Product and web projects' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend and Data',
    summary:
      'Product-grade backend fundamentals: authentication, relational data, access rules and server-side workflows.',
    skills: [
      { name: 'Supabase', level: 'working', evidence: 'ApplyFlow, Nuvotrain' },
      { name: 'PostgreSQL', level: 'working', evidence: 'Nuvotrain schema and migrations' },
      { name: 'Authentication', level: 'working', evidence: 'Supabase Auth, magic links' },
      { name: 'Database design', level: 'working', evidence: 'Nuvotrain tasks, claims, evaluations' },
      { name: 'REST APIs', level: 'working', evidence: 'ApplyFlow Express API' },
      { name: 'Application workflows', level: 'professional', evidence: 'Product design background' },
    ],
  },
  {
    id: 'product',
    title: 'Product and Design',
    summary:
      'A decade of design practice applied to complex products, from problem framing to shipped interface.',
    skills: [
      { name: 'Product thinking', level: 'professional', evidence: '10 years of product work' },
      { name: 'UI/UX design', level: 'professional', evidence: 'SaaS, fintech, AI, education' },
      { name: 'Figma', level: 'professional', evidence: 'Design systems and product UI' },
      { name: 'Design systems', level: 'professional', evidence: 'Reusable interface systems' },
      { name: 'Prototyping', level: 'professional', evidence: 'Product and interaction work' },
      { name: 'Interaction design', level: 'professional', evidence: 'Gaming, mobile and AI products' },
      { name: 'User-centered product development', level: 'professional', evidence: 'Research-led product work' },
    ],
  },
];

export const toolGroups = [
  {
    title: 'Build',
    tools: [
      { name: 'Git and GitHub', level: 'working' },
      { name: 'VS Code', level: 'working' },
      { name: 'Cursor', level: 'working' },
      { name: 'Antigravity', level: 'working' },
      { name: 'Vercel', level: 'working' },
    ],
  },
  {
    title: 'AI',
    tools: [
      { name: 'Claude', level: 'professional' },
      { name: 'ChatGPT', level: 'professional' },
      { name: 'Gemini', level: 'working' },
      { name: 'Google AI Studio', level: 'working' },
      { name: 'Genkit', level: 'working' },
    ],
  },
  {
    title: 'Design',
    tools: [
      { name: 'Figma', level: 'professional' },
      { name: 'FigJam', level: 'professional' },
      { name: 'Framer', level: 'working' },
      { name: 'Adobe Illustrator', level: 'working' },
    ],
  },
];

export const aiPrinciples = [
  {
    title: 'AI accelerates the work. I verify the result.',
    body: 'I use coding agents and LLMs to move faster, then review the generated code, test the workflow and make the technical decisions myself.',
  },
  {
    title: 'Structure beats free text.',
    body: 'For product features, I prefer typed or schema-shaped outputs over open-ended generations. Structured data is easier to validate, store and display.',
  },
  {
    title: 'Secrets stay on the server.',
    body: 'Provider keys belong in server environment variables, never in client bundles. Supabase service-role credentials never reach the browser.',
  },
  {
    title: 'Test the workflow, not just the prompt.',
    body: 'A good demo is not a product. Loading, empty, error and permission states matter as much as the happy path.',
  },
];
