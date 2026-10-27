import { Mail, MapPin, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { CONTACT_DETAILS } from "../../constants/site";
import { CORE_SERVICES } from "../services/data";

/** Id the message field scrolls to / focuses when a service chip is picked. */
export const CONTACT_FORM_SECTION_ID = "contact-form";

/* ------------------------------------------------------------------ */
/* Brand panel (left column)                                           */
/* ------------------------------------------------------------------ */

export const CONTACT_INTRO = {
  eyebrow: "Contact Us",
  headingPrefix: "Have an idea? ",
  headingHighlight: "Let's talk",
  headingSuffix: " about it.",
  description:
    "Smart Matrix Digital Services works with businesses to understand their challenges and create digital solutions that fit how they actually work.",
};

export const CONTACT_INFO_LABEL = "Get in Touch";

/** One line in the contact-information list. */
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

export const WHAT_CAN_WE_HELP_LABEL = "What can we help you build?";

/** Reuses the real Services catalogue — do not invent new service names. */
export const CONTACT_SERVICE_OPTIONS = CORE_SERVICES.map((service) => ({
  title: service.title,
  slug: service.slug,
}));

/* ------------------------------------------------------------------ */
/* Form panel (right column)                                           */
/* ------------------------------------------------------------------ */

export const START_CONVERSATION_HEADING = "Tell us what you have in mind.";
export const START_CONVERSATION_SUBTITLE =
  "Share a few details about your project, challenge, or idea. We'll take it from there.";

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
    rows: 4,
  },
];
