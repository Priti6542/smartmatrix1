import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import type { CareerHighlight } from "../../../types/career";
import { CAREER_HIGHLIGHTS, CAREERS_SECTION_IDS, WHY_JOIN_HEADING, WHY_JOIN_STATEMENT } from "../data";

interface PrincipleCardProps {
  highlight: CareerHighlight;
  index: number;
}

/** Icon-free, left-accent-border card — the same treatment used for
 * Services' principle cards, applied here to the real culture highlights. */
const PrincipleCard = ({ highlight, index }: PrincipleCardProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={`h-full rounded-2xl border border-[#3D3D3D]/10 border-l-4 border-l-[#F47C20] bg-white p-8 transition-all duration-500 lg:p-10 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <span className="text-sm font-bold text-[#F47C20]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 text-lg font-bold text-[#262626]">
        {highlight.title}
      </h3>
      <p className="mt-3 max-w-[32ch] text-sm leading-6 text-[#3D3D3D]/70">
        {highlight.description}
      </p>
    </div>
  );
};

const WhyJoinSmartMatrix = () => {
  return (
    <Section
      id={CAREERS_SECTION_IDS.whyJoin}
      spacing="none"
      className="bg-white pt-14 pb-0 text-[#262626] sm:pt-18 lg:pt-24"
    >
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d8690f]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F47C20]" />
          {WHY_JOIN_HEADING}
        </span>
        <p className="mt-4 max-w-xl text-2xl font-extrabold leading-snug tracking-[-0.01em] text-[#262626] sm:text-3xl">
          {WHY_JOIN_STATEMENT}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {CAREER_HIGHLIGHTS.map((highlight, index) => (
          <PrincipleCard key={highlight.title} highlight={highlight} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default WhyJoinSmartMatrix;
