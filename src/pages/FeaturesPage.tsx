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

      <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium text-neutral-500">
            <span>Capabilities</span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span>Accessible via {SITE_CONFIG.telegramHandle}</span>
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Academic Capabilities Built for Real Coursework
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Aqoriel combines nine focused academic workflows inside one Telegram assistant—helping
            students comprehend complex subjects, organize lectures and readings, and prepare
            methodically for examinations.
          </p>

          <nav
            aria-label="Feature directory"
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-neutral-200 pt-6 text-sm text-neutral-600"
          >
            {FEATURES_PAGE_CONTENT.map((feature) => (
              <a
                key={feature.id}
                href={`#${feature.id}`}
                className="transition-colors hover:text-neutral-950 whitespace-nowrap"
              >
                <span className="mr-1.5 font-mono text-xs text-neutral-400">
                  {feature.number}
                </span>
                <span>{feature.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-10 px-6">
          {FEATURES_PAGE_CONTENT.map((feature, index) => (
            <article
              key={feature.id}
              id={feature.id}
              className="scroll-mt-24 rounded-2xl border border-neutral-200 bg-white p-7 sm:p-10"
            >
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <span className="font-mono tabular-nums">{feature.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>Capability Overview</span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-950">
                      <FeatureIcon name={feature.iconName} className="h-5 w-5" />
                    </div>
                    <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                      {feature.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-neutral-600">
                    {feature.explanation}
                  </p>

                  <ul className="mt-6 space-y-2.5">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-sm text-neutral-700"
                      >
                        <Check
                          className="mt-0.5 h-4 w-4 shrink-0 text-neutral-950"
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
                      className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap"
                    >
                      <TelegramIcon className="h-4 w-4" />
                      <span>Use {feature.title} on Telegram</span>
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Product Preview Panel */}
                <div className="lg:col-span-6">
                  <div
                    className={`rounded-xl border p-6 ${
                      index % 2 === 1
                        ? 'border-neutral-800 bg-neutral-950 text-white'
                        : 'border-neutral-200 bg-neutral-50 text-neutral-950'
                    }`}
                  >
                    <div
                      className={`flex items-center justify-between border-b pb-3 text-xs ${
                        index % 2 === 1
                          ? 'border-neutral-800 text-neutral-400'
                          : 'border-neutral-200 text-neutral-500'
                      }`}
                    >
                      <span>{feature.previewLabel}</span>
                      <span className="font-mono">{SITE_CONFIG.telegramHandle}</span>
                    </div>

                    <div className="mt-4 space-y-4">
                      <div
                        className={`rounded-lg px-4 py-3 text-sm ${
                          index % 2 === 1
                            ? 'bg-neutral-900 text-neutral-200'
                            : 'bg-neutral-950 text-white'
                        }`}
                      >
                        <p
                          className={`text-xs ${
                            index % 2 === 1 ? 'text-neutral-400' : 'text-neutral-300'
                          }`}
                        >
                          Student Request
                        </p>
                        <p className="mt-1">{feature.previewPrompt}</p>
                      </div>

                      <div
                        className={`rounded-lg border p-4 text-sm ${
                          index % 2 === 1
                            ? 'border-neutral-800 bg-neutral-900/70 text-neutral-200'
                            : 'border-neutral-200 bg-white text-neutral-800'
                        }`}
                      >
                        <p
                          className={`font-display text-xs font-semibold ${
                            index % 2 === 1 ? 'text-white' : 'text-neutral-950'
                          }`}
                        >
                          {feature.previewResponseTitle}
                        </p>
                        <ul className="mt-2.5 space-y-2 text-xs leading-relaxed">
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
