import { Link } from "react-router-dom";

import Section from "../../../components/layout/Section";
import { ABOUT_FINAL_CTA } from "../data";

const AboutFinalCta = () => {
  return (
    <Section className="relative overflow-hidden bg-[#262626] text-white">
      <div className="pointer-events-none absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full bg-[#F7941E]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-[280px] w-[280px] rounded-full bg-[#FDB913]/10 blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {ABOUT_FINAL_CTA.heading}
        </h2>
        <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
          {ABOUT_FINAL_CTA.description}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to={ABOUT_FINAL_CTA.primaryCta.path}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#F7941E] px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(247,148,30,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8750A]"
          >
            {ABOUT_FINAL_CTA.primaryCta.label}
          </Link>

          <Link
            to={ABOUT_FINAL_CTA.secondaryCta.path}
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/50 hover:bg-white/5"
          >
            {ABOUT_FINAL_CTA.secondaryCta.label}
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default AboutFinalCta;
