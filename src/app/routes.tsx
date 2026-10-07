import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { LEGACY_ROUTE_REDIRECTS, ROUTES } from "../constants/routes";

const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));
const Services = lazy(() => import("../pages/Services/Services"));
const ServiceDetail = lazy(() => import("../pages/ServiceDetail/ServiceDetail"));
const Industries = lazy(() => import("../pages/Industries/Industries"));
const Healthcare = lazy(() => import("../pages/Healthcare/Healthcare"));
const Careers = lazy(() => import("../pages/Careers/Careers"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.ABOUT} element={<About />} />
      <Route path={ROUTES.SERVICES} element={<Services />} />
      <Route path={ROUTES.SERVICE_DETAIL} element={<ServiceDetail />} />
      <Route path={ROUTES.INDUSTRIES} element={<Industries />} />
      <Route path={ROUTES.HEALTHCARE} element={<Healthcare />} />
      <Route path={ROUTES.CAREERS} element={<Careers />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />

      {LEGACY_ROUTE_REDIRECTS.map(({ from, to }) => (
        <Route key={from} path={from} element={<Navigate to={to} replace />} />
      ))}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
