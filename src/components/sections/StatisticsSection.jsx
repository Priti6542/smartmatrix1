import React from "react";
import Container from "../common/Container";
import { COMPANY_STATS } from "../../data/company";

export default function StatisticsSection({ className = "" }) {
  return (
    <section className={`border-y border-[#3D3D3D]/10 bg-white py-12 sm:py-16 ${className}`}>
      <Container>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {COMPANY_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <div className="text-3xl font-black tracking-tight text-[#F47C20] sm:text-4xl lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-bold text-[#262626] sm:text-base">
                {stat.label}
              </div>
              <div className="mt-1 text-xs text-[#3D3D3D]/65">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

