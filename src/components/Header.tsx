"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "@/components/Container";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { site, type NavItem, type SiteContent } from "@/lib/content";
import { localizedHref, stripLocale, type Locale } from "@/lib/i18n";

type HeaderProps = {
  locale: Locale;
  nav: NavItem[];
  ui: SiteContent["ui"];
};

export default function Header({ locale, nav, ui }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // A partir de `navbar` (44rem) la navegación horizontal sustituye al drawer:
  // si el viewport cruza el breakpoint (al girar el móvil o la tablet), se
  // cierra para no dejar el scroll del body bloqueado.
  useEffect(() => {
    const query = window.matchMedia("(min-width: 44rem)");
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setMenuOpen(false);
      }
    };
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  // Bloquear el scroll del body mientras el drawer está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // La ruta activa se compara sin el prefijo de idioma.
  const currentPath = stripLocale(pathname);
  const isActive = (href: string) =>
    href === "/" ? currentPath === "/" : currentPath.startsWith(href);

  const contactActive = isActive("/contacto");

  /**
   * Visibilidad de cada enlace en la barra horizontal:
   * - «Inicio» solo en escritorio (por debajo, el logo ya lleva a la portada).
   * - «Contacto» solo en el tramo intermedio; desde `lg` lo asume el botón dorado.
   */
  const linkVisibility = (href: string) => {
    if (href === "/") {
      return "hidden lg:block";
    }

    return href === "/contacto" ? "lg:hidden" : "";
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_16px_rgba(27,42,74,0.10)] backdrop-blur"
          : "bg-cream/95 backdrop-blur"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-3 lg:gap-6">
          <Link
            href={localizedHref(locale, "/")}
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 flex-col leading-none"
            aria-label={ui.homeLabel}
          >
            <span className="font-serif text-2xl tracking-wide whitespace-nowrap text-navy navbar:text-[21px] lg:text-[26px]">
              Abogados <span className="text-gold">Marina 204</span>
            </span>
            <span className="mt-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Navegación horizontal: tablet en vertical (≥ 704 px) y escritorio */}
          <nav aria-label={ui.mainNavLabel} className="hidden navbar:block">
            <ul className="flex items-center gap-3 lg:gap-8">
              {nav.map((item) => (
                <li key={item.href} className={linkVisibility(item.href)}>
                  <Link
                    href={localizedHref(locale, item.href)}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="group relative inline-block py-2 font-sans text-[13px] tracking-wide whitespace-nowrap text-navy transition-colors duration-200 hover:text-gold-700 lg:text-sm"
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-all duration-300 ${
                        isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden shrink-0 items-center gap-3 navbar:flex lg:gap-6">
            <LocaleSwitcher locale={locale} label={ui.languageLabel} />
            {/* El CTA dorado solo cabe con holgura en escritorio. */}
            <Link
              href={localizedHref(locale, "/contacto")}
              aria-current={contactActive ? "page" : undefined}
              className={`hidden items-center px-4 py-2.5 font-sans text-xs font-medium tracking-[0.12em] whitespace-nowrap uppercase transition-colors duration-200 lg:inline-flex lg:px-6 lg:py-3 ${
                contactActive
                  ? "bg-navy text-white hover:bg-navy-800"
                  : "bg-gold text-white hover:bg-gold-700"
              }`}
            >
              {ui.contactCta}
            </Link>
          </div>

          {/* Selector de idioma + hamburguesa (móvil y tablets estrechas) */}
          <div className="flex items-center gap-3 navbar:hidden">
            <LocaleSwitcher locale={locale} label={ui.languageLabel} />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-navy transition-colors duration-200 hover:text-gold-700"
              aria-expanded={menuOpen}
              aria-controls="menu-movil"
              aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
            >
              {menuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </Container>

      {/* Drawer móvil */}
      <div
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 top-20 z-40 bg-navy/40 transition-opacity duration-300 navbar:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        id="menu-movil"
        className={`fixed top-20 right-0 bottom-0 z-50 w-72 max-w-[85vw] overflow-y-auto border-l border-navy-100 bg-white transition-transform duration-300 navbar:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        inert={!menuOpen}
      >
        <nav aria-label={ui.mobileNavLabel} className="px-6 py-8">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={localizedHref(locale, item.href)}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`block border-l-2 py-3 pl-4 font-sans text-base transition-colors duration-200 ${
                    isActive(item.href)
                      ? "border-gold text-gold-700"
                      : "border-transparent text-navy hover:border-navy-200 hover:text-gold-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-navy-100 pt-6">
            <LocaleSwitcher
              locale={locale}
              label={ui.languageLabel}
              variant="stacked"
            />
          </div>

          <div className="mt-8 border-t border-navy-100 pt-6 text-sm text-slate">
            <p>{site.contact.phone}</p>
            <p className="mt-1 break-all">{site.contact.email}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
