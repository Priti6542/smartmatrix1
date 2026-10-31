import CountUp from "react-countup";

import Section from "../../../components/layout/Section";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import type { HomeStat } from "../data";
import { HOME_STATS } from "../data";

const StatFigure = ({ value, suffix, label }: HomeStat) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.6,
  });

  return (
    <div ref={ref} className="px-4 text-center sm:px-6 sm:text-left sm:first:pl-0 sm:last:pr-0">
      <p className="text-3xl font-extrabold text-[#F47C20] sm:text-4xl">
        {isVisible ? (
          <CountUp start={0} end={value} suffix={suffix} duration={2.2} />
        ) : (
          `0${suffix}`
        )}
      </p>
      <p className="mt-1.5 text-sm text-[#3D3D3D]/60">{label}</p>
    </div>
  );
};

const HomeStats = () => {
  return (
    <Section
      className="border-y border-slate-100 bg-white"
      spacing="none"
      containerClassName="py-10 lg:py-12"
    >
      <div className="grid grid-cols-2 gap-px overflow-hidden bg-slate-100 sm:grid-cols-4 sm:bg-transparent sm:divide-x sm:divide-slate-100">
        {HOME_STATS.map((stat) => (
          <div key={stat.label} className="bg-white py-4 sm:bg-transparent sm:py-0">
            <StatFigure {...stat} />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HomeStats;
