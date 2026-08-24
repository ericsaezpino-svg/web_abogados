import type { NextConfig } from "next";

import { defaultLocale } from "./src/lib/i18n";

/** Rutas que existían antes de añadir los idiomas: se mantienen vivas. */
const legacyPaths = [
  "/quienes-somos",
  "/areas-juridicas",
  "/colaboradores",
  "/contacto",
];

const nextConfig: NextConfig = {
  images: {
    // Next.js 16 exige declarar explícitamente las calidades permitidas
    // para <Image quality={...}>; sin esto, cualquier valor distinto de 75
    // se redondea silenciosamente a 75.
    qualities: [75, 90],
  },
  async redirects() {
    return [
      // La raíz lleva al idioma por defecto (castellano).
      { source: "/", destination: `/${defaultLocale}`, permanent: false },
      ...legacyPaths.map((path) => ({
        source: path,
        destination: `/${defaultLocale}${path}`,
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
