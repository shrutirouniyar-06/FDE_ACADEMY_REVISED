import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/contexts/ThemeContext';

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

function Router() {
  return (
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
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
