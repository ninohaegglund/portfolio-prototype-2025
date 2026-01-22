import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for new opportunities</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{' '}
            <span className="text-gradient">Nino Hägglund</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            .NET Developer & Cloud Architect
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {['ASP.NET Core', 'C#', 'Azure', 'EF Core', 'Docker', 'Kubernetes'].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1.5 rounded-full text-sm bg-secondary text-secondary-foreground border border-border hover:border-primary/50 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl">
              View My Work
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Download className="mr-2" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-lg glass hover:bg-secondary/70 transition-all duration-200 hover:scale-110"
                aria-label={label}
              >
                <Icon size={20} className="text-muted-foreground hover:text-foreground" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
