import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Hero from "@/components/Hero";
import LegalDocumentBody from "@/components/LegalDocumentBody";
import { getLegal } from "@/lib/content";
import { buildAlternates, isLocale } from "@/lib/i18n";

const PATH = "/aviso-legal";

export async function generateMetadata(
  props: PageProps<"/[locale]/aviso-legal">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { notice } = getLegal(locale);

  return {
    title: notice.meta.title,
    description: notice.meta.description,
    alternates: buildAlternates(locale, PATH),
  };
}

export default async function AvisoLegalPage({
  params,
}: PageProps<"/[locale]/aviso-legal">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { notice } = getLegal(locale);

  return (
    <>
      <Hero eyebrow={notice.eyebrow} title={notice.title} subtitle={notice.subtitle} />
      <LegalDocumentBody doc={notice} />
    </>
  );
}
