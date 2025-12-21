// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE_URL = "https://www.cyrildegraeve.dev";
const LOCALES = ["fr", "en"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // Si ta home réelle est /fr et /en uniquement, tu peux supprimer cette entrée "/"
    {
      url: `${SITE_URL}/`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: {
        languages: {
          fr: `${SITE_URL}/fr`,
          en: `${SITE_URL}/en`,
        },
      },
    },

    ...LOCALES.map((locale) => ({
      url: `${SITE_URL}/${locale}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: locale === "fr" ? 1 : 0.9,
      alternates: {
        languages: {
          fr: `${SITE_URL}/fr`,
          en: `${SITE_URL}/en`,
        },
      },
    })),
  ];
}
