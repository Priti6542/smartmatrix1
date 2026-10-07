
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Lightbulb,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

import Section from "../../../components/layout/Section";
import { HOME_ABOUT } from "../data";

const HomeAbout = () => {
  const journey = [
    {
      number: "01",
      title: "Understand",
      description:
        "We start by understanding your business, users, challenges and goals.",
      icon: Lightbulb,
      accent: "#F47C20",
    },
    {
      number: "02",
      title: "Build",
      description:
        "We turn ideas into thoughtful, reliable and scalable digital products.",
      icon: BrainCircuit,
      accent: "#FDB913",
    },
    {
      number: "03",
      title: "Scale",
      description:
        "We help your technology evolve as your business grows and changes.",
      icon: Rocket,
      accent: "#E8750A",
    },
  ];

  return (
    <Section className="relative overflow-hidden bg-[#FAFAF9] text-[#262626]">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -right-40
          top-10
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#FDB913]/[0.055]
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-40
          bottom-0
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#F47C20]/[0.045]
          blur-[100px]
        "
      />

      {/* Subtle diagonal brand line */}
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[12%]
          h-px
          w-28
          rotate-[-35deg]
          bg-gradient-to-r
          from-transparent
          via-[#F47C20]/20
          to-transparent
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[15%]
          left-[5%]
          h-px
          w-20
          rotate-[-35deg]
          bg-gradient-to-r
          from-transparent
          via-[#FDB913]/20
          to-transparent
        "
      />

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <div className="relative z-10">
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[0.95fr_1.05fr]
            lg:gap-20
          "
        >
          {/* =================================================
              LEFT — ABOUT CONTENT
              ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#F47C20]" />

              <span
                className="
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  text-[#E8750A]
                "
              >
                About SmartMatrix
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                mt-5
                max-w-[650px]
                text-3xl
                font-extrabold
                leading-[1.08]
                tracking-[-0.035em]
                text-[#262626]
                sm:text-4xl
                lg:text-[3.15rem]
              "
            >
              Technology that moves
              <span className="relative mx-2 inline-block text-[#F47C20]">
                your business
              </span>
              forward.
            </h2>

            {/* Accent underline */}
            <div className="mt-5 flex items-center gap-2">
              <span className="h-1 w-12 rounded-full bg-[#F47C20]" />
              <span className="h-1 w-5 rounded-full bg-[#FDB913]" />
              <span className="h-1 w-2 rounded-full bg-[#3D3D3D]/20" />
            </div>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-[610px]
                text-base
                leading-7
                text-[#3D3D3D]/70
                sm:text-lg
                sm:leading-8
              "
            >
              {HOME_ABOUT.description}
            </p>

            {/* =================================================
                CAPABILITIES
                ================================================= */}

            <div className="mt-8 grid max-w-[620px] grid-cols-1 gap-3 sm:grid-cols-2">
              {HOME_ABOUT.capabilities.slice(0, 6).map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[#3D3D3D]/[0.07]
                    bg-white
                    px-4
                    py-3.5
                    shadow-[0_5px_20px_rgba(61,61,61,0.025)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#F47C20]/25
                    hover:shadow-[0_12px_30px_rgba(61,61,61,0.07)]
                  "
                >
                  <span
                    className="
                      flex
                      h-7
                      w-7
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#FFF3E7]
                      text-[#E8750A]
                      transition-all
                      duration-300
                      group-hover:bg-[#F47C20]
                      group-hover:text-white
                    "
                  >
                    <Check size={14} strokeWidth={2.5} />
                  </span>

                  <span className="text-sm font-semibold text-[#3D3D3D]">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                to={HOME_ABOUT.cta.path}
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#3D3D3D]
                  px-7
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_25px_rgba(61,61,61,0.12)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#262626]
                  hover:shadow-[0_14px_30px_rgba(61,61,61,0.18)]
                "
              >
                {HOME_ABOUT.cta.label}

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FFF3E7]">
                  <span className="h-2 w-2 rounded-full bg-[#F47C20]" />
                </span>

                <span className="text-xs font-semibold text-[#3D3D3D]/50">
                  Business-first approach
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT — BUSINESS JOURNEY
              ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[570px]"
          >
            {/* =================================================
                MAIN CARD
                ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-[#3D3D3D]/[0.07]
                bg-white
                p-5
                shadow-[0_25px_70px_rgba(61,61,61,0.08)]
                sm:p-7
              "
            >
              {/* Top brand line */}
              <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#F47C20] via-[#FDB913] to-[#F47C20]" />

              {/* Decorative glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#FDB913]/[0.08]
                  blur-[50px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -left-20
                  h-48
                  w-48
                  rounded-full
                  bg-[#F47C20]/[0.06]
                  blur-[50px]
                "
              />

              {/* =================================================
                  CARD HEADER
                  ================================================= */}

              <div className="relative flex items-center justify-between">
                <div>
                  <p
                    className="
                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#E8750A]
                    "
                  >
                    How we work
                  </p>

                  <h3
                    className="
                      mt-1
                      text-xl
                      font-bold
                      tracking-[-0.025em]
                      text-[#262626]
                    "
                  >
                    From idea to impact
                  </h3>
                </div>

                <motion.div
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#FFF3E7]
                    text-[#F47C20]
                  "
                  animate={{
                    rotate: [0, 4, -4, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUpRight size={21} strokeWidth={1.8} />
                </motion.div>
              </div>

              {/* =================================================
                  JOURNEY STEPS
                  ================================================= */}

              <div className="relative mt-9">
                {/* Vertical connecting line */}
                <motion.div
                  className="
                    absolute
                    bottom-8
                    left-[25px]
                    top-8
                    w-px
                    origin-top
                    bg-gradient-to-b
                    from-[#F47C20]/35
                    via-[#FDB913]/45
                    to-[#F47C20]/10
                  "
                  initial={{
                    scaleY: 0,
                  }}
                  whileInView={{
                    scaleY: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 1.2,
                    delay: 0.25,
                    ease: "easeOut",
                  }}
                />

                <div className="relative space-y-1">
                  {journey.map((step, index) => {
                    const Icon = step.icon;

                    return (
                      <motion.div
                        key={step.number}
                        initial={{
                          opacity: 0,
                          x: 18,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.25,
                        }}
                        transition={{
                          duration: 0.55,
                          delay: 0.25 + index * 0.14,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          group
                          relative
                          flex
                          gap-5
                          rounded-2xl
                          px-0
                          py-4
                        "
                      >
                        {/* Icon */}
                        <motion.div
                          className="
                            relative
                            z-10
                            flex
                            h-[50px]
                            w-[50px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-2xl
                            border
                            bg-white
                            shadow-[0_8px_20px_rgba(61,61,61,0.06)]
                            transition-all
                            duration-300
                            group-hover:shadow-[0_12px_25px_rgba(61,61,61,0.10)]
                          "
                          style={{
                            borderColor: `${step.accent}35`,
                            color: step.accent,
                          }}
                          whileHover={{
                            y: -2,
                            scale: 1.04,
                          }}
                        >
                          <Icon size={19} strokeWidth={1.8} />
                        </motion.div>

                        {/* Content */}
                        <div className="pt-1">
                          <div className="flex items-center gap-2">
                            <span
                              className="
                                text-[10px]
                                font-bold
                                tracking-[0.15em]
                              "
                              style={{
                                color: step.accent,
                              }}
                            >
                              {step.number}
                            </span>

                            <span className="h-px w-5 bg-[#3D3D3D]/10" />

                            <h4 className="text-base font-bold text-[#262626]">
                              {step.title}
                            </h4>
                          </div>

                          <p
                            className="
                              mt-1.5
                              max-w-[370px]
                              text-sm
                              leading-6
                              text-[#3D3D3D]/55
                            "
                          >
                            {step.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* =================================================
                  BOTTOM IMPACT AREA
                  ================================================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.5,
                }}
                className="
                  mt-6
                  rounded-2xl
                  border
                  border-[#3D3D3D]/[0.06]
                  bg-[#FAFAF9]
                  p-4
                "
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p
                      className="
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#3D3D3D]/35
                      "
                    >
                      Our approach
                    </p>

                    <p className="mt-1 text-sm font-semibold text-[#3D3D3D]">
                      Business first. Technology with purpose.
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-1.5">
                    <motion.span
                      className="h-2 w-2 rounded-full bg-[#F47C20]"
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />

                    <span className="h-2 w-2 rounded-full bg-[#FDB913]" />

                    <span className="h-2 w-2 rounded-full bg-[#3D3D3D]" />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* =================================================
                FLOATING "BUSINESS VALUE" CARD
                ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.9,
                duration: 0.6,
              }}
              className="
                absolute
                -bottom-5
                -left-3
                hidden
                rounded-2xl
                border
                border-[#3D3D3D]/[0.07]
                bg-white
                px-4
                py-3
                shadow-[0_15px_35px_rgba(61,61,61,0.10)]
                sm:block
                lg:-left-7
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-xl
                    bg-[#3D3D3D]
                    text-white
                  "
                >
                  <Check size={17} />
                </div>

                <div>
                  <p
                    className="
                      text-[9px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#3D3D3D]/35
                    "
                  >
                    Focus
                  </p>

                  <p className="text-xs font-bold text-[#3D3D3D]">
                    Real business value
                  </p>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                FLOATING BRAND DOT
                ================================================= */}

            <motion.div
              className="
                absolute
                -right-2
                -top-4
                h-10
                w-10
                rounded-full
                bg-gradient-to-br
                from-[#F47C20]
                to-[#FDB913]
                opacity-90
                shadow-[0_8px_25px_rgba(247,124,32,0.25)]
                sm:-right-4
              "
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default HomeAbout;