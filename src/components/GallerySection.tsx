
const GallerySection = () => {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1588444837495-c6cfabcd94d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Anillo de Compromiso",
      description: "Oro blanco con diamante central"
    },
    {
      image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Collar Elegante",
      description: "Oro amarillo con colgante de zafiro"
    },
    {
      image: "https://images.unsplash.com/photo-1611652022419-a9419f74343c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Brazalete Trenzado",
      description: "Plata con detalles en oro rosa"
    },
    {
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Aretes Colgantes",
      description: "Oro con perlas cultivadas"
    },
    {
      image: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Pulsera de Piedras",
      description: "Plata con amatistas y diamantes"
    },
    {
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Anillo Vintage",
      description: "Oro con rubí central y pequeños diamantes"
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestras Creaciones</h2>
          <p className="text-muted-foreground text-lg">
            Cada pieza cuenta una historia única. Explora algunas de nuestras creaciones personalizadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div key={index} className="gallery-item group">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-80 object-cover"
              />
              <div className="gallery-overlay">
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center text-gold hover:text-gold-dark border-b border-gold pb-1 transition-colors">
            Ver más creaciones
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
