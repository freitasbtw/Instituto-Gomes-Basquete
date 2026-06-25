"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa6"

import { buttonVariants } from "@/components/ui/button"
import { navItems, whatsappUrl } from "@/lib/site-data"
import { cn } from "@/lib/utils"

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/92 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo-igb.png"
            alt="Logo do Instituto Gomes Basquete"
            width={48}
            height={48}
            priority
            className="rounded-lg"
          />
          <div className="hidden leading-tight sm:block">
            <strong className="block text-sm font-semibold tracking-[0.08em] text-neutral-950 uppercase">
              Instituto Gomes
            </strong>
            <span className="text-sm text-neutral-500">Basquete</span>
          </div>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-6 text-sm font-medium text-neutral-600 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={cn(
                "transition hover:text-neutral-950",
                pathname === item.href && "text-neutral-950"
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-10 w-10 bg-[#f05a28] px-0 text-sm font-semibold text-white shadow-none hover:bg-[#d9491e] sm:w-auto sm:px-4"
            )}
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Falar no WhatsApp"
          >
            <FaWhatsapp className="size-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg border border-neutral-200 text-neutral-950 transition hover:bg-neutral-100 lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-4" aria-label="Menu mobile">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-3 text-base font-semibold text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950",
                  pathname === item.href && "bg-neutral-100 text-neutral-950"
                )}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
