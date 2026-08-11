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

const en: SiteContent = {
  meta: {
    tagline: "Lorem ipsum dolor sit amet consectetur",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Law firm — placeholder content pending replacement.",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/quienes-somos" },
    { label: "Practice areas", href: "/areas-juridicas" },
    { label: "Collaborators", href: "/colaboradores" },
    { label: "Contact", href: "/contacto" },
  ],

  legalLinks: [
    { label: "Legal notice", href: "#" },
    { label: "Privacy policy", href: "#" },
    { label: "Cookie policy", href: "#" },
  ],

  ui: {
    skipToContent: "Skip to content",
    homeLabel: `${site.name} — Home`,
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Main navigation (mobile)",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    contactCta: "Contact",
  },

  contactInfo: {
    schedule: "Monday to Friday, 9:00 – 19:00",
    mapLabel: "Placeholder map of the firm's location",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    scheduleLabel: "Opening hours",
  },

  footer: {
    blurb:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Legal",
    rights: `© 2026 ${site.name}. All rights reserved.`,
  },

  pageMeta: {
    home: {
      title: `${site.name} | Lorem ipsum dolor sit amet consectetur`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Law firm — placeholder content pending replacement.",
    },
    about: {
      title: "About us",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder introduction to the firm and its lawyers.",
    },
    practiceAreas: {
      title: "Practice areas",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder practice areas of the firm.",
    },
    collaborators: {
      title: "Collaborators",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder network of collaborators.",
    },
    contact: {
      title: "Contact",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder contact details and channels.",
    },
  },

  lawyers: [
    {
      name: "Carmen Pino Lucas",
      initials: "CP",
      role: "Lawyer — Lorem ipsum dolor",
      shortBio: LOREM_SHORT,
      bio: [LOREM_MEDIUM, LOREM_A],
    },
    {
      name: "Lorena Vinent Guillem",
      initials: "LV",
      role: "Lawyer — Consectetur adipiscing elit",
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
      primary: "Get in touch",
      secondary: "Practice areas",
    },
    intro: {
      eyebrow: "The firm",
      title: LOREM_TITLE_A,
      paragraphs: [LOREM_MEDIUM, LOREM_A, LOREM_B],
    },
    sections: {
      eyebrow: "The firm",
      title: "How we can help you",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
      items: [
        {
          icon: "users",
          title: "About us",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor.",
          href: "/quienes-somos",
        },
        {
          icon: "scale",
          title: "Practice areas",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
          href: "/areas-juridicas",
        },
        {
          icon: "handshake",
          title: "Collaborators",
          description:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
          href: "/colaboradores",
        },
        {
          icon: "mail",
          title: "Contact",
          description:
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
          href: "/contacto",
        },
      ],
    },
    team: {
      eyebrow: "The team",
      title: "Two lawyers, one commitment",
      description: LOREM_SHORT,
      cta: "About the firm",
    },
    cta: {
      eyebrow: "Contact",
      title: LOREM_TITLE_B,
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      action: "Request an appointment",
    },
  },

  about: {
    hero: {
      eyebrow: "The firm",
      title: "About us",
      subtitle: LOREM_SHORT,
    },
    intro: {
      eyebrow: "Our track record",
      title: LOREM_TITLE_C,
      paragraphs: [LOREM_MEDIUM, LOREM_B],
      highlight: LOREM_QUOTE,
    },
    team: {
      eyebrow: "The team",
      title: "The lawyers",
      description: LOREM_SHORT,
    },
    values: {
      eyebrow: "Commitment",
      title: "Our values",
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
      eyebrow: "Specialities",
      title: "Practice areas",
      subtitle: LOREM_SHORT,
    },
    intro: {
      eyebrow: "How we work",
      title: LOREM_TITLE_B,
      paragraphs: [LOREM_MEDIUM],
    },
    items: [
      { icon: "scale", title: "Civil Law", description: LOREM_MEDIUM },
      { icon: "gavel", title: "Criminal Law", description: LOREM_A },
      { icon: "briefcase", title: "Employment Law", description: LOREM_B },
      { icon: "users", title: "Family Law", description: LOREM_C },
      { icon: "building", title: "Commercial Law", description: LOREM_D },
      { icon: "landmark", title: "Administrative Law", description: LOREM_E },
      { icon: "home", title: "Real Estate Law", description: LOREM_SHORT },
      { icon: "fileText", title: "Succession Law", description: LOREM_B },
    ],
    cta: {
      eyebrow: "Can't find your case?",
      title: "Tell us about your situation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.",
      action: "Get in touch",
    },
  },

  collaborators: {
    hero: {
      eyebrow: "Professional network",
      title: "Collaborators",
      subtitle: LOREM_SHORT,
    },
    intro: {
      eyebrow: "Working together",
      title: LOREM_TITLE_A,
      paragraphs: [LOREM_MEDIUM],
    },
    items: LOREM_COLLABORATORS,
  },

  contact: {
    hero: {
      eyebrow: "Let's talk",
      title: "Contact",
      subtitle: LOREM_SHORT,
    },
    channels: {
      eyebrow: "How to reach us",
      title: "Choose your preferred channel",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
      items: [
        {
          icon: "calendarCheck",
          title: "Book a call",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pick whichever slot suits you best.",
          detail: "First 30-minute consultation",
          actionLabel: "See availability",
          href: site.contact.bookingUrl,
          external: true,
        },
        {
          icon: "messageCircle",
          title: "Message us on WhatsApp",
          description:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
          detail: site.contact.whatsapp,
          actionLabel: "Open WhatsApp",
          href: site.contact.whatsappHref,
          external: true,
        },
        {
          icon: "mail",
          title: "Send an email",
          description: LOREM_A,
          detail: site.contact.email,
          actionLabel: "Write an email",
          href: `mailto:${site.contact.email}`,
        },
      ],
    },
    details: {
      eyebrow: "Where we are",
      title: "Contact details",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
    },
  },
};

export default en;
