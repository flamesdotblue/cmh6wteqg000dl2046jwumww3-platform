import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Pipelines from './components/Pipelines';
import Metrics from './components/Metrics';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white antialiased">      
      <Hero />
      <Features />
      <Pipelines />
      <Metrics />

      <section className="border-t border-white/10">        
        <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">            
            <div>
              <h3 className="text-lg text-white/80">Ready to modernize your practice?</h3>
              <p className="text-sm text-white/60 mt-1">Launch Mirai360 for your firm in days, not months.</p>
            </div>
            <div className="flex gap-3">
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-2.5 font-medium hover:bg-white/90 transition">Request a demo</a>
              <a href="#" className="inline-flex items-center justify-center rounded-md bg-transparent border border-white/20 text-white px-5 py-2.5 font-medium hover:border-white/40 transition">View product deck</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">        
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-4">          
          <p>© {new Date().getFullYear()} Mirai360 Labs Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="hover:text-white/90" href="#security">Security</a>
            <a className="hover:text-white/90" href="#compliance">Compliance</a>
            <a className="hover:text-white/90" href="#privacy">Privacy</a>
            <a className="hover:text-white/90" href="#terms">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
