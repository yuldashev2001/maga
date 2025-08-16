import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-grocery.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-r from-accent/50 to-accent/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Yangi va 
                <span className="text-primary"> Sifatli</span>
                <br />
                Mahsulotlar
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Oziq-ovqat va kundalik ehtiyoj mahsulotlarini eng yaxshi narxlarda, 
                tezkor yetkazib berish bilan.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button size="lg" className="group bg-primary hover:bg-primary-glow transition-all duration-300">
                  Xarid qilishni boshlash
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/categories">
                <Button variant="outline" size="lg">
                  Katalogni ko'rish
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Tezkor yetkazib berish</p>
                  <p className="text-xs text-muted-foreground">24 soat ichida</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">Sifat kafolati</p>
                  <p className="text-xs text-muted-foreground">100% asl mahsulot</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">24/7 xizmat</p>
                  <p className="text-xs text-muted-foreground">Doimo ochiq</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={heroImage} 
                alt="Fresh grocery products" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-secondary-foreground font-bold">50%</span>
                </div>
                <div>
                  <p className="font-medium text-sm">Chegirma</p>
                  <p className="text-xs text-muted-foreground">Yangi mijozlar uchun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;