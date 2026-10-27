import { Check } from "lucide-react";

import Section from "../../../components/layout/Section";
import { HEALTHCARE_SERVICES, HEALTHCARE_SERVICES_SECTION_ID } from "../data";

const HealthcareServices = () => {
  return (
    <Section
      id={HEALTHCARE_SERVICES_SECTION_ID}
      spacing="none"
      className="scroll-mt-28 bg-white pt-14 pb-0 text-[#262626] sm:pt-18 lg:pt-24"
    >
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d8690f]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F47C20]" />
          What We Do
        </span>
        <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          Revenue cycle services built for US healthcare providers.
        </h2>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {HEALTHCARE_SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              className="group rounded-2xl border border-[#3D3D3D]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F47C20]/40 hover:shadow-[0_16px_40px_rgba(61,61,61,0.08)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20] transition-colors duration-300 group-hover:bg-[#F47C20] group-hover:text-white">
                <Icon sx={{ fontSize: 22 }} />
              </span>
              <h3 className="mt-5 text-lg font-bold">{service.title}</h3>

              <ul className="mt-5 space-y-2.5">
                {service.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2.5 text-sm leading-6 text-[#3D3D3D]/70"
                  >
                    <Check size={15} className="mt-0.5 shrink-0 text-[#F47C20]" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default HealthcareServices;
