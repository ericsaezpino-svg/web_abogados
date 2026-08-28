import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático: `next build` genera la web como HTML/CSS/JS en `out/`,
  // sin runtime de servidor. Se despliega en Cloudflare Pages.
  output: "export",
  images: {
    // El optimizador de imágenes de Next necesita un servidor; en export
    // estático se sirven las imágenes tal cual. Las fotos del equipo se
    // optimizan a mano antes de subirlas.
    unoptimized: true,
  },
  // Nota: `redirects()` de next.config NO funciona con `output: "export"`.
  // Los redirects de producción (`/` -> `/es` y rutas antiguas) viven en
  // `public/_redirects`, que Cloudflare Pages aplica en el borde.
};

export default nextConfig;
