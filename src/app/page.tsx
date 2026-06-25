import Image from "next/image"
import {
  ArrowUpRight,
  Brain,
  CalendarDays,
  Clock,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Trophy,
  Users,
} from "lucide-react"
import { FaFacebookF, FaInstagram, FaThreads, FaWhatsapp } from "react-icons/fa6"

import { AnimatedSection } from "@/components/site/animated-section"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=555511952929246&text=aulas%20de%20basquete%20gratuito"
const address =
  "Av. Cônego José Salomon, 755 - Jardim Felicidade (Zona Norte), São Paulo - SP, 02918-170"
const mapsEmbedUrl =
  "https://www.google.com/maps?q=Instituto%20Gomes%20Basquete%2C%20Av.%20C%C3%B4nego%20Jos%C3%A9%20Salomon%2C%20755%20-%20Jardim%20Felicidade%20%28Zona%20Norte%29%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002918-170&z=17&output=embed"
const mapsSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=Instituto%20Gomes%20Basquete%2C%20Av.%20C%C3%B4nego%20Jos%C3%A9%20Salomon%2C%20755%20-%20Jardim%20Felicidade%20%28Zona%20Norte%29%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002918-170"

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/instituto_gomesbasquete/",
    icon: FaInstagram,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@instituto_gomesbasquete",
    icon: FaThreads,
  },
  {
    label: "Facebook",
    href: "https://facebook.com/p/Instituto-Gomes-Basquete-100041372181550/?_rdc=1&_rdr#",
    icon: FaFacebookF,
  },
]

const activities = [
  {
    title: "Basquete",
    description:
      "Prática esportiva para meninos e meninas dos 8 aos 17 anos, com disciplina, convivência e perspectiva de bolsas de estudo.",
    icon: Trophy,
  },
  {
    title: "Xadrez",
    description:
      "Atividade de foco, raciocínio e estratégia para complementar a formação dos jovens.",
    schedule: "Sextas, 14h às 16h",
    icon: Brain,
  },
  {
    title: "Fitboxe",
    description:
      "Treino de alta intensidade com movimentos de lutas e exercícios funcionais no ritmo da música.",
    schedule: "Quintas, 8h às 9h",
    icon: Dumbbell,
  },
]

