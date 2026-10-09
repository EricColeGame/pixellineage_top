export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export type NavItem = NavigationItem;

export const NAVIGATION_CONFIG: readonly NavigationItem[] = [];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
