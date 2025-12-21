import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Education = () => {
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

  const educationData = [
    {
      degree: 'BSc IT - Web Applications and Software Development',
      institution: 'Mediendesign Hochschule für Angewandte Wissenschaften',
      location: 'Berlin, Germany',
      period: 'Present',
      status: 'Currently Enrolled',
      description: 'Focused on modern web technologies, software architecture, and full-stack development principles.',
      highlights: ['Web Applications', 'Software Development', 'Media Design', 'Full-Stack Development'],
      type: 'Bachelor Degree'
    },
    {
      degree: 'Data Science & AI Bootcamp',
      institution: 'Le Wagon',
      location: 'Berlin, Germany',
      period: 'Apr 2025 - Jun 2025',
      status: 'Completed',
      description: 'Intensive program covering machine learning, deep learning, data engineering, and AI applications in real-world scenarios.',
      highlights: ['Python & Machine Learning', 'Deep Learning with TensorFlow/PyTorch', 'Data Engineering & MLOps', 'AI Product Development'],
      type: 'Bootcamp'
    },
    {
      degree: 'MBBS (Bachelor of Medicine, Bachelor of Surgery)',
      institution: 'V.N. Karazina Kharkiv National University',
      location: 'Kharkiv, Ukraine',
      period: 'Oct 2017 - Feb 2022',
      status: 'Interrupted due to war',
      description: 'Comprehensive medical education covering human anatomy, physiology, pathology, pharmacology, and clinical medicine.',
      highlights: ['General Clinical Medicine', 'Medical Research', 'Patient Care', 'Medical Ethics', 'Diagnostic Procedures'],
      type: 'Medical Degree'
    }
  ];

  const certifications = [
    'AWS Cloud Practitioner (In Progress)',
    'Google Cloud Platform Fundamentals',
    'TensorFlow Developer Certificate (Planned)',
    'React Professional Certification',
    'Medical Ethics & Patient Safety'
  ];

  return (
    <section ref={sectionRef} id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">Education & Learning</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning journey bridging medicine, technology, and innovation
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((education, index) => (
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
                      Key Areas
                    </h4>
                    <div className="space-y-2">
                      {education.highlights.map((highlight) => (
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
                Certifications & Continued Learning
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert}
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
              <h4 className="text-xl font-semibold text-gradient-accent mb-4">Lifelong Learning Philosophy</h4>
              <p className="text-muted-foreground leading-relaxed">
                My educational journey reflects a commitment to interdisciplinary learning, combining medical science
                with cutting-edge technology. I believe in the power of continuous learning to bridge traditional
                healthcare with innovative technological solutions, always staying current with emerging trends in
                AI, machine learning, and digital health.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
