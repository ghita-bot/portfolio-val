import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import PhotoBreak from "@/components/PhotoBreak";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Marquee />

      <Services />

      <PhotoBreak />

      <CTA />

      <Footer />
    </main>
  );
}