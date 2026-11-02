import React, { useState } from "react";
import { AlertCircle, CheckCircle2, UploadCloud } from "lucide-react";
import Button from "../common/Button";
import { validateCareerForm } from "../../utils/validation";

const ROLES_LIST = [
  "Frontend Developer (React / Tailwind)",
  "Backend Engineer (Python / Node.js)",
  "UI / UX Designer",
  "QA Automation Engineer",
  "Full Stack Intern",
  "Other / Open Application",
];

const EXPERIENCE_LEVELS = [
  "Fresher / Student (Internship)",
  "0 – 1 Year",
  "1 – 3 Years",
  "3+ Years",
];

export default function CareerForm({ defaultRole = "", className = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: defaultRole || ROLES_LIST[0],
    experience: EXPERIENCE_LEVELS[0],
    portfolioUrl: "",
    note: "",
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
    const validation = validateCareerForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus("success");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        role: defaultRole || ROLES_LIST[0],
        experience: EXPERIENCE_LEVELS[0],
        portfolioUrl: "",
        note: "",
      });
    }, 800);
  };

  return (
    <div
      className={`rounded-2xl border border-stone-200/80 bg-white p-6 sm:p-9 shadow-sm ${className}`}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#262626] sm:text-2xl">
          Apply to Smart Matrix
        </h3>
        <p className="mt-1 text-sm text-[#3D3D3D]/70">
          Submit your profile details. Our hiring team reviews every application thoroughly.
        </p>
      </div>

      {submittedStatus === "success" && (
        <div className="mb-6 rounded-xl border border-emerald-500/20 bg-emerald-50 p-4 text-emerald-800">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-600" />
            <div>
              <p className="text-sm font-semibold">
                Application Validated Successfully!
              </p>
              <p className="mt-1 text-xs text-emerald-700 leading-relaxed">
                Thank you for applying. Note: Live career portal transmission is currently running in frontend validation mode. To ensure your resume is received directly, please also forward your CV to <strong>hr@smartmatrixds.com</strong> with the subject line containing your target role.
              </p>
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        {/* Full Name & Email */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="fullName" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
              Full Name <span className="text-[#F47C20]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Priya Sharma"
              className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-[#262626] transition-colors duration-200 placeholder:text-[#3D3D3D]/35 focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20 ${
                errors.fullName ? "border-rose-400 bg-rose-50/20" : "border-stone-200 bg-white focus:border-[#F47C20]"
              }`}
            />
            {errors.fullName && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-500 font-medium">
                <AlertCircle size={12} />
                <span>{errors.fullName}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
              Email Address <span className="text-[#F47C20]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="priya@example.com"
              className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-[#262626] transition-colors duration-200 placeholder:text-[#3D3D3D]/35 focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20 ${
                errors.email ? "border-rose-400 bg-rose-50/20" : "border-stone-200 bg-white focus:border-[#F47C20]"
              }`}
            />
            {errors.email && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-500 font-medium">
                <AlertCircle size={12} />
                <span>{errors.email}</span>
              </p>
            )}
          </div>
        </div>

        {/* Phone & Role */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
              Phone Number <span className="text-[#F47C20]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 91121 00000"
              className={`mt-1.5 w-full rounded-xl border px-4 py-3 text-sm text-[#262626] transition-colors duration-200 placeholder:text-[#3D3D3D]/35 focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20 ${
                errors.phone ? "border-rose-400 bg-rose-50/20" : "border-stone-200 bg-white focus:border-[#F47C20]"
              }`}
            />
            {errors.phone && (
              <p className="mt-1 flex items-center gap-1 text-xs text-rose-500 font-medium">
                <AlertCircle size={12} />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>

          <div>
            <label htmlFor="role" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
              Target Position <span className="text-[#F47C20]">*</span>
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-[#262626] transition-colors duration-200 focus:border-[#F47C20] focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20"
            >
              {ROLES_LIST.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Experience & Portfolio */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="experience" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
              Experience Level <span className="text-[#F47C20]">*</span>
            </label>
            <select
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-[#262626] transition-colors duration-200 focus:border-[#F47C20] focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20"
            >
              {EXPERIENCE_LEVELS.map((lvl, i) => (
                <option key={i} value={lvl}>
                  {lvl}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="portfolioUrl" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
              GitHub / Portfolio / LinkedIn URL
            </label>
            <input
              type="url"
              id="portfolioUrl"
              name="portfolioUrl"
              value={formData.portfolioUrl}
              onChange={handleChange}
              placeholder="https://github.com/username"
              className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-[#262626] transition-colors duration-200 placeholder:text-[#3D3D3D]/35 focus:border-[#F47C20] focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20"
            />
          </div>
        </div>

        {/* Note / Pitch */}
        <div>
          <label htmlFor="note" className="block text-xs font-bold text-[#262626] uppercase tracking-wider">
            Why do you want to join Smart Matrix?
          </label>
          <textarea
            id="note"
            name="note"
            rows={3}
            value={formData.note}
            onChange={handleChange}
            placeholder="Tell us about your core technical interests, recent projects, or what you hope to achieve here..."
            className="mt-1.5 w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-[#262626] transition-colors duration-200 placeholder:text-[#3D3D3D]/35 focus:border-[#F47C20] focus:outline-none focus:ring-2 focus:ring-[#F47C20]/20"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            icon={UploadCloud}
            iconPosition="right"
            className="w-full sm:w-auto"
          >
            {isSubmitting ? "Submitting Application..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
}

