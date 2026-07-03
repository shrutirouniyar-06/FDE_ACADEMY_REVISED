import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Mentors } from '@/components/sections/Mentors';

export function MentorsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <div className="py-10 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white">Our Mentors</h1>
        </div>
        <Mentors />
      </main>
      <Footer />
    </>
  );
}
