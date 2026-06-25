import Image from "next/image"
import Link from "next/link"

import { navItems, socialLinks } from "@/lib/site-data"

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 text-sm text-neutral-500 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-igb.png"
              alt=""
              width={40}
              height={40}
              className="rounded-md"
            />
            <span>Instituto Gomes Basquete</span>
          </div>
          <p className="mt-4 max-w-sm leading-6">
            Projeto sem fins lucrativos com basquete, acolhimento e formação
            para crianças e adolescentes.
          </p>
        </div>

        <div>
          <p className="font-semibold text-neutral-950">Navegação</p>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <Link key={item.href} className="transition hover:text-neutral-950" href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold text-neutral-950">Redes sociais</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                className="inline-flex size-9 items-center justify-center rounded-lg border border-neutral-200 text-neutral-700 transition hover:border-[#f05a28] hover:text-[#d9491e]"
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <social.icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
