import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home, Search } from "lucide-react";
import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function NotFound() {
  useDocumentTitle("404 — Page Not Found");

  return (
    <div className="flex min-h-[70vh] items-center justify-center py-20 bg-[#FFFCF7]">
      <Container size="sm">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#F47C20]/20 bg-[#FFF8F0] px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#d8690f]">
            Error 404
          </span>

          <h1 className="mt-6 text-4xl font-black tracking-tight text-[#262626] sm:text-6xl">
            Page not found
          </h1>

          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#3D3D3D]/75">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/" size="lg" icon={Home} iconPosition="left">
              Back to Home
            </Button>
            <Button to="/services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="mt-12 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-xs text-left">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#262626]">
              Helpful Destinations
            </h3>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
              <li>
                <Link to="/about" className="text-[#F47C20] hover:underline font-medium">
                  → About Smart Matrix
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#F47C20] hover:underline font-medium">
                  → Our Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-[#F47C20] hover:underline font-medium">
                  → Open Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#F47C20] hover:underline font-medium">
                  → Contact Team
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

