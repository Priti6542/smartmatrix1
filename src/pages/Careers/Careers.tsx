import CareersFinalCta from "../../features/careers/components/CareersFinalCta";
import CareersHero from "../../features/careers/components/CareersHero";
import GrowthAndLearning from "../../features/careers/components/GrowthAndLearning";
import HowWeHire from "../../features/careers/components/HowWeHire";
import LifeAtSmartMatrix from "../../features/careers/components/LifeAtSmartMatrix";
import OpenPositions from "../../features/careers/components/OpenPositions";
import OurCulture from "../../features/careers/components/OurCulture";
import WhyJoinSmartMatrix from "../../features/careers/components/WhyJoinSmartMatrix";

const Careers = () => {
  return (
    <div>
      <CareersHero />
      <WhyJoinSmartMatrix />
      <OurCulture />
      <LifeAtSmartMatrix />
      <GrowthAndLearning />
      <OpenPositions />
      <HowWeHire />
      <CareersFinalCta />
    </div>
  );
};

export default Careers;
