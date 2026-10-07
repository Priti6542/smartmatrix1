import type { MuiIconComponent } from "./common";

/** An industry vertical the company serves. */
export interface Industry {
  id: string;
  title: string;
  description: string;
  image: string;
  /** Route to the industry's own page, or `null` while one does not exist. */
  path: string | null;
}

/** A healthcare offering, rendered as a circle with a checklist beside it. */
export interface HealthcareService {
  id: string;
  title: string;
  icon: MuiIconComponent;
  /** Bullet points listed under the service title. */
  highlights: string[];
}
