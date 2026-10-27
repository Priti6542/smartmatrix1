import { Check } from "lucide-react";

import Section from "../../../components/layout/Section";
import type { CoreService } from "../data";

interface ServiceDetailWhatWeBuildProps {
  service: CoreService;
}

const ServiceDetailWhatWeBuild = ({ service }: ServiceDetailWhatWeBuildProps) => (
  <Section spacing="none" className="bg-white pt-14 pb-0 text-[#262626] sm:pt-18 lg:pt-24">
    <header className="mb-heading max-w-2xl lg:mb-heading-lg">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8690f]">
        What We Build
      </span>
      <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
        What we build within {service.title.toLowerCase()}.
      </h2>
    </header>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {service.detail.whatWeBuild.map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-xl border border-[#3D3D3D]/10 bg-[#FFFCF7] px-4 py-3.5 text-sm font-semibold text-[#262626] transition-colors duration-300 hover:border-[#F47C20]/30"
        >
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF8F0] text-[#F47C20]">
            <Check size={14} strokeWidth={2.5} />
          </span>
          {item}
        </div>
      ))}
    </div>
  </Section>
);

export default ServiceDetailWhatWeBuild;
