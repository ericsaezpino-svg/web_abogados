import { ArrowUpRight } from "lucide-react";

import type { ContactChannel } from "@/lib/content";
import { icons } from "@/lib/icons";

type ContactChannelCardProps = {
  channel: ContactChannel;
};

export default function ContactChannelCard({ channel }: ContactChannelCardProps) {
  const Icon = icons[channel.icon];
  const externalProps = channel.external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <a
      href={channel.href}
      {...externalProps}
      className="group flex h-full flex-col border border-navy-100 bg-white p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_12px_32px_rgba(27,42,74,0.08)]"
    >
      <span className="inline-flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <h3 className="mt-6 flex items-start gap-2 text-xl font-normal">
        {channel.title}
        <ArrowUpRight
          className="mt-1 h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden="true"
        />
      </h3>

      <p className="mt-3 text-base text-slate">{channel.description}</p>

      {/* Dato concreto del canal: se muestra tal cual (el email no se pone en
          mayúsculas, a diferencia de las etiquetas del resto de la interfaz). */}
      <p className="mt-6 font-sans text-sm font-medium tracking-wide break-all text-gold-700">
        {channel.detail}
      </p>

      <span className="mt-auto pt-6 font-sans text-sm tracking-wide text-navy underline decoration-gold decoration-1 underline-offset-4 transition-colors duration-200 group-hover:text-gold-700">
        {channel.actionLabel}
      </span>
    </a>
  );
}
