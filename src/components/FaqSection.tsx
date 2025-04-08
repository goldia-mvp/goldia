
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "¿Cuál es el tiempo de respuesta para mi consulta?",
      answer: "El tiempo máximo de respuesta para cualquier consulta es de 4 horas durante nuestro horario laboral (8:00 a 18:00 GMT-5). Fuera de este horario, te responderemos al inicio del siguiente día laboral."
    },
    {
      question: "¿Cuánto tiempo toma crear una joya personalizada?",
      answer: "Desde la aprobación de la cotización y diseño, el tiempo mínimo para la finalización de una pieza es de 72 horas. El tiempo exacto dependerá de la complejidad de la joya y se especificará en la cotización."
    },
    {
      question: "¿Qué materiales utilizan para las joyas?",
      answer: "Trabajamos principalmente con oro y plata de alta calidad. Para piedras preciosas y otros materiales específicos, podemos discutirlo durante el proceso de diseño para encontrar las mejores opciones que se adapten a tu visión."
    },
    {
      question: "¿Puedo enviar imágenes generadas por IA como referencia?",
      answer: "¡Absolutamente! Aceptamos imágenes generadas por IA como referencia para tu diseño. Estas pueden ser muy útiles para comunicar tu visión. Nuestro equipo trabajará para convertir esas referencias en joyas reales y funcionales."
    },
    {
      question: "¿Cómo funciona el proceso de cotización?",
      answer: "Una vez que nos compartas tu idea y preferencias, nuestro equipo evaluará los materiales, complejidad del diseño y tiempo de producción para enviarte una cotización detallada dentro de las 4 horas siguientes (en horario laboral)."
    },
    {
      question: "¿Puedo modificar el diseño después de aprobarlo?",
      answer: "Pequeñas modificaciones son posibles en etapas tempranas del proceso. Cambios significativos después de comenzar la producción pueden implicar costos adicionales y extender el tiempo de entrega."
    }
  ];

  return (
    <section className="py-16 bg-secondary" id="faq">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
          <p className="text-muted-foreground text-lg">
            Resolvemos tus dudas sobre nuestro proceso de creación de joyas personalizadas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
