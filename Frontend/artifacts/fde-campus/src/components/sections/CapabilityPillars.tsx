import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { BrainCircuit, Cloud, LayoutTemplate, Handshake } from 'lucide-react';

export function CapabilityPillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  const pillars = [
    {
      title: "AI & GenAI Foundations",
      icon: <BrainCircuit className="w-7 h-7" />,
      tagline: "LLMs, RAG systems, and model fine-tuning for enterprise AI.",
      points: ["LLM Integration", "RAG Systems", "Prompt Engineering", "Model Fine-Tuning"],
      color: "#E56A1A",
    },
    {
      title: "Cloud & Modern Engineering",
      icon: <Cloud className="w-7 h-7" />,
      tagline: "Production-grade cloud infrastructure across AWS, GCP, and Azure.",
      points: ["AWS / GCP / Azure", "Kubernetes & Docker", "CI/CD Pipelines", "Microservices"],
      color: "#3b82f6",
    },
    {
      title: "Solution Design & Architecture",
      icon: <LayoutTemplate className="w-7 h-7" />,
      tagline: "Designing scalable, secure systems that survive real enterprise load.",
      points: ["System Design", "Scalability Patterns", "Security & Compliance", "Data Pipelines"],
      color: "#8b5cf6",
    },
    {
      title: "Consulting & Engagement",
      icon: <Handshake className="w-7 h-7" />,
      tagline: "Translate technical work into boardroom-ready ROI and stakeholder buy-in.",
      points: ["Stakeholder Management", "ROI Modeling", "Executive Storytelling", "Agile Delivery"],
      color: "#10b981",
    }
  ];

  return (
    <section ref={ref} className="py-32 bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Core Competencies</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">The 4 Pillars of an FDE</h3>
          <p className="text-xl text-muted-foreground">Hover any pillar to explore its curriculum.</p>
        </motion.div>

        {/* 4-column single row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer flex flex-col"
              style={{
                borderColor: hoveredPillar === i ? `${pillar.color}60` : undefined,
                boxShadow: hoveredPillar === i ? `0 0 36px ${pillar.color}20` : undefined,
              }}
              onMouseEnter={() => setHoveredPillar(i)}
              onMouseLeave={() => setHoveredPillar(null)}
            >
              {/* Icon + title */}
              <div className="flex flex-col items-center text-center px-6 pt-8 pb-5 gap-4">
                <motion.div
                  animate={hoveredPillar === i ? { scale: 1.1, y: -2 } : { scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                  style={{
                    backgroundColor: hoveredPillar === i ? pillar.color : `${pillar.color}20`,
                    color: hoveredPillar === i ? '#fff' : pillar.color,
                  }}
                >
                  {pillar.icon}
                </motion.div>
                <h4 className="text-base font-display font-bold text-white leading-snug">{pillar.title}</h4>

                {/* One-liner tagline — always visible */}
                <p className="text-xs text-muted-foreground leading-relaxed">{pillar.tagline}</p>
              </div>

              {/* Animated progress-style skill pills on hover */}
              <AnimatePresence initial={false}>
                {hoveredPillar === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-1">
                      <div className="h-px mb-4 opacity-20" style={{ backgroundColor: pillar.color }} />
                      <div className="space-y-2.5">
                        {pillar.points.map((point, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.07 }}
                          >
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-white/90 font-medium">{point}</span>
                            </div>
                            <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${80 + idx * 5}%` }}
                                transition={{ duration: 0.6, delay: idx * 0.07, ease: 'easeOut' }}
                                className="h-full rounded-full"
                                style={{ backgroundColor: pillar.color }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
