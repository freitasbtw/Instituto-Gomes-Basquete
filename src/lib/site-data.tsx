import {
  Brain,
  CalendarDays,
  Dumbbell,
  GraduationCap,
  HeartHandshake,
  History,
  Images,
  Mail,
  MapPin,
  MessageSquareText,
  Trophy,
  Users,
} from "lucide-react"
import { FaFacebookF, FaInstagram, FaThreads, FaWhatsapp } from "react-icons/fa6"

const whatsappMessage =
  "Olá! Tenho interesse nas aulas gratuitas de basquete do Instituto Gomes Basquete. Poderiam me informar os horários, faixas etárias e como fazer a inscrição?"

export const whatsappUrl = `https://api.whatsapp.com/send?phone=555511952929246&text=${encodeURIComponent(
  whatsappMessage
)}`

export const email = "institutogomesbasquete@gmail.com"

export const instagramUrl = "https://www.instagram.com/instituto_gomesbasquete/"

export const facebookUrl =
  "https://web.facebook.com/p/Instituto-Gomes-Basquete-100041372181550/?_rdc=1&_rdr#"

const facebookPluginPageUrl =
  "https://www.facebook.com/p/Instituto-Gomes-Basquete-100041372181550/"

export const facebookWidgetUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  facebookPluginPageUrl
)}&tabs=timeline&width=500&height=560&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`

export const address =
  "Av. Cônego José Salomon, 755 - Jardim Felicidade (Zona Norte), São Paulo - SP, 02918-170"

export const mapsEmbedUrl =
  "https://www.google.com/maps?q=Instituto%20Gomes%20Basquete%2C%20Av.%20C%C3%B4nego%20Jos%C3%A9%20Salomon%2C%20755%20-%20Jardim%20Felicidade%20%28Zona%20Norte%29%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002918-170&z=17&output=embed"

export const mapsSearchUrl =
  "https://www.google.com/maps/search/?api=1&query=Instituto%20Gomes%20Basquete%2C%20Av.%20C%C3%B4nego%20Jos%C3%A9%20Salomon%2C%20755%20-%20Jardim%20Felicidade%20%28Zona%20Norte%29%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2002918-170"

export const navItems = [
  { label: "Início", href: "/" },
  { label: "Quem somos", href: "/quem-somos" },
  { label: "Atividades", href: "/atividades" },
  { label: "Histórico", href: "/historico" },
  { label: "Depoimentos", href: "/depoimentos" },
  { label: "Parceiros", href: "/parceiros" },
  { label: "Contato", href: "/contato" },
]

export const socialLinks = [
  {
    label: "Instagram",
    href: instagramUrl,
    icon: FaInstagram,
  },
  {
    label: "Threads",
    href: "https://www.threads.com/@instituto_gomesbasquete",
    icon: FaThreads,
  },
  {
    label: "Facebook",
    href: facebookUrl,
    icon: FaFacebookF,
  },
]

export const siteImages = {
  hero: "/images/site/clinica-dante-acao.jpeg",
  project: "/images/site/clinica-dante-grupo-criancas.jpeg",
  activities: "/images/site/clinica-dante-roda.jpeg",
  history: "/images/site/clinica-dante-grupo-jovens.jpeg",
}

export const activities = [
  {
    title: "Basquete",
    description:
      "Prática esportiva para meninos e meninas dos 8 aos 17 anos, com disciplina, convivência e perspectiva de bolsas de estudo.",
    schedule: "Turmas por categoria e faixa etária",
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
    title: "Fitbox",
    description:
      "Treino de alta intensidade com movimentos de lutas e exercícios funcionais no ritmo da música.",
    schedule: "Quintas, 8h às 9h",
    icon: Dumbbell,
  },
]

export const pillars = [
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

export const memoryAreas = [
  {
    title: "Histórias de atletas",
    description:
      "Relatos de jovens, famílias e ex-atletas que mostram como o esporte marca a vida dentro e fora da quadra.",
    icon: MessageSquareText,
  },
  {
    title: "Vivência na quadra",
    description:
      "Treinos, jogos, clínicas e encontros que revelam a rotina de aprendizado do Instituto.",
    icon: Images,
  },
  {
    title: "Eventos e conquistas",
    description:
      "Momentos importantes da trajetória, parcerias, reportagens e ações que fortaleceram o projeto.",
    icon: History,
  },
]

export const historyTimeline = [
  {
    period: "Clínica de basquete",
    title: "Clínica com o professor Dante de Rose",
    description:
      "Um encontro de formação esportiva com crianças e adolescentes do Instituto, unindo fundamentos do basquete, convivência e referência técnica dentro da quadra.",
    images: [
      {
        src: "/images/site/clinica-dante-grupo-jovens.jpeg",
        alt: "Professor Dante de Rose, Maurício Gomes e jovens do Instituto Gomes Basquete reunidos após clínica de basquete",
      },
      {
        src: "/images/site/clinica-dante-roda.jpeg",
        alt: "Crianças e adolescentes em roda de treino durante clínica de basquete",
      },
      {
        src: "/images/site/clinica-dante-drible.jpeg",
        alt: "Atletas do Instituto praticando drible durante clínica de basquete",
      },
    ],
  },
  {
    period: "Registros antigos",
    title: "ALL Star Game IGB",
    description:
      "Um evento marcante da história do Instituto, com atletas em quadra, momentos de treino, orientação e fotos de equipe.",
    images: [
      {
        src: "/images/site/all-star-grupo-geral.jpeg",
        alt: "Atletas do Instituto Gomes Basquete reunidos no ALL Star Game IGB",
      },
      {
        src: "/images/site/all-star-equipe-branca.jpeg",
        alt: "Equipe de atletas em uniforme branco no ALL Star Game IGB",
      },
      {
        src: "/images/site/all-star-drible-treino.jpeg",
        alt: "Atletas em exercício de drible durante treino antigo do instituto",
      },
    ],
  },
]

export const historicalGallery = [
  {
    src: "/images/site/clinica-dante-acao.jpeg",
    alt: "Crianças em atividade durante clínica de basquete do Instituto Gomes Basquete",
    caption: "Clínica em movimento",
  },
  {
    src: "/images/site/clinica-dante-grupo-criancas.jpeg",
    alt: "Professor Dante de Rose com crianças do Instituto Gomes Basquete",
    caption: "Professor Dante de Rose",
  },
  {
    src: "/images/site/clinica-dante-roda.jpeg",
    alt: "Treino coletivo durante clínica de basquete",
    caption: "Treino coletivo",
  },
  {
    src: "/images/site/clinica-dante-quadra.jpeg",
    alt: "Atletas participando de atividade na quadra",
    caption: "Fundamentos em quadra",
  },
  {
    src: "/images/site/all-star-grupo-geral.jpeg",
    alt: "Grupo de atletas reunidos no ALL Star Game IGB",
    caption: "Grupo reunido",
  },
  {
    src: "/images/site/all-star-equipe-branca.jpeg",
    alt: "Atletas do instituto em uniforme branco com treinador",
    caption: "Equipe e treinador",
  },
  {
    src: "/images/site/all-star-equipe-laranja.jpeg",
    alt: "Atletas em uniforme laranja em foto de equipe",
    caption: "Foto de equipe",
  },
  {
    src: "/images/site/all-star-banco-atletas.jpeg",
    alt: "Atletas sentados na lateral da quadra aguardando o treino",
    caption: "Bastidor da quadra",
  },
  {
    src: "/images/site/all-star-arremesso.jpeg",
    alt: "Atleta apontando em atividade com bolas durante o ALL Star Game IGB",
    caption: "Dinâmica do evento",
  },
  {
    src: "/images/site/all-star-drible-treino.jpeg",
    alt: "Atletas em movimento durante exercício de drible",
    caption: "Treino em movimento",
  },
]

export const communityFeedback = [
  {
    title: "Comportamento e disciplina",
    description:
      "Relatos de pais sobre evolução na rotina, responsabilidade e convivência das crianças.",
  },
  {
    title: "Confiança e pertencimento",
    description:
      "Depoimentos sobre acolhimento, autoestima e vínculo positivo com o esporte.",
  },
  {
    title: "Impacto na família",
    description:
      "Mensagens enviadas à coordenação sobre mudanças percebidas dentro e fora da quadra.",
  },
]

export const contactChannels = [
  {
    title: "WhatsApp",
    description: "Canal rápido para informações sobre aulas e participação.",
    href: whatsappUrl,
    icon: FaWhatsapp,
  },
  {
    title: "E-mail",
    description: "Canal para parcerias, feedbacks, imprensa e retorno institucional.",
    href: `mailto:${email}`,
    icon: Mail,
  },
  {
    title: "Endereço",
    description: address,
    href: mapsSearchUrl,
    icon: MapPin,
  },
]

export const scheduleRows = [
  {
    title: "Xadrez",
    description: "Raciocínio, estratégia e foco para complementar o esporte.",
    time: "Sextas, 14h às 16h",
    icon: CalendarDays,
  },
  {
    title: "Fitbox",
    description:
      "Lutas e exercícios funcionais no ritmo da música, com foco em condicionamento e bem-estar.",
    time: "Quintas, 8h às 9h",
    icon: CalendarDays,
  },
]
