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
        description="Relatos de famílias, responsáveis e atletas ajudam a mostrar o impacto do Instituto Gomes Basquete dentro e fora da quadra."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            label="Vozes da comunidade"
            title="Histórias que acompanham o crescimento dos jovens."
            description="O Instituto valoriza cada relato de evolução, disciplina, convivência e pertencimento. Essas histórias ajudam famílias, parceiros e novos alunos a entenderem a força do projeto."
          />
          <div className="rounded-lg border border-neutral-200 p-6">
            <Quote className="size-8 text-[#f05a28]" />
            <p className="mt-5 text-xl leading-9 text-neutral-800">
              Os depoimentos recebidos pela coordenação registram mudanças de
              comportamento, melhora na rotina, novos vínculos e orgulho de
              pertencer ao Instituto.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            label="Feedback da comunidade"
            title="Relatos atuais dos pais e responsáveis"
            description="As famílias acompanham de perto a presença do esporte na vida das crianças e adolescentes."
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
            registros pelo e-mail institucional. Cada mensagem ajuda a preservar
            a memória do projeto e a mostrar seu impacto para a comunidade.
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
