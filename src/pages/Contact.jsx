import React from "react";
import { Clock, Mail, MapPin, Phone, ShieldCheck, Sparkles } from "lucide-react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import ContactForm from "../components/forms/ContactForm";
import { COMPANY_INFO } from "../data/company";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const CONTACT_FAQS = [
  {
    q: "How fast can we kick off a project?",
    a: "Following an initial discovery session, we typically scope technical deliverables and mobilize engineering teams within 1 to 2 weeks.",
  },
  {
    q: "Do you sign Non-Disclosure Agreements (NDAs)?",
    a: "Yes. We execute mutual NDAs before reviewing proprietary documents, codebase architectures, or business plans.",
  },
  {
    q: "What time zones do you support?",
    a: "Our core engineering team is in India (IST), with flexible overlap hours scheduled to accommodate clients across North America, Europe, and Australia.",
  },
  {
    q: "Who owns the code and intellectual property?",
    a: "You do. 100% of the repository code, designs, database schemas, and documentation are transferred to your organization upon project milestones.",
  },
];

export default function Contact() {
  useDocumentTitle("Contact Us — Start a Project or Inquire");

  return (
    <div>
      {/* Header */}
      <section className="border-b border-[#3D3D3D]/10 bg-[#FFFCF7] pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16">
        <Container>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F47C20]/20 bg-[#FFF8F0] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#d8690f]">
              <Sparkles size={14} className="text-[#F47C20]" />
              <span>Get in Touch</span>
            </span>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-[#262626] sm:text-4xl lg:text-5xl">
              Let's discuss your next{" "}
              <span className="text-[#F47C20]">software project.</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#3D3D3D]/80">
              Have a question, need an architecture consultation, or looking for an experienced engineering team? We'd love to connect.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#262626]">
                  Contact Information
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#3D3D3D]/75">
                  Reach out directly by phone, email, or stop by our office during working hours.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 rounded-2xl border border-[#3D3D3D]/10 bg-[#FFFCF7] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#d8690f]">
                      Office Address
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[#262626] leading-snug">
                      {COMPANY_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[#3D3D3D]/10 bg-[#FFFCF7] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#d8690f]">
                      Call Us
                    </h3>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="mt-1 block text-sm font-bold text-[#262626] hover:text-[#F47C20]"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-xs text-[#3D3D3D]/60">Mon – Fri, 9:30 AM – 6:30 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[#3D3D3D]/10 bg-[#FFFCF7] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#d8690f]">
                      Email Inquiries
                    </h3>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="mt-1 block text-sm font-bold text-[#262626] hover:text-[#F47C20]"
                    >
                      {COMPANY_INFO.email}
                    </a>
                    <span className="text-xs text-[#3D3D3D]/60">General: {COMPANY_INFO.contactEmail}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-2xl border border-[#3D3D3D]/10 bg-[#FFFCF7] p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFF8F0] text-[#F47C20]">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#d8690f]">
                      Working Hours
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#262626]">
                      {COMPANY_INFO.workingHours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy badge */}
              <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/50 p-4 text-xs text-emerald-900 flex items-center gap-3">
                <ShieldCheck size={20} className="text-emerald-600 shrink-0" />
                <span>We respect your privacy. Non-Disclosure Agreements (NDAs) are signed upfront.</span>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-[#FFFCF7] border-t border-[#3D3D3D]/10">
        <Container size="sm">
          <SectionHeading
            badge="Common Questions"
            title="What to expect when"
            highlight="reaching out."
            description="Clear answers about our consultation process, NDAs, and engagement models."
          />

          <div className="mt-12 space-y-4">
            {CONTACT_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#3D3D3D]/10 bg-white p-6 shadow-2xs"
              >
                <h3 className="text-base font-bold text-[#262626]">
                  {faq.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#3D3D3D]/75">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

