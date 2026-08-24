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
    homeLabel: `${site.name} — Inicio`,
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
        "Menores",
        "Jurado",
        "Mediación civil y matrimonial",
        "API",
      ],
    },
    {
      name: "David López Homedes",
      initials: "DL",
      role: "Abogado",
      education: ["Licenciado en Derecho por la Universidad de Barcelona."],
      specialties: [
        "Derecho Penal",
        "Derecho Matrimonial",
        "Derecho Civil",
        "Derecho Laboral",
        "Jurado",
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
        "Derecho Concursal (Ley de la Segunda Oportunidad)",
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
        "Abogados Marina es un despacho de referencia fundado con la vocación de ofrecer un servicio jurídico integral, personalizado y en el que ponemos todos nuestros conocimientos para que sea de alta calidad.",
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
        "Abogados Marina nació de la voluntad de crear un despacho diferente: uno donde el cliente no es un expediente más, sino el centro de todo lo que hacemos, buscando lo mejor para sus intereses.",
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
        description:
          "El Derecho Civil regula las relaciones entre particulares en ámbitos tan cotidianos como los contratos, la propiedad, las obligaciones o la responsabilidad extracontractual. Asesoramos en la redacción y revisión de contratos, reclamaciones de deudas, indemnizaciones por daños y perjuicios, y cualquier conflicto entre particulares que requiera solución judicial o extrajudicial.",
      },
      {
        icon: "gavel",
        title: "Derecho Penal",
        description:
          "Tanto si necesita defensa ante una acusación como ejercer la acusación particular como víctima de un delito, le acompañamos en todas las fases del proceso penal. Trabajamos con rigor y confidencialidad en delitos de cualquier naturaleza: menores, delitos leves, violencia de género y jurado.",
      },
      {
        icon: "briefcase",
        title: "Derecho Laboral",
        description:
          "Defendemos los derechos de trabajadores y empresas en el ámbito de las relaciones laborales: despidos improcedentes, nulidad de despido, sanciones disciplinarias, reclamaciones de salarios, acoso laboral y negociación colectiva. Le asesoramos tanto en fase de negociación como ante el Juzgado de lo Social.",
      },
      {
        icon: "users",
        title: "Derecho de Familia",
        description:
          "Los asuntos de familia requieren sensibilidad, discreción, experiencia y, sobre todo, saber escuchar. Gestionamos divorcios y separaciones, convenios reguladores, custodias y regímenes de visitas, pensiones de alimentos y compensatorias, modificación de medidas, procedimientos de filiación e incapacitaciones judiciales. Priorizamos soluciones pactadas cuando es posible y defendemos sus intereses en juicio cuando es necesario.",
      },
      {
        icon: "building",
        title: "Derecho Mercantil",
        description:
          "Asesoramos a empresas y autónomos en todas las cuestiones jurídicas relacionadas con su actividad: constitución de sociedades, redacción de contratos mercantiles, fusiones y adquisiciones, responsabilidad de administradores, concurso de acreedores (Ley de la Segunda Oportunidad) y reclamaciones entre empresas. Nuestro objetivo es proteger su negocio y anticipar los riesgos legales.",
      },
      {
        icon: "landmark",
        title: "Derecho Administrativo",
        description:
          "Le ayudamos a relacionarse con la Administración en igualdad de condiciones: recursos contra sanciones, impugnación de actos administrativos, reclamaciones de responsabilidad patrimonial, contratación pública y procedimientos urbanísticos. Conocemos los plazos y las vías de recurso para defender sus derechos frente al poder público.",
      },
      {
        icon: "home",
        title: "Derecho Inmobiliario",
        description:
          "La compraventa de inmuebles, los arrendamientos, las comunidades de propietarios o las obras irregulares pueden generar conflictos complejos. Le asistimos en transacciones inmobiliarias, contratos de arrendamiento, desahucios, reclamaciones a constructoras y promotoras, liquidación de impuestos y cualquier litigio relacionado con bienes inmuebles.",
      },
      {
        icon: "fileText",
        title: "Derecho Sucesorio",
        description:
          "Planificar su herencia o gestionar a tiempo un proceso sucesorio evita conflictos familiares y pérdidas económicas innecesarias. Le asesoramos en la redacción y ejecución de testamentos, particiones hereditarias, impugnación de testamentos, pactos sucesorios, liquidación de impuestos y aceptación o renuncia de herencias con deudas. Le acompañamos en todos los trámites necesarios, también ante notario, para que nunca se sienta solo.",
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
        "En Abogados Marina hemos construido a lo largo de los años una red de colaboradores especializados que nos permite ofrecer un servicio verdaderamente completo. Cuando un asunto requiere conocimientos técnicos específicos, ya sea en el ámbito de la pericial, la fiscalidad, la gestión o cualquier otra disciplina complementaria al derecho, contamos con los mejores profesionales para dar la respuesta más completa. Y si no los tuviéramos, los conseguiríamos para usted gracias a nuestros contactos.",
      ],
    },
    // TODO: falta añadir a la traductora judicial (nombre pendiente de confirmar)
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
        "Abogados Marina es un despacho especializado en diferentes ramas del derecho, comprometido con la defensa de los intereses de sus clientes con rigor, cercanía y transparencia.",
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
