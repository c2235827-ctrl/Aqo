import { useState } from 'react';
import {
  ArrowUpRight,
  BookOpen,
  FileSearch,
  GraduationCap,
  Mic,
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TelegramIcon } from './Icons';

type ShowcaseTabId = 'tutor' | 'lecture' | 'notes' | 'research';

interface ShowcaseTab {
  id: ShowcaseTabId;
  label: string;
  shortLabel: string;
  icon: typeof GraduationCap;
  moduleTitle: string;
  contextLine: string;
  promptHeading: string;
  promptText: string;
  outputHeading: string;
  outputSummary: string;
  structuredBlocks: { title: string; detail: string }[];
}

const SHOWCASE_TABS: ShowcaseTab[] = [
  {
    id: 'tutor',
    label: 'AI Tutor Conversation',
    shortLabel: 'AI Tutor',
    icon: GraduationCap,
    moduleTitle: 'Quantum Mechanics · Wave-Particle Duality',
    contextLine: 'Step-by-step conceptual reasoning inside @aqoriel_bot',
    promptHeading: 'Student Question',
    promptText:
      'Why does increasing photon frequency above the threshold increase photoelectron kinetic energy, whereas increasing intensity only increases current?',
    outputHeading: 'Aqoriel Tutor Response',
    outputSummary:
      'In the photoelectric effect, energy transfer occurs in discrete quanta (E = hν) rather than continuous classical waves.',
    structuredBlocks: [
      {
        title: '01. Energy per Photon (Frequency)',
        detail:
          'Each electron absorbs a single photon. Excess energy above the metal work function Φ becomes kinetic energy: K_max = hν − Φ.',
      },
      {
        title: '02. Photon Flux (Intensity)',
        detail:
          'Higher intensity at fixed frequency delivers more photons per second, ejecting more electrons per unit time without raising individual energy.',
      },
      {
        title: '03. Follow-Up Practice Prompt',
        detail:
          'Calculate the stopping potential when 300 nm light strikes a surface with a 2.3 eV work function.',
      },
    ],
  },
  {
    id: 'lecture',
    label: 'Lecture Transcription',
    shortLabel: 'Lectures',
    icon: Mic,
    moduleTitle: 'Neurobiology 204 · Synaptic Plasticity',
    contextLine: 'Audio recording processed into transcript, definitions & exam prompts',
    promptHeading: 'Submitted Material',
    promptText:
      'Lecture_07_Long_Term_Potentiation.m4a (52 min) — Generate clean notes, definitions, and likely examination questions.',
    outputHeading: 'Lecture Synthesis Output',
    outputSummary:
      'Full transcript indexed into four thematic segments covering NMDA receptor coincidence detection and AMPA receptor trafficking.',
    structuredBlocks: [
      {
        title: 'Key Definition · Coincidence Detection',
        detail:
          'NMDA channels require both presynaptic glutamate binding and postsynaptic depolarization to expel the Mg2+ pore block.',
      },
      {
        title: 'Core Mechanism · CaMKII Cascade',
        detail:
          'Ca2+ influx activates CaMKII, driving phosphorylation and insertion of additional AMPA receptors into the postsynaptic density.',
      },
      {
        title: 'Potential Exam Question',
        detail:
          'Explain why blocking postsynaptic depolarization prevents LTP induction even during high-frequency presynaptic stimulation.',
      },
    ],
  },
  {
    id: 'notes',
    label: 'Structured Academic Notes',
    shortLabel: 'Smart Notes',
    icon: BookOpen,
    moduleTitle: 'Linear Algebra · Spectral Decomposition',
    contextLine: 'Fragmented class notes reorganized into exam-ready hierarchy',
    promptHeading: 'Source Request',
    promptText:
      'Organize my rough seminar notes on symmetric matrices, orthogonal eigenvectors, and quadratic forms.',
    outputHeading: 'Structured Study Notes',
    outputSummary:
      'Normalized into core theorems, geometric intuition, and conditions required for orthogonal diagonalization.',
    structuredBlocks: [
      {
        title: 'Theorem · Real Spectral Property',
        detail:
          'Every real symmetric matrix A = Aᵀ has exclusively real eigenvalues and eigenvectors from distinct eigenspaces are mutually orthogonal.',
      },
      {
        title: 'Canonical Factorization',
        detail:
          'A = QΛQᵀ where Q is orthogonal (Q⁻¹ = Qᵀ) and Λ holds the real eigenvalues along the diagonal.',
      },
      {
        title: 'Revision Checklist',
        detail:
          'Verify positive definiteness via all λ_i > 0 before applying Cholesky factorization.',
      },
    ],
  },
  {
    id: 'research',
    label: 'Document Research Workspace',
    shortLabel: 'Research',
    icon: FileSearch,
    moduleTitle: 'Monetary Policy Paper · Empirical Review',
    contextLine: 'Academic document extraction, critique & structured essay outline',
    promptHeading: 'Document Query',
    promptText:
      'Summarize Section 4 empirical limitations and draft a comparative literature outline for my seminar paper.',
    outputHeading: 'Document Intelligence Summary',
    outputSummary:
      'Extracted methodological constraints, identification assumptions, and three structured thesis themes from the uploaded paper.',
    structuredBlocks: [
      {
        title: 'Identification Constraint',
        detail:
          'High-frequency surprise windows narrow endogeneity concerns but reduce sample coverage during zero-lower-bound intervals.',
      },
      {
        title: 'Outline Section I · Transmission Channels',
        detail:
          'Compare credit-cost pass-through against expectations-channel responses across small and large firms.',
      },
      {
        title: 'Outline Section II · Robustness & Counter-Evidence',
        detail:
          'Contrast panel local projections with structural VAR estimates under supply-shock regimes.',
      },
    ],
  },
];

