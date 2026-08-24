import { legalEntity, site } from "@/lib/content/site";
import type { LegalContent } from "@/lib/content/legal/types";

const UPDATED = "Última actualització: 24 d'agost de 2026";
const TOC = "En aquesta pàgina";

const ca: LegalContent = {
  notice: {
    path: "/aviso-legal",
    eyebrow: "Informació legal",
    title: "Avís legal",
    subtitle:
      "Dades identificatives del titular d'aquest lloc web i condicions d'ús, d'acord amb l'article 10 de la Llei 34/2002, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE).",
    meta: {
      title: "Avís legal",
      description:
        "Dades identificatives del titular d'abogadosmarina204, condicions d'ús, propietat intel·lectual i normativa professional aplicable.",
    },
    updated: UPDATED,
    tocTitle: TOC,
    sections: [
      {
        id: "titular",
        title: "Dades identificatives",
        blocks: [
          {
            kind: "paragraph",
            text: "Aquest lloc web correspon al despatx professional que s'identifica a continuació, integrat per tres advocats que exerceixen per compte propi i estan col·legiats al col·legi que s'indica a l'apartat 7.",
          },
          {
            kind: "definitions",
            items: [
              { term: "Nom comercial", value: site.name },
              { term: "Domicili professional", value: site.contact.address },
              { term: "Telèfon", value: site.contact.phone },
              { term: "Correu electrònic", value: site.contact.email },
            ],
          },
        ],
      },
      {
        id: "objeto",
        title: "Objecte i acceptació",
        blocks: [
          {
            kind: "paragraph",
            text: "Aquest avís legal regula l'accés i la utilització d'aquest lloc web, que el titular posa a disposició dels usuaris d'Internet amb una finalitat exclusivament informativa i de presentació dels serveis professionals del despatx.",
          },
          {
            kind: "paragraph",
            text: "La navegació pel lloc atribueix la condició d'usuari i implica l'acceptació plena de totes les clàusules d'aquest avís legal. Si no hi esteu d'acord, us preguem que no utilitzeu el lloc.",
          },
          {
            kind: "paragraph",
            text: "El titular es reserva el dret de modificar en qualsevol moment la presentació, la configuració i els continguts del lloc, així com les condicions recollides en aquest avís.",
          },
        ],
      },
      {
        id: "no-asesoramiento",
        title: "Els continguts no constitueixen assessorament jurídic",
        blocks: [
          {
            kind: "callout",
            text: "La informació publicada en aquest lloc té caràcter general i divulgatiu. No constitueix assessorament jurídic ni substitueix l'anàlisi individualitzada d'un cas concret.",
          },
          {
            kind: "paragraph",
            text: "L'accés al lloc, la lectura dels seus continguts o l'enviament d'una comunicació a través dels canals indicats no generen per si sols una relació professional entre l'usuari i el despatx. Aquesta relació només neix amb l'acceptació expressa de l'encàrrec per ambdues parts.",
          },
          {
            kind: "paragraph",
            text: "Us recomanem que no ens remeteu documentació confidencial ni informació sensible sobre el vostre assumpte abans que hi hagi un encàrrec acceptat. En particular, tingueu en compte que els terminis de caducitat i prescripció corren amb independència que hàgiu escrit al despatx: l'enviament d'un missatge no interromp cap termini.",
          },
        ],
      },
      {
        id: "propiedad-intelectual",
        title: "Propietat intel·lectual i industrial",
        blocks: [
          {
            kind: "paragraph",
            text: "Tots els continguts d'aquest lloc —textos, fotografies, marques, logotips, icones, disseny gràfic, codi font i estructura de navegació— són titularitat del despatx o de tercers que n'han autoritzat l'ús, i estan protegits per la normativa de propietat intel·lectual i industrial.",
          },
          {
            kind: "paragraph",
            text: "Queda prohibida la seva reproducció, distribució, comunicació pública, transformació o qualsevol altra forma d'explotació sense autorització expressa i per escrit del titular. Se'n permet la visualització i la impressió per a ús personal i privat.",
          },
          {
            kind: "paragraph",
            text: "Les fotografies de l'equip publicades a la secció «Qui som» s'utilitzen amb el consentiment de les persones retratades i no es poden reutilitzar fora d'aquest lloc.",
          },
        ],
      },
      {
        id: "responsabilidad",
        title: "Exclusió de responsabilitat",
        blocks: [
          {
            kind: "paragraph",
            text: "El titular procura que la informació publicada sigui exacta i estigui actualitzada, però no garanteix l'absència d'errors ni la vigència permanent dels continguts, especialment en un àmbit, el jurídic, subjecte a canvis normatius i jurisprudencials freqüents.",
          },
          {
            kind: "list",
            items: [
              "El titular no respon dels danys derivats de l'ús que l'usuari faci de la informació publicada, ni de les decisions que adopti basant-s'hi únicament.",
              "El titular no garanteix la disponibilitat ininterrompuda del lloc ni l'absència de virus o altres elements lesius, si bé adopta mesures raonables per evitar-los.",
              "El titular no es responsabilitza del contingut dels llocs de tercers als quals es pugui accedir mitjançant enllaços des d'aquest web.",
            ],
          },
        ],
      },
      {
        id: "enlaces",
        title: "Enllaços i continguts de tercers",
        blocks: [
          {
            kind: "paragraph",
            text: "Aquest lloc inclou un mapa de Google Maps a la pàgina de contacte, que només es carrega si l'usuari ho sol·licita expressament prement el botó corresponent. Podeu consultar el detall d'aquest tractament a la política de galetes.",
          },
          {
            kind: "paragraph",
            text: "Els enllaços a llocs de tercers s'ofereixen únicament per facilitar l'accés a informació complementària. La seva inclusió no implica que el titular n'aprovi, avali o comparteixi els continguts.",
          },
        ],
      },
      {
        id: "normativa-profesional",
        title: "Normativa professional aplicable",
        blocks: [
          {
            kind: "paragraph",
            text: `Els professionals del despatx estan col·legiats al ${legalEntity.bar} i exerceixen l'advocacia subjectes a la normativa següent:`,
          },
          {
            kind: "list",
            items: [
              "Estatut General de l'Advocacia Espanyola, aprovat pel Reial decret 135/2021, de 2 de març.",
              "Codi Deontològic de l'Advocacia Espanyola.",
              "Llei 2/2007, de 15 de març, de societats professionals, en allò que resulti aplicable.",
              "Normativa col·legial del col·legi d'adscripció, consultable al seu lloc web.",
            ],
          },
          {
            kind: "paragraph",
            text: "Els professionals del despatx tenen l'assegurança de responsabilitat civil professional exigida per la normativa col·legial.",
          },
        ],
      },
      {
        id: "ley-aplicable",
        title: "Legislació aplicable i jurisdicció",
        blocks: [
          {
            kind: "paragraph",
            text: "Aquest avís legal es regeix per la legislació espanyola. Per a la resolució de qualsevol controvèrsia derivada de l'accés o l'ús del lloc web, les parts se sotmeten als jutjats i tribunals de Barcelona, llevat que la normativa aplicable en matèria de consumidors i usuaris estableixi un fur diferent de caràcter imperatiu.",
          },
        ],
      },
    ],
  },

  privacy: {
    path: "/politica-de-privacidad",
    eyebrow: "Protecció de dades",
    title: "Política de privacitat",
    subtitle:
      "Com tractem les vostres dades personals quan contacteu amb el despatx, amb quina finalitat, durant quant temps i quins drets podeu exercir, d'acord amb el Reglament (UE) 2016/679 (RGPD) i la Llei orgànica 3/2018 (LOPDGDD).",
    meta: {
      title: "Política de privacitat",
      description:
        "Informació sobre el tractament de dades personals a abogadosmarina204: responsable, finalitats, base jurídica, terminis de conservació i drets.",
    },
    updated: UPDATED,
    tocTitle: TOC,
    sections: [
      {
        id: "sin-formulario",
        title: "Aquest lloc web no recull dades per si mateix",
        blocks: [
          {
            kind: "callout",
            text: "Aquest web és purament informatiu: no té formularis, no exigeix registre, no utilitza galetes pròpies ni eines d'analítica, i no elabora perfils dels seus visitants.",
          },
          {
            kind: "paragraph",
            text: "Podeu navegar per totes les seves pàgines sense facilitar cap dada personal. El tractament de dades només comença quan decidiu posar-vos en contacte amb el despatx per algun dels canals que oferim.",
          },
        ],
      },
      {
        id: "datos",
        title: "Quines dades tractem i d'on provenen",
        blocks: [
          {
            kind: "paragraph",
            text: "Tractem únicament les dades que ens faciliteu voluntàriament en contactar amb nosaltres, així com les que siguin necessàries per a l'assumpte que ens encarregueu:",
          },
          {
            kind: "list",
            items: [
              "Dades identificatives i de contacte: nom i cognoms, telèfon, adreça de correu electrònic i, si escau, domicili.",
              "El contingut de la vostra consulta i la documentació que decidiu remetre'ns.",
              "Dades econòmiques i de facturació, si arriba a formalitzar-se un encàrrec professional.",
              "Dades tècniques que registra automàticament el servidor on s'allotja el web (adreça IP, data i hora d'accés, pàgines sol·licitades), amb l'única finalitat de mantenir el servei i la seva seguretat.",
            ],
          },
          {
            kind: "callout",
            text: "Per la naturalesa de la nostra feina, la vostra consulta pot contenir dades de categories especials (salut, vida sexual, ideologia, afiliació sindical) o relatives a infraccions i condemnes penals. Les tractarem amb la màxima reserva i únicament en la mesura necessària per a la vostra defensa.",
          },
        ],
      },
      {
        id: "finalidades",
        title: "Per a què tractem les vostres dades i amb quina base jurídica",
        blocks: [
          {
            kind: "table",
            head: ["Finalitat", "Base jurídica"],
            rows: [
              [
                "Atendre la vostra consulta i fer una primera valoració de l'assumpte.",
                "Aplicació de mesures precontractuals a petició de l'interessat (art. 6.1.b RGPD).",
              ],
              [
                "Prestar els serveis professionals encarregats i gestionar la relació amb el client.",
                "Execució del contracte d'arrendament de serveis (art. 6.1.b RGPD).",
              ],
              [
                "Exercir el dret de defensa, inclòs el tractament de dades sensibles i d'infraccions penals.",
                "Formulació, exercici o defensa de reclamacions (arts. 9.2.f i 10 RGPD).",
              ],
              [
                "Complir obligacions legals: fiscals, comptables i de prevenció del blanqueig de capitals.",
                "Compliment d'una obligació legal (art. 6.1.c RGPD).",
              ],
              [
                "Mantenir la seguretat i el bon funcionament del lloc web.",
                "Interès legítim del responsable (art. 6.1.f RGPD).",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "No prenem decisions automatitzades ni elaborem perfils amb les vostres dades. Tampoc no les utilitzem per enviar-vos comunicacions comercials.",
          },
        ],
      },
      {
        id: "canales",
        title: "Particularitats de cada canal de contacte",
        blocks: [
          {
            kind: "paragraph",
            text: "Els tres canals que oferim impliquen proveïdors diferents, dels quals convé que sigueu conscients abans de triar-ne un:",
          },
          {
            kind: "list",
            items: [
              "Telèfon: la trucada es cursa a través del vostre operador. El despatx no grava les converses.",
              `Correu electrònic: el compte ${site.contact.email} està allotjat al servei Gmail, prestat per Google Ireland Limited, que actua com a encarregat del tractament i tracta els missatges als seus servidors.`,
              "WhatsApp: el servei el presta WhatsApp Ireland Limited (grup Meta). Encara que el contingut dels missatges viatja xifrat d'extrem a extrem, Meta tracta metadades de la comunicació segons les seves pròpies condicions, alienes al despatx.",
            ],
          },
          {
            kind: "callout",
            text: "Si el vostre assumpte és especialment delicat, us recomanem el telèfon o una visita al despatx, i que reserveu l'enviament de documentació per quan hi hagi un encàrrec acceptat i un canal segur acordat.",
          },
        ],
      },
      {
        id: "destinatarios",
        title: "A qui comuniquem les vostres dades",
        blocks: [
          {
            kind: "paragraph",
            text: "Les vostres dades no es cedeixen a tercers amb finalitats comercials ni es venen en cap cas. Únicament poden ser comunicades a:",
          },
          {
            kind: "list",
            items: [
              "Jutjats, tribunals, notaries i administracions públiques, quan l'assumpte encomanat ho requereixi o hi hagi una obligació legal.",
              "Procuradors, perits, traductors i altres col·laboradors necessaris per a la tramitació del vostre assumpte, als quals exigim la mateixa confidencialitat que ens obliga a nosaltres.",
              "La part contrària i els seus representants, en la mesura imprescindible per a la defensa dels vostres interessos.",
              `Proveïdors tecnològics que actuen com a encarregats del tractament: el proveïdor d'allotjament del lloc web (${legalEntity.hosting.name}) i el proveïdor de correu electrònic (Google Ireland Limited).`,
              "Assessoria fiscal i comptable, i entitats financeres, per a la gestió de cobraments i el compliment d'obligacions tributàries.",
            ],
          },
          {
            kind: "paragraph",
            text: "Tots els encarregats del tractament estan vinculats pel contracte exigit per l'article 28 del RGPD.",
          },
        ],
      },
      {
        id: "transferencias",
        title: "Transferències internacionals",
        blocks: [
          {
            kind: "paragraph",
            text: `El despatx no fa transferències internacionals de dades per iniciativa pròpia. Tanmateix, els proveïdors tecnològics que utilitzem —l'allotjament del lloc web (${legalEntity.hosting.name}, amb seu als Estats Units) i els serveis de correu electrònic i missatgeria— pertanyen a grups empresarials estatunidencs i poden tractar dades fora de l'Espai Econòmic Europeu.`,
          },
          {
            kind: "paragraph",
            text: "Aquestes transferències s'emparen en els mecanismes previstos al capítol V del RGPD: la decisió d'adequació relativa al Marc de Privacitat de Dades UE-EUA, quan el proveïdor hi estigui adherit, o les clàusules contractuals tipus aprovades per la Comissió Europea.",
          },
        ],
      },
      {
        id: "conservacion",
        title: "Durant quant temps conservem les vostres dades",
        blocks: [
          {
            kind: "list",
            items: [
              "Si la vostra consulta no dona lloc a un encàrrec, conservem les dades el temps necessari per respondre-us i, després, un termini prudencial per acreditar que la consulta va ser atesa.",
              "Si es formalitza un encàrrec, conservem l'expedient durant tota la relació professional i, un cop finalitzada, durant els terminis de prescripció de les accions que se'n puguin derivar.",
              "Les dades amb transcendència fiscal i comptable es conserven durant els terminis previstos en la normativa tributària i mercantil.",
              "Quan resulti aplicable la Llei 10/2010 de prevenció del blanqueig de capitals, la documentació es conserva durant deu anys.",
              "Els registres tècnics del servidor es conserven durant un termini breu, l'habitual del proveïdor d'allotjament, i amb finalitats exclusivament de seguretat.",
            ],
          },
        ],
      },
      {
        id: "derechos",
        title: "Els vostres drets",
        blocks: [
          {
            kind: "paragraph",
            text: "Podeu exercir en qualsevol moment els drets següents sobre les vostres dades personals:",
          },
          {
            kind: "list",
            items: [
              "Accés: saber quines dades vostres tractem i obtenir-ne una còpia.",
              "Rectificació: corregir les dades inexactes o incompletes.",
              "Supressió: sol·licitar que eliminem les vostres dades quan ja no siguin necessàries.",
              "Oposició: oposar-vos a un tractament basat en el nostre interès legítim.",
              "Limitació: demanar que suspenguem el tractament mentre es verifica una reclamació vostra.",
              "Portabilitat: rebre les vostres dades en un format estructurat i d'ús comú.",
            ],
          },
          {
            kind: "paragraph",
            text: `Per exercir-los, n'hi ha prou que ens escriviu a ${site.contact.email} indicant el dret que voleu exercir i adjuntant-hi còpia d'un document que acrediti la vostra identitat. La resposta és gratuïta i s'emet en el termini màxim d'un mes.`,
          },
          {
            kind: "callout",
            text: "Aquests drets tenen límits quan entren en conflicte amb el deure de secret professional o amb la conservació de l'expedient exigida per a la defensa de reclamacions. En aquest cas us ho explicarem de manera motivada.",
          },
          {
            kind: "paragraph",
            text: "Si considereu que no hem atès correctament la vostra sol·licitud, podeu presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (C/ Jorge Juan, 6, 28001 Madrid — www.aepd.es), autoritat de control competent.",
          },
        ],
      },
      {
        id: "seguridad",
        title: "Seguretat i secret professional",
        blocks: [
          {
            kind: "paragraph",
            text: "Apliquem les mesures tècniques i organitzatives apropiades per protegir les vostres dades davant la destrucció, pèrdua, alteració o accés no autoritzat, tenint en compte la sensibilitat de la informació que manegem.",
          },
          {
            kind: "paragraph",
            text: "Amb independència de la normativa de protecció de dades, tota la informació que ens confieu està emparada pel secret professional de l'advocat, que ens obliga de manera indefinida i la vulneració del qual constitueix una infracció deontològica i, si escau, penal.",
          },
        ],
      },
      {
        id: "menores",
        title: "Menors d'edat",
        blocks: [
          {
            kind: "paragraph",
            text: "Aquest lloc web no està dirigit a menors de catorze anys ni recull dades de manera conscient de persones d'aquesta edat. Quan l'assumpte encomanat afecti menors, les seves dades es tractaran a través de qui n'ostenti la representació legal.",
          },
        ],
      },
      {
        id: "cambios",
        title: "Canvis en aquesta política",
        blocks: [
          {
            kind: "paragraph",
            text: "Podem actualitzar aquesta política per adaptar-la a novetats legislatives o a canvis en els serveis del despatx. La versió vigent és sempre la publicada en aquesta pàgina, amb la data d'última actualització indicada al principi.",
          },
        ],
      },
    ],
  },

  cookies: {
    path: "/politica-de-cookies",
    eyebrow: "Galetes",
    title: "Política de galetes",
    subtitle:
      "Quines galetes utilitza aquest lloc web i per què no veureu cap bàner de consentiment en entrar-hi.",
    meta: {
      title: "Política de galetes",
      description:
        "Aquest lloc no utilitza galetes pròpies ni de tercers. L'únic contingut extern, el mapa de Google, només es carrega si vosaltres ho demaneu.",
    },
    updated: UPDATED,
    tocTitle: TOC,
    sections: [
      {
        id: "resumen",
        title: "En resum",
        blocks: [
          {
            kind: "callout",
            text: "Aquest lloc web no instal·la galetes pròpies ni de tercers. No fa servir analítica, ni publicitat, ni xarxes socials, ni cap eina de seguiment. Per això no us mostrem un bàner de galetes: no hi ha res a consentir.",
          },
          {
            kind: "paragraph",
            text: "L'única excepció és el mapa de la pàgina de contacte, i només si decidiu carregar-lo. Ho expliquem a l'apartat 4.",
          },
        ],
      },
      {
        id: "que-son",
        title: "Què són les galetes",
        blocks: [
          {
            kind: "paragraph",
            text: "Una galeta és un petit fitxer que un lloc web desa al vostre navegador en visitar-lo. Serveix, entre altres coses, per recordar les vostres preferències, mantenir una sessió iniciada o mesurar quantes persones visiten una pàgina.",
          },
          {
            kind: "paragraph",
            text: "Les galetes poden ser pròpies (les instal·la el lloc que visiteu) o de tercers (les instal·la una altra entitat a través de continguts incrustats). Llevat de les estrictament necessàries per prestar el servei, requereixen el vostre consentiment previ i informat, d'acord amb l'article 22.2 de la LSSI-CE.",
          },
        ],
      },
      {
        id: "cookies-propias",
        title: "Galetes que utilitza aquest lloc",
        blocks: [
          {
            kind: "paragraph",
            text: "Cap. El lloc és un web estàtic i informatiu, sense àrea privada, sense formularis i sense eines de mesurament. En concret:",
          },
          {
            kind: "list",
            items: [
              "No utilitzem galetes tècniques de sessió, perquè no hi ha sessions a mantenir.",
              "No utilitzem galetes de preferències: l'idioma s'indica a la mateixa adreça de la pàgina (/es, /en, /ca), no en una galeta.",
              "No utilitzem galetes d'anàlisi ni estadística: no tenim instal·lat Google Analytics ni cap eina equivalent.",
              "No utilitzem galetes publicitàries ni de personalització, ni compartim dades amb xarxes publicitàries.",
              "No utilitzem botons ni comptadors de xarxes socials.",
            ],
          },
          {
            kind: "paragraph",
            text: "Podeu comprovar-ho vosaltres mateixos en qualsevol moment des del panell d'emmagatzematge del vostre navegador.",
          },
        ],
      },
      {
        id: "mapa",
        title: "El mapa de Google, només si el demaneu",
        blocks: [
          {
            kind: "paragraph",
            text: "A la pàgina de contacte oferim un mapa de Google Maps perquè localitzeu el despatx. A diferència del que és habitual, aquest mapa no es carrega automàticament: al seu lloc hi veureu un requadre amb un botó.",
          },
          {
            kind: "paragraph",
            text: "Mentre no premeu aquest botó, el vostre navegador no fa cap petició a Google i no s'hi instal·la cap galeta. Si decidiu carregar-lo, passa el següent:",
          },
          {
            kind: "list",
            items: [
              "El vostre navegador es connecta als servidors de Google per descarregar el mapa.",
              "Google rep la vostra adreça IP, informació sobre el vostre navegador i la pàgina des de la qual es carrega el mapa.",
              "Google pot instal·lar galetes i identificadors propis al vostre navegador, segons les seves pròpies polítiques, sobre les quals el despatx no té control.",
            ],
          },
          {
            kind: "table",
            head: ["Proveïdor", "Finalitat", "Més informació"],
            rows: [
              [
                "Google Ireland Limited",
                "Mostrar el mapa interactiu amb la ubicació del despatx.",
                "policies.google.com/privacy",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "Si preferiu no carregar el mapa, al costat del botó hi trobareu un enllaç que obre la ubicació directament a Google Maps, en una pestanya nova i sota la vostra pròpia decisió. L'adreça completa figura a més en text a la mateixa pàgina.",
          },
        ],
      },
      {
        id: "gestionar",
        title: "Com gestionar les galetes al vostre navegador",
        blocks: [
          {
            kind: "paragraph",
            text: "Encara que aquest lloc no instal·li galetes, podeu configurar el vostre navegador per bloquejar o eliminar les de qualsevol web, incloses les que Google podria instal·lar si carregueu el mapa. En trobareu les instruccions a l'ajuda de cada navegador:",
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
            text: "Tingueu en compte que bloquejar totes les galetes pot afectar el funcionament d'altres llocs web que sí que les necessitin.",
          },
        ],
      },
      {
        id: "cambios-cookies",
        title: "Canvis en aquesta política",
        blocks: [
          {
            kind: "paragraph",
            text: "Si en el futur incorporem alguna eina que utilitzi galetes, actualitzarem aquesta política abans d'activar-la i, quan la normativa ho exigeixi, sol·licitarem el vostre consentiment previ mitjançant el mecanisme corresponent.",
          },
          {
            kind: "paragraph",
            text: `Per a qualsevol dubte sobre aquesta política podeu escriure'ns a ${site.contact.email}.`,
          },
        ],
      },
    ],
  },
};

export default ca;
