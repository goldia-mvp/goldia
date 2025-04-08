
import { Button } from "@/components/ui/button";

const Hero = ({ onStartProcess }: { onStartProcess: () => void }) => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Joyería elegante" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto md:ml-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in leading-tight">
            Joyas <span className="text-gold">Personalizadas</span> Diseñadas para Brillar
          </h1>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground animate-fade-in [animation-delay:200ms]">
            Creamos joyas únicas que reflejan tu estilo personal. Desde la 
            imaginación hasta tu cuello, dedos o muñecas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in [animation-delay:400ms]">
            <Button 
              size="lg" 
              className="bg-gold hover:bg-gold-dark text-white px-8"
              onClick={onStartProcess}
            >
              Diseña tu Joya
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gold text-gold hover:bg-gold hover:text-white px-8"
            >
              Explorar Galería
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
