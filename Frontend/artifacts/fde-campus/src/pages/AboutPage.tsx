import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { IndustryChallenge } from '@/components/sections/IndustryChallenge';
import { WhyFDE } from '@/components/sections/WhyFDE';
import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32">
        <section className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[#0F0F10] z-0">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] pointer-events-none" />
          </div>
          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">About FDE Academy</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We are on a mission to build the next generation of hybrid technologists. Engineers who don't just write code, but understand how to deploy AI to solve complex business challenges.
              </p>
            </motion.div>
          </div>
        </section>
        
        <WhyFDE />
        <IndustryChallenge />
        
      </main>
      <Footer />
    </>
  );
}
