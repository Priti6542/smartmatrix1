import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { ROUTES } from "../../../constants/routes";
import { cx } from "../../../utils/helpers";
import {
  HEALTHCARE_HERO,
  HEALTHCARE_HERO_EYEBROW,
  HEALTHCARE_SERVICES,
  HEALTHCARE_SERVICES_SECTION_ID,
} from "../data";

/** Clearance for the fixed navbar — same heights as the other pages' heroes. */
const NAVBAR_CLEARANCE_CLASS = "pt-24 lg:pt-28";

const scrollToServices = () => {
  document
    .getElementById(HEALTHCARE_SERVICES_SECTION_ID)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/**
 * Editorial split hero. The photo gets a brand-toned gradient wash and
 * glow accents rather than sitting raw, and the floating panel is built
 * as a weighted trust card (not a plain label list) for more presence.
 */
const HealthcareHero = () => {
  return (
    <section
      className={cx(
        "overflow-hidden bg-[#FFFCF7] pb-16 text-[#3D3D3D] lg:pb-24",
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
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F47C20]">
                {HEALTHCARE_HERO_EYEBROW}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F47C20]/20 bg-[#FFF8F0] px-3 py-1 text-[11px] font-semibold text-[#d8690f]">
                <ShieldCheck size={13} />
                HIPAA Compliant
              </span>
            </div>

            <h1 className="mt-6 max-w-[580px] text-[2.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#262626] sm:text-[3.25rem] md:text-[3.75rem] lg:text-[4.25rem]">
              US <span className="text-[#F47C20]">Healthcare</span>
            </h1>

            <p className="mt-6 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg sm:leading-8">
              {HEALTHCARE_HERO.description}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={scrollToServices}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F47C20] px-7 text-sm font-semibold text-white shadow-[0_14px_34px_rgba(244,124,32,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f]"
              >
                Explore Our Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              <Link
                to={ROUTES.CONTACT}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#3D3D3D]/20 px-7 text-sm font-semibold text-[#3D3D3D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3D3D3D]/40 hover:bg-[#3D3D3D]/5"
              >
                Talk to Our Team
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            {/* Glow accents */}
            <div className="pointer-events-none absolute -top-10 -right-10 h-56 w-56 rounded-full bg-[#F47C20]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 -left-10 h-56 w-56 rounded-full bg-[#FDB913]/20 blur-3xl" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] shadow-[0_35px_70px_rgba(38,38,38,0.18)] sm:aspect-[5/6]">
              <img
                src={HEALTHCARE_HERO.backgroundImage}
                alt="US healthcare revenue cycle operations"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#262626]/80 via-[#262626]/10 to-transparent" />
              <div className="absolute inset-0 bg-[#F47C20] mix-blend-multiply opacity-[0.08]" />
            </div>

            {/* Trust card */}
            <div className="absolute inset-x-5 -bottom-10 rounded-2xl border border-[#3D3D3D]/10 bg-white p-5 shadow-[0_20px_45px_rgba(38,38,38,0.14)] sm:right-4 sm:-bottom-8 sm:inset-x-auto sm:w-64 lg:-right-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8690f]">
                Core RCM Services
              </p>
              <div className="mt-3 space-y-2.5">
                {HEALTHCARE_SERVICES.map((service) => (
                  <div key={service.id} className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF8F0] text-[#F47C20]">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm font-semibold text-[#262626]">
                      {service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareHero;
