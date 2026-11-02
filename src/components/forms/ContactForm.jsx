import React, { useState } from "react";
import { AlertCircle, CheckCircle2, Mail, Phone, Send, User } from "lucide-react";
import Button from "../common/Button";
import { validateContactForm } from "../../utils/validation";

export default function ContactForm({ className = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validateContactForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    // Simulate frontend validation & transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus("success");
      setFormData({
        name: "",
        email: "",
        contact: "",
        message: "",
      });
    }, 700);
  };

  return (
    <div
      className={`rounded-2xl border border-stone-200/80 bg-white p-6 sm:p-9 shadow-sm ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#262626] sm:text-2xl">
          Send Us a Message
        </h3>
        <p className="mt-1 text-sm text-[#3D3D3D]/70">
          Leave your message below and our team will get back to you within 24 business hours.
        </p>
      </div>

      {submittedStatus === "success" && (
        <div className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-50 p-4 text-emerald-800">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold">
                Thank you! Your message has been received.
              </p>
              <p className="mt-1 text-xs text-emerald-700 leading-relaxed">
                Frontend validation passed. Please note: SMTP / backend email service integration is pending for this domain. For immediate inquiries, please reach out directly to <strong>hr@smartmatrixds.com</strong> or call <strong>+91 9112108484</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        {/* Name & Email Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
              Name <span className="text-[#F47C20]">*</span>
            </label>
            <div className="relative mt-1.5">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full rounded-xl border px-4 py-3 text-sm text-[#262626] transition-colors duration-200 placeholder:text-[#3D3D3D]/35 focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20 ${
                  errors.name
                    ? "border-rose-400 bg-rose-50/20"
                    : "border-stone-200 bg-white focus:border-[#F47C20]"
                }`}
              />
            </div>
            {errors.name && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-500 font-medium">
                <AlertCircle size={12} />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
              Email <span className="text-[#F47C20]">*</span>
            </label>
            <div className="relative mt-1.5">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full rounded-xl border px-4 py-3 text-sm text-[#262626] transition-colors duration-200 placeholder:text-[#3D3D3D]/35 focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20 ${
                  errors.email
                    ? "border-rose-400 bg-rose-50/20"
                    : "border-stone-200 bg-white focus:border-[#F47C20]"
                }`}
              />
            </div>
            {errors.email && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-500 font-medium">
                <AlertCircle size={12} />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Contact Field */}
        <div>
          <label htmlFor="contact" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
            Contact Number <span className="text-[#F47C20]">*</span>
          </label>
          <div className="relative mt-1.5">
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Enter your contact number (e.g. +91 9112108484)"
              className={`w-full rounded-xl border px-4 py-3 text-sm text-[#262626] transition-colors duration-200 placeholder:text-[#3D3D3D]/35 focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20 ${
                errors.contact
                  ? "border-rose-400 bg-rose-50/20"
                  : "border-stone-200 bg-white focus:border-[#F47C20]"
              }`}
            />
          </div>
          {errors.contact && (
            <p className="mt-1 flex items-center gap-1 text-xs text-rose-500 font-medium">
              <AlertCircle size={12} />
              <span>{errors.contact}</span>
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
            Message <span className="text-[#F47C20]">*</span>
          </label>
          <div className="relative mt-1.5">
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`w-full rounded-xl border px-4 py-3 text-sm text-[#262626] transition-colors duration-200 placeholder:text-[#3D3D3D]/35 focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20 ${
                errors.message
                  ? "border-rose-400 bg-rose-50/20"
                  : "border-stone-200 bg-white focus:border-[#F47C20]"
              }`}
            />
          </div>
          {errors.message && (
            <p className="mt-1 flex items-center gap-1 text-xs text-rose-500 font-medium">
              <AlertCircle size={12} />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            icon={Send}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
}
