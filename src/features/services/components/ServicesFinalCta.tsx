import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

import Section from "../../../components/layout/Section";
import { SERVICES_FINAL_CTA } from "../data";

const GLOW_PULSE_TRANSITION = {
  duration: 5,
  repeat: Infinity,
  ease: "easeInOut",
} as const;

const ServicesFinalCta = () => {
  const prefersReducedMotion = useReducedMotion();
  const pulse = prefersReducedMotion
    ? undefined
    : { opacity: [0.7, 1, 0.7] };

  return (
    <Section className="relative overflow-hidden bg-[#262626] text-white">
      <motion.div
        animate={pulse}
        transition={GLOW_PULSE_TRANSITION}
        className="pointer-events-none absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full bg-[#F7941E]/15 blur-3xl"
      />
      <motion.div
        animate={pulse}
        transition={{ ...GLOW_PULSE_TRANSITION, delay: 1.5 }}
        className="pointer-events-none absolute -right-24 -bottom-24 h-[280px] w-[280px] rounded-full bg-[#FDB913]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {SERVICES_FINAL_CTA.heading}
        </h2>
        <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
          {SERVICES_FINAL_CTA.description}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to={SERVICES_FINAL_CTA.primaryCta.path}
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F7941E] px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(247,148,30,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8750A]"
          >
            {SERVICES_FINAL_CTA.primaryCta.label}
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to={SERVICES_FINAL_CTA.secondaryCta.path}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5"
          >
            {SERVICES_FINAL_CTA.secondaryCta.label}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default ServicesFinalCta;
