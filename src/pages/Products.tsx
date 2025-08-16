import Header from "@/components/Header";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default ProductsPage;
