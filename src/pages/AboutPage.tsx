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

      <section className="relative border-b border-[#292B30] bg-hero-glow py-16 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-6">
          <p className="font-mono text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
            {SITE_CONFIG.brandName} · {SITE_CONFIG.parentCompany}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl">
            {ABOUT_PAGE_CONTENT.intro.title}
          </h1>
          <p className="mt-6 text-lg font-medium leading-relaxed text-[#F5F5F5] sm:text-xl">
            {ABOUT_PAGE_CONTENT.intro.lead}
          </p>
          <p className="mt-4 text-base leading-relaxed text-[#A4A6AD] sm:text-lg">
            {ABOUT_PAGE_CONTENT.intro.body}
          </p>
        </div>
      </section>

      <section className="border-b border-[#292B30] bg-[#08090B] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl divide-y divide-[#292B30] px-6">
          {ABOUT_PAGE_CONTENT.sections.map((section) => (
            <div
              key={section.number}
              id={section.title === 'TerraNova Systems Ltd' ? 'terranova' : undefined}
              className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <span className="font-mono text-xs tabular-nums text-[#C69A52]">
                  {section.number}
                </span>
                <h2 className="mt-2 font-display text-xl font-bold text-[#F5F5F5]">
                  {section.title}
                </h2>
              </div>
              <div className="space-y-4 md:col-span-8">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-[#A4A6AD]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#111318] py-16 text-[#F5F5F5] sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-8 px-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl">
              Experience Aqoriel Directly
            </h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-[#A4A6AD]">
              Start a conversation with <span className="font-mono text-[#C69A52]">{SITE_CONFIG.telegramHandle}</span> on Telegram or get in touch
              with {SITE_CONFIG.parentCompany}.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#C69A52] px-5 py-2.5 text-sm font-semibold text-[#08090B] transition-colors hover:bg-[#d5aa64] whitespace-nowrap"
            >
              <TelegramIcon className="h-4 w-4" />
              <span>Open Telegram</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <Link
              to="/contact"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#292B30] bg-[#17191F] px-5 py-2.5 text-sm font-medium text-[#F5F5F5] transition-colors hover:border-[#C69A52]/60 hover:text-[#C69A52] whitespace-nowrap"
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
