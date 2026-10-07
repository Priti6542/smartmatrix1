import type { InfoItem } from "./common";

/** A reason to work here, shown on the careers page. */
export type CareerHighlight = InfoItem;

/** One step of the "how to join us" sequence. */
export type ApplicationStep = InfoItem;

/** An open internship or graduate role. */
export interface InternshipRole {
  id: string;
  title: string;
  description: string;
  /** Prose list of requirements, rendered as a single paragraph. */
  qualifications: string;
  /** Prose list of what the role offers, rendered as a single paragraph. */
  benefits: string;
}
