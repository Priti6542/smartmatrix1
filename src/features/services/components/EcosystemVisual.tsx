import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const TIER_1: readonly string[] = ["Design", "Develop", "AI"];
const TIER_2: readonly string[] = ["Mobile", "Cloud", "Data"];

const PULSE_TRANSITION = {
  duration: 2.6,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

/**
 * A two-tier hierarchical "ecosystem" diagram for the services hero:
 * SmartMatrix branches into three capabilities, each of which extends into
 * a related discipline below. Deliberately distinct from the homepage's
 * `NetworkVisual` (a flat node mesh) and about's `JourneyVisual`/`ImpactVisual`.
 * Nodes pulse gently and highlight on hover; everything is CSS/motion only,
 * no layout or data change to the rest of the hero.
 */
const EcosystemVisual = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeColumn, setActiveColumn] = useState<number | null>(null);

  const pulse = prefersReducedMotion
    ? undefined
    : { scale: [1, 1.06, 1], opacity: [0.9, 1, 0.9] };

  return (
    <div className="relative mx-auto flex w-full max-w-sm flex-col items-center py-6">
      <motion.div
        animate={pulse}
        transition={PULSE_TRANSITION}
        className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F7941E] text-sm font-bold text-white shadow-[0_12px_30px_rgba(247,148,30,0.35)]"
      >
        SM
      </motion.div>

      <div className="h-10 w-px bg-gradient-to-b from-[#F7941E]/60 to-[#3D3D3D]/15" />

      <div className="relative w-full">
        <div className="absolute top-0 right-[12.5%] left-[12.5%] h-px bg-[#3D3D3D]/15" />
        <div className="grid grid-cols-3 gap-3">
          {TIER_1.map((branch, column) => (
            <button
              key={branch}
              type="button"
              onMouseEnter={() => setActiveColumn(column)}
              onMouseLeave={() => setActiveColumn(null)}
              onFocus={() => setActiveColumn(column)}
              onBlur={() => setActiveColumn(null)}
              className="flex flex-col items-center gap-3 focus:outline-none"
            >
              <div className="h-8 w-px bg-[#3D3D3D]/15" />
              <motion.div
                animate={pulse}
                transition={{ ...PULSE_TRANSITION, delay: column * 0.3 }}
                className={`flex h-14 w-14 items-center justify-center rounded-xl border text-center text-[11px] font-semibold transition-colors duration-300 sm:h-16 sm:w-16 sm:text-xs ${
                  activeColumn === column
                    ? "border-[#F7941E] bg-[#FFF8F0] text-[#F7941E]"
                    : "border-[#3D3D3D]/10 bg-white text-[#3D3D3D] shadow-sm"
                }`}
              >
                {branch}
              </motion.div>

              <div
                className={`h-6 w-px transition-colors duration-300 ${
                  activeColumn === column ? "bg-[#F7941E]/50" : "bg-[#3D3D3D]/15"
                }`}
              />
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-lg border text-center text-[10px] font-medium transition-colors duration-300 sm:h-14 sm:w-14 sm:text-[11px] ${
                  activeColumn === column
                    ? "border-[#F7941E]/40 bg-[#FFF8F0] text-[#E8750A]"
                    : "border-[#3D3D3D]/10 bg-[#FFFCF7] text-[#3D3D3D]/70"
                }`}
              >
                {TIER_2[column]}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EcosystemVisual;
