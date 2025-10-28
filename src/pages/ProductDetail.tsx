import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Send } from "lucide-react";
import Header from "@/components/Header";

// Sample product data - in real app, fetch based on ID
const productData: Record<string, any> = {
  "1": {
    name: "Чернитель шин Professional",
    price: "2500",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=800&fit=crop",
    category: "Уход за кузовом",
    description: "Профессиональное средство для чернения шин. Придает глубокий черный цвет и блеск, защищает от выцветания и растрескивания. Длительный эффект до 4 недель.",
    features: [
      "Глубокое проникновение в структуру резины",
      "Защита от UV-лучей",
      "Водоотталкивающий эффект",
      "Простое нанесение"
    ]
  },
  "2": {
    name: "Щетки стеклоочистителя Premium",
    price: "3500",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=800&fit=crop",
    category: "Стеклоочистители",
    description: "Бескаркасные щетки стеклоочистителя премиум-класса. Обеспечивают идеальную очистку в любую погоду. Универсальное крепление.",
    features: [
      "Бесшумная работа",
      "Равномерное прилегание по всей длине",
      "Износостойкая резина",
      "Срок службы до 2 лет"
    ]
  },
  "3": {
    name: "Удалитель ржавчины",
    price: "1800",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=800&fit=crop",
    category: "Очистители",
    description: "Эффективное средство для удаления ржавчины с кузова автомобиля. Безопасно для лакокрасочного покрытия.",
    features: [
      "Быстрое действие",
      "Не повреждает ЛКП",
      "Подходит для хрома и металла",
      "Экономичный расход"
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productData[id || "1"];

  if (!product) {
    return <div>Товар не найден</div>;
  }

  const whatsappNumber = "77777777777";
  const telegramUsername = "avtoaksessuary06";
  const whatsappMessage = `Здравствуйте! Интересует товар: ${product.name}`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 gap-2"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="h-4 w-4" />
          Назад к каталогу
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <img 
              src={product.image} 
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-4xl font-bold text-primary">{product.price} ₸</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Описание</h2>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Характеристики</h2>
              <ul className="space-y-2">
                {product.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 space-y-3">
              <p className="font-semibold">Для заказа свяжитесь с нами:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  className="gap-2 flex-1"
                  onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp
                </Button>
                <Button 
                  variant="secondary"
                  className="gap-2 flex-1"
                  onClick={() => window.open(`https://t.me/${telegramUsername}`, '_blank')}
                >
                  <Send className="h-5 w-5" />
                  Telegram
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Доставка по всему Казахстану
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-8 border-t mt-16">
        <div className="container px-4 text-center text-muted-foreground">
          <p>© 2024 Avtoaksessuary06. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetail;
