import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useScrollToTop } from "../../hooks/useScrollToTop";

export default function MainLayout({ children }) {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col bg-white text-[#262626] antialiased selection:bg-[#F47C20]/15 selection:text-[#F47C20]">
      <Navbar />
      <main className="flex-1 pt-18 sm:pt-20">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

