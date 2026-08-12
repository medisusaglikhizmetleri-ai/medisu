import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Districts from "@/components/Districts";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <Header />

      <main className="overflow-hidden bg-white">
        <Hero />

        <Stats />

        <Services />

        <HowItWorks />

        <About />

        <Testimonials />

        <Districts />

        <FAQ />

        <Contact />
      </main>

      <Footer />

      <BackToTop />

      <FloatingWhatsapp />
    </>
  );
}
