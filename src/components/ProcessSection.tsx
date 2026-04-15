'use client';

import { useLanguage } from '@/context/LanguageContext';
import t, { tx } from '@/lib/translations';
import { useFadeUp } from '@/hooks/useFadeUp';

export default function ProcessSection() {
  const { lang } = useLanguage();
  const ref = useFadeUp();

  return (
    <section id="process" className="bg-brand-dark px-5 py-20">
      <div ref={ref} className="fade-up mx-auto max-w-[1080px]">
        <h2 className="text-center text-[32px] font-[300] leading-[1.1] tracking-[-0.64px] text-white">
          {tx(t.process.heading, lang)}
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-center text-[18px] font-[300] leading-[1.6] text-white/55">
          {tx(t.process.subtitle, lang)}
        </p>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step) => (
            <div
              key={step.num}
              className="rounded-[6px] border border-white/10 p-7 transition-colors hover:border-white/20"
            >
              <span className="font-mono text-[12px] font-[500] tracking-[0.05em] text-purple-light">
                {step.num}
              </span>
              <h3 className="mt-3 text-[22px] font-[300] leading-[1.1] tracking-[-0.22px] text-white">
                {tx(step.title, lang)}
              </h3>
              <p className="mt-3 text-[16px] font-[300] leading-[1.6] text-white/55">
                {tx(step.desc, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
