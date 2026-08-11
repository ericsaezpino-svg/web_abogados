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

const es: SiteContent = {
  meta: {
    tagline: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Despacho de abogados — contenido placeholder pendiente de sustitución.",
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Quiénes somos", href: "/quienes-somos" },
    { label: "Áreas jurídicas", href: "/areas-juridicas" },
    { label: "Colaboradores", href: "/colaboradores" },
    { label: "Contacto", href: "/contacto" },
  ],

  legalLinks: [
    { label: "Aviso legal", href: "#" },
    { label: "Política de privacidad", href: "#" },
    { label: "Política de cookies", href: "#" },
  ],

  ui: {
    skipToContent: "Saltar al contenido",
    homeLabel: `${site.name} — Inicio`,
    mainNavLabel: "Navegación principal",
    mobileNavLabel: "Navegación principal (móvil)",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
    contactCta: "Contacto",
  },

  contactInfo: {
    schedule: "Lunes a viernes, 9:00 – 19:00",
    mapLabel: "Mapa placeholder de la ubicación del despacho",
    addressLabel: "Dirección",
    phoneLabel: "Teléfono",
    emailLabel: "Email",
    scheduleLabel: "Horario",
  },

  footer: {
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    legalTitle: "Legal",
    rights: `© 2026 ${site.name}. Todos los derechos reservados.`,
  },

  pageMeta: {
    home: {
      title: `${site.name} | Lorem ipsum dolor sit amet consectetur`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Despacho de abogados — contenido placeholder pendiente de sustitución.",
    },
    about: {
      title: "Quiénes somos",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Presentación placeholder del despacho y de sus abogadas.",
    },
    practiceAreas: {
      title: "Áreas jurídicas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Áreas de práctica placeholder del despacho.",
    },
    collaborators: {
      title: "Colaboradores",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Red de colaboradores placeholder del despacho.",
    },
    contact: {
      title: "Contacto",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Datos de contacto y canales placeholder del despacho.",
    },
  },

  lawyers: [
    {
      name: "Carmen Pino Lucas",
      initials: "CP",
      role: "Abogada — Lorem ipsum dolor",
      shortBio: LOREM_SHORT,
      bio: [LOREM_MEDIUM, LOREM_A],
    },
    {
      name: "Lorena Vinent Guillem",
      initials: "LV",
      role: "Abogada — Consectetur adipiscing elit",
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
      secondary: "Áreas jurídicas",
    },
    intro: {
      eyebrow: "El despacho",
      title: LOREM_TITLE_A,
      paragraphs: [LOREM_MEDIUM, LOREM_A, LOREM_B],
    },
    sections: {
      eyebrow: "El despacho",
      title: "Cómo podemos ayudarle",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      items: [
        {
          icon: "users",
          title: "Quiénes somos",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
          href: "/quienes-somos",
        },
        {
          icon: "scale",
          title: "Áreas jurídicas",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          href: "/areas-juridicas",
        },
        {
          icon: "handshake",
          title: "Colaboradores",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
          href: "/colaboradores",
        },
        {
          icon: "mail",
          title: "Contacto",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
          href: "/contacto",
        },
      ],
    },
    team: {
      eyebrow: "El equipo",
      title: "Dos abogadas, un mismo compromiso",
      description: LOREM_SHORT,
      cta: "Conocer el despacho",
    },
    cta: {
      eyebrow: "Contacto",
      title: LOREM_TITLE_B,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      action: "Solicitar cita",
    },
  },

  about: {
    hero: {
      eyebrow: "El despacho",
      title: "Quiénes somos",
      subtitle: LOREM_SHORT,
    },
    intro: {
      eyebrow: "Nuestra trayectoria",
      title: LOREM_TITLE_C,
      paragraphs: [LOREM_MEDIUM, LOREM_B],
      highlight: LOREM_QUOTE,
    },
    team: {
      eyebrow: "El equipo",
      title: "Las abogadas",
      description: LOREM_SHORT,
    },
    values: {
      eyebrow: "Compromiso",
      title: "Nuestros valores",
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
      eyebrow: "Especialidades",
      title: "Áreas jurídicas",
      subtitle: LOREM_SHORT,
    },
    intro: {
      eyebrow: "Cómo trabajamos",
      title: LOREM_TITLE_B,
      paragraphs: [LOREM_MEDIUM],
    },
    items: [
      { icon: "scale", title: "Derecho Civil", description: LOREM_MEDIUM },
      { icon: "gavel", title: "Derecho Penal", description: LOREM_A },
      { icon: "briefcase", title: "Derecho Laboral", description: LOREM_B },
      { icon: "users", title: "Derecho de Familia", description: LOREM_C },
      { icon: "building", title: "Derecho Mercantil", description: LOREM_D },
      { icon: "landmark", title: "Derecho Administrativo", description: LOREM_E },
      { icon: "home", title: "Derecho Inmobiliario", description: LOREM_SHORT },
      { icon: "fileText", title: "Derecho Sucesorio", description: LOREM_B },
    ],
    cta: {
      eyebrow: "¿No encuentra su caso?",
      title: "Cuéntenos su situación",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      action: "Contactar",
    },
  },

  collaborators: {
    hero: {
      eyebrow: "Red profesional",
      title: "Colaboradores",
      subtitle: LOREM_SHORT,
    },
    intro: {
      eyebrow: "Trabajo en red",
      title: LOREM_TITLE_A,
      paragraphs: [LOREM_MEDIUM],
    },
    items: LOREM_COLLABORATORS,
  },

  contact: {
    hero: {
      eyebrow: "Hablemos",
      title: "Contacto",
      subtitle: LOREM_SHORT,
    },
    channels: {
      eyebrow: "Cómo contactarnos",
      title: "Elija el canal que prefiera",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      items: [
        {
          icon: "calendarCheck",
          title: "Agendar una llamada",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Reserve el hueco que mejor le convenga.",
          detail: "Primera consulta de 30 minutos",
          actionLabel: "Ver disponibilidad",
          href: site.contact.bookingUrl,
          external: true,
        },
        {
          icon: "messageCircle",
          title: "Contactar por WhatsApp",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
          detail: site.contact.whatsapp,
          actionLabel: "Abrir WhatsApp",
          href: site.contact.whatsappHref,
          external: true,
        },
        {
          icon: "mail",
          title: "Enviar un correo",
          description: LOREM_A,
          detail: site.contact.email,
          actionLabel: "Escribir email",
          href: `mailto:${site.contact.email}`,
        },
      ],
    },
    details: {
      eyebrow: "Dónde estamos",
      title: "Datos de contacto",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
  },
};

export default es;
