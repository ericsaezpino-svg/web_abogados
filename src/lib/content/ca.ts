import { site, teamPhotos } from "@/lib/content/site";
import type { SiteContent } from "@/lib/content/types";

const ca: SiteContent = {
  meta: {
    tagline: "Assessorament jurídic proper, rigorós i especialitzat",
    description:
      "Despatx d'advocats a l'Eixample de Barcelona. Dret civil, penal, laboral, de família, mercantil, administratiu, immobiliari i successori, amb 35 anys d'exercici.",
  },

  nav: [
    { label: "Inici", href: "/" },
    { label: "Qui som", href: "/quienes-somos" },
    { label: "Àrees jurídiques", href: "/areas-juridicas" },
    { label: "Col·laboradors", href: "/colaboradores" },
    { label: "Contacte", href: "/contacto" },
  ],

  legalLinks: [
    { label: "Avís legal", href: "/aviso-legal" },
    { label: "Política de privacitat", href: "/politica-de-privacidad" },
    { label: "Política de cookies", href: "/politica-de-cookies" },
  ],

  ui: {
    skipToContent: "Anar al contingut",
    homeLabel: `${site.name} | Inici`,
    mainNavLabel: "Navegació principal",
    mobileNavLabel: "Navegació principal (mòbil)",
    openMenu: "Obrir menú",
    closeMenu: "Tancar menú",
    languageLabel: "Idioma",
    contactCta: "Contacte",
    portraitAlt: "Retrat de",
    specialtiesLabel: "Àrees d'especialització",
  },

  contactInfo: {
    schedule: "24 hores, tots els dies de l'any",
    mapLabel: "Mapa amb la ubicació del despatx al carrer Marina, 204",
    addressLabel: "Adreça",
    phoneLabel: "Telèfon",
    emailLabel: "Correu electrònic",
    scheduleLabel: "Disponibilitat",
    map: {
      heading: "Mapa de la ubicació",
      notice:
        "El mapa el proporciona Google. Si el carregueu, la vostra adreça IP es comunicarà a Google, que hi podrà instal·lar galetes pròpies. Més informació a la nostra",
      action: "Mostrar el mapa",
      externalLabel: "Obrir a Google Maps",
      cookiesLabel: "política de galetes",
    },
  },

  footer: {
    blurb:
      "Servei jurídic integral i personalitzat per a particulars, autònoms i empreses.",
    navTitle: "Navegació",
    contactTitle: "Contacte",
    legalTitle: "Legal",
    rights: `© 2026 ${site.name}. Tots els drets reservats.`,
  },

  pageMeta: {
    home: {
      title: `${site.name} | Advocats a Barcelona`,
      description:
        "Despatx d'advocats a Barcelona. Assessorament jurídic proper, rigorós i especialitzat, amb l'experiència de 35 anys d'exercici.",
    },
    about: {
      title: "Qui som",
      description:
        "Conegueu l'equip d'Abogados Marina 204: tres advocats amb una trajectòria contrastada, units pel rigor, l'ètica i la dedicació.",
    },
    practiceAreas: {
      title: "Àrees jurídiques",
      description:
        "Dret civil, penal, laboral, de família, mercantil, administratiu, immobiliari i successori. Descobriu en quines matèries us podem assessorar.",
    },
    collaborators: {
      title: "Col·laboradors",
      description:
        "Xarxa de perits, procuradors, notaris i altres professionals que ens permet oferir un servei veritablement complet.",
    },
    contact: {
      title: "Contacte",
      description:
        "Carrer Marina, 204, local esquerra, 08013 Barcelona. Telèfon, WhatsApp i correu del despatx. Primera valoració sense compromís.",
    },
  },

  lawyers: [
    {
      name: "María del Carmen Pino Lucas",
      initials: "CP",
      role: "Advocada i API",
      photo: teamPhotos.carmenPino,
      education: ["Llicenciada en Dret per la Universitat de Barcelona."],
      specialties: [
        "Dret Penal",
        "Dret Matrimonial",
        "Dret Civil",
        "Menors",
        "Jurat",
        "Mediació civil i matrimonial",
        "API",
      ],
    },
    {
      name: "David López Homedes",
      initials: "DL",
      role: "Advocat",
      education: ["Llicenciat en Dret per la Universitat de Barcelona."],
      specialties: [
        "Dret Penal",
        "Dret Matrimonial",
        "Dret Civil",
        "Dret Laboral",
        "Jurat",
        "Mediació civil i matrimonial",
        "Estrangeria",
      ],
    },
    {
      name: "Lorena Vinent Guillem",
      initials: "LV",
      role: "Advocada",
      photo: teamPhotos.lorenaVinent,
      education: [
        "Graduada en Dret per la Universitat Autònoma de Barcelona.",
        "Màster d'Advocacia i Procura per la Universitat Oberta de Catalunya.",
      ],
      specialties: [
        "Dret Concursal (Llei de la Segona Oportunitat)",
        "Dret Mercantil",
        "Dret Penal",
        "Dret Matrimonial",
        "Dret Civil",
        "Estrangeria",
      ],
    },
  ],

  home: {
    hero: {
      eyebrow: "Despatx d'advocats · Barcelona",
      title: "Abogados Marina 204",
      subtitle:
        "Assessorament jurídic proper, rigorós i especialitzat. Defensem els vostres interessos amb l'experiència de 35 anys d'exercici.",
    },
    heroActions: {
      primary: "Contactar",
      secondary: "Àrees jurídiques",
    },
    intro: {
      eyebrow: "El despatx",
      title: "Un servei jurídic integral i personalitzat",
      paragraphs: [
        "Abogados Marina és un despatx de referència fundat amb la vocació d'oferir un servei jurídic integral, personalitzat i en el qual posem tots els nostres coneixements perquè sigui d'alta qualitat.",
        "Som un equip de tres advocats amb àmplia experiència en totes les branques del dret, cosa que ens permet donar una resposta eficaç a qualsevol necessitat legal.",
        "La nostra manera de treballar combina el rigor tècnic amb un tracte proper i transparent, perquè entenem que darrere de cada assumpte jurídic hi ha una persona.",
        "Des del nostre despatx acompanyem particulars, autònoms i empreses al llarg de tot el procés, amb solucions adaptades a cada situació i un seguiment de 24 hores tots els dies de l'any.",
      ],
    },
    sections: {
      eyebrow: "Us acompanyem",
      title: "Com us podem ajudar",
      description:
        "Tant si necessiteu assessorament puntual com una defensa integral, estem a la vostra disposició. Aquestes són les vies per conèixer-nos i treballar junts.",
      items: [
        {
          icon: "users",
          title: "Qui som",
          description: "Conegueu l'equip i la filosofia del despatx.",
          href: "/quienes-somos",
        },
        {
          icon: "scale",
          title: "Àrees jurídiques",
          description: "Descobriu en quines matèries us podem assessorar.",
          href: "/areas-juridicas",
        },
        {
          icon: "handshake",
          title: "Col·laboradors",
          description: "El nostre equip de professionals especialitzats.",
          href: "/colaboradores",
        },
        {
          icon: "mail",
          title: "Contacte",
          description: "Demaneu una primera consulta gratuïta i sense compromís.",
          href: "/contacto",
        },
      ],
    },
    team: {
      eyebrow: "L'equip",
      title: "Tres advocats, un mateix compromís",
      description:
        "Professionals amb una trajectòria contrastada, units pel rigor, l'ètica i la dedicació.",
      cta: "Conèixer el despatx",
    },
    cta: {
      eyebrow: "Contacte",
      title: "Som aquí per ajudar-vos",
      description:
        "Expliqueu-nos la vostra problemàtica i us oferim una primera valoració del cas, sense compromís i amb total confidencialitat.",
      action: "Demanar cita",
    },
  },

  about: {
    hero: {
      eyebrow: "El despatx",
      title: "Qui som",
      subtitle: "Un despatx d'advocats compromès amb els seus clients.",
    },
    intro: {
      eyebrow: "La nostra trajectòria",
      title: "Un despatx pensat des del client",
      paragraphs: [
        "Abogados Marina va néixer de la voluntat de crear un despatx diferent: un on el client no és un expedient més, sinó el centre de tot el que fem, buscant el millor per als seus interessos.",
        "Al llarg de la nostra trajectòria hem acompanyat milers de persones i empreses en els seus processos judicials i extrajudicials, sempre amb el mateix nivell d'exigència i compromís.",
      ],
      highlight: "«Darrere de cada assumpte jurídic hi ha una persona.»",
    },
    team: {
      eyebrow: "L'equip",
      title: "Les persones del despatx",
      description:
        "Tres advocats amb formació complementària que treballen de manera coordinada en cada assumpte.",
    },
    values: {
      eyebrow: "Compromís",
      title: "Els nostres valors",
      description:
        "Treballem de manera coordinada per donar resposta integral a qualsevol situació jurídica, per complexa que sigui.",
      items: [
        {
          icon: "eye",
          title: "Transparència",
          description:
            "Mantenim una comunicació clara i honesta en cada fase del procés. Estareu sempre informats de l'estat del vostre assumpte i de les opcions disponibles.",
        },
        {
          icon: "scale",
          title: "Rigor",
          description:
            "Analitzem cada cas amb profunditat i precisió, buscant l'estratègia més sòlida per a la defensa dels vostres interessos.",
        },
        {
          icon: "handshake",
          title: "Proximitat",
          description:
            "Tractem cada client de manera personalitzada. La vostra situació mereix atenció individual, no solucions genèriques.",
        },
        {
          icon: "lock",
          title: "Confidencialitat",
          description:
            "Tota la informació que compartiu amb nosaltres es tracta amb absoluta discreció i sota el més estricte secret professional.",
        },
      ],
    },
  },

  practiceAreas: {
    hero: {
      eyebrow: "Especialitats",
      title: "Àrees jurídiques",
      subtitle:
        "Abordem cada cas des de l'àrea jurídica que li correspon, amb professionals que coneixen en profunditat la legislació, la jurisprudència i la pràctica processal de cada matèria.",
    },
    intro: {
      eyebrow: "Les nostres matèries",
      title: "En què us podem assessorar",
      paragraphs: [
        "A continuació hi trobareu una descripció de les nostres principals àrees d'actuació. Si el vostre assumpte en combina diverses, el despatx treballa de manera coordinada per donar-vos una resposta única.",
      ],
    },
    items: [
      {
        icon: "scale",
        title: "Dret Civil",
        points: [
          "Redacció i revisió de contractes",
          "Reclamació de deutes",
          "Indemnitzacions per danys i perjudicis",
          "Conflictes entre particulars, per via judicial o extrajudicial",
        ],
      },
      {
        icon: "gavel",
        title: "Dret Penal",
        points: [
          "Defensa davant d'una acusació",
          "Acusació particular com a víctima",
          "Delictes de menors",
          "Delictes lleus",
          "Violència de gènere",
          "Procediments davant el Tribunal del Jurat",
        ],
      },
      {
        icon: "briefcase",
        title: "Dret Laboral",
        points: [
          "Acomiadaments improcedents i nuls",
          "Sancions disciplinàries",
          "Reclamació de salaris",
          "Assetjament laboral",
          "Negociació col·lectiva",
          "Procediments davant el Jutjat Social",
        ],
      },
      {
        icon: "users",
        title: "Dret de Família",
        points: [
          "Divorcis i separacions",
          "Convenis reguladors",
          "Custòdia i règim de visites",
          "Pensions d'aliments i compensatòries",
          "Modificació de mesures",
          "Filiació i incapacitació judicial",
        ],
      },
      {
        icon: "building",
        title: "Dret Mercantil",
        points: [
          "Constitució de societats",
          "Contractes mercantils",
          "Fusions i adquisicions",
          "Responsabilitat d'administradors",
          "Concurs de creditors (Llei de la Segona Oportunitat)",
          "Reclamacions entre empreses",
        ],
      },
      {
        icon: "landmark",
        title: "Dret Administratiu",
        points: [
          "Recursos contra sancions",
          "Impugnació d'actes administratius",
          "Responsabilitat patrimonial de l'Administració",
          "Contractació pública",
          "Procediments urbanístics",
        ],
      },
      {
        icon: "home",
        title: "Dret Immobiliari",
        points: [
          "Compravenda d'immobles",
          "Contractes d'arrendament",
          "Desnonaments",
          "Reclamacions a constructores i promotores",
          "Liquidació d'impostos",
          "Litigis sobre béns immobles",
        ],
      },
      {
        icon: "fileText",
        title: "Dret Successori",
        points: [
          "Redacció i execució de testaments",
          "Partició hereditària",
          "Impugnació de testaments",
          "Pactes successoris",
          "Liquidació d'impostos",
          "Acceptació o renúncia d'herència amb deutes",
        ],
      },
    ],
    cta: {
      eyebrow: "No hi trobeu el vostre cas?",
      title: "Expliqueu-nos la vostra situació",
      description:
        "No us amoïneu. Contacteu amb nosaltres i analitzarem el vostre cas sense compromís. Si no som els més indicats, us orientarem cap al professional adequat.",
      action: "Contactar",
    },
  },

  collaborators: {
    hero: {
      eyebrow: "Xarxa professional",
      title: "Col·laboradors",
      subtitle:
        "Tots els nostres col·laboradors comparteixen la nostra filosofia de treball: rigor, discreció i orientació al client.",
    },
    intro: {
      eyebrow: "Treball en xarxa",
      title: "Un servei veritablement complet",
      paragraphs: [
        "A Abogados Marina hem construït al llarg dels anys una xarxa de col·laboradors especialitzats que ens permet oferir un servei veritablement complet. Quan un assumpte requereix coneixements tècnics específics, ja sigui en l'àmbit de la pericial, la fiscalitat, la gestió o qualsevol altra disciplina complementària al dret, comptem amb els millors professionals per donar la resposta més completa. I si no els tinguéssim, els aconseguiríem per a vosaltres gràcies als nostres contactes.",
      ],
    },
    // TODO: falta afegir la traductora judicial (nom pendent de confirmar)
    items: [
      {
        name: "Alex Peral Badia",
        initials: "AP",
        role: "Psicòleg",
        credential: "Col·legiat núm. 30514",
      },
      {
        name: "Fernando Lara Plaza",
        initials: "FL",
        role: "Perit judicial criminalista",
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
        role: "Notari",
      },
      {
        name: "Antonio Martínez Murillo",
        initials: "AM",
        role: "Arquitecte tècnic",
        credential: "Col. núm. 13080 CATEB",
      },
      {
        name: "Ferran López",
        initials: "FL",
        role: "Perit forense odontòleg",
        credential: "COEC núm. 08003666",
      },
    ],
  },

  contact: {
    hero: {
      eyebrow: "Parlem-ne",
      title: "Contacte",
      subtitle:
        "Abogados Marina és un despatx especialitzat en diferents branques del dret, compromès amb la defensa dels interessos dels seus clients amb rigor, proximitat i transparència.",
    },
    channels: {
      eyebrow: "Com contactar-nos",
      title: "Trieu el canal que preferiu",
      description:
        "Expliqueu-nos la vostra problemàtica per la via que us resulti més còmoda. La primera valoració del cas és gratuïta, sense compromís i amb total confidencialitat.",
      items: [
        {
          icon: "phone",
          title: "Trucar al despatx",
          description:
            "La via més directa. Us atenem i, si l'assumpte ho requereix, concertem una visita al despatx.",
          detail: site.contact.phone,
          actionLabel: "Trucar ara",
          href: site.contact.phoneHref,
        },
        {
          icon: "messageCircle",
          title: "Contactar per WhatsApp",
          description:
            "Si preferiu escriure'ns, podeu enviar-nos un missatge i adjuntar-hi la documentació del vostre cas.",
          detail: site.contact.whatsapp,
          actionLabel: "Obrir WhatsApp",
          href: site.contact.whatsappHref,
          external: true,
        },
        {
          icon: "mail",
          title: "Enviar un correu",
          description:
            "Expliqueu-nos la vostra situació amb detall i us respondrem amb una primera orientació.",
          detail: site.contact.email,
          actionLabel: "Escriure correu",
          href: `mailto:${site.contact.email}`,
        },
      ],
    },
    details: {
      eyebrow: "Visiteu-nos",
      title: "On ens trobareu",
      description:
        "El nostre despatx és al carrer Marina, a l'Eixample de Barcelona. Us recomanem concertar cita prèvia per telèfon o WhatsApp.",
    },
  },
};

export default ca;
