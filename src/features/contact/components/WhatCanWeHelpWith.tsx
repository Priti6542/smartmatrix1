import { ArrowRight } from "lucide-react";

import Section from "../../../components/layout/Section";
import {
  CONTACT_SERVICE_OPTIONS,
  WHAT_CAN_WE_HELP_HEADING,
  WHAT_CAN_WE_HELP_SUBTITLE,
} from "../data";

interface WhatCanWeHelpWithProps {
  onSelectService: (serviceTitle: string) => void;
}

/**
 * Interactive service pills — not a card grid — that prefill the form's
 * message field and scroll to it, keeping this section conceptually in
 * sync with the form without adding a new, untracked form field.
 */
const WhatCanWeHelpWith = ({ onSelectService }: WhatCanWeHelpWithProps) => {
  return (
    <Section className="bg-[#FFFCF7] text-[#262626]">
      <div className="text-center">
        <h2 className="text-[1.75rem] font-extrabold leading-tight tracking-[-0.01em] sm:text-[2.25rem] lg:text-[2.5rem]">
          {WHAT_CAN_WE_HELP_HEADING}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-[#3D3D3D]/65">
          {WHAT_CAN_WE_HELP_SUBTITLE}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {CONTACT_SERVICE_OPTIONS.map((service) => (
          <button
            key={service.slug}
            type="button"
            onClick={() =>
              onSelectService(
                `I'm interested in ${service.title}. `,
              )
            }
            className="group inline-flex items-center gap-2 rounded-full border border-[#3D3D3D]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#3D3D3D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F47C20] hover:bg-[#FFF8F0] hover:text-[#262626]"
          >
            {service.title}
            <ArrowRight
              size={14}
              className="hidden text-[#F47C20] transition-transform duration-300 group-hover:translate-x-0.5 sm:group-hover:inline"
            />
          </button>
        ))}
      </div>
    </Section>
  );
};

export default WhatCanWeHelpWith;
