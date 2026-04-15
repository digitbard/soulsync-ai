'use client';

import dynamic from 'next/dynamic';
import { useLanguage } from '@/context/LanguageContext';
import t, { tx } from '@/lib/translations';
import { useFadeUp } from '@/hooks/useFadeUp';

const RemotionPlayer = dynamic(() => import('./RemotionPlayer'), { ssr: false });

export default function HeroSection() {
  const { lang } = useLanguage();
  const ref = useFadeUp();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-[60px]">
      <RemotionPlayer />

      <div ref={ref} className="fade-up relative z-10 mx-auto max-w-[680px] text-center">
        <span className="mb-6 inline-flex items-center gap-2 rounded-[4px] border border-border bg-white/80 px-3 py-1.5 text-[13px] font-[400] text-label">
          <span className="inline-block h-2 w-2 rounded-full bg-success" />
          {tx(t.hero.badge, lang)}
        </span>

        <h1
          className="mt-4 whitespace-pre-line text-[32px] font-[300] leading-[1.03] tracking-[-0.64px] text-heading md:text-[56px] md:tracking-[-1.4px]"
        >
          {tx(t.hero.headline, lang)}
        </h1>

        <p className="mx-auto mt-6 max-w-[520px] text-[18px] font-[300] leading-[1.6] text-body">
          {tx(t.hero.subtitle, lang)}
        </p>

        <div className="mt-8 flex justify-center gap-3">
          <a
            href="#contact"
            className="rounded-[4px] bg-purple px-5 py-[10px] text-[16px] font-[400] text-white transition-colors hover:bg-purple-hover"
          >
            {tx(t.hero.cta, lang)}
          </a>
          <a
            href="#services"
            className="rounded-[4px] border border-purple-light bg-transparent px-5 py-[10px] text-[16px] font-[400] text-purple transition-colors hover:bg-purple-bg"
          >
            {tx(t.hero.learn, lang)}
          </a>
        </div>
      </div>
    </section>
  );
}
