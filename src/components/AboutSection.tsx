'use client';

import { useLanguage } from '@/context/LanguageContext';
import t, { tx } from '@/lib/translations';
import { useFadeUp } from '@/hooks/useFadeUp';

export default function AboutSection() {
  const { lang } = useLanguage();
  const ref = useFadeUp();

  return (
    <section id="about" className="px-5 py-20">
      <div ref={ref} className="fade-up mx-auto max-w-[1080px]">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="text-[32px] font-[300] leading-[1.1] tracking-[-0.64px] text-heading">
              {tx(t.about.heading, lang)}
            </h2>
            <p className="mt-6 text-[16px] font-[300] leading-[1.6] text-body">
              {tx(t.about.p1, lang)}
            </p>
            <p className="mt-4 text-[16px] font-[300] leading-[1.6] text-body">
              {tx(t.about.p2, lang)}
            </p>
            <p className="mt-4 text-[16px] font-[300] leading-[1.6] text-body">
              {tx(t.about.p3, lang)}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {t.about.stats.map((stat, i) => (
              <div
                key={i}
                className="rounded-[6px] border border-border p-6 text-center"
              >
                <div className="text-[36px] font-[300] leading-none tracking-[-0.64px] text-purple">
                  {stat.value}
                </div>
                <div className="mt-2 text-[14px] font-[400] text-body">
                  {tx(stat.label, lang)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
