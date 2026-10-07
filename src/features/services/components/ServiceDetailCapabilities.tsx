import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Layers3,
  Sparkles,
} from "lucide-react";

import { CONTAINER_CLASS } from "@/components/layout/Container";
import { cx } from "@/utils/helpers";

interface ServiceDetailCapabilitiesProps {
  service: {
    title: string;
    category: string;
    description?: string;
    detail: {
      capabilities: string[];
      outcomes: string[];
    };
  };
}

const capabilityPositions = [
  "lg:col-start-1 lg:row-start-1 lg:translate-x-4 lg:translate-y-8",
  "lg:col-start-3 lg:row-start-1 lg:-translate-x-4 lg:translate-y-8",
  "lg:col-start-1 lg:row-start-2 lg:translate-x-0",
  "lg:col-start-3 lg:row-start-2 lg:-translate-x-0",
  "lg:col-start-1 lg:row-start-3 lg:translate-x-8 lg:-translate-y-8",
  "lg:col-start-3 lg:row-start-3 lg:-translate-x-8 lg:-translate-y-8",
];

const capabilityVariants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function ServiceDetailCapabilities({
  service,
}: ServiceDetailCapabilitiesProps) {
  const capabilities = service.detail.capabilities ?? [];
  const outcomes = service.detail.outcomes ?? [];

  const visibleOrbitItems = capabilities.slice(0, 6);
  const remainingCapabilities = capabilities.slice(6);

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[20%] h-[420px] w-[420px] rounded-full bg-[#F47C20]/[0.035] blur-3xl" />
        <div className="absolute right-[-8%] bottom-[10%] h-[420px] w-[420px] rounded-full bg-[#FDB913]/[0.045] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#3D3D3D 1px, transparent 1px), linear-gradient(90deg, #3D3D3D 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className={cx(CONTAINER_CLASS, "relative z-10")}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#F47C20]/15 bg-[#FFFCF7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#F47C20]">
            <Layers3 className="h-3.5 w-3.5" />
            Key Capabilities
          </div>

          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#262626] sm:text-4xl lg:text-5xl">
            Everything your{" "}
            <span className="text-[#F47C20]">digital product</span> needs.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#666666] sm:text-lg">
            A focused set of capabilities designed to turn your business
            requirements into a reliable and scalable digital solution.
          </p>
        </motion.div>

        {/* Main Blueprint */}
        <div className="mt-16 lg:mt-20">
          <div className="relative mx-auto max-w-6xl">
            {/* Orbit area */}
            <div className="relative min-h-[700px] overflow-hidden rounded-[36px] border border-[#E8E2DA] bg-[#FFFCF7] px-5 py-10 sm:px-8 lg:min-h-[650px] lg:px-12">
              {/* Decorative orbit rings */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F47C20]/10 sm:h-[360px] sm:w-[360px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#F47C20]/10 sm:h-[520px] sm:w-[520px]" />

              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FDB913]/10" />

              {/* Center glow */}
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.25, 0.4, 0.25],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F47C20]/10 blur-3xl"
              />

              {/* Desktop floating capabilities */}
              <div className="relative hidden min-h-[570px] lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:items-center lg:gap-8">
                {visibleOrbitItems.map((capability, index) => (
                  <motion.div
                    key={capability}
                    custom={index}
                    variants={capabilityVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      scale: 1.04,
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                    className={cx(
                      "group relative z-20",
                      capabilityPositions[index],
                    )}
                  >
                    <div className="relative flex items-center gap-3 rounded-2xl border border-[#E8E2DA] bg-white px-4 py-4 shadow-[0_10px_35px_rgba(38,38,38,0.04)] transition-all duration-300 group-hover:border-[#F47C20]/30 group-hover:shadow-[0_16px_40px_rgba(244,124,32,0.10)]">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#F47C20]/20 bg-[#FFFCF7] text-[#F47C20]">
                        <Check className="h-4 w-4" />
                      </span>

                      <span className="text-sm font-medium leading-5 text-[#333333]">
                        {capability}
                      </span>

                      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-[#C9C5BF] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F47C20]" />
                    </div>
                  </motion.div>
                ))}

                {/* Center service identity */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-1/2 z-30 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#F47C20]/20 bg-[#262626] p-8 text-center shadow-[0_25px_70px_rgba(38,38,38,0.18)]"
                >
                  {/* Inner ring */}
                  <div className="absolute inset-3 rounded-full border border-white/10" />

                  {/* Gradient glow */}
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_25%,rgba(244,124,32,0.35),transparent_45%)]" />

                  <div className="relative z-10">
                    <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#F47C20] text-white">
                      <Sparkles className="h-5 w-5" />
                    </div>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      Core Service
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-[-0.02em] text-white">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-xs text-white/50">
                      {capabilities.length} capabilities
                    </p>
                  </div>
                </motion.div>

                {/* Connection dots */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
                  <span className="absolute left-[31%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#F47C20]/50" />
                  <span className="absolute right-[31%] top-[30%] h-1.5 w-1.5 rounded-full bg-[#FDB913]/60" />
                  <span className="absolute left-[28%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-[#FDB913]/50" />
                  <span className="absolute right-[28%] bottom-[30%] h-1.5 w-1.5 rounded-full bg-[#F47C20]/50" />
                </div>
              </div>

              {/* Mobile / tablet capability grid */}
              <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
                {capabilities.map((capability, index) => (
                  <motion.div
                    key={capability}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.05,
                    }}
                    whileHover={{ y: -3 }}
                    className="group flex items-center gap-3 rounded-2xl border border-[#E8E2DA] bg-white p-4 transition-all duration-300 hover:border-[#F47C20]/30 hover:shadow-[0_12px_30px_rgba(244,124,32,0.08)]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#F47C20]/20 bg-[#FFFCF7] text-[#F47C20]">
                      <Check className="h-4 w-4" />
                    </span>

                    <span className="flex-1 text-sm font-medium leading-5 text-[#333333]">
                      {capability}
                    </span>

                    <ArrowUpRight className="h-4 w-4 shrink-0 text-[#C9C5BF] transition-colors group-hover:text-[#F47C20]" />
                  </motion.div>
                ))}
              </div>

              {/* Extra capabilities on desktop */}
              {remainingCapabilities.length > 0 && (
                <div className="relative z-40 mt-8 hidden border-t border-[#E8E2DA] pt-6 lg:block">
                  <div className="flex flex-wrap justify-center gap-3">
                    {remainingCapabilities.map((capability, index) => (
                      <motion.div
                        key={capability}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.06,
                        }}
                        className="group inline-flex items-center gap-2 rounded-full border border-[#E8E2DA] bg-white px-4 py-2.5 text-sm text-[#555555] transition-all duration-300 hover:border-[#F47C20]/30 hover:bg-[#FFFCF7] hover:text-[#262626]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F47C20]" />
                        {capability}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Service context */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-4xl text-center"
        >
          <p className="text-sm leading-6 text-[#777777]">
            {service.description ||
              `A focused set of capabilities for ${service.title}.`}
          </p>
        </motion.div>

        {/* Outcomes */}
        {outcomes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="mt-16 overflow-hidden rounded-[28px] bg-[#262626] lg:mt-20"
          >
            <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
              {/* Outcome intro */}
              <div className="relative overflow-hidden p-8 sm:p-10 lg:p-12">
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#F47C20]/15 blur-3xl" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-[#F47C20] text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F47C20]">
                    What this enables
                  </p>

                  <h3 className="mt-4 max-w-sm text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    Capabilities that create{" "}
                    <span className="text-[#FDB913]">
                      measurable value.
                    </span>
                  </h3>

                  <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
                    The technology is only one part of the solution. These
                    capabilities are designed to support meaningful business
                    outcomes.
                  </p>
                </div>
              </div>

              {/* Outcome list */}
              <div className="border-t border-white/10 lg:border-l lg:border-t-0">
                <div className="grid sm:grid-cols-2">
                  {outcomes.map((outcome, index) => (
                    <motion.div
                      key={outcome}
                      initial={{ opacity: 0, x: 15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.08,
                      }}
                      className={cx(
                        "group relative p-7 sm:p-8",
                        index < outcomes.length - 1 &&
                          "border-b border-white/10",
                        index % 2 === 0 &&
                          outcomes.length > 1 &&
                          "sm:border-r sm:border-white/10",
                      )}
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <span className="text-xs font-medium tracking-[0.15em] text-white/30">
                          0{index + 1}
                        </span>

                        <ArrowUpRight className="h-4 w-4 text-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F47C20]" />
                      </div>

                      <div className="flex gap-3">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F47C20]" />

                        <p className="text-sm font-medium leading-6 text-white/75 transition-colors group-hover:text-white">
                          {outcome}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}