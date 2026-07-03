import { Link, useLocation } from 'wouter';
import { useScrollDirection } from '@/hooks/use-scroll-direction';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Sun, Moon, PanelLeft } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { SideNav } from './SideNav';

export function Navbar() {
  const { scrollDirection, isScrolled } = useScrollDirection();
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '/about' },
    { 
      name: 'Programs', 
      href: '/programs',
      dropdown: [
        { name: 'Junior FDE', href: '/programs/junior-fde' },
        { name: 'Senior FDE', href: '/programs/senior-fde' },
        { name: 'Solutions Architect', href: '/programs/solutions-architect' },
      ]
    },
    { name: 'Mentors', href: '/mentors' },
    { name: 'Career Roadmaps', href: '/career-roadmaps' },
    { name: 'Success Stories', href: '/success-stories' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <SideNav open={sideNavOpen} onClose={() => setSideNavOpen(false)} />

      <header
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-300 ease-in-out px-4 py-4 md:px-8',
          scrollDirection === 'down' && isScrolled ? '-translate-y-full' : 'translate-y-0',
          isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 py-3 shadow-lg' : 'bg-transparent py-6'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">

          {/* Left: side-nav trigger + logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSideNavOpen(true)}
              aria-label="Open side navigation"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
            >
              <PanelLeft className="w-5 h-5" />
            </button>

            <Link href="/" className="flex items-center gap-3 z-50 relative group">
              <img
                src="/images/gl-logo.png"
                alt="GlobalLogic"
                className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-tighter text-foreground group-hover:text-primary transition-colors leading-tight">
                  FDE Academy
                </span>
                <span className="text-[9px] text-muted-foreground uppercase tracking-widest font-semibold leading-tight">
                  by GlobalLogic
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group" 
                onMouseEnter={() => link.dropdown && setProgramsDropdownOpen(true)}
                onMouseLeave={() => link.dropdown && setProgramsDropdownOpen(false)}>
                
                <Link href={link.href} className={cn(
                  'text-sm font-medium transition-colors hover:text-primary flex items-center gap-1 py-2',
                  location === link.href || (location.startsWith(link.href) && link.href !== '/') 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                )}>
                  {link.name}
                  {link.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {programsDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 pt-2 w-56"
                      >
                        <div className="glass-card rounded-xl p-2 border border-border/50 flex flex-col gap-1">
                          {link.dropdown.map(dropLink => (
                            <Link key={dropLink.name} href={dropLink.href} 
                              className="px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-white/5 rounded-lg transition-colors">
                              {dropLink.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Right: theme toggle + apply */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle light/dark mode"
              className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </motion.div>
              </AnimatePresence>
            </button>
            <Link href="/apply" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(229,106,26,0.3)]">
              Apply Now
            </Link>
          </div>

          {/* Mobile Right: theme + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button 
              className="text-foreground z-50 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl lg:hidden pt-24 pb-8 px-6 flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col gap-6 flex-1">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col">
                  <Link 
                    href={link.href}
                    onClick={() => !link.dropdown && setMobileMenuOpen(false)}
                    className={cn(
                      "text-xl font-display font-semibold",
                      location === link.href ? "text-primary" : "text-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="flex flex-col gap-3 mt-3 pl-4 border-l border-border/50 ml-2">
                      {link.dropdown.map(dropLink => (
                        <Link 
                          key={dropLink.name} 
                          href={dropLink.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-muted-foreground hover:text-foreground"
                        >
                          {dropLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <Link 
                href="/apply" 
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full justify-center bg-primary text-white px-6 py-4 rounded-xl font-semibold text-lg"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
