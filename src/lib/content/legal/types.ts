/**
 * Forma de los textos legales (aviso legal, privacidad y cookies).
 *
 * Viven aparte de `SiteContent` porque son documentos largos y de estructura
 * uniforme: una lista de apartados numerados con párrafos, listas y, en el caso
 * de las cookies, alguna tabla.
 */

export type LegalBlock =
  | { kind: "paragraph"; text: string }
  | { kind: "list"; items: string[] }
  /** Lista de pares «etiqueta: valor», para los datos identificativos. */
  | { kind: "definitions"; items: { term: string; value: string }[] }
  | { kind: "table"; head: string[]; rows: string[][] }
  /** Aviso destacado sobre fondo crema. */
  | { kind: "callout"; text: string };

export type LegalSection = {
  /** Ancla de la tabla de contenidos (`#responsable`). */
  id: string;
  title: string;
  blocks: LegalBlock[];
};

export type LegalDocument = {
  /** Ruta sin prefijo de idioma (`/politica-de-privacidad`). */
  path: string;
  eyebrow: string;
  title: string;
  /** Entradilla bajo el titular, en el hero. */
  subtitle: string;
  meta: { title: string; description: string };
  /** Texto de la fecha: «Última actualización: 24 de agosto de 2026». */
  updated: string;
  /** Encabezado del índice de apartados. */
  tocTitle: string;
  sections: LegalSection[];
};

export type LegalContent = {
  notice: LegalDocument;
  privacy: LegalDocument;
  cookies: LegalDocument;
};
