import HealthcareFeatures from "../../features/healthcare/components/HealthcareFeatures";
import HealthcareHero from "../../features/healthcare/components/HealthcareHero";
import HealthcareServices from "../../features/healthcare/components/HealthcareServices";

const Healthcare = () => {
  return (
    <div>
      <HealthcareHero />
      <HealthcareServices />
      <HealthcareFeatures />
    </div>
  );
};

export default Healthcare;
