import { AnimatePresence, motion } from "framer-motion";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Rocket,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

import { HOME_HERO } from "../data";

type AnimationStep = {
  label: string;
  description: string;
};

const STEP_ICONS = [Code2, BrainCircuit, Cloud, Rocket];

const STEP_COLORS = [
  {
    accent: "#F7941E",
    soft: "rgba(247,148,30,0.10)",
    border: "rgba(247,148,30,0.22)",
  },
  {
    accent: "#FDB913",
    soft: "rgba(253,185,19,0.10)",
    border: "rgba(253,185,19,0.22)",
  },
  {
    accent: "#F7941E",
    soft: "rgba(247,148,30,0.08)",
    border: "rgba(247,148,30,0.20)",
  },
  {
    accent: "#E8750A",
    soft: "rgba(232,117,10,0.10)",
    border: "rgba(232,117,10,0.22)",
  },
];

const STEP_DURATION = 3000;
const BRAND_DURATION = 5200;

const AnimatedHeroVisual = () => {
  const steps: AnimationStep[] = HOME_HERO.animationSteps;

  const [activeStep, setActiveStep] = useState(0);
  const [showBrand, setShowBrand] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const runSequence = () => {
      if (showBrand) {
        timeout = setTimeout(() => {
          setShowBrand(false);
          setActiveStep(0);
        }, BRAND_DURATION);

        return;
      }

      timeout = setTimeout(() => {
        if (activeStep >= steps.length - 1) {
          setShowBrand(true);
        } else {
          setActiveStep((current) => current + 1);
        }
      }, STEP_DURATION);
    };

    runSequence();

    return () => clearTimeout(timeout);
  }, [activeStep, showBrand, steps.length]);

  const activeData = steps[activeStep];
  const Icon = STEP_ICONS[activeStep % STEP_ICONS.length];
  const color = STEP_COLORS[activeStep % STEP_COLORS.length];

  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      {/* ============================================================
          Ambient glow
          ============================================================ */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[90px]"
        animate={{
          scale: showBrand ? 1.15 : 1,
          opacity: showBrand ? 0.16 : 0.09,
        }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(247,148,30,0.45) 0%, rgba(253,185,19,0.16) 40%, transparent 72%)",
        }}
      />

      {/* ============================================================
          Decorative orbit
          ============================================================ */}

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F7941E]/10"
        animate={{ rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[310px] w-[310px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#FDB913]/15"
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* ============================================================
          Floating dots
          ============================================================ */}

      <motion.span
        className="absolute left-[11%] top-[25%] h-2 w-2 rounded-full bg-[#F7941E]"
        animate={{
          y: [0, -10, 0],
          opacity: [0.45, 1, 0.45],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.span
        className="absolute right-[10%] top-[36%] h-1.5 w-1.5 rounded-full bg-[#FDB913]"
        animate={{
          y: [0, 9, 0],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{
          duration: 2.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <motion.span
        className="absolute bottom-[22%] left-[17%] h-1.5 w-1.5 rounded-full bg-[#E8750A]"
        animate={{
          x: [0, 8, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* ============================================================
          Main visual
          ============================================================ */}

      <div className="relative min-h-[450px] sm:min-h-[500px]">
        <AnimatePresence mode="wait">
          {!showBrand ? (
            <motion.div
              key={`step-${activeStep}`}
              initial={{
                opacity: 0,
                y: 22,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -18,
                scale: 0.97,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full max-w-[470px]">
                {/* Main glass card */}
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[32px]
                    border
                    border-white/80
                    bg-white/75
                    p-7
                    shadow-[0_30px_90px_rgba(61,61,61,0.10)]
                    backdrop-blur-xl
                    sm:p-9
                  "
                >
                  {/* Top light sweep */}
                  <motion.div
                    className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/70 to-transparent"
                    animate={{
                      x: ["0%", "500%"],
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Card header */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl"
                        animate={{
                          boxShadow: [
                            `0 0 0 0 ${color.accent}00`,
                            `0 0 0 10px ${color.accent}10`,
                            `0 0 0 0 ${color.accent}00`,
                          ],
                        }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        style={{
                          backgroundColor: color.soft,
                          border: `1px solid ${color.border}`,
                        }}
                      >
                        <Icon
                          size={23}
                          strokeWidth={1.8}
                          color={color.accent}
                        />
                      </motion.div>

                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-[#3D3D3D]/40">
                          Smart technology
                        </span>

                        <span className="mt-1 block text-xs font-medium text-[#3D3D3D]/60">
                          Building what matters
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      {[0, 1, 2].map((dot) => (
                        <motion.span
                          key={dot}
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor:
                              dot === 0 ? color.accent : "#D8D8D8",
                          }}
                          animate={
                            dot === 0
                              ? {
                                  opacity: [0.35, 1, 0.35],
                                }
                              : undefined
                          }
                          transition={{
                            duration: 1.4,
                            repeat: Infinity,
                            delay: dot * 0.15,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Central animation */}
                  <div className="relative flex min-h-[270px] flex-col items-center justify-center py-8 text-center">
                    {/* Rings */}
                    <motion.div
                      className="absolute h-[210px] w-[210px] rounded-full border border-[#F7941E]/10"
                      animate={{
                        scale: [0.94, 1.04, 0.94],
                        opacity: [0.35, 0.7, 0.35],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />

                    <motion.div
                      className="absolute h-[155px] w-[155px] rounded-full border border-dashed border-[#FDB913]/20"
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Central icon */}
                    <motion.div
                      className="relative z-10 flex h-24 w-24 items-center justify-center rounded-[28px] border bg-white shadow-[0_20px_50px_rgba(61,61,61,0.12)]"
                      style={{
                        borderColor: color.border,
                      }}
                      animate={{
                        y: [0, -7, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div
                        className="absolute inset-2 rounded-[22px]"
                        style={{
                          background: `radial-gradient(circle, ${color.soft}, transparent 70%)`,
                        }}
                      />

                      <Icon
                        className="relative z-10"
                        size={39}
                        strokeWidth={1.5}
                        color={color.accent}
                      />
                    </motion.div>

                    {/* Main word */}
                    <motion.h3
                      className="relative z-20 mt-7 max-w-full px-4 text-2xl font-extrabold tracking-[-0.025em] text-[#262626] sm:text-3xl"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.18,
                        duration: 0.45,
                      }}
                    >
                      {activeData.label}
                    </motion.h3>

                    <motion.p
                      className="relative z-20 mt-2 max-w-[330px] text-sm leading-6 text-[#3D3D3D]/55"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 0.28,
                        duration: 0.45,
                      }}
                    >
                      {activeData.description}
                    </motion.p>
                  </div>

                  {/* Progress */}
                  <div className="relative">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3D3D3D]/35">
                        Our capabilities
                      </span>

                      <span className="text-[10px] font-semibold text-[#3D3D3D]/40">
                        {String(activeStep + 1).padStart(2, "0")} /{" "}
                        {String(steps.length).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      {steps.map((step, index) => (
                        <div
                          key={step.label}
                          className="h-1 flex-1 overflow-hidden rounded-full bg-[#3D3D3D]/[0.06]"
                        >
                          <motion.div
                            className="h-full rounded-full"
                            initial={{ width: "0%" }}
                            animate={{
                              width:
                                index < activeStep
                                  ? "100%"
                                  : index === activeStep
                                    ? "100%"
                                    : "0%",
                            }}
                            transition={{
                              duration:
                                index === activeStep
                                  ? STEP_DURATION / 1000
                                  : 0.35,
                              ease: "linear",
                            }}
                            style={{
                              backgroundColor:
                                index <= activeStep
                                  ? color.accent
                                  : "transparent",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ========================================================
               FINAL BRAND REVEAL
               ======================================================== */
            <motion.div
              key="brand-reveal"
              initial={{
                opacity: 0,
                scale: 0.92,
                y: 18,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 1.03,
                y: -10,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full max-w-[520px] text-center">
                {/* Brand glow */}
                <motion.div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]"
                  animate={{
                    opacity: [0.08, 0.18, 0.08],
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(247,148,30,0.35), rgba(253,185,19,0.35))",
                  }}
                />

                {/* Small spark */}
                <motion.div
                  className="relative mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#F7941E]/20 bg-white/80 shadow-[0_15px_35px_rgba(61,61,61,0.08)]"
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: -20,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.15,
                    duration: 0.55,
                  }}
                >
                  <Sparkles
                    size={24}
                    strokeWidth={1.6}
                    className="text-[#F7941E]"
                  />

                  <motion.span
                    className="absolute inset-0 rounded-2xl border border-[#FDB913]/20"
                    animate={{
                      scale: [1, 1.18, 1],
                      opacity: [0.8, 0, 0.8],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>

                {/* Company name */}
                <div className="relative overflow-hidden">
                  <motion.h2
                    className="relative text-3xl font-black tracking-[-0.045em] text-[#262626] sm:text-4xl md:text-[2.75rem]"
                    initial={{
                      opacity: 0,
                      letterSpacing: "0.12em",
                    }}
                    animate={{
                      opacity: 1,
                      letterSpacing: "-0.045em",
                    }}
                    transition={{
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {HOME_HERO.brandReveal.companyName}
                  </motion.h2>

                  {/* Orange/yellow light sweep */}
                  <motion.div
                    className="pointer-events-none absolute bottom-0 left-[-35%] top-0 w-[22%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-[#FDB913]/70 to-transparent blur-sm"
                    animate={{
                      left: ["-35%", "125%"],
                    }}
                    transition={{
                      duration: 1.9,
                      delay: 0.5,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* Tagline */}
                <motion.p
                  className="mt-5 text-sm font-medium tracking-[0.08em] text-[#3D3D3D]/55 sm:text-base"
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.65,
                    duration: 0.55,
                  }}
                >
                  {HOME_HERO.brandReveal.tagline}
                </motion.p>

                {/* Services */}
                <motion.div
                  className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.85,
                    duration: 0.6,
                  }}
                >
                  {HOME_HERO.brandReveal.services.map((service, index) => (
                    <div
                      key={service}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xs font-semibold text-[#3D3D3D]/65 sm:text-sm">
                        {service}
                      </span>

                      {index <
                        HOME_HERO.brandReveal.services.length - 1 && (
                        <span className="h-1 w-1 rounded-full bg-[#F7941E]" />
                      )}
                    </div>
                  ))}
                </motion.div>

                {/* Bottom brand line */}
                <motion.div
                  className="mx-auto mt-8 h-px w-24 bg-gradient-to-r from-transparent via-[#F7941E] to-transparent"
                  initial={{
                    width: 0,
                    opacity: 0,
                  }}
                  animate={{
                    width: 96,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 1,
                    duration: 0.6,
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AnimatedHeroVisual;