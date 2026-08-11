"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import Container from "@/components/Container";
import { nav, site } from "@/lib/content";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear el scroll del body mientras el drawer está abierto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const mainLinks = nav.filter((item) => item.href !== "/contacto");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_1px_16px_rgba(27,42,74,0.10)] backdrop-blur"
          : "bg-cream/95 backdrop-blur"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="group flex flex-col leading-none"
            aria-label={`${site.name} — Inicio`}
          >
            <span className="font-serif text-2xl tracking-wide text-navy sm:text-[26px]">
              Abogados <span className="text-gold">Marina</span>
            </span>
            <span className="mt-1 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Navegación de escritorio */}
          <nav aria-label="Navegación principal" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {mainLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className="group relative inline-block py-2 font-sans text-sm tracking-wide text-navy transition-colors duration-200 hover:text-gold-700"
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

          <div className="hidden lg:block">
            <Link
              href="/contacto"
              aria-current={isActive("/contacto") ? "page" : undefined}
              className={`inline-flex items-center px-6 py-3 font-sans text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
                isActive("/contacto")
                  ? "bg-navy text-white hover:bg-navy-800"
                  : "bg-gold text-white hover:bg-gold-700"
              }`}
            >
              Contacto
            </Link>
          </div>

          {/* Botón hamburguesa */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center text-navy transition-colors duration-200 hover:text-gold-700 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-movil"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Drawer móvil */}
      <div
        aria-hidden={!menuOpen}
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 top-20 z-40 bg-navy/40 transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        id="menu-movil"
        className={`fixed top-20 right-0 bottom-0 z-50 w-72 max-w-[85vw] border-l border-navy-100 bg-white transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        inert={!menuOpen}
      >
        <nav aria-label="Navegación principal (móvil)" className="px-6 py-8">
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
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

          <div className="mt-8 border-t border-navy-100 pt-6 text-sm text-slate">
            <p>{site.contact.phone}</p>
            <p className="mt-1 break-all">{site.contact.email}</p>
          </div>
        </nav>
      </div>
    </header>
  );
}
