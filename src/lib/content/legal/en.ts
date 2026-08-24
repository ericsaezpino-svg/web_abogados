import { legalEntity, site } from "@/lib/content/site";
import type { LegalContent } from "@/lib/content/legal/types";

const UPDATED = "Last updated: 24 August 2026";
const TOC = "On this page";

const en: LegalContent = {
  notice: {
    path: "/aviso-legal",
    eyebrow: "Legal information",
    title: "Legal notice",
    subtitle:
      "Identifying details of the owner of this website and terms of use, in accordance with article 10 of Spanish Act 34/2002 on information society services and electronic commerce (LSSI-CE).",
    meta: {
      title: "Legal notice",
      description:
        "Identifying details of the owner of abogadosmarina204, terms of use, intellectual property and applicable professional rules.",
    },
    updated: UPDATED,
    tocTitle: TOC,
    sections: [
      {
        id: "titular",
        title: "Identifying details",
        blocks: [
          {
            kind: "paragraph",
            text: "This website belongs to the professional practice identified below, made up of three lawyers who practise on a self-employed basis and are members of the bar association indicated in section 7.",
          },
          {
            kind: "definitions",
            items: [
              { term: "Trading name", value: site.name },
              { term: "Professional address", value: site.contact.address },
              { term: "Telephone", value: site.contact.phone },
              { term: "Email", value: site.contact.email },
            ],
          },
        ],
      },
      {
        id: "objeto",
        title: "Purpose and acceptance",
        blocks: [
          {
            kind: "paragraph",
            text: "This legal notice governs access to and use of this website, which the owner makes available to internet users purely to provide information and to present the firm's professional services.",
          },
          {
            kind: "paragraph",
            text: "Browsing the site makes you a user and implies full acceptance of every clause of this legal notice. If you do not agree with any of them, please do not use the site.",
          },
          {
            kind: "paragraph",
            text: "The owner reserves the right to modify the presentation, configuration and contents of the site, as well as the terms set out in this notice, at any time.",
          },
        ],
      },
      {
        id: "no-asesoramiento",
        title: "The contents do not constitute legal advice",
        blocks: [
          {
            kind: "callout",
            text: "The information published on this site is general and informative in nature. It does not constitute legal advice and does not replace individual analysis of a specific case.",
          },
          {
            kind: "paragraph",
            text: "Accessing the site, reading its contents or sending a message through the channels provided do not in themselves create a professional relationship between the user and the firm. Such a relationship only arises once both parties expressly accept the engagement.",
          },
          {
            kind: "paragraph",
            text: "We recommend that you do not send us confidential documents or sensitive information about your matter before an engagement has been accepted. In particular, please note that limitation periods run regardless of whether you have written to the firm: sending a message does not interrupt any deadline.",
          },
        ],
      },
      {
        id: "propiedad-intelectual",
        title: "Intellectual and industrial property",
        blocks: [
          {
            kind: "paragraph",
            text: "All the contents of this site — text, photographs, trade marks, logos, icons, graphic design, source code and navigation structure — belong to the firm or to third parties who have authorised their use, and are protected by intellectual and industrial property law.",
          },
          {
            kind: "paragraph",
            text: "Their reproduction, distribution, public communication, transformation or any other form of exploitation without the owner's express written authorisation is prohibited. Viewing and printing the contents for personal, private use is permitted.",
          },
          {
            kind: "paragraph",
            text: "The team photographs published in the «About us» section are used with the consent of the people portrayed and may not be reused outside this site.",
          },
        ],
      },
      {
        id: "responsabilidad",
        title: "Exclusion of liability",
        blocks: [
          {
            kind: "paragraph",
            text: "The owner takes care to ensure that the information published is accurate and up to date, but does not guarantee that it is free of errors or that it remains current at all times, particularly in a field such as law, which is subject to frequent legislative and case-law changes.",
          },
          {
            kind: "list",
            items: [
              "The owner is not liable for any damage arising from the user's use of the information published, nor for decisions taken solely on the basis of it.",
              "The owner does not guarantee uninterrupted availability of the site or the absence of viruses or other harmful elements, although reasonable measures are taken to prevent them.",
              "The owner is not responsible for the content of third-party sites that may be reached through links from this website.",
            ],
          },
        ],
      },
      {
        id: "enlaces",
        title: "Links and third-party content",
        blocks: [
          {
            kind: "paragraph",
            text: "This site includes a Google Maps map on the contact page, which is only loaded if the user expressly requests it by pressing the corresponding button. Details of this processing are set out in the cookie policy.",
          },
          {
            kind: "paragraph",
            text: "Links to third-party sites are offered solely to make additional information easier to reach. Their inclusion does not imply that the owner approves, endorses or shares their contents.",
          },
        ],
      },
      {
        id: "normativa-profesional",
        title: "Applicable professional rules",
        blocks: [
          {
            kind: "paragraph",
            text: `The firm's professionals are members of the ${legalEntity.bar} and practise subject to the following rules:`,
          },
          {
            kind: "list",
            items: [
              "General Statute of the Spanish Legal Profession, approved by Royal Decree 135/2021 of 2 March.",
              "Code of Conduct of the Spanish Legal Profession.",
              "Act 2/2007 of 15 March on professional partnerships, where applicable.",
              "The bar association's own rules, available on its website.",
            ],
          },
          {
            kind: "paragraph",
            text: "The firm's professionals hold the professional indemnity insurance required by the bar association's rules.",
          },
        ],
      },
      {
        id: "ley-aplicable",
        title: "Governing law and jurisdiction",
        blocks: [
          {
            kind: "paragraph",
            text: "This legal notice is governed by Spanish law. For the resolution of any dispute arising from access to or use of the website, the parties submit to the courts of Barcelona, unless consumer protection legislation establishes a different mandatory forum.",
          },
        ],
      },
    ],
  },

  privacy: {
    path: "/politica-de-privacidad",
    eyebrow: "Data protection",
    title: "Privacy policy",
    subtitle:
      "How we process your personal data when you contact the firm, for what purpose, for how long and what rights you can exercise, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Act 3/2018 (LOPDGDD).",
    meta: {
      title: "Privacy policy",
      description:
        "Information on the processing of personal data at abogadosmarina204: controller, purposes, legal basis, retention periods and rights.",
    },
    updated: UPDATED,
    tocTitle: TOC,
    sections: [
      {
        id: "sin-formulario",
        title: "This website does not collect data by itself",
        blocks: [
          {
            kind: "callout",
            text: "This site is purely informative: it has no forms, requires no registration, uses no first-party cookies or analytics tools, and does not profile its visitors.",
          },
          {
            kind: "paragraph",
            text: "You can browse every page without providing any personal data. Processing only begins when you decide to contact the firm through one of the channels we offer.",
          },
        ],
      },
      {
        id: "datos",
        title: "What data we process and where it comes from",
        blocks: [
          {
            kind: "paragraph",
            text: "We process only the data you voluntarily provide when contacting us, together with whatever is necessary for the matter you entrust to us:",
          },
          {
            kind: "list",
            items: [
              "Identifying and contact details: name and surname, telephone, email address and, where applicable, postal address.",
              "The content of your enquiry and any documents you choose to send us.",
              "Financial and billing details, if a professional engagement is formalised.",
              "Technical data automatically recorded by the server hosting the website (IP address, date and time of access, pages requested), solely to keep the service running and secure.",
            ],
          },
          {
            kind: "callout",
            text: "Because of the nature of our work, your enquiry may contain special category data (health, sex life, political opinions, trade union membership) or data relating to criminal offences and convictions. We will treat it with the utmost discretion and only to the extent necessary for your defence.",
          },
        ],
      },
      {
        id: "finalidades",
        title: "Why we process your data and on what legal basis",
        blocks: [
          {
            kind: "table",
            head: ["Purpose", "Legal basis"],
            rows: [
              [
                "To handle your enquiry and provide a first assessment of the matter.",
                "Pre-contractual steps taken at the data subject's request (art. 6(1)(b) GDPR).",
              ],
              [
                "To provide the professional services engaged and manage the client relationship.",
                "Performance of the services contract (art. 6(1)(b) GDPR).",
              ],
              [
                "To exercise the right of defence, including processing of sensitive data and criminal offence data.",
                "Establishment, exercise or defence of legal claims (arts. 9(2)(f) and 10 GDPR).",
              ],
              [
                "To comply with legal obligations: tax, accounting and anti-money-laundering.",
                "Compliance with a legal obligation (art. 6(1)(c) GDPR).",
              ],
              [
                "To keep the website secure and working properly.",
                "Legitimate interest of the controller (art. 6(1)(f) GDPR).",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "We do not take automated decisions or build profiles from your data. Nor do we use it to send you marketing communications.",
          },
        ],
      },
      {
        id: "canales",
        title: "Specific points about each contact channel",
        blocks: [
          {
            kind: "paragraph",
            text: "The three channels we offer involve different providers, which you should be aware of before choosing one:",
          },
          {
            kind: "list",
            items: [
              "Telephone: the call is routed through your operator. The firm does not record conversations.",
              `Email: the ${site.contact.email} account is hosted on the Gmail service provided by Google Ireland Limited, which acts as a processor and handles messages on its servers.`,
              "WhatsApp: the service is provided by WhatsApp Ireland Limited (Meta group). Although message content travels end-to-end encrypted, Meta processes communication metadata under its own terms, outside the firm's control.",
            ],
          },
          {
            kind: "callout",
            text: "If your matter is particularly sensitive, we recommend the telephone or a visit to the office, and that you hold back documents until an engagement has been accepted and a secure channel agreed.",
          },
        ],
      },
      {
        id: "destinatarios",
        title: "Who we share your data with",
        blocks: [
          {
            kind: "paragraph",
            text: "Your data is never shared with third parties for commercial purposes and is never sold. It may only be disclosed to:",
          },
          {
            kind: "list",
            items: [
              "Courts, tribunals, notaries and public authorities, where the matter entrusted to us requires it or a legal obligation exists.",
              "Court agents, expert witnesses, translators and other collaborators needed to handle your matter, from whom we require the same confidentiality that binds us.",
              "The opposing party and their representatives, to the extent strictly necessary to defend your interests.",
              `Technology providers acting as processors: the website hosting provider (${legalEntity.hosting.name}) and the email provider (Google Ireland Limited).`,
              "Tax and accounting advisers, and financial institutions, to manage payments and meet tax obligations.",
            ],
          },
          {
            kind: "paragraph",
            text: "All processors are bound by the contract required under article 28 GDPR.",
          },
        ],
      },
      {
        id: "transferencias",
        title: "International transfers",
        blocks: [
          {
            kind: "paragraph",
            text: `The firm does not carry out international data transfers on its own initiative. However, the technology providers we use — the website hosting (${legalEntity.hosting.name}, based in the United States) and the email and messaging services — belong to US groups and may process data outside the European Economic Area.`,
          },
          {
            kind: "paragraph",
            text: "These transfers rely on the mechanisms set out in Chapter V GDPR: the adequacy decision relating to the EU-US Data Privacy Framework, where the provider is certified under it, or the standard contractual clauses approved by the European Commission.",
          },
        ],
      },
      {
        id: "conservacion",
        title: "How long we keep your data",
        blocks: [
          {
            kind: "list",
            items: [
              "If your enquiry does not lead to an engagement, we keep the data for as long as needed to reply and, afterwards, for a reasonable period to evidence that the enquiry was handled.",
              "If an engagement is formalised, we keep the file throughout the professional relationship and, once it ends, for the limitation periods of any claims that may arise from it.",
              "Data with tax and accounting relevance is kept for the periods set by tax and commercial legislation.",
              "Where Act 10/2010 on the prevention of money laundering applies, documentation is kept for ten years.",
              "Server technical logs are kept for a short period, as standard for the hosting provider, and solely for security purposes.",
            ],
          },
        ],
      },
      {
        id: "derechos",
        title: "Your rights",
        blocks: [
          {
            kind: "paragraph",
            text: "You may exercise the following rights over your personal data at any time:",
          },
          {
            kind: "list",
            items: [
              "Access: find out what data of yours we process and obtain a copy.",
              "Rectification: correct inaccurate or incomplete data.",
              "Erasure: ask us to delete your data when it is no longer necessary.",
              "Objection: object to processing based on our legitimate interest.",
              "Restriction: ask us to suspend processing while a complaint of yours is verified.",
              "Portability: receive your data in a structured, commonly used format.",
            ],
          },
          {
            kind: "paragraph",
            text: `To exercise them, simply write to ${site.contact.email} stating the right you wish to exercise and enclosing a copy of a document proving your identity. The response is free of charge and issued within one month at the latest.`,
          },
          {
            kind: "callout",
            text: "These rights have limits where they conflict with professional secrecy or with the retention of the file required to defend legal claims. In such cases we will explain the reasons to you.",
          },
          {
            kind: "paragraph",
            text: "If you believe we have not handled your request properly, you may lodge a complaint with the Spanish Data Protection Agency (C/ Jorge Juan, 6, 28001 Madrid — www.aepd.es), the competent supervisory authority.",
          },
        ],
      },
      {
        id: "seguridad",
        title: "Security and professional secrecy",
        blocks: [
          {
            kind: "paragraph",
            text: "We apply appropriate technical and organisational measures to protect your data against destruction, loss, alteration or unauthorised access, bearing in mind the sensitivity of the information we handle.",
          },
          {
            kind: "paragraph",
            text: "Quite apart from data protection law, all the information you entrust to us is covered by lawyer's professional secrecy, which binds us indefinitely and whose breach constitutes a disciplinary and, where applicable, criminal offence.",
          },
        ],
      },
      {
        id: "menores",
        title: "Minors",
        blocks: [
          {
            kind: "paragraph",
            text: "This website is not aimed at children under fourteen and does not knowingly collect data from people of that age. Where the matter entrusted to us concerns minors, their data will be handled through their legal representatives.",
          },
        ],
      },
      {
        id: "cambios",
        title: "Changes to this policy",
        blocks: [
          {
            kind: "paragraph",
            text: "We may update this policy to reflect legislative developments or changes to the firm's services. The version in force is always the one published on this page, with the last updated date shown at the top.",
          },
        ],
      },
    ],
  },

  cookies: {
    path: "/politica-de-cookies",
    eyebrow: "Cookies",
    title: "Cookie policy",
    subtitle:
      "Which cookies this website uses, and why you will not see a consent banner when you arrive.",
    meta: {
      title: "Cookie policy",
      description:
        "This site uses no first-party or third-party cookies. The only external content, the Google map, is loaded only if you ask for it.",
    },
    updated: UPDATED,
    tocTitle: TOC,
    sections: [
      {
        id: "resumen",
        title: "In short",
        blocks: [
          {
            kind: "callout",
            text: "This website installs no first-party or third-party cookies. It uses no analytics, no advertising, no social networks and no tracking tools of any kind. That is why we do not show you a cookie banner: there is nothing to consent to.",
          },
          {
            kind: "paragraph",
            text: "The only exception is the map on the contact page, and only if you choose to load it. We explain this in section 4.",
          },
        ],
      },
      {
        id: "que-son",
        title: "What cookies are",
        blocks: [
          {
            kind: "paragraph",
            text: "A cookie is a small file that a website stores in your browser when you visit it. Among other things, it can remember your preferences, keep you signed in or measure how many people visit a page.",
          },
          {
            kind: "paragraph",
            text: "Cookies may be first-party (installed by the site you are visiting) or third-party (installed by another entity through embedded content). Except for those strictly necessary to provide the service, they require your prior, informed consent under article 22(2) LSSI-CE.",
          },
        ],
      },
      {
        id: "cookies-propias",
        title: "Cookies used by this site",
        blocks: [
          {
            kind: "paragraph",
            text: "None. The site is a static, informative website with no private area, no forms and no measurement tools. Specifically:",
          },
          {
            kind: "list",
            items: [
              "We use no technical session cookies, because there are no sessions to maintain.",
              "We use no preference cookies: the language is indicated in the page address itself (/es, /en, /ca), not in a cookie.",
              "We use no analytics or statistics cookies: we have not installed Google Analytics or any equivalent tool.",
              "We use no advertising or personalisation cookies, and we share no data with advertising networks.",
              "We use no social network buttons or counters.",
            ],
          },
          {
            kind: "paragraph",
            text: "You can check this for yourself at any time from your browser's storage panel.",
          },
        ],
      },
      {
        id: "mapa",
        title: "The Google map, only if you ask for it",
        blocks: [
          {
            kind: "paragraph",
            text: "On the contact page we offer a Google Maps map so that you can find the office. Unlike the usual arrangement, that map is not loaded automatically: instead you will see a panel with a button.",
          },
          {
            kind: "paragraph",
            text: "Until you press that button, your browser makes no request to Google and no cookie is installed. If you choose to load it, the following happens:",
          },
          {
            kind: "list",
            items: [
              "Your browser connects to Google's servers to download the map.",
              "Google receives your IP address, information about your browser and the page the map is loaded from.",
              "Google may install its own cookies and identifiers in your browser, under its own policies, over which the firm has no control.",
            ],
          },
          {
            kind: "table",
            head: ["Provider", "Purpose", "More information"],
            rows: [
              [
                "Google Ireland Limited",
                "Display the interactive map showing the office location.",
                "policies.google.com/privacy",
              ],
            ],
          },
          {
            kind: "paragraph",
            text: "If you would rather not load the map, next to the button there is a link that opens the location directly in Google Maps, in a new tab and at your own choosing. The full address is also given as text on the same page.",
          },
        ],
      },
      {
        id: "gestionar",
        title: "How to manage cookies in your browser",
        blocks: [
          {
            kind: "paragraph",
            text: "Even though this site installs no cookies, you can configure your browser to block or delete those of any website, including any Google might install if you load the map. You will find instructions in each browser's help pages:",
          },
          {
            kind: "list",
            items: [
              "Google Chrome: support.google.com/chrome/answer/95647",
              "Mozilla Firefox: support.mozilla.org/kb/cookies-information-websites-store",
              "Safari: support.apple.com/guide/safari/sfri11471",
              "Microsoft Edge: support.microsoft.com/microsoft-edge",
            ],
          },
          {
            kind: "paragraph",
            text: "Bear in mind that blocking all cookies may affect how other websites work if they do rely on them.",
          },
        ],
      },
      {
        id: "cambios-cookies",
        title: "Changes to this policy",
        blocks: [
          {
            kind: "paragraph",
            text: "If we add any tool that uses cookies in future, we will update this policy before activating it and, where the law requires, we will ask for your prior consent through the appropriate mechanism.",
          },
          {
            kind: "paragraph",
            text: `If you have any questions about this policy, you can write to us at ${site.contact.email}.`,
          },
        ],
      },
    ],
  },
};

export default en;
