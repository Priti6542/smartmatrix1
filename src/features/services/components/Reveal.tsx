import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

interface RevealProps {
  children: ReactNode;
  /** Stagger offset in seconds, for sequencing several `Reveal`s in a row. */
  delay?: number;
  className?: string;
}

/**
 * Services-page-local scroll reveal: fades content upward the first time it
 * enters the viewport. Falls back to fully visible, no motion, when the
 * visitor prefers reduced motion — content is never hidden permanently.
 */
const Reveal = ({ children, delay = 0, className }: RevealProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({
    threshold: 0.2,
  });
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isVisible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
