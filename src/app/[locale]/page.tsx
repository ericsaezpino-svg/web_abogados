import { ArrowRight } from "lucide-react";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Hero from "@/components/Hero";
import LawyerCard from "@/components/LawyerCard";
import PracticeAreaCard from "@/components/PracticeAreaCard";
import SectionHeading from "@/components/SectionHeading";
import { home, lawyers } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <Hero
        variant="full"
        eyebrow={home.hero.eyebrow}
        title={home.hero.title}
        subtitle={home.hero.subtitle}
        actions={
          <>
            <Button href="/contacto" size="lg">
              Contactar
            </Button>
            <Button href="/areas-juridicas" variant="light" size="lg">
              Áreas jurídicas
            </Button>
          </>
        }
      />

      {/* Presentación */}
      <section className="bg-cream py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
            <SectionHeading eyebrow={home.intro.eyebrow} title={home.intro.title} />
            <div className="space-y-5 text-base text-slate sm:text-lg">
              {home.intro.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Las cuatro secciones */}
      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="El despacho"
            title="Cómo podemos ayudarle"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.sections.map((item) => (
              <PracticeAreaCard key={item.title} item={item} />
            ))}
          </div>
        </Container>
      </section>

      {/* Las dos abogadas */}
      <section className="border-y border-navy-100 bg-cream py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow={home.team.eyebrow}
            title={home.team.title}
            description={home.team.description}
          />
          <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
            {lawyers.map((lawyer) => (
              <LawyerCard key={lawyer.name} lawyer={lawyer} />
            ))}
          </div>
          <div className="mt-12">
            <Button href="/quienes-somos" variant="outline">
              Conocer el despacho
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>

      {/* Franja CTA */}
      <section className="relative overflow-hidden bg-navy py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-16 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
        />
        <Container className="relative">
          <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
            <SectionHeading
              tone="light"
              eyebrow="Contacto"
              title={home.cta.title}
              description={home.cta.description}
            />
            <Button href="/contacto" size="lg" className="shrink-0">
              Solicitar cita
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
