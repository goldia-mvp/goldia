
import { Button } from "@/components/ui/button";

const CategoriesSection = () => {
  const categories = [
    {
      title: "Anillos",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Desde compromiso hasta piezas decorativas"
    },
    {
      title: "Collares",
      image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Elegancia para cada ocasión"
    },
    {
      title: "Pulseras",
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Delicadas y con personalidad"
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Inspiración por Categorías</h2>
          <p className="text-muted-foreground text-lg">
            Explora nuestras colecciones para encontrar la inspiración perfecta para tu próxima joya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button variant="outline" className="w-full border-gold text-gold hover:bg-gold hover:text-white">
                  Explorar {category.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
