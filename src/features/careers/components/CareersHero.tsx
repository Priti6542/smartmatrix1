import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { cx } from "../../../utils/helpers";
import {
  CAREERS_HERO,
  CAREERS_HERO_TAG,
  CAREERS_SECTION_IDS,
  WHY_JOIN_STATEMENT,
} from "../data";

const NAVBAR_CLEARANCE_CLASS = "pt-24 lg:pt-28";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/** Editorial hero matching the Services page's visual language — warm
 * cream field, orange-highlighted heading, card-framed visual on the
 * right (a real photo here, rather than an abstract diagram). */
const CareersHero = () => {
  return (
    <section
      className={cx(
        "relative overflow-hidden bg-[#FFFCF7] pb-16 text-[#262626] lg:pb-20",
        NAVBAR_CLEARANCE_CLASS,
      )}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#FDB913]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#F47C20]/8 blur-3xl" />
      </div>

      <div className={cx(CONTAINER_CLASS, "relative z-10")}>
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 border-b border-[#3D3D3D]/10 pb-5"
        >
          <span className="h-2 w-2 rounded-full bg-[#F47C20]" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D3D3D]/60">
            Careers
          </span>
        </motion.div>

        <div className="grid items-center gap-14 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 lg:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <h1 className="max-w-[600px] text-[2.25rem] font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-[2.9rem] md:text-[3.5rem] lg:text-[4rem]">
              {CAREERS_HERO.headingPrefix}
              <span className="text-[#F47C20]">{CAREERS_HERO.headingHighlight}</span>
              {CAREERS_HERO.headingSuffix}
            </h1>

            <p className="mt-6 max-w-[460px] text-base leading-7 text-[#3D3D3D]/65 sm:text-lg sm:leading-8">
              {CAREERS_HERO.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection(CAREERS_SECTION_IDS.openPositions)}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F47C20] px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(244,124,32,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f]"
              >
                View Open Positions
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={() => scrollToSection(CAREERS_SECTION_IDS.whyJoin)}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#3D3D3D]/15 bg-white/60 px-7 text-sm font-semibold text-[#3D3D3D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F47C20]/40 hover:bg-white"
              >
                Why Smart Matrix?
              </button>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF2E4] text-[#F47C20]">
                <Check size={14} strokeWidth={2.5} />
              </div>
              <span className="text-xs font-medium text-[#3D3D3D]/50 sm:text-sm">
                {CAREERS_HERO_TAG}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#3D3D3D]/10 bg-white p-3 shadow-[0_20px_60px_rgba(61,61,61,0.1)] sm:p-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] sm:aspect-[5/6]">
                <img
                  src={CAREERS_HERO.backgroundImage}
                  alt="People working together at Smart Matrix"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-[#FDB913]/10 blur-3xl" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-14 border-t border-[#3D3D3D]/10 pt-6 lg:mt-16"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-[#3D3D3D]/50 sm:text-base">
              {WHY_JOIN_STATEMENT}
            </p>
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F47C20]">
              Smart Matrix Digital Services
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareersHero;
