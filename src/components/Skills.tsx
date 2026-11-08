import { useEffect, useRef, useState } from 'react';
import { Code, Brain, Cloud, Wrench, GitBranch } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import skillsBg from '@/assets/skills-bg.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const Skills = () => {
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

  const skillCategories = [
    {
      title: t('skills.categories.programming'),
      icon: Code,
      color: 'text-primary',
      skills: ['Python', 'SQL']
    },
    {
      title: t('skills.categories.frameworks'),
      icon: Wrench,
      color: 'text-secondary',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter', 'Power BI', 'Tableau']
    },
    {
      title: t('skills.categories.ml'),
      icon: Brain,
      color: 'text-accent',
      skills: ['scikit-learn', 'TensorFlow', 'PyTorch', 'Hugging Face']
    },
    {
      title: t('skills.categories.cloud'),
      icon: Cloud,
      color: 'text-primary-glow',
      skills: ['LangChain', 'RAG Pipelines', 'Prompt Engineering', 'Context Engineering']
    },
    {
      title: t('skills.categories.tools'),
      icon: GitBranch,
      color: 'text-accent',
      skills: ['Git', 'GitHub', 'PostgreSQL']
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
          <h2 className="section-header mb-6">{t('skills.title')}</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('skills.subtitle')}
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
              <h3 className="text-2xl font-bold text-gradient mb-4">{t('skills.expertiseTitle')}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('skills.expertiseText')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
