import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { cx } from "../../../utils/helpers";
import { CAREERS_HERO, CAREERS_HERO_TAG, CAREERS_SECTION_IDS } from "../data";

/** Clearance for the fixed navbar — same heights as the other pages' heroes. */
const NAVBAR_CLEARANCE_CLASS = "pt-24 lg:pt-28";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/**
 * Editorial split hero — a photograph-led composition rather than the
 * abstract diagrams used on the Home/About/Services heroes, so Careers
 * reads as human rather than technical.
 */
const CareersHero = () => {
  const { title, description, backgroundImage } = CAREERS_HERO;

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
              Careers
            </span>

            <h1 className="mt-5 max-w-[560px] text-[2rem] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#262626] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem]">
              {title}
            </h1>

            <p className="mt-6 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg sm:leading-8">
              {description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => scrollToSection(CAREERS_SECTION_IDS.openPositions)}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F47C20] px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(244,124,32,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f]"
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
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#3D3D3D]/20 px-7 text-sm font-semibold text-[#3D3D3D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3D3D3D]/40 hover:bg-[#3D3D3D]/5"
              >
                Why Smart Matrix?
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -right-4 -bottom-4 h-full w-full rounded-[28px] border border-[#F47C20]/20 bg-[#FFF8F0] sm:-right-6 sm:-bottom-6" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(38,38,38,0.12)] sm:aspect-[5/6]">
              <img
                src={backgroundImage}
                alt="People working together at Smart Matrix"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute top-5 -left-4 flex items-center gap-2 rounded-full border border-[#3D3D3D]/10 bg-white px-4 py-2 shadow-[0_10px_25px_rgba(38,38,38,0.1)] sm:-left-6">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#F47C20]" />
              <span className="text-xs font-semibold text-[#262626]">
                {CAREERS_HERO_TAG}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersHero;
