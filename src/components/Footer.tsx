import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import Container from "@/components/Container";
import { getContent, site, socialLinks } from "@/lib/content";
import { localizedHref, type Locale } from "@/lib/i18n";

type FooterProps = {
  locale: Locale;
};

export default function Footer({ locale }: FooterProps) {
  const { footer, nav, legalLinks, meta } = getContent(locale);

  return (
    <footer className="bg-navy text-navy-100">
      <div aria-hidden="true" className="h-px w-full bg-gold/40" />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-2xl text-white">
              Abogados <span className="text-gold">Marina 204</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
              {meta.tagline}. {footer.blurb}
            </p>
            {socialLinks.length > 0 ? (
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
            ) : null}
          </div>

          <nav aria-label={footer.navTitle}>
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
              {footer.navTitle}
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={localizedHref(locale, item.href)}
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
              {footer.contactTitle}
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

          <nav aria-label={footer.legalTitle}>
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-300 uppercase">
              {footer.legalTitle}
            </h2>
            <ul className="mt-6 space-y-3 text-sm">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={localizedHref(locale, item.href)}
                    className="transition-colors duration-200 hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="py-6">
          <p className="text-center text-xs tracking-wide text-navy-200">
            {footer.rights}
          </p>
        </Container>
      </div>
    </footer>
  );
}
