import Section from "../../../components/layout/Section";
import type { CoreService } from "../data";

interface ServiceDetailCapabilitiesProps {
  service: CoreService;
}

const ServiceDetailCapabilities = ({ service }: ServiceDetailCapabilitiesProps) => (
  <Section spacing="none" className="bg-white pt-14 pb-0 text-[#262626] sm:pt-18 lg:pt-24">
    <header className="mb-heading max-w-2xl lg:mb-heading-lg">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8690f]">
        Key Capabilities
      </span>
      <h2 className="mt-4 text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
        Everything that goes into this service.
      </h2>
    </header>

    <div className="flex flex-wrap gap-2.5">
      {service.detail.capabilities.map((capability) => (
        <span
          key={capability}
          className="rounded-full border border-[#3D3D3D]/10 bg-[#FFFCF7] px-4 py-2 text-sm font-medium text-[#3D3D3D]/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F47C20]/40 hover:bg-[#FFF8F0] hover:text-[#262626]"
        >
          {capability}
        </span>
      ))}
    </div>
  </Section>
);

export default ServiceDetailCapabilities;
