import React from "react";
import { cx } from "../../utils/helpers";

export default function SectionHeading({
  badge,
  title,
  highlight,
  description,
  align = "center",
  light = false,
  className = "",
}) {
  return (
    <div
      className={cx(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {badge && (
        <div
          className={cx(
            "mb-3.5 inline-flex items-center gap-2 rounded-full px-3.5 py-1 text-xs font-bold uppercase tracking-wider",
            light
              ? "border border-white/20 bg-white/10 text-white"
              : "border border-[#F47C20]/20 bg-[#FFF8F0] text-[#d8690f]"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#F47C20]" />
          {badge}
        </div>
      )}

      {title && (
        <h2
          className={cx(
            "text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl leading-tight sm:leading-tight",
            light ? "text-white" : "text-[#262626]"
          )}
        >
          {title}{" "}
          {highlight && (
            <span className="text-[#F47C20]">
              {highlight}
            </span>
          )}
        </h2>
      )}

      {description && (
        <p
          className={cx(
            "mt-4 text-base sm:text-lg leading-relaxed",
            light ? "text-white/80" : "text-[#3D3D3D]/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

