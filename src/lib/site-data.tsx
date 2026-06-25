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

export const whatsappUrl =
  "https://api.whatsapp.com/send?phone=555511952929246&text=aulas%20de%20basquete%20gratuito"

export const email = "institutogomesbasquete@gmail.com"

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
    title: "Fitboxe",
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
    title: "Depoimentos históricos",
    description:
      "Espaço para organizar relatos de antigos atletas registrados quando tinham entre 15 e 17 anos.",
    icon: MessageSquareText,
  },
  {
    title: "Jogos e treinos antigos",
    description:
      "Galeria para fotos, vídeos e registros de temporadas anteriores do instituto.",
    icon: Images,
  },
  {
    title: "Reportagens e marcos",
    description:
      "Arquivo para matérias, conquistas, eventos e momentos importantes da instituição.",
    icon: History,
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
    title: "Fitboxe",
    description:
      "Lutas e exercícios funcionais no ritmo da música, com foco em condicionamento e bem-estar.",
    time: "Quintas, 8h às 9h",
    icon: CalendarDays,
  },
]
