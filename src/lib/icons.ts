import {
  BookOpen,
  Briefcase,
  Building2,
  Clock,
  FileText,
  Gavel,
  Handshake,
  House,
  Landmark,
  Mail,
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
  clock: Clock,
  fileText: FileText,
  gavel: Gavel,
  handshake: Handshake,
  home: House,
  landmark: Landmark,
  mail: Mail,
  scale: Scale,
  shieldCheck: ShieldCheck,
  users: Users,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof icons;
