import './globals.css';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  title: 'PubliExpert AI Guild — Master AI Tools & Community',
  description:
    'Join the elite AI community. Learn Followr, GHL, Answerly, AI automation & grow your business.',
  keywords:
    'AI, automation, GHL, Followr, Answerly, community, entrepreneurship',
  openGraph: {
    title: 'PubliExpert AI Guild',
    description: 'Join 500+ entrepreneurs mastering AI automation.',
    url: 'https://guild.publiexpert.com',
    siteName: 'PubliExpert AI Guild',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PubliExpert AI Guild',
    description: 'Join the elite AI community.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${instrument.variable} ${jetbrains.variable} font-sans bg-ink text-cream`}
      >
        {children}
      </body>
    </html>
  );
}
