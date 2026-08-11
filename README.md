# Abogados Marina — web corporativa

Web del despacho **Abogados Marina** (Carmen Pino Lucas y Lorena Vinent Guillem).
Sitio informativo multi-página, estático, construido según `PLAN-abogados-marina.md`.

> **Todo el contenido textual es placeholder (lorem ipsum).** La estructura y el diseño son definitivos.

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
  components/
    Container.tsx           # ancho máximo y padding horizontal
    Button.tsx              # CTA (variantes primary / outline / light)
    SectionHeading.tsx      # antetítulo dorado + titular + descripción
    Hero.tsx                # cabecera (variantes full / compact)
    Header.tsx              # navegación sticky + drawer móvil (client)
    LocaleSwitcher.tsx      # selector de idioma ES · EN · CA (client)
    Footer.tsx              # datos del despacho, navegación y enlaces legales
    LawyerCard.tsx          # ficha de abogada (variantes compact / detailed)
    PracticeAreaCard.tsx    # tarjeta de área jurídica (icono + texto)
    ContactChannelCard.tsx  # tarjeta de canal de contacto (agenda / WhatsApp / email)
  lib/
    i18n.ts                 # idiomas, helpers de rutas y hreflang
    icons.ts                # mapa clave → icono de lucide-react
    content/
      types.ts              # forma del diccionario (SiteContent)
      site.ts               # datos del despacho independientes del idioma
      lorem.ts              # relleno compartido por los tres idiomas
      es.ts | en.ts | ca.ts  # TODO: los textos de cada idioma viven aquí
      index.ts              # getContent(locale)
```

## Identidad visual

| Token   | Hex       | Uso                                    |
| ------- | --------- | -------------------------------------- |
| `navy`  | `#1B2A4A` | Color institucional, fondos oscuros    |
| `gold`  | `#B08D57` | CTAs, filetes, iconos                  |
| `cream` | `#F8F7F4` | Fondos claros de sección               |
| `ink`   | `#1A1A1A` | Texto principal                        |
| `slate` | `#6B7280` | Texto secundario                       |

`navy` y `gold` tienen escala `50`–`900` para hovers y estados. Se usan como
utilidades de Tailwind (`bg-navy`, `text-gold-700`, `border-navy-100`, …).

## Idiomas

| Idioma                | URL base | `hreflang`          |
| --------------------- | -------- | ------------------- |
| Castellano (defecto)  | `/es`    | `es` + `x-default`  |
| Inglés                | `/en`    | `en`                |
| Catalán               | `/ca`    | `ca`                |

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
3. El lorem ipsum es común a los tres idiomas (`src/lib/content/lorem.ts`); al
   llegar el contenido real, cada diccionario pondrá su propio texto.

Para añadir un cuarto idioma: añadirlo a `locales` en `src/lib/i18n.ts`, crear su
diccionario y registrarlo en `src/lib/content/index.ts`.

## Pendiente (fuera del alcance de esta versión)

- Sustituir el lorem ipsum por contenido real en los tres diccionarios de
  `src/lib/content/`.
- Fotografías reales de las abogadas y logotipos de colaboradores (hoy monogramas placeholder).
- URL real de la agenda de llamadas y número real de WhatsApp (`site.contact.bookingUrl` y
  `site.contact.whatsappHref` en `content/site.ts`). La página de contacto no tiene formulario:
  ofrece tres canales directos (agendar llamada, WhatsApp, email).
- Dominio real en `site.url` (`content/site.ts`): lo usan la canónica y los `hreflang`.
- Páginas legales reales (Aviso legal, Privacidad, Cookies) — hoy apuntan a `#`.
- Dirección real y embed de mapa definitivo (`site.contact` en `content/site.ts`).
