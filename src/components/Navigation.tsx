import { useState, useEffect } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.experience'), href: '#experience' },
    { name: t('nav.education'), href: '#education' },
    { name: t('nav.languages'), href: '#languages' },
    { name: t('nav.interests'), href: '#interests' },
    { name: t('nav.contact'), href: '#contact' }
  ] as const;

  useEffect(() => {
    // Fade-in animation on mount
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Intersection Observer for active section detection
    const observerOptions = {
      rootMargin: '-10% 0px -80% 0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    navItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'glass shadow-elegant backdrop-blur-md' : 'bg-transparent'
    } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center gap-4 rounded-2xl bg-background/20 border border-white/10 backdrop-blur-md px-4 py-2">
          {/* Profile Avatar - Always Sticky */}
          <div className="flex-shrink-0">
            <Avatar className="w-10 h-10 sm:w-12 sm:h-12 ring-2 ring-cyan-400/50">
              <AvatarImage
                src="/lovable-uploads/67c0f36c-9a89-489b-bfb6-4df41af44461.png"
                alt="Portrait of Francis Kanu"
                loading="lazy"
                className="object-cover"
              />
              <AvatarFallback className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold">
                FK
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Scrollable Navigation */}
          <div className="flex-1 min-w-0">
            <ScrollArea className="w-full">
              <div className="flex items-center justify-center gap-1 sm:gap-2 pb-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`relative flex-shrink-0 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                        isActive
                          ? 'bg-primary/20 text-primary shadow-md border border-primary/30'
                          : 'text-foreground/80 hover:text-primary hover:bg-primary/10'
                      }`}
                      style={{ minWidth: 'fit-content' }}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.name}

                      {/* Active indicator */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 animate-pulse" />
                      )}

                      {/* Hover underline */}
                      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-3/4'
                      }`} />
                    </button>
                  );
                })}
              </div>
              <ScrollBar orientation="horizontal" className="invisible" />
            </ScrollArea>
          </div>
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            className="w-10 h-10 rounded-full bg-background/50 hover:bg-background/80"
          >
            {language.toUpperCase()}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
