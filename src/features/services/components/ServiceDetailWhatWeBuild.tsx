import { ArrowUpRight, Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Section from "../../../components/layout/Section";
import type { CoreService } from "../data";

interface ServiceDetailWhatWeBuildProps {
  service: CoreService;
}

const ServiceDetailWhatWeBuild = ({
  service,
}: ServiceDetailWhatWeBuildProps) => {
  return (
    <Section className="relative overflow-hidden bg-white text-[#262626]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-120px] top-20 h-72 w-72 rounded-full bg-[#FDB913]/[0.07] blur-3xl" />

      <div className="relative">
        {/* =========================================================
            SECTION HEADER
        ========================================================= */}

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end"
        >
          {/* Label */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F7941E]/20 bg-[#FFFCF7] px-3.5 py-2">
              <Sparkles size={13} className="text-[#F7941E]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8750A]">
                What We Build
              </span>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#F7941E]" />
              <span className="h-1 w-4 rounded-full bg-[#FDB913]" />
            </div>
          </div>

          {/* Heading */}
          <div>
            <h2 className="max-w-3xl text-[2rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.6rem] lg:text-[3.1rem]">
              What we build within{" "}
              <span className="text-[#E8750A]">
                {service.title.toLowerCase()}
              </span>
              .
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#3D3D3D]/65">
              From individual solutions to complete digital platforms, we
              create what your business actually needs to operate, grow and
              serve its customers better.
            </p>
          </div>
        </motion.header>

        {/* =========================================================
            BUILD LIST
        ========================================================= */}

        <div className="mt-12 border-t border-[#3D3D3D]/10">
          {service.detail.whatWeBuild.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.05, 0.35),
              }}
              className="group relative border-b border-[#3D3D3D]/10"
            >
              <div className="flex items-center gap-5 px-1 py-6 transition-all duration-300 sm:py-7 lg:px-3">
                {/* Number */}
                <span className="w-9 shrink-0 text-xs font-bold tracking-[0.15em] text-[#3D3D3D]/25 transition-colors duration-300 group-hover:text-[#F7941E]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3D3D3D]/10 bg-[#FFFCF7] text-[#F7941E] transition-all duration-300 group-hover:border-[#F7941E]/25 group-hover:bg-[#F7941E] group-hover:text-white">
                  <Check size={16} strokeWidth={2.5} />
                </span>

                {/* Item */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold text-[#262626] transition-colors duration-300 group-hover:text-[#E8750A] sm:text-lg">
                    {item}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#3D3D3D]/10 text-[#3D3D3D]/35 transition-all duration-300 group-hover:border-[#F7941E]/30 group-hover:bg-[#F7941E]/10 group-hover:text-[#E8750A]">
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#F7941E] to-[#FDB913] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col gap-5 rounded-2xl bg-[#262626] px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FDB913]">
              Built around your business
            </p>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/70">
              Every solution is shaped around your goals, workflows and
              customers — not around a one-size-fits-all template.
            </p>
          </div>

          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F7941E] text-white">
            <ArrowUpRight size={18} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ServiceDetailWhatWeBuild;