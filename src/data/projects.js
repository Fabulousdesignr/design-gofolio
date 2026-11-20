// Project data for the portfolio.
// `tier: 'flagship'` projects appear as large FlagshipCards on the Work page.
// `categories` drive the Work page archive filters.
// Valid category ids: 'ai-product' | 'ai-experiment' | 'product-design' | 'web'

export const projects = [
  // ─── Flagship AI products ────────────────────────────────────────────────
  {
    id: 'applyflow',
    number: '01',
    title: 'ApplyFlow',
    categoryLabel: 'AI Product / SaaS',
    categories: ['ai-product'],
    tier: 'flagship',
    tagline:
      'An AI-assisted job application workspace that brings discovery, tracking, research and follow-ups into one dashboard.',
    description:
      'Designed for people who are tired of juggling spreadsheets, tabs and notes. ApplyFlow combines a pipeline dashboard with AI-assisted job discovery and document parsing.',
    role: 'Product design  /  Frontend  /  AI integration',
    stack: ['React', 'Supabase', 'Gemini', 'Tavily'],
    tags: ['AI', 'SaaS', 'Product'],
    image: '/images/Applyflow Dashboard.png',
    fallback: '/images/Applyflowimage.png',
    video: '/images/Applyflowvideo.mp4',
    links: {
      caseStudy: '/work/applyflow',
      live: 'https://applyflow-hazel.vercel.app',
      github: 'https://github.com/Fabulousdesignr/Applyflow',
    },
    status: 'Live',
    featured: true,
  },
  {
    id: 'adsight',
    number: '02',
    title: 'AdSight',
    categoryLabel: 'Generative AI / AI Application',
    categories: ['ai-product'],
    tier: 'flagship',
    tagline:
      'An AI creative review tool that analyses advertising creatives and returns structured, actionable feedback.',
    description:
      'Upload a flyer, poster or social ad. AdSight uses Gemini vision through a Genkit flow to assess messaging, audience fit, strengths and improvement areas.',
    role: 'Product design  /  Genkit/Gemini integration  /  Frontend',
    stack: ['Next.js', 'TypeScript', 'Genkit', 'Gemini'],
    tags: ['Generative AI', 'Vision', 'Marketing'],
    image: '/images/Adsight 1.png',
    video: '/images/Adsight Video.mp4',
    links: {
      caseStudy: '/work/adsight',
      live: 'https://adsight-murex.vercel.app/',
      github: 'https://github.com/Fabulousdesignr/Adsight',
    },
    status: 'Live',
    featured: true,
  },
  {
    id: 'nuvotrain',
    number: '03',
    title: 'Nuvotrain',
    categoryLabel: 'AI Infrastructure / Full-Stack Product',
    categories: ['ai-product'],
    tier: 'flagship',
    tagline:
      'An evaluation workspace for AI-generated output, with task workflows, contributor access and administrative controls.',
    description:
      'Evaluators preview six AI-generated responses, score quality and aesthetics against deadlines, and submit evidence. Admins manage tasks, invitations, rework and audit history.',
    role: 'Product design  /  Database design  /  Frontend architecture',
    stack: ['TypeScript', 'Supabase', 'PostgreSQL', 'RLS'],
    tags: ['AI Evaluation', 'Full-Stack', 'Infrastructure'],
    image: '/images/nuvotrain/workspace.png',
    links: {
      caseStudy: '/work/nuvotrain',
      live: 'https://nuvotrain.vercel.app',
    },
    status: 'Live',
    featured: true,
  },

  // ─── Secondary AI products ────────────────────────────────────────────────
  {
    id: 'rivalens',
    title: 'Rivalens',
    categoryLabel: 'AI Product / Experiment',
    categories: ['ai-product'],
    tier: 'secondary',
    tagline:
      'A competitive intelligence workspace that turns market signals into founder-ready summaries.',
    description:
      'An exploration of proactive competitor monitoring, AI summarisation and decision-ready intelligence.',
    role: 'Product design  /  AI UX  /  Visual design',
    stack: ['React', 'Gemini', 'AI UX'],
    tags: ['AI', 'SaaS', 'Experiment'],
    image: '/images/Rivalens 1.png',
    video: '/images/Rivalens Video.mp4',
    links: {
      lab: '/ai-playground/rivalens',
      live: 'https://rivalens-xi.vercel.app/',
    },
    status: 'Experiment',
    featured: false,
  },

  // ─── AI experiments ───────────────────────────────────────────────────────
  {
    id: 'where-do-you-stand',
    title: 'Where Do You Stand',
    categoryLabel: 'AI Experiment / Interaction Design',
    categories: ['ai-experiment'],
    tier: 'secondary',
    tagline:
      'A spectrum-based interactive interface experiment exploring nuance and fluid opinion instead of binary choices.',
    description:
      'The interface transforms in real time while dragging — an exploration of ambiguity, emotional interaction and how motion communicates meaning.',
    role: 'Interaction design  /  Figma Make',
    stack: ['Figma Make', 'Interaction Design'],
    tags: ['Experiment', 'Interaction', 'AI'],
    image: '/images/AI playground/Where do you stand.png',
    links: {
      lab: '/ai-playground/where-do-you-stand',
      live: 'https://slate-meta-15875939.figma.site/',
    },
    status: 'Experiment',
    featured: false,
  },
  {
    id: 'shyne-virtual-try-on',
    title: 'Shyne Virtual Try-On',
    categoryLabel: 'AI Experiment / Commerce',
    categories: ['ai-experiment'],
    tier: 'secondary',
    tagline:
      'An AI-powered virtual fashion try-on studio where users upload garments and generate realistic model previews.',
    description:
      'Built to lower the barrier for fashion creators and reduce expensive production costs through AI-assisted visual generation.',
    role: 'AI UX  /  Product design  /  Lovable',
    stack: ['Lovable', 'AI Vision', 'Commerce'],
    tags: ['Experiment', 'AI', 'Commerce'],
    image: '/images/AI playground/Virtual try-on.png',
    links: {
      lab: '/ai-playground/shyne-virtual-try-on',
      live: 'https://id-preview--cace28af-9797-47a1-91d7-09dcd375cb1b.lovable.app/',
    },
    status: 'Experiment',
    featured: false,
  },
  {
    id: 'unsent',
    title: 'Unsent',
    categoryLabel: 'AI Experiment / Emotional Design',
    categories: ['ai-experiment'],
    tier: 'secondary',
    tagline:
      'An emotional journaling concept built around grief, memory and messages that never get sent.',
    description:
      'A quiet, minimal space for writing unsent messages — intentionally distraction-free and emotionally calm.',
    role: 'Product design  /  AI-assisted build',
    stack: ['AI-Assisted Build', 'Emotional Design'],
    tags: ['Experiment', 'AI', 'Emotional'],
    image: '/images/AI playground/Unsent.png',
    links: {
      lab: '/ai-playground/unsent',
      live: 'https://unsent.app',
    },
    status: 'Experiment',
    featured: false,
  },
  {
    id: 'snapdish',
    title: 'Snapdish',
    categoryLabel: 'AI Experiment / Visual Interaction',
    categories: ['ai-experiment'],
    tier: 'secondary',
    tagline:
      'A visual recipe-generation app where users scan food and instantly receive recipes, ingredients and cooking steps.',
    description:
      'AI-assisted recipe discovery — a frictionless visual interaction replacing manual ingredient search.',
    role: 'Product design  /  Figma + AI build',
    stack: ['Figma', 'AI Vision', 'Mobile'],
    tags: ['Experiment', 'AI', 'Mobile'],
    image: '/images/AI playground/Snapdish.png',
    links: {
      lab: '/ai-playground/snapdish',
      live: 'https://www.anything.com/mobile-preview/c4877816-47cc-4d95-86eb-29040130c9f7',
    },
    status: 'Experiment',
    featured: false,
  },

  // ─── Product design ───────────────────────────────────────────────────────
  {
    id: 'moneylink',
    title: 'MoneyLink',
    categoryLabel: 'Fintech Mobile App',
    categories: ['product-design'],
    tier: 'secondary',
    tagline:
      'A unified fintech app that consolidates multi-bank management and bill payments in one place.',
    description:
      'Product design for a mobile finance workflow spanning accounts, transfers and bill payments.',
    role: 'Product design  /  Mobile UX  /  Fintech',
    stack: ['Mobile', 'Fintech', 'Product Design'],
    tags: ['Fintech', 'Mobile', 'Product'],
    image: '/images/Moneylink 1.png',
    fallback: '/images/Moneylink Hero.png',
    links: {
      caseStudy: '/case-study/moneylink',
    },
    status: 'Case study',
    featured: true,
  },
  {
    id: 'shove-bet',
    title: 'Shove.bet',
    categoryLabel: 'Web3 Gaming Product',
    categories: ['product-design'],
    tier: 'secondary',
    tagline:
      'A real-time poker platform designed around speed, clarity and immersive play on Web3 infrastructure.',
    description:
      'Product and interaction design for a live gaming environment with complex state and fast feedback loops.',
    role: 'Product design  /  UI/UX  /  Interaction design',
    stack: ['Product Design', 'Gaming', 'Web3'],
    tags: ['Gaming', 'Web3', 'Product'],
    image: '/images/shove-hero.png',
    links: {
      caseStudy: '/case-study/shove-bet',
      live: 'https://shove.bet',
    },
    status: 'Case study',
    featured: true,
  },
  {
    id: 'loodle',
    title: 'Loodle',
    categoryLabel: 'EdTech Mobile App',
    categories: ['product-design'],
    tier: 'secondary',
    tagline:
      'A calm, adaptive mobile learning app built for neurodiverse children.',
    description:
      'Collaborative product work focused on sensory-friendly interaction, personalisation and caregiver visibility.',
    role: 'UI Design Lead  /  UX Research',
    stack: ['Mobile', 'EdTech', 'Product Design'],
    tags: ['EdTech', 'Mobile', 'Inclusive Design'],
    image: '/images/Loodle Hero.png',
    links: {
      caseStudy: '/case-study/loodle',
    },
    status: 'Case study',
    featured: false,
  },
  {
    id: 'datewave',
    title: 'Datewave',
    categoryLabel: 'Consumer Mobile App',
    categories: ['product-design'],
    tier: 'secondary',
    tagline:
      'A dating app built around intent-driven matching and safer online connections.',
    description:
      'Lead mobile UX for a consumer product exploring matching, trust and conversation design.',
    role: 'Lead Mobile UX Designer',
    stack: ['Mobile', 'Product Design', 'Consumer'],
    tags: ['Mobile', 'Consumer', 'Product'],
    image: '/images/Datewave Hero.png',
    links: {
      caseStudy: '/case-study/datewave',
    },
    status: 'Case study',
    featured: false,
  },

  // ─── Websites & e-commerce ────────────────────────────────────────────────
  {
    id: 'shyne',
    title: 'Shyne Africa',
    categoryLabel: 'Website Design / Digital Experience',
    categories: ['web'],
    tier: 'secondary',
    tagline:
      'Website design and digital presence for an infrastructure brand serving African creative academies and their students.',
    description:
      'Visual direction, information architecture and responsive website design for Shyne Africa — a platform built for creative institutions and learners across Africa.',
    role: 'Website design  /  Visual design  /  Information architecture',
    stack: ['Web Design', 'Visual Design', 'Responsive Web'],
    tags: ['Web', 'Brand', 'Africa'],
    image: '/images/Shyne.png',
    links: {
      live: 'https://shyne.africa',
    },
    status: 'Live',
    featured: false,
  },
  {
    id: 'velvet-vine',
    title: 'Velvet Vine Bakery',
    categoryLabel: 'Website Design / Shopify',
    categories: ['web'],
    tier: 'secondary',
    tagline:
      'A boutique bakery website with a custom cake builder, local delivery scheduling and visual brand storytelling.',
    description:
      'A storefront designed around product discovery, celebration occasions and a warm brand voice.',
    role: 'Website design  /  Shopify',
    stack: ['Shopify', 'Web Design'],
    tags: ['Ecommerce', 'Shopify', 'Web'],
    image: '/images/velvet vine bakery.png',
    links: {},
    status: 'Case study',
    featured: true,
  },
  {
    id: 'maxmall',
    title: 'MaxMall',
    categoryLabel: 'Ecommerce / Product Management',
    categories: ['web'],
    tier: 'secondary',
    tagline:
      'An ecommerce website delivered as full-time designer and product manager.',
    description:
      'Design and product management across catalogue, discovery and storefront experiences.',
    role: 'Designer & Product Manager',
    stack: ['Ecommerce', 'Product Management'],
    tags: ['Ecommerce', 'Web', 'Product'],
    image: '/images/Maxmall Hero.png',
    fallback: '/images/Maxmall 1.png',
    links: {
      live: 'https://maxmall.ng',
    },
    status: 'Live',
    featured: true,
  },
  {
    id: 'hub360',
    title: 'Hub360',
    categoryLabel: 'Ecommerce Website',
    categories: ['web'],
    tier: 'secondary',
    tagline:
      'A multi-vendor Shopify storefront built for rapid search, bulk ordering and clear catalogue navigation.',
    description:
      'Ecommerce UX and responsive web design for a high-volume product catalogue.',
    role: 'Ecommerce UX  /  Responsive Web',
    stack: ['Shopify', 'Ecommerce', 'Web'],
    tags: ['Ecommerce', 'Shopify', 'Web'],
    image: '/images/Hub360 4.png',
    fallback: '/images/Hub360 2.png',
    links: {
      live: 'https://hub360.cc/',
    },
    status: 'Live',
    featured: false,
  },
];

export const flagshipProjects = projects.filter((project) => project.tier === 'flagship');

export const secondaryProjects = projects.filter((project) => project.tier !== 'flagship');

export const workFilters = [
  { id: 'all', label: 'All work' },
  { id: 'ai-product', label: 'AI Products' },
  { id: 'ai-experiment', label: 'AI Experiments' },
  { id: 'product-design', label: 'Product Design' },
  { id: 'web', label: 'Websites & E-commerce' },
];

export function getProjectLink(project) {
  if (!project?.links) return null;
  const { caseStudy, live, lab, external, github } = project.links;
  if (caseStudy) return { href: caseStudy, internal: true, label: 'Case study' };
  if (lab) return { href: lab, internal: true, label: 'Lab notes' };
  if (live) return { href: live, internal: false, label: 'View live' };
  if (external) return { href: external, internal: false, label: 'View project' };
  if (github) return { href: github, internal: false, label: 'GitHub' };
  return null;
}
