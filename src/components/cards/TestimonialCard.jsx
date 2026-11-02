import React from "react";
import { Quote, Star } from "lucide-react";

export default function TestimonialCard({ testimonial, className = "" }) {
  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl border border-stone-200/80 bg-white p-7 shadow-xs transition-all duration-300 hover:border-[#F47C20]/30 hover:shadow-lg hover:shadow-[#F47C20]/5 ${className}`}
    >
      <div>
        <div className="flex items-center justify-between">
          <div className="flex gap-1 text-[#FDB913]">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
          </div>
          <Quote size={28} className="text-[#F47C20]/20" />
        </div>

        <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#3D3D3D]/85 italic">
          "{testimonial.quote}"
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4">
        <div>
          <h4 className="text-sm font-bold text-[#262626]">
            {testimonial.author}
          </h4>
          <p className="text-xs text-[#3D3D3D]/65">
            {testimonial.role} • <span className="font-semibold text-[#F47C20]">{testimonial.company}</span>
          </p>
        </div>

        {testimonial.project && (
          <span className="hidden sm:inline-block rounded-full bg-[#FFF8F0] px-2.5 py-1 text-[11px] font-semibold text-[#d8690f] border border-orange-200/60">
            {testimonial.project}
          </span>
        )}
      </div>
    </div>
  );
}

