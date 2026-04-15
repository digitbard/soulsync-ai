import type { Metadata } from 'next';
import { Inter, Noto_Sans_JP, Source_Code_Pro } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-source-code-pro',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'SoulSync AI — AI Implementation Partner',
  description:
    'We help businesses across Asia-Pacific implement practical AI solutions — from strategy and assessment to custom development and deployment.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoSansJP.variable} ${sourceCodePro.variable} antialiased`}
    >
      <body className="min-h-full">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
