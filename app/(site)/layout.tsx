import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <ScrollRevealProvider />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
