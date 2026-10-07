import { Link } from "react-router-dom";

import Section from "../../../components/layout/Section";
import { HOME_FINAL_CTA } from "../data";

const HomeFinalCta = () => {
  return (
    <Section className="relative overflow-hidden bg-[#262626] text-white">
      <div className="pointer-events-none absolute -top-24 -right-24 h-[320px] w-[320px] rounded-full bg-[#F7941E]/20 blur-3xl" />

      <div className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.01em] sm:text-4xl lg:text-[2.75rem]">
          {HOME_FINAL_CTA.heading}
        </h2>
        <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
          {HOME_FINAL_CTA.description}
        </p>

        <Link
          to={HOME_FINAL_CTA.cta.path}
          className="mt-9 inline-flex h-12 items-center justify-center rounded-full bg-[#F7941E] px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(247,148,30,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8750A]"
        >
          {HOME_FINAL_CTA.cta.label}
        </Link>
      </div>
    </Section>
  );
};

export default HomeFinalCta;
