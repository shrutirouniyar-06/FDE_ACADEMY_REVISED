import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PROJECTS } from '@/data/mock';

export function EnterpriseProjects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Live Deployments</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Real Enterprise Projects</h3>
          <p className="text-xl text-muted-foreground">You won't just build toy projects. You will deploy solutions that solve million-dollar problems.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card rounded-3xl p-8 flex flex-col group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground bg-white/5 px-3 py-1 rounded-full mb-4 inline-block border border-white/10">
                  {project.client} Client
                </span>
                <h4 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors">{project.title}</h4>
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Business Impact</p>
                  <p className="text-xl font-bold text-white">{project.impact}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary border border-primary/20 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">Outcome</p>
                  <p className="text-white/90">{project.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
