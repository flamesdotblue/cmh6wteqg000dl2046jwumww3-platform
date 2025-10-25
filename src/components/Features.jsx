import React from 'react';
import { FileText, Workflow, Languages, Bot, ShieldCheck, Users, Search, Layers, MessageSquare, FileSearch, BookOpen } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Back Office Automation',
    desc: 'Upload paper files and create digital twins with AI OCR, structure detection, and quality scoring.',
    bullets: ['Multi-format OCR (PDF, images, handwritten)', 'High-accuracy extraction with review flags', 'Template-based drafting acceleration'],
  },
  {
    icon: Bot,
    title: 'AI Brief Generation',
    desc: 'Generate court-ready briefs with automated sections, citations, and court-compliant formatting.',
    bullets: ['Caption, TOC, Table of Authorities', 'Statement of Issues & Facts', 'Court-specific templates (India)'],
  },
  {
    icon: Workflow,
    title: 'Simple Review Workflows',
    desc: '3-stage approvals with role-based access, deadlines, and notifications for consistent quality control.',
    bullets: ['Partner oversight & approvals', 'Role-based permissions', 'Audit-ready logs and versions'],
  },
  {
    icon: Languages,
    title: 'Bilingual Drafting',
    desc: 'Draft in English and Hindi with legal terminology recognition and clause-level suggestions.',
    bullets: ['Clause suggestions with risk scoring', 'English + Hindi support', 'Firm-standard templates'],
  },
];

export default function Features() {
  return (
    <section id="product" className="relative py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(90,70,255,0.15)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Operate your firm on one AI-native platform</h2>
          <p className="mt-3 text-white/70">Agentic workflows connecting digitization, drafting, research, and approvals.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div id="solutions" className="mt-12 grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/5 p-6 md:grid-cols-4">
          <Mini icon={Search} title="AI Legal Research" text="Citations, causes of action, precedent ranking." />
          <Mini icon={Users} title="Client Portal" text="Secure access to case docs, timeline, updates." />
          <Mini icon={ShieldCheck} title="Security" text="Zero‑trust, E2E encryption, SOC 2, DPDP 2023." />
          <Mini icon={Layers} title="Integrations" text="Google Workspace, O365, SSO, PMS‑ready APIs." />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <PipelineCard
            icon={FileSearch}
            title="Digital Twin Pipeline"
            steps={[
              'Upload & validate',
              'OCR + AI structure detection',
              'Quality check (confidence scores)',
              'Digital twin stored & indexed',
            ]}
            caption="English + Hindi OCR with legal terminology recognition"
          />

          <PipelineCard
            icon={BookOpen}
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

        <div id="security" className="mt-10 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
          <p>
            Architecture: Cloud-native microservices, GPU‑accelerated OCR, Claude‑3.5 legal reasoning, zero‑trust security, DPDP 2023 + SOC 2 Type II compliant.
          </p>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc, bullets }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/15 bg-white/5">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-1 text-sm text-white/70">{desc}</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-white/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Mini({ icon: Icon, title, text }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/20 p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4" />
        <span className="text-sm font-medium">{title}</span>
      </div>
      <p className="mt-1 text-xs text-white/60">{text}</p>
    </div>
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
