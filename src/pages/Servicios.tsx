
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';

const Servicios = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Nuestros Servicios</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Página en construcción. Pronto encontrarás aquí información detallada sobre todos nuestros servicios.
          </p>
        </div>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Servicios;
