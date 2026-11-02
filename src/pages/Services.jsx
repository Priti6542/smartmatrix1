import React from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ServiceCard from "../components/cards/ServiceCard";
import CtaSection from "../components/sections/CtaSection";
import { SERVICES } from "../data/services";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Services() {
  useDocumentTitle("Services — End-to-End Software Engineering & AI Solutions");

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#3D3D3D]/10 bg-[#FFFCF7] pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F47C20]/20 bg-[#FFF8F0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d8690f]">
              <Sparkles size={14} className="text-[#F47C20]" />
              <span>Engineering Capabilities</span>
            </span>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
              Technology solutions built around your{" "}
              <span className="text-[#F47C20]">business goals.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#3D3D3D]/80">
              We bring together deep technical expertise, user-centered design, and robust cloud architectures to help businesses launch new ventures, streamline operations, and scale with confidence.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Architecture Standards Section */}
      <section className="py-16 sm:py-20 bg-[#FFFCF7] border-t border-[#3D3D3D]/10">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <SectionHeading
              badge="Engineering Standards"
              title="How we ensure quality across"
              highlight="every line of code."
              description="Our delivery model combines modern continuous integration, automated test suites, and strict code review protocols."
            />

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left">
              <div className="rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="mt-4 text-base font-bold text-[#262626]">
                  Rigorous Code Review
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#3D3D3D]/75 leading-relaxed">
                  Every pull request requires two senior peer reviews, automated lint checks, and unit test passing.
                </p>
              </div>

              <div className="rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="mt-4 text-base font-bold text-[#262626]">
                  CI / CD Automation
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#3D3D3D]/75 leading-relaxed">
                  Staging and production deployment pipelines with zero-downtime rolling updates and instant rollback.
                </p>
              </div>

              <div className="rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 shadow-xs">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                  <CheckCircle2 size={20} />
                </div>
                <h4 className="mt-4 text-base font-bold text-[#262626]">
                  Full IP Ownership
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-[#3D3D3D]/75 leading-relaxed">
                  All repositories, cloud infrastructure, and intellectual property remain 100% owned by your company.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CtaSection />
    </div>
  );
}

