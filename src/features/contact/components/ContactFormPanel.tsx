import type { FormEvent, RefObject } from "react";

import type { ContactFormStatus } from "../../../types/contact";
import {
  CONTACT_FORM_FIELDS,
  CONTACT_FORM_SECTION_ID,
  START_CONVERSATION_HEADING,
  START_CONVERSATION_SUBTITLE,
} from "../data";

const INPUT_CLASS =
  "w-full rounded-xl border border-[#3D3D3D]/15 bg-white px-4 py-3 text-sm text-[#262626] placeholder:text-[#3D3D3D]/35 transition-colors duration-200 focus:border-[#F47C20] focus:outline-none focus:ring-2 focus:ring-[#F47C20]/15";

interface ContactFormPanelProps {
  formRef: RefObject<HTMLFormElement | null>;
  status: ContactFormStatus;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

/**
 * Right column of the split screen: the form, and only the form — this is
 * the page's single primary action, always on-screen next to the brand
 * panel rather than further down a scrolling stack.
 */
const ContactFormPanel = ({ formRef, status, onSubmit }: ContactFormPanelProps) => {
  const isSending = status === "sending";

  return (
    <div className="flex flex-col justify-center bg-[#FFFCF7] px-6 pt-10 pb-14 text-[#262626] sm:px-10 lg:px-14 lg:pt-28 lg:pb-16">
      <div className="mx-auto w-full max-w-md">
        <h2 className="text-xl font-extrabold tracking-[-0.01em] sm:text-2xl">
          {START_CONVERSATION_HEADING}
        </h2>
        <p className="mt-2 text-sm leading-6 text-[#3D3D3D]/65">
          {START_CONVERSATION_SUBTITLE}
        </p>

        <form
          id={CONTACT_FORM_SECTION_ID}
          ref={formRef}
          onSubmit={onSubmit}
          className="mt-7 space-y-4"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {CONTACT_FORM_FIELDS.filter((field) => !field.multiline).map((field) => (
              <div
                key={field.name}
                className={field.name === "phone" ? "sm:col-span-2" : undefined}
              >
                <label
                  htmlFor={field.name}
                  className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-[#3D3D3D]/55"
                >
                  {field.label}
                  {field.required && <span className="ml-1 text-[#F47C20]">*</span>}
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
                className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-[#3D3D3D]/55"
              >
                {field.label}
                {field.required && <span className="ml-1 text-[#F47C20]">*</span>}
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
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#F47C20] px-8 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8690f] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
          >
            {isSending ? "Sending…" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactFormPanel;
