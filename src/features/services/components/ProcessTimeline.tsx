import { motion } from "framer-motion";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import type { ProcessStep } from "../data";

const STEP_REVEAL_TRANSITION = { duration: 0.5, ease: "easeOut" } as const;

interface StepTileProps {
  index: string;
}

/** Filled square tile — distinct from About's outlined circle marker. */
const StepTile = ({ index }: StepTileProps) => (
  <span className="relative z-[1] flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F7941E] text-sm font-bold text-white shadow-[0_8px_20px_rgba(247,148,30,0.3)]">
    {index}
  </span>
);

interface DesktopStepProps {
  step: ProcessStep;
  isAbove: boolean;
}

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
        <StepTile index={step.index} />
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
 * Desktop (lg+): horizontal zigzag along a connecting line that fills in
 * with an orange progress overlay as the row scrolls into view. Column
 * count is driven by inline `gridTemplateColumns` rather than a Tailwind
 * `grid-cols-N` class, since this component is reused with step counts
 * ranging from 5 (main page) to 8 (UI/UX design detail page).
 */
const DesktopTimeline = ({ steps }: { steps: ProcessStep[] }) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      className="relative hidden lg:grid lg:gap-6"
    >
      <div className="pointer-events-none absolute top-1/2 right-6 left-6 h-px -translate-y-1/2 bg-[#3D3D3D]/15" />
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: isVisible ? "100%" : "0%" }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="pointer-events-none absolute top-1/2 left-6 h-px -translate-y-1/2 bg-[#F7941E]/50"
      />

      {steps.map((step, index) => (
        <DesktopStep key={step.index} step={step} isAbove={index % 2 === 0} />
      ))}
    </div>
  );
};

const MobileStep = ({ step }: { step: ProcessStep }) => {
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
      <StepTile index={step.index} />
      <div className="pt-2.5">
        <h3 className="text-base font-bold text-[#262626]">{step.title}</h3>
        <p className="mt-2 text-sm leading-6 text-[#3D3D3D]/65">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

/** Mobile/tablet (<lg): vertical timeline, one step per row. */
const MobileTimeline = ({ steps }: { steps: ProcessStep[] }) => (
  <div className="relative flex flex-col gap-10 lg:hidden">
    <div className="pointer-events-none absolute top-6 bottom-6 left-6 w-px bg-[#3D3D3D]/15" />

    {steps.map((step) => (
      <MobileStep key={step.index} step={step} />
    ))}
  </div>
);

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

/**
 * Shared horizontal-desktop / vertical-mobile process timeline, used by the
 * main Services page's "How We Work" and every service detail page's
 * "Our Approach" so the ~140 lines of layout/animation logic aren't
 * duplicated nine times over.
 */
const ProcessTimeline = ({ steps }: ProcessTimelineProps) => (
  <>
    <DesktopTimeline steps={steps} />
    <MobileTimeline steps={steps} />
  </>
);

export default ProcessTimeline;
