import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import type { ContactProcessStep } from "../data";
import { CONTACT_PROCESS_HEADING, CONTACT_PROCESS_STEPS } from "../data";

interface ProcessStepProps {
  step: ContactProcessStep;
}

/** One step — its own component so the scroll-reveal hook runs at this
 * component's top level rather than inside the row's `.map()`. */
const ProcessStep = ({ step }: ProcessStepProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex-1"
    >
      <span className="text-sm font-bold text-[#F47C20]">{step.index}</span>
      <h3 className="mt-3 text-lg font-bold text-[#262626]">{step.title}</h3>
      <p className="mt-2 max-w-[26ch] text-sm leading-6 text-[#3D3D3D]/65">
        {step.description}
      </p>
    </motion.div>
  );
};

const SimpleContactProcess = () => {
  return (
    <Section className="bg-white text-[#262626]">
      <h2 className="mb-heading max-w-xl text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:mb-heading-lg lg:text-[2.5rem]">
        {CONTACT_PROCESS_HEADING}
      </h2>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
        {CONTACT_PROCESS_STEPS.map((step, index) => (
          <Fragment key={step.index}>
            <ProcessStep step={step} />
            {index < CONTACT_PROCESS_STEPS.length - 1 && (
              <ArrowRight size={18} className="hidden shrink-0 text-[#3D3D3D]/20 lg:mt-1 lg:block" />
            )}
          </Fragment>
        ))}
      </div>
    </Section>
  );
};

export default SimpleContactProcess;
