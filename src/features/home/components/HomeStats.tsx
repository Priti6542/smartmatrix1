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
    <div ref={ref} className="px-4 text-center first:pl-0 last:pr-0 sm:text-left">
      <p className="text-3xl font-extrabold text-[#F7941E] sm:text-4xl">
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
      containerClassName="grid grid-cols-2 divide-x divide-y divide-slate-100 py-10 sm:grid-cols-4 sm:divide-y-0 lg:py-12"
    >
      {HOME_STATS.map((stat) => (
        <StatFigure key={stat.label} {...stat} />
      ))}
    </Section>
  );
};

export default HomeStats;
