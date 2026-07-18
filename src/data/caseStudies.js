const pmAccent = { text: 'text-accent-orange', bg: 'bg-orange-500/10', border: 'border-orange-500/20', shadow: 'shadow-orange-500/15' };

export const caseStudies = [
  {
    id: 'shyne', title: 'Shyne', type: 'pm', label: 'Flagship product · Early-stage MVP',
    summary: 'Defining an AI-powered portfolio platform that helps African creatives turn scattered work into a credible professional presence.',
    heroMedia: '/images/Ui 8.png', liveUrl: 'https://www.shyne.africa', accent: pmAccent,
    meta: [{ label: 'Role', value: 'Co-Founder & Growth Product Manager' }, { label: 'Stage', value: 'MVP' }, { label: 'Market', value: 'African creative economy' }, { label: 'Team', value: 'Founder, developers & collaborators' }],
    sections: [
      ['The Problem', 'Many African creatives rely on social profiles and scattered links to show their work, making it difficult to present themselves professionally, build credibility, and attract opportunities. Creative academies also struggle to help graduates maintain an online presence after completing training.'],
      ['Business Context', 'The opportunity was to create a subscription platform for individuals while building a longer-term institution product for creative academies. Resources were limited, so the MVP needed to prove the highest-risk assumption: will creatives publish a portfolio when setup is genuinely easy?'],
      ['Users & Goals', 'Primary users were African creatives, students in creative academies, and independent digital professionals. Their goal was a professional online presence without having to become a web designer. The business goal was a repeatable path to portfolio creation, publishing, and subscription adoption.'],
      ['Research & Insights', 'I reviewed Behance, Dribbble, Wix, Carrd, Framer, Notion Sites, and specialist portfolio builders; spoke with creatives and academy owners; and observed how people currently share work. Three patterns were clear: people did not want to design a site, speed mattered more than customization during onboarding, and academies needed an easier way to manage graduate portfolios.'],
      ['Hypothesis', 'If Shyne guided users from their existing work to a publishable portfolio with AI assistance and clear templates, more users would reach their first meaningful product moment than with a blank-canvas portfolio builder.'],
      ['Product Strategy & MVP Decisions', 'I concentrated the MVP on AI-assisted onboarding, templates, portfolio publishing, and responsive output. I intentionally delayed marketplace, messaging, analytics, and community features. This traded breadth for a clearer activation loop and protected a small engineering team from building engagement features before the creation workflow was validated.'],
      ['Prioritization & Roadmap', 'The roadmap moved in three steps: first, help individuals create and publish; second, validate institution workflows after academy demand emerged; third, consider opportunity and networking layers only after portfolio creation was reliable. Customer feedback, business leverage, and implementation effort were the decision criteria.'],
      ['Success Metrics', 'The MVP success metrics are onboarding completion, activation rate, published-portfolio rate, and time to publish. The next dashboard will also track retention, AI-assisted versus manual onboarding performance, and institution adoption.'],
      ['Execution & Collaboration', 'I owned product strategy, discovery, roadmap decisions, and the design system, partnering with developers on delivery and using early user feedback to refine the experience. AI tools supported research synthesis, documentation, ideation, and rapid prototyping; they did not replace customer judgement.'],
      ['Outcome', 'Discovery validated demand with both creatives and institutions, and changed the product thesis from an individual portfolio tool to a platform with institution-partnership potential. The work established a focused MVP direction rather than overstating unmeasured commercial results.'],
      ['Retrospective & Next Opportunities', 'The strongest decision was treating publishing—not customization—as the core job to be done. Next I would run an AI-onboarding experiment against a manual flow, instrument the activation funnel, and test institution management only after the individual creation journey is dependable.']
    ]
  },
  {
    id: 'applyflow', title: 'ApplyFlow', type: 'pm', label: 'Product strategy case study · MVP',
    summary: 'Shaping an AI-enabled application workspace that reduces the repeated effort of job discovery, resume tailoring, and application tracking.',
    heroMedia: '/images/Applyflowimage.png', liveUrl: 'https://applyflow-hazel.vercel.app/', accent: pmAccent,
    meta: [{ label: 'Role', value: 'Product Manager' }, { label: 'Stage', value: 'MVP / Product exploration' }, { label: 'Industry', value: 'HR technology' }, { label: 'Scope', value: 'End-to-end application workflow' }],
    sections: [
      ['The Problem', 'Job seekers spend too much time finding jobs, manually tailoring resumes, and tracking applications across multiple platforms. The repeated work of finding a role, tailoring a resume, and remembering follow-ups creates friction precisely when applicants need focus.'],
      ['Business Context', 'The product needed to validate demand before expanding. With limited resources, the strategy was to prove a coherent end-to-end workflow rather than compete feature-for-feature with every career tool.'],
      ['Users & Goals', 'The initial audience included product designers, product managers, engineers, and other professionals applying to multiple roles. Their goal was one dependable workspace for opportunities, resumes, and application status.'],
      ['Research & Insights', 'I combined competitor analysis, observation of recruiter workflows, and discussions with job seekers. Applicants manually track too much, resume tailoring is repetitive, and people want their search information in one place.'],
      ['Hypothesis', 'If applicants could manage jobs, resumes, and AI-assisted preparation in one workflow, they would spend less time on administration and have a clearer view of the next best action.'],
      ['Product Strategy & MVP Decisions', 'I prioritized AI resume optimization, resume generation, job tracking, and application management. I deliberately deferred interview preparation, networking, and a recruiter marketplace. The trade-off was a narrower value proposition with a more complete core journey.'],
      ['Prioritization & Roadmap', 'The MVP sequence was: capture an opportunity, research and tailor materials, track application state, then identify follow-up work. Future roadmap bets include recruiter integrations, better recommendations, and performance feedback for resume optimization.'],
      ['Success Metrics', 'The next measurement plan tracks completed applications, time from role discovery to a ready application, resume-optimization usage, and repeat use of the tracking workspace.'],
      ['Execution & Collaboration', 'I translated the journey into product architecture and prototypes, collaborating with developers and using Claude, Cursor, and Gemini to speed up exploration and documentation. The design output served the workflow, rather than being the end product.'],
      ['Outcome', 'Prototype testing validated the workflow and demonstrated a complete journey from opportunity discovery through tracking. It also created a reusable product architecture for later expansion.'],
      ['Retrospective & Next Opportunities', 'The core learning was that AI is most useful when embedded at the moment a decision is needed, not presented as a separate novelty. Next I would integrate job sources, instrument completion, and evaluate recommendation quality with real applicants.']
    ]
  },
  {
    id: 'moneylink', title: 'MoneyLink', type: 'pm', label: 'Product strategy case study · Concept',
    summary: 'Reducing transaction anxiety by making a fintech experience clearer, more reassuring, and easier to act on.',
    heroMedia: '/images/Moneylink Hero.png', accent: pmAccent,
    meta: [{ label: 'Role', value: 'Product Strategy & UX' }, { label: 'Stage', value: 'Concept' }, { label: 'Industry', value: 'Fintech' }, { label: 'Focus', value: 'Trust & transaction clarity' }],
    sections: [
      ['The Problem', 'Financial products often overwhelm users with technical language and complicated transaction flows, reducing trust and increasing errors. When users are uncertain about what will happen to their money, hesitation and errors increase.'],
      ['Business Context', 'The product ambition was a simple, trustworthy financial experience that could support secure transactions. The central constraint was preserving clarity without compromising security and compliance requirements.'],
      ['Users & Goals', 'The focus was individuals making digital financial transactions. Their goal was confidence: understand the action, confirm the important details, and know what happens if something goes wrong.'],
      ['Research & Insights', 'I reviewed existing fintech products and evaluated onboarding and payment flows. The research indicated that trust is built through clarity, users need reassurance throughout a transaction, and small UX improvements reduce hesitation.'],
      ['Hypothesis', 'If onboarding, verification, confirmation, and error states communicate clearly at the right moment, users will complete core tasks with greater confidence and fewer avoidable errors.'],
      ['Product Strategy & MVP Decisions', 'I prioritized clear onboarding, account verification, transaction confirmation, error messaging, and a deliberate information hierarchy. I deferred secondary personalization, advanced analytics, and additional financial products to avoid diluting the core trust experience.'],
      ['Prioritization & Roadmap', 'The first release concentrated on the minimum set of moments that create or break trust. Once those flows are validated, the roadmap can explore personalization and adjacent product offerings.'],
      ['Success Metrics', 'A live product should measure onboarding completion, task completion, transaction success rate, time to completion, error recovery, and qualitative confidence after a transaction.'],
      ['Execution & Collaboration', 'I led product planning and UX strategy with product stakeholders, developers, and the design team. Reusable components were used to make important states consistent across the journey.'],
      ['Outcome', 'The concept produced a cleaner transaction experience, improved consistency through reusable components, and reduced complexity. It should be treated as a product exploration, not as a launched product with measured performance.'],
      ['Retrospective & Next Opportunities', 'This work reinforced that fintech clarity is a product requirement, not a cosmetic choice. The next step is usability testing with realistic transaction scenarios, then iterating against transaction-success and confidence signals.']
    ]
  },
  {
    id: 'adsight', title: 'AdSight', type: 'pm', label: 'Product strategy case study · Concept',
    summary: 'An AI-powered advertisement review platform that analyzes competitor creatives and provides instant feedback on messaging, positioning, and conversion potential.',
    heroMedia: '/images/Adsight 1.png', accent: pmAccent,
    meta: [{ label: 'Role', value: 'Product Strategy & Builder' }, { label: 'Stage', value: 'Concept' }, { label: 'Industry', value: 'AI / Marketing Tech' }, { label: 'Focus', value: 'Competitive positioning' }],
    sections: [
      ['The Problem', 'Founders and marketers spend hours manually tracking competitor ads across multiple platforms. While ad libraries exist, they only display raw collections of campaigns without explaining what those ads mean or how teams should react, leading to analysis fatigue and missed strategic opportunities.'],
      ['Business Context', 'The goal was to test whether AI could transform large collections of competitor ads into actionable strategic insights without requiring manual analysis. The primary challenge was validating user demand for creative synthesis before committing to complex database architecture.'],
      ['Users & Goals', 'The target users are founders, growth marketers, and product teams. Their goal is to identify positioning trends, messaging patterns, and competitor shifts immediately. The business goal was to validate the utility of AI-synthesized market insights over raw ad data lists.'],
      ['Research & Insights', 'I observed how founders and marketers track competitor advertising. The key insight was that users care less about seeing every individual advertisement and more about understanding the overall strategic direction. Insight beats volume.'],
      ['Hypothesis', 'If we use AI to summarize competitor advertising campaigns into positioning trends and strategic opportunities, growth teams will spend less time doing manual analysis and identify market openings faster.'],
      ['Product Strategy & MVP Decisions', 'I designed AdSight as an AI-powered competitor intelligence workspace. I prioritized the AI insight layer (summaries, trends, positioning patterns, and opportunities) over complex search parameters and export tools, focusing entirely on proving the value of synthesized analysis.'],
      ['Prioritization & Roadmap', 'The early concepts tried to show too much information at once, cluttering the UI. I refined the roadmap to focus on visual clarity first, postponing predictive performance metrics and ad forecasting to later iterations.'],
      ['Success Metrics', 'Prototype validation focused on the quality and accuracy of the AI-generated competitive summaries, user retention on the trend workspace, and qualitative interest from growth marketers.'],
      ['Execution & Collaboration', 'I functioned as the solo product planner and builder, using AI tools (Claude, Cursor, Gemini) to accelerate documentation, early prototyping, and frontend iteration. I focused on making the UI feel like an active intelligence workspace rather than a standard static gallery.'],
      ['Outcome', 'Prototype testing validated that the AI insight layer was significantly more useful than displaying raw data. Users could understand competitor messaging patterns without manually reviewing dozens of campaigns, proving that synthesis is the core value.'],
      ['Retrospective & Next Opportunities', 'The core learning was that displaying raw volume is overwhelming; users want decision-ready insights. If I continue this project, I would introduce predictive trend analysis, ad performance forecasting, and automated recommendations to help teams react to competitor shifts proactively.']
    ]
  },
  {
    id: 'rivalens', title: 'Rivalens', type: 'pm', label: 'Product strategy case study · Concept',
    summary: 'An AI-powered competitive intelligence workspace that monitors competitor activity and provides market positioning updates, turning reactive research into proactive intelligence.',
    heroMedia: '/images/Rivalens 1.png', accent: pmAccent,
    meta: [{ label: 'Role', value: 'Product Strategy & Builder' }, { label: 'Stage', value: 'Concept' }, { label: 'Industry', value: 'AI / B2B SaaS' }, { label: 'Focus', value: 'Proactive market intelligence' }],
    sections: [
      ['The Problem', 'Competitive intelligence is typically a reactive process. Teams compile static, manual competitor research reports that quickly become outdated, and researchers must run manual searches every time they need new competitive information.'],
      ['Business Context', 'The goal was to test whether competitive intelligence could become proactive through continuous AI monitoring. The constraint was showing a clear value proposition through automated monitoring without building heavy, multi-source crawling pipelines early on.'],
      ['Users & Goals', 'The target users are founders, product teams, and product managers. Their goal is to stay updated on competitor moves and market positioning without spending hours doing manual research.'],
      ['Research & Insights', 'I conducted competitor analysis of research tools and discussed workflows with product managers. The key insight was that users rarely need more raw data; they need confidence in what action to take next. Clarity consistently outperformed complexity.'],
      ['Hypothesis', 'If competitive intelligence is delivered proactively via continuous AI monitoring and decision-ready summaries, product teams will make faster, more confident positioning decisions.'],
      ['Product Strategy & MVP Decisions', 'I designed Rivalens as an AI-powered competitive intelligence workspace. I prioritized automated, decision-ready competitor summaries over mass data collection. Early versions focused too heavily on gathering data, which I pivoted away from to emphasize actionable recommendations.'],
      ['Prioritization & Roadmap', 'The MVP focuses on automated competitive updates and positioning summaries. The roadmap prioritizes simplicity and actionable insights over massive search parameters. Later iterations will include live alerts and automated strategic reports.'],
      ['Success Metrics', 'Success for the concept is measured by the speed at which users can identify key competitor changes, and qualitative feedback on the relevance and clarity of the AI-generated summaries.'],
      ['Execution & Collaboration', 'I led the product planning, user journeys, and prototyping, using AI creation tools to accelerate code generation and speed up early validation loops. The interface design was structured specifically around decision support.'],
      ['Outcome', 'The concept demonstrated that AI competitive summaries dramatically reduce research friction, allowing users to understand market movements faster than traditional workflows.'],
      ['Retrospective & Next Opportunities', 'The key takeaway was that competitive tools should focus on recommending next steps rather than just aggregating raw competitor activities. If I continue this project, I would introduce live competitor monitoring, real-time market change alerts, and AI-generated strategic reports tailored to specific business goals.']
    ]
  }
];
