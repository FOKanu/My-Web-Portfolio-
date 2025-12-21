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
};

export const projects: Project[] = [
  {
    slug: 'skin-check-ai',
    title: 'Skin Check AI',
    description:
      'AI-powered skin lesion detection mobile application using computer vision and deep learning to assist in early dermatological diagnosis.',
    technologies: [
      'React Native',
      'Expo',
      'Supabase',
      'TensorFlow',
      'OpenCV',
      'React Navigation',
      'Expo Camera',
      'React Native Calendars',
    ],
    category: 'AI/ML Healthcare',
    status: 'Production',
    image: 'skin-check-ai',
    demoUrl: 'https://github.com/FOKanu/SkinCancerCheckMobile',
    codeUrl: 'https://github.com/FOKanu/SkinCancerCheckMobile',
    metric: 'Used by early testers to triage 100+ skin photos',
  },
  {
    slug: 'doctai-health-hub',
    title: 'DoctAI Health Hub',
    description:
      'Comprehensive healthcare platform integrating AI-powered diagnostics with patient management and telemedicine capabilities. Features an ensemble of machine learning algorithms for enhanced diagnostic accuracy.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Supabase',
      'PyTorch',
      'Radix UI',
      'Tailwind CSS',
      'React Query',
      'React Hook Form',
      'Zod',
      'Playwright',
      'Jest',
    ],
    category: 'AI/ML Healthcare',
    status: 'Production',
    image: 'doctai-health-hub',
    demoUrl: 'https://github.com/FOKanu/doctai-health-hub',
    codeUrl: 'https://github.com/FOKanu/doctai-health-hub',
    metric: 'Modular UI with 30+ tested components',
  },
  {
    slug: 'aria-agentic-system',
    title: 'Aria Agentic System',
    description:
      'A hybrid AI agentic system balancing privacy and accessibility. It attempts to connect to a local Ollama instance for 100% privacy and falls back to Supabase Edge Functions routing to Gemini 1.5 Flash.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Supabase',
      'Tailwind CSS',
      'Ollama',
      'Gemini API',
    ],
    category: 'AI/Agents',
    status: 'Production',
    image: 'aria-agent',
    demoUrl: '#',
    codeUrl: '#',
    metric: 'Hybrid AI Architecture: Local-First Privacy with Cloud Fallback',
  },
  {
    slug: 'oasis-finance',
    title: 'Oasis Finance',
    description:
      'Machine learning-powered financial analysis platform featuring a Hybrid RNN-Transformer model for market prediction. Integrates LSTM for sequential processing and multi-head attention.',
    technologies: [
      'Python',
      'TensorFlow',
      'React',
      'TypeScript',
      'Vite',
      'Google Cloud',
      'REST API',
    ],
    category: 'AI/Finance',
    status: 'Production',
    image: 'oasis-finance',
    demoUrl: '#',
    codeUrl: '#',
    metric: 'Hybrid RNN-Transformer Architecture with Multi-head Attention',
  },
  {
    slug: 'berlin-connect',
    title: 'Berlin Connect',
    description:
      'AI-powered social discovery platform for Berlin. Features smart algorithms for personalized event recommendations and connecting users with shared professional and personal interests.',
    technologies: [
      'React',
      'TypeScript',
      'Supabase',
      'Tailwind CSS',
      'Radix UI',
      'PostgreSQL',
    ],
    category: 'Social/AI',
    status: 'Production',
    image: 'berlin-connect',
    demoUrl: '#',
    codeUrl: '#',
    metric: 'Smart Discovery Algorithm for Personalized Matching',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
