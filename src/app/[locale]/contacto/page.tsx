import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Datos de contacto y formulario placeholder del despacho.",
};

const details = [
  {
    icon: MapPin,
    label: "Dirección",
    value: site.contact.address,
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: site.contact.phone,
    href: site.contact.phoneHref,
  },
  {
    icon: Mail,
    label: "Email",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
  },
  {
    icon: Clock,
    label: "Horario",
    value: site.contact.schedule,
  },
];

export default function ContactoPage() {
  return (
    <>
      <Hero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
      />

      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* Formulario */}
            <div>
              <SectionHeading
                eyebrow="Formulario"
                title={contact.form.title}
                description={contact.form.description}
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>

            {/* Datos de contacto + mapa */}
            <div>
              <SectionHeading
                eyebrow="Dónde estamos"
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

              {/* Mapa placeholder.
                  TODO: sustituir por el embed de la ubicación real del despacho. */}
              <div className="mt-10 aspect-[4/3] w-full overflow-hidden border border-navy-100 bg-cream">
                <iframe
                  src={site.contact.mapEmbedUrl}
                  title={site.contact.mapLabel}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0 grayscale-[35%]"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
