import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { cx } from "../../../utils/helpers";
import type { GrowthStep } from "../data";
import { GROWTH_HEADING, GROWTH_STEPS } from "../data";

interface GrowthCardProps {
  step: GrowthStep;
}

/** Card treatment matching Services' "choose your path" cards — a top
 * accent line that fills on hover, orange icon badge replaced by the
 * step's own index. */
const GrowthCard = ({ step }: GrowthCardProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={cx(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-[#3D3D3D]/10 bg-white p-8 transition-all duration-500 hover:-translate-y-1 hover:border-[#F47C20]/40 hover:shadow-[0_16px_40px_rgba(61,61,61,0.08)]",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
    >
      <span className="absolute top-0 left-0 h-0.5 w-0 bg-[#F47C20] transition-all duration-300 group-hover:w-full" />

      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8F0] text-sm font-bold text-[#F47C20]">
        {step.index}
      </span>

      <h3 className="mt-6 text-lg font-extrabold text-[#262626]">
        {step.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#3D3D3D]/65">
        {step.description}
      </p>
    </div>
  );
};

const GrowthAndLearning = () => {
  return (
    <Section spacing="none" className="bg-[#FFFCF7] pt-14 pb-0 text-[#262626] sm:pt-18 lg:pt-24">
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d8690f]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F47C20]" />
          Growth &amp; Learning
        </span>
        <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {GROWTH_HEADING}
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GROWTH_STEPS.map((step) => (
          <GrowthCard key={step.index} step={step} />
        ))}
      </div>
    </Section>
  );
};

export default GrowthAndLearning;
