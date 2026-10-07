import { CheckCircle2 } from "lucide-react";

import Section from "../../../components/layout/Section";
import type { CoreService } from "../data";

import Reveal from "./Reveal";

interface ServiceDetailOutcomesProps {
  service: CoreService;
}

const ServiceDetailOutcomes = ({ service }: ServiceDetailOutcomesProps) => (
  <Section className="bg-[#FFFCF7] text-[#262626]">
    <Reveal>
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8750A]">
          Business Outcomes
        </span>
        <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          What this service delivers.
        </h2>
      </header>
    </Reveal>

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {service.detail.outcomes.map((outcome, index) => (
        <Reveal key={outcome} delay={(index % 2) * 0.1}>
          <div className="flex items-center gap-3 rounded-xl border border-[#3D3D3D]/10 bg-white px-5 py-4">
            <CheckCircle2 size={18} className="shrink-0 text-[#F7941E]" />
            <span className="text-sm font-semibold text-[#262626]">
              {outcome}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default ServiceDetailOutcomes;
