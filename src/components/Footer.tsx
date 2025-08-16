import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-lg">M</span>
              </div>
              <span className="text-xl font-bold">Magazin</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Eng sifatli mahsulotlar va tezkor yetkazib berish xizmati bilan 
              sizga xizmat qilishdan mamnunmiz.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Tezkor havolalar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Bosh sahifa</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Mahsulotlar</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Kategoriyalar</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Chegirmalar</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">Aloqa</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Aloqa ma'lumotlari</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">+998 90 123 45 67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">info@magazin.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">Toshkent, O'zbekiston</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Yangiliklar</h3>
            <p className="text-primary-foreground/80 text-sm">
              Yangi mahsulotlar va chegirmalar haqida birinchi bo'lib biling.
            </p>
            <div className="space-y-2">
              <Input 
                placeholder="Email manzilingiz"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm" className="w-full">
                Obuna bo'lish
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Magazin. Barcha huquqlar himoyalangan.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Maxfiylik siyosati
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors">
              Foydalanish shartlari
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;