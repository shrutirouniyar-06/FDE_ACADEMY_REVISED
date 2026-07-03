import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BlogPreview } from '@/components/sections/BlogPreview';

export function BlogsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <BlogPreview />
      </main>
      <Footer />
    </>
  );
}
