import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import Section from "../../../components/layout/Section";
import { ABOUT_WHO_WE_ARE } from "../data";

const AboutWhoWeAre = () => {
  return (
    <Section className="relative overflow-hidden bg-white text-[#262626]">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-[#FDB913]/[0.07] blur-3xl"
      />

      <div className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            {/* Label */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#F47C20]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47C20]">
                {ABOUT_WHO_WE_ARE.label}
              </span>
            </div>

            {/* Heading */}
            <h2 className="mt-5 max-w-xl text-[2rem] font-extrabold leading-[1.1] tracking-[-0.025em] sm:text-[2.5rem] lg:text-[2.75rem]">
              {ABOUT_WHO_WE_ARE.heading}
            </h2>

            {/* Paragraphs */}
            <div className="mt-7 flex max-w-2xl flex-col gap-5">
              {ABOUT_WHO_WE_ARE.paragraphs.map((paragraph, index) => (
                <p
                  key={`${paragraph}-${index}`}
                  className="text-base leading-7 text-[#3D3D3D]/65 sm:text-lg sm:leading-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Small divider */}
            <div className="mt-8 flex items-center gap-3">
              <span className="h-1 w-12 rounded-full bg-[#F47C20]" />
              <span className="h-1 w-5 rounded-full bg-[#FDB913]" />
              <span className="h-1 w-2 rounded-full bg-[#3D3D3D]/20" />
            </div>
          </motion.div>

          {/* Brand statement */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] bg-[#262626] p-7 text-white shadow-[0_25px_60px_rgba(38,38,38,0.12)] sm:p-9 lg:p-10">
              {/* Decorative circle */}
              <div
                aria-hidden="true"
                className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#F47C20]/20"
              />

              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-[#FDB913]/15"
              />

              {/* Top */}
              <div className="relative flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Our Perspective
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
                  <ArrowUpRight
                    className="h-4 w-4 text-[#FDB913]"
                    strokeWidth={1.8}
                  />
                </span>
              </div>

              {/* Main statement */}
              <div className="relative mt-12">
                <span className="text-5xl font-black leading-none text-[#F47C20]/30">
                  “
                </span>

                <h3 className="mt-1 max-w-md text-2xl font-extrabold leading-[1.15] tracking-[-0.02em] sm:text-3xl">
                  Technology is most valuable when it solves a real business
                  problem.
                </h3>
              </div>

              {/* Principles */}
              <div className="relative mt-10 space-y-3 border-t border-white/10 pt-6">
                {[
                  "Understand the business",
                  "Solve the right problem",
                  "Create meaningful value",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#F47C20]/15">
                      <Check
                        className="h-3 w-3 text-[#FDB913]"
                        strokeWidth={2.5}
                      />
                    </span>

                    <span className="text-sm font-medium text-white/65">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom brand line */}
              <div className="relative mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="text-xs font-semibold text-white/35">
                  Smart Software Services
                </span>

                <span className="h-2 w-2 rounded-full bg-[#FDB913]" />
              </div>

              {/* Glow */}
              <div
                aria-hidden="true"
                className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-[#F47C20]/10 blur-3xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default AboutWhoWeAre;