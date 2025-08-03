import { useEffect, useRef, useState } from 'react';
import { Code, Database, Brain, Cloud, Wrench, GitBranch } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import skillsBg from '@/assets/skills-bg.jpg';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'text-primary',
      skills: ['Python', 'JavaScript', 'TypeScript', 'R', 'SQL']
    },
    {
      title: 'Frameworks & Libraries',
      icon: Wrench,
      color: 'text-secondary',
      skills: ['FastAPI', 'React', 'React Native', 'Expo', 'Node.js']
    },
    {
      title: 'Machine Learning',
      icon: Brain,
      color: 'text-accent',
      skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'XGBoost', 'Pandas']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-primary-glow',
      skills: ['Docker', 'GitHub Actions', 'GCP', 'AWS', 'Firebase']
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'text-secondary',
      skills: ['PostgreSQL', 'SQLite', 'Supabase', 'MongoDB', 'Redis']
    },
    {
      title: 'Tools & Platforms',
      icon: GitBranch,
      color: 'text-accent',
      skills: ['Git', 'VS Code', 'Jupyter', 'Postman', 'Figma']
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="skills" 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url(${skillsBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-background/85"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">Skills & Tools</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit combining medical expertise with modern technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className={`card-professional hover-lift transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-full bg-gradient-card mr-4 ${category.color}`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skill}
                        className={`flex items-center p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300 ${
                          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                        }`}
                        style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                      >
                        <div className={`w-2 h-2 rounded-full mr-3 ${category.color.replace('text-', 'bg-')}`}></div>
                        <span className="text-muted-foreground font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Skill Highlight */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <Card className="card-professional max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gradient mb-4">Specialized Expertise</h3>
              <p className="text-muted-foreground leading-relaxed">
                My unique combination of medical background and technical skills enables me to understand complex healthcare challenges 
                and translate them into innovative technological solutions. I specialize in AI-powered medical applications, 
                data-driven healthcare analytics, and user-centric health technology platforms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;