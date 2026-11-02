import React from "react";
import { Link } from "react-router-dom";
import { cx } from "../../utils/helpers";

const VARIANTS = {
  primary:
    "bg-[#F47C20] text-white hover:bg-[#d8690f] shadow-sm hover:shadow-md hover:shadow-[#F47C20]/20 border border-transparent",
  secondary:
    "bg-[#FFFCF7] text-[#3D3D3D] hover:bg-[#FFF8F0] hover:text-[#F47C20] border border-[#3D3D3D]/10 hover:border-[#F47C20]/30 shadow-xs",
  outline:
    "bg-transparent text-[#3D3D3D] border border-[#3D3D3D]/20 hover:border-[#F47C20] hover:text-[#F47C20] hover:bg-[#FFF8F0]/50",
  outlineWhite:
    "bg-transparent text-white border border-white/30 hover:border-white hover:bg-white/10",
  dark:
    "bg-[#262626] text-white hover:bg-[#3D3D3D] border border-transparent shadow-xs",
  ghost:
    "bg-transparent text-[#3D3D3D] hover:text-[#F47C20] hover:bg-[#FFF8F0] border-transparent",
};

const SIZES = {
  sm: "h-9 px-4 text-xs font-semibold rounded-lg gap-1.5",
  md: "h-11 px-5 text-sm font-semibold rounded-xl gap-2",
  lg: "h-13 px-7 text-base font-semibold rounded-xl gap-2.5",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  icon: Icon,
  iconPosition = "right",
  className = "",
  disabled = false,
  onClick,
  type = "button",
  ...props
}) {
  const baseClasses = cx(
    "inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    VARIANTS[variant] || VARIANTS.primary,
    SIZES[size] || SIZES.md,
    className
  );

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={size === "sm" ? 14 : size === "lg" ? 20 : 16} />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon size={size === "sm" ? 14 : size === "lg" ? 20 : 16} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        onClick={onClick}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}

