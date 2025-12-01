import { Button } from "@/components/ui/button";
import { Car, CheckCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-instructor.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Instrutor Autônomo Certificado</span>
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Aprenda a Dirigir com <span className="text-accent">Liberdade</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Aulas personalizadas de direção sem a obrigatoriedade de autoescolas. 
            Economize tempo e dinheiro com um instrutor experiente e dedicado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="cta" 
              size="xl"
              className="group"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Agendar Aula Grátis
            </Button>
            <Button 
              variant="secondary" 
              size="xl"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Car className="w-5 h-5" />
              Conhecer Serviços
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">10+</div>
              <div className="text-sm text-primary-foreground/80">Anos de Experiência</div>
            </div>
            <div className="text-center border-x border-primary-foreground/20">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">500+</div>
              <div className="text-sm text-primary-foreground/80">Alunos Aprovados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-1">95%</div>
              <div className="text-sm text-primary-foreground/80">Taxa de Aprovação</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-accent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
