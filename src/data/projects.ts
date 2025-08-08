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
      'Comprehensive healthcare platform integrating AI-powered diagnostics with patient management and telemedicine capabilities.',
    technologies: [
      'React',
      'TypeScript',
      'Vite',
      'Supabase',
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
    slug: 'handwritten-image-recognition',
    title: 'Handwritten Image Recognition',
    description:
      'Production-ready Convolutional Neural Network (CNN) for handwritten digit recognition using MNIST dataset. Achieves 95.23% accuracy with comprehensive evaluation and visualization.',
    technologies: [
      'Python',
      'TensorFlow',
      'Keras',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'Jupyter',
      'Flask',
      'Plotly',
    ],
    category: 'AI/ML Computer Vision',
    status: 'Production',
    image: 'mnist-recognition',
    demoUrl: 'https://github.com/FOKanu/My_MNIST_Image_Classification',
    codeUrl: 'https://github.com/FOKanu/My_MNIST_Image_Classification',
    metric: '95.23% test accuracy on MNIST',
  },
  {
    slug: 'wealth-wise-finance',
    title: 'Wealth Wise Finance',
    description:
      'Machine learning-powered financial analysis and wealth management platform with predictive analytics and portfolio optimization.',
    technologies: [
      'React',
      'TypeScript',
      'React Native',
      'Electron',
      'XGBoost',
      'LightGBM',
      'Scikit-learn',
      'YFinance',
      'Pandas',
      'NumPy',
      'Optuna',
      'Supabase',
      'Framer Motion',
    ],
    category: 'ML/Finance',
    status: 'Production',
    image: 'wealth-wise',
    demoUrl: 'https://github.com/FOKanu/wealthwise-ml',
    codeUrl: 'https://github.com/FOKanu/wealthwise-ml',
    metric: 'Automated feature pipelines across multiple data sources',
  },
  {
    slug: 'nba-performance-analytics',
    title: 'NBA Performance Analytics',
    description:
      'Comprehensive NBA player performance analysis using multiple linear regression models including Ridge, Lasso, and Elastic Net regression.',
    technologies: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Streamlit',
      'Plotly',
      'Pytest',
      'Jupyter',
      'Black',
      'Flake8',
      'MyPy',
    ],
    category: 'ML/Sports Analytics',
    status: 'Production',
    image: 'nba-analytics',
    demoUrl: 'https://github.com/FOKanu/NBA-Perfomance-Analytics-with-Linear-Regression',
    codeUrl: 'https://github.com/FOKanu/NBA-Perfomance-Analytics-with-Linear-Regression',
    metric: 'Explains variance with regularized linear models',
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

