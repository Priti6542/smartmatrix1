import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";

export interface UseScrollAnimationOptions {
  /** Fraction of the element that must be visible before it reveals. */
  threshold?: number;
  /** Keep the element revealed once it has been seen. Defaults to `true`. */
  once?: boolean;
}

export interface UseScrollAnimationResult<T extends HTMLElement> {
  /** Attach to the element that should reveal on scroll. */
  ref: RefObject<T | null>;
  isVisible: boolean;
}

/**
 * Reveals an element the first time it scrolls into view.
 *
 * Replaces the previous global `scrollAnimation()` helper, which queried the
 * document on every scroll event and toggled an un-scoped `show` class.
 */
export const useScrollAnimation = <T extends HTMLElement = HTMLDivElement>(
  options: UseScrollAnimationOptions = {},
): UseScrollAnimationResult<T> => {
  const { threshold = 0.2, once = true } = options;

  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Without IntersectionObserver the element simply starts revealed.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setIsVisible(false);
          }
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  return { ref, isVisible };
};
