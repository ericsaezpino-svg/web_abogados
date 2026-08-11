import type { ReactNode } from "react";

import Container from "@/components/Container";

type HeroProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** `full` para la portada, `compact` para cabeceras de página interior. */
  variant?: "full" | "compact";
  /** CTAs opcionales. */
  actions?: ReactNode;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  variant = "compact",
  actions,
}: HeroProps) {
  const isFull = variant === "full";

  return (
    <section
      className={`relative overflow-hidden bg-navy ${
        isFull ? "pt-36 pb-24 sm:pt-44 sm:pb-32" : "pt-32 pb-16 sm:pt-40 sm:pb-20"
      }`}
    >
      {/* Textura sobria: degradado y filete dorado inferior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-navy-600/70 via-navy to-navy-900"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
      />

      <Container className="relative">
        <div className={isFull ? "max-w-3xl" : "max-w-2xl"}>
          {eyebrow ? (
            <p className="flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-gold" />
              {eyebrow}
            </p>
          ) : null}

          <h1
            className={`mt-5 font-normal text-white ${
              isFull
                ? "text-5xl leading-[1.05] sm:text-6xl lg:text-7xl"
                : "text-4xl leading-tight sm:text-5xl"
            }`}
          >
            {title}
          </h1>

          {subtitle ? (
            <p
              className={`mt-6 text-navy-100 ${
                isFull
                  ? "max-w-2xl text-lg sm:text-xl"
                  : "max-w-xl text-base sm:text-lg"
              }`}
            >
              {subtitle}
            </p>
          ) : null}

          {actions ? (
            <div className="mt-10 flex flex-wrap items-center gap-4">{actions}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
