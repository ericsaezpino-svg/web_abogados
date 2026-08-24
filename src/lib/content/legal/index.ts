import ca from "@/lib/content/legal/ca";
import en from "@/lib/content/legal/en";
import es from "@/lib/content/legal/es";
import type { LegalContent } from "@/lib/content/legal/types";
import type { Locale } from "@/lib/i18n";

const dictionaries: Record<Locale, LegalContent> = { es, en, ca };

/** Devuelve los textos legales del idioma indicado. */
export function getLegal(locale: Locale): LegalContent {
  return dictionaries[locale];
}

export type {
  LegalBlock,
  LegalContent,
  LegalDocument,
  LegalSection,
} from "@/lib/content/legal/types";
