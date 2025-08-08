import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import contactBg from '@/assets/skills-bg.jpg';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const formSchema = z.object({
    name: z.string().min(2, 'Name is too short'),
    email: z.string().email('Enter a valid email'),
    subject: z.string().min(3, 'Please add a subject'),
    message: z.string().min(10, 'Message is too short'),
  });

  type FormValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const onSubmit = (values: FormValues) => {
    const mailtoLink = `mailto:Francis.Okorie.IK@gmail.com?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    )}`;
    window.location.href = mailtoLink;
    toast({ title: 'Message prepared', description: 'Your email client will open with the message.' });
    reset();
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Francis.Okorie.IK@gmail.com',
      href: 'mailto:Francis.Okorie.IK@gmail.com',
      color: 'text-primary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Berlin, Germany',
      href: null,
      color: 'text-secondary'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/FOKanu',
      href: 'https://github.com/FOKanu',
      color: 'text-accent'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Francis Okore',
      href: 'https://www.linkedin.com/in/francis-okore-426b081a3',
      color: 'text-primary-glow'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative overflow-hidden py-20 bg-muted/30">
      <div className="absolute inset-0 z-0">
        <img
          src={contactBg}
          alt="Abstract network background for contact section"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/90" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h2 className="section-header mb-6">Let's Connect</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative healthcare and technology solutions
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <Card className="card-professional">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gradient mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  I'm always interested in discussing new opportunities, innovative projects, 
                  and collaborations at the intersection of healthcare and technology. 
                  Let's explore how we can work together to make a meaningful impact.
                </p>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div 
                        key={info.label}
                        className="flex items-center p-4 rounded-lg bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className={`p-3 rounded-full bg-gradient-card mr-4 ${info.color}`}>
                          <IconComponent size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{info.label}</div>
                          {info.href ? (
                            <a 
                              href={info.href}
                              target={info.href.startsWith('http') ? '_blank' : undefined}
                              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                              className="text-muted-foreground hover:text-primary transition-smooth"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-muted-foreground">{info.value}</div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="card-professional">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gradient-accent mb-4">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline"
                    className="border-primary/30 hover:border-primary transition-smooth"
                    asChild
                  >
                    <a href="https://github.com/FOKanu" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2" size={16} />
                      GitHub
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-secondary/30 hover:border-secondary transition-smooth"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/francis-okore-426b081a3" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2" size={16} />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <Card className="card-professional">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gradient mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        aria-invalid={!!errors.name}
                        {...register('name')}
                        className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                        placeholder="Enter your name"
                      />
                      {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        aria-invalid={!!errors.email}
                        {...register('email')}
                        className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                        placeholder="Enter your email"
                      />
                      {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      aria-invalid={!!errors.subject}
                      {...register('subject')}
                      className="bg-background/50 border-border/50 focus:border-primary transition-smooth"
                      placeholder="What's this about?"
                    />
                    {errors.subject && <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      aria-invalid={!!errors.message}
                      {...register('message')}
                      className="bg-background/50 border-border/50 focus:border-primary transition-smooth resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                    {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-smooth"
                    disabled={isSubmitting}
                  >
                    <Send className="mr-2" size={18} />
                    {isSubmitting ? 'Sending…' : 'Send Message'}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg border border-border/30">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong>Response Time:</strong> I typically respond to messages within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;