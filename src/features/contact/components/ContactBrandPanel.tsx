import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import {
  CONTACT_CHANNELS,
  CONTACT_INFO_LABEL,
  CONTACT_INTRO,
  CONTACT_SERVICE_OPTIONS,
  WHAT_CAN_WE_HELP_LABEL,
} from "../data";

interface ContactBrandPanelProps {
  onSelectService: (serviceTitle: string) => void;
}

/**
 * Left column of the split screen: permanently dark/branded, carrying the
 * value proposition, real contact channels, and the service picker —
 * everything other than the form itself.
 */
const ContactBrandPanel = ({ onSelectService }: ContactBrandPanelProps) => {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden bg-[#262626] px-6 pt-24 pb-14 text-white sm:px-10 lg:px-14 lg:pt-28 lg:pb-16">
      <div className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-[#F47C20]/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-24 h-72 w-72 rounded-full bg-[#FDB913]/10 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative mx-auto w-full max-w-md lg:mx-0"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F47C20]">
          {CONTACT_INTRO.eyebrow}
        </span>

        <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[2.5rem]">
          {CONTACT_INTRO.headingPrefix}
          <span className="text-[#F47C20]">
            {CONTACT_INTRO.headingHighlight}
          </span>
          {CONTACT_INTRO.headingSuffix}
        </h1>

        <p className="mt-4 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">
          {CONTACT_INTRO.description}
        </p>

        {/* Contact channels */}
        <div className="mt-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
            {CONTACT_INFO_LABEL}
          </p>
          <div className="mt-3 divide-y divide-white/10 border-t border-white/10">
            {CONTACT_CHANNELS.map((channel) => {
              const Icon = channel.icon;
              const content = (
                <>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#F47C20]">
                    <Icon size={15} />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-sm font-medium text-white/80">
                    {channel.value}
                  </span>
                  {channel.href && (
                    <ArrowUpRight size={14} className="shrink-0 text-white/25" />
                  )}
                </>
              );

              return channel.href ? (
                <a
                  key={channel.id}
                  href={channel.href}
                  className="group flex items-center gap-3 py-3 transition-colors duration-300 hover:text-white"
                >
                  {content}
                </a>
              ) : (
                <div key={channel.id} className="flex items-center gap-3 py-3">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        {/* Service picker */}
        <div className="mt-9">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/35">
            {WHAT_CAN_WE_HELP_LABEL}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {CONTACT_SERVICE_OPTIONS.map((service) => (
              <button
                key={service.slug}
                type="button"
                onClick={() => onSelectService(`I'm interested in ${service.title}. `)}
                className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs font-medium text-white/70 transition-all duration-300 hover:border-[#F47C20]/50 hover:text-white"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactBrandPanel;
