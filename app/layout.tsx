import type { Metadata } from 'next';
import { Unbounded, Manrope } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';

const unbounded = Unbounded({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-unbounded',
  display: 'swap',
});

const manrope = Manrope({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tern — Stop Signing Cheques for Free',
  description:
    "Post-dated cheques lock up your capital and earn nothing. Tern pays your landlord and puts the rewards in your pocket. UAE's credit card rent payment platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${unbounded.variable} ${manrope.variable}`}>
      <body className="min-h-full flex flex-col" style={{ backgroundColor: 'var(--teal)' }}>
        <Nav />
        <ScrollRevealProvider />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
