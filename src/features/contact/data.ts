import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { CONTACT_DETAILS } from "../../constants/site";
import { CORE_SERVICES } from "../services/data";

/* ------------------------------------------------------------------ */
/* Shared anchors                                                      */
/* ------------------------------------------------------------------ */

/** Id the "Start a Conversation" form section scrolls to from elsewhere
 * on this page (hero CTA, final CTA, service pills). */
export const CONTACT_FORM_SECTION_ID = "contact-form";

/* ------------------------------------------------------------------ */
/* Section 01 — Hero                                                   */
/* ------------------------------------------------------------------ */

export const CONTACT_HERO = {
  eyebrow: "Contact Us",
  headingPrefix: "Have an idea? ",
  headingHighlight: "Let's talk",
  headingSuffix: " about it.",
  description:
    "Smart Matrix Digital Services works with businesses to understand their challenges and create digital solutions that fit how they actually work.",
  primaryCtaLabel: "Start the Conversation",
};

/** The dark conversation panel's prompt and its floating progression labels. */
export const CONTACT_HERO_PANEL_PROMPT = "Tell us what you're working on.";
export const CONTACT_HERO_PANEL_STAGES: readonly string[] = [
  "Idea",
  "Challenge",
  "Solution",
  "Growth",
];

/* ------------------------------------------------------------------ */
/* Section 02 — Start a Conversation (the form)                        */
/* ------------------------------------------------------------------ */

export const START_CONVERSATION_HEADING = "Tell us what you have in mind.";
export const START_CONVERSATION_SUBTITLE =
  "Share a few details about your project, challenge, or idea. We'll take it from there.";

export const START_CONVERSATION_EDITORIAL_HEADING = "Let's start with your idea.";
export const START_CONVERSATION_EDITORIAL_NOTE =
  "Tell us as much or as little as you'd like.";

/** Fields rendered by the contact form, in order. Field `name`s are wired
 * to an EmailJS template — do not rename without updating that template. */
export interface ContactFieldConfig {
  name: "first_name" | "last_name" | "email" | "phone" | "message";
  label: string;
  type?: "email";
  required: boolean;
  multiline?: boolean;
  rows?: number;
}

export const CONTACT_FORM_FIELDS: ContactFieldConfig[] = [
  { name: "first_name", label: "First Name", required: true },
  { name: "last_name", label: "Last Name", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone Number", required: false },
  {
    name: "message",
    label: "Your Message",
    required: true,
    multiline: true,
    rows: 5,
  },
];

/* ------------------------------------------------------------------ */
/* Section 03 — Contact Information                                     */
/* ------------------------------------------------------------------ */

export const CONTACT_INFO_HEADING = "Prefer to reach us directly?";
export const CONTACT_INFO_LABEL = "Get in Touch";

/** One line in the contact-information panel. */
export interface ContactChannel {
  id: string;
  label: string;
  value: string;
  icon: LucideIcon;
  /** `mailto:`, `tel:`, or a maps search link — omitted for plain text. */
  href?: string;
}

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "email",
    label: "Email",
    value: CONTACT_DETAILS.email,
    icon: Mail,
    href: `mailto:${CONTACT_DETAILS.email}`,
  },
  {
    id: "phone",
    label: "Phone",
    value: CONTACT_DETAILS.phone,
    icon: Phone,
    href: `tel:${CONTACT_DETAILS.phone.replace(/[^+\d]/g, "")}`,
  },
  {
    id: "address",
    label: "Visit",
    value: CONTACT_DETAILS.address,
    icon: MapPin,
  },
];

/* ------------------------------------------------------------------ */
/* Section 04 — What can we help you build?                             */
/* ------------------------------------------------------------------ */

export const WHAT_CAN_WE_HELP_HEADING = "What can we help you build?";
export const WHAT_CAN_WE_HELP_SUBTITLE = "What are you looking to solve?";

/** Reuses the real Services catalogue — do not invent new service names. */
export const CONTACT_SERVICE_OPTIONS = CORE_SERVICES.map((service) => ({
  title: service.title,
  slug: service.slug,
}));

/* ------------------------------------------------------------------ */
/* Section 05 — Simple Contact Process                                  */
/* ------------------------------------------------------------------ */

export const CONTACT_PROCESS_HEADING = "What happens next?";

export interface ContactProcessStep {
  index: string;
  title: string;
  description: string;
}

export const CONTACT_PROCESS_STEPS: ContactProcessStep[] = [
  {
    index: "01",
    title: "Share",
    description: "Tell us about your idea or business challenge.",
  },
  {
    index: "02",
    title: "Discuss",
    description: "We understand your requirements and goals.",
  },
  {
    index: "03",
    title: "Plan",
    description: "We identify the right direction and solution.",
  },
  {
    index: "04",
    title: "Build",
    description: "We move forward with the appropriate approach.",
  },
];

/* ------------------------------------------------------------------ */
/* Section 06 — Final CTA                                               */
/* ------------------------------------------------------------------ */

export const CONTACT_FINAL_CTA = {
  heading: "Ready to start a conversation?",
  description: "Tell us what you're working on.",
  primaryLabel: "Let's Talk",
};
