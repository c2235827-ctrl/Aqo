import { useState } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { PageMeta } from '../components/PageMeta';
import { TelegramIcon } from '../components/Icons';
import { SITE_CONFIG } from '../config/site';

interface ContactFormState {
  fullName: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  website: string; // Honeypot field
}

interface FieldErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ServerResponse {
  ok: boolean;
  delivered: boolean;
  status: 'pending_configuration' | 'delivered' | 'validation_error' | 'rate_limited';
  message: string;
  errors?: FieldErrors;
}

const INITIAL_FORM: ContactFormState = {
  fullName: '',
  email: '',
  category: 'General Enquiries',
  subject: '',
  message: '',
  website: '',
};

export function ContactPage() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<ServerResponse | null>(null);

  const validateClient = (data: ContactFormState): FieldErrors => {
    const nextErrors: FieldErrors = {};
    if (data.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(data.email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (data.subject.trim().length < 3) {
      nextErrors.subject = 'Please enter a brief subject (at least 3 characters).';
    }
    if (data.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);

    const validationErrors = validateClient(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as ServerResponse;

      if (!response.ok && payload.errors) {
        setErrors(payload.errors);
      }

      setFeedback(payload);

      if (response.ok) {
        setForm((prev) => ({
          ...INITIAL_FORM,
          category: prev.category,
        }));
      }
    } catch {
      setFeedback({
        ok: false,
        delivered: false,
        status: 'validation_error',
        message:
          'Unable to reach the contact validation endpoint right now. Please try again or reach Aqoriel on Telegram.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <PageMeta
        title="Contact | Aqoriel & TerraNova Systems Ltd"
        description="Contact Aqoriel for general enquiries, technical support, product feedback, or business discussions with TerraNova Systems Ltd."
        path="/contact"
      />

      <section className="border-b border-neutral-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-medium text-neutral-500">
            <span>Contact</span>
            <span aria-hidden="true" className="mx-2">
              ·
            </span>
            <span>{SITE_CONFIG.parentCompany}</span>
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-neutral-950 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Reach out regarding Aqoriel product questions, technical assistance, or business
            correspondence with TerraNova Systems Ltd.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 lg:grid-cols-12">
          {/* Left Column: Enquiry Channels + Telegram Support */}
          <div className="space-y-8 lg:col-span-5">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {SITE_CONFIG.contact.enquiries.map((channel) => (
                <div
                  key={channel.title}
                  className="rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <h2 className="font-display text-base font-semibold text-neutral-950">
                    {channel.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {channel.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-6 text-white">
              <h2 className="font-display text-lg font-semibold">Telegram Support Channel</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                For immediate access to Aqoriel’s academic assistant, open the official bot on
                Telegram.
              </p>
              <a
                href={SITE_CONFIG.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200 whitespace-nowrap"
              >
                <TelegramIcon className="h-4 w-4" />
                <span>Open {SITE_CONFIG.telegramHandle}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-neutral-200 bg-white p-7 sm:p-9">
              <div className="border-b border-neutral-200 pb-5">
                <h2 className="font-display text-2xl font-bold text-neutral-950">
                  Send an Enquiry
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  Official mailbox configuration is currently pending. Submitting this form
                  validates your enquiry securely without falsely claiming email delivery.
                </p>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                {/* Honeypot anti-spam field */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-neutral-950"
                    >
                      Full name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => {
                        setForm({ ...form, fullName: e.target.value });
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                      }}
                      placeholder="Your full name"
                      className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-950 ${
                        errors.fullName ? 'border-neutral-950 bg-neutral-50' : 'border-neutral-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1.5 text-xs font-medium text-neutral-950">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-950">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => {
                        setForm({ ...form, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: undefined });
                      }}
                      placeholder="you@example.com"
                      className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-950 ${
                        errors.email ? 'border-neutral-950 bg-neutral-50' : 'border-neutral-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-medium text-neutral-950">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-neutral-950">
                    Enquiry type
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                    className="mt-1.5 w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-sm text-neutral-950 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-950"
                  >
                    {SITE_CONFIG.contact.enquiries.map((item) => (
                      <option key={item.title} value={item.title}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-neutral-950">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => {
                      setForm({ ...form, subject: e.target.value });
                      if (errors.subject) setErrors({ ...errors, subject: undefined });
                    }}
                    placeholder="Brief summary of your enquiry"
                    className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-950 ${
                      errors.subject ? 'border-neutral-950 bg-neutral-50' : 'border-neutral-300'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1.5 text-xs font-medium text-neutral-950">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-950">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Share the details of your enquiry..."
                    className={`mt-1.5 w-full rounded-lg border px-3.5 py-2.5 text-sm text-neutral-950 placeholder:text-neutral-400 focus:outline-2 focus:outline-offset-0 focus:outline-neutral-950 ${
                      errors.message ? 'border-neutral-950 bg-neutral-50' : 'border-neutral-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-neutral-950">{errors.message}</p>
                  )}
                </div>

                {feedback && (
                  <div
                    role="status"
                    className="rounded-xl border border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-900"
                  >
                    <div className="flex items-start gap-3">
                      {feedback.status === 'delivered' ? (
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-neutral-950" />
                      ) : feedback.status === 'pending_configuration' ? (
                        <Clock className="mt-0.5 h-5 w-5 shrink-0 text-neutral-950" />
                      ) : (
                        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-neutral-950" />
                      )}
                      <div>
                        <p className="font-display font-semibold text-neutral-950">
                          {feedback.status === 'pending_configuration'
                            ? 'Enquiry Validated — Email Setup Pending'
                            : feedback.status === 'delivered'
                              ? 'Enquiry Received'
                              : 'Unable to Submit'}
                        </p>
                        <p className="mt-1 leading-relaxed text-neutral-700">{feedback.message}</p>
                        {feedback.status === 'pending_configuration' && (
                          <a
                            href={SITE_CONFIG.telegramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-950 underline underline-offset-4"
                          >
                            <span>Access {SITE_CONFIG.telegramHandle} on Telegram</span>
                            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 pt-2">
                  <span className="text-xs text-neutral-500">
                    Protected by server-side validation and rate limiting.
                  </span>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-neutral-950 px-6 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap shrink-0"
                  >
                    {submitting ? 'Validating...' : 'Submit Enquiry'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
