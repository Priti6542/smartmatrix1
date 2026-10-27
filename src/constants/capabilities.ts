import {
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  LifeBuoy,
  PenTool,
  Smartphone,
  Terminal,
  type LucideIcon,
} from "lucide-react";

/**
 * The eight things Smart Software Services builds. Shared between the
 * navbar's Services mega-menu (short label) and the homepage services
 * section (full title + description) so the two never drift apart.
 */
export interface Capability {
  id: string;
  /** Two-digit index as shown in the mega-menu and services section. */
  index: string;
  /** Short form for the compact mega-menu list. */
  shortLabel: string;
  /** Full title for the homepage services section. */
  title: string;
  description: string;
  icon: LucideIcon;
  /**
   * The matching `CoreService.slug` in `features/services/data.ts`, for
   * deep-linking the Navbar mega-menu and Footer to that service's own
   * `/services/<slug>` page. Omitted where no clean match exists (the
   * Navbar/Footer fall back to the generic `/services` listing in that case)
   * rather than linking to a page about something else.
   */
  serviceSlug?: string;
}

export const CAPABILITIES: Capability[] = [
  {
    id: "web-development",
    index: "01",
    shortLabel: "Web Development",
    title: "Web Development",
    description:
      "Fast, accessible, production-grade websites and web applications built to scale.",
    icon: Code2,
    serviceSlug: "web-development",
  },
  {
    id: "custom-software",
    index: "02",
    shortLabel: "Custom Software",
    title: "Custom Software",
    description:
      "Purpose-built systems designed around how your business actually operates.",
    icon: Terminal,
    serviceSlug: "custom-software",
  },
  {
    id: "mobile-applications",
    index: "03",
    shortLabel: "Mobile Applications",
    title: "Mobile Applications",
    description:
      "Native-feel iOS and Android apps, from first prototype to app-store release.",
    icon: Smartphone,
    serviceSlug: "mobile-apps",
  },
  {
    id: "product-development",
    index: "04",
    shortLabel: "Product Development",
    title: "Product Development",
    description:
      "End-to-end product teams that take an idea from discovery through to launch.",
    icon: Boxes,
    serviceSlug: "product-development",
  },
  {
    id: "ui-ux-design",
    index: "05",
    shortLabel: "UI/UX Design",
    title: "UI/UX & Product Design",
    description:
      "Interfaces designed for clarity first — research, flows, and polished UI.",
    icon: PenTool,
    serviceSlug: "ui-ux-design",
  },
  {
    id: "ai-ml",
    index: "06",
    shortLabel: "AI / ML",
    title: "AI & Machine Learning",
    description:
      "Practical machine learning and automation built into real workflows.",
    icon: BrainCircuit,
    serviceSlug: "ai-solutions",
  },
  {
    id: "cloud-devops",
    index: "07",
    shortLabel: "Cloud & DevOps",
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, CI/CD, and deployment pipelines that stay reliable at scale.",
    icon: Cloud,
    serviceSlug: "cloud-solutions",
  },
  {
    id: "digital-solutions-support",
    index: "08",
    shortLabel: "Digital Solutions",
    title: "Digital Solutions & Support",
    description:
      "Ongoing maintenance, monitoring, and support long after launch day.",
    icon: LifeBuoy,
  },
];
