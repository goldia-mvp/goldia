
import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Image, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip } from '@/components/ui/tooltip';
import { TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { toast } from 'sonner';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  images?: string[];
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: '¡Hola! Soy el asistente de GoldIA. ¿Cómo puedo ayudarte a crear tu joya personalizada?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim() && selectedImages.length === 0) return;
    
    // Process images if any
    const imageUrls: string[] = [];
    for (const image of selectedImages) {
      const imageUrl = URL.createObjectURL(image);
      imageUrls.push(imageUrl);
    }
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date(),
      images: imageUrls.length > 0 ? imageUrls : undefined,
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setSelectedImages([]);
    setImagePreviewUrls([]);
    
    // Simulate bot typing
    setIsTyping(true);
    
    // Simulate bot response after delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
      
      // Show toast notification
      if (imageUrls.length > 0) {
        toast.success('Imágenes recibidas. Nuestro equipo las revisará pronto.', {
          duration: 5000,
        });
      }
    }, 1500);
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('hola') || lowerInput.includes('buenos días') || lowerInput.includes('buenas tardes')) {
      return '¡Hola! Estoy aquí para ayudarte a crear tu joya personalizada. ¿Puedes contarme qué tipo de joya estás buscando?';
    }
    
    if (lowerInput.includes('anillo') || lowerInput.includes('collar') || lowerInput.includes('pulsera') || lowerInput.includes('arete')) {
      return 'Excelente elección. Para ayudarte mejor, ¿podrías proporcionar más detalles sobre el diseño que imaginas? También puedes enviar imágenes de referencia si lo deseas.';
    }
    
    if (lowerInput.includes('precio') || lowerInput.includes('costo') || lowerInput.includes('valor')) {
      return 'El precio dependerá del tipo de joya, materiales y complejidad del diseño. Una vez que tengamos todos los detalles, nuestro equipo te enviará una cotización personalizada dentro de las próximas 4 horas (en horario laboral).';
    }
    
    if (lowerInput.includes('tiempo') || lowerInput.includes('demora') || lowerInput.includes('días')) {
      return 'Desde la aprobación de la cotización, el tiempo mínimo para la finalización de una pieza es de 72 horas. El tiempo exacto dependerá de la complejidad de la joya y se especificará en la cotización.';
    }
    
    if (lowerInput.includes('material') || lowerInput.includes('oro') || lowerInput.includes('plata')) {
      return 'Trabajamos principalmente con oro y plata. Si estás interesado en piedras preciosas u otros materiales específicos, podemos discutirlo durante el proceso de diseño.';
    }
    
    if (selectedImages.length > 0 || lowerInput.includes('imagen') || lowerInput.includes('foto') || lowerInput.includes('referencia')) {
      return 'Gracias por compartir estas referencias. Nuestro equipo de diseño las revisará y te contactará pronto para discutir más detalles sobre tu diseño personalizado.';
    }
    
    return 'Gracias por compartir tus ideas. Nuestro equipo de joyeros revisará tu solicitud y te contactará dentro de las próximas 4 horas (en horario laboral) para discutir más detalles y proporcionarte una cotización personalizada.';
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      
      if (filesArray.length > 0) {
        setSelectedImages((prevImages) => [...prevImages, ...filesArray]);
        
        // Create preview URLs
        const newImageUrls = filesArray.map(file => URL.createObjectURL(file));
        setImagePreviewUrls((prevUrls) => [...prevUrls, ...newImageUrls]);
      }
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    setImagePreviewUrls(prevUrls => {
      // Revoke the URL to avoid memory leaks
      URL.revokeObjectURL(prevUrls[index]);
      return prevUrls.filter((_, i) => i !== index);
    });
  };

  const handleAttachImage = () => {
    fileInputRef.current?.click();
  };

  return (
    <>
      <div className="chatbot-bubble">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={toggleChat}
                className={`rounded-full w-14 h-14 shadow-lg ${
                  isOpen ? 'bg-destructive hover:bg-destructive/90' : 'bg-gold hover:bg-gold-dark'
                }`}
              >
                {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>{isOpen ? 'Cerrar chat' : 'Diseña tu joya'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {isOpen && (
          <div className="absolute bottom-16 right-0 w-96 h-[500px] bg-card rounded-lg shadow-2xl border border-border overflow-hidden flex flex-col">
            <div className="bg-gold p-4 text-white flex justify-between items-center">
              <h3 className="font-bold">Chat de Diseño</h3>
              <Button variant="ghost" size="sm" className="text-white hover:bg-gold-dark p-1 h-auto" onClick={toggleChat}>
                <X size={18} />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.sender === 'user' 
                        ? 'bg-gold/10 text-foreground' 
                        : 'bg-secondary text-foreground'
                    }`}
                  >
                    {message.images && message.images.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-2">
                        {message.images.map((img, index) => (
                          <img 
                            key={index} 
                            src={img} 
                            alt="Uploaded" 
                            className="w-24 h-24 object-cover rounded-md"
                          />
                        ))}
                      </div>
                    )}
                    <p>{message.content}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-secondary rounded-lg p-3 flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 rounded-full bg-muted-foreground animate-pulse [animation-delay:0.4s]"></div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {imagePreviewUrls.length > 0 && (
              <div className="px-4 py-2 bg-secondary/50 flex gap-2 overflow-x-auto">
                {imagePreviewUrls.map((url, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={url} 
                      alt="Preview" 
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <button
                      className="absolute -top-2 -right-2 bg-destructive text-white rounded-full w-5 h-5 flex items-center justify-center"
                      onClick={() => removeImage(index)}
                    >
                      <X size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <form onSubmit={handleSubmit} className="border-t border-border p-3 flex gap-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                className="hidden"
                accept="image/*"
                multiple
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-gold"
                onClick={handleAttachImage}
              >
                <Image size={20} />
              </Button>
              <Textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="min-h-10 resize-none flex-1"
                rows={1}
              />
              <Button type="submit" size="icon" className="bg-gold hover:bg-gold-dark text-white">
                <Send size={18} />
              </Button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default Chatbot;
