import { ArrowUpRight, AlertCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Section from "../../../components/layout/Section";
import type { CoreService } from "../data";

interface ServiceDetailProblemsProps {
  service: CoreService;
}

const ServiceDetailProblems = ({
  service,
}: ServiceDetailProblemsProps) => {
  return (
    <Section className="relative overflow-hidden bg-[#FFFCF7] text-[#262626]">
      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#F7941E]/[0.06] blur-3xl" />

      <div className="relative">
        {/* =========================================================
            HEADER
        ========================================================= */}

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#F7941E]/20 bg-white px-3.5 py-2">
              <AlertCircle size={13} className="text-[#F7941E]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E8750A]">
                Problems We Solve
              </span>
            </div>

            <div className="mt-5 flex items-center gap-2">
              <span className="h-1 w-10 rounded-full bg-[#F7941E]" />
              <span className="h-1 w-4 rounded-full bg-[#FDB913]" />
            </div>
          </div>

          <div>
            <h2 className="max-w-3xl text-[2rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[2.6rem] lg:text-[3.1rem]">
              Common challenges we&rsquo;re brought in to{" "}
              <span className="text-[#E8750A]">fix.</span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[#3D3D3D]/65">
              Technology should remove friction, not create more of it. We
              identify the real business challenge first, then build a
              solution around it.
            </p>
          </div>
        </motion.header>

        {/* =========================================================
            PROBLEM LIST
        ========================================================= */}

        <div className="mt-12">
          {service.detail.problems.map((problem, index) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.06, 0.35),
              }}
              className="group relative border-t border-[#3D3D3D]/10"
            >
              <div className="flex items-center gap-5 px-1 py-6 sm:py-7 lg:px-4 lg:py-8">
                {/* Large number */}
                <span className="w-12 shrink-0 text-[1.75rem] font-extrabold leading-none tracking-[-0.04em] text-[#3D3D3D]/10 transition-colors duration-300 group-hover:text-[#F7941E]/30 sm:w-16 sm:text-[2.25rem]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Alert icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#3D3D3D]/10 bg-white text-[#F7941E] transition-all duration-300 group-hover:border-[#F7941E]/30 group-hover:bg-[#F7941E] group-hover:text-white">
                  <AlertCircle size={17} />
                </div>

                {/* Problem */}
                <div className="min-w-0 flex-1">
                  <p className="max-w-3xl text-base font-semibold leading-7 text-[#262626] transition-colors duration-300 group-hover:text-[#E8750A] sm:text-lg">
                    {problem}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#3D3D3D]/10 text-[#3D3D3D]/30 transition-all duration-300 group-hover:border-[#F7941E]/30 group-hover:bg-[#F7941E]/10 group-hover:text-[#E8750A] sm:flex">
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#F7941E] to-[#FDB913] transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}

          {/* Last border */}
          <div className="border-t border-[#3D3D3D]/10" />
        </div>

        {/* =========================================================
            BUSINESS MESSAGE
        ========================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-10 grid gap-6 overflow-hidden rounded-[24px] bg-[#262626] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10"
        >
          <div>
            <div className="flex items-center gap-2">
              <Sparkles size={15} className="text-[#FDB913]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FDB913]">
                Our approach
              </span>
            </div>

            <h3 className="mt-4 max-w-2xl text-xl font-bold leading-snug text-white sm:text-2xl">
              We solve the business problem first — then choose the
              technology that makes the solution work.
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-white/55">
              No unnecessary complexity. No technology for technology&rsquo;s
              sake. Just a solution designed around what your business needs.
            </p>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#F7941E] text-white shadow-[0_10px_30px_rgba(247,148,30,0.25)]">
            <ArrowUpRight size={21} />
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ServiceDetailProblems;