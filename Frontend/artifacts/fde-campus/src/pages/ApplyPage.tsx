import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Check, UploadCloud, ChevronRight, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const step1Schema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  linkedin: z.string().url("Valid LinkedIn URL is required").optional().or(z.literal('')),
});

const step2Schema = z.object({
  degree: z.string().min(2, "Degree is required"),
  institution: z.string().min(2, "Institution is required"),
  graduationYear: z.string().regex(/^\d{4}$/, "Valid year required (e.g. 2020)"),
});

const step3Schema = z.object({
  yearsExperience: z.string().min(1, "Experience is required"),
  currentRole: z.string().min(2, "Current role is required"),
  company: z.string().min(2, "Company is required"),
  program: z.string().min(1, "Please select a program"),
});

export function ApplyPage() {
  const [step, setStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const form1 = useForm({ resolver: zodResolver(step1Schema) });
  const form2 = useForm({ resolver: zodResolver(step2Schema) });
  const form3 = useForm({ resolver: zodResolver(step3Schema) });

  const nextStep = () => setStep(s => Math.min(s + 1, 4));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const submitApplication = () => {
    setIsCompleted(true);
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Application Form</h1>
            <p className="text-xl text-muted-foreground">Join the next cohort of Forward Deployed Engineers.</p>
          </div>

          {!isCompleted ? (
            <div className="glass-card rounded-3xl p-8 md:p-12 border border-border/50 shadow-2xl">
              
              {/* Stepper */}
              <div className="flex items-center justify-between mb-12 relative">
                <div className="absolute left-0 top-1/2 w-full h-1 bg-border -translate-y-1/2 z-0 rounded-full" />
                <div 
                  className="absolute left-0 top-1/2 h-1 bg-primary -translate-y-1/2 z-0 rounded-full transition-all duration-500"
                  style={{ width: `${((step - 1) / 3) * 100}%` }}
                />
                
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="relative z-10 flex flex-col items-center">
                    <div className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300",
                      step > s ? "bg-primary text-white" : 
                      step === s ? "bg-primary border-4 border-[#202229] text-white shadow-[0_0_15px_rgba(229,106,26,0.5)]" : 
                      "bg-[#202229] border border-border text-muted-foreground"
                    )}>
                      {step > s ? <Check className="w-5 h-5" /> : s}
                    </div>
                  </div>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Personal Details</h3>
                    <form onSubmit={form1.handleSubmit(nextStep)} className="space-y-6">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="apply-firstName" className="block text-sm font-medium text-white mb-2">First Name</label>
                          <input id="apply-firstName" type="text" {...form1.register('firstName')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
                          {form1.formState.errors.firstName && <p className="text-red-400 text-sm mt-1">{form1.formState.errors.firstName.message?.toString()}</p>}
                        </div>
                        <div>
                          <label htmlFor="apply-lastName" className="block text-sm font-medium text-white mb-2">Last Name</label>
                          <input id="apply-lastName" type="text" {...form1.register('lastName')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
                          {form1.formState.errors.lastName && <p className="text-red-400 text-sm mt-1">{form1.formState.errors.lastName.message?.toString()}</p>}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="apply-email" className="block text-sm font-medium text-white mb-2">Email Address</label>
                        <input id="apply-email" type="email" {...form1.register('email')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
                        {form1.formState.errors.email && <p className="text-red-400 text-sm mt-1">{form1.formState.errors.email.message?.toString()}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="apply-phone" className="block text-sm font-medium text-white mb-2">Phone Number</label>
                        <input id="apply-phone" type="tel" {...form1.register('phone')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
                        {form1.formState.errors.phone && <p className="text-red-400 text-sm mt-1">{form1.formState.errors.phone.message?.toString()}</p>}
                      </div>

                      <div>
                        <label htmlFor="apply-linkedin" className="block text-sm font-medium text-white mb-2">LinkedIn Profile (Optional)</label>
                        <input id="apply-linkedin" type="url" {...form1.register('linkedin')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="https://linkedin.com/in/..." />
                      </div>

                      <div className="flex justify-end pt-6">
                        <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2">
                          Next Step <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
                    <form onSubmit={form2.handleSubmit(nextStep)} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Highest Degree</label>
                        <input type="text" {...form2.register('degree')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="B.S. Computer Science" />
                        {form2.formState.errors.degree && <p className="text-red-400 text-sm mt-1">{form2.formState.errors.degree.message?.toString()}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Institution</label>
                        <input type="text" {...form2.register('institution')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
                        {form2.formState.errors.institution && <p className="text-red-400 text-sm mt-1">{form2.formState.errors.institution.message?.toString()}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Graduation Year</label>
                        <input type="text" {...form2.register('graduationYear')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="2020" />
                        {form2.formState.errors.graduationYear && <p className="text-red-400 text-sm mt-1">{form2.formState.errors.graduationYear.message?.toString()}</p>}
                      </div>

                      <div className="flex justify-between pt-6">
                        <button type="button" onClick={prevStep} className="text-muted-foreground hover:text-white px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2">
                          <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                        <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2">
                          Next Step <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
                    <form onSubmit={form3.handleSubmit(nextStep)} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Program Selection</label>
                        <select {...form3.register('program')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary">
                          <option value="">Select a program...</option>
                          <option value="junior">Junior FDE (1-3 years exp)</option>
                          <option value="senior">Senior FDE (3-7 years exp)</option>
                          <option value="architect">Solutions Architect (7+ years exp)</option>
                        </select>
                        {form3.formState.errors.program && <p className="text-red-400 text-sm mt-1">{form3.formState.errors.program.message?.toString()}</p>}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Years of Professional Experience</label>
                        <select {...form3.register('yearsExperience')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary">
                          <option value="">Select years...</option>
                          <option value="0-1">Less than 1 year</option>
                          <option value="1-3">1 - 3 years</option>
                          <option value="3-5">3 - 5 years</option>
                          <option value="5-7">5 - 7 years</option>
                          <option value="7+">7+ years</option>
                        </select>
                        {form3.formState.errors.yearsExperience && <p className="text-red-400 text-sm mt-1">{form3.formState.errors.yearsExperience.message?.toString()}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Current Role</label>
                        <input type="text" {...form3.register('currentRole')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" placeholder="e.g. Backend Engineer" />
                        {form3.formState.errors.currentRole && <p className="text-red-400 text-sm mt-1">{form3.formState.errors.currentRole.message?.toString()}</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">Current Company</label>
                        <input type="text" {...form3.register('company')} className="w-full bg-[#0F0F10] border border-border rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary" />
                        {form3.formState.errors.company && <p className="text-red-400 text-sm mt-1">{form3.formState.errors.company.message?.toString()}</p>}
                      </div>

                      <div className="flex justify-between pt-6">
                        <button type="button" onClick={prevStep} className="text-muted-foreground hover:text-white px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2">
                          <ChevronLeft className="w-5 h-5" /> Back
                        </button>
                        <button type="submit" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2">
                          Next Step <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-2xl font-bold text-white mb-6">Final Step: Resume</h3>
                    
                    <div className="border-2 border-dashed border-border rounded-2xl p-10 flex flex-col items-center justify-center bg-[#0F0F10] hover:border-primary/50 transition-colors mb-8 cursor-pointer relative overflow-hidden group">
                      <input 
                        type="file" 
                        accept=".pdf,.doc,.docx"
                        className="absolute inset-0 opacity-0 cursor-pointer z-10"
                        onChange={(e) => setUploadedFile(e.target.files?.[0] || null)}
                      />
                      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-8 h-8" />
                      </div>
                      <h4 className="text-white font-bold mb-2">
                        {uploadedFile ? uploadedFile.name : "Click to upload your resume"}
                      </h4>
                      <p className="text-muted-foreground text-sm">PDF, DOC, DOCX up to 5MB</p>
                    </div>

                    <div className="flex items-start gap-3 mb-8">
                      <input 
                        type="checkbox" 
                        id="terms" 
                        className="mt-1 w-5 h-5 rounded border-border bg-[#0F0F10] text-primary focus:ring-primary"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                      />
                      <label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        I confirm that the information provided is accurate. I understand that the FDE Campus team will review my application and contact me regarding next steps.
                      </label>
                    </div>

                    <div className="flex justify-between pt-6 border-t border-border/50">
                      <button type="button" onClick={prevStep} className="text-muted-foreground hover:text-white px-6 py-3 rounded-full font-bold transition-all flex items-center gap-2">
                        <ChevronLeft className="w-5 h-5" /> Back
                      </button>
                      <button 
                        onClick={submitApplication}
                        disabled={!termsAccepted || !uploadedFile}
                        className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary text-white px-8 py-3 rounded-full font-bold transition-all"
                      >
                        Submit Application
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card rounded-3xl p-12 text-center border border-primary/30"
            >
              <div className="w-24 h-24 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                <Check className="w-10 h-10" />
              </div>
              <h2 className="text-4xl font-display font-bold text-white mb-4">Application Submitted!</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
                Thank you for applying to the FDE Campus. Our admissions team will review your profile and reach out within 48 hours.
              </p>
              <button 
                onClick={() => window.location.href = '/'}
                className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-full font-bold transition-colors"
              >
                Return to Home
              </button>
            </motion.div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
