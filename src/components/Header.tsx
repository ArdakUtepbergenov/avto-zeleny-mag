import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">Avtoaksessuary06</h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#catalog" className="text-sm font-medium transition-colors hover:text-primary">
            Каталог
          </a>
          <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
            О нас
          </a>
          <a href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Контакты
          </a>
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
