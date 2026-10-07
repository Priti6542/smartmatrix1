/**
 * The company's headline figures. Shared between the homepage's stat strip
 * and the About page's trust section — same numbers, two different visual
 * treatments — so the two can never drift apart.
 */
export interface CompanyStat {
  value: number;
  suffix: string;
  label: string;
}

export const COMPANY_STATS: CompanyStat[] = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Clients Worldwide" },
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 8, suffix: "", label: "Industries Served" },
];
