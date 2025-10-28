import { Button } from "@/components/ui/button";

interface ProductFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "all", name: "Все товары" },
  { id: "care", name: "Уход за кузовом" },
  { id: "wipers", name: "Стеклоочистители" },
  { id: "protection", name: "Защита" },
  { id: "cleaning", name: "Очистители" },
];

const ProductFilter = ({ selectedCategory, onCategoryChange }: ProductFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant={selectedCategory === category.id ? "default" : "outline"}
          onClick={() => onCategoryChange(category.id)}
          className="transition-all duration-300"
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default ProductFilter;
