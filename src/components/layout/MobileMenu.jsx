import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Mail, Phone, X } from "lucide-react";
import Button from "../common/Button";
import { NAV_LINKS } from "../../data/navigation";
import { COMPANY_INFO } from "../../data/company";

export default function MobileMenu({ isOpen, onClose }) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col justify-between bg-white shadow-2xl transition-transform duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#3D3D3D]/10 px-6 py-5">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <img
              src="/src/assets/logos/smart_logo.webp"
              alt="Smart Matrix"
              className="h-8 w-auto object-contain"
            />
            <span className="text-base font-extrabold tracking-tight text-[#262626]">
              Smart <span className="text-[#F47C20]">Matrix</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#3D3D3D]/10 text-[#3D3D3D] hover:bg-[#FFF8F0] hover:text-[#F47C20]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Links Navigation */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          <nav className="space-y-1">
            {NAV_LINKS.map((item, idx) => {
              const isActive = location.pathname === item.path;

              if (item.hasDropdown) {
                return (
                  <div key={idx} className="border-b border-[#3D3D3D]/5 pb-2">
                    <div className="flex items-center justify-between py-2.5">
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className={`text-base font-bold transition-colors ${
                          isActive ? "text-[#F47C20]" : "text-[#262626]"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => setServicesExpanded((prev) => !prev)}
                        aria-label="Toggle services list"
                        className="p-1.5 text-[#3D3D3D]/60 hover:text-[#F47C20]"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform duration-200 ${
                            servicesExpanded ? "rotate-180 text-[#F47C20]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {servicesExpanded && (
                      <div className="ml-3 mt-1 space-y-1 border-l-2 border-[#F47C20]/20 pl-3">
                        {item.children.map((child, cIdx) => (
                          <Link
                            key={cIdx}
                            to={`/services/${child.slug}`}
                            onClick={onClose}
                            className="block rounded-lg px-2 py-2 text-xs font-semibold text-[#3D3D3D]/80 hover:bg-[#FFF8F0] hover:text-[#F47C20]"
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={onClose}
                  className={`block rounded-xl px-3 py-3 text-base font-bold transition-colors ${
                    isActive
                      ? "bg-[#FFF8F0] text-[#F47C20]"
                      : "text-[#262626] hover:bg-[#FFFCF7] hover:text-[#F47C20]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer shortcuts */}
        <div className="border-t border-[#3D3D3D]/10 bg-[#FFFCF7] p-6">
          <div className="mb-4 space-y-2 text-xs text-[#3D3D3D]/75">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 hover:text-[#F47C20]"
            >
              <Phone size={14} className="text-[#F47C20]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 hover:text-[#F47C20]"
            >
              <Mail size={14} className="text-[#F47C20]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <Button
            to="/contact"
            variant="primary"
            size="md"
            onClick={onClose}
            className="w-full"
          >
            Start a Project
          </Button>
        </div>
      </div>
    </div>
  );
}

