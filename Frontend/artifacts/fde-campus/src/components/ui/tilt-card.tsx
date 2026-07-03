import { useRef, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max rotation in degrees (default 8) */
  maxTilt?: number;
}

export function TiltCard({ children, className = '', maxTilt = 8 }: TiltCardProps) {
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Cache the bounding rect on enter to avoid per-move layout reads
  const cachedRect = useRef<DOMRect | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 250, damping: 22 });
  const ySpring = useSpring(y, { stiffness: 250, damping: 22 });

  const rotateX = useTransform(ySpring, [-0.5, 0.5], [`${maxTilt}deg`, `-${maxTilt}deg`]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [`-${maxTilt}deg`, `${maxTilt}deg`]);

  function handleMouseEnter() {
    if (prefersReduced) return;
    cachedRect.current = ref.current?.getBoundingClientRect() ?? null;
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (prefersReduced || !cachedRect.current) return;
    const rect = cachedRect.current;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    cachedRect.current = null;
  }

  return (
    <motion.div
      ref={ref}
      style={
        prefersReduced
          ? {}
          : { rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 900 }
      }
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}
