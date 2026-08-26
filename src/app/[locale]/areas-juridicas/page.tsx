import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import SectionHeading from "@/components/SectionHeading";
import { getContent } from "@/lib/content";
import { buildAlternates, isLocale, localizedHref } from "@/lib/i18n";

const PATH = "/areas-juridicas";

export async function generateMetadata(
  props: PageProps<"/[locale]/areas-juridicas">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { pageMeta } = getContent(locale);

  return {
    title: pageMeta.practiceAreas.title,
    description: pageMeta.practiceAreas.description,
    alternates: buildAlternates(locale, PATH),
  };
}

export default async function AreasJuridicasPage({
  params,
}: PageProps<"/[locale]/areas-juridicas">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { practiceAreas } = getContent(locale);

  return (
    <>
      <Hero
        eyebrow={practiceAreas.hero.eyebrow}
        title={practiceAreas.hero.title}
        subtitle={practiceAreas.hero.subtitle}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
            <SectionHeading
              eyebrow={practiceAreas.intro.eyebrow}
              title={practiceAreas.intro.title}
            />
            <div className="space-y-5 text-base text-slate sm:text-lg">
              {practiceAreas.intro.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-justify hyphens-auto">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {practiceAreas.items.map((item) => (
              <PracticeAreaCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-navy-100 bg-cream py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
            <SectionHeading
              as="h3"
              eyebrow={practiceAreas.cta.eyebrow}
              title={practiceAreas.cta.title}
              description={practiceAreas.cta.description}
            />
            <Button href={localizedHref(locale, "/contacto")} className="shrink-0">
              {practiceAreas.cta.action}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
