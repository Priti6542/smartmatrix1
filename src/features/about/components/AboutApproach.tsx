import { motion } from "framer-motion";

import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import type { ApproachStep } from "../data";
import { ABOUT_APPROACH_HEADING, ABOUT_APPROACH_STEPS } from "../data";

const STEP_REVEAL_TRANSITION = { duration: 0.5, ease: "easeOut" } as const;

interface StepCircleProps {
  index: string;
}

const StepCircle = ({ index }: StepCircleProps) => (
  <span className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#F7941E] bg-white text-sm font-bold text-[#F7941E]">
    {index}
  </span>
);

interface DesktopStepProps {
  step: ApproachStep;
  /** Title/description sit above the line on even steps, below on odd ones. */
  isAbove: boolean;
}

/** One column of the desktop timeline — its own component so the
 * scroll-reveal hook below is called once per step, not inside a loop. */
const DesktopStep = ({ step, isAbove }: DesktopStepProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.5,
  });

  const copy = (
    <>
      <h3 className="text-base font-bold text-[#262626]">{step.title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#3D3D3D]/65">
        {step.description}
      </p>
    </>
  );

  return (
    <div ref={ref} className="flex flex-col items-center">
      {isAbove && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : undefined}
          transition={STEP_REVEAL_TRANSITION}
          className="mb-6 text-center"
        >
          {copy}
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : undefined}
        transition={STEP_REVEAL_TRANSITION}
      >
        <StepCircle index={step.index} />
      </motion.div>

      {!isAbove && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={isVisible ? { opacity: 1, y: 0 } : undefined}
          transition={STEP_REVEAL_TRANSITION}
          className="mt-6 text-center"
        >
          {copy}
        </motion.div>
      )}
    </div>
  );
};

/**
 * Desktop (lg+): a horizontal line of five steps, title/description
 * alternating above and below the line so the row reads as an editorial
 * timeline rather than a flat, generic stepper component.
 */
const DesktopTimeline = ({ steps }: { steps: ApproachStep[] }) => (
  <div className="relative hidden lg:grid lg:grid-cols-5 lg:gap-6">
    <div className="pointer-events-none absolute top-1/2 right-6 left-6 h-px -translate-y-1/2 bg-[#3D3D3D]/15" />

    {steps.map((step, index) => (
      <DesktopStep key={step.index} step={step} isAbove={index % 2 === 0} />
    ))}
  </div>
);

/** One row of the mobile timeline — its own component for the same reason
 * as `DesktopStep`: the hook must run at this component's top level. */
const MobileStep = ({ step }: { step: ApproachStep }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.4,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : undefined}
      transition={STEP_REVEAL_TRANSITION}
      className="relative flex items-start gap-5"
    >
      <StepCircle index={step.index} />
      <div className="pt-2.5">
        <h3 className="text-base font-bold text-[#262626]">{step.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#3D3D3D]/65">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

/** Mobile/tablet (<lg): a vertical timeline, one step per row. */
const MobileTimeline = ({ steps }: { steps: ApproachStep[] }) => (
  <div className="relative flex flex-col gap-10 lg:hidden">
    <div className="pointer-events-none absolute top-6 bottom-6 left-6 w-px bg-[#3D3D3D]/15" />

    {steps.map((step) => (
      <MobileStep key={step.index} step={step} />
    ))}
  </div>
);

const AboutApproach = () => {
  return (
    <Section className="bg-white text-[#262626]">
      <h2 className="mb-heading max-w-2xl text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:mb-heading-lg lg:text-[2.5rem]">
        {ABOUT_APPROACH_HEADING}
      </h2>

      <DesktopTimeline steps={ABOUT_APPROACH_STEPS} />
      <MobileTimeline steps={ABOUT_APPROACH_STEPS} />
    </Section>
  );
};

export default AboutApproach;
