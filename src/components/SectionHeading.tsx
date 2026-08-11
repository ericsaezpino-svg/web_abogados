import type { ReactNode } from "react";

type SectionHeadingProps = {
  /** Antetítulo corto en dorado sobre el titular. */
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  as?: "h2" | "h3";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  as: Heading = "h2",
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={`${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`flex items-center gap-3 font-sans text-xs font-semibold tracking-[0.18em] uppercase ${
            isCenter ? "justify-center" : ""
          } ${tone === "light" ? "text-gold-300" : "text-gold-700"}`}
        >
          <span aria-hidden="true" className="h-px w-8 bg-gold" />
          {eyebrow}
        </p>
      ) : null}

      <Heading
        className={`mt-4 text-3xl leading-tight font-normal sm:text-4xl ${
          tone === "light" ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </Heading>

      {description ? (
        <p
          className={`mt-5 text-base sm:text-lg ${
            tone === "light" ? "text-navy-100" : "text-slate"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
