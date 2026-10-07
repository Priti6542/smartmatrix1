
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

import Section from "../../../components/layout/Section";
import { CAPABILITIES } from "../../../constants/capabilities";
import {
  HOME_SERVICES_HEADING,
  HOME_SERVICES_SUBTITLE,
} from "../data";

const HomeServices = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeService = CAPABILITIES[activeIndex];

  if (!activeService) {
    return null;
  }

  const ActiveIcon = activeService.icon;

  return (
    <Section className="relative overflow-hidden bg-white text-[#262626]">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#FDB913]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-10 h-72 w-72 rounded-full bg-[#F47C20]/[0.06] blur-3xl"
      />

      {/* Header */}
      <header className="relative z-10 mb-10 max-w-3xl lg:mb-14">
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-[#F47C20]" />

          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47C20]">
            What We Build
          </span>
        </div>

        <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-[#262626] sm:text-4xl lg:text-[3rem]">
          {HOME_SERVICES_HEADING}
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-[#3D3D3D]/65 sm:text-lg">
          {HOME_SERVICES_SUBTITLE}
        </p>
      </header>

      {/* Services showcase */}
      <div className="relative z-10 overflow-hidden rounded-[28px] border border-[#3D3D3D]/10 bg-[#FAFAF9] shadow-[0_20px_60px_rgba(38,38,38,0.06)]">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          {/* Service navigation */}
          <div className="border-b border-[#3D3D3D]/10 bg-white lg:border-b-0 lg:border-r">
            <div className="p-5 sm:p-7 lg:p-8">
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3D3D3D]/45">
                  Our Capabilities
                </span>

                <span className="text-xs font-semibold text-[#3D3D3D]/40">
                  {String(CAPABILITIES.length).padStart(2, "0")} Services
                </span>
              </div>

              <div className="space-y-2">
                {CAPABILITIES.map((capability, index) => {
                  const Icon = capability.icon;
                  const isActive = index === activeIndex;

                  return (
                    <motion.button
                      key={capability.id}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      whileTap={{ scale: 0.99 }}
                      className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                        isActive
                          ? "border-[#F47C20]/20 bg-[#FFFCF7] shadow-sm"
                          : "border-transparent bg-transparent hover:border-[#3D3D3D]/10 hover:bg-[#FAFAF9]"
                      }`}
                    >
                      {/* Active indicator */}
                      <motion.span
                        initial={false}
                        animate={{
                          scaleY: isActive ? 1 : 0,
                          opacity: isActive ? 1 : 0,
                        }}
                        className="absolute left-0 top-0 h-full w-1 origin-center rounded-r-full bg-[#F47C20]"
                      />

                      {/* Icon */}
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                          isActive
                            ? "bg-[#F47C20] text-white shadow-[0_8px_20px_rgba(244,124,32,0.22)]"
                            : "bg-[#3D3D3D]/[0.05] text-[#3D3D3D]/65 group-hover:bg-[#3D3D3D]/10"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>

                      {/* Content */}
                      <span className="min-w-0 flex-1">
                        <span
                          className={`block text-sm font-bold transition-colors duration-300 sm:text-[15px] ${
                            isActive
                              ? "text-[#262626]"
                              : "text-[#3D3D3D]/75 group-hover:text-[#262626]"
                          }`}
                        >
                          {capability.title}
                        </span>

                        <span className="mt-1 block text-xs font-medium text-[#3D3D3D]/40">
                          {capability.index}
                        </span>
                      </span>

                      {/* Arrow */}
                      <ArrowUpRight
                        className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                          isActive
                            ? "translate-x-0 -translate-y-0 text-[#F47C20] opacity-100"
                            : "translate-x-1 translate-y-1 text-[#3D3D3D]/25 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                        }`}
                        strokeWidth={2}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Active service preview */}
          <div className="relative min-h-[460px] overflow-hidden bg-[#FFFCF7] sm:min-h-[500px] lg:min-h-full">
            {/* Decorative grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-[0.35]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(61,61,61,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(61,61,61,0.045) 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            {/* Orange glow */}
            <motion.div
              key={`glow-${activeService.id}`}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#F47C20]/15 blur-3xl"
            />

            {/* Yellow glow */}
            <motion.div
              aria-hidden="true"
              className="absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-[#FDB913]/15 blur-3xl"
            />

            {/* Preview content */}
            <div className="relative flex h-full min-h-[460px] flex-col justify-between p-7 sm:min-h-[500px] sm:p-10 lg:p-12">
              {/* Top */}
              <div className="flex items-start justify-between gap-6">
                <motion.div
                  key={`number-${activeService.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-[5rem] font-black leading-none tracking-[-0.08em] text-[#3D3D3D]/[0.07] sm:text-[7rem]"
                >
                  {activeService.index}
                </motion.div>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F47C20]/20 bg-white/80 text-[#F47C20] shadow-sm backdrop-blur-sm sm:h-16 sm:w-16">
                  <ActiveIcon className="h-7 w-7" strokeWidth={1.6} />
                </div>
              </div>

              {/* Main service information */}
              <motion.div
                key={`content-${activeService.id}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="relative max-w-xl"
              >
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F47C20]/15 bg-white/70 px-3 py-1.5 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-[#F47C20]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#3D3D3D]/60">
                    Digital Capability
                  </span>
                </div>

                <h3 className="max-w-lg text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#262626] sm:text-4xl lg:text-[2.75rem]">
                  {activeService.title}
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#3D3D3D]/65 sm:text-base">
                  {activeService.description}
                </p>

                {/* Value points */}
                <div className="mt-7 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#3D3D3D]/10 bg-white/75 px-3 py-2 text-xs font-semibold text-[#3D3D3D]/70">
                    <Check className="h-3.5 w-3.5 text-[#F47C20]" />
                    Business-focused
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-[#3D3D3D]/10 bg-white/75 px-3 py-2 text-xs font-semibold text-[#3D3D3D]/70">
                    <Check className="h-3.5 w-3.5 text-[#F47C20]" />
                    Scalable solutions
                  </span>
                </div>
              </motion.div>

              {/* Bottom */}
              <div className="mt-10 flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D3D3D]/40">
                    Explore our expertise
                  </p>

                  <div className="mt-2 h-1 w-16 overflow-hidden rounded-full bg-[#3D3D3D]/10">
                    <motion.div
                      key={`progress-${activeIndex}`}
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((activeIndex + 1) / CAPABILITIES.length) * 100}%`,
                      }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-[#F47C20] to-[#FDB913]"
                    />
                  </div>
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-sm font-bold text-[#262626]"
                >
                  <span className="hidden sm:inline">View capability</span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#262626] text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Decorative corner element */}
            <div
              aria-hidden="true"
              className="absolute right-8 top-1/2 hidden h-24 w-24 -translate-y-1/2 rounded-full border border-[#F47C20]/10 sm:block"
            >
              <div className="absolute inset-3 rounded-full border border-[#FDB913]/20" />

              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F47C20]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom statement */}
      <div className="relative z-10 mt-8 flex flex-col gap-4 border-t border-[#3D3D3D]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-sm leading-6 text-[#3D3D3D]/55">
          From digital experiences to intelligent products, we combine
          technology, design and business thinking to create solutions that
          deliver real value.
        </p>

        <div className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#F47C20]">
          <span className="h-2 w-2 rounded-full bg-[#FDB913]" />
          Built for business
        </div>
      </div>
    </Section>
  );
};

export default HomeServices;