import Image from "next/image"

import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { memoryAreas } from "@/lib/site-data"

export const metadata = {
  title: "Histórico e memórias | Instituto Gomes Basquete",
}

export default function HistoricoPage() {
  return (
    <main className="bg-white text-neutral-950">
      <PageHero
        title="Histórico e memórias"
        description="Uma área dedicada para resgatar depoimentos de antigos atletas, registros de jogos, treinos antigos, reportagens e marcos da instituição."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              label="Arquivo institucional"
              title="Memória organizada sem sobrecarregar a Home."
              description="Esta página concentra os registros históricos. Quando novos materiais forem enviados, eles podem entrar aqui por categoria, data, evento ou temporada."
            />
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src="/images/treino-basquete.png"
              alt="Treino de basquete como registro institucional"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {memoryAreas.map((area) => (
              <div key={area.title} className="rounded-lg border border-neutral-200 p-6">
                <area.icon className="size-7 text-[#f05a28]" />
                <h2 className="mt-5 text-2xl font-semibold text-neutral-950">{area.title}</h2>
                <p className="mt-3 leading-7 text-neutral-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 className="max-w-3xl text-4xl leading-tight font-semibold md:text-5xl">
            Galeria preparada para fotos, vídeos e reportagens reais.
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-300">
            A página já está pronta para receber registros históricos sem
            misturar esse conteúdo com a apresentação principal da Home.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {["Jogos antigos", "Treinos antigos", "Reportagens"].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-white/12 bg-white/[0.06] p-6"
              >
                <p className="text-xl font-semibold">{item}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-300">
                  Espaço reservado para inserir registros selecionados pela coordenação.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
