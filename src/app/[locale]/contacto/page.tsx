import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import ContactChannelCard from "@/components/ContactChannelCard";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import MapEmbed from "@/components/MapEmbed";
import SectionHeading from "@/components/SectionHeading";
import { getContent, site } from "@/lib/content";
import { buildAlternates, isLocale, localizedHref } from "@/lib/i18n";

const PATH = "/contacto";

export async function generateMetadata(
  props: PageProps<"/[locale]/contacto">,
): Promise<Metadata> {
  const { locale } = await props.params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { pageMeta } = getContent(locale);

  return {
    title: pageMeta.contact.title,
    description: pageMeta.contact.description,
    alternates: buildAlternates(locale, PATH),
  };
}

export default async function ContactoPage({
  params,
}: PageProps<"/[locale]/contacto">) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const { contact, contactInfo } = getContent(locale);

  const details = [
    {
      icon: MapPin,
      label: contactInfo.addressLabel,
      value: site.contact.address,
    },
    {
      icon: Phone,
      label: contactInfo.phoneLabel,
      value: site.contact.phone,
      href: site.contact.phoneHref,
    },
    {
      icon: Mail,
      label: contactInfo.emailLabel,
      value: site.contact.email,
      href: `mailto:${site.contact.email}`,
    },
    {
      icon: Clock,
      label: contactInfo.scheduleLabel,
      value: contactInfo.schedule,
    },
  ];

  return (
    <>
      <Hero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
      />

      {/* Canales de contacto: agenda, WhatsApp y email. */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow={contact.channels.eyebrow}
            title={contact.channels.title}
            description={contact.channels.description}
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {contact.channels.items.map((channel) => (
              <ContactChannelCard key={channel.title} channel={channel} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-navy-100 bg-cream py-20 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Datos de contacto + mapa */}
            <div>
              <SectionHeading
                eyebrow={contact.details.eyebrow}
                title={contact.details.title}
                description={contact.details.description}
              />

              <ul className="mt-10 space-y-6">
                {details.map((item) => (
                  <li key={item.label} className="flex gap-4">
                    <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center border border-gold/40 text-gold">
                      <item.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <p className="font-sans text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block text-base text-navy transition-colors duration-200 hover:text-gold-700"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-base text-navy">{item.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* El mapa solo se carga si el visitante lo pide: así el sitio no
                contacta con Google ni fija cookies por defecto. */}
            <MapEmbed
              embedUrl={site.contact.mapEmbedUrl}
              externalUrl={site.contact.mapLinkUrl}
              frameTitle={contactInfo.mapLabel}
              heading={contactInfo.map.heading}
              notice={contactInfo.map.notice}
              action={contactInfo.map.action}
              externalLabel={contactInfo.map.externalLabel}
              cookiesHref={localizedHref(locale, "/politica-de-cookies")}
              cookiesLabel={contactInfo.map.cookiesLabel}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
