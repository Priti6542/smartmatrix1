import { motion } from "framer-motion";

import { ABOUT_HERO_JOURNEY } from "../data";

/**
 * The product journey (Idea → Strategy → Design → Build → Grow) as a
 * vertical, connected sequence — distinct from the homepage's node-graph
 * `NetworkVisual`. A single thin line threads through orange-ringed circles,
 * one per stage, with a small gold accent dot on the active (final) stage.
 */
const JourneyVisual = () => {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[#FDB913]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative rounded-3xl border border-[#3D3D3D]/10 bg-white p-8 shadow-[0_20px_60px_rgba(61,61,61,0.08)]"
      >
        {/* Subtle grid, kept faint — depth, not decoration. */}
        <div
          className="pointer-events-none absolute inset-8 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#3D3D3D 1px, transparent 1px), linear-gradient(90deg, #3D3D3D 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <ol className="relative flex flex-col">
          {/* The connecting line, drawn once behind every step. */}
          <div className="absolute top-3 bottom-3 left-3 w-px bg-[#3D3D3D]/15" />

          {ABOUT_HERO_JOURNEY.map((stage, index) => {
            const isLast = index === ABOUT_HERO_JOURNEY.length - 1;

            return (
              <li
                key={stage}
                className="relative flex items-center gap-4 py-4 first:pt-0 last:pb-0"
              >
                <span
                  className={
                    isLast
                      ? "relative z-[1] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F7941E]"
                      : "relative z-[1] flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-[#F7941E] bg-white"
                  }
                >
                  {isLast && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FDB913]" />
                  )}
                </span>
                <span
                  className={
                    isLast
                      ? "text-sm font-bold uppercase tracking-[0.1em] text-[#262626]"
                      : "text-sm font-semibold uppercase tracking-[0.1em] text-[#3D3D3D]/60"
                  }
                >
                  {stage}
                </span>
              </li>
            );
          })}
        </ol>
      </motion.div>
    </div>
  );
};

export default JourneyVisual;
