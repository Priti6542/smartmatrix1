// import { COMPANY_STATS } from "../../constants/companyStats";
// import { ROUTES } from "../../constants/routes";
// import type { RoutePath } from "../../constants/routes";
// import { INDUSTRY_OVERVIEW } from "../../constants/industryOverview";
// import type { InfoItem } from "../../types/common";

// interface HomeCta {
//   label: string;
//   path: RoutePath;
// }

// /* ------------------------------------------------------------------ */
// /* Hero                                                                 */
// /* ------------------------------------------------------------------ */

// export interface HomeHeroContent {
//   eyebrow: string;
//   headingPrefix: string;
//   /** Rendered in the brand accent colour. */
//   headingHighlight: string;
//   headingSuffix: string;
//   description: string;
//   primaryCta: HomeCta;
//   secondaryCta: HomeCta;
// }

// export const HOME_HERO: HomeHeroContent = {
//   eyebrow: "Software & IT Consulting · Pune, India",
//   headingPrefix: "Transforming ideas into ",
//   headingHighlight: "intelligent",
//   headingSuffix: " digital solutions.",
//   description:
//     "A technology and digital solutions partner for turning business requirements into reliable, scalable and intelligent software — from first idea to long-term support.",
//   primaryCta: { label: "Contact Us", path: ROUTES.CONTACT },
//   secondaryCta: { label: "Explore Services", path: ROUTES.SERVICES },
// };

// /* ------------------------------------------------------------------ */
// /* Stats                                                                */
// /* ------------------------------------------------------------------ */

// /** @deprecated Import `CompanyStat` from `constants/companyStats` instead. */
// export type HomeStat = (typeof COMPANY_STATS)[number];

// /** The company's headline figures — shared with the About page's trust section. */
// export const HOME_STATS = COMPANY_STATS;

// /* ------------------------------------------------------------------ */
// /* Services (the catalogue itself lives in constants/capabilities.ts,  */
// /* shared with the navbar's mega-menu)                                 */
// /* ------------------------------------------------------------------ */

// export const HOME_SERVICES_HEADING = "Technology built around your business.";
// export const HOME_SERVICES_SUBTITLE =
//   "From product development to intelligent automation, we help businesses design, build and scale digital solutions.";

// /* ------------------------------------------------------------------ */
// /* About teaser                                                        */
// /* ------------------------------------------------------------------ */

// export interface HomeAboutContent {
//   heading: string;
//   description: string;
//   capabilities: string[];
//   cta: HomeCta;
// }

// export const HOME_ABOUT: HomeAboutContent = {
//   heading: "Building technology that moves your business forward.",
//   description:
//     "At SmartMatrix Digital Services, we help businesses turn ideas, challenges, and opportunities into reliable digital solutions. From software and web applications to mobile apps, cloud, AI, and data-driven solutions, we combine technology, design, and business understanding to build products that deliver real value.",
//   capabilities: [
//     "Strategy",
//     "UI/UX",
//     "Software Development",
//     "AI",
//     "Cloud",
//     "Digital Transformation",
//     "Long-term Support",
//   ],
//   cta: { label: "Learn About Us", path: ROUTES.ABOUT },
// };

// /* ------------------------------------------------------------------ */
// /* Industries teaser                                                   */
// /* ------------------------------------------------------------------ */

// /** @deprecated Import `IndustryOverviewItem` from `constants/industryOverview`. */
// export type HomeIndustry = (typeof INDUSTRY_OVERVIEW)[number];

// export const HOME_INDUSTRIES_HEADING =
//   "Solutions designed for real-world industries.";

// /** The industries served — shared with the About page's industries list. */
// export const HOME_INDUSTRIES = INDUSTRY_OVERVIEW;

// /* ------------------------------------------------------------------ */
// /* Why choose us                                                       */
// /* ------------------------------------------------------------------ */

// export const HOME_WHY_HEADING = "Why Smart Matrix Digital Services?";

// export const HOME_WHY_REASONS: InfoItem[] = [
//   {
//     title: "Business-first approach",
//     description: "We start with your business goals, not the technology.",
//   },
//   {
//     title: "Scalable architecture",
//     description: "Systems built to grow with you, not be rebuilt in a year.",
//   },
//   {
//     title: "Modern technology",
//     description: "Current, well-supported tools — not legacy patterns.",
//   },
//   {
//     title: "AI-ready solutions",
//     description: "Software designed to take advantage of automation and AI.",
//   },
//   {
//     title: "Long-term support",
//     description: "We stay involved well past launch day.",
//   },
//   {
//     title: "Transparent collaboration",
//     description: "Clear communication and visibility at every stage.",
//   },
// ];

// /* ------------------------------------------------------------------ */
// /* Final CTA                                                            */
// /* ------------------------------------------------------------------ */

// export interface HomeFinalCtaContent {
//   heading: string;
//   description: string;
//   cta: HomeCta;
// }

// export const HOME_FINAL_CTA: HomeFinalCtaContent = {
//   heading: "Have an idea? Let's build it.",
//   description:
//     "Tell us what you're building and we'll help you turn the idea into a scalable digital product.",
//   cta: { label: "Start a Project", path: ROUTES.CONTACT },
// };




import { COMPANY_STATS } from "../../constants/companyStats";
import { ROUTES } from "../../constants/routes";
import type { RoutePath } from "../../constants/routes";
import { INDUSTRY_OVERVIEW } from "../../constants/industryOverview";
import type { InfoItem } from "../../types/common";

