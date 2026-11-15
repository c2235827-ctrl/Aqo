import { PageMeta } from '../components/PageMeta';
import { SITE_CONFIG } from '../config/site';
import { LEGAL_DOCUMENTS } from '../data/aqorielContent';

export function PrivacyPage() {
  const doc = LEGAL_DOCUMENTS.privacyPolicy;

  return (
    <>
      <PageMeta
        title="Privacy Policy | Aqoriel"
        description="Privacy Policy framework for the Aqoriel website and services by TerraNova Systems Ltd."
        path="/privacy"
      />
      <LegalDocumentLayout
        title={doc.title}
        statusNote={doc.statusNote}
        lastReviewed={doc.lastReviewed}
        sections={doc.sections}
      />
    </>
  );
}

export function TermsPage() {
  const doc = LEGAL_DOCUMENTS.termsOfService;

  return (
    <>
      <PageMeta
        title="Terms of Service | Aqoriel"
        description="Terms of Service framework for the Aqoriel website and academic companion by TerraNova Systems Ltd."
        path="/terms"
      />
      <LegalDocumentLayout
        title={doc.title}
        statusNote={doc.statusNote}
        lastReviewed={doc.lastReviewed}
        sections={doc.sections}
      />
    </>
  );
}

function LegalDocumentLayout({
  title,
  statusNote,
  lastReviewed,
  sections,
}: {
  title: string;
  statusNote: string;
  lastReviewed: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-xs font-medium text-neutral-500">
          <span>{SITE_CONFIG.brandName}</span>
          <span aria-hidden="true" className="mx-2">
            ·
          </span>
          <span>{SITE_CONFIG.parentCompany}</span>
          <span aria-hidden="true" className="mx-2">
            ·
          </span>
          <span>{lastReviewed}</span>
        </p>

        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-neutral-950">
          {title}
        </h1>

        <div
          role="note"
          className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-relaxed text-neutral-700"
        >
          {statusNote}
        </div>

        <div className="mt-10 space-y-10 border-t border-neutral-200 pt-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-xl font-semibold text-neutral-950">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-3">
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-neutral-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
