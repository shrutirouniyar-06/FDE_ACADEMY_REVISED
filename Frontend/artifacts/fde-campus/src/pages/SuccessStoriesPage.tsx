import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SuccessStories } from '@/components/sections/SuccessStories';

export function SuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <SuccessStories />
      </main>
      <Footer />
    </>
  );
}
