import { Smile, Sparkles, TrendingUp, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Section from "../../../components/layout/Section";
import type { ServiceOutcome } from "../data";
import { SERVICES_OUTCOMES, SERVICES_OUTCOMES_HEADING } from "../data";

import Reveal from "./Reveal";

const OUTCOME_ICONS: LucideIcon[] = [Smile, Workflow, Sparkles, TrendingUp];

interface OutcomeBlockProps {
  outcome: ServiceOutcome;
  icon: LucideIcon;
  delay: number;
}

const OutcomeBlock = ({ outcome, icon: Icon, delay }: OutcomeBlockProps) => (
  <Reveal delay={delay} className="flex items-start gap-4">
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F7941E]/10 text-[#F7941E]">
      <Icon size={20} />
    </span>
    <div>
      <h3 className="text-base font-bold text-[#262626]">{outcome.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#3D3D3D]/65">
        {outcome.description}
      </p>
    </div>
  </Reveal>
);

const ServicesOutcomes = () => {
  return (
    <Section className="bg-white text-[#262626]">
      <h2 className="mb-heading max-w-2xl text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:mb-heading-lg lg:text-[2.5rem]">
        {SERVICES_OUTCOMES_HEADING}
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {SERVICES_OUTCOMES.map((outcome, index) => (
          <OutcomeBlock
            key={outcome.title}
            outcome={outcome}
            icon={OUTCOME_ICONS[index]}
            delay={(index % 2) * 0.1}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServicesOutcomes;
