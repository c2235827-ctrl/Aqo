import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { FeatureIcon, TelegramIcon } from '../components/Icons';
import { HeroVisual } from '../components/HeroVisual';
import { ProductShowcase } from '../components/ProductShowcase';
import { FaqAccordion } from '../components/FaqAccordion';
import { ContactForm } from '../components/ContactForm';
import { SITE_CONFIG } from '../config/site';
import { PRICING_CONFIG } from '../config/pricing';
import { HOME_CONTENT } from '../data/aqorielContent';

const HOW_IT_WORKS_STAGES = [
  {
    number: '01',
    title: 'Access Aqoriel through Telegram.',
    detail:
      'Open the official assistant @aqoriel_bot directly inside Telegram without installing a separate dashboard.',
  },
  {
    number: '02',
    title: 'Ask questions, submit materials and explore academic tools.',
    detail:
      'Request step-by-step explanations, upload supported lecture recordings or documents, and initiate research outlines.',
  },
  {
    number: '03',
    title: 'Receive intelligent assistance for your academic work.',
    detail:
      'Turn raw coursework into structured notes, flashcards, diagnostic quizzes, and focused study plans.',
  },
];

export function HomePage() {
  const { featuresSection, faqs } = HOME_CONTENT;

  return (
    <>
      <PageMeta
        title={SITE_CONFIG.seo.defaultTitle}
        description={SITE_CONFIG.seo.defaultDescription}
        path="/"
      />

      {/* HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#292B30] bg-hero-glow py-14 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-35" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6">
              <p className="font-mono text-xs font-medium tracking-[0.18em] text-[#C69A52] uppercase">
                BEST AI COMPANION FOR ACADEMIC LEARNING
              </p>

              <h1 className="mt-4 font-display text-[2.15rem] leading-[1.12] font-bold tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
                Your Academic World.
                <span className="block text-[#F5F5F5]/90">One Intelligent Companion.</span>
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#A4A6AD] sm:text-lg">
                Meet Aqoriel, your AI-powered academic companion. Understand difficult concepts,
                transform lectures into organized notes, research smarter and prepare for
                examinations with intelligent assistance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-[#C69A52] bg-[#C69A52] px-6 py-3 text-sm font-semibold text-[#08090B] transition-all duration-150 hover:bg-[#d5aa64] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C69A52]"
                >
                  <TelegramIcon className="h-4 w-4" />
                  <span>Start Learning</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#features"
                  className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-[#292B30] bg-[#111318] px-6 py-3 text-sm font-medium text-[#F5F5F5] transition-colors duration-150 hover:border-[#C69A52]/60 hover:text-[#C69A52] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C69A52]"
                >
                  <span>Explore Features</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-[#A4A6AD]">
                <span>Official Telegram Assistant</span>
                <span aria-hidden="true">·</span>
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[#C69A52] transition-colors hover:text-[#F5F5F5]"
                >
                  {SITE_CONFIG.telegramHandle}
                </a>
                <span aria-hidden="true">·</span>
                <span>{SITE_CONFIG.parentCompany}</span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT INTERFACE SHOWCASE */}
      <ProductShowcase />

      {/* FEATURES SECTION */}
      <section
        id="features"
        className="relative border-b border-[#292B30] bg-[#111318] py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
                Capabilities
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
                Everything You Need for Smarter Learning.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A4A6AD]">
                Eight integrated AI academic workflows built for deep comprehension, organized
                coursework, and examination readiness.
              </p>
            </div>

            <Link
              to="/features"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C69A52] transition-colors hover:text-[#F5F5F5] whitespace-nowrap shrink-0"
            >
              <span>Explore full capabilities</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featuresSection.items.map((feature, index) => {
              const isHighlighted = index === 0 || index === 1;
              return (
                <article
                  key={feature.id}
                  className={`group flex flex-col justify-between rounded-xl border border-[#292B30] bg-[#17191F] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C69A52]/60 ${
                    feature.spanWide ? 'lg:col-span-2' : 'lg:col-span-1'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-lg border transition-colors duration-200 ${
                          isHighlighted
                            ? 'border-[#C69A52]/40 bg-[#C69A52]/10 text-[#C69A52] group-hover:border-[#C69A52] group-hover:bg-[#C69A52] group-hover:text-[#08090B]'
                            : 'border-[#292B30] bg-[#111318] text-[#A4A6AD] group-hover:border-[#C69A52]/50 group-hover:text-[#C69A52]'
                        }`}
                      >
                        <FeatureIcon name={feature.iconName} className="h-5 w-5" />
                      </div>
                      <span className="font-mono text-xs tabular-nums text-[#A4A6AD]/60">
                        {feature.number}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-semibold text-[#F5F5F5]">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#A4A6AD]">
                      {feature.description}
                    </p>

                    {feature.bullets && feature.bullets.length > 0 && (
                      <ul className="mt-4 grid grid-cols-1 gap-1.5 border-t border-[#292B30] pt-4 text-xs text-[#A4A6AD] sm:grid-cols-2">
                        {feature.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-center gap-2">
                            <span className="h-1 w-1 shrink-0 rounded-full bg-[#C69A52]" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        id="how-it-works"
        className="relative border-b border-[#292B30] bg-[#08090B] py-20 sm:py-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-25" aria-hidden="true" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
              Workflow
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
              A Smarter Way to Learn Starts Here.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {HOW_IT_WORKS_STAGES.map((stage) => (
              <div
                key={stage.number}
                className="relative rounded-xl border border-[#292B30] bg-[#17191F] p-7 transition-colors duration-200 hover:border-[#C69A52]/50"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-medium text-[#C69A52]">
                    Stage {stage.number}
                  </span>
                  <span className="h-px w-10 bg-[#292B30]" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-[#F5F5F5]">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A4A6AD]">{stage.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center gap-2 rounded-lg border border-[#C69A52]/80 bg-[#C69A52] px-6 py-3 text-sm font-semibold text-[#08090B] transition-colors duration-150 hover:bg-[#d5aa64] whitespace-nowrap"
            >
              <TelegramIcon className="h-4 w-4" />
              <span>Start with Aqoriel</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* TELEGRAM SECTION */}
      <section className="relative overflow-hidden border-b border-[#292B30] bg-[#111318] py-20 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_75%_50%,rgba(198,154,82,0.12),transparent_70%)]"
        />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
                Primary Access Channel
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
                Your Academic Companion Is Just a Message Away.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#A4A6AD]">
                Bring intelligent academic assistance into your everyday conversations with Aqoriel
                on Telegram.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-[#C69A52]/35 bg-[#17191F] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)] sm:p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#C69A52]/40 bg-[#C69A52]/10 text-[#C69A52]">
                    <TelegramIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#F5F5F5]">
                      {SITE_CONFIG.brandName}
                    </h3>
                    <p className="font-mono text-sm text-[#C69A52]">{SITE_CONFIG.telegramHandle}</p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#A4A6AD]">
                  Official AI academic assistant by {SITE_CONFIG.parentCompany}. Direct access for
                  conceptual tutoring, lecture synthesis, document questions, and revision prep.
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[#292B30] pt-6">
                  <span className="font-mono text-xs text-[#A4A6AD]">
                    https://t.me/aqoriel_bot
                  </span>
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#C69A52] px-5 py-2.5 text-sm font-semibold text-[#08090B] transition-colors duration-150 hover:bg-[#d5aa64] whitespace-nowrap"
                  >
                    <TelegramIcon className="h-4 w-4" />
                    <span>Open Aqoriel on Telegram</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT AND TERRANOVA IDENTITY */}
      <section className="border-b border-[#292B30] bg-[#08090B] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <p className="text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
                Ecosystem &amp; Architecture
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
                Developed by {SITE_CONFIG.parentCompany}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#A4A6AD]">
                Aqoriel is an artificial intelligence education technology product engineered and
                owned by TerraNova Systems Ltd. Built with a focus on intelligent systems, clarity,
                and dependable software architecture, Aqoriel supports learners across complex
                subjects and structured academic workflows.
              </p>
              <div className="mt-7">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#C69A52] transition-colors hover:text-[#F5F5F5]"
                >
                  <span>Read about Aqoriel &amp; TerraNova Systems Ltd</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-6">
              <div className="rounded-xl border border-[#292B30] bg-[#17191F] p-6">
                <p className="font-mono text-xs text-[#8C6638]">Parent Company</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-[#F5F5F5]">
                  {SITE_CONFIG.parentCompany}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A4A6AD]">
                  Technology company developing intelligent software systems, research tools, and
                  long-term AI infrastructure.
                </p>
              </div>

              <div className="rounded-xl border border-[#C69A52]/40 bg-[#17191F] p-6">
                <p className="font-mono text-xs text-[#C69A52]">AI EdTech Product</p>
                <h3 className="mt-3 font-display text-lg font-semibold text-[#F5F5F5]">
                  {SITE_CONFIG.brandName}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A4A6AD]">
                  Dedicated academic AI companion combining tutoring, lecture intelligence, document
                  study, and revision planning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="border-b border-[#292B30] bg-[#111318] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
                Access &amp; Plans
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
                Choose How You Learn with Aqoriel
              </h2>
              <p className="mt-3 text-base text-[#A4A6AD]">
                Configurable Free and Premium tier structures. Final pricing and payment billing are
                not yet active and will be published when finalized.
              </p>
            </div>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#C69A52] transition-colors hover:text-[#F5F5F5] whitespace-nowrap shrink-0"
            >
              <span>Compare planned tiers</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PRICING_CONFIG.plans.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-2xl border p-8 ${
                  plan.emphasized
                    ? 'border-[#C69A52]/70 bg-[#17191F] shadow-[0_0_50px_rgba(198,154,82,0.08)]'
                    : 'border-[#292B30] bg-[#17191F]/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold text-[#F5F5F5]">{plan.name}</h3>
                    <span
                      className={`text-xs font-medium ${
                        plan.emphasized ? 'text-[#C69A52]' : 'text-[#A4A6AD]'
                      }`}
                    >
                      {plan.emphasized ? 'Recommended · Coming Soon' : 'Configurable'}
                    </span>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-[#A4A6AD]">{plan.summary}</p>

                  <div className="mt-6 border-y border-[#292B30] py-5">
                    <p className="font-display text-2xl font-bold text-[#F5F5F5]">
                      {plan.priceDisplay}
                    </p>
                    <p className="mt-1 text-xs text-[#A4A6AD]">{plan.billingStatus}</p>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-[#F5F5F5]/90">
                    {plan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            plan.emphasized ? 'text-[#C69A52]' : 'text-[#A4A6AD]'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-colors duration-150 whitespace-nowrap ${
                      plan.emphasized
                        ? 'bg-[#C69A52] text-[#08090B] hover:bg-[#d5aa64]'
                        : 'border border-[#292B30] bg-[#111318] text-[#F5F5F5] hover:border-[#C69A52]/60 hover:text-[#C69A52]'
                    }`}
                  >
                    <TelegramIcon className="h-4 w-4" />
                    <span>{plan.ctaLabel}</span>
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="border-b border-[#292B30] bg-[#08090B] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10">
            <p className="text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">FAQ</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-[#A4A6AD]">
              Clear answers about Aqoriel, Telegram access, capabilities, and upcoming plans.
            </p>
          </div>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-[#111318] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
                Contact
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
                Connect with Aqoriel &amp; {SITE_CONFIG.parentCompany}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#A4A6AD]">
                Have questions about academic features, technical access, or business enquiries?
                Send a message or connect directly via Telegram.
              </p>

              <div className="mt-8 rounded-xl border border-[#292B30] bg-[#17191F] p-5">
                <p className="text-xs font-medium text-[#C69A52]">Direct Telegram Access</p>
                <p className="mt-1.5 font-mono text-sm text-[#F5F5F5]">
                  {SITE_CONFIG.telegramHandle}
                </p>
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#C69A52] transition-colors hover:text-[#F5F5F5]"
                >
                  <span>Open Telegram Assistant</span>
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#292B30] bg-[#17191F] p-6 sm:p-8">
                <ContactForm showCategory={false} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
