import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Search, Code2, Sparkles, Briefcase, Building2, Presentation,
  ArrowRight, X,
} from 'lucide-react';

const activities = [
  {
    title: 'Client Discovery',
    icon: Search,
    desc: 'Shadow actual FDEs during discovery calls with Fortune 500 clients.',
    details: [
      'Observe live C-suite discovery sessions alongside senior FDEs',
      'Learn to map business pain points to high-ROI AI opportunities',
      'Practice structured hypothesis formation and problem framing',
      'Build your own discovery playbook from real-world templates',
    ],
    outcome: 'Leave with a client-ready discovery framework you can use from day one.',
  },
  {
    title: 'Live Projects',
    icon: Code2,
    desc: 'Build and deploy models using real (anonymized) enterprise datasets.',
    details: [
      'Work with real enterprise datasets across retail, finance, and healthcare',
      'Deploy end-to-end ML pipelines in cloud production environments',
      'Receive mentor code review from senior engineers at every milestone',
      'Present your model results to simulated client stakeholders',
    ],
    outcome: 'A portfolio of three production-grade deployments ready to showcase.',
  },
  {
    title: 'AI Challenges',
    icon: Sparkles,
    desc: 'Time-boxed hackathons to solve complex optimization problems.',
    details: [
      '48-hour hackathons with real enterprise optimization problems',
      'Cross-functional teams simulating genuine client project conditions',
      'Present your solution live to an expert panel for scoring',
      'Learn to make high-quality decisions under time and data constraints',
    ],
    outcome: 'Sharpen your instincts for rapid, high-stakes AI problem solving.',
  },
  {
    title: 'Business Workshops',
    icon: Briefcase,
    desc: 'Learn ROI modeling and value proposition framing from MBAs.',
    details: [
      'ROI modeling and financial forecasting for AI transformation projects',
      'Value proposition canvas: translating technical wins into board language',
      'Business case development with ex-McKinsey and BCG consultants',
      'Stakeholder mapping and executive communication frameworks',
    ],
    outcome: 'Speak fluently in business terms — a rare skill among engineers.',
  },
  {
    title: 'Residency',
    icon: Building2,
    desc: '8-week embedded engagement working directly with a client team.',
    details: [
      '8 weeks embedded in a live client environment alongside real FDEs',
      'Daily stand-ups, sprint planning, and client-facing demos',
      'Take full ownership of a production feature from design to delivery',
      'Navigate real-world ambiguity, politics, and shifting priorities',
    ],
    outcome: 'Graduate with verifiable enterprise delivery experience on your résumé.',
  },
  {
    title: 'Executive Reviews',
    icon: Presentation,
    desc: 'Present your architecture to a board of simulated C-level executives.',
    details: [
      'Present full AI architecture and ROI case to a simulated C-suite board',
      'Field tough questions on feasibility, cost, timeline, and risk',
      'Receive structured feedback from CTO- and CFO-level industry leaders',
      'Refine your narrative and presentation confidence under real pressure',
    ],
    outcome: 'The ability to hold a room of executives and defend your technical vision.',
  },
];

interface CardProps {
  act: typeof activities[number];
  i: number;
  inView: boolean;
}

function ActivityCard({ act, i, inView }: CardProps) {
  const [open, setOpen] = useState(false);
  const Icon = act.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className="glass-card rounded-3xl p-8 flex flex-col relative border border-border/50 hover:border-primary/30 transition-colors duration-300"
    >
      {/* Learn More button – top-right */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="absolute top-5 right-5 flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/70 transition-colors"
      >
        {open ? (
          <>
            Close <X className="w-3.5 h-3.5" />
          </>
        ) : (
          <>
            Learn More
            <motion.span animate={{ x: open ? 3 : 0 }} transition={{ type: 'spring', stiffness: 300 }}>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.span>
          </>
        )}
      </button>

      {/* Icon */}
      <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-8 h-8" />
      </div>

      {/* Title */}
      <h4 className="text-xl font-display font-bold text-foreground mb-2 pr-20">{act.title}</h4>

      {/* Short desc — always visible */}
      <p className="text-muted-foreground text-sm leading-relaxed">{act.desc}</p>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-border/50">
              <ul className="space-y-2.5 mb-5">
                {act.details.map((d, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.06 }}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[5px] shrink-0" />
                    {d}
                  </motion.li>
                ))}
              </ul>
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Outcome</p>
                <p className="text-sm text-foreground leading-relaxed">{act.outcome}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function LearningActivities() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

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
          <p className="text-xl text-muted-foreground">
            Theory doesn't survive contact with reality. We teach through high-stakes practical application.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((act, i) => (
            <ActivityCard key={act.title} act={act} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
