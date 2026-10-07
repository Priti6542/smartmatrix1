import type { ReactNode } from "react";

import { cx } from "../../utils/helpers";

export interface SectionHeadingProps {
  title: ReactNode;
  /** Supporting line under the title, held to a readable measure. */
  subtitle?: ReactNode;
  /** Horizontal alignment of the block. Defaults to centred. */
  align?: "center" | "left";
  /** Render the title as an `h1` on pages where it is the page heading. */
  as?: "h1" | "h2";
  /** Classes for the wrapper. Never spacing — that comes from the tokens. */
  className?: string;
  /** Colour/type classes for the title. Never spacing. */
  titleClassName?: string;
  /** Colour/type classes for the subtitle. Never spacing. */
  subtitleClassName?: string;
  /** Underline accent beneath the title. Defaults to on. */
  accent?: boolean;
}

/**
 * Heading block for a page section, carrying the site's standard gaps:
 * 16px between title and subtitle, 32px/48px below the block.
 */
const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  as: Tag = "h2",
  className,
  titleClassName,
  subtitleClassName,
  accent = true,
}: SectionHeadingProps) => (
  <header
    className={cx(
      "mb-heading lg:mb-heading-lg",
      align === "center" ? "text-center" : "text-left",
      className,
    )}
  >
    <Tag
      className={cx(
        "text-[clamp(1.9rem,4vw,2.6rem)] font-extrabold leading-[1.15]",
        accent &&
          "after:mt-3 after:block after:h-1 after:w-[60px] after:rounded-sm after:bg-[linear-gradient(90deg,#ff6b35,#ffd93d)] after:content-['']",
        accent && align === "center" && "after:mx-auto",
        titleClassName,
      )}
    >
      {title}
    </Tag>
    {subtitle && (
      <p
        className={cx(
          "mt-copy-gap max-w-copy text-base leading-[1.75]",
          align === "center" && "mx-auto",
          subtitleClassName,
        )}
      >
        {subtitle}
      </p>
    )}
  </header>
);

export default SectionHeading;
