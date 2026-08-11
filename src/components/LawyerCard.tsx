import type { Lawyer } from "@/lib/content";

type LawyerCardProps = {
  lawyer: Lawyer;
  /** `compact` para avances (inicio), `detailed` para Quiénes somos. */
  variant?: "compact" | "detailed";
};

export default function LawyerCard({ lawyer, variant = "compact" }: LawyerCardProps) {
  const isDetailed = variant === "detailed";

  return (
    <article className="group flex flex-col gap-6 sm:flex-row sm:gap-8">
      {/*
        Foto placeholder: monograma sobre fondo navy.
        TODO: sustituir por la fotografía real (next/image) con su texto alternativo.
      */}
      <div
        aria-hidden="true"
        className="relative flex aspect-[4/5] w-40 shrink-0 items-center justify-center overflow-hidden bg-navy sm:w-44 lg:w-52"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy-600 to-navy-900" />
        <div className="absolute inset-3 border border-gold/30" />
        <span className="relative font-serif text-4xl tracking-widest text-gold-200">
          {lawyer.initials}
        </span>
      </div>

      <div className="flex flex-col">
        <h3 className="text-2xl font-normal">{lawyer.name}</h3>
        <p className="mt-2 font-sans text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">
          {lawyer.role}
        </p>
        <span aria-hidden="true" className="mt-5 h-px w-12 bg-gold" />

        {isDetailed ? (
          <div className="mt-5 space-y-4 text-base text-slate">
            {lawyer.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : (
          <p className="mt-5 text-base text-slate">{lawyer.shortBio}</p>
        )}
      </div>
    </article>
  );
}
