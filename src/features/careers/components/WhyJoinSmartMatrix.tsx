import { motion } from "framer-motion";

import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import type { CareerHighlight } from "../../../types/career";
import { CAREER_HIGHLIGHTS, CAREERS_SECTION_IDS, WHY_JOIN_HEADING, WHY_JOIN_STATEMENT } from "../data";

interface PrincipleRowProps {
  highlight: CareerHighlight;
  index: number;
}

/** One staggered principle row — its own component so the scroll-reveal
 * hook runs at this component's top level rather than inside a `.map()`. */
const PrincipleRow = ({ highlight, index }: PrincipleRowProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : undefined}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ marginLeft: `${(index % 2) * 28}px` }}
      className="group flex items-start gap-5 border-t border-[#3D3D3D]/10 py-6 transition-colors duration-300 first:border-t-0 first:pt-0"
    >
      <span className="text-sm font-bold text-[#3D3D3D]/30 transition-colors duration-300 group-hover:text-[#F47C20]">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-base font-bold text-[#262626]">
          {highlight.title}
        </h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-[#3D3D3D]/65">
          {highlight.description}
        </p>
      </div>
      <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-[#3D3D3D]/15 transition-colors duration-300 group-hover:bg-[#F47C20]" />
    </motion.div>
  );
};

const WhyJoinSmartMatrix = () => {
  return (
    <Section
      id={CAREERS_SECTION_IDS.whyJoin}
      className="bg-white text-[#262626]"
    >
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F47C20]">
            {WHY_JOIN_HEADING}
          </span>
          <p className="mt-5 max-w-sm text-2xl font-extrabold leading-snug tracking-[-0.01em] text-[#262626] sm:text-3xl">
            {WHY_JOIN_STATEMENT}
          </p>
        </div>

        <div>
          {CAREER_HIGHLIGHTS.map((highlight, index) => (
            <PrincipleRow key={highlight.title} highlight={highlight} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyJoinSmartMatrix;
