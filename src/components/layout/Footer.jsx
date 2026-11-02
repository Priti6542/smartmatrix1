import React from "react";
import { Link } from "react-router-dom";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { COMPANY_INFO } from "../../data/company";
import { FOOTER_LINKS } from "../../data/navigation";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[#3D3D3D]/10 bg-[#262626] text-white">
      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand info (2 columns) */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/src/assets/logos/smart_logo.webp"
                alt="Smart Matrix"
                className="h-9 w-auto object-contain brightness-125"
              />
              <span className="text-xl font-black tracking-tight text-white">
                Smart <span className="text-[#F47C20]">Matrix</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {COMPANY_INFO.description}
            </p>

            <div className="mt-6 space-y-2.5 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#F47C20]" />
                <span className="leading-snug">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-[#F47C20]" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#F47C20]">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail size={16} className="shrink-0 text-[#F47C20]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#F47C20]">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {FOOTER_LINKS.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="text-white/70 transition-colors duration-200 hover:text-[#F47C20]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              {FOOTER_LINKS.services.map((link, idx) => (
                <Link
                  key={idx}
                  to={link.path}
                  className="text-white/70 transition-colors duration-200 hover:text-[#F47C20]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/50 text-center sm:text-left">
            © {new Date().getFullYear()} {COMPANY_INFO.name} All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 text-xs text-white/60">
              <Link to="/contact" className="hover:text-white">Privacy</Link>
              <span>•</span>
              <Link to="/contact" className="hover:text-white">Terms</Link>
              <span>•</span>
              <Link to="/about" className="hover:text-white">Security</Link>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/70 transition-colors duration-200 hover:border-[#F47C20] hover:bg-[#F47C20] hover:text-white"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

