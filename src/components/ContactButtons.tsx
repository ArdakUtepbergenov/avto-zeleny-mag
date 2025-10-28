import { Button } from "@/components/ui/button";
import { MessageCircle, Send } from "lucide-react";

const ContactButtons = () => {
  const whatsappNumber = "77777777777"; // Replace with actual number
  const telegramUsername = "avtoaksessuary06"; // Replace with actual username

  return (
    <section id="contact" className="py-16 bg-accent/30">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Свяжитесь с нами</h2>
          <p className="text-lg text-muted-foreground">
            Для оформления заказа и уточнения деталей свяжитесь с нами удобным способом
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg"
              className="gap-2"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="gap-2"
              onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
            >
              <Send className="h-5 w-5" />
              Telegram
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            Доставка по всему Казахстану
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactButtons;