const pillars = [
  {
    title: "Acolhimento",
    description:
      "Um espaço de pertencimento para crianças, adolescentes e famílias da comunidade assistida.",
    icon: HeartHandshake,
  },
  {
    title: "Formação",
    description:
      "Valores familiares, rotina saudável e desenvolvimento socioemocional por meio do esporte.",
    icon: Users,
  },
  {
    title: "Futuro",
    description:
      "Oportunidade de evolução atlética e ganho de bolsas em escolas e faculdades.",
    icon: GraduationCap,
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-black/8 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3">
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
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex"
          >
            <a className="transition hover:text-neutral-950" href="#inicio">
              Início
            </a>
            <a className="transition hover:text-neutral-950" href="#projeto">
              Projeto
            </a>
            <a className="transition hover:text-neutral-950" href="#atividades">
              Atividades
            </a>
            <a className="transition hover:text-neutral-950" href="#contato">
              Contato
            </a>
          </nav>

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
        </div>
      </header>

      <section id="inicio" className="overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-7 px-5 py-7 sm:px-8 md:grid-cols-[0.92fr_1.08fr] md:items-center md:py-8 lg:gap-10 lg:py-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl leading-[1.02] font-semibold tracking-normal text-balance text-neutral-950 sm:text-5xl xl:text-6xl">
              Instituto Gomes Basquete
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-700 lg:text-xl">
              Basquete, acolhimento e futuro para a comunidade. Um projeto sem
              fins lucrativos para crianças e adolescentes dos 8 aos 17 anos.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-12 bg-[#f05a28] px-5 text-base font-semibold text-white hover:bg-[#d9491e]"
                )}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="size-5" />
                Falar no WhatsApp
              </a>
              <a
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-12 border-neutral-300 px-5 text-base font-semibold text-neutral-950 hover:bg-neutral-100"
                )}
                href="#projeto"
              >
                Conhecer o projeto
                <ArrowUpRight className="size-5" />
              </a>
            </div>

            <div className="mt-8 hidden gap-4 border-y border-neutral-200 py-4 sm:grid sm:grid-cols-3">
              <div>
                <p className="text-sm font-medium text-neutral-500">
                  Público
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-950">
                  8 a 17 anos
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">
                  Participação
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-950">
                  Meninos e meninas
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-500">
                  Propósito
                </p>
                <p className="mt-1 text-lg font-semibold text-neutral-950">
                  Bolsas e futuro
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-4 hidden h-28 w-28 rounded-full border-[16px] border-[#f05a28] opacity-90 md:block" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-neutral-200 bg-neutral-100 shadow-[0_24px_70px_rgba(15,15,15,0.16)]">
              <Image
                src="/images/hero-basquete.png"
                alt="Treinador orientando jovens em uma quadra de basquete"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-6 hidden max-w-xs rounded-lg border border-neutral-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,15,15,0.14)] sm:block">
              <p className="text-sm font-semibold text-neutral-950">
                Esporte com valores familiares
              </p>
              <p className="mt-1 text-sm leading-6 text-neutral-600">
                Rotina, convivência e oportunidade por meio do basquete.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection
        id="projeto"
        className="border-t border-neutral-200 bg-white py-10 md:py-14"
      >
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src="/images/treino-basquete.png"
              alt="Crianças e adolescentes treinando basquete"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="max-w-2xl text-4xl leading-tight font-semibold tracking-normal text-neutral-950 md:text-5xl">
              Um projeto sem fins lucrativos para transformar rotina em
              oportunidade.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-700">
              O Instituto Gomes Basquete oferece à comunidade assistida uma
              opção de acolhimento e prática esportiva com valores familiares,
              ajudando na formação de futuros atletas profissionais.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-neutral-700">
              O objetivo central é aproximar crianças e adolescentes do
              basquetebol desde os 8 ou 9 anos até os 17 anos, abrindo portas
              para bolsas de estudo em escolas e faculdades.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="border-l-2 border-[#f05a28] pl-4"
                >
                  <pillar.icon className="mb-4 size-6 text-[#f05a28]" />
                  <h3 className="text-lg font-semibold text-neutral-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="atividades"
        className="bg-neutral-950 py-16 text-white md:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <h2 className="text-4xl leading-tight font-semibold tracking-normal md:text-5xl">
                Atividades que completam a formação.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-neutral-300 md:justify-self-end">
              Além do basquete, o instituto abre espaço para atividades de
              concentração, saúde e movimento, sempre com acompanhamento e
              convivência comunitária.
            </p>
          </div>

          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {activities.map((activity) => (
              <Card
                key={activity.title}
                className="rounded-lg border-white/12 bg-white/[0.06] text-white ring-white/10"
              >
                <CardHeader>
                  <div className="mb-5 flex size-12 items-center justify-center rounded-lg bg-[#f05a28] text-white">
                    <activity.icon className="size-6" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">
                    {activity.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-7 text-neutral-300">
                    {activity.description}
                  </CardDescription>
                </CardHeader>
                {activity.schedule ? (
                  <CardContent>
                    <div className="flex items-center gap-2 border-t border-white/12 pt-4 text-sm font-semibold text-white">
                      <Clock className="size-4 text-[#ff8a4d]" />
                      {activity.schedule}
                    </div>
                  </CardContent>
                ) : null}
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[#d9491e] uppercase">
              <CalendarDays className="size-4" />
              Agenda semanal
            </div>
            <h2 className="mt-4 max-w-2xl text-4xl leading-tight font-semibold tracking-normal text-neutral-950 md:text-5xl">
              Horários fixos para aprender, treinar e participar.
            </h2>

            <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
              <div className="grid gap-4 py-6 sm:grid-cols-[0.55fr_1fr_auto] sm:items-center">
                <p className="text-xl font-semibold text-neutral-950">
                  Xadrez
                </p>
                <p className="text-neutral-600">
                  Raciocínio, estratégia e foco para complementar o esporte.
                </p>
                <p className="text-base font-semibold text-neutral-950">
                  Sextas, 14h às 16h
                </p>
              </div>
              <div className="grid gap-4 py-6 sm:grid-cols-[0.55fr_1fr_auto] sm:items-center">
                <p className="text-xl font-semibold text-neutral-950">
                  Fitboxe
                </p>
                <p className="text-neutral-600">
                  Lutas e exercícios funcionais no ritmo da música, com foco em
                  condicionamento e bem-estar.
                </p>
                <p className="text-base font-semibold text-neutral-950">
                  Quintas, 8h às 9h
                </p>
              </div>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src="/images/atividades-comunidade.png"
              alt="Jovens em atividades de xadrez e fitboxe"
              fill
              loading="eager"
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="localizacao"
        className="border-t border-neutral-200 bg-white py-16 md:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-sm font-semibold tracking-[0.08em] text-[#d9491e] uppercase">
              <MapPin className="size-4" />
              Localização
            </div>
            <h2 className="mt-4 max-w-xl text-4xl leading-tight font-semibold tracking-normal text-neutral-950 md:text-5xl">
              Encontre o Instituto Gomes Basquete no mapa.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-neutral-700">
              O atendimento e as atividades acontecem na comunidade. Use o mapa
              para conferir a localização e traçar a rota até o instituto.
            </p>
            <div className="mt-8 flex gap-4 border-l-2 border-[#f05a28] pl-4">
              <MapPin className="mt-1 size-5 shrink-0 text-[#f05a28]" />
              <div>
                <p className="font-semibold text-neutral-950">Endereço</p>
                <p className="mt-1 text-neutral-600">{address}</p>
              </div>
            </div>
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
      </AnimatedSection>

      <AnimatedSection
        id="contato"
        className="border-t border-neutral-200 bg-white py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 rounded-lg bg-neutral-950 p-6 text-white sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:p-12">
            <div>
              <h2 className="max-w-2xl text-4xl leading-tight font-semibold tracking-normal md:text-5xl">
                Fale com o Instituto Gomes Basquete.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-300">
                Para saber sobre aulas gratuitas de basquete, participação,
                apoio ao projeto ou visitas, entre em contato pelos canais
                oficiais.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-12 bg-[#f05a28] px-5 text-base font-semibold text-white hover:bg-[#d9491e]"
                  )}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaWhatsapp className="size-5" />
                  Chamar no WhatsApp
                </a>
                <a
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-12 border-white/24 bg-transparent px-5 text-base font-semibold text-white hover:bg-white/10 hover:text-white"
                  )}
                  href="mailto:institutogomesbasquete@gmail.com"
                >
                  <Mail className="size-5" />
                  Enviar e-mail
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-[#ff8a4d]" />
                <div>
                  <p className="font-semibold">Endereço</p>
                  <p className="mt-1 text-neutral-300">
                    {address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="mt-1 size-5 shrink-0 text-[#ff8a4d]" />
                <div>
                  <p className="font-semibold">Gmail</p>
                  <a
                    className="mt-1 block break-all text-neutral-300 transition hover:text-white"
                    href="mailto:institutogomesbasquete@gmail.com"
                  >
                    institutogomesbasquete@gmail.com
                  </a>
                </div>
              </div>
              <Separator className="bg-white/12" />
              <div className="flex flex-wrap gap-3">
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
        </div>
      </AnimatedSection>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-igb.png"
              alt=""
              width={36}
              height={36}
              className="rounded-md"
            />
            <span>Instituto Gomes Basquete</span>
          </div>
          <p>Projeto sem fins lucrativos.</p>
        </div>
      </footer>
    </main>
  )
}
