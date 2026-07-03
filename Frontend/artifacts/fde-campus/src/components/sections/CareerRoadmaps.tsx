import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Code, Brain, Target, Network, Layers } from 'lucide-react';
import { Link } from 'wouter';

export function CareerRoadmaps() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const paths = [
    { title: "Engineering Path", icon: <Code className="w-6 h-6" />, steps: ["FDE", "Principal Engineer", "Engineering Director"] },
    { title: "AI Path", icon: <Brain className="w-6 h-6" />, steps: ["FDE", "AI Lead", "Chief AI Officer"] },
    { title: "Consulting Path", icon: <Target className="w-6 h-6" />, steps: ["FDE", "Engagement Manager", "Partner"] },
    { title: "Architecture Path", icon: <Network className="w-6 h-6" />, steps: ["FDE", "Enterprise Architect", "CTO"] },
    { title: "Leadership Path", icon: <Layers className="w-6 h-6" />, steps: ["FDE", "Program Director", "SVP Engineering"] },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Endless Possibilities</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Career Roadmaps</h3>
          <p className="text-xl text-muted-foreground">The FDE role is a launchpad. Because you understand both the tech stack and the balance sheet, your upward mobility is unrestricted.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paths.map((path, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl group hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border/50">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  {path.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{path.title}</h4>
              </div>
              
              <div className="space-y-6">
                {path.steps.map((step, i) => (
                  <div key={i} className="flex flex-col relative">
                    {i !== path.steps.length - 1 && (
                      <div className="absolute left-3.5 top-8 bottom-[-24px] w-0.5 bg-border group-hover:bg-primary/30 transition-colors" />
                    )}
                    <div className="flex items-center gap-4">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 z-10 ${i === 0 ? 'bg-primary text-white' : 'bg-[#202229] border-2 border-border text-muted-foreground group-hover:border-primary transition-colors'}`}>
                        <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-transparent'}`} />
                      </div>
                      <span className={`font-medium ${i === 0 ? 'text-primary' : 'text-white'}`}>{step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link href="/career-roadmaps" className="inline-flex items-center gap-2 text-white hover:text-primary font-bold transition-colors">
            Explore Detailed Roadmaps <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
