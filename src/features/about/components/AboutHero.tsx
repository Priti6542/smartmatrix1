import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { cx } from "../../../utils/helpers";
import { ABOUT_HERO } from "../data";

const NAVBAR_CLEARANCE_CLASS = "pt-24 lg:pt-28";

const AboutHero = () => {
  return (
    <section
      className={cx(
        "relative overflow-hidden bg-[#FFFCF7] pb-16 text-[#3D3D3D] lg:pb-24",
        NAVBAR_CLEARANCE_CLASS,
      )}
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#FDB913]/[0.08] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#F47C20]/[0.05] blur-3xl"
      />

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(61,61,61,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(61,61,61,0.035) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
        }}
      />

      <div className={cx(CONTAINER_CLASS, "relative z-10")}>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#F47C20]" />

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47C20]">
                {ABOUT_HERO.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-5 max-w-[650px] text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#262626] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem]">
              {ABOUT_HERO.headingPrefix}

              <span className="relative inline-block text-[#F47C20]">
                {ABOUT_HERO.headingHighlight}

                <span className="absolute -bottom-1 left-0 h-1 w-2/3 rounded-full bg-[#FDB913]/70" />
              </span>

              {ABOUT_HERO.headingSuffix}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-[#3D3D3D]/65 sm:text-lg sm:leading-8">
              {ABOUT_HERO.description}
            </p>

            {/* CTAs */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to={ABOUT_HERO.primaryCta.path}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F47C20] px-7 text-sm font-bold text-white shadow-[0_10px_30px_rgba(244,124,32,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8750A]"
              >
                {ABOUT_HERO.primaryCta.label}

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to={ABOUT_HERO.secondaryCta.path}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#3D3D3D]/15 bg-white/70 px-7 text-sm font-bold text-[#3D3D3D] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3D3D3D]/30 hover:bg-white"
              >
                {ABOUT_HERO.secondaryCta.label}
              </Link>
            </div>

            {/* Small trust line */}
            <div className="mt-8 flex items-center gap-3 text-xs font-medium text-[#3D3D3D]/45">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F47C20]/10">
                <Sparkles className="h-3.5 w-3.5 text-[#F47C20]" />
              </span>

              <span>Business-first thinking. Technology with purpose.</span>
            </div>
          </motion.div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative mx-auto max-w-[500px]">
              {/* Main visual card */}
              <div className="relative overflow-hidden rounded-[30px] border border-[#3D3D3D]/10 bg-white p-6 shadow-[0_25px_70px_rgba(38,38,38,0.08)] sm:p-8">
                {/* Card top */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#3D3D3D]/40">
                    Who We Are
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F47C20]/10 text-[#F47C20]">
                    <ArrowUpRight
                      className="h-4 w-4"
                      strokeWidth={1.8}
                    />
                  </span>
                </div>

                {/* Brand statement */}
                <div className="mt-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F47C20]">
                    Smart Software Services
                  </p>

                  <h2 className="mt-4 max-w-sm text-3xl font-extrabold leading-[1.08] tracking-[-0.025em] text-[#262626] sm:text-[2.5rem]">
                    Building technology around real business needs.
                  </h2>

                  <p className="mt-5 max-w-sm text-sm leading-6 text-[#3D3D3D]/55">
                    We help businesses turn ideas, challenges and opportunities
                    into practical digital products that are built to create
                    meaningful impact.
                  </p>
                </div>

                {/* Visual divider */}
                <div className="my-8 h-px bg-[#3D3D3D]/10" />

                {/* Brand principles */}
                <div className="grid grid-cols-3 gap-3">
                  {["Understand", "Create", "Grow"].map((item, index) => (
                    <div
                      key={item}
                      className="rounded-xl bg-[#FAFAF9] p-3 sm:p-4"
                    >
                      <span className="text-[10px] font-bold text-[#F47C20]">
                        0{index + 1}
                      </span>

                      <p className="mt-2 text-xs font-bold text-[#262626] sm:text-sm">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Decorative gradient */}
                <div
                  aria-hidden="true"
                  className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br from-[#F47C20]/15 to-[#FDB913]/10 blur-2xl"
                />
              </div>

              {/* Floating accent */}
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-[#3D3D3D]/10 bg-white px-4 py-3 shadow-[0_12px_30px_rgba(38,38,38,0.08)] sm:block"
              >
                <div className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FDB913]" />

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#3D3D3D]/40">
                      Our mindset
                    </p>

                    <p className="mt-0.5 text-xs font-bold text-[#262626]">
                      Business before technology
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Small floating orange dot */}
              <motion.span
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-3 top-16 h-4 w-4 rounded-full bg-[#F47C20] shadow-[0_0_25px_rgba(244,124,32,0.35)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;