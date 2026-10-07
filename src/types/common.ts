import type { SvgIconComponent } from "@mui/icons-material";
import type { IconType } from "react-icons";

/** A Material UI icon component. Accepts MUI's `sx` and `fontSize` props. */
export type MuiIconComponent = SvgIconComponent;

/** A `react-icons` icon component. Accepts `className` and `size`. */
export type ReactIconComponent = IconType;

/** Any icon component rendered by the site. */
export type IconComponent = MuiIconComponent | ReactIconComponent;

/** Full-bleed page hero backed by a background image. */
export interface HeroContent {
  title: string;
  description: string;
  backgroundImage: string;
}

/** Heading plus body copy — the shape most informational sections use. */
export interface InfoItem {
  title: string;
  description: string;
}

/** An `InfoItem` introduced by an icon. */
export interface IconInfoItem extends InfoItem {
  icon: MuiIconComponent;
}

/** Image/copy pair rendered as an alternating full-width feature row. */
export interface FeatureRow {
  title: string;
  content: string;
  /** Foreground illustration, when the row has one. */
  image?: string;
  /** Parallax backdrop for the row. */
  backgroundImage?: string;
}
