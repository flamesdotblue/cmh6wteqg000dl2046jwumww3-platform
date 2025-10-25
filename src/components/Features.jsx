import React from 'react';
import { FileText, Workflow, Languages, Bot, ShieldCheck, Users, Search, Layers } from 'lucide-react';

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
    <section id="features" className="relative py-16 md:py-24">      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(90,70,255,0.15)_0%,rgba(0,0,0,0)_50%)]" />
      <div className="relative mx-auto max-w-7xl px-6">        
        <div className="mx-auto max-w-2xl text-center">          
          <h2 className="text-3xl font-semibold md:text-4xl">Operate your firm on one AI-native platform</h2>
          <p className="mt-3 text-white/70">Agentic workflows that connect drafting, research, and approvals end‑to‑end.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-2">          
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 rounded-xl border border-white/10 bg-white/5 p-6 md:grid-cols-4">          
          <Mini icon={Search} title="AI Legal Research" text="Case citations, causes of action, and precedent ranking." />
          <Mini icon={Users} title="Client Portal" text="Secure access to case docs, timeline, and updates." />
          <Mini icon={ShieldCheck} title="Security" text="Zero-trust, E2E encryption, SOC 2, DPDP 2023." />
          <Mini icon={Layers} title="Integrations" text="Google Workspace, O365, SSO, PMS-ready APIs." />
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
