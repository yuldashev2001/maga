import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart } from "lucide-react";
import { useProducts } from "@/hooks/use-products";

const FeaturedProducts = () => {
  const { data: products = [], isLoading } = useProducts();

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mashhur Mahsulotlar
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Eng ko'p sotilayotgan va sifatli mahsulotlar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <p className="text-center col-span-full">Yuklanmoqda...</p>
          ) : (
            products.map((product) => (
              <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50">
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.discount && (
                    <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                      -{product.discount}
                    </Badge>
                  )}
                  <Button 
                    variant="ghost" 
                    size="icon"
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="p-4 space-y-3">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {product.name}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-lg font-bold text-foreground">
                          {product.price} so'm
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            {product.originalPrice} so'm
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Button size="sm" className="bg-primary hover:bg-primary-glow">
                      <ShoppingCart className="h-4 w-4 mr-1" />
                      Qo'shish
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Barcha mahsulotlarni ko'rish
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;