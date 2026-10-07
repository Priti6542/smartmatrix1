import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";

import Section from "../../../components/layout/Section";
import type { CoreService } from "../data";
import { SERVICES_TECHNOLOGY_GROUPS } from "../data";

interface ServiceDetailTechnologyProps {
  service: CoreService;
}

const ServiceDetailTechnology = ({
  service,
}: ServiceDetailTechnologyProps) => {
  const groups = SERVICES_TECHNOLOGY_GROUPS.filter((group) =>
    service.detail.techGroupLabels.includes(group.label),
  );

  if (groups.length === 0) return null;

  return (
    <Section className="relative overflow-hidden bg-[#262626] text-white">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#F47C20]/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#FDB913]/[0.08] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
            <Code2 className="h-3.5 w-3.5 text-[#F47C20]" />

            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Technology
            </span>
          </div>

          <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-4xl lg:text-5xl">
            Technology that{" "}
            <span className="text-[#F47C20]">supports the solution.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-white/50 sm:text-lg">
            We choose technology around the product, business requirements,
            performance needs, and long-term scalability — not simply because
            something is trending.
          </p>
        </motion.header>

        {/* Technology showcase */}
        <div className="mt-14 lg:mt-20">
          <div className="grid gap-5 lg:grid-cols-12">
            {/* Left service technology identity */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-7 sm:p-9 lg:col-span-4 lg:min-h-[420px]"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#F47C20]/10 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F47C20] text-white">
                    <Layers3 className="h-5 w-5" />
                  </div>

                  <span className="text-5xl font-semibold tracking-[-0.06em] text-white/[0.08]">
                    0{groups.length}
                  </span>
                </div>

                <div className="mt-auto pt-20">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F47C20]">
                    Built for this service
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-white sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/45">
                    A focused technology ecosystem selected to support this
                    service and its real-world requirements.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2 text-xs font-medium text-white/35">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F47C20]" />
                  {groups.length} technology{" "}
                  {groups.length === 1 ? "group" : "groups"}
                </div>
              </div>
            </motion.div>

            {/* Technology groups */}
            <div className="space-y-5 lg:col-span-8">
              {groups.map((group, index) => (
                <motion.div
                  key={group.label}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 transition-all duration-300 hover:border-[#F47C20]/30 hover:bg-white/[0.07] sm:p-8"
                >
                  {/* Hover accent */}
                  <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-[#F47C20] transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex flex-col gap-7 sm:flex-row sm:items-start">
                    {/* Number + icon */}
                    <div className="flex shrink-0 items-center gap-4 sm:w-32">
                      <span className="text-xs font-medium tracking-[0.15em] text-white/25">
                        0{index + 1}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-[#F47C20] transition-all duration-300 group-hover:border-[#F47C20]/30 group-hover:bg-[#F47C20]/10">
                        <Code2 className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Group content */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-5">
                        <div>
                          <p className="text-lg font-semibold tracking-[-0.02em] text-white sm:text-xl">
                            {group.label}
                          </p>

                          <p className="mt-1 text-xs text-white/35">
                            Technology ecosystem
                          </p>
                        </div>

                        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#F47C20]" />
                      </div>

                      {/* Technology pills */}
                      <div className="mt-6 flex flex-wrap gap-2">
                        {group.technologies.map((technology, technologyIndex) => (
                          <motion.span
                            key={technology}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.35,
                              delay:
                                index * 0.08 + technologyIndex * 0.035,
                            }}
                            className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-2 text-xs font-medium text-white/60 transition-all duration-300 group-hover:border-white/15 group-hover:text-white/80"
                          >
                            {technology}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <Sparkles className="h-4 w-4 text-[#F47C20]" />

            <p className="max-w-2xl text-sm leading-6 text-white/45">
              Technology is selected based on what your product and business
              actually need — with reliability and scalability in mind.
            </p>
          </div>

          <div className="shrink-0 text-xs font-semibold uppercase tracking-[0.16em] text-white/25">
            Smart Software Services
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ServiceDetailTechnology;