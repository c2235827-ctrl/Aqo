import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { FeatureIcon, TelegramIcon } from '../components/Icons';
import { TelegramPreview } from '../components/TelegramPreview';
import { FaqAccordion } from '../components/FaqAccordion';
import { SITE_CONFIG } from '../config/site';
import { PRICING_CONFIG } from '../config/pricing';
import { HOME_CONTENT } from '../data/aqorielContent';

export function HomePage() {
  const {
    hero,
    introduction,
    featuresSection,
    howItWorks,
    telegramSection,
    whyAqoriel,
    aboutPreview,
    faqs,
    finalCta,
  } = HOME_CONTENT;

  return (
    <>
      <PageMeta
        title={SITE_CONFIG.seo.defaultTitle}
        description={SITE_CONFIG.seo.defaultDescription}
        path="/"
      />

      {/* SECTION A: HERO */}
      <section className="border-b border-neutral-200 bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-medium text-neutral-500">
              <span>{SITE_CONFIG.brandName}</span>
              <span aria-hidden="true" className="mx-2">
                ·
              </span>
              <span>Developed by {SITE_CONFIG.parentCompany}</span>
            </p>
            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              {hero.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                <TelegramIcon className="h-4 w-4" />
                <span>{hero.primaryCta}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#features"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-colors duration-150 hover:border-neutral-950 hover:bg-neutral-50 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
              >
                <span>{hero.secondaryCta}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="mt-12 sm:mt-14">
            <TelegramPreview />
          </div>
        </div>
      </section>

      {/* SECTION B: INTRODUCTION */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                {introduction.heading}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <p className="text-base leading-relaxed text-neutral-600 sm:text-lg">
                {introduction.description}
              </p>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {introduction.pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="rounded-xl border border-neutral-200 bg-white p-7 transition-colors duration-150 hover:border-neutral-400"
              >
                <span className="font-mono text-xs font-medium tabular-nums text-neutral-500">
                  {pillar.number}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-neutral-950">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-neutral-600">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION C: FEATURES */}
      <section id="features" className="border-b border-neutral-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                {featuresSection.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {featuresSection.subheading}
              </p>
            </div>
            <Link
              to="/features"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-950 underline underline-offset-4 transition-colors hover:text-neutral-600 whitespace-nowrap shrink-0"
            >
              <span>Explore full capabilities</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuresSection.items.map((feature) => (
              <article
                key={feature.id}
                className={`group flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-150 hover:-translate-y-0.5 hover:border-neutral-400 ${
                  feature.spanWide ? 'lg:col-span-2' : 'lg:col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 text-neutral-950 transition-colors duration-150 group-hover:bg-neutral-950 group-hover:text-white">
                      <FeatureIcon name={feature.iconName} className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-xs tabular-nums text-neutral-400">
                      {feature.number}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-lg font-semibold text-neutral-950">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {feature.description}
                  </p>

                  {feature.bullets && feature.bullets.length > 0 && (
                    <ul className="mt-4 grid grid-cols-1 gap-1.5 border-t border-neutral-100 pt-4 text-xs text-neutral-700 sm:grid-cols-2">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2">
                          <span className="h-1 w-1 shrink-0 rounded-full bg-neutral-950" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION D: HOW IT WORKS */}
      <section id="how-it-works" className="border-b border-neutral-200 bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              {howItWorks.heading}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {howItWorks.steps.map((item) => (
              <div
                key={item.number}
                className="rounded-xl border border-neutral-200 bg-white p-7"
              >
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span className="font-mono font-medium tracking-wide">{item.step}</span>
                  <span className="font-mono tabular-nums text-neutral-400">{item.number}</span>
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-neutral-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 whitespace-nowrap"
            >
              <span>{howItWorks.ctaLabel}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION E: TELEGRAM INTEGRATION (DARK ACCENT SECTION) */}
      <section className="bg-neutral-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {telegramSection.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300">
                {telegramSection.description}
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-7 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 text-white">
                      <TelegramIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {SITE_CONFIG.brandName}
                      </h3>
                      <p className="font-mono text-sm text-neutral-400">
                        {SITE_CONFIG.telegramHandle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-neutral-300">
                  {telegramSection.cardDescription}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-800 pt-6">
                  <span className="font-mono text-xs text-neutral-400">
                    https://t.me/aqoriel_bot
                  </span>
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-neutral-950 transition-colors duration-150 hover:bg-neutral-200 whitespace-nowrap"
                  >
                    <TelegramIcon className="h-4 w-4" />
                    <span>{telegramSection.buttonLabel}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: WHY AQORIEL */}
      <section className="border-b border-neutral-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                {whyAqoriel.heading}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600">
                {whyAqoriel.description}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {whyAqoriel.benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="border-t border-neutral-200 pt-5"
                >
                  <span className="font-mono text-xs tabular-nums text-neutral-400">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-base font-semibold text-neutral-950">
                    {benefit.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {benefit.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: ABOUT PREVIEW */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
                {aboutPreview.heading}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
                {aboutPreview.description}
              </p>
              <div className="mt-7">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-neutral-950 underline underline-offset-4 transition-colors hover:text-neutral-600"
                >
                  <span>Read more about Aqoriel and TerraNova Systems Ltd</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-7 lg:col-span-5">
              <h3 className="font-display text-sm font-semibold text-neutral-950">
                {aboutPreview.visionHeading}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-neutral-700">
                {aboutPreview.visionText}
              </p>
              <div className="mt-6 border-t border-neutral-200 pt-5 text-xs text-neutral-500">
                {aboutPreview.companyLine}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION H: PRICING PREVIEW (SINGLE EARLY-ACCESS ANNOUNCEMENT CARD) */}
      <section className="border-b border-neutral-200 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Choose How You Learn with Aqoriel
            </h2>
          </div>

          <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sm:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-medium text-neutral-500">
                  {PRICING_CONFIG.earlyAccessCard.label}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-neutral-950">
                  {PRICING_CONFIG.earlyAccessCard.headline}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600 sm:text-base">
                  {PRICING_CONFIG.earlyAccessCard.description}
                </p>
                <ul className="mt-6 space-y-2.5 text-sm text-neutral-700">
                  {PRICING_CONFIG.earlyAccessCard.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-neutral-950"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 sm:w-auto whitespace-nowrap"
                >
                  <TelegramIcon className="h-4 w-4" />
                  <span>{PRICING_CONFIG.earlyAccessCard.primaryCtaLabel}</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <Link
                  to="/pricing"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition-colors duration-150 hover:border-neutral-950 sm:w-auto whitespace-nowrap"
                >
                  <span>{PRICING_CONFIG.earlyAccessCard.secondaryCtaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION I: FAQ */}
      <section id="faq" className="border-b border-neutral-200 bg-neutral-50 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10">
            <h2 className="font-display text-3xl font-bold tracking-tight text-neutral-950 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-neutral-600">
              Clear answers about Aqoriel, Telegram access, capabilities, and upcoming plans.
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* SECTION J: FINAL CTA (DARK ACCENT SECTION) */}
      <section className="bg-neutral-950 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            {finalCta.supportingText}
          </p>
          <div className="mt-8">
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-neutral-950 transition-colors duration-150 hover:bg-neutral-200 whitespace-nowrap"
            >
              <TelegramIcon className="h-4 w-4" />
              <span>{finalCta.buttonLabel}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
