import Image from "next/image";

import type { Lawyer, SiteContent } from "@/lib/content";

type LawyerCardProps = {
  lawyer: Lawyer;
  /** `compact` para avances (inicio), `detailed` para Quiénes somos. */
  variant?: "compact" | "detailed";
  /** Cadenas de interfaz del idioma actual (`alt` del retrato, etiquetas). */
  ui: SiteContent["ui"];
};

export default function LawyerCard({
  lawyer,
  variant = "compact",
  ui,
}: LawyerCardProps) {
  const isDetailed = variant === "detailed";

  return (
    <article
      className={`group flex flex-col gap-6 ${isDetailed ? "sm:flex-row sm:gap-8" : ""}`}
    >
      <div
        className={`relative aspect-[4/5] shrink-0 overflow-hidden bg-navy ${
          isDetailed ? "w-40 sm:w-44 lg:w-52" : "w-full max-w-[16rem]"
        }`}
      >
        {lawyer.photo ? (
          <Image
            src={lawyer.photo}
            alt={`${ui.portraitAlt} ${lawyer.name}`}
            fill
            sizes={isDetailed ? "13rem" : "16rem"}
            quality={90}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          /* Sin fotografía: monograma sobre fondo navy.
             TODO: sustituir por la foto real de David López Homedes. */
          <span aria-hidden="true" className="absolute inset-0">
            <span className="absolute inset-0 bg-gradient-to-br from-navy-600 to-navy-900" />
            <span className="absolute inset-3 border border-gold/30" />
            <span className="absolute inset-0 flex items-center justify-center font-serif text-4xl tracking-widest text-gold-200">
              {lawyer.initials}
            </span>
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl font-normal">{lawyer.name}</h3>
        <p className="mt-2 font-sans text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">
          {lawyer.role}
        </p>
        <span aria-hidden="true" className="mt-5 h-px w-12 bg-gold" />

        <div className="mt-5 space-y-1 text-base text-slate">
          {lawyer.education.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>

        {isDetailed ? (
          <div className="mt-6">
            <p className="font-sans text-xs font-semibold tracking-[0.16em] text-navy uppercase">
              {ui.specialtiesLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {lawyer.specialties.map((specialty) => (
                <li
                  key={specialty}
                  className="border border-navy-200 px-3 py-1 font-sans text-sm text-slate transition-colors duration-200 group-hover:border-gold/40"
                >
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}
