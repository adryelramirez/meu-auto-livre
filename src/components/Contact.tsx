import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Agende sua primeira aula grátis e comece sua jornada rumo à habilitação
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <Card className="gradient-card border-0 shadow-soft hover:shadow-hover transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">Telefone</h3>
              <p className="text-muted-foreground mb-4">Ligue para agendar</p>
              <a 
                href="tel:+5511999999999" 
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                (11) 99999-9999
              </a>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 shadow-soft hover:shadow-hover transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-muted-foreground mb-4">Mensagem instantânea</p>
              <Button 
                variant="cta"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>

          <Card className="gradient-card border-0 shadow-soft hover:shadow-hover transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-2">E-mail</h3>
              <p className="text-muted-foreground mb-4">Dúvidas e informações</p>
              <a 
                href="mailto:contato@instrutor.com" 
                className="text-primary font-semibold hover:text-primary/80 transition-colors"
              >
                contato@instrutor.com
              </a>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="gradient-card border-0 shadow-soft">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Área de Atendimento</h4>
                    <p className="text-muted-foreground">
                      Zona Sul, Centro e ABC Paulista. 
                      Outras regiões sob consulta.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Horários</h4>
                    <p className="text-muted-foreground">
                      Segunda a Sábado: 7h às 20h<br />
                      Domingos: Sob consulta
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block gradient-hero rounded-2xl p-8 md:p-12 shadow-hover">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Primeira Aula Grátis!
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-6 max-w-2xl">
              Conheça o método de ensino e tire todas as suas dúvidas. 
              Sem compromisso!
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              <Phone className="w-5 h-5" />
              Agendar Aula Grátis
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
