export const MENTORS = [
  {
    id: '1',
    name: 'Arjun Mehta',
    role: 'Principal Engineer',
    experience: '14y exp',
    expertise: ['AI/ML Architecture', 'System Design', 'Cloud'],
    image: '/images/mentor-1.jpg',
    email: 'arjun.mehta@globallogic.com'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Solutions Director',
    experience: '16y exp',
    expertise: ['Enterprise Consulting', 'Strategy', 'Delivery'],
    image: '/images/mentor-2.jpg',
    email: 'priya.sharma@globallogic.com'
  },
  {
    id: '3',
    name: 'David Chen',
    role: 'Cloud Architect',
    experience: '12y exp',
    expertise: ['AWS/GCP/Azure', 'Kubernetes', 'DevOps'],
    image: '/images/mentor-3.jpg',
    email: 'david.chen@globallogic.com'
  },
  {
    id: '4',
    name: 'Sarah Mitchell',
    role: 'FDE Lead',
    experience: '10y exp',
    expertise: ['GenAI Engineering', 'RAG', 'LLMs'],
    image: '/images/mentor-4.jpg',
    email: 'sarah.mitchell@globallogic.com'
  },
  {
    id: '5',
    name: 'Rahul Gupta',
    role: 'Technology VP',
    experience: '18y exp',
    expertise: ['Digital Transformation', 'Leadership', 'Agile'],
    image: '/images/mentor-5.jpg',
    email: 'rahul.gupta@globallogic.com'
  },
  {
    id: '6',
    name: 'Emily Watson',
    role: 'Principal Consultant',
    experience: '13y exp',
    expertise: ['Agile Delivery', 'Product Mgt', 'Stakeholders'],
    image: '/images/mentor-6.jpg',
    email: 'emily.watson@globallogic.com'
  }
];

export const PROGRAMS = [
  {
    id: 'junior-fde',
    title: 'Junior FDE',
    experience: '1-3 years experience',
    duration: '6-month intensive',
    focus: 'Technical depth + client delivery basics',
    projects: '3 live client projects',
    outcomes: 'FDE certification, placement support',
    link: '/programs/junior-fde'
  },
  {
    id: 'senior-fde',
    title: 'Senior FDE',
    experience: '3-7 years experience',
    duration: '9-month comprehensive',
    focus: 'Full-stack consulting + AI engineering + leadership',
    projects: '8 curriculum modules + Residency',
    outcomes: 'Senior FDE certification + leadership track',
    link: '/programs/senior-fde',
    recommended: true
  },
  {
    id: 'solutions-architect',
    title: 'Solutions Architect',
    experience: '7+ years experience',
    duration: '12-month elite',
    focus: 'Enterprise architecture + cloud strategy',
    projects: 'Executive consulting engagements',
    outcomes: 'SA certification + partner-track opportunities',
    link: '/programs/solutions-architect'
  }
];

export const PROJECTS = [
  {
    title: 'AI-Powered Customer Churn Prediction',
    client: 'Retail',
    impact: '40% reduction in churn',
    tech: ['Python', 'TensorFlow', 'AWS SageMaker', 'React'],
    outcome: 'Built end-to-end pipeline handling 10M+ daily records'
  },
  {
    title: 'Real-Time Supply Chain Optimization',
    client: 'Manufacturing',
    impact: '$12M annual savings',
    tech: ['Kafka', 'Spark', 'Databricks', 'Azure'],
    outcome: 'Reduced inventory holding costs by 22%'
  },
  {
    title: 'Intelligent Document Processing',
    client: 'Insurance',
    impact: '85% manual work reduction',
    tech: ['GenAI', 'LangChain', 'OCR', 'FastAPI'],
    outcome: 'Automated claims processing for 50k documents/month'
  }
];

