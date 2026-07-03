import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILLS_A = [
  'LLM Integration', 'RAG Systems', 'Fine-Tuning', 'Prompt Engineering',
  'MLOps', 'Vector Databases', 'Model Evaluation', 'AI Architecture',
  'Business Strategy', 'Cloud Native AI', 'AI Engineering', 'Data Science',
];
const SKILLS_B = [
  'Enterprise AI', 'AI Roadmapping', 'Stakeholder Alignment', 'Agentic Systems',
  'Foundation Models', 'AI Governance', 'Neural Architecture', 'Deployment Strategy',
  'AI ROI Analysis', 'Multi-Modal AI', 'Responsible AI', 'Edge Inference',
];

function Ticker({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  // Duplicate for seamless loop
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden flex">
      <motion.div
        className="flex shrink-0 gap-0"
        animate={{ x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        style={{ willChange: 'transform' }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="text-primary/60 mx-4 text-sm select-none" aria-hidden>✦</span>
            <span className="text-sm font-medium tracking-wide whitespace-nowrap select-none">
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function MarqueeStrip({ variant = 'default' }: { variant?: 'default' | 'accent' }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const bgClass = variant === 'accent'
    ? 'bg-primary/5 border-y border-primary/20'
    : 'bg-[#0e0e10] border-y border-white/6';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={`py-5 ${bgClass} overflow-hidden`}
    >
      <div className="space-y-3">
        <div className={variant === 'accent' ? 'text-primary' : 'text-white/40'}>
          <Ticker items={SKILLS_A} />
        </div>
        <div className={variant === 'accent' ? 'text-primary/60' : 'text-white/25'}>
          <Ticker items={SKILLS_B} reverse />
        </div>
      </div>
    </motion.div>
  );
}
