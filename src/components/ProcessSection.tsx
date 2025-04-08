
import { MessageSquare, Image, Clock, Check } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8 text-gold" />,
      title: "Conversación Inicial",
      description: "Inicia el chat y describe tu idea de joya ideal, comparte referencias y detalles específicos."
    },
    {
      icon: <Image className="w-8 h-8 text-gold" />,
      title: "Diseño Visual",
      description: "Nuestros joyeros trabajarán en visualizaciones y bocetos basados en tu descripción."
    },
    {
      icon: <Clock className="w-8 h-8 text-gold" />,
      title: "Cotización y Tiempo",
      description: "Recibirás una cotización detallada y estimación de tiempo para la creación de tu joya."
    },
    {
      icon: <Check className="w-8 h-8 text-gold" />,
      title: "Creación Artesanal",
      description: "Tras tu aprobación, comienza el proceso de creación con los materiales seleccionados."
    }
  ];

  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso</h2>
          <p className="text-muted-foreground text-lg">
            Desde la idea inicial hasta la pieza final, acompañamos todo el recorrido
            para crear joyas que cuenten tu historia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gold/20"
            >
              <div className="flex justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">{step.title}</h3>
              <p className="text-muted-foreground text-center">{step.description}</p>
              <div className="mt-6 flex justify-center">
                <span className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold">
                  {index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gold font-medium mb-4">Tiempo mínimo de respuesta: 4 horas | Finalización desde aprobación: 72 horas</p>
          <p className="text-sm text-muted-foreground">*Horario de atención: 8:00 a 18:00 GMT-5</p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
