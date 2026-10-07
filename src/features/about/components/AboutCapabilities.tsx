import Section from "../../../components/layout/Section";
import {
  ABOUT_CAPABILITIES,
  ABOUT_CAPABILITIES_HEADING,
  ABOUT_CAPABILITIES_SUBTITLE,
} from "../data";

const AboutCapabilities = () => {
  return (
    <Section className="bg-white text-[#262626]">
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {ABOUT_CAPABILITIES_HEADING}
        </h2>
        <p className="mt-4 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg">
          {ABOUT_CAPABILITIES_SUBTITLE}
        </p>
      </header>

      <div className="grid grid-cols-1 gap-gap sm:grid-cols-2 lg:grid-cols-3 lg:gap-gap-lg">
        {ABOUT_CAPABILITIES.map((capability) => {
          const Icon = capability.icon;

          return (
            <div
              key={capability.index}
              className="rounded-2xl border border-[#3D3D3D]/10 bg-white p-7 shadow-[0_4px_20px_rgba(61,61,61,0.05)] transition-shadow duration-300 hover:shadow-[0_12px_32px_rgba(61,61,61,0.1)]"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F7941E]">
                  <Icon size={20} strokeWidth={1.75} />
                </span>
                <span className="text-xs font-semibold text-[#3D3D3D]/40">
                  {capability.index}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold">{capability.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#3D3D3D]/65">
                {capability.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

export default AboutCapabilities;
