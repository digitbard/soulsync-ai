'use client';

import { useState, FormEvent } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import t, { tx } from '@/lib/translations';
import { useFadeUp } from '@/hooks/useFadeUp';

export default function ContactSection() {
  const { lang } = useLanguage();
  const ref = useFadeUp();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="px-5 py-20">
      <div ref={ref} className="fade-up mx-auto max-w-[1080px]">
        <h2 className="text-center text-[32px] font-[300] leading-[1.1] tracking-[-0.64px] text-heading">
          {tx(t.contact.heading, lang)}
        </h2>
        <p className="mx-auto mt-4 max-w-[480px] text-center text-[18px] font-[300] leading-[1.6] text-body">
          {tx(t.contact.subtitle, lang)}
        </p>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {sent ? (
            <div className="flex items-center justify-center rounded-[6px] border border-success/30 bg-success/5 p-10">
              <p className="text-center text-[18px] font-[300] text-heading">
                {tx(t.contact.sent, lang)}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {(['name', 'email', 'company'] as const).map((field) => (
                <div key={field}>
                  <label className="mb-1.5 block text-[14px] font-[400] text-label">
                    {tx(t.contact[field], lang)}
                  </label>
                  <input
                    type={field === 'email' ? 'email' : 'text'}
                    required={field !== 'company'}
                    className="w-full rounded-[4px] border border-border px-3.5 py-2.5 text-[15px] font-[300] text-heading placeholder:text-body focus:border-purple focus:outline-none"
                  />
                </div>
              ))}
              <div>
                <label className="mb-1.5 block text-[14px] font-[400] text-label">
                  {tx(t.contact.message, lang)}
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full rounded-[4px] border border-border px-3.5 py-2.5 text-[15px] font-[300] text-heading placeholder:text-body focus:border-purple focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-[4px] bg-purple px-5 py-[10px] text-[16px] font-[400] text-white transition-colors hover:bg-purple-hover"
              >
                {tx(t.contact.send, lang)}
              </button>
            </form>
          )}

          <div className="space-y-6">
            <div>
              <h3 className="text-[14px] font-[400] text-label">
                {tx(t.contact.info.emailLabel, lang)}
              </h3>
              <p className="mt-1 text-[16px] font-[300] text-heading">hello@soulsyncai.com</p>
            </div>
            <div>
              <h3 className="text-[14px] font-[400] text-label">
                {tx(t.contact.info.locationLabel, lang)}
              </h3>
              <p className="mt-1 text-[16px] font-[300] text-heading">
                {tx(t.contact.info.location, lang)}
              </p>
            </div>
            <div>
              <h3 className="text-[14px] font-[400] text-label">
                {tx(t.contact.info.responseLabel, lang)}
              </h3>
              <p className="mt-1 text-[16px] font-[300] text-heading">
                {tx(t.contact.info.response, lang)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
