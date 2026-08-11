"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  localeAbbreviations,
  localeNames,
  locales,
  stripLocale,
  type Locale,
} from "@/lib/i18n";

type LocaleSwitcherProps = {
  locale: Locale;
  label: string;
  /** `inline` para la cabecera de escritorio, `stacked` para el drawer móvil. */
  variant?: "inline" | "stacked";
};

export default function LocaleSwitcher({
  locale,
  label,
  variant = "inline",
}: LocaleSwitcherProps) {
  const pathname = usePathname();
  // Misma página, distinto idioma: se conserva la ruta y solo cambia el prefijo.
  const path = stripLocale(pathname);

  if (variant === "stacked") {
    return (
      <div>
        <p className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-700 uppercase">
          {label}
        </p>
        <ul className="mt-3 flex flex-col gap-1">
          {locales.map((item) => {
            const isCurrent = item === locale;

            return (
              <li key={item}>
                <Link
                  href={path === "/" ? `/${item}` : `/${item}${path}`}
                  hrefLang={item}
                  aria-current={isCurrent ? "true" : undefined}
                  className={`block py-1 font-sans text-sm transition-colors duration-200 ${
                    isCurrent ? "text-gold-700" : "text-navy hover:text-gold-700"
                  }`}
                >
                  {localeNames[item]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <nav aria-label={label}>
      <ul className="flex items-center gap-2">
        {locales.map((item, index) => {
          const isCurrent = item === locale;

          return (
            <li key={item} className="flex items-center gap-2">
              {index > 0 ? (
                <span aria-hidden="true" className="text-navy-200">
                  ·
                </span>
              ) : null}
              <Link
                href={path === "/" ? `/${item}` : `/${item}${path}`}
                hrefLang={item}
                aria-current={isCurrent ? "true" : undefined}
                title={localeNames[item]}
                className={`font-sans text-xs tracking-[0.12em] transition-colors duration-200 ${
                  isCurrent
                    ? "text-gold-700 underline decoration-gold decoration-1 underline-offset-4"
                    : "text-slate hover:text-navy"
                }`}
              >
                {localeAbbreviations[item]}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
