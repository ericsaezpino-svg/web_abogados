import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Hero from "@/components/Hero";
import LegalDocumentBody from "@/components/LegalDocumentBody";
import { getLegal } from "@/lib/content";
import { buildAlternates, isLocale } from "@/lib/i18n";

const PATH = "/politica-de-privacidad";

export async function generateMetadata(
  props: PageProps<"/[locale]/politica-de-privacidad">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { privacy } = getLegal(locale);

  return {
    title: privacy.meta.title,
    description: privacy.meta.description,
    alternates: buildAlternates(locale, PATH),
  };
}

export default async function PoliticaDePrivacidadPage({
  params,
}: PageProps<"/[locale]/politica-de-privacidad">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { privacy } = getLegal(locale);

  return (
    <>
      <Hero
        eyebrow={privacy.eyebrow}
        title={privacy.title}
        subtitle={privacy.subtitle}
      />
      <LegalDocumentBody doc={privacy} />
    </>
  );
}
