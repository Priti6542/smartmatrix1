import {
  Briefcase,
  Factory,
  GraduationCap,
  Landmark,
  Shield,
  ShoppingBag,
  Stethoscope,
  Truck,
  type LucideIcon,
} from "lucide-react";

/**
 * The eight industries the company builds for. Shared between the
 * homepage's industries grid and the About page's industries list — same
 * content, two different visual treatments.
 */
export interface IndustryOverviewItem {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
}

export const INDUSTRY_OVERVIEW: IndustryOverviewItem[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Revenue cycle systems and compliant patient-facing tools.",
    icon: Stethoscope,
  },
  {
    id: "finance",
    name: "Finance",
    description: "Secure platforms for payments, reporting, and operations.",
    icon: Landmark,
  },
  {
    id: "retail",
    name: "Retail",
    description: "E-commerce, inventory, and customer experience platforms.",
    icon: ShoppingBag,
  },
  {
    id: "logistics",
    name: "Logistics",
    description: "Tracking, fleet, and supply-chain visibility systems.",
    icon: Truck,
  },
  {
    id: "education",
    name: "Education",
    description: "Learning platforms and institutional management tools.",
    icon: GraduationCap,
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "IoT, automation, and production monitoring systems.",
    icon: Factory,
  },
  {
    id: "security",
    name: "Security",
    description: "Access control, monitoring, and risk management systems.",
    icon: Shield,
  },
  {
    id: "business-services",
    name: "Business Services",
    description:
      "Operational tooling and internal platforms for service firms.",
    icon: Briefcase,
  },
];
