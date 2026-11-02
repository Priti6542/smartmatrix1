import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BrainCircuit,
  Cloud,
  Globe,
  LayoutDashboard,
  Megaphone,
  PenTool,
  Rocket,
  Smartphone,
  Terminal,
} from "lucide-react";

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

export default function ServiceCard({ service, className = "" }) {
  const Icon = ICON_MAP[service.icon] || Globe;

  return (
    <div
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-[#3D3D3D]/10 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#F47C20]/40 hover:shadow-lg hover:shadow-[#F47C20]/5 ${className}`}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent transition-colors duration-300 group-hover:bg-[#F47C20]" />

      <div>
        <div className="flex items-center justify-between">
          <div className="flex h-13 w-13 items-center justify-center rounded-xl border border-[#F47C20]/20 bg-[#FFF8F0] text-[#F47C20] transition-colors duration-300 group-hover:bg-[#F47C20] group-hover:text-white">
            <Icon size={26} strokeWidth={2} />
          </div>
          {service.badge && (
            <span className="rounded-full bg-[#FAFAF9] px-2.5 py-1 text-[11px] font-semibold text-[#3D3D3D]/70 border border-[#3D3D3D]/5">
              {service.badge}
            </span>
          )}
        </div>

        <h3 className="mt-5 text-xl font-bold text-[#262626] transition-colors duration-200 group-hover:text-[#F47C20]">
          {service.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#3D3D3D]/75 line-clamp-3">
          {service.shortDescription}
        </p>

        {service.deliverables && service.deliverables.length > 0 && (
          <ul className="mt-5 space-y-1.5 border-t border-[#3D3D3D]/5 pt-4">
            {service.deliverables.slice(0, 3).map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs font-medium text-[#3D3D3D]/80">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F47C20]" />
                <span className="truncate">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-[#3D3D3D]/10">
        <Link
          to={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#F47C20] transition-all duration-200 group-hover:gap-3 group-hover:text-[#d8690f]"
        >
          <span>Explore Service</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}

