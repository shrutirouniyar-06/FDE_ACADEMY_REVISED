import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Microscope, Zap, ShieldAlert, Presentation, Trophy, Users } from 'lucide-react';

const activities = [
  {
    icon: Users,
    week: 'Week 1',
    title: 'Discovery Workshop Simulation',
    desc: 'Step into a live client scenario as the FDE on day one. Run a structured discovery workshop with simulated cross-functional stakeholders, map pain points to AI opportunities, and present a validated problem statement — all under time pressure.',
    color: '#3b82f6',
  },
  {
    icon: Zap,
    week: 'Week 2',
    title: 'AI Build Sprint',
    desc: 'A 48-hour hands-on sprint to build a working GenAI prototype from scratch. Teams receive a real-world use case brief, access to enterprise data, and must deliver a functional RAG application with evaluation metrics by the end of the sprint.',
    color: '#e5661a',
  },
  {
    icon: Presentation,
    week: 'Week 3',
    title: 'Architecture Defense Panel',
    desc: 'Design a full-stack cloud-native architecture for an enterprise AI use case and defend every decision before a panel of senior architects. Adversarial questioning on trade-offs, security, scalability, and cost is standard.',
    color: '#8b5cf6',
  },
  {
    icon: ShieldAlert,
    week: 'Week 5',
    title: 'Production Crisis Drill',
    desc: 'A live fire exercise: a production AI system is down, stakeholders are escalating, and the business impact is mounting. Participants must triage, communicate, remediate, and run a blameless post-mortem — all in real time.',
    color: '#ef4444',
  },
  {
    icon: Microscope,
    week: 'Week 6',
    title: 'Executive Transformation Pitch',
    desc: "Present a 12-month AI transformation roadmap to a simulated C-suite panel. Your pitch must cover strategy, ROI milestones, risk mitigation, and change management — and survive a tough Q&A from 'executives' with competing priorities.",
    color: '#10b981',
  },
  {
    icon: Trophy,
    week: 'Week 8',
    title: 'Capstone Simulation & Certification Board',
    desc: 'The culminating challenge: synthesise all program learnings into a transformation vision for a real client context. Defend it before a panel of industry leaders and GlobalLogic executives to earn your Senior FDE certification.',
    color: '#f59e0b',
  },
];

export function SignatureActivities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">6-Week FDE Journey</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Signature Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Beyond classroom learning, every participant engages in experiential activities
            designed to simulate the most demanding real-world client environments and business challenges.
          </p>
        </motion.div>

        {/* Activity grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, i) => {
            const Icon = act.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-2xl p-7 flex flex-col gap-5 group hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
                style={{ '--act-color': act.color } as React.CSSProperties}
              >
                {/* Icon + week */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${act.color}22`, border: `1px solid ${act.color}44` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: act.color }} />
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: `${act.color}15`, color: act.color, border: `1px solid ${act.color}30` }}
                  >
                    {act.week}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-display font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                    {act.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{act.desc}</p>
                </div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 + 0.4 }}
                  className="h-[2px] rounded-full origin-left mt-auto"
                  style={{ background: `linear-gradient(to right, ${act.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
