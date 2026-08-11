import {
  BookOpen,
  Briefcase,
  Building2,
  CalendarCheck,
  Clock,
  FileText,
  Gavel,
  Handshake,
  House,
  Landmark,
  Mail,
  MessageCircle,
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
  fileText: FileText,
  gavel: Gavel,
  handshake: Handshake,
  home: House,
  landmark: Landmark,
  mail: Mail,
  messageCircle: MessageCircle,
  scale: Scale,
  shieldCheck: ShieldCheck,
  users: Users,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
