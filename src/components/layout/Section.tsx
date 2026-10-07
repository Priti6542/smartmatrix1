import type { ReactNode } from "react";

import { cx } from "../../utils/helpers";

import { CONTAINER_CLASS } from "./Container";

/**
 * Standard vertical rhythm for a page section: 56px mobile, 72px tablet,
 * 96px desktop — the same breakpoints as `CONTAINER_CLASS`'s horizontal
 * gutters, so a section's padding is consistent on every side.
 */
export const SECTION_SPACING_CLASS = "py-14 sm:py-18 lg:py-24";

export interface SectionProps {
  children: ReactNode;
  /**
   * Classes for the full-bleed outer element — backgrounds, overflow, and
   * anything that should span the viewport rather than the container.
   */
  className?: string;
  /** Classes for the inner container. */
  containerClassName?: string;
  /**
   * `none` leaves vertical spacing to the section itself, for full-height
   * heroes and anything that sets its own height.
   */
  spacing?: "default" | "none";
  /** Skip the inner container when the content is deliberately full-bleed. */
  bleed?: boolean;
  id?: string;
}

/**
 * A page section: full-bleed background, content inside the global container,
 * standard vertical rhythm. Use this instead of hand-rolling padding.
 */
const Section = ({
  children,
  className,
  containerClassName,
  spacing = "default",
  bleed = false,
  id,
}: SectionProps) => (
  <section
    id={id}
    className={cx(
      "relative w-full",
      spacing === "default" && SECTION_SPACING_CLASS,
      className,
    )}
  >
    {bleed ? (
      children
    ) : (
      <div className={cx(CONTAINER_CLASS, containerClassName)}>{children}</div>
    )}
  </section>
);

export default Section;
