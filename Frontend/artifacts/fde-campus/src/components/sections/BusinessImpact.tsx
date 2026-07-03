import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Rocket, Gauge, Handshake, Lightbulb, TrendingUp, Package, Star, Target, Users, FlaskConical, Megaphone, Route } from 'lucide-react';

const impacts = [
  { icon: Rocket,     text: 'Accelerate AI-led transformation programs' },
  { icon: Gauge,      text: 'Improve speed from idea to implementation' },
  { icon: Handshake,  text: 'Enhance customer engagement and solution co-creation' },
  { icon: Lightbulb,  text: 'Drive innovation within delivery teams' },
  { icon: TrendingUp, text: 'Improve adoption of AI-powered solutions' },
  { icon: Package,    text: 'Create reusable assets, accelerators, and best practices' },
  { icon: Star,       text: 'Strengthen positioning as an AI-first organisation' },
];

const leaderActions = [
  { icon: Target,       text: 'Identify high-value business problems suitable for FDE engagement' },
  { icon: Users,        text: 'Embed FDEs within strategic client programs and transformation initiatives' },
  { icon: Handshake,    text: 'Provide opportunities for direct stakeholder and customer interaction' },
  { icon: FlaskConical, text: 'Encourage experimentation with measurable business outcomes' },
  { icon: Megaphone,    text: 'Sponsor innovation initiatives that benefit from AI-led approaches' },
  { icon: Route,        text: 'Create pathways for FDEs to influence solutioning and delivery decisions' },
];

function ImpactItem({ icon: Icon, text, i, inView }: { icon: React.FC<{ className?: string }>; text: string; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
      transition={{ duration: 0.45, delay: i * 0.08 }}
      className="flex items-start gap-3 group"
    >
      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-200">{text}</p>
    </motion.div>
  );
}

export function BusinessImpact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-[#0a0a0b]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">Why It Matters</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Expected Business Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            As FDE-certified professionals are deployed into client engagements and strategic initiatives,
            the impact compounds across the organisation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Expected impact */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card rounded-3xl p-10"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-10 bg-primary rounded-full" />
              <div>
                <h3 className="text-2xl font-display font-bold text-white">Organisational Impact</h3>
                <p className="text-sm text-muted-foreground mt-1">What FDEs unlock at scale</p>
              </div>
            </div>
            <div className="space-y-5">
              {impacts.map((item, i) => (
                <ImpactItem key={i} icon={item.icon as React.FC<{ className?: string }>} text={item.text} i={i} inView={inView} />
              ))}
            </div>
          </motion.div>

          {/* Right: Role of delivery leaders */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <div className="glass-card rounded-3xl p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-10 bg-amber-400 rounded-full" />
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">Role of Delivery Leaders</h3>
                  <p className="text-sm text-muted-foreground mt-1">How leaders amplify FDE impact</p>
                </div>
              </div>
              <div className="space-y-5">
                {leaderActions.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                    transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-amber-400/20 transition-colors">
                      <item.icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <p className="text-white/80 leading-relaxed group-hover:text-white transition-colors duration-200">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pull quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative glass-card rounded-2xl p-8 border-l-4 border-primary"
            >
              <p className="text-white/90 text-lg italic leading-relaxed">
                "The first FDE cohort represents an important step in building our AI-first workforce.
                With active sponsorship from business and delivery leaders, these professionals can become
                catalysts for innovation, transformation, and client value creation."
              </p>
              <footer className="mt-4 text-sm text-primary font-semibold">— FDE Academy, GlobalLogic</footer>
            </motion.blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
