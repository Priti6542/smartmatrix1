import React from "react";
import HeroSection from "../components/sections/HeroSection";
import StatisticsSection from "../components/sections/StatisticsSection";
import ServicesSection from "../components/sections/ServicesSection";
import AboutSection from "../components/sections/AboutSection";
import IndustriesSection from "../components/sections/IndustriesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CtaSection from "../components/sections/CtaSection";
import { useDocumentTitle } from "../hooks/useDocumentTitle";

export default function Home() {
  useDocumentTitle("Intelligent Digital Engineering");

  return (
    <div>
      <HeroSection />
      <StatisticsSection />
      <ServicesSection limit={6} />
      <AboutSection showCta={true} />
      <IndustriesSection />
      <TestimonialsSection />
      <CtaSection />
    </div>
  );
}

