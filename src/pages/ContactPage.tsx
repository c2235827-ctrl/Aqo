import { ArrowUpRight } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { TelegramIcon } from '../components/Icons';
import { ContactForm } from '../components/ContactForm';
import { SITE_CONFIG } from '../config/site';

export function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact | Aqoriel & TerraNova Systems Ltd"
        description="Contact Aqoriel for general enquiries, technical support, product feedback, or business discussions with TerraNova Systems Ltd."
        path="/contact"
      />

      <section className="relative border-b border-[#292B30] bg-hero-glow py-16 sm:py-20">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-30" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-6">
          <p className="font-mono text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
            Contact · {SITE_CONFIG.parentCompany}
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-[#F5F5F5] sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#A4A6AD] sm:text-lg">
            Reach out regarding Aqoriel product questions, technical assistance, or business
            correspondence with TerraNova Systems Ltd.
          </p>
        </div>
      </section>

      <section className="bg-[#08090B] py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          {/* Left Column: Enquiry Channels + Telegram Support */}
          <div className="space-y-6 lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {SITE_CONFIG.contact.enquiries.map((channel) => (
                <div
                  key={channel.title}
                  className="rounded-xl border border-[#292B30] bg-[#17191F] p-5"
                >
                  <h2 className="font-display text-base font-semibold text-[#F5F5F5]">
                    {channel.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#A4A6AD]">
                    {channel.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-[#C69A52]/40 bg-[#17191F] p-6">
              <h2 className="font-display text-lg font-semibold text-[#F5F5F5]">
                Telegram Support Channel
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[#A4A6AD]">
                For immediate access to Aqoriel’s academic assistant, open the official bot on
                Telegram.
              </p>
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#C69A52] px-4 py-2.5 text-sm font-semibold text-[#08090B] transition-colors hover:bg-[#d5aa64] whitespace-nowrap"
              >
                <TelegramIcon className="h-4 w-4" />
                <span>Open {SITE_CONFIG.telegramHandle}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Validated Dark Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#292B30] bg-[#17191F] p-7 sm:p-9">
              <div className="mb-6 border-b border-[#292B30] pb-5">
                <h2 className="font-display text-2xl font-bold text-[#F5F5F5]">
                  Send an Enquiry
                </h2>
                <p className="mt-2 text-sm text-[#A4A6AD]">
                  Official mailbox configuration is currently pending. Submitting this form
                  validates your enquiry securely without falsely claiming email delivery.
                </p>
              </div>

              <ContactForm showCategory={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
