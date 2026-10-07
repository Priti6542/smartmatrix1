import Section from "../../../components/layout/Section";
import {
  ABOUT_BELIEFS,
  ABOUT_BELIEFS_HEADING,
  ABOUT_BELIEFS_SUBTITLE,
} from "../data";

const AboutBeliefs = () => {
  return (
    <Section className="bg-[#FFFCF7] text-[#262626]">
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {ABOUT_BELIEFS_HEADING}
        </h2>
        <p className="mt-4 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg">
          {ABOUT_BELIEFS_SUBTITLE}
        </p>
      </header>

      <div className="grid grid-cols-1 divide-y divide-[#3D3D3D]/10 overflow-hidden rounded-2xl border border-[#3D3D3D]/10 bg-white sm:grid-cols-2 sm:divide-x">
        {ABOUT_BELIEFS.map((principle) => (
          <div key={principle.index} className="relative overflow-hidden p-8 lg:p-10">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -top-3 right-4 text-7xl font-extrabold text-[#F7941E]/10 lg:text-8xl"
            >
              {principle.index}
            </span>
            <h3 className="relative text-lg font-bold">{principle.title}</h3>
            <p className="relative mt-3 max-w-[32ch] text-sm leading-6 text-[#3D3D3D]/70">
              {principle.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AboutBeliefs;
