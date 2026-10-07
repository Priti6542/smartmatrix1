import {
  BrainCircuit,
  Cloud,
  Globe,
  LayoutDashboard,
  PenTool,
  RefreshCw,
  Rocket,
  Smartphone,
  Terminal,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { INDUSTRY_OVERVIEW } from "../../constants/industryOverview";
import { ROUTES } from "../../constants/routes";
import type { RoutePath } from "../../constants/routes";

interface ServicesCta {
  label: string;
  path: RoutePath;
}

/* ------------------------------------------------------------------ */
/* Section 01 — Hero                                                   */
/* ------------------------------------------------------------------ */

export interface ServicesHeroContent {
  eyebrow: string;
  headingPrefix: string;
  /** Rendered in the brand accent colour. */
  headingHighlight: string;
  headingSuffix: string;
  description: string;
  primaryCta: ServicesCta;
  secondaryCta: ServicesCta;
}

export const SERVICES_HERO: ServicesHeroContent = {
  eyebrow: "Our Services",
  headingPrefix: "Technology solutions built around your ",
  headingHighlight: "business",
  headingSuffix: ".",
  description:
    "From product strategy and design to software engineering, AI, cloud, and ongoing support, we help businesses build digital solutions that solve real problems and create lasting value.",
  primaryCta: { label: "Start a Project", path: ROUTES.CONTACT },
  secondaryCta: { label: "Talk to Our Team", path: ROUTES.CONTACT },
};

/* ------------------------------------------------------------------ */
/* Section 02 — Overview                                               */
/* ------------------------------------------------------------------ */

export interface ServicesOverviewContent {
  label: string;
  heading: string;
  description: string;
  keywords: string[];
}

export const SERVICES_OVERVIEW: ServicesOverviewContent = {
  label: "What We Do",
  heading: "From ideas to digital products.",
  description:
    "We bring together strategy, design, engineering, and modern technology to create digital solutions that support real business goals.",
  keywords: [
    "Strategy",
    "Design",
    "Engineering",
    "AI",
    "Cloud",
    "Support",
  ],
};

/* ------------------------------------------------------------------ */
/* Section 03 — Core services                                          */
/* ------------------------------------------------------------------ */

/**
 * Which abstract composition `ServiceVisual` renders for a given service.
 * See `ServiceVisual.tsx` for what each variant looks like.
 */
export type ServiceVisualVariant =
  | "browser"
  | "code"
  | "mobile"
  | "layers"
  | "palette"
  | "network"
  | "cloud"
  | "chart";

export interface ProcessStep {
  index: string;
  title: string;
  description: string;
}

/** Content specific to a service's own dedicated detail page at `/services/<slug>`. */
export interface ServiceDetailContent {
  /** Hero heading, more specific than the list's `description`. */
  tagline: string;
  heroDescription: string;
  /** What we build / what we offer. */
  whatWeBuild: string[];
  /** Short, punchy problem statements rendered as cards. */
  problems: string[];
  /** Full capability grid — longer than the list's `points`. */
  capabilities: string[];
  outcomes: string[];
  /** Other `CoreService.slug`s to cross-link at the bottom of the page. */
  relatedSlugs: string[];
  /** `TechnologyGroup.label`s relevant to this service. */
  techGroupLabels: string[];
  /** Overrides the shared `SERVICE_DETAIL_PROCESS` when a service needs its own stages. */
  processOverride?: ProcessStep[];
}

export interface CoreService {
  /** Anchor id used by the "what do you need" selector to scroll here. */
  slug: string;
  index: string;
  title: string;
  /** Small eyebrow grouping this service with related ones, e.g. "Digital Products". */
  category: string;
  description: string;
  icon: LucideIcon;
  /** 3–5 concrete capabilities, shown as bullet points. */
  points: string[];
  visual: ServiceVisualVariant;
  detail: ServiceDetailContent;
}

/**
 * Same eight capabilities as `constants/capabilities.ts` (shared with the
 * navbar and homepage) — titles aligned to this page's copy and extended
 * with capability bullet points, without touching the shared constant any
 * other page reads from.
 */
export const CORE_SERVICES: CoreService[] = [
  {
    slug: "web-development",
    index: "01",
    title: "Web Development",
    category: "Digital Products",
    description:
      "Fast, accessible, production-grade websites and web applications built to scale.",
    icon: LayoutDashboard,
    points: [
      "Business websites",
      "Web applications",
      "Customer portals",
      "Dashboards",
    ],
    visual: "browser",
    detail: {
      tagline: "Web experiences built for real business growth.",
      heroDescription:
        "From high-converting websites to complex web platforms, we design and develop fast, scalable digital experiences aligned with your business goals.",
      whatWeBuild: [
        "Corporate Websites",
        "Business Websites",
        "Marketing Websites",
        "Web Applications",
        "Customer Portals",
        "Admin Dashboards",
        "E-commerce Experiences",
        "Custom Web Platforms",
      ],
      problems: [
        "Outdated websites",
        "Poor user experience",
        "Slow performance",
        "Difficult content management",
        "Poor mobile experience",
        "Disconnected business systems",
      ],
      capabilities: [
        "Responsive Web Development",
        "Frontend Development",
        "Backend Development",
        "API Integration",
        "Authentication",
        "Role-Based Access",
        "Dashboard Development",
        "Performance Optimization",
        "SEO-Friendly Development",
        "Third-Party Integrations",
      ],
      outcomes: [
        "Better customer experience",
        "Stronger digital presence",
        "Faster performance",
        "Scalable architecture",
        "Better conversions",
      ],
      relatedSlugs: ["custom-software", "ui-ux-design", "cloud-solutions"],
      techGroupLabels: ["Cloud & DevOps", "Methodology"],
    },
  },
  {
    slug: "custom-software",
    index: "02",
    title: "Custom Software Development",
    category: "Digital Products",
    description:
      "Purpose-built systems designed around how your business actually operates.",
    icon: Terminal,
    points: [
      "Internal business tools",
      "Workflow automation",
      "Legacy system modernisation",
      "Third-party integrations",
    ],
    visual: "code",
    detail: {
      tagline: "Software built around how your business actually runs.",
      heroDescription:
        "We design and build custom business systems that replace manual processes and disconnected tools with software that fits the way your team works.",
      whatWeBuild: [
        "Business Management Systems",
        "CRM Platforms",
        "ERP Solutions",
        "Internal Business Applications",
        "Operations Dashboards",
        "Workflow Management Systems",
        "SaaS Platforms",
        "Industry-Specific Software",
        "Automation Platforms",
      ],
      problems: [
        "Manual processes",
        "Spreadsheet dependency",
        "Disconnected systems",
        "Operational inefficiency",
        "Poor data visibility",
        "Legacy software",
        "Scalability limitations",
      ],
      capabilities: [
        "Requirement Analysis",
        "System Architecture",
        "Database Design",
        "Frontend Development",
        "Backend Development",
        "API Development",
        "Authentication",
        "Role-Based Access Control",
        "Admin Panels",
        "Integrations",
        "Testing",
        "Deployment & Maintenance",
      ],
      outcomes: [
        "Process automation",
        "Centralized operations",
        "Better visibility",
        "Reduced manual work",
        "Scalable systems",
      ],
      relatedSlugs: ["web-development", "data-analytics", "cloud-solutions"],
      techGroupLabels: ["Enterprise Platforms", "Cloud & DevOps", "Methodology"],
    },
  },
  {
    slug: "mobile-apps",
    index: "03",
    title: "Mobile Application Development",
    category: "Digital Products",
    description:
      "Modern mobile experiences designed for usability, performance, and scale.",
    icon: Smartphone,
    points: [
      "iOS and Android apps",
      "Cross-platform development",
      "App-store release and support",
      "Performance optimisation",
    ],
    visual: "mobile",
    detail: {
      tagline: "Mobile experiences built for everyday use.",
      heroDescription:
        "We design and build mobile applications that are fast, intuitive, and built to support real customer and business workflows across iOS and Android.",
      whatWeBuild: [
        "Customer Mobile Apps",
        "Business Applications",
        "Service Applications",
        "Booking Applications",
        "E-commerce Applications",
        "Internal Business Apps",
        "Utility Applications",
      ],
      problems: [
        "Clunky mobile experiences",
        "Slow app performance",
        "Limited offline support",
        "Disconnected backend systems",
        "Low user engagement",
      ],
      capabilities: [
        "Mobile UI/UX",
        "Cross-Platform Development",
        "API Integration",
        "Authentication",
        "Push Notifications",
        "Payments",
        "Location Services",
        "User Profiles",
        "App Analytics",
        "Backend Integration",
      ],
      outcomes: [
        "Better customer experience",
        "Higher engagement",
        "Faster performance",
        "Scalable backend",
        "Streamlined operations",
      ],
      relatedSlugs: ["product-development", "ui-ux-design", "ai-solutions"],
      techGroupLabels: ["Cloud & DevOps", "Methodology"],
      processOverride: [
        { index: "01", title: "Idea", description: "We clarify the problem the app needs to solve and who it's for." },
        { index: "02", title: "Design", description: "We design the flows and screens around real usage patterns." },
        { index: "03", title: "Development", description: "We build the app across iOS and Android in focused iterations." },
        { index: "04", title: "Testing", description: "We test functionality, performance, and usability before release." },
        { index: "05", title: "Deployment", description: "We handle app-store submission and release." },
        { index: "06", title: "Support", description: "We monitor, maintain, and improve the app after launch." },
      ],
    },
  },
  {
    slug: "product-development",
    index: "04",
    title: "Product Development",
    category: "Digital Products",
    description:
      "End-to-end product teams that take an idea from discovery through to launch.",
    icon: LayoutDashboard,
    points: [
      "Product discovery",
      "MVP definition and build",
      "Iterative delivery",
      "Post-launch roadmap",
    ],
    visual: "layers",
    detail: {
      tagline: "From idea to a complete digital product.",
      heroDescription:
        "We work with founders and teams to take an idea through discovery, design, and engineering into a real, usable digital product.",
      whatWeBuild: [
        "SaaS Products",
        "Digital Platforms",
        "Customer Portals",
        "Business Platforms",
        "Marketplace Concepts",
        "Internal Products",
      ],
      problems: [
        "Unclear product direction",
        "Scope that keeps expanding",
        "No validated MVP",
        "Difficulty prioritising features",
        "Slow time to market",
      ],
      capabilities: [
        "Product Discovery",
        "Requirement Definition",
        "Product Strategy",
        "UX Planning",
        "UI Design",
        "MVP Development",
        "Full Product Development",
        "API & Backend",
        "Testing",
        "Deployment",
        "Product Iteration",
      ],
      outcomes: [
        "Faster time to market",
        "Validated product direction",
        "Scalable foundation",
        "Clear development roadmap",
      ],
      relatedSlugs: ["ui-ux-design", "web-development", "mobile-apps"],
      techGroupLabels: ["Cloud & DevOps", "Methodology"],
    },
  },
  {
    slug: "ui-ux-design",
    index: "05",
    title: "UI/UX & Product Design",
    category: "Digital Foundation",
    description:
      "Interfaces designed for clarity first — research, flows, and polished UI.",
    icon: PenTool,
    points: [
      "User research",
      "Product flows & wireframes",
      "Visual design systems",
      "Usability testing",
    ],
    visual: "palette",
    detail: {
      tagline: "Design that makes complex products easy to use.",
      heroDescription:
        "We design clear, usable interfaces for websites, applications, and platforms — grounded in research and built for real users.",
      whatWeBuild: [
        "Websites",
        "Web Applications",
        "Mobile Applications",
        "SaaS Products",
        "Dashboards",
        "Digital Platforms",
      ],
      problems: [
        "Confusing user flows",
        "Inconsistent design language",
        "Low usability on mobile",
        "Low conversion rates",
        "Disconnected design and development",
      ],
      capabilities: [
        "Usability",
        "Accessibility",
        "Visual Hierarchy",
        "Responsive Design",
        "Design Consistency",
        "Conversion-Focused Experiences",
      ],
      outcomes: [
        "Better usability",
        "Stronger visual consistency",
        "Improved conversions",
        "Faster developer handoff",
      ],
      relatedSlugs: ["product-development", "web-development", "mobile-apps"],
      techGroupLabels: ["Methodology"],
      processOverride: [
        { index: "01", title: "Research", description: "We learn how real users think, behave, and get stuck." },
        { index: "02", title: "User Flows", description: "We map the key journeys the product needs to support." },
        { index: "03", title: "Information Architecture", description: "We structure content and navigation around user goals." },
        { index: "04", title: "Wireframes", description: "We lay out structure and hierarchy before visual design." },
        { index: "05", title: "UI Design", description: "We design polished, on-brand interfaces for every screen." },
        { index: "06", title: "Prototype", description: "We prototype key flows to validate interactions before build." },
        { index: "07", title: "Design System", description: "We document components for a consistent, scalable UI." },
        { index: "08", title: "Developer Handoff", description: "We hand off specs and assets ready for engineering." },
      ],
    },
  },
  {
    slug: "ai-solutions",
    index: "06",
    title: "AI & Intelligent Solutions",
    category: "Intelligent Technology",
    description:
      "Practical machine learning and automation built into real workflows.",
    icon: BrainCircuit,
    points: [
      "Process automation",
      "Predictive analytics",
      "Intelligent features",
      "Model integration",
    ],
    visual: "network",
    detail: {
      tagline: "Practical AI, built into real business workflows.",
      heroDescription:
        "We build AI-powered features and automation that fit into how your business actually operates — not AI for its own sake.",
      whatWeBuild: [
        "AI Assistants",
        "AI-Powered Applications",
        "Intelligent Automation",
        "RAG-Based Solutions",
        "Document Intelligence",
        "AI Search",
        "AI-Powered Workflows",
        "Voice AI Solutions",
        "LLM Integrations",
        "Business Intelligence Automation",
      ],
      problems: [
        "Repetitive manual work",
        "Slow response times",
        "Hard-to-access information",
        "Manual, disconnected operations",
        "Limited use of available data",
      ],
      capabilities: [
        "AI Integration",
        "LLM Integration",
        "RAG Architecture",
        "Knowledge Retrieval",
        "Workflow Automation",
        "AI-Powered Search",
        "Conversational Interfaces",
        "Voice Interfaces",
        "API Integration",
      ],
      outcomes: [
        "Automated repetitive work",
        "Faster response times",
        "Easier access to information",
        "Reduced manual operations",
        "Smarter workflows",
      ],
      relatedSlugs: ["data-analytics", "custom-software", "cloud-solutions"],
      techGroupLabels: ["Data & Analytics", "Cloud & DevOps"],
    },
  },
  {
    slug: "cloud-solutions",
    index: "07",
    title: "Cloud & Digital Solutions",
    category: "Digital Foundation",
    description:
      "Cloud infrastructure, CI/CD, and deployment pipelines that stay reliable at scale.",
    icon: Cloud,
    points: [
      "Cloud migration",
      "Infrastructure design",
      "CI/CD pipelines",
      "Monitoring & reliability",
    ],
    visual: "cloud",
    detail: {
      tagline: "Reliable cloud infrastructure built to scale.",
      heroDescription:
        "We design, deploy, and maintain cloud infrastructure and digital systems built for reliability, performance, and growth.",
      whatWeBuild: [
        "Cloud Application Architecture",
        "Deployment Solutions",
        "Digital Infrastructure",
        "API Infrastructure",
        "Database Infrastructure",
        "Application Monitoring",
      ],
      problems: [
        "Unreliable infrastructure",
        "Manual deployments",
        "Limited visibility into performance",
        "Difficulty scaling under load",
        "Infrastructure that wasn't designed to grow",
      ],
      capabilities: [
        "Cloud Architecture",
        "Deployment Pipelines",
        "Infrastructure as Code",
        "API Infrastructure",
        "Database Infrastructure",
        "Application Monitoring",
        "Security Considerations",
        "Performance Optimization",
      ],
      outcomes: [
        "Improved reliability",
        "Faster deployments",
        "Better visibility",
        "Infrastructure that scales with demand",
      ],
      relatedSlugs: ["custom-software", "data-analytics", "ai-solutions"],
      techGroupLabels: ["Cloud & DevOps"],
    },
  },
  {
    slug: "data-analytics",
    index: "08",
    title: "Data & Analytics",
    category: "Intelligent Technology",
    description:
      "Dashboards and reporting that turn raw data into decisions your team can act on.",
    icon: LayoutDashboard,
    points: [
      "Reporting dashboards",
      "Data pipelines",
      "Business intelligence",
      "Performance analytics",
    ],
    visual: "chart",
    detail: {
      tagline: "Turning raw data into decisions your team can act on.",
      heroDescription:
        "We build dashboards and reporting tools that bring scattered data together into something your team can actually use.",
      whatWeBuild: [
        "Business Dashboards",
        "Analytics Platforms",
        "Reporting Systems",
        "Data Visualization",
        "Operational Reports",
        "Performance Dashboards",
        "Data-Driven Business Tools",
      ],
      problems: [
        "Data spread across disconnected systems",
        "Limited visibility into performance",
        "Manual reporting processes",
        "Difficulty tracking KPIs",
        "Decisions made without reliable data",
      ],
      capabilities: [
        "Data Integration",
        "Dashboard Development",
        "Reporting",
        "Visualization",
        "KPI Tracking",
        "Business Intelligence Interfaces",
      ],
      outcomes: [
        "Better visibility",
        "Faster decisions",
        "Centralized reporting",
        "Data-driven operations",
      ],
      relatedSlugs: ["custom-software", "ai-solutions", "cloud-solutions"],
      techGroupLabels: ["Data & Analytics"],
    },
  },
];

/**
 * Looks up a `CoreService` by its route slug. Used by the dynamic
 * `/services/:slug` detail page and by `RelatedServices`.
 */
export const getServiceBySlug = (slug: string): CoreService | undefined =>
  CORE_SERVICES.find((service) => service.slug === slug);

/* ------------------------------------------------------------------ */
/* Service detail page — shared "Our Approach" process                 */
/* ------------------------------------------------------------------ */

export const SERVICE_DETAIL_PROCESS_HEADING = "Our approach.";

export const SERVICE_DETAIL_PROCESS: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description: "Understand the business, users and requirements.",
  },
  {
    index: "02",
    title: "Define",
    description:
      "Translate requirements into a clear product/system direction.",
  },
  {
    index: "03",
    title: "Design",
    description:
      "Create intuitive user experiences and scalable product structures.",
  },
  {
    index: "04",
    title: "Build",
    description: "Develop the solution using modern engineering practices.",
  },
  {
    index: "05",
    title: "Test",
    description:
      "Validate functionality, usability, performance and reliability.",
  },
  {
    index: "06",
    title: "Launch",
    description: "Deploy and prepare the product for real users.",
  },
  {
    index: "07",
    title: "Evolve",
    description: "Improve and scale the product as the business grows.",
  },
];

