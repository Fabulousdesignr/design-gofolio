// Detailed case studies for the three flagship AI products.
// Every technical claim here is grounded in the live product, the public
// repositories, or the local source and migration files used to build them.

export const aiCaseStudies = [
  {
    slug: 'applyflow',
    number: '01',
    title: 'ApplyFlow',
    category: 'AI Product / SaaS',
    tagline:
      'A job search workspace that turns scattered opportunities into a clear, ranked pipeline.',
    summary:
      'An AI-assisted job application CRM with opportunity discovery, document import, a pipeline dashboard and a spreadsheet-style tracker.',
    status: 'Live',
    year: '2026',
    role: 'Product design, frontend engineering, AI integration',
    stack: ['React', 'Vite', 'Supabase', 'Express', 'Gemini', 'Tavily'],
    links: {
      live: 'https://applyflow-hazel.vercel.app',
      github: 'https://github.com/Fabulousdesignr/Applyflow',
    },
    hero: {
      image: '/images/Applyflow Dashboard.png',
      alt: 'ApplyFlow dashboard showing pipeline metrics, application stages and follow-up reminders',
      caption: 'The pipeline dashboard. Every number comes from the user\'s own application data.',
    },
    quickFacts: [
      { label: 'Product type', value: 'AI job search CRM' },
      { label: 'My role', value: 'Design and build' },
      { label: 'AI surface', value: 'Discovery, parsing, ranking' },
      { label: 'Deployment', value: 'Vercel + Render' },
    ],
    overview: {
      paragraphs: [
        'ApplyFlow started with a familiar problem. Job opportunities were spread across spreadsheets, browser tabs, bookmarks and notes. The important details were somewhere in the middle, and follow-ups were easy to miss.',
        'The product brings discovery, evaluation and application tracking into one workspace. A user can run a filtered search, save ranked opportunities, import a document containing job details, then move each role through a visible pipeline.',
        'The live build uses React and Vite on the front end, Supabase for authentication and cloud data, an Express API for model calls, Gemini for extraction and ranking, and Tavily for web search.',
      ],
      highlights: [
        {
          title: 'AI-assisted discovery',
          body: 'Search filters become targeted Tavily queries. Gemini ranks the results and returns structured opportunities.',
        },
        {
          title: 'Document import',
          body: 'Pasted text or an uploaded document can be parsed into a consistent opportunity record instead of manual data entry.',
        },
        {
          title: 'Application tracking',
          body: 'A pipeline dashboard, editable spreadsheet and detail panel keep the whole search in one place.',
        },
      ],
    },
    problem: {
      paragraphs: [
        'Most job search tools solve one part of the process. Job boards handle discovery but not follow-up. Spreadsheets handle tracking but not research. Notes handle context but not deadlines.',
        'The result is a fragmented workflow. People spend time re-reading roles they have already considered, lose track of where they applied, and struggle to decide which opportunities deserve attention.',
        'ApplyFlow treats the search as a pipeline. The interface needs to show what is new, what is worth pursuing and what needs a follow-up next.',
      ],
      opportunity: {
        title: 'The opportunity',
        body: 'Use AI where it reduces reading and sorting, but keep the visible compatibility score deterministic and explainable. The model should help find and structure information. It should not be the only reason a role is ranked.',
      },
    },
    objectives: [
      {
        title: 'One workspace',
        body: 'Replace the spreadsheet, bookmarks and notes with a single place to review and manage opportunities.',
      },
      {
        title: 'Reduce research effort',
        body: 'Turn broad filters into relevant searches and return a short, structured list instead of raw links.',
      },
      {
        title: 'Make imported data useful',
        body: 'Convert unstructured job text into fields the tracker can sort, filter and score.',
      },
      {
        title: 'Keep AI operations predictable',
        body: 'Protect provider keys, handle model failures gracefully and separate model output from deterministic scoring.',
      },
    ],
    roleDetails: {
      paragraphs: [
        'I worked across the product end to end. That included the information architecture, the interface design, the React implementation, the Supabase data layer, the Express API and the AI integration.',
        'The project also pushed me into areas that are easy to hand-wave in a design portfolio: environment variables, session handling, row-level security and server boundaries. Building the product forced those decisions to become concrete.',
      ],
      contributions: [
        'Product framing and feature scope',
        'Dashboard, spreadsheet and detail panel design',
        'React and Vite frontend implementation',
        'Supabase authentication and user-scoped data',
        'Express API for AI and search operations',
        'Gemini document parsing and ranking prompts',
        'Tavily search integration and deduplication',
        'Deployment across Vercel and Render',
      ],
    },
    process: [
      {
        title: 'Map the search',
        body: 'I mapped the real job search loop: find a role, read it, judge fit, save it, tailor an application, then follow up.',
      },
      {
        title: 'Design the workspace',
        body: 'The interface was built around three views: a summary dashboard, an editable opportunity table and a detail panel for context.',
      },
      {
        title: 'Build the tracker',
        body: 'The React app needed fast editing, filters, sorting and persistent data without turning every cell into a page navigation.',
      },
      {
        title: 'Add the account layer',
        body: 'Supabase magic link authentication and row-level security made each account\'s opportunities private.',
      },
      {
        title: 'Integrate AI',
        body: 'Discovery and document parsing moved behind an Express API. Gemini returns structured JSON, and the client renders it as editable records.',
      },
      {
        title: 'Harden and ship',
        body: 'I added model fallbacks, request timeouts, loading states and clear failure messages, then deployed the frontend and API separately.',
      },
    ],
    ai: {
      intro:
        'ApplyFlow uses AI in three specific places. The rest of the product is ordinary application logic. Keeping that boundary clear made the system easier to debug and the interface easier to explain.',
      items: [
        {
          name: 'Gemini document parsing',
          role: 'Import',
          body: 'A pasted document is sent to the server, parsed against a defined set of opportunity fields and returned as JSON. New records default to a clear status and priority so they do not appear pre-qualified.',
        },
        {
          name: 'Tavily job discovery',
          role: 'Search',
          body: 'The research engine builds targeted queries from role, location, remote preference and skills, then searches job boards and startup hiring pages.',
        },
        {
          name: 'Gemini ranking',
          role: 'Ranking',
          body: 'Search results are deduplicated, then Gemini ranks the strongest matches and explains why each one fits. The response is constrained to a JSON object the client can consume.',
        },
        {
          name: '100-point compatibility score',
          role: 'Not AI',
          body: 'The score shown in the tracker is a deterministic heuristic. It adds points for remote compatibility, timezone overlap, role level, outreach path and company size. It is recalculated in the app when relevant fields change.',
        },
      ],
      note: {
        title: 'A deliberate separation',
        body: 'The compatibility score is not an LLM output. That distinction matters: a rule-based score can be inspected, explained and tested. AI helps find and structure opportunities, but the visible ranking remains stable.',
      },
    },
    architecture: {
      intro:
        'The architecture is deliberately split into a static frontend, a small API service and managed data. AI provider keys live only on the API service.',
      layers: [
        {
          label: 'Client',
          name: 'React application',
          items: ['Dashboard and pipeline metrics', 'Editable opportunity spreadsheet', 'Research and document import', 'Detail panel and settings'],
        },
        {
          label: 'API',
          name: 'Express service',
          items: ['POST /api/research', 'POST /api/parse-document', 'GET /api/health', 'Provider keys and timeouts'],
        },
        {
          label: 'AI and search',
          name: 'External services',
          items: ['Tavily web search', 'Gemini 2.5 Flash', 'Fallback to 2.0 and 1.5', 'Structured JSON output'],
        },
        {
          label: 'Data',
          name: 'Supabase',
          items: ['Magic link authentication', 'PostgreSQL opportunity records', 'Row-level security', 'User-scoped local cache'],
        },
      ],
      flow: ['Browser', 'Express API', 'Tavily + Gemini', 'Structured JSON', 'Supabase and UI'],
    },
    decisions: [
      {
        title: 'Move AI calls behind a server',
        choice: 'The browser no longer holds Gemini or Tavily credentials. Requests go to the Express API.',
        rationale:
          'A key shipped in a client bundle is public. Moving model calls to the server was the minimum responsible boundary for a product that other people would use.',
      },
      {
        title: 'Ask for JSON, not prose',
        choice: 'Research and parsing prompts require a defined object shape, and Gemini is called with a JSON response MIME type.',
        rationale:
          'The UI needs fields it can sort, filter and edit. Structured output removes a parsing layer and makes failures easier to spot.',
      },
      {
        title: 'Keep the compatibility score deterministic',
        choice: 'A local function calculates the 100-point score from saved fields.',
        rationale:
          'The score needs to be stable while a user edits a row. A heuristic can be explained and tested in a way a fresh model call cannot.',
      },
      {
        title: 'Fall back across models',
        choice: 'Requests try Gemini 2.5 Flash first, then 2.0 and 1.5, with retries and exponential backoff on rate limits and server errors.',
        rationale:
          'Free and low-tier model access is not always available. A fallback chain keeps the feature usable during spikes without hiding the failure from the user.',
      },
      {
        title: 'Scope data to the account',
        choice: 'Supabase row-level security and per-user cache keys separate one account\'s opportunities from another.',
        rationale:
          'A job search contains personal context. User ownership belongs in the data layer, not only in which screen the client chooses to show.',
      },
    ],
    challenges: [
      {
        challenge: 'Gemini rate limits and 503 responses interrupted research.',
        solution:
          'Added retries with exponential backoff, a three-model fallback chain and a clearer overload message instead of a generic failure.',
      },
      {
        challenge: 'Search rankings can invent links or return duplicates.',
        solution:
          'The prompt requires the exact source URL, results are deduplicated before ranking, and the response shape is fixed before it reaches the UI.',
      },
      {
        challenge: 'Long AI requests can make the interface feel broken.',
        solution:
          'Moved the work to the API, added explicit loading and error states, and set request timeouts so the client always resolves to a visible outcome.',
      },
      {
        challenge: 'Authentication sessions were fragile across reloads.',
        solution:
          'Stabilised Supabase session restore and PKCE persistence, then cleared user-scoped caches on sign out.',
      },
    ],
    screenshots: [
      {
        src: '/images/Applyflow Dashboard.png',
        alt: 'ApplyFlow dashboard with pipeline metrics and application stage counts',
        caption: 'Dashboard: pipeline totals, active interviews and upcoming follow-ups.',
      },
      {
        src: '/images/Applyflow AI Research.png',
        alt: 'ApplyFlow research engine with filters for role, region and remote preference',
        caption: 'Research engine: filters become targeted searches, then a ranked shortlist.',
      },
      {
        src: '/images/Applyflow Job Screen.png',
        alt: 'ApplyFlow opportunity detail panel with company information and application notes',
        caption: 'Opportunity detail: context, fit notes and application planning in one panel.',
      },
      {
        src: '/images/Applyflow Auth.png',
        alt: 'ApplyFlow sign in screen using a Supabase email magic link',
        caption: 'Authentication: email magic links backed by Supabase.',
      },
    ],
    code: {
      language: 'js',
      label: 'server/index.js',
      caption: 'The API tries the newest model first and backs off on rate limits and server errors.',
      code: `const GEMINI_MODELS = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-1.5-flash'];
const RETRYABLE_STATUS = new Set([429, 500, 503, 529]);
const MAX_ATTEMPTS_PER_MODEL = 3;`,
    },
    demo: {
      url: 'https://applyflow-hazel.vercel.app',
      label: 'Open ApplyFlow',
      note: 'The live app uses Supabase magic link authentication. You can request a sign-in link with your email and explore the workspace with your own data.',
    },
    repository: {
      url: 'https://github.com/Fabulousdesignr/Applyflow',
      public: true,
      note: 'Public repository. The README documents setup, environment variables and the RLS migration.',
    },
    lessons: [
      {
        title: 'AI belongs behind a server boundary',
        body: 'The most important architectural decision was not which model to use. It was keeping provider credentials out of the browser.',
      },
      {
        title: 'Structured output is a product requirement',
        body: 'A useful AI feature returns data the interface can act on. Pretty prose is not enough when the next step is sorting, saving and editing.',
      },
      {
        title: 'Explainable scoring builds trust',
        body: 'A deterministic score makes the product feel stable. Users can change a field and see why the ranking moved.',
      },
      {
        title: 'Design and build are one loop',
        body: 'Working in the codebase changed the design. Loading states, failed requests and empty data are product surfaces, not implementation details.',
      },
    ],
    next: 'adsight',
  },

  {
    slug: 'adsight',
    number: '02',
    title: 'AdSight',
    category: 'Generative AI / AI Application',
    tagline:
      'An AI creative review tool that turns a visual ad into structured, actionable feedback.',
    summary:
      'A focused generative AI product that reviews ad creatives with Gemini vision and returns a consistent, plain-language report.',
    status: 'Live',
    year: '2026',
    role: 'Product design, frontend engineering, AI integration',
    stack: ['Next.js', 'React', 'TypeScript', 'Genkit', 'Gemini', 'Vercel'],
    links: {
      live: 'https://adsight-murex.vercel.app/',
      github: 'https://github.com/Fabulousdesignr/Adsight',
    },
    hero: {
      image: '/images/Adsight 1.png',
      alt: 'AdSight landing page with an upload area for advertising creatives',
      caption: 'The landing and upload flow. One clear action: add an ad and review it.',
    },
    quickFacts: [
      { label: 'Product type', value: 'Generative AI review tool' },
      { label: 'My role', value: 'Design and build' },
      { label: 'AI surface', value: 'Gemini vision analysis' },
      { label: 'Deployment', value: 'Vercel' },
    ],
    overview: {
      paragraphs: [
        'AdSight is a focused review tool for visual advertising. A user uploads a flyer, poster or social creative and receives a structured assessment of what the ad says, who it may appeal to, what works and what could improve.',
        'The scope is intentionally small. There are no accounts, saved reports or campaign dashboards. The value is a fast second opinion in plain language, without requiring the user to know how to prompt a model.',
        'The product uses Next.js 15 and React 19 on the front end, a Genkit flow with Google AI, Gemini 2.5 Flash for image understanding, and a Zod schema that keeps the response consistent.',
      ],
      highlights: [
        {
          title: 'Image-first input',
          body: 'The review starts from the creative itself, not a written brief. The model sees the same ad the customer sees.',
        },
        {
          title: 'Structured report',
          body: 'Every analysis returns the same seven fields, so the results screen can present a predictable report.',
        },
        {
          title: 'Plain language',
          body: 'The prompt explicitly avoids marketing jargon and asks for short, practical advice a business owner can act on.',
        },
      ],
    },
    problem: {
      paragraphs: [
        'Creating an advertisement is easier than judging whether it communicates. A business owner can publish a flyer or social post without a clear answer to basic questions: what is this saying, who is it for, and would anyone act on it?',
        'Agency review and formal testing can provide that answer, but they are slow and expensive for small teams. A general chat model can help, yet the quality depends on how well the user prompts it, and the format changes every time.',
        'AdSight sits between those options. It gives the user a guided review with a stable structure and language that does not assume marketing expertise.',
      ],
      opportunity: {
        title: 'The opportunity',
        body: 'Treat an ad review as a product workflow rather than a chat. The user supplies one input, the system applies one well-designed prompt, and the interface returns a report with a consistent shape.',
      },
    },
    objectives: [
      {
        title: 'Remove the blank prompt',
        body: 'A user should not need to know what to ask or how to phrase it. The product owns the review structure.',
      },
      {
        title: 'Make feedback actionable',
        body: 'Every section should say something specific about the uploaded creative, not generic marketing advice.',
      },
      {
        title: 'Keep output consistent',
        body: 'Use a schema and a clear prompt so the same fields and tone appear on every review.',
      },
      {
        title: 'Ship a narrow product',
        body: 'Resist scope creep. Deliver one review flow well before adding accounts, history or batch tools.',
      },
    ],
    roleDetails: {
      paragraphs: [
        'I built AdSight independently, from the product concept and interface design through the Genkit flow, prompt, schema and deployment.',
        'The most interesting part was not the upload screen. It was designing the instruction and output contract so the model produced feedback that felt specific, readable and safe to show to a non-marketer.',
      ],
      contributions: [
        'Product concept and scope',
        'Landing page and upload experience',
        'Analysis, processing and results interface',
        'Next.js and TypeScript implementation',
        'Genkit flow with Gemini 2.5 Flash',
        'Prompt and output schema design',
        'Vercel deployment and production testing',
      ],
    },
    process: [
      {
        title: 'Define the review',
        body: 'I listed the questions a business owner actually asks about an ad and turned them into a fixed report structure.',
      },
      {
        title: 'Design the flow',
        body: 'The product has three states: landing and upload, analysis in progress, then a readable results report.',
      },
      {
        title: 'Build the interface',
        body: 'Next.js and React handled the state transitions, file preview and the report layout without adding a backend of my own.',
      },
      {
        title: 'Shape the output',
        body: 'A Zod schema defined seven fields. The prompt explained the audience, tone, length and language constraints for each one.',
      },
      {
        title: 'Test with real ads',
        body: 'I reviewed the output against different creative formats and refined the prompt where the feedback became vague or repetitive.',
      },
      {
        title: 'Deploy and observe',
        body: 'The app shipped on Vercel. The processing and error states were treated as part of the product, not afterthoughts.',
      },
    ],
    ai: {
      intro:
        'AdSight is a single-model, single-call product. That simplicity is deliberate. The work is in the prompt, the image input and the schema that makes the output dependable.',
      items: [
        {
          name: 'Gemini 2.5 Flash',
          role: 'Vision',
          body: 'The uploaded creative is converted to a base64 data URI and passed to Gemini through a Genkit flow. The model identifies the ad type, industry, message, audience and effectiveness.',
        },
        {
          name: 'Genkit flow',
          role: 'Orchestration',
          body: 'The Google AI plugin is configured in Genkit, and the analysis is wrapped in a typed flow with a defined input and output schema.',
        },
        {
          name: 'Zod output schema',
          role: 'Contract',
          body: 'Seven required string fields: ad type, industry, overall assessment, message, audience, strengths and improvements. The UI can rely on every field being present.',
        },
        {
          name: 'Prompt constraints',
          role: 'Quality',
          body: 'The prompt sets a friendly expert tone, bans marketing jargon, limits each section and requires specific observations from the creative.',
        },
      ],
      note: {
        title: 'What it does not do',
        body: 'There is no fine-tuning, retrieval or model training here. AdSight is a well-scoped vision call with a carefully designed prompt and output contract. It is a good example of using an existing model to solve one clear problem.',
      },
    },
    architecture: {
      intro:
        'The architecture is intentionally thin. The browser handles the file, Next.js runs the AI flow, and Gemini returns a typed object that maps directly to the report.',
      layers: [
        {
          label: 'Client',
          name: 'Next.js application',
          items: ['Landing and upload', 'Local file preview', 'Processing state', 'Results report'],
        },
        {
          label: 'Server',
          name: 'Genkit flow',
          items: ['FileReader data URI', 'Server action', 'Input validation', 'Error handling'],
        },
        {
          label: 'Model',
          name: 'Gemini 2.5 Flash',
          items: ['Image understanding', 'Ad classification', 'Message and audience review', 'Structured response'],
        },
        {
          label: 'Delivery',
          name: 'Vercel',
          items: ['Next.js build', 'Production deployment', 'No database', 'No stored uploads'],
        },
      ],
      flow: ['Upload creative', 'Base64 data URI', 'Genkit prompt', 'Gemini vision', 'Typed report'],
    },
    decisions: [
      {
        title: 'One structured report instead of chat',
        choice: 'The user cannot ask follow-up questions. They receive a fixed seven-part review.',
        rationale:
          'A defined report is easier to design, read and trust. It also prevents the product from becoming an unbounded chatbot with no clear ending.',
      },
      {
        title: 'Schema first',
        choice: 'The output schema was written before the interface was finished.',
        rationale:
          'The schema is the contract between the model and the UI. Starting there made the results screen and prompt simpler to build.',
      },
      {
        title: 'Plain language as a hard rule',
        choice: 'The prompt explicitly bans jargon such as hierarchy, value proposition and conversion.',
        rationale:
          'The target user is a business owner, not a marketing strategist. A review that needs a glossary has failed at the product level.',
      },
      {
        title: 'No storage in version one',
        choice: 'Images are read in the browser and sent for analysis. The product does not keep a history.',
        rationale:
          'Removing accounts and storage kept the build small and the privacy story simple. Saved reports are a future product decision, not a missing screen.',
      },
      {
        title: 'Treat processing as a product state',
        choice: 'The app moves to a dedicated analysis view and returns to the landing state if the request fails.',
        rationale:
          'A model call takes time. A clear waiting state and a recoverable error prevent the interface from feeling frozen.',
      },
    ],
    challenges: [
      {
        challenge: 'Model feedback drifted into generic marketing advice.',
        solution:
          'The prompt now requires observations tied to the uploaded creative, sets a plain-language vocabulary and limits the length of each section.',
      },
      {
        challenge: 'Free-text answers produced a different report every time.',
        solution:
          'A Zod schema and Genkit output contract enforce seven fields, so the UI and the user always know what to expect.',
      },
      {
        challenge: 'Image analysis is slow enough to feel broken without feedback.',
        solution:
          'Added a dedicated processing state, a clear error path back to the landing page and a preview of the selected creative.',
      },
      {
        challenge: 'It is easy to overclaim what a single vision call can do.',
        solution:
          'Scoped the product to one review and documented future ideas as future work rather than shipping half-built features.',
      },
    ],
    screenshots: [
      {
        src: '/images/Adsight 1.png',
        alt: 'AdSight landing page with upload interface and product explanation',
        caption: 'Landing: a single upload path and a plain explanation of the review.',
      },
      {
        src: '/images/Adsight 2.png',
        alt: 'AdSight analysis report showing ad type, audience, strengths and improvement areas',
        caption: 'Results: the seven-part report, written for a non-marketer.',
      },
    ],
    code: {
      language: 'ts',
      label: 'src/ai/flows/analyze-ad-creative.ts',
      caption: 'The Genkit output schema. Every field is required, so the report never renders a partial shape.',
      code: `const AnalyzeAdCreativeOutputSchema = z.object({
  adType: z.string(),
  industry: z.string(),
  overallAssessment: z.string(),
  whatAdIsSaying: z.string(),
  whoMayAppealTo: z.string(),
  whatWorksWell: z.string(),
  whatCouldImprove: z.string(),
});`,
    },
    demo: {
      url: 'https://adsight-murex.vercel.app/',
      label: 'Open AdSight',
      note: 'Upload a JPG or PNG ad and run a live review. No account is required.',
      video: '/images/Adsight Video.mp4',
    },
    repository: {
      url: 'https://github.com/Fabulousdesignr/Adsight',
      public: true,
      note: 'Public repository with the Next.js app, Genkit flow and prompt.',
    },
    lessons: [
      {
        title: 'Narrow products are easier to make good',
        body: 'One clear review flow created more value than a broad marketing assistant would have. Scope was a design decision.',
      },
      {
        title: 'Prompt design is product design',
        body: 'The tone, vocabulary and length rules are part of the user experience. They deserve the same attention as layout and copy.',
      },
      {
        title: 'Schemas make AI usable',
        body: 'A typed response turns a model into a component the interface can depend on. Free text is harder to design around.',
      },
      {
        title: 'Shipping teaches faster than polishing',
        body: 'Putting the tool in front of real ads exposed weak feedback patterns that were invisible in a design file.',
      },
    ],
    next: 'nuvotrain',
  },

  {
    slug: 'nuvotrain',
    number: '03',
    title: 'Nuvotrain',
    category: 'AI Infrastructure / Full-Stack Product',
    tagline:
      'An invitation-only workspace for evaluating what AI models generate, with rules enforced in the database.',
    summary:
      'A task-based evaluation platform with six model responses per task, quality and aesthetics scoring, deadlines, contributor access and admin operations.',
    status: 'Live  /  invitation-only beta',
    year: '2026',
    role: 'Product design, database design, frontend architecture',
    stack: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'RLS', 'Edge Functions'],
    links: {
      live: 'https://nuvotrain.vercel.app',
    },
    hero: {
      image: '/images/nuvotrain/workspace.png',
      alt: 'Nuvotrain contributor workspace with evaluation tasks and progress summaries',
      caption: 'The contributor workspace. Tasks carry a status, a deadline and a clear next action.',
    },
    quickFacts: [
      { label: 'Product type', value: 'AI evaluation platform' },
      { label: 'My role', value: 'Design and build' },
      { label: 'Access', value: 'Five-slot closed beta' },
      { label: 'Deployment', value: 'Vercel + Supabase' },
    ],
    overview: {
      paragraphs: [
        'Nuvotrain is a workspace for evaluating what AI models generate. Administrators publish a task with six responses labelled A to F. Contributors preview each response, score its quality and aesthetics, justify the quality score and submit inside a seven-hour claim window.',
        'The product is infrastructure rather than a generation tool. It does not call an LLM at runtime. It organises the human review layer around AI output and puts the rules in PostgreSQL, where they are harder to bypass.',
        'The live deployment is an invitation-only beta with five contributor slots. The repository supports a local demo mode for trying the workflow without a backend, but that mode is clearly labelled as simulated.',
      ],
      highlights: [
        {
          title: 'Evaluation workflow',
          body: 'Six responses per task, two independent scores, a written justification and optional ranking.',
        },
        {
          title: 'Database-enforced rules',
          body: 'Authentication, deadlines, permissions and submission validation live in Supabase and PostgreSQL.',
        },
        {
          title: 'Admin operations',
          body: 'Assignment, reassignment, rework, ranking corrections, golden examples and invitation management.',
        },
      ],
    },
    problem: {
      paragraphs: [
        'Teams that work with generative models need human judgement. A benchmark score can tell you a model performed well on a test, but not whether its output is usable, coherent or well designed.',
        'The review process is often a spreadsheet and a group chat. That works for a small experiment and breaks down when several evaluators, deadlines, permissions and revisions are involved. There is no reliable record of who claimed what, what changed and why.',
        'Nuvotrain treats evaluation as an operational system. The value is not another model. It is the structure around the people judging the model.',
      ],
      opportunity: {
        title: 'The opportunity',
        body: 'Build a small product where the database is the source of truth. Contributors get a focused task view, admins get real controls, and every important state change is auditable.',
      },
    },
    objectives: [
      {
        title: 'Make evaluation clear',
        body: 'A contributor should always know what to review, when it is due and what is required to submit.',
      },
      {
        title: 'Protect the process',
        body: 'Permissions, deadlines and submission rules should not depend on the client choosing to behave correctly.',
      },
      {
        title: 'Give admins control',
        body: 'Admins need assignment, rework, ranking correction and contributor access without editing the database by hand.',
      },
      {
        title: 'Keep a record',
        body: 'Audit events, archived drafts and ranking revisions preserve what happened without overwriting contributor work.',
      },
      {
        title: 'Support honest testing',
        body: 'A local demo mode should make the product easy to try without pretending browser storage is secure.',
      },
    ],
    roleDetails: {
      paragraphs: [
        'I designed and built Nuvotrain as a full product: information architecture, interface design, React and TypeScript implementation, database schema, row-level security, RPC functions, Edge Functions and deployment.',
        'The project is where design and backend engineering met most directly. The screen could not honestly promise a deadline or a permission unless the database enforced it too.',
      ],
      contributions: [
        'Product model, roles and task lifecycle',
        'Contributor and admin interface design',
        'React 18 and TypeScript frontend architecture',
        'PostgreSQL schema and migrations',
        'Row-level security policies and RPC functions',
        'Invitation and notification Edge Functions',
        'Unit, browser and database testing setup',
        'Vercel and Supabase deployment',
      ],
    },
    process: [
      {
        title: 'Model the roles',
        body: 'Defined contributors, admins and the task states early. That made the screens and the database agree on what was possible.',
      },
      {
        title: 'Design the schema',
        body: 'Tasks, responses, evaluations, scores, claims, profiles, audit events and invitations were modelled before the interface was polished.',
      },
      {
        title: 'Build the contributor flow',
        body: 'Task list, claim window, sandboxed previews, scoring, ranking, justification and submission.',
      },
      {
        title: 'Add admin operations',
        body: 'Task publishing, assignment, reassignment, release, rework, ranking correction, golden examples and notifications.',
      },
      {
        title: 'Secure the beta',
        body: 'Added five invitation-only slots, deactivation and replacement, plus a database trigger that refuses uninvited accounts.',
      },
      {
        title: 'Test and harden',
        body: 'Vitest for logic, Playwright for the browser flow, pgTAP for database rules, type checking and a concurrency test for the slot lock.',
      },
    ],
    ai: {
      intro:
        'Nuvotrain does not generate AI output. It is part of the layer that decides whether AI output is good enough. That distinction shaped the data model and the copy.',
      items: [
        {
          name: 'Task categories',
          role: 'Evaluation',
          body: 'Each task is classified as Website, Game or Data, so similar outputs can be reviewed with the same expectations.',
        },
        {
          name: 'Six responses',
          role: 'Comparison',
          body: 'Every task has exactly six responses, each a URL. The database rejects a task that does not have all six.',
        },
        {
          name: 'Quality and aesthetics',
          role: 'Scoring',
          body: 'Contributors give two independent 1 to 7 scores. A written justification is required, and submitted evaluations become read-only.',
        },
        {
          name: 'Golden examples',
          role: 'Reference',
          body: 'Published reference evaluations show contributors the expected standard. Draft examples stay admin-only.',
        },
        {
          name: 'No-AI policy',
          role: 'Process',
          body: 'Contributors acknowledge the evaluation policy before claiming work. The app records the commitment and says clearly that it cannot detect AI use.',
        },
      ],
      note: {
        title: 'Not a training platform',
        body: 'Nuvotrain organises human evaluation of model output. It does not train, fine-tune or host models. The product language avoids implying otherwise.',
      },
    },
    architecture: {
      intro:
        'The system has three trust boundaries: the React client, Supabase authentication and API access, and PostgreSQL with row-level security. Sensitive writes go through audited functions.',
      layers: [
        {
          label: 'Client',
          name: 'React application',
          items: ['Contributor workspace', 'Sandboxed response previews', 'Admin task hub', 'Demo adapter for local use'],
        },
        {
          label: 'Platform',
          name: 'Supabase',
          items: ['Email OTP authentication', 'PostgREST reads', 'Security definer RPCs', 'Edge Functions'],
        },
        {
          label: 'Data',
          name: 'PostgreSQL',
          items: ['Tasks, responses and evaluations', 'Row-level security', 'Triggers and audit events', 'Invitation slot lock'],
        },
        {
          label: 'Delivery',
          name: 'Vercel and testing',
          items: ['Vite production build', 'Vitest unit tests', 'Playwright smoke test', 'pgTAP database tests'],
        },
      ],
      flow: ['Contributor', 'React client', 'Supabase auth + RPC', 'PostgreSQL rules', 'Audited result'],
    },
    decisions: [
      {
        title: 'Permissions in the database',
        choice: 'Row-level security and security-definer functions enforce access. The UI mirrors the rules but is not trusted.',
        rationale:
          'A hidden button is not a permission model. Contributors should never be able to write another contributor\'s scores by changing a request.',
      },
      {
        title: 'Writes through audited functions',
        choice: 'Tasks, scores, claims and profiles are not directly writable by clients. Every change goes through a function that checks the actor and records the action.',
        rationale:
          'The evaluation needs a defensible history. Centralising writes makes validation and audit consistent.',
      },
      {
        title: 'A real seven-hour deadline',
        choice: 'Claims store a deadline computed from the server clock. Drafts are archived when a claim expires.',
        rationale:
          'Deadlines only matter if they survive a browser reload. Server time prevents a local clock change from extending work.',
      },
      {
        title: 'Five invitation-only slots',
        choice: 'A single settings row is locked before any operation that changes slot usage.',
        rationale:
          'Concurrent invites could otherwise both take the last place. Serialising the operation makes the limit real under load.',
      },
      {
        title: 'Sandboxed previews',
        choice: 'Each response renders in an iframe with scripts and forms allowed, but without same-origin access by default.',
        rationale:
          'Model output is untrusted code. The preview should let the response run without giving it access to the app\'s session or data.',
      },
      {
        title: 'An honest demo mode',
        choice: 'Demo mode mirrors the workflow in local storage and states that anyone can edit it.',
        rationale:
          'A product about evaluation should not blur the line between a demo and a secure deployment.',
      },
    ],
    challenges: [
      {
        challenge: 'Two admins could invite the last contributor at the same time.',
        solution:
          'Every slot-changing operation locks the beta settings row first. A separate concurrency test holds the lock and verifies the second session waits.',
      },
      {
        challenge: 'Email security scanners can consume one-time sign-in links.',
        solution:
          'Invitation and magic link emails open a confirmation page. The token is only verified when the person presses the button.',
      },
      {
        challenge: 'A response site can refuse to load inside an iframe.',
        solution:
          'The preview detects the fallback state and offers an open-in-new-tab action. An embedding failure is never treated as a failed response.',
      },
      {
        challenge: 'Expired work could destroy a contributor\'s draft.',
        solution:
          'Overdue drafts move to an admin-only archive and the task returns to the queue. Nothing is silently deleted.',
      },
      {
        challenge: 'Demo mode could be mistaken for production security.',
        solution:
          'The interface labels demo mode as simulated and explains that browser storage can be edited. Production rules remain in PostgreSQL.',
      },
    ],
    screenshots: [
      {
        src: '/images/nuvotrain/workspace.png',
        alt: 'Nuvotrain contributor workspace with task cards, status and deadlines',
        caption: 'Contributor workspace: available work, active claims and submission status.',
      },
      {
        src: '/images/nuvotrain/task-list.png',
        alt: 'Nuvotrain task list with categories and evaluation states',
        caption: 'Task list: category, state and assignment at a glance.',
      },
      {
        src: '/images/nuvotrain/admin-task.png',
        alt: 'Nuvotrain admin task view with assignment controls and evaluation details',
        caption: 'Admin task hub: assignment, deadlines and evaluation history.',
      },
      {
        src: '/images/nuvotrain/beta-access.png',
        alt: 'Nuvotrain beta access screen showing five contributor slots and invitation controls',
        caption: 'Beta access: five contributor slots, invitations and deactivation.',
      },
      {
        src: '/images/nuvotrain/golden-examples.png',
        alt: 'Nuvotrain golden examples screen showing published reference evaluations',
        caption: 'Golden examples: published references that set the expected standard.',
      },
      {
        src: '/images/nuvotrain/mobile-workspace.png',
        alt: 'Nuvotrain workspace on a mobile screen',
        caption: 'Mobile workspace: the task view remains usable on a small screen.',
      },
    ],
    code: {
      language: 'sql',
      label: 'supabase/migrations/202610270001_initial_schema.sql',
      caption: 'Claiming a task is a single conditional update, so concurrent claims cannot both win.',
      code: `update public.tasks
   set status = 'in_progress', assigned_user = auth.uid(), updated_at = now()
 where id = task_id and status = 'available' and assigned_user is null;
get diagnostics affected = row_count;
return affected = 1;`,
    },
    demo: {
      url: 'https://nuvotrain.vercel.app',
      label: 'Open Nuvotrain',
      note: 'The live deployment is an invitation-only beta. The public site shows the sign-in flow. Contributor access is managed by an administrator, and there is no public waitlist.',
    },
    repository: {
      public: false,
      note: 'The source repository is private. The database schema, tests and product behaviour are described here because the live beta is available for review.',
    },
    lessons: [
      {
        title: 'Database rules are product rules',
        body: 'A deadline or permission is only real when the server enforces it. The interface should explain the rule, not implement it alone.',
      },
      {
        title: 'Concurrency is a design concern',
        body: 'A five-slot beta sounds simple until two invitations arrive together. The lock and the test are part of the feature.',
      },
      {
        title: 'Untrusted output needs a boundary',
        body: 'Sandboxing model responses is not a detail. It is the difference between a preview and a security problem.',
      },
      {
        title: 'Testing changed how I build',
        body: 'Database tests and a browser smoke test made it possible to change rules without relying on memory or a manual checklist.',
      },
    ],
    next: 'applyflow',
  },
];

export function getCaseStudy(slug) {
  return aiCaseStudies.find((study) => study.slug === slug);
}

export function getNextCaseStudy(slug) {
  const current = getCaseStudy(slug);
  if (!current) return null;
  return getCaseStudy(current.next) || null;
}

export const caseStudySections = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem and opportunity' },
  { id: 'objectives', label: 'Product objectives' },
  { id: 'role', label: 'Role and contributions' },
  { id: 'process', label: 'Process' },
  { id: 'ai', label: 'AI technologies' },
  { id: 'architecture', label: 'Architecture' },
  { id: 'decisions', label: 'Implementation decisions' },
  { id: 'challenges', label: 'Challenges and solutions' },
  { id: 'screenshots', label: 'Product screenshots' },
  { id: 'demo', label: 'Live demonstration' },
  { id: 'repository', label: 'Repository' },
  { id: 'lessons', label: 'Lessons learned' },
];

