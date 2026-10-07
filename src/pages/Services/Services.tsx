import ServicesChooseYourPath from "../../features/services/components/ServicesChooseYourPath";
import ServicesCoreList from "../../features/services/components/ServicesCoreList";
import ServicesFinalCta from "../../features/services/components/ServicesFinalCta";
import ServicesHero from "../../features/services/components/ServicesHero";
import ServicesIndustries from "../../features/services/components/ServicesIndustries";
import ServicesNeedSelector from "../../features/services/components/ServicesNeedSelector";
import ServicesOutcomes from "../../features/services/components/ServicesOutcomes";
import ServicesOverview from "../../features/services/components/ServicesOverview";
import ServicesPrinciples from "../../features/services/components/ServicesPrinciples";
import ServicesProcess from "../../features/services/components/ServicesProcess";
import ServicesTechnology from "../../features/services/components/ServicesTechnology";

const Services = () => {
  return (
    <div>
      <ServicesHero />
      <ServicesNeedSelector />
      <ServicesOverview />
      <ServicesCoreList />
      <ServicesChooseYourPath />
      <ServicesProcess />
      <ServicesPrinciples />
      <ServicesTechnology />
      <ServicesOutcomes />
      <ServicesIndustries />
      <ServicesFinalCta />
    </div>
  );
};

export default Services;
