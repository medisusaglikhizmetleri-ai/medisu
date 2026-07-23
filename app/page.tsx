import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Certificates from "@/components/Certificates";
import TrustSection from "@/components/TrustSection";
import Districts from "@/components/Districts";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollProgress />

      <Header />

      <Hero />

      <Stats />

      <WhyUs />

      <About />

      <Services />

      <HowItWorks />

      <Certificates />

      <TrustSection />

      <Districts />

      <Testimonials />

      <FAQ />

      <CTA />

      <Contact />

      <Footer />

      <BackToTop />

      <FloatingWhatsapp />
    </main>
  );
}
