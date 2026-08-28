# Despliegue en Cloudflare — «Abogados Marina 204»

> La web es **informativa y 100 % estática**: 9 páginas en 3 idiomas, sin backend,
> sin base de datos, sin login, sin formulario que se procese en servidor. El
> contenido solo cambia cuando se edita el código y se vuelve a desplegar.
>
> Por eso se despliega como **export estático** (`output: "export"` de Next.js),
> sin el adaptador OpenNext. El proyecto en Cloudflare es un **Worker de solo
> assets** (`wrangler.jsonc` sin `main`): no ejecuta código de servidor, solo
> sirve la carpeta `out/` desde el borde. Plan gratuito.
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
| `wrangler.jsonc` | Worker de solo assets: `assets.directory: "./out"`, `not_found_handling: "404-page"`. Sin `main`. |
| `.gitignore` | Añadido `.wrangler/`. |

`package.json` no necesita cambios: `npm run build` ya produce `out/`, y el
despliegue lo hace `npx wrangler deploy` (Wrangler lo aporta el entorno de build
de Cloudflare).

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

## 4. Configuración de build del Worker (Workers Builds)

El proyecto ya existe en **Workers & Pages** como Worker conectado a Git. Hay que
corregir los comandos de build, que quedaron con la vía OpenNext descartada.

En el Worker → **Settings → Build**:

| Campo | Valor |
| --- | --- |
| Build command | `npx next build` |
| Deploy command | `npx wrangler deploy` |
| Branch (producción) | `main` |
| Root directory | *(vacío)* |

Guardar y lanzar **Retry deployment** (o hacer un push a `main`).

Flujo de trabajo: cada push a `main` despliega producción; los Pull Requests
generan una preview con URL propia (*Preview URLs* en la pestaña Settings).

> Si prefirieras **Cloudflare Pages** en vez de Worker: crear un proyecto nuevo
> con *Pages → Connect to Git*, build `npx next build`, output `out`. El
> `wrangler.jsonc` sobra en ese caso pero no molesta.

---

## 5. Conectar el dominio

En el Worker → pestaña **Domains → Add → Custom domain**:

1. Añadir `www.abogadosmarina204.com` (dominio canónico del sitio).
2. Para el apex `abogadosmarina204.com`, crear en la zona una **Redirect Rule**:
   `abogadosmarina204.com/*` → `https://www.abogadosmarina204.com/${1}` (301,
   *Preserve query string*).

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
- [ ] Worker: `Settings → Build` con build `npx next build` y deploy `npx wrangler deploy`.
- [ ] Cambios commiteados y en `main`; build verde en *Deployments*.
- [ ] Primer deploy de producción OK en la URL `*.workers.dev`.
- [ ] `www.abogadosmarina204.com` conectado + apex redirige a `www`.
- [ ] Search Console verificado y sitemap enviado.
