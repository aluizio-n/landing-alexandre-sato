import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Locations from "./components/Locations";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { WhatsAppProvider } from "./components/WhatsAppModal";

export default function Home() {
  return (
    <WhatsAppProvider>
      <header>
        <Hero />
      </header>

      <main>
        <Services />
        <BeforeAfter />
        <Locations />
      </main>

      <Footer />
      <WhatsAppButton />
    </WhatsAppProvider>
  );
}
