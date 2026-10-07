import {
  BrainCircuit,
  Cloud,
  LayoutDashboard,
  PenTool,
  Smartphone,
  Terminal,
  type LucideIcon,
} from "lucide-react";

import { COMPANY_STATS } from "../../constants/companyStats";
import { INDUSTRY_OVERVIEW } from "../../constants/industryOverview";
import { ROUTES } from "../../constants/routes";
import type { RoutePath } from "../../constants/routes";

interface AboutCta {
  label: string;
  path: RoutePath;
}

/* ------------------------------------------------------------------ */
/* Section 01 — Hero                                                   */
/* ------------------------------------------------------------------ */

export interface AboutHeroContent {
  eyebrow: string;
  headingPrefix: string;
  /** Rendered in the brand accent colour. */
  headingHighlight: string;
  headingSuffix: string;
  description: string;
  primaryCta: AboutCta;
  secondaryCta: AboutCta;
}

export const ABOUT_HERO: AboutHeroContent = {
  eyebrow: "About SmartMatrix",
  headingPrefix: "We build ",
  headingHighlight: "technology",
  headingSuffix: " that moves businesses forward.",
  description:
    "SmartMatrix Digital Services helps businesses turn ideas, challenges, and opportunities into reliable digital products built for growth.",
  primaryCta: { label: "Let's Build Together", path: ROUTES.CONTACT },
  secondaryCta: { label: "Explore Our Services", path: ROUTES.SERVICES },
};

/** One stage of the product journey shown beside the hero. */
export const ABOUT_HERO_JOURNEY: readonly string[] = [
  "Idea",
  "Strategy",
  "Design",
  "Build",
  "Grow",
];

/* ------------------------------------------------------------------ */
/* Section 02 — Who we are                                             */
/* ------------------------------------------------------------------ */

export interface AboutWhoWeAreContent {
  label: string;
  heading: string;
  paragraphs: string[];
}

export const ABOUT_WHO_WE_ARE: AboutWhoWeAreContent = {
  label: "Who We Are",
  heading: "Technology should solve problems, not create more of them.",
  paragraphs: [
    "At SmartMatrix Digital Services, we work with businesses to turn ideas and complex requirements into practical digital solutions.",
    "We bring together business understanding, product thinking, design, engineering, and modern technology to create software that is reliable today and ready for tomorrow.",
    "From the first conversation to deployment and beyond, we work closely with our clients to make technology simpler, more useful, and more valuable.",
  ],
};

/** Stages of the business-to-impact flow shown beside "Who We Are". */
export const ABOUT_IMPACT_FLOW: readonly string[] = [
  "Business",
  "Challenge",
  "Solution",
  "Impact",
];

/* ------------------------------------------------------------------ */
/* Section 03 — Capabilities                                           */
/* ------------------------------------------------------------------ */

export const ABOUT_CAPABILITIES_HEADING = "From idea to impact.";
export const ABOUT_CAPABILITIES_SUBTITLE =
  "We combine strategy, design, engineering, and emerging technology to build digital products that solve real business problems.";

export interface AboutCapability {
  index: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ABOUT_CAPABILITIES: AboutCapability[] = [
  {
    index: "01",
    title: "Digital Products",
    description:
      "Web platforms, portals, dashboards, and business applications designed around real user needs.",
    icon: LayoutDashboard,
  },
  {
    index: "02",
    title: "Custom Software",
    description:
      "Purpose-built software that fits the way your business actually operates.",
    icon: Terminal,
  },
  {
    index: "03",
    title: "Mobile Applications",
    description:
      "Modern mobile experiences designed for usability, performance, and scale.",
    icon: Smartphone,
  },
  {
    index: "04",
    title: "AI & Intelligent Solutions",
    description:
      "AI-powered automation and intelligent features that create meaningful business value.",
    icon: BrainCircuit,
  },
  {
    index: "05",
    title: "Cloud & Digital Infrastructure",
    description:
      "Reliable cloud solutions and infrastructure designed for performance, security, and growth.",
    icon: Cloud,
  },
  {
    index: "06",
    title: "Product Design",
    description:
      "User-focused interfaces and experiences that make complex products simple to use.",
    icon: PenTool,
  },
];

/* ------------------------------------------------------------------ */
/* Section 04 — Approach                                                */
/* ------------------------------------------------------------------ */

export const ABOUT_APPROACH_HEADING = "How we turn ideas into outcomes.";

export interface ApproachStep {
  index: string;
  title: string;
  description: string;
}

export const ABOUT_APPROACH_STEPS: ApproachStep[] = [
  {
    index: "01",
    title: "Understand",
    description: "We learn your business, users, goals, and challenges.",
  },
  {
    index: "02",
    title: "Define",
    description:
      "We turn requirements into a clear product and technology direction.",
  },
  {
    index: "03",
    title: "Design",
    description: "We create intuitive experiences around real user needs.",
  },
  {
    index: "04",
    title: "Build",
    description: "We engineer reliable, scalable, production-ready solutions.",
  },
  {
    index: "05",
    title: "Evolve",
    description:
      "We support, improve, and scale the product as your business grows.",
  },
];

/* ------------------------------------------------------------------ */
/* Section 05 — What we believe                                        */
/* ------------------------------------------------------------------ */

export const ABOUT_BELIEFS_HEADING = "Built around your business.";
export const ABOUT_BELIEFS_SUBTITLE =
  "Technology is only valuable when it creates a meaningful business outcome. That's why our approach starts with understanding the problem before choosing the solution.";

export interface BeliefPrinciple {
  index: string;
  title: string;
  description: string;
}

export const ABOUT_BELIEFS: BeliefPrinciple[] = [
  {
    index: "01",
    title: "Business Understanding",
    description:
      "We start with your objectives, users, processes, and challenges.",
  },
  {
    index: "02",
    title: "Practical Technology",
    description:
      "We choose technology based on what your product actually needs.",
  },
  {
    index: "03",
    title: "Quality by Design",
    description:
      "We build with usability, performance, security, and maintainability in mind.",
  },
  {
    index: "04",
    title: "Partnership Beyond Delivery",
    description:
      "We remain available to help your product evolve after launch.",
  },
];

/* ------------------------------------------------------------------ */
/* Section 06 — Industries (shared with the homepage)                  */
/* ------------------------------------------------------------------ */

export const ABOUT_INDUSTRIES_HEADING = "Technology across industries.";
export const ABOUT_INDUSTRIES_SUBTITLE =
  "We build digital solutions for businesses with different challenges, processes, and ambitions.";

export const ABOUT_INDUSTRIES = INDUSTRY_OVERVIEW;

/* ------------------------------------------------------------------ */
/* Section 07 — Experience / trust (shared with the homepage)          */
/* ------------------------------------------------------------------ */

export const ABOUT_STATS = COMPANY_STATS;

/* ------------------------------------------------------------------ */
/* Section 08 — Final CTA                                              */
/* ------------------------------------------------------------------ */

export interface AboutFinalCtaContent {
  heading: string;
  description: string;
  primaryCta: AboutCta;
  secondaryCta: AboutCta;
}

export const ABOUT_FINAL_CTA: AboutFinalCtaContent = {
  heading: "Have an idea worth building?",
  description:
    "Let's turn your idea into a digital product that creates real business value.",
  primaryCta: { label: "Start a Project", path: ROUTES.CONTACT },
  secondaryCta: { label: "Talk to Us", path: ROUTES.CONTACT },
};
