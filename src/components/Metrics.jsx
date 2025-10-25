import React from 'react';
import { BarChart3, Timer, CheckCircle2, Sparkles } from 'lucide-react';

export default function Metrics() {
  return (
    <section className="relative py-16 md:py-24">      
      <div className="mx-auto max-w-7xl px-6">        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-5">          
          <div className="md:col-span-2 rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6">            
            <h3 className="text-2xl font-semibold">Measurable outcomes</h3>
            <p className="mt-2 text-sm text-white/70">Track productivity, adoption, and reliability with real-time analytics.</p>
            <ul className="mt-4 space-y-3 text-sm text-white/80">              
              <li className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> 30% overall productivity gains</li>
              <li className="flex items-center gap-2"><Timer className="h-4 w-4" /> 40% drafting time reduction</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> 35% faster approvals</li>
              <li className="flex items-center gap-2"><BarChart3 className="h-4 w-4" /> 70% AI acceptance rate</li>
            </ul>
            <a id="get-started" href="#" className="mt-6 inline-flex items-center justify-center rounded-md bg-white px-5 py-2.5 text-sm font-semibold text-neutral-900 hover:bg-white/90">Start free pilot</a>
          </div>

          <div className="md:col-span-3 grid grid-cols-1 gap-4 md:grid-cols-3">            
            <MetricCard value="99.9%" label="Uptime SLA" />
            <MetricCard value="< 2s" label="Avg. response" />
            <MetricCard value="> 4.5/5" label="User satisfaction" />
            <MetricCard value="85%" label="Onboarding completion" />
            <MetricCard value="90%" label="Workflow completion" />
            <MetricCard value="80%" label="Client portal engagement" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricCard({ value, label }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/30 p-5 text-center">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}
