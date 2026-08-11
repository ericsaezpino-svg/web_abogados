/**
 * Datos del despacho que no dependen del idioma.
 * Los textos traducibles viven en los diccionarios `es.ts` / `en.ts` / `ca.ts`.
 */
export const site = {
  name: "Abogados Marina",
  /** TODO: sustituir por el dominio real (se usa para canónicas y hreflang). */
  url: "https://www.abogadosmarina.example",
  contact: {
    address: "Calle Ejemplo, 00 — 00000 Ciudad",
    phone: "+34 000 00 00 00",
    phoneHref: "tel:+34000000000",
    email: "info@abogadosmarina.example",
    // TODO: sustituir por el número real de WhatsApp del despacho.
    whatsapp: "+34 000 00 00 00",
    whatsappHref: "https://wa.me/34000000000",
    // TODO: sustituir por la URL real de la agenda (Calendly, Cal.com, TidyCal…).
    bookingUrl: "https://calendly.com/abogadosmarina/consulta",
    // TODO: sustituir por la dirección real del despacho.
    mapEmbedUrl: "https://www.google.com/maps?q=Valencia,+Spain&output=embed",
  },
} as const;

export const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];
