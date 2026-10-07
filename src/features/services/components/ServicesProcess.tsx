import Section from "../../../components/layout/Section";
import {
  SERVICES_PROCESS_HEADING,
  SERVICES_PROCESS_STEPS,
  SERVICES_PROCESS_SUBTITLE,
} from "../data";

import ProcessTimeline from "./ProcessTimeline";

const ServicesProcess = () => {
  return (
    <Section className="bg-[#FFFCF7] text-[#262626]">
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {SERVICES_PROCESS_HEADING}
        </h2>
        <p className="mt-4 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg">
          {SERVICES_PROCESS_SUBTITLE}
        </p>
      </header>

      <ProcessTimeline steps={SERVICES_PROCESS_STEPS} />
    </Section>
  );
};

export default ServicesProcess;
