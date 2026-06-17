// Single source of truth for services — consumed by the homepage bento
// (Services.astro) and the per-service detail pages (services/[slug].astro).

export interface ServiceCapability {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  /** Short summary used on the homepage card and as the meta description. */
  description: string;
  /** Inline SVG markup for the service icon. */
  icon: string;
  /** Hero illustration shown on the detail page (swap for a photo any time). */
  image: string;
  /** Alt text for the hero illustration. */
  imageAlt: string;
  /** Bento layout hints (homepage only). */
  featured?: boolean;
  span: string;
  /** Tech chips shown on featured cards. */
  tags?: string[];

  // ---- Detail page content ----
  /** One-line value proposition for the detail hero. */
  lead: string;
  /** Intro paragraphs. */
  overview: string[];
  /** What's included — the core of the offering. */
  capabilities: ServiceCapability[];
  /** Concrete things the client walks away with. */
  deliverables: string[];
  /** Technologies / tools we reach for. */
  tech: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    description:
      "Responsive, fast, accessible web applications built on modern frameworks and engineered to scale with your business.",
    featured: true,
    span: "span 7",
    tags: ["React", "Next.js", "Astro"],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M2 8h20" stroke="currentColor" stroke-width="1.8"/>
      <path d="M8 12l-2 2 2 2M14 12l2 2-2 2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
    image: "/assets/services/web-development.svg",
    imageAlt: "Illustration of a web app interface with layout blocks and code brackets.",
    lead: "Web apps that load fast, scale cleanly, and feel effortless to use.",
    overview: [
      "We design and build production web applications from the ground up — the marketing site, the authenticated product, the API behind it. The result is a codebase your team can own and extend, not a black box.",
      "Every build targets real-world performance: fast first paint, smooth interaction, and accessibility baked in rather than bolted on.",
    ],
    capabilities: [
      {
        title: "Modern front-end",
        description:
          "Component-driven UIs in React, Next.js, or Astro — typed end to end and tuned for Core Web Vitals.",
      },
      {
        title: "Robust back-end & APIs",
        description:
          "Reliable services, clean data models, and well-documented APIs that hold up under load.",
      },
      {
        title: "Performance engineering",
        description:
          "Image, font, and bundle optimization, edge rendering, and caching strategy for sub-second loads.",
      },
      {
        title: "Accessibility & SEO",
        description:
          "Semantic markup, keyboard support, and search-ready structure so everyone can reach your product.",
      },
    ],
    deliverables: [
      "Production-ready application",
      "CI/CD pipeline & environments",
      "Component library & documentation",
      "Knowledge-transfer & handoff",
    ],
    tech: ["React", "Next.js", "Astro", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    slug: "mobile-apps",
    title: "Mobile Apps",
    description:
      "Native-quality iOS and Android experiences from a single, maintainable codebase.",
    span: "span 5",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="currentColor" stroke-width="1.8"/>
      <path d="M10 18h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,
    image: "/assets/images/mobileapps.jpg",
    imageAlt: "Mobile app being used on a smartphone.",
    lead: "One codebase. Native-quality apps on both iOS and Android.",
    overview: [
      "We ship mobile products that feel at home on each platform while sharing a single, maintainable codebase — so you move faster and spend less keeping two apps in sync.",
      "From first prototype to App Store and Play Store release, we handle the full lifecycle including the parts teams forget: offline behavior, push, and store review.",
    ],
    capabilities: [
      {
        title: "Cross-platform builds",
        description:
          "React Native and Expo give you iOS and Android from one codebase without sacrificing native feel.",
      },
      {
        title: "Native performance",
        description:
          "Smooth 60fps interactions, native modules where it counts, and a launch experience that feels instant.",
      },
      {
        title: "Offline-first",
        description:
          "Local-first data and graceful sync so the app keeps working when the network doesn't.",
      },
      {
        title: "Store delivery",
        description:
          "We manage builds, signing, and submission through App Store and Google Play review.",
      },
    ],
    deliverables: [
      "Published iOS & Android apps",
      "Over-the-air update channel",
      "Crash & analytics instrumentation",
      "Store assets & release checklist",
    ],
    tech: ["React Native", "Expo", "Swift", "Kotlin", "TypeScript"],
  },
  {
    slug: "ui-ux-design",
    title: "UI / UX Design",
    description:
      "Interfaces that feel obvious — research-driven flows, polished visuals, and design systems built to last.",
    span: "span 4",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M3 9h18M8 21h8M12 17v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,
    image: "/assets/services/ui-ux-design.svg",
    imageAlt: "Illustration of a design canvas with shapes, a cursor, and color swatches.",
    lead: "Design that makes the right thing the obvious thing.",
    overview: [
      "We turn fuzzy ideas into clear, usable products. That means understanding your users, mapping the flows that matter, and designing interfaces people don't have to think about.",
      "We deliver more than screens — we leave you with a design system your team can build on without us in the room.",
    ],
    capabilities: [
      {
        title: "Product & UX research",
        description:
          "User interviews, flows, and journey mapping to ground decisions in evidence, not opinion.",
      },
      {
        title: "Wireframes & prototypes",
        description:
          "Clickable prototypes that test the experience before a line of production code is written.",
      },
      {
        title: "Visual design",
        description:
          "Polished, on-brand interfaces with deliberate type, color, and spacing systems.",
      },
      {
        title: "Design systems",
        description:
          "Reusable components and tokens that keep every screen consistent as you grow.",
      },
    ],
    deliverables: [
      "Research findings & user flows",
      "Interactive Figma prototype",
      "High-fidelity UI screens",
      "Documented design system",
    ],
    tech: ["Figma", "Prototyping", "Design tokens", "User research"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Reach the right audience with measurable campaigns and conversion-focused growth strategy.",
    span: "span 4",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 11l16-6-4 16-3.5-6L3 11z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>
    </svg>`,
    image: "/assets/services/digital-marketing.svg",
    imageAlt: "Illustration of a rising bar chart with an upward trend arrow.",
    lead: "Growth you can measure — not vanity metrics.",
    overview: [
      "We help you reach the right people and turn attention into action. Every campaign is built around a clear goal and instrumented so you can see exactly what's working.",
      "No spray-and-pray. We start from your funnel, find the highest-leverage channels, and double down on what converts.",
    ],
    capabilities: [
      {
        title: "Growth strategy",
        description:
          "Channel selection, positioning, and a roadmap tied to revenue, not impressions.",
      },
      {
        title: "Search & content (SEO)",
        description:
          "Technical SEO and content that earns durable, compounding organic traffic.",
      },
      {
        title: "Paid campaigns",
        description:
          "Targeted acquisition across search and social with disciplined budget management.",
      },
      {
        title: "Analytics & attribution",
        description:
          "Clean tracking and dashboards so you know which spend actually moves the needle.",
      },
    ],
    deliverables: [
      "Growth strategy & channel plan",
      "Campaign setup & creative",
      "Conversion tracking & dashboard",
      "Monthly performance reporting",
    ],
    tech: ["GA4", "SEO", "Paid Ads", "Attribution"],
  },
  {
    slug: "consulting",
    title: "Consulting",
    description:
      "Expert guidance on architecture, technology choices, and the roadmap to ship with confidence.",
    span: "span 4",
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="7" r="3.2" stroke="currentColor" stroke-width="1.8"/>
      <path d="M5 20c0-3.3 3.1-5.5 7-5.5s7 2.2 7 5.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,
    image: "/assets/services/consulting.svg",
    imageAlt: "Illustration of a lightbulb connected to nodes, signalling strategy.",
    lead: "A senior team in your corner when the decisions are hard.",
    overview: [
      "Sometimes you don't need a build — you need clarity. We help teams make confident calls on architecture, tooling, and direction, and de-risk the work before it starts.",
      "Engage us for a focused review or embed us alongside your team to raise the bar on how you ship.",
    ],
    capabilities: [
      {
        title: "Architecture review",
        description:
          "An honest assessment of your system with prioritized, actionable recommendations.",
      },
      {
        title: "Tech strategy & roadmap",
        description:
          "Technology choices and a sequencing plan aligned to your business goals.",
      },
      {
        title: "Team augmentation",
        description:
          "Senior engineers who plug into your team and lift delivery from the inside.",
      },
      {
        title: "Code & security audits",
        description:
          "Deep reviews that surface risk, tech debt, and the fixes that matter most.",
      },
    ],
    deliverables: [
      "Findings & recommendations report",
      "Prioritized action roadmap",
      "Architecture decision records",
      "Follow-up advisory sessions",
    ],
    tech: ["Architecture", "DevOps", "Cloud", "Security"],
  },
  {
    slug: "data-analytics",
    title: "Data & Analytics",
    description:
      "Turn raw data into decisions with dashboards, pipelines, and insights your whole team can act on.",
    featured: true,
    span: "span 7",
    tags: ["Pipelines", "BI", "ML"],
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
    </svg>`,
    image: "/assets/services/data-analytics.svg",
    imageAlt: "Illustration of an analytics dashboard with a donut chart, line graph, and bars.",
    lead: "From scattered data to decisions the whole team can act on.",
    overview: [
      "Most teams are drowning in data they can't use. We build the pipelines, warehouses, and dashboards that turn that raw exhaust into clear, trustworthy answers.",
      "When you're ready to go further, we apply machine learning to forecast, segment, and surface what you'd otherwise miss.",
    ],
    capabilities: [
      {
        title: "Data pipelines",
        description:
          "Reliable ingestion and transformation that keep your data fresh and consistent.",
      },
      {
        title: "Dashboards & BI",
        description:
          "Self-serve dashboards that give every team the numbers they need at a glance.",
      },
      {
        title: "Warehousing",
        description:
          "A single, well-modeled source of truth your tools and teams can all build on.",
      },
      {
        title: "ML & prediction",
        description:
          "Forecasting, segmentation, and predictive models that turn insight into foresight.",
      },
    ],
    deliverables: [
      "Data pipeline & warehouse",
      "Live BI dashboards",
      "Data model documentation",
      "ML models where they pay off",
    ],
    tech: ["Python", "SQL", "BI", "Pipelines", "ML"],
  },
];

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
