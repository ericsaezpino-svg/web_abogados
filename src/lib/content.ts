/**
 * Contenido placeholder centralizado.
 *
 * TODO: sustituir todos los textos lorem ipsum por el contenido real del despacho.
 * La estructura de datos es definitiva: basta reemplazar las cadenas.
 */

import type { IconName } from "@/lib/icons";

export type NavItem = {
  label: string;
  href: string;
};

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
  href?: string;
};

export type Lawyer = {
  name: string;
  initials: string;
  role: string;
  shortBio: string;
  bio: string[];
};

export type Collaborator = {
  name: string;
  initials: string;
  kind: string;
};

const LOREM_SHORT =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const LOREM_MEDIUM =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export const site = {
  name: "Abogados Marina",
  tagline: "Lorem ipsum dolor sit amet consectetur",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Despacho de abogados — contenido placeholder pendiente de sustitución.",
  contact: {
    address: "Calle Ejemplo, 00 — 00000 Ciudad",
    phone: "+34 000 00 00 00",
    phoneHref: "tel:+34000000000",
    email: "info@abogadosmarina.example",
    schedule: "Lunes a viernes, 9:00 – 19:00",
    // TODO: sustituir por la dirección real del despacho.
    mapEmbedUrl: "https://www.google.com/maps?q=Valencia,+Spain&output=embed",
    mapLabel: "Mapa placeholder de la ubicación del despacho",
  },
} as const;

export const nav: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Áreas jurídicas", href: "/areas-juridicas" },
  { label: "Colaboradores", href: "/colaboradores" },
  { label: "Contacto", href: "/contacto" },
];

export const legalLinks: NavItem[] = [
  { label: "Aviso legal", href: "#" },
  { label: "Política de privacidad", href: "#" },
  { label: "Política de cookies", href: "#" },
];

export const lawyers: Lawyer[] = [
  {
    name: "Carmen Pino Lucas",
    initials: "CP",
    role: "Abogada — Lorem ipsum dolor",
    shortBio: LOREM_SHORT,
    bio: [
      LOREM_MEDIUM,
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
  },
  {
    name: "Lorena Vinent Guillem",
    initials: "LV",
    role: "Abogada — Consectetur adipiscing elit",
    shortBio: LOREM_SHORT,
    bio: [
      LOREM_MEDIUM,
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    ],
  },
];

export const home = {
  hero: {
    eyebrow: "Lorem ipsum · Dolor sit amet",
    title: "Abogados Marina",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.",
  },
  intro: {
    eyebrow: "El despacho",
    title: "Lorem ipsum dolor sit amet consectetur",
    paragraphs: [
      LOREM_MEDIUM,
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    ],
  },
  sections: [
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
  ] satisfies Feature[],
  team: {
    eyebrow: "El equipo",
    title: "Dos abogadas, un mismo compromiso",
    description: LOREM_SHORT,
  },
  cta: {
    title: "Lorem ipsum dolor sit amet consectetur adipiscing",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
};

export const about = {
  hero: {
    eyebrow: "El despacho",
    title: "Quiénes somos",
    subtitle: LOREM_SHORT,
  },
  intro: {
    eyebrow: "Nuestra trayectoria",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    paragraphs: [
      LOREM_MEDIUM,
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.",
    ],
    highlight:
      "«Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.»",
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
    ] satisfies Feature[],
  },
};

export const practiceAreas = {
  hero: {
    eyebrow: "Especialidades",
    title: "Áreas jurídicas",
    subtitle: LOREM_SHORT,
  },
  intro: {
    eyebrow: "Cómo trabajamos",
    title: "Lorem ipsum dolor sit amet consectetur adipiscing",
    paragraphs: [LOREM_MEDIUM],
  },
  items: [
    {
      icon: "scale",
      title: "Derecho Civil",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: "gavel",
      title: "Derecho Penal",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      icon: "briefcase",
      title: "Derecho Laboral",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      icon: "users",
      title: "Derecho de Familia",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      icon: "building",
      title: "Derecho Mercantil",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem.",
    },
    {
      icon: "landmark",
      title: "Derecho Administrativo",
      description:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.",
    },
    {
      icon: "home",
      title: "Derecho Inmobiliario",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
    },
    {
      icon: "fileText",
      title: "Derecho Sucesorio",
      description:
        "Temporibus autem quibusdam et aute officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.",
    },
  ] satisfies Feature[],
};

export const collaborators = {
  hero: {
    eyebrow: "Red profesional",
    title: "Colaboradores",
    subtitle: LOREM_SHORT,
  },
  intro: {
    eyebrow: "Trabajo en red",
    title: "Lorem ipsum dolor sit amet consectetur",
    paragraphs: [LOREM_MEDIUM],
  },
  items: [
    { name: "Lorem Ipsum & Asociados", initials: "LI", kind: "Consectetur adipiscing" },
    { name: "Dolor Sit Amet Consulting", initials: "DS", kind: "Sed do eiusmod" },
    { name: "Consectetur Legal Group", initials: "CL", kind: "Tempor incididunt" },
    { name: "Adipiscing Partners", initials: "AP", kind: "Ut labore et dolore" },
    { name: "Eiusmod Peritos", initials: "EP", kind: "Magna aliqua" },
    { name: "Tempor Notarios", initials: "TN", kind: "Ut enim ad minim" },
    { name: "Incididunt Economistas", initials: "IE", kind: "Quis nostrud" },
    { name: "Labore Gestión", initials: "LG", kind: "Exercitation ullamco" },
    { name: "Magna Aliqua Consultores", initials: "MA", kind: "Laboris nisi aliquip" },
  ] satisfies Collaborator[],
};

export const contact = {
  hero: {
    eyebrow: "Hablemos",
    title: "Contacto",
    subtitle: LOREM_SHORT,
  },
  form: {
    title: "Escríbanos",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  details: {
    title: "Datos de contacto",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
  },
};
