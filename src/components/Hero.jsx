import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[620px] w-full overflow-hidden">      
      <div className="absolute inset-0">        
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(12,12,24,0.0)_0%,rgba(12,12,24,0.65)_40%,rgba(12,12,24,0.9)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">        
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">          
          <Bot size={14} /> Agentic AI for Law • Made in India
        </span>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">          
          Mirai360 — The Operating System for Law Firms
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/70 md:text-lg">          
          An agentic AI-native platform that digitizes your practice, accelerates drafting, and powers case strategy — with enterprise-grade security and compliance.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">          
          <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-neutral-900 transition hover:bg-white/90">            
            <Rocket className="mr-2 h-4 w-4" /> Request a demo
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40">            
            <Shield className="mr-2 h-4 w-4" /> Explore features
          </a>
        </div>
        <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">          
          <Stat label="Drafting time" value="-40%" />
          <Stat label="Approval velocity" value="+35%" />
          <Stat label="Uptime" value="99.9%" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-black/30 p-4 backdrop-blur">      
      <div className="text-2xl font-semibold">{value}</div>
      <div className="mt-1 text-xs text-white/60">{label}</div>
    </div>
  );
}
