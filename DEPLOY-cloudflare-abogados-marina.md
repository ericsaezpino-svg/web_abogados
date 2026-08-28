# Despliegue en Cloudflare — «Abogados Marina 204»

> La web es **informativa y 100 % estática**: 9 páginas en 3 idiomas, sin backend,
> sin base de datos, sin login, sin formulario que se procese en servidor. El
> contenido solo cambia cuando se edita el código y se vuelve a desplegar.
>
> Por eso se despliega como **export estático** (`output: "export"` de Next.js)
> sobre **Cloudflare Pages**, sin el adaptador OpenNext ni Workers. Menos piezas,
> plan gratuito, y el HTML se sirve ya hecho desde el borde.
>
> Si en el futuro hiciera falta algo dinámico (envío real de formularios, blog con
> contenido que se actualiza solo…), se añade una función suelta entonces; no hay
> que rehacer la web.

---

## 1. Qué se ha tocado en el código

Ya aplicado en el repo:

| Archivo | Cambio |
| --- | --- |
| `next.config.ts` | `output: "export"` + `images.unoptimized: true`. Se han quitado los `redirects()` (no funcionan en export). |
| `public/_redirects` | Redirecciones en el borde: `/` → `/es` y rutas antiguas sin idioma → castellano. |
| `public/_headers` | Cache-Control largo para `/_next/static/*` y las fotos de `/equipo`. |
| `src/lib/content/site.ts` | `url` → `https://www.abogadosmarina204.com` (canónicas, hreflang, sitemap). |
| `src/app/sitemap.ts` | Genera `sitemap.xml` con las 8 rutas × 3 idiomas y `hreflang`. |
| `src/app/robots.ts` | Genera `robots.txt` (todo indexable) y apunta al sitemap. |

`package.json` no necesita cambios: `npm run build` ya produce `out/`.

### `next dev` en local

Sigue funcionando igual (`npm run dev`). Único detalle: en local `/` ya no
redirige a `/es` (eso lo hace `_redirects`, que solo actúa en Cloudflare). En
desarrollo, entrar directamente en `http://localhost:3000/es`.

---

## 2. Validación local antes de subir

```bash
npm run build          # genera out/ ; debe terminar sin errores
npx serve out          # sirve la carpeta como lo haría un host estático
```

Comprobar en `http://localhost:3000` (el puerto que indique `serve`):

- `/es`, `/en`, `/ca` y sus subpáginas cargan.
- `/sitemap.xml` y `/robots.txt` responden.
- Una ruta inexistente (`/es/no-existe`) muestra el 404.

> Nota: `serve` no aplica `_redirects`/`_headers`; eso solo se ve ya en Cloudflare.

---

## 3. Comprar el dominio en Cloudflare

Panel de Cloudflare → **Domain Registration → Register Domain** → `abogadosmarina204.com`.

Al registrarlo en la misma cuenta, la zona DNS se crea automáticamente y el SSL se
provisiona solo.

---

## 4. Crear el proyecto en Cloudflare Pages

**Workers & Pages → Create → Pages → Connect to Git** y elegir este repositorio.

Configuración de build:

| Campo | Valor |
| --- | --- |
| Framework preset | **Next.js (Static HTML Export)** |
| Build command | `npx next build` |
| Build output directory | `out` |
| Production branch | `main` |

Variables de entorno de build: ninguna necesaria.

Guardar y desplegar. A partir de ahí:

- Cada push a `main` → despliegue de **producción**.
- Cada push a `develop` o cada Pull Request → **URL de preview** propia.

Flujo de trabajo: trabajar en `develop`, revisar en la URL de preview, y merge a
`main` cuando esté validado.

---

## 5. Conectar el dominio

En el proyecto de Pages → **Custom domains → Set up a custom domain**:

1. Añadir `www.abogadosmarina204.com` (dominio canónico del sitio).
2. Añadir también `abogadosmarina204.com` y, cuando lo pida, configurar la
   **redirección del apex a `www`** (Cloudflare ofrece hacerlo automáticamente con
   una Redirect Rule; si no, crear una regla `abogadosmarina204.com/*` →
   `https://www.abogadosmarina204.com/$1`, 301).

Los registros DNS los crea Cloudflare solo al estar el dominio en la cuenta.

---

## 6. SEO — pasos post-despliegue (gratis)

- **Google Search Console**: dar de alta `https://www.abogadosmarina204.com`,
  verificar la propiedad y enviar `https://www.abogadosmarina204.com/sitemap.xml`.
- **Google Business Profile**: crear/reclamar la ficha del despacho (clave para el
  SEO local de un bufete). Dirección: Calle Marina 204, local izquierda, 08013
  Barcelona.
- Comprobar en producción que cada página trae su `<title>`, `<meta description>`,
  `<link rel="canonical">` y los `hreflang` de los tres idiomas (ya generados por
  el código).

---

## 7. Antes de considerar la web «publicada»

Pendientes de contenido, no de despliegue (ver `TODO_LEGAL` en `site.ts`):

- Completar NIF, nº de colegiado y colegio de los tres profesionales en los
  documentos legales, o confirmar la decisión de no publicarlos.
- Confirmar el número de WhatsApp del despacho.
- Foto de David López Homedes (hoy su ficha muestra el monograma).
- Revisión de las traducciones al inglés y catalán por el despacho.

---

## 8. Checklist de despliegue

- [ ] `npm run build` termina sin errores y genera `out/`.
- [ ] `npx serve out` — navegación, `sitemap.xml`, `robots.txt` y 404 correctos.
- [ ] Dominio `abogadosmarina204.com` registrado en Cloudflare.
- [ ] Proyecto de Pages conectado al repo (build `npx next build`, salida `out`).
- [ ] Primer deploy de producción OK en la URL `*.pages.dev`.
- [ ] `www.abogadosmarina204.com` conectado + apex redirige a `www`.
- [ ] Search Console verificado y sitemap enviado.
