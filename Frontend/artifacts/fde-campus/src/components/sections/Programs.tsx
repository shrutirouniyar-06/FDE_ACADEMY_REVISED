import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { PROGRAMS } from '@/data/mock';
import { Link } from 'wouter';
import { TiltCard } from '@/components/ui/tilt-card';

export function ProgramsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Choose Your Path</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">Built for Every Stage</h3>
          <p className="text-xl text-muted-foreground">From rising engineers to elite enterprise architects, our programs accelerate your trajectory.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PROGRAMS.map((prog, idx) => (
            <motion.div
              key={prog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
            <TiltCard
              className={`relative glass-card rounded-3xl p-8 flex flex-col h-full group cursor-default
                transition-all duration-300
                hover:-translate-y-3
                hover:shadow-[0_24px_50px_rgba(229,106,26,0.18)]
                ${prog.recommended
                  ? 'border-primary shadow-[0_0_30px_rgba(229,106,26,0.15)] hover:shadow-[0_24px_60px_rgba(229,106,26,0.28)]'
                  : 'border-border/50 hover:border-primary/50'
                }`}
            >
              {prog.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(229,106,26,0.5)]">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h4 className="text-3xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">{prog.title}</h4>
                <p className="text-primary font-medium">{prog.experience}</p>
              </div>

              <div className="space-y-6 flex-1">
                {[
                  { label: 'Duration', value: prog.duration },
                  { label: 'Core Focus', value: prog.focus },
                  { label: 'Structure', value: prog.projects },
                  { label: 'Outcomes', value: prog.outcomes },
                ].map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary/60 group-hover:text-primary shrink-0 mt-0.5 transition-colors duration-300" />
                    <div>
                      <span className="text-sm text-muted-foreground block">{item.label}</span>
                      <span className="text-white font-medium">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <Link 
                  href={prog.link}
                  className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95
                    ${prog.recommended
                      ? 'bg-primary text-white hover:bg-primary/90 hover:gap-3'
                      : 'bg-white/10 text-white hover:bg-primary hover:text-white hover:gap-3'
                    }`}
                >
                  View Curriculum
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
