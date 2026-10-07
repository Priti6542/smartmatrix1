import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Section from "../../../components/layout/Section";
import {
  SERVICES_TECHNOLOGY_GROUPS,
  SERVICES_TECHNOLOGY_HEADING,
  SERVICES_TECHNOLOGY_SUBTITLE,
} from "../data";

const ServicesTechnology = () => {
  return (
    <Section className="bg-[#FFFCF7] text-[#262626]">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-12 max-w-3xl lg:mb-16"
      >
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E8750A]">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF1E3]">
            <Sparkles size={13} />
          </span>

          Technology Stack
        </div>

        <h2 className="mt-5 text-[2rem] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[2.75rem] lg:text-[3.2rem]">
          {SERVICES_TECHNOLOGY_HEADING}
        </h2>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#3D3D3D]/65 sm:text-base">
          {SERVICES_TECHNOLOGY_SUBTITLE}
        </p>
      </motion.header>

      {/* Technology ecosystem */}
      <div className="overflow-hidden rounded-[28px] border border-[#3D3D3D]/10 bg-white">
        {/* Top bar */}
        <div className="flex flex-col gap-3 border-b border-[#3D3D3D]/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#262626] text-white">
              <Layers3 size={17} />
            </span>

            <div>
              <p className="text-sm font-bold text-[#262626]">
                Our technology ecosystem
              </p>

              <p className="text-xs text-[#3D3D3D]/45">
                Technologies selected around your business needs
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#3D3D3D]/40">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F7941E]" />
            Business first
          </div>
        </div>

        {/* Technology groups */}
        <div>
          {SERVICES_TECHNOLOGY_GROUPS.map((group, groupIndex) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.08,
              }}
              className="group relative border-b border-[#3D3D3D]/10 px-6 py-7 last:border-b-0 sm:px-8 lg:px-10 lg:py-9"
            >
              {/* Hover background */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.35 }}
                className="pointer-events-none absolute inset-0 origin-left bg-[#FFFCF7]"
              />

              <div className="relative grid gap-6 lg:grid-cols-[0.34fr_1fr] lg:items-center lg:gap-12">
                {/* Technology group */}
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF4E8] text-[#F7941E] transition-all duration-300 group-hover:bg-[#F7941E] group-hover:text-white group-hover:shadow-[0_8px_24px_rgba(247,148,30,0.2)]">
                    <Code2 size={19} />
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold tracking-[0.16em] text-[#F7941E]/70">
                        {String(groupIndex + 1).padStart(2, "0")}
                      </span>

                      <span className="h-px w-5 bg-[#F7941E]/30" />
                    </div>

                    <h3 className="mt-1 text-base font-extrabold text-[#262626] sm:text-lg">
                      {group.label}
                    </h3>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap items-center gap-2.5">
                  {group.technologies.map(
                    (technology, technologyIndex) => (
                      <motion.div
                        key={technology}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay:
                            groupIndex * 0.08 +
                            technologyIndex * 0.035,
                        }}
                        whileHover={{
                          y: -3,
                          scale: 1.02,
                        }}
                        className="group/item flex cursor-default items-center gap-2 rounded-full border border-[#3D3D3D]/10 bg-white px-4 py-2.5 text-sm font-semibold text-[#3D3D3D]/75 shadow-[0_2px_8px_rgba(38,38,38,0.03)] transition-all duration-300 hover:border-[#F7941E]/30 hover:text-[#262626] hover:shadow-[0_8px_20px_rgba(247,148,30,0.08)]"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#F7941E]/60 transition-all duration-300 group-hover/item:bg-[#F7941E]" />

                        {technology}
                      </motion.div>
                    ),
                  )}

                  <span className="ml-auto hidden h-9 w-9 items-center justify-center rounded-full border border-[#3D3D3D]/10 text-[#3D3D3D]/25 transition-all duration-300 group-hover:border-[#F7941E]/30 group-hover:text-[#F7941E] sm:flex">
                    <ArrowUpRight size={15} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom statement */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mt-8 flex flex-col gap-4 border-t border-[#3D3D3D]/10 pt-7 sm:flex-row sm:items-center sm:justify-between"
      >
        <p className="max-w-xl text-sm leading-6 text-[#3D3D3D]/55">
          We choose technology based on what your product and business
          actually need — not simply what is trending.
        </p>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#3D3D3D]/40">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F7941E]" />

          Right technology

          <span>•</span>

          Right solution
        </div>
      </motion.div>
    </Section>
  );
};

export default ServicesTechnology;