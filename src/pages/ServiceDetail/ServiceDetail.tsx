import { Navigate, useParams } from "react-router-dom";

import { ROUTES } from "../../constants/routes";
import ServiceDetailCapabilities from "../../features/services/components/ServiceDetailCapabilities";
import ServiceDetailHero from "../../features/services/components/ServiceDetailHero";
import ServiceDetailOutcomes from "../../features/services/components/ServiceDetailOutcomes";
import ServiceDetailProcess from "../../features/services/components/ServiceDetailProcess";
import ServiceDetailRelated from "../../features/services/components/ServiceDetailRelated";
import ServiceDetailWhatWeBuild from "../../features/services/components/ServiceDetailWhatWeBuild";
import ServicesFinalCta from "../../features/services/components/ServicesFinalCta";
import { SITE } from "../../constants/site";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { getServiceBySlug } from "../../features/services/data";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  useDocumentTitle(
    service ? `${service.title} | ${SITE.shortName}` : SITE.shortName,
  );

  if (!service) {
    return <Navigate to={ROUTES.SERVICES} replace />;
  }

  return (
    <div>
      <ServiceDetailHero service={service} />
      <ServiceDetailWhatWeBuild service={service} />
      <ServiceDetailCapabilities service={service} />
      <ServiceDetailProcess service={service} />
      <ServiceDetailOutcomes service={service} />
      <ServiceDetailRelated service={service} />
      <ServicesFinalCta />
    </div>
  );
};

export default ServiceDetail;
