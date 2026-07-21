export const caseStudies = [
  {
    id: "applyflow",
    title: "ApplyFlow",
    liveUrl: "",
    caseStudyUrl: "",
    summary: "A smart job application tracker that puts everything — research, status, and AI matching — in one place.",
    tags: ["AI SaaS", "Productivity", "Web App"],
    accent: {
      text: "text-indigo-400",
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
      shadow: "shadow-indigo-500/15"
    },
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Category", value: "AI SaaS" },
      { label: "Focus", value: "Dashboard & Workflow Design" }
    ],
    tools: ["Figma", "Notion", "Cursor", "ChatGPT", "Claude", "Antigravity"],
    heroImage: "/images/Applyflow Dashboard.png",
    fallback: "/images/Applyflow Dashboard.png",
    overview: "I designed ApplyFlow to fix one of the biggest headaches in job searching — having everything scattered across different tabs, spreadsheets, and apps. The goal was simple: bring everything into one place so job seekers can actually stay on top of their applications and make better decisions without burning out.",
    problem: {
      context: "Most people searching for jobs end up overwhelmed — not because the search is hard, but because there's no good system to manage it.",
      points: [
        { title: "Everything Is Scattered", desc: "People juggle spreadsheets, browser tabs, and sticky notes just to track where they applied and what happened." },
        { title: "Easy to Lose Track", desc: "Without a clear system, follow-ups get missed and applications just fall through the cracks." },
        { title: "No Way to Prioritise", desc: "Without help deciding what to focus on, people waste time on low-quality applications and run out of energy fast." }
      ]
    },
    goals: [
      "Put everything in one place and remove the chaos",
      "Give users a clear view of every application at every stage",
      "Use AI to help users focus on the right opportunities",
      "Make the whole process feel less draining",
      "Make job searching feel as organised as a professional workflow"
    ],
    approach: "I started by designing the dashboard before anything else — because the dashboard is where users would spend most of their time. From there, I built out the rest of the product around that core experience. I used AI as a real tool inside the product, not just a feature mentioned in a headline.",
    process: [
      { title: "Understand", desc: "I looked at how people actually search for jobs and where they get stuck the most." },
      { title: "Define", desc: "I mapped out the full journey — from first seeing a job post all the way to final interviews." },
      { title: "Design", desc: "I designed the main dashboard, the tracking views, and how AI fits naturally into the flow." },
      { title: "Iterate", desc: "I kept refining until everything felt fast and clear — no clutter, just what the user needs." }
    ],
    decisions: [
      {
        title: "One Dashboard to See Everything",
        why: "I wanted users to open the app and immediately know where they stand — no digging, no clicking around.",
        impact: "Users can see every application, its current status, and what needs attention, all without leaving the main screen.",
        image: "/images/Applyflow Dashboard.png"
      },
      {
        title: "AI That Scores and Suggests",
        why: "I added AI scoring so users don't have to manually figure out which jobs are worth their energy.",
        impact: "The AI looks at job descriptions and the user's profile to rank opportunities — so users apply smarter, not more.",
        image: "/images/Applyflow AI Research.png"
      },
      {
        title: "A Calm, Focused Visual Style",
        why: "Job searching is already stressful. I wanted the product to feel professional and calm — not noisy or overwhelming.",
        impact: "The dark, minimal design helps users stay focused and gives the product a premium, tool-like feel.",
        image: "/images/Applyflow Auth.png"
      }
    ],
    finalDesign: [
      { image: "/images/Applyflow Job Screen.png", caption: "The full application tracker — every job in one organised view." },
      { image: "/images/Applyflow Dashboard.png", caption: "The main dashboard showing pipeline status at a glance." }
    ],
    impact: [
      { val: "Clarity", label: "Clearer Workflow Visibility" },
      { val: "Focus", label: "Less Mental Overload" },
      { val: "Confidence", label: "Better Decision Making" },
      { val: "Structure", label: "More Organised Process" }
    ]
  },
  {
    id: "loodle",
    title: "Loodle",
    caseStudyUrl: "https://www.behance.net/gallery/225192449/Loodle-A-Mobile-Learning-App-for-Neurodiverse-Kids",
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
    overview: "We built Loodle as a mobile learning app specifically for neurodiverse children, including those on the autism spectrum. We recognized that most educational apps overstimulate or underwhelm users, so we built Loodle around calm, adaptive learning that meets each child where they are. We designed a sensory-friendly, reward-driven experience for both kids and the caregivers who support them.",
    problem: {
      context: "Children with autism and other neurodivergent conditions are often failed by standard learning apps because they are too loud, unpredictable, and impossible to personalize.",
      points: [
        { title: "Sensory Overload", desc: "Bright colors, sudden sounds, and chaotic layouts overwhelm neurodiverse learners and cause disengagement." },
        { title: "No Personalization", desc: "One-size-fits-all apps ignore the wide spectrum of ability levels, triggers, and learning paces in neurodiverse users." },
        { title: "Poor Engagement", desc: "Without meaningful rewards and predictable patterns, children lose focus quickly and parents see little progress." }
      ]
    },
    goals: [
      "Deliver personalized, calm learning experiences",
      "Minimize sensory triggers in the UI",
      "Drive engagement through rewards and gentle gamification",
      "Give parents and caregivers real visibility and control"
    ],
    approach: "We stripped away distraction and replaced chaos with calm by using soft visuals, predictable micro-interactions, and behavior-driven personalization to create a learning environment where every neurodiverse child can thrive.",
    process: [
      { title: "Understand", desc: "We researched alongside caregivers and child psychologists to map sensory and behavioral needs." },
      { title: "Define", desc: "We mapped emotional journeys and friction points across existing learning tools." },
      { title: "Ideate", desc: "We workshopped calm UI patterns, gamification models, and personalization flows." },
      { title: "Design", desc: "We built a high-fidelity system comprising screens, animations, icons, and transitions." },
      { title: "Test", desc: "We iterated using caregiver feedback and usability sessions to validate engagement." }
    ],
    decisions: [
      {
        title: "Low Stimulation UI",
        why: "We decided to avoid bright, cluttered layouts that cause anxiety and disengagement in children with sensory sensitivities.",
        impact: "A soft, consistent visual language helped children stay focused 40% longer per session.",
        image: "/images/Loodle 1.png"
      },
      {
        title: "Predictable Interaction Patterns",
        why: "We noted that unexpected transitions and sounds are a major anxiety trigger for children on the autism spectrum.",
        impact: "Consistent motion and sound cues reduced task abandonment by over 50%.",
        image: "/images/Loodle 2.png"
      },
      {
        title: "Gentle Reward System",
        why: "We observed that harsh failure states or complex scoring frustrate neurodiverse learners and reduce motivation.",
        impact: "A badge-based, always-positive reward loop increased session return rate by 35%.",
        image: "/images/Loodle 3.png"
      },
      {
        title: "Dual Dashboard (Child + Parent)",
        why: "We knew caregivers need visibility into progress without disrupting the child's experience.",
        impact: "Parent satisfaction scores improved significantly as they felt informed and in control.",
        image: "/images/Loodle 4.png"
      }
    ],
    finalDesign: [
      { image: "/images/Loodle 5.png", caption: "Learning Dashboard showing a calm, focused, and distraction-free layout" },
      { image: "/images/Loodle 6.png", caption: "Rewards Screen presenting badges and gentle positive feedback" },
      { image: "/images/Loodle 7.png", caption: "Parent Dashboard providing progress insights at a glance" },
      { image: "/images/Loodle 8.png", caption: "Customization Panel for managing sensory preferences per child" }
    ],
    impact: [
      { val: "40%", label: "Longer Focus Time" },
      { val: "35%", label: "Higher Return Rate" },
      { val: "50%+", label: "Less Abandonment" }
    ]
  },
  {
    id: "moneylink",
    title: "MoneyLink",
    caseStudyUrl: "https://www.behance.net/gallery/207792803/MoneyLink-UX-Case-Study",
    summary: "A unified fintech experience that helps Nigerian professionals manage money across multiple platforms without friction.",
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
    overview: "I designed MoneyLink as a modern financial tool for Nigerian professionals to manage their finances across multiple platforms seamlessly. By consolidating fragmented services, I reduced transaction anxiety and hidden costs, allowing users to focus on growth rather than logistics.",
    problem: {
      context: "Young Nigerian professionals lose ₦5,000 to ₦15,000 monthly due to fragmented tools and hidden fees.",
      points: [
        { title: "Fragmentation", desc: "Users find it hard to track spending across 4+ different apps and banks simultaneously." },
        { title: "Hidden Fees", desc: "Users struggle to exchange funds quickly without excessive hidden charges or complex math." },
        { title: "High Barriers", desc: "Users face difficulty starting investments with small, accessible amounts." }
      ]
    },
    approach: "I consolidated key financial services into a single platform, enabling users to manage transactions, exchange currency, and access investments without switching between apps.",
    process: [
      { title: "Discover", desc: "I conducted user interviews and deep problem validation with local professionals." },
      { title: "Define", desc: "I mapped key issues and strategic priorities to design a unified wallet." },
      { title: "Design", desc: "I built flows, wireframes, and a cohesive UI system tailored for trust." },
      { title: "Test", desc: "I ran usability testing and rapid iteration sessions based on transaction anxiety." }
    ],
    decisions: [
      {
        title: "Unified Multi-Currency Balance",
        why: "I noticed users frequently switch apps to track USD/NGN balances separately.",
        impact: "62% faster balance visibility across all account types.",
        image: "/images/Moneylink 1.png"
      },
      {
        title: "One-Tap Actions (Add, Convert, Transfer)",
        why: "I identified high friction in frequent repetitive actions which led to significant user drop-offs.",
        impact: "Reduced misclicks by 35% and increased action speed by 40%.",
        impactColor: "text-emerald-500",
        image: "/images/Moneylink 2.png"
      },
      {
        title: "Nigerian-Specific Quick Actions",
        why: "I observed that local financial behavior differs significantly from global fintech models.",
        impact: "40% reduction in navigation steps for core local features.",
        image: "/images/Moneylink 3.png"
      },
      {
        title: "Visual Transaction Recognition",
        why: "I found that users remember people and context more easily than raw transaction amounts.",
        impact: "2.8x faster transaction recall and history scanning.",
        image: "/images/Moneylink 4.png"
      }
    ],
    finalDesign: [
      { image: "/images/Moneylink 5.png", caption: "Wallet overview" },
      { image: "/images/Moneylink 6.png", caption: "Transaction confirmation" },
      { image: "/images/Moneylink 7.png", caption: "Investment portal" },
      { image: "/images/Moneylink 8.png", caption: "Currency exchange" }
    ],
    impact: [
      { val: "62%", label: "Faster Balance Checks" },
      { val: "40%", label: "Fewer Support Queries" },
      { val: "2.8x", label: "Faster Recall" }
    ]
  },
  {
    id: "shove-bet",
    title: "Shove.bet",
    liveUrl: "https://shove.bet",
    summary: "A real-time poker experience built around speed, clarity, and flow.",
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
    overview: "I designed Shove.bet as a real-time poker experience built around speed, clarity, and flow. Inspired by platforms like ClubGG, I brought players into a live table environment where everything happens in one place. Instead of navigating complex betting systems, I ensured users can focus on the game, make quick decisions, and stay fully engaged.",
    problem: {
      context: "Most betting platforms feel overwhelming and slow during live matches.",
      points: [
        { title: "Dashboard Overload", desc: "Cluttered interfaces with too many stats distract players from the game." },
        { title: "Complex Navigation", desc: "Switching between multiple screens breaks the flow and slows down decisions." },
        { title: "Friction-Heavy Actions", desc: "Slow interaction steps lead to missed opportunities in fast-paced betting." }
      ]
    },
    approach: "I shifted the experience from a complex betting system to an immersive game table, placing all critical actions within a single, focused environment.",
    process: [
      { title: "Discover", desc: "I audited existing betting platforms and poker apps like ClubGG." },
      { title: "Define", desc: "I prioritized speed and clarity as the core product differentiators." },
      { title: "Design", desc: "I built a table-first UI where every interaction happens in-place." },
      { title: "Test", desc: "I refined action loops with developers to eliminate any latency." }
    ],
    decisions: [
      {
        title: "Table-Centered Experience",
        why: "I noticed frequent screen switching breaks the flow and focus of players during live moments.",
        impact: "Players can act 45% faster by staying in one focused view at all times.",
        image: "/images/shove-screen-2.png"
      },
      {
        title: "Always-Visible Context",
        why: "I found that hidden balances and pot values cause anxiety and slow down decision making.",
        impact: "Immediate understanding of game state without the need for manual searching.",
        image: "/images/shove-screen-3.png"
      },
      {
        title: "One-Tap Betting Controls",
        why: "I avoided complex numeric input fields which are prone to errors in high-pressure games.",
        impact: "Significantly reduced misclicks and faster interaction loops for all players.",
        image: "/images/shove-screen-1.png"
      }
    ],
    finalDesign: [
      { image: "/images/shove-screen-1.png", caption: "Immersion-first interface" },
      { image: "/images/shove-screen-2.png", caption: "Live action monitoring" }
    ],
    impact: [
      { val: "100+", label: "Waitlist Joins" },
      { val: "Zero", label: "Guidance Needed" },
      { val: "45%", label: "Faster Actions" }
    ]
  },
  {
    id: "datewave",
    title: "DateWave",
    caseStudyUrl: "https://www.behance.net/gallery/207489311/Case-study-for-a-Dating-Application",
    summary: "A modern dating experience focused on meaningful connections, smarter matching, and intentional user interactions.",
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
    overview: "I designed DateWave as a modern dating platform focused on helping users build meaningful relationships rather than shallow interactions. Instead of prioritizing endless swiping, I designed the experience to encourage thoughtful discovery, compatibility, and intentional communication.",
    problem: {
      context: "Users feel frustrated with superficial matches, poor compatibility, and a lack of meaningful conversations.",
      points: [
        { title: "Superficial Interactions", desc: "Users judge based on appearance instead of deep compatibility." },
        { title: "Time Constraints", desc: "Users don't have time to sift through thousands of irrelevant matches." },
        { title: "Anxiety & Trust", desc: "Users fear fake profiles or wasting emotional effort on shallow connections." }
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
      { title: "Ideate", desc: "I iterated on flows and information architecture for discovery." },
      { title: "Design", desc: "I crafted wireframes and a high-fidelity emotional UI system." },
      { title: "Test", desc: "I ran feedback loops to refine the compatibility algorithm UX." }
    ],
    decisions: [
      {
        title: "Swipe-Based Discovery",
        why: "I used familiar interaction models to reduce cognitive load and speed up initial engagement.",
        impact: "Highly intuitive onboarding with zero learning curve for new users.",
        image: "/images/Datewave 2.png"
      },
      {
        title: "Filter-Based Search System",
        why: "I found that users want more granular control over who they see based on specific values.",
        impact: "Significant improvement in perceived match relevance and user satisfaction.",
        image: "/images/Datewave 3.png"
      },
      {
        title: "Profile Card Hierarchy",
        why: "I recognized that users scan quickly, so I prioritized critical personality data over just photos.",
        impact: "Better-informed decision making leading to higher quality first messages.",
        image: "/images/Datewave 4.png"
      },
      {
        title: "Clear Action Buttons",
        why: "I used binary decisions (Like or Pass) to reduce confusion and interaction anxiety.",
        impact: "Faster interaction loops and increased overall app engagement.",
        image: "/images/Datewave 5.png"
      }
    ],
    finalDesign: [
      { image: "/images/Datewave 6.png", caption: "The Explore Screen focused on personality" },
      { image: "/images/Datewave 7.png", caption: "Search & Filters providing values-first discovery" }
    ],
    impact: [
      { val: "Social", label: "Meaningful Discovery" },
      { val: "Simple", label: "Increased Engagement" },
      { val: "Trust", label: "Critical Product Pillar" },
      { val: "Quality", label: "Perceived Match Value" }
    ]
  }
];
