import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../data/aqorielContent';

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-200 border-y border-neutral-200">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-neutral-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                <span className="font-display text-base font-medium text-neutral-950 sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-neutral-950' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="pb-6 pr-8 text-sm leading-relaxed text-neutral-600 sm:text-base"
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
