import { motion } from 'framer-motion';
import { ArrowRight, Download, PlayCircle } from 'lucide-react';
import { Link } from 'wouter';

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[#0F0F10] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(229,106,26,0.1),transparent_50%)] animate-pulse duration-[8000ms]" />
        
        {/* Floating Particles Mock */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            animate={{
              y: ['0vh', '-100vh'],
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 10
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            An AI-First Learning Initiative by GlobalLogic
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl sm:text-7xl lg:text-[88px] leading-[1.05] font-display font-bold text-white tracking-tight"
          >
            Become a <br />
            <span className="text-gradient">Forward Deployed</span><br />
            Engineer.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Bridge the gap between business strategy and AI engineering. Lead transformations that matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Link 
              href="/programs" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(229,106,26,0.3)]"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button 
              className="border-2 border-white/60 text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all active:scale-95 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download Brochure
            </button>
          </motion.div>
        </div>

        {/* Visual Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative lg:h-[600px] w-full hidden lg:block rounded-2xl overflow-hidden border border-border/50 shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/20 z-10 pointer-events-none mix-blend-overlay" />
          <img 
            src="/images/hero-visual.jpg" 
            alt="AI Workspace" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-background/20 z-10" />
          
          <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-xl z-20 flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <div>
              <p className="text-white font-medium mb-1">See FDEs in action</p>
              <p className="text-sm text-muted-foreground">Watch the 2-minute documentary</p>
            </div>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform">
              <PlayCircle className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
