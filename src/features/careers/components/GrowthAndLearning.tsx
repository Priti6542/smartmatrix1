import { motion } from "framer-motion";

import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import type { GrowthStep } from "../data";
import { GROWTH_HEADING, GROWTH_STEPS } from "../data";

interface DesktopStepProps {
  step: GrowthStep;
}

const DesktopStep = ({ step }: DesktopStepProps) => (
  <div className="flex flex-col items-center text-center">
    <span className="relative z-[1] flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#F47C20] bg-[#262626] text-sm font-bold text-[#F47C20]">
      {step.index}
    </span>
    <h3 className="mt-5 text-base font-bold text-white">{step.title}</h3>
    <p className="mt-2 max-w-[20ch] text-sm leading-6 text-white/50">
      {step.description}
    </p>
  </div>
);

/** Desktop (lg+): horizontal progression with an orange line that fills in
 * as the row scrolls into view. */
const DesktopProgress = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="relative hidden lg:grid lg:grid-cols-4 lg:gap-8">
      <div className="pointer-events-none absolute top-6 right-6 left-6 h-px bg-white/10" />
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: isVisible ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="pointer-events-none absolute top-6 left-6 h-px bg-[#F47C20]"
      />

      {GROWTH_STEPS.map((step) => (
        <DesktopStep key={step.index} step={step} />
      ))}
    </div>
  );
};

const MobileStep = ({ step, isLast }: { step: GrowthStep; isLast: boolean }) => (
  <div className="relative flex gap-5">
    <div className="flex flex-col items-center">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#F47C20] bg-[#262626] text-xs font-bold text-[#F47C20]">
        {step.index}
      </span>
      {!isLast && <span className="mt-1 w-px flex-1 bg-white/10" />}
    </div>
    <div className="pb-8">
      <h3 className="text-base font-bold text-white">{step.title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/50">{step.description}</p>
    </div>
  </div>
);

/** Mobile/tablet (<lg): vertical progression. */
const MobileProgress = () => (
  <div className="flex flex-col lg:hidden">
    {GROWTH_STEPS.map((step, index) => (
      <MobileStep key={step.index} step={step} isLast={index === GROWTH_STEPS.length - 1} />
    ))}
  </div>
);

const GrowthAndLearning = () => {
  return (
    <Section className="bg-[#262626] text-white">
      <h2 className="mb-heading max-w-xl text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:mb-heading-lg lg:text-[2.5rem]">
        {GROWTH_HEADING}
      </h2>

      <DesktopProgress />
      <MobileProgress />
    </Section>
  );
};

export default GrowthAndLearning;
