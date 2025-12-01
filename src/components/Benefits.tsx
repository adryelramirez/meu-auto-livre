import { Clock, DollarSign, UserCheck, Calendar, MapPin, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: DollarSign,
    title: "Economia Real",
    description: "Sem taxas de autoescola. Você paga apenas pelas aulas que realmente precisa."
  },
  {
    icon: Calendar,
    title: "Horários Flexíveis",
    description: "Agende suas aulas conforme sua disponibilidade, inclusive fins de semana."
  },
  {
    icon: UserCheck,
    title: "Atenção Personalizada",
    description: "Aulas individuais focadas nas suas necessidades e no seu ritmo de aprendizado."
  },
  {
    icon: Clock,
    title: "Aprendizado Eficiente",
    description: "Menos burocracia, mais prática. Chegue à habilitação mais rápido."
  },
  {
    icon: MapPin,
    title: "Rotas Práticas",
    description: "Treine nos locais que você realmente vai usar: trabalho, casa, áreas comerciais."
  },
  {
    icon: Shield,
    title: "Instrutor Certificado",
    description: "Experiência comprovada com certificação de instrutor de trânsito profissional."
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por Que Escolher Instrução Autônoma?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A lei brasileira permite a formação de condutores com instrutor autônomo. 
            Aproveite todos os benefícios dessa modalidade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="gradient-card border-0 shadow-soft hover:shadow-hover transition-smooth hover:-translate-y-1"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
