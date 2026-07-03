import { motion, useInView } from 'framer-motion';
import { useRef, useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Linkedin, Mail } from 'lucide-react';
import { MENTORS } from '@/data/mock';

export function Mentors() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    loop: true,
    dragFree: true,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section ref={ref} className="py-32 bg-[#17181D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Learn From The Best</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Elite Mentorship</h3>
            <p className="text-xl text-muted-foreground">Guidance from industry veterans who have led AI transformations at Fortune 500s.</p>
          </motion.div>

          <div className="flex gap-4">
            <button 
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-white hover:bg-primary hover:border-primary disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-border transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-white hover:bg-primary hover:border-primary disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:border-border transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="overflow-hidden" 
          ref={emblaRef}
        >
          <div className="flex -ml-6">
            {MENTORS.map((mentor, idx) => (
              <div key={mentor.id} className="min-w-0 pl-6 flex-[1_0_100%] sm:flex-[1_0_50%] lg:flex-[1_0_33.333%]">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_16px_40px_rgba(229,106,26,0.12)] transition-all duration-400"
                >
                  <div className="p-6 relative">
                    {/* Action buttons */}
                    <div className="flex justify-end gap-2 mb-4">
                      <a
                        href={`mailto:${mentor.email}`}
                        className="w-11 h-11 rounded-full bg-[#202229] border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary hover:scale-110 shadow-lg transition-all duration-300"
                        aria-label={`Email ${mentor.name}`}
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                      <button className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white hover:scale-110 hover:bg-primary/90 shadow-lg transition-all duration-300">
                        <Linkedin className="w-5 h-5 fill-current" />
                      </button>
                    </div>
                    
                    <h4 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary transition-colors duration-300">{mentor.name}</h4>
                    <p className="text-primary font-medium mb-1">{mentor.role} &bull; {mentor.experience}</p>
                    <p className="text-xs text-muted-foreground mb-4 truncate">{mentor.email}</p>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{mentor.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {mentor.expertise.map((tag, tidx) => (
                        <span key={tidx} className="text-xs bg-white/5 border border-white/10 text-muted-foreground px-3 py-1 rounded-full group-hover:border-primary/30 group-hover:text-white/80 transition-all duration-300">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
