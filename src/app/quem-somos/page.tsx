import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { pillars, siteImages } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Quem somos | Instituto Gomes Basquete",
}

export default function QuemSomosPage() {
  return (
    <main className="bg-white text-neutral-950">
      <PageHero
        title="Quem somos"
        description="O Instituto Gomes Basquete é um projeto sem fins lucrativos que oferece acolhimento, prática esportiva e formação para crianças e adolescentes da comunidade."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={siteImages.project}
              alt="Professor Dante de Rose com crianças do Instituto Gomes Basquete"
              fill
              priority
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              label="Projeto"
              title="Basquete como caminho de rotina, convivência e futuro."
              description="A proposta é aproximar meninos e meninas do basquetebol desde os 8 ou 9 anos até os 17 anos, criando um ambiente de disciplina, valores familiares e oportunidade."
            />
            <p className="mt-5 text-lg leading-8 text-neutral-700">
              O instituto também trabalha a possibilidade de evolução atlética e
              de bolsas de estudo em escolas e faculdades, conectando esporte,
              educação e comunidade.
            </p>
            <Link
              className={cn(
                buttonVariants({ size: "lg" }),
                "mt-8 h-12 bg-[#f05a28] px-5 text-base font-semibold text-white hover:bg-[#d9491e]"
              )}
              href="/contato"
            >
              Falar com o instituto
              <ArrowUpRight className="size-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            label="Pilares"
            title="O que orienta o trabalho do instituto"
            description="O trabalho do Instituto parte de uma relação próxima com os jovens e suas famílias, valorizando presença, respeito e continuidade."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-lg border border-neutral-200 p-6">
                <pillar.icon className="size-7 text-[#f05a28]" />
                <h2 className="mt-5 text-2xl font-semibold text-neutral-950">
                  {pillar.title}
                </h2>
                <p className="mt-3 leading-7 text-neutral-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
