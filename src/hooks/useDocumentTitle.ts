import { useEffect } from "react";

/** Sets the browser tab title for the page that calls it, restoring the
 * previous title on unmount (so a lazy-loaded page swap never leaves a
 * stale title behind). Pass the full title, including any site-name suffix. */
export const useDocumentTitle = (title: string): void => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};
