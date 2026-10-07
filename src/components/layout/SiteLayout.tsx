import { Suspense } from "react";

import AppRoutes from "../../app/routes";
import PageLoader from "../common/PageLoader";
import ScrollToTop from "../common/ScrollToTop";

import Footer from "./Footer";
import Navbar from "./Navbar";

/** Chrome that surrounds every page: fixed navbar, routed body, footer. */
const SiteLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Suspense fallback={<PageLoader />}>
        <AppRoutes />
      </Suspense>

      <Footer />
    </>
  );
};

export default SiteLayout;
