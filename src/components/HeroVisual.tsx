import { useState } from 'react';
import { BookOpen, FileText, Sparkles } from 'lucide-react';
import cubeRender from '../assets/images/aqoriel_metallic_cube_1794751905256.jpg';
import { SITE_CONFIG } from '../config/site';
import { TelegramIcon } from './Icons';

export function HeroVisual() {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      aria-label="Aqoriel 3D visual composition and academic interface preview"
      className="relative"
    >
      {/* Subtle ambient warm gold / bronze backdrop illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-3xl bg-[radial-gradient(circle_at_55%_40%,rgba(198,154,82,0.16),rgba(140,102,56,0.05)_48%,transparent_72%)] blur-2xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-[#292B30] bg-[#111318]/90 p-4 sm:p-6">
        <div className="pointer-events-none absolute inset-0 bg-dot-grid opacity-45" aria-hidden="true" />

        {/* 3D Metallic Geometric Object + Header Context */}
        <div className="relative grid grid-cols-1 items-center gap-5 sm:grid-cols-12">
          <div className="relative flex items-center justify-center sm:col-span-6">
            <div className="animate-float-slow relative aspect-square w-full max-w-[270px] overflow-hidden rounded-xl border border-[#292B30]/80 bg-[#08090B]">
              {!imageError ? (
                <img
                  src={cubeRender}
                  alt="Precision-machined dark obsidian and metallic gold geometric cube representing Aqoriel intelligence"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(circle_at_30%_30%,rgba(198,154,82,0.22),#08090B_72%)] p-6 text-center">
                  <Sparkles className="h-8 w-8 text-[#C69A52]" aria-hidden="true" />
                  <p className="mt-3 font-display text-sm font-semibold text-[#F5F5F5]">
                    {SITE_CONFIG.brandName}
                  </p>
                </div>
              )}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08090B]/60 via-transparent to-transparent"
              />
            </div>
          </div>

          {/* Floating Companion Interface Snippets */}
          <div className="relative space-y-3 sm:col-span-6">
            {/* AI Conversation Card */}
            <div className="rounded-xl border border-[#292B30] bg-[#17191F]/95 p-3.5 shadow-lg">
              <div className="flex items-center justify-between text-[11px] text-[#A4A6AD]">
                <span className="inline-flex items-center gap-1.5 font-medium text-[#F5F5F5]">
                  <TelegramIcon className="h-3.5 w-3.5 text-[#C69A52]" />
                  <span>AI Conversation</span>
                </span>
                <span className="font-mono text-[#C69A52]">{SITE_CONFIG.telegramHandle}</span>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-[#F5F5F5]">
                &ldquo;Derive the Lagrange multiplier condition for constrained utility optimization.&rdquo;
              </p>
              <p className="mt-1.5 border-t border-[#292B30] pt-2 text-[11px] leading-relaxed text-[#A4A6AD]">
                Step 1: Set ∇f(x, y) = λ∇g(x, y) where gradients align tangentially at the optimum.
              </p>
            </div>

            {/* Lecture Summary & Smart Notes Card */}
            <div className="rounded-xl border border-[#292B30] bg-[#17191F]/95 p-3.5 shadow-lg">
              <div className="flex items-center justify-between text-[11px] text-[#A4A6AD]">
                <span className="inline-flex items-center gap-1.5 font-medium text-[#F5F5F5]">
                  <BookOpen className="h-3.5 w-3.5 text-[#C69A52]" aria-hidden="true" />
                  <span>Lecture Summary &amp; Notes</span>
                </span>
                <span>Module 04</span>
              </div>
              <ul className="mt-2 space-y-1 text-[11px] text-[#A4A6AD]">
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#C69A52]" />
                  <span className="text-[#F5F5F5]/90">Transcript synthesized into 6 structured headings</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-[#C69A52]" />
                  <span>4 key definitions &amp; 3 likely exam prompts extracted</span>
                </li>
              </ul>
            </div>

            {/* Document Intelligence Card */}
            <div className="rounded-xl border border-[#292B30] bg-[#17191F]/95 p-3.5 shadow-lg">
              <div className="flex items-center justify-between text-[11px] text-[#A4A6AD]">
                <span className="inline-flex items-center gap-1.5 font-medium text-[#F5F5F5]">
                  <FileText className="h-3.5 w-3.5 text-[#C69A52]" aria-hidden="true" />
                  <span>Document Analysis</span>
                </span>
                <span className="text-[#C69A52]">Ready</span>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#A4A6AD]">
                Section 3.2 methodology summarized with counter-arguments and citation structure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
