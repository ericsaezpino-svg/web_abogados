/** Idiomas de la web. El primero es el idioma por defecto. */
export const locales = ["es", "en", "ca"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

/** Nombre del idioma en su propia lengua (para el selector). */
export const localeNames: Record<Locale, string> = {
  es: "Castellano",
  en: "English",
  ca: "Català",
};

/** Abreviatura para el selector compacto de la cabecera. */
export const localeAbbreviations: Record<Locale, string> = {
  es: "ES",
  en: "EN",
  ca: "CA",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Prefija una ruta interna con el idioma actual.
 * Las rutas externas, los `mailto:` y los `#` se devuelven sin tocar.
 */
export function localizedHref(locale: Locale, path: string): string {
  if (!path.startsWith("/")) {
    return path;
  }

  return path === "/" ? `/${locale}` : `/${locale}${path}`;
}

/**
 * Quita el prefijo de idioma de un pathname.
 * `/en/quienes-somos` → `/quienes-somos`
 */
export function stripLocale(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length > 0 && isLocale(segments[0])) {
    segments.shift();
  }

  return segments.length > 0 ? `/${segments.join("/")}` : "/";
}

/**
 * `alternates` para los metadatos: canónica del idioma actual + hreflang de
 * todos los idiomas, con el castellano como `x-default`.
 */
export function buildAlternates(locale: Locale, path: string) {
  const languages = Object.fromEntries([
    ...locales.map((item) => [item, localizedHref(item, path)]),
    ["x-default", localizedHref(defaultLocale, path)],
  ]);

  return {
    canonical: localizedHref(locale, path),
    languages,
  };
}
