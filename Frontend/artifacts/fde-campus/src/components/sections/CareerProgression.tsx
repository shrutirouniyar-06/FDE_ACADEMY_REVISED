import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CareerProgression() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      title: "Junior FDE",
      timeline: "0-2 years",
      role: "Core engineering + client delivery",
      responsibilities: ["Build AI pipelines", "Support client deployments", "Model fine-tuning", "Technical documentation"]
    },
    {
      title: "Senior FDE",
      timeline: "2-5 years",
      role: "Lead solutions + team mentoring",
      responsibilities: ["Solution architecture", "Client advisory", "Mentor Junior FDEs", "ROI measurement"]
    },
    {
      title: "Principal FDE",
      timeline: "5-8 years",
      role: "Practice leadership + strategic accounts",
      responsibilities: ["Enterprise architecture", "Technology strategy", "Cross-functional leadership", "Pre-sales support"]
    },
    {
      title: "FDE Director",
      timeline: "8+ years",
      role: "Organizational transformation + executive advisory",
      responsibilities: ["Board-level consulting", "P&L management", "Global AI strategy", "Practice building"]
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Career Progression</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The Junior FDE Trajectory</h3>
          <p className="text-xl text-muted-foreground">A clear path from hands-on engineering to executive leadership.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 relative">
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-border rounded-full" />
            <motion.div 
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-8 top-8 bottom-8 w-1 bg-gradient-to-b from-primary to-[#FF8A3D] rounded-full origin-top"
            />
            
            <div className="space-y-8 relative z-10">
              {stages.map((stage, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActiveStage(idx)}
                  className="flex items-center gap-6 cursor-pointer group"
                >
                  <div className={cn(
                    "w-16 h-16 rounded-full flex items-center justify-center font-display font-bold text-xl transition-all duration-500",
                    activeStage === idx 
                      ? "bg-primary text-white scale-110 shadow-[0_0_20px_rgba(229,106,26,0.4)]" 
                      : "bg-[#202229] border border-border text-muted-foreground group-hover:border-primary/50 group-hover:text-white"
                  )}>
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className={cn(
                      "text-xl font-bold transition-colors duration-300",
                      activeStage === idx ? "text-primary" : "text-white group-hover:text-white/80"
                    )}>
                      {stage.title}
                    </h4>
                    <p className="text-muted-foreground">{stage.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            key={activeStage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 glass-card p-10 rounded-3xl"
          >
            <div className="inline-block bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full font-semibold text-sm mb-6">
              {stages[activeStage].timeline}
            </div>
            <h4 className="text-4xl font-display font-bold text-white mb-4">{stages[activeStage].title}</h4>
            <p className="text-xl text-muted-foreground mb-10 pb-10 border-b border-border/50">
              {stages[activeStage].role}
            </p>
            
            <h5 className="text-lg font-bold text-white mb-6 uppercase tracking-wide">Core Responsibilities</h5>
            <div className="grid sm:grid-cols-2 gap-4">
              {stages[activeStage].responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl">
                  <ChevronRight className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-white/90 font-medium">{resp}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
