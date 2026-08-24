import type { IconName } from "@/lib/icons";

export type NavItem = {
  label: string;
  /** Ruta sin prefijo de idioma (`/quienes-somos`) o `#`. */
  href: string;
};

export type Feature = {
  icon: IconName;
  title: string;
  description: string;
  href?: string;
};

export type PracticeArea = {
  icon: IconName;
  title: string;
  /** Materias concretas, en formato de lista, en lugar de un párrafo. */
  points: string[];
  href?: string;
};

export type Lawyer = {
  name: string;
  initials: string;
  role: string;
  /** Formación académica: una línea por titulación. */
  education: string[];
  /** Materias en las que ejerce, tal y como se listan en la ficha. */
  specialties: string[];
  /** Ruta de la foto en `/public`. Sin foto se muestra el monograma. */
  photo?: string;
};

export type Collaborator = {
  name: string;
  initials: string;
  /** Profesión del colaborador («Psicólogo», «Procuradora»…). */
  role: string;
  /** Número de colegiado, si consta. */
  credential?: string;
};

export type ContactChannel = {
  icon: IconName;
  title: string;
  description: string;
  /** Dato concreto del canal (teléfono, email, duración…). */
  detail: string;
  actionLabel: string;
  href: string;
  /** El enlace apunta a un servicio externo: se abre en una pestaña nueva. */
  external?: boolean;
};

export type PageMeta = {
  title: string;
  description: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  paragraphs: string[];
};

/**
 * Forma del diccionario de contenido. Cada idioma (`es.ts`, `en.ts`, `ca.ts`)
 * exporta un objeto con esta estructura, así el compilador avisa si a una
 * traducción le falta cualquier cadena.
 */
export type SiteContent = {
  /** Metadatos generales del sitio. */
  meta: {
    tagline: string;
    description: string;
  };

  nav: NavItem[];
  legalLinks: NavItem[];

  /** Cadenas de interfaz (accesibilidad, botones, etiquetas). */
  ui: {
    skipToContent: string;
    homeLabel: string;
    mainNavLabel: string;
    mobileNavLabel: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
    contactCta: string;
    /** Prefijo del `alt` de los retratos: «Retrato de {nombre}». */
    portraitAlt: string;
    /** Encabezado de la lista de especialidades de cada abogado. */
    specialtiesLabel: string;
  };

  /** Datos de contacto traducibles (los no traducibles están en `site`). */
  contactInfo: {
    schedule: string;
    mapLabel: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    scheduleLabel: string;
    /** Textos del mapa, que solo se carga si el visitante lo pide. */
    map: {
      heading: string;
      notice: string;
      action: string;
      externalLabel: string;
      cookiesLabel: string;
    };
  };

  footer: {
    blurb: string;
    navTitle: string;
    contactTitle: string;
    legalTitle: string;
    rights: string;
  };

  pageMeta: {
    home: PageMeta;
    about: PageMeta;
    practiceAreas: PageMeta;
    collaborators: PageMeta;
    contact: PageMeta;
  };

  lawyers: Lawyer[];

  home: {
    hero: { eyebrow: string; title: string; subtitle: string };
    intro: SectionIntro;
    sections: {
      eyebrow: string;
      title: string;
      description: string;
      items: Feature[];
    };
    team: {
      eyebrow: string;
      title: string;
      description: string;
      cta: string;
    };
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      action: string;
    };
    heroActions: {
      primary: string;
      secondary: string;
    };
  };

  about: {
    hero: { eyebrow: string; title: string; subtitle: string };
    intro: SectionIntro & { highlight: string };
    team: { eyebrow: string; title: string; description: string };
    values: {
      eyebrow: string;
      title: string;
      description: string;
      items: Feature[];
    };
  };

  practiceAreas: {
    hero: { eyebrow: string; title: string; subtitle: string };
    intro: SectionIntro;
    items: PracticeArea[];
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      action: string;
    };
  };

  collaborators: {
    hero: { eyebrow: string; title: string; subtitle: string };
    intro: SectionIntro;
    items: Collaborator[];
  };

  contact: {
    hero: { eyebrow: string; title: string; subtitle: string };
    channels: {
      eyebrow: string;
      title: string;
      description: string;
      items: ContactChannel[];
    };
    details: {
      eyebrow: string;
      title: string;
      description: string;
    };
  };
};
