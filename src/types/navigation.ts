import type { ReactIconComponent } from "./common";

/** A link in the primary navigation, drawer, or footer. */
export interface NavigationItem {
  label: string;
  path: string;
  children?: NavigationItem[];
}

/** A titled column of links in the footer. */
export interface FooterLinkGroup {
  heading: string;
  links: NavigationItem[];
}

/** An outbound link to one of the company's social profiles. */
export interface SocialLink {
  label: string;
  url: string;
  icon: ReactIconComponent;
}
