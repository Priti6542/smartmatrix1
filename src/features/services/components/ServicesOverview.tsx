import Section from "../../../components/layout/Section";
import { SERVICES_OVERVIEW } from "../data";

import Reveal from "./Reveal";

const ServicesOverview = () => {
  return (
    <Section className="bg-[#FFFCF7] text-[#262626]">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8750A]">
            {SERVICES_OVERVIEW.label}
          </span>
          <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
            {SERVICES_OVERVIEW.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg">
            {SERVICES_OVERVIEW.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {SERVICES_OVERVIEW.keywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-[#3D3D3D]/10 bg-white px-4 py-1.5 text-sm font-medium text-[#3D3D3D]/70"
              >
                {keyword}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default ServicesOverview;
