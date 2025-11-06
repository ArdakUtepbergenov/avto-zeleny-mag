import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import ProductFilter from "@/components/ProductFilter";
import ContactButtons from "@/components/ContactButtons";

const products = [
  { id: 1, name: "Реле регулировать", price: "1000", image: "images/product1.jpg", category: "electronics" },
  { id: 2, name: "Дворник 2шт", price: "1000", image: "images/product2.jpg", category: "wipers" },
  { id: 3, name: "Органик", price: "1500", image: "images/product3.jpg", category: "care" },
  { id: 4, name: "Порог наклейка 4шт", price: "1000", image: "images/product4.jpg", category: "accessories" },
  { id: 5, name: "Москитная сетка", price: "500", image: "images/product5.jpg", category: "accessories" },
  { id: 6, name: "КПП ручка", price: "5000", image: "images/product6.jpg", category: "interior" },
  { id: 7, name: "Освежитель воздуха", price: "300", image: "images/product7.jpg", category: "care" },
  { id: 8, name: "Заглушки", price: "500", image: "images/product8.jpg", category: "accessories" },
  { id: 9, name: "Модулятор Type-S USB", price: "2000", image: "images/product9.jpg", category: "electronics" },
  { id: 10, name: "Шторки", price: "2200", image: "images/product10.jpg", category: "accessories" },
  { id: 11, name: "Очиститель универсальный", price: "800", image: "images/product11.jpg", category: "cleaning" },
  { id: 12, name: "Средство по борьбе с ржавчиной", price: "500", image: "images/product12.jpg", category: "cleaning" },
  { id: 13, name: "Очиститель карбюратора", price: "500", image: "images/product13.jpg", category: "cleaning" },
  { id: 14, name: "Тряпка резиновая", price: "400", image: "images/product14.jpg", category: "cleaning" },
  { id: 15, name: "Матовое полирующее средство", price: "1200", image: "images/product15.jpg", category: "care" },
  { id: 16, name: "Кондиционер кожи, матовой полироль", price: "2000", image: "images/product16.jpg", category: "care" },
  { id: 17, name: "Провод саб", price: "2000", image: "images/product17.jpg", category: "electronics" },
  { id: 18, name: "Чернитель резины", price: "1500", image: "images/product18.jpg", category: "care" },
  { id: 19, name: "Type’s USB", price: "700", image: "images/product19.jpg", category: "electronics" },
  { id: 20, name: "Тряпка 2-х сторонняя, 30х40 - 400тг, 40х60 - 600тг", price: "400–600", image: "images/product20.jpg", category: "cleaning" },
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
