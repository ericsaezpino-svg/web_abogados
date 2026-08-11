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
