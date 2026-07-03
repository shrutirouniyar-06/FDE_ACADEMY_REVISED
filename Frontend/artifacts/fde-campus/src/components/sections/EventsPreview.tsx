import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { EVENTS } from '@/data/mock';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

export function EventsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#17181D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Join Us</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Upcoming Events</h3>
            <p className="text-xl text-muted-foreground">Webinars, workshops, and info sessions to accelerate your AI journey.</p>
          </motion.div>

          <Link href="/events" className="hidden md:flex items-center gap-2 text-white hover:text-primary font-bold transition-colors">
            View All Events <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {EVENTS.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={cn(
                "glass-card p-8 rounded-3xl h-full flex flex-col transition-all duration-300",
                event.status === 'past' ? 'opacity-60 grayscale hover:grayscale-0' : 'hover:-translate-y-2 hover:border-primary/50'
              )}>
                <div className="flex items-center justify-between mb-6">
                  <span className={cn(
                    "text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full",
                    event.type === 'Webinar' ? "bg-blue-500/10 text-blue-400" :
                    event.type === 'Workshop' ? "bg-purple-500/10 text-purple-400" :
                    "bg-primary/10 text-primary"
                  )}>
                    {event.type}
                  </span>
                  {event.status === 'past' && (
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Past</span>
                  )}
                </div>
                
                <h4 className="text-2xl font-display font-bold text-white mb-6">
                  {event.title}
                </h4>
                
                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5" />
                    <span>6:00 PM EST</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5" />
                    <span>Virtual / Zoom</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-6 border-t border-border/50">
                  {event.status === 'upcoming' ? (
                    <button className="w-full bg-white/10 hover:bg-primary text-white py-3 rounded-xl font-bold transition-colors">
                      Register Now
                    </button>
                  ) : (
                    <button className="w-full bg-transparent border border-white/20 hover:bg-white/5 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                      View Recording <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
