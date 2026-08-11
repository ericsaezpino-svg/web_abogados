# Plan de desarrollo — Web «Abogados Marina»

> Documento de trabajo para ejecutar con Claude Code. Describe qué construir, con qué stack, con qué diseño y en qué orden. Todo el contenido textual es **placeholder (lorem ipsum)**; la estructura y el diseño son definitivos.

---

## 1. Objetivo

Construir la web corporativa del despacho **Abogados Marina**, formado por dos abogadas: **Carmen Pino Lucas** y **Lorena Vinent Guillem**.

La web debe transmitir **elegancia y seriedad** (estética de despacho jurídico clásico pero moderno). Referencias visuales de inspiración: peritoslara.es y bagesolivet.com/es (secciones limpias, mucho aire, jerarquía tipográfica marcada, tono institucional).

La web tiene **4 apartados** además del inicio:
1. Quiénes somos
2. Áreas jurídicas
3. Colaboradores
4. Contacto

---

## 2. Stack técnico

- **Framework:** Next.js (App Router, última versión estable) con TypeScript.
- **Estilos:** Tailwind CSS.
- **Fuentes:** cargadas con `next/font/google`.
- **Iconos:** `lucide-react`.
- **Estructura:** **multi-página** (una URL por sección, no one-page).
- **Renderizado:** estático (SSG) siempre que sea posible — es una web informativa.
- **Gestor de paquetes:** npm.
- **Linter/formato:** ESLint + Prettier (config por defecto de Next.js).

### Comandos de arranque esperados
```bash
npx create-next-app@latest abogados-marina --typescript --tailwind --app --eslint --src-dir --import-alias "@/*"
```

---

## 3. Identidad visual

### Paleta de color
Definir estos tokens en `tailwind.config.ts` (dentro de `theme.extend.colors`) y/o como variables CSS en `globals.css`:

| Token | Hex | Uso |
|-------|-----|-----|
| `navy` (principal) | `#1B2A4A` | Color institucional, cabeceras, fondos oscuros |
| `gold` (acento) | `#B08D57` | CTAs, detalles, subrayados, iconos |
| `cream` | `#F8F7F4` | Fondos claros de sección |
| `ink` | `#1A1A1A` | Texto principal |
| `slate` | `#6B7280` | Texto secundario / apoyo |
| `white` | `#FFFFFF` | Fondos base |

Sugerencia de escala: generar variantes 50–900 de `navy` y `gold` para hovers y estados.

### Tipografía
- **Titulares (serif):** Cormorant Garamond (alternativa: Playfair Display). Transmite tradición y prestigio.
- **Cuerpo (sans-serif):** Inter (alternativa: Source Sans 3). Legibilidad y limpieza.
- Cargar ambas con `next/font/google` y exponerlas como variables (`--font-serif`, `--font-sans`) mapeadas en Tailwind (`fontFamily.serif`, `fontFamily.sans`).

### Principios de diseño
- Mucho espacio en blanco, márgenes generosos, secciones amplias (`py-20`/`py-24`).
- Jerarquía tipográfica marcada: titulares serif grandes, cuerpo sans cómodo (16–18px).
- Detalles sobrios en dorado (líneas finas, subrayados, iconos) — sin abusar.
- Transiciones suaves en hover (200–300ms).
- Diseño **totalmente responsive** (mobile-first): breakpoints estándar de Tailwind.
- Accesibilidad: contraste AA, `alt` en imágenes, foco visible, HTML semántico.

---

## 4. Arquitectura de rutas (App Router)

```
src/
  app/
    layout.tsx            # Layout raíz: fuentes, <Header/>, <Footer/>, metadata base
    page.tsx              # Inicio (/)
    globals.css
    quienes-somos/
      page.tsx            # /quienes-somos
    areas-juridicas/
      page.tsx            # /areas-juridicas
    colaboradores/
      page.tsx            # /colaboradores
    contacto/
      page.tsx            # /contacto
  components/
    Header.tsx            # Navegación fija con logo + enlaces + estado activo
    Footer.tsx            # Datos del despacho, enlaces legales, redes
    Hero.tsx              # Hero reutilizable para cabeceras de página
    SectionHeading.tsx    # Titular de sección con detalle dorado
    Container.tsx         # Wrapper de ancho máximo
    LawyerCard.tsx        # Tarjeta de abogada (foto, nombre, rol, bio breve)
    PracticeAreaCard.tsx  # Tarjeta de área jurídica (icono + título + descripción)
    ContactForm.tsx       # Formulario de contacto (client component)
    Button.tsx           # Botón/CTA reutilizable (variantes primary/outline)
  lib/
    content.ts           # Contenido placeholder centralizado (lorem ipsum)
```

> **Nota sobre contenido:** todo el texto (titulares, párrafos, bios, descripciones de áreas) es **lorem ipsum**. Centralizar los textos placeholder en `src/lib/content.ts` para que sea trivial sustituirlos por contenido real más adelante.

---

## 5. Componentes globales

