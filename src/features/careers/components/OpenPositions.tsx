import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Section from "../../../components/layout/Section";
import { ROUTES } from "../../../constants/routes";
import type { InternshipRole } from "../../../types/career";
import { cx } from "../../../utils/helpers";
import {
  CAREERS_SECTION_IDS,
  INTERNSHIP_ROLES,
  NO_MATCH_DESCRIPTION,
  NO_MATCH_HEADING,
  OPEN_POSITIONS_HEADING,
  OPEN_POSITIONS_SUBTITLE,
  RESUME_EMAIL,
} from "../data";

interface PositionRowProps {
  role: InternshipRole;
  isOpen: boolean;
  onToggle: () => void;
  onApply: () => void;
}

const PositionRow = ({ role, isOpen, onToggle, onApply }: PositionRowProps) => (
  <div className="border-b border-[#3D3D3D]/10 first:border-t first:border-[#3D3D3D]/10">
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="flex w-full items-center gap-4 py-6 text-left transition-colors duration-300 hover:bg-[#FFFCF7]"
    >
      <span className="flex-1 text-base font-bold text-[#262626] sm:text-lg">
        {role.title}
      </span>
      <span className="rounded-full border border-[#F47C20]/20 bg-[#FFF8F0] px-3 py-1 text-xs font-semibold text-[#F47C20]">
        Internship
      </span>
      <ChevronDown
        size={18}
        className={cx(
          "shrink-0 text-[#3D3D3D]/40 transition-transform duration-300",
          isOpen && "rotate-180 text-[#F47C20]",
        )}
      />
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="grid gap-5 pb-7 sm:grid-cols-2">
            <div>
              <p className="text-sm leading-6 text-[#3D3D3D]/70">
                {role.description}
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D3D3D]/45">
                  What We&rsquo;re Looking For
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#3D3D3D]/70">
                  {role.qualifications}
                </p>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D3D3D]/45">
                  What You&rsquo;ll Gain
                </h4>
                <p className="mt-2 text-sm leading-6 text-[#3D3D3D]/70">
                  {role.benefits}
                </p>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onApply}
            className="mb-7 inline-flex h-11 items-center justify-center rounded-full bg-[#F47C20] px-6 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f]"
          >
            Apply Now
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const OpenPositions = () => {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section
      id={CAREERS_SECTION_IDS.openPositions}
      className="bg-white text-[#262626]"
    >
      <header className="mb-heading max-w-2xl lg:mb-heading-lg">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {OPEN_POSITIONS_HEADING}
        </h2>
        <p className="mt-4 max-w-copy text-base leading-7 text-[#3D3D3D]/70 sm:text-lg">
          {OPEN_POSITIONS_SUBTITLE}
        </p>
      </header>

      <div>
        {INTERNSHIP_ROLES.map((role) => (
          <PositionRow
            key={role.id}
            role={role}
            isOpen={openId === role.id}
            onToggle={() => setOpenId(openId === role.id ? null : role.id)}
            onApply={() => { void navigate(ROUTES.CONTACT); }}
          />
        ))}
      </div>

      <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl border border-[#3D3D3D]/10 bg-[#FFFCF7] p-7 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-base font-bold text-[#262626]">{NO_MATCH_HEADING}</h3>
          <p className="mt-1.5 text-sm leading-6 text-[#3D3D3D]/65">
            {NO_MATCH_DESCRIPTION}
          </p>
        </div>
        <a
          href={`mailto:${RESUME_EMAIL}`}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full border border-[#3D3D3D]/20 px-6 text-sm font-semibold text-[#3D3D3D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#3D3D3D]/40 hover:bg-white"
        >
          Send Your Resume
        </a>
      </div>
    </Section>
  );
};

export default OpenPositions;
