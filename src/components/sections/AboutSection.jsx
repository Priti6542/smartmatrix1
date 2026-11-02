import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Target } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";
import Button from "../common/Button";
import { CORE_VALUES } from "../../data/company";
import aboutCardImg from "../../assets/images/about/about_card.jpg";

const VALUE_ICONS = {
  ShieldCheck,
  Target,
  Sparkles,
};

export default function AboutSection({ showCta = true, className = "" }) {
  return (
    <section className={`py-16 sm:py-24 bg-[#FFFCF7] ${className}`}>
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left visual representation */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-xl">
                <img
                  src={aboutCardImg}
                  alt="Smart Matrix Engineering Team"
                  loading="lazy"
                  className="h-80 w-full object-cover"
                />
                <div className="p-6 sm:p-7">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#d8690f]">
                    Our Philosophy
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-[#262626]">
                    Software Built to Last, Not Just to Launch
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#3D3D3D]/75 leading-relaxed">
                    We treat your product as our own. That means clean code, comprehensive tests, and zero cutting corners on data security or architecture.
                  </p>
                </div>
              </div>

              {/* Floating highlight */}
              <div className="absolute -bottom-6 -right-4 rounded-2xl border border-white/10 bg-[#262626] p-5 text-white shadow-xl max-w-xs">
                <span className="block text-2xl font-black text-[#F47C20]">100%</span>
                <span className="text-xs font-medium text-white/80">
                  Direct code ownership with full CI/CD deployment pipelines delivered to you.
                </span>
              </div>
            </div>
          </div>

          {/* Right Text & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <SectionHeading
              align="left"
              badge="About Smart Matrix"
              title="A technology partner committed to"
              highlight="tangible business results."
              description="Founded in Pune, India, Smart Matrix (Smart Software Services Pvt. Ltd.) bridges the gap between ambitious business ideas and rock-solid software execution."
            />

            {/* Core Value items */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {CORE_VALUES.slice(0, 4).map((val, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200/80 bg-white p-5 shadow-2xs transition-all duration-200 hover:border-[#F47C20]/30 hover:shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#FFF8F0] text-[#F47C20]">
                      <CheckCircle2 size={18} />
                    </span>
                    <h4 className="text-sm font-bold text-[#262626]">
                      {val.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#3D3D3D]/75">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {showCta && (
              <div className="mt-8 flex items-center gap-4">
                <Button to="/about" variant="primary" icon={ArrowRight}>
                  More About Our Team
                </Button>
                <Button to="/contact" variant="ghost">
                  Get in Touch
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

