import Hero from "./components/Hero";
import Services from "./components/Services";
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
        <Locations />
      </main>

      <Footer />
      <WhatsAppButton />
    </WhatsAppProvider>
  );
}
