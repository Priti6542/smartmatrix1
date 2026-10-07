import type { FormEvent, RefObject } from "react";

import Section from "../../../components/layout/Section";
import type { ContactFormStatus } from "../../../types/contact";
import {
  CONTACT_FORM_FIELDS,
  CONTACT_FORM_SECTION_ID,
  START_CONVERSATION_EDITORIAL_HEADING,
  START_CONVERSATION_EDITORIAL_NOTE,
  START_CONVERSATION_HEADING,
  START_CONVERSATION_SUBTITLE,
} from "../data";

const INPUT_CLASS =
  "w-full rounded-xl border border-[#3D3D3D]/15 bg-white px-4 py-3.5 text-sm text-[#262626] placeholder:text-[#3D3D3D]/35 transition-colors duration-200 focus:border-[#F47C20] focus:outline-none focus:ring-2 focus:ring-[#F47C20]/15";

interface StartAConversationProps {
  formRef: RefObject<HTMLFormElement | null>;
  status: ContactFormStatus;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const StartAConversation = ({ formRef, status, onSubmit }: StartAConversationProps) => {
  const isSending = status === "sending";

  return (
    <Section id={CONTACT_FORM_SECTION_ID} className="bg-white text-[#262626]">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h2 className="text-[1.75rem] font-extrabold leading-[1.15] tracking-[-0.01em] text-[#262626] sm:text-[2.25rem]">
            {START_CONVERSATION_EDITORIAL_HEADING}
          </h2>
          <p className="mt-5 max-w-sm text-base leading-7 text-[#3D3D3D]/65">
            {START_CONVERSATION_SUBTITLE}
          </p>
          <p className="mt-6 text-sm font-medium text-[#3D3D3D]/45">
            {START_CONVERSATION_EDITORIAL_NOTE}
          </p>
        </div>

        <div>
          <header className="mb-8">
            <h3 className="text-xl font-bold text-[#262626]">
              {START_CONVERSATION_HEADING}
            </h3>
          </header>

          <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {CONTACT_FORM_FIELDS.filter((field) => !field.multiline).map((field) => (
                <div
                  key={field.name}
                  className={field.name === "phone" ? "sm:col-span-2" : undefined}
                >
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-[#3D3D3D]/55"
                  >
                    {field.label}
                    {field.required && (
                      <span className="ml-1 text-[#F47C20]">*</span>
                    )}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type ?? "text"}
                    required={field.required}
                    aria-required={field.required}
                    className={INPUT_CLASS}
                  />
                </div>
              ))}
            </div>

            {CONTACT_FORM_FIELDS.filter((field) => field.multiline).map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.1em] text-[#3D3D3D]/55"
                >
                  {field.label}
                  {field.required && (
                    <span className="ml-1 text-[#F47C20]">*</span>
                  )}
                </label>
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={field.rows}
                  required={field.required}
                  aria-required={field.required}
                  className={`${INPUT_CLASS} resize-none`}
                />
              </div>
            ))}

            <button
              type="submit"
              disabled={isSending}
              className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#F47C20] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
            >
              {isSending ? "Sending…" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default StartAConversation;
