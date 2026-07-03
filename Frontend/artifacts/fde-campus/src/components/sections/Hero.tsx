import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ArrowRight, Download, PlayCircle } from 'lucide-react';
import { Link } from 'wouter';
import { Magnetic } from '@/components/ui/magnetic';

/* ── Word-by-word reveal variants ── */
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.25 } },
};
const wordVariants: Variants = {
  hidden: { opacity: 0, y: 36, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/* Particle positions are stable (no random at render time) */
const PARTICLES = Array.from({ length: 24 }, (_, i) => ({
  left: `${(i * 4.17 + 2) % 100}%`,
  top: `${(i * 7.3 + 10) % 100}%`,
  size: i % 3 === 0 ? 2 : 1,
  duration: 12 + (i % 7) * 2.5,
  delay: (i % 10) * 1.1,
}));

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-20">

      {/* ── Ambient background ── */}
      <div className="absolute inset-0 bg-[#0F0F10] z-0 overflow-hidden">

        {/* Dot grid */}
        <div
          className="absolute inset-0 animate-grid opacity-50"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(229,106,26,0.18) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Orb 1 – primary/amber, top-right */}
        <div
          className="animate-orb-1 absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(229,106,26,0.22) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Orb 2 – blue, bottom-left */}
        <div
          className="animate-orb-2 absolute bottom-[-15%] left-[-10%] w-[700px] h-[700px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(59,130,246,0.14) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />

        {/* Orb 3 – purple, center */}
        <div
          className="animate-orb-3 absolute top-[30%] left-[35%] w-[500px] h-[500px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 70%)',
            filter: 'blur(90px)',
          }}
        />

        {/* Floating particles */}
        {PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary opacity-0"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
            }}
            animate={{ y: ['0vh', '-110vh'], opacity: [0, 0.55, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Text side */}
        <div className="flex flex-col items-start gap-8">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold tracking-wide flex items-center gap-2 animate-glow-ring"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            An AI-First Learning Initiative by GlobalLogic
          </motion.div>

          {/* Heading – word-by-word */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-6xl sm:text-7xl lg:text-[88px] leading-[1.05] font-display font-bold text-white tracking-tight"
          >
            <motion.span variants={wordVariants} className="inline-block mr-3">Become</motion.span>
            <motion.span variants={wordVariants} className="inline-block mr-0">a</motion.span>
            <br />
            <motion.span variants={wordVariants} className="inline-block text-shimmer mr-3">Forward</motion.span>
            <motion.span variants={wordVariants} className="inline-block text-shimmer">Deployed</motion.span>
            <br />
            <motion.span variants={wordVariants} className="inline-block">Engineer.</motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl"
          >
            Bridge the gap between business strategy and AI engineering. Lead transformations that matter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <Magnetic strength={0.3}>
              <Link
                href="/programs"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(229,106,26,0.35)]"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <button className="border-2 border-white/60 text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all active:scale-95 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Download Brochure
              </button>
            </Magnetic>
          </motion.div>
        </div>

        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative lg:h-[600px] w-full hidden lg:block rounded-2xl overflow-hidden border border-border/50 shadow-2xl group"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/20 z-10 pointer-events-none mix-blend-overlay" />
          <img
            src="/images/hero-visual.jpg"
            alt="AI Workspace"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-background/20 z-10" />

          {/* Floating card – animate-float */}
          <div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-xl z-20 flex items-center justify-between animate-float">
            <div>
              <p className="text-white font-medium mb-1">See FDEs in action</p>
              <p className="text-sm text-muted-foreground">Watch the 2-minute documentary</p>
            </div>
            <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 transition-transform shadow-[0_0_20px_rgba(229,106,26,0.4)]">
              <PlayCircle className="w-6 h-6" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
