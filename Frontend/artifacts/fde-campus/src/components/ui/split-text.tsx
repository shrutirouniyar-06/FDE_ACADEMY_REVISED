import { useRef } from 'react';
import { motion, useInView, useReducedMotion, type Variants } from 'framer-motion';

interface SplitTextProps {
  /** Text to animate */
  text: string;
  /** Class on the outer span (usually font sizing) */
  className?: string;
  /** Class on each word span */
  wordClassName?: string;
  /** Base delay in seconds before stagger starts */
  delay?: number;
  /** Per-word stagger in seconds */
  stagger?: number;
  /** Only animate once */
  once?: boolean;
  /** Inview margin */
  margin?: string;
}

const wordVariant: Variants = {
  hidden: { y: '110%', opacity: 0, rotateX: 15 },
  visible: (custom: { delay: number; stagger: number; i: number }) => ({
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.85,
      delay: custom.delay + custom.i * custom.stagger,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

export function SplitText({
  text,
  className = '',
  wordClassName = '',
  delay = 0,
  stagger = 0.09,
  once = true,
  margin = '-10%',
}: SplitTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // margin is a valid IntersectionObserver rootMargin string; cast avoids overly narrow type inference
  const inView = useInView(ref, { once, margin: margin as string as never });
  const prefersReduced = useReducedMotion();

  const words = text.split(' ');

  if (prefersReduced) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span ref={ref} className={`inline ${className}`} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            display: 'inline-block',
            overflow: 'hidden',
            /* extra padding so descenders (g, y, p…) aren't clipped */
            paddingBottom: '0.18em',
            marginBottom: '-0.18em',
            verticalAlign: 'bottom',
            marginRight: '0.28em',
            perspective: '800px',
          }}
        >
          <motion.span
            custom={{ delay, stagger, i }}
            variants={wordVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            style={{ display: 'inline-block' }}
            className={wordClassName}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
