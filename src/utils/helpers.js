/**
 * Conditionally joins class names together into a single string.
 */
export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Truncates text cleanly at word boundary.
 */
export function truncateText(text, maxLength = 120) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

