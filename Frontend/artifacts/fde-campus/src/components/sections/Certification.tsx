import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck, Award, Link as LinkIcon, Building } from 'lucide-react';

export function Certification() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    { icon: <Award />, title: "Industry Recognition", desc: "Recognized by top-tier consulting firms and enterprises." },
    { icon: <ShieldCheck />, title: "Digital Verification", desc: "Cryptographically verifiable credentials via Credly." },
    { icon: <LinkIcon />, title: "LinkedIn Integration", desc: "One-click add to your LinkedIn certifications profile." },
    { icon: <Building />, title: "Employer Network", desc: "Direct access to our hiring partner ecosystem." }
  ];

  return (
    <section ref={ref} className="py-32 bg-[#17181D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full" />
            <div className="relative glass-card p-2 rounded-2xl border border-primary/30">
              <div className="bg-[#0F0F10] border border-border/50 rounded-xl p-8 sm:p-12 text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-tr-full" />
                
                <h4 className="font-display font-bold text-2xl text-white mb-2 tracking-widest uppercase">FDE Academy</h4>
                <p className="text-primary text-sm font-semibold tracking-widest mb-12">By GlobalLogic</p>
                
                <p className="text-muted-foreground italic mb-4">This certifies that</p>
                <h3 className="text-4xl sm:text-5xl font-serif text-white mb-4 border-b border-border/50 pb-4 inline-block px-8">Your Name Here</h3>
                <p className="text-muted-foreground mb-12">has successfully completed all requirements for</p>
                
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary mb-12">Certified Senior Forward Deployed Engineer</h2>
                
                <div className="flex justify-between items-end px-8">
                  <div className="text-left">
                    <div className="w-24 border-b border-white/30 mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Date</p>
                  </div>
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(229,106,26,0.5)]">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="w-24 border-b border-white/30 mb-2" />
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">Director</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Certification</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">A Credential That Matters</h3>
            <p className="text-xl text-muted-foreground mb-12">
              Graduating from FDE Academy is not easy. That's why this certificate is recognized by top employers as a guarantee of both technical excellence and business acumen.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/5 text-primary flex items-center justify-center shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-bold mb-1">{benefit.title}</h5>
                    <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all active:scale-95">
                View Sample Certificate
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
