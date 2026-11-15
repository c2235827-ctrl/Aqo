import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FaqItem } from '../data/aqorielContent';

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#292B30] border-y border-[#292B30]">
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
                className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors duration-150 hover:text-[#C69A52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C69A52]"
              >
                <span
                  className={`font-display text-base font-medium transition-colors sm:text-lg ${
                    isOpen ? 'text-[#F5F5F5]' : 'text-[#F5F5F5]/90'
                  }`}
                >
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#C69A52]' : 'text-[#A4A6AD]'
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
                className="pb-6 pr-8 text-sm leading-relaxed text-[#A4A6AD] sm:text-base"
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
