import type { MetadataRoute } from "next";

import { site } from "@/lib/content";
import { defaultLocale, localizedHref, locales } from "@/lib/i18n";

/** Rutas públicas de la web, sin prefijo de idioma. */
const paths = [
  "/",
  "/quienes-somos",
  "/areas-juridicas",
  "/colaboradores",
  "/contacto",
  "/aviso-legal",
  "/politica-de-privacidad",
  "/politica-de-cookies",
] as const;

export const dynamic = "force-static";

function absolute(locale: (typeof locales)[number], path: string): string {
  return `${site.url}${localizedHref(locale, path)}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: absolute(locale, path),
      lastModified,
      changeFrequency: "yearly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: {
          ...Object.fromEntries(
            locales.map((item) => [item, absolute(item, path)]),
          ),
          "x-default": absolute(defaultLocale, path),
        },
      },
    })),
  );
}
