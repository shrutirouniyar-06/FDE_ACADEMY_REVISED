import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CapabilityPillars } from '@/components/sections/CapabilityPillars';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function JuniorFDEPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="py-20 bg-[#0F0F10] border-b border-border/50">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Junior FDE Program</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                A 6-month intensive for early-career engineers. Build technical depth in AI/ML and learn the fundamentals of client delivery.
              </p>
              
              <div className="flex items-center gap-4">
                <Link href="/apply" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                  Apply for Next Cohort <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <CapabilityPillars />

      </main>
      <Footer />
    </>
  );
}
