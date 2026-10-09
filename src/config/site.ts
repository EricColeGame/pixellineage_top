export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "PixelLineage Wiki",
  shortName: "PixelLineage",
  logoText: "PL",
  tagline: "Guides, Characters & Updates",
  description: "Explore PixelLineage Wiki with character guides, gameplay tips, progression information, updates, and useful resources to help players master this pixel fantasy adventure game.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://pixellineage.top",
  supportEmail: "support@pixellineage.top",
  gameUrl: "https://pixellineage.top",
  heroVideoId: "HrRBo-0TWDg", // Pixel Lineage official trailer
  social: {
    youtube: "https://www.youtube.com/@PixelRBLXs",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
