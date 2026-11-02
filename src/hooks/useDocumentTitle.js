import { useEffect } from "react";
import { COMPANY_INFO } from "../data/company";

export function useDocumentTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) {
      document.title = `${title} | ${COMPANY_INFO.brandName}`;
    } else {
      document.title = `${COMPANY_INFO.name} — ${COMPANY_INFO.tagline}`;
    }

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
}

