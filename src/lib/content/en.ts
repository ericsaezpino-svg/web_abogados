import { site, teamPhotos } from "@/lib/content/site";
import type { SiteContent } from "@/lib/content/types";

const en: SiteContent = {
  meta: {
    tagline: "Approachable, rigorous and specialised legal advice",
    description:
      "Law firm in the Eixample district of Barcelona. Civil, criminal, employment, family, commercial, administrative, real estate and succession law, backed by 35 years of practice.",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "About us", href: "/quienes-somos" },
    { label: "Practice areas", href: "/areas-juridicas" },
    { label: "Collaborators", href: "/colaboradores" },
    { label: "Contact", href: "/contacto" },
  ],

  legalLinks: [
    { label: "Legal notice", href: "/aviso-legal" },
    { label: "Privacy policy", href: "/politica-de-privacidad" },
    { label: "Cookie policy", href: "/politica-de-cookies" },
  ],

  ui: {
    skipToContent: "Skip to content",
    homeLabel: `${site.name} | Home`,
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Main navigation (mobile)",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageLabel: "Language",
    contactCta: "Contact",
    portraitAlt: "Portrait of",
    specialtiesLabel: "Areas of expertise",
  },

  contactInfo: {
    schedule: "24 hours a day, every day of the year",
    mapLabel: "Map showing the firm's location at Calle Marina, 204",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
    scheduleLabel: "Availability",
    map: {
      heading: "Location map",
      notice:
        "The map is provided by Google. If you load it, your IP address will be sent to Google, which may set its own cookies. More information in our",
      action: "Show the map",
      externalLabel: "Open in Google Maps",
      cookiesLabel: "cookie policy",
    },
  },

  footer: {
    blurb:
      "Comprehensive, personalised legal services for individuals, self-employed professionals and companies.",
    navTitle: "Navigation",
    contactTitle: "Contact",
    legalTitle: "Legal",
    rights: `© 2026 ${site.name}. All rights reserved.`,
  },

  pageMeta: {
    home: {
      title: `${site.name} | Lawyers in Barcelona`,
      description:
        "Law firm in Barcelona. Approachable, rigorous and specialised legal advice, backed by 35 years of practice.",
    },
    about: {
      title: "About us",
      description:
        "Meet the team at Abogados Marina 204: three lawyers with a proven track record, united by rigour, ethics and dedication.",
    },
    practiceAreas: {
      title: "Practice areas",
      description:
        "Civil, criminal, employment, family, commercial, administrative, real estate and succession law. Find out where we can advise you.",
    },
    collaborators: {
      title: "Collaborators",
      description:
        "A network of expert witnesses, court agents, notaries and other professionals that lets us offer a truly complete service.",
    },
    contact: {
      title: "Contact",
      description:
        "Calle Marina, 204, left-hand unit, 08013 Barcelona. Phone, WhatsApp and email. First assessment with no obligation.",
    },
  },

  lawyers: [
    {
      name: "María del Carmen Pino Lucas",
      initials: "CP",
      role: "Lawyer and registered estate agent (API)",
      photo: teamPhotos.carmenPino,
      education: ["Law degree from the University of Barcelona."],
      specialties: [
        "Criminal law",
        "Matrimonial law",
        "Civil law",
        "Civil and matrimonial mediation",
        "Estate agency (API)",
      ],
    },
    {
      name: "David López Homedes",
      initials: "DL",
      role: "Lawyer",
      photo: teamPhotos.davidLopez,
      education: ["Law degree from the University of Barcelona."],
      specialties: [
        "Criminal law",
        "Matrimonial law",
        "Civil law",
        "Employment law",
        "Civil and matrimonial mediation",
        "Immigration law",
      ],
    },
    {
      name: "Lorena Vinent Guillem",
      initials: "LV",
      role: "Lawyer",
      photo: teamPhotos.lorenaVinent,
      education: [
        "Law degree from the Autonomous University of Barcelona.",
        "Master's degree in Legal Practice from the Universitat Oberta de Catalunya.",
      ],
      specialties: [
        "Commercial law",
        "Criminal law",
        "Matrimonial law",
        "Civil law",
        "Immigration law",
      ],
    },
  ],

  home: {
    hero: {
      eyebrow: "Law firm · Barcelona",
      title: "Abogados Marina 204",
      subtitle:
        "Approachable, rigorous and specialised legal advice. We defend your interests with 35 years of practice behind us.",
    },
    heroActions: {
      primary: "Get in touch",
      secondary: "Practice areas",
    },
    intro: {
      eyebrow: "The firm",
      title: "Comprehensive, personalised legal services",
      paragraphs: [
        "Abogados Marina 204 is a leading firm founded with a clear purpose: to offer a comprehensive, personalised legal service into which we put everything we know, so that its quality is beyond question.",
        "We are a team of three lawyers with broad experience across every branch of the law, which allows us to respond effectively to any legal need.",
        "The way we work combines technical rigour with an approachable, transparent relationship, because we understand that behind every legal matter there is a person.",
        "From our offices we support individuals, self-employed professionals and companies throughout the entire process, with solutions tailored to each situation and follow-up 24 hours a day, every day of the year.",
      ],
    },
    sections: {
      eyebrow: "We are here for you",
      title: "How we can help you",
      description:
        "Whether you need one-off advice or a full defence, we are at your disposal. These are the ways to get to know us and work together.",
      items: [
        {
          icon: "users",
          title: "About us",
          description: "Meet the team and the philosophy behind the firm.",
          href: "/quienes-somos",
        },
        {
          icon: "scale",
          title: "Practice areas",
          description: "Find out which matters we can advise you on.",
          href: "/areas-juridicas",
        },
        {
          icon: "handshake",
          title: "Collaborators",
          description: "Our network of specialised professionals.",
          href: "/colaboradores",
        },
        {
          icon: "mail",
          title: "Contact",
          description: "Request a first consultation, free and with no obligation.",
          href: "/contacto",
        },
      ],
    },
    team: {
      eyebrow: "The team",
      title: "Three lawyers, one commitment",
      description:
        "Professionals with a proven track record, united by rigour, ethics and dedication.",
      cta: "About the firm",
    },
    cta: {
      eyebrow: "Contact",
      title: "We are here to help you",
      description:
        "Tell us about your situation and we will give you a first assessment of your case, with no obligation and in complete confidence.",
      action: "Request an appointment",
    },
  },

  about: {
    hero: {
      eyebrow: "The firm",
      title: "About us",
      subtitle: "A law firm committed to its clients.",
    },
    intro: {
      eyebrow: "Our track record",
      title: "A firm built around the client",
      paragraphs: [
        "Abogados Marina 204 was born of the desire to create a different kind of firm: one where the client is not just another case file, but the centre of everything we do, always seeking what is best for their interests.",
        "Over the years we have supported thousands of people and companies through judicial and out-of-court proceedings, always with the same level of demand and commitment.",
      ],
      highlight: "“Behind every legal matter there is a person.”",
    },
    team: {
      eyebrow: "The team",
      title: "The people behind the firm",
      description:
        "Three lawyers with complementary training who work together on every matter.",
    },
    values: {
      eyebrow: "Commitment",
      title: "Our values",
      description:
        "We work in a coordinated way to give a complete answer to any legal situation, however complex it may be.",
      items: [
        {
          icon: "eye",
          title: "Transparency",
          description:
            "We keep communication clear and honest at every stage of the process. You will always know where your matter stands and what options are open to you.",
        },
        {
          icon: "scale",
          title: "Rigour",
          description:
            "We analyse every case in depth and with precision, looking for the strongest strategy to defend your interests.",
        },
        {
          icon: "handshake",
          title: "Closeness",
          description:
            "We treat every client personally. Your situation deserves individual attention, not off-the-shelf solutions.",
        },
        {
          icon: "lock",
          title: "Confidentiality",
          description:
            "All the information you share with us is handled with absolute discretion and under the strictest professional privilege.",
        },
      ],
    },
  },

  practiceAreas: {
    hero: {
      eyebrow: "Specialities",
      title: "Practice areas",
      subtitle:
        "We approach every case from the area of law it belongs to, with professionals who know the legislation, the case law and the procedural practice of each subject in depth.",
    },
    intro: {
      eyebrow: "Our subjects",
      title: "Where we can advise you",
      paragraphs: [
        "Below you will find a description of our main areas of practice. If your matter spans several of them, the firm works in a coordinated way to give you a single, joined-up answer.",
      ],
    },
    items: [
      {
        icon: "scale",
        title: "Civil Law",
        points: [
          "Drafting and reviewing contracts",
          "Debt claims",
          "Compensation for damages",
          "Disputes between private parties, in or out of court",
        ],
      },
      {
        icon: "gavel",
        title: "Criminal Law",
        points: [
          "Defence against an accusation",
          "Private prosecution as a victim",
          "Juvenile matters",
          "Minor offences",
          "Gender violence (men and women)",
          "Jury trial proceedings",
        ],
      },
      {
        icon: "briefcase",
        title: "Employment Law",
        points: [
          "Unfair and void dismissal",
          "Disciplinary sanctions",
          "Wage claims",
          "Workplace harassment",
          "Collective bargaining",
          "Retirement pensions and work disability claims",
          "Proceedings before the employment courts",
        ],
      },
      {
        icon: "users",
        title: "Family Law",
        points: [
          "Divorces and separations",
          "Settlement agreements",
          "Custody and visiting arrangements",
          "Maintenance and compensatory payments",
          "Modification of measures",
          "Filiation and support measures for people with disabilities",
        ],
      },
      {
        icon: "building",
        title: "Commercial Law",
        points: [
          "Incorporating companies",
          "Commercial contracts",
          "Mergers and acquisitions",
          "Directors' liability",
          "Insolvency proceedings (Second Chance Act)",
          "Disputes between companies",
        ],
      },
      {
        icon: "landmark",
        title: "Administrative Law",
        points: [
          "Appeals against penalties",
          "Challenges to administrative acts",
          "Claims for state liability",
          "Public procurement",
          "Planning procedures",
        ],
      },
      {
        icon: "home",
        title: "Real Estate Law",
        points: [
          "Property sales",
          "Lease agreements",
          "Homeowners' associations",
          "Evictions",
          "Claims against builders and developers",
          "Unlicensed works and building defects",
          "Tax settlement",
          "Litigation involving real estate",
        ],
      },
      {
        icon: "fileText",
        title: "Succession Law",
        points: [
          "Drafting and executing wills",
          "Division of estates",
          "Challenges to wills",
          "Succession agreements",
          "Tax settlement",
          "Acceptance or renunciation of estates carrying debt",
        ],
      },
      {
        icon: "globe",
        title: "Immigration Law",
        points: [
          "Residence and work permits",
          "Family reunification",
          "Renewal and amendment of residence and work permits",
          "Expulsion proceedings",
          "Spanish nationality",
        ],
      },
    ],
    cta: {
      eyebrow: "Can't find your case?",
      title: "Tell us about your situation",
      description:
        "Don't worry. Get in touch and we will look at your case with no obligation. If we are not the right fit, we will point you towards the professional who is.",
      action: "Get in touch",
    },
  },

  collaborators: {
    hero: {
      eyebrow: "Professional network",
      title: "Collaborators",
      subtitle:
        "All our collaborators share our way of working: rigour, discretion and a focus on the client.",
    },
    intro: {
      eyebrow: "Working together",
      title: "A truly complete service",
      paragraphs: [
        "Over the years, Abogados Marina 204 has built a network of specialised collaborators that allows us to offer a truly complete service. When a matter calls for specific technical knowledge, whether in expert evidence, tax, administration or any other discipline that complements the law, we have the best professionals on hand to give the fullest answer. And if we did not, we would find them for you through our contacts.",
      ],
    },
    // TODO: ¿hay una traductora judicial además de Peter Lazar? (pendiente de confirmar)
    items: [
      {
        name: "Alex Peral Badia",
        initials: "AP",
        role: "Psychologist",
        credential: "Reg. no. 30514",
      },
      {
        name: "Fernando Lara Plaza",
        initials: "FL",
        role: "Forensic expert witness",
        credential: "Reg. no. 1267 AIF",
      },
      {
        name: "Marina Palacios Salvado",
        initials: "MP",
        role: "Court agent",
        credential: "ICAP no. 547",
      },
      {
        name: "Peter Lazar",
        initials: "PL",
        role: "Interpreter",
      },
      {
        name: "Juan Carlos Alonso Álvarez",
        initials: "JA",
        role: "Notary",
      },
      {
        name: "Antonio Martínez Murillo",
        initials: "AM",
        role: "Building engineer",
        credential: "Reg. no. 13080 CATEB",
      },
      {
        name: "Ferran López",
        initials: "FL",
        role: "Forensic odontology expert witness",
        credential: "COEC no. 08003666",
      },
    ],
  },

  contact: {
    hero: {
      eyebrow: "Let's talk",
      title: "Contact",
      subtitle:
        "Abogados Marina 204 is a firm specialising in several branches of the law, committed to defending its clients' interests with rigour, closeness and transparency.",
    },
    channels: {
      eyebrow: "How to reach us",
      title: "Choose your preferred channel",
      description:
        "Tell us about your situation in whichever way suits you best. The first assessment of your case is free, with no obligation and in complete confidence.",
      items: [
        {
          icon: "phone",
          title: "Call the firm",
          description:
            "The most direct route. We will speak with you and, if your matter calls for it, arrange a meeting at the office.",
          detail: site.contact.phone,
          actionLabel: "Call now",
          href: site.contact.phoneHref,
        },
        {
          icon: "messageCircle",
          title: "Message us on WhatsApp",
          description:
            "If you would rather write, send us a message and attach the documents relating to your case.",
          detail: site.contact.whatsapp,
          actionLabel: "Open WhatsApp",
          href: site.contact.whatsappHref,
          external: true,
        },
        {
          icon: "mail",
          title: "Send an email",
          description:
            "Set out your situation in detail and we will reply with an initial assessment.",
          detail: site.contact.email,
          actionLabel: "Write an email",
          href: `mailto:${site.contact.email}`,
        },
      ],
    },
    details: {
      eyebrow: "Visit us",
      title: "Where to find us",
      description:
        "Our offices are on Calle Marina, in the Eixample district of Barcelona. We recommend booking an appointment by phone or WhatsApp.",
    },
  },
};

export default en;
