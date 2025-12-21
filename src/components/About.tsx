import { useEffect, useRef, useState } from 'react';
import { MapPin, Clock, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Professional Summary */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="card-professional hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gradient mb-6">{t('about.journeyTitle')}</h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: t('about.journeyText1') }} />
                  <p dangerouslySetInnerHTML={{ __html: t('about.journeyText2') }} />
                  <p dangerouslySetInnerHTML={{ __html: t('about.journeyText3') }} />
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-primary hover:shadow-glow transition-smooth" asChild>
                <a href="/cv/francis-kanu-fullstack-cv.pdf" download aria-label="Download Francis Kanu CV (PDF)">
                  <Download className="mr-2" size={18} />
                  {t('hero.downloadCv')}
                </a>
              </Button>
              <Button variant="outline" className="border-primary/30 hover:border-primary transition-smooth" asChild>
                <a href="#projects" aria-label="View projects">{t('about.viewProjects')}</a>
              </Button>
            </div>
          </div>

          {/* Stats & Info */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="card-professional hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">14+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.experience')}</div>
                </CardContent>
              </Card>

              <Card className="card-professional hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">7+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.languages')}</div>
                </CardContent>
              </Card>

              <Card className="card-professional hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.projects')}</div>
                </CardContent>
              </Card>

              <Card className="card-professional hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary-glow mb-2">2025</div>
                  <div className="text-sm text-muted-foreground">{t('about.stats.bootcamp')}</div>
                </CardContent>
              </Card>
            </div>

            <Card className="card-professional">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="mr-3 text-primary" size={20} />
                    <span>{t('about.location')}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-3 text-secondary" size={20} />
                    <span>{t('about.availability')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-professional">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gradient-accent mb-3">{t('about.multilingualTitle')}</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>{t('about.multilingualText1')}</div>
                  <div>{t('about.multilingualText2')}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
