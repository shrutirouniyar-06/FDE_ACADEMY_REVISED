import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EventsPreview } from '@/components/sections/EventsPreview';

export function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <EventsPreview />
      </main>
      <Footer />
    </>
  );
}
