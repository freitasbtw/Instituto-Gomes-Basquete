import Image from "next/image"
import { Clock } from "lucide-react"

import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { activities, scheduleRows, siteImages } from "@/lib/site-data"

export const metadata = {
  title: "Atividades | Instituto Gomes Basquete",
}

export default function AtividadesPage() {
  return (
    <main className="bg-white text-neutral-950">
      <PageHero
        title="Atividades atuais"
        description="As atividades do instituto combinam esporte, foco, condicionamento e convivência comunitária."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={siteImages.activities}
              alt="Crianças e adolescentes em treino coletivo de basquete"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
          <SectionHeading
            label="Formação integral"
            title="A rotina vai além da quadra."
            description="Basquete, xadrez e fitbox ajudam a desenvolver disciplina, raciocínio, condicionamento e convivência. Cada atividade reforça uma parte da formação dos jovens."
          />
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-4 lg:grid-cols-3">
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
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            label="Agenda"
            title="Horários de atividades complementares"
            description="As atividades complementares ampliam a rotina esportiva com foco, estratégia, saúde e bem-estar."
          />
          <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {scheduleRows.map((row) => (
              <div
                key={row.title}
                className="grid gap-4 py-6 md:grid-cols-[0.4fr_1fr_auto] md:items-center"
              >
                <p className="text-xl font-semibold text-neutral-950">{row.title}</p>
                <p className="text-neutral-600">{row.description}</p>
                <p className="font-semibold text-neutral-950">{row.time}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
