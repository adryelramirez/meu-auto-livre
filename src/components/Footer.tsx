import { Car, Facebook, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Car className="w-6 h-6 text-accent-foreground" />
              </div>
              <span className="font-heading text-2xl font-bold">Instrutor Autônomo</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md">
              Formação de condutores com qualidade, flexibilidade e economia. 
              Sua habilitação sem burocracia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#servicos" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Serviços
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Depoimentos
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <span>contato@instrutor.com</span>
              </li>
            </ul>
            
            <div className="flex gap-3 mt-4">
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-9 h-9 rounded-lg bg-primary-foreground/10 hover:bg-accent flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60 text-sm">
          <p>© 2024 Instrutor Autônomo de Trânsito. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 00.000.000/0001-00 • Credenciamento DETRAN</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
