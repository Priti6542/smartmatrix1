import React from "react";
import { cx } from "../../utils/helpers";

const SIZES = {
  sm: "max-w-4xl",
  default: "max-w-7xl",
  wide: "max-w-[1400px]",
  full: "max-w-full",
};

export default function Container({
  children,
  className = "",
  size = "default",
  as: Component = "div",
  ...props
}) {
  return (
    <Component
      className={cx(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        SIZES[size] || SIZES.default,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

