import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, Clock, Users, TrendingUp } from 'lucide-react';
import { TiltCard } from '@/components/ui/tilt-card';

export function WhyFDE() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Industry Need",
      desc: "73% of enterprises report a critical gap between AI strategy and execution."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI Transformation",
      desc: "FDEs accelerate AI adoption by 3x compared to traditional engineering roles."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Time-to-Value",
      desc: "Average FDE project delivers ROI within 90 days of initial deployment."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Talent Gap",
      desc: "Only 12% of engineers can bridge business context with AI implementation."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Market Impact",
      desc: "$2.4T in unrealized value from failed AI transformation initiatives."
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      {/* Animated ambient orbs */}
      <div className="animate-orb-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(229,106,26,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="animate-orb-3 absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">The Business Imperative</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Why the World Needs FDEs</h3>
          <p className="text-xl text-muted-foreground">The bottleneck in AI isn't technology. It's the rare talent that can map complex models to actual business ROI.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${i === 3 ? 'lg:col-span-1 lg:col-start-1 lg:translate-x-1/2' : ''}
                ${i === 4 ? 'lg:col-span-1 lg:col-start-2 lg:translate-x-1/2' : ''}`}
            >
            <TiltCard
              maxTilt={6}
              className="glass-card p-8 rounded-2xl group cursor-default
                hover:-translate-y-2 hover:border-primary/50
                hover:shadow-[0_16px_40px_rgba(229,106,26,0.12)]
                transition-all duration-300 h-full"
            >
              <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                {card.icon}
              </div>
              <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">{card.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-lg">{card.desc}</p>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
