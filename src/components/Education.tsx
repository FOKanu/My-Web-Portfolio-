import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Education = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const educationData = t('education.degrees').map((degree: any, index: number) => {
    const highlights = index === 0 ? t('education.highlights.web') :
                       index === 1 ? t('education.highlights.ai') :
                       t('education.highlights.med');
    return { ...degree, highlights };
  });

  const certifications = t('education.certifications');

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">{t('education.title')}</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('education.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((education: any, index: number) => (
            <Card
              key={index}
              className={`card-professional hover-lift transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ animationDelay: `${index * 300}ms` }}
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Main Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-full bg-primary/20 text-primary">
                          <GraduationCap size={20} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gradient mb-1">{education.degree}</h3>
                          <p className="text-lg text-muted-foreground font-medium">{education.institution}</p>
                        </div>
                      </div>
                      <Badge
                        variant={education.status === 'Current' ? 'default' : 'secondary'}
                        className={education.status === 'Current' ? 'bg-primary text-primary-foreground' : ''}
                      >
                        {education.status}
                      </Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-2 text-secondary" size={16} />
                        <span>{education.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-2 text-accent" size={16} />
                        <span>{education.location}</span>
                      </div>
                      <Badge variant="outline" className="w-fit border-primary/30 text-primary">
                        {education.type}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {education.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center">
                      <Award className="mr-2 text-accent" size={16} />
                      {t('education.keyAreas')}
                    </h4>
                    <div className="space-y-2">
                      {education.highlights.map((highlight: string) => (
                        <div
                          key={highlight}
                          className="flex items-center p-2 rounded-lg bg-muted/50 border border-border/30"
                        >
                          <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
                          <span className="text-sm text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Additional Learning */}
        <div className={`mt-16 transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="card-professional">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-6 text-center">
                {t('education.certificationsTitle')}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert: string, index: number) => (
                  <div
                    key={index}
                    className="flex items-center p-4 rounded-lg bg-gradient-card border border-border/30 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-3 h-3 rounded-full bg-secondary mr-3"></div>
                    <span className="text-sm font-medium text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Learning Philosophy */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-1200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="card-professional max-w-3xl mx-auto">
            <CardContent className="p-8">
              <h4 className="text-xl font-semibold text-gradient-accent mb-4">{t('education.philosophyTitle')}</h4>
              <p className="text-muted-foreground leading-relaxed">
                {t('education.philosophyText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
