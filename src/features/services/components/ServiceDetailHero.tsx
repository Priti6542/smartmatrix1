import { ArrowRight, ArrowUpRight, Check, Sparkles } from "lucide-react";
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

interface ServiceDetailHeroProps {
  service: CoreService;
}

const ServiceDetailHero = ({ service }: ServiceDetailHeroProps) => {
  const Icon = service.icon;

  return (
    <section
      className={cx(
        "relative overflow-hidden bg-[#FFFCF7] pb-16 text-[#3D3D3D] lg:pb-24",
        NAVBAR_CLEARANCE_CLASS,
      )}
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#3D3D3D 1px, transparent 1px), linear-gradient(90deg, #3D3D3D 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* orange glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#F7941E]/10 blur-3xl"
        />

        {/* yellow glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute bottom-0 left-[-120px] h-72 w-72 rounded-full bg-[#FDB913]/10 blur-3xl"
        />
      </div>

      <div className={cx(CONTAINER_CLASS, "relative z-10")}>
        {/* =========================================================
            BREADCRUMB
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <ServiceDetailBreadcrumb title={service.title} />
        </motion.div>

        {/* =========================================================
            HERO
        ========================================================= */}

        <div className="mt-8 grid items-center gap-12 lg:mt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            {/* Service identity */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F7941E] text-white shadow-[0_10px_25px_rgba(247,148,30,0.25)]">
                <Icon size={19} strokeWidth={2} />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#E8750A]">
                  {service.category}
                </p>

                <p className="mt-0.5 text-sm font-semibold text-[#262626]">
                  {service.title}
                </p>
              </div>
            </div>

            {/* Eyebrow */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#F7941E]/20 bg-white/80 px-3.5 py-2 shadow-sm backdrop-blur">
              <Sparkles size={13} className="text-[#F7941E]" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#3D3D3D]/70">
                Business-focused digital solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-[700px] text-[2.45rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#262626] sm:text-[3.1rem] md:text-[3.65rem] lg:text-[4rem]">
              {service.detail.tagline}
            </h1>

            {/* Orange accent */}
            <div className="mt-6 flex items-center gap-2">
              <span className="h-1 w-14 rounded-full bg-[#F7941E]" />
              <span className="h-1 w-5 rounded-full bg-[#FDB913]" />
            </div>

            {/* Description */}
            <p className="mt-6 max-w-[650px] text-base leading-7 text-[#3D3D3D]/70 sm:text-lg sm:leading-8">
              {service.detail.heroDescription}
            </p>

            {/* Trust / value points */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {[
                "Business-first approach",
                "Scalable solutions",
                "Built around your needs",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-[#3D3D3D]/75"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F7941E]/10">
                    <Check size={12} className="text-[#E8750A]" />
                  </span>

                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to={ROUTES.CONTACT}
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#F7941E] px-7 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(247,148,30,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E8750A] hover:shadow-[0_18px_40px_rgba(247,148,30,0.32)]"
              >
                Start a Project

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to={ROUTES.CONTACT}
                className="group inline-flex h-13 items-center justify-center gap-2 rounded-full border border-[#3D3D3D]/15 bg-white/70 px-7 text-sm font-semibold text-[#3D3D3D] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#F7941E]/40 hover:bg-white"
              >
                Talk to Our Team

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT VISUAL
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, x: 35, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{
              duration: 0.75,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Decorative number */}
            <div className="pointer-events-none absolute -right-2 -top-12 select-none text-[110px] font-black leading-none tracking-[-0.08em] text-[#3D3D3D]/[0.035] sm:text-[150px]">
              {service.index}
            </div>

            {/* Glow behind visual */}
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
                opacity: [0.35, 0.5, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-8 rounded-[40px] bg-[#F7941E]/10 blur-3xl"
            />

            {/* Main visual frame */}
            <div className="relative overflow-hidden rounded-[30px] border border-[#3D3D3D]/10 bg-white p-3 shadow-[0_25px_70px_rgba(38,38,38,0.10)] sm:p-4">
              {/* top browser-style bar */}
              <div className="mb-3 flex items-center justify-between rounded-2xl border border-[#3D3D3D]/8 bg-[#FAFAF9] px-4 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#F7941E]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FDB913]/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3D3D3D]/15" />
                </div>

                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3D3D3D]/40">
                  {service.title}
                </span>

                <div className="h-5 w-5 rounded-full bg-[#F7941E]/10" />
              </div>

              {/* Service visual */}
              <div className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[22px] bg-[#FFFCF7] px-5 py-8 sm:min-h-[400px]">
                {/* subtle grid */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#3D3D3D 1px, transparent 1px), linear-gradient(90deg, #3D3D3D 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />

                {/* glow */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F7941E]/10 blur-3xl" />

                <div className="relative z-10 w-full">
                  <ServiceVisual variant={service.visual} />
                </div>
              </div>

              {/* bottom service strip */}
              <div className="mt-3 flex flex-col gap-3 rounded-2xl bg-[#262626] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FDB913]">
                    Smart Software Services
                  </p>

                  <p className="mt-1 text-sm font-medium text-white">
                    Technology designed around your business.
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#F7941E] text-white">
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            BOTTOM POSITIONING STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-12 border-t border-[#3D3D3D]/10 pt-6 lg:mt-16"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-[#3D3D3D]/60">
              We combine strategy, design and technology to create solutions
              that solve real business challenges.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#3D3D3D]/45">
              <span className="h-1.5 w-1.5 rounded-full bg-[#F7941E]" />
              {service.category}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceDetailHero;