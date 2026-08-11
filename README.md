# Abogados Marina — web corporativa

Web del despacho **Abogados Marina** (Carmen Pino Lucas y Lorena Vinent Guillem).
Sitio informativo multi-página, estático, construido según `PLAN-abogados-marina.md`.

> **Todo el contenido textual es placeholder (lorem ipsum).** La estructura y el diseño son definitivos.

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4 (tokens de diseño en `src/app/globals.css`)
- `next/font/google`: Cormorant Garamond (titulares) + Inter (cuerpo)
- Iconos: `lucide-react`
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
    layout.tsx              # fuentes, Header, Footer, metadata base y Open Graph
    page.tsx                # Inicio
    icon.svg                # favicon placeholder
    globals.css             # tokens de color/tipografía (@theme de Tailwind v4)
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
    Footer.tsx              # datos del despacho, navegación y enlaces legales
    LawyerCard.tsx          # ficha de abogada (variantes compact / detailed)
    PracticeAreaCard.tsx    # tarjeta de área jurídica (icono + texto)
    ContactForm.tsx         # formulario con validación en cliente (client)
  lib/
    content.ts              # TODO: todos los textos placeholder viven aquí
    icons.ts                # mapa clave → icono de lucide-react
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

## Pendiente (fuera del alcance de esta versión)

- Sustituir el lorem ipsum por contenido real (`src/lib/content.ts`).
- Fotografías reales de las abogadas y logotipos de colaboradores (hoy monogramas placeholder).
- Backend del formulario de contacto — ver `// TODO` en `src/components/ContactForm.tsx`.
- Páginas legales reales (Aviso legal, Privacidad, Cookies) — hoy apuntan a `#`.
- Dirección real y embed de mapa definitivo (`site.contact` en `content.ts`).
