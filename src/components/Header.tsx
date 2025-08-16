import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">Y.U</span>
            </div>
            <span className="text-xl font-bold text-primary">SAFONU</span>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Mahsulotlarni qidiring..." 
                className="pl-10 bg-accent/50 border-none"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Bosh sahifa</Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">Mahsulotlar</Link>
            <Link to="/categories" className="text-foreground hover:text-primary transition-colors">Kategoriyalar</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Aloqa</Link>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            
            <Link to="/login">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <User className="h-4 w-4 mr-2" />
                Kirish
              </Button>
            </Link>

            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input 
                  placeholder="Mahsulotlarni qidiring..." 
                  className="pl-10 bg-accent/50 border-none"
                />
              </div>
            </div>
            <Link to="/" className="block py-2 text-foreground hover:text-primary">Bosh sahifa</Link>
            <Link to="/products" className="block py-2 text-foreground hover:text-primary">Mahsulotlar</Link>
            <Link to="/categories" className="block py-2 text-foreground hover:text-primary">Kategoriyalar</Link>
            <Link to="/contact" className="block py-2 text-foreground hover:text-primary">Aloqa</Link>
            <Link to="/login">
              <Button variant="outline" size="sm" className="w-full mt-4">
                <User className="h-4 w-4 mr-2" />
                Kirish
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;