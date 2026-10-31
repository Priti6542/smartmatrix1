import { Link } from "react-router-dom";

import PageHero from "../components/sections/PageHero";
import { ROUTES } from "../constants/routes";
import { SITE } from "../constants/site";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

const NotFound = () => {
  useDocumentTitle(`Page Not Found | ${SITE.shortName}`);

  return (
    <PageHero
      title="404 — Page not found"
      description="The page you were looking for has moved or never existed. Let's get you back on track."
    >
      <Link
        to={ROUTES.HOME}
        className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#F47C20] px-8 text-sm font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f]"
      >
        Back to home
      </Link>
    </PageHero>
  );
};

export default NotFound;
