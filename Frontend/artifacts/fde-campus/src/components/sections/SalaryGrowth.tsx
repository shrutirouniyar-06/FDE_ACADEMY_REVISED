import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { year: 'Year 0', pre: 15, post: 15 },
  { year: 'Year 1', pre: 17, post: 25 },
  { year: 'Year 2', pre: 18, post: 35 },
  { year: 'Year 3', pre: 20, post: 50 },
  { year: 'Year 4', pre: 22, post: 70 },
  { year: 'Year 5', pre: 25, post: 95 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#202229] border border-[#2D3138] rounded-xl p-4 shadow-xl">
        <p className="text-white font-bold mb-2">{label}</p>
        {payload.map((entry: any, i: number) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
            <span className="text-sm text-white/80">{entry.name}:</span>
            <span className="text-sm font-bold text-white">{entry.value}L</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const CustomDot = ({ cx, cy, value, color }: any) => {
  if (!value) return null;
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill={color} stroke="rgba(0,0,0,0.3)" strokeWidth={2} />
      <text
        x={cx}
        y={cy - 12}
        textAnchor="middle"
        fill={color}
        fontSize={11}
        fontWeight="bold"
      >
        {value}L
      </text>
    </g>
  );
};

export function SalaryGrowth() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Invest in Your Growth</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">Exponential Career Trajectory</h3>
            <p className="text-xl text-muted-foreground mb-8">
              FDEs command a premium in the market because they tie their technical output directly to business revenue. The ROI of this program is often realized within the first 6 months.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-primary">
                <div className="text-3xl font-display font-bold text-foreground mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Average Salary Hike</div>
              </div>
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-white">
                <div className="text-3xl font-display font-bold text-foreground mb-1">18mo</div>
                <div className="text-sm text-muted-foreground">To First Promotion</div>
              </div>
            </div>
            
            <button className="bg-white/10 hover:bg-white/20 text-foreground px-6 py-3 rounded-xl font-semibold transition-colors">
              View Detailed Placement Report
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-4 md:p-8 rounded-3xl"
          >
            <h4 className="text-foreground font-bold mb-2 text-center">Projected Compensation Growth</h4>
            <p className="text-center text-xs text-muted-foreground mb-6">Annual Package in Lakhs Per Annum</p>
            <div className="h-[320px] md:h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 28, right: 16, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorPost" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#E56A1A" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#E56A1A" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPre" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#A8ADB7" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#A8ADB7" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2D3138" vertical={false} />
                  <XAxis dataKey="year" stroke="#A8ADB7" tick={{ fill: '#A8ADB7', fontSize: 12 }} />
                  <YAxis
                    stroke="#A8ADB7"
                    tick={{ fill: '#A8ADB7', fontSize: 11 }}
                    tickFormatter={(v) => `${v}L`}
                    ticks={[20, 40, 60, 80, 100]}
                    domain={[10, 110]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="pre"
                    name="Standard Engineer Path"
                    stroke="#A8ADB7"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorPre)"
                    dot={<CustomDot color="#A8ADB7" />}
                    activeDot={{ r: 6, fill: '#A8ADB7' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="post"
                    name="FDE Path"
                    stroke="#E56A1A"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorPost)"
                    dot={<CustomDot color="#E56A1A" />}
                    activeDot={{ r: 7, fill: '#E56A1A' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-sm text-foreground font-medium">FDE Path</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#A8ADB7]" />
                <span className="text-sm text-foreground font-medium">Standard Path</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
