import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/lib/content";
import { buildAlternates, isLocale } from "@/lib/i18n";

const PATH = "/colaboradores";

export async function generateMetadata(
  props: PageProps<"/[locale]/colaboradores">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { pageMeta } = getContent(locale);

  return {
    title: pageMeta.collaborators.title,
    description: pageMeta.collaborators.description,
    alternates: buildAlternates(locale, PATH),
  };
}

export default async function ColaboradoresPage({
  params,
}: PageProps<"/[locale]/colaboradores">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { collaborators } = getContent(locale);

  return (
    <>
      <Hero
        eyebrow={collaborators.hero.eyebrow}
        title={collaborators.hero.title}
        subtitle={collaborators.hero.subtitle}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
            <SectionHeading
              eyebrow={collaborators.intro.eyebrow}
              title={collaborators.intro.title}
            />
            <div className="space-y-5 text-base text-slate sm:text-lg">
              {collaborators.intro.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-justify hyphens-auto">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Rejilla de colaboradores.
              TODO: sustituir los monogramas por retrato o logotipo si los facilitan. */}
          {/* Bordes colapsados con márgenes negativos: así una fila incompleta
              no deja celdas vacías coloreadas. */}
          <ul className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {collaborators.items.map((item) => (
              <li
                key={item.name}
                className="group -mt-px -ml-px flex flex-col items-center justify-center gap-4 border border-navy-100 bg-white px-6 py-12 text-center transition-colors duration-300 hover:bg-cream"
              >
                <span
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center border border-navy-200 font-serif text-xl tracking-widest text-navy-400 transition-colors duration-300 group-hover:border-gold group-hover:text-gold"
                >
                  {item.initials}
                </span>
                <span className="font-serif text-lg text-navy">{item.name}</span>
                <span className="font-sans text-xs tracking-[0.14em] text-gold-700 uppercase">
                  {item.role}
                </span>
                {item.credential ? (
                  <span className="font-sans text-xs tracking-wide text-slate">
                    {item.credential}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
