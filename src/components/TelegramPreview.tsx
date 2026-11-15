import { BookOpen, FileAudio, Layers, ListChecks } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { TelegramIcon } from './Icons';

export function TelegramPreview() {
  return (
    <div
      aria-label="Static product preview of Aqoriel on Telegram"
      className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:p-6"
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2.5 text-sm font-medium text-neutral-950">
          <TelegramIcon className="h-4 w-4 text-neutral-950" />
          <span className="font-display font-semibold">{SITE_CONFIG.brandName}</span>
          <span aria-hidden="true" className="text-neutral-400">
            ·
          </span>
          <span className="font-mono text-xs text-neutral-600">{SITE_CONFIG.telegramHandle}</span>
        </div>
        <span className="text-xs text-neutral-500">Product interface preview</span>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        {/* Main Panel: Telegram Conversation Preview */}
        <div className="flex flex-col justify-between rounded-xl border border-neutral-200 bg-white p-5 lg:col-span-7">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span>Telegram Conversation</span>
              <span>Lecture &amp; Concept Synthesis</span>
            </div>

            {/* Student Prompt */}
            <div className="ml-auto max-w-[92%] rounded-xl bg-neutral-950 px-4 py-3 text-sm leading-relaxed text-white">
              <div className="mb-1.5 flex items-center gap-2 text-xs text-neutral-300">
                <FileAudio className="h-3.5 w-3.5" aria-hidden="true" />
                <span>Cellular_Respiration_Lecture_04.m4a</span>
              </div>
              <p>
                Summarize the oxidative phosphorylation section, highlight key definitions, and
                give me two likely exam questions.
              </p>
            </div>

            {/* Aqoriel Assistant Response */}
            <div className="mr-auto max-w-[96%] rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-sm text-neutral-800">
              <p className="font-display text-xs font-semibold text-neutral-950">
                Aqoriel · Lecture Summary
              </p>
              <p className="mt-1.5 leading-relaxed text-neutral-700">
                Oxidative phosphorylation couples electron transfer along the inner mitochondrial
                membrane to ATP synthesis via an electrochemical proton gradient.
              </p>
              <div className="mt-3 space-y-1.5 border-t border-neutral-200 pt-2.5 text-xs text-neutral-700">
                <p>
                  <strong className="font-semibold text-neutral-950">Chemiosmosis:</strong> Proton
                  motive force drives ATP synthase rotor catalysis.
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">Exam Prompt 1:</strong> Explain
                  how an uncoupler alters oxygen consumption and ATP yield.
                </p>
                <p>
                  <strong className="font-semibold text-neutral-950">Exam Prompt 2:</strong> Trace
                  NADH vs. FADH2 entry points across Complexes I–IV.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-neutral-100 pt-3 text-xs text-neutral-500">
            <span>Direct access inside Telegram</span>
            <span className="font-mono text-neutral-700">t.me/aqoriel_bot</span>
          </div>
        </div>

        {/* Side Panels: Organized Academic Notes + Recall & Study Plan */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          {/* Panel 2: Structured Notes Preview */}
          <div className="rounded-xl border border-neutral-200 bg-white p-5">
            <div className="flex items-center justify-between text-xs text-neutral-500">
              <span className="inline-flex items-center gap-1.5 font-medium text-neutral-950">
                <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                Smart Notes
              </span>
              <span>Biochemistry 201</span>
            </div>
            <h3 className="mt-2.5 font-display text-sm font-semibold text-neutral-950">
              Electron Transport Chain Structure
            </h3>
            <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-neutral-600">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-950" />
                <span>Complexes I, III, IV pump protons into the intermembrane space.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-950" />
                <span>Oxygen serves as the terminal electron acceptor forming H2O.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-950" />
                <span>ATP synthase converts gradient potential into phosphorylation.</span>
              </li>
            </ul>
          </div>

          {/* Panel 3: Flashcards & Exam Prep Preview */}
          <div className="rounded-xl border border-neutral-200 bg-neutral-950 p-5 text-white">
            <div className="flex items-center justify-between text-xs text-neutral-400">
              <span className="inline-flex items-center gap-1.5 font-medium text-white">
                <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                Flashcards &amp; Revision
              </span>
              <span>Active Recall</span>
            </div>
            <p className="mt-3 text-xs text-neutral-400">Practice Prompt</p>
            <p className="mt-1 font-display text-sm font-medium leading-snug text-white">
              Why does FADH2 yield fewer ATP molecules than NADH during oxidative phosphorylation?
            </p>
            <div className="mt-3 flex items-center gap-2 border-t border-neutral-800 pt-3 text-xs text-neutral-300">
              <ListChecks className="h-3.5 w-3.5 shrink-0 text-neutral-400" aria-hidden="true" />
              <span>Linked to Study Plan · Midterm Review Block</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
