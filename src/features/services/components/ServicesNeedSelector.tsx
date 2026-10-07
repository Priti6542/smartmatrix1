import { ArrowRight } from "lucide-react";

import Section from "../../../components/layout/Section";
import type { ServiceNeedOption } from "../data";
import {
  SERVICES_NEED_HEADING,
  SERVICES_NEED_OPTIONS,
  SERVICES_NEED_SUBTITLE,
} from "../data";

const scrollToService = (slug: string) => {
  document
    .getElementById(`service-${slug}`)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

interface NeedOptionCardProps {
  option: ServiceNeedOption;
}

const NeedOptionCard = ({ option }: NeedOptionCardProps) => {
  const Icon = option.icon;

  return (
    <button
      type="button"
      onClick={() => scrollToService(option.targetSlug)}
      className="group flex items-center gap-4 rounded-2xl border border-[#3D3D3D]/10 bg-white p-5 text-left transition-all duration-300 hover:border-[#F7941E] hover:bg-[#FFF8F0]"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F7941E] transition-transform duration-300 group-hover:scale-110">
        <Icon size={20} />
      </span>
      <span className="flex-1 text-sm font-semibold text-[#262626] sm:text-base">
        {option.label}
      </span>
      <ArrowRight
        size={17}
        className="shrink-0 text-[#3D3D3D]/30 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F7941E]"
      />
    </button>
  );
};

const ServicesNeedSelector = () => {
  return (
    <Section className="bg-white text-[#262626]" spacing="none">
      <div className="py-10 lg:py-12">
        <header className="max-w-2xl">
          <h2 className="text-xl font-extrabold leading-tight tracking-[-0.01em] sm:text-2xl">
            {SERVICES_NEED_HEADING}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#3D3D3D]/65 sm:text-base">
            {SERVICES_NEED_SUBTITLE}
          </p>
        </header>

        <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_NEED_OPTIONS.map((option) => (
            <NeedOptionCard key={option.label} option={option} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ServicesNeedSelector;
