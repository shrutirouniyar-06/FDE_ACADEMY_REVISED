import { Link } from 'wouter';
import { Twitter, Linkedin, Github, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0A0A0B] border-t border-border pt-20 pb-10 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        <div className="lg:col-span-2 flex flex-col gap-6">
          <Link href="/" className="flex flex-col group">
            <span className="text-3xl font-display font-bold tracking-tighter text-white">
              FDE Academy
            </span>
            <span className="text-sm text-primary uppercase tracking-widest font-semibold mt-1">
              by GlobalLogic
            </span>
          </Link>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            Bridging the gap between business strategy and AI engineering. We train the elite engineers who lead transformations that matter.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Programs</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/programs/junior-fde" className="text-muted-foreground hover:text-primary transition-colors">Junior FDE</Link></li>
            <li><Link href="/programs/senior-fde" className="text-muted-foreground hover:text-primary transition-colors">Senior FDE</Link></li>
            <li><Link href="/programs/solutions-architect" className="text-muted-foreground hover:text-primary transition-colors">Solutions Architect</Link></li>
            <li><Link href="/programs" className="text-muted-foreground hover:text-primary transition-colors">Compare Programs</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Company</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
            <li><Link href="/mentors" className="text-muted-foreground hover:text-primary transition-colors">Our Mentors</Link></li>
            <li><Link href="/success-stories" className="text-muted-foreground hover:text-primary transition-colors">Success Stories</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-6">Resources</h4>
          <ul className="flex flex-col gap-4">
            <li><Link href="/career-roadmaps" className="text-muted-foreground hover:text-primary transition-colors">Career Roadmaps</Link></li>
            <li><Link href="/blogs" className="text-muted-foreground hover:text-primary transition-colors">Insights & Blogs</Link></li>
            <li><Link href="/events" className="text-muted-foreground hover:text-primary transition-colors">Events & Webinars</Link></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Download Brochure</a></li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2025 FDE Academy. An AI-First Learning Initiative by GlobalLogic.
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
