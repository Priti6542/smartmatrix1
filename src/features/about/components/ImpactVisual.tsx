import { motion } from "framer-motion";

import { ABOUT_IMPACT_FLOW } from "../data";

/**
 * Business → Challenge → Solution → Impact, as stacked panels connected by
 * short vertical ties — a different visual language from `JourneyVisual`
 * (rectangles and squares here, instead of circles and a single line), so
 * the two sections beside each other don't read as the same component
 * re-skinned.
 */
const ImpactVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[#F7941E]/8 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative flex flex-col gap-0 rounded-3xl border border-[#3D3D3D]/10 bg-white p-8 shadow-[0_20px_60px_rgba(61,61,61,0.08)]"
      >
        {ABOUT_IMPACT_FLOW.map((stage, index) => {
          const isLast = index === ABOUT_IMPACT_FLOW.length - 1;

          return (
            <div key={stage}>
              <div
                className={
                  isLast
                    ? "flex items-center gap-3 rounded-xl border border-[#F7941E]/30 bg-[#FFF8F0] px-5 py-4"
                    : "flex items-center gap-3 rounded-xl border border-[#3D3D3D]/10 bg-white px-5 py-4"
                }
              >
                <span
                  className={
                    isLast
                      ? "h-2.5 w-2.5 shrink-0 rounded-[3px] bg-[#F7941E]"
                      : "h-2.5 w-2.5 shrink-0 rounded-[3px] border border-[#3D3D3D]/30"
                  }
                />
                <span
                  className={
                    isLast
                      ? "text-sm font-bold uppercase tracking-[0.1em] text-[#262626]"
                      : "text-sm font-semibold uppercase tracking-[0.1em] text-[#3D3D3D]/60"
                  }
                >
                  {stage}
                </span>
              </div>

              {!isLast && (
                <div className="ml-[1.9rem] h-4 w-px bg-[#3D3D3D]/15" />
              )}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default ImpactVisual;
