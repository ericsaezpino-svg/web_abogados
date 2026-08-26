import Container from "@/components/Container";
import { TODO_LEGAL } from "@/lib/content";
import type { LegalBlock, LegalDocument } from "@/lib/content/legal/types";

type LegalDocumentBodyProps = {
  doc: LegalDocument;
};

/**
 * Resalta en rojo los `[COMPLETAR]` que queden en el texto, para que un dato
 * pendiente no pase inadvertido al revisar la página.
 */
function withPlaceholders(text: string) {
  const parts = text.split(TODO_LEGAL);

  if (parts.length === 1) {
    return text;
  }

  return parts.flatMap((part, index) =>
    index === 0
      ? [part]
      : [
          <mark
            key={index}
            className="bg-red-100 px-1.5 font-sans text-sm font-semibold text-red-700"
          >
            {TODO_LEGAL}
          </mark>,
          part,
        ],
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "paragraph":
      return (
        <p className="mt-4 text-base text-slate">{withPlaceholders(block.text)}</p>
      );

    case "list":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-base text-slate">
              <span aria-hidden="true" className="mt-3 h-px w-3 shrink-0 bg-gold" />
              <span>{withPlaceholders(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "definitions":
      return (
        <dl className="mt-5 space-y-3 border-l-2 border-gold/40 pl-5">
          {block.items.map((item) => (
            <div key={item.term} className="sm:flex sm:gap-3">
              <dt className="font-sans text-xs font-semibold tracking-[0.14em] text-navy uppercase sm:w-44 sm:shrink-0 sm:pt-1">
                {item.term}
              </dt>
              <dd className="text-base text-slate">{withPlaceholders(item.value)}</dd>
            </div>
          ))}
        </dl>
      );

    case "table":
      return (
        <div className="mt-5 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-left text-base">
            <thead>
              <tr>
                {block.head.map((cell) => (
                  <th
                    key={cell}
                    scope="col"
                    className="border-b border-navy-200 pb-3 font-sans text-xs font-semibold tracking-[0.14em] text-navy uppercase"
                  >
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell) => (
                    <td
                      key={cell}
                      className="border-b border-navy-100 py-3 pr-4 align-top text-slate"
                    >
                      {withPlaceholders(cell)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "callout":
      return (
        <p className="mt-5 border-l-2 border-gold bg-cream px-5 py-4 text-base text-navy">
          {withPlaceholders(block.text)}
        </p>
      );
  }
}

export default function LegalDocumentBody({ doc }: LegalDocumentBodyProps) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16">
          {/* Índice de apartados: se queda fijo en escritorio. */}
          <nav aria-label={doc.tocTitle} className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="font-sans text-xs font-semibold tracking-[0.18em] text-gold-700 uppercase">
              {doc.tocTitle}
            </h2>
            <ol className="mt-5 space-y-2">
              {doc.sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="font-sans text-sm text-slate transition-colors duration-200 hover:text-gold-700"
                  >
                    <span className="text-navy-300">{index + 1}.</span> {section.title}
                  </a>
                </li>
              ))}
            </ol>
            <p className="mt-8 border-t border-navy-100 pt-5 font-sans text-xs text-slate">
              {doc.updated}
            </p>
          </nav>

          <div className="max-w-2xl">
            {doc.sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28 border-navy-100 pt-10 first:pt-0 [&+section]:border-t"
              >
                <h2 className="text-2xl font-normal">
                  <span className="font-sans text-base text-gold">{index + 1}.</span>{" "}
                  {section.title}
                </h2>
                {section.blocks.map((block, blockIndex) => (
                  <Block key={blockIndex} block={block} />
                ))}
              </section>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
