import Section from "../../../components/layout/Section";
import {
  SERVICES_INDUSTRIES,
  SERVICES_INDUSTRIES_HEADING,
  SERVICES_INDUSTRIES_SUBTITLE,
} from "../data";

import Reveal from "./Reveal";

/**
 * Compact, dense 2-column list — distinct from the homepage's card grid
 * (`HomeIndustries`) and About's full-width divided rows
 * (`AboutIndustriesList`), while reusing the same underlying content.
 */
const ServicesIndustries = () => {
  return (
    <Section className="bg-[#FFFCF7] text-[#262626]">
      <Reveal>
        <header className="mb-heading max-w-2xl lg:mb-heading-lg">
          <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
            {SERVICES_INDUSTRIES_HEADING}
          </h2>
          <p className="mt-4 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg">
            {SERVICES_INDUSTRIES_SUBTITLE}
          </p>
        </header>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#3D3D3D]/10 bg-[#3D3D3D]/10 sm:grid-cols-2">
          {SERVICES_INDUSTRIES.map((industry) => {
            const Icon = industry.icon;
            return (
              <div
                key={industry.id}
                className="group flex items-center gap-3 bg-white px-6 py-4 transition-colors duration-300 hover:bg-[#FFF8F0]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FFF8F0] text-[#F7941E] transition-transform duration-300 group-hover:scale-110">
                  <Icon size={16} />
                </span>
                <span className="text-sm font-semibold text-[#262626]">
                  {industry.name}
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </Section>
  );
};

export default ServicesIndustries;
