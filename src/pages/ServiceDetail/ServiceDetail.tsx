import { Navigate, useParams } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import ServiceDetailCapabilities from "../../features/services/components/ServiceDetailCapabilities";
import ServiceDetailHero from "../../features/services/components/ServiceDetailHero";
import ServiceDetailOutcomes from "../../features/services/components/ServiceDetailOutcomes";
import ServiceDetailProblems from "../../features/services/components/ServiceDetailProblems";
import ServiceDetailProcess from "../../features/services/components/ServiceDetailProcess";
import ServiceDetailRelated from "../../features/services/components/ServiceDetailRelated";
import ServiceDetailTechnology from "../../features/services/components/ServiceDetailTechnology";
import ServiceDetailWhatWeBuild from "../../features/services/components/ServiceDetailWhatWeBuild";
import ServicesFinalCta from "../../features/services/components/ServicesFinalCta";
import { getServiceBySlug } from "../../features/services/data";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to={ROUTES.SERVICES} replace />;
  }

  return (
    <div>
      <ServiceDetailHero service={service} />
      <ServiceDetailWhatWeBuild service={service} />
      <ServiceDetailProblems service={service} />
      <ServiceDetailCapabilities service={service} />
      <ServiceDetailProcess service={service} />
      <ServiceDetailTechnology service={service} />
      <ServiceDetailOutcomes service={service} />
      <ServiceDetailRelated service={service} />
      <ServicesFinalCta />
    </div>
  );
};

export default ServiceDetail;
