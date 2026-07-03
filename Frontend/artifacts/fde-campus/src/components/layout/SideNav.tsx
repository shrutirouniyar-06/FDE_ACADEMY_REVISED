import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import {
  Home, Info, BookOpen, Users, Map, Star, FileText, Calendar,
  Mail, Send, ChevronDown, ChevronRight, X, Layers
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SideNavProps {
  open: boolean;
  onClose: () => void;
}

const navSections = [
  {
    label: 'Main',
    items: [
      { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
      { name: 'About', href: '/about', icon: <Info className="w-4 h-4" /> },
    ],
  },
  {
    label: 'Programs',
    items: [
      { name: 'All Programs', href: '/programs', icon: <Layers className="w-4 h-4" /> },
      { name: 'Junior FDE', href: '/programs/junior-fde', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Senior FDE', href: '/programs/senior-fde', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Solutions Architect', href: '/programs/solutions-architect', icon: <BookOpen className="w-4 h-4" /> },
    ],
  },
  {
    label: 'Community',
    items: [
      { name: 'Mentors', href: '/mentors', icon: <Users className="w-4 h-4" /> },
      { name: 'Success Stories', href: '/success-stories', icon: <Star className="w-4 h-4" /> },
    ],
  },
  {
    label: 'Resources',
    items: [
      { name: 'Career Roadmaps', href: '/career-roadmaps', icon: <Map className="w-4 h-4" /> },
      { name: 'Blogs', href: '/blogs', icon: <FileText className="w-4 h-4" /> },
      { name: 'Events', href: '/events', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
    ],
  },
];

export function SideNav({ open, onClose }: SideNavProps) {
  const [location] = useLocation();
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (label: string) => {
    setCollapsedSections(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop — above header (z-50) */}
          <motion.div
            key="sidenav-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm"
          />

          {/* Panel — highest layer */}
          <motion.aside
            key="sidenav-panel"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            className="fixed top-0 left-0 h-full w-72 z-[60] flex flex-col shadow-2xl overflow-hidden"
            style={{ background: 'var(--sidenav-bg, hsl(var(--background)))', borderRight: '1px solid hsl(var(--border))' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border/50">
              <div className="flex items-center gap-3">
                <img src="/images/gl-logo.png" alt="GlobalLogic" className="w-8 h-8 rounded-lg object-cover" />
                <div>
                  <div className="text-sm font-display font-bold text-foreground leading-tight">FDE Campus</div>
                  <div className="text-[10px] text-primary uppercase tracking-widest font-semibold">by GlobalLogic</div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                aria-label="Close navigation"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav sections */}
            <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
              {navSections.map((section) => {
                const isCollapsed = collapsedSections[section.label];
                return (
                  <div key={section.label} className="mb-2">
                    <button
                      onClick={() => toggleSection(section.label)}
                      className="w-full flex items-center justify-between px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {section.label}
                      <motion.div animate={{ rotate: isCollapsed ? -90 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="w-3 h-3" />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {!isCollapsed && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <div className="py-1 space-y-0.5">
                            {section.items.map((item) => {
                              const active = location === item.href || (item.href !== '/' && location.startsWith(item.href));
                              return (
                                <Link
                                  key={item.href}
                                  href={item.href}
                                  onClick={onClose}
                                  className={cn(
                                    'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group',
                                    active
                                      ? 'bg-primary text-white shadow-[0_0_15px_rgba(229,106,26,0.25)]'
                                      : 'text-muted-foreground hover:text-foreground hover:bg-white/8'
                                  )}
                                >
                                  <span className={cn('transition-transform duration-200 group-hover:scale-110', active ? 'text-white' : 'text-primary')}>
                                    {item.icon}
                                  </span>
                                  {item.name}
                                  {active && <ChevronRight className="w-3 h-3 ml-auto" />}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            {/* CTA Footer */}
            <div className="p-4 border-t border-border/50">
              <Link
                href="/apply"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(229,106,26,0.3)] active:scale-95"
              >
                <Send className="w-4 h-4" />
                Apply Now
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