### Header (navegación)
- Fija en la parte superior (sticky), fondo blanco/crema con ligera sombra al hacer scroll.
- Izquierda: logo tipográfico **«Abogados Marina»** (serif, en navy). Si no hay logo gráfico, usar wordmark elegante.
- Derecha: enlaces a Inicio, Quiénes somos, Áreas jurídicas, Colaboradores, Contacto.
- Estado activo de la ruta actual subrayado en dorado.
- CTA «Contacto» destacado como botón.
- Menú hamburguesa en móvil (drawer lateral).

### Footer
- Fondo navy, texto claro.
- Columnas: nombre del despacho + tagline placeholder / enlaces de navegación / datos de contacto placeholder (dirección, teléfono, email) / enlaces legales (Aviso legal, Política de privacidad, Cookies — pueden apuntar a `#` por ahora).
- Línea inferior: «© 2026 Abogados Marina. Todos los derechos reservados.»

---

## 6. Especificación por página

### 6.1 Inicio (`/`)
- **Hero** a pantalla amplia: fondo navy o imagen sobria con overlay; titular serif grande («Abogados Marina» + subtítulo placeholder), CTA a Contacto y a Áreas jurídicas.
- **Bloque intro:** breve presentación del despacho (2–3 párrafos lorem ipsum) sobre fondo crema.
- **Grid de las 4 secciones:** tarjetas con icono + título + descripción corta, cada una enlaza a su página.
- **Bloque de las dos abogadas:** avance con `LawyerCard` ×2, enlaza a Quiénes somos.
- **Franja CTA final:** fondo navy con dorado, invitación a contactar.

### 6.2 Quiénes somos (`/quienes-somos`)
- Cabecera de página (`Hero` compacto con título de sección).
- Texto institucional del despacho (varios párrafos lorem ipsum, con algún destacado).
- **Las dos abogadas** en detalle con `LawyerCard`:
  - **Carmen Pino Lucas** — rol/placeholder + bio lorem ipsum + foto placeholder.
  - **Lorena Vinent Guillem** — rol/placeholder + bio lorem ipsum + foto placeholder.
- Opcional: bloque de valores/compromiso (3–4 items con icono).

### 6.3 Áreas jurídicas (`/areas-juridicas`)
- Cabecera de página.
- Intro breve (lorem ipsum).
- **Grid de áreas** con `PracticeAreaCard` (icono + título + descripción). Usar **6–8 áreas genéricas de ejemplo** con títulos y textos lorem ipsum (p. ej. «Derecho Civil», «Derecho Penal», «Derecho Laboral», «Derecho de Familia», «Derecho Mercantil», «Derecho Administrativo» — títulos reales genéricos, descripciones lorem ipsum). Iconos de `lucide-react`.

### 6.4 Colaboradores (`/colaboradores`)
- Cabecera de página.
- Intro breve (lorem ipsum).
- **Grid de logos/tarjetas de colaboradores** placeholder (6–9 recuadros con logo genérico o nombre lorem ipsum). Efecto sobrio en hover.

### 6.5 Contacto (`/contacto`)
- Cabecera de página.
- Layout a dos columnas:
  - **Izquierda:** formulario (`ContactForm`) con campos Nombre, Email, Teléfono, Mensaje + checkbox de aceptación de política de privacidad + botón enviar. Validación básica en cliente. **Sin backend real**: al enviar, mostrar mensaje de éxito simulado (no configurar envío de correo en esta versión). Dejar un comentario `// TODO: conectar backend/servicio de email`.
  - **Derecha:** datos de contacto placeholder (dirección, teléfono, email, horario) con iconos + un mapa embebido placeholder (iframe de Google Maps genérico o recuadro placeholder).

---

## 7. SEO y metadatos

- Usar la API `metadata` de Next.js en cada `page.tsx` (title, description placeholder por página).
- `lang="es"` en el `<html>`.
- Titles con patrón: `«{Sección} | Abogados Marina»`.
- Incluir `favicon` placeholder y un Open Graph básico en el layout raíz.

---

## 8. Calidad y entrega

- El proyecto debe **compilar y ejecutarse** con `npm run dev` sin errores.
- `npm run build` debe pasar sin errores de tipos ni de lint.
- Código limpio, componentes tipados, sin `any` innecesarios.
- README breve con instrucciones de arranque.

---

## 9. Orden de ejecución sugerido

1. Crear proyecto Next.js con la config indicada.
2. Configurar Tailwind (colores, fuentes) y `globals.css`.
3. Crear `Container`, `Button`, `SectionHeading` (primitivos).
4. Crear `Header` y `Footer` + `layout.tsx`.
5. Centralizar textos placeholder en `lib/content.ts`.
6. Construir la página de **Inicio**.
7. Construir **Quiénes somos** (+ `LawyerCard`).
8. Construir **Áreas jurídicas** (+ `PracticeAreaCard`).
9. Construir **Colaboradores**.
10. Construir **Contacto** (+ `ContactForm`).
11. Pasada de responsive, accesibilidad y pulido visual.
12. `npm run build` y verificación final.

---

## 10. Fuera de alcance (esta versión)

- Contenido real (todo es lorem ipsum).
- Backend / envío real de formularios.
- CMS o panel de administración.
- Multi-idioma.
- Textos legales reales (Aviso legal, Privacidad, Cookies) — enlaces placeholder.
