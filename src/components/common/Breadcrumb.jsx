import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export default function Breadcrumb({ items = [], className = "" }) {
  return (
    <nav aria-label="Breadcrumb" className={`flex items-center text-xs sm:text-sm text-[#3D3D3D]/60 ${className}`}>
      <ol className="flex flex-wrap items-center gap-2">
        <li className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-1.5 transition-colors duration-200 hover:text-[#F47C20]"
          >
            <Home size={14} className="text-[#3D3D3D]/60" />
            <span>Home</span>
          </Link>
        </li>

        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              <ChevronRight size={12} className="text-[#3D3D3D]/30" />
              {isLast || !item.path ? (
                <span className="font-semibold text-[#262626]" aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="transition-colors duration-200 hover:text-[#F47C20]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

