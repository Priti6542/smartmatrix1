import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Section from "../../../components/layout/Section";
import { HOME_INDUSTRIES, HOME_INDUSTRIES_HEADING } from "../data";

const HomeIndustries = () => {
  return (
    <Section className="relative overflow-hidden bg-white text-[#262626]">
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#FDB913]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-[#F47C20]/[0.04] blur-3xl"
      />

      <div className="relative z-10">
        {/* Header */}
        <header className="mb-10 flex flex-col justify-between gap-6 lg:mb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-[#F47C20]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47C20]">
                Industries We Serve
              </span>
            </div>

            <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[2.75rem]">
              {HOME_INDUSTRIES_HEADING}
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[#3D3D3D]/55 lg:pb-1">
            We bring technology and business thinking together to create
            digital solutions tailored to the needs of different industries.
          </p>
        </header>

        {/* Industry list */}
        <div className="border-t border-[#3D3D3D]/10">
          {HOME_INDUSTRIES.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="group relative border-b border-[#3D3D3D]/10"
              >
                {/* Hover background */}
                <div className="absolute inset-0 origin-left scale-x-0 bg-[#FFFCF7] transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative grid items-center gap-5 py-6 sm:grid-cols-[70px_60px_1fr_40px] sm:gap-6 sm:py-7 lg:grid-cols-[90px_70px_1fr_50px]">
                  {/* Number */}
                  <span className="text-sm font-bold tracking-[0.05em] text-[#3D3D3D]/30 transition-colors duration-300 group-hover:text-[#F47C20]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#3D3D3D]/10 bg-white text-[#3D3D3D]/65 shadow-sm transition-all duration-300 group-hover:border-[#F47C20]/20 group-hover:bg-[#F47C20] group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(244,124,32,0.18)]">
                    <Icon size={21} strokeWidth={1.7} />
                  </span>

                  {/* Content */}
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold tracking-[-0.01em] text-[#262626] transition-colors duration-300 sm:text-xl">
                      {industry.name}
                    </h3>

                    <p className="mt-1.5 max-w-2xl text-sm leading-6 text-[#3D3D3D]/55">
                      {industry.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <span className="flex h-10 w-10 items-center justify-center justify-self-start rounded-full border border-[#3D3D3D]/10 text-[#3D3D3D]/35 transition-all duration-300 group-hover:border-[#F47C20] group-hover:bg-[#F47C20] group-hover:text-white sm:justify-self-end">
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.8}
                    />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-[#3D3D3D]/45">
            Different industries. Different challenges. One technology partner.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#FDB913]" />

            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#3D3D3D]/45">
              Industry-focused solutions
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeIndustries;