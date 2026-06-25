import Link from "next/link"
import { ArrowUpRight, Handshake, ShieldCheck, Store } from "lucide-react"

import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { email } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Parceiros | Instituto Gomes Basquete",
}

const partnerTypes = [
  {
    title: "Apoio institucional",
    description: "Empresas e organizações que ajudam a sustentar o projeto.",
    icon: Handshake,
  },
  {
    title: "Apoio local",
    description: "Comércios e iniciativas da região que fortalecem a comunidade.",
    icon: Store,
  },
  {
    title: "Apoio esportivo",
    description: "Parceiros que contribuem com estrutura, material ou oportunidades.",
    icon: ShieldCheck,
  },
]

export default function ParceirosPage() {
  return (
    <main className="bg-white text-neutral-950">
      <PageHero
        title="Parceiros"
        description="Uma área dedicada para exibir marcas, empresas e apoiadores do Instituto Gomes Basquete sem ocupar espaço excessivo na Home."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            label="Apoiadores"
            title="Espaço preparado para marcas parceiras"
            description="Quando os logos oficiais forem enviados, eles podem ser adicionados nesta página em grupos de apoio. A Home pode destacar apenas os parceiros principais."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {partnerTypes.map((type) => (
              <div key={type.title} className="rounded-lg border border-neutral-200 p-6">
                <type.icon className="size-7 text-[#f05a28]" />
                <h2 className="mt-5 text-2xl font-semibold text-neutral-950">{type.title}</h2>
                <p className="mt-3 leading-7 text-neutral-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 bg-neutral-50 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="rounded-lg bg-white p-6 ring-1 ring-neutral-200 sm:p-10">
            <h2 className="text-3xl font-semibold text-neutral-950 md:text-5xl">
              Quer apoiar o instituto?
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-700">
              Empresas, marcas e apoiadores podem entrar em contato para
              entender como contribuir com a continuidade das atividades.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-[#f05a28] px-5 text-base font-semibold text-white hover:bg-[#d9491e]"
                )}
                href={`mailto:${email}?subject=Parceria%20com%20o%20Instituto%20Gomes%20Basquete`}
              >
                Propor parceria
                <ArrowUpRight className="size-5" />
              </a>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-neutral-300 px-5 text-base font-semibold text-neutral-950 hover:bg-neutral-100"
                )}
                href="/contato"
              >
                Ver contatos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
