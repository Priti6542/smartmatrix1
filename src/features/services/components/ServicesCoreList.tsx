import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React from "react";

import Section from "../../../components/layout/Section";
import { cx } from "../../../utils/helpers";
import { getServiceDetailPath } from "../../../constants/routes";
import type { CoreService } from "../data";
import { CORE_SERVICES } from "../data";

import ServiceVisual from "./ServiceVisual";

interface CoreServiceItemProps {
  service: CoreService;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}

const CoreServiceItem = ({
  service,
  index,
  isActive,
  onSelect,
}: CoreServiceItemProps) => {
  const Icon = service.icon;

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, x: -15 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className={cx(
        "group relative w-full border-b border-[#3D3D3D]/10 px-1 py-5 text-left transition-all duration-300",
        isActive && "border-[#F7941E]/30",
      )}
    >
      {/* Active indicator */}
      <motion.span
        initial={false}
        animate={{
          scaleY: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.25 }}
        className="absolute left-0 top-0 h-full w-[3px] origin-top rounded-full bg-[#F7941E]"
      />

      <div className="flex items-center gap-4 pl-4">
        {/* Number */}
        <span
          className={cx(
            "w-7 text-xs font-bold tracking-wider transition-colors duration-300",
            isActive
              ? "text-[#F7941E]"
              : "text-[#3D3D3D]/25 group-hover:text-[#3D3D3D]/50",
          )}
        >
          {service.index}
        </span>

        {/* Icon */}
        <span
          className={cx(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
            isActive
              ? "bg-[#F7941E] text-white shadow-[0_8px_25px_rgba(247,148,30,0.2)]"
              : "bg-[#FFF8F0] text-[#F7941E] group-hover:bg-[#F7941E] group-hover:text-white",
          )}
        >
          <Icon size={18} />
        </span>

        {/* Title */}
        <div className="min-w-0 flex-1">
          <span
            className={cx(
              "block text-sm font-bold transition-colors duration-300 sm:text-base",
              isActive
                ? "text-[#262626]"
                : "text-[#3D3D3D]/70 group-hover:text-[#262626]",
            )}
          >
            {service.title}
          </span>

          <span
            className={cx(
              "mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300",
              isActive
                ? "text-[#E8750A]"
                : "text-[#3D3D3D]/35 group-hover:text-[#3D3D3D]/50",
            )}
          >
            {service.category}
          </span>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{
            x: isActive ? 0 : -4,
            opacity: isActive ? 1 : 0.35,
          }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#3D3D3D]/10"
        >
          <ArrowUpRight
            size={15}
            className={isActive ? "text-[#F7941E]" : "text-[#3D3D3D]/40"}
          />
        </motion.span>
      </div>
    </motion.button>
  );
};

interface ActiveServiceProps {
  service: CoreService;
}

const ActiveService = ({ service }: ActiveServiceProps) => {
  return (
    <motion.div
      key={service.slug}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="relative overflow-hidden rounded-[28px] border border-[#3D3D3D]/10 bg-[#FFFCF7]"
    >
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#FDB913]/10 blur-3xl" />

      <div className="relative grid lg:grid-cols-[0.9fr_1.1fr]">
        {/* Content */}
        <div className="flex flex-col justify-between p-7 sm:p-9 lg:p-10">
          <div>
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F7941E]/20 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#E8750A]">
                <Sparkles size={12} />
                {service.category}
              </span>

              <span className="text-4xl font-extrabold tracking-[-0.04em] text-[#3D3D3D]/10 sm:text-5xl">
                {service.index}
              </span>
            </div>

            <h3 className="mt-8 max-w-md text-2xl font-extrabold leading-tight tracking-[-0.025em] text-[#262626] sm:text-3xl lg:text-[2.1rem]">
              {service.title}
            </h3>

            <p className="mt-4 max-w-lg text-sm leading-7 text-[#3D3D3D]/70 sm:text-base">
              {service.description}
            </p>

            <div className="mt-7 space-y-3">
              {service.points.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.12 + index * 0.06,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FFF1E3] text-[#F7941E]">
                    <Check size={13} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm text-[#3D3D3D]/75">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <Link
            to={getServiceDetailPath(service.slug)}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#262626] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F7941E]"
          >
            Explore Service
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Visual */}
        <div className="relative min-h-[340px] overflow-hidden bg-[#F7F4EF] p-5 sm:min-h-[400px] lg:min-h-[500px] lg:p-7">
          {/* Grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.45]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(61,61,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(61,61,61,0.06) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          {/* Animated glow */}
          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -15, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-[-5%] top-[8%] h-40 w-40 rounded-full bg-[#FDB913]/15 blur-3xl"
          />

          <motion.div
            animate={{
              x: [0, -15, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute bottom-[5%] left-[-5%] h-36 w-36 rounded-full bg-[#F7941E]/10 blur-3xl"
          />

          {/* Service visual */}
          <div className="relative flex h-full min-h-[300px] items-center justify-center lg:min-h-[450px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <ServiceVisual variant={service.visual} />
            </motion.div>
          </div>

          {/* Bottom label */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/70 bg-white/80 px-4 py-3 backdrop-blur-md sm:left-7 sm:right-7">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#3D3D3D]/50">
              Smart digital solution
            </span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#262626] text-white">
              <ArrowUpRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ServicesCoreList = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const activeService = CORE_SERVICES[activeIndex];

  return (
    <Section className="bg-white text-[#262626]">
      {/* Header */}
      <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E8750A]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F7941E]" />
            Core Services
          </span>

          <h2 className="mt-4 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-[#262626] sm:text-[2.75rem] lg:text-[3.2rem]">
            Eight ways we help you{" "}
            <span className="text-[#F7941E]">build.</span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#3D3D3D]/65 sm:text-base">
            From strategy and design to development and digital solutions,
            every service is focused on creating something useful, scalable,
            and valuable for your business.
          </p>
        </div>

        <div className="hidden max-w-[220px] text-right lg:block">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D3D3D]/35">
            Explore our capabilities
          </span>
          <p className="mt-2 text-sm leading-6 text-[#3D3D3D]/55">
            Select a service to see how we can help.
          </p>
        </div>
      </div>

      {/* Main Explorer */}
      <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
        {/* Service navigation */}
        <div className="lg:pt-2">
          <div className="mb-4 flex items-center justify-between px-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3D3D3D]/35">
              Our capabilities
            </span>

            <span className="text-[10px] font-bold text-[#F7941E]">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(CORE_SERVICES.length).padStart(2, "0")}
            </span>
          </div>

          <div>
            {CORE_SERVICES.map((service, index) => (
              <CoreServiceItem
                key={service.slug}
                service={service}
                index={index}
                isActive={index === activeIndex}
                onSelect={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* Active service */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <ActiveService service={activeService} />
        </div>
      </div>

      {/* Bottom statement */}
      <div className="mt-12 flex flex-col gap-4 border-t border-[#3D3D3D]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-[#3D3D3D]/55">
          We don&rsquo;t just deliver technology. We create digital solutions that
          move the business forward.
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#3D3D3D]/40">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F7941E]" />
          Strategy
          <span>•</span>
          Design
          <span>•</span>
          Technology
          <span>•</span>
          Growth
        </div>
      </div>
    </Section>
  );
};

export default ServicesCoreList;