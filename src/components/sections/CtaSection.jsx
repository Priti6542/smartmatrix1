import React from "react";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import Container from "../common/Container";
import Button from "../common/Button";
import { COMPANY_INFO } from "../../data/company";

export default function CtaSection({
  title = "Ready to build your next breakthrough digital solution?",
  description = "Whether you have a fully formed technical specification or need help defining an MVP, our engineering leaders are ready to talk.",
  primaryCtaText = "Start a Project",
  primaryCtaLink = "/contact",
  className = "",
}) {
  return (
    <section className={`relative overflow-hidden bg-[#262626] py-16 sm:py-20 text-white ${className}`}>
      {/* Decorative gradient glow */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#F47C20]/20 blur-3xl" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#FDB913]/15 blur-3xl" />

      <Container>
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            <Sparkles size={14} className="text-[#F47C20]" />
            <span>Let's Collaborate</span>
          </div>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              to={primaryCtaLink}
              size="lg"
              icon={ArrowRight}
              iconPosition="right"
              className="w-full sm:w-auto"
            >
              {primaryCtaText}
            </Button>
            <Button
              to="/about"
              variant="outlineWhite"
              size="lg"
              className="w-full sm:w-auto"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Contact details mini-strip */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-6 text-xs text-white/70">
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-2 hover:text-[#F47C20] transition-colors"
            >
              <Mail size={15} className="text-[#F47C20]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <span>•</span>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 hover:text-[#F47C20] transition-colors"
            >
              <Phone size={15} className="text-[#F47C20]" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

