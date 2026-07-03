import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Code2, Rocket } from 'lucide-react';

export function Framework() {
  const [activeCircle, setActiveCircle] = useState<number | null>(null);

  const circles = [
    {
      id: 1,
      title: "Business Context",
      color: "bg-blue-500/20 border-blue-500/50",
      textColor: "text-blue-400",
      icon: <Building2 className="w-6 h-6" />,
      position: "left-[10%] top-[10%]",
      details: ["Customer Discovery", "ROI Analysis", "Stakeholder Management", "Domain Expertise"]
    },
    {
      id: 2,
      title: "Technology Expertise",
      color: "bg-purple-500/20 border-purple-500/50",
      textColor: "text-purple-400",
      icon: <Code2 className="w-6 h-6" />,
      position: "right-[10%] top-[10%]",
      details: ["AI/ML Engineering", "Cloud Architecture", "System Design", "Code Review"]
    },
    {
      id: 3,
      title: "Real-Time Execution",
      color: "bg-primary/20 border-primary/50",
      textColor: "text-primary",
      icon: <Rocket className="w-6 h-6" />,
      position: "left-1/2 -translate-x-1/2 bottom-[10%]",
      details: ["Live Deployments", "Production Support", "Rapid Prototyping", "Delivery"]
    }
  ];

  return (
    <section className="py-32 bg-[#17181D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">The FDE Advantage</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">The Golden Intersection</h3>
          <p className="text-xl text-muted-foreground">Mastering one domain makes you capable. Mastering the intersection makes you a Forward Deployed Engineer.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 min-h-[600px]">
          
          {/* Venn Diagram Container */}
          <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px]">
            {circles.map((circle) => (
              <motion.div
                key={circle.id}
                onHoverStart={() => setActiveCircle(circle.id)}
                onHoverEnd={() => setActiveCircle(null)}
                className={`absolute w-3/5 h-3/5 rounded-full border-2 backdrop-blur-sm cursor-pointer transition-all duration-500 flex items-center justify-center ${circle.color} ${circle.position} ${activeCircle === circle.id ? 'z-20 scale-105 opacity-100' : activeCircle === null ? 'z-10 opacity-70' : 'z-0 opacity-30 blur-sm'}`}
              >
                <div className={`flex flex-col items-center text-center p-4 ${circle.textColor}`}>
                  {circle.icon}
                  <span className="font-display font-bold mt-2 text-sm sm:text-base">{circle.title}</span>
                </div>
              </motion.div>
            ))}
            
            {/* Center Intersection Label */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none transition-all duration-500 ${activeCircle !== null ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
              <div className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm sm:text-base shadow-xl whitespace-nowrap">
                Forward Deployed Engineer
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="w-full lg:w-1/3 min-h-[300px] flex flex-col justify-center">
            {activeCircle === null ? (
              <div className="glass-card p-8 rounded-2xl border-dashed text-center">
                <p className="text-muted-foreground text-lg">Hover over any circle to explore the core pillars of an FDE.</p>
              </div>
            ) : (
              circles.map((circle) => (
                activeCircle === circle.id && (
                  <motion.div
                    key={`detail-${circle.id}`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="glass-card p-8 rounded-2xl border-l-4"
                    style={{ borderLeftColor: circle.id === 1 ? '#3b82f6' : circle.id === 2 ? '#a855f7' : 'hsl(var(--primary))' }}
                  >
                    <div className={`flex items-center gap-3 mb-6 ${circle.textColor}`}>
                      {circle.icon}
                      <h4 className="text-2xl font-display font-bold">{circle.title}</h4>
                    </div>
                    <ul className="space-y-4">
                      {circle.details.map((detail, idx) => (
                        <motion.li 
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center gap-3 text-white/90 text-lg"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                          {detail}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )
              ))
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
