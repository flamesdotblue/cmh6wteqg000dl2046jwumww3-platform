import React, { useState } from 'react';
import { Rocket, Menu, X } from 'lucide-react';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const NavLinks = () => (
    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm">
      <li><a className="text-white/80 hover:text-white" href="#product">Product</a></li>
      <li><a className="text-white/80 hover:text-white" href="#solutions">Solutions</a></li>
      <li><a className="text-white/80 hover:text-white" href="#security">Security</a></li>
      <li><a className="text-white/80 hover:text-white" href="#pricing">Pricing</a></li>
      <li><a className="text-white/80 hover:text-white" href="#docs">Docs</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-neutral-900">
              <Rocket size={18} />
            </div>
            <span>Mirai360</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <NavLinks />
            <div className="flex items-center gap-3">
              <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm hover:border-white/40">Talk to sales</a>
              <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white/90">Get started</a>
            </div>
          </nav>

          <button aria-label="Open menu" className="md:hidden inline-flex items-center justify-center rounded-md border border-white/15 p-2" onClick={() => setOpen(true)}>
            <Menu size={18} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur">
          <div className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex items-center justify-between">
              <a href="#home" className="flex items-center gap-2 font-semibold tracking-tight">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-white text-neutral-900">
                  <Rocket size={18} />
                </div>
                <span>Mirai360</span>
              </a>
              <button aria-label="Close menu" className="inline-flex items-center justify-center rounded-md border border-white/15 p-2" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>
            <div className="mt-6 space-y-6">
              <NavLinks />
              <div className="flex flex-col gap-3">
                <a href="#demo" className="inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-2 text-sm hover:border-white/40">Talk to sales</a>
                <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-white/90">Get started</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
