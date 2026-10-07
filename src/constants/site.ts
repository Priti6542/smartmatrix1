import type { ContactDetails } from "../types/contact";

export const SITE = {
  name: "Smart Software Services Pvt. Ltd.",
  shortName: "Smart Software Services",
  tagline: "Transforming ideas into intelligent digital solutions.",
} as const;

export const CONTACT_DETAILS: ContactDetails = {
  address:
    "Office No. 102-B, First Floor, Ganesham Commercial -A, Survey No. 21/18-21/24, BRTS Road, Pimple Saudagar, Pune- 411027",
  email: "hr@smartmatrixds.com",
  phone: "+91 9112108484",
};

/**
 * Brand colours, extracted directly from the Smart Matrix logo (the
 * sunburst mark): orange rays and wordmark, a gold centre to the sun, and a
 * charcoal "SMDS" lettermark. There is no blue in the logo — don't add one.
 */
export const BRAND = {
  /** Primary — sun rays, "SMARTMATRIX" wordmark. Buttons, links, accents. */
  orange: "#F7941E",
  /** Darker orange — hover states, gradient ends. */
  orangeDeep: "#E8750A",
  /** Centre of the sun gradient. Secondary accent, sparingly. */
  gold: "#FDB913",
  /** The "SMDS" lettermark's neutral. Dark text, dark sections. */
  charcoal: "#3D3D3D",
  /** Deepest neutral, for high-contrast dark surfaces. */
  charcoalDeep: "#262626",
  white: "#FFFFFF",
} as const;
