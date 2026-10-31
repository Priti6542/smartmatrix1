import CountUp from "react-countup";

import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import type { CompanyStat } from "../../../constants/companyStats";
import { ABOUT_STATS } from "../data";

const StatFigure = ({ value, suffix, label }: CompanyStat) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.6,
  });

  return (
    <div ref={ref} className="px-4 text-center sm:px-6">
      <p className="text-3xl font-extrabold text-[#262626] sm:text-4xl lg:text-5xl">
        {isVisible ? (
          <CountUp start={0} end={value} suffix={suffix} duration={2.2} />
        ) : (
          `0${suffix}`
        )}
      </p>
      <p className="mt-2 text-xs font-medium tracking-[0.02em] text-[#3D3D3D]/55 sm:mt-3 sm:text-sm">
        {label}
      </p>
    </div>
  );
};

const AboutTrust = () => {
  return (
    <Section className="bg-white text-[#262626]" spacing="default">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-[#3D3D3D]/10 sm:grid-cols-4 sm:rounded-none sm:bg-transparent sm:divide-x sm:divide-[#3D3D3D]/10">
        {ABOUT_STATS.map((stat) => (
          <div key={stat.label} className="bg-white py-6 sm:bg-transparent sm:py-0">
            <StatFigure {...stat} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default AboutTrust;
