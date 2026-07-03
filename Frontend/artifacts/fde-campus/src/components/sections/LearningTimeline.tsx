import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, CalendarDays } from 'lucide-react';
import { cn } from '@/lib/utils';

const COHORT_CALENDAR = [
  { month: 'January 2025', batch: 'Cohort 12', spots: 12, type: 'Senior FDE', status: 'Open' },
  { month: 'March 2025',   batch: 'Cohort 13', spots: 8,  type: 'Junior FDE', status: 'Open' },
  { month: 'April 2025',   batch: 'Cohort 14', spots: 5,  type: 'Solutions Architect', status: 'Limited' },
  { month: 'June 2025',    batch: 'Cohort 15', spots: 15, type: 'Senior FDE', status: 'Open' },
  { month: 'August 2025',  batch: 'Cohort 16', spots: 10, type: 'Junior FDE', status: 'Upcoming' },
  { month: 'October 2025', batch: 'Cohort 17', spots: 12, type: 'Senior FDE', status: 'Upcoming' },
];

const statusColors: Record<string, string> = {
  'Open': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Limited': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Upcoming': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
};

const typeColors: Record<string, string> = {
  'Senior FDE': '#E56A1A',
  'Junior FDE': '#3b82f6',
  'Solutions Architect': '#8b5cf6',
};

export function LearningTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [calView, setCalView] = useState(0);

  const visibleCohorts = COHORT_CALENDAR.slice(calView, calView + 3);

  return (
    <section ref={ref} className="py-32 bg-[#0F0F10]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Upcoming Cohorts</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Curriculum Calendar</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Filter by level and register for upcoming live sessions with FDE mentors.
          </p>
        </motion.div>

        {/* Curriculum Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 border border-border/30"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <CalendarDays className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xl font-display font-bold text-white">Cohort Start Dates</h4>
                <p className="text-sm text-muted-foreground">Reserve your seat for the next intake</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCalView(v => Math.max(0, v - 1))}
                disabled={calView === 0}
                className={cn("w-8 h-8 rounded-full border border-border/50 flex items-center justify-center transition-colors",
                  calView === 0 ? "text-muted-foreground/30 cursor-not-allowed" : "text-white hover:border-primary/50 hover:text-primary")}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCalView(v => Math.min(COHORT_CALENDAR.length - 3, v + 1))}
                disabled={calView >= COHORT_CALENDAR.length - 3}
                className={cn("w-8 h-8 rounded-full border border-border/50 flex items-center justify-center transition-colors",
                  calView >= COHORT_CALENDAR.length - 3 ? "text-muted-foreground/30 cursor-not-allowed" : "text-white hover:border-primary/50 hover:text-primary")}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {visibleCohorts.map((cohort, idx) => (
              <motion.div
                key={calView + idx}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl border border-border/40 p-5 bg-white/5 hover:border-primary/30 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div
                    className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                    style={{ backgroundColor: typeColors[cohort.type] || '#E56A1A' }}
                  />
                  <span className={cn("text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border", statusColors[cohort.status])}>
                    {cohort.status}
                  </span>
                </div>
                <div className="text-white font-bold text-lg">{cohort.month}</div>
                <div className="text-xs text-muted-foreground mt-1 mb-3">{cohort.batch}</div>
                <div
                  className="text-xs font-semibold px-2 py-1 rounded-lg inline-block"
                  style={{ backgroundColor: `${typeColors[cohort.type] || '#E56A1A'}20`, color: typeColors[cohort.type] || '#E56A1A' }}
                >
                  {cohort.type}
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{cohort.spots} seats remaining</span>
                  <button className="text-xs text-primary font-semibold hover:underline">Reserve →</button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Color legend */}
          <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-border/30">
            {Object.entries(typeColors).map(([type, color]) => (
              <div key={type} className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
                <span className="text-xs text-muted-foreground">{type}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
