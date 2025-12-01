import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Heart, Target } from "lucide-react";
import pauloImage from "@/assets/paulo-ojeda.jpg";

const About = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-hover">
              <img 
                src={pauloImage} 
                alt="Paulo Ojeda - Instrutor de Trânsito" 
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <Card className="absolute -bottom-6 -right-6 bg-background border-0 shadow-hover max-w-xs">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-8 h-8 text-accent" />
                  <div>
                    <div className="font-bold text-2xl text-foreground">CNH A-B</div>
                    <div className="text-sm text-muted-foreground">Certificado</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Content Side */}
          <div>
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <span className="font-semibold">Instrutor Credenciado</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-3">
              Paulo Ojeda
            </h2>
            
            <p className="text-xl text-accent font-semibold mb-6">
              Instrutor Autônomo de Trânsito
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Profissional certificado com 4 anos de experiência na formação de 
              condutores, tendo atuado no CFC Habilitar. Minha missão é tornar o processo 
              de habilitação mais acessível, eficiente e menos burocrático para todos, 
              oferecendo um atendimento personalizado e de qualidade.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-1">Missão</h3>
                  <p className="text-muted-foreground">
                    Formar condutores conscientes e seguros, proporcionando uma experiência 
                    de aprendizado personalizada e eficiente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-1">Experiência</h3>
                  <p className="text-muted-foreground">
                    4 anos de atuação no CFC Habilitar, especialização em direção defensiva 
                    e técnicas modernas de ensino, com centenas de alunos aprovados.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold mb-1">Valores</h3>
                  <p className="text-muted-foreground">
                    Compromisso com a segurança, respeito ao ritmo do aluno e 
                    total transparência em todo o processo.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 p-6 gradient-card rounded-xl shadow-soft">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">300+</div>
                <div className="text-xs text-muted-foreground">Alunos</div>
              </div>
              <div className="text-center border-x border-border">
                <div className="text-3xl font-bold text-accent mb-1">4</div>
                <div className="text-xs text-muted-foreground">Anos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-1">95%</div>
                <div className="text-xs text-muted-foreground">Aprovação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
