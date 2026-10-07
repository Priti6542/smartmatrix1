import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Section from "../../../components/layout/Section";
import { getServiceDetailPath } from "../../../constants/routes";
import type { CoreService } from "../data";
import { getServiceBySlug } from "../data";

import Reveal from "./Reveal";

interface ServiceDetailRelatedProps {
  service: CoreService;
}

const ServiceDetailRelated = ({ service }: ServiceDetailRelatedProps) => {
  const related = service.detail.relatedSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((entry): entry is CoreService => entry !== undefined);

  if (related.length === 0) return null;

  return (
    <Section className="bg-white text-[#262626]">
      <Reveal>
        <h2 className="mb-heading max-w-2xl text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:mb-heading-lg lg:text-[2.5rem]">
          Related services.
        </h2>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {related.map((relatedService, index) => {
          const Icon = relatedService.icon;
          return (
            <Reveal key={relatedService.slug} delay={(index % 3) * 0.08}>
              <Link
                to={getServiceDetailPath(relatedService.slug)}
                className="group flex h-full flex-col rounded-2xl border border-[#3D3D3D]/10 bg-[#FFFCF7] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#F7941E]/30"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F7941E]">
                  <Icon size={18} />
                </span>
                <h3 className="mt-5 text-base font-bold text-[#262626]">
                  {relatedService.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#F7941E]">
                  Explore Service
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
};

export default ServiceDetailRelated;
