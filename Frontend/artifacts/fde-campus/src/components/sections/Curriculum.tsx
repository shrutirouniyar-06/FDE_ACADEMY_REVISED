import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronDown, CheckCircle2, Clock, Users, BookOpen, Code2, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

const seniorModules = [
  {
    title: "Customer Discovery & Problem Framing",
    duration: "3 weeks",
    sessions: 6,
    desc: "Master the art of identifying high-value AI opportunities before writing a single line of code.",
    topics: [
      "Stakeholder mapping and interview techniques",
      "ROI estimation frameworks and business case modeling",
      "Identifying AI vs. non-AI solutions",
      "Problem tree analysis and success metrics definition",
      "Running effective discovery workshops",
      "Documenting and presenting opportunity assessments",
    ],
    outcome: "Deliver a validated problem statement with ROI model to a simulated executive panel.",
    badge: "Foundation",
  },
  {
    title: "Solution Architecture & Trade-offs",
    duration: "4 weeks",
    sessions: 8,
    desc: "Design resilient, cloud-native systems with a rigorous approach to architectural decisions.",
    topics: [
      "System design patterns: monolith vs. microservices vs. serverless",
      "Build vs. buy decision frameworks",
      "Cloud-native architecture on AWS, GCP, and Azure",
      "Data pipeline design and lakehouse patterns",
      "Security, compliance, and GDPR considerations",
      "Architecture Decision Records (ADRs) and documentation",
    ],
    outcome: "Design and defend a full-stack architecture for a real business case.",
    badge: "Technical",
  },
  {
    title: "Engineering Excellence",
    duration: "4 weeks",
    sessions: 8,
    desc: "Produce production-grade code that passes enterprise code review and scales to millions.",
    topics: [
      "Test-driven development (TDD) and behavior-driven development (BDD)",
      "CI/CD pipeline design with GitHub Actions and ArgoCD",
      "Code quality gates, linting, and static analysis",
      "Performance profiling and optimization techniques",
      "API design: REST, GraphQL, and gRPC",
      "Technical debt management and refactoring strategies",
    ],
    outcome: "Refactor a legacy codebase to meet enterprise engineering standards.",
    badge: "Technical",
  },
  {
    title: "Intelligent Solutions & GenAI",
    duration: "5 weeks",
    sessions: 10,
    desc: "Build and deploy production-ready AI systems using cutting-edge GenAI frameworks.",
    topics: [
      "LLM fundamentals: GPT-4, Claude, Gemini, and open-source models",
      "Advanced RAG pipeline design with LangChain and LlamaIndex",
      "Prompt engineering, chain-of-thought, and few-shot techniques",
      "Model fine-tuning with LoRA and PEFT",
      "Vector databases: Pinecone, Weaviate, and pgvector",
      "Evaluation frameworks: RAGAS, TruLens, and custom metrics",
    ],
    outcome: "Ship a production RAG application integrated with a live enterprise data source.",
    badge: "AI Core",
  },
  {
    title: "Production Scale & SRE",
    duration: "3 weeks",
    sessions: 6,
    desc: "Operate AI systems at scale with the reliability standards enterprises demand.",
    topics: [
      "Observability: OpenTelemetry, Prometheus, and Grafana dashboards",
      "Kubernetes orchestration and autoscaling for ML workloads",
      "Incident response runbooks and blameless post-mortems",
      "Model monitoring: drift detection and data quality alerts",
      "Cost optimization for LLM inference at scale",
      "SLOs, SLAs, and error budget management",
    ],
    outcome: "Instrument a live AI service with full observability and write its runbook.",
    badge: "Operations",
  },
  {
    title: "Customer Transformation",
    duration: "3 weeks",
    sessions: 6,
    desc: "Drive adoption, measure value, and communicate AI impact to every level of the organization.",
    topics: [
      "Change management frameworks: ADKAR and Kotter's 8-step model",
      "User adoption metrics and engagement tracking",
      "Executive storytelling with data: building a compelling narrative",
      "Continuous ROI measurement and value dashboards",
      "Building internal AI champions and CoEs",
      "Quarterly business reviews and executive presentation skills",
    ],
    outcome: "Present a 12-month value realization roadmap to simulated C-suite.",
    badge: "Business",
  },
  {
    title: "Residency (Embedded Engagement)",
    duration: "8 weeks",
    sessions: "Continuous",
    desc: "Solve a real, live client problem under the mentorship of a Principal FDE.",
    topics: [
      "Embedded with an actual GlobalLogic client team",
      "Ownership of a defined workstream with clear deliverables",
      "Weekly mentorship sessions with your assigned Principal FDE",
      "Peer code reviews and architecture walkthroughs",
      "Mid-residency progress review with program faculty",
      "Client feedback integration and iterative delivery",
    ],
    outcome: "Deliver a working production feature with documented business impact.",
    badge: "Live Project",
  },
  {
    title: "Executive Board Review",
    duration: "2 weeks",
    sessions: 4,
    desc: "Defend your solution architecture and business impact to senior leadership.",
    topics: [
      "Capstone deck structure: problem, solution, architecture, impact",
      "Handling tough questions from technical and business reviewers",
      "Live demo preparation and rehearsal",
      "Written case study submission for portfolio",
      "360° peer feedback and self-assessment",
      "Graduation and FDE certification ceremony",
    ],
    outcome: "Receive your FDE certification upon successful board defense.",
    badge: "Capstone",
  },
];

