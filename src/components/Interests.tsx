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

const Interests = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredInterest, setHoveredInterest] = useState<string | null>(null);
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

  const interests = [
    {
      name: 'Creative Writing',
      icon: PenTool,
      description: 'Currently working on horror novel "A Devil for Jane" and philosophical work "Of God and Man"',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      hoverColor: 'hover:bg-primary/20'
    },
    {
      name: 'Gaming',
      icon: Gamepad2,
      description: 'Strategic and narrative-driven games, exploring virtual worlds and complex gameplay mechanics',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      hoverColor: 'hover:bg-secondary/20'
    },
    {
      name: 'Movies & Documentaries',
      icon: Film,
      description: 'Film analysis, documentaries, and exploring diverse cinematic storytelling techniques',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      hoverColor: 'hover:bg-accent/20'
    },
    {
      name: 'Social Debates',
      icon: MessageSquare,
      description: 'Engaging in intellectual discussions about philosophy, ethics, and contemporary issues',
      color: 'text-primary-glow',
      bgColor: 'bg-primary/5',
      hoverColor: 'hover:bg-primary/15'
    },
    {
      name: 'Fitness & Working Out',
      icon: Dumbbell,
      description: 'Maintaining physical health through regular exercise and strength training',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      hoverColor: 'hover:bg-secondary/20'
    },
    {
      name: 'Classical Literature',
      icon: BookOpen,
      description: 'Deep appreciation for classical works and theatrical performances',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      hoverColor: 'hover:bg-accent/20'
    },
    {
      name: 'Philosophy',
      icon: Brain,
      description: 'Exploring philosophical concepts, ethics, and the intersection of science and humanities',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      hoverColor: 'hover:bg-primary/20'
    },
    {
      name: 'Theatre',
      icon: Theater,
      description: 'Appreciation for dramatic arts and live performance storytelling',
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
          <h2 className="section-header mb-6">Interests & Passions</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond technology and medicine, exploring creativity and intellectual pursuits
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
                <h3 className="text-xl font-bold text-gradient">Current Creative Projects</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-primary mb-2">📚 "A Devil for Jane"</h4>
                  <p className="text-sm text-muted-foreground">
                    A psychological horror novel exploring themes of morality and human nature
                  </p>
                </div>
                <div className="p-4 bg-background/50 rounded-lg border border-border/30">
                  <h4 className="font-semibold text-accent mb-2">🧠 "Of God and Man"</h4>
                  <p className="text-sm text-muted-foreground">
                    A philosophical work examining the intersection of faith, science, and human existence
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