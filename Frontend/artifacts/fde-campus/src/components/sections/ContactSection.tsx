import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    alert("Message sent successfully!");
    reset();
  };

  return (
    <section ref={ref} className="py-32 bg-[#0F0F10] border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Start Your Journey</h3>
            <p className="text-xl text-muted-foreground mb-12">
              Have questions about the curriculum, admissions, or career outcomes? Our admissions team is ready to help.
            </p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1">Email Us</h5>
                  <p className="text-muted-foreground mb-1">Our friendly team is here to help.</p>
                  <a href="mailto:admissions@fdecampus.com" className="text-primary hover:underline">admissions@fdecampus.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1">Headquarters</h5>
                  <p className="text-muted-foreground mb-1">GlobalLogic HQ</p>
                  <span className="text-white/80">San Jose, California</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="text-white font-bold mb-1">Call Us</h5>
                  <p className="text-muted-foreground mb-1">Mon-Fri from 8am to 5pm PST.</p>
                  <a href="tel:+18001234567" className="text-primary hover:underline">+1 (800) 123-4567</a>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 sm:p-10 rounded-3xl"
          >
            <h4 className="text-2xl font-display font-bold text-white mb-6">Send us a message</h4>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-2">Full Name</label>
                <input 
                  id="contact-name"
                  type="text"
                  {...register('name')}
                  className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-2">Email Address</label>
                <input 
                  id="contact-email"
                  type="email"
                  {...register('email')}
                  className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea 
                  id="contact-message"
                  {...register('message')}
                  rows={4}
                  className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
              </div>
              
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 disabled:opacity-70 disabled:hover:bg-primary text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
