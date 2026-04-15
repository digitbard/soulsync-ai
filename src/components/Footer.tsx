'use client';

import { useLanguage } from '@/context/LanguageContext';
import t, { tx } from '@/lib/translations';

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-dark-navy px-5 py-10">
      <div className="mx-auto max-w-[1080px] text-center text-[14px] font-[300] text-white/40">
        {tx(t.footer.copy, lang)}
      </div>
    </footer>
  );
}
