/** Where to reach the company. */
export interface ContactDetails {
  address: string;
  email: string;
  phone: string;
}

/**
 * Fields of the contact form. The keys are the `name` attributes EmailJS reads
 * off the form element, so they must match the EmailJS template variables.
 */
export interface ContactFormFields {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  message: string;
}

/** Lifecycle of a contact form submission. */
export type ContactFormStatus = "idle" | "sending" | "sent" | "error";
