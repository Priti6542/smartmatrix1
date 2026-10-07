import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../../constants/routes";

interface ServiceDetailBreadcrumbProps {
  title: string;
}

/** Subtle trail back to Services — intentionally small and low-contrast. */
const ServiceDetailBreadcrumb = ({ title }: ServiceDetailBreadcrumbProps) => (
  <nav
    aria-label="Breadcrumb"
    className="flex items-center gap-1.5 text-xs text-[#3D3D3D]/50"
  >
    <Link to={ROUTES.HOME} className="transition-colors hover:text-[#F7941E]">
      Home
    </Link>
    <ChevronRight size={12} />
    <Link
      to={ROUTES.SERVICES}
      className="transition-colors hover:text-[#F7941E]"
    >
      Services
    </Link>
    <ChevronRight size={12} />
    <span className="font-medium text-[#3D3D3D]/70">{title}</span>
  </nav>
);

export default ServiceDetailBreadcrumb;
