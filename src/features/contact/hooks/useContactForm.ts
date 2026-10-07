import emailjs from "@emailjs/browser";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { getEmailJsConfig } from "../../../config/env";
import type { ContactFormStatus } from "../../../types/contact";
import { CONTACT_FORM_SECTION_ID } from "../data";

/**
 * Owns the contact form's submission state so it can be shared between the
 * form itself and other sections on the page (the hero and final CTA
 * scroll to the form; the service pills prefill its message field).
 *
 * The EmailJS call shape and field `name`s this depends on are unchanged
 * from the pre-redesign implementation — see `getEmailJsConfig` and the
 * `name="first_name"`/etc. attributes rendered by `StartAConversation`.
 */
export const useContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = formRef.current;
    if (!form || status === "sending") return;

    let config;
    try {
      config = getEmailJsConfig();
    } catch (error) {
      console.error(error);
      setStatus("error");
      alert("Failed to send message.");
      return;
    }

    setStatus("sending");

    emailjs
      .sendForm(config.serviceId, config.templateId, form, {
        publicKey: config.publicKey,
      })
      .then(
        () => {
          setStatus("sent");
          alert("Message sent to your email!");
          form.reset();
        },
        () => {
          setStatus("error");
          alert("Failed to send message.");
        },
      );
  };

  const scrollToForm = () => {
    document
      .getElementById(CONTACT_FORM_SECTION_ID)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /** Scrolls to the form and pre-fills (but doesn't lock) the message field. */
  const prefillMessage = (text: string) => {
    const form = formRef.current;
    const textarea = form?.elements.namedItem("message");
    if (textarea instanceof HTMLTextAreaElement) {
      textarea.value = text;
      textarea.focus();
    }
    scrollToForm();
  };

  return { formRef, status, sendEmail, scrollToForm, prefillMessage };
};
