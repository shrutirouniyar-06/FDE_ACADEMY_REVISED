import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ChevronDown, CheckCircle2, Clock, Users, BookOpen, Code2, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

type DayEntry = {
  title: string;
  topics: string;
  skills: string;
  deliverable: string;
  outcome: string;
};

type WeekEntry = {
  weekNum: number;
  title: string;
  badge: string;
  days: DayEntry[];
};

const seniorWeeks: WeekEntry[] = [
  {
    weekNum: 1,
    title: "Customer Discovery, Consulting & Problem Framing",
    badge: "Foundation",
    days: [
      {
        title: "Understanding the Customer",
        topics: "FDE Mindset, Consulting Fundamentals, Customer Lifecycle, Stakeholder Mapping, Industry Research, Business Context Analysis",
        skills: "AI-assisted customer research, stakeholder profiling, discovery planning, business understanding",
        deliverable: "Customer Briefing Pack — company profile, stakeholder map, industry analysis, competitor analysis, business challenges, assumptions, risks, and 25 AI-generated discovery questions",
        outcome: "Can analyze a customer organisation, identify key stakeholders, understand business drivers, anticipate challenges, and prepare for customer engagements.",
      },
      {
        title: "Mastering Discovery Conversations",
        topics: "Discovery Workshops, Requirement Elicitation, Active Listening, Functional & Non-Functional Requirements, Handling Ambiguity",
        skills: "AI meeting copilot usage, transcript analysis, requirement extraction, summarization",
        deliverable: "Discovery Report — meeting notes, requirements catalog, assumptions, constraints, dependencies, unresolved questions, stakeholder concerns, and AI-generated insights",
        outcome: "Can conduct structured discovery sessions, ask effective questions, capture requirements accurately, identify gaps, and uncover hidden needs.",
      },
      {
        title: "Defining the Real Problem",
        topics: "Problem Framing, Root Cause Analysis, Business Process Mapping, Value Stream Analysis, KPI Definition",
        skills: "AI-assisted problem decomposition, process analysis, root cause discovery",
        deliverable: "Problem Definition Document — business objectives, current-state analysis, root causes, process maps, pain points, KPIs, measurable outcomes, risks, and success criteria",
        outcome: "Can distinguish symptoms from root causes, decompose complex problems, define measurable success criteria, and align technical solutions to business outcomes.",
      },
      {
        title: "Designing Solution Options",
        topics: "Solution Discovery, Architecture Thinking, Build vs Buy, Technology Evaluation, Tradeoff Analysis",
        skills: "AI-assisted architecture generation, architecture review, solution comparison",
        deliverable: "Solution Options Report — 3 architecture approaches, tradeoff analysis, technology recommendations, implementation roadmap, cost estimates, risks, and AI-generated architecture reviews",
        outcome: "Can evaluate alternative solutions, compare architectures, justify technology choices, estimate effort, and communicate tradeoffs effectively.",
      },
      {
        title: "Influencing Through Communication",
        topics: "Executive Communication, Proposal Writing, Storytelling, Value Articulation, Stakeholder Management",
        skills: "AI-assisted proposal creation, executive summary generation, presentation refinement",
        deliverable: "Executive Proposal & Presentation — business problem, proposed solution, value realization, architecture, roadmap, risk register, budget estimate, and executive summary",
        outcome: "Can create executive-ready proposals, communicate business value, present recommendations confidently, and handle challenging stakeholder questions.",
      },
    ],
  },
  {
    weekNum: 2,
    title: "Solution Architecture, Technical Consulting & AI-Assisted Solution Design",
    badge: "Technical",
    days: [
      {
        title: "From Requirements to Architecture",
        topics: "Requirement Analysis, Domain Modeling, Context Diagrams, System Boundaries, Functional Decomposition, NFR Analysis",
        skills: "AI-assisted requirement analysis, domain modeling, architecture drafting",
        deliverable: "Solution Blueprint — domain model, context diagram, system boundaries, functional capabilities, NFR matrix, assumptions, and risks",
        outcome: "Can transform business requirements into architectural building blocks, identify system boundaries, define capabilities, and recognise critical NFRs that influence architecture.",
      },
      {
        title: "Architecture Patterns & Technology Selection",
        topics: "Monolith vs Microservices, Event-Driven Architecture, Integration Patterns, Cloud-Native Patterns, Technology Evaluation Frameworks",
        skills: "AI-assisted architecture reviews, technology comparison, pattern recommendations",
        deliverable: "Architecture Decision Record (ADR) Package — architecture options, technology evaluation matrix, tradeoff analysis, and recommended architecture",
        outcome: "Can evaluate architecture patterns, select appropriate technologies, justify architectural decisions, and understand tradeoffs.",
      },
      {
        title: "APIs, Integrations & Data Architecture",
        topics: "API-First Design, OpenAPI, Data Modeling, Database Selection, Integration Strategies, Event Design",
        skills: "AI-assisted API design, schema generation, integration analysis",
        deliverable: "Technical Design Document — API contracts, ER diagrams, event catalog, integration specifications, and data architecture",
        outcome: "Can design APIs, create data models, define integrations, and establish system contracts between services and external systems.",
      },
      {
        title: "Delivery Planning & Risk Management",
        topics: "Estimation Techniques, Delivery Planning, Dependency Management, Risk Analysis, MVP Identification, Roadmap Creation",
        skills: "AI-assisted estimation, risk identification, roadmap generation",
        deliverable: "Delivery Strategy Document — MVP definition, release roadmap, sprint plan, dependency map, effort estimates, and risk register",
        outcome: "Can estimate effort, identify dependencies, prioritise features, define MVP scope, and create realistic delivery plans.",
      },
      {
        title: "Customer Architecture Review Board",
        topics: "Architecture Defense, Stakeholder Objections, Cost Discussions, Scalability Discussions, Security Reviews, Executive Alignment",
        skills: "AI-assisted review preparation, objection handling, presentation refinement",
        deliverable: "Customer Solution Proposal — final architecture, implementation roadmap, cost estimate, risk mitigation plan, and architecture review presentation",
        outcome: "Can defend architecture decisions, answer technical and business concerns, adjust recommendations based on feedback, and gain stakeholder buy-in.",
      },
    ],
  },
  {
    weekNum: 3,
    title: "Engineering Excellence & AI-Assisted Delivery",
    badge: "Technical",
    days: [
      {
        title: "Translating Vision into Execution",
        topics: "Architecture decomposition, capability mapping, backlog creation, repository strategy, development planning, Git workflows",
        skills: "Technical decomposition, sprint planning, AI-assisted task breakdown, engineering planning",
        deliverable: "Engineering Blueprint, Capability Map, Service Breakdown Structure, Sprint Plan",
        outcome: "Can convert architecture into executable engineering workstreams.",
      },
      {
        title: "Building the Core Business Capability",
        topics: "API design, backend development, authentication, authorization, service implementation, API standards",
        skills: "Backend engineering, secure API development, AI-assisted coding, service design",
        deliverable: "Working Business Service, API Documentation, Authentication Layer",
        outcome: "Can implement business capabilities that directly address customer requirements.",
      },
      {
        title: "Designing Systems That Scale",
        topics: "Database design, ORM, SQL optimization, integration patterns, event design, messaging fundamentals",
        skills: "Data layer engineering, scalability design, AI-assisted schema generation",
        deliverable: "Database Schema, Data Layer, Integration Design, Event Catalog",
        outcome: "Can design scalable systems that support future growth and integrations.",
      },
      {
        title: "Engineering with AI as a Force Multiplier",
        topics: "AI-assisted development, code reviews, debugging, testing strategies, documentation generation",
        skills: "AI pair programming, code quality improvement, automated testing, engineering productivity",
        deliverable: "Tested Codebase, Code Review Report, Unit Test Suite, Technical Documentation",
        outcome: "Can leverage AI responsibly to accelerate development while maintaining quality.",
      },
      {
        title: "Delivering Under Change and Pressure",
        topics: "Requirement changes, impact analysis, prioritisation, technical debt management, stakeholder communication",
        skills: "Adaptability, decision making, customer communication, delivery management",
        deliverable: "Updated Solution, Change Impact Assessment, Sprint Demo, Customer Review Presentation",
        outcome: "Can successfully navigate changing requirements without losing stakeholder confidence.",
      },
    ],
  },
  {
    weekNum: 4,
    title: "Building Intelligent Solutions",
    badge: "AI Core",
    days: [
      {
        title: "Identifying Where AI Creates Value",
        topics: "AI use-case discovery, AI transformation frameworks, opportunity assessment, ROI analysis, business value mapping, AI readiness assessment",
        skills: "AI consulting, business value analysis, opportunity identification, stakeholder alignment",
        deliverable: "AI Opportunity Assessment, AI Readiness Report, Prioritised Use Case Portfolio",
        outcome: "Can identify high-impact AI opportunities and connect AI initiatives to business outcomes.",
      },
      {
        title: "Turning Enterprise Knowledge into Intelligence",
        topics: "RAG fundamentals, document processing, chunking strategies, embeddings, vector databases, retrieval techniques",
        skills: "Knowledge engineering, information retrieval, AI solution design",
        deliverable: "Knowledge Architecture Blueprint, Ingestion Strategy, Retrieval Design Document",
        outcome: "Can design enterprise knowledge systems that transform organisational data into AI-accessible intelligence.",
      },
      {
        title: "Designing Agents That Can Reason and Act",
        topics: "Agentic workflows, LangChain, LangGraph, tool calling, MCP concepts, multi-agent systems, orchestration patterns",
        skills: "Agent design, workflow orchestration, tool integration, reasoning systems",
        deliverable: "Multi-Agent Architecture, Agent Responsibilities Matrix, Workflow Design",
        outcome: "Can design AI agents that collaborate, retrieve information, and perform actions autonomously.",
      },
      {
        title: "Building Trustworthy AI Systems",
        topics: "Prompt engineering, guardrails, hallucination mitigation, evaluation frameworks, responsible AI, governance, security",
        skills: "AI evaluation, prompt optimisation, risk management, governance implementation",
        deliverable: "AI Evaluation Framework, Guardrail Strategy, AI Risk Assessment Report",
        outcome: "Can assess and improve AI quality, reliability, and trustworthiness for enterprise environments.",
      },
      {
        title: "Advising Customers on AI Transformation",
        topics: "AI strategy consulting, executive communication, adoption roadmaps, organisational change management, AI operating models",
        skills: "AI consulting, executive storytelling, transformation planning, stakeholder influence",
        deliverable: "AI Transformation Proposal, Executive AI Roadmap, Customer AI Adoption Presentation",
        outcome: "Can advise executives on AI adoption strategies and justify AI investments with measurable business outcomes.",
      },
    ],
  },
  {
    weekNum: 5,
    title: "Operating at Production Scale",
    badge: "Operations",
    days: [
      {
        title: "Preparing for Production Reality",
        topics: "Production readiness reviews, cloud architecture, AWS fundamentals, security, IAM, networking, deployment strategies",
        skills: "Production planning, cloud architecture validation, security assessment, operational thinking",
        deliverable: "Production Readiness Assessment, Deployment Architecture, Security Review Report",
        outcome: "Can evaluate whether a solution is truly ready for production deployment.",
      },
      {
        title: "Automating Reliable Delivery",
        topics: "CI/CD, GitHub Actions, Jenkins, GitLab CI, infrastructure automation, release management",
        skills: "Pipeline design, release automation, deployment strategy, DevOps practices",
        deliverable: "End-to-End CI/CD Pipeline, Release Strategy, Deployment Runbook",
        outcome: "Can automate software delivery and reduce deployment risks.",
      },
      {
        title: "Building Resilient Platforms",
        topics: "Docker, Kubernetes, scaling patterns, service resilience, disaster recovery, high availability",
        skills: "Containerisation, orchestration, scalability planning, resiliency engineering",
        deliverable: "Containerised Platform, Kubernetes Deployment, HA Strategy Document",
        outcome: "Can design platforms that remain reliable under growth and failure scenarios.",
      },
      {
        title: "Detecting Problems Before Customers Do",
        topics: "Monitoring, observability, logging, tracing, Grafana, CloudWatch, alerting, AI-assisted operations",
        skills: "Observability design, dashboard creation, anomaly detection, operational intelligence",
        deliverable: "Monitoring Dashboard, Alerting Strategy, Operational Health Report",
        outcome: "Can establish observability systems that provide actionable operational insights.",
      },
      {
        title: "Leading Through Incidents and Recovery",
        topics: "Incident management, RCA, war-room operations, stakeholder communication, SRE practices, postmortems",
        skills: "Troubleshooting, RCA creation, executive communication, crisis management",
        deliverable: "Incident Response Report, RCA Document, Executive Incident Briefing",
        outcome: "Can lead technical and business stakeholders through production incidents effectively.",
      },
    ],
  },
  {
    weekNum: 6,
    title: "Leading Customer Transformation",
    badge: "Business",
    days: [
      {
        title: "Speaking the Language of Executives",
        topics: "Executive priorities, business metrics, value realization, financial drivers, board-level communication, storytelling",
        skills: "Executive communication, business acumen, value articulation, strategic thinking",
        deliverable: "Executive Briefing Pack, Business Value Assessment, Leadership Presentation",
        outcome: "Can communicate technical solutions in terms executives care about and secure stakeholder buy-in.",
      },
      {
        title: "Navigating Complex Stakeholder Landscapes",
        topics: "Stakeholder management, conflict resolution, influence without authority, negotiation, expectation management",
        skills: "Stakeholder engagement, negotiation, relationship building, conflict management",
        deliverable: "Stakeholder Engagement Plan, Negotiation Strategy, Risk Escalation Matrix",
        outcome: "Can effectively manage competing priorities and align diverse stakeholders.",
      },
      {
        title: "Driving AI Adoption and Organisational Change",
        topics: "Change management, AI adoption frameworks, operating model design, governance, workforce enablement",
        skills: "Change leadership, transformation planning, organisational consulting",
        deliverable: "AI Adoption Roadmap, Operating Model Proposal, Change Management Plan",
        outcome: "Can lead AI and technology adoption initiatives across organisations.",
      },
      {
        title: "Managing Escalations and Strategic Risks",
        topics: "Escalation management, crisis leadership, executive expectations, strategic risk assessment, customer recovery plans",
        skills: "Executive presence, crisis management, decision making under pressure",
        deliverable: "Executive Escalation Response Plan, Strategic Risk Register, Customer Recovery Strategy",
        outcome: "Can lead customers through difficult situations while preserving trust and confidence.",
      },
      {
        title: "Becoming a Trusted Strategic Advisor",
        topics: "Consulting frameworks, long-term roadmap planning, innovation workshops, customer success strategy, account growth opportunities",
        skills: "Strategic consulting, roadmap development, innovation leadership",
        deliverable: "Customer Transformation Strategy, 12-Month Roadmap, Executive Advisory Presentation",
        outcome: "Can evolve from solution provider to long-term trusted advisor.",
      },
    ],
  },
  {
    weekNum: 7,
    title: "FDE Residency: Customer Engagement Under Fire",
    badge: "Live Project",
    days: [
      {
        title: "Entering the Customer Battlefield",
        topics: "Customer kickoff, stakeholder interviews, business objectives, hidden requirements, engagement planning",
        skills: "Discovery leadership, stakeholder management, ambiguity handling",
        deliverable: "Engagement Charter, Stakeholder Analysis, Discovery Summary, Risk Log",
        outcome: "Can rapidly understand a customer situation and establish engagement direction.",
      },
      {
        title: "Surviving Requirement Volatility",
        topics: "Requirement changes, scope negotiation, prioritisation, expectation management, tradeoff discussions",
        skills: "Adaptability, consulting communication, decision making",
        deliverable: "Updated Requirements, Scope Analysis, Tradeoff Assessment, Executive Update",
        outcome: "Can manage shifting priorities without losing stakeholder confidence.",
      },
      {
        title: "Solving Problems Across Organisational Boundaries",
        topics: "Cross-functional coordination, architecture conflicts, integration issues, vendor dependencies",
        skills: "Systems thinking, collaboration, escalation management",
        deliverable: "Resolution Plan, Integration Strategy, Dependency Management Report",
        outcome: "Can drive progress across multiple teams and conflicting interests.",
      },
      {
        title: "Responding When Everything Goes Wrong",
        topics: "Production incidents, AI failures, outages, executive escalations, operational recovery",
        skills: "Incident leadership, crisis communication, RCA facilitation",
        deliverable: "Incident Report, Recovery Plan, Executive Communication Package",
        outcome: "Can lead during high-pressure operational failures.",
      },
      {
        title: "Defending Your Recommendations",
        topics: "Executive reviews, architecture defense, AI strategy defense, customer objections",
        skills: "Executive influence, persuasion, advisory communication",
        deliverable: "Executive Steering Committee Presentation, Recommendation Defense",
        outcome: "Can confidently defend decisions before senior stakeholders.",
      },
    ],
  },
  {
    weekNum: 8,
    title: "FDE Certification Residency & Executive Board Review",
    badge: "Capstone",
    days: [
      {
        title: "Winning the Customer's Trust",
        topics: "Customer discovery, stakeholder interviews, business objectives, AI opportunities, hidden requirements",
        skills: "Executive discovery, consulting, business analysis, relationship building",
        deliverable: "Discovery Report, Stakeholder Map, Business Opportunity Assessment",
        outcome: "Can establish credibility and identify strategic business opportunities.",
      },
      {
        title: "Creating the Transformation Vision",
        topics: "Solution design, architecture options, AI strategy, operating model recommendations, roadmap planning",
        skills: "Solution architecture, strategic thinking, AI consulting",
        deliverable: "Transformation Strategy Document, Architecture Proposal, AI Adoption Strategy",
        outcome: "Can translate business needs into a compelling transformation vision.",
      },
      {
        title: "Delivering Executive-Level Solutions",
        topics: "MVP planning, implementation strategy, operating model, cost estimation, risk management",
        skills: "Programme planning, prioritisation, delivery strategy, tradeoff management",
        deliverable: "Delivery Roadmap, Risk Register, Cost & Value Assessment",
        outcome: "Can build realistic transformation plans balancing value, risk, and speed.",
      },
      {
        title: "Defending the Strategy Under Pressure",
        topics: "Executive objections, architecture reviews, AI governance concerns, security reviews, budget reductions",
        skills: "Executive influence, negotiation, crisis response, advisory communication",
        deliverable: "Revised Proposal, Executive Response Pack, Governance Plan",
        outcome: "Can adapt recommendations while maintaining strategic direction.",
      },
      {
        title: "Facing the Certification Board",
        topics: "Final executive presentation, customer Q&A, board review, recommendation defense",
        skills: "Executive storytelling, leadership presence, strategic advisory skills",
        deliverable: "Final Transformation Proposal, Executive Presentation, Certification Defense",
        outcome: "Demonstrates readiness to function as an elite Forward Deployed Engineer.",
      },
    ],
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
  Foundation:    'bg-blue-500/20 text-blue-400 border-blue-500/30',
  Technical:     'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'AI Core':     'bg-primary/20 text-primary border-primary/30',
  Operations:    'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  Business:      'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Leadership:    'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'Live Project':'bg-rose-500/20 text-rose-400 border-rose-500/30',
  Capstone:      'bg-primary/30 text-primary border-primary/50',
};

export type Tab = 'senior' | 'junior' | 'architect';

type BasicModule = { title: string; duration: string; sessions: number | string; desc: string; topics: string[]; outcome: string; badge: string };

const tabs: { id: Tab; label: string; subtitle: string; modules?: BasicModule[] }[] = [
  { id: 'junior',    label: 'Junior FDE',         subtitle: '6-Module Intensive · 6 months',      modules: juniorModules },
  { id: 'senior',    label: 'Senior FDE',          subtitle: '8-Week Intensive · 2 months' },
  { id: 'architect', label: 'Solutions Architect', subtitle: '5-Module Elite Track · 12 months',  modules: architectModules },
];

function SeniorModuleList() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-100px' });
  const [openWeek, setOpenWeek] = useState<number>(0);
  const [openDay, setOpenDay]   = useState<number>(0);

  return (
    <div ref={ref} className="space-y-3">
      {seniorWeeks.map((week, wi) => (
        <motion.div
          key={wi}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: wi * 0.07 }}
          className={cn('glass-card rounded-2xl overflow-hidden transition-all duration-300', openWeek === wi && 'border-primary/40 shadow-[0_0_30px_rgba(229,106,26,0.1)]')}
        >
          {/* Week header */}
          <button
            onClick={() => { setOpenWeek(openWeek === wi ? -1 : wi); setOpenDay(0); }}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className={cn('w-10 h-10 rounded-full flex items-center justify-center font-bold text-base transition-all duration-300 flex-shrink-0',
                openWeek === wi ? 'bg-primary text-white shadow-[0_0_15px_rgba(229,106,26,0.5)]' : 'bg-white/5 text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary')}>
                W{week.weekNum}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 flex-wrap mb-1">
                  <h4 className={cn('text-lg font-display font-bold transition-colors', openWeek === wi ? 'text-primary' : 'text-white group-hover:text-primary')}>
                    {week.title}
                  </h4>
                  <span className={cn('text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full border', badgeColors[week.badge] || badgeColors.Technical)}>
                    {week.badge}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <BookOpen className="w-3 h-3" />{week.days.length} days
                </div>
              </div>
            </div>
            <ChevronDown className={cn('w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4', openWeek === wi ? 'rotate-180 text-primary' : '')} />
          </button>

          {/* Days */}
          <AnimatePresence initial={false}>
            {openWeek === wi && (
              <motion.div
                key="days"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6 pt-0 ml-14 space-y-2">
                  {week.days.map((day, di) => (
                    <div key={di} className={cn('rounded-xl border transition-all duration-200', openDay === di ? 'border-primary/30 bg-primary/5' : 'border-white/5 bg-white/2 hover:border-white/15')}>
                      <button
                        onClick={() => setOpenDay(openDay === di ? -1 : di)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left focus:outline-none"
                      >
                        <div className="flex items-center gap-3">
                          <div className={cn('w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0', openDay === di ? 'bg-primary text-white' : 'bg-white/10 text-muted-foreground')}>
                            {di + 1}
                          </div>
                          <span className={cn('text-sm font-semibold', openDay === di ? 'text-primary' : 'text-white/90')}>{day.title}</span>
                        </div>
                        <ChevronDown className={cn('w-4 h-4 text-muted-foreground transition-transform duration-200 flex-shrink-0', openDay === di ? 'rotate-180 text-primary' : '')} />
                      </button>

                      <AnimatePresence initial={false}>
                        {openDay === di && (
                          <motion.div
                            key="day-content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 space-y-3">
                              {/* Topics */}
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1.5">Topics</p>
                                <div className="flex flex-wrap gap-1.5">
                                  {day.topics.split(',').map((t, ti) => (
                                    <span key={ti} className="text-xs bg-white/5 border border-white/10 text-white/70 px-2 py-0.5 rounded-full">{t.trim()}</span>
                                  ))}
                                </div>
                              </div>
                              {/* Skills */}
                              <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-1.5">Skills Practised</p>
                                <p className="text-xs text-white/70 leading-relaxed">{day.skills}</p>
                              </div>
                              {/* Deliverable */}
                              <div className="flex items-start gap-2 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20">
                                <Layers className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400 mb-0.5">Deliverable</p>
                                  <p className="text-xs text-white/80">{day.deliverable}</p>
                                </div>
                              </div>
                              {/* Outcome */}
                              <div className="flex items-start gap-2 p-3 rounded-lg bg-primary/10 border border-primary/20">
                                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-0.5">Outcome</p>
                                  <p className="text-xs text-white/90">{day.outcome}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

function ModuleList({ modules }: { modules: BasicModule[] }) {
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

interface CurriculumProps {
  open?: boolean;
  activeTab?: Tab;
}

export function Curriculum({ open = true, activeTab: controlledTab }: CurriculumProps = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<Tab>(controlledTab ?? 'senior');

  useEffect(() => {
    if (controlledTab) setActiveTab(controlledTab);
  }, [controlledTab]);

  const currentTab = tabs.find(t => t.id === activeTab)!;

  return (
    <section id="curriculum" ref={ref} className="py-32 bg-background border-t border-border/50">
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

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
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
                  {activeTab === 'senior'
                    ? <SeniorModuleList />
                    : <ModuleList modules={currentTab.modules!} />
                  }
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
