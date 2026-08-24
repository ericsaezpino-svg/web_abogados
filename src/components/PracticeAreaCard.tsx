import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

import type { Feature, PracticeArea } from "@/lib/content";
import { icons } from "@/lib/icons";

type PracticeAreaCardProps = {
  item: Feature | PracticeArea;
};

export default function PracticeAreaCard({ item }: PracticeAreaCardProps) {
  const Icon = icons[item.icon];

  const content = (
    <>
      <span className="inline-flex h-12 w-12 items-center justify-center border border-gold/40 text-gold transition-colors duration-300 group-hover:border-gold group-hover:bg-gold group-hover:text-white">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>

      <h3 className="mt-6 flex items-start gap-2 text-xl font-normal">
        {item.title}
        {item.href ? (
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
        ) : null}
      </h3>

      {"points" in item ? (
        <ul className="mt-4 space-y-2">
          {item.points.map((point) => (
            <li key={point} className="flex items-start gap-2 text-base text-slate">
              <Check className="mt-1 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3 text-base text-slate">{item.description}</p>
      )}
    </>
  );

  const cardClasses =
    "group flex h-full flex-col border border-navy-100 bg-white p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_12px_32px_rgba(27,42,74,0.08)]";

  if (item.href) {
    return (
      <Link href={item.href} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return <article className={cardClasses}>{content}</article>;
}
