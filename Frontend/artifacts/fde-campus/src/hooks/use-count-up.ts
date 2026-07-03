import { useState, useEffect } from 'react';

export function useCountUp(end: number, duration: number = 2000, startOn: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOn) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(end * easeOutQuart));

      if (progress < duration) {
        animationFrameId = window.requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [end, duration, startOn]);

  return count;
}
