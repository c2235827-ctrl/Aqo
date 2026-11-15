import { ArrowUpRight, Check } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { FeatureIcon, TelegramIcon } from '../components/Icons';
import { SITE_CONFIG } from '../config/site';
import { FEATURES_PAGE_CONTENT } from '../data/aqorielContent';

export function FeaturesPage() {
  return (
    <>
      <PageMeta
        title="Features | Aqoriel Academic AI Capabilities"
        description="Explore Aqoriel's nine academic AI capabilities: AI Tutor, Lecture Assistant, Academic Research, Document Intelligence, Smart Notes, Flashcards, Quizzes, Exam Preparation, and Study Planning."
        path="/features"
      />

      <section className="relative border-b border-[#292B30] bg-hero-glow py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
            Capabilities · {SITE_CONFIG.telegramHandle}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl">
            Academic Capabilities Built for Real Coursework
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#A4A6AD] sm:text-lg">
            Aqoriel combines nine focused academic workflows inside one Telegram assistant—helping
            students comprehend complex subjects, organize lectures and readings, and prepare
            methodically for examinations.
          </p>

          <nav
            aria-label="Feature directory"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-[#292B30] pt-6 text-sm text-[#A4A6AD]"
          >
            {FEATURES_PAGE_CONTENT.map((feature) => (
              <a
                key={feature.id}
                href={`#${feature.id}`}
                className="transition-colors hover:text-[#C69A52] whitespace-nowrap"
              >
                <span className="mr-1.5 font-mono text-xs text-[#8C6638]">{feature.number}</span>
                <span>{feature.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-[#08090B] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {FEATURES_PAGE_CONTENT.map((feature) => (
            <article
              key={feature.id}
              id={feature.id}
              className="scroll-mt-24 rounded-2xl border border-[#292B30] bg-[#111318] p-7 transition-colors duration-200 hover:border-[#C69A52]/40 sm:p-10"
            >
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 text-xs text-[#A4A6AD]">
                    <span className="font-mono tabular-nums text-[#C69A52]">{feature.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>Capability Overview</span>
                  </div>

                  <div className="mt-4 flex items-center gap-3.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#C69A52]/40 bg-[#C69A52]/10 text-[#C69A52]">
                      <FeatureIcon name={feature.iconName} className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl">
                      {feature.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-[#A4A6AD]">
                    {feature.explanation}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm text-[#F5F5F5]/90"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A52]"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <a
                      href={SITE_CONFIG.telegramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#C69A52]/70 bg-[#C69A52]/15 px-5 py-2.5 text-sm font-medium text-[#F5F5F5] transition-colors duration-150 hover:bg-[#C69A52] hover:text-[#08090B] whitespace-nowrap"
                    >
                      <TelegramIcon className="h-4 w-4" />
                      <span>Use {feature.title} on Telegram</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Dark Product Preview Panel */}
                <div className="lg:col-span-6">
                  <div className="rounded-xl border border-[#292B30] bg-[#17191F] p-6">
                    <div className="flex items-center justify-between border-b border-[#292B30] pb-3 text-xs text-[#A4A6AD]">
                      <span>{feature.previewLabel}</span>
                      <span className="font-mono text-[#C69A52]">{SITE_CONFIG.telegramHandle}</span>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div className="rounded-lg border border-[#292B30] bg-[#08090B] px-4 py-3 text-sm text-[#F5F5F5]">
                        <p className="text-xs text-[#A4A6AD]">Student Request</p>
                        <p className="mt-1">{feature.previewPrompt}</p>
                      </div>

                      <div className="rounded-lg border border-[#292B30] bg-[#111318] p-4 text-sm text-[#F5F5F5]">
                        <p className="font-display text-xs font-semibold text-[#C69A52]">
                          {feature.previewResponseTitle}
                        </p>
                        <ul className="mt-2.5 space-y-2 text-xs leading-relaxed text-[#A4A6AD]">
                          {feature.previewResponseLines.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
