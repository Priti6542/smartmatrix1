/** Joins conditional class names, dropping anything falsy. */
export function cx(
  ...values: Array<string | false | null | undefined>
): string {
  return values.filter(Boolean).join(" ");
}

/** Turns a human title into a URL-safe slug. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Splits a comma-separated copy string into trimmed, non-empty parts. */
export function splitList(value: string): string[] {
  return value
    .split(",")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

/**
 * Evenly distributes `count` items around a circle and returns the CSS
 * transform that places item `index` on the rim without rotating its contents.
 */
export function radialTransform(
  index: number,
  count: number,
  radiusPx: number,
): string {
  const angle = index * (360 / count);
  return `rotate(${angle}deg) translate(${radiusPx}px) rotate(-${angle}deg)`;
}
