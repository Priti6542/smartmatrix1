import type { ReactNode } from "react";

import { CONTAINER_CLASS } from "../layout/Container";

export interface PageHeroProps {
  title: string;
  description: string;
  /** Falls back to the brand gradient when no image is given. */
  backgroundImage?: string;
  /** Call to action rendered under the copy. */
  children?: ReactNode;
}

/**
 * Full-bleed page hero. Height and vertical padding are hero-specific (a
 * hero is taller than a standard section), but the horizontal gutter and
 * copy width come from the global container system like everywhere else.
 */
const PageHero = ({
  title,
  description,
  backgroundImage,
  children,
}: PageHeroProps) => {
  return (
    <section
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden
                 bg-[linear-gradient(135deg,#000851_0%,#0a0e27_100%)] bg-cover bg-center bg-no-repeat
                 pt-[120px] pb-section text-center text-white
                 upto-768:min-h-[60vh] upto-768:pt-[110px]"
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="absolute inset-0 bg-[rgba(4,8,40,0.68)]" />
      <div className={CONTAINER_CLASS}>
        <div className="relative mx-auto max-w-copy">
          <h1
            className="mb-copy-gap bg-[linear-gradient(135deg,#1cb5e0,#ffd93d)] bg-clip-text
                       text-[clamp(2.1rem,5vw,3.4rem)] font-extrabold leading-[1.15] text-transparent"
          >
            {title}
          </h1>
          <p className="text-[clamp(1rem,2vw,1.2rem)] leading-[1.75] text-white/85">
            {description}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
