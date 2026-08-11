import {
  LOREM_A,
  LOREM_B,
  LOREM_C,
  LOREM_COLLABORATORS,
  LOREM_D,
  LOREM_E,
  LOREM_EYEBROW,
  LOREM_MEDIUM,
  LOREM_QUOTE,
  LOREM_SHORT,
  LOREM_TITLE_A,
  LOREM_TITLE_B,
  LOREM_TITLE_C,
} from "@/lib/content/lorem";
import { site } from "@/lib/content/site";
import type { SiteContent } from "@/lib/content/types";

const ca: SiteContent = {
  meta: {
    tagline: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Despatx d'advocades — contingut placeholder pendent de substitució.",
  },

  nav: [
    { label: "Inici", href: "/" },
    { label: "Qui som", href: "/quienes-somos" },
    { label: "Àrees jurídiques", href: "/areas-juridicas" },
    { label: "Col·laboradors", href: "/colaboradores" },
    { label: "Contacte", href: "/contacto" },
  ],

  legalLinks: [
    { label: "Avís legal", href: "#" },
    { label: "Política de privacitat", href: "#" },
    { label: "Política de cookies", href: "#" },
  ],

  ui: {
    skipToContent: "Anar al contingut",
    homeLabel: `${site.name} — Inici`,
    mainNavLabel: "Navegació principal",
    mobileNavLabel: "Navegació principal (mòbil)",
    openMenu: "Obrir menú",
    closeMenu: "Tancar menú",
    languageLabel: "Idioma",
    contactCta: "Contacte",
  },

  contactInfo: {
    schedule: "De dilluns a divendres, 9:00 – 19:00",
    mapLabel: "Mapa placeholder de la ubicació del despatx",
    addressLabel: "Adreça",
    phoneLabel: "Telèfon",
    emailLabel: "Correu electrònic",
    scheduleLabel: "Horari",
  },

  footer: {
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    navTitle: "Navegació",
    contactTitle: "Contacte",
    legalTitle: "Legal",
    rights: `© 2026 ${site.name}. Tots els drets reservats.`,
  },

  pageMeta: {
    home: {
      title: `${site.name} | Lorem ipsum dolor sit amet consectetur`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Despatx d'advocades — contingut placeholder pendent de substitució.",
    },
    about: {
      title: "Qui som",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presentació placeholder del despatx i de les seves advocades.",
    },
    practiceAreas: {
      title: "Àrees jurídiques",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Àrees de pràctica placeholder del despatx.",
    },
    collaborators: {
      title: "Col·laboradors",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Xarxa de col·laboradors placeholder del despatx.",
    },
    contact: {
      title: "Contacte",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dades de contacte i canals placeholder del despatx.",
    },
  },

  lawyers: [
    {
      name: "Carmen Pino Lucas",
      initials: "CP",
      role: "Advocada — Lorem ipsum dolor",
      shortBio: LOREM_SHORT,
      bio: [LOREM_MEDIUM, LOREM_A],
    },
    {
      name: "Lorena Vinent Guillem",
      initials: "LV",
      role: "Advocada — Consectetur adipiscing elit",
      shortBio: LOREM_SHORT,
      bio: [LOREM_MEDIUM, LOREM_C],
    },
  ],

  home: {
    hero: {
      eyebrow: LOREM_EYEBROW,
      title: site.name,
      subtitle:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
    },
    heroActions: {
      primary: "Contactar",
      secondary: "Àrees jurídiques",
    },
    intro: {
      eyebrow: "El despatx",
      title: LOREM_TITLE_A,
      paragraphs: [LOREM_MEDIUM, LOREM_A, LOREM_B],
    },
    sections: {
      eyebrow: "El despatx",
      title: "Com podem ajudar-vos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      items: [
        {
          icon: "users",
          title: "Qui som",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
          href: "/quienes-somos",
        },
        {
          icon: "scale",
          title: "Àrees jurídiques",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          href: "/areas-juridicas",
        },
        {
          icon: "handshake",
          title: "Col·laboradors",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
          href: "/colaboradores",
        },
        {
          icon: "mail",
          title: "Contacte",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
          href: "/contacto",
        },
      ],
    },
    team: {
      eyebrow: "L'equip",
      title: "Dues advocades, un mateix compromís",
      description: LOREM_SHORT,
      cta: "Conèixer el despatx",
    },
    cta: {
      eyebrow: "Contacte",
      title: LOREM_TITLE_B,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      action: "Sol·licitar cita",
    },
  },

  about: {
    hero: {
      eyebrow: "El despatx",
      title: "Qui som",
      subtitle: LOREM_SHORT,
    },
    intro: {
      eyebrow: "La nostra trajectòria",
      title: LOREM_TITLE_C,
      paragraphs: [LOREM_MEDIUM, LOREM_B],
      highlight: LOREM_QUOTE,
    },
    team: {
      eyebrow: "L'equip",
      title: "Les advocades",
      description: LOREM_SHORT,
    },
    values: {
      eyebrow: "Compromís",
      title: "Els nostres valors",
      items: [
        {
          icon: "shieldCheck",
          title: "Lorem ipsum",
          description:
            "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
        },
        {
          icon: "handshake",
          title: "Dolor sit amet",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
        },
        {
          icon: "clock",
          title: "Consectetur",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
        },
        {
          icon: "bookOpen",
          title: "Adipiscing elit",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.",
        },
      ],
    },
  },

  practiceAreas: {
    hero: {
      eyebrow: "Especialitats",
      title: "Àrees jurídiques",
      subtitle: LOREM_SHORT,
    },
    intro: {
      eyebrow: "Com treballem",
      title: LOREM_TITLE_B,
      paragraphs: [LOREM_MEDIUM],
    },
    items: [
      { icon: "scale", title: "Dret Civil", description: LOREM_MEDIUM },
      { icon: "gavel", title: "Dret Penal", description: LOREM_A },
      { icon: "briefcase", title: "Dret Laboral", description: LOREM_B },
      { icon: "users", title: "Dret de Família", description: LOREM_C },
      { icon: "building", title: "Dret Mercantil", description: LOREM_D },
      { icon: "landmark", title: "Dret Administratiu", description: LOREM_E },
      { icon: "home", title: "Dret Immobiliari", description: LOREM_SHORT },
      { icon: "fileText", title: "Dret Successori", description: LOREM_B },
    ],
    cta: {
      eyebrow: "No trobeu el vostre cas?",
      title: "Expliqueu-nos la vostra situació",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      action: "Contactar",
    },
  },

  collaborators: {
    hero: {
      eyebrow: "Xarxa professional",
      title: "Col·laboradors",
      subtitle: LOREM_SHORT,
    },
    intro: {
      eyebrow: "Treball en xarxa",
      title: LOREM_TITLE_A,
      paragraphs: [LOREM_MEDIUM],
    },
    items: LOREM_COLLABORATORS,
  },

  contact: {
    hero: {
      eyebrow: "Parlem-ne",
      title: "Contacte",
      subtitle: LOREM_SHORT,
    },
    channels: {
      eyebrow: "Com contactar-nos",
      title: "Trieu el canal que preferiu",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      items: [
        {
          icon: "calendarCheck",
          title: "Concertar una trucada",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reserveu l'hora que us convingui millor.",
          detail: "Primera consulta de 30 minuts",
          actionLabel: "Veure disponibilitat",
          href: site.contact.bookingUrl,
          external: true,
        },
        {
          icon: "messageCircle",
          title: "Contactar per WhatsApp",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
          detail: site.contact.whatsapp,
          actionLabel: "Obrir WhatsApp",
          href: site.contact.whatsappHref,
          external: true,
        },
        {
          icon: "mail",
          title: "Enviar un correu",
          description: LOREM_A,
          detail: site.contact.email,
          actionLabel: "Escriure un correu",
          href: `mailto:${site.contact.email}`,
        },
      ],
    },
    details: {
      eyebrow: "On som",
      title: "Dades de contacte",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
  },
};

export default ca;
