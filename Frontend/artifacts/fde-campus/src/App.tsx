import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { CursorGlow } from '@/components/ui/cursor-glow';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { SmoothScroll } from '@/components/ui/smooth-scroll';
import { AnimatePresence, motion, type Variants } from 'framer-motion';

import { 
  HomePage, 
  AboutPage, 
  ProgramsPage, 
  SeniorFDEPage, 
  JuniorFDEPage, 
  SolutionsArchitectPage, 
  MentorsPage, 
  CareerRoadmapsPage, 
  SuccessStoriesPage, 
  BlogsPage, 
  EventsPage, 
  ContactPage, 
  ApplyPage 
} from '@/pages';

const queryClient = new QueryClient();

const pageVariants: Variants = {
  initial: { opacity: 0, y: 18 },
  enter:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as [number,number,number,number] } },
  exit:    { opacity: 0, y: -12, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] as [number,number,number,number] } },
};

function Router() {
  const [location] = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div key={location} variants={pageVariants} initial="initial" animate="enter" exit="exit">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/programs" component={ProgramsPage} />
          <Route path="/programs/junior-fde" component={JuniorFDEPage} />
          <Route path="/programs/senior-fde" component={SeniorFDEPage} />
          <Route path="/programs/solutions-architect" component={SolutionsArchitectPage} />
          <Route path="/mentors" component={MentorsPage} />
          <Route path="/career-roadmaps" component={CareerRoadmapsPage} />
          <Route path="/success-stories" component={SuccessStoriesPage} />
          <Route path="/blogs" component={BlogsPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/apply" component={ApplyPage} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SmoothScroll>
            <ScrollProgress />
            <CursorGlow />
            <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
              <Router />
            </WouterRouter>
            <Toaster />
          </SmoothScroll>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
