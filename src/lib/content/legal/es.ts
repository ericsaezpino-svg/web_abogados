import { legalEntity, site } from "@/lib/content/site";
import type { LegalContent } from "@/lib/content/legal/types";

const UPDATED = "Última actualización: 24 de agosto de 2026";
const TOC = "En esta página";

const es: LegalContent = {
  notice: {
    path: "/aviso-legal",
    eyebrow: "Información legal",
    title: "Aviso legal",
    subtitle:
      "Datos identificativos del titular de este sitio web y condiciones de uso, conforme al artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI-CE).",
    meta: {
      title: "Aviso legal",
      description:
        "Datos identificativos del titular de abogadosmarina204, condiciones de uso, propiedad intelectual y normativa profesional aplicable.",
    },
    updated: UPDATED,
    tocTitle: TOC,
    sections: [
      {
        id: "titular",
        title: "Datos identificativos",
        blocks: [
          {
            kind: "paragraph",
            text: "Este sitio web corresponde al despacho profesional que se identifica a continuación, integrado por tres abogados que ejercen por cuenta propia y están colegiados en el colegio que se indica en el apartado 7.",
          },
          {
            kind: "definitions",
            items: [
              { term: "Nombre comercial", value: site.name },
              { term: "Domicilio profesional", value: site.contact.address },
              { term: "Teléfono", value: site.contact.phone },
              { term: "Correo electrónico", value: site.contact.email },
            ],
          },
        ],
      },
      {
        id: "objeto",
        title: "Objeto y aceptación",
        blocks: [
          {
            kind: "paragraph",
            text: "El presente aviso legal regula el acceso y la utilización de este sitio web, que el titular pone a disposición de los usuarios de Internet con una finalidad exclusivamente informativa y de presentación de los servicios profesionales del despacho.",
          },
          {
            kind: "paragraph",
            text: "La navegación por el sitio atribuye la condición de usuario e implica la aceptación plena de todas las cláusulas de este aviso legal. Si no está conforme con alguna de ellas, le rogamos que no utilice el sitio.",
          },
          {
            kind: "paragraph",
            text: "El titular se reserva el derecho a modificar en cualquier momento la presentación, la configuración y los contenidos del sitio, así como las condiciones recogidas en este aviso.",
          },
        ],
      },
      {
        id: "no-asesoramiento",
        title: "Los contenidos no constituyen asesoramiento jurídico",
        blocks: [
          {
            kind: "callout",
            text: "La información publicada en este sitio tiene carácter general y divulgativo. No constituye asesoramiento jurídico ni sustituye el análisis individualizado de un caso concreto.",
          },
          {
            kind: "paragraph",
            text: "El acceso al sitio, la lectura de sus contenidos o el envío de una comunicación a través de los canales indicados no generan por sí solos una relación profesional entre el usuario y el despacho. Dicha relación únicamente nace con la aceptación expresa del encargo por ambas partes.",
          },
          {
            kind: "paragraph",
            text: "Le recomendamos que no nos remita documentación confidencial ni información sensible sobre su asunto antes de que exista un encargo aceptado. En particular, tenga en cuenta que los plazos de caducidad y prescripción corren con independencia de que usted haya escrito al despacho: el envío de un mensaje no interrumpe ningún plazo.",
          },
        ],
      },
      {
        id: "propiedad-intelectual",
        title: "Propiedad intelectual e industrial",
        blocks: [
          {
            kind: "paragraph",
            text: "Todos los contenidos de este sitio (textos, fotografías, marcas, logotipos, iconos, diseño gráfico, código fuente y estructura de navegación) son titularidad del despacho o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial.",
          },
          {
            kind: "paragraph",
            text: "Queda prohibida su reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación sin autorización expresa y por escrito del titular. Se permite la visualización e impresión de los contenidos para uso personal y privado.",
          },
          {
            kind: "paragraph",
            text: "Las fotografías del equipo publicadas en la sección «Quiénes somos» se utilizan con el consentimiento de las personas retratadas y no pueden reutilizarse fuera de este sitio.",
          },
        ],
      },
      {
        id: "responsabilidad",
        title: "Exclusión de responsabilidad",
        blocks: [
          {
            kind: "paragraph",
            text: "El titular procura que la información publicada sea exacta y esté actualizada, pero no garantiza la ausencia de errores ni la vigencia permanente de los contenidos, especialmente en un ámbito, el jurídico, sujeto a cambios normativos y jurisprudenciales frecuentes.",
          },
          {
            kind: "list",
            items: [
              "El titular no responde de los daños derivados del uso que el usuario haga de la información publicada, ni de las decisiones que adopte basándose únicamente en ella.",
              "El titular no garantiza la disponibilidad ininterrumpida del sitio ni la ausencia de virus u otros elementos lesivos, si bien adopta medidas razonables para evitarlos.",
              "El titular no se responsabiliza del contenido de los sitios de terceros a los que se pueda acceder mediante enlaces desde esta web.",
            ],
          },
        ],
      },
      {
        id: "enlaces",
        title: "Enlaces y contenidos de terceros",
        blocks: [
          {
            kind: "paragraph",
            text: "Este sitio incluye un mapa de Google Maps en la página de contacto, que solo se carga si el usuario lo solicita expresamente pulsando el botón correspondiente. Puede consultar el detalle de este tratamiento en la política de cookies.",
          },
          {
            kind: "paragraph",
            text: "Los enlaces a sitios de terceros se ofrecen únicamente para facilitar el acceso a información complementaria. Su inclusión no implica que el titular apruebe, respalde o comparta sus contenidos.",
          },
        ],
      },
      {
        id: "normativa-profesional",
        title: "Normativa profesional aplicable",
        blocks: [
          {
            kind: "paragraph",
            text: `Los profesionales del despacho están colegiados en el ${legalEntity.bar} y ejercen la abogacía sujetos a la normativa siguiente:`,
          },
          {
            kind: "list",
            items: [
              "Estatuto General de la Abogacía Española, aprobado por el Real Decreto 135/2021, de 2 de marzo.",
              "Código Deontológico de la Abogacía Española.",
              "Ley 2/2007, de 15 de marzo, de sociedades profesionales, en lo que resulte de aplicación.",
              "Normativa colegial del colegio de adscripción, consultable en su sitio web.",
            ],
          },
          {
            kind: "paragraph",
            text: "Los profesionales del despacho cuentan con el seguro de responsabilidad civil profesional exigido por la normativa colegial.",
          },
        ],
      },
      {
        id: "ley-aplicable",
        title: "Legislación aplicable y jurisdicción",
        blocks: [
          {
            kind: "paragraph",
            text: "Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia derivada del acceso o uso del sitio web, las partes se someten a los juzgados y tribunales de Barcelona, salvo que la normativa aplicable en materia de consumidores y usuarios establezca un fuero distinto de carácter imperativo.",
          },
        ],
      },
    ],
  },

  privacy: {
    path: "/politica-de-privacidad",
    eyebrow: "Protección de datos",
    title: "Política de privacidad",
    subtitle:
      "Cómo tratamos sus datos personales cuando contacta con el despacho, con qué finalidad, durante cuánto tiempo y qué derechos puede ejercer, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).",
    meta: {
      title: "Política de privacidad",
      description:
        "Información sobre el tratamiento de datos personales en abogadosmarina204: responsable, finalidades, base jurídica, plazos de conservación y derechos.",
    },
    updated: UPDATED,
    tocTitle: TOC,
    sections: [
      {
        id: "sin-formulario",
        title: "Este sitio web no recoge datos por sí mismo",
        blocks: [
          {
            kind: "callout",
            text: "Esta web es puramente informativa: no tiene formularios, no exige registro, no utiliza cookies propias ni herramientas de analítica, y no elabora perfiles de sus visitantes.",
          },
          {
            kind: "paragraph",
            text: "Puede navegar por todas sus páginas sin facilitar ningún dato personal. El tratamiento de datos solo comienza cuando usted decide ponerse en contacto con el despacho por alguno de los canales que ofrecemos.",
          },
        ],
      },
      {
        id: "datos",
        title: "Qué datos tratamos y de dónde proceden",
        blocks: [
          {
            kind: "paragraph",
            text: "Tratamos únicamente los datos que usted nos facilita voluntariamente al contactar con nosotros, así como los que resulten necesarios para el asunto que nos encargue:",
          },
          {
            kind: "list",
            items: [
              "Datos identificativos y de contacto: nombre y apellidos, teléfono, dirección de correo electrónico y, en su caso, domicilio.",
              "El contenido de su consulta y la documentación que decida remitirnos.",
              "Datos económicos y de facturación, si llega a formalizarse un encargo profesional.",
              "Datos técnicos que registra automáticamente el servidor donde se aloja la web (dirección IP, fecha y hora de acceso, páginas solicitadas), con la única finalidad de mantener el servicio y su seguridad.",
            ],
          },
          {
            kind: "callout",
            text: "Por la naturaleza de nuestro trabajo, su consulta puede contener datos de categorías especiales (salud, vida sexual, ideología, afiliación sindical) o relativos a infracciones y condenas penales. Los trataremos con la máxima reserva y únicamente en la medida necesaria para su defensa.",
          },
        ],
      },
      {
        id: "finalidades",
        title: "Para qué tratamos sus datos y con qué base jurídica",
        blocks: [
          {
            kind: "table",
            head: ["Finalidad", "Base jurídica"],
            rows: [
              [
                "Atender su consulta y realizar una primera valoración del asunto.",
                "Aplicación de medidas precontractuales a petición del interesado (art. 6.1.b RGPD).",
              ],
              [
                "Prestar los servicios profesionales encargados y gestionar la relación con el cliente.",
                "Ejecución del contrato de arrendamiento de servicios (art. 6.1.b RGPD).",
              ],
              [
                "Ejercer el derecho de defensa, incluido el tratamiento de datos sensibles y de infracciones penales.",
                "Formulación, ejercicio o defensa de reclamaciones (arts. 9.2.f y 10 RGPD).",
              ],
              [
                "Cumplir obligaciones legales: fiscales, contables y de prevención del blanqueo de capitales.",
                "Cumplimiento de una obligación legal (art. 6.1.c RGPD).",
              ],
              [
                "Mantener la seguridad y el correcto funcionamiento del sitio web.",
                "Interés legítimo del responsable (art. 6.1.f RGPD).",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "No tomamos decisiones automatizadas ni elaboramos perfiles con sus datos. Tampoco los utilizamos para enviarle comunicaciones comerciales.",
          },
        ],
      },
      {
        id: "canales",
        title: "Particularidades de cada canal de contacto",
        blocks: [
          {
            kind: "paragraph",
            text: "Los tres canales que ofrecemos implican a proveedores distintos, de los que conviene que sea consciente antes de elegir uno:",
          },
          {
            kind: "list",
            items: [
              "Teléfono: la llamada se cursa a través de su operador. El despacho no graba las conversaciones.",
              `Correo electrónico: la cuenta ${site.contact.email} está alojada en el servicio Gmail, prestado por Google Ireland Limited, que actúa como encargado del tratamiento y trata los mensajes en sus servidores.`,
              "WhatsApp: el servicio lo presta WhatsApp Ireland Limited (grupo Meta). Aunque el contenido de los mensajes viaja cifrado de extremo a extremo, Meta trata metadatos de la comunicación conforme a sus propias condiciones, ajenas al despacho.",
            ],
          },
          {
            kind: "callout",
            text: "Si su asunto es especialmente delicado, le recomendamos el teléfono o una visita al despacho, y que reserve el envío de documentación para cuando exista un encargo aceptado y un canal seguro acordado.",
          },
        ],
      },
      {
        id: "destinatarios",
        title: "A quién comunicamos sus datos",
        blocks: [
          {
            kind: "paragraph",
            text: "Sus datos no se ceden a terceros con fines comerciales ni se venden en ningún caso. Únicamente pueden ser comunicados a:",
          },
          {
            kind: "list",
            items: [
              "Juzgados, tribunales, notarías y Administraciones públicas, cuando el asunto encomendado lo requiera o exista una obligación legal.",
              "Procuradores, peritos, traductores y demás colaboradores necesarios para la tramitación de su asunto, a los que exigimos la misma confidencialidad que nos obliga a nosotros.",
              "La parte contraria y sus representantes, en la medida imprescindible para la defensa de sus intereses.",
              `Proveedores tecnológicos que actúan como encargados del tratamiento: el proveedor de alojamiento del sitio web (${legalEntity.hosting.name}) y el proveedor de correo electrónico (Google Ireland Limited).`,
              "Asesoría fiscal y contable, y entidades financieras, para la gestión de cobros y el cumplimiento de obligaciones tributarias.",
            ],
          },
          {
            kind: "paragraph",
            text: "Todos los encargados del tratamiento están vinculados por el contrato exigido por el artículo 28 del RGPD.",
          },
        ],
      },
      {
        id: "transferencias",
        title: "Transferencias internacionales",
        blocks: [
          {
            kind: "paragraph",
            text: `El despacho no realiza transferencias internacionales de datos por iniciativa propia. No obstante, los proveedores tecnológicos que utilizamos (el alojamiento del sitio web, ${legalEntity.hosting.name}, con sede en ${legalEntity.hosting.country}, y los servicios de correo electrónico y mensajería) pertenecen a grupos empresariales estadounidenses y pueden tratar datos fuera del Espacio Económico Europeo.`,
          },
          {
            kind: "paragraph",
            text: "Estas transferencias se amparan en los mecanismos previstos en el capítulo V del RGPD: la decisión de adecuación relativa al Marco de Privacidad de Datos UE-EE. UU., cuando el proveedor esté adherido, o las cláusulas contractuales tipo aprobadas por la Comisión Europea.",
          },
        ],
      },
      {
        id: "conservacion",
        title: "Durante cuánto tiempo conservamos sus datos",
        blocks: [
          {
            kind: "list",
            items: [
              "Si su consulta no da lugar a un encargo, conservamos los datos el tiempo necesario para responderle y, después, un plazo prudencial para acreditar que la consulta fue atendida.",
              "Si se formaliza un encargo, conservamos el expediente durante toda la relación profesional y, una vez finalizada, durante los plazos de prescripción de las acciones que puedan derivarse de ella.",
              "Los datos con trascendencia fiscal y contable se conservan durante los plazos previstos en la normativa tributaria y mercantil.",
              "Cuando resulte aplicable la Ley 10/2010 de prevención del blanqueo de capitales, la documentación se conserva durante diez años.",
              "Los registros técnicos del servidor se conservan durante un plazo breve, el habitual del proveedor de alojamiento, y con fines exclusivamente de seguridad.",
            ],
          },
        ],
      },
      {
        id: "derechos",
        title: "Sus derechos",
        blocks: [
          {
            kind: "paragraph",
            text: "Puede ejercer en cualquier momento los siguientes derechos sobre sus datos personales:",
          },
          {
            kind: "list",
            items: [
              "Acceso: saber qué datos suyos tratamos y obtener una copia.",
              "Rectificación: corregir los datos inexactos o incompletos.",
              "Supresión: solicitar que eliminemos sus datos cuando ya no sean necesarios.",
              "Oposición: oponerse a un tratamiento basado en nuestro interés legítimo.",
              "Limitación: pedir que suspendamos el tratamiento mientras se verifica una reclamación suya.",
              "Portabilidad: recibir sus datos en un formato estructurado y de uso común.",
            ],
          },
          {
            kind: "paragraph",
            text: `Para ejercerlos, basta con que nos escriba a ${site.contact.email} indicando el derecho que desea ejercer y adjuntando copia de un documento que acredite su identidad. La respuesta es gratuita y se emite en el plazo máximo de un mes.`,
          },
          {
            kind: "callout",
            text: "Estos derechos tienen límites cuando entran en conflicto con el deber de secreto profesional o con la conservación del expediente exigida para la defensa de reclamaciones. En tal caso se lo explicaremos de forma motivada.",
          },
          {
            kind: "paragraph",
            text: "Si considera que no hemos atendido correctamente su solicitud, puede presentar una reclamación ante la Agencia Española de Protección de Datos (C/ Jorge Juan, 6, 28001 Madrid; www.aepd.es), autoridad de control competente.",
          },
        ],
      },
      {
        id: "seguridad",
        title: "Seguridad y secreto profesional",
        blocks: [
          {
            kind: "paragraph",
            text: "Aplicamos las medidas técnicas y organizativas apropiadas para proteger sus datos frente a la destrucción, pérdida, alteración o acceso no autorizado, teniendo en cuenta la sensibilidad de la información que manejamos.",
          },
          {
            kind: "paragraph",
            text: "Con independencia de la normativa de protección de datos, toda la información que nos confíe está amparada por el secreto profesional del abogado, que nos obliga de forma indefinida y cuya vulneración constituye una infracción deontológica y, en su caso, penal.",
          },
        ],
      },
      {
        id: "menores",
        title: "Menores de edad",
        blocks: [
          {
            kind: "paragraph",
            text: "Este sitio web no está dirigido a menores de catorce años ni recoge datos de forma consciente de personas de esa edad. Cuando el asunto encomendado afecte a menores, sus datos se tratarán a través de quienes ostenten su representación legal.",
          },
        ],
      },
      {
        id: "cambios",
        title: "Cambios en esta política",
        blocks: [
          {
            kind: "paragraph",
            text: "Podemos actualizar esta política para adaptarla a novedades legislativas o a cambios en los servicios del despacho. La versión vigente es siempre la publicada en esta página, con la fecha de última actualización indicada al principio.",
          },
        ],
      },
    ],
  },

  cookies: {
    path: "/politica-de-cookies",
    eyebrow: "Cookies",
    title: "Política de cookies",
    subtitle:
      "Qué cookies utiliza este sitio web y por qué no verá ningún banner de consentimiento al entrar.",
    meta: {
      title: "Política de cookies",
      description:
        "Este sitio no utiliza cookies propias ni de terceros. El único contenido externo, el mapa de Google, solo se carga si usted lo solicita.",
    },
    updated: UPDATED,
    tocTitle: TOC,
    sections: [
      {
        id: "resumen",
        title: "En resumen",
        blocks: [
          {
            kind: "callout",
            text: "Este sitio web no instala cookies propias ni de terceros. No usa analítica, ni publicidad, ni redes sociales, ni ninguna herramienta de seguimiento. Por eso no le mostramos un banner de cookies: no hay nada que consentir.",
          },
          {
            kind: "paragraph",
            text: "La única excepción es el mapa de la página de contacto, y solo si usted decide cargarlo. Lo explicamos en el apartado 4.",
          },
        ],
      },
      {
        id: "que-son",
        title: "Qué son las cookies",
        blocks: [
          {
            kind: "paragraph",
            text: "Una cookie es un pequeño fichero que un sitio web guarda en su navegador al visitarlo. Sirve, entre otras cosas, para recordar sus preferencias, mantener una sesión iniciada o medir cuántas personas visitan una página.",
          },
          {
            kind: "paragraph",
            text: "Las cookies pueden ser propias (las instala el sitio que usted visita) o de terceros (las instala otra entidad a través de contenidos incrustados). Salvo las estrictamente necesarias para prestar el servicio, requieren su consentimiento previo e informado, conforme al artículo 22.2 de la LSSI-CE.",
          },
        ],
      },
      {
        id: "cookies-propias",
        title: "Cookies que utiliza este sitio",
        blocks: [
          {
            kind: "paragraph",
            text: "Ninguna. El sitio es una web estática e informativa, sin área privada, sin formularios y sin herramientas de medición. En concreto:",
          },
          {
            kind: "list",
            items: [
              "No utilizamos cookies técnicas de sesión, porque no hay sesiones que mantener.",
              "No utilizamos cookies de preferencias: el idioma se indica en la propia dirección de la página (/es, /en, /ca), no en una cookie.",
              "No utilizamos cookies de análisis ni estadística: no tenemos instalado Google Analytics ni ninguna herramienta equivalente.",
              "No utilizamos cookies publicitarias ni de personalización, ni compartimos datos con redes publicitarias.",
              "No utilizamos botones ni contadores de redes sociales.",
            ],
          },
          {
            kind: "paragraph",
            text: "Puede comprobarlo usted mismo en cualquier momento desde el panel de almacenamiento de su navegador.",
          },
        ],
      },
      {
        id: "mapa",
        title: "El mapa de Google, solo si usted lo pide",
        blocks: [
          {
            kind: "paragraph",
            text: "En la página de contacto ofrecemos un mapa de Google Maps para que localice el despacho. A diferencia de lo habitual, ese mapa no se carga automáticamente: en su lugar verá un recuadro con un botón.",
          },
          {
            kind: "paragraph",
            text: "Mientras no pulse ese botón, su navegador no realiza ninguna petición a Google y no se instala ninguna cookie. Si decide cargarlo, ocurre lo siguiente:",
          },
          {
            kind: "list",
            items: [
              "Su navegador se conecta a los servidores de Google para descargar el mapa.",
              "Google recibe su dirección IP, información sobre su navegador y la página desde la que se carga el mapa.",
              "Google puede instalar cookies e identificadores propios en su navegador, conforme a sus propias políticas, sobre las que el despacho no tiene control.",
            ],
          },
          {
            kind: "table",
            head: ["Proveedor", "Finalidad", "Más información"],
            rows: [
              [
                "Google Ireland Limited",
                "Mostrar el mapa interactivo con la ubicación del despacho.",
                "policies.google.com/privacy",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Si prefiere no cargar el mapa, junto al botón encontrará un enlace que abre la ubicación directamente en Google Maps, en una pestaña nueva y bajo su propia decisión. La dirección completa figura además en texto en la misma página.",
          },
        ],
      },
      {
        id: "gestionar",
        title: "Cómo gestionar las cookies en su navegador",
        blocks: [
          {
            kind: "paragraph",
            text: "Aunque este sitio no instale cookies, puede configurar su navegador para bloquear o eliminar las de cualquier web, incluidas las que Google pudiera instalar si carga el mapa. Encontrará las instrucciones en la ayuda de cada navegador:",
          },
          {
            kind: "list",
            items: [
              "Google Chrome: support.google.com/chrome/answer/95647",
              "Mozilla Firefox: support.mozilla.org/kb/cookies-informacion-que-los-sitios-web-guardan",
              "Safari: support.apple.com/es-es/guide/safari/sfri11471",
              "Microsoft Edge: support.microsoft.com/microsoft-edge",
            ],
          },
          {
            kind: "paragraph",
            text: "Tenga en cuenta que bloquear todas las cookies puede afectar al funcionamiento de otros sitios web que sí las necesiten.",
          },
        ],
      },
      {
        id: "cambios-cookies",
        title: "Cambios en esta política",
        blocks: [
          {
            kind: "paragraph",
            text: "Si en el futuro incorporamos alguna herramienta que utilice cookies, actualizaremos esta política antes de activarla y, cuando la normativa lo exija, solicitaremos su consentimiento previo mediante el mecanismo correspondiente.",
          },
          {
            kind: "paragraph",
            text:
              "Para cualquier duda sobre esta política puede escribirnos a " +
              site.contact.email +
              ".",
          },
        ],
      },
    ],
  },
};

export default es;
