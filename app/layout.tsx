import type { Metadata, Viewport } from 'next';
import { Geom, Manrope } from 'next/font/google';
import './globals.css';

const unbounded = Geom({
  weight: ['700', '800'],
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tern',
  url: 'https://ternrewards.com',
  logo: 'https://ternrewards.com/img/tern-icon.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: 'hello@ternrewards.com',
    availableLanguage: ['English', 'Arabic'],
  },
  sameAs: [
    'https://instagram.com/tern.app',
    'https://linkedin.com/company/tern-app',
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ternrewards.com'),
  title: {
    default: 'Tern',
    template: '%s | Tern',
  },
  description:
    "Pay rent by credit card in the UAE and earn miles, points or cashback — with zero fees.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName: 'Tern',
    locale: 'en_AE',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#073B4C',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${unbounded.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: 'var(--teal)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
