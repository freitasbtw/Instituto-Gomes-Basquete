import Image from "next/image"
import { Camera, History } from "lucide-react"

import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import {
  historicalGallery,
  historyTimeline,
  memoryAreas,
  siteImages,
} from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Histórico e memórias | Instituto Gomes Basquete",
}

export default function HistoricoPage() {
  return (
    <main className="bg-white text-neutral-950">
      <PageHero
        title="Histórico e memórias"
        description="A trajetória do Instituto Gomes Basquete contada por eventos, treinos, clínicas, jogos e registros que marcaram a vida dos atletas."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <SectionHeading
              label="Linha do tempo"
              title="Momentos que contam a história do Instituto."
              description="Cada registro mostra uma parte da caminhada: encontros de formação, treinos, eventos, equipes e a convivência construída ao redor do basquete."
            />
            <div className="mt-8 flex gap-4 border-l-2 border-[#f05a28] pl-5">
              <History className="mt-1 size-5 shrink-0 text-[#f05a28]" />
              <p className="max-w-xl leading-7 text-neutral-700">
                A ênfase está na trajetória, nos atletas e nos momentos que
                ajudam a contar a história do projeto.
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-neutral-100 shadow-[0_24px_70px_rgba(15,15,15,0.14)]">
            <Image
              src={siteImages.history}
              alt="Professor Dante de Rose, Maurício Gomes e jovens do Instituto Gomes Basquete reunidos em quadra"
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
          <div className="space-y-8">
            {historyTimeline.map((item) => (
              <article
                key={item.title}
                className="grid gap-8 border-l-2 border-neutral-200 pl-5 md:grid-cols-[0.72fr_1.28fr] md:gap-10 md:pl-8"
              >
                <div>
                  <p className="text-sm font-semibold tracking-[0.08em] text-[#d9491e] uppercase">
                    {item.period}
                  </p>
                  <h2 className="mt-3 text-3xl leading-tight font-semibold tracking-normal text-neutral-950 md:text-5xl">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-neutral-700">
                    {item.description}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {item.images.map((photo, index) => (
                    <div
                      key={photo.src}
                      className={cn(
                        "relative overflow-hidden rounded-lg bg-neutral-100",
                        index === 0 ? "aspect-[4/3] sm:col-span-2" : "aspect-[3/4]"
                      )}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes={
                          index === 0
                            ? "(min-width: 1024px) 46vw, 100vw"
                            : "(min-width: 1024px) 18vw, 50vw"
                        }
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-sm font-semibold tracking-[0.08em] text-[#ff8a4d] uppercase">
                Galeria
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl leading-tight font-semibold tracking-normal md:text-5xl">
                Momentos marcantes da trajetória IGB.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300 md:justify-self-end">
              A galeria reúne momentos de treino, orientação e celebração que
              ajudam a apresentar a identidade do Instituto Gomes Basquete.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[220px] gap-4 md:grid-cols-4 md:auto-rows-[240px]">
            {historicalGallery.map((photo, index) => (
              <figure
                key={photo.src}
                className={cn(
                  "group relative overflow-hidden rounded-lg bg-white/8",
                  index === 0 || index === 5 ? "md:col-span-2" : "",
                  index === 1 || index === 3 ? "md:row-span-2" : ""
                )}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-4 pt-16 pb-4">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold">
                    <Camera className="size-4 text-[#ff8a4d]" />
                    {photo.caption}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            label="Memória viva"
            title="A história segue sendo construída dentro e fora da quadra."
            description="Depoimentos, reportagens, clínicas, jogos e registros de atletas preservam a identidade do projeto e mostram sua presença na comunidade."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {memoryAreas.map((area) => (
              <div key={area.title} className="rounded-lg border border-neutral-200 p-6">
                <area.icon className="size-7 text-[#f05a28]" />
                <h2 className="mt-5 text-2xl font-semibold text-neutral-950">
                  {area.title}
                </h2>
                <p className="mt-3 leading-7 text-neutral-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