const juniorModules = [
  {
    title: "Foundations of AI Engineering",
    duration: "2 weeks",
    sessions: 4,
    desc: "Build rock-solid fundamentals in AI/ML concepts essential for a Junior FDE.",
    topics: [
      "Python for AI: NumPy, Pandas, and data wrangling",
      "Machine learning basics: supervised vs. unsupervised learning",
      "Introduction to LLMs and transformer architecture",
      "Setting up cloud environments on AWS and GCP",
      "Version control and collaborative engineering workflows",
      "AI ethics and responsible deployment principles",
    ],
    outcome: "Build and deploy a simple ML classifier integrated with a REST API.",
    badge: "Foundation",
  },
  {
    title: "Client Communication Basics",
    duration: "2 weeks",
    sessions: 4,
    desc: "Learn to translate technical work into business language that stakeholders understand.",
    topics: [
      "Understanding client needs through structured interviews",
      "Writing concise technical emails and updates",
      "Creating clear project briefs and status reports",
      "Active listening and requirement gathering techniques",
      "Presenting demos to non-technical audiences",
      "Managing expectations and flagging risks early",
    ],
    outcome: "Conduct a mock client discovery call and present findings to a mentor panel.",
    badge: "Business",
  },
  {
    title: "Applied GenAI Development",
    duration: "4 weeks",
    sessions: 8,
    desc: "Hands-on development of GenAI applications using modern frameworks.",
    topics: [
      "LangChain and LlamaIndex fundamentals",
      "Prompt engineering patterns and best practices",
      "Building RAG pipelines with vector databases",
      "OpenAI, Anthropic, and open-source model APIs",
      "Evaluating LLM outputs with automated metrics",
      "Debugging and iterating on AI applications",
    ],
    outcome: "Build a functional RAG chatbot integrated with a provided document corpus.",
    badge: "AI Core",
  },
  {
    title: "Cloud Deployment & DevOps",
    duration: "3 weeks",
    sessions: 6,
    desc: "Ship your AI apps to the cloud with confidence and reliability.",
    topics: [
      "Docker containers and image management",
      "CI/CD pipelines with GitHub Actions",
      "Deploying to AWS Lambda, EC2, and Cloud Run",
      "Basic Kubernetes: pods, services, and deployments",
      "Environment variables, secrets management, and security",
      "Monitoring with CloudWatch and basic alerting",
    ],
    outcome: "Deploy an AI microservice to cloud with a working CI/CD pipeline.",
    badge: "Technical",
  },
  {
    title: "Live Client Project",
    duration: "6 weeks",
    sessions: "Continuous",
    desc: "Apply everything you've learned on a real client engagement with mentor support.",
    topics: [
      "Onboarding to client project under Senior FDE supervision",
      "Daily stand-ups and Agile sprint workflows",
      "Building assigned features with production standards",
      "Code review participation and feedback integration",
      "Writing technical documentation for deliverables",
      "Mid-project review with program faculty",
    ],
    outcome: "Deliver a working feature to a real client with documented business value.",
    badge: "Live Project",
  },
  {
    title: "Certification Showcase",
    duration: "1 week",
    sessions: 2,
    desc: "Present your project, get certified, and plan your FDE career path.",
    topics: [
      "Demo preparation and storytelling structure",
      "Portfolio building: GitHub, case studies, and LinkedIn",
      "Career path planning: Junior to Senior FDE trajectory",
      "Certification exam and assessment",
      "Alumni network onboarding",
      "Next steps: Senior FDE program eligibility review",
    ],
    outcome: "Earn your Junior FDE certification and career roadmap document.",
    badge: "Capstone",
  },
];