export function ProductShowcase() {
  const [activeTabId, setActiveTabId] = useState<ShowcaseTabId>('tutor');
  const activeTab = SHOWCASE_TABS.find((t) => t.id === activeTabId) ?? SHOWCASE_TABS[0];

  return (
    <section className="relative border-b border-[#292B30] bg-[#08090B] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-gold-ambient" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-[0.16em] text-[#C69A52] uppercase">
              Interface Preview
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#F5F5F5] sm:text-4xl">
              Built for Deep Academic Focus
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#A4A6AD]">
              Inspect how Aqoriel structures tutoring, lecture synthesis, smart notes, and
              document analysis—delivered through <span className="font-mono text-[#F5F5F5]">{SITE_CONFIG.telegramHandle}</span>.
            </p>
          </div>
          <p className="text-xs text-[#A4A6AD]">
            Marketing product preview · Primary access via Telegram
          </p>
        </div>

        {/* Dark Browser Interface Frame */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#292B30] bg-[#111318] shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
          {/* Browser Chrome Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#292B30] bg-[#08090B]/90 px-4 py-3.5 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#292B30]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#292B30]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#8C6638]" />
            </div>

            <div className="flex items-center gap-2 rounded-md border border-[#292B30] bg-[#111318] px-3 py-1 text-xs text-[#A4A6AD]">
              <TelegramIcon className="h-3.5 w-3.5 text-[#C69A52]" />
              <span className="font-mono">aqoriel · {SITE_CONFIG.telegramHandle}</span>
            </div>

            <a
              href={SITE_CONFIG.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-[#C69A52] transition-colors hover:text-[#F5F5F5] whitespace-nowrap"
            >
              <span>Open Live Assistant</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Interactive Tab Bar */}
          <div
            role="tablist"
            aria-label="Aqoriel workflow previews"
            className="grid grid-cols-2 border-b border-[#292B30] bg-[#111318] sm:grid-cols-4"
          >
            {SHOWCASE_TABS.map((tab) => {
              const Icon = tab.icon;
              const selected = tab.id === activeTab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={selected}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`flex min-h-[48px] items-center justify-center gap-2 border-b-2 px-3 py-3 text-xs font-medium transition-colors duration-150 sm:text-sm whitespace-nowrap ${
                    selected
                      ? 'border-[#C69A52] bg-[#17191F] text-[#F5F5F5]'
                      : 'border-transparent text-[#A4A6AD] hover:bg-[#17191F]/50 hover:text-[#F5F5F5]'
                  }`}
                >
                  <Icon
                    className={`h-4 w-4 shrink-0 ${selected ? 'text-[#C69A52]' : 'text-[#A4A6AD]'}`}
                    aria-hidden="true"
                  />
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="md:hidden">{tab.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Active Workspace Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Sidebar Context Panel */}
            <aside className="border-b border-[#292B30] bg-[#111318] p-6 lg:col-span-4 lg:border-b-0 lg:border-r">
              <p className="text-xs font-medium text-[#C69A52]">Active Module</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-[#F5F5F5]">
                {activeTab.moduleTitle}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-[#A4A6AD]">
                {activeTab.contextLine}
              </p>

              <div className="mt-6 rounded-xl border border-[#292B30] bg-[#17191F] p-4">
                <p className="text-[11px] font-medium text-[#A4A6AD]">{activeTab.promptHeading}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#F5F5F5]">
                  {activeTab.promptText}
                </p>
              </div>
            </aside>

            {/* Main Structured Output Panel */}
            <div className="bg-[#17191F]/40 p-6 sm:p-8 lg:col-span-8">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#292B30] pb-4">
                <h4 className="font-display text-base font-semibold text-[#F5F5F5]">
                  {activeTab.outputHeading}
                </h4>
                <span className="font-mono text-xs text-[#A4A6AD]">Structured Output</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#F5F5F5]/90 sm:text-base">
                {activeTab.outputSummary}
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4">
                {activeTab.structuredBlocks.map((block) => (
                  <div
                    key={block.title}
                    className="rounded-xl border border-[#292B30] bg-[#17191F] p-4 sm:p-5"
                  >
                    <p className="font-display text-xs font-semibold text-[#C69A52]">
                      {block.title}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#A4A6AD]">
                      {block.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
