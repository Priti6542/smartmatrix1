import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { cx } from "../../../utils/helpers";
import { ROUTES } from "../../../constants/routes";
import type { ServicePathOption } from "../data";
import { SERVICES_PATHS, SERVICES_PATHS_HEADING } from "../data";

interface PathCardProps {
  path: ServicePathOption;
}

/** One path card — its own component so the scroll-reveal hook runs at
 * this component's top level rather than inside the grid's `.map()`. */
const PathCard = ({ path }: PathCardProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLAnchorElement>({
    threshold: 0.3,
  });
  const Icon = path.icon;

  return (
    <Link
      ref={ref}
      to={ROUTES.CONTACT}
      className={cx(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-[#3D3D3D]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#F7941E]/40 hover:shadow-[0_16px_40px_rgba(61,61,61,0.08)]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
    >
      <span className="absolute top-0 left-0 h-0.5 w-0 bg-[#F7941E] transition-all duration-300 group-hover:w-full" />

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F7941E]">
        <Icon size={21} />
      </span>

      <h3 className="mt-6 text-lg font-extrabold text-[#262626]">
        {path.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#3D3D3D]/65">
        {path.description}
      </p>

      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F7941E]">
        Get started
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
};

const ServicesChooseYourPath = () => {
  return (
    <Section className="bg-[#FFFCF7] text-[#262626]">
      <h2 className="mb-heading max-w-2xl text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:mb-heading-lg lg:text-[2.5rem]">
        {SERVICES_PATHS_HEADING}
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {SERVICES_PATHS.map((path) => (
          <PathCard key={path.title} path={path} />
        ))}
      </div>
    </Section>
  );
};

export default ServicesChooseYourPath;