export const SUCCESS_STORIES = [
  {
    name: 'Vikram Nair',
    role: 'Senior FDE @ Infosys',
    previousRole: 'Backend Engineer',
    quote: 'The FDE program gave me the language to speak business and the tools to build AI systems. Joined as a backend engineer, now leading AI transformation.',
    avatar: '/images/mentor-1.jpg'
  },
  {
    name: 'Anita Desai',
    role: 'AI Solutions Architect @ TCS',
    previousRole: 'Data Scientist',
    quote: 'Moving from model building to solving actual business problems was the hardest leap. FDE Academy provided the exact bridge I needed.',
    avatar: '/images/mentor-2.jpg'
  },
  {
    name: 'James Wilson',
    role: 'Principal Engineer @ Deloitte',
    previousRole: 'Full Stack Developer',
    quote: 'The emphasis on executive communication and ROI-driven engineering completely changed the trajectory of my career. Highly recommended.',
    avatar: '/images/mentor-3.jpg'
  },
  {
    name: 'Sofia Martinez',
    role: 'FDE Lead @ McKinsey',
    previousRole: 'Cloud Engineer',
    quote: 'I learned how to not just build architecture, but to sell the vision to stakeholders. That is the true superpower of an FDE.',
    avatar: '/images/mentor-4.jpg'
  }
];

export const FAQS = [
  {
    category: 'General',
    items: [
      { q: 'What is a Forward Deployed Engineer?', a: 'An FDE bridges the gap between complex AI/ML engineering and tangible business value. They sit at the intersection of consulting, architecture, and hands-on development.' },
      { q: 'Is this an online or offline program?', a: 'The program is a hybrid model. Core curriculum is delivered live online, while the residency and capstone projects often involve in-person client engagement.' },
      { q: 'Do I need to quit my job?', a: 'No, the programs are designed for working professionals, requiring 15-20 hours per week of dedicated time.' }
    ]
  },
  {
    category: 'Programs',
    items: [
      { q: 'Which program is right for me?', a: 'Choose based on your experience: Junior (1-3 yrs), Senior (3-7 yrs), or Solutions Architect (7+ yrs). If in doubt, apply and our advisors will guide you.' },
      { q: 'What is the selection process?', a: 'Application -> Technical Assessment -> Behavioral Interview -> Program Offer.' },
      { q: 'Are there scholarships available?', a: 'Yes, we offer partial scholarships based on merit and diversity criteria.' }
    ]
  },
  {
    category: 'Curriculum',
    items: [
      { q: 'How much coding is involved?', a: 'Significant. This is not a pure management course. You will be writing production-grade code, designing systems, and deploying AI models.' },
      { q: 'What AI frameworks do you cover?', a: 'We focus on modern stacks: PyTorch, LangChain, LlamaIndex, OpenAI APIs, HuggingFace, deployed on AWS/Azure/GCP.' }
    ]
  }
];

export const BLOGS = [
  {
    title: 'Why Every Enterprise Needs Forward Deployed Engineers',
    category: 'Enterprise',
    excerpt: 'The missing link between AI strategy and execution is a new breed of engineer who understands both.',
    date: 'Oct 12, 2024'
  },
  {
    title: 'RAG in Production: Hard Lessons Learned',
    category: 'Engineering',
    excerpt: 'Moving from a Jupyter notebook to a scalable, robust Retrieval-Augmented Generation system.',
    date: 'Oct 05, 2024'
  },
  {
    title: 'The FDE Career Path: From Code to Boardroom',
    category: 'Career',
    excerpt: 'How developing business acumen accelerates your technical career faster than mastering another framework.',
    date: 'Sep 28, 2024'
  }
];

export const EVENTS = [
  {
    title: 'The Future of AI Engineering',
    type: 'Webinar',
    date: 'Nov 15, 2024',
    status: 'upcoming'
  },
  {
    title: 'FDE Open House & Info Session',
    type: 'Open House',
    date: 'Nov 20, 2024',
    status: 'upcoming'
  },
  {
    title: 'System Design for LLMs',
    type: 'Workshop',
    date: 'Oct 10, 2024',
    status: 'past'
  }
];
