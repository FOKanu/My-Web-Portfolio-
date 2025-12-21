import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects as projectData } from '@/data/projects';
import { useLanguage } from '@/contexts/LanguageContext';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentProject, setCurrentProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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

  const projects = projectData.map(project => ({
    ...project,
    description: t(`projects.items.${project.slug}.description`) || project.description,
    metric: t(`projects.items.${project.slug}.metric`) || project.metric
  }));

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      prevProject();
    } else if (e.key === 'ArrowRight') {
      nextProject();
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">{t('projects.title')}</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        {/* Project Carousel */}
        <div
          className="relative max-w-6xl mx-auto"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects carousel"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="hidden md:flex rounded-full border-primary/30 hover:border-primary hover:shadow-glow transition-smooth flex-shrink-0"
            >
              <ChevronLeft size={20} />
            </Button>

            <div className={`w-full max-w-4xl transition-all duration-1000 ${
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
                        <h4 className="font-semibold text-foreground">{t('projects.techUsed')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects[currentProject].technologies.slice(0, 6).map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="border-secondary/30 text-secondary"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                         {projects[currentProject].metric && (
                           <p className="text-sm text-muted-foreground">{projects[currentProject].metric}</p>
                         )}
                      </div>

                      <div className="flex gap-4 pt-4">
                        <Button
                          className="bg-gradient-primary hover:shadow-glow transition-smooth"
                          asChild
                        >
                          <a href={projects[currentProject].codeUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2" size={18} />
                            {t('projects.viewCode')}
                          </a>
                        </Button>
                        <Button
                          variant="outline"
                          className="border-primary/30 hover:border-primary transition-smooth"
                          asChild
                        >
                          {projects[currentProject].demoUrl && projects[currentProject].demoUrl !== '#' ? (
                            <a href={projects[currentProject].demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2" size={18} />
                              {t('projects.liveDemo')}
                            </a>
                          ) : (
                            <Button
                              variant="outline"
                              className="border-primary/30 hover:border-primary transition-smooth"
                              asChild
                            >
                              <Link to={`/projects/${projects[currentProject].slug}`}>
                                <ExternalLink className="mr-2" size={18} />
                                {t('projects.viewGallery')}
                              </Link>
                            </Button>
                          )}
                        </Button>
                        <Button
                          variant="secondary"
                          className="ml-2"
                          asChild
                        >
                          <Link to={`/projects/${projects[currentProject].slug}`}>{t('projects.viewCaseStudy')}</Link>
                        </Button>
                      </div>
                    </div>

                    {/* Project Visual */}
                    <div className="relative">
                      {projects[currentProject].demoUrl && projects[currentProject].demoUrl !== '#' ? (
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
                                alt="Skin Check AI project logo"
                                className="w-32 h-32 object-contain mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                              <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{t('projects.preview')}</p>
                              <p className="text-sm text-muted-foreground/70 mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                {projects[currentProject].title}
                              </p>
                              <p className="text-xs text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {t('projects.clickToView')} {t('projects.demoArrow')}
                              </p>
                            </div>
                          ) : projects[currentProject].title === 'DoctAI Health Hub' ? (
                            <div className="text-center p-8 w-full h-full flex flex-col items-center justify-center">
                              <img
                                src="/images/projects/doctai-health-hub/02-dashboard-1.png"
                                alt="DoctAI Health Hub project preview"
                                className="w-full h-full object-cover absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-300"
                                loading="lazy"
                              />
                              <div className="relative z-10">
                                <p className="text-foreground font-bold text-xl group-hover:text-primary transition-colors duration-300">{t('projects.preview')}</p>
                                <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                  {projects[currentProject].title}
                                </p>
                                <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {t('projects.clickToView')} {t('projects.galleryArrow')}
                                </p>
                              </div>
                            </div>
                          ) : projects[currentProject].title === 'Aria Agentic System' ? (
                            <div className="text-center p-8 w-full h-full flex flex-col items-center justify-center">
                              <img
                                src="/images/projects/aria-agentic-system/03-home-page.png"
                                alt="Aria Agentic System project preview"
                                className="w-full h-full object-cover absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-300"
                                loading="lazy"
                              />
                              <div className="relative z-10">
                                <p className="text-foreground font-bold text-xl group-hover:text-primary transition-colors duration-300">{t('projects.preview')}</p>
                                <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                  {projects[currentProject].title}
                                </p>
                                <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {t('projects.clickToView')} {t('projects.galleryArrow')}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center p-8">
                              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-all duration-300">
                                <div className="w-12 h-12 bg-primary rounded-full animate-glow group-hover:scale-110 transition-transform duration-300"></div>
                              </div>
                              <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{t('projects.preview')}</p>
                              <p className="text-sm text-muted-foreground/70 mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                {projects[currentProject].title}
                              </p>
                              <p className="text-xs text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {t('projects.clickToView')} {t('projects.demoArrow')}
                              </p>
                            </div>
                          )}
                          </div>
                        </a>
                      ) : (
                        <Link
                          to={`/projects/${projects[currentProject].slug}`}
                          className="block cursor-pointer group"
                        >
                          <div className="aspect-video bg-gradient-card rounded-lg border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-glow transition-all duration-300">
                             {projects[currentProject].title === 'Skin Check AI' ? (
                            <div className="text-center p-8">
                              <img
                                src="/images/projects/skin-check-ai-logo.png"
                                alt="Skin Check AI project logo"
                                className="w-32 h-32 object-contain mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                              />
                              <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{t('projects.preview')}</p>
                              <p className="text-sm text-muted-foreground/70 mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                {projects[currentProject].title}
                              </p>
                              <p className="text-xs text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {t('projects.clickToView')} {t('projects.detailsArrow')}
                              </p>
                            </div>
                          ) : projects[currentProject].title === 'DoctAI Health Hub' ? (
                            <div className="text-center p-8 w-full h-full flex flex-col items-center justify-center">
                              <img
                                src="/images/projects/doctai-health-hub/02-dashboard-1.png"
                                alt="DoctAI Health Hub project preview"
                                className="w-full h-full object-cover absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-300"
                                loading="lazy"
                              />
                              <div className="relative z-10">
                                <p className="text-foreground font-bold text-xl group-hover:text-primary transition-colors duration-300">{t('projects.preview')}</p>
                                <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                  {projects[currentProject].title}
                                </p>
                                <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {t('projects.clickToView')} {t('projects.galleryArrow')}
                                </p>
                              </div>
                            </div>
                          ) : projects[currentProject].title === 'Aria Agentic System' ? (
                            <div className="text-center p-8 w-full h-full flex flex-col items-center justify-center">
                              <img
                                src="/images/projects/aria-agentic-system/03-home-page.png"
                                alt="Aria Agentic System project preview"
                                className="w-full h-full object-cover absolute inset-0 opacity-40 group-hover:opacity-20 transition-opacity duration-300"
                                loading="lazy"
                              />
                              <div className="relative z-10">
                                <p className="text-foreground font-bold text-xl group-hover:text-primary transition-colors duration-300">{t('projects.preview')}</p>
                                <p className="text-sm text-muted-foreground mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                  {projects[currentProject].title}
                                </p>
                                <p className="text-xs text-primary mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  {t('projects.clickToView')} {t('projects.galleryArrow')}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center p-8">
                              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-all duration-300">
                                <div className="w-12 h-12 bg-primary rounded-full animate-glow group-hover:scale-110 transition-transform duration-300"></div>
                              </div>
                              <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">{t('projects.preview')}</p>
                              <p className="text-sm text-muted-foreground/70 mt-2 group-hover:text-primary/70 transition-colors duration-300">
                                {projects[currentProject].title}
                              </p>
                              <p className="text-xs text-primary/60 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {t('projects.clickToView')} {t('projects.detailsArrow')}
                              </p>
                            </div>
                          )}
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="hidden md:flex rounded-full border-primary/30 hover:border-primary hover:shadow-glow transition-smooth flex-shrink-0"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          {/* Project Indicators & Mobile Controls */}
          <div className="flex flex-col items-center gap-4 mt-8">
            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden items-center gap-8 mb-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevProject}
                className="rounded-full border-primary/30 hover:border-primary hover:shadow-glow transition-smooth"
              >
                <ChevronLeft size={20} />
              </Button>
              <span className="text-sm text-muted-foreground font-medium">
                {currentProject + 1} / {projects.length}
              </span>
              <Button
                variant="outline"
                size="icon"
                onClick={nextProject}
                className="rounded-full border-primary/30 hover:border-primary hover:shadow-glow transition-smooth"
              >
                <ChevronRight size={20} />
              </Button>
            </div>

            <div className="flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject
                      ? 'bg-primary shadow-glow'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
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
                {t('projects.viewAllGithub')}
              </a>
            </Button>
          </div>
      </div>
    </section>
  );
};

export default Projects;
