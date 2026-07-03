import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const SESSIONS = [
  {
    id: 1,
    month: 'JUL',
    day: 7,
    dayOfWeek: 'TUE',
    title: 'Agentic AI with LangChain (Americas / EMEA)',
    code: 'AI203a',
    codeColor: '#3b82f6',
    time: '7:30 PM IST',
    duration: '6 hrs',
    days: 'Tue, Jul 7 – Thu, Jul 9',
    instructor: 'Asfiya Khan',
    level: 'Senior FDE',
  },
  {
    id: 2,
    month: 'JUL',
    day: 10,
    dayOfWeek: 'FRI',
    title: 'Cloud Fundamentals for FDEs (Americas / EMEA)',
    code: 'CLD101',
    codeColor: '#10b981',
    time: '6:00 PM IST',
    duration: '4 hrs',
    days: 'Fri, Jul 10',
    instructor: 'Rahul Verma',
    level: 'Junior FDE',
  },
  {
    id: 3,
    month: 'JUL',
    day: 14,
    dayOfWeek: 'TUE',
    title: 'Agentic AI with Langflow (Americas / EMEA)',
    code: 'AI203b',
    codeColor: '#3b82f6',
    time: '7:30 PM IST',
    duration: '6 hrs',
    days: 'Tue, Jul 14 – Thu, Jul 16',
    instructor: 'Sai Dabbiru',
    level: 'Senior FDE',
  },
  {
    id: 4,
    month: 'JUL',
    day: 16,
    dayOfWeek: 'THU',
    title: 'Prompt Engineering Bootcamp',
    code: 'PMP101',
    codeColor: '#10b981',
    time: '6:00 PM IST',
    duration: '3 hrs',
    days: 'Thu, Jul 16',
    instructor: 'Meera Nair',
    level: 'Junior FDE',
  },
  {
    id: 5,
    month: 'JUL',
    day: 21,
    dayOfWeek: 'TUE',
    title: 'AI 101 - Developers (Americas/EMEA)',
    code: 'AI101',
    codeColor: '#22c55e',
    time: '7:30 PM IST',
    duration: '4 hrs',
    days: 'Tue, Jul 21 – Wed, Jul 22',
    instructor: 'Harsh Kumar',
    level: 'Junior FDE',
  },
  {
    id: 6,
    month: 'JUL',
    day: 28,
    dayOfWeek: 'TUE',
    title: 'Reference Architecture Workshop',
    code: 'ARC301',
    codeColor: '#6366f1',
    time: '7:00 PM IST',
    duration: '5 hrs',
    days: 'Tue, Jul 28 – Wed, Jul 29',
    instructor: 'Elena Rodriguez',
    level: 'Senior FDE',
  },
];

const DAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

function getMiniCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells: { day: number; currentMonth: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ day: prevMonthDays - i, currentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, currentMonth: true });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ day: d, currentMonth: false });
  }

  return cells;
}

const SESSION_DAYS_JULY = new Set(SESSIONS.map(s => s.day));
const TODAY_DAY = 3;
const TODAY_MONTH = 6; // July
const TODAY_YEAR = 2026;

type Level = 'All Levels' | 'Junior FDE' | 'Senior FDE';

const LEVEL_DOT: Record<Level, string> = {
  'All Levels': '#E56A1A',
  'Junior FDE': '#3b82f6',
  'Senior FDE': '#10b981',
};

