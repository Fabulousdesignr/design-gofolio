// Ongoing professional development and a small, easy-to-edit build log.
// Update `buildLog` when a meaningful project milestone ships.

export const bootcamp = {
  title: 'AI Development Bootcamp',
  status: 'Ongoing',
  summary:
    'A structured programme covering the product, engineering and delivery skills behind AI applications. I am working through it while building real projects in parallel.',
  topics: [
    'Design foundations',
    'Context engineering',
    'Frontend architecture',
    'AI-assisted development',
    'APIs and product development',
    'Backend engineering',
    'Database design',
    'Authentication and authorisation',
    'Deployment',
    'Git workflows',
    'Testing and production fundamentals',
  ],
};

export const currentlyLearning = [
  {
    title: 'Backend engineering',
    body: 'Moving beyond CRUD screens into permissions, server functions and data integrity.',
  },
  {
    title: 'PostgreSQL and RLS',
    body: 'Designing schemas where access rules are enforced by the database, not only the interface.',
  },
  {
    title: 'Testing and production fundamentals',
    body: 'Adding unit, browser and database tests before a product is treated as finished.',
  },
  {
    title: 'Context engineering',
    body: 'Shaping prompts, schemas and retrieval so AI output is predictable enough to use in a product.',
  },
];

export const buildLog = [
  {
    date: '2026-11',
    tag: 'Portfolio',
    title: 'Rebuilt this portfolio around product engineering',
    body: 'Moved from a design-first gallery to a working record of AI products, architecture decisions and technical capability.',
  },
  {
    date: '2026-10',
    tag: 'Nuvotrain',
    title: 'Opened an invitation-only beta',
    body: 'Added five contributor slots, database-enforced deadlines and admin workflows for assignment, rework and review.',
  },
  {
    date: '2026-07',
    tag: 'AdSight',
    title: 'Shipped an AI creative review tool',
    body: 'Built and deployed AdSight using Next.js, Genkit and Gemini 2.5 Flash. Upload any ad creative and receive a structured seven-part review without writing a prompt.',
  },
  {
    date: '2026-06',
    tag: 'ApplyFlow',
    title: 'Shipped an AI discovery and ranking engine',
    body: 'Moved model calls behind an Express API, added Tavily search, Gemini ranking and a model fallback chain.',
  },
];
