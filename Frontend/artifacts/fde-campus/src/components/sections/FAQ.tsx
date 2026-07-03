import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Search, Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data/mock';
import { cn } from '@/lib/utils';
import { Link } from 'wouter';

export function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const [activeCategory, setActiveCategory] = useState(FAQS[0].category);
  const [searchQuery, setSearchQuery] = useState('');
  const [openItem, setOpenItem] = useState<string | null>(null);

  const filteredCategories = FAQS.map(cat => {
    return {
      ...cat,
      items: cat.items.filter(item => 
        item.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    };
  }).filter(cat => cat.items.length > 0);

  const displayCategories = searchQuery ? filteredCategories : FAQS.filter(c => c.category === activeCategory);

  return (
    <section ref={ref} className="py-32 bg-[#17181D]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground mb-8">Everything you need to know about the FDE Campus programs.</p>
          
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search questions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-background border border-border rounded-full py-3 pl-12 pr-6 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
        </motion.div>

        {!searchQuery && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {FAQS.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat.category)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all",
                  activeCategory === cat.category 
                    ? "bg-primary text-white" 
                    : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-white"
                )}
              >
                {cat.category}
              </button>
            ))}
          </div>
        )}

        <div className="space-y-4">
          {displayCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              {searchQuery && <h4 className="text-primary font-bold mt-8 mb-4">{category.category}</h4>}
              
              {category.items.map((item, idx) => {
                const id = `${category.category}-${idx}`;
                const isOpen = openItem === id;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card rounded-2xl overflow-hidden border border-border/50 hover:border-border transition-colors"
                  >
                    <button
                      onClick={() => setOpenItem(isOpen ? null : id)}
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                    >
                      <span className="text-lg font-medium text-white pr-8">{item.q}</span>
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-primary shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-muted-foreground shrink-0" />
                      )}
                    </button>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          ))}

          {displayCategories.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No questions found matching "{searchQuery}". <br/>
              <Link href="/contact" className="text-primary hover:underline mt-2 inline-block">Contact us directly.</Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
