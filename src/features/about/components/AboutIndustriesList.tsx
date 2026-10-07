import { ArrowRight } from "lucide-react";

import Section from "../../../components/layout/Section";
import {
  ABOUT_INDUSTRIES,
  ABOUT_INDUSTRIES_HEADING,
  ABOUT_INDUSTRIES_SUBTITLE,
} from "../data";

const AboutIndustriesList = () => {
  return (
    <Section className="bg-white text-[#262626]">
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {ABOUT_INDUSTRIES_HEADING}
        </h2>
        <p className="mt-4 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg">
          {ABOUT_INDUSTRIES_SUBTITLE}
        </p>
      </header>

      <ul className="divide-y divide-[#3D3D3D]/10 rounded-2xl border border-[#3D3D3D]/10">
        {ABOUT_INDUSTRIES.map((industry, index) => (
          <li key={industry.id}>
            <div className="group flex cursor-default flex-col gap-2 border-l-2 border-transparent px-6 py-5 transition-all duration-300 hover:border-[#F7941E] hover:bg-[#FFF8F0] sm:flex-row sm:items-center sm:gap-5 sm:px-8">
              <div className="flex items-center gap-4 sm:w-44 sm:shrink-0">
                <span className="text-sm font-semibold text-[#3D3D3D]/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base font-bold">{industry.name}</span>
              </div>

              <div className="flex items-center justify-between gap-4 sm:flex-1">
                <span className="min-w-0 text-sm leading-6 text-[#3D3D3D]/60">
                  {industry.description}
                </span>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-[#3D3D3D]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F7941E]"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default AboutIndustriesList;
