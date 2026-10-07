import Section from "../../../components/layout/Section";
import type { CoreService } from "../data";
import { SERVICE_DETAIL_PROCESS, SERVICE_DETAIL_PROCESS_HEADING } from "../data";

import ProcessTimeline from "./ProcessTimeline";

interface ServiceDetailProcessProps {
  service: CoreService;
}

const ServiceDetailProcess = ({ service }: ServiceDetailProcessProps) => {
  const steps = service.detail.processOverride ?? SERVICE_DETAIL_PROCESS;

  return (
    <Section className="bg-[#FFFCF7] text-[#262626]">
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {SERVICE_DETAIL_PROCESS_HEADING}
        </h2>
        <p className="mt-4 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg">
          A consistent SmartMatrix process, applied to this service.
        </p>
      </header>

      <ProcessTimeline steps={steps} />
    </Section>
  );
};

export default ServiceDetailProcess;
