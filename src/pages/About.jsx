import React from "react";
import { CheckCircle2, ShieldCheck, Sparkles, Users } from "lucide-react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import StatisticsSection from "../components/sections/StatisticsSection";
import CtaSection from "../components/sections/CtaSection";
import { CORE_VALUES } from "../data/company";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const APPROACH_STEPS = [
  {
    step: "01",
    title: "Deep Domain Immersion",
    desc: "We don't start coding on day one. We analyze your market dynamics, interview real users, and scope a realistic technical blueprint.",
  },
  {
    step: "02",
    title: "Pragmatic Architecture",
    desc: "No over-engineering. We pick proven, modern stacks (React, Node, Python, AWS) that your business can maintain and scale cost-effectively.",
  },
  {
    step: "03",
    title: "Sprint Demos & Feedback",
    desc: "Bi-weekly sprint reviews guarantee you see tangible working software constantly, allowing agile pivots before commitments are locked.",
  },
  {
    step: "04",
    title: "Continuous Observability & Handover",
    desc: "We deliver full automated tests, documentation, CI/CD pipelines, and comprehensive technical handovers so you are in complete control.",
  },
];

export default function About() {
  useDocumentTitle("About Us — Our Story & Engineering Philosophy");

  return (
    <div>
      {/* Page Header */}
      <section className="border-b border-[#3D3D3D]/10 bg-[#FFFCF7] pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F47C20]/20 bg-[#FFF8F0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d8690f]">
              <Sparkles size={14} className="text-[#F47C20]" />
              <span>Who We Are</span>
            </span>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
              Engineering reliable digital systems with{" "}
              <span className="text-[#F47C20]">purpose & precision.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#3D3D3D]/80">
              Smart Matrix (Smart Software Services Pvt. Ltd.) is a dedicated technology engineering firm headquartered in Pune, India. We help companies around the world modernize legacy workflows, build resilient platforms, and ship impactful software.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Story */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6 space-y-5 text-sm sm:text-base leading-relaxed text-[#3D3D3D]/80">
              <h2 className="text-2xl font-bold text-[#262626] sm:text-3xl">
                Born out of a belief in craftsmanship over shortcuts.
              </h2>
              <p>
                Too much software is built hastily: piled high with technical debt, bloated dependencies, and unmaintainable code that breaks under real-world user load.
              </p>
              <p>
                At Smart Matrix, we take a different approach. Every architecture decision is intentional. We build clean, modular components, automate quality checks, and prioritize software maintainability and performance above all else.
              </p>
              <div className="rounded-2xl border border-[#F47C20]/20 bg-[#FFF8F0] p-5">
                <p className="font-semibold text-xs sm:text-sm text-[#d8690f] leading-relaxed">
                  "Our goal is not just to ship a product, but to leave our clients with an engineering foundation they can build on for years to come."
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="overflow-hidden rounded-3xl border border-[#3D3D3D]/10 bg-white shadow-xl">
                  <img
                    src="/src/assets/images/about/about_hero.jpg"
                    alt="Smart Matrix Collaborative Culture"
                    className="h-96 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Statistics Strip */}
      <StatisticsSection />

      {/* Core Values Grid */}
      <section className="py-16 sm:py-24 bg-[#FFFCF7]">
        <Container>
          <SectionHeading
            badge="Our Foundation"
            title="The principles that guide our"
            highlight="engineering decisions."
            description="Our culture is built around accountability, transparent collaboration, and uncompromising code quality."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-2xl border border-[#3D3D3D]/10 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#F47C20]/40 hover:shadow-lg hover:shadow-[#F47C20]/5"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                    <ShieldCheck size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-[#262626]">
                    {val.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#3D3D3D]/75">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How We Work / Process */}
      <section className="py-16 sm:py-24 bg-white border-t border-[#3D3D3D]/10">
        <Container>
          <SectionHeading
            badge="Our Methodology"
            title="How we partner with you from"
            highlight="concept to deployment."
            description="A disciplined, transparent delivery framework designed to minimize risk and accelerate time to market."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {APPROACH_STEPS.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-[#3D3D3D]/10 bg-[#FFFCF7] p-6"
              >
                <span className="text-3xl font-black text-[#F47C20]/25">
                  {item.step}
                </span>
                <h4 className="mt-3 text-base font-bold text-[#262626]">
                  {item.title}
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#3D3D3D]/75">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </div>
  );
}