const architectModules = [
  {
    title: "Enterprise Architecture Mastery",
    duration: "4 weeks",
    sessions: 8,
    desc: "Design and defend large-scale enterprise systems that serve millions of users.",
    topics: [
      "Domain-driven design (DDD) and bounded contexts",
      "Event-driven architectures with Kafka and Kinesis",
      "Multi-cloud and hybrid cloud strategy",
      "API gateway patterns and service mesh (Istio, Envoy)",
      "Distributed data consistency: CAP theorem in practice",
      "Architecture review board (ARB) processes and governance",
    ],
    outcome: "Present a complete enterprise architecture for a Fortune 500 scenario to a panel of CTOs.",
    badge: "Foundation",
  },
  {
    title: "Cloud Strategy & FinOps",
    duration: "3 weeks",
    sessions: 6,
    desc: "Build cloud strategies that balance performance, resilience, and cost at enterprise scale.",
    topics: [
      "FinOps principles and cloud cost optimization",
      "Reserved instances, spot fleets, and savings plans",
      "Multi-region active-active deployment patterns",
      "Disaster recovery: RTO/RPO design and testing",
      "Cloud governance: landing zones and policy-as-code",
      "Vendor negotiation and cloud contract management",
    ],
    outcome: "Deliver a cloud cost optimization report with projected 30% savings on a real account.",
    badge: "Technical",
  },
  {
    title: "AI Platform Engineering",
    duration: "5 weeks",
    sessions: 10,
    desc: "Build the infrastructure layer that powers enterprise AI at scale.",
    topics: [
      "MLOps platform design: MLflow, Vertex AI, SageMaker",
      "Feature stores: Feast, Tecton, and custom implementations",
      "Model serving: vLLM, TensorRT, and Triton Inference Server",
      "LLMOps: fine-tuning pipelines, evaluation, and A/B testing",
      "Data mesh architecture for AI-ready data products",
      "GPU cluster management and cost optimization",
    ],
    outcome: "Design and demo a full MLOps platform capable of serving 10+ models in production.",
    badge: "AI Core",
  },
  {
    title: "Executive Consulting & Pre-Sales",
    duration: "3 weeks",
    sessions: 6,
    desc: "Lead C-suite conversations and win enterprise AI engagements.",
    topics: [
      "Executive presentation skills: structure, delivery, and Q&A",
      "Writing winning RFP responses and statement of work (SOW)",
      "Pricing models for professional services engagements",
      "Building a compelling AI transformation business case",
      "Navigating organizational politics and change resistance",
      "Managing a portfolio of concurrent enterprise accounts",
    ],
    outcome: "Win a simulated RFP process against a competing team of Senior FDEs.",
    badge: "Business",
  },
  {
    title: "Capstone: CTO-Level Challenge",
    duration: "4 weeks",
    sessions: "Continuous",
    desc: "Solve a real, complex architecture challenge sponsored by a GlobalLogic enterprise client.",
    topics: [
      "Embedded with client CTO/VP Engineering team",
      "Own a critical architectural decision with business impact",
      "Lead a cross-functional team of junior engineers",
      "Weekly executive check-ins with program leadership",
      "Written Architecture Decision Record for client portfolio",
      "Board-level presentation and certification ceremony",
    ],
    outcome: "Earn the Solutions Architect certification upon successful delivery and board defense.",
    badge: "Capstone",
  },
];

