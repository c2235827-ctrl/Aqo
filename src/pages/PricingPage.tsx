import { ArrowUpRight, Check, Info } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { TelegramIcon } from '../components/Icons';
import { FaqAccordion } from '../components/FaqAccordion';
import { SITE_CONFIG } from '../config/site';
import { PRICING_CONFIG } from '../config/pricing';

export function PricingPage() {
  return (
    <>
      <PageMeta
        title="Pricing | Aqoriel Plans & Access"
        description="Review Aqoriel's configurable Free and Premium plan structure. Final pricing and payment integrations are coming soon."
        path="/pricing"
      />

      <section className="relative border-b border-[#292B30] bg-hero-glow py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
            Plans &amp; Access · Configurable Structure
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl">
            Choose How You Learn with Aqoriel
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#A4A6AD] sm:text-lg">
            Aqoriel is organized around two clear access tiers—a foundational Free Plan and an
            expanded Premium Plan. Final subscription pricing and usage quotas are configurable and
            will be published once billing is enabled.
          </p>

          <div
            role="note"
            className="mt-8 flex items-start gap-3 rounded-xl border border-[#C69A52]/35 bg-[#17191F]/90 p-4 text-sm text-[#A4A6AD]"
          >
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#C69A52]" aria-hidden="true" />
            <p>
              Subscription payments are not yet operational on this website. All plan details below
              are configurable placeholders and do not constitute an active paid checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="border-b border-[#292B30] bg-[#08090B] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PRICING_CONFIG.plans.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-2xl border p-8 ${
                  plan.emphasized
                    ? 'border-[#C69A52]/75 bg-[#17191F] shadow-[0_0_50px_rgba(198,154,82,0.08)]'
                    : 'border-[#292B30] bg-[#111318]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-display text-2xl font-bold text-[#F5F5F5]">{plan.name}</h2>
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
                        : 'border border-[#292B30] bg-[#17191F] text-[#F5F5F5] hover:border-[#C69A52]/60 hover:text-[#C69A52]'
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

      {/* Feature Comparison Table */}
      <section className="border-b border-[#292B30] bg-[#111318] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl">
            Planned Tier Comparison
          </h2>
          <p className="mt-3 text-sm text-[#A4A6AD] sm:text-base">
            Overview of how capabilities are structured between the Free and Premium configurations.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[#292B30]">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[#292B30] bg-[#17191F]">
                  <th className="px-6 py-4 font-display font-semibold text-[#F5F5F5]">
                    Capability Area
                  </th>
                  <th className="px-6 py-4 font-display font-semibold text-[#F5F5F5]">
                    Free Plan
                  </th>
                  <th className="px-6 py-4 font-display font-semibold text-[#C69A52]">
                    Premium Plan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#292B30]">
                {PRICING_CONFIG.comparisonRows.map((row) => (
                  <tr key={row.capability} className="bg-[#08090B]">
                    <td className="px-6 py-4 font-medium text-[#F5F5F5]">{row.capability}</td>
                    <td className="px-6 py-4 text-[#A4A6AD]">{row.freeTier}</td>
                    <td className="px-6 py-4 text-[#F5F5F5]/90">{row.premiumTier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="border-b border-[#292B30] bg-[#08090B] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-[#F5F5F5] sm:text-3xl">
            Pricing Questions
          </h2>
          <FaqAccordion items={[...PRICING_CONFIG.pricingFaqs]} />
        </div>
      </section>

      {/* Upgrade / Start CTA */}
      <section className="bg-[#111318] py-16 text-[#F5F5F5] sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-[#F5F5F5] sm:text-3xl">
              Start Exploring Aqoriel on Telegram
            </h2>
            <p className="mt-2 text-sm text-[#A4A6AD]">
              Subscription tiers will be announced directly when finalized. Access{' '}
              <span className="font-mono text-[#C69A52]">{SITE_CONFIG.telegramHandle}</span> today.
            </p>
          </div>
          <a
            href={SITE_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#C69A52] px-6 py-3 text-sm font-semibold text-[#08090B] transition-colors hover:bg-[#d5aa64] whitespace-nowrap shrink-0"
          >
            <TelegramIcon className="h-4 w-4" />
            <span>Open Telegram</span>
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
