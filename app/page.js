import Homepage from "@/Components/Homepage";
import AboutUs from "@/Components/AboutUs";
import Service from "@/Components/Service";
import Pricing from "@/Components/Pricing";
import SB from "@/Components/SB";
import Contact from "@/Components/Contact";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <main>
      <Homepage />
      <AboutUs />
      <Service />
      <Pricing />
      <SB/>
      <Contact />
      <Footer />
    </main>
  );
}