import { SITE } from "../../constants/site";
import HealthcareFeatures from "../../features/healthcare/components/HealthcareFeatures";
import HealthcareFinalCta from "../../features/healthcare/components/HealthcareFinalCta";
import HealthcareHero from "../../features/healthcare/components/HealthcareHero";
import HealthcareServices from "../../features/healthcare/components/HealthcareServices";
import { HEALTHCARE_HERO } from "../../features/healthcare/data";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";

const Healthcare = () => {
  useDocumentTitle(`${HEALTHCARE_HERO.title} | ${SITE.shortName}`);

  return (
    <div>
      <HealthcareHero />
      <HealthcareServices />
      <HealthcareFeatures />
      <HealthcareFinalCta />
    </div>
  );
};

export default Healthcare;
