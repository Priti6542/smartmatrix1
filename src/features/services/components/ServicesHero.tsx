import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { cx } from "../../../utils/helpers";
import { SERVICES_HERO } from "../data";

const NAVBAR_CLEARANCE_CLASS = "pt-24 lg:pt-28";

const SERVICE_JOURNEY = [
  {
    number: "01",
    title: "Strategy",
    description: "Understand the business and define the right direction.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create experiences that are clear, useful and engaging.",
  },
  {
    number: "03",
    title: "Build",
    description: "Turn ideas into reliable digital products and solutions.",
  },
  {
    number: "04",
    title: "Solutions",
    description: "Connect technology with real operational needs.",
  },
  {
    number: "05",
    title: "Growth",
    description: "Create digital foundations that support long-term growth.",
  },
];

const journeyContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const journeyItem = {
  hidden: {
    opacity: 0,
    x: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ServicesHero = () => {
  return (
    <section
      className={cx(
        "relative overflow-hidden bg-[#FFFCF7] pb-16 text-[#262626] lg:pb-20",
        NAVBAR_CLEARANCE_CLASS,
      )}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#FDB913]/10 blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#F7941E]/8 blur-3xl"
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#262626 1px, transparent 1px), linear-gradient(90deg, #262626 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className={cx(CONTAINER_CLASS, "relative z-10")}>
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between border-b border-[#3D3D3D]/10 pb-5"
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-2 w-2 rounded-full bg-[#F7941E]"
            />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#3D3D3D]/60">
              {SERVICES_HERO.eyebrow}
            </span>
          </div>

          <span className="hidden text-xs font-medium uppercase tracking-[0.15em] text-[#3D3D3D]/35 sm:block">
            Digital solutions • Business outcomes
          </span>
        </motion.div>

        <div className="grid gap-14 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20 lg:pt-16">
          {/* LEFT — Main Hero */}
          <div className="flex flex-col justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="max-w-4xl text-[2.5rem] font-extrabold leading-[1.08] tracking-[-0.03em] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.75rem]"
            >
              {SERVICES_HERO.headingPrefix}

              <span className="text-[#F7941E]">
                {SERVICES_HERO.headingHighlight}
              </span>

              {SERVICES_HERO.headingSuffix}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.25,
              }}
              className="mt-7 max-w-2xl text-base leading-7 text-[#3D3D3D]/65 sm:text-lg sm:leading-8"
            >
              {SERVICES_HERO.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.35,
              }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                to={SERVICES_HERO.primaryCta.path}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F7941E] px-7 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(247,148,30,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E8750A]"
              >
                {SERVICES_HERO.primaryCta.label}

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to={SERVICES_HERO.secondaryCta.path}
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#3D3D3D]/15 bg-white/60 px-7 text-sm font-semibold text-[#3D3D3D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F7941E]/40 hover:bg-white"
              >
                {SERVICES_HERO.secondaryCta.label}
              </Link>
            </motion.div>

            {/* Small trust statement */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.6,
              }}
              className="mt-9 flex items-center gap-3"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF2E4] text-[#F7941E]">
                <Check size={14} strokeWidth={2.5} />
              </div>

              <span className="text-xs font-medium text-[#3D3D3D]/50 sm:text-sm">
                Focused on practical solutions and measurable business value
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Animated Business Journey */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-[#3D3D3D]/10 bg-white p-6 shadow-[0_20px_60px_rgba(61,61,61,0.08)] sm:p-8">
              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-[#3D3D3D]/10 pb-6">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#262626] text-white">
                      <Sparkles size={16} strokeWidth={1.7} />
                    </div>

                    <span className="text-sm font-bold text-[#262626]">
                      Our approach
                    </span>
                  </div>

                  <p className="mt-2 pl-11 text-xs leading-5 text-[#3D3D3D]/50">
                    From business challenge to meaningful outcome
                  </p>
                </div>

                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#F7941E]">
                  01 — 05
                </span>
              </div>

              {/* Journey */}
              <motion.div
                variants={journeyContainer}
                initial="hidden"
                animate="visible"
                className="relative mt-6"
              >
                {/* Base Line */}
                <div className="absolute bottom-8 left-[19px] top-8 w-px bg-[#3D3D3D]/10" />

                {/* Animated Line */}
                <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{
                    duration: 3.5,
                    delay: 0.7,
                    ease: "easeInOut",
                  }}
                  className="absolute left-[19px] top-8 w-px origin-top bg-gradient-to-b from-[#F7941E] via-[#FDB913] to-[#F7941E]"
                />

                {SERVICE_JOURNEY.map((item, index) => (
                  <motion.div
                    key={item.number}
                    variants={journeyItem}
                    className="group relative flex gap-4 py-3"
                  >
                    {/* Number / Node */}
                    <motion.div
                      animate={{
                        scale: [1, 1.12, 1],
                        boxShadow: [
                          "0 0 0 0 rgba(247,148,30,0)",
                          "0 0 0 6px rgba(247,148,30,0.08)",
                          "0 0 0 0 rgba(247,148,30,0)",
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        delay: index * 0.65 + 1,
                        repeat: Infinity,
                        repeatDelay: 2,
                        ease: "easeInOut",
                      }}
                      className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#F7941E]/30 bg-[#FFFCF7] text-[10px] font-bold text-[#F7941E]"
                    >
                      {item.number}
                    </motion.div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 pb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold text-[#262626] transition-colors duration-300 group-hover:text-[#E8750A] sm:text-base">
                          {item.title}
                        </h3>

                        <ArrowUpRight
                          size={14}
                          className="text-[#3D3D3D]/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F7941E]"
                        />
                      </div>

                      <p className="mt-1 max-w-sm text-xs leading-5 text-[#3D3D3D]/50 sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom result */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 3.8,
                }}
                className="mt-4 flex items-center justify-between rounded-xl bg-[#262626] px-4 py-3"
              >
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                    Final outcome
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Business impact
                  </p>
                </div>

                <motion.div
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7941E] text-white"
                >
                  <ArrowUpRight size={15} />
                </motion.div>
              </motion.div>

              {/* Decorative glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#FDB913]/10 blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 1,
          }}
          className="mt-14 border-t border-[#3D3D3D]/10 pt-6 lg:mt-16"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-[#3D3D3D]/50 sm:text-base">
              Technology is only valuable when it creates meaningful business
              results.
            </p>

            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#F7941E]">
              Smart Software Services
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero;