import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

interface MagneticProps {
  children: ReactNode;
  className?: string;
  /** Strength of the magnetic pull, 0-1 (default 0.35) */
  strength?: number;
}

export function Magnetic({ children, className = '', strength = 0.35 }: MagneticProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Cache rect on enter
  const cachedRect = useRef<DOMRect | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 200, damping: 20 });

  function handleMouseEnter() {
    if (prefersReduced) return;
    cachedRect.current = ref.current?.getBoundingClientRect() ?? null;
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReduced || !cachedRect.current) return;
    const rect = cachedRect.current;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    cachedRect.current = null;
  }

  return (
    <motion.div
      ref={ref}
      style={prefersReduced ? {} : { x: xSpring, y: ySpring }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
