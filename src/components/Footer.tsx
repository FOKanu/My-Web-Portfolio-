import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/30">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-gradient mb-2">Francis Kanu</div>
            <p className="text-muted-foreground">
              Medical Scientist & Full Stack Engineer
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                About
              </button>
              <button 
                onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Skills
              </button>
              <button 
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Projects
              </button>
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-muted-foreground hover:text-primary transition-smooth"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth"
              asChild
            >
              <a href="https://github.com/FOKanu" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth"
              asChild
            >
              <a href="https://www.linkedin.com/in/francis-okore-426b081a3" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-smooth"
              asChild
            >
              <a href="mailto:Francis.Okorie.IK@gmail.com">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Francis Kanu All rights reserved.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React, TypeScript, and Tailwind CSS</span>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-primary transition-smooth underline"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;