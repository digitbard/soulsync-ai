'use client';

import { useLanguage } from '@/context/LanguageContext';
import t, { tx } from '@/lib/translations';
import { useFadeUp } from '@/hooks/useFadeUp';

const icons = [
  // Strategy
  <svg key="s" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>,
  // Development
  <svg key="d" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  // Automation
  <svg key="a" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#533afd" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 17v4"/></svg>,
];

export default function ServicesSection() {
  const { lang } = useLanguage();
  const ref = useFadeUp();

  return (
    <section id="services" className="px-5 py-20">
      <div ref={ref} className="fade-up mx-auto max-w-[1080px]">
        <h2 className="text-center text-[32px] font-[300] leading-[1.1] tracking-[-0.64px] text-heading">
          {tx(t.services.heading, lang)}
        </h2>
        <p className="mx-auto mt-4 max-w-[540px] text-center text-[18px] font-[300] leading-[1.6] text-body">
          {tx(t.services.subtitle, lang)}
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {t.services.items.map((item, i) => (
            <div
              key={i}
              className="rounded-[6px] border border-border bg-white p-7 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                boxShadow: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  'rgba(50,50,93,0.25) 0px 30px 45px -30px, rgba(0,0,0,0.1) 0px 18px 36px -18px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-[6px] bg-purple-bg">
                {icons[i]}
              </div>
              <h3 className="text-[22px] font-[300] leading-[1.1] tracking-[-0.22px] text-heading">
                {tx(item.title, lang)}
              </h3>
              <p className="mt-3 text-[16px] font-[300] leading-[1.6] text-body">
                {tx(item.desc, lang)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
