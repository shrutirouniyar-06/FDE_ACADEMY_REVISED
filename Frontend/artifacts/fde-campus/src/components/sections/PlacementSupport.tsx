import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Users, GraduationCap, TrendingUp } from 'lucide-react';

export function PlacementSupport() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const supports = [
    { icon: <FileText className="w-6 h-6" />, title: "Resume Building", desc: "Translate engineering tasks into ROI-driven business achievements on your resume." },
    { icon: <Users className="w-6 h-6" />, title: "Mock Interviews", desc: "Practice technical and consulting interviews with Principal FDEs." },
    { icon: <GraduationCap className="w-6 h-6" />, title: "Career Mentorship", desc: "1-on-1 strategy sessions to map out your career trajectory." },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Salary Negotiation", desc: "Coaching on how to position and negotiate your compensation package." },
  ];

  const stats = [
    { value: '94%', label: 'Placed within 3 months of graduation' },
    { value: '2.4x', label: 'Average salary increase post-certification' },
    { value: '30d', label: 'Average time to first interview offer' },
  ];

  return (
    <section ref={ref} className="py-32 bg-[#17181D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Placement Support</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Your Bridge to Top Employers</h3>
            <p className="text-xl text-muted-foreground mb-8">
              We don't just train you; we ensure you land the role. Our dedicated placement cell works with you from day one to align your projects with your target employers.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-5">
              {supports.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="bg-white/5 p-6 rounded-2xl border border-white/10 group hover:bg-white/10 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(229,106,26,0.08)] transition-all duration-300"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">{s.icon}</div>
                  <h4 className="text-white font-bold mb-2">{s.title}</h4>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Outcome stats */}
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                transition={{ delay: 0.35 + i * 0.12, type: 'spring' }}
                className="glass-card p-7 rounded-2xl flex items-center gap-6 group hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(229,106,26,0.12)] transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <p className="text-white font-medium text-lg leading-snug">{stat.label}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
              className="glass-card p-7 rounded-2xl border border-primary/20 bg-primary/5"
            >
              <h4 className="text-white font-bold text-lg mb-2">Dedicated Placement Cell</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our team actively engages with enterprise partners throughout your program — building your visibility before you even graduate. Every project you complete is portfolio-ready.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
