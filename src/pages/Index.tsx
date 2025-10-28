import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import ContactButtons from "@/components/ContactButtons";

// Sample product data - replace with real data
const products = [
  {
    id: 1,
    name: "Чернитель шин Professional",
    price: "2500",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=500&fit=crop",
    category: "care"
  },
  {
    id: 2,
    name: "Щетки стеклоочистителя Premium",
    price: "3500",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=500&fit=crop",
    category: "wipers"
  },
  {
    id: 3,
    name: "Удалитель ржавчины",
    price: "1800",
    image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=500&h=500&fit=crop",
    category: "cleaning"
  },
  {
    id: 4,
    name: "Защитная полироль кузова",
    price: "4200",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=500&h=500&fit=crop",
    category: "protection"
  },
  {
    id: 5,
    name: "Средство для мытья стекол",
    price: "1200",
    image: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=500&h=500&fit=crop",
    category: "cleaning"
  },
  {
    id: 6,
    name: "Воск для кузова Premium",
    price: "3800",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=500&fit=crop",
    category: "care"
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section id="catalog" className="py-16">
        <div className="container px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наш каталог
          </h2>
          
          <ProductFilter 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">О нас</h2>
            <p className="text-lg text-muted-foreground">
              Avtoaksessuary06 — ваш надежный партнер в уходе за автомобилем. 
              Мы предлагаем качественные аксессуары и средства по уходу за автомобилем 
              по доступным ценам с доставкой по всему Казахстану.
            </p>
          </div>
        </div>
      </section>

      <ContactButtons />

      <footer className="py-8 border-t">
        <div className="container px-4 text-center text-muted-foreground">
          <p>© 2024 Avtoaksessuary06. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
