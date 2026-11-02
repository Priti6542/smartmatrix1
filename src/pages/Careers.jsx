import React, { useRef, useState } from "react";
import {
  Briefcase,
  ChevronDown,
  Code2,
  Coffee,
  GraduationCap,
  Laptop,
  MapPin,
  Sparkles,
} from "lucide-react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import CareerForm from "../components/forms/CareerForm";
import CtaSection from "../components/sections/CtaSection";
import { HIRING_STEPS, OPEN_ROLES, PERKS } from "../data/careers";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const PERK_ICONS = {
  Code2,
  GraduationCap,
  Laptop,
  Coffee,
};

export default function Careers() {
  const [expandedRole, setExpandedRole] = useState(OPEN_ROLES[0]?.id || null);
  const [selectedRoleForForm, setSelectedRoleForForm] = useState("");
  const formRef = useRef(null);

  useDocumentTitle("Careers — Join Our Engineering Team in Pune");

  const handleApplyClick = (roleTitle) => {
    setSelectedRoleForForm(roleTitle);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="border-b border-stone-200/80 bg-[#FFFCF7] pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F47C20]/20 bg-[#FFF8F0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d8690f]">
              <Sparkles size={14} className="text-[#F47C20]" />
              <span>We're Hiring</span>
            </span>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
              Build impactful software with a team of{" "}
              <span className="text-[#F47C20]">builders & mentors.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#3D3D3D]/80">
              Join an engineering-first culture focused on high-quality code, continuous learning, and direct exposure to real production systems.
            </p>
          </div>
        </Container>
      </section>

      {/* Culture & Perks */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <SectionHeading
            badge="Culture & Benefits"
            title="Why engineers thrive at"
            highlight="Smart Matrix."
            description="We invest in our people with meaningful work, senior mentorship, and zero micromanagement."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((perk, idx) => {
              const Icon = PERK_ICONS[perk.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-stone-200/80 bg-[#FFFCF7] p-6 transition-all duration-200 hover:border-[#F47C20]/30 hover:shadow-xs"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-[#262626]">
                    {perk.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#3D3D3D]/75 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Open Positions List */}
      <section className="py-16 sm:py-24 bg-[#FFFCF7] border-y border-stone-200/80">
        <Container>
          <SectionHeading
            badge="Current Openings"
            title="Explore our open positions &"
            highlight="internship opportunities."
            description="We welcome motivated freshers, interns, and experienced engineers looking for deep technical growth."
          />

          <div className="mt-12 max-w-4xl mx-auto space-y-4">
            {OPEN_ROLES.map((role) => {
              const isExpanded = expandedRole === role.id;
              return (
                <div
                  key={role.id}
                  className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-2xs transition-colors"
                >
                  {/* Collapsible Header */}
                  <div
                    onClick={() => setExpandedRole(isExpanded ? null : role.id)}
                    className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-[#FFF8F0]/30"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[#FFF8F0] px-2.5 py-0.5 text-xs font-bold text-[#d8690f] border border-[#F47C20]/20">
                          {role.type}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-[#3D3D3D]/65">
                          <MapPin size={12} className="text-[#F47C20]" />
                          {role.location}
                        </span>
                        <span className="text-xs text-[#3D3D3D]/65">
                          • {role.experience}
                        </span>
                      </div>
                      <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#262626]">
                        {role.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <ChevronDown
                        size={20}
                        className={`text-[#3D3D3D]/60 transition-transform duration-200 ${
                          isExpanded ? "rotate-180 text-[#F47C20]" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Body */}
                  {isExpanded && (
                    <div className="border-t border-stone-200/80 bg-[#FFFCF7]/40 p-6 sm:p-7">
                      <p className="text-sm leading-relaxed text-[#3D3D3D]/80">
                        {role.description}
                      </p>

                      <div className="mt-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#262626]">
                          Requirements & Core Skills:
                        </h4>
                        <ul className="mt-2 space-y-1.5">
                          {role.requirements.map((req, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#3D3D3D]/75">
                              <span className="h-1.5 w-1.5 mt-1.5 shrink-0 rounded-full bg-[#F47C20]" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between">
                        <span className="text-xs text-[#3D3D3D]/60">
                          Department: {role.department}
                        </span>
                        <Button
                          size="sm"
                          onClick={() => handleApplyClick(role.title)}
                        >
                          Apply for this Role
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Hiring Process */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <SectionHeading
            badge="What to Expect"
            title="Our streamlined, transparent"
            highlight="hiring journey."
            description="We respect your time. Expect transparent communication and quick turnaround times at every step."
          />

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {HIRING_STEPS.map((step, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-stone-200/80 bg-[#FFFCF7] p-6"
              >
                <span className="text-2xl font-black text-[#F47C20]">
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

      {/* Application Form */}
      <section ref={formRef} className="py-16 sm:py-24 bg-[#FFFCF7] border-t border-stone-200/80">
        <Container size="sm">
          <SectionHeading
            badge="Submit Application"
            title="Start your journey with"
            highlight="Smart Matrix."
            description="Fill out the form below. We will reach back within 3-5 business days."
          />
          <div className="mt-10">
            <CareerForm defaultRole={selectedRoleForForm} />
          </div>
        </Container>
      </section>

      <CtaSection
        title="Don't see an exact match for your skills?"
        description="We are always looking for exceptional software minds. Reach out to hr@smartmatrixds.com with your resume and project links."
        primaryCtaText="Send Open Application"
        primaryCtaLink="/contact"
      />
    </div>
  );
}

