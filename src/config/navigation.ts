export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export type NavItem = NavigationItem;

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "progression", path: "/progression", isContentType: true },
  { key: "characters", path: "/characters", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "codes", path: "/codes", isContentType: true },
  { key: "social", path: "/social", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
