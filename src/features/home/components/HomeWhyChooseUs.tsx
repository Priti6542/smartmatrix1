import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import Section from "../../../components/layout/Section";
import { HOME_WHY_HEADING, HOME_WHY_REASONS } from "../data";

const HomeWhyChooseUs = () => {
  return (
    <Section className="relative overflow-hidden bg-[#FAFAF9] text-[#262626]">
      {/* Subtle background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-64 w-64 rounded-full bg-[#F47C20]/[0.05] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-[#FDB913]/[0.07] blur-3xl"
      />

      <div className="relative z-10">
        {/* Heading */}
        <header className="mx-auto max-w-3xl text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#F47C20]" />

            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47C20]">
              Why Choose Us
            </span>

            <span className="h-px w-8 bg-[#F47C20]" />
          </div>

          <h2 className="text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-4xl lg:text-[2.75rem]">
            {HOME_WHY_HEADING}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#3D3D3D]/60 sm:text-lg">
            We focus on understanding your business, solving the right
            problems and delivering technology that creates meaningful,
            long-term value.
          </p>
        </header>

        {/* Reasons */}
        <div className="mx-auto mt-12 max-w-6xl">
          <div
            className={`grid grid-cols-1 gap-4 ${
              HOME_WHY_REASONS.length === 3
                ? "md:grid-cols-3"
                : HOME_WHY_REASONS.length === 4
                  ? "md:grid-cols-2 lg:grid-cols-4"
                  : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {HOME_WHY_REASONS.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 shadow-[0_10px_35px_rgba(38,38,38,0.035)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(38,38,38,0.08)] sm:p-7"
              >
                {/* Orange active line */}
                <span className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-[#F47C20] to-[#FDB913] transition-all duration-300 group-hover:w-full" />

                {/* Top row */}
                <div className="flex items-start justify-between">
                  <span className="text-4xl font-black leading-none tracking-[-0.05em] text-[#3D3D3D]/[0.08]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3D3D3D]/10 bg-[#FAFAF9] transition-all duration-300 group-hover:border-[#F47C20]/20 group-hover:bg-[#F47C20] group-hover:text-white">
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                {/* Content */}
                <div className="mt-8">
                  <h3 className="text-lg font-bold tracking-[-0.01em] text-[#262626]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#3D3D3D]/60">
                    {reason.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="mt-7 flex items-center gap-2 border-t border-[#3D3D3D]/[0.08] pt-4">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F47C20]/10">
                    <Check
                      className="h-3 w-3 text-[#F47C20]"
                      strokeWidth={2.5}
                    />
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#3D3D3D]/45">
                    Business focused
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[#3D3D3D]/10 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm font-medium text-[#3D3D3D]/50">
            Technology should support your business — not complicate it.
          </p>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#F47C20]">
            <span className="h-2 w-2 rounded-full bg-[#FDB913]" />
            Built with purpose
          </div>
        </div>
      </div>
    </Section>
  );
};

export default HomeWhyChooseUs;