const badgeColors: Record<string, string> = {
  Foundation: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Technical:  'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'AI Core':  'bg-primary/20 text-primary border-primary/30',
  Operations: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Business:   'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Live Project': 'bg-rose-500/20 text-rose-400 border-rose-500/30',
  Capstone:   'bg-primary/30 text-primary border-primary/50',
};

type Tab = 'senior' | 'junior' | 'architect';

const tabs: { id: Tab; label: string; subtitle: string; modules: typeof seniorModules }[] = [
  { id: 'senior', label: 'Senior FDE', subtitle: '8-Module Masterclass · 9 months', modules: seniorModules },
  { id: 'junior', label: 'Junior FDE', subtitle: '6-Module Intensive · 6 months', modules: juniorModules },
  { id: 'architect', label: 'Solutions Architect', subtitle: '5-Module Elite Track · 12 months', modules: architectModules },
];

function ModuleList({ modules }: { modules: typeof seniorModules }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div ref={ref} className="space-y-3">
      {modules.map((mod, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className={cn(
            "glass-card rounded-2xl overflow-hidden transition-all duration-300",
            openIndex === i && "border-primary/40 shadow-[0_0_30px_rgba(229,106,26,0.1)]"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 flex-shrink-0",
                openIndex === i ? "bg-primary text-white shadow-[0_0_15px_rgba(229,106,26,0.5)]" : "bg-white/5 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary"
              )}>
                {i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h4 className={cn("text-lg font-display font-bold transition-colors", openIndex === i ? "text-primary" : "text-white group-hover:text-primary")}>
                    {mod.title}
                  </h4>
                  <span className={cn("text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border", badgeColors[mod.badge] || badgeColors.Technical)}>
                    {mod.badge}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{mod.duration}</span>
                  <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" />{mod.sessions} sessions</span>
                </div>
              </div>
            </div>
            <ChevronDown className={cn("w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4", openIndex === i ? "rotate-180 text-primary" : "")} />
          </button>
          
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                key="content"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0 ml-14">
                  <p className="text-muted-foreground text-base mb-6 leading-relaxed">{mod.desc}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {mod.topics.map((topic, ti) => (
                      <motion.div
                        key={ti}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: ti * 0.06 }}
                        className="flex items-start gap-2.5 text-sm text-white/80"
                      >
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
                  >
                    <Layers className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-primary uppercase tracking-widest mb-1">Module Outcome</div>
                      <p className="text-sm text-white/90">{mod.outcome}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

export function Curriculum() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<Tab>('senior');

  const currentTab = tabs.find(t => t.id === activeTab)!;

  return (
    <section ref={ref} className="py-32 bg-background border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="text-center mb-12"
        >
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">Curriculum</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Program Masterclass</h3>
          <p className="text-xl text-muted-foreground">A rigorous progression from business discovery to production deployment.</p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-2 mb-10 glass-card rounded-2xl p-2"
        >
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex-1 text-left px-5 py-4 rounded-xl font-semibold transition-all duration-300",
                activeTab === tab.id
                  ? "bg-primary text-white shadow-[0_0_20px_rgba(229,106,26,0.3)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              <div className="font-display font-bold">{tab.label}</div>
              <div className={cn("text-xs mt-0.5", activeTab === tab.id ? "text-white/70" : "text-muted-foreground")}>
                {tab.subtitle}
              </div>
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
          >
            <ModuleList modules={currentTab.modules} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
