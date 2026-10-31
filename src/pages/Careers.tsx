import CareersFinalCta from "../features/careers/components/CareersFinalCta";
import CareersHero from "../features/careers/components/CareersHero";
import GrowthAndLearning from "../features/careers/components/GrowthAndLearning";
import HowWeHire from "../features/careers/components/HowWeHire";
import OpenPositions from "../features/careers/components/OpenPositions";
import OurCulture from "../features/careers/components/OurCulture";
import WhyJoinSmartMatrix from "../features/careers/components/WhyJoinSmartMatrix";
import { SITE } from "../constants/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const Careers = () => {
  useDocumentTitle(`Careers | ${SITE.shortName}`);

  return (
    <div>
      <CareersHero />
      <WhyJoinSmartMatrix />
      <OurCulture />
      <GrowthAndLearning />
      <OpenPositions />
      <HowWeHire />
      <CareersFinalCta />
    </div>
  );
};

export default Careers;
