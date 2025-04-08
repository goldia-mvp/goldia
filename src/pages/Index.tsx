
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProcessSection from '@/components/ProcessSection';
import GallerySection from '@/components/GallerySection';
import CategoriesSection from '@/components/CategoriesSection';
import Footer from '@/components/Footer';
import Chatbot from '@/components/Chatbot';
import FaqSection from '@/components/FaqSection';

const Index = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const handleStartProcess = () => {
    // Automatically open the chatbot when the CTA button is clicked
    setChatbotOpen(true);
    
    // Scroll to top to ensure chatbot is visible
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Trigger chatbot open state (will be caught by Chatbot component via props)
    document.dispatchEvent(new CustomEvent('openChatbot'));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero onStartProcess={handleStartProcess} />
        <ProcessSection />
        <GallerySection />
        <CategoriesSection />
        <FaqSection />
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;
