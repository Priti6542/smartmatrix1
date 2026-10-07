import type { RefObject } from "react";
import { useEffect, useRef } from "react";

/**
 * Scrolls an element's background image at a fraction of the page speed.
 *
 * Returns a ref to attach to the element that carries the background. The
 * previous implementation attached one document-wide scroll listener per call
 * and moved every `[data-speed]` element on the page; this one moves only the
 * element it is given and coalesces updates into an animation frame.
 */
export const useParallax = <T extends HTMLElement = HTMLDivElement>(
  speed: number,
): RefObject<T | null> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let frame = 0;

    const apply = () => {
      frame = 0;
      element.style.backgroundPosition = `center ${window.scrollY * speed}px`;
    };

    const handleScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(apply);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    apply();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [speed]);

  return ref;
};
