import { motion } from "framer-motion";

import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import type { InfoItem } from "../../../types/common";
import { cx } from "../../../utils/helpers";
import { CULTURE_JOURNEY, OUR_CULTURE_HEADING } from "../data";

interface JourneyStepProps {
  step: InfoItem;
  isLast: boolean;
}

/** One link in the culture chain — its own component so the scroll-reveal
 * hook runs at this component's top level rather than inside a `.map()`. */
const JourneyStep = ({ step, isLast }: JourneyStepProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <div ref={ref} className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <motion.span
          initial={{ scale: 0.6, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex h-3 w-3 shrink-0 rounded-full bg-[#F47C20]"
        />
        {!isLast && (
          <motion.span
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : undefined}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            style={{ transformOrigin: "top" }}
            className="mt-1 w-px flex-1 bg-[#3D3D3D]/15"
          />
        )}
      </div>

      <div className="pb-10">
        <h3 className="text-lg font-bold text-[#262626]">{step.title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[#3D3D3D]/65">
          {step.description}
        </p>
      </div>
    </div>
  );
};

const OurCulture = () => {
  return (
    <Section className="bg-[#FFFCF7] text-[#262626]">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="relative overflow-hidden rounded-[28px] bg-[#262626] p-9 text-white sm:p-11 lg:min-h-[360px]">
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#F47C20]/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[#FDB913]/10 blur-3xl" />

          <p className="relative text-2xl font-extrabold leading-snug tracking-[-0.01em] sm:text-3xl">
            Simplifying. Enhancing. Making work{" "}
            <span className="text-[#F47C20]">more productive.</span>
          </p>
          <p className="relative mt-5 text-sm leading-6 text-white/55">
            The mission behind every project we take on.
          </p>
        </div>

        <div>
          <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] text-[#262626] sm:text-[2.25rem]">
            {OUR_CULTURE_HEADING}
          </h2>

          <div className={cx("mt-10")}>
            {CULTURE_JOURNEY.map((step, index) => (
              <JourneyStep
                key={step.title}
                step={step}
                isLast={index === CULTURE_JOURNEY.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OurCulture;
