import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '@/hooks/use-count-up';

const BarItem = ({ skill, gap, i, inView }: { skill: string; gap: number; i: number; inView: boolean }) => {
  const count = useCountUp(gap, 1200, inView);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
      className="group"
    >
      <div className="flex justify-between text-sm mb-2 items-center">
        <span className="text-white font-semibold group-hover:text-primary transition-colors duration-300">{skill}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.6 + i * 0.12 }}
          className="text-primary font-bold tabular-nums"
        >
          {count}% Shortage
        </motion.span>
      </div>
      <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${gap}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: 0.5 + i * 0.12, ease: "easeOut" }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(to right, hsl(25 80% 40%), hsl(25 80% 60%))`,
            boxShadow: inView ? '0 0 10px rgba(229,106,26,0.4)' : 'none',
          }}
        >
          {/* Animated shimmer */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, delay: 1.2 + i * 0.12, repeat: Infinity, repeatDelay: 3, ease: 'linear' }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export function IndustryChallenge() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: "Software Engineering",       gap: 30 },
    { name: "Machine Learning / AI",      gap: 45 },
    { name: "Cloud Architecture",         gap: 50 },
    { name: "Business Strategy & ROI",    gap: 85 },
    { name: "Executive Communication",    gap: 90 },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">The Industry Challenge</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The Missing Link in Tech</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Universities produce great computer scientists. MBAs produce great strategists. But enterprises are failing to deploy AI because almost no one can do both.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="bg-[#17181D] p-6 rounded-2xl border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(229,106,26,0.1)] transition-all duration-300 group"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">90%</div>
                <div className="text-sm text-white font-medium">Of corporate AI initiatives never reach production.</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="bg-[#17181D] p-6 rounded-2xl border border-border hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(229,106,26,0.1)] transition-all duration-300 group"
              >
                <div className="text-4xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">1 in 10</div>
                <div className="text-sm text-white font-medium">Engineers possess the required business acumen.</div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 rounded-3xl hover:shadow-[0_0_40px_rgba(229,106,26,0.08)] transition-shadow duration-500"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-8 bg-primary rounded-full" />
              <h4 className="text-2xl font-display font-bold text-white">The Capability Gap</h4>
            </div>
            
            <div className="space-y-6">
              {skills.map((skill, i) => (
                <BarItem key={i} skill={skill.name} gap={skill.gap} i={i} inView={inView} />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 1.4 }}
              className="mt-8 pt-6 border-t border-white/10 flex items-center gap-3"
            >
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <p className="text-sm text-muted-foreground italic">
                Source: GlobalLogic Enterprise AI Readiness Survey, 2024
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
