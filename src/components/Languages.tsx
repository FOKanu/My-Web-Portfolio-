import { useEffect, useRef, useState } from 'react';
import { Globe, Flag, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import digitalGlobe from '@/assets/digital-globe.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Languages = () => {
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

  const languages = [
    {
      name: 'English',
      level: 'C2',
      proficiency: t('languages.levels.native'),
      flag: '🇺🇸',
      note: t('languages.notes.native'),
      color: 'text-primary'
    },
    {
      name: 'German',
      level: 'B1',
      proficiency: t('languages.levels.intermediate'),
      flag: '🇩🇪',
      note: t('languages.notes.german'),
      color: 'text-secondary'
    },
    {
      name: 'Russian',
      level: 'B2',
      proficiency: t('languages.levels.upperIntermediate'),
      flag: '🇷🇺',
      note: t('languages.notes.russian'),
      color: 'text-accent'
    },
    {
      name: 'Ga',
      level: 'C1',
      proficiency: t('languages.levels.advanced'),
      flag: '🇬🇭',
      note: t('languages.notes.ghanaian'),
      color: 'text-secondary'
    },
    {
      name: 'Dagomba',
      level: 'C2',
      proficiency: t('languages.levels.native'),
      flag: '🇬🇭',
      note: t('languages.notes.ghanaian'),
      color: 'text-primary'
    },
    {
      name: 'Twi',
      level: 'C2',
      proficiency: t('languages.levels.native'),
      flag: '🇬🇭',
      note: t('languages.notes.ghanaian'),
      color: 'text-accent'
    }
  ];

  const getProficiencyWidth = (level: string) => {
    const widths = {
      'A1': '16%', 'A2': '33%', 'B1': '50%', 'B2': '66%', 'C1': '83%', 'C2': '100%'
    };
    return widths[level as keyof typeof widths] || '0%';
  };

  return (
    <section ref={sectionRef} id="languages" className="relative overflow-hidden py-20 bg-muted/30">
      <div className="absolute inset-0 z-0">
        <img
          src={digitalGlobe}
          alt="Digital globe network background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">{t('languages.title')}</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('languages.subtitle')}
          </p>
        </div>

        <TooltipProvider>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((language, index) => (
              <Tooltip key={language.name}>
                <TooltipTrigger asChild>
                  <Card
                    className={`card-professional hover-lift cursor-pointer transition-all duration-1000 hover:scale-105 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <span className="text-3xl mr-3">{language.flag}</span>
                          <div>
                            <h3 className="font-semibold text-foreground">{language.name}</h3>
                            <span className={`text-sm font-medium ${language.color}`}>
                              {language.level}
                            </span>
                          </div>
                        </div>
                        <Globe className={`${language.color}`} size={20} />
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{t('languages.proficiency')}</span>
                          <span className="font-medium">{language.proficiency}</span>
                        </div>
                        <div className="w-full bg-background/50 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 delay-${index * 150} ${language.color.replace('text-', 'bg-')}`}
                            style={{
                              width: isVisible ? getProficiencyWidth(language.level) : '0%',
                              transitionDelay: `${(index * 150) + 500}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="max-w-xs p-4 bg-card border-border/50 shadow-elegant"
                >
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <CheckCircle className="text-primary mr-2" size={16} />
                      <span className="font-semibold">{language.name} - {language.level}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{language.note}</p>
                    {language.name === 'German' && (
                      <div className="mt-2 p-2 bg-secondary/20 rounded-md">
                        <span className="text-xs text-secondary font-medium">{t('languages.learning')}</span>
                      </div>
                    )}
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>

        {/* Language Summary */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="card-professional max-w-2xl mx-auto">
            <CardContent className="p-6">
              <div className="flex items-center justify-center mb-4">
                <Flag className="text-primary mr-2" size={24} />
                <h3 className="text-lg font-semibold text-gradient">{t('languages.summaryTitle')}</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                {t('languages.summaryText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Languages;
