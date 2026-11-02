import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BrainCircuit,
  ChevronDown,
  Cloud,
  Globe,
  LayoutDashboard,
  Megaphone,
  Menu,
  PenTool,
  Rocket,
  Smartphone,
  Terminal,
} from "lucide-react";
import Button from "../common/Button";
import MobileMenu from "./MobileMenu";
import { NAV_LINKS } from "../../data/navigation";

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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Click outside to close services dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#3D3D3D]/10 bg-white/95 backdrop-blur-md shadow-xs py-3.5"
            : "border-b border-transparent bg-white/80 backdrop-blur-xs py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src="/src/assets/logos/smart_logo.webp"
              alt="Smart Matrix"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-[#262626]">
                Smart <span className="text-[#F47C20]">Matrix</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#3D3D3D]/60 -mt-1">
                Digital Services Pvt Ltd
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((item, idx) => {
              const isActive =
                item.path === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(item.path);

              if (item.hasDropdown) {
                return (
                  <div
                    key={idx}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setServicesDropdownOpen(false)}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                        isActive
                          ? "text-[#F47C20] bg-[#FFF8F0]"
                          : "text-[#262626] hover:text-[#F47C20] hover:bg-[#FFFCF7]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${
                          servicesDropdownOpen ? "rotate-180 text-[#F47C20]" : "text-[#3D3D3D]/60"
                        }`}
                      />
                    </Link>

                    {/* Mega Dropdown */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px]">
                        <div className="overflow-hidden rounded-2xl border border-[#3D3D3D]/10 bg-white p-5 shadow-2xl">
                          <div className="mb-3 flex items-center justify-between border-b border-[#3D3D3D]/5 pb-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#d8690f]">
                              Our Core Capabilities
                            </span>
                            <Link
                              to="/services"
                              className="text-xs font-semibold text-[#F47C20] hover:underline"
                            >
                              View All Services →
                            </Link>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            {item.children.map((child, cIdx) => {
                              const Icon = ICON_MAP[child.icon] || Globe;
                              return (
                                <Link
                                  key={cIdx}
                                  to={`/services/${child.slug}`}
                                  className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors duration-200 hover:bg-[#FFF8F0]"
                                >
                                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#F47C20]/20 bg-white text-[#F47C20] transition-colors duration-200 group-hover:bg-[#F47C20] group-hover:text-white">
                                    <Icon size={18} />
                                  </div>
                                  <div>
                                    <p className="text-xs font-bold text-[#262626] transition-colors group-hover:text-[#F47C20]">
                                      {child.title}
                                    </p>
                                    <p className="mt-0.5 text-[11px] leading-snug text-[#3D3D3D]/65 line-clamp-1">
                                      {child.description}
                                    </p>
                                  </div>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  to={item.path}
                  className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors duration-200 ${
                    isActive
                      ? "text-[#F47C20] bg-[#FFF8F0]"
                      : "text-[#262626] hover:text-[#F47C20] hover:bg-[#FFFCF7]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <Button to="/contact" variant="primary" size="md">
              Start a Project
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#3D3D3D]/10 text-[#262626] hover:bg-[#FFF8F0] hover:text-[#F47C20] lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}

