export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  status: string;
  image: string;
  demoUrl: string;
  codeUrl: string;
  metric?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    slug: 'appfly',
    title: 'AppFly',
    description:
      'Local-first job-search copilot. Scouts and matches listings on your own machine, drafts Gemini cover letters from your CV and voice samples, and puts every draft in front of you for review — you submit applications yourself. Secrets live in the OS keychain and a crawl deny-list (LinkedIn, Indeed, Stepstone…) is enforced in code.',
    technologies: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite', 'Gemini API'],
    category: 'AI/Productivity',
    status: 'Open source',
    image: 'appfly',
    demoUrl: '#',
    codeUrl: 'https://github.com/FOKanu/AppFly',
    metric: '87 test files · 3-job CI · local-first, no cloud account',
  },
  {
    slug: 'unitik-college-ticketing',
    title: 'UniTik — College Ticketing System',
    description:
      'Self-hosted, privacy-compliant university support ticketing platform with a chatbot front door, role-based access (Student / Staff / Admin), AI-assisted ticket classification and an FAQ knowledge base with semantic search. Team project — I was the largest individual contributor.',
    technologies: ['FastAPI', 'PostgreSQL', 'pgvector', 'Redis', 'React', 'Docker'],
    category: 'Full-Stack',
    status: 'Team project',
    image: 'unitik',
    demoUrl: '#',
    codeUrl: 'https://github.com/FOKanu/UniTik-College-Ticketing-Sytem',
    metric: '43 test files (~230 cases) · bilingual EN/DE FAQ retrieval',
  },
  {
    slug: 'skin-check-ai',
    title: 'Skin Check AI',
    description:
      'React Native prototype: photograph a skin lesion, score it with a FastAPI/PyTorch inference API (binary Low/High Risk with confidence), and track results per body spot over time in Supabase with owner-only Row Level Security. Research prototype — not a medical device, and not clinically validated.',
    technologies: [
      'React Native',
      'Expo',
      'FastAPI',
      'PyTorch',
      'Supabase',
      'React Navigation',
      'Expo Camera',
    ],
    category: 'AI/ML Healthcare',
    status: 'Research prototype',
    image: 'skin-check-ai',
    demoUrl: '#',
    codeUrl: 'https://github.com/FOKanu/SkinCancerCheckMobile',
    metric: 'Binary Low/High-risk scoring · Supabase RLS (owner-only policies)',
    gallery: ['/images/projects/skin-check-ai-logo.png'],
  },
  {
    slug: 'emotion-classification-ml',
    title: 'Machine Learning Notebooks',
    description:
      'Jupyter notebooks training image classifiers (EfficientNet B2, RegNetY 800MF) for facial-emotion categories where a geometric, rule-based approach performed inconsistently. Built to complement a mobile emotion-recognition application.',
    technologies: [
      'Python',
      'Jupyter Notebook',
      'PyTorch',
      'EfficientNet B2',
      'RegNetY 800MF',
      'Computer Vision',
    ],
    category: 'AI/ML',
    status: 'Completed',
    image: 'emotion-classification',
    demoUrl: '#',
    codeUrl: 'https://github.com/FOKanu/ML-Notebook-Emotion-Classification',
    metric: '81.2–81.7% test accuracy across the two models (see repo README)',
    gallery: [
      '/images/projects/emotion-classification-ml/02-regnet-notebook.png',
      '/images/projects/emotion-classification-ml/03-regnet-notebook.png',
      '/images/projects/emotion-classification-ml/04-regnet-notebook.png',
      '/images/projects/emotion-classification-ml/05-regnet-notebook.png',
      '/images/projects/emotion-classification-ml/06-regnet-notebook.png',
      '/images/projects/emotion-classification-ml/07-regnet-notebook.png',
      '/images/projects/emotion-classification-ml/08-regnet-notebook.png',
      '/images/projects/emotion-classification-ml/09-regnet-notebook.png',
      '/images/projects/emotion-classification-ml/10-regnet-notebook.png',
      '/images/projects/emotion-classification-ml/11-regnet-notebook.png',
    ],
  },
  {
    slug: 'college-library-db',
    title: 'College Library DB',
    description:
      'Relational database for a university library: circulation (loans, reservations, fines), textbook–course linking, and research publication management with citations and access control. Database Systems coursework in a team of three.',
    technologies: ['MySQL', 'SQL', 'Database Design', '3NF', 'Triggers'],
    category: 'Data',
    status: 'Coursework',
    image: 'college-library-db',
    demoUrl: '#',
    codeUrl: 'https://github.com/FOKanu/College-Library_DB',
    metric: '16 tables · 3NF schema · triggers and seed data',
  },
  {
    slug: 'claude-skills',
    title: 'Claude Skills',
    description:
      'Reusable, structured playbooks ("skills") that turn generic LLM prompting into repeatable workflows — including a clinical-recommendation extractor that converts healthcare evidence (guidelines, research, implementation reports) into implementation-ready outputs.',
    technologies: ['LLM Tooling', 'Claude', 'Markdown', 'Structured Prompting', 'AI Agents'],
    category: 'AI/Agents',
    status: 'Open source',
    image: 'claude-skills',
    demoUrl: '#',
    codeUrl: 'https://github.com/FOKanu/Claude-Skills',
    metric: '2 production-ready domain skills for AI agents',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
