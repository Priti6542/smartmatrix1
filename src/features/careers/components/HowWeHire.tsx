import { Fragment } from "react";
import { ArrowRight } from "lucide-react";

import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { cx } from "../../../utils/helpers";
import type { ApplicationStep } from "../../../types/career";
import { APPLICATION_STEPS, HOW_WE_HIRE_HEADING } from "../data";

interface HireStepProps {
  step: ApplicationStep;
  index: number;
}

/** One diagonal step — its own component so the scroll-reveal hook runs at
 * this component's top level rather than inside the row's `.map()`. */
const HireStep = ({ step, index }: HireStepProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className={cx(
        "flex-1 transition-all duration-500",
        index % 2 === 1 && "lg:mt-6",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
      )}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF8F0] text-sm font-bold text-[#F47C20]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 text-lg font-bold text-[#262626]">
        {step.title.replace(/:$/, "")}
      </h3>
      <p className="mt-2 max-w-[28ch] text-sm leading-6 text-[#3D3D3D]/65">
        {step.description}
      </p>
    </div>
  );
};

const HowWeHire = () => {
  return (
    <Section spacing="none" className="bg-[#FFFCF7] pt-14 pb-0 text-[#262626] sm:pt-18 lg:pt-24">
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#d8690f]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F47C20]" />
          How We Hire
        </span>
        <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {HOW_WE_HIRE_HEADING}
        </h2>
      </header>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
        {APPLICATION_STEPS.map((step, index) => (
          <Fragment key={step.title}>
            <HireStep step={step} index={index} />
            {index < APPLICATION_STEPS.length - 1 && (
              <ArrowRight
                size={18}
                className="hidden shrink-0 text-[#3D3D3D]/20 lg:mt-5 lg:block"
              />
            )}
          </Fragment>
        ))}
      </div>
    </Section>
  );
};

export default HowWeHire;
