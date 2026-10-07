import type { ReactNode } from "react";

import { cx } from "../../utils/helpers";

/**
 * The one horizontal shell for the whole site: 1320px max width, centred,
 * with 20px / 24px / 32px gutters at mobile / tablet / desktop.
 *
 * Exported as a string so elements that cannot take an extra wrapper — a grid
 * root, or a third-party component that owns its own DOM node — can apply the
 * exact same shell without nesting a `<div>`. Never retype these values.
 */
export const CONTAINER_CLASS =
  "mx-auto w-full max-w-site px-5 sm:px-6 lg:px-8";

export interface ContainerProps {
  children: ReactNode;
  /** Extra classes for this instance. Never horizontal padding or max-width. */
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => (
  <div className={cx(CONTAINER_CLASS, className)}>{children}</div>
);

export default Container;
