import { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen min-h-[100dvh] relative flex items-center justify-center overflow-hidden w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 25, 45, 0.8), rgba(15, 25, 45, 0.6)), url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 break-words">
          <span className="text-gradient animate-fade-in block">Francis Kanu</span>
        </h1>

        <div className={`text-xl sm:text-2xl md:text-3xl mb-4 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
            <span className="text-primary font-semibold">{t('hero.role1')}</span>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <span className="text-secondary font-semibold">{t('hero.role2')}</span>
          </div>
        </div>

        <p className={`text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {t('hero.description')}
        </p>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Button
            size="lg"
            className="bg-gradient-primary hover:shadow-glow transition-smooth text-lg px-8 py-4 rounded-full"
            asChild
          >
            <a href="/cv/francis-kanu-fullstack-cv.pdf" download aria-label="Download Francis Kanu CV (PDF)">
              <Download className="mr-2" size={20} />
              {t('hero.downloadCv')}
            </a>
          </Button>

          <Button
            size="lg"
            variant="secondary"
            className="hover:shadow-glow transition-smooth text-lg px-8 py-4 rounded-full"
            asChild
          >
            <a href="#contact" aria-label="Contact Francis Kanu">{t('hero.contactMe')}</a>
          </Button>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/30 hover:border-primary hover:shadow-glow transition-smooth"
              asChild
            >
              <a href="https://github.com/FOKanu" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                <Github size={20} />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/30 hover:border-primary hover:shadow-glow transition-smooth"
              asChild
            >
              <a href="https://www.linkedin.com/in/francis-o-i-kanu-817254286" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                <Linkedin size={20} />
              </a>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-primary/30 hover:border-primary hover:shadow-glow transition-smooth"
              asChild
            >
              <a href="mailto:Francis.Okorie.IK@gmail.com" aria-label="Send email to Francis Kanu">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={`transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <button
            onClick={scrollToNext}
            className="text-primary hover:text-primary-glow transition-smooth animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
