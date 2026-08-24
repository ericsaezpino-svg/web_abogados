# Abogados Marina 204 — web corporativa

Web del despacho **Abogados Marina 204** (María del Carmen Pino Lucas, David
López Homedes y Lorena Vinent Guillem). Sitio informativo multi-página y
estático, construido según `PLAN-abogados-marina.md`.

> El contenido es el **texto real** facilitado en `docs/Contenido página web.docx`.
> El castellano es el original; inglés y catalán son traducciones pendientes de
> revisión por el despacho.

Trilingüe: **castellano (por defecto)**, inglés y catalán.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4 (tokens de diseño en `src/app/globals.css`)
- `next/font/google`: Cormorant Garamond (titulares) + Inter (cuerpo)
- Iconos: `lucide-react`
- i18n propia (sin dependencias): segmento `[locale]` + diccionarios tipados
- ESLint (config de Next) + Prettier

## Arranque

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros comandos:

```bash
npm run build    # build de producción (SSG)
npm start        # servir el build
npm run lint     # ESLint
npx prettier --write .
```

## Estructura

```
src/
  app/
    icon.svg                # favicon placeholder
    globals.css             # tokens de color/tipografía (@theme de Tailwind v4)
    [locale]/               # es | en | ca — root layout dentro del segmento
      layout.tsx            # <html lang>, fuentes, Header, Footer, metadata + hreflang
      page.tsx              # Inicio
      quienes-somos/page.tsx
      areas-juridicas/page.tsx
      colaboradores/page.tsx
      contacto/page.tsx
      aviso-legal/page.tsx
      politica-de-privacidad/page.tsx
      politica-de-cookies/page.tsx
  components/
    Container.tsx           # ancho máximo y padding horizontal
    Button.tsx              # CTA (variantes primary / outline / light)
    SectionHeading.tsx      # antetítulo dorado + titular + descripción
    Hero.tsx                # cabecera (variantes full / compact)
    Header.tsx              # navegación sticky + drawer móvil (client)
    LocaleSwitcher.tsx      # selector de idioma ES · EN · CA (client)
    Footer.tsx              # datos del despacho, navegación y enlaces legales
    LawyerCard.tsx          # ficha de abogado/a (variantes compact / detailed)
    PracticeAreaCard.tsx    # tarjeta de área jurídica (icono + texto)
    ContactChannelCard.tsx  # tarjeta de canal de contacto (teléfono / WhatsApp / email)
    MapEmbed.tsx            # mapa de Google que solo se carga al pulsar (client)
    LegalDocumentBody.tsx   # maquetado de los documentos legales (índice + apartados)
  lib/
    i18n.ts                 # idiomas, helpers de rutas y hreflang
    icons.ts                # mapa clave → icono de lucide-react
    content/
      types.ts              # forma del diccionario (SiteContent)
      site.ts               # datos del despacho independientes del idioma
      es.ts | en.ts | ca.ts # los textos de cada idioma viven aquí
      index.ts              # getContent(locale)
      legal/
        types.ts            # forma de los documentos legales (LegalContent)
        es.ts | en.ts | ca.ts
        index.ts            # getLegal(locale)
public/
  equipo/                   # fotografías del equipo
```

## Identidad visual

| Token   | Hex       | Uso                                 |
| ------- | --------- | ----------------------------------- |
| `navy`  | `#1B2A4A` | Color institucional, fondos oscuros |
| `gold`  | `#B08D57` | CTAs, filetes, iconos               |
| `cream` | `#F8F7F4` | Fondos claros de sección            |
| `ink`   | `#1A1A1A` | Texto principal                     |
| `slate` | `#6B7280` | Texto secundario                    |

`navy` y `gold` tienen escala `50`–`900` para hovers y estados. Se usan como
utilidades de Tailwind (`bg-navy`, `text-gold-700`, `border-navy-100`, …).

## Idiomas

| Idioma               | URL base | `hreflang`         |
| -------------------- | -------- | ------------------ |
| Castellano (defecto) | `/es`    | `es` + `x-default` |
| Inglés               | `/en`    | `en`               |
| Catalán              | `/ca`    | `ca`               |

- Los tres idiomas van prefijados en la URL y las 15 páginas (3 × 5) se
  prerrenderizan como estáticas. `/` redirige a `/es`.
- Los **slugs no se traducen** (`/en/quienes-somos`): así una misma página tiene
  la misma ruta en los tres idiomas y el selector solo cambia el prefijo.
- Un segmento que no sea un idioma válido devuelve 404 (`dynamicParams = false`).
- El selector de idioma conserva la página actual al cambiar de lengua.
- No hay detección por `Accept-Language`: el idioma por defecto es siempre el
  castellano. Añadirla requeriría un `proxy.ts` y dejaría de ser 100 % estático.

### Añadir o cambiar textos

1. Los textos de cada idioma están en `src/lib/content/{es,en,ca}.ts`.
2. La forma la impone `SiteContent` (`src/lib/content/types.ts`): si a una
   traducción le falta una cadena, **falla el type-check**.
3. Los datos que no dependen del idioma (dirección, teléfono, email, rutas de las
   fotos) están en `src/lib/content/site.ts`, y los tres diccionarios los importan
   de ahí: se cambian en un único sitio.

Para añadir un cuarto idioma: añadirlo a `locales` en `src/lib/i18n.ts`, crear su
diccionario y registrarlo en `src/lib/content/index.ts`.

## Pendiente

- **Fotografía de David López Homedes**: en el documento original figura como
  «FOTO». Mientras no exista, su ficha muestra el monograma. Al recibirla, dejarla
  en `public/equipo/` y añadirla a `teamPhotos` (`content/site.ts`) y a los tres
  diccionarios.
- **Traductora judicial**: falta el nombre (en el documento aparece como «NOMBRE Y
  APELLIDOS»), así que no está en la rejilla de colaboradores.
- **Nº de colegiada de Marina Palacios Salvado** (en el documento, «COL. NÚM.
  XXXXX ICAP»): hoy su ficha muestra solo «ICAP».
- **WhatsApp**: se asume el mismo número que el teléfono del despacho
  (`site.contact.whatsappHref` en `content/site.ts`); confirmar.
- **Dominio real** en `site.url` (`content/site.ts`): lo usan la canónica y los
  `hreflang`.
- **Revisión de los textos legales** por el despacho. El aviso legal y la
  política de privacidad **no identifican a los tres profesionales** (nombre,
  NIF y n.º de colegiado) por decisión expresa, pese a que el art. 10 de la
  LSSI-CE y el art. 13.1.a del RGPD lo exigen. Los datos están preparados en
  `legalEntity.professionals` (`content/site.ts`) por si se decide publicarlos.
- **Colegio profesional**: se ha asumido el ICAB (`legalEntity.bar`); confirmar.
- **Entidad de Cloudflare** con la que se contrata el alojamiento, y firmar con
  ella el contrato de encargo del art. 28 del RGPD.
- **Revisión de las traducciones** al inglés y al catalán.
- **Redes sociales**: `socialLinks` (`content/site.ts`) está vacío y el footer
  oculta el bloque; añadir perfiles si el despacho los tiene.

La página de contacto no tiene formulario: ofrece tres canales directos
(teléfono, WhatsApp y email).
