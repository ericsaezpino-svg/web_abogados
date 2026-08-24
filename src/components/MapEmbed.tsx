"use client";

import { ExternalLink, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type MapEmbedProps = {
  embedUrl: string;
  externalUrl: string;
  /** Título accesible del iframe. */
  frameTitle: string;
  heading: string;
  /** Explica que al cargar el mapa se contacta con Google. */
  notice: string;
  action: string;
  externalLabel: string;
  /** Enlace a la política de cookies, ya prefijado con el idioma. */
  cookiesHref: string;
  cookiesLabel: string;
};

/**
 * Mapa de Google que **no se carga hasta que el visitante lo pide**.
 *
 * Un iframe de Maps contacta con servidores de Google en cuanto se renderiza y
 * les transmite la IP del visitante, además de poder fijar identificadores
 * propios. Al dejarlo tras un botón, el sitio no realiza ninguna petición a
 * terceros por defecto y no necesita banner de consentimiento.
 */
export default function MapEmbed({
  embedUrl,
  externalUrl,
  frameTitle,
  heading,
  notice,
  action,
  externalLabel,
  cookiesHref,
  cookiesLabel,
}: MapEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="aspect-[4/3] w-full overflow-hidden border border-navy-100 bg-white lg:aspect-auto lg:min-h-[28rem]">
        <iframe
          src={embedUrl}
          title={frameTitle}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0 grayscale-[35%]"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[4/3] w-full flex-col items-center justify-center border border-navy-100 bg-cream px-8 py-10 text-center lg:aspect-auto lg:min-h-[28rem]">
      <span className="inline-flex h-12 w-12 items-center justify-center border border-gold/40 text-gold">
        <MapPin className="h-5 w-5" aria-hidden="true" />
      </span>

      <h3 className="mt-6 text-xl font-normal">{heading}</h3>

      <p className="mt-3 max-w-sm text-base text-slate">
        {notice}{" "}
        <Link
          href={cookiesHref}
          className="underline decoration-gold decoration-1 underline-offset-4 transition-colors duration-200 hover:text-gold-700"
        >
          {cookiesLabel}
        </Link>
        .
      </p>

      <button
        type="button"
        onClick={() => setLoaded(true)}
        className="mt-6 inline-flex items-center px-6 py-3 font-sans text-xs font-medium tracking-[0.12em] text-white uppercase transition-colors duration-200 bg-gold hover:bg-gold-700"
      >
        {action}
      </button>

      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-flex items-center gap-1.5 font-sans text-sm text-navy underline decoration-gold decoration-1 underline-offset-4 transition-colors duration-200 hover:text-gold-700"
      >
        {externalLabel}
        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  );
}
