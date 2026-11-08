import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import experienceBg from '@/assets/hero-bg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = t('experience.jobs');

  return (
    <section ref={sectionRef} id="experience" className="relative overflow-hidden py-20 bg-muted/30">
      <div className="absolute inset-0 z-0">
        <img
          src={experienceBg}
          alt="Abstract professional experience background"
          className="w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">{t('experience.title')}</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {experiences.map((experience: any, index: number) => (
              <div
                key={index}
                className={`relative pb-12 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-6 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-glow"></div>

                {/* Content */}
                <div className="ml-12 md:ml-20">
                  <Card className="card-professional hover-lift">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gradient mb-2">{experience.title}</h3>
                          <div className="flex items-center text-muted-foreground mb-2">
                            <Building2 className="mr-2 text-primary" size={16} />
                            <span className="font-medium">{experience.company}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-2 text-secondary" size={14} />
                              <span>{experience.period}</span>
                            </div>
                            <div className="flex items-center">
                              <MapPin className="mr-2 text-accent" size={14} />
                              <span>{experience.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className="border-primary/30 text-primary mt-2 lg:mt-0"
                        >
                          {experience.type}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {experience.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground text-sm">{t('experience.labels.keySkills')}</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.skills.map((skill: string) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="text-xs bg-secondary/20 text-secondary border-secondary/30"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="card-professional text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary mb-1">10+</div>
              <div className="text-sm text-muted-foreground">{t('experience.stats.years')}</div>
            </CardContent>
          </Card>

          <Card className="card-professional text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-secondary mb-1">5+</div>
              <div className="text-sm text-muted-foreground">{t('experience.stats.roles')}</div>
            </CardContent>
          </Card>

          <Card className="card-professional text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-accent mb-1">3</div>
              <div className="text-sm text-muted-foreground">{t('experience.stats.countries')}</div>
            </CardContent>
          </Card>

          <Card className="card-professional text-center">
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-primary-glow mb-1">4</div>
              <div className="text-sm text-muted-foreground">{t('experience.stats.languages')}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
