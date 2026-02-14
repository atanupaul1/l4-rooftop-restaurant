import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { MenuHighlights } from "@/components/menu-highlights";
import { ReservationForm } from "@/components/reservation-form";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <div className="relative z-10 bg-background">
        <MenuHighlights />
        <ReservationForm />
        <Footer />
      </div>
    </main>
  );
}
