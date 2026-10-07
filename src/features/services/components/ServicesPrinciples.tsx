import { Cpu, Handshake, Layers3, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Section from "../../../components/layout/Section";
import type { ServicePrinciple } from "../data";
import { SERVICES_PRINCIPLES, SERVICES_PRINCIPLES_HEADING } from "../data";

import Reveal from "./Reveal";

const PRINCIPLE_ICONS: LucideIcon[] = [Target, Layers3, Cpu, Handshake];

interface PrincipleCardProps {
  principle: ServicePrinciple;
  icon: LucideIcon;
  delay: number;
}

/**
 * Icon-led cards with a left accent border — distinct from About's
 * ghost-numeral quadrant (`AboutBeliefs`) despite the shared 2x2 shape.
 */
const PrincipleCard = ({ principle, icon: Icon, delay }: PrincipleCardProps) => (
  <Reveal delay={delay}>
    <div className="h-full rounded-2xl border border-[#3D3D3D]/10 border-l-4 border-l-[#F7941E] bg-white p-8 transition-colors duration-300 hover:border-[#3D3D3D]/20 lg:p-10">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F7941E]">
        <Icon size={20} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-[#262626]">
        {principle.title}
      </h3>
      <p className="mt-3 max-w-[32ch] text-sm leading-6 text-[#3D3D3D]/70">
        {principle.description}
      </p>
    </div>
  </Reveal>
);

const ServicesPrinciples = () => {
  return (
    <Section className="bg-white text-[#262626]">
      <h2 className="mb-heading max-w-2xl text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:mb-heading-lg lg:text-[2.5rem]">
        {SERVICES_PRINCIPLES_HEADING}
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {SERVICES_PRINCIPLES.map((principle, index) => (
          <PrincipleCard
            key={principle.title}
            principle={principle}
            icon={PRINCIPLE_ICONS[index]}
            delay={(index % 2) * 0.1}
          />
        ))}
      </div>
    </Section>
  );
};

export default ServicesPrinciples;
