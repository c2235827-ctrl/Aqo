import { useState } from 'react';
import { AlertCircle, ArrowUpRight, CheckCircle2, Clock } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface ContactFormState {
  fullName: string;
  email: string;
  category: string;
  subject: string;
  message: string;
  website: string;
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

export function ContactForm({ showCategory = true }: { showCategory?: boolean }) {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<ServerResponse | null>(null);

  const validateClient = (data: ContactFormState): FieldErrors => {
    const nextErrors: FieldErrors = {};
    if (data.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your name (at least 2 characters).';
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
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
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
          <label htmlFor="contact-fullName" className="block text-sm font-medium text-[#F5F5F5]">
            Name
          </label>
          <input
            id="contact-fullName"
            name="fullName"
            type="text"
            required
            value={form.fullName}
            onChange={(e) => {
              setForm({ ...form, fullName: e.target.value });
              if (errors.fullName) setErrors({ ...errors, fullName: undefined });
            }}
            placeholder="Your full name"
            className={`mt-1.5 w-full rounded-lg border bg-[#111318] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#A4A6AD]/60 focus:outline-2 focus:outline-offset-0 focus:outline-[#C69A52] ${
              errors.fullName ? 'border-[#C69A52]' : 'border-[#292B30]'
            }`}
          />
          {errors.fullName && (
            <p className="mt-1.5 text-xs font-medium text-[#C69A52]">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[#F5F5F5]">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: undefined });
            }}
            placeholder="you@example.com"
            className={`mt-1.5 w-full rounded-lg border bg-[#111318] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#A4A6AD]/60 focus:outline-2 focus:outline-offset-0 focus:outline-[#C69A52] ${
              errors.email ? 'border-[#C69A52]' : 'border-[#292B30]'
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs font-medium text-[#C69A52]">{errors.email}</p>
          )}
        </div>
      </div>

      {showCategory && (
        <div>
          <label htmlFor="contact-category" className="block text-sm font-medium text-[#F5F5F5]">
            Enquiry type
          </label>
          <select
            id="contact-category"
            name="category"
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="mt-1.5 w-full rounded-lg border border-[#292B30] bg-[#111318] px-3.5 py-2.5 text-sm text-[#F5F5F5] focus:outline-2 focus:outline-offset-0 focus:outline-[#C69A52]"
          >
            {SITE_CONFIG.contact.enquiries.map((item) => (
              <option key={item.title} value={item.title}>
                {item.title}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-[#F5F5F5]">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          value={form.subject}
          onChange={(e) => {
            setForm({ ...form, subject: e.target.value });
            if (errors.subject) setErrors({ ...errors, subject: undefined });
          }}
          placeholder="Brief summary of your enquiry"
          className={`mt-1.5 w-full rounded-lg border bg-[#111318] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#A4A6AD]/60 focus:outline-2 focus:outline-offset-0 focus:outline-[#C69A52] ${
            errors.subject ? 'border-[#C69A52]' : 'border-[#292B30]'
          }`}
        />
        {errors.subject && (
          <p className="mt-1.5 text-xs font-medium text-[#C69A52]">{errors.subject}</p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[#F5F5F5]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={(e) => {
            setForm({ ...form, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: undefined });
          }}
          placeholder="Share the details of your enquiry..."
          className={`mt-1.5 w-full rounded-lg border bg-[#111318] px-3.5 py-2.5 text-sm text-[#F5F5F5] placeholder:text-[#A4A6AD]/60 focus:outline-2 focus:outline-offset-0 focus:outline-[#C69A52] ${
            errors.message ? 'border-[#C69A52]' : 'border-[#292B30]'
          }`}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs font-medium text-[#C69A52]">{errors.message}</p>
        )}
      </div>

      {feedback && (
        <div
          role="status"
          className="rounded-xl border border-[#292B30] bg-[#111318] p-4 text-sm text-[#F5F5F5]"
        >
          <div className="flex items-start gap-3">
            {feedback.status === 'delivered' ? (
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C69A52]" />
            ) : feedback.status === 'pending_configuration' ? (
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#C69A52]" />
            ) : (
              <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#C69A52]" />
            )}
            <div>
              <p className="font-display font-semibold text-[#F5F5F5]">
                {feedback.status === 'pending_configuration'
                  ? 'Enquiry Validated — Email Setup Pending'
                  : feedback.status === 'delivered'
                    ? 'Enquiry Received'
                    : 'Unable to Submit'}
              </p>
              <p className="mt-1 leading-relaxed text-[#A4A6AD]">{feedback.message}</p>
              {feedback.status === 'pending_configuration' && (
                <a
                  href={SITE_CONFIG.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#C69A52] underline underline-offset-4 hover:text-[#F5F5F5]"
                >
                  <span>Access {SITE_CONFIG.telegramHandle} on Telegram</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
        <span className="text-xs text-[#A4A6AD]">
          Official mailbox configuration pending · Server-side validation active.
        </span>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#C69A52] px-6 py-2.5 text-sm font-semibold text-[#08090B] transition-colors duration-150 hover:bg-[#d5aa64] disabled:cursor-not-allowed disabled:opacity-60 whitespace-nowrap shrink-0"
        >
          {submitting ? 'Validating...' : 'Send Message'}
        </button>
      </div>
    </form>
  );
}
