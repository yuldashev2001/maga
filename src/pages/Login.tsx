import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="container mx-auto px-4 py-20 max-w-md">
      <h1 className="text-3xl font-bold mb-6 text-center">Kirish</h1>
      <form className="space-y-4">
        <Input placeholder="Email" type="email" required />
        <Input placeholder="Parol" type="password" required />
        <Button type="submit" className="w-full">Kirish</Button>
      </form>
    </main>
    <Footer />
  </div>
);

export default LoginPage;
