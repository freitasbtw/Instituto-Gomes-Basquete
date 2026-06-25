import { ArrowUpRight } from "lucide-react"

import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button"
import {
  address,
  contactChannels,
  email,
  mapsEmbedUrl,
  mapsSearchUrl,
  socialLinks,
} from "@/lib/site-data"
import { cn } from "@/lib/utils"

export const metadata = {
  title: "Contato | Instituto Gomes Basquete",
}

export default function ContatoPage() {
  return (
    <main className="bg-white text-neutral-950">
      <PageHero
        title="Contato e feedback"
        description="Canais claros para falar sobre aulas, visitas, parcerias, feedbacks dos pais, depoimentos e registros históricos."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              label="Canais oficiais"
              title="Escolha o melhor caminho para falar com a coordenação."
              description="Para feedbacks e relatos, o e-mail é o canal mais organizado. Para informações rápidas sobre aulas, use o WhatsApp."
            />
            <div className="mt-8 grid gap-4">
              {contactChannels.map((channel) => (
                <a
                  key={channel.title}
                  className="flex gap-4 rounded-lg border border-neutral-200 p-5 transition hover:border-[#f05a28] hover:bg-neutral-50"
                  href={channel.href}
                  target={channel.title === "E-mail" ? undefined : "_blank"}
                  rel={channel.title === "E-mail" ? undefined : "noreferrer"}
                >
                  <channel.icon className="mt-1 size-5 shrink-0 text-[#f05a28]" />
                  <div>
                    <p className="font-semibold text-neutral-950">{channel.title}</p>
                    <p className="mt-1 leading-6 text-neutral-600">{channel.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-lg bg-neutral-950 p-6 text-white sm:p-8">
            <h2 className="text-3xl font-semibold">Enviar feedback</h2>
            <p className="mt-4 leading-7 text-neutral-300">
              Use o e-mail institucional para enviar relatos de pais,
              depoimentos de antigos atletas, fotos históricas ou propostas de
              parceria.
            </p>
            <div className="mt-6 grid gap-3">
              <a
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-[#f05a28] px-5 text-base font-semibold text-white hover:bg-[#d9491e]"
                )}
                href={`mailto:${email}?subject=Feedback%20para%20o%20Instituto%20Gomes%20Basquete`}
              >
                Escrever e-mail
                <ArrowUpRight className="size-5" />
              </a>
              <p className="break-all text-sm text-neutral-300">{email}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/14 px-3 text-sm font-medium text-white transition hover:border-[#f05a28] hover:bg-white/8"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <social.icon className="size-4" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-200 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <SectionHeading
              label="Localização"
              title="Visite ou trace sua rota pelo mapa."
              description={address}
            />
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
      </section>
    </main>
  )
}
