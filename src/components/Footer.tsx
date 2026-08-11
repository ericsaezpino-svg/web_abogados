import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/Container";
import { legalLinks, nav, site } from "@/lib/content";

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-100">
      <div aria-hidden="true" className="h-px w-full bg-gold/40" />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-white">
              Abogados <span className="text-gold">Marina</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
              {site.tagline}. Lorem ipsum dolor sit amet, consectetur adipiscing elit
              sed do eiusmod tempor.
            </p>
            <ul className="mt-6 flex gap-5">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-xs tracking-[0.14em] text-navy-200 uppercase transition-colors duration-200 hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Navegación del pie">
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
              Navegación
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors duration-200 hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
              Contacto
            </h2>
            <ul className="mt-6 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <span>{site.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a
                  href={site.contact.phoneHref}
                  className="transition-colors duration-200 hover:text-gold-300"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="break-all transition-colors duration-200 hover:text-gold-300"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <nav aria-label="Información legal">
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
              Legal
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  {/* TODO: crear las páginas legales reales y actualizar el href. */}
                  <a
                    href={item.href}
                    className="transition-colors duration-200 hover:text-gold-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6">
          <p className="text-center text-xs tracking-wide text-navy-200">
            © 2026 {site.name}. Todos los derechos reservados.
          </p>
        </Container>
      </div>
    </footer>
  );
}
