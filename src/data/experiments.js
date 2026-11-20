export const experiments = [
  {
    id: "applyflow",
    slug: "applyflow",
    featured: true,
    title: "ApplyFlow",
    platform: "AI Product / React + Supabase",
    liveUrl: "https://applyflow-hazel.vercel.app",
    description: "An AI-assisted job application workspace that brings discovery, ranking, document parsing and pipeline tracking into one dashboard. Built end-to-end with React, Supabase, Gemini and Tavily.",
    focus: ["AI Discovery", "Job Pipeline", "Document Parsing"],
    heroImage: "/images/Applyflow Dashboard.png",
    heroVideo: "/images/Applyflowvideo.mp4",
    gallery: [
      "/images/Applyflow Dashboard.png",
      "/images/Applyflow AI Research.png",
      "/images/Applyflow Job Screen.png"
    ],
    story: "I built ApplyFlow to solve a real workflow problem. Job opportunities were scattered across spreadsheets, tabs, bookmarks and notes. I wanted to build a product that combined discovery, evaluation and tracking into a single workspace — without handing anything off to another tool.",
    labNotes: [
      {
        title: "What sparked the idea?",
        content: "Most job search tools solve one part of the process. Job boards handle discovery but not follow-up. Spreadsheets handle tracking but not research. The result is a fragmented workflow where people lose track of roles they've already considered and miss follow-ups."
      },
      {
        title: "What was I testing?",
        content: "Whether a single-workspace product could replace the spreadsheet, tabs and notes combination most job seekers rely on, and whether AI-assisted ranking could meaningfully reduce the time spent evaluating each opportunity."
      },
      {
        title: "What I built",
        content: "ApplyFlow uses React and Vite on the front end, Supabase for authentication and cloud data, an Express API for model calls, Gemini for extraction and ranking, and Tavily for web search. Search filters become targeted Tavily queries. Gemini ranks the results and returns structured opportunities."
      },
      {
        title: "What worked",
        content: "Using a Zod output schema for Gemini responses made the product reliable — the same structured opportunity record appears every time, regardless of input format. Document parsing let users import job details without manual data entry."
      },
      {
        title: "What broke",
        content: "Early ranking results were inconsistent when job descriptions were sparse or unusual. The fix was giving Gemini explicit ranking criteria and requiring it to reference specific job attributes rather than general suitability."
      },
      {
        title: "What I learned",
        content: "Designing the AI output schema is the same work as designing the data model. Getting the shape right upstream meant every downstream component — the pipeline dashboard, the spreadsheet, the detail panel — could trust the data."
      },
      {
        title: "If I continue this project",
        content: "I would add email integration for automatic follow-up reminders, employer research powered by web search, and a cover letter draft generated from the ranked opportunity's key requirements."
      }
    ]
  },
  {
    id: "nuvotrain",
    slug: "nuvotrain",
    featured: true,
    title: "Nuvotrain",
    platform: "AI Infrastructure / Full-Stack",
    liveUrl: "https://nuvotrain.vercel.app",
    description: "An evaluation workspace for AI-generated output. Evaluators score quality and aesthetics across six AI responses per task. Admins manage invitations, task deadlines, rework and audit history.",
    focus: ["AI Evaluation", "Task Workflow", "Access Control"],
    heroImage: "/images/nuvotrain/workspace.png",
    heroVideo: null,
    gallery: [
      "/images/nuvotrain/workspace.png",
      "/images/nuvotrain/task-list.png",
      "/images/nuvotrain/admin-task.png",
      "/images/nuvotrain/golden-examples.png"
    ],
    story: "I built Nuvotrain to solve a problem I observed in AI evaluation workflows: most tooling focuses on data collection rather than the evaluator experience. The product is built around two distinct user roles — evaluators and administrators — with separate interfaces and controlled access.",
    labNotes: [
      {
        title: "What sparked the idea?",
        content: "AI training pipelines need high-quality labelled data, and that quality depends on consistent, structured evaluator workflows. Most existing tools are form-heavy and don't distinguish between contributor and admin roles in any meaningful way."
      },
      {
        title: "What was I testing?",
        content: "Whether a role-based evaluation workspace could reduce scoring inconsistency by giving evaluators structured criteria and golden examples, while giving administrators full visibility and control over task state."
      },
      {
        title: "What I built",
        content: "Nuvotrain uses TypeScript on the front end with Supabase for authentication, cloud storage and a PostgreSQL database with Row Level Security. The RLS policies enforce the evaluator and admin role boundaries at the database level, not just the UI."
      },
      {
        title: "What worked",
        content: "Enforcing role boundaries at the database layer with RLS meant the admin and evaluator interfaces could be developed and tested independently without risk of data leakage between roles. Golden examples significantly improved scoring consistency."
      },
      {
        title: "What broke",
        content: "The initial invitation system required manual admin intervention for every new evaluator. Building a tokenised beta access flow reduced that friction and allowed the invitation-only beta to open without requiring individual admin approval."
      },
      {
        title: "What I learned",
        content: "Designing the database schema and the RLS policies is the same work as designing the product's permission model. The UI cannot fix a schema that doesn't match the product's access rules — the two have to be designed together."
      },
      {
        title: "If I continue this project",
        content: "I would add analytics on evaluator scoring patterns, automated rework flagging when scores fall below quality thresholds, and an API layer so external training pipelines can pull evaluated datasets directly."
      }
    ]
  },
  {
    id: "adsight",
    slug: "adsight",
    featured: true,
    title: "AdSight",
    platform: "Generative AI / Ad Review",
    liveUrl: "https://adsight-murex.vercel.app/",
    description: "Upload a flyer, poster or social creative and receive a structured seven-part AI review — ad type, industry, message, audience, strengths and areas to improve. No prompt writing required.",
    focus: ["Creative Review", "AI Vision", "Prompt Engineering"],
    heroImage: "/images/Adsight 1.png",
    heroVideo: "/images/Adsight Video.mp4",
    gallery: [
      "/images/Adsight 1.png",
      "/images/Adsight 2.png"
    ],
    story: "I built AdSight to give business owners a fast, structured second opinion on their advertising creatives. The goal was to treat the ad review as a product workflow — one input, one well-designed prompt, one consistent output — rather than an open-ended chat session.",
    labNotes: [
      {
        title: "What sparked the idea?",
        content: "Most business owners can publish a flyer or social ad without getting a clear answer to basic questions: what is this communicating, who is it for, and would anyone act on it? Agency review is slow and expensive. A chat model can help, but only if you know how to prompt it."
      },
      {
        title: "What was I testing?",
        content: "Whether a single-call generative AI product could replace the blank prompt. The user supplies one input — the creative — and the product owns the review structure entirely."
      },
      {
        title: "What I built",
        content: "AdSight uses Next.js, Genkit and Gemini 2.5 Flash. The uploaded image is passed as a base64 data URI to a Genkit flow with a Zod output schema that enforces seven required fields. The same structured report appears every time."
      },
      {
        title: "What worked",
        content: "The constrained output schema made the product reliable. Using a specific vocabulary rule in the prompt — no jargon like 'value proposition' or 'conversion' — kept the feedback readable for a non-marketer."
      },
      {
        title: "What broke",
        content: "Early versions produced generic feedback that could have applied to any ad. The fix was requiring the model to reference the specific creative rather than producing a template response."
      },
      {
        title: "What I learned",
        content: "Prompt design is product design. The tone, vocabulary and length rules in the prompt are as important as the layout and copy in the interface. Schemas turn a model into a component the UI can depend on."
      },
      {
        title: "If I continue this project",
        content: "I would add saved report history, batch review for multiple creatives, and a comparison view to track how a creative has improved across iterations."
      }
    ]
  },
  {
    id: "rivalens",
    slug: "rivalens",
    featured: true,
    title: "Rivalens",
    platform: "AI Vision Tool",
    liveUrl: "https://rivalens-xi.vercel.app/",
    description: "An AI-powered competitive intelligence workspace that helps founders and product teams understand competitors, market positioning, and strategic opportunities.",
    focus: ["Proactive Intelligence", "Competitor Activity", "Strategic Forecasting"],
    heroImage: "/images/Rivalens 1.png",
    heroVideo: "/images/Rivalens Video.mp4",
    gallery: [
      "/images/Rivalens 1.png",
      "/images/Rivalens 2.png"
    ],
    story: "Rivalens was built to test whether competitive intelligence could become proactive rather than reactive. It replaces static, manual research reports with continuous AI monitoring, delivering decision-ready market intelligence.",
    labNotes: [
      {
        title: "What sparked the idea?",
        content: "I wanted to explore whether competitive intelligence could become proactive rather than reactive. Most competitor research tools require users to perform manual searches every time they need information."
      },
      {
        title: "What was I testing?",
        content: "I wanted to test whether AI could continuously monitor competitors and provide decision-ready intelligence instead of static reports."
      },
      {
        title: "What I built",
        content: "I designed Rivalens as an AI-powered competitive intelligence workspace that helps founders, product teams, and marketers understand market positioning, competitor activity, and strategic opportunities."
      },
      {
        title: "What worked",
        content: "The concept of AI-generated competitive summaries dramatically reduced research friction. Users could understand market movements much faster than traditional research workflows."
      },
      {
        title: "What broke",
        content: "Some early versions focused too heavily on data collection and not enough on decision-making. The product became more useful once insights were prioritized over raw information."
      },
      {
        title: "What I learned",
        content: "Users rarely need more information. They need confidence in what action to take next. Clarity consistently outperformed complexity."
      },
      {
        title: "If I continue this project",
        content: "I would add live competitor monitoring, market change alerts, positioning recommendations, and AI-generated strategic reports tailored to specific business goals."
      }
    ]
  },
  {
    id: 1,
    slug: "where-do-you-stand",
    title: "Where Do You Stand",
    platform: "Figma Make",
    liveUrl: "https://slate-meta-15875939.figma.site/",
    description: "I explored a spectrum-based interactive interface experiment focusing on nuance instead of binary choices.",
    focus: ["Interaction Design", "Emotional Interfaces", "Ambiguity", "Interface Transformation"],
    heroImage: "/images/AI playground/Where do you stand.png",
    heroVideo: null,
    gallery: [
      "/images/AI playground/Where do you stand.png"
    ],
    story: "I designed the interface to transform in real time while dragging. This represents an experimental interaction piece, avoiding the standard binary options I often encounter.",
    whyIBuiltThis: [
      "I kept thinking about how most digital experiences force people into hard yes/no decisions, even when real opinions are usually more complicated than that.",
      "A lot of conversations, beliefs, and emotions exist somewhere in the middle, but interfaces rarely acknowledge nuance. Everything becomes binary: agree/disagree, left/right, true/false.",
      "I wanted to explore what an interface would feel like if it treated opinions as fluid instead of fixed.",
      "The project became less about the final answer and more about the movement between positions. That’s why the interface transforms continuously while dragging instead of waiting for a final selection.",
      "This was really an experiment around ambiguity, emotional interaction, and how motion itself can communicate meaning."
    ]
  },
  {
    id: 2,
    slug: "shyne-virtual-try-on",
    title: "Shyne Virtual Try-On Tool",
    platform: "Lovable",
    liveUrl: "https://id-preview--cace28af-9797-47a1-91d7-09dcd375cb1b.lovable.app/",
    description: "I built an AI-powered virtual fashion try-on studio where users upload garments and generate realistic model previews.",
    focus: ["AI Commerce", "Accessibility", "Reducing Costs", "Rapid Experimentation"],
    heroImage: "/images/AI playground/Virtual try-on.png",
    heroVideo: null,
    gallery: [
      "/images/AI playground/Virtual try-on.png"
    ],
    story: "I designed this to lower the barrier to entry for fashion creators, enabling rapid experimentation and reducing expensive production costs.",
    whyIBuiltThis: [
      "I’ve seen how difficult and expensive product photography can be for smaller fashion brands, tailors, and independent creators.",
      "A lot of talented people have good products but struggle to present them professionally because photoshoots require models, studios, lighting, editing, coordination, and money.",
      "I wanted to explore whether AI could reduce that barrier and make fashion presentation more accessible.",
      "Instead of replacing creativity, the idea was to speed up repetitive production work and help smaller creators visualize garments faster without needing a full production setup every time.",
      "The project became an experiment in AI-assisted commerce, accessibility, and rapid visual generation."
    ]
  },
  {
    id: 3,
    slug: "unsent",
    title: "Unsent",
    platform: "AI-Assisted Build",
    liveUrl: "https://unsent.app",
    description: "I created an emotional journaling concept inspired by grief, memory, and unsent messages.",
    focus: ["Emotional Product Design", "Minimalism", "Safe Interaction", "Storytelling"],
    heroImage: "/images/AI playground/Unsent.png",
    heroVideo: null,
    gallery: [
      "/images/AI playground/Unsent.png"
    ],
    story: "I created a quiet space for writing messages that never get sent. This project focuses on feeling intimate, safe, and human.",
    whyIBuiltThis: [
      "This project came from a very personal place.",
      "I’ve lost people in my life and there were moments where I still wanted to say something to them even though I couldn’t anymore.",
      "Sometimes closure isn’t really about sending the message. Sometimes it’s just about finally writing the words down.",
      "When I discovered AI-assisted creation tools, I felt this was the perfect opportunity to quickly build a quiet space centered around those emotions.",
      "I intentionally kept the experience minimal and distraction-free because I wanted it to feel private, safe, and emotionally calm rather than social or performative.",
      "More than anything, this project was about emotional release and creating space for unsaid thoughts."
    ]
  },
  {
    id: 4,
    slug: "snapdish",
    title: "Snapdish",
    platform: "Figma + AI Build",
    liveUrl: "https://www.anything.com/mobile-preview/c4877816-47cc-4d95-86eb-29040130c9f7",
    description: "I designed a visual recipe-generation app where users scan food and instantly receive recipes, ingredients, and cooking steps.",
    focus: ["Visual-first Interaction", "AI-assisted Cooking", "Simplicity", "Fast Prototyping"],
    heroImage: "/images/AI playground/Snapdish.png",
    heroVideo: null,
    gallery: [
      "/images/AI playground/Snapdish.png"
    ],
    story: "I focused on rapid AI capability to transform a simple visual input into a structured, step-by-step cooking guide.",
    whyIBuiltThis: [
      "The idea started from something very simple: sometimes you see a meal that looks amazing and immediately wish you could recreate it without spending time searching through endless recipes online.",
      "I wanted to explore a more visual and frictionless approach to recipe discovery where users could simply scan a meal and instantly understand how to make it.",
      "The project was also an experiment around how AI can reduce effort in everyday tasks. Instead of typing ingredients manually or filtering through recipe blogs, the interaction becomes immediate and image-driven.",
      "I focused on making the experience feel lightweight, intuitive, and fast because cooking inspiration usually happens in the moment."
    ]
  }
];