/* ------------------------------------------------------------------ */
/* "What are you looking to build?" — interactive need selector         */
/* ------------------------------------------------------------------ */

export interface ServiceNeedOption {
  label: string;
  icon: LucideIcon;
  /** `CoreService.slug` to scroll to when this option is chosen. */
  targetSlug: string;
}

export const SERVICES_NEED_HEADING = "What are you looking to build?";
export const SERVICES_NEED_SUBTITLE =
  "Tell us what you're trying to achieve and explore the capabilities that can help you get there.";

export const SERVICES_NEED_OPTIONS: ServiceNeedOption[] = [
  { label: "I need a website", icon: Globe, targetSlug: "web-development" },
  {
    label: "I need custom software",
    icon: Terminal,
    targetSlug: "custom-software",
  },
  {
    label: "I need a mobile app",
    icon: Smartphone,
    targetSlug: "mobile-apps",
  },
  {
    label: "I want to automate with AI",
    icon: BrainCircuit,
    targetSlug: "ai-solutions",
  },
];

/* ------------------------------------------------------------------ */
/* "Where are you in your digital journey?" — choose your path          */
/* ------------------------------------------------------------------ */

export interface ServicePathOption {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const SERVICES_PATHS_HEADING = "Where are you in your digital journey?";

export const SERVICES_PATHS: ServicePathOption[] = [
  {
    title: "Starting Something New",
    description:
      "You have an idea and need to turn it into a real digital product.",
    icon: Rocket,
  },
  {
    title: "Improving an Existing Product",
    description:
      "You already have a product and want to improve, redesign, or scale it.",
    icon: RefreshCw,
  },
  {
    title: "Transforming Your Business",
    description:
      "You want to automate processes and use technology to improve operations.",
    icon: Zap,
  },
];

/* ------------------------------------------------------------------ */
/* Section 04 — How we work                                             */
/* ------------------------------------------------------------------ */

export const SERVICES_PROCESS_HEADING = "How we work.";
export const SERVICES_PROCESS_SUBTITLE =
  "A clear, repeatable process that keeps every engagement transparent from the first conversation to long-term support.";

export const SERVICES_PROCESS_STEPS: ProcessStep[] = [
  {
    index: "01",
    title: "Discover",
    description:
      "We learn about your business, users, and goals to understand the real problem worth solving.",
  },
  {
    index: "02",
    title: "Plan",
    description:
      "We define scope, priorities, and success metrics so everyone knows what we're building and why.",
  },
  {
    index: "03",
    title: "Design",
    description:
      "We design flows and interfaces that are simple to use and aligned with your brand.",
  },
  {
    index: "04",
    title: "Build",
    description:
      "We engineer the product in focused iterations, with regular check-ins and working software early.",
  },
  {
    index: "05",
    title: "Launch & Grow",
    description:
      "We ship, monitor, and continue improving the product based on real usage and feedback.",
  },
];

/* ------------------------------------------------------------------ */
/* Section 05 — Why our services work                                   */
/* ------------------------------------------------------------------ */

export interface ServicePrinciple {
  title: string;
  description: string;
}

export const SERVICES_PRINCIPLES_HEADING = "Why our services work.";

export const SERVICES_PRINCIPLES: ServicePrinciple[] = [
  {
    title: "Business-first thinking",
    description:
      "Every engagement starts with your business goals, not just a technical spec.",
  },
  {
    title: "Scalable architecture",
    description:
      "We build systems designed to grow with your business, not just meet today's requirements.",
  },
  {
    title: "Modern engineering",
    description:
      "We use current, well-supported tools and practices so your product stays maintainable.",
  },
  {
    title: "Long-term partnership",
    description:
      "We stay involved after launch, supporting and evolving the product as your needs change.",
  },
];

/* ------------------------------------------------------------------ */
/* Section 06 — Technology & capabilities                               */
/* ------------------------------------------------------------------ */

export interface TechnologyGroup {
  label: string;
  technologies: string[];
}

export const SERVICES_TECHNOLOGY_HEADING = "Technology we work with.";
export const SERVICES_TECHNOLOGY_SUBTITLE =
  "A proven toolset we've applied across real client projects — chosen for reliability, not trend.";

/**
 * Pulled from the prose already used to describe real, delivered work in the
 * legacy service catalogue (see `features/services/data.ts` history) rather
 * than an invented generic list.
 */
export const SERVICES_TECHNOLOGY_GROUPS: TechnologyGroup[] = [
  {
    label: "Frontend & UI",
    technologies: ["React", "Vue.js", "Angular", "Figma","React Native", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    label: "Backend & APIs",
    technologies: ["Node.js", "Python", "Java", "REST", "GraphQL"],
  },
  {
    label: "AI & Machine Learning",
    technologies: ["Python", "TensorFlow", "PyTorch"],
  },
  {
    label: "Data & Analytics",
    technologies: ["Power BI", "Tableau", "Python", "R", "SQL", "Google Analytics"],
  },
  {
    label: "Enterprise Platforms",
    technologies: ["Salesforce", "SAP"],
  },
  {
    label: "Cloud & DevOps",
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "Git"],
  },
  {
    label: "Methodology",
    technologies: ["Agile", "Scrum", "Kanban"],
  },
];

/* ------------------------------------------------------------------ */
/* Section 07 — Service outcomes                                        */
/* ------------------------------------------------------------------ */

export interface ServiceOutcome {
  title: string;
  description: string;
}

export const SERVICES_OUTCOMES_HEADING = "What you get.";

export const SERVICES_OUTCOMES: ServiceOutcome[] = [
  {
    title: "Better customer experiences",
    description:
      "Interfaces and products that are intuitive, fast, and built around real user needs.",
  },
  {
    title: "Streamlined operations",
    description:
      "Custom tools and automation that remove manual work and reduce operational friction.",
  },
  {
    title: "Smarter automation",
    description:
      "Practical AI and process automation that save time and support better decisions.",
  },
  {
    title: "Scalable digital products",
    description:
      "Architecture built to support growth, without needing to be rebuilt later.",
  },
];

/* ------------------------------------------------------------------ */
/* Section 08 — Industries                                              */
/* ------------------------------------------------------------------ */

export const SERVICES_INDUSTRIES_HEADING = "Industries we serve.";
export const SERVICES_INDUSTRIES_SUBTITLE =
  "We've built solutions across a wide range of sectors, each with its own workflows and compliance needs.";

export const SERVICES_INDUSTRIES = INDUSTRY_OVERVIEW;

/* ------------------------------------------------------------------ */
/* Section 09 — Final CTA                                               */
/* ------------------------------------------------------------------ */

export interface ServicesFinalCtaContent {
  heading: string;
  description: string;
  primaryCta: ServicesCta;
  secondaryCta: ServicesCta;
}

export const SERVICES_FINAL_CTA: ServicesFinalCtaContent = {
  heading: "Ready to build something better?",
  description:
    "Tell us what you're working on. We'll help you find the right technology approach and the right place to start.",
  primaryCta: { label: "Start a Project", path: ROUTES.CONTACT },
  secondaryCta: { label: "Talk to Our Team", path: ROUTES.CONTACT },
};
