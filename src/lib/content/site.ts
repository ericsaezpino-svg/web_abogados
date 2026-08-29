/**
 * Datos del despacho que no dependen del idioma.
 * Los textos traducibles viven en los diccionarios `es.ts` / `en.ts` / `ca.ts`.
 */
export const site = {
  name: "Abogados Marina 204",
  /** Dominio de producción (se usa para canónicas, hreflang y sitemap). */
  url: "https://www.abogadosmarina204.com",
  contact: {
    address: "Calle Marina, 204, local izquierda, 08013 Barcelona",
    phone: "+34 615 50 48 40",
    phoneHref: "tel:+34615504840",
    email: "abogadosmarina204@gmail.com",
    // TODO: confirmar que el WhatsApp del despacho es este mismo número.
    whatsapp: "+34 615 50 48 40",
    whatsappHref: "https://wa.me/34615504840",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Carrer+de+la+Marina+204,+08013+Barcelona&output=embed",
    /** Enlace externo a Maps, alternativa al mapa embebido. */
    mapLinkUrl:
      "https://www.google.com/maps/search/?api=1&query=Carrer+de+la+Marina+204,+08013+Barcelona",
  },
} as const;

/**
 * Marcador de los datos que faltan en los documentos legales. Se renderiza
 * resaltado en la página para que sea imposible publicarlos sin darse cuenta.
 */
export const TODO_LEGAL = "[COMPLETAR]";

/**
 * Datos identificativos que exigen la LSSI-CE (art. 10) y el RGPD (art. 13).
 *
 * TODO (antes de publicar): sustituir todos los `TODO_LEGAL` por los datos
 * reales. Sin ellos, el aviso legal y la política de privacidad están
 * incompletos y no cumplen.
 */
export const legalEntity = {
  /**
   * Los tres profesionales ejercen como autónomos y son corresponsables del
   * tratamiento.
   *
   * NOTA: por decisión del despacho, esta identificación individual **no se
   * publica** hoy en ningún documento legal. Se conserva aquí para poder
   * reincorporarla sin rehacer el trabajo si se decide cumplir literalmente el
   * art. 10 de la LSSI-CE y el art. 13.1.a del RGPD.
   */
  professionals: [
    {
      name: "María del Carmen Pino Lucas",
      nif: TODO_LEGAL,
      barNumber: TODO_LEGAL,
    },
    {
      name: "David López Homedes",
      nif: TODO_LEGAL,
      barNumber: TODO_LEGAL,
    },
    {
      name: "Lorena Vinent Guillem",
      nif: TODO_LEGAL,
      barNumber: TODO_LEGAL,
    },
  ],
  /** TODO: confirmar el colegio de adscripción de los tres profesionales. */
  bar: "Ilustre Colegio de la Abogacía de Barcelona (ICAB)",
  barUrl: "https://www.icab.es",
  /**
   * Proveedor de alojamiento (encargado del tratamiento).
   * TODO: confirmar la entidad contratante exacta (Cloudflare, Inc. o su filial
   * irlandesa) y firmar con ella el contrato de encargo del art. 28 del RGPD.
   */
  hosting: {
    name: "Cloudflare, Inc.",
    /** País desde el que se presta el servicio: determina si hay transferencia internacional. */
    country: "Estados Unidos",
  },
  /** Fecha de la última revisión de los textos legales. */
  lastUpdated: "2026-08-24",
} as const;

/**
 * Fotografías del equipo (en `/public`), comunes a los tres idiomas.
 */
export const teamPhotos = {
  carmenPino: "/equipo/carmen-pino-lucas.jpg",
  davidLopez: "/equipo/david-lopez-homedes.jpg",
  lorenaVinent: "/equipo/lorena-vinent-guillem.jpg",
} as const;

/** TODO: añadir los perfiles reales del despacho cuando existan. */
export const socialLinks: { label: string; href: string }[] = [];
