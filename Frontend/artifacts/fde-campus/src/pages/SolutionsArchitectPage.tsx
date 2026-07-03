import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CapabilityPillars } from '@/components/sections/CapabilityPillars';
import { EnterpriseProjects } from '@/components/sections/EnterpriseProjects';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

export function SolutionsArchitectPage() {
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
              <span className="bg-purple-500/20 text-purple-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 inline-block">Elite Track</span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Solutions Architect</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                A 12-month program for senior engineers (7+ years). Focus entirely on enterprise architecture, cloud strategy, and executive-level consulting.
              </p>
              
              <div className="flex items-center gap-4">
                <Link href="/apply" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all flex items-center gap-2">
                  Request Invitation <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <EnterpriseProjects />
        <CapabilityPillars />

      </main>
      <Footer />
    </>
  );
}