export function LearningTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedLevel, setSelectedLevel] = useState<Level>('All Levels');
  const [calendarMonth, setCalendarMonth] = useState({ year: TODAY_YEAR, month: TODAY_MONTH });

  const calendarCells = getMiniCalendar(calendarMonth.year, calendarMonth.month);
  const isCurrentMonth =
    calendarMonth.year === TODAY_YEAR && calendarMonth.month === TODAY_MONTH;

  const filteredSessions =
    selectedLevel === 'All Levels'
      ? SESSIONS
      : SESSIONS.filter(s => s.level === selectedLevel);

  const levelCounts: Record<Level, number> = {
    'All Levels': SESSIONS.length,
    'Junior FDE': SESSIONS.filter(s => s.level === 'Junior FDE').length,
    'Senior FDE': SESSIONS.filter(s => s.level === 'Senior FDE').length,
  };

  function prevMonth() {
    setCalendarMonth(prev => {
      const d = new Date(prev.year, prev.month - 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }

  function nextMonth() {
    setCalendarMonth(prev => {
      const d = new Date(prev.year, prev.month + 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }

  return (
    <section ref={ref} className="py-32 bg-[#0F0F10]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Curriculum Calendar
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Filter by level and register for upcoming live sessions with FDE mentors.
          </p>
        </motion.div>

        {/* Main Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col lg:flex-row gap-6 items-start"
        >
          {/* Left Panel */}
          <div className="w-full lg:w-64 flex-shrink-0 space-y-4">
            {/* Mini Calendar */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <button
                  onClick={prevMonth}
                  className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-sm font-semibold text-foreground">
                  {MONTH_NAMES[calendarMonth.month]} {calendarMonth.year}
                </span>
                <button
                  onClick={nextMonth}
                  className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Day headers */}
              <div className="grid grid-cols-7 mb-1">
                {DAYS_SHORT.map(d => (
                  <div key={d} className="text-center text-[10px] font-medium text-muted-foreground py-1">
                    {d}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-y-0.5">
                {calendarCells.map((cell, idx) => {
                  const isToday = isCurrentMonth && cell.currentMonth && cell.day === TODAY_DAY;
                  const hasSession =
                    isCurrentMonth && cell.currentMonth && SESSION_DAYS_JULY.has(cell.day);
                  return (
                    <div
                      key={idx}
                      className={cn(
                        'text-center text-[11px] py-1 rounded font-medium leading-tight transition-colors select-none',
                        !cell.currentMonth && 'text-muted-foreground/25',
                        cell.currentMonth && !isToday && !hasSession &&
                          'text-foreground/70 hover:bg-primary/10 cursor-pointer',
                        hasSession && !isToday &&
                          'bg-primary/20 text-primary cursor-pointer',
                        isToday && 'bg-primary text-white cursor-pointer',
                      )}
                    >
                      {cell.day}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Level Filter */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-3.5 h-3.5 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                  Level
                </span>
              </div>
              <div className="space-y-1">
                {(['All Levels', 'Junior FDE', 'Senior FDE'] as Level[]).map(level => {
                  const isActive = selectedLevel === level;
                  return (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={cn(
                        'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-200',
                        isActive
                          ? 'bg-primary/15 text-foreground font-medium'
                          : 'text-muted-foreground hover:bg-white/5 hover:text-foreground',
                      )}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ backgroundColor: LEVEL_DOT[level] }}
                        />
                        <span>{level}</span>
                      </div>
                      <span className={cn('text-xs font-bold', isActive ? 'text-primary' : 'text-muted-foreground')}>
                        {levelCounts[level]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Panel: Session List */}
          <div className="flex-1 space-y-3 min-w-0">
            {filteredSessions.map((session, idx) => (
              <motion.div
                key={session.id}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
                transition={{ duration: 0.4, delay: 0.3 + idx * 0.07 }}
                className="glass-card rounded-2xl px-5 py-4 flex items-center gap-5 hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-200 group"
              >
                {/* Date Block */}
                <div className="flex-shrink-0 w-12 text-center">
                  <div className="text-[10px] font-bold text-primary uppercase tracking-wider leading-none">
                    {session.month}
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground leading-tight my-0.5">
                    {session.day}
                  </div>
                  <div className="text-[9px] font-semibold text-muted-foreground uppercase tracking-wide">
                    {session.dayOfWeek}
                  </div>
                </div>

                {/* Divider */}
                <div className="w-px h-10 bg-border/50 flex-shrink-0" />

                {/* Session Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h4 className="text-sm font-semibold text-foreground leading-snug">
                      {session.title}
                    </h4>
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0"
                      style={{
                        backgroundColor: `${session.codeColor}22`,
                        color: session.codeColor,
                      }}
                    >
                      {session.code}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 flex-shrink-0" />
                    <span>{session.time} · {session.duration} · {session.days}</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    by {session.instructor}
                  </div>
                </div>

                {/* Register Button */}
                <div className="flex-shrink-0">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border/60 text-xs font-semibold text-foreground hover:border-primary/50 hover:text-primary transition-all duration-200">
                    Register
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}

            {filteredSessions.length === 0 && (
              <div className="glass-card rounded-2xl px-5 py-12 text-center text-muted-foreground text-sm">
                No sessions found for this level.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
