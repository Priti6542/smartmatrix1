/**
 * Typed access to the Vite environment.
 *
 * Variables are read lazily, when a feature first needs one, so a missing key
 * breaks only that feature instead of blanking the whole site at start-up.
 */

declare global {
  interface ImportMetaEnv {
    readonly VITE_EMAILJS_SERVICE_ID?: string;
    readonly VITE_EMAILJS_TEMPLATE_ID?: string;
    readonly VITE_EMAILJS_PUBLIC_KEY?: string;
  }
}

type AppEnvKey =
  | "VITE_EMAILJS_SERVICE_ID"
  | "VITE_EMAILJS_TEMPLATE_ID"
  | "VITE_EMAILJS_PUBLIC_KEY";

function readRequired(key: AppEnvKey): string {
  const value = import.meta.env[key];

  if (typeof value !== "string" || value.length === 0) {
    throw new Error(
      `Missing environment variable "${key}". Copy .env.example to .env and fill it in.`,
    );
  }

  return value;
}

/** Credentials for the EmailJS template behind the contact form. */
export interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export function getEmailJsConfig(): EmailJsConfig {
  return {
    serviceId: readRequired("VITE_EMAILJS_SERVICE_ID"),
    templateId: readRequired("VITE_EMAILJS_TEMPLATE_ID"),
    publicKey: readRequired("VITE_EMAILJS_PUBLIC_KEY"),
  };
}