export interface HomeCta {
  label: string;
  path: RoutePath;
}

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

export interface HomeHeroAnimationStep {
  label: string;
  description: string;
}

export interface HomeHeroBrandReveal {
  companyName: string;
  tagline: string;
  services: string[];
}

export interface HomeHeroContent {
  eyebrow: string;
  headingPrefix: string;

  /** Rendered in the brand accent colour. */
  headingHighlight: string;

  headingSuffix: string;
  description: string;
  primaryCta: HomeCta;
  secondaryCta: HomeCta;

  /** Right-side animated technology sequence. */
  animationSteps: HomeHeroAnimationStep[];

  /** Final brand reveal after the technology sequence. */
  brandReveal: HomeHeroBrandReveal;
}

export const HOME_HERO: HomeHeroContent = {
  eyebrow: "Software & IT Consulting · Pune, India",

  headingPrefix: "Transforming ideas into ",

  headingHighlight: "intelligent",

  headingSuffix: " digital solutions.",

  description:
    "A technology and digital solutions partner for turning business requirements into reliable, scalable and intelligent software — from first idea to long-term support.",

  primaryCta: {
    label: "Contact Us",
    path: ROUTES.CONTACT,
  },

  secondaryCta: {
    label: "Explore Services",
    path: ROUTES.SERVICES,
  },

  animationSteps: [
    {
      label: "DEVELOPMENT",
      description: "Building reliable digital experiences",
    },
    {
      label: "ARTIFICIAL INTELLIGENCE",
      description: "Turning data into intelligent solutions",
    },
    {
      label: "CLOUD",
      description: "Connecting technology at scale",
    },
    {
      label: "DEPLOYMENT",
      description: "Taking products from idea to production",
    },
  ],

  brandReveal: {
    companyName: "SMART MATRIX DIGITAL SERVICES",
    tagline: "Build Smarter Digital Products Faster",
    services: [
      "Web Development",
      "AI Solutions",
      "Mobile Applications",
      "Cloud",
      "Product Development",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Stats                                                               */
/* ------------------------------------------------------------------ */

/** @deprecated Import `CompanyStat` from `constants/companyStats` instead. */
export type HomeStat = (typeof COMPANY_STATS)[number];

/** The company's headline figures — shared with the About page's trust section. */
export const HOME_STATS = COMPANY_STATS;

/* ------------------------------------------------------------------ */
/* Services                                                            */
/* ------------------------------------------------------------------ */

/**
 * The catalogue itself lives in constants/capabilities.ts,
 * shared with the navbar's mega-menu.
 */
export const HOME_SERVICES_HEADING =
  "Technology built around your business.";

export const HOME_SERVICES_SUBTITLE =
  "From product development to intelligent automation, we help businesses design, build and scale digital solutions.";

/* ------------------------------------------------------------------ */
/* About teaser                                                        */
/* ------------------------------------------------------------------ */

export interface HomeAboutContent {
  heading: string;
  description: string;
  capabilities: string[];
  cta: HomeCta;
}

export const HOME_ABOUT: HomeAboutContent = {
  heading: "Building technology that moves your business forward.",

  description:
    "At Smart Matrix Digital Services, we help businesses turn ideas, challenges, and opportunities into reliable digital solutions. From software and web applications to mobile apps, cloud, AI, and data-driven solutions, we combine technology, design, and business understanding to build products that deliver real value.",

  capabilities: [
    "Strategy",
    "UI/UX",
    "Software Development",
    "AI",
    "Cloud",
    "Digital Transformation",
    "Long-term Support",
  ],

  cta: {
    label: "Learn About Us",
    path: ROUTES.ABOUT,
  },
};

/* ------------------------------------------------------------------ */
/* Industries teaser                                                   */
/* ------------------------------------------------------------------ */

/** @deprecated Import `IndustryOverviewItem` from `constants/industryOverview`. */
export type HomeIndustry = (typeof INDUSTRY_OVERVIEW)[number];

export const HOME_INDUSTRIES_HEADING =
  "Solutions designed for real-world industries.";

/** The industries served — shared with the About page's industries list. */
export const HOME_INDUSTRIES = INDUSTRY_OVERVIEW;

/* ------------------------------------------------------------------ */
/* Why choose us                                                       */
/* ------------------------------------------------------------------ */

export const HOME_WHY_HEADING = "Why Smart Matrix Digital Services?";

export const HOME_WHY_REASONS: InfoItem[] = [
  {
    title: "Business-first approach",
    description: "We start with your business goals, not the technology.",
  },
  {
    title: "Scalable architecture",
    description: "Systems built to grow with you, not be rebuilt in a year.",
  },
  {
    title: "Modern technology",
    description: "Current, well-supported tools — not legacy patterns.",
  },
  {
    title: "AI-ready solutions",
    description: "Software designed to take advantage of automation and AI.",
  },
  {
    title: "Long-term support",
    description: "We stay involved well past launch day.",
  },
  {
    title: "Transparent collaboration",
    description: "Clear communication and visibility at every stage.",
  },
];

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

export interface HomeFinalCtaContent {
  heading: string;
  description: string;
  cta: HomeCta;
}

export const HOME_FINAL_CTA: HomeFinalCtaContent = {
  heading: "Have an idea? Let's build it.",

  description:
    "Tell us what you're building and we'll help you turn the idea into a scalable digital product.",

  cta: {
    label: "Start a Project",
    path: ROUTES.CONTACT,
  },
};