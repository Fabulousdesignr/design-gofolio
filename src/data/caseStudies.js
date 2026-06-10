export const caseStudies = [
  {
    id: "applyflow",
    title: "ApplyFlow",
    liveUrl: "https://applyflow.app",
    caseStudyUrl: "/case-study/applyflow",
    summary: "I designed and built an AI-enabled application operating system and centralized workspace for managing the entire job application lifecycle.",
    tags: ["AI SaaS", "Workflow Architecture", "Productivity"],
    accent: {
      text: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      shadow: "shadow-indigo-500/15"
    },
    meta: [
      { label: "Role", value: "Product Designer & Builder" },
      { label: "Timeline", value: "8 Weeks" },
      { label: "Category", value: "AI SaaS" },
      { label: "Focus", value: "Workflow Architecture" }
    ],
    tools: ["Figma", "Notion", "Cursor", "ChatGPT", "Claude", "Antigravity"],
    heroImage: "/images/Applyflowvideo.mp4",
    fallback: "/images/Applyflowimage.png",
    overview: "I defined the product strategy, designed the user experience, and built ApplyFlow as a fully functional application operating system for job seekers. I created the application architecture and implemented the core workflows, moving the project from an initial concept to a shipped tool that centralizes the job search lifecycle. By treating the interface as a high-performance command center, I successfully combined complex tracking logic, deep company research, and AI matching into a single, high-visibility workspace.",
    problem: {
      context: "I identified that most applicants struggle with intense application fatigue because their search data is spread across spreadsheets, bookmarks, and disjointed tools. I saw a need for a unified platform that acts as a mission-control center for career transitions.",
      points: [
        { title: "Fragmented Workflow", desc: "I discovered that managing data across disjointed tools creates massive cognitive overload and workflow friction. This leads to missed opportunities and a lack of control over the application process." },
        { title: "Weak Tracking", desc: "I saw that applicants lose visibility on in-flight roles, which I solved by building a persistent tracking engine. Without a clear overview, follow-ups are forgotten and progress is unclear." },
        { title: "Poor Prioritization", desc: "I identified that without an intelligent system, decision quality drops as search fatigue increases. This results in wasted effort on less suitable roles and a slower path to employment." }
      ]
    },
    goals: [
      "Centralize workflow and reduce chaos",
      "Create high visibility across the application lifecycle",
      "Introduce intelligent prioritization via AI",
      "Improve decision quality and reduce fatigue",
      "Make job searching highly operational"
    ],
    approach: "I approached this as both a product designer and a builder. I architected a mission-control system designed to handle high information density and integrated AI as a core decision-making utility. I focused on removing technical and cognitive friction at every stage of the journey, ensuring the product moved beyond a mockup into a functional workspace that empowers users.",
    process: [
      { title: "Seamless Entry", desc: "I built a passwordless authentication system to eliminate onboarding friction and password fatigue." },
      { title: "Visibility Logic", desc: "I designed and implemented the primary dashboard to solve pipeline visibility, giving users a clear overview of their progress." },
      { title: "Workflow Architecture", desc: "I built a structured tracking system for granular opportunity management and organization." },
      { title: "AI Integration", desc: "I integrated intelligent research tools to automate role analysis and decision support." }
    ],
    decisions: [
      {
        title: "Effortless Authentication",
        desc: "I built a passwordless authentication experience using magic-link login because job seekers already deal with enough friction. I intentionally removed password complexity to increase activation rates and eliminate password fatigue, creating a frictionless path into the workspace.",
        image: "/images/Applyflow Auth.png"
      },
      {
        title: "The Command Center",
        desc: "I architected the dashboard as a mission-control center to provide persistent visibility. I implemented a high-density layout that shows immediate status for all applications, combined with AI-driven prioritization to ensure users focus on the most valuable opportunities.",
        image: "/images/Applyflow Dashboard.png"
      },
      {
        title: "Operational Job Management",
        desc: "I transformed fragmented tracking into an operational workflow by building a robust management layer. This system manages opportunity health and follow-ups, ensuring no deadline is missed while significantly reducing the manual effort usually required by spreadsheets.",
        image: "/images/Applyflow Job Screen.png"
      },
      {
        title: "AI Research Workspace",
        desc: "I integrated AI functionality directly into the research workspace to automate role analysis. I built an environment that supports comprehensive company research and role compatibility, reducing preparation time through automated preparation workflows.",
        image: "/images/Applyflow AI Research.png"
      }
    ],
    solution: {
      video: "/images/Applyflowvideo.mp4",
      fallback: "/images/Applyflowimage.png",
      overview: "I built ApplyFlow as a functional application operating system. The end-to-end experience moves from a frictionless magic-link sign-in to a high-density command center where users manage their entire application lifecycle, supported by AI-assisted research and role analysis."
    },
    impact: [
      { val: "Visibility", label: "Clearer workflow visibility" },
      { val: "Cognition", label: "Reduced cognitive overload" },
      { val: "Structure", label: "Stronger organization" },
      { val: "Priority", label: "Better prioritization" },
      { val: "Confidence", label: "Improved decision confidence" }
    ]
  },
  {
    id: "loodle",
    title: "Loodle",
    caseStudyUrl: "/case-study/loodle",
    summary: "A calm, adaptive learning app designed for neurodiverse children by reducing sensory overload while keeping kids genuinely engaged.",
    tags: ["EdTech", "Mobile", "Inclusive Design"],
    accent: {
      text: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
      shadow: "shadow-sky-500/15"
    },
    meta: [
      { label: "Role", value: "UI Design Lead" },
      { label: "Timeline", value: "5 to 6 Weeks" },
      { label: "Team Project", value: "Yes" },
      { label: "Tools", value: "Figma, FigJam, Jitter" }
    ],
    tools: ["Figma", "FigJam", "Jitter", "LottieFiles", "Illustrator"],
    heroImage: "/images/Loodle Hero.png",
    fallback: "/images/Loodle Hero.png",
    overview: "We built Loodle as a mobile learning app specifically for neurodiverse children, including those on the autism spectrum. We recognized that most educational apps overstimulate or underwhelm users, so we built Loodle around calm, adaptive learning that meets each child where they are. We designed a sensory-friendly, reward-driven experience for both kids and the caregivers who support them.",
    problem: {
      context: "Children with autism and other neurodivergent conditions are often failed by standard learning apps because they are too loud, unpredictable, and impossible to personalize.",
      points: [
        { title: "Sensory Overload", desc: "We found that bright colors, sudden sounds, and chaotic layouts overwhelm neurodiverse learners, leading to disengagement and anxiety." },
        { title: "No Personalization", desc: "We saw that one-size-fits-all apps ignore the wide spectrum of ability levels and triggers." },
        { title: "Poor Engagement", desc: "We observed that without meaningful rewards, children lose focus quickly." }
      ]
    },
    goals: [
      "Deliver personalized, calm learning experiences",
      "Minimize sensory triggers in the UI",
      "Drive engagement through rewards and gentle gamification",
      "Give parents and caregivers real visibility and control"
    ],
    approach: "We stripped away distraction and replaced chaos with calm by using soft visuals, predictable micro-interactions, and behavior-driven personalization to create a learning environment where every neurodiverse child can thrive.",
    process: [ // This process is for Loodle, not generic
      { title: "Understand", desc: "We researched alongside caregivers and child psychologists to map sensory and behavioral needs." },
      { title: "Define", desc: "We mapped emotional journeys and friction points across existing learning tools." },
      { title: "Ideate", desc: "We workshopped calm UI patterns, gamification models, and personalization flows." },
      { title: "Design", desc: "We built a high-fidelity system comprising screens, animations, icons, and transitions." },
      { title: "Test", desc: "We iterated using caregiver feedback and usability sessions to validate engagement." }
    ],
    decisions: [
      {
        title: "Low Stimulation UI",
        desc: "We avoided bright, cluttered layouts that cause anxiety in children with sensory sensitivities. By creating a soft, consistent visual language, we helped children stay focused 40% longer per session, significantly improving learning outcomes.",
        image: "/images/Loodle 1.png"
      },
      {
        title: "Predictable Interaction Patterns",
        desc: "We identified that unexpected transitions are a major anxiety trigger. We prioritized consistent motion and gentle sound cues, which reduced task abandonment by over 50% and fostered a sense of safety.",
        image: "/images/Loodle 2.png"
      },
      {
        title: "Gentle Reward System",
        desc: "We observed that harsh failure states frustrate neurodiverse learners. We opted for a badge-based, always-positive reward loop that increased the session return rate by 35%, encouraging continued engagement.",
        image: "/images/Loodle 3.png"
      },
      {
        title: "Dual Dashboard (Child + Parent)",
        desc: "We designed separate interfaces for child and caregiver to provide progress visibility without disrupting the learning experience. This improved parent satisfaction scores as they felt more informed and in control.",
        image: "/images/Loodle 4.png"
      }
    ],
    solution: {
      video: "/images/loodle-demo.mp4",
      fallback: "/images/Loodle Hero.png",
      overview: "The Loodle experience is designed to be calm and predictable. Children move through personalized learning modules with gentle positive reinforcement, while parents have a dedicated dashboard to monitor progress and manage sensory preferences without interrupting the learning flow."
    },
    impact: [
      { val: "40%", label: "Longer Focus Time" },
      { val: "35%", label: "Higher Return Rate" },
      { val: "50%+", label: "Less Abandonment" }
    ]
  },
  {
    id: "moneylink",
    title: "MoneyLink",
    caseStudyUrl: "/case-study/moneylink",
    summary: "I created a unified fintech experience that helps Nigerian professionals manage money across multiple platforms without friction.",
    tags: ["Fintech", "Mobile", "UX Strategy"],
    accent: {
      text: "text-emerald-500",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
      shadow: "shadow-emerald-500/15"
    },
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Timeline", value: "6 Weeks" },
      { label: "Tools", value: "Figma, ProtoPie, Notion" }
    ],
    tools: ["Figma", "ProtoPie", "Notion"],
    heroImage: "/images/Moneylink Hero.png",
    fallback: "/images/Moneylink Hero.png",
    overview: "I designed MoneyLink as a modern financial tool for Nigerian professionals to manage their finances across multiple platforms seamlessly. By consolidating fragmented services, I reduced transaction anxiety and hidden costs, allowing users to focus on growth rather than logistics.",
    problem: {
      context: "I found that young Nigerian professionals lose significant capital monthly due to fragmented tools and hidden fees.",
      points: [
        { title: "Fragmentation", desc: "I discovered that users find it hard to track spending across 4 or more different apps simultaneously, leading to financial blind spots." },
        { title: "Hidden Fees", desc: "I identified that users struggle to exchange funds quickly without high hidden charges, resulting in unnecessary financial losses." },
        { title: "High Barriers", desc: "I identified that users face difficulty starting investments with small, accessible amounts, limiting their financial growth opportunities." }
      ]
    },
    approach: "I consolidated key financial services into a single platform, enabling users to manage transactions, exchange currency, and access investments without switching between apps.",
    goals: [],
    process: [
      { title: "Discover", desc: "I conducted user interviews and deep problem validation with local professionals." },
      { title: "Define", desc: "I mapped key issues and strategic priorities to design a unified wallet." },
      { title: "Design", desc: "I built flows, wireframes, and a cohesive UI system tailored for trust." },
      { title: "Test", desc: "I ran usability testing and rapid iteration sessions based on transaction anxiety." }
    ],
    decisions: [
      {
        title: "Unified Multi-Currency Balance",
        desc: "I noticed users frequently switched apps to track USD/NGN balances. I designed a single, comprehensive view that achieved 62% faster balance visibility, significantly improving financial oversight.",
        image: "/images/Moneylink 1.png"
      },
      {
        title: "One-Tap Actions (Add, Convert, Transfer)",
        desc: "I identified high friction in repetitive financial actions. I streamlined these into one-tap interactions, which reduced misclicks by 35% and increased action speed by 40%.",
        image: "/images/Moneylink 2.png"
      },
      {
        title: "Nigerian-Specific Quick Actions",
        desc: "I observed that local financial behavior in Nigeria differs from global models. I tailored the experience to local needs, resulting in a 40% reduction in navigation steps for core local features.",
        image: "/images/Moneylink 3.png"
      },
      {
        title: "Visual Transaction Recognition",
        desc: "I found that users remember people and context more easily than raw amounts. I designed an intuitive visual recall system that enabled 2.8x faster transaction history scanning.",
        image: "/images/Moneylink 4.png"
      }
    ],
    solution: {
      video: "/images/moneylink-demo.mp4",
      fallback: "/images/Moneylink Hero.png",
      overview: "I designed MoneyLink to eliminate financial fragmentation. Users can view multi-currency balances, perform instant conversions, and manage investments within a single, high-trust interface that simplifies complex Nigerian financial workflows."
    },
    impact: [
      { val: "62%", label: "Faster Balance Checks" },
      { val: "40%", label: "Fewer Support Queries" },
      { val: "2.8x", label: "Faster Recall" }
    ]
  },
  {
    id: "shove-bet",
    title: "Shove.bet",
    liveUrl: "https://shove.bet", // Assuming this is a valid external live URL
    caseStudyUrl: "/case-study/shove-bet",
    summary: "I built a real-time poker experience centered on speed, clarity, and flow.",
    tags: ["Mobile", "Web app", "Sports", "Gaming"],
    accent: {
      text: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
      shadow: "shadow-blue-500/15"
    },
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Timeline", value: "4 Weeks" },
      { label: "Tools", value: "Figma, ProtoPie" }
    ],
    tools: ["Figma", "ProtoPie"],
    heroImage: "/images/shove-hero.png",
    fallback: "/images/shove-hero.png",
    overview: "I designed Shove.bet as a real-time poker experience built around speed, clarity, and flow. Inspired by platforms like ClubGG, I brought players into a live table environment where everything happens in one place. Instead of navigating complex betting systems, I ensured users can focus on the game, make quick decisions, and stay fully engaged.",
    problem: {
      context: "Most betting platforms feel overwhelming and slow during live matches.",
      points: [
        { title: "Dashboard Overload", desc: "I identified that cluttered interfaces distract players from the game, leading to cognitive overload and frustration." },
        { title: "Complex Navigation", desc: "I observed that switching between multiple screens breaks the flow and slows down decisions, hindering the immersive experience." },
        { title: "Friction-Heavy Actions", desc: "I found that slow interaction steps lead to missed opportunities in fast-paced betting, impacting user performance and enjoyment." }
      ]
    },
    approach: "I shifted the experience from a complex betting system to an immersive game table, placing all critical actions within a single, focused environment.",
    goals: [],
    process: [
      { title: "Discover", desc: "I audited existing betting platforms and poker apps like ClubGG." },
      { title: "Define", desc: "I prioritized speed and clarity as the core product differentiators." },
      { title: "Design", desc: "I built a table-first UI where every interaction happens in-place." },
      { title: "Test", desc: "I refined action loops with developers to eliminate any latency." }
    ],
    decisions: [
      {
        title: "Table-Centered Experience",
        desc: "I noticed frequent screen switching breaks immersion. I designed a single, persistent table view that allows players to act 45% faster while staying in a fluid, engaging flow.",
        image: "/images/shove-screen-2.png"
      },
      {
        title: "Always-Visible Context",
        desc: "I found that hidden values cause anxiety. I ensured all critical context—balances and pots—is always visible, reducing cognitive load and improving decision speed.",
        image: "/images/shove-screen-3.png"
      },
      {
        title: "One-Tap Betting Controls",
        desc: "I avoided complex numeric inputs prone to error in high-pressure games. I built intuitive one-tap controls that significantly reduced misclicks and created faster interaction loops.",
        image: "/images/shove-screen-1.png"
      }
    ],
    solution: {
      video: "/images/shove-demo.mp4",
      fallback: "/images/shove-hero.png",
      overview: "Shove.bet provides a zero-latency poker experience. By keeping all context and actions on a single immersive table view, players can act quickly and stay in the flow without ever needing to navigate away from the game state."
    },
    impact: [
      { val: "100+", label: "Waitlist Joins" },
      { val: "Zero", label: "Guidance Needed" },
      { val: "45%", label: "Faster Actions" }
    ]
  },
  {
    id: "datewave",
    title: "DateWave",
    caseStudyUrl: "/case-study/datewave",
    summary: "I designed a modern dating experience focused on meaningful connections, smarter matching, and intentional interactions.",
    tags: ["Dating", "Mobile", "Behavioral UX"],
    accent: {
      text: "text-pink-500",
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
      shadow: "shadow-pink-500/15"
    },
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Timeline", value: "5 to 6 weeks" },
      { label: "Tools", value: "Figma, Notion, Forms" }
    ],
    tools: ["Figma", "Notion", "Forms"],
    heroImage: "/images/Datewave 1.png",
    fallback: "/images/Datewave 1.png",
    overview: "I designed DateWave as a modern dating platform focused on helping users build meaningful relationships, rather than shallow interactions. Instead of prioritizing endless swiping, I designed the experience to encourage thoughtful discovery, compatibility, and intentional communication.",
    problem: {
      context: "I discovered that users feel frustrated with superficial matches, poor compatibility, and a lack of meaningful conversations.",
      points: [
        { title: "Superficial Interactions", desc: "I found that users often judge based on appearance instead of deep compatibility, leading to unfulfilling connections." },
        { title: "Time Constraints", desc: "I observed that users don't have time to sift through thousands of irrelevant matches, causing fatigue and disengagement." },
        { title: "Anxiety & Trust", desc: "I identified that users fear fake profiles or wasting emotional effort on shallow connections, eroding trust in dating apps." }
      ]
    },
    goals: [
      "Improve match quality over quantity",
      "Encourage deeper user interaction",
      "Reduce decision fatigue",
      "Build trust and authenticity"
    ],
    approach: "I shifted the focus from swiping to discovery, using behavior-driven UX to guide users toward matches that align with their values and personality.",
    process: [
      { title: "Understand", desc: "I conducted in-depth user research and psychological behavior interviews." },
      { title: "Define", desc: "I built detailed user personas and mapped emotional journeys." },
      { title: "Ideate", desc: "I iterated on flows and information architecture for discovery, focusing on meaningful interactions." },
      { title: "Design", desc: "I crafted wireframes and a high-fidelity emotional UI system." },
      { title: "Test", desc: "I ran feedback loops to refine the compatibility algorithm UX, ensuring accurate and relevant matches." }
    ],
    decisions: [
      {
        title: "Swipe-Based Discovery",
        desc: "I used familiar interaction models to reduce cognitive load and speed up initial engagement. I achieved highly intuitive onboarding with zero learning curve, boosting initial adoption.",
        image: "/images/Datewave 2.png"
      },
      {
        title: "Filter-Based Search System",
        desc: "I found that users want granular control based on specific values. I designed a powerful filtering system that delivered a significant improvement in match relevance and user satisfaction.",
        image: "/images/Datewave 3.png"
      },
      {
        title: "Profile Card Hierarchy",
        desc: "I prioritized critical personality data over photos to encourage deeper engagement. This enabled better-informed decision-making and higher-quality first messages.",
        image: "/images/Datewave 4.png"
      },
      {
        title: "Clear Action Buttons",
        desc: "I used clear binary decisions to reduce interaction anxiety. This created faster interaction loops and increased overall app engagement.",
        image: "/images/Datewave 5.png"
      }
    ],
    solution: {
      video: "/images/datewave-demo.mp4",
      fallback: "/images/Datewave 1.png",
      overview: "DateWave shifts dating from swiping to intentional discovery. The experience focuses on values-first filtering and personality-driven profile hierarchies to help users find compatible matches through a structured and meaningful interaction model."
    },
    impact: [
      { val: "Social", label: "Meaningful Discovery" },
      { val: "Simple", label: "Increased Engagement" },
      { val: "Trust", label: "Critical Product Pillar" },
      { val: "Quality", label: "Perceived Match Value" }
    ]
  }
];
