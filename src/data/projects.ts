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
    gallery: [
      '/images/projects/aria-agentic-system/01-sign-in.png',
      '/images/projects/aria-agentic-system/02-menu-options.png',
      '/images/projects/aria-agentic-system/03-home-page.png',
      '/images/projects/aria-agentic-system/04-home-page-agent-access.png',
      '/images/projects/aria-agentic-system/05-quick-chat.png',
      '/images/projects/aria-agentic-system/06-audio-converse.png',
      '/images/projects/aria-agentic-system/07-chat-agent-config.png',
      '/images/projects/aria-agentic-system/08-file-manager.png',
      '/images/projects/aria-agentic-system/09-monitoring-1-vision.png',
      '/images/projects/aria-agentic-system/10-monitoring-2-activity-tracking.png',
      '/images/projects/aria-agentic-system/11-monitoring-3-traces.png',
      '/images/projects/aria-agentic-system/12-monitoring-4-tools.png',
      '/images/projects/aria-agentic-system/13-monitoring-5-alerts.png',
      '/images/projects/aria-agentic-system/14-admin-1-calendar.png',
      '/images/projects/aria-agentic-system/15-admin-2-email.png',
      '/images/projects/aria-agentic-system/16-admin-3-phone-calls.png',
      '/images/projects/aria-agentic-system/17-admin-4-reservations.png',
      '/images/projects/aria-agentic-system/18-admin-5-contacts.png',
      '/images/projects/aria-agentic-system/19-admin-6-workflow-automation.png',
      '/images/projects/aria-agentic-system/20-settings-1.png',
      '/images/projects/aria-agentic-system/21-settings-2.png',
      '/images/projects/aria-agentic-system/22-keyboard-shortcuts.png',
    ],
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
    codeUrl: 'https://github.com/FOKanu/doctai-health-hub',
    metric: 'Modular UI with 30+ tested components',
    gallery: [
      '/images/projects/doctai-health-hub/01-sign-in.png',
      '/images/projects/doctai-health-hub/02-dashboard-1.png',
      '/images/projects/doctai-health-hub/03-dashboard-2.png',
      '/images/projects/doctai-health-hub/04-dashboard-3.png',
      '/images/projects/doctai-health-hub/05-analytics-overview.png',
      '/images/projects/doctai-health-hub/06-analytics-health-score.png',
      '/images/projects/doctai-health-hub/07-analytics-imaging.png',
      '/images/projects/doctai-health-hub/08-analytics-progress-tracking.png',
      '/images/projects/doctai-health-hub/09-medical-records.png',
      '/images/projects/doctai-health-hub/10-find-care.png',
      '/images/projects/doctai-health-hub/11-scheduling.png',
      '/images/projects/doctai-health-hub/12-history.png',
      '/images/projects/doctai-health-hub/13-diet-plan-1.png',
      '/images/projects/doctai-health-hub/14-diet-plan-2.png',
      '/images/projects/doctai-health-hub/15-fitness-1.png',
      '/images/projects/doctai-health-hub/16-fitness-datasync.png',
      '/images/projects/doctai-health-hub/17-risk-analysis.png',
      '/images/projects/doctai-health-hub/18-settings.png',
      '/images/projects/doctai-health-hub/19-user-profile.png',
    ],
  },
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
