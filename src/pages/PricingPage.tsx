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

      <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium text-neutral-500">
            <span>Plans &amp; Access</span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span>Configurable Pre-Release Structure</span>
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Choose How You Learn with Aqoriel
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Aqoriel is organized around two clear access tiers—a foundational Free Plan and an
            expanded Premium Plan. Final subscription pricing and usage quotas are currently
            configurable and will be published once billing is enabled.
          </p>

          <div
            role="note"
            className="mt-8 flex items-start gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700"
          >
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-neutral-950" aria-hidden="true" />
            <p>
              Subscription payments are not yet operational on this website. All plan details below
              are configurable placeholders and do not constitute an active paid checkout.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PRICING_CONFIG.plans.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-2xl border p-8 ${
                  plan.emphasized
                    ? 'border-neutral-950 bg-neutral-950 text-white'
                    : 'border-neutral-200 bg-white text-neutral-950'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="font-display text-2xl font-bold">{plan.name}</h2>
                    <span
                      className={`text-xs font-medium ${
                        plan.emphasized ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      Coming soon
                    </span>
                  </div>

                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      plan.emphasized ? 'text-neutral-300' : 'text-neutral-600'
                    }`}
                  >
                    {plan.summary}
                  </p>

                  <div
                    className={`mt-6 border-y py-5 ${
                      plan.emphasized ? 'border-neutral-800' : 'border-neutral-200'
                    }`}
                  >
                    <p className="font-display text-2xl font-bold">{plan.priceDisplay}</p>
                    <p
                      className={`mt-1 text-xs ${
                        plan.emphasized ? 'text-neutral-400' : 'text-neutral-500'
                      }`}
                    >
                      {plan.billingStatus}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-3 text-sm">
                    {plan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${
                            plan.emphasized ? 'text-white' : 'text-neutral-950'
                          }`}
                          aria-hidden="true"
                        />
                        <span className={plan.emphasized ? 'text-neutral-200' : 'text-neutral-700'}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <a
                    href={SITE_CONFIG.telegramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-150 whitespace-nowrap ${
                      plan.emphasized
                        ? 'bg-white text-neutral-950 hover:bg-neutral-200'
                        : 'bg-neutral-950 text-white hover:bg-neutral-800'
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
      <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="font-display text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
            Planned Tier Comparison
          </h2>
          <p className="mt-3 text-sm text-neutral-600 sm:text-base">
            Overview of how capabilities are structured between the Free and Premium configurations.
          </p>

          <div className="mt-8 overflow-x-auto rounded-xl border border-neutral-200">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200 bg-neutral-50">
                  <th className="px-6 py-4 font-display font-semibold text-neutral-950">
                    Capability Area
                  </th>
                  <th className="px-6 py-4 font-display font-semibold text-neutral-950">
                    Free Plan
                  </th>
                  <th className="px-6 py-4 font-display font-semibold text-neutral-950">
                    Premium Plan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {PRICING_CONFIG.comparisonRows.map((row) => (
                  <tr key={row.capability} className="bg-white">
                    <td className="px-6 py-4 font-medium text-neutral-950">{row.capability}</td>
                    <td className="px-6 py-4 text-neutral-600">{row.freeTier}</td>
                    <td className="px-6 py-4 text-neutral-900">{row.premiumTier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-8 font-display text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
            Pricing Questions
          </h2>
          <FaqAccordion items={[...PRICING_CONFIG.pricingFaqs]} />
        </div>
      </section>

      {/* Upgrade / Start CTA */}
      <section className="bg-neutral-950 py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              Start Exploring Aqoriel on Telegram
            </h2>
            <p className="mt-2 text-sm text-neutral-300">
              Subscription tiers will be announced directly when finalized. Access{' '}
              <span className="font-mono">{SITE_CONFIG.telegramHandle}</span> today.
            </p>
          </div>
          <a
            href={SITE_CONFIG.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200 whitespace-nowrap shrink-0"
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
