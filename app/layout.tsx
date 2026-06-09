import type { Metadata, Viewport } from 'next';
import { Geom, Manrope } from 'next/font/google';
import Script from 'next/script';
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
        {/* Google Tag Manager (noscript) — must be first child of <body> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T4KLD4FX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {children}

        {/* Google Tag Manager — beforeInteractive injects into <head> before any Next.js code */}
        <Script id="gtm" strategy="beforeInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T4KLD4FX');
        `}</Script>
      </body>
    </html>
  );
}
