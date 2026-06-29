"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { FaFacebookF, FaInstagram } from "react-icons/fa6"

import { SectionHeading } from "@/components/site/section-heading"
import { buttonVariants } from "@/components/ui/button"
import {
  facebookUrl,
  facebookWidgetUrl,
  instagramUrl,
  socialPreviewImages,
} from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function SocialWidgets() {
  return (
    <section className="border-t border-neutral-200 bg-[#f7f4ef] py-16 md:py-20">
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

            <div className="p-3 sm:p-4">
              <div className="grid auto-rows-[minmax(8.5rem,1fr)] grid-cols-2 gap-2 sm:grid-cols-4">
                {socialPreviewImages.map((image, index) => (
                  <a
                    key={image.src}
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "group relative overflow-hidden rounded-lg bg-neutral-100",
                      index === 0 && "col-span-2 row-span-2"
                    )}
                    aria-label="Abrir Instagram do Instituto Gomes Basquete"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes={
                        index === 0
                          ? "(min-width: 1024px) 32vw, 66vw"
                          : "(min-width: 1024px) 12vw, 50vw"
                      }
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                    {index === 0 ? (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/72 to-transparent p-4 text-white">
                        <p className="text-xs font-semibold tracking-[0.08em] uppercase">
                          Mini Instagram
                        </p>
                        <p className="mt-1 text-lg leading-tight font-semibold">
                          Bastidores da quadra
                        </p>
                      </div>
                    ) : null}
                  </a>
                ))}
              </div>

              <div className="mt-3 flex flex-col gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-neutral-950">
                    @instituto_gomesbasquete
                  </p>
                  <p className="mt-1 text-sm leading-6 text-neutral-600">
                    Treinos, eventos, jogos e registros da comunidade.
                  </p>
                </div>
                <a
                  className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-lg bg-[#f05a28] px-4 text-sm font-semibold text-white transition hover:bg-[#d9491e]"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Seguir perfil
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
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
