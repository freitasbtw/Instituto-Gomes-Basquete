import Link from "next/link"
import { ArrowUpRight, Quote } from "lucide-react"

import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { communityFeedback, email } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Depoimentos | Instituto Gomes Basquete",
}

export default function DepoimentosPage() {
  return (
    <main className="bg-white text-neutral-950">
      <PageHero
        title="Depoimentos"
        description="Uma página para separar depoimentos históricos de antigos atletas e feedbacks atuais enviados por pais e responsáveis."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            label="Antigos atletas"
            title="Depoimentos históricos dos jovens que passaram pelo instituto."
            description="Este bloco foi pensado para resgatar registros feitos quando antigos atletas tinham entre 15 e 17 anos, preservando memória, identidade e impacto de longo prazo."
          />
          <div className="rounded-lg border border-neutral-200 p-6">
            <Quote className="size-8 text-[#f05a28]" />
            <p className="mt-5 text-xl leading-9 text-neutral-800">
              Espaço reservado para inserir os depoimentos reais dos antigos
              atletas, com nome, idade na época do registro, ano e contexto.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            label="Feedback da comunidade"
            title="Relatos atuais dos pais e responsáveis"
            description="A área foi estruturada para receber mensagens que chegam à coordenação sobre comportamento, disciplina, convivência e impacto familiar."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {communityFeedback.map((feedback) => (
              <div key={feedback.title} className="rounded-lg border border-neutral-200 bg-white p-6">
                <h2 className="text-2xl font-semibold text-neutral-950">{feedback.title}</h2>
                <p className="mt-3 leading-7 text-neutral-600">{feedback.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl rounded-lg bg-neutral-950 px-6 py-10 text-white sm:px-10 md:py-14">
          <h2 className="max-w-3xl text-4xl leading-tight font-semibold">
            Envie um relato para a coordenação.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            Pais, responsáveis e antigos atletas podem enviar feedbacks e
            registros pelo e-mail institucional. Depois, a coordenação pode
            selecionar quais depoimentos entram no site.
          </p>
          <a
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 h-12 bg-[#f05a28] px-5 text-base font-semibold text-white hover:bg-[#d9491e]"
            )}
            href={`mailto:${email}?subject=Depoimento%20para%20o%20Instituto%20Gomes%20Basquete`}
          >
            Enviar depoimento
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </section>

      <div className="sr-only">
        <Link href="/contato">Contato</Link>
      </div>
    </main>
  )
}
