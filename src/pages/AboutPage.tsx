import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { TelegramIcon } from '../components/Icons';
import { SITE_CONFIG } from '../config/site';
import { ABOUT_PAGE_CONTENT } from '../data/aqorielContent';

export function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Aqoriel | TerraNova Systems Ltd"
        description="Learn about Aqoriel's mission, vision, academic technology approach, and parent company TerraNova Systems Ltd."
        path="/about"
      />

      <section className="border-b border-neutral-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-xs font-medium text-neutral-500">
            <span>{SITE_CONFIG.brandName}</span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span>{SITE_CONFIG.parentCompany}</span>
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            {ABOUT_PAGE_CONTENT.intro.title}
          </h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-neutral-900 sm:text-xl">
            {ABOUT_PAGE_CONTENT.intro.lead}
          </p>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 sm:text-lg">
            {ABOUT_PAGE_CONTENT.intro.body}
          </p>
        </div>
      </section>

      <section className="border-b border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-neutral-200 px-6">
          {ABOUT_PAGE_CONTENT.sections.map((section) => (
            <div
              key={section.number}
              id={section.title === 'TerraNova Systems Ltd' ? 'terranova' : undefined}
              className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <span className="font-mono text-xs tabular-nums text-neutral-400">
                  {section.number}
                </span>
                <h2 className="mt-2 font-display text-xl font-bold text-neutral-950">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 md:col-span-8">
                {section.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-neutral-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-neutral-950 py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Experience Aqoriel Directly
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-neutral-300">
              Start a conversation with {SITE_CONFIG.telegramHandle} on Telegram or get in touch
              with TerraNova Systems Ltd.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200 whitespace-nowrap"
            >
              <TelegramIcon className="h-4 w-4" />
              <span>Open Telegram</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-neutral-700 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white whitespace-nowrap"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
