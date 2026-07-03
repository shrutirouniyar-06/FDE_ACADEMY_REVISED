import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { BLOGS } from '@/data/mock';
import { Link } from 'wouter';

export function BlogPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-[#0F0F10]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="max-w-2xl"
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Insights</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Latest Thinking</h3>
            <p className="text-xl text-muted-foreground">Articles and field reports from our mentors and alumni.</p>
          </motion.div>

          <Link href="/blogs" className="hidden md:flex items-center gap-2 text-white hover:text-primary font-bold transition-colors">
            View All Blogs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {BLOGS.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="glass-card p-8 rounded-3xl h-full flex flex-col border border-border/50 hover:border-primary/50 transition-colors duration-300">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {blog.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{blog.date}</span>
                </div>
                
                <h4 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {blog.title}
                </h4>
                
                <p className="text-muted-foreground mb-8 flex-1">
                  {blog.excerpt}
                </p>
                
                <div className="flex items-center gap-2 text-white font-bold mt-auto group-hover:text-primary transition-colors">
                  Read More <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-white hover:text-primary font-bold transition-colors">
            View All Blogs <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
