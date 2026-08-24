import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Container from "@/components/Container";
import Hero from "@/components/Hero";
import LawyerCard from "@/components/LawyerCard";
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/lib/content";
import { buildAlternates, isLocale } from "@/lib/i18n";
import { icons } from "@/lib/icons";

const PATH = "/quienes-somos";

export async function generateMetadata(
  props: PageProps<"/[locale]/quienes-somos">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { pageMeta } = getContent(locale);

  return {
    title: pageMeta.about.title,
    description: pageMeta.about.description,
    alternates: buildAlternates(locale, PATH),
  };
}

export default async function QuienesSomosPage({
  params,
}: PageProps<"/[locale]/quienes-somos">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { about, lawyers, ui } = getContent(locale);

  return (
    <>
      <Hero
        eyebrow={about.hero.eyebrow}
        title={about.hero.title}
        subtitle={about.hero.subtitle}
      />

      {/* Texto institucional */}
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
            <SectionHeading eyebrow={about.intro.eyebrow} title={about.intro.title} />
            <div>
              <div className="space-y-5 text-base text-slate sm:text-lg">
                {about.intro.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-justify hyphens-auto">
                    {paragraph}
                  </p>
                ))}
              </div>
              <blockquote className="mt-10 border-l-2 border-gold pl-6 font-serif text-xl leading-relaxed text-navy sm:text-2xl">
                {about.intro.highlight}
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* Las dos abogadas */}
      <section className="border-y border-navy-100 bg-cream py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={about.team.eyebrow}
            title={about.team.title}
            description={about.team.description}
          />
          <div className="mt-14 space-y-14 [&>article+article]:border-t [&>article+article]:border-navy-100 [&>article+article]:pt-14">
            {lawyers.map((lawyer) => (
              <LawyerCard
                key={lawyer.name}
                lawyer={lawyer}
                variant="detailed"
                ui={ui}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Valores */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow={about.values.eyebrow}
            title={about.values.title}
            description={about.values.description}
          />
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.items.map((item) => {
              const Icon = icons[item.icon];

              return (
                <li key={item.title} className="text-center">
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-normal">{item.title}</h3>
                  <p className="mt-3 text-base text-slate">{item.description}</p>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </>
  );
}
