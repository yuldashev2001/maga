import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingCart } from "lucide-react";

const CartPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-20 text-center">
      <ShoppingCart className="h-10 w-10 mx-auto text-primary mb-4" />
      <h1 className="text-3xl font-bold mb-2">Savat</h1>
      <p className="text-muted-foreground">Hozircha savatda mahsulot yo‘q.</p>
    </main>
    <Footer />
  </div>
);

export default CartPage;
