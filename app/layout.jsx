import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PubliExpert AI Guild - Master AI Tools & Community',
  description: 'Join the elite AI community. Learn Followr, GHL, Answerly, AI automation & grow your business.',
  keywords: 'AI, automation, GHL, Followr, Answerly, community, entrepreneurship',
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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-dark text-white`}>
        {children}
      </body>
    </html>
  );
}
