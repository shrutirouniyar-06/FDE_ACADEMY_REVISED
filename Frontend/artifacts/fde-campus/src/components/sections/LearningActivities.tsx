import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Code2, Sparkles, Briefcase, Building2, Presentation } from 'lucide-react';

export function LearningActivities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    { title: "Client Discovery", icon: <Search className="w-8 h-8" />, desc: "Shadow actual FDEs during discovery calls with Fortune 500 clients." },
    { title: "Live Projects", icon: <Code2 className="w-8 h-8" />, desc: "Build and deploy models using real (anonymized) enterprise datasets." },
    { title: "AI Challenges", icon: <Sparkles className="w-8 h-8" />, desc: "Time-boxed hackathons to solve complex optimization problems." },
    { title: "Business Workshops", icon: <Briefcase className="w-8 h-8" />, desc: "Learn ROI modeling and value proposition framing from MBAs." },
    { title: "Residency", icon: <Building2 className="w-8 h-8" />, desc: "8-week embedded engagement working directly with a client team." },
    { title: "Executive Reviews", icon: <Presentation className="w-8 h-8" />, desc: "Present your architecture to a board of simulated C-level executives." }
  ];

  return (
    <section ref={ref} className="py-32 bg-[#17181D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Immersive Experience</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">How You'll Learn</h3>
          <p className="text-xl text-muted-foreground">Theory doesn't survive contact with reality. We teach through high-stakes practical application.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group perspective"
            >
              <div className="relative h-64 w-full preserve-3d group-hover:my-rotate-y-180 transition-transform duration-700">
                
                {/* Front */}
                <div className="absolute inset-0 backface-hidden glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-border/50">
                  <div className="w-16 h-16 rounded-full bg-white/5 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {act.icon}
                  </div>
                  <h4 className="text-xl font-display font-bold text-white">{act.title}</h4>
                </div>

                {/* Back */}
                <div className="absolute inset-0 backface-hidden my-rotate-y-180 glass-card rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-primary/50 bg-primary/5">
                  <h4 className="text-xl font-display font-bold text-white mb-4">{act.title}</h4>
                  <p className="text-muted-foreground font-medium">{act.desc}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
