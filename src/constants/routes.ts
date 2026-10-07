export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  SERVICE_DETAIL: "/services/:slug",
  INDUSTRIES: "/industries",
  HEALTHCARE: "/industries/healthcare",
  CAREERS: "/careers",
  CONTACT: "/contact",
} as const;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES];

/** Builds a concrete `/services/<slug>` link from `ROUTES.SERVICE_DETAIL`. */
export const getServiceDetailPath = (slug: string): string =>
  ROUTES.SERVICE_DETAIL.replace(":slug", slug);

/**
 * Paths used by earlier versions of the site, kept as redirects so shared
 * links and search results keep working.
 */
export const LEGACY_ROUTE_REDIRECTS: ReadonlyArray<{
  from: string;
  to: RoutePath;
}> = [
  { from: "/ushealthcare", to: ROUTES.HEALTHCARE },
  { from: "/us-healthcare", to: ROUTES.HEALTHCARE },
  { from: "/career", to: ROUTES.CAREERS },
];
