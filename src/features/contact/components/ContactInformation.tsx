import { ArrowRight } from "lucide-react";

import Section from "../../../components/layout/Section";
import { CONTACT_CHANNELS, CONTACT_INFO_HEADING, CONTACT_INFO_LABEL } from "../data";

const ContactInformation = () => {
  return (
    <Section className="bg-[#262626] text-white">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F47C20]">
            {CONTACT_INFO_LABEL}
          </span>
          <h2 className="mt-5 max-w-sm text-2xl font-extrabold leading-snug tracking-[-0.01em] sm:text-3xl">
            {CONTACT_INFO_HEADING}
          </h2>
        </div>

        <div className="divide-y divide-white/10 border-t border-white/10">
          {CONTACT_CHANNELS.map((channel) => {
            const Icon = channel.icon;
            const content = (
              <>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-[#F47C20] transition-colors duration-300 group-hover:bg-[#F47C20]/10">
                  <Icon size={18} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-white/40">
                    {channel.label}
                  </p>
                  <p className="mt-1 truncate text-base font-medium text-white sm:text-lg">
                    {channel.value}
                  </p>
                </div>
                {channel.href && (
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#F47C20]"
                  />
                )}
              </>
            );

            return channel.href ? (
              <a
                key={channel.id}
                href={channel.href}
                className="group flex items-center gap-4 py-6 transition-colors duration-300 first:pt-0 last:pb-0"
              >
                {content}
              </a>
            ) : (
              <div
                key={channel.id}
                className="group flex items-center gap-4 py-6 first:pt-0 last:pb-0"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default ContactInformation;
