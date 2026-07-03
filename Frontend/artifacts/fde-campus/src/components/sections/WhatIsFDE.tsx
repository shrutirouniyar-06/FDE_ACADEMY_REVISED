import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Briefcase, Lightbulb, Share2, Layers, LineChart, Code,
  Target, Search, Layout, Terminal, Rocket, DollarSign
} from 'lucide-react';

export function WhatIsFDE() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    { icon: <Briefcase />, title: "Business Strategy", desc: "Aligning AI initiatives with corporate objectives and P&L." },
    { icon: <Lightbulb />, title: "Problem Discovery", desc: "Identifying high-ROI opportunities for AI integration." },
    { icon: <Layers />, title: "System Architecture", desc: "Designing scalable, secure, and robust AI pipelines." },
    { icon: <Code />, title: "Model Engineering", desc: "Implementing and fine-tuning advanced machine learning models." },
    { icon: <Share2 />, title: "Stakeholder Comms", desc: "Translating complex technical concepts for executive boards." },
    { icon: <LineChart />, title: "Value Delivery", desc: "Ensuring deployed models drive measurable business outcomes." },
  ];

  const workflow = [
    { label: 'Business Challenge', icon: <Target className="w-6 h-6" />, color: '#3b82f6' },
    { label: 'Discovery',          icon: <Search className="w-6 h-6" />,  color: '#8b5cf6' },
    { label: 'Architecture',       icon: <Layout className="w-6 h-6" />,  color: '#06b6d4' },
    { label: 'Development',        icon: <Terminal className="w-6 h-6" />, color: '#10b981' },
    { label: 'Deployment',         icon: <Rocket className="w-6 h-6" />,  color: '#f59e0b' },
    { label: 'Business Value',     icon: <DollarSign className="w-6 h-6" />, color: '#E56A1A' },
  ];

  return (
    <section ref={ref} className="py-32 bg-background border-y border-border/50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">The Role</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">What is an FDE?</h3>
            
            <div className="glass-card p-8 rounded-3xl border-l-4 border-l-primary mb-8 hover:shadow-[0_0_40px_rgba(229,106,26,0.1)] transition-shadow duration-500">
              <p className="text-xl text-white/90 leading-relaxed">
                A Forward Deployed Engineer (FDE) is a specialized technologist who sits at the intersection of product, consulting, and engineering. They don't just write code—they solve critical business problems by deploying AI architectures into real-world enterprise environments.
              </p>
            </div>
            
            <div className="flex gap-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-4xl font-display font-bold text-white mb-1">3x</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Faster Time-to-Value</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-4xl font-display font-bold text-white mb-1">85%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Project Success Rate</div>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {responsibilities.map((resp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(229,106,26,0.08)] transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {resp.icon}
                </div>
                <h4 className="text-white font-bold mb-2">{resp.title}</h4>
                <p className="text-sm text-muted-foreground">{resp.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Professional Workflow Diagram */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 p-8 glass-card rounded-3xl hover:shadow-[0_0_50px_rgba(229,106,26,0.08)] transition-shadow duration-500"
        >
          <h4 className="text-center text-white font-bold text-xl mb-12 uppercase tracking-widest text-sm text-primary">
            The FDE Delivery Workflow
          </h4>
          
          <div className="flex flex-col md:flex-row items-center justify-between relative gap-6 md:gap-0">
            {/* Progress line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-border/50 -translate-y-1/2 z-0" />
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.6, delay: 0.9, ease: "easeInOut" }}
              className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 -translate-y-1/2 z-0 origin-left"
              style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #E56A1A)' }}
            />
            
            {workflow.map((step, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                transition={{ type: "spring", delay: 0.9 + (i * 0.18), stiffness: 200, damping: 15 }}
                className="relative z-10 flex flex-col items-center gap-3 group"
              >
                <motion.div
                  whileHover={{ scale: 1.15, y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-16 h-16 rounded-full bg-[#202229] border-2 flex items-center justify-center shadow-lg cursor-default"
                  style={{
                    borderColor: step.color,
                    boxShadow: `0 0 20px ${step.color}40`,
                  }}
                >
                  <span style={{ color: step.color }}>{step.icon}</span>
                </motion.div>
                <div className="text-xs font-bold text-white text-center w-20 leading-tight">
                  {step.label}
                </div>
                {/* Step number badge */}
                <div
                  className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow"
                  style={{ backgroundColor: step.color }}
                >
                  {i + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
