import {
  BookOpen,
  Briefcase,
  Building2,
  CalendarCheck,
  Clock,
  Eye,
  FileText,
  Gavel,
  Globe,
  Handshake,
  House,
  Landmark,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  Scale,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

/**
 * Mapa de iconos disponible para el contenido.
 * `content.ts` solo guarda la clave (string), no el componente.
 */
export const icons = {
  bookOpen: BookOpen,
  briefcase: Briefcase,
  building: Building2,
  calendarCheck: CalendarCheck,
  clock: Clock,
  eye: Eye,
  fileText: FileText,
  gavel: Gavel,
  globe: Globe,
  handshake: Handshake,
  home: House,
  landmark: Landmark,
  lock: Lock,
  mail: Mail,
  messageCircle: MessageCircle,
  phone: Phone,
  scale: Scale,
  shieldCheck: ShieldCheck,
  users: Users,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
