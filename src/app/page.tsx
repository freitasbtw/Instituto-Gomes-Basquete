import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6"

import { AnimatedSection } from "@/components/site/animated-section"
import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  activities,
  address,
  mapsEmbedUrl,
  mapsSearchUrl,
  pillars,
  scheduleRows,
  whatsappUrl,
} from "@/lib/site-data"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-7 sm:px-8 md:grid-cols-[0.92fr_1.08fr] md:items-center md:py-8 lg:gap-10 lg:py-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl leading-[1.02] font-semibold tracking-normal text-balance text-neutral-950 sm:text-5xl xl:text-6xl">
              Instituto Gomes Basquete
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-700 lg:text-xl">
              Basquete, acolhimento e futuro para a comunidade. Um projeto sem
              fins lucrativos para crianças e adolescentes dos 8 aos 17 anos.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-[#f05a28] px-5 text-base font-semibold text-white hover:bg-[#d9491e]"
                )}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="size-5" />
                Falar no WhatsApp
              </a>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-neutral-300 px-5 text-base font-semibold text-neutral-950 hover:bg-neutral-100"
                )}
                href="/quem-somos"
              >
                Conhecer o projeto
                <ArrowUpRight className="size-5" />
              </Link>
            </div>

            <div className="mt-8 hidden gap-4 border-y border-neutral-200 py-4 sm:grid sm:grid-cols-3">
              <div>
                <p className="text-sm font-medium text-neutral-500">Público</p>
                <p className="mt-1 text-lg font-semibold text-neutral-950">8 a 17 anos</p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">Participação</p>
                <p className="mt-1 text-lg font-semibold text-neutral-950">
                  Meninos e meninas
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">Propósito</p>
                <p className="mt-1 text-lg font-semibold text-neutral-950">Bolsas e futuro</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-4 hidden h-28 w-28 rounded-full border-[16px] border-[#f05a28] opacity-90 md:block" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-[0_24px_70px_rgba(15,15,15,0.16)]">
              <Image
                src="/images/hero-basquete.png"
                alt="Treinador orientando jovens em uma quadra de basquete"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 hidden max-w-xs rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,15,15,0.14)] sm:block">
              <p className="text-sm font-semibold text-neutral-950">
                Esporte com valores familiares
              </p>
              <p className="mt-1 text-sm leading-6 text-neutral-600">
                Rotina, convivência e oportunidade por meio do basquete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="border-t border-neutral-200 bg-white py-12 md:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src="/images/treino-basquete.png"
              alt="Crianças e adolescentes treinando basquete"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <SectionHeading
              label="Projeto"
              title="Acolhimento, esporte e formação no mesmo lugar."
              description="A Home apresenta o essencial. A história, os registros, os depoimentos e os parceiros ficam organizados em páginas internas para o site continuar leve e fácil de navegar."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="border-l-2 border-[#f05a28] pl-4">
                  <pillar.icon className="mb-4 size-6 text-[#f05a28]" />
                  <h3 className="text-lg font-semibold text-neutral-950">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href="/quem-somos"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 h-12 border-neutral-300 px-5 text-base font-semibold text-neutral-950 hover:bg-neutral-100"
              )}
            >
              Ver quem somos
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-neutral-950 py-16 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <h2 className="text-4xl leading-tight font-semibold tracking-normal md:text-5xl">
              Atividades atuais em destaque.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300 md:justify-self-end">
              Basquete, xadrez e fitboxe seguem como frentes principais para
              esporte, foco, saúde e convivência.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {activities.map((activity) => (
              <Card
                key={activity.title}
                className="rounded-lg border-white/12 bg-white/[0.06] text-white ring-white/10"
              >
                <CardHeader>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-[#f05a28] text-white">
                    <activity.icon className="size-6" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{activity.title}</CardTitle>
                  <CardDescription className="text-base leading-7 text-neutral-300">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 border-t border-white/12 pt-4 text-sm font-semibold text-white">
                    <Clock className="size-4 text-[#ff8a4d]" />
                    {activity.schedule}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Link
            href="/atividades"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "mt-8 h-12 border-white/24 bg-transparent px-5 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
            )}
          >
            Ver atividades
            <ArrowUpRight className="size-5" />
          </Link>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              label="Agenda semanal"
              title="Horários fixos para aprender, treinar e participar."
              description="A programação atual fica destacada na Home e detalhada na página de atividades."
            />
            <div className="mt-8 divide-y divide-neutral-200 border-y border-neutral-200">
              {scheduleRows.map((row) => (
                <div
                  key={row.title}
                  className="grid gap-4 py-6 sm:grid-cols-[0.45fr_1fr_auto] sm:items-center"
                >
                  <p className="text-xl font-semibold text-neutral-950">{row.title}</p>
                  <p className="text-neutral-600">{row.description}</p>
                  <p className="text-base font-semibold text-neutral-950">{row.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src="/images/atividades-comunidade.png"
              alt="Jovens em atividades de xadrez e fitboxe"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="border-t border-neutral-200 bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              label="Localização"
              title="Encontre o Instituto Gomes Basquete no mapa."
              description="Use o mapa para conferir a localização e traçar a rota até o instituto."
            />
            <div className="mt-8 flex gap-4 border-l-2 border-[#f05a28] pl-4">
              <MapPin className="mt-1 size-5 shrink-0 text-[#f05a28]" />
              <div>
                <p className="font-semibold text-neutral-950">Endereço</p>
                <p className="mt-1 text-neutral-600">{address}</p>
              </div>
            </div>
            <a
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "mt-8 h-12 border-neutral-300 px-5 text-base font-semibold text-neutral-950 hover:bg-neutral-100"
              )}
              href={mapsSearchUrl}
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Google Maps
              <ArrowUpRight className="size-5" />
            </a>
          </div>

          <div className="aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-[0_20px_60px_rgba(15,15,15,0.12)]">
            <iframe
              title="Mapa da localização do Instituto Gomes Basquete"
              src={mapsEmbedUrl}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </AnimatedSection>
    </main>
  )
}
