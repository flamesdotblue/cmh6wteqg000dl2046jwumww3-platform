import React from 'react';
import { FileSearch, BookOpenCheck, Bot, MessageSquare } from 'lucide-react';

export default function Pipelines() {
  return (
    <section className="relative py-16 md:py-24">      
      <div className="relative mx-auto max-w-7xl px-6">        
        <div className="mx-auto max-w-2xl text-center">          
          <h2 className="text-3xl font-semibold md:text-4xl">Agentic workflows that work like your team</h2>
          <p className="mt-3 text-white/70">From upload to court-ready brief — automated, auditable, and customizable.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">          
          <PipelineCard
            icon={FileSearch}
            title="Digital Twin Pipeline"
            steps={[
              'Upload & validate',
              'OCR + AI structure detection',
              'Quality check with confidence scores',
              'Digital twin stored & indexed',
            ]}
            caption="English + Hindi OCR with legal terminology recognition"
          />

          <PipelineCard
            icon={BookOpenCheck}
            title="Brief Generation"
            steps={[
              'Case intake & facts',
              'AI section drafting (Caption, TOC, Authorities)',
              'Court formatting & firm style',
              'Review & export (DOCX/PDF)',
            ]}
            caption="Compliant with Indian court standards"
          />

          <PipelineCard
            icon={MessageSquare}
            title="Contextual Case Chatbot"
            steps={[
              'Select case context',
              'Ask legal questions',
              'Document-aware answers',
              'Strategy and risk guidance',
            ]}
            caption="References specific clauses, briefs, and evidence"
          />
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">          
          <p>
            Architecture: Cloud-native microservices, GPU-accelerated OCR, Claude-3.5 legal reasoning, zero-trust security, DPDP 2023 + SOC 2 Type II compliant.
          </p>
        </div>
      </div>
    </section>
  );
}

function PipelineCard({ icon: Icon, title, steps, caption }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/30 p-6">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 bg-white/5">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ol className="mt-4 space-y-2 text-sm text-white/75">
        {steps.map((s, i) => (
          <li key={s} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/20 text-[11px] text-white/70">{i + 1}</span>
            <span>{s}</span>
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs text-white/60">{caption}</p>
    </div>
  );
}
