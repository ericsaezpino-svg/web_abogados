import ca from "@/lib/content/ca";
import en from "@/lib/content/en";
import es from "@/lib/content/es";
import type { SiteContent } from "@/lib/content/types";
import type { Locale } from "@/lib/i18n";

const dictionaries: Record<Locale, SiteContent> = { es, en, ca };

/** Devuelve el diccionario de contenido del idioma indicado. */
export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export {
  legalEntity,
  site,
  socialLinks,
  teamPhotos,
  TODO_LEGAL,
} from "@/lib/content/site";
export { getLegal } from "@/lib/content/legal";
export type {
  Collaborator,
  ContactChannel,
  Feature,
  Lawyer,
  NavItem,
  PageMeta,
  PracticeArea,
  SectionIntro,
  SiteContent,
} from "@/lib/content/types";
