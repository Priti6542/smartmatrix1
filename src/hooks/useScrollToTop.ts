import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Returns the window to the top whenever the route changes. */
export const useScrollToTop = (): void => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};
