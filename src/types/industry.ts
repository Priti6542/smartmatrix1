import type { MuiIconComponent } from "./common";

/** A healthcare offering, rendered as a card with an icon and a checklist. */
export interface HealthcareService {
  id: string;
  title: string;
  icon: MuiIconComponent;
  /** Bullet points listed under the service title. */
  highlights: string[];
}
