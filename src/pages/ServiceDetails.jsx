import React from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Globe,
  LayoutDashboard,
  Megaphone,
  PenTool,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
} from "lucide-react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import CtaSection from "../components/sections/CtaSection";
import { getServiceBySlug, SERVICES } from "../data/services";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const ICON_MAP = {
  Globe,
  Terminal,
  Smartphone,
  Rocket,
  PenTool,
  BrainCircuit,
  Cloud,
  LayoutDashboard,
  Megaphone,
};

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  useDocumentTitle(service ? service.title : "Service Details");

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const Icon = ICON_MAP[service.icon] || Globe;
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      {/* Header / Hero */}
      <section className="border-b border-[#3D3D3D]/10 bg-[#FFFCF7] pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20] border border-[#F47C20]/20">
                  <Icon size={24} />
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#d8690f] border border-[#3D3D3D]/10">
                  {service.badge}
                </span>
              </div>

              <h1 className="mt-5 text-3xl font-black tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>

              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#3D3D3D]/80">
                {service.longDescription}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact" size="lg" icon={ArrowRight} iconPosition="right">
                  Discuss Your Project
                </Button>
                <Button to="/services" variant="secondary" size="lg">
                  All Services
                </Button>
              </div>
            </div>

            {/* Quick Summary Card */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 shadow-sm">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#262626]">
                  Technology Stack
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-[#FFFCF7] px-2.5 py-1 text-xs font-semibold text-[#3D3D3D] border border-[#3D3D3D]/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 border-t border-[#3D3D3D]/10 pt-4">
                  <span className="block text-xs font-semibold text-[#3D3D3D]/65">
                    Engagement Model
                  </span>
                  <p className="mt-1 text-xs font-bold text-[#262626]">
                    Dedicated Squad • Fixed Scope Sprint • T&M
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Deliverables & Benefits */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left: What We Deliver */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d8690f]">
                Scope & Capabilities
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#262626] sm:text-3xl">
                What We Build & Deliver
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#3D3D3D]/75">
                Each project is scoped with clean architecture milestones, transparent timelines, and automated testing suites.
              </p>

              <div className="mt-8 space-y-3">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-xl border border-[#3D3D3D]/10 bg-[#FFFCF7] p-4 transition-colors hover:border-[#F47C20]/30"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#F47C20]" />
                    <span className="text-sm font-semibold text-[#262626]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Key Business Benefits */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#d8690f]">
                Strategic Advantages
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#262626] sm:text-3xl">
                Business Outcomes
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#3D3D3D]/75">
                Measurable value engineered into every release.
              </p>

              <div className="mt-8 space-y-4">
                {service.benefits.map((b, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 shadow-xs"
                  >
                    <h3 className="text-base font-bold text-[#262626]">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#3D3D3D]/75">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Delivery Process */}
      {service.process && (
        <section className="py-16 sm:py-24 bg-[#FFFCF7] border-y border-[#3D3D3D]/10">
          <Container>
            <SectionHeading
              badge="Structured Execution"
              title="Our Engineering Process for"
              highlight={service.title}
              description="A clear roadmap from specification to deployment with constant feedback loops."
            />

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 shadow-2xs"
                >
                  <span className="text-3xl font-black text-[#F47C20]">
                    {step.step}
                  </span>
                  <h4 className="mt-3 text-base font-bold text-[#262626]">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#3D3D3D]/75">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Explore Related Services */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="mb-10 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#d8690f]">
                Complementary Solutions
              </span>
              <h3 className="mt-1 text-2xl font-bold text-[#262626]">
                Explore Other Services
              </h3>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#F47C20] hover:underline"
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((other) => {
              const OtherIcon = ICON_MAP[other.icon] || Globe;
              return (
                <Link
                  key={other.slug}
                  to={`/services/${other.slug}`}
                  className="group rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#F47C20]/40 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                    <OtherIcon size={20} />
                  </div>
                  <h4 className="mt-4 text-base font-bold text-[#262626] group-hover:text-[#F47C20] transition-colors">
                    {other.title}
                  </h4>
                  <p className="mt-2 text-xs text-[#3D3D3D]/70 line-clamp-2">
                    {other.shortDescription}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#F47C20]">
                    <span>Learn more</span>
                    <ArrowRight size={14} />
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>

      <CtaSection />
    </div>
  );
}

