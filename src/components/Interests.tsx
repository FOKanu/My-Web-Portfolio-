import { useEffect, useRef, useState } from 'react';
import {
  BookOpen,
  Gamepad2,
  Film,
  MessageSquare,
  Dumbbell,
  Theater,
  PenTool,
  Brain,
  Sparkles
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const Interests = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredInterest, setHoveredInterest] = useState<string | null>(null);
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

  const interests = [
    {
      name: t('interests.items.writing.name'),
      icon: PenTool,
      description: t('interests.items.writing.description'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      hoverColor: 'hover:bg-primary/20'
    },
    {
      name: t('interests.items.gaming.name'),
      icon: Gamepad2,
      description: t('interests.items.gaming.description'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      hoverColor: 'hover:bg-secondary/20'
    },
    {
      name: t('interests.items.movies.name'),
      icon: Film,
      description: t('interests.items.movies.description'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      hoverColor: 'hover:bg-accent/20'
    },
    {
      name: t('interests.items.debates.name'),
      icon: MessageSquare,
      description: t('interests.items.debates.description'),
      color: 'text-primary-glow',
      bgColor: 'bg-primary/5',
      hoverColor: 'hover:bg-primary/15'
    },
    {
      name: t('interests.items.fitness.name'),
      icon: Dumbbell,
      description: t('interests.items.fitness.description'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      hoverColor: 'hover:bg-secondary/20'
    },
    {
      name: t('interests.items.literature.name'),
      icon: BookOpen,
      description: t('interests.items.literature.description'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      hoverColor: 'hover:bg-accent/20'
    },
    {
      name: t('interests.items.philosophy.name'),
      icon: Brain,
      description: t('interests.items.philosophy.description'),
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      hoverColor: 'hover:bg-primary/20'
    },
    {
      name: t('interests.items.theatre.name'),
      icon: Theater,
      description: t('interests.items.theatre.description'),
      color: 'text-primary-glow',
      bgColor: 'bg-primary/5',
      hoverColor: 'hover:bg-primary/15'
    }
  ];

  return (
    <section ref={sectionRef} id="interests" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">{t('interests.title')}</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('interests.subtitle')}
          </p>
        </div>

        {/* Floating Tag Cloud Layout */}
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <div
                  key={interest.name}
                  className={`transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isVisible ? `translateY(${Math.sin(index * 0.5) * 10}px)` : 'translateY(32px)'
                  }}
                  onMouseEnter={() => setHoveredInterest(interest.name)}
                  onMouseLeave={() => setHoveredInterest(null)}
                >
                  <Card
                    className={`card-professional cursor-pointer transition-all duration-300 hover-lift
                      ${interest.bgColor} ${interest.hoverColor} border-border/50 hover:border-primary/30
                      ${hoveredInterest === interest.name ? 'scale-105 shadow-glow' : 'hover:scale-102'}
                    `}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`inline-flex p-4 rounded-full ${interest.bgColor} mb-4 transition-all duration-300
                        ${hoveredInterest === interest.name ? 'scale-110' : ''}`}>
                        <IconComponent
                          className={`${interest.color} transition-all duration-300`}
                          size={24}
                        />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2 text-sm">
                        {interest.name}
                      </h3>
                      <div className={`overflow-hidden transition-all duration-300 ${
                        hoveredInterest === interest.name ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-xs text-muted-foreground leading-relaxed pt-2">
                          {interest.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Featured Projects Highlight */}
        <div className={`mt-16 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="card-professional max-w-4xl mx-auto hover-lift">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center mb-4">
                <Sparkles className="text-primary mr-2" size={24} />
                <h3 className="text-xl font-bold text-gradient">{t('interests.currentProjectsTitle')}</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-primary mb-2">{t('interests.project1.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('interests.project1.desc')}
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-accent mb-2">{t('interests.project2.title')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('interests.project2.desc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Interests;
