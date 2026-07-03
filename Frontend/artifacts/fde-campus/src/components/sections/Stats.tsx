import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useCountUp } from '@/hooks/use-count-up';

const StatItem = ({ end, label, suffix = '', prefix = '', inView }: { end: number, label: string, suffix?: string, prefix?: string, inView: boolean }) => {
  const count = useCountUp(end, 2000, inView);
  
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left group">
      <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 flex items-baseline group-hover:text-primary transition-colors duration-300">
        {prefix}{count}{suffix}
      </div>
      <div className="text-lg text-muted-foreground font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
};

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { end: 500, suffix: '+', label: 'Students Trained' },
    { end: 40, suffix: '+', label: 'Expert Mentors' },
    { end: 120, suffix: '+', label: 'Live Projects' },
    { end: 94, suffix: '%', label: 'Success Rate' },
  ];

  return (
    <section ref={ref} className="py-24 bg-[#17181D] border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <StatItem end={stat.end} suffix={stat.suffix} label={stat.label} inView={inView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
