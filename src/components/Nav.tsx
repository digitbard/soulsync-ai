'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import t, { tx } from '@/lib/translations';

const links = [
  { href: '#services', label: t.nav.services },
  { href: '#process', label: t.nav.process },
  { href: '#about', label: t.nav.about },
];

export default function Nav() {
  const { lang, toggleLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-[60px] border-b border-border"
      style={{ background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)' }}
    >
      <div className="mx-auto flex h-full max-w-[1080px] items-center justify-between px-5">
        <a href="#" className="text-[18px] font-[400] tracking-[-0.22px] text-deep-navy">
          SoulSync AI
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[16px] font-[400] text-deep-navy transition-colors hover:text-purple"
            >
              {tx(l.label, lang)}
            </a>
          ))}
          <button
            onClick={toggleLang}
            className="rounded-[4px] border border-border px-3 py-1 text-[13px] font-[400] text-label transition-colors hover:border-purple-light"
          >
            {lang === 'en' ? '日本語' : 'EN'}
          </button>
          <a
            href="#contact"
            className="rounded-[4px] bg-purple px-5 py-[10px] text-[16px] font-[400] text-white transition-colors hover:bg-purple-hover"
          >
            {tx(t.nav.contact, lang)}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-[5px] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-[2px] w-5 bg-deep-navy transition-transform ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block h-[2px] w-5 bg-deep-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[2px] w-5 bg-deep-navy transition-transform ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-b border-border bg-white px-5 py-4 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-[16px] font-[400] text-deep-navy"
            >
              {tx(l.label, lang)}
            </a>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <button
              onClick={toggleLang}
              className="rounded-[4px] border border-border px-3 py-1 text-[13px] font-[400] text-label"
            >
              {lang === 'en' ? '日本語' : 'EN'}
            </button>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-[4px] bg-purple px-5 py-[10px] text-[16px] font-[400] text-white"
            >
              {tx(t.nav.contact, lang)}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
