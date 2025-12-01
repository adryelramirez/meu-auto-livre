import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Car, RefreshCw, Users, Phone } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Primeira Habilitação",
    description: "Aprenda do zero com um método personalizado e eficiente. Todas as categorias disponíveis.",
    features: [
      "Aulas práticas personalizadas",
      "Preparação para exame prático",
      "Dicas e técnicas de direção defensiva",
      "Acompanhamento até a aprovação"
    ]
  },
  {
    icon: RefreshCw,
    title: "Reciclagem e Reabilitação",
    description: "Retome sua confiança ao volante com aulas de reciclagem e atualização.",
    features: [
      "Revisão de direção defensiva",
      "Atualização das regras de trânsito",
      "Práticas em diferentes situações",
      "Superação do medo de dirigir"
    ]
  },
  {
    icon: Car,
    title: "Aulas Avançadas",
    description: "Aprimore suas habilidades e ganhe mais segurança em situações complexas.",
    features: [
      "Direção em vias de alta velocidade",
      "Estacionamento em vagas difíceis",
      "Condução em chuva e neblina",
      "Manobras especiais"
    ]
  },
  {
    icon: Users,
    title: "Acompanhamento ao DETRAN",
    description: "Suporte completo durante todo o processo de habilitação no DETRAN.",
    features: [
      "Orientação sobre documentação",
      "Preparação para o exame prático",
      "Acompanhamento no dia da prova",
      "Dicas para evitar nervosismo"
    ]
  }
];

const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para todas as suas necessidades de aprendizado de direção
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index}
                className="gradient-card border-0 shadow-soft hover:shadow-hover transition-smooth"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-heading text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            variant="hero" 
            size="xl"
            onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
          >
            <Phone className="w-5 h-5" />
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
