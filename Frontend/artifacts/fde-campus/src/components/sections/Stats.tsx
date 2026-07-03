import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '@/hooks/use-count-up';

const StatItem = ({
  end, label, suffix = '', prefix = '', inView, index,
}: { end: number; label: string; suffix?: string; prefix?: string; inView: boolean; index: number }) => {
  const count = useCountUp(end, 2200, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center md:items-start text-center md:text-left group relative"
    >
      {/* Large ghost number */}
      <span
        className="absolute -top-4 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 text-[120px] font-display font-black leading-none select-none pointer-events-none opacity-[0.035] text-white"
        aria-hidden
      >
        {prefix}{end}{suffix}
      </span>

      <div className="relative text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-3 flex items-baseline tabular-nums group-hover:text-primary transition-colors duration-500">
        {prefix}
        <span>{count}</span>
        <span className="text-primary ml-0.5">{suffix}</span>
      </div>

      {/* Animated underline */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1, delay: index * 0.12 + 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-[2px] w-12 bg-primary/60 origin-left mb-3"
      />

      <div className="text-sm font-semibold uppercase tracking-widest text-white/40 group-hover:text-white/70 transition-colors duration-300">
        {label}
      </div>
    </motion.div>
  );
};

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { end: 20,  suffix: '',   label: 'Participants' },
    { end: 6,   suffix: '',   label: 'Weeks' },
    { end: 140, suffix: '+',  label: 'Hrs of Hands-on Challenges' },
    { end: 6,   suffix: '',   label: 'Major Use Cases' },
    { end: 1,   suffix: '',   label: 'Capstone Simulation' },
  ];

  return (
    <section ref={ref} className="relative py-24 bg-[#0A0A0B] border-y border-white/5 overflow-hidden">
      {/* Sweeping gradient line at top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/60 to-transparent origin-left"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Pilot Cohort Snapshot</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white">By the Numbers</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <StatItem
              key={i}
              index={i}
              end={stat.end}
              suffix={stat.suffix}
              label={stat.label}
              inView={inView}
            />
          ))}
        </div>
      </div>

      {/* Sweeping gradient line at bottom */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent origin-right"
      />
    </section>
  );
}
