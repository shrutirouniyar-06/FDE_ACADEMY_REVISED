import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { SUCCESS_STORIES } from '@/data/mock';
import useEmblaCarousel from 'embla-carousel-react';
import { Play } from 'lucide-react';

export function SuccessStories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef] = useEmblaCarousel({ align: 'start', loop: true });

  return (
    <section ref={ref} className="py-32 bg-[#17181D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">From Engineers to Leaders</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">Success Stories</h3>
          <p className="text-xl text-muted-foreground">Discover how our alumni transformed their careers and the enterprises they serve.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer border border-border/50 shadow-2xl"
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10" />
            <img 
              src="/attached_assets/generated_images/mentor-5.jpg" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover aspect-video lg:aspect-auto group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(229,106,26,0.5)]">
                <Play className="w-8 h-8 ml-1" />
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 z-30 bg-gradient-to-t from-black via-black/80 to-transparent w-full">
              <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider mb-3 inline-block">Featured Alumni</span>
              <h4 className="text-3xl font-display font-bold text-white">How I Led a $50M AI Transformation</h4>
              <p className="text-white/80 mt-2">Rahul Gupta, Technology VP</p>
            </div>
          </motion.div>

          <div className="overflow-hidden lg:col-span-1" ref={emblaRef}>
            <div className="flex lg:flex-col h-full gap-6 lg:gap-0">
              {SUCCESS_STORIES.slice(0, 3).map((story, idx) => (
                <div key={idx} className="flex-[0_0_100%] lg:flex-[1_1_auto] lg:mb-6 min-w-0">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="glass-card p-6 rounded-2xl h-full flex flex-col justify-between"
                  >
                    <p className="text-white/90 italic mb-6">"{story.quote}"</p>
                    <div className="flex items-center gap-4">
                      <img src={story.avatar} alt={story.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                        <h5 className="text-white font-bold">{story.name}</h5>
                        <p className="text-sm text-primary">{story.role}</p>
                        <p className="text-xs text-muted-foreground">Prev: {story.previousRole}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
