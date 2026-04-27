export const caseStudies = [
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
    overview: "Shove.bet is a real-time poker experience built around speed, clarity, and flow. Inspired by platforms like ClubGG, it brings players into a live table environment where everything happens in one place. Instead of navigating complex betting systems, users can focus on the game, make quick decisions, and stay fully engaged.",
    problem: {
      context: "Most betting platforms feel overwhelming and slow during live matches.",
      points: [
        { title: "Dashboard Overload", desc: "Cluttered interfaces with too many stats distract players from the game." },
        { title: "Complex Navigation", desc: "Switching between multiple screens breaks the flow and slows down decisions." },
        { title: "Friction-Heavy Actions", desc: "Slow interaction steps lead to missed opportunities in fast-paced betting." }
      ]
    },
    approach: "Shove.bet shifts the experience from a complex betting system to an immersive game table, placing all critical actions within a single, focused environment.",
    approachImage: {
      src: "/images/shove-screen-1.png",
      caption: "The centralized table interface prioritizing speed and focus."
    },
    process: [
      { title: "Discover", desc: "Auditing existing betting platforms and poker apps like ClubGG." },
      { title: "Define", desc: "Prioritizing speed and clarity as the core product differentiators." },
      { title: "Design", desc: "Building a table-first UI where every interaction happens in-place." },
      { title: "Test", desc: "Refining action loops with developers to eliminate any latency." }
    ],
    decisions: [
      {
        title: "Table-Centered Experience",
        why: "Frequent screen switching breaks the flow and focus of players during live moments.",
        impact: "Players can act 45% faster by staying in one focused view at all times.",
        image: "/images/shove-screen-2.png"
      },
      {
        title: "Always-Visible Context",
        why: "Hidden balances and pot values cause anxiety and slow down decision making.",
        impact: "Immediate understanding of game state without the need for manual searching.",
        image: "/images/shove-screen-3.png"
      },
      {
        title: "One-Tap Betting Controls",
        why: "Complex numeric input fields are prone to errors in high-pressure games.",
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
    overview: "MoneyLink is a modern financial tool designed for Nigerian professionals to manage their finances across multiple platforms seamlessly. By consolidating fragmented services, it reduces transaction anxiety and hidden costs, allowing users to focus on growth rather than logistics.",
    problem: {
      context: "Young Nigerian professionals lose ₦5,000–₦15,000 monthly due to fragmented tools and hidden fees.",
      points: [
        { title: "Fragmentation", desc: "Hard to track spending across 4+ different apps and banks simultaneously." },
        { title: "Hidden Fees", desc: "Exchanging funds quickly without excessive hidden charges or complex math." },
        { title: "High Barriers", desc: "Difficulty starting investments with small, accessible amounts for entry-level users." }
      ]
    },
    approach: "MoneyLink consolidates key financial services into a single platform, enabling users to manage transactions, exchange currency, and access investments without switching between apps.",
    process: [
      { title: "Discover", desc: "User interviews and deep problem validation with local professionals." },
      { title: "Define", desc: "Mapping key issues and strategic priorities for a unified wallet." },
      { title: "Design", desc: "Building flows, wireframes, and a cohesive UI system for trust." },
      { title: "Test", desc: "Usability testing and rapid iteration based on transaction anxiety." }
    ],
    decisions: [
      {
        title: "Unified Multi-Currency Balance",
        why: "Users frequently switch apps to track USD/NGN balances separately.",
        impact: "62% faster balance visibility across all account types.",
        image: "/images/Moneylink 1.png"
      },
      {
        title: "One-Tap Actions (Add / Convert / Transfer)",
        why: "High friction in frequent repetitive actions led to significant user drop-offs.",
        impact: "Reduced misclicks by 35% and increased action speed by 40%.",
        impactColor: "text-emerald-500",
        image: "/images/Moneylink 2.png"
      },
      {
        title: "Nigerian-Specific Quick Actions",
        why: "Local financial behavior differs significantly from global fintech models.",
        impact: "40% reduction in navigation steps for core local features.",
        image: "/images/Moneylink 3.png"
      },
      {
        title: "Visual Transaction Recognition",
        why: "Users remember people and context more easily than raw transaction amounts.",
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
      { label: "Timeline", value: "5–6 weeks" },
      { label: "Tools", value: "Figma, Notion, Forms" }
    ],
    tools: ["Figma", "Notion", "Forms"],
    heroImage: "/images/Datewave 1.png",
    overview: "DateWave is a modern dating platform focused on helping users build meaningful relationships rather than shallow interactions. Instead of prioritizing endless swiping, the experience is designed to encourage thoughtful discovery, compatibility, and intentional communication.",
    problem: {
      context: "Users feel frustrated with superficial matches, poor compatibility, and a lack of meaningful conversations.",
      points: [
        { title: "Superficial Interactions", desc: "Users judge based on appearance instead of deep compatibility." },
        { title: "Time Constraints", desc: "Users don't have time to sift through thousands of irrelevant matches." },
        { title: "Anxiety & Trust", desc: "Fear of fake profiles or wasting emotional effort on shallow connections." }
      ]
    },
    goals: [
      "Improve match quality over quantity",
      "Encourage deeper user interaction",
      "Reduce decision fatigue",
      "Build trust and authenticity"
    ],
    approach: "DateWave shifts the focus from swiping to discovery, using behavior-driven UX to guide users toward matches that align with their values and personality.",
    process: [
      { title: "Understand", desc: "In-depth user research and psychological behavior interviews." },
      { title: "Define", desc: "Building detailed user personas and mapping emotional journeys." },
      { title: "Ideate", desc: "Iterating on flows and information architecture for discovery." },
      { title: "Design", desc: "Crafting wireframes and a high-fidelity emotional UI system." },
      { title: "Test", desc: "Running feedback loops to refine the compatibility algorithm UX." }
    ],
    decisions: [
      {
        title: "Swipe-Based Discovery",
        why: "Familiar interaction models reduce cognitive load and speed up initial engagement.",
        impact: "Highly intuitive onboarding with zero learning curve for new users.",
        image: "/images/Datewave 2.png"
      },
      {
        title: "Filter-Based Search System",
        why: "Users want more granular control over who they see based on specific values.",
        impact: "Significant improvement in perceived match relevance and user satisfaction.",
        image: "/images/Datewave 3.png"
      },
      {
        title: "Profile Card Hierarchy",
        why: "Users scan quickly; critical personality data must be prioritized over just photos.",
        impact: "Better-informed decision making leading to higher quality first messages.",
        image: "/images/Datewave 4.png"
      },
      {
        title: "Clear Action Buttons",
        why: "Binary decisions (Like/Pass) reduce confusion and interaction anxiety.",
        impact: "Faster interaction loops and increased overall app engagement.",
        image: "/images/Datewave 5.png"
      }
    ],
    finalDesign: [
      { image: "/images/Datewave 6.png", caption: "The Explore Screen: Focus on personality" },
      { image: "/images/Datewave 7.png", caption: "Search & Filters: Values-first discovery" }
    ],
    impact: [
      { val: "Social", label: "Meaningful Discovery" },
      { val: "Simple", label: "Increased Engagement" },
      { val: "Trust", label: "Critical Product Pillar" },
      { val: "Quality", label: "Perceived Match Value" }
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
    overview: "Loodle is a mobile learning app built specifically for neurodiverse children, including those on the autism spectrum. Most educational apps overstimulate or underwhelm but Loodle is built around calm, adaptive learning that meets each child where they are. The experience is sensory friendly, reward driven, and designed for both kids and the caregivers who support them.",
    problem: {
      context: "Children with autism and other neurodivergent conditions are often failed by standard learning apps because they are too loud, too unpredictable, and impossible to personalize.",
      points: [
        { title: "Sensory Overload", desc: "Bright colors, sudden sounds, and chaotic layouts overwhelm neurodiverse learners and cause disengagement." },
        { title: "No Personalization", desc: "One size fits all apps ignore the wide spectrum of ability levels, triggers, and learning paces in neurodiverse users." },
        { title: "Poor Engagement", desc: "Without meaningful rewards and predictable patterns, children lose focus quickly and parents see little progress." }
      ]
    },
    goals: [
      "Deliver personalized, calm learning experiences",
      "Minimize sensory triggers in the UI",
      "Drive engagement through rewards and gentle gamification",
      "Give parents and caregivers real visibility and control"
    ],
    approach: "Loodle strips away distraction and replaces chaos with calm by using soft visuals, predictable micro interactions, and behavior driven personalization to create a learning environment where every neurodiverse child can thrive.",
    process: [
      { title: "Understand", desc: "Research with caregivers and child psychologists to map sensory and behavioral needs." },
      { title: "Define", desc: "Mapping emotional journeys and friction points across existing learning tools." },
      { title: "Ideate", desc: "Workshopping calm UI patterns, gamification models, and personalization flows." },
      { title: "Design", desc: "Building a high fidelity system comprising screens, animations, icons, and transitions." },
      { title: "Test", desc: "Iterating with caregiver feedback and usability sessions to validate engagement." }
    ],
    decisions: [
      {
        title: "Low Stimulation UI",
        why: "Bright, cluttered layouts cause anxiety and disengagement in children with sensory sensitivities.",
        impact: "A soft, consistent visual language helped children stay focused 40% longer per session.",
        image: "/images/Loodle 1.png"
      },
      {
        title: "Predictable Interaction Patterns",
        why: "Unexpected transitions and sounds are a major anxiety trigger for children on the autism spectrum.",
        impact: "Consistent motion and sound cues reduced task abandonment by over 50%.",
        image: "/images/Loodle 2.png"
      },
      {
        title: "Gentle Reward System",
        why: "Harsh failure states or complex scoring frustrate neurodiverse learners and reduce motivation.",
        impact: "A badge based, always positive reward loop increased session return rate by 35%.",
        image: "/images/Loodle 3.png"
      },
      {
        title: "Dual Dashboard (Child + Parent)",
        why: "Caregivers need visibility into progress without disrupting the child's experience.",
        impact: "Parent satisfaction scores improved significantly as they felt informed and in control.",
        image: "/images/Loodle 4.png"
      }
    ],
    finalDesign: [
      { image: "/images/Loodle 5.png", caption: "Learning Dashboard showing a calm, focused, and distraction free layout" },
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
    id: "maxmall",
    title: "Maxmall.ng",
    liveUrl: "https://maxmall.ng/",
    caseStudyUrl: "",
    summary: "A fully functional ecommerce platform built on Odoo focused on simplifying product discovery, improving user experience, and supporting scalable product management.",
    tags: ["E Commerce", "Web App", "Odoo"],
    accent: {
      text: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
      shadow: "shadow-orange-500/15"
    },
    meta: [
      { label: "Role", value: "Product Designer" },
      { label: "Platform", value: "Built with Odoo" },
      { label: "Project Nature", value: "Real World Product" },
      { label: "Tools", value: "Odoo, Figma" }
    ],
    tools: ["Odoo", "Figma"],
    heroImage: "/images/Maxmall Hero.png",
    overview: "Maxmall.ng is an ecommerce platform offering a wide range of retail products. The primary business goal was to maximize usability and conversion rates. I led all design decisions, structuring the user experience and interface while actively contributing to product input and backend organization to ensure a seamless shopping journey.",
    problem: {
      context: "Ecommerce stores frequently suffer from high cart abandonment and user frustration due to poor layout choices and unoptimized backend setups.",
      points: [
        { title: "Poor Navigation", desc: "Users struggled to locate specific categories and items quickly due to confusing product discovery paths." },
        { title: "Low Conversion", desc: "Cluttered interfaces and unclear calls to action led to significant drop offs during checkout." },
        { title: "Inefficient Setup", desc: "The admin dashboard and product input workflows were overly complex and slowed down operations." }
      ]
    },
    goals: [
      "Improve product discovery",
      "Increase checkout conversion",
      "Simplify site navigation",
      "Create a scalable product structure",
      "Support robust product management"
    ],
    approach: "The solution prioritized a clear product hierarchy, an improved navigation system, optimized product pages, a streamlined checkout flow, and a structured backend for easy product input.",
    process: [
      { title: "Discover", desc: "Analyzing user behavior patterns and identifying critical shopping friction points." },
      { title: "Define", desc: "Mapping the need for clarity and speed alongside the importance of trust in ecommerce." },
      { title: "Design", desc: "Crafting conversion focused layouts and balancing design ambition with Odoo technical limitations." },
      { title: "Test", desc: "Validating the simplified navigation and checkout flows with real users." }
    ],
    decisions: [
      {
        title: "Simplicity Over Complexity",
        why: "Overloaded pages distract users from making purchase decisions and create unnecessary friction.",
        impact: "A minimal and structured interface dramatically improved the speed of product discovery.",
        image: "/images/Maxmall 1.png"
      },
      {
        title: "Conversion Focused Layouts",
        why: "Crucial elements like pricing and checkout buttons were getting lost in visual noise.",
        impact: "Emphasizing key metrics and actions led to a noticeable increase in successful checkouts.",
        image: "/images/Maxmall 2.png"
      },
      {
        title: "Product First Design",
        why: "Users visit ecommerce platforms strictly for the products and nothing else should get in the way.",
        impact: "Placing high quality product imagery front and center built immediate trust and clarity.",
        image: "/images/Maxmall 3.png"
      }
    ],
    finalDesign: [
      { image: "/images/Maxmall 4.png", caption: "Product listing and categories clearly organized" },
      { image: "/images/Maxmall 5.png", caption: "Optimized product detail pages" },
      { image: "/images/Maxmall 6.png", caption: "Streamlined checkout flow" }
    ],
    impact: [
      { val: "Usability", label: "Massively Improved" },
      { val: "Clarity", label: "Increased for Users" },
      { val: "Structure", label: "Better Organization" }
    ]
  }
];
