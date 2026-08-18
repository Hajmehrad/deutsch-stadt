import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/shared/Footer";

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
