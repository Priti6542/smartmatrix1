import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { CONTAINER_CLASS } from "../../../components/layout/Container";
import { cx } from "../../../utils/helpers";
import { HOME_HERO } from "../data";

import AnimatedHeroVisual from "./AnimatedHeroVisual";

const NAVBAR_CLEARANCE_CLASS = "pt-24 lg:pt-28";

const HomeHero = () => {
  return (
    <section
      className={cx(
        "relative isolate overflow-hidden bg-[#FFFCF7] pb-16 text-[#3D3D3D] lg:pb-20",
        NAVBAR_CLEARANCE_CLASS,
      )}
    >
      {/* =====================================================
          BRAND BACKGROUND
          ===================================================== */}

      {/* Soft orange glow — top right */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#F7941E]/10
          blur-[100px]
        "
      />

      {/* Soft yellow glow — bottom left */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          -left-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#FDB913]/10
          blur-[100px]
        "
      />

      {/* Small orange glow behind visual */}
      <div
        className="
          pointer-events-none
          absolute
          right-[25%]
          top-[30%]
          h-[260px]
          w-[260px]
          rounded-full
          bg-[#F7941E]/5
          blur-[80px]
        "
      />

      {/* =====================================================
          SUBTLE TECHNOLOGY GRID
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(to_right,#3D3D3D_1px,transparent_1px),linear-gradient(to_bottom,#3D3D3D_1px,transparent_1px)]
          [background-size:56px_56px]
        "
      />

      {/* =====================================================
          DECORATIVE BRAND CIRCLES
          ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[18%]
          h-3
          w-3
          rounded-full
          bg-[#F7941E]
          opacity-70
          shadow-[0_0_20px_rgba(247,148,30,0.5)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[14%]
          top-[55%]
          h-2
          w-2
          rounded-full
          bg-[#FDB913]
          opacity-70
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[18%]
          left-[8%]
          h-2
          w-2
          rounded-full
          bg-[#F7941E]
          opacity-50
        "
      />

      {/* =====================================================
          MAIN CONTAINER
          ===================================================== */}

      <div className={cx(CONTAINER_CLASS, "relative z-10")}>
        <div
          className="
            grid
            items-center
            gap-14
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-16
          "
        >
          {/* =================================================
              LEFT CONTENT
              ================================================= */}

          <div>
            {/* Eyebrow */}
            <div
              className="
                mb-6
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[#F7941E]/20
                bg-white/70
                px-4
                py-2
                shadow-[0_4px_20px_rgba(61,61,61,0.04)]
                backdrop-blur-sm
              "
            >
              <span
                className="
                  h-2
                  w-2
                  rounded-full
                  bg-[#F7941E]
                  shadow-[0_0_10px_rgba(247,148,30,0.5)]
                "
              />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#E8750A]
                  sm:text-xs
                "
              >
                {HOME_HERO.eyebrow}
              </span>
            </div>

            {/* Heading */}
            <h1
              className="
                max-w-[600px]
                text-[1.875rem]
                font-extrabold
                leading-[1.1]
                tracking-[-0.02em]
                text-[#262626]
                sm:text-[2.125rem]
                md:text-[2.5rem]
                lg:text-[3rem]
                xl:text-[3.5rem]
              "
            >
              {HOME_HERO.headingPrefix}

              <span className="text-[#F7941E]">
                {HOME_HERO.headingHighlight}
              </span>

              {HOME_HERO.headingSuffix}
            </h1>

            {/* Description */}
            <p
              className="
                mt-6
                max-w-copy
                text-base
                leading-7
                text-[#3D3D3D]/70
                sm:text-lg
                sm:leading-8
              "
            >
              {HOME_HERO.description}
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to={HOME_HERO.primaryCta.path}
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-[#F7941E]
                  px-7
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(247,148,30,0.22)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#E8750A]
                  hover:shadow-[0_14px_35px_rgba(247,148,30,0.3)]
                "
              >
                {HOME_HERO.primaryCta.label}

                <ArrowRight
                  size={17}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>

              <Link
                to={HOME_HERO.secondaryCta.path}
                className="
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#3D3D3D]/15
                  bg-white/70
                  px-7
                  text-sm
                  font-semibold
                  text-[#3D3D3D]
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-[#F7941E]/40
                  hover:bg-[#FFF8F0]
                  hover:text-[#E8750A]
                "
              >
                {HOME_HERO.secondaryCta.label}
              </Link>
            </div>
          </div>

          {/* =================================================
              RIGHT ANIMATED TECHNOLOGY VISUAL
              ================================================= */}

          <div className="relative">
            {/* Glow behind animation */}
            <div
              className="
                pointer-events-none
                absolute
                inset-[10%]
                rounded-full
                bg-[#F7941E]/5
                blur-[70px]
              "
            />

            <div className="relative">
              <AnimatedHeroVisual />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;