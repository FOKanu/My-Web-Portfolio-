import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Skin Check AI',
      description: 'AI-powered skin lesion detection mobile application using computer vision and deep learning to assist in early dermatological diagnosis.',
      technologies: ['React Native', 'Expo', 'Supabase', 'TensorFlow', 'OpenCV', 'React Navigation', 'Expo Camera', 'React Native Calendars'],
      category: 'AI/ML Healthcare',
      status: 'Production',
      image: 'skin-check-ai',
      demoUrl: 'https://github.com/FOKanu/SkinCancerCheckMobile', // Link to GitHub for demo
      codeUrl: 'https://github.com/FOKanu/SkinCancerCheckMobile'
    },
    {
      title: 'DoctAI Health Hub',
      description: 'Comprehensive healthcare platform integrating AI-powered diagnostics with patient management and telemedicine capabilities.',
      technologies: ['React', 'TypeScript', 'Vite', 'Supabase', 'Radix UI', 'Tailwind CSS', 'React Query', 'React Hook Form', 'Zod', 'Playwright', 'Jest'],
      category: 'AI/ML Healthcare',
      status: 'Production',
      image: 'doctai-health-hub',
      demoUrl: 'https://github.com/FOKanu/doctai-health-hub', // Link to GitHub for demo
      codeUrl: 'https://github.com/FOKanu/doctai-health-hub'
    },
    {
      title: 'Handwritten Image Recognition',
      description: 'Production-ready Convolutional Neural Network (CNN) for handwritten digit recognition using MNIST dataset. Achieves 95.23% accuracy with comprehensive evaluation and visualization.',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'Jupyter', 'Flask', 'Plotly'],
      category: 'AI/ML Computer Vision',
      status: 'Production',
      image: 'mnist-recognition',
      demoUrl: 'https://github.com/FOKanu/My_MNIST_Image_Classification', // Link to GitHub for demo
      codeUrl: 'https://github.com/FOKanu/My_MNIST_Image_Classification'
    },
    {
      title: 'Wealth Wise Finance',
      description: 'Machine learning-powered financial analysis and wealth management platform with predictive analytics and portfolio optimization.',
      technologies: ['React', 'TypeScript', 'React Native', 'Electron', 'XGBoost', 'LightGBM', 'Scikit-learn', 'YFinance', 'Pandas', 'NumPy', 'Optuna', 'Supabase', 'Framer Motion'],
      category: 'ML/Finance',
      status: 'Production',
      image: 'wealth-wise',
      demoUrl: 'https://github.com/FOKanu/wealthwise-ml', // Link to GitHub for demo
      codeUrl: 'https://github.com/FOKanu/wealthwise-ml'
    },
    {
      title: 'NBA Performance Analytics',
      description: 'Comprehensive NBA player performance analysis using multiple linear regression models including Ridge, Lasso, and Elastic Net regression.',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Streamlit', 'Plotly', 'Pytest', 'Jupyter', 'Black', 'Flake8', 'MyPy'],
      category: 'ML/Sports Analytics',
      status: 'Production',
      image: 'nba-analytics',
      demoUrl: 'https://github.com/FOKanu/NBA-Perfomance-Analytics-with-Linear-Regression', // Link to GitHub for demo
      codeUrl: 'https://github.com/FOKanu/NBA-Perfomance-Analytics-with-Linear-Regression'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions at the intersection of healthcare and technology
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full border-primary/30 hover:border-primary hover:shadow-glow transition-smooth"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className={`flex-1 max-w-4xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <Card className="card-professional hover-lift">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Project Info */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="outline"
                          className="border-primary/30 text-primary font-medium"
                        >
                          {projects[currentProject].category}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-accent/20 text-accent"
                        >
                          {projects[currentProject].status}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-gradient mb-4">
                          {projects[currentProject].title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {projects[currentProject].description}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[currentProject].technologies.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-secondary/30 text-secondary"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button
                          className="bg-gradient-primary hover:shadow-glow transition-smooth"
                          asChild
                        >
                          <a href={projects[currentProject].codeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" size={18} />
                            View Code
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary/30 hover:border-primary transition-smooth"
                          asChild
                        >
                          <a href={projects[currentProject].demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2" size={18} />
                            Live Demo
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Project Visual */}
                    <div className="relative">
                      <a
                        href={projects[currentProject].demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer group"
                      >
                        <div className="aspect-video bg-gradient-card rounded-lg border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300">
                          {projects[currentProject].title === 'Skin Check AI' ? (
                            <div className="text-center p-8">
                              <img 
                                src="/images/projects/skin-check-ai-logo.png" 
                                alt="Skin Check AI Logo"
                                className="w-32 h-32 object-contain mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                              />
                              <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Project Preview</p>
                              <p className="text-sm text-muted-foreground/70 mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                {projects[currentProject].title}
                              </p>
                              <p className="text-xs text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Click to view demo →
                              </p>
                            </div>
                          ) : projects[currentProject].title === 'DoctAI Health Hub' ? (
                            <div className="text-center p-8">
                              <img 
                                src="/images/projects/doctai-logo.png" 
                                alt="DoctAI Health Hub Logo"
                                className="w-40 h-32 object-contain mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 rounded-lg"
                              />
                              <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Project Preview</p>
                              <p className="text-sm text-muted-foreground/70 mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                {projects[currentProject].title}
                              </p>
                              <p className="text-xs text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Click to view demo →
                              </p>
                            </div>
                          ) : (
                            <div className="text-center p-8">
                              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-all duration-300">
                                <div className="w-12 h-12 bg-primary rounded-full animate-glow group-hover:scale-110 transition-transform duration-300"></div>
                              </div>
                              <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Project Preview</p>
                              <p className="text-sm text-muted-foreground/70 mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                {projects[currentProject].title}
                              </p>
                              <p className="text-xs text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Click to view demo →
                              </p>
                            </div>
                          )}
                        </div>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full border-primary/30 hover:border-primary hover:shadow-glow transition-smooth"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-primary shadow-glow'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:border-primary hover:shadow-glow transition-smooth"
            asChild
          >
            <a href="https://github.com/FOKanu" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2" size={20} />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
