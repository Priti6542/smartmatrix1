import React from "react";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Code2,
  Megaphone,
  Smartphone,
  Sparkles,
  Star,
} from "lucide-react";
import Button from "../common/Button";
import Container from "../common/Container";

const DIGITAL_EXPERTISE = [
  {
    title: "Web & Software Development",
    description:
      "Custom websites, enterprise applications and scalable digital platforms.",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    description:
      "Intuitive mobile applications designed for modern businesses.",
    icon: Smartphone,
  },
  {
    title: "AI & Automation Solutions",
    description:
      "Intelligent automation and AI-powered business solutions.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud & Digital Solutions",
    description:
      "Secure cloud infrastructure and seamless digital transformation.",
    icon: Cloud,
  },
  {
    title: "Digital Marketing & Growth",
    description:
      "Data-driven SEO, performance marketing, social campaigns and online brand visibility.",
    icon: Megaphone,
    featured: true,
  },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-white to-white pt-6 pb-16 sm:pt-8 sm:pb-20 lg:pt-10 lg:pb-24">
      {/* Background soft glow accents */}
      <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#F47C20]/8 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 left-0 h-80 w-80 -translate-y-1/2 rounded-full bg-[#FDB913]/10 blur-3xl" />

      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Text Content */}
          <div className="lg:col-span-7">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-[#FFF8F0] px-4 py-1.5 text-xs font-bold text-[#d8690f]">
              <Sparkles size={14} className="text-[#F47C20]" />
              <span>Full-Lifecycle Software Engineering</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-[#262626] sm:text-5xl lg:text-6xl leading-[1.12]">
              Building intelligent software for{" "}
              <span className="text-[#F47C20]">
                forward-thinking
              </span>{" "}
              businesses.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#3D3D3D]/80">
              We partner with startups, scale-ups, and enterprises to design, engineer, and deploy scalable web platforms, custom enterprise systems, and intelligent AI solutions.
            </p>

            {/* Bullet Proof Points */}
            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold text-[#3D3D3D]/85 sm:gap-6 sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F47C20]" />
                <span>Zero Technical Debt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F47C20]" />
                <span>Agile Bi-Weekly Sprints</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#F47C20]" />
                <span>100% Code Ownership</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
                Schedule a Consultation
              </Button>
              <Button to="/services" variant="secondary" size="lg">
                Explore Services
              </Button>
            </div>

            {/* Social proof rating */}
            <div className="mt-10 flex items-center gap-4 border-t border-stone-200/80 pt-6">
              <div className="flex -space-x-2">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#F47C20] text-xs font-bold text-white ring-2 ring-white">
                  SS
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FDB913] text-xs font-bold text-[#262626] ring-2 ring-white">
                  TC
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#3D3D3D] text-xs font-bold text-white ring-2 ring-white">
                  NP
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#FDB913]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                  <span className="ml-1 text-xs font-bold text-[#262626]">5.0</span>
                </div>
                <p className="text-xs text-[#3D3D3D]/70">
                  Trusted by 50+ clients globally across US, UK & India
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual: Our Digital Expertise */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Showcase Card */}
              <div className="overflow-hidden rounded-3xl border border-stone-200/80 bg-white shadow-xl shadow-stone-900/5">
                {/* Card Header */}
                <div className="border-b border-stone-100 bg-gradient-to-r from-[#FFFCF7] via-white to-[#FFF8F0] px-6 py-5 sm:px-7 sm:py-6">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200/60 bg-[#FFF8F0] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#d8690f]">
                      <Sparkles size={12} className="text-[#F47C20]" />
                      Core Solutions
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[#3D3D3D]/50">
                      Smart Matrix
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold tracking-tight text-[#262626] sm:text-2xl">
                    Our Digital Expertise
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#3D3D3D]/70">
                    Transforming ideas into impactful digital experiences.
                  </p>
                </div>

                {/* Services Grid with Digital Marketing */}
                <div className="p-5 sm:p-6">
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {DIGITAL_EXPERTISE.map((item, idx) => {
                      const Icon = item.icon;
                      const isFullWidth = item.featured;
                      return (
                        <div
                          key={idx}
                          className={`group relative flex flex-col justify-between rounded-2xl bg-[#FFFDF9] p-3.5 sm:p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-lg hover:shadow-orange-500/5 border border-stone-100 hover:border-orange-200 ${
                            isFullWidth ? "sm:col-span-2" : ""
                          }`}
                        >
                          <div className={isFullWidth ? "flex items-start gap-3.5" : ""}>
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20] transition-colors duration-300 group-hover:bg-[#F47C20] group-hover:text-white">
                              <Icon size={20} strokeWidth={2} />
                            </div>
                            <div>
                              <h4
                                className={`${
                                  isFullWidth ? "text-sm font-bold text-[#262626]" : "mt-2.5 text-sm font-bold text-[#262626]"
                                } transition-colors duration-200 group-hover:text-[#F47C20]`}
                              >
                                {item.title}
                              </h4>
                              <p className="mt-1 text-xs leading-relaxed text-[#3D3D3D]/75">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Subtle Card Footer */}
                <div className="border-t border-stone-100 bg-gradient-to-r from-[#FFFCF7] via-white to-[#FFF8F0] px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
                  <div>
                    <span className="text-xs font-bold tracking-wide text-[#F47C20]">
                      Ideas. Innovation. Impact.
                    </span>
                    <p className="text-[11px] font-medium text-[#3D3D3D]/65">
                      Building a smarter digital future.
                    </p>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-semibold text-[#3D3D3D]/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#F47C20]"></span>
                    <span>IT & Digital Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

