
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gold">
            Gold<span className="text-foreground">IA</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/servicios" className="text-foreground hover:text-gold transition-colors">
            Servicios
          </Link>
          <Link to="/nosotros" className="text-foreground hover:text-gold transition-colors">
            Nosotros
          </Link>
          <Link to="/inspiracion" className="text-foreground hover:text-gold transition-colors">
            Inspiración
          </Link>
          <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-white">
            Contáctenos
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/servicios" 
              className="text-foreground hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link 
              to="/nosotros" 
              className="text-foreground hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link 
              to="/inspiracion" 
              className="text-foreground hover:text-gold transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Inspiración
            </Link>
            <Button 
              variant="outline" 
              className="border-gold text-gold hover:bg-gold hover:text-white w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contáctenos
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
