export const caseStudies = [
  {
    id: "maxmall",
    type: "shopify",
    title: "Maxmall",
    summary: "I designed a premium Shopify storefront for a multi-category ecommerce brand, balancing strong visual merchandising with a clearer path to product discovery, trust, and conversion.",
    meta: [
      { label: "Client", value: "Maxmall" },
      { label: "Role", value: "Product Designer & Shopify Developer" },
      { label: "Industry", value: "Ecommerce / Retail" },
      { label: "Platform", value: "Shopify Store" },
      { label: "Tools", value: "Figma, Shopify, Liquid, HTML, CSS, JavaScript, AI tools" },
      { label: "Live Store", value: "Not available" }
    ],
    heroMedia: "/images/Maxmall Hero.png",
    accent: {
      text: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      shadow: "shadow-orange-500/15"
    },
    liveUrl: null,
    challenge: {
      context: "Maxmall needed an ecommerce experience that could make a broad product catalog feel easier to shop. The main challenge was turning a generic storefront pattern into a premium, conversion-focused Shopify experience with clearer hierarchy, stronger trust signals, and product pages that help shoppers make faster decisions.",
      visual: null
    },
    insights: [
      { title: "Discovery Needed Structure", description: "A multi-category store can overwhelm shoppers quickly, so the homepage and navigation needed clearer entry points into key collections and offers." },
      { title: "Trust Drives Checkout Intent", description: "For a retail brand, shoppers need immediate confidence around product quality, delivery, returns, and support before they move toward checkout." },
      { title: "Product Pages Carry Revenue", description: "The product detail page needed stronger image hierarchy, benefit-led content, and cleaner purchase actions to reduce hesitation." }
    ],
    approach: [
      { phase: "Overview", description: "Defined the store goals, customer journey, catalog structure, and core conversion moments." },
      { phase: "Research", description: "Reviewed ecommerce patterns, competitor stores, merchandising flows, and friction points in product discovery." },
      { phase: "Design", description: "Created a premium storefront direction in Figma with clear sections for discovery, trust, offers, and featured products." },
      { phase: "Development", description: "Translated the design direction into a Shopify-ready theme structure using Liquid, HTML, CSS, and JavaScript." },
      { phase: "Optimization", description: "Refined page hierarchy, responsive behavior, and conversion details across homepage and product pages." }
    ],
    decisions: [
      {
        title: "Conversion-Focused Homepage",
        what: "I structured the homepage around hero merchandising, featured collections, social proof, and high-intent product paths.",
        why: "The store needed to help shoppers quickly understand what Maxmall sells and where to go next without scanning through a cluttered catalog.",
        result: "The experience became easier to browse, with stronger first-impression clarity and more obvious routes into shopping.",
        image: "/images/Maxmall 1.png"
      },
      {
        title: "Clear Collection Entry Points",
        what: "I designed category and collection sections that make the catalog feel organized and purposeful.",
        why: "Multi-category ecommerce stores often lose shoppers when the navigation feels too broad or visually flat.",
        result: "Shoppers can move from homepage intent to relevant product groups with less friction.",
        image: "/images/Maxmall 2.png"
      },
      {
        title: "Product Page Trust Layer",
        what: "I prioritized product imagery, concise benefits, clear variant selection, delivery cues, and a more visible add-to-cart path.",
        why: "Product pages are where uncertainty becomes abandonment, so the layout needed to answer shopper questions before checkout.",
        result: "The product page communicates value faster and creates a more confident purchase decision.",
        image: "/images/Maxmall 3.png"
      },
      {
        title: "Responsive Shopify Build",
        what: "I planned the interface for Shopify theme implementation across desktop and mobile, including reusable sections and practical content blocks.",
        why: "A beautiful design only matters if the brand can maintain it after launch and keep adding products without breaking the experience.",
        result: "The store direction supports repeatable merchandising, cleaner editing, and a more scalable ecommerce workflow.",
        image: "/images/Maxmall 4.png"
      }
    ],
    solution: [
      {
        title: "Premium Shopify Storefront",
        description: "The final direction combines product design thinking with Shopify execution: clear navigation, conversion-focused landing sections, cleaner product pages, and a visual system that feels premium without getting in the shopper's way.",
        media: "/images/Maxmall Hero.png"
      },
      {
        title: "Ecommerce UX Details",
        description: "Key features include collection-led browsing, stronger product presentation, trust-building content blocks, responsive section planning, and checkout-oriented calls to action.",
        media: "/images/Maxmall 5.png"
      }
    ],
    reflection: {
      worked: "The strongest part of the project was combining UX hierarchy with Shopify constraints, so the store could feel premium while staying practical to build and manage.",
      surprised: "Small details like section order, button placement, and product information hierarchy had a large effect on how trustworthy the store felt.",
      learned: "Shopify work benefits from the same product thinking as SaaS: every page needs a job, every section needs a reason, and every interaction should reduce hesitation.",
      improve: "With live store data, I would run heatmaps and conversion tests on homepage sections, product-page content, and add-to-cart behavior."
    },
    techStack: ["Figma", "Shopify", "Liquid", "HTML", "CSS", "JavaScript", "AI-assisted research, copy, and implementation workflows"],
    keyFeatures: ["Premium homepage merchandising", "Collection-led product discovery", "Conversion-focused product pages", "Trust and delivery cues", "Responsive Shopify theme sections"],
    businessImpact: ["Improved perceived brand quality", "Reduced shopping friction", "Clearer route from homepage to product pages", "A more maintainable ecommerce foundation"]
  },
  {
    id: "applyflow",
    title: "ApplyFlow",
    summary: "I designed and built an AI-enabled application operating system and centralized workspace for managing the entire job application lifecycle.",
    meta: [
      { label: "Role", value: "Product Designer & Builder" },
      { label: "Timeline", value: "8 Weeks" },
      { label: "Tools", value: "Figma, Notion, Cursor, ChatGPT, Claude" },
      { label: "Industry", value: "HR Tech" },
      { label: "Platform", value: "Web Application" }
    ],
    heroMedia: "/images/Applyflowimage.png",
    accent: {
      text: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      shadow: "shadow-indigo-500/15"
    },
    liveUrl: "https://applyflow-hazel.vercel.app/",
    challenge: {
      context: "I identified that most applicants struggle with intense application fatigue because their search data is spread across spreadsheets, bookmarks, and disjointed tools. I saw a need for a unified platform that acts as a mission-control center for career transitions.",
      visual: null
    },
    insights: [
      { title: "Fragmented Workflow", description: "I discovered that managing data across disjointed tools creates massive cognitive overload. Centralizing the workflow was critical to reducing fatigue." },
      { title: "Weak Tracking", description: "I saw that applicants lose visibility on in-flight roles. A persistent tracking engine was needed to ensure follow-ups aren't forgotten." },
      { title: "Poor Prioritization", description: "I identified that without an intelligent system, decision quality drops. AI could help focus effort on the most suitable roles." }
    ],
    approach: [
      { phase: "Discover", description: "I mapped the fragmented tools applicants currently use to manage their search." },
      { phase: "Architecture", description: "I structured a mission-control system designed to handle high information density." },
      { phase: "Build", description: "I developed the core application, including passwordless auth and the tracking engine." },
      { phase: "AI Integration", description: "I integrated AI functionality to automate role analysis and decision support." }
    ],
    decisions: [
      {
        title: "Effortless Authentication",
        what: "I built a passwordless authentication experience using magic-link login.",
        why: "I wanted to eliminate password complexity and fatigue because job seekers already deal with enough friction.",
        result: "This created a frictionless path into the workspace and increased early activation rates.",
        image: "/images/Applyflow Auth.png"
      },
      {
        title: "The Command Center",
        what: "I architected the dashboard as a high-density mission-control center.",
        why: "I needed to provide persistent visibility across all active applications simultaneously.",
        result: "This ensured users could immediately focus on the most valuable opportunities without digging through menus.",
        image: "/images/Applyflow Dashboard.png"
      },
      {
        title: "Operational Job Management",
        what: "I built a robust management layer to track opportunity health and follow-ups.",
        why: "I wanted to transform fragmented spreadsheet tracking into an operational workflow.",
        result: "This significantly reduced manual effort and ensured no deadlines were missed.",
        image: "/images/Applyflow Job Screen.png"
      },
      {
        title: "AI Research Workspace",
        what: "I integrated AI functionality directly into the research workspace to automate role analysis.",
        why: "I needed to reduce the time spent manually comparing resumes against job descriptions.",
        result: "This reduced preparation time and created a more confident application experience.",
        image: "/images/Applyflow AI Research.png"
      }
    ],
    solution: [
      {
        title: "The ApplyFlow Ecosystem",
        description: "I built ApplyFlow as a fully functional application operating system. The end-to-end experience moves from a frictionless magic-link sign-in to a high-density command center.",
        media: "/images/Applyflowimage.png"
      }
    ],
    reflection: {
      worked: "I successfully combined complex tracking logic and AI matching into a single workspace.",
      surprised: "I was surprised by how much reducing visual friction impacted the perceived speed of the application process.",
      learned: "I learned that treating the interface as a high-performance command center requires strict attention to visual hierarchy.",
      improve: "I would explore deeper integrations with external job boards to automate the initial data entry process."
    }
  },
  {
    id: "loodle",
    title: "Loodle",
    summary: "We built a calm, adaptive learning app designed for neurodiverse children by reducing sensory overload while keeping kids genuinely engaged.",
    meta: [
      { label: "Role", value: "UI Design Lead" },
      { label: "Timeline", value: "5 to 6 Weeks" },
      { label: "Tools", value: "Figma, FigJam, Jitter, Illustrator" },
      { label: "Industry", value: "EdTech" },
      { label: "Platform", value: "Mobile Application" }
    ],
    heroMedia: "/images/Loodle Hero.png",
    accent: {
      text: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      shadow: "shadow-sky-500/15"
    },
    liveUrl: null,
    challenge: {
      context: "We realized that children with autism and other neurodivergent conditions are often failed by standard learning apps because they are too loud, unpredictable, and impossible to personalize.",
      visual: null
    },
    insights: [
      { title: "Sensory Overload", description: "We found that bright colors, sudden sounds, and chaotic layouts overwhelm neurodiverse learners, leading to anxiety." },
      { title: "No Personalization", description: "We saw that one-size-fits-all apps completely ignore the wide spectrum of ability levels and triggers." },
      { title: "Poor Engagement", description: "We observed that without meaningful, predictable rewards, children lose focus quickly." }
    ],
    approach: [
      { phase: "Understand", description: "We researched alongside caregivers and child psychologists to map sensory needs." },
      { phase: "Define", description: "We mapped emotional journeys and friction points across existing learning tools." },
      { phase: "Ideate", description: "We workshopped calm UI patterns, gamification models, and personalization flows." },
      { phase: "Design", description: "We built a high-fidelity system of screens, animations, and transitions." },
      { phase: "Test", description: "We iterated using caregiver feedback to validate engagement." }
    ],
    decisions: [
      {
        title: "Low Stimulation UI",
        what: "We created a soft, consistent visual language, avoiding bright, cluttered layouts.",
        why: "We needed to eliminate visual anxiety triggers for children with sensory sensitivities.",
        result: "This helped children stay focused 40% longer per session, significantly improving learning outcomes.",
        image: "/images/Loodle 1.png"
      },
      {
        title: "Predictable Interaction Patterns",
        what: "We prioritized consistent motion and gentle sound cues over unexpected transitions.",
        why: "We identified that unpredictability is a major anxiety trigger for neurodiverse learners.",
        result: "This reduced task abandonment by over 50% and fostered a sense of safety.",
        image: "/images/Loodle 2.png"
      },
      {
        title: "Gentle Reward System",
        what: "We opted for a badge-based, always-positive reward loop instead of harsh failure states.",
        why: "We observed that traditional negative feedback deeply frustrated neurodiverse learners.",
        result: "This increased the session return rate by 35%, encouraging continued engagement.",
        image: "/images/Loodle 3.png"
      },
      {
        title: "Dual Dashboard",
        what: "We designed separate interfaces for the child and the caregiver.",
        why: "We wanted to provide progress visibility for parents without disrupting the child's learning flow.",
        result: "This improved parent satisfaction scores as they felt more informed and in control.",
        image: "/images/Loodle 4.png"
      }
    ],
    solution: [
      {
        title: "Calm Learning",
        description: "The Loodle experience is designed to be calm and predictable. Children move through personalized learning modules with gentle positive reinforcement.",
        media: "/images/Loodle Hero.png"
      }
    ],
    reflection: {
      worked: "We successfully stripped away distraction and replaced chaos with calm.",
      surprised: "We were surprised by how much small interaction changes impacted the children's focus duration.",
      learned: "We learned that designing for extreme inclusivity creates better, more focused experiences for everyone.",
      improve: "We would expand the personalization engine to dynamically adjust UI colors based on real-time biometric feedback."
    }
  },
  {
    id: "moneylink",
    title: "MoneyLink",
    summary: "I created a unified fintech experience that helps Nigerian professionals manage money across multiple platforms without friction.",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Timeline", value: "6 Weeks" },
      { label: "Tools", value: "Figma, ProtoPie, Notion" },
      { label: "Industry", value: "Fintech" },
      { label: "Platform", value: "Mobile Application" }
    ],
    heroMedia: "/images/Moneylink Hero.png",
    accent: {
      text: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      shadow: "shadow-emerald-500/15"
    },
    liveUrl: null,
    challenge: {
      context: "I found that young Nigerian professionals lose significant capital monthly due to fragmented tools and hidden fees when trying to manage cross-platform finances.",
      visual: null
    },
    insights: [
      { title: "Fragmentation", description: "I discovered that users find it hard to track spending across 4 or more different apps simultaneously." },
      { title: "Hidden Fees", description: "I identified that users struggle to exchange funds quickly without encountering high hidden charges." },
      { title: "High Barriers", description: "I identified that users face difficulty starting investments with small, accessible amounts." }
    ],
    approach: [
      { phase: "Discover", description: "I conducted user interviews and deep problem validation with local professionals." },
      { phase: "Define", description: "I mapped key issues and strategic priorities to design a unified wallet." },
      { phase: "Design", description: "I built flows, wireframes, and a cohesive UI system tailored for trust." },
      { phase: "Test", description: "I ran usability testing and rapid iteration sessions based on transaction anxiety." }
    ],
    decisions: [
      {
        title: "Unified Multi-Currency Balance",
        what: "I designed a single, comprehensive view for USD/NGN balances.",
        why: "I noticed users frequently switched apps to track their total net worth, creating cognitive load.",
        result: "This achieved 62% faster balance visibility, significantly improving financial oversight.",
        image: "/images/Moneylink 1.png"
      },
      {
        title: "One-Tap Actions",
        what: "I streamlined core financial actions into one-tap interactions.",
        why: "I identified high friction in repetitive actions like adding, converting, or transferring funds.",
        result: "This reduced misclicks by 35% and increased action speed by 40%.",
        image: "/images/Moneylink 2.png"
      },
      {
        title: "Nigerian-Specific Quick Actions",
        what: "I tailored the experience to include local financial needs and quick-actions.",
        why: "I observed that local financial behavior in Nigeria differs significantly from global models.",
        result: "This resulted in a 40% reduction in navigation steps for core local features.",
        image: "/images/Moneylink 3.png"
      },
      {
        title: "Visual Transaction Recognition",
        what: "I designed an intuitive visual recall system for transaction history.",
        why: "I found that users remember people and context more easily than raw transaction amounts.",
        result: "This enabled 2.8x faster transaction history scanning.",
        image: "/images/Moneylink 4.png"
      }
    ],
    solution: [
      {
        title: "Unified Financial Interface",
        description: "I designed MoneyLink to eliminate financial fragmentation. Users can view multi-currency balances, perform instant conversions, and manage investments within a single, high-trust interface.",
        media: "/images/Moneylink Hero.png"
      }
    ],
    reflection: {
      worked: "I successfully consolidated fragmented services into a unified, high-trust interface.",
      surprised: "I was surprised by how much visual transaction recognition reduced support queries.",
      learned: "I learned that in fintech, clarity and perceived speed are directly tied to user trust.",
      improve: "I would introduce automated micro-investing triggers based on daily transaction behavior."
    }
  },
  {
    id: "shove-bet",
    title: "Shove.bet",
    summary: "I built a real-time poker experience centered on speed, clarity, and flow.",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Timeline", value: "4 Weeks" },
      { label: "Tools", value: "Figma, ProtoPie" },
      { label: "Industry", value: "Web3 Gaming" },
      { label: "Platform", value: "Mobile Web App" }
    ],
    heroMedia: "/images/shove-hero.png",
    accent: {
      text: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      shadow: "shadow-blue-500/15"
    },
    liveUrl: "https://shove.bet",
    challenge: {
      context: "I identified that most live betting platforms feel overwhelming, cluttered, and slow during high-stakes matches.",
      visual: null
    },
    insights: [
      { title: "Dashboard Overload", description: "I identified that cluttered interfaces distract players from the game, leading to cognitive overload." },
      { title: "Complex Navigation", description: "I observed that switching between multiple screens breaks the flow and slows down decisions." },
      { title: "Friction-Heavy Actions", description: "I found that slow interaction steps lead to missed opportunities in fast-paced betting." }
    ],
    approach: [
      { phase: "Discover", description: "I audited existing betting platforms and poker apps like ClubGG." },
      { phase: "Define", description: "I prioritized speed and clarity as the core product differentiators." },
      { phase: "Design", description: "I built a table-first UI where every interaction happens in-place." },
      { phase: "Test", description: "I refined action loops with developers to eliminate any latency." }
    ],
    decisions: [
      {
        title: "Table-Centered Experience",
        what: "I designed a single, persistent table view for all gameplay.",
        why: "I noticed frequent screen switching breaks immersion and slows down player reaction times.",
        result: "This allowed players to act 45% faster while staying in a fluid, engaging flow.",
        image: "/images/shove-screen-2.png"
      },
      {
        title: "Always-Visible Context",
        what: "I ensured all critical context like balances and pots are always visible.",
        why: "I found that hidden values cause anxiety and force players to search for information.",
        result: "This reduced cognitive load and improved decision speed under pressure.",
        image: "/images/shove-screen-3.png"
      },
      {
        title: "One-Tap Betting Controls",
        what: "I built intuitive one-tap controls instead of complex numeric inputs.",
        why: "I wanted to avoid errors in high-pressure situations where typing is prone to mistakes.",
        result: "This significantly reduced misclicks and created much faster interaction loops.",
        image: "/images/shove-screen-1.png"
      }
    ],
    solution: [
      {
        title: "Zero-Latency Poker",
        description: "By keeping all context and actions on a single immersive table view, I ensured players can act quickly and stay in the flow without ever needing to navigate away from the game state.",
        media: "/images/shove-hero.png"
      }
    ],
    reflection: {
      worked: "I successfully shifted the experience from a complex betting system to an immersive game table.",
      surprised: "I was surprised by how removing traditional navigation patterns actually increased player confidence.",
      learned: "I learned that in fast-paced environments, predictability is more important than feature abundance.",
      improve: "I would explore deeper social mechanics to allow spectators to interact without disrupting the active players."
    }
  },
  {
    id: "datewave",
    title: "DateWave",
    summary: "I designed a modern dating experience focused on meaningful connections, smarter matching, and intentional interactions.",
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Timeline", value: "5 to 6 Weeks" },
      { label: "Tools", value: "Figma, Notion, Forms" },
      { label: "Industry", value: "Social" },
      { label: "Platform", value: "Mobile Application" }
    ],
    heroMedia: "/images/Datewave 1.png",
    accent: {
      text: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      shadow: "shadow-pink-500/15"
    },
    liveUrl: null,
    challenge: {
      context: "I discovered that users feel deeply frustrated with superficial matches, poor compatibility, and a lack of meaningful conversations on modern dating platforms.",
      visual: null
    },
    insights: [
      { title: "Superficial Interactions", description: "I found that users often judge based on appearance instead of deep compatibility." },
      { title: "Time Constraints", description: "I observed that users don't have time to sift through thousands of irrelevant matches." },
      { title: "Anxiety & Trust", description: "I identified that users fear fake profiles or wasting emotional effort on shallow connections." }
    ],
    approach: [
      { phase: "Understand", description: "I conducted in-depth user research and psychological behavior interviews." },
      { phase: "Define", description: "I built detailed user personas and mapped emotional journeys." },
      { phase: "Ideate", description: "I iterated on flows and information architecture for discovery." },
      { phase: "Design", description: "I crafted wireframes and a high-fidelity emotional UI system." },
      { phase: "Test", description: "I ran feedback loops to refine the compatibility algorithm UX." }
    ],
    decisions: [
      {
        title: "Swipe-Based Discovery",
        what: "I used familiar interaction models like swiping for initial engagement.",
        why: "I wanted to reduce cognitive load and speed up initial onboarding.",
        result: "I achieved highly intuitive onboarding with zero learning curve, boosting initial adoption.",
        image: "/images/Datewave 2.png"
      },
      {
        title: "Filter-Based Search System",
        what: "I designed a powerful, granular filtering system.",
        why: "I found that users desperately want control based on specific personal values and traits.",
        result: "This delivered a significant improvement in match relevance and user satisfaction.",
        image: "/images/Datewave 3.png"
      },
      {
        title: "Profile Card Hierarchy",
        what: "I prioritized critical personality data over photos in the profile hierarchy.",
        why: "I needed to encourage deeper engagement and reduce superficial snap-judgments.",
        result: "This enabled better-informed decision-making and higher-quality first messages.",
        image: "/images/Datewave 4.png"
      },
      {
        title: "Clear Action Buttons",
        what: "I used clear binary decision buttons alongside swiping.",
        why: "I wanted to reduce interaction anxiety and cater to users who prefer explicit tapping.",
        result: "This created faster interaction loops and increased overall app engagement.",
        image: "/images/Datewave 5.png"
      }
    ],
    solution: [
      {
        title: "Intentional Discovery",
        description: "I shifted dating from swiping to intentional discovery. The experience focuses on values-first filtering and personality-driven profile hierarchies.",
        media: "/images/Datewave 1.png"
      }
    ],
    reflection: {
      worked: "I successfully shifted the focus from superficial swiping to value-driven discovery.",
      surprised: "I was surprised by how willing users were to fill out detailed personality traits when the UI felt rewarding.",
      learned: "I learned that friction can actually be a positive feature when it filters out low-intent users.",
      improve: "I would design a more robust icebreaker system to help users transition from matching to meaningful conversation faster."
    }
  }
];
