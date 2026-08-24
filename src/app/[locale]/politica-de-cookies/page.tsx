import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Hero from "@/components/Hero";
import LegalDocumentBody from "@/components/LegalDocumentBody";
import { getLegal } from "@/lib/content";
import { buildAlternates, isLocale } from "@/lib/i18n";

const PATH = "/politica-de-cookies";

export async function generateMetadata(
  props: PageProps<"/[locale]/politica-de-cookies">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { cookies } = getLegal(locale);

  return {
    title: cookies.meta.title,
    description: cookies.meta.description,
    alternates: buildAlternates(locale, PATH),
  };
}

export default async function PoliticaDeCookiesPage({
  params,
}: PageProps<"/[locale]/politica-de-cookies">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { cookies } = getLegal(locale);

  return (
    <>
      <Hero
        eyebrow={cookies.eyebrow}
        title={cookies.title}
        subtitle={cookies.subtitle}
      />
      <LegalDocumentBody doc={cookies} />
    </>
  );
}
