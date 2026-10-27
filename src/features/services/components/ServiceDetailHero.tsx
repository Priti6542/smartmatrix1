import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { ROUTES } from "../../../constants/routes";
import { cx } from "../../../utils/helpers";
import type { CoreService } from "../data";

import ServiceDetailBreadcrumb from "./ServiceDetailBreadcrumb";
import ServiceVisual from "./ServiceVisual";

/** Clearance for the fixed navbar. */
const NAVBAR_CLEARANCE_CLASS = "pt-24 lg:pt-28";

const TRUST_POINTS = [
  "Business-first approach",
  "Scalable solutions",
  "Built around your needs",
];

interface ServiceDetailHeroProps {
  service: CoreService;
}

const ServiceDetailHero = ({ service }: ServiceDetailHeroProps) => {
  const Icon = service.icon;

  return (
    <section
      className={cx(
        "relative overflow-hidden bg-[#FFFCF7] pb-10 text-[#3D3D3D]",
        NAVBAR_CLEARANCE_CLASS,
      )}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#F47C20]/10 blur-3xl" />
        <div className="absolute bottom-0 left-[-120px] h-72 w-72 rounded-full bg-[#FDB913]/10 blur-3xl" />
      </div>

      <div className={cx(CONTAINER_CLASS, "relative z-10")}>
        <ServiceDetailBreadcrumb title={service.title} />

        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F47C20] text-white">
                <Icon size={18} strokeWidth={2} />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#d8690f]">
                {service.category}
              </span>
            </div>

            <h1 className="mt-5 max-w-[640px] text-[2.125rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#262626] sm:text-[2.75rem] md:text-[3.25rem] lg:text-[3.5rem]">
              {service.detail.tagline}
            </h1>

            <p className="mt-5 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg">
              {service.detail.heroDescription}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2.5">
              {TRUST_POINTS.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm font-medium text-[#3D3D3D]/75"
                >
                  <Check size={14} className="shrink-0 text-[#F47C20]" />
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to={ROUTES.CONTACT}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F47C20] px-7 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(244,124,32,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f]"
              >
                Start a Project
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to={ROUTES.CONTACT}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#3D3D3D]/15 px-7 text-sm font-semibold text-[#3D3D3D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3D3D3D]/35"
              >
                Talk to Our Team
                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative drop-shadow-[0_20px_45px_rgba(38,38,38,0.1)]"
          >
            <ServiceVisual variant={service.visual} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;
