import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Briefcase, Lightbulb, Share2, Layers, LineChart, Code,
  Target, Search, Layout, Terminal, Rocket, DollarSign,
} from 'lucide-react';

const responsibilities = [
  { icon: Briefcase, title: 'Business Strategy',   desc: 'Aligning AI initiatives with corporate objectives and P&L.' },
  { icon: Lightbulb, title: 'Problem Discovery',   desc: 'Identifying high-ROI opportunities for AI integration.' },
  { icon: Layers,    title: 'System Architecture', desc: 'Designing scalable, secure, and robust AI pipelines.' },
  { icon: Code,      title: 'Model Engineering',   desc: 'Implementing and fine-tuning advanced machine learning models.' },
  { icon: Share2,    title: 'Stakeholder Comms',   desc: 'Translating complex technical concepts for executive boards.' },
  { icon: LineChart, title: 'Value Delivery',      desc: 'Ensuring deployed models drive measurable business outcomes.' },
];

const workflow = [
  {
    label: 'Business Challenge',
    icon: Target,
    color: '#3b82f6',
    details: [
      'Understand the client's strategic objectives and KPIs',
      'Map executive pain points to potential AI opportunities',
      'Assess feasibility, scope, and expected business impact',
      'Align stakeholders on success criteria before work begins',
    ],
  },
  {
    label: 'Discovery',
    icon: Search,
    color: '#8b5cf6',
    details: [
      'Conduct structured stakeholder interviews across business units',
      'Perform data audits to evaluate quality, volume, and accessibility',
      'Build an ROI estimation model for proposed AI solutions',
      'Document findings in a discovery brief for sign-off',
    ],
  },
  {
    label: 'Architecture',
    icon: Layout,
    color: '#06b6d4',
    details: [
      'Design end-to-end AI pipeline with appropriate model selection',
      'Define data flows, system boundaries, and integration points',
      'Choose cloud infrastructure and MLOps tooling',
      'Produce an architecture decision record (ADR) for review',
    ],
  },
  {
    label: 'Development',
    icon: Terminal,
    color: '#10b981',
    details: [
      'Build, train, and iterate models using real enterprise data',
      'Implement MLOps practices: CI/CD for models, experiment tracking',
      'Conduct peer code reviews and maintain engineering standards',
      'Run unit tests, integration tests, and model validation suites',
    ],
  },
  {
    label: 'Deployment',
    icon: Rocket,
    color: '#f59e0b',
    details: [
      'Deploy to production with blue-green or canary release strategy',
      'Set up monitoring, alerting, and drift detection pipelines',
      'Conduct A/B testing to validate model performance vs baseline',
      'Handoff documentation and runbooks to client engineering teams',
    ],
  },
  {
    label: 'Business Value',
    icon: DollarSign,
    color: '#E56A1A',
    details: [
      'Measure actual ROI against the estimates from discovery phase',
      'Present outcomes to C-suite with clear before/after metrics',
      'Identify the next highest-value AI initiative to pursue',
      'Publish a case study for internal knowledge sharing',
    ],
  },
];

export function WhatIsFDE() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const active = activeStep !== null ? workflow[activeStep] : null;

  return (
    <section ref={ref} className="py-32 bg-background border-y border-border/50 relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">The Role</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">What is an FDE?</h3>

            <div className="glass-card p-8 rounded-3xl border-l-4 border-l-primary mb-8 hover:shadow-[0_0_40px_rgba(229,106,26,0.1)] transition-shadow duration-500">
              <p className="text-lg text-foreground/90 leading-relaxed">
                A Forward Deployed Engineer (FDE) is a specialized technologist who sits at the intersection of
                product, consulting, and engineering. They don't just write code — they solve critical business
                problems by deploying AI architectures into real-world enterprise environments.
              </p>
            </div>

            <div className="flex gap-8">
              {[
                { value: '3x',  label: 'Faster Time-to-Value' },
                { value: '85%', label: 'Project Success Rate' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="text-4xl font-display font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column — responsibility cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {responsibilities.map((resp, i) => {
              const Icon = resp.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-foreground/5 border border-border p-6 rounded-2xl hover:bg-foreground/10 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_24px_rgba(229,106,26,0.08)] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-foreground font-bold mb-2">{resp.title}</h4>
                  <p className="text-sm text-muted-foreground">{resp.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── FDE Delivery Workflow ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 p-8 glass-card rounded-3xl hover:shadow-[0_0_50px_rgba(229,106,26,0.08)] transition-shadow duration-500"
        >
          <p className="text-center text-xs font-bold text-primary uppercase tracking-widest mb-10">
            The FDE Delivery Workflow
          </p>

          {/* Step buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between relative gap-6 md:gap-0">
            {/* Track lines */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-border/50 z-0" />
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.6, delay: 0.9, ease: 'easeInOut' }}
              className="hidden md:block absolute top-8 left-0 w-full h-0.5 z-0 origin-left"
              style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4, #10b981, #f59e0b, #E56A1A)' }}
            />

            {workflow.map((step, i) => {
              const Icon = step.icon;
              const isActive = activeStep === i;
              return (
                <motion.div
                  key={i}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', delay: 0.9 + i * 0.18, stiffness: 200, damping: 15 }}
                  className="relative z-10 flex flex-col items-center gap-3"
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setActiveStep(isActive ? null : i)}
                >
                  <motion.button
                    whileHover={{ scale: 1.15, y: -4 }}
                    animate={isActive ? { scale: 1.12, y: -4 } : { scale: 1, y: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer relative focus:outline-none"
                    style={{
                      background: isActive ? step.color : '#202229',
                      border: `2px solid ${step.color}`,
                      boxShadow: isActive
                        ? `0 0 28px ${step.color}80`
                        : `0 0 20px ${step.color}40`,
                    }}
                    aria-label={step.label}
                  >
                    <Icon
                      className="w-6 h-6 transition-colors duration-200"
                      style={{ color: isActive ? '#fff' : step.color }}
                    />
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                  </motion.button>
                  <div
                    className="text-xs font-bold text-center w-20 leading-tight transition-colors duration-200"
                    style={{ color: isActive ? step.color : undefined }}
                  >
                    <span className={isActive ? '' : 'text-foreground/70'}>{step.label}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ── Detail dialog — appears below, inside the card ── */}
          <AnimatePresence mode="wait">
            {active && (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 32 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: `${active.color}40`,
                    background: `${active.color}0d`,
                  }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: `${active.color}25` }}
                    >
                      <active.icon className="w-5 h-5" style={{ color: active.color }} />
                    </div>
                    <h5
                      className="text-base font-display font-bold"
                      style={{ color: active.color }}
                    >
                      {active.label}
                    </h5>
                  </div>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {active.details.map((d, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.07 }}
                        className="flex items-start gap-2.5 text-sm text-foreground/80"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full mt-[5px] shrink-0"
                          style={{ backgroundColor: active.color }}
                        />
                        {d}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hint when nothing is hovered */}
          <AnimatePresence>
            {activeStep === null && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="text-center text-xs text-muted-foreground mt-6"
              >
                Hover or tap a step to see what happens at each stage
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
