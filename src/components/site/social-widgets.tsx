"use client"

import Script from "next/script"
import { ArrowUpRight } from "lucide-react"
import { FaFacebookF, FaInstagram } from "react-icons/fa6"

import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button"
import { facebookUrl, facebookWidgetUrl, instagramUrl } from "@/lib/site-data"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process?: () => void
      }
    }
  }
}

function processInstagramEmbed() {
  window.instgrm?.Embeds?.process?.()
}

export function SocialWidgets() {
  return (
    <section className="border-t border-neutral-200 bg-[#f7f4ef] py-16 md:py-20">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processInstagramEmbed}
        onReady={processInstagramEmbed}
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
          <SectionHeading
            label="Redes sociais"
            title="Acompanhe os bastidores do Instituto."
            description="Fotos, atividades, eventos e avisos também ficam reunidos nos canais oficiais do Instituto Gomes Basquete."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:justify-self-end">
            <a
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 border-neutral-300 bg-white px-5 text-base font-semibold text-neutral-950 hover:bg-neutral-100"
              )}
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="size-5 text-[#d9491e]" />
              Ver Instagram
              <ArrowUpRight className="size-5" />
            </a>
            <a
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 border-neutral-300 bg-white px-5 text-base font-semibold text-neutral-950 hover:bg-neutral-100"
              )}
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="size-4 text-[#1d5fd7]" />
              Ver Facebook
              <ArrowUpRight className="size-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(320px,500px)]">
          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(15,15,15,0.08)]">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-[#f05a28] text-white">
                  <FaInstagram className="size-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-neutral-950">Instagram</h3>
                  <p className="text-sm text-neutral-500">@instituto_gomesbasquete</p>
                </div>
              </div>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 transition hover:border-[#f05a28] hover:text-[#d9491e]"
                aria-label="Abrir Instagram do Instituto Gomes Basquete"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </div>

            <div className="min-h-[560px] bg-neutral-50 p-3 sm:p-4">
              <blockquote
                className="instagram-media mx-auto min-h-[520px] rounded-lg border border-neutral-200 bg-white"
                data-instgrm-permalink={instagramUrl}
                data-instgrm-version="14"
                style={{
                  margin: "0 auto",
                  maxWidth: "540px",
                  minWidth: "0",
                  width: "100%",
                }}
              >
                <div className="flex min-h-[520px] flex-col items-center justify-center gap-4 p-6 text-center">
                  <FaInstagram className="size-9 text-[#d9491e]" />
                  <div>
                    <p className="font-semibold text-neutral-950">
                      Carregando Instagram
                    </p>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      Se o widget não carregar, abra o perfil oficial.
                    </p>
                  </div>
                </div>
                <a
                  className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f05a28] px-4 text-sm font-semibold text-white transition hover:bg-[#d9491e]"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Abrir Instagram
                  <ArrowUpRight className="size-4" />
                </a>
              </blockquote>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-[0_18px_50px_rgba(15,15,15,0.08)]">
            <div className="flex items-center justify-between border-b border-neutral-200 px-4 py-3 sm:px-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-[#1d5fd7] text-white">
                  <FaFacebookF className="size-4" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-neutral-950">Facebook</h3>
                  <p className="text-sm text-neutral-500">Instituto Gomes Basquete</p>
                </div>
              </div>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 transition hover:border-[#1d5fd7] hover:text-[#1d5fd7]"
                aria-label="Abrir Facebook do Instituto Gomes Basquete"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </div>
            <iframe
              title="Publicações do Facebook do Instituto Gomes Basquete"
              src={facebookWidgetUrl}
              className="h-[560px] w-full border-0"
              loading="lazy"
              scrolling="no"
              style={{ overflow: "hidden" }}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
