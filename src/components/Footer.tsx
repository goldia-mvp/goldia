
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GoldIA</h3>
            <p className="text-muted-foreground mb-4">
              Joyería personalizada con inteligencia artificial. Diseños únicos creados para ti.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:info@goldia.com" className="text-muted-foreground hover:text-gold transition-colors">
                <Mail size={20} />
              </a>
              <a href="tel:+1234567890" className="text-muted-foreground hover:text-gold transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-gold transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-gold transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/inspiracion" className="text-muted-foreground hover:text-gold transition-colors">
                  Inspiración
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-gold transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Horario</h3>
            <p className="text-muted-foreground">
              Lunes - Viernes: 8:00 - 18:00<br />
              Sábado: 9:00 - 15:00<br />
              Domingo: Cerrado
            </p>
            <p className="text-muted-foreground mt-2">
              Zona horaria: GMT-5
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-muted-foreground mb-2">
              <Mail size={16} className="inline mr-2" />
              info@goldia.com
            </p>
            <p className="text-muted-foreground mb-2">
              <Phone size={16} className="inline mr-2" />
              +123 456 7890
            </p>
            <p className="text-muted-foreground">
              Calle Principal #123<br />
              Ciudad, País
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} GoldIA. Todos los derechos reservados.
          </p>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <Link to="/terminos" className="hover:text-gold transition-colors">
              Términos y Condiciones
            </Link>
            <Link to="/privacidad" className="hover:text-gold transition-colors">
              Política de Privacidad
            </Link>
            <Link to="/faq" className="hover:text-gold transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
