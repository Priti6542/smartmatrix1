import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import type { NavigationItem, SocialLink } from "../types/navigation";

import { ROUTES } from "./routes";

/** Primary navigation — drives both the desktop bar and the mobile drawer. */
export const NAVIGATION: NavigationItem[] = [
  { label: "Home", path: ROUTES.HOME },
  { label: "About", path: ROUTES.ABOUT },
  { label: "Services", path: ROUTES.SERVICES },
  { label: "Industries", path: ROUTES.INDUSTRIES },
  { label: "Careers", path: ROUTES.CAREERS },
  { label: "Contact", path: ROUTES.CONTACT },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "Facebook", url: "https://facebook.com", icon: FaFacebookF },
  { label: "Twitter", url: "https://twitter.com", icon: FaTwitter },
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/smartmatrix-digital-services-pvt-ltd/",
    icon: FaLinkedinIn,
  },
  { label: "Instagram", url: "https://instagram.com", icon: FaInstagram },
];
