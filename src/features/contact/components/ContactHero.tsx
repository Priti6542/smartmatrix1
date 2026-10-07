import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { cx } from "../../../utils/helpers";
import {
  CONTACT_HERO,
  CONTACT_HERO_PANEL_PROMPT,
  CONTACT_HERO_PANEL_STAGES,
} from "../data";

/** Clearance for the fixed navbar — same heights as the other pages' heroes. */
const NAVBAR_CLEARANCE_CLASS = "pt-24 lg:pt-28";

interface ContactHeroProps {
  onScrollToForm: () => void;
}

/**
 * Editorial split hero. The right side is a dark "conversation panel" —
 * a typographic representation of starting a business conversation —
 * rather than a photo or a generic contact illustration.
 */
const ContactHero = ({ onScrollToForm }: ContactHeroProps) => {
  return (
    <section
      className={cx(
        "bg-[#FFFCF7] pb-16 text-[#3D3D3D] lg:pb-20",
        NAVBAR_CLEARANCE_CLASS,
      )}
    >
      <div className={CONTAINER_CLASS}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F47C20]">
              {CONTACT_HERO.eyebrow}
            </span>

            <h1 className="mt-5 max-w-[560px] text-[2.125rem] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#262626] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem]">
              {CONTACT_HERO.headingPrefix}
              <span className="text-[#F47C20]">
                {CONTACT_HERO.headingHighlight}
              </span>
              {CONTACT_HERO.headingSuffix}
            </h1>

            <p className="mt-6 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg sm:leading-8">
              {CONTACT_HERO.description}
            </p>

            <div className="mt-9">
              <button
                type="button"
                onClick={onScrollToForm}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F47C20] px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(244,124,32,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f]"
              >
                {CONTACT_HERO.primaryCtaLabel}
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative overflow-hidden rounded-[28px] bg-[#262626] p-9 text-white sm:p-11"
          >
            <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#F47C20]/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-[#FDB913]/10 blur-3xl" />

            <p className="relative text-2xl font-extrabold leading-snug tracking-[-0.01em] sm:text-3xl">
              {CONTACT_HERO_PANEL_PROMPT}
            </p>

            <div className="relative mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
              {CONTACT_HERO_PANEL_STAGES.map((stage, index) => (
                <div key={stage} className="flex items-center gap-3">
                  <span
                    className={cx(
                      "rounded-full border px-4 py-2 text-sm font-semibold",
                      index === 0
                        ? "border-[#F47C20] bg-[#F47C20]/10 text-[#F47C20]"
                        : "border-white/15 text-white/60",
                    )}
                  >
                    {stage}
                  </span>
                  {index < CONTACT_HERO_PANEL_STAGES.length - 1 && (
                    <ArrowRight size={14} className="text-white/25" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
