import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Minus } from 'lucide-react';

export function ProgramComparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const rows = [
    { label: "Target Audience", j: "1-3 years exp", s: "3-7 years exp", a: "7+ years exp" },
    { label: "Duration", j: "6 months", s: "9 months", a: "12 months" },
    { label: "Learning Focus", j: "Technical Depth", s: "Full-stack Consulting", a: "Enterprise Strategy" },
    { label: "Client Projects", j: "3 Projects", s: "8 Modules + Residency", a: "Executive Engagements" },
    { label: "1-on-1 Mentorship", j: true, s: true, a: true },
    { label: "Leadership Track", j: false, s: true, a: true },
    { label: "Partner Opportunities", j: false, s: false, a: true }
  ];

  return (
    <section ref={ref} className="py-32 bg-[#17181D]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Compare Programs</h2>
          <p className="text-xl text-muted-foreground">Find the right path for your experience level.</p>
        </motion.div>

        <div className="overflow-x-auto pb-8">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left w-1/4"></th>
                <th className="p-6 text-center w-1/4 bg-[#202229] rounded-t-2xl border-b border-border">
                  <div className="text-xl font-bold text-white">Junior FDE</div>
                </th>
                {/* Senior FDE - recommended column with badge above */}
                <th className="p-0 text-center w-1/4 relative">
                  {/* Badge sits above the table header, outside the cell */}
                  <div className="flex flex-col">
                    <div className="flex justify-center pb-1">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
                        Recommended
                      </span>
                    </div>
                    <div className="p-6 bg-primary/10 border-t-2 border-l border-r border-primary rounded-t-2xl">
                      <div className="text-xl font-bold text-primary">Senior FDE</div>
                    </div>
                  </div>
                </th>
                <th className="p-6 text-center w-1/4 bg-[#202229] rounded-t-2xl border-b border-border">
                  <div className="text-xl font-bold text-white">Solutions Architect</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="p-6 text-left text-muted-foreground font-medium">{row.label}</td>
                  <td className="p-6 text-center bg-[#202229]/50">
                    {typeof row.j === 'boolean' ? (
                      row.j ? <Check className="w-5 h-5 text-white mx-auto" /> : <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                    ) : (
                      <span className="text-white font-medium">{row.j}</span>
                    )}
                  </td>
                  <td className="p-6 text-center bg-primary/5 border-l border-r border-primary/20">
                    {typeof row.s === 'boolean' ? (
                      row.s ? <Check className="w-5 h-5 text-primary mx-auto" /> : <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                    ) : (
                      <span className="text-white font-bold">{row.s}</span>
                    )}
                  </td>
                  <td className="p-6 text-center bg-[#202229]/50">
                    {typeof row.a === 'boolean' ? (
                      row.a ? <Check className="w-5 h-5 text-white mx-auto" /> : <Minus className="w-5 h-5 text-muted-foreground/30 mx-auto" />
                    ) : (
                      <span className="text-white font-medium">{row.a}</span>
                    )}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="p-6 text-left"></td>
                <td className="p-6 text-center bg-[#202229] rounded-b-2xl">
                  <button className="text-white hover:text-primary font-bold text-sm uppercase tracking-wider transition-colors">Learn More</button>
                </td>
                <td className="p-6 text-center bg-primary/10 border-b-2 border-l border-r border-primary rounded-b-2xl">
                  <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider transition-colors shadow-lg">Apply Now</button>
                </td>
                <td className="p-6 text-center bg-[#202229] rounded-b-2xl">
                  <button className="text-white hover:text-primary font-bold text-sm uppercase tracking-wider transition-colors">Learn More</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
