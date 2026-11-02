import React from "react";
import { Activity, Building2, CreditCard, ShoppingBag, Truck } from "lucide-react";
import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

const INDUSTRIES = [
  {
    icon: Activity,
    title: "Healthcare & Life Sciences",
    description:
      "HIPAA-compliant telehealth platforms, medical billing systems, EHR integrations, and patient management portals.",
    highlight: "HIPAA Compliant",
  },
  {
    icon: CreditCard,
    title: "Fintech & Banking",
    description:
      "High-throughput transaction processing, portfolio analytics consoles, payment gateways, and automated reconciliation.",
    highlight: "Sub-Second Latency",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Real-time IoT fleet tracking, automated route dispatch systems, warehouse inventory managers, and customs documentation.",
    highlight: "Live Telemetry",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "Headless storefronts, multi-vendor marketplaces, real-time inventory synchronization, and personalized recommendation engines.",
    highlight: "Omnichannel Reach",
  },
  {
    icon: Building2,
    title: "Enterprise SaaS & B2B",
    description:
      "Multi-tenant SaaS architectures, subscription billing, RBAC access tiers, and mission-critical business workflow engines.",
    highlight: "Multi-Tenant Scalability",
  },
];

export default function IndustriesSection({ className = "" }) {
  return (
    <section className={`py-16 sm:py-24 bg-[#FFFCF7] border-y border-stone-200/80 ${className}`}>
      <Container>
        <SectionHeading
          badge="Domain Expertise"
          title="Tailored digital solutions engineered for"
          highlight="critical industries."
          description="We combine deep technical capabilities with industry-specific compliance standards to deliver software that solves actual regulatory and operational demands."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#F47C20]/40 hover:shadow-lg hover:shadow-[#F47C20]/5"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20] transition-colors duration-300 group-hover:bg-[#F47C20] group-hover:text-white">
                      <Icon size={24} />
                    </div>
                    <span className="rounded-full bg-[#FAFAF9] px-2.5 py-1 text-[11px] font-bold text-[#d8690f] border border-stone-100">
                      {ind.highlight}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#262626] transition-colors group-hover:text-[#F47C20]">
                    {ind.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-[#3D3D3D]/75">
                    {ind.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

