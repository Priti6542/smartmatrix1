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
    <div ref={ref} className="px-8 text-center first:pl-0 last:pr-0">
      <p className="text-4xl font-extrabold text-[#262626] sm:text-5xl">
        {isVisible ? (
          <CountUp start={0} end={value} suffix={suffix} duration={2.2} />
        ) : (
          `0${suffix}`
        )}
      </p>
      <p className="mt-3 text-sm font-medium tracking-[0.02em] text-[#3D3D3D]/55">
        {label}
      </p>
    </div>
  );
};

const AboutTrust = () => {
  return (
    <Section className="bg-white text-[#262626]" spacing="default">
      <div className="flex flex-wrap items-center justify-center divide-x divide-[#3D3D3D]/10">
        {ABOUT_STATS.map((stat) => (
          <StatFigure key={stat.label} {...stat} />
        ))}
      </div>
    </Section>
  );
};

export default AboutTrust;
