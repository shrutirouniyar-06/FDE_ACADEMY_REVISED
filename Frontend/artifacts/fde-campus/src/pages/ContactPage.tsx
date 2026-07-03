import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ContactSection } from '@/components/sections/ContactSection';

export function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
