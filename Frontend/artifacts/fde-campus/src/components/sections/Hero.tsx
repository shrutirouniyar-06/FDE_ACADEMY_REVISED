import { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { Magnetic } from '@/components/ui/magnetic';
import { SplitText } from '@/components/ui/split-text';

/* Stable particle data (no runtime random) */
const PARTICLES = Array.from({ length: 30 }, (_, i) => ({
  left: `${(i * 3.33 + 2) % 100}%`,
  top: `${(i * 7.3 + 5) % 100}%`,
  size: i % 5 === 0 ? 3 : i % 3 === 0 ? 2 : 1,
  duration: 14 + (i % 8) * 2.5,
  delay: (i % 11) * 0.9,
  opacity: i % 4 === 0 ? 0.7 : 0.35,
}));

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  /* Parallax layers */
  const rawTextY  = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const rawImageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);
  const rawScale  = useTransform(scrollYProgress, [0, 1], [1, 0.96]);

  const textY  = useSpring(rawTextY,  { stiffness: 80, damping: 20 });
  const imageY = useSpring(rawImageY, { stiffness: 80, damping: 20 });

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 pb-28"
    >

      {/* ─── Background ─── */}
      <div className="absolute inset-0 bg-[#0F0F10] overflow-hidden">

        {/* Noise grain overlay */}
        <div className="grain-overlay absolute inset-0 pointer-events-none z-[1]" />

        {/* Animated dot grid */}
        <div
          className="absolute inset-0 animate-grid opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Primary orb – orange, top-right */}
        <div
          className="animate-blob animate-orb-1 absolute -top-[15%] -right-[5%] w-[700px] h-[700px]"
          style={{
            background: 'radial-gradient(circle at 40% 40%, rgba(229,106,26,0.20) 0%, rgba(229,106,26,0.05) 55%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Rising particles */}
        {!prefersReduced && PARTICLES.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: ['0vh', '-115vh'], opacity: [0, p.opacity, 0] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: 'linear', delay: p.delay }}
          />
        ))}

        {/* Vignette */}
        <div className="absolute inset-0 bg-radial-vignette pointer-events-none z-[2]" />
      </div>

      {/* ─── Content ─── */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

        {/* Left – text */}
        <motion.div
          style={prefersReduced ? {} : { y: textY, opacity: rawOpacity, scale: rawScale }}
          className="flex flex-col items-start gap-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-2 rounded-full border border-primary/40 bg-primary/10 text-primary text-sm font-semibold tracking-wide flex items-center gap-2 animate-glow-ring"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            An AI-First Learning Initiative by GlobalLogic
          </motion.div>

          {/* Heading – line-by-line SplitText reveals */}
          <h1 className="text-6xl sm:text-7xl lg:text-[90px] leading-[1.02] font-display font-bold tracking-tight">
            <span className="block text-white">
              <SplitText text="Become a" delay={0.1} stagger={0.08} />
            </span>
            <span className="block">
              <SplitText
                text="Forward Deployed"
                delay={0.3}
                stagger={0.07}
                wordClassName="text-shimmer"
              />
            </span>
            <span className="block text-white">
              <SplitText text="Engineer." delay={0.55} stagger={0.1} />
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="text-xl md:text-2xl text-white/55 leading-relaxed max-w-xl"
          >
            Bridge the gap between business strategy and AI engineering.&nbsp;
            <span className="text-white/80">Lead transformations that matter.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <Magnetic strength={0.35}>
              <Link
                href="/programs"
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(229,106,26,0.4)] hover:shadow-[0_0_60px_rgba(229,106,26,0.55)]"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.3}>
              <button className="border border-white/20 text-white/80 hover:text-white hover:border-white/50 hover:bg-white/5 px-8 py-4 rounded-full font-semibold text-lg transition-all active:scale-95 backdrop-blur-sm">
                Download Brochure
              </button>
            </Magnetic>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex items-center gap-2 text-white/30 text-sm mt-4"
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
            Scroll to explore
          </motion.div>
        </motion.div>

        {/* Right – image with counter-parallax */}
        <motion.div
          style={prefersReduced ? {} : { y: imageY }}
          initial={{ opacity: 0, scale: 0.93 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] }}
          className="relative hidden lg:block h-[620px] w-full"
        >
          {/* Glow ring behind image */}
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl animate-glow-ring" />

          {/* Image card */}
          <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.6)]">
            <img
              src="/images/hero-visual.jpg"
              alt="AI Workspace"
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Floating stat chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              className="absolute top-6 left-6 glass-card px-4 py-3 rounded-xl text-sm animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <p className="text-white/60 text-xs mb-0.5">Success rate</p>
              <p className="text-white font-bold text-xl">94<span className="text-primary">%</span></p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.7 }}
              className="absolute top-6 right-6 glass-card px-4 py-3 rounded-xl text-sm animate-float"
              style={{ animationDelay: '1.2s' }}
            >
              <p className="text-white/60 text-xs mb-0.5">Expert mentors</p>
              <p className="text-white font-bold text-xl">40<span className="text-primary">+</span></p>
            </motion.div>

            {/* Bottom CTA card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="absolute bottom-6 left-6 right-6 glass-card p-5 rounded-xl flex items-center justify-between"
            >
              <div>
                <p className="text-white font-semibold text-base mb-0.5">Next cohort starts</p>
                <p className="text-primary font-bold text-lg">August 4, 2026</p>
              </div>
              <Link
                href="/apply"
                className="bg-primary text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 whitespace-nowrap shadow-[0_0_20px_rgba(229,106,26,0.4)]"
              >
                Apply Now
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
