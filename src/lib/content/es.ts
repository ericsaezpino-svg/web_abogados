import { site, teamPhotos } from "@/lib/content/site";
import type { SiteContent } from "@/lib/content/types";

const es: SiteContent = {
  meta: {
    tagline: "Asesoramiento jurídico cercano, riguroso y especializado",
    description:
      "Despacho de abogados en el Eixample de Barcelona. Derecho civil, penal, laboral, de familia, mercantil, administrativo, inmobiliario y sucesorio, con 35 años de ejercicio.",
  },

  nav: [
    { label: "Inicio", href: "/" },
    { label: "Quiénes somos", href: "/quienes-somos" },
    { label: "Áreas jurídicas", href: "/areas-juridicas" },
    { label: "Colaboradores", href: "/colaboradores" },
    { label: "Contacto", href: "/contacto" },
  ],

  legalLinks: [
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Política de privacidad", href: "/politica-de-privacidad" },
    { label: "Política de cookies", href: "/politica-de-cookies" },
  ],

  ui: {
    skipToContent: "Saltar al contenido",
    homeLabel: `${site.name} | Inicio`,
    mainNavLabel: "Navegación principal",
    mobileNavLabel: "Navegación principal (móvil)",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    languageLabel: "Idioma",
    contactCta: "Contacto",
    portraitAlt: "Retrato de",
    specialtiesLabel: "Áreas de especialización",
  },

  contactInfo: {
    schedule: "24 horas, todos los días del año",
    mapLabel: "Mapa con la ubicación del despacho en la calle Marina, 204",
    addressLabel: "Dirección",
    phoneLabel: "Teléfono",
    emailLabel: "Email",
    scheduleLabel: "Disponibilidad",
    map: {
      heading: "Mapa de la ubicación",
      notice:
        "El mapa lo proporciona Google. Si lo carga, su dirección IP se comunicará a Google, que podrá instalar cookies propias. Más información en nuestra",
      action: "Mostrar el mapa",
      externalLabel: "Abrir en Google Maps",
      cookiesLabel: "política de cookies",
    },
  },

  footer: {
    blurb:
      "Servicio jurídico integral y personalizado para particulares, autónomos y empresas.",
    navTitle: "Navegación",
    contactTitle: "Contacto",
    legalTitle: "Legal",
    rights: `© 2026 ${site.name}. Todos los derechos reservados.`,
  },

  pageMeta: {
    home: {
      title: `${site.name} | Abogados en Barcelona`,
      description:
        "Despacho de abogados en Barcelona. Asesoramiento jurídico cercano, riguroso y especializado, con la experiencia de 35 años de ejercicio.",
    },
    about: {
      title: "Quiénes somos",
      description:
        "Conozca al equipo de Abogados Marina 204: tres abogados con trayectoria contrastada, unidos por el rigor, la ética y la dedicación.",
    },
    practiceAreas: {
      title: "Áreas jurídicas",
      description:
        "Derecho civil, penal, laboral, de familia, mercantil, administrativo, inmobiliario y sucesorio. Descubra en qué materias podemos asesorarle.",
    },
    collaborators: {
      title: "Colaboradores",
      description:
        "Red de peritos, procuradores, notarios y otros profesionales que nos permite ofrecer un servicio verdaderamente completo.",
    },
    contact: {
      title: "Contacto",
      description:
        "Calle Marina, 204, local izquierda, 08013 Barcelona. Teléfono, WhatsApp y email del despacho. Primera valoración sin compromiso.",
    },
  },

  lawyers: [
    {
      name: "María del Carmen Pino Lucas",
      initials: "CP",
      role: "Abogada y API",
      photo: teamPhotos.carmenPino,
      education: ["Licenciada en Derecho por la Universidad de Barcelona."],
      specialties: [
        "Derecho Penal",
        "Derecho Matrimonial",
        "Derecho Civil",
        "Mediación civil y matrimonial",
        "API",
      ],
    },
    {
      name: "David López Homedes",
      initials: "DL",
      role: "Abogado",
      photo: teamPhotos.davidLopez,
      education: ["Licenciado en Derecho por la Universidad de Barcelona."],
      specialties: [
        "Derecho Penal",
        "Derecho Matrimonial",
        "Derecho Civil",
        "Derecho Laboral",
        "Mediación civil y matrimonial",
        "Extranjería",
      ],
    },
    {
      name: "Lorena Vinent Guillem",
      initials: "LV",
      role: "Abogada",
      photo: teamPhotos.lorenaVinent,
      education: [
        "Graduada en Derecho por la Universidad Autónoma de Barcelona.",
        "Máster de Abogacía y Procura por la Universitat Oberta de Catalunya.",
      ],
      specialties: [
        "Derecho Mercantil",
        "Derecho Penal",
        "Derecho Matrimonial",
        "Derecho Civil",
        "Extranjería",
      ],
    },
  ],

  home: {
    hero: {
      eyebrow: "Despacho de abogados · Barcelona",
      title: "Abogados Marina 204",
      subtitle:
        "Asesoramiento jurídico cercano, riguroso y especializado. Defendemos sus intereses con la experiencia de 35 años de ejercicio.",
    },
    heroActions: {
      primary: "Contactar",
      secondary: "Áreas jurídicas",
    },
    intro: {
      eyebrow: "El despacho",
      title: "Un servicio jurídico integral y personalizado",
      paragraphs: [
        "Abogados Marina 204 es un despacho de referencia fundado con la vocación de ofrecer un servicio jurídico integral, personalizado y en el que ponemos todos nuestros conocimientos para que sea de alta calidad.",
        "Somos un equipo de tres abogados con amplia experiencia en todas las ramas del derecho, lo que nos permite dar una respuesta eficaz a cualquier necesidad legal.",
        "Nuestra forma de trabajar combina el rigor técnico con un trato cercano y transparente, porque entendemos que detrás de cada asunto jurídico hay una persona.",
        "Desde nuestro despacho, acompañamos a particulares, autónomos y empresas a lo largo de todo el proceso, con soluciones adaptadas a cada situación y un seguimiento de 24 horas todos los días del año.",
      ],
    },
    sections: {
      eyebrow: "Le acompañamos",
      title: "Cómo podemos ayudarle",
      description:
        "Tanto si necesita asesoramiento puntual como una defensa integral, estamos a su disposición. Estas son las vías para conocernos y trabajar juntos.",
      items: [
        {
          icon: "users",
          title: "Quiénes somos",
          description: "Conozca al equipo y la filosofía del despacho.",
          href: "/quienes-somos",
        },
        {
          icon: "scale",
          title: "Áreas jurídicas",
          description: "Descubra en qué materias podemos asesorarle.",
          href: "/areas-juridicas",
        },
        {
          icon: "handshake",
          title: "Colaboradores",
          description: "Nuestro equipo de profesionales especializados.",
          href: "/colaboradores",
        },
        {
          icon: "mail",
          title: "Contacto",
          description: "Solicite una primera consulta gratuita y sin compromiso.",
          href: "/contacto",
        },
      ],
    },
    team: {
      eyebrow: "El equipo",
      title: "Tres abogados, un mismo compromiso",
      description:
        "Profesionales con trayectoria contrastada, unidos por el rigor, la ética y la dedicación.",
      cta: "Conocer el despacho",
    },
    cta: {
      eyebrow: "Contacto",
      title: "Estamos aquí para ayudarle",
      description:
        "Explíquenos su problemática y le ofrecemos una primera valoración de su caso, sin compromiso y con total confidencialidad.",
      action: "Solicitar cita",
    },
  },

  about: {
    hero: {
      eyebrow: "El despacho",
      title: "Quiénes somos",
      subtitle: "Un despacho de abogados comprometido con sus clientes.",
    },
    intro: {
      eyebrow: "Nuestra trayectoria",
      title: "Un despacho pensado desde el cliente",
      paragraphs: [
        "Abogados Marina 204 nació de la voluntad de crear un despacho diferente: uno donde el cliente no es un expediente más, sino el centro de todo lo que hacemos, buscando lo mejor para sus intereses.",
        "A lo largo de nuestra trayectoria, hemos acompañado a miles de personas y empresas en sus procesos judiciales y extrajudiciales, siempre con el mismo nivel de exigencia y compromiso.",
      ],
      highlight: "«Detrás de cada asunto jurídico hay una persona.»",
    },
    team: {
      eyebrow: "El equipo",
      title: "Las personas del despacho",
      description:
        "Tres abogados con formación complementaria que trabajan de forma coordinada en cada asunto.",
    },
    values: {
      eyebrow: "Compromiso",
      title: "Nuestros valores",
      description:
        "Trabajamos de forma coordinada para dar respuesta integral a cualquier situación jurídica, por compleja que sea.",
      items: [
        {
          icon: "eye",
          title: "Transparencia",
          description:
            "Mantenemos una comunicación clara y honesta en cada fase del proceso. Usted estará siempre informado del estado de su asunto y de las opciones disponibles.",
        },
        {
          icon: "scale",
          title: "Rigor",
          description:
            "Analizamos cada caso con profundidad y precisión, buscando la estrategia más sólida para la defensa de sus intereses.",
        },
        {
          icon: "handshake",
          title: "Cercanía",
          description:
            "Tratamos a cada cliente de forma personalizada. Su situación merece atención individual, no soluciones genéricas.",
        },
        {
          icon: "lock",
          title: "Confidencialidad",
          description:
            "Toda la información que comparte con nosotros se trata con absoluta discreción y bajo el más estricto secreto profesional.",
        },
      ],
    },
  },

  practiceAreas: {
    hero: {
      eyebrow: "Especialidades",
      title: "Áreas jurídicas",
      subtitle:
        "Abordamos cada caso desde el área jurídica que le corresponde, con profesionales que conocen en profundidad la legislación, la jurisprudencia y la práctica procesal en cada materia.",
    },
    intro: {
      eyebrow: "Nuestras materias",
      title: "En qué podemos asesorarle",
      paragraphs: [
        "A continuación encontrará una descripción de nuestras principales áreas de actuación. Si su asunto combina varias de ellas, el despacho trabaja de forma coordinada para darle una respuesta única.",
      ],
    },
    items: [
      {
        icon: "scale",
        title: "Derecho Civil",
        points: [
          "Redacción y revisión de contratos",
          "Reclamación de deudas",
          "Indemnizaciones por daños y perjuicios",
          "Conflictos entre particulares, por vía judicial o extrajudicial",
        ],
      },
      {
        icon: "gavel",
        title: "Derecho Penal",
        points: [
          "Defensa ante una acusación",
          "Acusación particular como víctima",
          "Delitos de menores",
          "Delitos leves",
          "Violencia de género (hombre y mujer)",
          "Procedimientos ante el Tribunal del Jurado",
        ],
      },
      {
        icon: "briefcase",
        title: "Derecho Laboral",
        points: [
          "Despidos improcedentes y nulos",
          "Sanciones disciplinarias",
          "Reclamación de salarios",
          "Acoso laboral",
          "Negociación colectiva",
          "Pensiones de jubilación e incapacidades laborales",
          "Procedimientos ante el Juzgado de lo Social",
        ],
      },
      {
        icon: "users",
        title: "Derecho de Familia",
        points: [
          "Divorcios y separaciones",
          "Convenios reguladores",
          "Custodia y régimen de visitas",
          "Pensiones de alimentos y compensatorias",
          "Modificación de medidas",
          "Filiación y medidas de apoyo a personas con discapacidad",
        ],
      },
      {
        icon: "building",
        title: "Derecho Mercantil",
        points: [
          "Constitución de sociedades",
          "Contratos mercantiles",
          "Fusiones y adquisiciones",
          "Responsabilidad de administradores",
          "Concurso de acreedores (Ley de la Segunda Oportunidad)",
          "Reclamaciones entre empresas",
        ],
      },
      {
        icon: "landmark",
        title: "Derecho Administrativo",
        points: [
          "Recursos contra sanciones",
          "Impugnación de actos administrativos",
          "Responsabilidad patrimonial de la Administración",
          "Contratación pública",
          "Procedimientos urbanísticos",
        ],
      },
      {
        icon: "home",
        title: "Derecho Inmobiliario",
        points: [
          "Compraventa de inmuebles",
          "Contratos de arrendamiento",
          "Comunidades de propietarios",
          "Desahucios",
          "Reclamaciones a constructoras y promotoras",
          "Obras irregulares y defectos constructivos",
          "Liquidación de impuestos",
          "Litigios sobre bienes inmuebles",
        ],
      },
      {
        icon: "fileText",
        title: "Derecho Sucesorio",
        points: [
          "Redacción y ejecución de testamentos",
          "Partición hereditaria",
          "Impugnación de testamentos",
          "Pactos sucesorios",
          "Liquidación de impuestos",
          "Aceptación o renuncia de herencia con deudas",
        ],
      },
      {
        icon: "globe",
        title: "Derecho de Extranjería",
        points: [
          "Permisos de residencia y trabajo",
          "Reagrupación familiar",
          "Renovación y modificación de permisos de residencia y trabajo",
          "Procedimientos de expulsión",
          "Nacionalidad española",
        ],
      },
    ],
    cta: {
      eyebrow: "¿No encuentra su caso?",
      title: "Cuéntenos su situación",
      description:
        "No se preocupe. Contáctenos y analizaremos su caso sin compromiso. Si no somos los más indicados, le orientaremos hacia el profesional adecuado.",
      action: "Contactar",
    },
  },

  collaborators: {
    hero: {
      eyebrow: "Red profesional",
      title: "Colaboradores",
      subtitle:
        "Todos nuestros colaboradores comparten nuestra filosofía de trabajo: rigor, discreción y orientación al cliente.",
    },
    intro: {
      eyebrow: "Trabajo en red",
      title: "Un servicio verdaderamente completo",
      paragraphs: [
        "En Abogados Marina 204 hemos construido a lo largo de los años una red de colaboradores especializados que nos permite ofrecer un servicio verdaderamente completo. Cuando un asunto requiere conocimientos técnicos específicos, ya sea en el ámbito de la pericial, la fiscalidad, la gestión o cualquier otra disciplina complementaria al derecho, contamos con los mejores profesionales para dar la respuesta más completa. Y si no los tuviéramos, los conseguiríamos para usted gracias a nuestros contactos.",
      ],
    },
    // TODO: ¿hay una traductora judicial además de Peter Lazar? (pendiente de confirmar)
    items: [
      {
        name: "Alex Peral Badia",
        initials: "AP",
        role: "Psicólogo",
        credential: "Colegiado núm. 30514",
      },
      {
        name: "Fernando Lara Plaza",
        initials: "FL",
        role: "Perito judicial criminalista",
        credential: "Col. núm. 1267 AIF",
      },
      {
        name: "Marina Palacios Salvado",
        initials: "MP",
        role: "Procuradora",
        credential: "ICAP núm. 547",
      },
      {
        name: "Peter Lazar",
        initials: "PL",
        role: "Intérprete",
      },
      {
        name: "Juan Carlos Alonso Álvarez",
        initials: "JA",
        role: "Notario",
      },
      {
        name: "Antonio Martínez Murillo",
        initials: "AM",
        role: "Arquitecto técnico",
        credential: "Col. núm. 13080 CATEB",
      },
      {
        name: "Ferran López",
        initials: "FL",
        role: "Perito forense odontólogo",
        credential: "COEC núm. 08003666",
      },
    ],
  },

  contact: {
    hero: {
      eyebrow: "Hablemos",
      title: "Contacto",
      subtitle:
        "Abogados Marina 204 es un despacho especializado en diferentes ramas del derecho, comprometido con la defensa de los intereses de sus clientes con rigor, cercanía y transparencia.",
    },
    channels: {
      eyebrow: "Cómo contactarnos",
      title: "Elija el canal que prefiera",
      description:
        "Explíquenos su problemática por la vía que le resulte más cómoda. La primera valoración de su caso es gratuita, sin compromiso y con total confidencialidad.",
      items: [
        {
          icon: "phone",
          title: "Llamar al despacho",
          description:
            "La vía más directa. Le atendemos y, si su asunto lo requiere, concertamos una visita en el despacho.",
          detail: site.contact.phone,
          actionLabel: "Llamar ahora",
          href: site.contact.phoneHref,
        },
        {
          icon: "messageCircle",
          title: "Contactar por WhatsApp",
          description:
            "Si prefiere escribirnos, puede enviarnos un mensaje y adjuntar la documentación de su caso.",
          detail: site.contact.whatsapp,
          actionLabel: "Abrir WhatsApp",
          href: site.contact.whatsappHref,
          external: true,
        },
        {
          icon: "mail",
          title: "Enviar un correo",
          description:
            "Cuéntenos su situación con detalle y le responderemos con una primera orientación.",
          detail: site.contact.email,
          actionLabel: "Escribir email",
          href: `mailto:${site.contact.email}`,
        },
      ],
    },
    details: {
      eyebrow: "Visítenos",
      title: "Dónde encontrarnos",
      description:
        "Nuestro despacho está en la calle Marina, en el Eixample de Barcelona. Le recomendamos concertar cita previa por teléfono o WhatsApp.",
    },
  },
};

export default es;
