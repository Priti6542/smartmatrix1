import Section from "../../../components/layout/Section";
import { CONTACT_FINAL_CTA } from "../data";

interface ContactFinalCtaProps {
  onScrollToForm: () => void;
}

const ContactFinalCta = ({ onScrollToForm }: ContactFinalCtaProps) => {
  return (
    <Section className="relative overflow-hidden bg-[#262626] text-white">
      <div className="pointer-events-none absolute -top-24 -left-24 h-[320px] w-[320px] rounded-full bg-[#F47C20]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -bottom-24 h-[280px] w-[280px] rounded-full bg-[#FDB913]/10 blur-3xl" />

      <div className="relative mx-auto max-w-xl text-center">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {CONTACT_FINAL_CTA.heading}
        </h2>
        <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
          {CONTACT_FINAL_CTA.description}
        </p>

        <div className="mt-9">
          <button
            type="button"
            onClick={onScrollToForm}
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#F47C20] px-8 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(244,124,32,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f]"
          >
            {CONTACT_FINAL_CTA.primaryLabel}
          </button>
        </div>
      </div>
    </Section>
  );
};

export default ContactFinalCta;
