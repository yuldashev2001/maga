import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ContactPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-3xl font-bold mb-4">Aloqa</h1>
      <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
        Savollaringiz yoki takliflaringiz bormi? Biz bilan bog‘lanish uchun quyidagi email manzilga yozing yoki telefon raqamimizga qo‘ng‘iroq qiling.
      </p>
      <p className="font-semibold">yuldashevotkirbek2001@gmail.com   +998 94 013 70 00</p>
    </main>
    <Footer />
  </div>
);

export default ContactPage;
