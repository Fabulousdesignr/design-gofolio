// Website showcase gallery. Each entry is one project; duplicate screenshots of the
// same project live together under `images`. To add a screenshot, drop the file in
// public/images/Websites/ and add an entry (or an extra image) here.
//
// Not included on purpose: 1.png (Shyne profile dashboard, an app interface)
// and 8.png (OBS Studio, desktop software, not a website).
const BASE = '/images/Websites';

const project = (data) => ({ ...data, imageCount: data.images.length });

export const websiteProjects = [
  project({
    id: 'fitfusion',
    name: 'FitFusion',
    category: 'Fitness · Business Website',
    type: 'Business Websites',
    description: 'Fitness coaching website with trainer booking, shown in dark and light presentations.',
    featured: true,
    images: [
      { src: `${BASE}/2.png`, alt: 'FitFusion fitness website homepage, dark presentation' },
      { src: `${BASE}/5.png`, alt: 'FitFusion fitness website homepage, light presentation' },
    ],
  }),
  project({
    id: 'ajebo-market',
    name: 'Ajebo Market',
    category: 'Fashion · E-commerce',
    type: 'E-commerce',
    description: 'Online clothing store homepage with a product carousel and a clear shopping call to action.',
    images: [{ src: `${BASE}/3.png`, alt: 'Ajebo Market e-commerce website homepage' }],
  }),
  project({
    id: 'iqualex',
    name: 'iQualex',
    category: 'Fintech Website',
    type: 'Fintech',
    description: 'Financial services website covering loan access, financial literacy and payments.',
    images: [{ src: `${BASE}/10.png`, alt: 'iQualex fintech website homepage' }],
  }),
  project({
    id: 'sportsphere',
    name: 'Sportsphere',
    category: 'Sports Media · Content Website',
    type: 'Content & Media',
    description: 'Football news website with a bold editorial layout and live scores navigation.',
    images: [{ src: `${BASE}/6.png`, alt: 'Sportsphere sports media website homepage' }],
  }),
  project({
    id: 'retro-threads',
    name: 'Retro Threads Co.',
    category: 'Vintage Fashion · E-commerce',
    type: 'E-commerce',
    description: 'Vintage clothing store homepage with product and category shortcuts.',
    images: [{ src: `${BASE}/9.png`, alt: 'Retro Threads Co. vintage clothing e-commerce website homepage' }],
  }),
  project({
    id: 'mystique',
    name: 'Mystique',
    category: 'Fashion · Marketing Website',
    type: 'Marketing Websites',
    description: 'Fashion brand homepage built around oversized typography and a single striking image.',
    images: [{ src: `${BASE}/7.png`, alt: 'Mystique fashion website homepage' }],
  }),
  project({
    id: 'fitnessup',
    name: 'FitnessUp',
    category: 'Fitness · Landing Page',
    type: 'Landing Pages',
    description: 'Landing page for a free 5-day fitness challenge, built around email sign-up.',
    images: [{ src: `${BASE}/4.png`, alt: 'FitnessUp 5-day fitness challenge landing page' }],
  }),
];

// Only website types that are backed by an actual screenshot above.
export const websiteTypes = [...new Set(websiteProjects.map((p) => p.type))];

export const websiteScreenshotCount = websiteProjects.reduce((n, p) => n + p.imageCount, 0);
