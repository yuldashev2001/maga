import { Card } from "@/components/ui/card";
import { Apple, Coffee, Shirt, Gamepad2, Baby, Home } from "lucide-react";
import { useCategories } from "@/hooks/use-categories";

const Categories = () => {
  const { data: categories = [], isLoading } = useCategories();

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mahsulot Kategoriyalari
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sizga kerakli barcha mahsulotlarni bir joyda toping
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <p className="text-center col-span-full">Yuklanmoqda...</p>
          ) : (
            categories.map((category) => {
              const IconComponent = Apple; // placeholder icon
              return (
                <Card 
                  key={category.id}
                  className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group border-border/50 hover:border-primary/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-green-100 text-green-600 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Card>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Categories;