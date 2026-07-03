import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ProgramsSection } from '@/components/sections/Programs';
import { ProgramComparison } from '@/components/sections/ProgramComparison';
import { motion } from 'framer-motion';

export function ProgramsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Our Programs</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Rigorous, immersive, and aligned with enterprise reality. Choose the path that matches your experience.
              </p>
            </motion.div>
          </div>
        </section>

        <ProgramsSection />
        <ProgramComparison />

      </main>
      <Footer />
    </>
  );
}
